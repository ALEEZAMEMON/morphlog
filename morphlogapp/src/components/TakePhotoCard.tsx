import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function TakePhotoCard() {
  return (
    <TouchableOpacity style={styles.card}>

      <Text style={styles.icon}>📷</Text>

      <Text style={styles.title}>
        Take Photo
      </Text>

      <Text style={styles.subtitle}>
        Start a new skin analysis
      </Text>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginBottom: 25,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },

    elevation: 5,
  },

  icon: {
    fontSize: 40,
    marginBottom: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },

  subtitle: {
    marginTop: 6,
    color: '#777',
    fontSize: 14,
  },

});