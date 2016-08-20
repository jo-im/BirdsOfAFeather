import React, { Component, PropTypes } from 'react';
import { Text, TouchableHighlight, View, Image } from 'react-native';
const style = require('./../style/styles');

export default class Scan extends Component {
  render() {
    return (
     <View>
       <View style={{marginTop: 20, marginLeft: 350}}>
         <TouchableHighlight onPress={this.props.goToProfile}>
           <Image style={{height: 50, width: 50}} source={{uri: 'http://cornerstonecoastal.com/wp-content/plugins/bright/images/menu-icon.png'}}></Image>
         </TouchableHighlight>
       </View>
     <Text style={{height: 40, fontSize: 20, fontFamily: 'Didot-Italic', textAlign: 'center', marginTop: 200}}>Click To Scan</Text>
       <View style={style.styles.container}>
         <TouchableHighlight onPress={this.props.onForward}>
           <Image style={{height: 200, width: 200}} source={{uri: 'https://cdn.vectorstock.com/i/thumb-large/10/55/8391055.jpg'}}></Image>
         </TouchableHighlight>
         <Text>{'\n'}</Text>
         <TouchableHighlight style={style.styles.back} onPress={this.props.onBack}>
           <Text style={style.styles.text}>Go Back</Text>
         </TouchableHighlight>
       </View>
     </View>
    );
  }
}