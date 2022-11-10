/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/FontAwesome5';

const MenuSection = props => {
  const {iconName, menuName, onPress} = props;
  return (
    <TouchableOpacity style={styles.menuWrapper} onPress={onPress}>
      <View style={styles.menuIcon}>
        <View style={styles.menuIconWrapper}>
          <Ionicons name={iconName} size={26} color="black" />
        </View>
      </View>
      <View style={styles.menuTextWrapper}>
        <Text style={styles.menuText}>{menuName}</Text>
      </View>
      <View style={styles.arrowMenu}>
        <Ionicons name="chevron-right" size={16} color="black" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuWrapper: {
    flexDirection: 'row',
    width: '100%',
    height: 100,
  },
  menuIcon: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIconWrapper: {
    width: '70%',
    height: '70%',
    borderRadius: 15,
    backgroundColor: 'rgba(222, 222, 222, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuTextWrapper: {
    width: '50%',
    justifyContent: 'center',
  },
  menuText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
  arrowMenu: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MenuSection;
