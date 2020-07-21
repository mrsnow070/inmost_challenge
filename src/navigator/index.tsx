import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './MainStackNavigator';

export default () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};
