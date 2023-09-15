import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, DetailItem } from '../index';
import TagsContainer from '../Tag/TagsContainer';

const DetailPopUp = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const roles = useSelector((state) => state.roles);
	const darkMode = useSelector((state) => state.darkMode);
	const currentRole = roles.find((role) => role.id === id);

	return (
		<section
			className={`w-full h-screen fixed top-0 left-0 bottom-0 ${
				darkMode ? `bg-black/60` : `bg-white/60`
			} flex justify-center items-center z-30`}>
			<div
				className={`p-6 min-h-[240px] w-[45rem] rounded-md border ${
					darkMode ? `border-white bg-[#313242] text-white` : `border-black bg-white`
				}`}>
				<h1 className='font-bold'>Roles Detail</h1>
				<div className='px-8 py-3 text-lg leading-10 my-4 rounded-md'>
					<DetailItem label='Role Name' value={currentRole?.name} />
					<TagsContainer
						accessMenu={[...currentRole.services, ...currentRole.worksets, ...currentRole.resources]}
					/>
					<DetailItem label='Desc' value={currentRole?.description} className={'max-h-[15rem]'} />
				</div>
				<div className='flex justify-center w-full'>
					<Button
						className='py-2 px-4 flex justify-center items-center gap-2 font-medium w-[10rem] text-lg rounded-md shadow-md border-2 border-green-500 text-green-500 hover:text-white hover:bg-green-500'
						clickHandler={() => navigate(-1)}>
						OK
					</Button>
				</div>
			</div>
		</section>
	);
};

export default DetailPopUp;
