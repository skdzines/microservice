import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pages from 'pages';
import { Link }  from 'react-router-dom';
import { action } from 'store';

const Nav = () => {
	const[isActive, setIsActive] = useState(false);

	const toggleMenu = () => {
		setIsActive(!isActive);
	}

	const dispatch = useDispatch();
	const currentPage = useSelector(state => state.navigation.page);
	const setPageAction = action.navigation.setPage;

	return (
		<nav>
			<ul>
			{
				Pages.map(page => <li key={page.name}><Link className={currentPage === page.path ? 'active' : ''} to={page.path} onClick={() => dispatch(setPageAction({payload: page.path}))}>{page.name}</Link></li>)
			}
			</ul>
		</nav>
	)
};

export default Nav;