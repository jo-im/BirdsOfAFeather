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
  render() {
    console.log('In bof and userInfo is', userInfo);
    console.log('In bo and userInfo.userInfo is', userInfo.userInfo);
    return (
      <NavigatePage userInfo={userInfo.userInfo}/>
    );
  }
}

AppRegistry.registerComponent('bof', () => bof);
