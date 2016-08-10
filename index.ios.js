/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import NavigatePage from './public/components/NavigatePage'
const userInfo = require('./data/userInfo');

class bof extends Component {
  constructor(props) {
    super(props);

    this.onSelectConcern = this.onSelectConcern.bind(this);
    this.onSelectAllergy = this.onSelectAllergy.bind(this);
    this.onSelectDiet = this.onSelectDiet.bind(this);
    this.onForward = this.onForward.bind(this);
    this.onBack = this.onBack.bind(this);

    this.state = {
      username: userInfo.userInfo.name,
      concerns: [],
      allergies: [],
      diets: [],
      pages: ['Splash', 'Welcome', 'Allergies/Diet', 'Scan', 'Summary']
    }
  }
  
  onSelectConcern(concern) {
    this.state.concerns.push(concern);
  }

  onSelectAllergy(allergy) {
    this.state.allergies.push(allergy);
  }

  onSelectDiet(diet) {
    this.state.diets.push(diet);
  }

  onForward(route, navigator) {
    let page;
    const nextIndex = route.index + 1;

    navigator.push({
      page: this.state.pages[nextIndex],
      index: nextIndex
    })
  }
  
  onBack(route, navigator) {
    if (route.index > 0) {
      navigator.pop();
    }
  }

  render() {
    return (
      <NavigatePage username={this.state.username} concerns={this.state.concerns} allergies={this.state.allergies} diets={this.state.diets} onSelectConcern={this.onSelectConcern} 
      onSelectAllergy={this.onSelectAllergy} onSelectDiet={this.onSelectDiet} onForward={this.onForward} onBack={this.onBack}/>
    );
  }
}

AppRegistry.registerComponent('bof', () => bof);
