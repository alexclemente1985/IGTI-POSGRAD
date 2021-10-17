import {PhoneContactState, PhoneContactTypes} from './types';
import {Reducer} from 'redux';
import {Contact} from 'react-native-contacts';

const INITIAL_STATE: PhoneContactState = {
  data: [] as Contact[],
  error: false,
  loading: false,
};

const reducer: Reducer<PhoneContactState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PhoneContactTypes.CONTACTS_REQUEST:
      return {...state, loading: true};
    case PhoneContactTypes.CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case PhoneContactTypes.CONTACTS_FAILURE:
      return {...state, loading: false, error: true, data: []};
    default:
      return state;
  }
};

export default reducer;
