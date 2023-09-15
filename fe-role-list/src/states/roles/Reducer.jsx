// import { Action } from "./Action";

// function rolesReducer(roles = [], action = {}) {
//     switch (action.type) {
//         case Action.RECEIVE_ROLES:
//             return action.payload.roles;
//         default:
//             return roles;
//     }
// }

// export default rolesReducer

import { Action } from "./Action";

function rolesReducer(roles = [], action = {}) {
    switch (action.type) {
        case Action.RECEIVE_ROLES:
            return action.payload.roles;
        default:
            return roles;
    }
}

export default rolesReducer;
