import React, {useState, useEffect, useRef} from "react";
import Search from "./components/Search";
import PetList from "./components/PetList";
import PetModal from "./components/PetModal";
import {requestData} from "./utils/requests";
import filterIcon from "./assets/filter.png"
import FilterModal from "./components/filterModal";

function App() {
  const [pets, setPets] = useState(null)
  const [viewedPet, setViewedPet] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
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
      } catch (e) {
        console.log(e)
        setLoading(false)
        setError(true)
      }
    }
    handlePageLoad()
  }, [])

  useEffect(() => {
    if (formData.type !== "" || formData.location !== "") {
      setPets(null)
      setFilteredPets(null)
    }
  }, [formData])

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
      } catch (e) {
        setLoading(false)
        setError(true)
      }
    }
    handlePageLoad()
  }, [pageNumber])

  const handleScroll = (e) => {
    const {scrollTop, scrollHeight, clientHeight} = e.currentTarget;
    if (scrollHeight - scrollTop - clientHeight < 5) {
      console.log("scrolled to bottom", "hasMore:", hasMore)
      if (!hasMore) return
      setPageNumber(prev => prev + 1);
    }
  }

  if (error) return <h1>Error</h1>

  if (loading) return <h1>Loading...</h1>

  return (
    <div className="page" ref={containerRef} onScroll={(e) => handleScroll(e)}>
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
      {pets && <PetList pets={filteredPets || pets} hasMore={hasMore} setViewedPet={setViewedPet} loading={loading}/>}
      {viewedPet && <PetModal viewedPet={viewedPet} setViewedPet={setViewedPet}/>}
      {filterModalOpen && <FilterModal setFilterModalOpen={setFilterModalOpen} formData={formData} setFilteredPets={setFilteredPets}
                                       setHasMore={setHasMore} setLoading={setLoading} setError={setError} pageNumber={pageNumber} setPageNumber={setPageNumber}
                                       extraSearchParams={extraSearchParams} setExtraSearchParams={setExtraSearchParams}/>}
    </div>
    </div>
  );
}

export default App;
