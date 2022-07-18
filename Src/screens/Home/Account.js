import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import ProfileBody from './ProfileBody';
import ProfileButtons from './ProfileButtons';
import BottomTabView from './BottomTabView';
import POSTS from '../../data/Post';
import USERS from '../../data/Users';

const Account = ({post}) => {
  let circuls = [];
  let numberofcircels = 10;

  for (let index = 0; index < numberofcircels; index++) {
    circuls.push(
      <View key={index}>
        {index === 0 ? (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              borderWidth: 1,
              opacity: 0.5,
              marginHorizontal: 5,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor:'white',
            }}>
          </View>
        ) : (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: 'white',
              opacity: 0.1,
              marginHorizontal: 5,
              borderColor:'white',
              borderWidth: 1,
            }}></View>
        )}
      </View>,
    );
  }

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#ffffff'}}>
      <View style={{width: '100%', padding: 10}}>
        <ProfileBody
          name={POSTS[0].user}
          accountName={POSTS[0].user}
          profileImage={{uri:POSTS[0].imageUrl}}
          followers="4.6M"
          following="35"
          post="458"
        />
        <ProfileButtons
          id={0}
          name={POSTS[0].user}
          accountName={POSTS[0].user}
          profileImage={{uri:POSTS[0].imageUrl}}
        />
      </View>
      <View>
        <Text
          style={{
            paddingHorizontal: 10,
            paddingBottom:10,
            letterSpacing: 1,
            fontSize: 14,
            color:'black'
          }}>
          Story Highlights
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            paddingBottom:5,
            paddingHorizontal: 10,
          }}>
          {USERS.map((index, key)=>(
            <Image 
              source={{uri:index.image}}
              key={key}
              style={{
                width: 60,
                height: 60,
                borderRadius: 100,
                borderWidth: 1,
                marginHorizontal: 5,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor:'white',}}

                
              />
          ))}
        </ScrollView>
      </View>
      <BottomTabView /> 
    </View>
  );
};

export default Account;