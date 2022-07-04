import React, {useState, useEffect, useRef} from "react";
import Search from "./components/Search";
import PetList from "./components/PetList";
import PetModal from "./components/PetModal";
import {requestData} from "./utils/requests";
import filterIcon from "./assets/filter.png"
import FilterModal from "./components/filterModal";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [pets, setPets] = useState(null)
  const [viewedPet, setViewedPet] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState({hasError: false, errorMessage: ""})
  const [hasMore, setHasMore] = useState(true)
  const [pageNumber, setPageNumber] = useState(1)
  const [formData, setFormData] = useState({type: "", location: ""})
  const [filterModalOpen, setFilterModalOpen] = useState(false)
  const [filteredPets, setFilteredPets] = useState(null);
  const [extraSearchParams, setExtraSearchParams] = useState({})
  const [showFilterIcon, setShowFilterIcon] = useState(false)

  const containerRef = useRef()

  useEffect(() => {
    if (!pets) return;
    if (pets.length === 0) {
      setShowFilterIcon(false);
      return
    }
    if (filteredPets && filteredPets.length === 0) {
      setShowFilterIcon(false);
      return
    }
    setShowFilterIcon(true);
  }, [pets, filteredPets])

  useEffect(() => {
    const handlePageLoad = async () => {
      try {
        const response = await requestData(1);
        setPets(response.data.animals);
        setHasMore(pageNumber < response.data.pagination.total_pages)
        setLoading(false)
        setError({hasError: false, errorMessage: ""})
      } catch (e) {
        console.log(e)
        setLoading(false)
        setError({hasError: true, errorMessage: "Initial load failed."})
      }
    }
    handlePageLoad()
  }, [])

  useEffect(() => {
    if (pageNumber === 1) return
    const handlePageLoad = async () => {
      try {
        const response = await requestData(pageNumber, formData.type, formData.location, extraSearchParams);
        if (filteredPets) {
          setFilteredPets(prev => [...prev,  ...response.data.animals]);
        } else {
          setPets(prev => [...prev,  ...response.data.animals]);
        }
        setHasMore(pageNumber < response.data.pagination.total_pages)
        setLoading(false)
        setError({hasError: false, errorMessage: ""})
      } catch (e) {
        setLoading(false)
        setError({hasError: true, errorMessage: "Cannot load new page."})
      }
    }
    handlePageLoad()
  }, [pageNumber])

  const handleScroll = (e) => {
    const {scrollTop, scrollHeight, clientHeight} = e.currentTarget;
    if (scrollHeight - scrollTop - clientHeight < 5) {
      if (!hasMore) return
      setPageNumber(prev => prev + 1);
    }
  }

  return (
    <div className="result-page" ref={containerRef} onScroll={(e) => handleScroll(e)}>
    <div className="container" >
      <div className="search-bar-container">
        <Search setPets={setPets} setLoading={setLoading} setError={setError} setHasMore={setHasMore} setFilteredPets={setFilteredPets} containerRef={containerRef}
                pageNumber={pageNumber} setPageNumber={setPageNumber} formData={formData} setFormData={setFormData}/>
        {showFilterIcon && <div className="filter-image-container"
             onClick={() => setFilterModalOpen(true)}
             style={{display: `${pets || filteredPets ? "block" : "none"}`}}
        >
          <img src={filterIcon} alt="filter"/>
        </div>}
      </div>
      <div className="content">
        {loading && <div className="loading-page"><div className="loader"></div></div>}
        {error.hasError && <ErrorMessage message={error.errorMessage} />}
        {pets && !error.hasError && <PetList pets={filteredPets || pets} hasMore={hasMore} setViewedPet={setViewedPet} loading={loading}/>}
        {viewedPet && <PetModal viewedPet={viewedPet} setViewedPet={setViewedPet}/>}
        {filterModalOpen && <FilterModal setFilterModalOpen={setFilterModalOpen} formData={formData}
                                         setFilteredPets={setFilteredPets} setHasMore={setHasMore} setLoading={setLoading}
                                         setError={setError} pageNumber={pageNumber} setPageNumber={setPageNumber}
                                         extraSearchParams={extraSearchParams} setExtraSearchParams={setExtraSearchParams}/>}
      </div>
    </div>
    </div>
  );
}

export default App;
