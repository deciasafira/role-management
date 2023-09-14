import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, InputField } from '../index';
import TextArea from '../TextArea/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { findRole, getMenuAccess, updateRole } from '../../states/redux/RolesAction';
import DataTable from 'react-data-table-component';
import { cn } from '../../utils/cn';

const UpdatePopUp = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		dispatch(getMenuAccess());
	}, [dispatch, id]);

	const roles = useSelector((state) => state.roles);
	const menus = useSelector((state) => state.menu);
	const currentRole = roles.find((item) => item.id === id);
	const darkMode = useSelector((state) => state.darkMode);
	const roleMenu = [...currentRole?.services, ...currentRole?.worksets, ...currentRole?.resources];

	const [form, setForm] = useState({
		role: '',
		description: '',
	});

	useEffect(() => {
		const modifRoleMenu = roleMenu.map(function (obj) {
			return {
				id: obj.id,
				menu_id: obj.menu_id,
				view: obj.view,
				create: obj.create,
				update: obj.update,
				delete: obj.delete,
			};
		});

		setForm({
			name: currentRole?.name || '',
			description: currentRole?.description || '',
			menus: modifRoleMenu || [],
		});
	}, [id, currentRole, roleMenu]);

	useEffect(() => {
		dispatch(getMenuAccess());
	}, [dispatch]);

	function handleChange(e) {
		let data = { ...form };
		data[e.target.name] = e.target.value;
		setForm(data);
	}

	const onSubmitEditHandler = (id) => {
		dispatch(updateRole(form, id));
		navigate('/');
	};

	// Column for access table
	const handleAllCheckBox = (e, columnName) => {
		setForm((prevForm) => {
			const updatedMenus = menus.map((item) => ({
				menu_id: item.id,
				...prevForm.menus.find((menu) => menu.menu_id === item.id),
				[columnName]: e.target.checked,
			}));
			return {
				...prevForm,
				menus: updatedMenus,
			};
		});
	};

	const handleCheckBox = (e, columnName, rowId) => {
		let data = { ...form };
		const foundMenu = data.menus.find((item) => item.menu_id === rowId);

		if (foundMenu) {
			data.menus = data.menus.map((item) => {
				if (item.menu_id === rowId) {
					return {
						...item,
						[columnName]: e.target.checked,
					};
				} else {
					return item;
				}
			});
		} else {
			data.menus.push({
				menu_id: rowId,
				[columnName]: e.target.checked,
			});
		}

		setForm(data);
	};

	const accessRole = [
		{
			name: 'Menu',
			selector: (row) => row.name,
			width: '23rem',
			center: true,
		},
		{
			name: (
				<div className='view flex'>
					<input
						type='checkbox'
						className={`w-5 h-5 border-2 border-white rounded-md checked:bg-green-600 bg-transparent`}
						checked={
							form.menus?.length === menus.length &&
							form.menus?.filter((item) => item.view === true).length === menus.length
						}
						onChange={(e) => handleAllCheckBox(e, 'view')}
					/>
					<p className='ml-2'>View</p>
				</div>
			),
			selector: (row) => row.view,
			center: true,
			width: '10rem',
			cell: (row) => (
				<input
					type='checkbox'
					className={`w-5 h-5 border ${
						darkMode ? `border-white` : `border-black`
					} rounded-md checked:bg-green-600 bg-transparent`}
					checked={form.menus?.find((item) => item.menu_id === row.id)?.view}
					onChange={(e) => handleCheckBox(e, 'view', row.id)}
				/>
			),
		},
		{
			name: (
				<div className='view flex'>
					<input
						type='checkbox'
						className={`w-5 h-5 border-2 border-white rounded-md checked:bg-green-600 bg-transparent`}
						checked={
							form.menus?.length === menus.length &&
							form.menus?.filter((item) => item.create === true).length === menus.length
						}
						onChange={(e) => handleAllCheckBox(e, 'create')}
					/>
					<p className='ml-2'>Add</p>
				</div>
			),
			selector: (row) => row.create,
			center: true,
			cell: (row) => (
				<input
					type='checkbox'
					className={`w-5 h-5 border ${
						darkMode ? `border-white` : `border-black`
					} rounded-md checked:bg-green-600 bg-transparent`}
					checked={form.menus?.find((item) => item.menu_id === row.id)?.create}
					onChange={(e) => handleCheckBox(e, 'create', row.id)}
				/>
			),
		},
		{
			name: (
				<div className='view flex'>
					<input
						type='checkbox'
						className={`w-5 h-5 border-2 border-white rounded-md checked:bg-green-600 bg-transparent`}
						checked={
							form.menus?.length === menus.length &&
							form.menus?.filter((item) => item.update === true).length === menus.length
						}
						onChange={(e) => handleAllCheckBox(e, 'update')}
					/>
					<p className='ml-2'>Update</p>
				</div>
			),
			selector: (row) => row.update,
			center: true,
			cell: (row) => (
				<input
					type='checkbox'
					className={`w-5 h-5 border ${
						darkMode ? `border-white` : `border-black`
					} rounded-md checked:bg-green-600 bg-transparent`}
					checked={form.menus?.find((item) => item.menu_id === row.id)?.update}
					onChange={(e) => handleCheckBox(e, 'update', row.id)}
				/>
			),
		},
		{
			name: (
				<div className='view flex'>
					<input
						type='checkbox'
						className={`w-5 h-5 border-2 border-white rounded-md checked:bg-green-600 bg-transparent`}
						checked={
							form.menus?.length === menus.length &&
							form.menus?.filter((item) => item.delete === true).length === menus.length
						}
						onChange={(e) => handleAllCheckBox(e, 'delete')}
					/>
					<p className='ml-2'>Delete</p>
				</div>
			),
			selector: (row) => row.delete,
			center: true,
			cell: (row) => (
				<input
					type='checkbox'
					className={`w-5 h-5 border ${
						darkMode ? `border-white` : `border-black`
					} rounded-md checked:bg-green-600 bg-transparent`}
					checked={form.menus?.find((item) => item.menu_id === row.id)?.delete}
					onChange={(e) => handleCheckBox(e, 'delete', row.id)}
				/>
			),
		},
	];

	const styleAccess = {
		table: {
			style: {
				marginRight: '1rem',
			},
		},
		rows: {
			style: {
				backgroundColor: darkMode ? '#313242' : 'white',
			},
		},

		headCells: {
			style: {
				paddingLeft: '8px', // override the cell padding for head cells
				paddingRight: '8px',
				backgroundColor: darkMode ? '#313242' : '#4893E6',
				color: 'white',
				border: 'none',
				fontSize: '1rem',
				position: 'sticky',
			},
		},
		cells: {
			style: {
				paddingLeft: '8px', // override the cell padding for data cells
				paddingRight: '8px',
				fontSize: '1rem',
				color: darkMode ? 'white' : '#1F2937',
				borderBottom: '1px solid #D1D5DB',
			},
		},
	};

	return (
		<section
			className={cn(
				'w-full h-100 fixed top-0 left-0 bottom-0 flex justify-center items-center z-30',
				darkMode ? 'bg-black/60' : 'bg-white/60'
			)}>
			<form
				className={cn(
					'p-6 rounded-md border h-[45rem] overflow-scroll update-popup-parent',
					darkMode ? 'border-white bg-[#313242] text-white' : 'border-black bg-white'
				)}>
				<h1 className='font-bold'>Edit Role</h1>
				<div className='p-8  text-lg leading-10 rounded-md flex justify-between gap-12'>
					<div className='flex flex-col '>
						<InputField
							className={cn(
								'py-2 w-[25rem]',
								darkMode ? 'bg-[#313242] border-white' : 'bg-white border-black'
							)}
							label='Role Name'
							value={form.name}
							name='name'
							changeHandler={handleChange}
						/>
						<div className='py-2'>
							<div className='flex justify-between w-full items-center pb-2 '>
								<h2 className='text-xl font-bold'>Access Role</h2>
							</div>
							<div
								className={cn(
									'h-[15rem] overflow-auto border rounded-md pr-3',
									darkMode
										? 'datatable-scroll-white border-white'
										: 'datatable-scroll-blue border-black'
								)}>
								<DataTable columns={accessRole} data={menus} customStyles={styleAccess} fixedHeader />
							</div>
						</div>
						<TextArea
							className={cn(
								'py-2 w-[25rem] h-52',
								darkMode ? 'bg-[#313242] border-white' : 'bg-white border-black'
							)}
							label='Description'
							value={form.description}
							name='description'
							changeHandler={handleChange}
						/>
					</div>
				</div>
				<div className='flex gap-2 justify-end'>
					<Button
						className='bg-gray-400 rounded-md shadow-md text-white font-semibold hover:bg-gray-500'
						clickHandler={() => navigate(-1)}>
						Cancel
					</Button>
					<Button
						type='submit'
						className='bg-blue-600 rounded-md  shadow-md text-white font-semibold hover:bg-blue-700 py-2'
						clickHandler={() => onSubmitEditHandler(id)}>
						Update
					</Button>
				</div>
			</form>
		</section>
	);
};

export default UpdatePopUp;
