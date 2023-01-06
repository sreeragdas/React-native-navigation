/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';

import Contact from './src/screens/contact-page/Contact';

import TabView from './src/screens/tabNavigation/TabView';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Contact} />
        <Stack.Screen name="Home" component={TabView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
