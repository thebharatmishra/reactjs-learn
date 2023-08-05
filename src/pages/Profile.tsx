import ChangeProfile from '../components/ChangeProfile';
import { AppContext } from '../App';
import { useContext } from 'react';
const Profile = () => {
	const { username, setUsername } = useContext(AppContext);
	return (
		<section>
			Profile: The user is {username}
			<ChangeProfile />
		</section>
	);
};

export default Profile;
