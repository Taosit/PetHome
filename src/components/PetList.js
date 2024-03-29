import React from "react";
import checkmark from "../assets/checkmark.svg";
import error from "../assets/warning.svg";
import catHead from "../assets/cat-head.svg";
import dogHead from "../assets/dog-head.svg";

function PetList({ pets, setViewedPet }) {
	const getPetBreeds = ({ primary, secondary, mixed, unknown }) => {
		if (unknown) return "Unknown";
		if (!mixed) return primary;
		if (secondary) return `${primary} and ${secondary};`;
		if (primary) return `${primary} mixed`;
		return "Mixed";
	};

	console.log(pets);

	const handleClick = pet => {
		setViewedPet(pet);
	};

	if (pets.length === 0) {
		return (
			<div className="no-results">
				<h2>No results found...</h2>
			</div>
		);
	}

	const capitablize = (str) => {
		return str.replace(str[0], str[0].toUpperCase());
	}

	return (
		<div className="all-pets">
			{pets.map((pet, i) => (
				<div className="pet-container"
					tabIndex="0"
					onKeyDown={e => e.key === "Enter" && handleClick(pet)}
			    key={i}>
					<div className="small-img-container">
					<img
						src={pet.photos?.[0]?.small? pet.photos[0].small : pet.type === "Dog"? dogHead : catHead}
						onClick={() => handleClick(pet)}
						alt="pet"
					/>
					</div>
					<div className="pet-info">
						<h4 onClick={() => handleClick(pet)}>{pet.name}</h4>
						<div className="breed">{getPetBreeds(pet.breeds)}</div>
						<div className="age-and-gender">{pet.age} | {pet.gender}</div>
						<div className="status-container">
							<div className="status-prompt">{capitablize(pet.status)}</div>
							<img src={pet.status === "adoptable"? checkmark : error} alt="status" />
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default PetList;
