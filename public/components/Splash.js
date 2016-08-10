import React, { Component, PropTypes } from 'react';
import { Text, TouchableHighlight, View, Image } from 'react-native';
var {FBLogin, FBLoginManager} = require('react-native-facebook-login');



const style = require('./../style/styles');

export default class Splash extends Component {
  render() {
    var _this = this;
  	return (
  	  <View style={style.styles.container}>
        <Image
          source={{uri: 'https://elixirgraphics.com/assets/img/theme_images/feather-icon-256x256-NEW.jpg'}}
          style={style.styles.icon}
        />
        <Text style={{height: 50}}>It's easy to get started. Sign in with Facebook to get access to bof.</Text>
        
        <FBLogin style={{ marginBottom: 10, }}
        ref={(fbLogin) => { this.fbLogin = fbLogin }}
        permissions={["email","user_friends"]}
        loginBehavior={FBLoginManager.LoginBehaviors.Native}
        onLogin={function(data){
          console.log("Logged in!");
          console.log(data);
          _this.props.rootParent.setState({ userId : data.credentials.userId });
          console.log(_this.props.rootParent.state.userId);
          _this.props.onForward();
        }}
        onLogout={function(){
          console.log("Logged out.");
          _this.setState({ user : null });
        }}
        onLoginFound={function(data){
          console.log("Existing login found.");
          console.log(data);
          _this.setState({ user : data.credentials });
        }}
        onLoginNotFound={function(){
          console.log("No user logged in.");
          _this.setState({ user : null });
        }}
        onError={function(data){
          console.log("ERROR");
          console.log(data);
        }}
        onCancel={function(){
          console.log("User cancelled.");
        }}
        onPermissionsMissing={function(data){
          console.log("Check permissions!");
          console.log(data);
        }}
        />
  	  </View>
  	);
  }
}
