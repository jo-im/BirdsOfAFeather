import React, { Component } from 'react';
import { Text, TouchableHighlight, View, Image, TextInput } from 'react-native';
const style = require('./../style/styles');

export default class Scan extends Component {
  render() {
    _this = this;

    return (
     <View>
       <View style={{marginTop: 20, marginLeft: 350}}>
         <TouchableHighlight onPress={this.props.goToProfile}>
           <Image style={{height: 50, width: 50}} source={{uri: 'http://cornerstonecoastal.com/wp-content/plugins/bright/images/menu-icon.png'}}></Image>
         </TouchableHighlight>
       </View>
     <Text style={{height: 40, fontSize: 20, fontFamily: 'Didot-Italic', textAlign: 'center', marginTop: 200}}>Click To Scan</Text>
       <View style={style.styles.container}>
         <TouchableHighlight onPress={this.props.onForward}>
           <Image style={{height: 200, width: 200}} source={{uri: 'https://cdn.vectorstock.com/i/thumb-large/10/55/8391055.jpg'}}></Image>
         </TouchableHighlight>
         <Text>{'\n'}</Text>

          <TextInput style={{height: 40}} placeholder="Search for Product" onChangeText={(searchTerm) => this.setState({searchTerm})} onSubmitEditing={this.searchProduct.bind(this)} />
          <TouchableHighlight onPress={this.searchProduct.bind(this)}>
            <Text>Search</Text>
          </TouchableHighlight>

         <TouchableHighlight style={style.styles.back} onPress={this.props.onBack}>
           <Text style={style.styles.text}>Go Back</Text>
         </TouchableHighlight>
         <TouchableHighlight style={style.styles.back} onPress={this.props.goToSummary}>
           <Text style={style.styles.text}>Go to Summary</Text>
         </TouchableHighlight>
       </View>
     </View>
    );
  }

  searchProduct () {
    console.log('inside searchProduct and value is', this.state);

    if (!this.state) { 
      return console.log('no text entered'); 
    }

    console.log(this.state.searchTerm);

    fetch('https://murmuring-dusk-10598.herokuapp.com/api/foodfacts/search', 
    // fetch('http://10.6.24.1:3000/api/foodfacts/search',
      {
        method: 'POST',
        headers:
        {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          { searchTerm: this.state.searchTerm }
        )
      })
    .then(data => {
      console.log('returned search item');
      // console.log(data);
      this.props.goToSearchResult(data);
      // this.props.goToSearchResult(JSON.parse(data._bodyInit));
    })
    .catch(err => console.log(err));
  }
}