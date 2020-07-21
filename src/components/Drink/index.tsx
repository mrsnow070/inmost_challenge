import React, {FC} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

type Props = {
  title: string;
};

const Drink: FC<Props> = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={{uri: 'https://via.placeholder.com/100'}}
        />
      </View>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  imgContainer: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  img: {
    flex: 1,
  },
  titleText: {
    fontSize: 16,
    lineHeight: 19,
    color: '#7E7E7E',
  },
});

export default Drink;
