import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Counter from './src/components/Counter';
import DrinkList from './src/container/DrinkList';
import Header from './src/components/Header';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <Header />
        <DrinkList header="Dummy header" />
      </SafeAreaView>
    </>
  );
};

export default App;
