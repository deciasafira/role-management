import React, { useEffect } from 'react';
import { RoleTable } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const AccessRolePage = () => {
	const dispatch = useDispatch();
	const allRoles = useSelector((state) => state.allRoles);
	const menu = useSelector((state) => state.menu);

	const params = useParams();
	const { id } = params;

	useEffect(() => {
		// dispatch(getAllRoles());
		if (id) {
			const findRole = allRoles.find((role) => role.id === id);
			dispatch({ type: 'GET_MENU', payload: findRole.menus });
		}
	}, [dispatch, id, allRoles, menu]);

	return <RoleTable roles={allRoles} menu={menu} tableFor={'access-roles'} />;
};

export default AccessRolePage;
