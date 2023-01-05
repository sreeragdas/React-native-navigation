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
import type {Node} from 'react';


import {Colors} from 'react-native/Libraries/NewAppScreen';
import Contact from './src/screens/contact-page/Contact';

const App: () => Node = () => {



  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Contact">
        <Stack.Screen name="Login" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
