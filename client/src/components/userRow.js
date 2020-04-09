import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { action } from 'store';
import SimpleMessage from 'components/simpleMessage';

const UserRow = (props) => {

	const dispatch = useDispatch();
    const [firstName, setFirstName] = useState(props.firstName);
    const [lastName, setLastName] = useState(props.lastName);
    const [editMode, setEditMode] = useState(false);

    const handleSaveChanges = (event) => {
        event.preventDefault();
        dispatch(action.user.edit({data: {id: props._id, firstName, lastName}}));
        setEditMode(false);
    };

    const toggleEditMode = (event) => {
        event.preventDefault();
        setEditMode(true);
    }

    const handleCancelChanges = (event) => {
        event.preventDefault();
        setEditMode(false);
        setFirstName(props.firstName);
        setLastName(props.lastName);
    }

    const handleDelete = (event) => {
        event.preventDefault();
        dispatch(action.view.showModal({payload: <SimpleMessage title="Remove User" confirm={confirmDeletion} firstName={firstName} lastName={lastName} ></SimpleMessage>}));
    }
    
    const confirmDeletion = () => {
        dispatch(action.user.delete({data: {id: props._id}}));
        dispatch(action.view.closeModal());
    }

    const getRow = () => {
        if(editMode) {
            return <li>
                <span>
                    <input type="text" name="firstName" value={firstName} onChange={event => setFirstName(event.target.value)} />
                    <input type="text" name="lastName" value={lastName} onChange={event => setLastName(event.target.value)} />
                </span>
                <span className="controls">
                    <button onClick={handleSaveChanges} disabled={!firstName.length || !lastName.length}>Save Changes</button>
                    <button onClick={handleCancelChanges}>Cancel</button>
                </span>
            </li>
        }

        return <li>{firstName} {lastName} 
            <span className="controls"><button onClick={(toggleEditMode)}>Edit</button> <button onClick={(handleDelete)}>Delete</button></span>
        </li>
    };

	return (
		getRow()
	);
}

export default UserRow;