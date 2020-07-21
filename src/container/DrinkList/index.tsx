import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Drink from '../../components/Drink';

type Props = {
  header: string;
};

const DrinkList: FC<Props> = ({header}) => {
  return (
    <View style={styles.container}>
      <Text>{header}</Text>
      <Drink title="title_1" />
      <Drink title="title_2" />
      <Drink title="title_3" />
      <Drink title="title_4" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, marginVertical: 20, marginLeft: 20},
  headerText: {
    fontSize: 14,
    lineHeight: 16,
  },
});

export default DrinkList;
