import { useState, useEffect } from 'react';
import { Router, Routes } from 'react-router-dom';

export default function Excuse() {
	const [excused, makeExcuse] = useState<string>('');
	function getExcuse(excuse: string) {
		fetch(`https://excuser-three.vercel.app/v1/excuse/${excuse}`)
			.then((res) => res.json())
			.then((data) => makeExcuse(data[0].excuse));
	}

	getExcuse(excused);
	return (
		<>
			<button onClick={() => getExcuse('family')}>Family</button>
			<button onClick={() => getExcuse('comedy')}>Comedy</button>
			<button onClick={() => getExcuse('office')}>Office</button>
			<h1>{excused}</h1>
		</>
	);
}
