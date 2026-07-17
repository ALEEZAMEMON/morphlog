import React, {useEffect} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Welcome');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>
        MorphLog
      </Text>

      <Text style={styles.subtitle}>
        Transform Your Progress
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },

  title: {
    marginTop: 20,
    fontSize: 32,
    fontWeight: '700',
    color: '#5B3DF5',
  },

  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: '#777',
  },
});