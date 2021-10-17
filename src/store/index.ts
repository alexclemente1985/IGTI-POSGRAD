import {applyMiddleware, createStore, Store} from 'redux';
import {PhoneContactState} from './PhoneContacts/types';
import rootReducer from './rootReducer';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './rootSaga';
import {GuardianState} from './Guardians/types';
export interface ApplicationState {
  phoneContacts: PhoneContactState;
  guardians: GuardianState;
}
const sagaMiddleware = createSagaMiddleware();
const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);
export default store;
