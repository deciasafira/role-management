import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
	allRoles: [],
	roles: [],
	rolesById: [],
	menu: [],
	roleMenu: [],
	totalRows: 0,
	currentPage: 0,
	totalPage: 0,
	darkMode: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ALL_ROLES':
			return {
				...state,
				allRoles: action.payload,
			};
		case 'GET_ROLES':
			return {
				...state,
				roles: action.payload,
			};
		case 'ADD_ROLE':
			return {
				...state,
				roles: [...state.roles, action.payload],
			};
		case 'DELETE_ROLE':
			return {
				...state,
				roles: action.payload,
			};
		case 'UPDATE_ROLE':
			return {
				...state,
				roles: action.payload,
			};
		case 'GET_MENU_ACCESS':
			return {
				...state,
				menus: action.payload,
			};
		case 'ROLE_MENU':
			return {
				...state,
				roleMenu: action.payload,
			};
		case 'ADD_TOTAL_ROWS':
			return {
				...state,
				totalRows: action.payload,
			};
		case 'ADD_CURRENT_PAGE':
			return {
				...state,
				currentPage: action.payload,
			};
		case 'ADD_TOTAL_PAGE':
			return {
				...state,
				totalPage: action.payload,
			};
		case 'DARK_MODE':
			return {
				...state,
				darkMode: action.payload,
			};
		default:
			return state;
	}
};

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
