import { HomeTab } from "./HomeTab";
import { selectUsers } from 'redux/users/usersSlice';
import { useSelector } from "react-redux";

export const HomePage = () => {
	const users = useSelector(selectUsers);
	return (
		<div>
			{users.length !==0?<HomeTab/>:<p>No users</p>}
		</div>
	)
}