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
var userInfo = require('./data/userInfo');

class bof extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: userInfo.userInfo.name,
      concerns: [],
      allergies: [],
      diets: []
    }
  }
  
  onSelectConcern(concern) {
    this.state.concerns.push(concern);
  }

  render() {
    return (
      <NavigatePage username={this.state.username} concerns={this.state.concerns} onSelectConcern={this.onSelectConcern.bind(this)} />
    );
  }
}

AppRegistry.registerComponent('bof', () => bof);
