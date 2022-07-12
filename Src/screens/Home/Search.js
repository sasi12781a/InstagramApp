/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TextInput, Dimensions, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Search({navigation}) {
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
        <Pressable onPress={() => navigation.navigate('SearchScreen')}>
          <Icon name="search" size={25} color="black" style={{margin: 8}} />
        </Pressable>
        <TextInput placeholder="Search" />
      </View>
    </View>
  );
}

export default Search;
