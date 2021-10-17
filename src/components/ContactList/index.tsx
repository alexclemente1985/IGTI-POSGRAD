/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {useEffect} from 'react';
import {ScrollView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ApplicationState} from '../../store';
import {phoneContactRequest} from '../../store/PhoneContacts/actions';
import {PhoneContact} from '../../store/PhoneContacts/types';
import ContactCard from '../ContactCard';

interface Props {
  isAddGuardianPage?: boolean;
}

const ContactList: React.FC<Props> = (props: Props) => {
  const {phoneContacts, guardians} = useSelector((state: ApplicationState) => ({
    phoneContacts: state.phoneContacts.data,
    guardians: state.guardians.data,
  }));
  const {isAddGuardianPage} = props;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!phoneContacts || (phoneContacts && phoneContacts.length === 0)) {
      dispatch(phoneContactRequest());
    }
  }, []);

  function handleContactList() {
    if (isAddGuardianPage) {
      return phoneContacts && phoneContacts.length > 0 ? (
        phoneContacts.map((contact: PhoneContact, index: number) => (
          <ContactCard
            key={index}
            contact={contact}
            isAddGuardian={isAddGuardianPage}
          />
        ))
      ) : (
        <Text>Lista Vazia de contatos</Text>
      );
    }
    return guardians && guardians.length > 0 ? (
      guardians.map((contact: PhoneContact, index: number) => (
        <ContactCard key={index} contact={contact} />
      ))
    ) : (
      <Text>Sem guardiões adicionados</Text>
    );
  }
  return <ScrollView>{handleContactList()}</ScrollView>;
};

export default ContactList;
