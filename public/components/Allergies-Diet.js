import React, {Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View, StyleSheet } from 'react-native';

export default class AllergiesAndDiet extends Component {
  render() {
  	return (
  	  <View>
  	    <Text>{"\n"}</Text>
  	    <Text>This is the allergy and diet page</Text>
  	    <TouchableHighlight onPress={this.props.onForward}>
  	      <Text>Continue</Text>
  	    </TouchableHighlight>
  	    <TouchableHighlight onPress={this.props.onBack}>
  	      <Text>Go Back</Text>
  	    </TouchableHighlight>
  	  </View>
  	)
  }
}