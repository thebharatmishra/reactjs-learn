import { useState, useContext } from 'react';
import { AppContext } from '../App';

export default function ChangeProfile(props: any) {
	const [newUsername, setNewUsername] = useState('');
	const { setUsername } = useContext(AppContext);
	return (
		<>
			<h1>Change Profile Page</h1>
			<input
				type='text'
				onChange={(e) => setNewUsername(e.target.value)}
			/>
			<button
				onClick={() => {
					setUsername(newUsername);
				}}
			>
				Change Username
			</button>
		</>
	);
}
