import './index.scss';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import store from './states';
import RoleManagementPage from './pages/RoleManagementPage';

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<RoleManagementPage />
			</BrowserRouter>
		</Provider>
	);
};

const container = document.getElementById('app');
const root = ReactDOMClient.createRoot(container);
root.render(<App tab='login' />);
