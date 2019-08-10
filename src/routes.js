import React from 'react';
import { View, Text } from 'react-native';
import {
  createAppContainer,
  createMaterialTopTabNavigator,
} from 'react-navigation';
import Search from './pages/Search';
import Result from './pages/Result';

export default createAppContainer(
  createMaterialTopTabNavigator(
    {
      Search,
      Result,
    },
    {
      tabBarOptions: {
        labelStyle: {
          fontSize: 14,
        },
        tabStyle: {
          backgroundColor: '#1db954',
        },
        activeTintColor: '#000',
        style: {
          backgroundColor: '#000',
        },
      },
    }
  )
);
