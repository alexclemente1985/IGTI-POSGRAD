import {action} from 'typesafe-actions';
import {PhoneContact, PhoneContactTypes} from './types';

export const phoneContactRequest = () =>
  action(PhoneContactTypes.CONTACTS_REQUEST);
export const phoneContactSuccess = (data: PhoneContact[]) =>
  action(PhoneContactTypes.CONTACTS_SUCCESS, {data});
export const phoneContactFailure = () =>
  action(PhoneContactTypes.CONTACTS_FAILURE);
