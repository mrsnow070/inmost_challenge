import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import BackIcon from '../../assets/svg/BackIcon';
import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.goBack()}>
      <BackIcon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
  },
});

export default BackButton;
