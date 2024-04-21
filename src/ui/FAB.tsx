import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const FAB = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={FABStyles.fab}>
      <Text style={FABStyles.plus}>+</Text>
    </TouchableOpacity>
  );
};

export default FAB;

const FABStyles = StyleSheet.create({
  fab: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#3b5998',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 128,
    right: 32,
  },
  plus: {
    color: 'white',
    fontSize: 28,
  },
});
