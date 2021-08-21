import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  image: {
width:'100%',
height:360,
marginTop: 50,
  },
  content: {
    marginTop:-40,
  paddingHorizontal: 50,
  },
  subtitle: {
    color:theme.colors.heading,
    fontSize:20,
    marginBottom:64,
    textAlign:'center',
    fontFamily: theme.fonts.title500,
    lineHeight:25,
  },
title:{
  color:theme.colors.heading,
  textAlign:'center',
  fontSize:40,
  marginBottom:16,
  fontFamily: theme.fonts.title700,
  lineHeight:40,
}


})