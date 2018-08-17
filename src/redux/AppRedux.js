import _ from 'lodash'
import Immutable from 'seamless-immutable'
import {createActions, createReducer} from 'reduxsauce'

const {Types, Creators} = createActions({
    // loginSuccess: ['status','userData', 'profileUser', 'permission'],
    // loginFail: ['error'],
    // logout: ['userData', 'profile', 'permissionUser'],
    // checkPermission: ['permission'],
    addNotify: ['id', 'title'],
    removeNotify: ['id'],
    putNotify: ['title'],
    showDialog: ['title', 'message', 'button'],
    hideDialog: null,

    dialog: ['title', 'message', 'button', 'show']
});

export const AppTypes = Types;
export const AppCreators = Creators;

const INITIAL_STATE = {
    // loginSuccess: {
    //     status: '',
    //     userData: [],
    //     profileUser: [],
    //     permissionUser: ''
    // },
    // loginFail: {
    //     error: ''
    // },

    notifys: [],
    dialog: {
        title: '',
        message: '',
        button: [],
        show: false
    }
};

// export const loginSuccess = (state, {status, userData, profileUser, permissionUser}) => {
//     return Immutable(state).merge({
//         loginSuccess: AppCreators.loginSuccess(status, userData, profileUser, permissionUser)
//     })
// };
//
// export const loginFail = (state, {error}) => {
//     return Immutable(state).merge({
//         loginFail: AppCreators.loginFail(error)
//     })
// }

export const addNotify = (state, {id, title}) => {
    return Immutable(state).merge({
        notifys: _.concat(state.notifys, {id: id, title: title})
    })
};

export const removeNotify = (state, {id}) => {
    return Immutable(state).merge({
        notifys: _.filter(state.notifys, noti => noti.id != id)
    });
};

export const showDialog = (state, {title, message, button}) => {
    return Immutable(state).merge({
        dialog: AppCreators.dialog(title, message, button || [], true)
    });
};

export const hideDialog = (state) => {
    return Immutable(state).merge({
        dialog: AppCreators.dialog('', '', [], false)
    });
};

export default createReducer(INITIAL_STATE, {
    // [Types.LOGIN_SUCCESS]: loginSuccess,
    [Types.ADD_NOTIFY]: addNotify,
    [Types.REMOVE_NOTIFY]: removeNotify,
    [Types.SHOW_DIALOG]: showDialog,
    [Types.HIDE_DIALOG]: hideDialog,
})
