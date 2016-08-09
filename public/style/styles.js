import { StyleSheet } from 'react-native';

module.exports.styles = StyleSheet.create({
  container: {
  	flex: 1,
  	flexDirection: 'column',
  	justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'Didot-Italic',
    textAlign: 'center'
  },
  next: {
  	backgroundColor: '#5c5c8a',
  	marginTop: 30
  },
  back: {
    backgroundColor: '#ffcc80'
  },
  icon: {
  	height: 100,
  	width: 100,
  },
  login: {
  	height:50,
  	width: 400,
    backgroundColor: '#3b5998'
  },
  loginText: {
  	textAlign: 'center', 
  	color: 'white', 
  	marginTop: 17
  },
  concernQuestion: {
    fontFamily: 'Didot-Italic', 
    fontSize: 20, 
    marginLeft: 10, 
    height: 40
  },
  welcome: {
  	textAlign: 'center', 
  	fontFamily: 'Didot-Italic', 
  	fontSize: 50
  },
  health: {
    backgroundColor: '#ff6666',
  },
  environment: {
    backgroundColor: 'green'
  },
  society: {
    backgroundColor: '#3333ff'
  },
  allergyAndDietIcon: {
    height: 50,
    width: 50,
    margin: 3
  }
});