import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function BottomTabs() {

  return (

    <View style={styles.container}>

      <Text style={styles.active}>🏠</Text>

      <Text style={styles.icon}>📷</Text>

      <Text style={styles.icon}>📈</Text>

      <Text style={styles.icon}>👤</Text>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    height: 70,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    marginTop: 25,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: -3,
    },

    elevation: 8,
  },

  icon: {
    fontSize: 24,
  },

  active: {
    fontSize: 24,
  },

});