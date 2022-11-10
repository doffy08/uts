/* eslint-disable prettier/prettier */
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import MenuSection from '../component/MenuSection';

const Profile = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={[styles.imageSectionWrapper, {height: height * 0.4}]}>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../assets/pante.png')}
            style={styles.image}
          />
          <Text style={styles.name}>Admin</Text>
          <Text style={styles.username}>@azkakentot</Text>
        </View>
      </View>
      <ScrollView style={styles.menuSectionWrapper}>
        <MenuSection
          iconName="cog"
          menuName="Settings"
          onPress={() => console.warn('Setting Pressed')}
        />
        <MenuSection
          iconName="gift"
          menuName="Reward Zone"
          onPress={() => console.warn('Reward Zone Pressed')}
        />
        <MenuSection
          iconName="info"
          menuName="Help Center"
          onPress={() => console.warn('Help Center Pressed')}
        />
        <MenuSection
          iconName="sign-out-alt"
          menuName="Logout"
          onPress={() => navigation.navigate('LoginScreen')}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageSectionWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(231, 226, 226, 0.46)',
  },
  imageWrapper: {
    backgroundColor: '#B2B2B2',
    width: 150,
    height: 150,
    borderRadius: 75,
    alignItems: 'center',
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  username: {
    fontSize: 16,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    resizeMode: 'cover',
  },
  menuSectionWrapper: {
    width: '100%',
    height: '70%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

export default Profile;
