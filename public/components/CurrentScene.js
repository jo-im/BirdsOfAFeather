import React, { Component, PropTypes } from 'react';
import Splash from './Splash';
import Welcome from './Welcome';
import Profile from './Profile';
import AllergiesAndDiet from './Allergies-Diet';
import Scan from './Scan';
import UPCReader from './UPCReader';
import Summary from './Summary';
import SearchResult from './SearchResult';

export default class CurrentScene extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('this.props.page inside render of CurrentScene is', this.props.page);
    if (this.props.page === 'Splash') {
      return (
        <Splash onForward={this.props.onForward} rootParent={this.props.rootParent} />
      );
    } 

    if (this.props.page === 'Welcome') {
      return (
        <Welcome onForward={this.props.onForward} onBack={this.props.onBack} username={this.props.username} 
        goToProfile={this.props.goToProfile} onSelectConcern={this.props.onSelectConcern} onFinishSelectingConcerns={this.props.onFinishSelectingConcerns}
        rootParent={this.props.rootParent} />
      );
    }

    if (this.props.page === 'Profile') {
      return (
        <Profile username={this.props.username} picture={this.props.picture} following={this.props.following}
        profilePage={this.props.profilePage} renderFavoriteProducts={this.props.renderFavoriteProducts} renderActivity={this.props.renderActivity}
        renderFollowing={this.props.renderFollowing}
        goToAllergiesAndDiet={this.props.goToAllergiesAndDiet} onBack={this.props.onBack} rootParent={this.props.rootParent} />
      );
    }

    if (this.props.page === 'Allergies/Diet') {
      return (
        <AllergiesAndDiet onSelectAllergy={this.props.onSelectAllergy} onSelectDiet={this.props.onSelectDiet} 
        shellFishSelected={this.props.shellFishSelected} peanutsSelected={this.props.peanutsSelected} animalDerivedSelected={this.props.animalDerivedSelected}
        goToProfile={this.props.goToProfile} onForward={this.props.onForward} onBack={this.props.onBack} rootParent={this.props.rootParent} />
      ); 
    }


    if (this.props.page === 'Scan') {
      return (
        <Scan goToSummary={this.props.goToSummary} goToProfile={this.props.goToProfile} goToSearchResult={this.props.goToSearchResult} onForward={this.props.onForward} onBack={this.props.onBack}/>
      );
    }

    if (this.props.page === 'SearchResult') {
      return (
        <SearchResult searchResult={this.props.searchResult} fetchItemUPC={this.props.fetchItemUPC} onForward={this.props.onForward} onBack={this.props.onBack} />
      );
    }

    if (this.props.page === 'UPCReader') {
      return (
        <UPCReader onFilterProductData={this.props.onFilterProductData} onForward={this.props.onForward} onBack={this.props.onBack} />
      );
    }

    if (this.props.page === 'Summary') {
      return (
        <Summary concerns={this.props.concerns} allergies={this.props.allergies} diets={this.props.diets} productImage={this.props.productImage} grade={this.props.grade}
        isVegan={this.props.isVegan} isVegetarian={this.props.isVegetarian} isPescatarian={this.props.isPescatarian}
        productIngredients={this.props.productIngredients} productAllergies={this.props.productAllergies} ingredientsToAvoid={this.props.ingredientsToAvoid}
        goToProfile={this.props.goToProfile} onBack={this.props.onBack} />
      );
    }
  }
}