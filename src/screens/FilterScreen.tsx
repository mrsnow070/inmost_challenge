import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import {getSelectedCategories} from '../redux/reducer/categoryReducer';
import {View, Text, StyleSheet} from 'react-native';

type Props = {};

const FilterScreen: FC<Props> = () => {
  return (
    <View>
      <Text>FilterScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default FilterScreen;
