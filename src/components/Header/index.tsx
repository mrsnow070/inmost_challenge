import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FilterIcon from '../../assets/svg/FilterIcon';

type Props = {};

const Header: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Drinks</Text>
      <FilterIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 21,
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '500',
  },
});

export default Header;
