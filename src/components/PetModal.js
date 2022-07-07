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
        >&times;</span>
        <h1>{viewedPet.name}</h1>
        <p className="date">Published on {viewedPet.published_at.split("T")[0]}</p>
        <div className="photo-container">
          {viewedPet.photos[0] && <img src={viewedPet.photos[0].medium} alt="pet"/>}
        </div>
        <div className="basic-info">
          <div className="attribute"><b>Breed</b>: {getPetBreeds(viewedPet.breeds)}</div>
          {viewedPet.size && <div className="attribute"><b>Size</b>: {viewedPet.size}</div>}
          {viewedPet.gender && <div className="attribute"><b>Gender</b>: {viewedPet.gender}</div>}
          {viewedPet.age && <div className="attribute"><b>Age</b>: {viewedPet.age}</div>}
          {viewedPet.coat && <div className="attribute"><b>Coat</b>: {viewedPet.coat}</div>}
        </div>
        <div className="environment">
          {viewedPet.environment.children && <span className="friendly-tag">Child-friendly</span>}
          {viewedPet.environment.cats && <span className="friendly-tag">Cat-friendly</span>}
          {viewedPet.environment.dogs && <span className="friendly-tag">Dog-friendly</span>}
        </div>
        <div><b>Status</b>: {viewedPet.status}</div>
        {viewedPet.description && <div id="descriptions"><b>Descriptions</b>: {htmlEntities(viewedPet.description)}</div>}
        <div className="contact-info">
          <h4>Contact</h4>
          <ul>
            {viewedPet.contact.email && <li><b>Email</b>: {viewedPet.contact.email}</li>}
            {viewedPet.contact.phone && <li><b>Phone</b>: {viewedPet.contact.phone}</li>}
            {viewedPet.contact.address && <li><b>Address</b>: {formatAddress(viewedPet.contact.address)}</li>}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PetModal;