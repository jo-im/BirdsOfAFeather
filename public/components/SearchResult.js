

import React, { Component, PropTypes } from 'react';
import { Text, TouchableHighlight, ListView, Image, View } from 'react-native';
const _ = require('lodash');
const style = require('./../style/styles');

export default class SearchResult extends Component {
  constructor(props) {
    super(props);
    // console.log('***********************props are*****************', this.props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.searchResult)
    };

  }

  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => 
            <Image source={{uri: rowData.product_image }} style={{height: 100, width: 100}}></Image>
          }
        />
        <Text>{'\n'}</Text>
        <View style={style.styles.container}>
          <TouchableHighlight style={style.styles.back} onPress={this.props.onBack}>
            <Text style={style.styles.text}>Go Back</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
            // <Text> {rowData.product_image} </Text>
        // <View style={{flex: 1, flexDirection: 'row'}}>
        //   <Image source={{uri: this.props.searchResult[0].product_image }} style={{height: 150, width: 150}}></Image>
        // </View>
        // <Text>{'\n'}</Text>
        // <Text>{'\n'}</Text>
        // <Text>{'\n'}</Text>