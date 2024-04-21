import React, {forwardRef, useRef} from 'react';
import {ScrollView, Text, View} from 'react-native';
import BottomSheet from '../../ui/BottomSheet';
import MMTextInput from '../../ui/MMTextInput';
import MMPrimaryButton from '../../ui/MMPrimaryButton';

const AddNewReminder = forwardRef((props, ref) => {
  const [formData, setFormData] = React.useState({
    name: '',
    phoneNumber: '',
    date: new Date(new Date().getDate() + 1),
  });

  const handleFormUpdate = (name, value) => {
    setFormData(prev => ({...prev, [name]: value}));
  };

  const handleOnSubmit = () => {
    props?.onSubmit(formData);
  };
  return (
    <BottomSheet
      bottomSheetRef={ref}
      handleSheetChanges={props.onBottomSheetStateChange}>
      <Text>AddNewReminder Form</Text>
      <ScrollView keyboardShouldPersistTaps="always">
        <View>
          <Text>Customer Name</Text>
          <MMTextInput
            value={formData.name}
            onChange={value => handleFormUpdate('name', value)}
            placeholder="Customer name"
          />
        </View>

        <View>
          <Text>Phone Number</Text>
          <MMTextInput
            value={formData.phoneNumber}
            onChange={value => handleFormUpdate('phoneNumber', value)}
            placeholder="Phone number"
          />
        </View>

        <MMPrimaryButton title="Submit" onPress={handleOnSubmit} />
      </ScrollView>
    </BottomSheet>
  );
});

export default AddNewReminder;
