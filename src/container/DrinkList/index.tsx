import React, {FC, useMemo} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import Drink from '../../components/Drink';
import {DrinkType} from '../../redux/types';

type Props = {
  header: string;
  drinks: DrinkType[];
};

const DrinkList: FC<Props> = ({header, drinks}) => {
  const memoDrinkList = useMemo(() => {
    return (
      <View style={styles.container}>
        <Text>{header}</Text>
        <FlatList
          data={drinks}
          keyExtractor={(item) => item.idDrink}
          renderItem={({item}) => (
            <Drink title={item.strDrink} imgUrl={item.strDrinkThumb} />
          )}
        />
      </View>
    );
  }, [drinks, header]);

  return memoDrinkList;
};

const styles = StyleSheet.create({
  container: {flex: 1, marginVertical: 20, marginLeft: 20},
  headerText: {
    fontSize: 14,
    lineHeight: 16,
  },
});

export default DrinkList;
