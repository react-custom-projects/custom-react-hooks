import React, { useEffect, useReducer } from 'react';
//axios
import axios from 'axios';

function asyncReducer(state, action) {
	switch (action.type) {
		case 'pending': {
			return { isLoading: true, data: null, error: null };
		}
		case 'resolved': {
			return { isLoading: false, data: action.data, error: null };
		}
		case 'rejected': {
			return { isLoading: false, data: null, error: action.error };
		}
		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
}

const useFetch = (url = '', options = null, initialDataType) => {
	const [state, dispatch] = useReducer(asyncReducer, {
		isLoading: false,
		data: initialDataType,
		error: null,
	});

	useEffect(() => {
		let isMounted = true;

		if (isMounted) {
			(async () => {
				dispatch({ type: 'pending' });
				try {
					const res = await axios(url, options);
					dispatch({ type: 'resolved', data: res.data });
				} catch (err) {
					console.log(err);
					//TODO: change it as needed
					dispatch({ type: 'rejected', error: error.response });
				}
			})();
		}

		return () => {
			isMounted = false;
		};
	}, [url, options]);

	return { isLoading: state.isLoading, error: state.error, data: state.data };
};

export default useFetch;
