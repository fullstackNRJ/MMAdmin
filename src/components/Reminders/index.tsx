import React, {useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ReminderList from './ReminderList';
import {REMINDER} from '../../store';
import FAB from '../../ui/FAB';
import AddNewReminder from './AddNewReminder';
import {useBottomSheet} from '@gorhom/bottom-sheet';
import BottomSheet from '@gorhom/bottom-sheet';

const Index = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const openSheet = () => {
    bottomSheetRef.current?.expand();
  };

  const closeSheet = () => {
    bottomSheetRef.current?.close();
  };
  const onFABPress = () => {
    // console.log('onFABPress', bottomSheetRef.current);

    openSheet();
    //bottomSheetRef.current?.close();
  };

  const onBottomSheetStateChange = state => {
    console.log('Bottom sheet state changed', state);
  };

  const handleSubmit = values => {
    console.log('values', values);
    closeSheet();
  };

  return (
    <View style={Styles.container}>
      <Text>Main Reminder component</Text>

      <ReminderList data={REMINDER} />
      <FAB onPress={onFABPress} />
      <AddNewReminder
        ref={bottomSheetRef}
        onBottomSheetStateChange={onBottomSheetStateChange}
        onSubmit={handleSubmit}
      />
    </View>
  );
};

export default Index;

const Styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
