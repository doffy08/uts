/* eslint-disable prettier/prettier */
import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

const CustomInput = (props) => {

    const {value, onchange, placeholder, securetextentry} = props;
  return (
    <View>
      <TextInput value={value} onChangeText={onchange} placeholder={placeholder} style={styles.container} secureTextEntry= {securetextentry} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        margin: 5,
        marginVertical: 10,
        borderRadius: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderColor: '#BFC0CA',
        // color: 'black',
        // opacity: 0.5,
        width: '90%',
        alignSelf: 'center'
    },
});

export default CustomInput;