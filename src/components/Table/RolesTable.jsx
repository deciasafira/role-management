import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';

import { cn } from '../../utils/cn';
import DropDown from './DropDown';
import TagsContainer from '../Tag/TagsContainer';
import { SearchComponent, Button, ActionButton } from '../index';
import { getAllRoles, getRoles, sortRoles } from '../../states/redux/RolesAction';

import { FaSortAmountUp } from 'react-icons/fa';
import { HiOutlineChevronDown } from 'react-icons/hi2';
import { BiChevronLeft, BiChevronRight, BiChevronsLeft, BiChevronsRight } from 'react-icons/bi';

const RolesTable = ({ roles }) => {
	const [search, setSearch] = useState('');
	const [dropDown, setDropDown] = useState(false);
	const [filterBy, setFilterBy] = useState('All Categories');

	const dispatch = useDispatch();
	const darkMode = useSelector((state) => state.darkMode);
	const totalRows = useSelector((state) => state.totalRows);
	const currentPage = useSelector((state) => state.currentPage);
	const totalPage = useSelector((state) => state.totalPage);

	const handleSelect = (data) => {
		setFilterBy(data);
		setDropDown(!dropDown);
	};

	const [filteredRoles, setFilteredRoles] = useState(roles);

	useEffect(() => {
		setFilteredRoles(roles);
	}, [roles]);

	useEffect(() => {
		if (search === '') {
			setFilteredRoles(roles);
			return;
		}

		switch (filterBy) {
			case 'Role Name':
				setFilteredRoles(roles.filter((role) => role.name.toLowerCase().includes(search)));
				break;
			case 'Access':
				setFilteredRoles(
					roles.filter(
						(role) =>
							role.services.forEach((service) => service.name.includes(search)) ||
							role.worksets.forEach((workset) => workset.name.includes(search)) ||
							role.resources.forEach((resource) => resource.name.includes(search))
					)
				);
				break;
			case 'Description':
				setFilteredRoles(roles.filter((role) => role.description.toLowerCase().includes(search)));
				break;
			default:
				setFilteredRoles(roles);
				break;
		}
	}, [search, filterBy]);

	const columnsRole = [
		{
			name: 'No',
			selector: (row) => row.id,
			width: '3rem',
			center: true,
			cell: (_, index) => <p className='text-center'>{index + 1}</p>,
		},
		{
			name: 'Role Name',
			selector: (row) => row.name,
			sortable: true,
			width: '18rem',
		},
		{
			name: 'Access',
			sortable: false,
			width: '20rem',
			cell: (row) => <TagsContainer accessMenu={[...row.services, ...row.worksets, ...row.resources]} />,
		},
		{
			name: 'Description',
			selector: (row) => row.description,
			sortable: true,
		},
		{
			name: 'Action',
			expandableRows: true,
			center: true,
			width: 'auto',
			cell: (row) => <ActionButton userId={row.id} />,
		},
	];

	const styleRole = {
		rows: {
			style: {
				backgroundColor: darkMode ? '#353648E5' : 'white',
				color: darkMode ? 'white' : '#1F2937',
			},
		},
		headCells: {
			style: {
				paddingLeft: '8px',
				paddingRight: '8px',
				backgroundColor: darkMode ? '#353648E5' : '#4893E6',
				color: 'white',
				border: 'none',
				fontSize: '1rem',
				position: 'sticky',
			},
		},
		cells: {
			style: {
				paddingLeft: '8px',
				paddingRight: '8px',
				fontSize: '1rem',
				color: darkMode ? 'white' : '#1F2937',
				borderBottom: '1px solid #D1D5DB',
			},
		},
		pagination: {
			style: {
				backgroundColor: darkMode ? '#353648E5' : 'white',
				color: darkMode ? 'white' : '#1F2937',
				borderTop: '1px solid #D1D5DB',
			},
		},
	};

	const handleChangePage = (page, totalRows) => {
		dispatch(getRoles(page));
	};

	const handleRowsPerPage = (numRows, page) => {
		dispatch(getRoles(page, numRows));
	};

	const handleSort = (column, direction) => {
		const tableName = column.name.split(' ');

		if (tableName.length > 1) {
			const table = tableName[1].toLowerCase();
			dispatch(sortRoles(table, direction));
		} else {
			const table = column.name.toLowerCase();
			dispatch(sortRoles(table, direction));
		}
	};

	return (
		<React.Fragment>
			<div className='flex justify-start items-center w-full mb-5'>
				<Button
					type='button'
					className={cn(
						'items-center border px-3 rounded-md text-base w-[14rem] flex justify-between mr-3 h-full py-4',
						darkMode ? 'bg-[#353648E5] border-white text-white' : 'bg-white border-black'
					)}
					clickHandler={() => setDropDown(!dropDown)}>
					{filterBy}
					<HiOutlineChevronDown size={24} />
				</Button>
				<DropDown
					column={columnsRole}
					handler={handleSelect}
					className={cn('w-[14rem] z-50', dropDown ? 'block' : 'hidden')}
				/>
				<SearchComponent value={search} onChange={(event) => setSearch(event.target.value)} />
			</div>

			<DataTable
				columns={columnsRole}
				data={filteredRoles}
				customStyles={styleRole}
				pagination
				paginationServer
				paginationTotalRows={totalRows}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleRowsPerPage}
				sortIcon={<FaSortAmountUp size={24} className={`text-white ms-4`} />}
				sortServer
				onSort={handleSort}
				paginationIconPrevious={
					<BiChevronLeft
						size={24}
						className={`${
							darkMode
								? `${currentPage === 1 ? `text-gray-500` : `text-white`}`
								: `${currentPage === 1 ? `text-gray-200` : `text-gray-500`}`
						}`}
					/>
				}
				paginationIconNext={
					<BiChevronRight
						size={24}
						className={`${
							darkMode
								? `${currentPage === totalPage ? `text-gray-500` : `text-white`}`
								: `${currentPage === totalPage ? `text-gray-200` : `text-gray-500`}`
						}`}
					/>
				}
				paginationIconFirstPage={
					<BiChevronsLeft
						size={24}
						className={`${
							darkMode
								? `${currentPage === 1 ? `text-gray-500` : `text-white`}`
								: `${currentPage === 1 ? `text-gray-200` : `text-gray-500`}`
						}`}
					/>
				}
				paginationIconLastPage={
					<BiChevronsRight
						size={24}
						className={`${
							darkMode
								? `${currentPage === totalPage ? `text-gray-500` : `text-white`}`
								: `${currentPage === totalPage ? `text-gray-200` : `text-gray-500`}`
						}`}
					/>
				}
			/>
		</React.Fragment>
	);
};

export default RolesTable;
