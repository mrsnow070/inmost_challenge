import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import FilterScreen from '../screens/FilterScreen';
import styles from './styles';

import FilterButton from '../components/Header/FilterButton';
import BackButton from '../components/Header/BackButton';

export type AuthStackParamList = {
  Drinks: undefined;
  Filter: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Drinks"
        options={{
          headerLeft: ({canGoBack}) => canGoBack && <BackButton />,
          headerTitleAlign: 'left',
          headerTitleStyle: styles.headerTitleStyle,
          headerRight: () => <FilterButton />,
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="Filter"
        options={{
          headerLeft: () => <BackButton />,
          headerTitleAlign: 'left',
          headerTitleStyle: styles.nestedHeaderTitleStyle,
          title: 'Filters',
        }}
        component={FilterScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
