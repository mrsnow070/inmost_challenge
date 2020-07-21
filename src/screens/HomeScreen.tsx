import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView, StatusBar} from 'react-native';
import DrinkList from '../container/DrinkList';

type Props = {};

const HomeScreen: FC<Props> = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <DrinkList header="Dummy header" />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default HomeScreen;
