import React, {Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View, StyleSheet } from 'react-native';

export default class Summary extends Component {
  render() {
  	return (
  	  <View>
  	    <Text>{'\n'}</Text>
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