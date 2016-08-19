import React, { Component, PropTypes } from 'react';
import { Navigator } from 'react-native';
import CurrentScene from './CurrentScene';

export default class NavigatePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navigator
        initialRoute={{title: 'Splash', index: 0}}
        renderScene={(route, navigator) =>
        <CurrentScene
            page={route.title}
            username={this.props.username}
            picture={this.props.picture}
            profilePage={this.props.profilePage}
            goToProfile={this.props.goToProfile.bind(this, route, navigator)}
            renderComments={this.props.renderComments}
            renderFavoriteProducts={this.props.renderFavoriteProducts}
            renderFollowers={this.props.renderFollowers}
            renderFollowing={this.props.renderFollowing}
            followers={this.props.followers}
            concerns={this.props.concerns}
            allergies={this.props.allergies}
            diets={this.props.diets}
            selected={this.props.selected}
            productImage={this.props.productImage}
            grade={this.props.grade}
            isVegan={this.props.isVegan}
            isVegetarian={this.props.isVegetarian}
            isPescatarian={this.props.isPescatarian}
            productIngredients={this.props.productIngredients}
            productAllergies={this.props.productAllergies}
            ingredientsToAvoid={this.props.ingredientsToAvoid}
            onFilterProductData={this.props.onFilterProductData.bind(this, navigator)}
            goToSummary={this.props.goToSummary.bind(this, route, navigator)}
            onForward={this.props.onForward.bind(this, route, navigator)}
            onBack={this.props.onBack.bind(this, route, navigator)}
            onSelectConcern={this.props.onSelectConcern}
            onSelectAllergy={this.props.onSelectAllergy}
            onSelectDiet={this.props.onSelectDiet}
            onFinishSelectingConcerns={this.props.onFinishSelectingConcerns}
            rootParent={this.props.rootParent}
          />
        } 
      />
    );
  }
}

