import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import styles from './styles';

function CustomStatusBar({backgroundColor, ...props}: any) {
  return (
    <View style={[styles.statusBar, {backgroundColor}]}>
      <SafeAreaView>
        <StatusBar backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );
}

export default CustomStatusBar;
