/* eslint-disable react-hooks/exhaustive-deps */
import React, {useRef} from 'react';
import {useState} from 'react';
import {ScrollView, Platform, PermissionsAndroid} from 'react-native';
import ContactComponent from '../../components/ContactComponent';
import Contacts, {Contact} from 'react-native-contacts';
import {useEffect} from 'react';
import styles from './styles';

export function AddGuardiansScreen() {
  /* const {contacts} = useSelector((state: any) => state);
  const [loading, setLoading] = useState<boolean>(true);

  Contacts.iosEnableNotesUsage(false);

  const dispatch = useDispatch();

  function loadContacts() {
    Contacts.getAll()
      .then(contacts => {
        const trimmedContacts = contacts
          .filter(c => c.phoneNumbers.length > 0)
          .map(c => ({
            hasThumbnail: c.hasThumbnail,
            thumbnailPath: c.thumbnailPath,
            givenName: c.givenName,
            familyName: c.familyName,
            recordID: c.recordID,
            phoneNumbers: c.phoneNumbers,
          }));

        dispatch(syncContactsAction(trimmedContacts));
        setLoading(false);
      })
      .catch((e: any) => {
        setLoading(false);
      });

    Contacts.checkPermission();
  }

  function syncContacts() {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'Este app deseja acessar sua lista de contatos.',
        buttonPositive: 'Aceitar',
        buttonNegative: 'Negar',
      }).then(() => {
        loadContacts();
      });
    } else {
      loadContacts();
    }
  }

  useEffect(() => {
    syncContacts();
  }, []); */

  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);

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
          <ContactComponent key={index} contact={contact} isAddGuardian />
        ))}
    </ScrollView>
  );
}
