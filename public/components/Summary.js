import React, { Component, PropTypes } from 'react';
import { Text, TouchableHighlight, View, ScrollView, ListView, Image } from 'react-native';
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
        <Text style={{fontFamily: 'Didot-Italic', textAlign: 'center', color: 'white', height: 40, fontSize: 20}}>Click for all ingredients</Text>
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
    let favoriteProductIcon = 'http://www.clipartbest.com/cliparts/LiK/kxa/LiKkxa9ia.png';
    if (this.props.favorited) {
      favoriteProductIcon = 'http://cliparts.co/cliparts/rcL/xGB/rcLxGBBni.png';
    }

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

    let productAllergies = 'No allergens found';
    if (this.props.productAllergies.length > 0) {
      productAllergies = this.addComma(this.props.productAllergies);
    }

    return (
      <ScrollView>
         <View style={{marginTop: 20, marginLeft: 350}}>
          <TouchableHighlight onPress={this.props.goToProfile}>
            <Image style={{height: 50, width: 50}} source={{uri: 'http://cornerstonecoastal.com/wp-content/plugins/bright/images/menu-icon.png'}}></Image>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight style={{height: 30, width: 43, marginLeft: 30, marginBottom: 20}} onPress={this.props.favoriteProduct}>
            <Image source={{uri: favoriteProductIcon}} style={{height: 39, width: 43, marginBottom: 10}}></Image>
          </TouchableHighlight>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image source={{uri: this.props.productImage }} style={{height: 150, width: 150}}></Image>
          <View style={{backgroundColor: '#00e6b8', height: 160, width: 160, borderRadius: 160 / 2, marginTop: 30, marginLeft: 80}}>
            <View style={{width: 100, marginLeft: 30}}>
              <Text style={{textAlign: 'center', fontSize: 30, fontFamily: 'Didot-Italic', color: 'white', marginTop: 40}}>Grade:</Text>
              <Text style={{textAlign: 'center', fontSize: 30, fontFamily: 'Didot-Italic', color: 'white'}}>{this.props.grade}</Text>
            </View>
          </View>
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
        <View style={style.styles.container}>
          <TouchableHighlight style={style.styles.back} onPress={this.props.onBack}>
            <Text style={style.styles.text}>Go Back</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}