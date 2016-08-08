import React, {Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View, StyleSheet } from 'react-native';

export default class Welcome extends Component {
  render() {
  	return (
  	  <View>
  	    <Text>This is the Welcome Page</Text>
  	    <TouchableHighlight>
  	      <Text>Health</Text>
  	    </TouchableHighlight>
  	    <TouchableHighlight>
  	      <Text>Environment</Text>
  	    </TouchableHighlight>
  	    <TouchableHighlight>
  	      <Text>Society</Text>
  	    </TouchableHighlight>
  	    <TouchableHighlight onPress={this.props.onForward}>
  	      <Text>Finish selecting concerns</Text>
  	    </TouchableHighlight>
  	  </View>
  	);
  }
}