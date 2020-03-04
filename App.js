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

/*
export default class App extends Component {
  render() {
    return (
      <AppContainer
      />
    )
  }
}
*/ 

/*export default class App extends Component {
  render() {
    return (
      <AppContainer
      />
    )
  }
}*/

// we will use these two screens later in our AppNavigator
//import AddItem from './src/screens/AddItem';
//import List from './src/screens/List';
/*
const AppNavigator = createStackNavigator({
  StudySpotsList: {
    screen: StudySpotsList,
  }
});*/

/*export default createAppContainer(createSwitchNavigator(
  {
    App: AppStack
  },
  {
    initialRouteName: 'App',
  }
));*/
/*
const App = createAppContainer(createSwitchNavigator({
      App: {
        screen: AppStack
      },

      Form: {
        screen: StudySpotFormScreen,
      }, 
      
    }
));*/
/*
const AppContainer = createAppContainer(AppStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

// App.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  }
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/