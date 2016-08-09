import React, { Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View, Image, StyleSheet } from 'react-native';
const style = require('./../style/styles');

export default class AllergiesAndDiet extends Component {
  render() {
  	return (
  	  <View>
  	    <Text>{'\n'}</Text>
  	    <Text>This is the allergy and diet page</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: 'https://cdn0.iconfinder.com/data/icons/food-icons-rounded/110/Crab-128.png'}}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: 'https://0.s3.envato.com/files/117161280/Allergen%20Icon%20Package%202/allergen_icons_500px_0001_peanuts.png'}}></Image>
          </TouchableHighlight>
        </View>
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