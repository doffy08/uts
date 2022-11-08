/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background1.jpg")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <Text style={styles.wisataPurwokerto}>Wisata Purwokerto</Text>
        <View style={styles.lisWrapper}>
        <TouchableOpacity
          onPress={() => console.warn("OK")}
          style={styles.button}
        >
          <Text style={styles.loremIpsum}>1. Baturaden</Text>
        </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 812
  },
  image: {
    width: 375,
    height: 812
  },
  image_imageStyle: {},
  wisataPurwokerto: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 25,
    letterSpacing: 3,
    textAlign: "center",
    marginTop: 56,
    marginLeft: 56
  },
  listWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '80%',
    height: 54,
    backgroundColor: "rgba(155,155,155,1)",
    marginTop: 67,
    marginLeft: 13
  },
  loremIpsum: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 30,
    width: 236,
    fontSize: 23,
    letterSpacing: 2,
    textAlign: "left",
    marginTop: 11,
    marginLeft: 21
  }
});

export default Home;