import React, {FC, useState, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {
  getSelectedCategories,
  getCategories,
} from '../redux/reducer/categoryReducer';

import {setSelected} from '../redux/actions/categoriesActions';
import CheckIcon from '../assets/svg/CheckIcon';
import {Category} from '../redux/types';

type Props = {};

const FilterScreen: FC<Props> = () => {
  const categories = useSelector((state: any) => getCategories(state));
  const navigation = useNavigation();

  const selectedCategories = useSelector((state: any) =>
    getSelectedCategories(state),
  );

  const dispatch = useDispatch();
  const [selectedList, setSelectedList] = useState(selectedCategories);

  const handleSelection = (item: Category) => {
    const isSelected = checkSelection(item);

    isSelected
      ? setSelectedList((t) =>
          t.filter((el) => el.strCategory !== item.strCategory),
        )
      : setSelectedList((list) => list.concat(item));
  };

  const checkSelection = (item: Category) =>
    selectedList.filter((el) => el.strCategory === item.strCategory).length > 0;

  const applySelected = useCallback(() => {
    dispatch(setSelected(selectedList));
    navigation.goBack();
  }, [dispatch, selectedList, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        style={styles.listContainer}
        keyExtractor={(item) => item.strCategory}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity onPress={() => handleSelection(item)}>
              <View style={styles.catRow}>
                <Text style={styles.catText}>{item.strCategory}</Text>
                {checkSelection(item) && <CheckIcon />}
              </View>
              {categories.length - 1 === index && (
                <View style={styles.footer} />
              )}
            </TouchableOpacity>
          );
        }}
      />
      <View style={styles.footer} />
      <TouchableOpacity style={styles.absBtn} onPress={applySelected}>
        <Text style={styles.absBtnText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginHorizontal: 35,
  },
  container: {position: 'relative', flex: 1},
  catRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 31,
  },
  catText: {
    lineHeight: 19,
    fontSize: 16,
    color: '#7E7E7E',
  },
  absBtn: {
    marginHorizontal: 27,
    height: 53,
    width: Dimensions.get('screen').width - 54,
    backgroundColor: '#272727',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '10%',
  },
  absBtnText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  footer: {height: 150},
});

export default FilterScreen;
