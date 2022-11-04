/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screen/Login';
import Home from './screen/Home';

const Stack = createNativeStackNavigator();


const Routes = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
    </Stack.Navigator>
   </NavigationContainer>
  );
};

export default Routes;