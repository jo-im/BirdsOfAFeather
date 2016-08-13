import React, { Component, PropTypes } from 'react';
import { Text, TouchableHighlight, ListView, Image } from 'react-native';
import { View } from 'react-native';
const _ = require('lodash');
const Accordion = require('react-native-accordion');
const style = require('./../style/styles');

export default class Summary extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(_.range(1))
    };
  }

  renderRow(productIngredients) {
    var header = (
      <View style={{backgroundColor: 'grey'}}>
        <Text style={{fontFamily: 'Didot-Italic', textAlign: 'center', color: 'white'}}>Click for all ingredients</Text>
      </View>
    );
    var content = (
      <View>
        <Text style={{fontFamily: 'Didot-Italic', textAlign: 'center'}}>{productIngredients}</Text>
      </View>
    );

    return (
      <Accordion
        header={header}
        content={content}
        easing='easeOutCubic'
      />
    );
  }

  addComma(ingredients) {
    let ingredientsWithComma = '';
    const ingredientsLength = ingredients.length;

    ingredients.map((ingredient, index) => {
      if (index !== ingredientsLength - 1) {
        ingredientsWithComma += ingredient + ',  ';
      } else {
        ingredientsWithComma += ingredient;
      }
    });
    return ingredientsWithComma;
  }

  render() {
    let dietIcon;
    if (!this.props.isVegan) {
      dietIcon = <Image style={{height: 30, width: 30, marginLeft: 8}} source={{uri: 'http://pythagoreancrank.com/wp-content/uploads/2013/09/OrganicNotVegan.png'}}></Image>;
    } else if (!this.props.isVegetarian) {
      dietIcon = <Image style={{height: 30, width: 30, marginLeft: 8}} source={require('./../../images/non-veg-icon.png')}></Image>;
    } else if (!this.props.isPescatarian) {
      dietIcon = <Image style={{height: 30, width: 30, marginLeft: 8}} source={require('./../../images/not-pescatarian-icon.png')}></Image>;
    } else {
      dietIcon = <Text style={{fontFamily: 'Didot-Italic', marginLeft: 8}}>Does not conflict with your diet</Text>;
    }

    let ingredientsToAvoid = 'No bad ingredients!';
    if (this.props.ingredientsToAvoid.length > 1) {
      ingredientsToAvoid = this.addComma(this.props.ingredientsToAvoid);
    }

    const allIngredients = this.addComma(this.props.productIngredients);
    const productAllergies = this.addComma(this.props.productAllergies);

    return (
      <View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image source={{uri: this.props.productImage }} style={{height: 150, width: 150}}></Image>
          <Text style={{textAlign: 'center', fontSize: 40, fontFamily: 'Didot-Italic'}}>Grade: {this.props.grade}</Text>
        </View>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
        <Text style={{fontSize: 20, fontFamily: 'Didot-Italic', marginLeft: 8}}>Allergies</Text>
            <Text style={{color: 'red', fontFamily: 'Didot-Italic', marginLeft: 8}}>{productAllergies}</Text>
        <Text style={{fontSize: 20, fontFamily: 'Didot-Italic', marginLeft: 8}}>Dietary Concerns</Text>
          <View style={{flex: 0.5, flexDirection: 'row'}}>
            {dietIcon}
          </View>
        <View style={{flex: 0.5, flexDirection: 'row'}}>
          <Text style={{marginLeft: 10, fontFamily: 'Didot', fontSize: 18, color: 'green'}}>Healthy</Text>
          <Text style={{marginLeft: 10, fontFamily: 'Didot', fontSize: 18, color: '#ffd633'}}>Unhealthy</Text>
          <Text style={{marginLeft: 10, fontFamily: 'Didot', fontSize: 18, color: 'purple'}}>Controversial</Text>
          <Text style={{marginLeft: 10, fontFamily: 'Didot', fontSize: 18, color: 'red'}}>Avoid</Text>
        </View>
        <Text style={{color: 'red', fontFamily: 'Didot', textAlign: 'center'}}>{ingredientsToAvoid}</Text>
        <Text>{'\n'}</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this, allIngredients)}
        />
        <Text>{'\n'}</Text>
        <TouchableHighlight style={style.styles.back} onPress={this.props.onBack}>
          <Text style={style.styles.text}>Go Back</Text>
        </TouchableHighlight>
      </View>
    );
  }
}