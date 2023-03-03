/* eslint-disable prettier/prettier */
import React from 'react';
import {View, FlatList, StyleSheet, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {HeartClicked, RowSave} from '../redux/actions/actions';
import CustomCard from '../components/CustomCard';

const Favorites = ({route, navigation}) => {
  const dispatch = useDispatch();
  const myState = useSelector(state => state.StoreRow);
  const myStateIds = useSelector(state => state.StoreIds);

  const favrtHandle = (id, array) => {
    dispatch(HeartClicked(id));
    dispatch(RowSave(array));
  };
  return (
    <View style={styles.screen}>
      <View>
        {/* using flatlist for scrolling*/}
        <FlatList
          data={myState}
          // keyExtractor={item => item.item.mal_id.toString()}
          renderItem={item => {
            return (
              <CustomCard
                onPress={() => {
                  navigation.navigate('Detail', {
                    title: item.item.title,
                    rating: item.item.rating,
                    score: item.item.score,
                    year: item.item.year,
                    image: item.item.image,
                    mal_id: item.item.mal_id,
                    synopsis: item.item.synopsis,
                    background:item.item.background
                  });
                }}
                title={item.item.title}
                imageUrl={item.item.image}
                rating={item.item.rating}
                score={item.item.score}
                year={item.item.year}
                onPressFavrt={() => {
                  favrtHandle(item.item.mal_id, [
                    {
                      title: item.item.title,
                      rating: item.item.rating,
                      score: item.item.score,
                      year: item.item.year,
                      image: item.item.image,
                      mal_id: item.item.mal_id,
                    synopsis: item.item.synopsis,
                    background:item.item.background


                    },
                  ]);
                }}
                component={
                  myStateIds.find(function (element) {
                    return element === item.item.mal_id;
                  }) ? (
                    <Image
                      source={require('../drawble/heart/filled.png')}
                      style={styles.shaped}
                    />
                  ) : (
                    <Image
                      source={require('../drawble/heart/outline.png')}
                      style={styles.shaped}
                    />
                  )
                }
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#1C1A1A',
  },
  spinner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shaped: {
    width: 40,
    height: 40,
  },
});
