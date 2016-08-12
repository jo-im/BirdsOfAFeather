/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import NavigatePage from './public/components/NavigatePage';
const userInfo = require('./data/userInfo');
const itemScanned = require('./data/itemScanned');

class bof extends Component {
  constructor(props) {
    super(props);

    this.onSelectConcern = this.onSelectConcern.bind(this);
    this.onSelectAllergy = this.onSelectAllergy.bind(this);
    this.onSelectDiet = this.onSelectDiet.bind(this);
    this.onFilterProductData = this.onFilterProductData.bind(this);
    this.goToSummary = this.goToSummary.bind(this);
    this.onForward = this.onForward.bind(this);
    this.onBack = this.onBack.bind(this);

    this.state = {
      username: userInfo.userInfo.name,
      concerns: [],
      allergies: [],
      diets: [],
      selected: false,
      pages: ['Splash', 'Welcome', 'Allergies/Diet', 'Scan', 'UPCReader', 'Summary'],
      productDescription: itemScanned.itemScanned,
      productAllergies: [],
      user: null,
      credential: {}
    };
  }
  
  onSelectConcern(concern) {
    this.state.concerns.push(concern);
  }

  onSelectAllergy(allergy) {
    this.state.selected = true;
    this.state.allergies.push(allergy);
  }

  onSelectDiet(diet) {
    this.state.diets.push(diet);
  }

  onFilterProductData(data) {
    console.log('COMING THROUGH IS GOING TO BE THE DATA');
    console.log(data._bodyInit);
    console.log('IS DATA A STRING?????', typeof data._bodyInit);
    var parsedData = JSON.parse(data._bodyInit);
    console.log(parsedData);
    console.log('COMING THROUGH IS JUST THE ALLERGIES =======================================>');
    console.log(parsedData.allergies);
    var allergiesProductContains = parsedData.allergies;
    var that = this;

    this.state.allergies.forEach(function(allergy) {
      if (allergiesProductContains[allergy]) {
        allergiesProductContains[allergy].forEach(function(allergyItContains) {
          that.state.productAllergies.push(allergyItContains);
        });
      }
    });

    console.log('ALLERGIES THAT PRODUCT CONTAINS AND USER HAS IS', this.state.productAllergies);
  }

  goToSummary(route, navigator) {
    let page;
    const nextIndex = route.index + 2;
    navigator.push({
      page: this.state.pages[nextIndex],
      index: nextIndex
    });
  }

  onForward(route, navigator) {
    let page;
    const nextIndex = route.index + 1;
    navigator.push({
      page: this.state.pages[nextIndex],
      index: nextIndex
    });
  }
  
  onBack(route, navigator) {
    if (route.index > 0) {
      navigator.pop();
    }
  }

  // takePicture() {
  //   this.camera.capture()
  //     .then((data) => console.log(data))
  //     .catch(err => console.error(err));
  // }

  render() {
    return (
      <NavigatePage username={this.state.username} concerns={this.state.concerns} allergies={this.state.allergies} diets={this.state.diets} 
      selected={this.state.selected} productDescription={this.state.productDescription} productAllergies={this.state.productAllergies}
      onSelectConcern={this.onSelectConcern} onSelectAllergy={this.onSelectAllergy} 
      onSelectDiet={this.onSelectDiet} onFilterProductData={this.onFilterProductData} goToSummary={this.goToSummary} onForward={this.onForward} onBack={this.onBack} rootParent={this}/>
    );
  }


}

AppRegistry.registerComponent('bof', () => bof);
