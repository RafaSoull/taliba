import { StyleSheet } from 'react-native';

import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 360,    
  },
  content: {    
    marginTop: -40,    
    paddingHorizontal: 50
  },
  title: {
    color: themes.colors.heading,
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 16,   
    fontFamily: themes.fonts.title700,
    lineHeight: 40 
  },
  subtitle: {
    color: themes.colors.heading,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 64,
    fontFamily: themes.fonts.title500,
    lineHeight: 25
  }
});