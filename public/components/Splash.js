import React, {Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View, StyleSheet } from 'react-native';

export default class Splash extends Component {
  render() {
  	return (
  	  <View>
  	    <Text>{"\n"}</Text>
  	    <Text>This is the Splash Page</Text>
  	      <TouchableHighlight onPress={this.props.onForward} >
  	    	<Text>Facebook Login</Text>
  	      </TouchableHighlight>
  	  </View>
  	);
  }
}