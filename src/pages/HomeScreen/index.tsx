import React from 'react';

import ContactList from '../../components/ContactList';

function HomeScreen({navigation}: any) {
  return <ContactList navigation={navigation} />;
}

export {HomeScreen};
