import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Counter from './src/components/Counter';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Counter />
      </SafeAreaView>
    </>
  );
};

export default App;
