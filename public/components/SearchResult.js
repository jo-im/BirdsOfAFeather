

import React, { Component } from 'react';
import { Text, TouchableHighlight, ListView, Image, View } from 'react-native';
const _ = require('lodash');
const style = require('./../style/styles');

export default class SearchResult extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.searchResult)
    };
  }

  render() {
    _this = this;
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => {
            return (
              <TouchableHighlight onPress={() => { 
                _this.props.fetchItemUPC(rowData.product_upc);
              }} key={rowData.product_upc}>
                  <View>
                    <Image source={{uri: rowData.product_image }} style={{height: 100, width: 100}}></Image>
                    <Text> {rowData.title} </Text>
                  </View>
              </TouchableHighlight>
            );
          }}
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


        // <View style={{flex: 1, flexDirection: 'row'}}>
        //   <Image source={{uri: this.props.searchResult[0].product_image }} style={{height: 150, width: 150}}></Image>
        // </View>
        // <Text>{'\n'}</Text>
        // <Text>{'\n'}</Text>
        // <Text>{'\n'}</Text>