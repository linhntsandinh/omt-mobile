import {delay} from 'redux-saga'
import {AppCreators, AppTypes} from '../redux/AppRedux'
import {call, put, takeEvery} from 'redux-saga/effects'
import uuidV4 from 'uuid/v4';
// import {loginSuccess, loginFail} from '../redux/actions/actions'
//
// function* loginDataReceive(user) {
//     yield call(delay, 1000)
//     yield put(loginSuccess(user))
// }
//
// export function* watchLoginDataReceive() {
//     yield takeEvery(loginSuccess, loginDataReceive)
// }

function* putNotify({title}) {
    let id = uuidV4();
    yield put(AppCreators.addNotify(id, title));
    yield call(delay, 1000);
    yield put(AppCreators.removeNotify(id));
}

export function* watchShowNotify() {
    yield takeEvery(AppTypes.PUT_NOTIFY, putNotify);
}

export default [
    watchShowNotify(),
    // watchLoginDataReceive()
]
