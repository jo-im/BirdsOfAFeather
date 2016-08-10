import React, {Component, PropTypes } from 'react';
import { Navigator } from 'react-native';
import CurrentScene from './CurrentScene';

export default class NavigatePage extends Component {
  render() {
  	return (
  	  <Navigator
  	    initialRoute={{ page: 'Splash', index: 0}}
  	    renderScene={(route, navigator) =>
  	      <CurrentScene
  	        page={route.page}
            onForward={this.props.onForward.bind(this, route, navigator)}
            onBack={this.props.onBack.bind(this, route, navigator)}
            username={this.props.username}
            concerns={this.props.concerns}
            allergies={this.props.allergies}
            diets={this.props.diets}
            onSelectConcern={this.props.onSelectConcern}
            onSelectAllergy={this.props.onSelectAllergy}
            onSelectDiet={this.props.onSelectDiet}
            onFinishSelectingConcerns={this.props.onFinishSelectingConcerns}
          />
        } 
  	  />
  	);
  }
}

