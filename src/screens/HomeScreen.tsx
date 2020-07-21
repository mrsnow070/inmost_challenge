import React, {FC, useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  bootstrapRequest,
  getNextPage,
} from '../redux/actions/categoriesActions';
import {
  isIncrementAllowed,
  getDrinkSections,
} from '../redux/reducer/categoryReducer';
import {StyleSheet, FlatList, Text, View} from 'react-native';
import {SafeAreaView, StatusBar} from 'react-native';
import DrinkList from '../components/DrinkList';

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
        {drinksSections.length > 0 ? (
          <FlatList
            style={styles.container}
            data={drinksSections}
            renderItem={({item, index}) => {
              return (
                <>
                  <DrinkList header={item.strCategory} drinks={item.drinks} />
                  {drinksSections.length - 1 === index && (
                    <View style={styles.textContainer}>
                      <Text style={styles.text}>
                        Seems you're reachead end of the list.
                      </Text>
                    </View>
                  )}
                </>
              );
            }}
            keyExtractor={(item) => item.strCategory}
            onEndReached={loadNextPage}
            onEndReachedThreshold={0.7}
          />
        ) : (
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              You're not selected any categories to show
            </Text>
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  textContainer: {
    flexShrink: 1,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {textAlign: 'center'},
});

export default HomeScreen;
