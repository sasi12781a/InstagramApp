import React from 'react';
import {View, TextInput, Dimensions, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MyTabs from '../../Navigations/TabNavigation';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SearchScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{alignItems: 'flex-start', flexDirection: 'row'}}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-back-outline"
            size={25}
            color="black"
            style={{margin: 15}}
          />
        </Pressable>
        <View
          style={{
            marginTop: 10,
            backgroundColor: 'white',
            flexDirection: 'row',
            width: windowWidth * 0.8,
            height: windowHeight * 0.05,
            borderRadius: 10,
            alignItems: 'center',
          }}>
          <Icon name="search" size={25} color="black" style={{margin: 8}} />
          <TextInput placeholder="Search" />
        </View>
      </View>
      <View style={{flex: 1}}>
        <MyTabs />
      </View>
    </View>
  );
};

export default SearchScreen;
