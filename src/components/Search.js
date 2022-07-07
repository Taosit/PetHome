import {useState, useEffect} from "react";
import {useRef} from "react";

function Search({formData, setFormData, containerRef, handleSearch}) {
  const formRef = useRef()
  const [showSearchBar, setShowSearchBar] = useState(false);

  useEffect(() => {
    if (showSearchBar) {
      !formRef.current.classList.contains("form-body-show") && formRef.current.classList.add("form-body-show")
      containerRef.current.style.paddingTop = "108px";
    } else {
      formRef.current.classList.remove("form-body-show")
      containerRef.current.style.paddingTop = "0";
    }
  }, [showSearchBar])

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]:e.target.value
    }))
  }

  return (
    <form className="search-bar" onSubmit={(e) => handleSearch(e)}>
      <div className="title">
        <h2 className="brand-name">Pet Home</h2>
      </div>
      <div className="form-body" ref={formRef}>
        <div className="input-group">
          <label htmlFor="type">Pet: </label>
          <select name="type" id="type" value={formData?.type} onChange={(e) => handleChange(e)}>
            <option value="">--Select--</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="location">Location: </label>
          <input type="text" id="location" placeholder="City, State" value={formData?.location}
                 onChange={(e) => handleChange(e)}
          />
        </div>
        <button className="button search-button">Search</button>
      </div>
      <button type="button" className="nav-toggle" onClick={(e) => setShowSearchBar(prev => !prev)}>
        <span className="hamburger"></span>
      </button>
    </form>
  );
}

export default Search;