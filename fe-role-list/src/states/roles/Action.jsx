// import React from 'react'
// import FetchRoles from '../../utils/FetchRoles'

// const Action = {
//     RECEIVE_ROLES: 'RECEIVE_ROLES',
// }

// function receiveRolesActionCreator(roles) {
//     return {
//         type: Action.RECEIVE_ROLES,
//         payload: {
//             roles,
//         },
//     };
// }

// function asyncReceiverRoles() {
//     return async (dispatch) => {
//         try {
//             const roles = await FetchRoles.getDataRoles();
//             console.log(roles);
//             dispatch(receiveRolesActionCreator(roles));
//         }
//         catch (error) {
//             console.log(error);
//         }
//     };
// }

// export {
//     Action,
//     receiveRolesActionCreator,
//     asyncReceiverRoles
// }
import FetchRoles from '../../utils/FetchRoles';

const Action = {
    RECEIVE_ROLES: 'RECEIVE_ROLES',
}

function receiveRolesActionCreator(roles) {
    return {
        type: Action.RECEIVE_ROLES,
        payload: {
            roles,
        },
    };
}

function asyncReceiverRoles() {
    return async (dispatch) => {
        try {
            const response = await FetchRoles.getDataRoles();
            const roles = response.roles; // Perbarui cara mengambil data
            dispatch(receiveRolesActionCreator(roles));
        }
        catch (error) {
            console.log(error);
        }
    };
}

export {
    Action,
    receiveRolesActionCreator,
    asyncReceiverRoles
}
