import React from 'react';
import { useLocation } from 'react-router-dom';
import LinkButton from '../Button/LinkButton';
import { MdOutlineDeleteForever, MdOutlineEdit, MdManageSearch } from 'react-icons/md';

const ActionButton = ({ userId }) => {
	const location = useLocation();

	return (
		<div className='flex justify-center items-center'>
			<LinkButton to={`/user/${userId}`} state={{ background: location }} className='px-1'>
				<MdManageSearch size={24} />
			</LinkButton>

			<LinkButton to={`/edit/${userId}`} state={{ background: location }} className='px-1'>
				<MdOutlineEdit size={24} />
			</LinkButton>

			<LinkButton to={`/delete/${userId}`} state={{ background: location }} className='px-1'>
				<MdOutlineDeleteForever size={24} color='red' />
			</LinkButton>
		</div>
	);
};

export default ActionButton;
