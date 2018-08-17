const INITIAL_STATE = {
    login: {
        isLoggedIn: false,
        username: '',
        password: '',
    },

    user_data: {
        id: null,
        username: '',
        password: '',
        email: '',
        avatar: '',
        holidayRemaining: null,
        status: null,
        created_at: null,
        updated_at: null,
        updated_by: null
    },
    permission: [],
    Profile: {
        id: null,
        user_id: null,
        full_name: '',
        phone_number: '',
        birth_date: null,
        address: '',
        departmenti_id: null,
        job_title_id: null,
        job_position_id: null,
        status: null,
        join_date: null,
        gender: null,
        created_at: null,
        updated_at: null,
        created_by: null
    },
    status: '',
    error: '',
    timeLog: {
        id: null,
        userId: '',
        date: null,
        startTime: null,
        endTime: null,
        deviceInfo: '',
        createAt: null,
        updateAt: null,
        createBy: null,
        updateBy: null
    }
    // loginFail: {
    //     error: ''
    // },
    //
    // notifys: [],
    // dialog: {
    //     title: '',
    //     message: '',
    //     button: [],
    //     show: false
    // }
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
                user_data: {
                    id: action.id,
                    username: action.username,
                    password: action.password,
                    email: action.email,
                    avatar: action.avatar,
                    holidayRemaining: action.holidayRemaining,
                    status: action.status,
                    created_at: action.created_at,
                    updated_at: action.updated_at,
                    updated_by: action.updated_by
                },
                permission: _.concat(action.permission),
                Profile: {
                    id: action.id,
                    user_id: action.user_id,
                    full_name: action.full_name,
                    phone_number: action.phone_number,
                    birth_date: action.birth_date,
                    address: action.address,
                    departmenti_id: action.departmenti_id,
                    job_title_id: action.job_title_id,
                    job_position_id: action.job_position_id,
                    status: action.status,
                    join_date: action.join_date,
                    gender: action.gender,
                    created_at: action.created_at,
                    updated_at: action.updated_at,
                    created_by: action.created_by
                },
                status: action.status,
            };
        case 'LOGIN_FAIL':
            return Object.assign({}, state, {
                error: action.error,
            });
        case 'CHECK_IN':
            return {

            }
        default:
            return state;
    }
}
