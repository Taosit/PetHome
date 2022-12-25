import React, { useState, useEffect } from "react";
import catIcon from "../assets/cat.svg";
import dogIcon from "../assets/dog.svg";
import Div100vh from "react-div-100vh";

function InitialPage({ formData, setFormData, error, loading, handleSearch }) {
	const [cityInForm, stateInForm] = formData.location?.split(", ") || ["", ""];
	const [city, setCity] = useState(cityInForm);
	const [state, setState] = useState(stateInForm);
	const [errorModal, setErrorModal] = useState(false);

	useEffect(() => {
		if (!error.hasError) {
			setErrorModal(false);
		} else {
			setErrorModal(error.errorMessage);
			setTimeout(() => {
				setErrorModal(false);
			}, 3000);
		}
	}, [error]);

	useEffect(() => {
		setFormData(prev => ({
			...prev,
			location: `${formatString(city)}, ${formatString(state)}`,
		}));
	}, [city, state]);

	const getStyle = petOption => {
		const transform = formData.type === petOption ? "scale(1.1)" : "scale(1)";
		return {transform};
	};

	const formatString = str => {
		if (!str) return "";
		return `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`.trim();
	};

	const launchSearch = e => {
		handleSearch(e);
	};

	return (
		<Div100vh>
			<div className="initial-page">
				<div className="initial-page-modal">
					<h1>Pet Home</h1>
					<p className="search-text">I'm looking for a</p>
					<div className="pets-option-container">
						<div
							className="pet-option-container"
							tabIndex="0"
							role="button"
							onKeyDown={e => e.key === "Enter" && setFormData(prev => ({ ...prev, type: "Cat" }))}
							onClick={() => setFormData(prev => ({ ...prev, type: "Cat" }))}
							style={{
								borderColor:
									formData.type === "Cat" ? "#ffb7d8" : "transparent",
							}}
						>
							<img
								className="pet-icon"
								src={catIcon}
								alt="cat"
								style={getStyle("Cat")}
							/>
							<span className="pet-label">Cat</span>
						</div>
						<div
							className="pet-option-container"
							tabIndex="0"
							role="button"
							onKeyDown={e => e.key === "Enter" && setFormData(prev => ({ ...prev, type: "Dog" }))}
							onClick={() => setFormData(prev => ({ ...prev, type: "Dog" }))}
							style={{
								borderColor:
									formData.type === "Dog" ? "#ffb7d8" : "transparent",
							}}
						>
							<img
								className="pet-icon"
								src={dogIcon}
								alt="dog"
								style={getStyle("Dog")}
							/>
							<span className="pet-label">Dog</span>
						</div>
					</div>
					<div className="location-text">
						<div className="sub-location-text">
							<p className="search-text">In</p>
							<input
								className="modal-input"
								type="text"
								value={city}
								onChange={e => setCity(e.target.value)}
							/>
							<p className="search-text">(City),</p>
						</div>
						<div className="sub-location-text">
							<input
								className="modal-input"
								type="text"
								value={state}
								onKeyDown={e => e.key === "Enter" && launchSearch(e)}
								onChange={e => setState(e.target.value)}
							/>
							<p className="search-text">(State/Province).</p>
						</div>
					</div>
					<div className="launch-search-button-container">
						<button
							className={`button launch-search-button ${
								loading ? "clear-background" : ""
							}`}
							onClick={e => launchSearch(e)}
						>
							{loading ? (
								<div className="small-loader"></div>
							) : (
								<p>Launch Search</p>
							)}
						</button>
					</div>
				</div>
				{errorModal && (
					<div className="error-modal">
						<p className="error-text">{errorModal}</p>
					</div>
				)}
			</div>
		</Div100vh>
	);
}

export default InitialPage;
