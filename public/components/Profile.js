import React, { Component } from 'react';
import { Text, TouchableHighlight, View, Image } from 'react-native';
import Comments from './Comments';
const style = require('./../style/styles');

export default class Profile extends Component {
  render() {
    let profilePage = <Comments />;
    return (
      <View>
        <Image style={{height: 50, width: 50}} source={{ uri: this.props.userPic }}></Image>
        <Text>{this.props.username}</Text>
        <Text>Followers: {this.props.followers.length}</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableHighlight>
            <Text>
              Comments
            </Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text>
              Favorite Products
            </Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text>
              Followers
            </Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text>
              Following
            </Text>
          </TouchableHighlight>
        </View>
        <View>
        {profilePage}
        </View>
      </View>
    );
  }
}