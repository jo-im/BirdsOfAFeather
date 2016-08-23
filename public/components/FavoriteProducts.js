import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class FavoriteProducts extends Component {
  render() {
    console.log('=================this.props.favoritedProducts is=================', this.props.favoritedProducts);
    var images = [];
    for (var key in this.props.favoritedProducts) {
      images.push(this.props.favoritedProducts[key]);
    }
    return (
      <View>
        {images.map(image =>
          <View>
            <Image source={{uri: image}} style={{height: 50, width: 50}}></Image>
          </View>
        )}
      </View>
    );
  }
}

