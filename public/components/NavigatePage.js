import React, {Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View, StyleSheet } from 'react-native';

import Splash from './Splash';

export default class NavigatePage extends Component {
  render() {
  	return (
  	  <Navigator
  	    initialRoute={{ page: 'Splash', index: 0}}
  	    renderScene={(route, navigator) =>
  	      <CurrentScene
  	        page={route.page}

  	        onForward={ () => {
  	          let page;
  	          const nextIndex = route.index + 1;
  	          if (nextIndex === 1) {
  	          	page = 'Welcome'
  	          }
              
              if (nextIndex === 2) {
              	page = 'Allergies/Diet'
              }

              if (nextIndex === 3) {
              	page = 'Scan'
              }

              navigator.push({
                page: page,
                index: nextIndex
              })
  	        }}
  	      />
  	    } 
  	  />
  	);
  }
}

class CurrentScene extends Component {
  render() {
  	if (this.props.page === 'Splash') {
	  	return (
		    <Splash onForward={this.props.onForward}/>
	  	)
  	} 

  	if (this.props.page === 'Welcome') {
  	  return (
  	  	<View>
  	  	  <Text>This is the Welcome Page</Text>
  	  	  <TouchableHighlight>
  	  	    <Text>Health</Text>
  	  	  </TouchableHighlight>
  	  	  <TouchableHighlight>
  	  	    <Text>Environment</Text>
  	  	  </TouchableHighlight>
  	  	  <TouchableHighlight>
  	  	    <Text>Society</Text>
  	  	  </TouchableHighlight>
  	  	  <TouchableHighlight onPress={this.props.onForward}>
  	  	    <Text>Finish selecting concerns</Text>
  	  	  </TouchableHighlight>
  	  	</View>
  	  )
  	}

  	if (this.props.page === 'Allergies/Diet') {
  	  return (
	  	<View>
	  	  <Text>This is the Allergies Page</Text>
	  	</View>
  	  )
  	}
  }
}
