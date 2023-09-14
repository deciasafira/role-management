import React, { useEffect, useRef, useState } from 'react';
import { Button, InputField, RoleTable } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import TextArea from '../components/TextArea/TextArea';
import { addRoles, getMenuAccess } from '../states/redux/RolesAction/action';
import { useNavigate } from 'react-router-dom';
import { cn } from '../utils/cn';
import TagsContainer from '../components/Tag/TagsContainer';
import { SingleCheckbox } from '../components/CheckBox/SingleCheckbox';

const AddRolePage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getMenuAccess());
	}, [dispatch]);

	const formRef = useRef();
	const [name, setName] = useState('');
	const [desc, setDesc] = useState('');
	const [selectedMenus, setSelectedMenus] = useState({
		services: [],
		worksets: [],
		resources: [],
	  });

	const menus = useSelector((state) => state.menus);
	const darkMode = useSelector((state) => state.darkMode);

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		const data = {
			name: name,
			description: desc,
			menus: selectedMenus,
		};

		console.log(data);
		// dispatch(addRoles(data, darkMode, navigate('/')));
	};

	const onResetHandler = (e) => {
		e.preventDefault();
		setName('');
		setDesc('');
		setSelectedMenus({
			services: [],
			worksets: [],
			resources: [],
		});
	};

	return (
		<div className={cn('p-5 px-[5rem] rounded-md relative', darkMode ? 'bg-[#313242]' : 'bg-white')}>
			<form
				ref={formRef}
				id='add-new-user-form'
				className='flex flex-col w-full gap-8 py-7'
				onSubmit={onSubmitHandler}
				onReset={onResetHandler}>
				<div className='flex gap-8'>
					<div className='w-full flex flex-col gap-6 '>
						<div className='relative'>
							<InputField
								className={cn(
									'py-2 w-full max-w-[35rem]',
									darkMode ? `bg-[#313242] border-white text-white` : `bg-white border-black`
								)}
								value={name}
								changeHandler={(e) => setName(e.target.value)}
							/>
							<label
								htmlFor='name'
								className={cn(
									'inline-flex absolute left-3 text-gray-500 text-base transition-all duration-300',
									name.length > 0 ? '-top-1/2' : 'top-4'
								)}>
								Role Name
							</label>
						</div>

						<p className='text-gray-500 px-3 mb-2 text-lg'>Access Role</p>

						{/* Service Section */}
						<div className='flex justify-between items-center'>
							<p className='text-gray-500 font-bold px-3 text-base'>Services</p>

							{/* select all */}
							<div className='flex items-center gap-2'>
								<input
									type='checkbox'
									className={cn(
										'form-checkbox w-4 h-4 checked:bg-gray-900 outline-2 outline-gray-900 rounded-sm',
										darkMode
											? 'checked:bg-[#313242] checked:border-white'
											: 'checked:border-black border-black'
									)}
									checked={selectedMenus.services.length === menus?.services?.length}
									onChange={(e) => {
										if (e.target.checked) {
											setSelectedMenus({
												...selectedMenus,
												services: menus?.services?.map((service) => service.id),
											});
										} else {
											setSelectedMenus({
												...selectedMenus,
												services: [],
											});
										}
									}}
								/>
								<p className='text-gray-500 font-semibold text-base'>Select All</p>
							</div>
						</div>
						<div className='rounded-md max-h-[15rem] overflow-auto text-base'>
							<div className='mb-2'>
								{menus?.services?.map((service) => (
									<SingleCheckbox
										key={service.id}
										label={service.name}
										checked={selectedMenus.services.includes(service.id)}
										onChange={(e) => {
											if (e.target.checked) {
												setSelectedMenus({
													...selectedMenus,
													services: [...selectedMenus.services, service.id],
												});
											} else {
												setSelectedMenus({
													...selectedMenus,
													services: selectedMenus.services.filter(
														(item) => item !== service.id
													),
												});
											}
										}}
									/>
								))}
							</div>
						</div>
						{selectedMenus.services.length > 0 && (
							<TagsContainer
								accessMenu={menus?.services?.filter((service) =>
									selectedMenus.services.includes(service.id)
								)}
							/>
						)}

						{/* Resources Section */}
						<div className='flex justify-between items-center'>
							<p className='text-gray-500 font-bold px-3 text-base'>Resources</p>

							{/* select all */}
							<div className='flex items-center gap-2'>
								<input
									type='checkbox'
									className={cn(
										'form-checkbox w-4 h-4 checked:bg-gray-900 outline-2 outline-gray-900 rounded-sm',
										darkMode
											? 'checked:bg-[#313242] checked:border-white'
											: 'checked:border-black border-black'
									)}
									checked={selectedMenus.resources.length === menus?.resources?.length}
									onChange={(e) => {
										if (e.target.checked) {
											setSelectedMenus({
												...selectedMenus,
												resources: menus?.resources?.map((service) => service.id),
											});
										} else {
											setSelectedMenus({
												...selectedMenus,
												resources: [],
											});
										}
									}}
								/>
								<p className='text-gray-500 font-semibold text-base'>Select All</p>
							</div>
						</div>
						<div className='rounded-md max-h-[15rem] overflow-auto text-base'>
							<div className='mb-2'>
								{menus?.resources?.map((resources) => (
									<SingleCheckbox
										key={resources.id}
										label={resources.name}
										checked={selectedMenus.resources.includes(resources.id)}
										onChange={(e) => {
											if (e.target.checked) {
												setSelectedMenus({
													...selectedMenus,
													resources: [...selectedMenus.resources, resources.id],
												});
											} else {
												setSelectedMenus({
													...selectedMenus,
													resources: selectedMenus.resources.filter(
														(item) => item !== resources.id
													),
												});
											}
										}}
									/>
								))}
							</div>
						</div>
						{selectedMenus.resources.length > 0 && (
							<TagsContainer
								accessMenu={menus?.resources?.filter((service) =>
									selectedMenus.resources.includes(service.id)
								)}
							/>
						)}

						{/* Workset Section */}
						<div className='flex justify-between items-center'>
							<p className='text-gray-500 font-bold px-3 text-base'>Workset</p>

							{/* select all */}
							<div className='flex items-center gap-2'>
								<input
									type='checkbox'
									className={cn(
										'form-checkbox w-4 h-4 checked:bg-gray-900 outline-2 outline-gray-900 rounded-sm',
										darkMode
											? 'checked:bg-[#313242] checked:border-white'
											: 'checked:border-black border-black'
									)}
									checked={selectedMenus.worksets.length === menus?.worksets?.length}
									onChange={(e) => {
										if (e.target.checked) {
											setSelectedMenus({
												...selectedMenus,
												worksets: menus?.worksets?.map((service) => service.id),
											});
										} else {
											setSelectedMenus({
												...selectedMenus,
												worksets: [],
											});
										}
									}}
								/>
								<p className='text-gray-500 font-semibold text-base'>Select All</p>
							</div>
						</div>
						<div className='rounded-md max-h-[15rem] overflow-auto text-base'>
							<div className='mb-2'>
								{menus?.worksets?.map((worksets) => (
									<SingleCheckbox
										key={worksets.id}
										label={worksets.name}
										checked={selectedMenus.worksets.includes(worksets.id)}
										onChange={(e) => {
											if (e.target.checked) {
												setSelectedMenus({
													...selectedMenus,
													worksets: [...selectedMenus.worksets, worksets.id],
												});
											} else {
												setSelectedMenus({
													...selectedMenus,
													worksets: selectedMenus.worksets.filter(
														(item) => item !== worksets.id
													),
												});
											}
										}}
									/>
								))}
							</div>
						</div>
						{selectedMenus.worksets.length > 0 && (
							<TagsContainer
								accessMenu={menus?.worksets?.filter((service) =>
									selectedMenus.worksets.includes(service.id)
								)}
							/>
						)}

						<TextArea
							className={`py-3 h-52 w-[52rem] ${
								darkMode ? `bg-[#313242] border-white text-white` : `bg-white border-black`
							}`}
							placeholder='Description'
							value={desc}
							changeHandler={(e) => setDesc(e.target.value)}
						/>
					</div>
				</div>

				<div className='flex gap-2 ml-auto '>
					<button
						type='reset'
						className=' bg-gray-500 drop-shadow-lg rounded-md py-2 min-w-[90px] text-base font-semibold text-white'>
						Reset
					</button>
					<Button
						type='submit'
						className=' bg-blue-600 drop-shadow-lg rounded-md py-2 min-w-[90px] font-semibold text-white'>
						Save
					</Button>
				</div>
			</form>
		</div>
	);
};

export default AddRolePage;
