import { useState } from 'react';
export default function useToggle(visbilility = false) {
	const [visbile, setVisible] = useState(visbilility);
	function toggle() {
		setVisible(!visbile);
	}

	return [visbile, toggle];
}
