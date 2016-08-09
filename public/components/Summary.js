import React, {Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View, StyleSheet } from 'react-native';

export default class Summary extends Component {
  render() {
  	return (
  	  <View>
  	    <Text>{'\n'}</Text>
  	    <Text>User's concerns are {this.props.concerns}</Text>
  	    <TouchableHighlight onPress={this.props.onBack}>
  	      <Text>Go Back</Text>
  	    </TouchableHighlight>
  	  </View>
  	);
  }
}