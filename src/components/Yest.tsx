import { useState, useEffect } from 'react';

export default function Yest() {
	const [text, setText] = useState('');
	useEffect(() => {console.log('MOUNTED')
    return ()=>console.log('UNMOUNTED')}
    , [text]);
	return (
		<>
			<input
				type='text'
				onChange={(e) => setText(e.target.value)}
			/>
			<h1>{text}</h1>
		</> 
	);
}
