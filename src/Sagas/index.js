import { delay } from 'redux-saga';
import { put, takeEvery, all } from 'redux-saga/effects';

function* incrementAsync() {
    yield delay(2000);
    yield put({ type: 'INCREMENT' });
}

function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export default function* rootSaga() {
    yield all([watchIncrementAsync()]);
}
