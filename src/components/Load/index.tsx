import React from 'react';

import {
  View,
  ActivityIndicator
} from 'react-native';

import { styles } from './styles';
import { themes } from '../../global/styles/themes';

export function Load(){
  return (
    <View style={styles.container}>
      <ActivityIndicator 
        size="large"
        color={themes.colors.primary}
      />
    </View>
  );
}