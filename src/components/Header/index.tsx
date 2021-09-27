import React from 'react';
import {TouchableOpacity, View, Text, SafeAreaView} from 'react-native';
import {getHeaderTitle} from '@react-navigation/elements';
import styles from './styles';
import {colors} from '../../config/Styles/colors';
import CustomStatusBar from '../CustomStatusBar';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Header({navigation, route, options, back}: any) {
  const title = getHeaderTitle(options, route.name);

  return (
    <>
      <CustomStatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={colors.blue2}
        translucent={false}
        networkActivityIndicatorVisible={true}
      />

      <SafeAreaView>
        <View style={styles.container}>
          {back && (
            <TouchableOpacity onPress={navigation.goBack}>
              <Icon name="chevron-left" color={colors.pastel} size={30} />
            </TouchableOpacity>
          )}
          <View style={styles.userContainer}>
            {route.name === 'Home' && (
              <Icon name="account-circle" color={colors.pastel} size={30} />
            )}
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

export default Header;
