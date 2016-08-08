import React, {Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View, StyleSheet, Image } from 'react-native';

export default class Splash extends Component {
  render() {
  	return (
  	  <View>
  	    <Text>{"\n"}</Text>
  	    <Text>This is the Splash Page</Text>
  	    <Image source='http://facebook.github.io/react/img/logo_og.png' />
  	    <TouchableHighlight onPress={this.props.onForward} >
  	    	<Text>Facebook Login</Text>
  	    </TouchableHighlight>
  	  </View>
  	);
  }
}
