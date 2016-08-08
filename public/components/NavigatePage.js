import React, {Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View, StyleSheet } from 'react-native';

import Splash from './Splash';
import Welcome from './Welcome';
import AllergiesAndDiet from './Allergies-Diet';
import Scan from './Scan';
import Summary from './Summary';

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

              if (nextIndex === 4) {
                page = 'Summary'
              }

              navigator.push({
                page: page,
                index: nextIndex
              })
  	        }}

            onBack={ () => {
              if (route.index > 0) {
                navigator.pop();
              }
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
	  	);
  	} 

  	if (this.props.page === 'Welcome') {
  	  return (
        <Welcome onForward={this.props.onForward} onBack={this.props.onBack}/>
      );
  	}

  	if (this.props.page === 'Allergies/Diet') {
  	  return (
	  	  <AllergiesAndDiet onForward={this.props.onForward} onBack={this.props.onBack}/>
  	  );
  	}

    if (this.props.page === 'Scan') {
      return (
        <Scan onForward={this.props.onForward} onBack={this.props.onBack}/>
      );
    }

    if (this.props.page === 'Summary') {
      return (
        <Summary onBack={this.props.onBack}/>
      );
    }
  }
}
