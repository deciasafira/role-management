import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import LinkButton from '../Button/LinkButton';
import { FaAngleRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
	const location = useLocation();
	const darkMode = useSelector((state) => state.darkMode);

	const role = `${
		location.pathname === '/'
			? 'text-blue-500 text-lg border-b-[3px] border-blue-500'
			: 'bg-transparent border-none text-lg px-3 text-gray-500'
	} `;

	const addRoleMatrix = `${
		location.pathname === '/new'
			? 'text-blue-500 text-lg border-b-[3px] border-blue-500'
			: 'bg-transparent border-none text-lg px-3 text-gray-500'
	} `;

	return (
		<header className='mx-[2rem] pt-12 px-16'>
			<div className='flex justify-between items-center'>
				<h1
					className={`text-3xl font-bold  py-2 w-fit mb-4 capitalize ${
						darkMode ? `text-white` : `text-black`
					}`}>
					Role Management
				</h1>
				<LinkButton className='flex items-center font-thin'>
					<p className={`text-[15px] ${darkMode ? `text-white` : `text-black`}`}>Back to main Map</p>
					<FaAngleRight size={22} color={`${darkMode ? `white` : `black`}`} />
				</LinkButton>
			</div>
			<div className='flex justify-start items-center gap-2 h-full border-b-[1px] border-gray-500'>
				<LinkButton to='/' className={role}>
					Role List
				</LinkButton>
				<LinkButton to='/new' className={addRoleMatrix}>
					Add Role
				</LinkButton>
			</div>
			<Outlet />
		</header>
	);
};

export default Header;
