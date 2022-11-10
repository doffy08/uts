/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Card = props => {
  const {text} = props;
  return (
    <View style={styles.carouselWrapper}>
      <View style={styles.imageCarousel}>
        <Text>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselWrapper: {
    marginVertical: 10,
    alignItems: 'center',
  },
  imageCarousel: {
    width: '95%',
    height: 150,
    borderRadius: 10,
    backgroundColor: '#B2B2B2',
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Card;
