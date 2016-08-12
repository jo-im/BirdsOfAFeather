import React, { Component, PropTypes } from 'react';
import { Text, TouchableHighlight, View, Image } from 'react-native';
var {FBLogin, FBLoginManager} = require('react-native-facebook-login');



const style = require('./../style/styles');

export default class Splash extends Component {
  async getUserFromFB(userId, token) {
    try {
      let url = `https://graph.facebook.com/v2.4/${userId}?fields=id,name,email,friends&access_token=${token}`;
      let response = await fetch(url);
      let responseJson = await response.json();
      let _this = this;
      this.props.rootParent.setState({username: responseJson.name});
      this.postUserToServer(responseJson);
    } catch(error) {
      console.error(error);
    }
  }

  async postUserToServer(data) {
    fetch('http://10.6.24.31:3000/api/facebook', 
    {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: data.id,
        username: data.name,
        email: data.email,
        friends: data.friends.data
      })
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => console.log(err));
  }


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
          console.log("Logged in as: ", data);
          _this.getUserFromFB(data.credentials.userId, data.credentials.token);
          _this.props.onForward();
        }}
        onLogout={function(){
          console.log("Logged out.");
          _this.props.rootParent.setState({ user : null });
        }}
        onLoginFound={function(data){
          console.log("Existing login found.");
          console.log(data);
          _this.setState({ userId : data.credentials.userId });
          // _this.props.onForward();
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
