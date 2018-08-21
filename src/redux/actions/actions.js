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

