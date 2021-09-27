import React from 'react';
import {View} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import * as EntypoIcon from 'react-native-vector-icons/Entypo';
import * as EvilIconsIcon from 'react-native-vector-icons/EvilIcons';
import * as Feather from 'react-native-vector-icons/Feather';
import * as FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import * as Fontisto from 'react-native-vector-icons/Fontisto';
import * as Foundation from 'react-native-vector-icons/Foundation';
import * as Ionicons from 'react-native-vector-icons/Ionicons';
import * as MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Octicons from 'react-native-vector-icons/Octicons';
import * as SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import * as Zocial from 'react-native-vector-icons/Zocial';
import Constants from '../../config/Constants';

// import { Container } from './styles';
interface Props {
  lib?: string;
  name: string;
  size: number;
  color: string;
  iconStyle?: string;
  backgroundColor?: string;
  borderRadius?: number;
  onPress?: CallableFunction;
}
const Icons = (props: Props) => {
  const {lib} = props;
  const properties = {...props};
  delete properties.lib;

  switch (lib) {
    case Constants.icon_libs.ANT_DESIGN_ICON:
      return <View />;
  }

  return <View />;
};

export default Icons;
