import {requestData} from "../utils/requests";
import {useRef} from "react";

function Search({pageNumber, setPageNumber, setPets, setLoading, setHasMore, setFilteredPets,
                  setError, formData, setFormData, containerRef}) {
  const formRef = useRef()

  const handleSearch = async (e) => {
    e.preventDefault();
    setFilteredPets(null);
    setPageNumber(1)
    if (formData.type.length === 0 || formData.location.length === 0) return;
    setLoading(true);
    try {
      const response = await requestData(1, formData.type, formData.location);
      setPets(response.data.animals);
      setHasMore(pageNumber < response.data.pagination.total_pages)
      setLoading(false)
    } catch (e) {
      setLoading(false)
      setError(true)
    }
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]:e.target.value
    }))
  }

  const toggleNavigation = (e) => {
    console.log("toggling")
    e.preventDefault()
    if (formRef.current.classList.contains("form-body-hidden")) {
      console.log("hidden", "scrolling up")
      containerRef.current.style.paddingTop = "108px";
    } else {
      console.log("not hidden", "scrolling down")
      containerRef.current.style.paddingTop = "0";
    }
    formRef.current.classList.toggle("form-body-hidden")
  }

  return (
    <form className="search-bar" onSubmit={(e) => handleSearch(e)}>
      <div className="title">
        <h2 className="brand-name">Find A Pet</h2>
      </div>
      <div className="form-body form-body-hidden" ref={formRef}>
        <div className="input-group">
          <label htmlFor="type">Pet: </label>
          <select name="type" id="type" value={formData?.type} onChange={(e) => handleChange(e)}>
            <option value="">--Select--</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Rabbit">Rabbit</option>
            <option value="Small & Furry">Small & Furry</option>
            <option value="Bird">Bird</option>
            <option value="Horse">Horse</option>
            <option value="Barnyard">Barnyard</option>
            <option value="Scales, Fins & Other">Scales, Fins & Other</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="location">Location: </label>
          <input type="text" id="location" placeholder="zip code or city" value={formData?.location}
                 onChange={(e) => handleChange(e)}
          />
        </div>
        <button className="search-button">Search</button>
      </div>
      <button className="nav-toggle" onClick={(e) => toggleNavigation(e)}>
        <span className="hamburger"></span>
      </button>
    </form>
  );
}

export default Search;