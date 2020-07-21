import React, {FC, useMemo} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

type Props = {
  title: string;
  imgUrl: string;
};

const Drink: FC<Props> = ({title, imgUrl}) => {
  const memoDrink = useMemo(() => {
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={{uri: imgUrl}} />
        </View>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    );
  }, [imgUrl, title]);
  return memoDrink;
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
