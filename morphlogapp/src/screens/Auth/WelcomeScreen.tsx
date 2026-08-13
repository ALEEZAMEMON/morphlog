import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>

      <Image
        source={require('../../assets/images/welcomeGirl.png')}
        style={styles.image}
      />

      <Text style={styles.title}>
        Welcome to
      </Text>

      <Text style={styles.appName}>
        MorphLog
      </Text>

      <Text style={styles.description}>
        Track your skin, acne, scars and hair transformation over time.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Register')}>

        <Text style={styles.buttonText}>
          Get Started
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}>

        <Text style={styles.loginText}>
          Already have an account?
        </Text>

      </TouchableOpacity>

    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD0B4',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  image: {
    width: 280,
    height: 280,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    color: '#5A4A42',
  },

  appName: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#8B4F3F',
    marginBottom: 15,
  },

  description: {
    fontSize: 17,
    color: '#6D5147',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 35,
  },

  button: {
    width: '100%',
    backgroundColor: '#B85C3A',
    padding: 18,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },

  loginText: {
    color: '#8B4F3F',
    fontSize: 16,
    fontWeight: '600',
  },
});