import React, {Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View, StyleSheet } from 'react-native';
const style = require('./../style/styles');

export default class Welcome extends Component {
  render() {
  	console.log('Inside the Welcome Component and this.props.onFinishSelectingConcerns is', this.props.onFinishSelectingConcerns);
  	return (
  	  <View>
  	    <Text>{"\n"}</Text>
  	    <Text style={style.styles.welcome}>Welcome {this.props.userInfo.name}</Text>
  	    <Text style={{fontFamily: 'Didot-Italic', fontSize: 20, marginLeft: 10, height: 40}}>What are your concerns?</Text>
  	    <TouchableHighlight style={style.styles.health} onPress={this.props.onSelectConcern.bind(this, 'Health')}>
  	      <Text style={style.styles.text}>Health</Text>
  	    </TouchableHighlight>
  	    <TouchableHighlight style={style.styles.environment} onPress={this.props.onSelectConcern.bind(this, 'Environment')}>
  	      <Text style={style.styles.text}>Environment</Text>
  	    </TouchableHighlight>
  	    <TouchableHighlight style={style.styles.society} onPress={this.props.onSelectConcern.bind(this, 'Society')}>
  	      <Text style={style.styles.text}>Society</Text>
  	    </TouchableHighlight>
  	    <TouchableHighlight style={style.styles.next} onPress={() => {this.props.onForward(); this.props.onFinishSelectingConcerns();}}>
  	      <Text style={style.styles.text}>Finish selecting concerns</Text>
  	    </TouchableHighlight>
  	    <TouchableHighlight style={style.styles.back} onPress={this.props.onBack}>
  	      <Text style={style.styles.text}>Go Back</Text>
  	    </TouchableHighlight>
  	  </View>
  	);
  }
}