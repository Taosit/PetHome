import React, {useState} from "react";
import {requestData} from "../utils/requests";
import {coats, breeds} from "../utils/petData";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

function FilterModal({setFilterModalOpen, formData, setFilteredPets, setHasMore, setLoading, setError,
                      pageNumber, setPageNumber, setExtraSearchParams}) {
  const petType = formData.type === "" ? "Dog" : formData.type;
  const coatsOfAnimal = coats[formData.type] || ['Hairless', 'Short', 'Medium', 'Long', 'Wire', 'Curly'];
  const initialFilterValue = {
    breed: "all",
    size: {
      small: true,
      medium: true,
      large: true,
      xlarge: true
    },
    gender: {
      male: true,
      female: true
    },
    age: {
      baby: true,
      young: true,
      adult: true,
      senior: true
    },
    environments: {
      children: false,
      dogs: false,
      cats: false
    }
  }
  if (!formData.type || coats[formData.type].length > 0) {
    const coat = {};
    coatsOfAnimal.forEach(coatType => coat[coatType] = true);
    initialFilterValue.coat = coat;
  }
  const [filters, setFilters] = useState(initialFilterValue)

  const changeFilter = (group, attribute) => {
    if (group === "breed") {
      setFilters(prev => ({
        ...prev,
        breed: attribute === "all" ? "all" : ""
      }))
    } else {
      setFilters(prev => ({
        ...prev,
        [group]: {...prev[group], [attribute]: !prev[group][attribute]}
      }))
    }
  }

  const getFilterParams = () => {
    const filterParams = {};
    for (const group in filters) {
      if (group !== "environments" && group !== "breed") {
        let filterArr = []
        for (const attribute in filters[group]) {
          if (filters[group][attribute]) {
            filterArr.push(attribute)
          }
        }
        if(filterArr.length) filterParams[group] = filterArr.join(",");
      } else if (group === "environments") {
        if(filters[group].children) filterParams.good_with_children = true;
        if(filters[group].dogs) filterParams.good_with_dogs = true;
        if(filters[group].cats) filterParams.good_with_cats = true;
      } else {
        if(breeds[petType].find(breed => breed.name === filters.breed)) {
          filterParams.breed = filters.breed;
        }
      }
    }
    return filterParams;
  }

  const filterPets = async (e) => {
    e.preventDefault();
    setFilterModalOpen(false)
    const filterParams = getFilterParams();
    setExtraSearchParams(filterParams)
    setPageNumber(1)
    setLoading(true);
    try {
      const response = await requestData(1, formData.type, formData.location, filterParams);
      setFilteredPets(response.data.animals);
      setHasMore(pageNumber < response.data.pagination.total_pages)
      setLoading(false)
    } catch (e) {
      setLoading(false)
      setError(true)
    }
  }

  const handleOnSearch = (string, results) => {
    setFilters(prev => ({
      ...prev, breed: string
    }))
  };

  const handleOnSelect = (item) => {
    setFilters(prev => ({
      ...prev, breed: item.name
    }))
  };

  return (
    <div className="overlay">
      <div className="filter-modal">
        <span className="close"
              onClick={() => setFilterModalOpen(false)}
        >x</span>
        <div className="radio-group">
          <h3 className="group-title">Breed</h3>
          <button className={`option ${filters.breed === "all" ? "selected" : ""}`} id="all"
                  onClick={() => changeFilter("breed", "all")}>All</button>
          <button className={`option ${filters.breed !== "all" ? "selected" : ""}`}  id="specified"
                  onClick={() => changeFilter("breed", "specified")}>Specified</button>
          {filters.breed !== "all" &&
            <>
              <div className="fake-margin"></div>
            <ReactSearchAutocomplete
              items={breeds[petType]}
              onSearch={handleOnSearch}
              onSelect={handleOnSelect}
              showIcon={false}
              maxResults={5}
              styling={{ zIndex: 4,
              marginTop: "8px", borderRadius: "4px", height: "34px", width: "100px"}}
            />
            </>
          }
        </div>
        <div className="radio-group">
          <h3 className="group-title">Size</h3>
          <button className={`option ${filters.size.small ? "selected" : ""}`} id="small"
                  onClick={() => changeFilter("size", "small")}>Small</button>
          <button className={`option ${filters.size.medium ? "selected" : ""}`}  id="medium-size"
                onClick={() => changeFilter("size", "medium")}>Medium</button>
          <button className={`option ${filters.size.large ? "selected" : ""}`}  id="large"
                onClick={() => changeFilter("size", "large")}>Large</button>
          <button className={`option ${filters.size.xlarge ? "selected" : ""}`}  id="xlarge"
                  onClick={() => changeFilter("size", "xlarge")}>Xlarge</button>
        </div>
        <div className="radio-group">
          <h3 className="group-title">Gender</h3>
          <button className={`option ${filters.gender.male ? "selected" : ""}`} id="male"
                  onClick={() => changeFilter("gender", "male")}>Male</button>
          <button className={`option ${filters.gender.female ? "selected" : ""}`} id="female"
                  onClick={() => changeFilter("gender", "female")}>Female</button>
        </div>
        <div className="radio-group">
          <h3 className="group-title">Age</h3>
          <button className={`option ${filters.age.baby ? "selected" : ""}`} id="baby"
                  onClick={() => changeFilter("age", "baby")}>Baby</button>
          <button className={`option ${filters.age.young ? "selected" : ""}`}  id="young"
                  onClick={() => changeFilter("age", "young")}>Young</button>
          <button className={`option ${filters.age.adult ? "selected" : ""}`}  id="adult"
                  onClick={() => changeFilter("age", "adult")}>Adult</button>
          <button className={`option ${filters.age.senior ? "selected" : ""}`}  id="senior"
                  onClick={() => changeFilter("age", "senior")}>Senior</button>
        </div>
        {coatsOfAnimal.length > 0 && <div className="radio-group">
          <h3 className="group-title">Coat</h3>
          {coatsOfAnimal.map(coatType => (
            <button className={`option ${filters.coat[coatType] ? "selected" : ""}`} id={coatType} key={coatType}
                  onClick={() => changeFilter("coat", coatType)}
            >
              {coatType.replace(coatType[0], coatType[0].toUpperCase())}
            </button>
          ))}
        </div>}
        <div className="radio-group">
          <h3 className="group-title">Environments</h3>
          <button className={`option ${filters.environments.children ? "selected" : ""}`} id="small"
                  onClick={() => changeFilter("environments", "children")}>Children</button>
          <button className={`option ${filters.environments.dogs ? "selected" : ""}`}  id="dogs"
                  onClick={() => changeFilter("environments", "dogs")}>Dogs</button>
          <button className={`option ${filters.environments.cats ? "selected" : ""}`}  id="cats"
                  onClick={() => changeFilter("environments", "cats")}>Cats</button>
        </div>
        <button className="filter-button" onClick={e => filterPets(e)}>Search</button>
      </div>
    </div>
  );
}

export default FilterModal;