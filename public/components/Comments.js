import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Comments extends Component {
  render() {
    return (
      <View>
        <Text>Keith: This is a first fake comment</Text>
        <Text>Hong: Second comment</Text>
        <Text>Ryan: Third comment</Text>
        <Text>Joann: Last comment!</Text>
      </View>
    );
  }
}