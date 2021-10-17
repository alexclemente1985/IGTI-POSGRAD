import {action} from 'typesafe-actions';
import {PhoneContact} from '../PhoneContacts/types';
import {GuardianTypes} from './types';

export const addGuardianRequest = (data: PhoneContact) =>
  action(GuardianTypes.ADD_REQUEST, data);
export const addGuardianSuccess = (data: PhoneContact) =>
  action(GuardianTypes.ADD_SUCCESS, {data});
export const addGuardianFailure = () => action(GuardianTypes.ADD_FAILURE);
export const removeGuardianRequest = (data: PhoneContact) =>
  action(GuardianTypes.REMOVE_REQUEST, data);
export const removeGuardianSuccess = (data: PhoneContact) =>
  action(GuardianTypes.REMOVE_SUCCESS, {data});
export const removeGuardianFailure = () => action(GuardianTypes.REMOVE_FAILURE);
