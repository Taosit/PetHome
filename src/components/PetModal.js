import React from "react";
import htmlEntities from "../utils/htmlDecoder";
import checkmark from "../assets/checkmark.png";
import error from "../assets/error.png";
import petFootprint from "../assets/claw.png";

function PetModal({ viewedPet, setViewedPet }) {
	const getPetBreeds = ({ primary, secondary, mixed, unknown }) => {
		if (unknown) return "Unknown";
		if (!mixed) return primary;
		if (secondary) return `${primary} and ${secondary};`;
		if (primary) return `Mixed ${primary}`;
		return "Mixed";
	};

	const formatAddress = ({ address1, address2, city, state, country }) => {
		if (!address1) return `${city}, ${state}, ${country}`;
		if (!address2) return `${address1}, ${city}, ${state}, ${country}`;
		return `${address1} ${address2}, ${city}, ${state}, ${country}`;
	};

	const capitablize = (str) => {
		return str.replace(str[0], str[0].toUpperCase());
	}

	return (
		<div className="overlay">
			<div className="pet-modal">
				<span className="close" onClick={() => setViewedPet(null)}>
					&times;
				</span>
				<h1 className="pet-name">{viewedPet.name}</h1>
				<div className="status">
					<div className="status-img-container">
						<img src={viewedPet.status === "adoptable"? checkmark : error} alt="status" />
					</div>
					<p className="status-label">{capitablize(viewedPet.status)}</p>
				</div>
				<div className="photo-container">
					{viewedPet.photos[0] && (
						<img src={viewedPet.photos[0].medium} alt="pet" />
					)}
				</div>
				<div className="basic-info">
					<div className="breed-name">
						{getPetBreeds(viewedPet.breeds)}
						<div className="claw-container">
							<img src={petFootprint} alt="pet footptint" />
						</div>
					</div>
					<div className="age-and-gender">
						{viewedPet.age} | {viewedPet.gender}
					</div>
				</div>
				<div className="environment">
					{viewedPet.environment.children && (
						<span className="friendly-tag">Child-friendly</span>
					)}
					{viewedPet.environment.cats && (
						<span className="friendly-tag">Cat-friendly</span>
					)}
					{viewedPet.environment.dogs && (
						<span className="friendly-tag">Dog-friendly</span>
					)}
				</div>
				{viewedPet.description && (
					<div className="descriptions">{htmlEntities(viewedPet.description)}</div>
				)}
				<div className="contact-info">
					<h4>Contact</h4>
					<ul className="contact-list">
						{viewedPet.contact.phone && (
							<li>{viewedPet.contact.phone}</li>
						)}
						{viewedPet.contact.email && (
							<li>{viewedPet.contact.email}</li>
						)}
						{viewedPet.contact.address && (
							<li>{formatAddress(viewedPet.contact.address)}</li>
						)}
					</ul>
				</div>
				<div className="date">Published on {viewedPet.published_at.split("T")[0]}</div>
			</div>
		</div>
	);
}

export default PetModal;
