import React, { Component, PropTypes } from 'react';
import { Text, TouchableHighlight, View, Image } from 'react-native';
var {FBLogin, FBLoginManager} = require('react-native-facebook-login');



const style = require('./../style/styles');

export default class Splash extends Component {
  async getUserFromFB() {
    try {
      let response = await fetch('https://graph.facebook.com/v2.7/10153934567142545?fields=email,friends,friendlists,taggable_friends&access_token=EAAECYZBumdKsBABxVqpfmepo2BGSRFEvnkuRUEaE5ZBQsWN0o1ZBaTyKkCJR2cmxJnte1rzYgEWji8shsCrZAp1GViOqZCFIMlRfSiNxZBSZAALYEHU9DgBZAEAJ84f2CKh8ZCmb4k6V00zOBnoq5otmLInXajdQyLq7bhDRZBnqMTQQ7LohZBXF2dUeWYvqdMkcf4ZD');
      let responseJson = await response.json();
      console.log('here in getUserFromFB: ', responseJson);
      return responseJson;
    } catch(error) {
      console.error(error);
    }
  }

  render() {
<<<<<<< f456f4f9e394c370928c372f4e7efba5b19d2f05
    var _this = this;
  	return (
  	  <View style={style.styles.container}>
=======
    return (
      <View style={style.styles.container}>
>>>>>>> Delete all tab space issues
        <Image
          source={{uri: 'https://elixirgraphics.com/assets/img/theme_images/feather-icon-256x256-NEW.jpg'}}
          style={style.styles.icon}
        />
        <Text style={{height: 50}}>It's easy to get started. Sign in with Facebook to get access to bof.</Text>
<<<<<<< f456f4f9e394c370928c372f4e7efba5b19d2f05
        
        <FBLogin style={{ marginBottom: 10, }}
        ref={(fbLogin) => { this.fbLogin = fbLogin }}
        permissions={["email","user_friends"]}
        loginBehavior={FBLoginManager.LoginBehaviors.Native}
        onLogin={function(data){
          console.log("Logged in!");
          _this.props.rootParent.setState({ userId : data.credentials.userId });
          _this.getUserFromFB();
          _this.props.onForward();
        }}
        onLogout={function(){
          console.log("Logged out.");
          _this.props.rootParent.setState({ user : null });
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
=======
        <TouchableHighlight style={style.styles.login} onPress={this.props.onForward} >                                                                                                                                                                                               
          <Text style={style.styles.loginText}>Facebook Login</Text>
        </TouchableHighlight>
      </View>
    );
>>>>>>> Delete all tab space issues
  }
}
