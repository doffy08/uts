/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const CustomButton = (props) => {
    const {placeholder, onpress} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onpress}>
        <Text style={styles.btnPlaceholder}>{placeholder}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 10,
        },
    button: {
        backgroundColor: '#8D9EFF',
        width: '30%',
        alignItems: 'center',
        padding: 20,
        borderRadius: 5,
        elevation: 6,
    },
    btnPlaceholder:{
        fontSize: 16,
        fontWeight: 'bold',
    }
})

export default CustomButton;