const FetchRoles = (() => {
  const API_URL = "http://localhost:8080";
  const AUTH_TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQ3NzA1NTIsImlhdCI6MTY5NDUxMTM1MiwibmJmIjoxNjk0NTExMzUyLCJzdWIiOiIzZDlkMzQ4Ny1hZTYzLTRiZGYtYTM3Ni02Mzc1ZmMyNGU0YTkifQ.BVdwWvxSF7X9UX02lJtXMHc6yswwIitqe5qKgCIKkPY";
  async function getDataRoles() {
    try {
      const response = await fetch(`${API_URL}/api/v1/roles`, {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      });
      const responseData = await response.json();
      const roleData = responseData.data;
      console.log(roleData);
      console.log(responseData);
      return roleData;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  console.log(getDataRoles());

  
  return {
    getDataRoles,
    // getDetailsUser,
    // deleteDataUsers
  };
})();

export default FetchRoles;
