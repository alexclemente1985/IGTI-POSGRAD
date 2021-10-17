import {GuardianState, GuardianTypes} from './types';
import {Reducer} from 'redux';
import {PhoneContact} from '../PhoneContacts/types';

const INITIAL_STATE: GuardianState = {
  data: [] as PhoneContact[],
  error: false,
  loading: false,
};

const reducer: Reducer<GuardianState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GuardianTypes.ADD_REQUEST:
      return {...state, loading: true};
    case GuardianTypes.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: [...state.data, action.payload.data],
      };
    case GuardianTypes.ADD_FAILURE:
      return {...state, loading: false, error: true};
    case GuardianTypes.REMOVE_REQUEST:
      return {...state, loading: true};
    case GuardianTypes.REMOVE_SUCCESS:
      const guardianIndex = [...state.data].findIndex(
        guardian => guardian.recordID === action.payload.data.recordID,
      );

      const newData = [...state.data];
      newData.splice(guardianIndex, 1);
      return {
        ...state,
        loading: false,
        error: false,
        data: newData,
      };
    case GuardianTypes.REMOVE_FAILURE:
      return {...state, loading: false, error: true};
    default:
      return state;
  }
};

export default reducer;
