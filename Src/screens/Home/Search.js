/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, TextInput, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Search() {
  const [user, setUser] = useState('');
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View
        style={{
          marginTop: 10,
          backgroundColor: 'white',
          flexDirection: 'row',
          width: windowWidth * 0.95,
          height: windowHeight * 0.05,
          borderRadius: 10,
          alignItems: 'center',
        }}>
        <Icon name="search" size={25} color="black" style={{margin: 10}} />
        <TextInput placeholder="Search" onChangeText={setUser} />
      </View>
    </View>
  );
}

export default Search;
