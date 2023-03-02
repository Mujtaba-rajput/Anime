/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Alert,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {useQuery} from '@tanstack/react-query';
import {useSelector, useDispatch} from 'react-redux';
import {HeartClicked, RowSave} from '../redux/actions/actions';
import CustomCard from '../components/CustomCard';
import SearchInput from '../components/SearchInput';

const AnimeComplete = ({route, navigation}) => {
  const myState = useSelector(state => state.StoreIds);

  const dispatch = useDispatch();

  // for incrementing page nuber total pages are almost 991
  const [page, setPage] = useState(1);
  const status = 'complete';
  const [searchAnimes, setSearchAnimes] = useState([]);
  const [toSearch, setToSearch] = useState('');

  // using useQuery for store data in cache, so not to get data every time from api which is time consuming
  const {isLoading, error, data, isFetching} = useQuery({
    // setting key
    queryKey: ['complete', page],

    // axios for https requests
    queryFn: () =>
      axios
        .get(
          `https://api.jikan.moe/v4/anime?page=${page}&limit=25&status=${status}`,
        )
        .then(res => res.data),
    keepPreviousData: true,
  });
  const favrtHandle = (id, array) => {
    dispatch(HeartClicked(id));
    dispatch(RowSave(array));
  };

  const searching = async value => {
    const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${value}`).then(
      res => res.json(),
    );
    if (value !== '') {
      setSearchAnimes(temp);
    } else {
      setSearchAnimes([]);
    }
  };

  const handleScroll = event => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY <= 0) {
      if (page !== 1) {
        setPage(prevPage => prevPage - 1);
      }
    } else {
      return;
    }
  };

  return (
    <View style={styles.screen}>
      {/* checking if its loading then show spinner other wise show list of animies bcz its hook */}
      {isLoading ? (
        // for spinner
        <ActivityIndicator size={100} style={styles.spinner} color="#C70039" />
      ) : data ? (
        <>
          {/* using flatlist for scrolling */}
          <SearchInput
            onChangeText={value => {
              setToSearch(value);
              searching(value);
            }}
            value={toSearch}
          />
          <View>
            {/* using flatlist for scrolling etc */}
            <FlatList
              contentContainerStyle={styles.container}
              data={toSearch ? searchAnimes.data : data.data}
              onScroll={handleScroll}
              onEndReached={() => {
                setPage(prevPage => prevPage + 1);
              }}
              onEndReachedThreshold={0.1}
              keyExtractor={item => item.mal_id.toString()}
              initialNumToRender={10}
              renderItem={item => {
                return (
                  <>
                    <CustomCard
                      onPress={() => {
                        navigation.navigate('Detail', {
                          title: item.item.title,
                          rating: item.item.rating,
                          score: item.item.score,
                          year: item.item.year,
                          image: item.item.images.webp.large_image_url,
                          mal_id: item.item.mal_id,
                          synopsis: item.item.synopsis,
                        });
                      }}
                      title={item.item.title}
                      imageUrl={item.item.images.webp.large_image_url}
                      rating={item.item.rating}
                      score={item.item.score}
                      year={item.item.year}
                      component={
                        myState.find(function (element) {
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
                      onPressFavrt={() => {
                        favrtHandle(item.item.mal_id, [
                          {
                            title: item.item.title,
                            rating: item.item.rating,
                            score: item.item.score,
                            year: item.item.year,
                            image: item.item.images.webp.large_image_url,
                            mal_id: item.item.mal_id,
                          },
                        ]);
                      }}
                    />
                  </>
                );
              }}
            />
          </View>
        </>
      ) : (
        Alert.alert('No data found')
      )}
      {isFetching && data ? (
        <ActivityIndicator size={30} style={styles.height} color="#C70039" />
      ) : null}
    </View>
  );
};

export default AnimeComplete;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#1C1A1A',
  },
  container: {
    flexGrow: 1,
  },
  spinner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  height: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shaped: {
    width: 40,
    height: 40,
  },
});
