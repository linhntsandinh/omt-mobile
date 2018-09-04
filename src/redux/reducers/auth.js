const INITIAL_STATE = {
    login: {
        isLoggedIn: false,
        username: '',
        password: '',
    },
    all_users: null,
    user: null,
    error: '',
    all_users_summary: null,
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
            return {...state,
                user: action.user
            };
        case 'LOGIN_FAIL':
            return Object.assign({}, state, {
                error: action.error,
            });
        case 'CHECK_IN':
            return {...state,
                userId: action.userId,
                date: action.date,
                startTime: action.startTime,
                endTime: action.endTime,
                deviceInfo: action.deviceInfo,
                createBy: action.createBy,
                updateBy: action.updateBy
            };
        case 'GET_ALL_USERS':
            return {...state,
                all_users: action.all_users
            };
        case 'GET_ALL_USERS_SUMMARY':
            return {...state,
                all_users_summary: action.all_users_summary
            };
        default:
            return state;
    }
}
