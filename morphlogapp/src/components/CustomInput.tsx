import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

type Props = {

  label: string;

  placeholder: string;

  secureTextEntry?: boolean;

};

export default function CustomInput({

  label,

  placeholder,

  secureTextEntry,

}: Props) {

  return (

    <View style={styles.container}>

      <Text style={styles.label}>
        {label}
      </Text>

      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        placeholderTextColor="#B5B5B5"
      />

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    marginBottom: 18,

  },

  label: {

    fontWeight: '600',

    marginBottom: 8,

    color: '#333',

  },

  input: {
    height: 38,
    borderWidth: 1,
    borderColor: '#ECECEC',
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 15,
    backgroundColor: '#FFFFFF',
  },

  });