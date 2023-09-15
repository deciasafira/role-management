import axios from 'axios';

const api = (() => {
	const BASE_URL = 'https://943d-103-233-146-6.ngrok-free.app/api';

	async function getDataUsers() {
		try {
			const response = await axios.get(`${BASE_URL}/users`);
			const responseData = await response.data;
			return responseData.data;
		} catch (error) {
			console.log(error);
		}
	}

	async function getDetailUser(id) {
		try {
			const response = await axios.get(`${BASE_URL}/users/${id}`);
			const responseData = await response.data;
			return responseData;
		} catch (error) {
			console.log(error);
		}
	}

	async function deleteUser(id) {
		try {
			const response = await axios.delete(`${BASE_URL}/users/?id=${id}`);
			const responseData = await response.data;
			return responseData;
		} catch (error) {
			console.log(error);
		}
	}

	async function createDataUser({ roleName, access, description }) {
		try {
			const response = await fetch(`${BASE_URL}/users/`, {
				method: 'post',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify({
					roleName: roleName,
					access: access,
					description: description,
				}),
			});
			const responseData = response.data;
			return responseData;
		} catch (error) {
			console.log(error);
		}
	}

	return {
		getDataUsers,
		createDataUser,
		getDetailUser,
		deleteUser,
	};
})();

export default api;
