/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Config from 'react-native-config';
import HomeStackScreen from './HomeStack';
import OffersStackScreen from './OffersStack';
import PlayGamesStack from './PlayGamesStack';
import SettingsStackScreen from './SettingsStack';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomTabBar from '../components/CustomTabBar';
import CustomTabBarButton from '../components/CustomTabBarButton';

console.log('CONFIG', Config);

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home screen</Text>
      <Text>
        ENVIROMENT:{Config.ENVIROMENT} ::: APP_ID:{Config.APP_ID}
      </Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Stack_Details')}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();
//customize bottom bar
/* const TabIcon = ({focused, color, size}) => {
  let iconName;

  if (route.name === 'Home') {
    iconName = focused
      ? 'ios-information-circle'
      : 'ios-information-circle-outline';
  } else if (route.name === 'Settings') {
    iconName = focused ? 'ios-list' : 'ios-list-outline';
  }

  // You can return any component that you like here!
  return <Ionicons name={name} size={size} color={color} />;
}; */

export default function RootStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <CustomTabBar {...props} />}
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'red',
          tabBarActiveBackgroundColor: 'black',
          tabBarInactiveBackgroundColor: 'red',
          //hide the default white background view of tabbar
          tabBarStyle: {
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            position: 'absolute',
            elevation: 0, // <-- this is the solution
          },
          tabBarIcon: ({color, size, focused}) => {
            let iconName;

            if (route.name === 'Tab_Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Tab_Offers') {
              iconName = focused ? 'flash-sharp' : 'flash-outline';
            } else if (route.name === 'Tab_PlayGames') {
              iconName = focused
                ? 'game-controller-sharp'
                : 'game-controller-outline';
            } else if (route.name === 'Tab_Settings') {
              iconName = focused ? 'settings-sharp' : 'settings-outline';
            }

            // You can return any component that you like here!
            return (
              <Icon
                name={iconName}
                size={size}
                color={color}
                style={{position: 'absolute'}}
              />
            );
          },
        })}>
        <Tab.Screen
          name="Tab_Home"
          component={HomeStackScreen}
          options={{
            tabBarButton(props) {
              return <CustomTabBarButton route="home" {...props} />;
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Tab_Offers"
          component={OffersStackScreen}
          options={{
            tabBarButton(props) {
              return <CustomTabBarButton {...props} />;
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Tab_PlayGames"
          component={PlayGamesStack}
          options={{
            tabBarButton(props) {
              return <CustomTabBarButton {...props} />;
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Tab_Settings"
          component={SettingsStackScreen}
          options={{
            tabBarButton(props) {
              return <CustomTabBarButton route="settings" {...props} />;
            },
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
