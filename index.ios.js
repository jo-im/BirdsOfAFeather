/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage,
  Alert
} from 'react-native';
import NavigatePage from './public/components/NavigatePage';
const userInfo = require('./data/userInfo');


class bof extends Component {
  constructor(props) {
    super(props);

    this.onSelectConcern = this.onSelectConcern.bind(this);
    this.onSelectAllergy = this.onSelectAllergy.bind(this);
    this.onSelectDiet = this.onSelectDiet.bind(this);
    this.onFilterProductData = this.onFilterProductData.bind(this);
    this.goToSummary = this.goToSummary.bind(this);
    this.goToProfile = this.goToProfile.bind(this);
    this.goToAllergiesAndDiet = this.goToAllergiesAndDiet.bind(this);
    this.renderActivity = this.renderActivity.bind(this);
    this.renderFavoriteProducts = this.renderFavoriteProducts.bind(this);
    this.renderFollowing = this.renderFollowing.bind(this);
    this.onForward = this.onForward.bind(this);
    this.onBack = this.onBack.bind(this);
    this.goToSearchResult = this.goToSearchResult.bind(this);
    this.fetchItemUPC = this.fetchItemUPC.bind(this);

    this.state = {
      userId: null,
      username: null,
      picture: null,
      profilePage: 'Activity',
      following: {},
      email: null,
      concerns: [],
      allergies: [],
      diets: [],
      pages: ['Splash', 'Welcome', 'Allergies/Diet', 'Scan', 'UPCReader', 'Summary', 'Profile', 'SearchResult'],
      shellFishSelected: false,
      peanutsSelected: false,
      animalDerivedSelected: false,
      soySelected: false,
      cheeseSelected: false,
      wheatSelected: false,
      cornSelected: false,
      sulfiteSelected: false,
      treeNutsSelected: false,
      nightShadesSelected: false,
      eggSelected: false,
      fishSelected: false,
      transFatSelected: false,
      glutenSelected: false,
      flavoringSelected: false,
      productImage: '',
      grade: 'N/A',
      productIngredients: [],
      productAllergies: [],
      ingredientsToAvoid: [],
      isVegan: true,
      isVegetarian: true,
      isPescatarian: true,
      searchResult: [],
    };
  }

  componentWillMount() {
    this._loadInitialState().done();
  }

  async _loadInitialState() {
    _this = this;
    try {
      let multi_get_keys = ['USERID','USERNAME', 'EMAIL', 'FRIENDS', 'PICTURE', 'ALLERGIES', 'DIETS'];
      await AsyncStorage.multiGet(multi_get_keys, (err, store) => {
        if (store[0][1] !== null){
          _this.setState({
            userId: JSON.parse(store[0][1]),  
            username: JSON.parse(store[1][1]),
            email: JSON.parse(store[2][1]),
            friends: JSON.parse(store[3][1]) || [],
            picture: JSON.parse(store[4][1]),
            allergies: JSON.parse(store[5][1]) || [],
            diets: JSON.parse(store[6][1]) || [],
          })
          console.log('This is the locally stored data:')
          console.log('USERID: ', store[0][1]);
          console.log('USERNAME: ', store[1][1]);
          console.log('EMAIL: ', store[2][1]);
          console.log('FRIENDS: ', store[3][1]);
          console.log('PICTURE: ', store[4][1]);
          console.log('ALLERGIES: ', store[5][1]);
          console.log('DIETS: ', store[6][1]);
          console.log('allergies state: ', _this.state.allergies)
          console.log('diet state: ', _this.state.diets)
        } else {
          console.log('Initialized with no selection on disk.');
        }
      })
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }
  
  async onSelectConcern(concern) {

    this.state.concerns.push(concern);
    try {
      await AsyncStorage.setItem('CONCERNS', JSON.stringify(this.state.concerns));
    } catch (error) {
      console.log('Error saving data: ', error);
    }
  }

  async onSelectAllergy(allergy) {
    if (allergy === 'Shellfish') {
      this.state.shellFishSelected = !this.state.shellFishSelected;
    }
    if (allergy === 'Peanuts') {
      this.state.peanutsSelected = !this.state.peanutsSelected;
    }
    console.log('=========================before push=============', this.state.allergies)
    this.state.allergies.push(allergy);
    console.log('=========================after push==============', this.state.allergies);
    try {
      await AsyncStorage.setItem('ALLERGIES', JSON.stringify(this.state.allergies));
    } catch (error) {
      console.log('Error saving data: ', error);
    }

    this.setState({
      shellFishSelected: this.state.shellFishSelected,
      peanutsSelected: this.state.peanutsSelected
    })
  }

  async onSelectDiet(diet) {
    this.state.diets.push(diet);
    try {
      await AsyncStorage.setItem('DIETS', JSON.stringify(this.state.diets));
    } catch (error) {
      console.log('Error saving data: ', error);
    }
  }

  onFilterProductData(navigator, data) {
    console.log('here in onFilterProductData:');
    var parsedData = JSON.parse(data._bodyInit);

    if (!parsedData.validUPC) {
      Alert.alert(
            'Alert Title',
            'Product not found',
            [
              {text: 'Start over', onPress: () => navigator.replace({
                                                    page: 'Welcome',
                                                    index: 1
                                                  })
              },
              {text: 'Scan again', onPress: () => navigator.pop()}
            ]
          )
    } else {
      var allergiesProductContains = parsedData.allergies;
      this.state.grade = parsedData.score;
      this.state.productIngredients = parsedData.ingredientList;
      this.state.isVegan = true;
      this.state.isVegetarian = true;
      this.state.isPescatarian = true;

      if (parsedData.diet['Animal-Derived'] && this.state.diets.indexOf('Vegan') !== -1) {
        this.state.isVegan = false;
      }

      if (this.state.diets.indexOf('Vegetarian') !== -1) {
        if (allergiesProductContains['Animal-Derived']) {
          allergiesProductContains['Animal-Derived'].forEach(allergies => {
            if (allergiesProductContains['Dairy'].indexOf(allergies) === -1 && allergiesProductContains['Eggs'].indexOf(allergies) === -1) {
              this.state.isVegetarian = false;
            }
          });
        }
      }

      if (this.state.diets.indexOf('Pescatarian') !== -1) {
        if (allergiesProductContains['Animal-Derived']) {
          allergiesProductContains['Animal-Derived'].forEach(allergies => {
            if (allergiesProductContains['Dairy'].indexOf(allergies) === -1 && allergiesProductContains['Eggs'].indexOf(allergies) === -1
              && allergiesProductContains['Shellfish'].indexOf(allergies) === -1 && allergiesProductContains['Fish'].indexOf(allergies) === -1) {
              this.state.isPescatarian = false;
            }
          });
        }
      }

      this.state.ingredientsToAvoid = [];
      this.state.productAllergies = [];

      this.state.allergies.forEach(allergy => {
        if (allergiesProductContains[allergy]) {
          this.state.productAllergies.push(allergy);
          allergiesProductContains[allergy].forEach(allergyItContains => {
            this.state.ingredientsToAvoid.push(allergyItContains);
          });
        }
      });

      this.setState({
        productImage: parsedData.imgURL,
        grade: parsedData.score,
        productIngredients: parsedData.ingredientList,
        ingredientsToAvoid: this.state.ingredientsToAvoid
      });
    }
  }

  goToSummary(route, navigator) {
    let page;
    const nextIndex = route.index + 2;
    navigator.push({
      page: this.state.pages[nextIndex],
      index: nextIndex
    });
  }

  goToProfile(route, navigator) {
    console.log('Inside goToProfile');
    navigator.push({
      page: this.state.pages[6],
      index: 6
    });
    console.log(navigator.getCurrentRoutes());
  }

  goToAllergiesAndDiet(route, navigator) {
    console.log('Inside allergiesanddiet');
    navigator.push({
      page: this.state.pages[2],
      index: 2
    })
  }

  renderActivity() {
    this.state.profilePage = 'Activity';
    this.setState({
      profilePage: this.state.profilePage
    });
  }

  renderFavoriteProducts() {
    this.state.profilePage = 'Favorite Products';
    this.setState({
      profilePage: this.state.profilePage
    });
  }

  renderFollowing() {
    this.state.profilePage = 'Following';
    this.setState({
      profilePage: this.state.profilePage
    });
  }

  goToSearchResult(route, navigator, data) {
    console.log('=====================inside goToSearch function=================')
    // console.log(data);
    data = JSON.parse(data._bodyInit)


    this.setState({ searchResult: data })
    
    console.log('=======================goToSearchResult state===================', this.state.searchResult)
    navigator.push({
      page: 'SearchResult',
      index: 7
    });
  }

  fetchItemUPC(route, navigator, UPC) {
    console.log('inside fetchItemUPC', UPC)
    fetch('https://murmuring-dusk-10598.herokuapp.com/api/foodfacts/upc', 
    // fetch('http://10.6.24.1:3000/api/foodfacts/upc', 
      {
        method: 'POST',
        headers:
        {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          { event: {data: '0' + UPC} }
        )
      })
    .then(data => {
      console.log(data._bodyInit);
      this.onFilterProductData(navigator, data);
      navigator.push({
        page: 'Summary',
        index: 5
      });

      // {page: 'Summary', index: 5}, navigator
    })
    .catch(err => console.log('err in readBarCode: ', err));
  }

  onForward(route, navigator) {
    let page;
    console.log('in onForward: ', route);
    const nextIndex = route.index + 1;
    navigator.push({
      page: this.state.pages[nextIndex],
      index: nextIndex
    });
  }
  
  onBack(route, navigator) {
    //if we are in the summary page and the user presses back
    if (route.index === 5) {
      //go back to the scan page
      navigator.pop();
      navigator.pop();
    } else if (route.index > 0) {
      navigator.pop();
    }
  }

  render() {
    return (
      <NavigatePage username={this.state.username} picture={this.state.picture} following={this.state.following}
      renderActivity={this.renderActivity} renderFavoriteProducts={this.renderFavoriteProducts} renderFollowing={this.renderFollowing}
      profilePage={this.state.profilePage} concerns={this.state.concerns} allergies={this.state.allergies} diets={this.state.diets}
      goToProfile={this.goToProfile} goToAllergiesAndDiet={this.goToAllergiesAndDiet} productImage={this.state.productImage} grade={this.state.grade}
      shellFishSelected={this.state.shellFishSelected} peanutsSelected={this.state.peanutsSelected}
      isVegan={this.state.isVegan} isVegetarian={this.state.isVegetarian} isPescatarian={this.state.isPescatarian}
      productAllergies={this.state.productAllergies} ingredientsToAvoid={this.state.ingredientsToAvoid} productIngredients={this.state.productIngredients}
      onSelectConcern={this.onSelectConcern} onSelectAllergy={this.onSelectAllergy}
      onSelectDiet={this.onSelectDiet} onFilterProductData={this.onFilterProductData} goToSummary={this.goToSummary} 
      goToSearchResult={this.goToSearchResult} searchResult={this.state.searchResult} fetchItemUPC={this.fetchItemUPC}
      onForward={this.onForward} onBack={this.onBack} rootParent={this}/>
    );
  }


}

AppRegistry.registerComponent('bof', () => bof);
