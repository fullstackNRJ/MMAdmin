/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {COLORS} from '../constants';

const CustomTabBarButton = props => {
  // console.log('Routes>>>', props);
  const {route, children, accessibilityState, onPress} = props;

  if (accessibilityState.selected) {
    return (
      <View style={styles.btnWrapper}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={[
              styles.svgGapFiller,
              {
                borderTopLeftRadius: route === 'home' ? 10 : 0,
              },
            ]}
          />
          <Svg width={71} height={58} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={COLORS.bgColor}
            />
          </Svg>
          <View
            style={[
              styles.svgGapFiller,
              {
                borderTopRightRadius: route === 'settings' ? 10 : 0,
              },
            ]}
          />
        </View>

        <TouchableOpacity
          activeOpacity={1}
          onPress={onPress}
          style={[styles.activeBtn]}>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        style={[
          styles.inactiveBtn,
          {
            borderTopLeftRadius: route === 'home' ? 10 : 0,
            borderTopRightRadius: route === 'settings' ? 10 : 0,
          },
        ]}>
        {children}
      </TouchableOpacity>
    );
  }
};

export default CustomTabBarButton;

const styles = StyleSheet.create({
  btnWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  activeBtn: {
    flex: 1,
    position: 'absolute',
    top: -22,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: COLORS.danger,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
  },
  inactiveBtn: {
    flex: 1,
    backgroundColor: COLORS.bgColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgGapFiller: {
    flex: 1,
    backgroundColor: COLORS.bgColor,
  },
});
