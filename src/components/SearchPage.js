import React from "react";
import { useEffect, useRef, useState } from "react";
import { requestData } from "../utils/requests";
import Search from "./Search";
import settingContainerIcon from "../assets/setting-container.png";
import settingIcon from "../assets/settings.png";
import ErrorMessage from "./ErrorMessage";
import PetList from "./PetList";
import PetModal from "./PetModal";
import FilterModal from "./filterModal";

function SearchPage({
  pets,
  setPets,
  loading,
  setLoading,
  error,
  setError,
  hasMore,
  setHasMore,
  pageNumber,
  setPageNumber,
  formData,
  setFormData,
  handleSearch,
  setOnInitialPage,
}) {
  const [viewedPet, setViewedPet] = useState(null);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [filteredPets, setFilteredPets] = useState(null);
  const [extraSearchParams, setExtraSearchParams] = useState({});
  const [showFilterIcon, setShowFilterIcon] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const containerRef = useRef();

  useEffect(() => {
    if (!pets) return;
    if (pets.length === 0) {
      setShowFilterIcon(false);
      return;
    }
    if (filteredPets && filteredPets.length === 0) {
      setShowFilterIcon(false);
      return;
    }
    setShowFilterIcon(true);
  }, [pets, filteredPets]);

  useEffect(() => {
    if (pageNumber === 1) return;
    const handlePageLoad = async () => {
      try {
        const response = await requestData(
          pageNumber,
          formData.type,
          formData.location,
          extraSearchParams
        );
        if (filteredPets) {
          setFilteredPets((prev) => [...prev, ...response.data.animals]);
        } else {
          setPets((prev) => [...prev, ...response.data.animals]);
        }
        setHasMore(pageNumber < response.data.pagination.total_pages);
        setLoadingMore(false);
        setError({ hasError: false, errorMessage: "" });
      } catch (e) {
        setLoadingMore(false);
        setError({ hasError: true, errorMessage: "Cannot load new page." });
      }
    };
    handlePageLoad();
  }, [pageNumber]);

  const handleScroll = (e) => {
    if (loading) return;
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollHeight - scrollTop - clientHeight < 200) {
      setLoadingMore(true);
    }
    if (scrollHeight - scrollTop - clientHeight < 100) {
      if (!hasMore || cooldown) return;
      setCooldown(true);
      setTimeout(() => {
        setCooldown(false);
      }, 1000);
      setPageNumber((prev) => prev + 1);
    }
  };

  const filterPets = async (e, params) => {
    e.preventDefault();
    setExtraSearchParams(params);
    setPageNumber(1);
    setLoading(true);
    try {
      const response = await requestData(
        1,
        formData.type,
        formData.location,
        params
      );
      setFilteredPets(response.data.animals);
      setHasMore(pageNumber < response.data.pagination.total_pages);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(true);
    }
  };

  const handleSearchPet = async (e) => {
    setFilteredPets(null);
    await handleSearch(e);
  };

  return (
    <div
      className="result-page"
      ref={containerRef}
      onScroll={(e) => handleScroll(e)}
    >
      <div className="container">
        <div className="search-bar-container">
          <Search
            containerRef={containerRef}
            formData={formData}
            setFormData={setFormData}
            handleSearch={handleSearchPet}
            setOnInitialPage={setOnInitialPage}
          />
          {showFilterIcon && (
            <>
              <img
                src={settingContainerIcon}
                className="filter-container-image"
                alt="filter"
                onClick={() => setFilterModalOpen(true)}
                hidden={!(pets || filteredPets)}
              />
              <img
                src={settingIcon}
                className="filter-image"
                hidden={!(pets || filteredPets)}
                onClick={() => setFilterModalOpen(true)}
              />
            </>
          )}
        </div>
        <div className="content">
          {loading ? (
            <div className="loading-page">
              <div className="loader"></div>
            </div>
          ) : error.hasError ? (
            <ErrorMessage message={error.errorMessage} />
          ) : (
            <PetList
              pets={filteredPets || pets}
              hasMore={hasMore}
              setViewedPet={setViewedPet}
              loading={loading}
            />
          )}
          {loadingMore && (
            <div className="bottom-loader-container">
              <div className="loader"></div>
            </div>
          )}
          {viewedPet && (
            <PetModal viewedPet={viewedPet} setViewedPet={setViewedPet} />
          )}
          {filterModalOpen && (
            <FilterModal
              setFilterModalOpen={setFilterModalOpen}
              formData={formData}
              filterPets={filterPets}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
