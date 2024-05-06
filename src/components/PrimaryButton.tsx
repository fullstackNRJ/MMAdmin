import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants';

const PrimaryButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    padding: 16,
    //width: 100,
    backgroundColor: COLORS.danger,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: COLORS.black,
    fontSize: 18,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
});
