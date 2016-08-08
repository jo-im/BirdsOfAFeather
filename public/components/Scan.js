import React, {Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View, StyleSheet } from 'react-native';

export default class Scan extends Component {
  render() {
   return (
   	 <View>
   	   <Text>{"\n"}</Text>
   	   <TouchableHighlight onPress={this.props.onForward}>
   	     <Text>Scan here</Text>
   	   </TouchableHighlight>
   	   <TouchableHighlight onPress={this.props.onBack}>
   	     <Text>Go Back</Text>
   	   </TouchableHighlight>
   	 </View>
   	)
  }
}