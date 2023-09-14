import axios from 'axios';
import Swal from 'sweetalert2';

const roleurl = new URL(`${process.env.API_URL}/roles`);

export const getAllRoles = () => {
	return (dispatch) => {
		axios
			.get(roleurl)
			.then((response) => {
				dispatch({
					type: 'GET_ALL_ROLES',
					payload: response.data.roles,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

export const getRoles = (page = 1, newPerPage = 10) => {
	return (dispatch) => {
		const url = new URL(roleurl);
		url.searchParams.append('page', page);
		url.searchParams.append('limit', newPerPage);

		axios
			.get(url)
			.then((response) => {
				dispatch({
					type: 'GET_ROLES',
					payload: response.data.roles,
				});
				dispatch({
					type: 'ADD_TOTAL_ROWS',
					payload: response.data.totalItems,
				});
				dispatch({
					type: 'ADD_CURRENT_PAGE',
					payload: response.data.currentPage,
				});
				dispatch({
					type: 'ADD_TOTAL_PAGE',
					payload: response.data.totalPages,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

export const sortRoles = (column, direction) => {
	return (dispatch) => {
		const url = new URL(roleurl);
		url.searchParams.append('page', 1);
		url.searchParams.append('limit', 10);
		url.searchParams.append('sort', `${column}:${direction}`);

		axios
			.get(url)
			.then((response) => {
				dispatch({
					type: 'GET_ROLES',
					payload: response.data.roles,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

export const searchRoles = (search, column = 'name') => {
	return async (dispatch) => {
		await axios
			.get(`${process.env.API_URL}/roles?${column}=${search}`)
			.then((response) => {
				dispatch({
					type: 'GET_ROLES',
					payload: response.data.roles,
				});
				dispatch({
					type: 'ADD_TOTAL_PAGE',
					payload: response.data.totalPages,
				});
				dispatch({
					type: 'ADD_CURRENT_PAGE',
					payload: response.data.currentPage + 1,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

export const addRoles = (role, darkMode, navigate) => {
	return async (dispatch) => {
		await axios
			.post(`${process.env.API_URL}/roles`, role, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then(async () => {
				await Swal.fire({
					html: `<div class="container"><div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></svg></div><div class="${
						darkMode ? `textDiv-dark` : `textDiv-light`
					} text-bold">Save Success!</div></div>`,
					showConfirmButton: true,
					backdrop: darkMode ? `rgba(49, 50, 66, 0.4)` : `rgba(255, 255, 255, 0.4)`,
					background: darkMode ? `#313242` : `#FFFFFF`,
					text: darkMode ? `#FFFFFF` : `#313242`,
					buttonsStyling: false,
					confirmButtonText: "<p class='text-green-400 font-semibold'>OK</p>",
					customClass: {
						icon: 'border-none custom-swal-icon',
						confirmButton: 'swal-conf',
						popup: darkMode ? `swal-popup-dark` : `swal-popup-light`,
					},
				}).then(() => {
					navigate;
					dispatch(getRoles());
				});
			})
			.catch(async (error) => {
				await Swal.fire({
					html: `<div class="container-fail"><div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path></svg></div><div class="${
						darkMode ? `textDiv-dark` : `textDiv-light`
					} text-bold">Save Failed!</div></div>`,
					showConfirmButton: true,
					backdrop: darkMode ? `rgba(49, 50, 66, 0.4)` : `rgba(255, 255, 255, 0.4)`,
					background: darkMode ? `#313242` : `#FFFFFF`,
					confirmButtonColor: '#FFFFFF',
					confirmButtonText: "<p class='text-red-500 font-semibold'>Close</p>",
					customClass: {
						icon: 'border-none custom-swal-icon',
						confirmButton: 'swal-conf-fail bg-transparent',
						popup: darkMode ? `swal-popup-dark` : `swal-popup-light`,
					},
				});
			});
	};
};

export const deleteRole = (id, darkMode, navigate) => {
	return async (dispatch) => {
		Swal.fire({
			html: `<div class="container"><div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></svg></div><div class="${
				darkMode ? `textDiv-dark` : `textDiv-light`
			} text-bold">Save Success!</div></div>`,
			showConfirmButton: true,
			backdrop: darkMode ? `rgba(49, 50, 66, 0.4)` : `rgba(255, 255, 255, 0.4)`,
			background: darkMode ? `#313242` : `#FFFFFF`,
			text: darkMode ? `#FFFFFF` : `#313242`,
			buttonsStyling: false,
			confirmButtonText: "<p class='text-green-400 font-semibold'>OK</p>",
			customClass: {
				icon: 'border-none custom-swal-icon',
				confirmButton: 'swal-conf',
				popup: darkMode ? `swal-popup-dark` : `swal-popup-light`,
			},
		}).then((res) => {
			if (res.isConfirmed) {
				axios
					.delete(`${process.env.API_URL}/roles/${id}`)
					.then(() => {
						dispatch(getRoles());
						navigate;
					})
					.catch(() => {
						Swal.fire({
							html: `<div class="container-fail"><div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path></svg></div><div class="${
								darkMode ? `textDiv-dark` : `textDiv-light`
							} text-bold">Save Failed!</div></div>`,
							showConfirmButton: true,
							backdrop: darkMode ? `rgba(49, 50, 66, 0.4)` : `rgba(255, 255, 255, 0.4)`,
							background: darkMode ? `#313242` : `#FFFFFF`,
							confirmButtonColor: '#FFFFFF',
							confirmButtonText: "<p class='text-red-500 font-semibold'>Close</p>",
							customClass: {
								icon: 'border-none custom-swal-icon',
								confirmButton: 'swal-conf-fail bg-transparent',
								popup: darkMode ? `swal-popup-dark` : `swal-popup-light`,
							},
						});
					});
			}
		});
	};
};

export const updateRole = (role, id) => {
	return async (dispatch) => {
		await axios
			.put(`${process.env.API_URL}/roles/${id}`, role, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then(() => {
				dispatch(getRoles());
			});
	};
};

export const getMenuAccess = () => {
	return async (dispatch) => {
		await axios.get(`${process.env.API_URL}/menus`).then((response) => {
			dispatch({
				type: 'GET_MENU_ACCESS',
				payload: response.data.menus,
			});
		});
	};
};

export const findRole = (id) => {
	return async (dispatch) => {
		await axios.get(`${process.env.API_URL}/roles/${id}`).then((response) => {
			dispatch({
				type: 'ROLE_MENU',
				payload: response.data.roles.accesses,
			});
		});
	};
};

export const handleDarkMode = () => {
	return (dispatch) => {
		dispatch({
			type: 'DARK_MODE',
			payload: !localStorage.getItem('darkMode'),
		});
	};
};
