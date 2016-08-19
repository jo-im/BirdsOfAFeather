import React, { Component } from 'react';
import { Text, TouchableHighlight, View, Image } from 'react-native';
import Comments from './Comments';
import FavoriteProducts from './FavoriteProducts';
import Followers from './Followers';
import Following from './Following';
const style = require('./../style/styles');

export default class Profile extends Component {
  render() {
    var profilePage = <Comments />;
    if (this.props.profilePage === 'Comments') {
      profilePage = <Comments />;
    } else if (this.props.profilePage === 'Favorite Products') {
      profilePage = <FavoriteProducts />;
    } else if (this.props.profilePage === 'Followers') {
      profilePage = <Followers />;
    } else if (this.props.profilePage = 'Following') {
      profilePage = <Following />;
    }

    return (
      <View>
        <Image style={{height: 50, width: 50}} source={{ uri: this.props.userPic }}></Image>
        <Text>{this.props.username}</Text>
        <Text>Followers: {Object.keys(this.props.followers).length}</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableHighlight style={{margin: 10}} onPress={this.props.renderComments}>
            <Text>
              Comments
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={{margin: 10}} onPress={this.props.renderFavoriteProducts}>
            <Text>
              Favorite Products
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={{margin: 10}} onPress={this.props.renderFollowers}>
            <Text>
              Followers
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={{margin: 10}} onPress={this.props.renderFollowing}>
            <Text>
              Following
            </Text>
          </TouchableHighlight>
        </View>
        <View style={{marginTop: 50}}>
        {profilePage}
        </View>
        <TouchableHighlight style={style.styles.back} onPress={this.props.onBack}>
          <Text style={style.styles.text}>Go Back</Text>
        </TouchableHighlight>
      </View>
    );
  }
}