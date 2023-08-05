import { AppContext } from '../App';
import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
export default function Home() {
	const { username } = useContext(AppContext);

	const {
		data: catData,
		isLoading,
		isError,
		refetch
	} = useQuery(['kitty'], async () => {
		return axios.get('https://catfact.ninja/fact').then((res) => res.data);
	});
	if (isLoading) {
		return <h2>Loading....</h2>;
	}

	if (isError) {
		return <h1>Sorry there was an ERROR</h1>;
	}

	return (
		<>
			<h1>This is homepage for user {username}</h1>
			<h2>{catData.fact}</h2>
			<button onClick={refetch}>New Fact</button>
		</>
	);
}
