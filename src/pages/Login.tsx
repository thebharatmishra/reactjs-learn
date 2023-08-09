import { useState } from 'react';
import { login, logout } from '../store';
import { useDispatch, useSelector } from 'react-redux';

export default function Login() {
	const [newUsername, setNewUsername] = useState('');
	const dispatch = useDispatch();
	const username = useSelector((state: any) => state.user.value.username);
	return (
		<>
			<h1>This is Login Page</h1>
			<h3>{username}</h3>
			<input
				onChange={(e) => setNewUsername(e.target.value)}
				type='text'
			/>
			<button onClick={() => dispatch(login({ username: newUsername }))}>
				Login
			</button>
			<button onClick={() => dispatch(logout())}>Logout</button>
		</>
	);
}
