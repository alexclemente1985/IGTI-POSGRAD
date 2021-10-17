import {combineReducers} from 'redux';
import phoneContacts from './PhoneContacts';
import guardians from './Guardians';

export default combineReducers({
  phoneContacts,
  guardians,
});
