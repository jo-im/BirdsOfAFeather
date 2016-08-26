import React, { Component } from 'react';
import { Text, TouchableHighlight, View, Image } from 'react-native';
const style = require('./../style/styles');

export default class AllergiesAndDiet extends Component {
  render() {
    let shellFishIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!crab')}></Image>;
    let peanutsIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!peanuts')}></Image>;
    let animalDerivedIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!steak')}></Image>;
    let soyIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!soy')}></Image>;
    let dairyIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!cheeseIcon')}></Image>;
    let wheatIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!wheat')}></Image>;
    let cornIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!corn')}></Image>;
    let sulfiteIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!wine-glass-flat')}></Image>;
    let treeNutsIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!treehuts')}></Image>;
    let nightshadesIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!eggplant')}></Image>;
    let eggIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!egg')}></Image>;
    let fishIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!fish')}></Image>;
    let transfatIcon = 'https://cdn2.iconfinder.com/data/icons/food-and-kitchen/512/8-512.png';
    let glutenIcon = 'http://i1.istockimg.com/file_thumbview_approve/76293945/5/stock-illustration-76293945-bread-loaf-colored-vector-icon.jpg';
    let flavoringIcon = 'https://cdn0.iconfinder.com/data/icons/kitchen-and-cooking/512/spices_seasoning_spice_condiment_ingredient_flat_design_icon-512.png';
    let veganIcon = 'https://d2gg9evh47fn9z.cloudfront.net/thumb_COLOURBOX10662022.jpg';
    let vegetarianIcon = 'https://2014mirimstudent424.files.wordpress.com/2014/03/for-vegetarian.png?w=300&h=300';
    let pescatarianIcon = 'https://cdn0.iconfinder.com/data/icons/kitchen-colored-1/60/fish-dish-plate-chopstick-asian-512.png';

    if (this.props.shellfish) {
      shellFishIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!selected')}></Image>;
    }
    if (this.props.peanuts) {
      peanutsIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!selected')}></Image>;
    }
    if (this.props.animalDerived) {
      animalDerivedIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!selected')}></Image>;
    }
    if (this.props.soy) {
      soyIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!selected')}></Image>;
    }
    if (this.props.dairy) {
      dairyIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!selected')}></Image>;
    }
    if (this.props.wheat) {
      wheatIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!selected')}></Image>;
    }
    if (this.props.corn) {
      cornIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!selected')}></Image>;
    }
    if (this.props.sulfite) {
      sulfiteIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!selected')}></Image>;
    }
    if (this.props.treeNuts) {
      treeNutsIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!selected')}></Image>;
    }
    if (this.props.nightshades) {
      nightshadesIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!selected')}></Image>;
    }
    if (this.props.egg) {
      eggIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!selected')}></Image>;
    }
    if (this.props.fish) {
      fishIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!selected')}></Image>;
    }
    if (this.props.transfat) {
      transfatIcon = 'http://www.maaii.com/assets/images/ok.png';
    }
    if (this.props.gluten) {
      glutenIcon = 'http://www.maaii.com/assets/images/ok.png';
    }
    if (this.props.flavoring) {
      flavoringIcon = 'http://www.maaii.com/assets/images/ok.png';
    }
    if (this.props.vegan) {
      veganIcon = 'http://www.maaii.com/assets/images/ok.png';
    }
    if (this.props.vegetarian) {
      vegetarianIcon = 'http://www.maaii.com/assets/images/ok.png';
    }
    if (this.props.pescatarian) {
      pescatarianIcon = 'http://www.maaii.com/assets/images/ok.png';
    }

    return (
      <View>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
        <Text style={{textAlign: 'center', fontFamily: 'Didot-Italic', fontSize: 40}}>Any Allergies?</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Shellfish')}>
            {shellFishIcon}
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Peanuts')}>
            {peanutsIcon}
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Animal-Derived')}>
            {animalDerivedIcon}
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Soy')}>
            {soyIcon}
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Dairy')}>
            {dairyIcon}
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Wheat')}>
            {wheatIcon}
          </TouchableHighlight>
        </View>
        <View style={{flex: 0.6, flexDirection: 'row'}}>
          <Text style={{margin: 6}}>Shellfish</Text>
          <Text style={{marginTop: 6, marginRight: 14, marginBottom: 6, marginLeft: 6}}>Peanuts</Text>
          <Text style={{marginTop: 6, marginRight: 15, marginBottom: 6, marginLeft: 6}}>Animal{'\n'}Derived</Text>
          <Text style={{marginTop: 6, marginRight: 25, marginBottom: 6, marginLeft: 6}}>Soy</Text>
          <Text style={{marginTop: 6, marginRight: 24, marginBottom: 6, marginLeft: 6}}>Dairy</Text>
          <Text style={{margin: 6}}>Wheat</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Corn')}>
            {cornIcon}
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Sulfite')}>
            {sulfiteIcon}
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Tree Nuts')}>
            {treeNutsIcon}
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Nightshades')}>
            {nightshadesIcon}
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Egg')}>
            {eggIcon}
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Fish')}>
            {fishIcon}
          </TouchableHighlight>
        </View>
        <View style={{flex: 0.4, flexDirection: 'row'}}>
          <Text style={{marginTop: 6, marginRight: 22, marginBottom: 6, marginLeft: 14}}>Corn</Text>
          <Text style={{margin: 6}}>Sulfite</Text>
          <Text style={{marginTop: 6, marginRight: 4, marginBottom: 6, marginLeft: 6}}>Tree Nuts</Text>
          <Text style={{margin: 6}}>Nightshades</Text>
          <Text style={{marginTop: 6, marginRight: 15, marginBottom: 6, marginLeft: 6}}>Egg</Text>
          <Text style={{margin: 6}}>Fish</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Trans fat')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: transfatIcon}}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={{height: 57, width: 57, marginTop: 0, marginLeft: 3, marginRight: 3}} onPress={this.props.onSelectAllergy.bind(this, 'Gluten')}>
            <Image style={{height: 57, width: 57, marginTop: 10, marginLeft: 7, marginRight: 3}} source={{uri: glutenIcon}}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Flavoring')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: flavoringIcon}}></Image>
          </TouchableHighlight>
        </View>
        <View style={{flex: 0.4, flexDirection: 'row'}}>
          <Text style={{margin: 6}}>Trans fat</Text>
          <Text style={{margin: 6}}>Gluten</Text>
          <Text style={{margin: 6}}>Flavoring</Text>
        </View>
        <Text style={{textAlign: 'center', fontFamily: 'Didot-Italic', fontSize: 35}}>Any Dietary Concerns?</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectDiet.bind(this, 'Vegan')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: veganIcon}}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectDiet.bind(this, 'Vegetarian')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: vegetarianIcon}}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectDiet.bind(this, 'Pescatarian')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: pescatarianIcon}}></Image>
          </TouchableHighlight>
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <TouchableHighlight style={style.styles.back} onPress={this.props.onBack}>
            <Text style={style.styles.navigationText}>Back</Text>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.next} onPress={this.props.onForward}>
            <Text style={style.styles.navigationText}>Continue</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
