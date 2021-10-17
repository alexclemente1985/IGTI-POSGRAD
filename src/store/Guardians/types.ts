import {PhoneContact} from '../PhoneContacts/types';

export enum GuardianTypes {
  ADD_REQUEST = '@guardians/ADD_REQUEST',
  ADD_SUCCESS = '@guardians/ADD_SUCCESS',
  ADD_FAILURE = '@guardians/ADD_FAILURE',
  REMOVE_REQUEST = '@guardians/REMOVE_REQUEST',
  REMOVE_SUCCESS = '@guardians/REMOVE_SUCCESS',
  REMOVE_FAILURE = '@guardians/REMOVE_FAILURE',
}

export interface GuardianState {
  readonly data: PhoneContact[];
  readonly loading: boolean;
  readonly error: boolean;
}
