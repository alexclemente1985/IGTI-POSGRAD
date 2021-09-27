const syncContacts = (contacts: any) => ({
  type: 'SYNC_CONTACTS',
  payload: contacts,
});

export default syncContacts;
