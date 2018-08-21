const INITIAL_STATE = {
    login: {
        isLoggedIn: false,
        username: '',
        password: '',
    },
    user: null,

    error: '',
    timeLog: {
        userId: null,
        date: '',
        startTime: '',
        endTime: '',
        deviceInfo: '',
        createBy: null,
        updateBy: null
    }
};
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOGIN':
            return Object.assign({}, state.login, {
                isLoggedIn: true,
                username: action.username,
                password: action.password
            });
        case 'LOGOUT':
            return Object.assign({}, state.login, {
                isLoggedIn: false,
                username: '',
                password: ''
            });
        case 'LOGIN_SUCCESS':
            return {
                user: action.user
            };
        case 'LOGIN_FAIL':
            return Object.assign({}, state, {
                error: action.error,
            });
        case 'CHECK_IN':
            return {
                timeLog: {
                    userId: action.userId,
                    date: action.data,
                    startTime: action.startTime,
                    endTime: action.endTime,
                    deviceInfo: action.deviceInfo,
                    createBy: action.createBy,
                    updateBy: action.updateBy
                }
            };
        default:
            return state;
    }
}
