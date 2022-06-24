import React, {useRef, useCallback} from "react";

function PetList({pets, setViewedPet}) {

  const getPetBreeds = ({primary, secondary, mixed, unknown}) => {
    if (unknown) return "Unknown";
    if (!mixed) return primary;
    if (secondary) return `${primary} and ${secondary};`;
    if (primary) return `${primary} mixed`
    return "Mixed"
  }

  const handleClick = (pet) => {
    setViewedPet(pet);
  }

  if (pets.length === 0) {
    return (
      <div className="no-results">
        <h2>No results found...</h2>
      </div>
    )
  }

  return (
    <div className="all-pets">
      {pets.map((pet, i) => (
        <div className="pet-container" key={i}>
          <div className="small-img-container">
            {pet.photos[0] && <img src={pet.photos[0].small} alt="pet"/>}
          </div>
          <div className="pet-info">
            <div className="details">
              <h4>{pet.name}</h4>
              <button className="details-button"
                      onClick={() => handleClick(pet)}
              >Details</button>
            </div>
            <p>Age: {pet.age}</p>
            <p>Gender: {pet.gender}</p>
            <p>Breed: {getPetBreeds(pet.breeds)}</p>
            <p>Status: {pet.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PetList;