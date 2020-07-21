import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView></SafeAreaView>
    </>
  );
};

export default App;
