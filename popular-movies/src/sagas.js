import { call, put, takeEvery, takeLatest} from 'redux-saga/effects'

import { REQUEST_HELLO_WORLD, recieveHelloWorld } from './actions'
import helloworld from './reducers/helloworld'

function* helloWorld(action) {
    try {
        // api call goes here
        yield put(recieveHelloWorld("Hello World from redux-saga"))
    } catch (e) {
        yield put(recieveHelloWorld("hello form redux-saga"))
    }
}


export default function* mySaga() {
    yield takeLatest(REQUEST_HELLO_WORLD, helloworld)
}