import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetch = ({ url }) => {
	const [error, setError] = useState(null);
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get(url)
			.then((response) => setData(response.data.data))
			.catch((error) => setError(error.message));
	}, [url]);

	if (error) {
		return <div>An error occurred: {error.message}</div>;
	} else {
		return { data };
	}
};

export default useFetch;
