import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Config from 'react-native-config';

console.log('CONFIG', Config);
function DetailsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Details!</Text>
    </View>
  );
}

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

function SettingsScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Stack_Details')}
      />
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Stack_Home" component={HomeScreen} />
      <HomeStack.Screen name="Stack_Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Stack_Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Stack_Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
//customize bottom bar
const TabIcon = ({name, focused, color, size}) => {
  let iconName;

  /* if (route.name === 'Home') {
    iconName = focused
      ? 'ios-information-circle'
      : 'ios-information-circle-outline';
  } else if (route.name === 'Settings') {
    iconName = focused ? 'ios-list' : 'ios-list-outline';
  } */

  // You can return any component that you like here!
  return <Ionicons name={name} size={size} color={color} />;
};

export default function RootStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black',
          tabBarActiveBackgroundColor: 'black',
          tabBarInactiveBackgroundColor: 'red',
        }}>
        <Tab.Screen
          name="Tab_Home"
          options={{tabBarIcon: ({focused}) => <Text>Home</Text>}}
          component={HomeStackScreen}
        />
        <Tab.Screen name="Tab_Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
