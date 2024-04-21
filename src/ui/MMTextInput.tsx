import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

type TProps = {
  value: string;
  onChange: (text: string) => void;
  placeholder: string;
  styles: any;
};

const MMTextInput = ({value, onChange, placeholder, styles}: TProps) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      style={[Styles.input]}
    />
  );
};

export default MMTextInput;

const Styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
