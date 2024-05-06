import {StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants';
import {BottomTabBar} from '@react-navigation/bottom-tabs';

const CustomTabBar = props => {
  return (
    <View>
      <View style={styles.tabBar}>
        <BottomTabBar {...props} />
      </View>
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    height: 24,
    backgroundColor: 'transparent',
    borderRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 3,
  },
});
