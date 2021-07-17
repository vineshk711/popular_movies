import { createStore, applyMiddleware } from "redux";
import createMiddleware from 'redux-saga'

import reducer from './reducers'
import mySaga from './sagas'

const sagaMiddleware = createMiddleware()

const  store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)


sagaMiddleware.run(mySaga)

export default store;