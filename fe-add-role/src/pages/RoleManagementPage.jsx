import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getRoles } from '../states/redux/RolesAction/action';

import RolePage from './RolePage';
import AddRolePage from './AddRolePage';
import AccessRolePage from './AccessRolePage';

import { DetailPopUp, UpdatePopUp, Header, DeletePopUp } from '../components';
import Switch from '../components/Switch/Switch';

const RoleManagamentPage = () => {
	const dispatch = useDispatch();
	const darkMode = useSelector((states) => states.darkMode);
	const roles = useSelector((states) => states.roles);

	const [page, setPage] = useState(1);
	const handlePage = (action) => {
		switch (action) {
			case 'prev':
				if (page > 0) setPage(page - 1);
				break;
			case 'next':
				setPage(page + 1);
				break;
			default:
				break;
		}
	};

	const location = useLocation();
	const background = location.state && location.state.background;

	useEffect(() => {
		dispatch(getRoles(page));
	}, [dispatch, page]);

	const darkModeHandler = () => {
		dispatch({ type: 'DARK_MODE', payload: !darkMode });
	};

	if (roles?.length === 0) {
		return (
			<div className={`text-3xl w-full min-h-screen ${darkMode ? `bg-[#1E1E2C]` : `bg-gray-100`}`}>
				<Header />
				<main className='w-full min-h-screen px-24 pt-12'>
					<Routes>
						<Route path='/' element={<RolePage page={handlePage} />} />
						<Route path='/new' element={<AddRolePage />} />
						<Route path='/access' element={<AccessRolePage />} />
					</Routes>
				</main>
				<Switch handler={darkModeHandler} />
			</div>
		);
	}

	return (
		<div className={`text-3xl w-full min-h-screen ${darkMode ? `bg-[#1E1E2C]` : `bg-gray-100`}`}>
			<Header />
			<main className='w-full min-h-screen px-24 pt-12'>
				<Routes>
					<Route path='/' element={<RolePage page={handlePage} />}>
						<Route path='/user/:id' element={<DetailPopUp />} />
						<Route path='/edit/:id' element={<UpdatePopUp />} />
						<Route path='/delete/:id' element={<DeletePopUp />} />
					</Route>
				</Routes>
				{background && (
					<Routes>
						<Route path='/user/:id' element={<DetailPopUp />} />
						<Route path='/edit/:id' element={<UpdatePopUp />} />
						<Route path='/delete/:id' element={<DeletePopUp />} />
					</Routes>
				)}
				<Routes>
					<Route path='/new' element={<AddRolePage />} />
					<Route path='/access' element={<AccessRolePage />}>
						<Route path='/access/:id' element={<AccessRolePage />} />
					</Route>
				</Routes>
			</main>
			<Switch handler={darkModeHandler} />
		</div>
	);
};

export default RoleManagamentPage;
