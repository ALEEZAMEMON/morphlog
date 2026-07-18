import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
};

export default function CustomButton({
  title,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}>

      <Text style={styles.text}>
        {title}
      </Text>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  button: {
    height: 42,
    borderRadius: 12,
    backgroundColor: '#6B46F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },

  text: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },

});