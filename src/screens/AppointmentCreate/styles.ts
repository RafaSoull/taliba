import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontFamily: themes.fonts.title700,
    color: themes.colors.heading,    
  },
  form: {
    paddingHorizontal: 24,
    marginTop: 32
  },
  select: {
    flexDirection: 'row',
    width: '100%', 
    height: 68,
    borderColor: themes.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',    
    paddingRight: 25,
    overflow: 'hidden',    
  },
  selectBody: {
    flex: 1,
    alignItems: 'center',    
  },
  image: {
    width: 64,
    height: 68,
    backgroundColor: themes.colors.secondary40,
    borderColor: themes.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,    
  },
  field: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  divider: {
    marginRight: 4,
    fontSize: 15,
    fontFamily: themes.fonts.text500,
    color: themes.colors.highlight 
  },
  caracteresLimit: {
    fontFamily: themes.fonts.text400,
    fontSize: 13,
    color: themes.colors.highlight
  },
  footer: {
    marginVertical: 20,
    marginBottom: 56,
  }
});