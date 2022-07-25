import React from 'react';
import {
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions
} from 'react-native';
import { data } from './Search';

const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('screen').width;

const AddStory=()=>{
    return(
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
    )
}

export default AddStory;