import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from 'redux/users/usersSlice';
import { nanoid } from "@reduxjs/toolkit";

export const AddForm = () => {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const dispatch = useDispatch();

	const handleChange = e => {
		const name = e.target.name;
		const value = e.target.value;
		if (name === 'name') {
			setName(value);
		} else {
			setAge(value);
		}	
	}

	const handleSubmit = e => {
		e.preventDefault();
		const user = {
			name: name,
			age: age,
			id: nanoid()
		}
		dispatch(addUser(user))
		setName('')
		setAge('')
}
	return (
		<form onSubmit={handleSubmit}>
    <label>
      Name<input name="name" value={name} onChange={handleChange}></input>
    </label>
    <label>
      Age<input name="age" value={age} onChange={handleChange}></input>
			</label>
			<button>Save</button>
  </form>
	)
};
