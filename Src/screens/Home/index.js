import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Header from '../../components/Home/Header';
import Stories from '../../components/Home/Stories';
import POSTS from '../../data/Post';
import Post from '../../components/Home/Post';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
});
export default Home;
