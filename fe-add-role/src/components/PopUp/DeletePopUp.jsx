import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LinkButton, Button } from '../index';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRole } from '../../states/redux/RolesAction/action';

const DeletePopUp = () => {
	const { id } = useParams();
	const roles = useSelector((states) => states.roles);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const findRoleName = roles.find((role) => role.id === id);
	const darkMode = useSelector((state) => state.darkMode);

	const onDeleteUserHandler = () => {
		dispatch(deleteRole(id, darkMode, navigate('/')));
	};

	return (
		<section
			className={`w-full h-screen fixed top-0 left-0 bottom-0 flex justify-center items-center z-30 ${
				darkMode ? `bg-black/60` : `bg-white/60`
			}`}>
			<div
				className={`p-5 px-[5rem] text-center flex justify-center items-start flex-col w-auto rounded-md border ${
					darkMode ? `border-white bg-[#313242] text-white` : `border-black bg-white`
				}`}>
				<p className='font-semibold text-red-500 text-center w-full m-0 text-[25px]'>Are You Sure?</p>
				<p className='font-semibold text-[21px] w-full'>You are about to delete "{findRoleName?.name}"?</p>
				<div className='flex justify-center items-center gap-4 mx-auto mt-5'>
					<LinkButton
						to='/'
						className='bg-gray-500 text-lg rounded-md shadow-md text-white w-[10rem] hover:bg-gray-600'>
						Cancel
					</LinkButton>
					<Button
						className='bg-red-400 text-white text-lg rounded-md shadow-md font-semibold w-[10rem] hover:bg-red-500 py-2'
						clickHandler={onDeleteUserHandler}>
						Delete
					</Button>
				</div>
			</div>
		</section>
	);
};

export default DeletePopUp;
