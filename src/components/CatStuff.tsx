// import { AxiosDefaults, Axios } from 'axios';
import { useEffect, useState } from 'react';

export default function CatStuff() {
	const [first, setfirst] = useState('');

	const factCatch = () => {
		fetch('https://catfact.ninja/fact')
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setfirst(data.fact);
			});

		// Axios.get('https://catfact.ninja/fact').then((res) =>
		// 	setfirst(res.data.fact)
		// );
	};

	useEffect(() => factCatch(), []);
	return (
		<>
			<button onClick={factCatch}>Generate Cat Fact</button>
			<p>{first}</p>
		</>
	);
}
