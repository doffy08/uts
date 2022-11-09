/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const SmallCard = (props) => {
const {url, title, subtitle} = props;
  return (
    <View style={styles.smallCardWrapper}>
        <View style={styles.smallCard}>
            <Image source={{uri: `${url}`}} style={styles.smallCardImage} />
        </View>
        <Text style={styles.smallCardTitle}>{title}</Text>
        <Text style={styles.smallCardDescription}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    smallCardWrapper: {
        width: '50%',
      },
      smallCard: {
        width: '90%',
        height: 200,
        borderRadius: 10,
        backgroundColor: '#B2B2B2',
      },
      smallCardImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        resizeMode: 'cover',
      },
      smallCardTitle: {
        fontWeight: 'bold',
        fontSize: 20,
      },
      smallCardDescription: {
        fontSize: 16,
      },
});

export default SmallCard;