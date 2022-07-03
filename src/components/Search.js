import {useState, useEffect} from "react";
import {requestData} from "../utils/requests";
import {useRef} from "react";

function Search({pageNumber, setPageNumber, setPets, setLoading, setHasMore, setFilteredPets,
                  setError, formData, setFormData, containerRef}) {
  const formRef = useRef()
  const [showSearchBar, setShowSearchBar] = useState(false);

  useEffect(() => {
    if (showSearchBar) {
      formRef.current.classList.remove("form-body-hidden")
      containerRef.current.style.paddingTop = "102px";
    } else {
      !formRef.current.classList.contains("form-body-hidden") && formRef.current.classList.add("form-body-hidden")
      containerRef.current.style.paddingTop = "0";
    }
  }, [showSearchBar])

  const handleSearch = async (e) => {
    e.preventDefault();
    setPets(null)
    setFilteredPets(null);
    setPageNumber(1)
    if (formData.type.length === 0 || formData.location.length === 0) {
      setError({hasError: true, errorMessage: "Incomplete field. Make sure to provide animal type and location."})
      return;
    }
    setLoading(true);
    try {
      const response = await requestData(1, formData.type, formData.location);
      setPets(response.data.animals);
      setHasMore(pageNumber < response.data.pagination.total_pages)
      setLoading(false)
      setError({hasError: false, errorMessage: ""})
    } catch (e) {
      setLoading(false)
      setError({hasError: true,
        errorMessage: "The address should be a valid zip code or in the format of City, State or Province."})
    }
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]:e.target.value
    }))
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
          <input type="text" id="location" placeholder="zip code or city, state" value={formData?.location}
                 onChange={(e) => handleChange(e)}
          />
        </div>
        <button className="search-button">Search</button>
      </div>
      <button type="button" className="nav-toggle" onClick={(e) => setShowSearchBar(prev => !prev)}>
        <span className="hamburger"></span>
      </button>
    </form>
  );
}

export default Search;