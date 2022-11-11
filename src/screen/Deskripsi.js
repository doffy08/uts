/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Deskripsi = ({route}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={{uri: route.params.detail.url}} style={styles.image} />
      </View>
    </View>
  );
};

export default Deskripsi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageWrapper: {
    width: '95%',
    marginVertical: 10,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '60%',
    resizeMode: 'cover',
  },
});
