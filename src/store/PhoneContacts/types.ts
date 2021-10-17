import {Contact} from 'react-native-contacts';

export enum PhoneContactTypes {
  CONTACTS_REQUEST = '@contacts/CONTACTS_REQUEST',
  CONTACTS_SUCCESS = '@contacts/CONTACTS_SUCCESS',
  CONTACTS_FAILURE = '@contacts/CONTACTS_FAILURE',
}

export interface PhoneContact extends Contact {}

export interface PhoneContactState {
  readonly data: PhoneContact[];
  readonly loading: boolean;
  readonly error: boolean;
}
