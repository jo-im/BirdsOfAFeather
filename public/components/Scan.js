import React, {Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View, Image, StyleSheet } from 'react-native';
const style = require('./../style/styles');

export default class Scan extends Component {
  render() {
   return (
     <View>
   	 <Text style={{height: 40, fontSize:20, fontFamily: 'Didot-Italic', textAlign: 'center', marginTop: 200}}>Click To Scan</Text>
       <View style={style.styles.container}>
     	   <TouchableHighlight onPress={this.props.onForward}>
     	     <Image style={{height: 200, width: 200}} source={{uri: 'https://cdn.vectorstock.com/i/thumb-large/10/55/8391055.jpg'}}></Image>
     	   </TouchableHighlight>
       </View>
   	 </View>
   	)
  }
}