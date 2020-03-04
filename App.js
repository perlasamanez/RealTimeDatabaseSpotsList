import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import StudySpotsList from './src/screens/StudySpotsList';
import StudySpotFormScreen from './src/screens/StudySpotFormScreen';

const AppNavigator = createStackNavigator(
  {
    StudySpotsList,
    StudySpotFormScreen  
  },
  {
    initialRouteName: 'StudySpotsList'
  });

  const AppContainer = createAppContainer(AppNavigator);

  export default class App extends Component {
    render() {
      return <AppContainer />;
    }
  }
