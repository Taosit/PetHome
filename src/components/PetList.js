import React from "react";

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
            {pet.photos[0] && <img src={pet.photos[0].small} onClick={() => handleClick(pet)} alt="pet"/>}
          </div>
          <div className="pet-info">
            <h4 onClick={() => handleClick(pet)}>{pet.name}</h4>
            <p><b>Age</b>: {pet.age}</p>
            <p><b>Gender</b>: {pet.gender}</p>
            <p><b>Breed</b>: {getPetBreeds(pet.breeds)}</p>
            <p><b>Status</b>: {pet.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PetList;