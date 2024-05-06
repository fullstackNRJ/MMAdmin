/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button} from 'react-native';
import {Text, View} from 'react-native';
import {COLORS} from '../constants';

const SettingsStack = createNativeStackNavigator();

function SettingsScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
      }}>
      <Text>Settings screen</Text>
      {/* <Button
        styl
        title="Go to Details"
        onPress={() => navigation.navigate('Stack_Details')}
      /> */}
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
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Stack_Settings"
        options={{headerShown: false}}
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Stack_Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

export default SettingsStackScreen;
