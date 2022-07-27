import React,{useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalBox from '../../screens/Home/ModalBox';

const Header = () => {
  const[val,setVal]=useState('11');
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../../assets/images/Instagram.png')}
        />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <ModalBox/>
        <TouchableOpacity onPress={()=>setVal('0')}>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgetext}>{val}</Text>
          </View>
          <Icon
            style={styles.icon}
            name="chatbubble-ellipses-outline"
            size={30}
            color="#000"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
    zIndex:1,
  },
  iconsContainer: {
    flexDirection: 'row',
    color: 'white',
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  unreadBadge: {
    position: 'absolute',
    backgroundColor: '#FF3250',
    right: -5,
    top: -5,
    borderRadius: 25,
    width: 25,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  unreadBadgetext: {
    color: 'white',
    fontWeight: '600',
  },
});

export default Header;
