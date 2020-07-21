import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getCount} from '../../redux/reducer/testReducer';
import {AppState} from '../../redux/reducer';
import {
  addToCount,
  subFromCount,
  startFetch,
} from '../../redux/actions/testActions';

const Counter: React.FC = () => {
  const counter = useSelector((state: AppState) => getCount(state));
  const dispatch = useDispatch();

  return (
    <View>
      <Text>{counter}</Text>
      <Button title="incr" onPress={() => dispatch(addToCount())} />
      <Button title="decr" onPress={() => dispatch(subFromCount())} />
      <Button title="fetch" onPress={() => dispatch(startFetch())} />
    </View>
  );
};

export default Counter;
