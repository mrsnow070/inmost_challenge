import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import FilterIcon from '../../assets/svg/FilterIcon';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const FilterButton: FC<Props> = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Filter')}>
      <FilterIcon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginRight: 20,
  },
});

export default FilterButton;
