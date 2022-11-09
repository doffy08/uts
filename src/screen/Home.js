/* eslint-disable prettier/prettier */
import { style } from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, BackHandler, Image, FlatList, useWindowDimensions} from 'react-native';

import Card from '../component/Card';
import SmallCard from '../component/SmallCard';

const Home = () => {
  const {width} = useWindowDimensions();
  const backAction = () => {
    BackHandler.exitApp();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
  return () => {
    BackHandler.removeEventListener("hardwareBackPress", backAction);
  }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.userWrapper}>
          <Text style={styles.userText}>Halo, Admin!</Text>
          <Image source={require('../../assets/pante.png')} style={styles.profileImage} />
        </View>
        <Card text="Kontol" />
        <View style={styles.wisataSection}>
          <SmallCard url="https://cdn0-production-images-kly.akamaized.net/icyy5lcPJOgxF8syp0khUhyPXI0=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1095870/original/046601900_1451309142-20151228-taman_bunga-baturaden-purwokerto.jpg" title="Kontol" subtitle="@kontol" />
          <SmallCard url="https://s.yimg.com/ny/api/res/1.2/TBV77UMU4Zazg9p8QLG0yw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://s.yimg.com/uu/api/res/1.2/SEVGAjWvOMuOiCSoGpsItg--~B/aD0zNzk7dz02NzM7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/id/liputan6_hosted_772/d25b5cb0e9a16f24f86b0f0b0291fe63" title="Kontol" subtitle="@kontol" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
      margin: 5,
    },
    userWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 10,
      marginHorizontal: 10,
    },
    userText: {
      fontSize: 16,
    },
    profileImage: {
      width: 50,
      height: 50,
      borderRadius: 50,
    },
    wisataSection: {
      marginVertical: 10,
      flexDirection: 'row',
      marginHorizontal: 10,
      flexWrap: 'wrap',
    },
});

export default Home;