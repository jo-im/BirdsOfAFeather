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
      <View style={{flex: 100, flexDirection: 'column'}}>
        <View style={{flex: 5, marginTop: 20, marginBottom: 30, marginLeft: 350}}>
          <TouchableHighlight onPress={this.props.goToProfile}>
            <Image style={{height: 50, width: 50}} source={{uri: 'http://cornerstonecoastal.com/wp-content/plugins/bright/images/menu-icon.png'}}></Image>
          </TouchableHighlight>
        </View>
        <View style={{flex: 85}}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => {
              return (
                <TouchableHighlight onPress={() => { 
                  _this.props.fetchItemUPC(rowData.product_upc);
                }} key={rowData.product_upc}>
                    <View style={{flex: 100, flexDirection: 'row', alignItems: 'center', borderTopWidth: 2, padding: 5}}>
                      <Image source={{uri: rowData.product_image }} style={{flex: 15, height: 80}}></Image>
                      <Text style={{flex: 85, fontSize: 20, fontFamily: 'Georgia-Bold', marginLeft: 15}}> {rowData.title} </Text>
                    </View>
                </TouchableHighlight>
              );
            }}
          />
          </View>
        <View style={{flex: 10, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableHighlight style={style.styles.back} onPress={this.props.onBack}>
            <Text style={style.styles.navigationText}>Back</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
