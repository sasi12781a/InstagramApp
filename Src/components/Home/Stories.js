/* eslint-disable react-native/no-inline-styles */
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

const Stories = () => {
  return (
    <View
      style={{
        marginBottom: 13,
        marginHorizontal: 5,
      }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View
            key={index}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity>
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
