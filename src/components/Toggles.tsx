import { useState } from 'react';
import useToggle from './useToggle';
export default function Toggles() {
	// const [isVisible, setVisible] = useState(false);
	const [isVisible, setVisible] = useToggle();

	return (
		<>
			<button onClick={setVisible}>{isVisible ? 'Hide' : 'Show'}</button>
			<h1>{isVisible && 'Bhanu'}</h1>
		</>
	);
}
