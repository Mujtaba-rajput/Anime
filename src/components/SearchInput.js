import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const SearchInput = ({onChangeText, value}) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeText}
        value={value}
        placeholder="Search"
        placeholderTextColor={'#C70039'}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: '#1C1A1A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: 'black',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C70039',
    color: '#C70039',
    marginHorizontal: 20,
    marginVertical: 20,
    width: '80%',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
