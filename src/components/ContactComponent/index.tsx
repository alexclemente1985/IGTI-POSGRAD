import React from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import styles from './styles';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../config/Styles/colors';
import Contacts from 'react-native-contacts';

interface Props {
  contact: Contacts.Contact;
  isAddGuardian?: boolean;
}

const ContactComponent = (props: Props) => {
  const {contact, isAddGuardian} = props;

  function handlePhoneCall() {
    contact.phoneNumbers.map((phone, index) => {
      if (index === 0) {
        Linking.openURL(`tel:${phone.number}`);
      }
    });
  }

  function handleAddGuardian() {
    console.log('adicionando guardian');
  }

  function defaultContactRender() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.contactContainer}>
            <MaterialCommunityIcon
              name="account-circle"
              size={30}
              color={colors.blue1}
            />
            <Text ellipsizeMode="tail" numberOfLines={1} style={styles.contact}>
              {contact.givenName}
            </Text>
          </View>
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.icon}>
              <MaterialCommunityIcon
                name="message-outline"
                size={20}
                color={colors.blue1}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon} onPress={handlePhoneCall}>
              <MaterialCommunityIcon
                name="phone-outgoing-outline"
                size={25}
                color={colors.blue1}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <MaterialCommunityIcon
                name="map-marker-plus-outline"
                size={25}
                color={colors.blue1}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <MaterialCommunityIcon
                name="map-search-outline"
                size={25}
                color={colors.blue1}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <MaterialCommunityIcon
                name="close-circle-outline"
                size={25}
                color={colors.red1}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  function addGuardianContactComponentRender() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.contactContainer}>
            <MaterialCommunityIcon
              name="account-circle"
              size={30}
              color={colors.blue1}
            />
            <Text ellipsizeMode="tail" numberOfLines={1} style={styles.contact}>
              {contact.givenName}
            </Text>
          </View>
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.icon} onPress={handleAddGuardian}>
              <MaterialIcon
                name="person-add-alt"
                size={25}
                color={colors.blue1}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  function handleRender() {
    if (isAddGuardian) {
      return addGuardianContactComponentRender();
    }
    return defaultContactRender();
  }

  return handleRender();
};

export default ContactComponent;
