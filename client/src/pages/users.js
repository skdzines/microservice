import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { action } from 'store';
import UserRow from 'components/userRow';

const Users = () => {

	const dispatch = useDispatch();
    const users = useSelector(state => state.users.list);
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

	useEffect(() => {
        dispatch(action.user.get())
    }, []);

    const createUser = (event) => {
        event.preventDefault()
        dispatch(action.user.create({data: {firstName, lastName}}));
        resetUser();
    };

    const resetUser = () => {
        setFirstName('');
        setLastName('');
    }

	return (
		<section className="home">
			<h1>Users</h1>
            <form>
                <input type="text" name="firstName" value={firstName} onChange={event => setFirstName(event.target.value)} />
                <input type="text" name="lastName" value={lastName} onChange={event => setLastName(event.target.value)} />
                <button onClick={createUser} disabled={!firstName.length || !lastName.length}>Create User</button>
            </form>
			<ul>
				{
					users.map(user => <UserRow key={user._id} {...user} />)
				}
			</ul>
		</section>
	);
}

export default Users;