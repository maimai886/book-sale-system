import { combineReducers, legacy_createStore,compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import numStatusReducer from './numStatus/reducer';
import mobileDataReducer from './mobileData/reducer';
import userDataReducer from './userData/reducer';

const reducers = combineReducers({
    numStatusReducer,
    mobileDataReducer,
    userDataReducer,
})
//状態管理作成
//const store = legacy_createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


//同步異步処理
let composeEnhace = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const store = legacy_createStore(reducers,composeEnhace(applyMiddleware(reduxThunk)));


export default store