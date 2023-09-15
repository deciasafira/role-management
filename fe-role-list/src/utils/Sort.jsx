export function sortByRoleName(roles, sortDirection) {
    return roles.slice().sort((a, b) => {
      const nameA = a.role_name;
      const nameB = b.role_name;
      return sortDirection === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });
  }
  
  export function sortByWorkset(roles, sortDirection) {
    return roles.slice().sort((a, b) => {
      const worksetA = a.workset.join(', ');
      const worksetB = b.workset.join(', ');
      return sortDirection === 'asc' ? worksetA.localeCompare(worksetB) : worksetB.localeCompare(worksetA);
    });
  }
  
  export function sortByServices(roles, sortDirection) {
    return roles.slice().sort((a, b) => {
      const rolesA = a.role.join(', ');
      const rolesB = b.role.join(', ');
      return sortDirection === 'asc' ? rolesA.localeCompare(rolesB) : rolesB.localeCompare(rolesA);
    });
  }
  