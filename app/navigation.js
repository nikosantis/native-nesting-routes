import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screen/home';
import Profile from './screen/profile';
import SettingProfile from './screen/setting-profile';

const Stack = createStackNavigator();

const ProfileNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='Profile'
      screenOptions={{
        cardStyle: {
          backgroundColor: '#ffffff',
          shadowColor: 'transparent',
        },
      }}
    >
      <Stack.Screen
        name='Profile'
        component={Profile}
        options={{
          title: 'Profile',
          headerTransparent: true,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='SettingProfile'
        component={SettingProfile}
        options={{
          title: 'SettingProfile',
          headerTransparent: true,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Profile' component={ProfileNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
