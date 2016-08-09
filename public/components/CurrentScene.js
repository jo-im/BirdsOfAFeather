import React, { Component, PropTypes } from 'react';
import Splash from './Splash';
import Welcome from './Welcome';
import AllergiesAndDiet from './Allergies-Diet';
import Scan from './Scan';
import Summary from './Summary';

export default class CurrentScene extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  	if (this.props.page === 'Splash') {
	  	return (
		    <Splash onForward={this.props.onForward}/>
	  	);
  	} 

  	if (this.props.page === 'Welcome') {
  	  return (
        <Welcome onForward={this.props.onForward} onBack={this.props.onBack} username={this.props.username} 
        onSelectConcern={this.props.onSelectConcern} onFinishSelectingConcerns={this.props.onFinishSelectingConcerns}/>
      );
  	}

  	if (this.props.page === 'Allergies/Diet') {
  	  return (
	  	  <AllergiesAndDiet onSelectAllergy={this.props.onSelectAllergy} onForward={this.props.onForward} onBack={this.props.onBack}/>
  	  );
  	}

    if (this.props.page === 'Scan') {
      return (
        <Scan onForward={this.props.onForward} onBack={this.props.onBack}/>
      );
    }

    if (this.props.page === 'Summary') {
      return (
        <Summary onBack={this.props.onBack} concerns={this.props.concerns}/>
      );
    }
  }
}