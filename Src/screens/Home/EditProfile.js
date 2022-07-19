import React from 'react';
import { useDispatch } from "react-redux";
import { getUserUid } from '../../redux/action';
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput,
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

const EditProfile = ({route, navigation}) => {

  const {name, accountName, profileImage} = route.params;
  const TostMessage = () => {
    ToastAndroid.show('Edited Sucessfully !', ToastAndroid.SHORT);
  };
  const dispatch = useDispatch()
    function signOut(){
        dispatch(getUserUid(''));
    }

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#fffff',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name="close-outline" style={{fontSize: 35}} color='black'/>
        </TouchableOpacity>
        <Text style={{fontSize: 16, fontWeight: 'bold', color:'black'}}>Edit Profile</Text>
        <TouchableOpacity
          onPress={() => {
            TostMessage();
            navigation.goBack();
          }}>
          <Ionic name="checkmark" style={{fontSize: 35, color: '#3493D9'}} />
        </TouchableOpacity>
      </View>
      <View style={{padding: 20, alignItems: 'center'}}>
        <Image
          source={profileImage}
          style={{width: 80, height: 80, borderRadius: 100, borderColor:'black', borderWidth:1}}
        />
        <Text
          style={{
            color: '#3493D9',
          }}>
          Change profile photo
        </Text>
      </View>
      <View style={{padding: 10}}>
        <View>
          <Text
            style={{
              opacity: 0.7,
              color:'black'
            }}>
            Name
          </Text>
          <TextInput
            placeholder="name"
            defaultValue={name}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
              color:'black',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text
            style={{
              opacity: 0.7,
              color:'white',
            }}>
            Username
          </Text>
          <TextInput
            placeholder="accountname"
            defaultValue={accountName}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
              color:'black',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <TextInput
            placeholder="Website"
            placeholderTextColor='black'
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
              color:'black',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <TextInput
            placeholder="Bio"
            placeholderTextColor='black'
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
              
            }}
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            marginVertical: 10,
            padding: 10,
            color: '#3493D9',
            borderColor: '#EFEFEF',
          }}>
          Switch to Professional account
        </Text>
        <Text
          style={{
            marginVertical: 10,
            padding: 10,
            color: '#3493D9',
            borderColor: '#EFEFEF',
          }}>
          Persnol information setting
        </Text>
        <TouchableOpacity onPress={signOut}>
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
  );
};

export default EditProfile;