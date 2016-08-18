import React, { Component } from 'react';
import { Text, TouchableHighlight, View, Image } from 'react-native';
const style = require('./../style/styles');

export default class Profile extends Component {
  render() {
    return (
      <View>
        <Image style={{height: 50, width: 50}} source={{uri: this.props.userPic }}></Image>
        <Text>{this.props.username}</Text>
      </View>
    );
  }
}