import React, {Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View, StyleSheet, Image } from 'react-native';
const style = require('./../style/styles');

export default class Splash extends Component {
  render() {
  	console.log('Inside Splash component, style is', style);
  	return (
  	  <View style={style.styles.container}>
  	    <Text>{"\n"}</Text>
        <Image
          source={{uri: 'https://elixirgraphics.com/assets/img/theme_images/feather-icon-256x256-NEW.jpg'}}
          style={style.styles.icon}
        />
        <Text>It's easy to get started. Sign in with Facebook to get access to bof.</Text>
        <TouchableHighlight style={style.styles.login} onPress={this.props.onForward} >                                                                                                                                                                                               
  	    	<Text style={{textAlign: 'center', color: 'white', marginTop: 17}}>Facebook Login</Text>
  	    </TouchableHighlight>
  	  </View>
  	);
  }
}
