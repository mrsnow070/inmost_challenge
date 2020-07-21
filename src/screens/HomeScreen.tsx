import React, {FC, useEffect, useCallback, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  bootstrapRequest,
  getNextPage,
} from '../redux/actions/categoriesActions';
import {
  isIncrementAllowed,
  getDrinkSections,
} from '../redux/reducer/categoryReducer';
import {StyleSheet, ScrollView, Text, FlatList} from 'react-native';
import {SafeAreaView, StatusBar, Button} from 'react-native';
import DrinkList from '../container/DrinkList';

type Props = {};

const HomeScreen: FC<Props> = () => {
  const dispatch = useDispatch();
  const isIncrAllowed = useSelector((state: any) => isIncrementAllowed(state));
  const drinksSections = useSelector((state: any) => getDrinkSections(state));

  const loadNextPage = useCallback(() => {
    isIncrAllowed && dispatch(getNextPage());
  }, [dispatch, isIncrAllowed]);

  useEffect(() => {
    dispatch(bootstrapRequest());
  }, [dispatch]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.container}
          data={drinksSections}
          renderItem={({item}) => {
            return <DrinkList header={item.strCategory} drinks={item.drinks} />;
          }}
          keyExtractor={(item) => item.strCategory}
          onEndReached={loadNextPage}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default HomeScreen;
