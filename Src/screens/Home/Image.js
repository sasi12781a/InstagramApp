import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";


const FullImage = (uri) => (
  <View style={styles.container}>
    <ImageBackground source={uri} resizeMode="cover" style={styles.image}>
    </ImageBackground>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});

export default FullImage;