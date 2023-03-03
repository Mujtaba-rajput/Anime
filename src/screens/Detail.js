/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {HeartClicked, RowSave} from '../redux/actions/actions';

const windowHeight = Dimensions.get('window').height;
const Detail = ({route, navigation}) => {
  const params = route.params;
  const dispatch = useDispatch();
  const myStateIds = useSelector(state => state.StoreIds);

  const favrtHandle = (id, array) => {
    dispatch(HeartClicked(id));
    dispatch(RowSave(array));
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ImageBackground
        style={styles.backgroundImage}
        // from urls whic is in api
        source={{
          uri: params.image,
        }}>
        <TouchableOpacity
          style={styles.likeButtonContainer}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../drawble/backIcon.jpeg')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.headerContainer}>
        <Text style={styles.header}>{params.title}</Text>
        <TouchableOpacity
          onPress={() => {
            favrtHandle(params.mal_id, [
              {
                title: params.title,
                rating: params.rating,
                score: params.score,
                year: params.year,
                image: params.image,
                mal_id: params.mal_id,
                synopsis: params.synopsis,
                background: params.background,
              },
            ]);
          }}
          style={styles.center}>
          {/* Heart image */}
          {myStateIds.find(function (element) {
            return element === params.mal_id;
          }) ? (
            <Image
              source={require('../drawble/heart/filled.png')}
              style={styles.image}
            />
          ) : (
            <Image
              source={require('../drawble/heart/outline.png')}
              style={styles.image}
            />
          )}
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.innerWrapper}>
          <Text style={styles.description}>Rating:</Text>
          <Text style={styles.details}>{params.rating}</Text>
          <Text style={styles.description}>Score:</Text>
          <Text style={styles.details}>{params.score}</Text>
          <Text style={styles.description}>Year:</Text>
          <Text style={styles.details}>{params.year}</Text>
          <Text style={styles.description}>Synopsis:</Text>
          <Text style={styles.details}>{params.synopsis}</Text>
          <Text style={styles.description}>Background:</Text>
          <Text style={styles.details}>{params.background}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#1C1A1A',
  },
  backgroundImage: {
    width: '100%',
    height: (26 / 100) * windowHeight,
    marginTop: '0%',
    marginLeft: '0%',
    marginBottom: '0%',
    elevation: 10,
    shadowColor: '#C70039',
    shadowOpacity: 10,
  },
  likeButtonContainer: {
    width: 26,
    height: 26,
    backgroundColor: '#C70039',
    borderRadius: 13,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#1C1A1A',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    bottom: 30,
    width: '100%',
    flexWrap: 'wrap',
  },
  header: {
    color: '#C70039',
    fontSize: 26,
    fontWeight: 'bold',
    paddingHorizontal: '5%',
    marginTop: '4%',
  },
  center: {
    justifyContent: 'center',
  },
  image: {
    width: (5 / 100) * windowHeight,
    height: (5 / 100) * windowHeight,
    marginLeft: '1%',
  },
  innerWrapper: {
    marginLeft: '0%',
    marginBottom: '0%',
    marginTop: '0%',
    paddingHorizontal: '5%',
    backgroundColor: '#1C1A1A',
  },
  description: {
    color: '#C70039',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: '2%',
    lineHeight: 20,
  },
  details: {
    color: '#C70039',
    fontSize: 12,
    marginTop: '1%',
    lineHeight: 18,
  },
});
