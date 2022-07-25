import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import USERS from '../../data/Users';
import { useNavigation } from '@react-navigation/native';


const Stories = () => {
  const navigation=useNavigation();
  return (
    <View
      style={{
        marginBottom: 13,
        marginHorizontal: 5,
      }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity onPress={()=>navigation.push('AddStory')}>
            <Image
              source={{
                uri: 'https://www.citypng.com/public/uploads/preview/-11591396102oojxpyygnw.png'
              }}
              style={{width: 70,height: 70,marginLeft: 6,borderWidth: 3,borderColor: '#ff8501',borderRadius: 70,}}
            />
          </TouchableOpacity>
          <Text>
            Your story
          </Text>
        </View>
        {USERS.map((story, index) => (
          <View
            key={index}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() => navigation.push('Status',{uri:story.image})} >
              <Image
                source={{
                  uri: story.image,
                }}
                style={styles.story}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: 'black',
              }}>
              {story.user.length > 11
                ? story.user.slice(0, 10).toLowerCase() + '... '
                : story.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: '#ff8501',
    borderRadius: 70,
  },
});

export default Stories;
