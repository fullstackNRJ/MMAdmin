import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text, View} from 'react-native';
import Config from 'react-native-config';
import {COLORS} from '../constants';
import PrimaryButton from '../components/PrimaryButton';

const OffersStack = createNativeStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
      }}>
      <Text>Offers screen</Text>
      {/* <Text>
        ENVIROMENT:{Config.ENVIROMENT} ::: APP_ID:{Config.APP_ID}
      </Text> */}
      <PrimaryButton
        title="Go to Details"
        onPress={() => navigation.navigate('Stack_Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>OOffers Details Screen!</Text>
    </View>
  );
}

function OffersStackScreen() {
  return (
    <OffersStack.Navigator>
      <OffersStack.Screen
        name="Stack_Home"
        options={{headerShown: false}}
        component={HomeScreen}
      />
      <OffersStack.Screen
        name="Stack_Details"
        options={{headerShown: false}}
        component={DetailsScreen}
      />
    </OffersStack.Navigator>
  );
}
export default OffersStackScreen;
