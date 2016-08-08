import React, {Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View, StyleSheet } from 'react-native';

export default class AllergiesAndDiet extends Component {
  render() {
  	return (
  	  <View>
  	    <Text>This is the allergy and diet page</Text>
  	    <TouchableHighlight>
  	      <Text>Continue</Text>
  	    </TouchableHighlight>
  	  </View>
  	)
  }
}