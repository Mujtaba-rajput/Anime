import React from 'react';
import {StyleSheet, Dimensions, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const CustomCard = ({
  onPress,
  imageUrl,
  title,
  rating,
  score,
  year,
  onPressFavrt,
  state,
  malId,
  component,
}) => {
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.innerWrapper}>
          <View>
            <Image
              style={styles.image}
              resizeMode={'stretch'}
              // from urls whic is in api
              source={{
                uri: imageUrl,
              }}
            />
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.generalPadding}>
            <Text style={styles.text} numberOfLines={4}>
              {title}
            </Text>
          </View>
          <View style={styles.generalPadding}>
            <Text style={styles.text} numberOfLines={2}>
              {rating}
            </Text>
          </View>
          <View style={styles.generalPadding}>
            <Text style={styles.text}>{score}</Text>
          </View>
          <View style={styles.generalPadding}>
            <Text style={styles.text}>{year}</Text>
          </View>
          <TouchableOpacity onPress={onPressFavrt}>
            {component}
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1A1A',
    elevation: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#C70039',
    shadowOpacity: 10,
  },
  innerWrapper: {
    width: windowWidth * 0.5,
    height: 240,
    borderRadius: 10,
  },
  image: {
    width: windowWidth * 0.5,
    height: 240,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  rightContainer: {
    marginHorizontal: 20,
    paddingTop: 10,
  },
  generalPadding: {
    paddingBottom: 5,
  },
  text: {
    width: windowWidth * 0.3,
    lineHeight: 20,
    fontWeight: 'bold',
    color: '#C70039',
    elevation: 10,
  },
  shaped: {
    width: 40,
    height: 40,
  },
  height: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
