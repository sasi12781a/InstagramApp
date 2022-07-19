import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import USERS from '../../data/Users';
import POSTS from '../../data/Post';
import { useDispatch } from "react-redux";
import { getUserUid } from '../../redux/action';

const data = [{id:0,video:'https://cdn.videvo.net/videvo_files/video/premium/video0321/large_watermarked/623_623-0235_preview.mp4'},{id:1,video:'https://cdn.videvo.net/videvo_files/video/premium/video0315/large_watermarked/601-2_601-9482_preview.mp4'},{id:2,video:'https://cdn.videvo.net/videvo_files/video/premium/getty_105/large_watermarked/istock-1083459308_preview.mp4'},{id:3,video:'https://cdn.videvo.net/videvo_files/video/premium/getty_142/large_watermarked/istock-1078247726_preview.mp4'}];
const BottomTabView = ({navigation}) => {
  const Tab = createMaterialTopTabNavigator();
  const Posts = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            flexWrap: 'wrap',
            flexDirection: 'row',
            paddingVertical: 5,
            justifyContent: 'space-between',
          }}>
          {USERS.map((index, key)=>(
            <View style={{justifyContent:'center',alignItems:'center',}}>
              <TouchableOpacity>
                <Image style={{height:150, width:130,marginVertical:0.5}}
                  source={{uri:index.image}}
                  key={key}
                />
              </TouchableOpacity>
            </View>
            
          ))}
        </View>
      </ScrollView>
    );
  };
  const Video = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            flexWrap: 'wrap',
            flexDirection: 'row',
            paddingVertical: 5,
            justifyContent: 'space-between',
          }}>
          {POSTS.map((index, key)=>(
            <Image style={{width:130, height:150, marginVertical:0.5}} 
              source = {{uri:index.imageUrl}}
              key = {key}
            />
          ))}
        </View>
      </ScrollView>
    );
  };
  const Tags = () => {
    const dispatch = useDispatch()
    function signOut(){
        dispatch(getUserUid(''));
    }

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            flexWrap: 'wrap',
            justifyContent:'center',
            alignItems:'center',
            flexDirection: 'row',
            paddingVertical: 5,
            justifyContent: 'space-between',
          }}>
          {POSTS.map((index, key)=>(
            <Image source={{uri:index.imageUrl}} 
              key = {key}
              style={{width: 130, height: 150, marginVertical: 0.5,}}
            />
          ))}
          <View style={{justifyContent:'center',alignItems:'center',}}>
            <TouchableOpacity onPress={signOut} style={{color: '#3493D9',borderColor: '#EFEFEF',}}>
              <Text
                style={{
                  marginVertical: 10,
                  padding: 10,
                  color: '#3493D9',
                  borderColor: '#EFEFEF',
                }}>
                LogOut
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle:{backgroundColor:'white'},
        tabBarShowLabel: false,
        tabBarIndicatorStyle: {
          backgroundColor: 'white',
          height: 1.5,
        },
        tabBarIcon: ({focused, colour}) => {
          let iconName;
          if (route.name === 'Posts') {
            iconName = focused ? 'ios-apps-sharp' : 'ios-apps-sharp';
            colour = focused ? 'black' : 'gray';
          } else if (route.name === 'Video') {
            iconName = focused ? 'ios-play-circle' : 'ios-play-circle-outline';
            colour = focused ? 'black' : 'gray';
          } else if (route.name === 'Tags') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
            colour = focused ? 'black' : 'gray';
          }

          return <Ionic name={iconName} color={colour} size={22} />;
        },
      })}
      
      >
      <Tab.Screen name="Posts" component={Posts} />
      <Tab.Screen name="Video" component={Video} />
      <Tab.Screen name="Tags" component={Tags} />
    </Tab.Navigator>
  );
};

export default BottomTabView;