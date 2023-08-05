import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<>
			<Link to='/'>Home</Link>
			<Link to='/contact'>Contact</Link>
			<Link to='/profile'>Profile</Link>
		</>
	);
}
