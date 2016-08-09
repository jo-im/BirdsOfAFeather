import React, {Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View, StyleSheet, Image } from 'react-native';

export default class Splash extends Component {
  render() {
  	return (
  	  <View>
  	    <Text>{"\n"}</Text>
  	    <Text>This is the Splash Page</Text>
  	    <Text>Underneath this should be an image</Text> 
        <Image
          source={{uri: 'https://elixirgraphics.com/assets/img/theme_images/feather-icon-256x256-NEW.jpg'}}
          style={{ height: 100, width: 100 }}
        />
        <TouchableHighlight onPress={this.props.onForward} >                                                                                                                                                                                               
  	    	<Text>Facebook Login</Text>
  	    </TouchableHighlight>
  	  </View>
  	);
  }
}
