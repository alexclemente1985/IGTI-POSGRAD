import {combineReducers} from 'redux';

import ContactsReducer from './Contacts/contactsReducer';

const rootReducer = combineReducers({
  contacts: ContactsReducer,
});

export default rootReducer;
