/* eslint-disable @typescript-eslint/no-unused-vars */
import {PermissionsAndroid, Platform} from 'react-native';
import Contacts, {Contact} from 'react-native-contacts';
import {put} from 'redux-saga/effects';
import {phoneContactFailure, phoneContactSuccess} from './actions';

let phoneContacts: Contact[];

export function* contactsRequest() {
  try {
    if (Platform.OS === 'ios') {
      Contacts.getAll()
        .then((contacts: Contact[]) => {
          phoneContacts = contacts;
        })
        .catch(error => {
          throw new Error('Erro na obtenção de contatos no IOS.');
        });
    } else if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
        buttonPositive: 'Accept',
        buttonNegative: 'Decline',
      }).then(() => {
        Contacts.getAll()
          .then((contacts: Contact[]) => {
            phoneContacts = contacts;
          })
          .catch(error => {
            throw new Error('Erro na obtenção de contatos no Android.');
          });
      });
    }

    yield put(phoneContactSuccess(phoneContacts));
  } catch (err) {
    yield put(phoneContactFailure());
    throw err;
  }
}
