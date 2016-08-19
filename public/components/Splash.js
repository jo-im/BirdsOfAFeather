import React, { Component, PropTypes } from 'react';
import { Text, TouchableHighlight, View, Image, AsyncStorage } from 'react-native';
var {FBLogin, FBLoginManager} = require('react-native-facebook-login');
const _ = require('lodash');



const style = require('./../style/styles');

export default class Splash extends Component {
  async getUserFromFB(userId, token) {
    try {
      let url = `https://graph.facebook.com/v2.4/${userId}?fields=id,name,email,friends,picture&access_token=${token}`;
      let response = await fetch(url);
      let responseJson = await response.json();
      console.log('================================================', responseJson.picture.data.url)
      let _this = this;
      console.log('the value in friends state is: ', this.props.rootParent.state.friends);
      console.log('the value in picture state is: ', this.props.rootParent.state.picture);
      // console.log('the value in the picture state is', this.props.rootParent.state.picture);
      // check if friends list has changed if changed save to server
      if (!_.isEqual(responseJson.friends.data, this.props.rootParent.state.friends)) {
        console.log('the value from facebook and state are different')
        this.props.rootParent.setState({
          userId: responseJson.id,
          username: responseJson.name,
          friends: responseJson.friends.data,
          picutre: responseJson.picture.data.url
        });
        // save new FB information to DB
        this.postUserToServer(responseJson);
        // save new FB information to local storage
        this.saveUserData(responseJson);
      }
    } catch(error) {
      console.error(error);
    }
  }

  async postUserToServer(data) {
    var _this = this;
    console.log('POST request to murmuring-dusk-10598');
    console.log('the data being posted to server is', data);
    // fetch('https://murmuring-dusk-10598.herokuapp.com/api/facbook',
    fetch('http://10.6.24.1:3000/api/facebook', // local server for testing purposes
    {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: {
        id: data.id,
        username: data.name,
        email: data.email,
        friends: data.friends.data,
        picture: data.picture.data.url
      }
    })
    .then(data => {
      console.log('data received back from server posting is', data);
      _this.saveUserData(data);
    })
    .catch(err => console.log(err));
  }

  async saveUserData(data) {
    let multi_set_pairs = [['USERID', JSON.stringify(data.id)], 
                          ['USERNAME', JSON.stringify(data.name)],
                          ['EMAIL', JSON.stringify(data.email)],
                          ['FRIENDS', JSON.stringify(data.friends.data)],
                          ['PICTURE', JSON.stringify(data.picture.data.url)]
                          // ['CONCERNS', JSON.stringify('placeholder')],
                          // ['ALLERGIES', JSON.stringify('placeholder')],
                          // ['DIETS', JSON.stringify('placeholder')]
                          ];
    try {
      await AsyncStorage.multiSet(multi_set_pairs, (err) => { console.log('inside saveUserData and saved with no error');})
    } catch (error) {
      console.log('Error saving data: ', error);
    }
  }

  async retrieveUserData (ID) {
    let multi_get_keys = ['USERID','USERNAME', 'EMAIL', 'FRIENDS', 'CONCERNS', 'ALLERGIES', 'DIETS'];
    try {
      await AsyncStorage.multiGet(multi_get_keys, (err, stores) => {
        console.log('here in retrieveUserData -----  ', stores);
        this.props.rootParent.setState({
          userId: stores[0][1],
          username: stores[1][1],
          email: stores[2][1],
          friends: stores[3][1]
        });
      });
    } catch (error) {
      console.log('Error retrieving data: ', error);
    }
  }

  render() {
    var _this = this;
  	return (
  	  <View style={style.styles.container}>
        <Image
          source={{uri: 'https://elixirgraphics.com/assets/img/theme_images/feather-icon-256x256-NEW.jpg'}}
          style={style.styles.icon}
        />
        <Text style={{height: 50}}>It is easy to get started. Sign in with Facebook to get access to bof.</Text>
        
        <FBLogin style={{ marginBottom: 10, }}
        ref={(fbLogin) => { this.fbLogin = fbLogin }}
        permissions={["email","user_friends"]}
        loginBehavior={FBLoginManager.LoginBehaviors.Native}
        onLogin={function(data){
          _this.getUserFromFB(data.credentials.userId, data.credentials.token);
          _this.props.onForward();
        }}
        onLogout={function(){
          console.log("Logged out.");
        }}
        onLoginFound={function(data){
          console.log("Existing login found.");
          console.log(data);
          _this.getUserFromFB(data.credentials.userId, data.credentials.token);
          
          // _this.retrieveUserData(data.credentials.userId);
          _this.props.onForward();
          _this.props.onForward();
        }}
        onLoginNotFound={function(){
          console.log("No user logged in.");
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
