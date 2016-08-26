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
    textAlign: 'center',
    fontSize: 30
  },
  splashBackground: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)'
  },
  start: {
    color: 'white',
    fontFamily: 'Didot-Italic',
    textAlign: 'center',
    fontSize: 40,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 60,
    paddingLeft: 60
  },
  next: {
    marginLeft: 10,
    flexDirection: 'row',
    backgroundColor: '#5c5c8a',
    height: 30,
    width: 175,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
 
  },
  back: {
    flexDirection: 'row',
    backgroundColor: '#ffcc80',
    height: 30,
    width: 175,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navigationText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  icon: {
    height: 100,
    width: 100,
  },
  login: {
    height: 60,
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
    fontSize: 80,
    color: 'white'
  },
  health: {
    backgroundColor: '#ff6666',
    height: 200,
    width: 150
  },
  environment: {
    backgroundColor: 'green',
    height: 200,
    width: 150
  },
  society: {
    backgroundColor: '#3333ff',
    height: 200,
    width: 150
  },
  allergyAndDietIcon: {
    height: 50,
    width: 50,
    margin: 7
  }
});