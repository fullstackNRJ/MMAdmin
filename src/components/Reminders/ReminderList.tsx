/* - fetch all reminders from the local database
    - display them in a list
    - click on a reminder to navigate to the details screen (user + message)
    - click on the '+' button to navigate to the add screen
    - click on the 'Edit' button to navigate to the edit screen (only message)
    - list has swipe gesture to delete reminders
*/
import React from 'react';
import {FlatList, Text, View} from 'react-native';

export type Customer = {
  id: number;
  name: string;
  phoneNumbers: string[];
  email: string;
  nickname: string;
};

export type Tprops = {
  data: {
    id: string;
    customer: Customer;
    message: string;
  };
};

const reminderItem = ({index, item: {customer}}) => {
  console.log('>>>>', customer);
  return (
    <View key={index}>
      <Text> {customer.name} </Text>
      <Text>
        {Array.isArray(customer.phoneNumbers)
          ? customer.phoneNumbers.join(',')
          : customer.phoneNumbers}
      </Text>
      <Text> {customer.email} </Text>
    </View>
  );
};

const ReminderList = (props: Tprops) => {
  const {data} = props;
  console.log('data', data);
  return (
    <View>
      <Text> ReminderList </Text>
      <FlatList
        data={data}
        renderItem={reminderItem}
        keyExtractor={({id}) => id}
        // extraData={'data'}
      />
    </View>
  );
};

export default ReminderList;
