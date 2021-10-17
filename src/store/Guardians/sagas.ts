import {put} from 'redux-saga/effects';

import {
  addGuardianFailure,
  addGuardianSuccess,
  removeGuardianFailure,
  removeGuardianSuccess,
} from './actions';

export function* addGuardianRequest({payload}: any) {
  try {
    yield put(addGuardianSuccess(payload));
  } catch (e) {
    yield put(addGuardianFailure());
  }
}

export function* removeGuardianRequest({payload}: any) {
  try {
    yield put(removeGuardianSuccess(payload));
  } catch (e) {
    yield put(removeGuardianFailure());
  }
}
