import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Config from 'react-native-config';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Reminders from '../screens/Reminders';
import UserBills from '../screens/UserBills';

//console.log('CONFIG', Config);
function DetailsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreen({navigation}: {navigation: NavigationProp<any>}) {
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

const HomeIcon = ({focused, color, size}) => {
  return <Ionicons name="home" size={size} color={color} />;
};

const Settings = ({focused, color, size}) => {
  return <Ionicons name="settings" size={size} color={color} />;
};
function TabsWithStacks() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Tab_Home"
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: HomeIcon,
          }}
          component={HomeStackScreen}
        />
        <Tab.Screen
          name="Tab_Settings"
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: Settings,
          }}
          component={SettingsStackScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const RootStack = createNativeStackNavigator();
export default function RootNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Main"
          component={Home}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Reminders"
          component={Reminders}
          //options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Bills"
          component={UserBills}
          //options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
