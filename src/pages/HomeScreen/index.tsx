import React, {useRef, useState} from 'react';
import {
  View,
  PermissionsAndroid,
  Platform,
  FlatList,
  Text,
  ScrollView,
} from 'react-native';
import styles from './styles';
import ContactComponent from '../../components/ContactComponent';
import Contacts, {Contact} from 'react-native-contacts';
import {useEffect} from 'react';
import {useCallback} from 'react';

const HomeScreen: React.FC = () => {
  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);
  const [sampleContact, setSampleContact] = useState<Contact>();
  let array = useRef<Contact[]>();
  useEffect(() => {
    if (Platform.OS === 'ios') {
      Contacts.getAll()
        .then((contacts: Contact[]) => {
          setContacts(contacts);
        })
        .catch(error => {
          throw error;
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
            array.current = [...contacts];
          })
          .catch(error => {
            throw error;
          });
      });
    }
  }, []);

  useEffect(() => {
    if (contacts.length === 0 && array.current) {
      setContacts(array.current);
    }
  }, [array, contacts]);

  return (
    <ScrollView style={styles.container}>
      {contacts &&
        contacts.map((contact: Contacts.Contact, index: number) => (
          <ContactComponent key={index} contact={contact} />
        ))}
    </ScrollView>
  );
};

export {HomeScreen};
