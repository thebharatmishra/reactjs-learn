import axios from 'axios';
import { useEffect, useState } from 'react';

export default function GuessAge() {
	const [nameYou, setNameYou] = useState('');
	const [age, setAge] = useState(null);

	const ageGuessed = () => {
		axios.get(`https://api.agify.io/?name=${nameYou}`).then((res: any) => {
			setAge(res.data);
			console.log(res.data);
		});
	};

	// useEffect(() => ageGuessed);
	return (
		<>
			<input
				type='text'
				placeholder='Bharat Mishra'
				onChange={(e) => setNameYou(e.target.value)}
			/>
			<h2>{nameYou}</h2>
			<button onClick={ageGuessed}>Guess Age</button>
			<h1>The guessed age is {age?.age}</h1>
			<h1>The guessed count is {age?.count}</h1>
			<h1>The given name is {age?.name}</h1>
		</>
	);
}
