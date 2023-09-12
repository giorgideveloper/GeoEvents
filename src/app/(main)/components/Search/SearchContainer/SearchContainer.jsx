import React, { useEffect } from 'react';

export default function SearchContainer({ item }) {
	useEffect(() => {
		console.log(item);
	}, [item]);

	return <></>;
}
