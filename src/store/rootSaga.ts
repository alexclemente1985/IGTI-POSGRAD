import {all, takeLatest} from '@redux-saga/core/effects';
import {contactsRequest} from './PhoneContacts/sagas';
import {PhoneContactTypes} from './PhoneContacts/types';
import {GuardianTypes} from './Guardians/types';
import {addGuardianRequest, removeGuardianRequest} from './Guardians/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(PhoneContactTypes.CONTACTS_REQUEST, contactsRequest),
    takeLatest(GuardianTypes.ADD_REQUEST, addGuardianRequest),
    takeLatest(GuardianTypes.REMOVE_REQUEST, removeGuardianRequest),
  ]);
}
