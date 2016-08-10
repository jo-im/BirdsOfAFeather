import React, { Component, PropTypes } from 'react';
import { Text, TouchableHighlight, View, Image } from 'react-native';

export default class Summary extends Component {
  render() {
    console.log('Inside Summary and this.props.productDescription.image is', this.props.productDescription.image);
  	return (
  	  <View>
  	    <Text>{'\n'}</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image source={{uri:this.props.productDescription.image}} style={{height: 50, width: 50}}></Image>
        </View>
  	    <Text>User's concerns are {this.props.concerns}</Text>
        <Text>User's allergies are {this.props.allergies}</Text>
        <Text>User's diets are {this.props.diets}</Text>
  	    <TouchableHighlight onPress={this.props.onBack}>
  	      <Text>Go Back</Text>
  	    </TouchableHighlight>
  	  </View>
  	);
  }
}