import React, { Component } from 'react';
import { Text, TouchableHighlight, View, Image } from 'react-native';
import Activity from './Activity';
import FavoriteProducts from './FavoriteProducts';
import Following from './Following';
const style = require('./../style/styles');

export default class Profile extends Component {
  render() {
    var profilePage = <Activity />;
    if (this.props.profilePage === 'Activity') {
      profilePage = <Activity />;
    } else if (this.props.profilePage === 'Favorite Products') {
      profilePage = <FavoriteProducts favoritedProducts={this.props.favoritedProducts}/>;
    } else if (this.props.profilePage === 'Following') {
      profilePage = <Following following={this.props.following}/>;
    }

    return (
      <View>
         <View style={{marginTop: 20, marginLeft: 350}}>
          <TouchableHighlight onPress={this.props.goToAllergiesAndDiet}>
            <Image style={{height: 50, width: 50}} source={{uri: 'http://graphiccave.com/wp-content/uploads/2015/04/Settings-Icon-PNG-Graphic-Cave.png'}}></Image>
          </TouchableHighlight>
        </View>
        <Image style={{height: 50, width: 50}} source={{ uri: this.props.picture }}></Image>
        <Text>{this.props.username}</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableHighlight style={{margin: 10}} onPress={this.props.renderActivity}>
            <Text>
              Activity
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={{margin: 10}} onPress={this.props.renderFavoriteProducts}>
            <Text>
              Favorite Products
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