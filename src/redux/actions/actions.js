export const login = (username, password) => ({type: 'LOGIN', username: username, password: password});
export const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    user: user
});
export const loginFail = (error) => ({
    type: 'LOGIN_FAIL',
    error: error
});
export const checkin = (userId, date, startTime, endTime, deviceInfo, createBy, updateBy) => ({
    type: 'CHECK_IN',
    userId: userId,
    data: date,
    startTime: startTime,
    endTime: endTime,
    deviceInfo: deviceInfo,
    createBy: createBy,
    updateBy: updateBy
});
export const logout = () => ({type: 'LOGOUT'});
export const getAllUsers = (all_users) => ({
    type: 'GET_ALL_USERS',
    all_users: all_users
});
export const getAllUsersSummary = (all_users_summary) => ({
    type: 'GET_ALL_USERS_SUMMARY',
    all_users_summary: all_users_summary
});
export const getUserSummary = (user_summary) => ({
    type: 'GET_USER_SUMMARY',
    user_summary: user_summary
});
export const getAbsences = () =>({

});

