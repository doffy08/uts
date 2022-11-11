/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Deskripsi = ({route}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={{uri: route.params.detail.url}} style={styles.image} />
        <Text style={styles.title}>
          {route.params.detail.title} - {route.params.detail.subtitle}
        </Text>
        <Text style={styles.description}>
          {route.params.detail.description}
        </Text>
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
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
  },
});
