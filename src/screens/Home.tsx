import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = ({navigation}: {navigation: any}) => {
  const handleReminderClick = () => {
    navigation.navigate('Reminders');
  };

  const handleUserBillsClick = () => {
    navigation.navigate('Bills');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MM Admin Home</Text>
      <View style={styles.buttonContainer}>
        <Icon.Button
          name="newspaper"
          iconStyle={styles.iconStyle}
          style={styles.button}
          onPress={handleReminderClick}>
          <Text style={styles.iconText}>Reminders</Text>
        </Icon.Button>
        <Icon.Button
          name="notifications"
          iconStyle={styles.iconStyle}
          style={styles.button}
          //backgroundColor="#3b5998"
          onPress={handleUserBillsClick}>
          <Text style={styles.iconText}>Bills</Text>
        </Icon.Button>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  buttonContainer: {
    gap: 20,
  },
  iconText: {
    fontFamily: 'Arial',
    fontSize: 24,
    color: 'white',
  },

  iconStyle: {
    fontSize: 24,
    color: 'white',
  },

  button: {
    backgroundColor: '#06a303',

    width: 200,
    height: 60,
    textAlign: 'center',
    gap: 10,
    justifyContent: 'flex-start',
  },
});
