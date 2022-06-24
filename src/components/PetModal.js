import React from "react";
import htmlEntities from "../utils/htmlDecoder";

function PetModal({viewedPet, setViewedPet}) {

  const getPetBreeds = ({primary, secondary, mixed, unknown}) => {
    if (unknown) return "Unknown";
    if (!mixed) return primary;
    if (secondary) return `${primary} and ${secondary};`;
    if (primary) return `Mixed ${primary}`
    return "Mixed"
  }

  const formatAddress = ({address1, address2, city, state, country}) => {
    if (!address1) return `${city}, ${state}, ${country}`
    if (!address2) return `${address1}, ${city}, ${state}, ${country}`
    return `${address1} ${address2}, ${city}, ${state}, ${country}`
  }

  return (
    <div className="overlay">
      <div className="pet-modal">
        <span className="close"
              onClick={() => setViewedPet(null)}
        >x</span>
        <h1>{viewedPet.name}</h1>
        <p className="date">Published on {viewedPet.published_at.split("T")[0]}</p>
        <div className="photo-container">
          <img src={viewedPet.photos[0].medium} alt="pet"/>
        </div>
        <div className="basic-info">
          <div>Breed: {getPetBreeds(viewedPet.breeds)}</div>
          <div>Size: {viewedPet.size}</div>
          <div>Gender: {viewedPet.gender}</div>
          <div>Age: {viewedPet.age}</div>
          <div>Coat: {viewedPet.coat}</div>
        </div>
        <div className="environment">
          {viewedPet.environment.children && <span className="friendly-tag">Child-friendly</span>}
          {viewedPet.environment.cats && <span className="friendly-tag">Cat-friendly</span>}
          {viewedPet.environment.dogs && <span className="friendly-tag">Dog-friendly</span>}
        </div>
        <div>Status: {viewedPet.status}</div>
        {viewedPet.description && <div id="descriptions">Descriptions: {htmlEntities(viewedPet.description)}</div>}
        <div className="contact-info">
          <h4>Contact</h4>
          <ul>
            {viewedPet.contact.email && <li>Email: {viewedPet.contact.email}</li>}
            {viewedPet.contact.phone && <li>Phone: {viewedPet.contact.phone}</li>}
            {viewedPet.contact.address && <li>Address: {formatAddress(viewedPet.contact.address)}</li>}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PetModal;