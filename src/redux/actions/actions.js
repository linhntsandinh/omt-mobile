export const login = (username, password) => ({type: 'LOGIN', username: username, password: password});
export const loginSuccess = (userData, permission, profile, status) => ({
    type: 'LOGIN_SUCCESS',
    userData: userData,
    permission: permission,
    profile: profile,
    status: status
});
export const loginFail = (error) => ({
    type: 'LOGIN_FAIL',
    error: error
});
export const checkin = (id, userId, date, startTime, endTime, deviceInfo, createAt, updateAt, createBy, updateBy) => ({
    type: 'CHECK_IN',
    id: id,
    userId: userId,
    data: date,
    startTime: startTime,
    endTime: endTime,
    deviceInfo: deviceInfo,
    createAt: createAt,
    updateAt: updateAt,
    createBy: createBy,
    updateBy: updateBy
});
export const logout = () => ({type: 'LOGOUT'});

