import React, {useState, useEffect} from "react";
import catIcon from "../assets/cat.png"
import dogIcon from "../assets/dog.png"

function InitialPage({formData, setFormData, setOnInitialPage, handleSearch}) {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    setFormData(prev => ({...prev, location: `${formatString(city)}, ${formatString(state)}`}))
  }, [city, state])


  const getStyle = (petOption) => {
    const transform = formData.type === petOption ? "scale(1.1)" : "scale(1)";
    const filter = formData.type === petOption ? "brightness(1.2)" : "brightness(1)";
    return {transform, filter}
  }

  const formatString = (str) => {
    if (!str) return "";
    return `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`
  }

  const launchSearch = (e) => {
    handleSearch(e)
      .then(() => {
        setOnInitialPage(false)
      })
  }

  return (
    <div className="initial-page">
      <div className="initial-page-modal">
        <p className="search-text">I'm looking for a</p>
        <div className="pets-option-container">
          <div className="pet-option-container" onClick={() => setFormData(prev => ({...prev, type: "Cat"}))}
          style={{borderColor: formData.type === "Cat" ? "#ffb7d8" : "transparent"}}>
            <img className="pet-icon" src={catIcon} alt="cat" style={getStyle("Cat")}/>
            <span className="pet-label">Cat</span>
          </div>
          <div className="pet-option-container"  onClick={() => setFormData(prev => ({...prev, type: "Dog"}))}
               style={{borderColor: formData.type === "Dog" ? "#ffb7d8" : "transparent"}}>
            <img className="pet-icon" src={dogIcon} alt="dog" style={getStyle("Dog")}/>
            <span className="pet-label">Dog</span>
          </div>
        </div>
        <div className="location-text">
          <div className="sub-location-text">
            <p className="search-text">In</p>
            <input className="modal-input" type="text" value={city}
                   onChange={(e) => setCity(e.target.value)}/>
            <p className="search-text">(City),</p>
          </div>
          <div className="sub-location-text">
            <input className="modal-input" type="text" value={state}
                 onChange={(e) => setState(e.target.value)}/>
            <p className="search-text">(State/Province).</p>
          </div>
        </div>
        <div className="launch-search-button-container">
          <button className="button launch-search-button" onClick={(e) => launchSearch(e)}>Launch Search</button>
        </div>
      </div>
    </div>
  );
}

export default InitialPage;