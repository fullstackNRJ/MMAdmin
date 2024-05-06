/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text, View} from 'react-native';
import Config from 'react-native-config';
import {COLORS} from '../constants';
import PrimaryButton from '../components/PrimaryButton';

const HomeStack = createNativeStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
      }}>
      <Text>Home screen</Text>
      {/*  <Text>
        ENVIROMENT:{Config.ENVIROMENT} ::: APP_ID:{Config.APP_ID}
      </Text> */}
      <PrimaryButton
        title="Get Started"
        onPress={() => navigation.navigate('Stack_Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Stack_Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Stack_Details"
        component={DetailsScreen}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
}
export default HomeStackScreen;
