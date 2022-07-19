import React, { useState, useEffect, useRef } from "react";
import { requestData } from "./utils/requests";
import SearchPage from "./components/SearchPage";
import InitialPage from "./components/InitialPage";
import Div100vh from "react-div-100vh";

function App() {
	const [pets, setPets] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({ hasError: false, errorMessage: "" });
	const [hasMore, setHasMore] = useState(true);
	const [pageNumber, setPageNumber] = useState(1);
	const [formData, setFormData] = useState({ type: "", location: "" });
	const [onInitialPage, setOnInitialPage] = useState(true);

	const handleSearch = async e => {
		e.preventDefault();
		setPets(null);
		setPageNumber(1);
		if (formData.type.length === 0 || formData.location.length === 0) {
			setLoading(false);
			setError({
				hasError: true,
				errorMessage:
					"Incomplete field. Make sure to provide animal type and location.",
			});
			return;
		}
		setLoading(true);
		try {
			const response = await requestData(1, formData.type, formData.location);
			setPets(response.data.animals);
			setHasMore(pageNumber < response.data.pagination.total_pages);
			setLoading(false);
			setOnInitialPage(false);
			setError({ hasError: false, errorMessage: "" });
		} catch (e) {
			setLoading(false);
			setError({
				hasError: true,
				errorMessage:
					"Please enter a valid address in the form of City, State.",
			});
		}
	};

	return onInitialPage ? (
		<Div100vh>
			<InitialPage
				formData={formData}
				setFormData={setFormData}
				error={error}
				setError={setError}
				loading={loading}
				handleSearch={handleSearch}
			/>
		</Div100vh>
	) : (
		<Div100vh>
			<SearchPage
				pets={pets}
				setPets={setPets}
				loading={loading}
				setLoading={setLoading}
				error={error}
				setError={setError}
				hasMore={hasMore}
				setHasMore={setHasMore}
				pageNumber={pageNumber}
				setPageNumber={setPageNumber}
				formData={formData}
				setFormData={setFormData}
				handleSearch={handleSearch}
				setOnInitialPage={setOnInitialPage}
			/>
		</Div100vh>
	);
}

export default App;
