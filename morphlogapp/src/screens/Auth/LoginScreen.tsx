import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const LoginScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}>

      <View style={styles.card}>

        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />

        <Text style={styles.title}>
          Welcome Back
        </Text>

        <Text style={styles.subtitle}>
          Sign in to continue{'\n'}
          your skin journey.
        </Text>

        <CustomInput
          label="Email"
          placeholder="Enter your email"
        />

        <CustomInput
          label="Password"
          placeholder="Enter your password"
          secureTextEntry
        />

        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.forgotPassword}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <CustomButton
          title="Login"
          onPress={() => {}}
        />

        <View style={styles.signupContainer}>
          <Text style={styles.bottomText}>
            New here?
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.signUp}>
              Create an account
            </Text>
          </TouchableOpacity>
        </View>

      </View>

    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFF7F2',
  },

  content: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 18,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 20,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6,
    },

    elevation: 6,
  },

  logo: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 12,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2B2B2B',
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitle: {
    textAlign: 'center',
    color: '#777',
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 24,
  },

  forgotPassword: {
    textAlign: 'right',
    color: '#6B46F6',
    fontSize: 13,
    fontWeight: '600',
    marginTop: -6,
    marginBottom: 16,
  },

  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },

  bottomText: {
    color: '#666',
    fontSize: 13,
  },

  signUp: {
    marginLeft: 5,
    color: '#6B46F6',
    fontWeight: '700',
    fontSize: 13,
  },

});