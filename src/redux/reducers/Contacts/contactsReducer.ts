const INITIAL_STATE = {
  contacts: [],
};

const contactsReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'SYNC_CONTACTS':
      return {
        contacts: action.payload,
      };
    default:
      return state;
  }
};

export default contactsReducer;
