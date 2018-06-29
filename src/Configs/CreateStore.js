//redux
import {applyMiddleware, combineReducers, createStore} from 'redux';
//redux saga
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';

import AppSagas from '../Saga/AppSagas'

export const Reducers = combineReducers({
    app: require('../redux/AppRedux').default
});

export function* RootSaga() {
    yield all([
        ...AppSagas,
    ])
}

export const sagaMiddleware = createSagaMiddleware();
const store = createStore(Reducers, applyMiddleware(sagaMiddleware));

export default store
