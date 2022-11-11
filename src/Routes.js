/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Login from './screen/Login';
import Home from './screen/Home';
import Explore from './screen/Explore';
import Profile from './screen/Profile';

const Tab = createBottomTabNavigator();

function Dashboard() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'apps' : 'apps-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="LoginScreen"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={Profile}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
