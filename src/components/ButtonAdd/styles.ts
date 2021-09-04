import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    height: 48,
    width: 48,
    backgroundColor: themes.colors.primary,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
});