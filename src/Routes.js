/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './screen/Login';
import Home from './screen/Home';
import Profile from './screen/Profile';

const Tab = createBottomTabNavigator();


const Routes = () => {
  return (
   <NavigationContainer>
    <Tab.Navigator initialRouteName="Login">
        <Tab.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}} />
    </Tab.Navigator>
   </NavigationContainer>
  );
};

export default Routes;