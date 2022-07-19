/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  TextInput,
  Dimensions,
  Pressable,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const data = [
  {
    id: 0,
    uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
  {
    id: 1,
    uri: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg',
  },
  {
    id: 2,
    uri: 'https://images.unsplash.com/photo-1621157281974-e926449624e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwZ3JlZW58ZW58MHx8MHx8&w=1000&q=80',
  },
  {
    id: 3,
    uri: 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000',
  },
  {
    id: 4,
    uri: 'https://imageio.forbes.com/specials-images/imageserve/5f9cca07d4c42920d4d348c7/rainforest/960x0.jpg?format=jpg&width=960',
  },
  {
    id: 5,
    uri: 'https://img.freepik.com/free-photo/breathtaking-shot-beautiful-stones-turquoise-water-lake-hills-background_181624-12847.jpg?w=2000',
  },
  {
    id: 6,
    uri: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg',
  },
  {
    id: 7,
    uri: 'https://www.iucn.org/sites/default/files/styles/what_we_do_large/public/images-themes/biodiversity-shutterstock_1477256246.jpg.webp?itok=4i9JdtFu',
  },
];

function Search({navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: windowHeight,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          marginTop: 10,
          backgroundColor: 'white',
          flexDirection: 'row',
          flexWrap: 'wrap',
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
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          height: windowHeight * 0.8,
          width: windowWidth * 0.9,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <FlatList
          data={data}
          contentContainerStyle={{
            justifyContent: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
          renderItem={({item}) => (
            <TouchableOpacity>
              <Image
                source={{uri: item.uri}}
                style={{
                  width: windowWidth * 0.4,
                  height: windowHeight * 0.2,
                  borderWidth: 2,
                  borderColor: '#d35647',
                  margin: 8,
                }}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

export default Search;
