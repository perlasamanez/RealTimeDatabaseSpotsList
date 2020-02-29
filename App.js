import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import StudySpotsList from './src/screens/StudySpotsList';


// we will use these two screens later in our AppNavigator
//import AddItem from './src/screens/AddItem';
//import List from './src/screens/List';

const AppNavigator = createStackNavigator({
  StudySpotsList: {
    screen: StudySpotsList
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}