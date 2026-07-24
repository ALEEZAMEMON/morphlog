import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

type Props = {
  title: string;
  value: string;
};

export default function StatCard({
  title,
  value,
}: Props) {

  return (

    <View style={styles.card}>

      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.value}>
        {value}
      </Text>

    </View>

  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    width: '48%',
    marginBottom: 14,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 4,
  },

  title: {
    color: '#666',
    fontSize: 14,
  },

  value: {
    fontSize: 28,
    fontWeight: '700',
    color: '#6B46F6',
    marginTop: 10,
  },

});