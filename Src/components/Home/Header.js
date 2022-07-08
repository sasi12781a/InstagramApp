import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../../assets/images/Instagram_logo.png')}
        />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Icon
            style={styles.icon}
            name="add-circle-outline"
            size={30}
            color="#fff"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            style={styles.icon}
            name="heart-outline"
            size={30}
            color="#fff"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgetext}>11 </Text>
          </View>
          <Icon
            style={styles.icon}
            name="chatbubble-ellipses-outline"
            size={30}
            color="#fff"
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
    marginVertical: 20,
  },
  iconsContainer: {
    flexDirection: 'row',
    color: 'white',
  },
  logo: {
    width: 100,
    height: 80,
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
