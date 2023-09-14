import React, { useEffect } from 'react';
import { RoleTable } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRoles } from '../states/redux/RolesAction';

const RolePage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllRoles());
	}, [dispatch]);

	const roles = useSelector((states) => states.roles);
	const currentPage = useSelector((state) => state.currentPage);

	useEffect(() => {
		localStorage.setItem('pageNum', currentPage);
	}, [currentPage]);

	return <RoleTable roles={roles} />;
};

export default RolePage;
