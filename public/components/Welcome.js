import React, {Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View, StyleSheet } from 'react-native';

export default class Welcome extends Component {
  render() {
  	console.log('inside Welcome component and this.props.userInfo is', this.props.userInfo);
  	return (
  	  <View>
  	    <Text>{"\n"}</Text>
  	    <Text>Welcome {this.props.userInfo.name}</Text>
  	    <Text>What are your concerns?</Text>
  	    <TouchableHighlight onPress={this.props.onSelectConcern.bind(this, 'Health')}>
  	      <Text>Health</Text>
  	    </TouchableHighlight>
  	    <TouchableHighlight onPress={this.props.onSelectConcern.bind(this, 'Environment')}>
  	      <Text>Environment</Text>
  	    </TouchableHighlight>
  	    <TouchableHighlight onPress={this.props.onSelectConcern.bind(this, 'Society')}>
  	      <Text>Society</Text>
  	    </TouchableHighlight>
  	    <TouchableHighlight onPress={this.props.onForward}>
  	      <Text>Finish selecting concerns</Text>
  	    </TouchableHighlight>
  	    <TouchableHighlight onPress={this.props.onBack}>
  	      <Text>Go Back</Text>
  	    </TouchableHighlight>
  	  </View>
  	);
  }
}