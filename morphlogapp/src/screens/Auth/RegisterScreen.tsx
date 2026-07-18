import React from 'react';
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

const RegisterScreen = () => {
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
          Create Account
        </Text>

        <Text style={styles.subtitle}>
          Create your MorphLog account.
        </Text>

        <CustomInput
          label="Full Name"
          placeholder="Enter your full name"
        />

        <CustomInput
          label="Email"
          placeholder="Enter your email"
        />

        <CustomInput
          label="Password"
          placeholder="Enter your password"
          secureTextEntry
        />

        <CustomInput
          label="Confirm Password"
          placeholder="Confirm your password"
          secureTextEntry
        />

        <TouchableOpacity style={styles.checkboxContainer}>
          <Text style={styles.checkbox}>☐</Text>

          <Text style={styles.checkboxText}>
            I agree to the Terms & Privacy Policy
          </Text>
        </TouchableOpacity>

        <CustomButton
          title="Create Account"
          onPress={() => {}}
        />

        <View style={styles.divider}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.googleText}>
            Continue with Google
          </Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={styles.bottomText}>
            Already have an account?
          </Text>

          <TouchableOpacity>
            <Text style={styles.signIn}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>

      </View>

    </ScrollView>
  );
};

export default RegisterScreen;

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
    padding: 18,

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
    width: 58,
    height: 58,
    alignSelf: 'center',
    marginBottom: 8,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2B2B2B',
    textAlign: 'center',
  },

  subtitle: {
    textAlign: 'center',
    color: '#777',
    fontSize: 13,
    marginTop: 5,
    marginBottom: 18,
    lineHeight: 18,
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 14,
  },

  checkbox: {
    fontSize: 16,
    color: '#6B46F6',
  },

  checkboxText: {
    marginLeft: 6,
    color: '#666',
    fontSize: 12,
    flex: 1,
  },

  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ECECEC',
  },

  orText: {
    marginHorizontal: 10,
    color: '#999',
    fontWeight: '600',
    fontSize: 12,
  },

  googleButton: {
    height: 42,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  googleText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#444',
  },

  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },

  bottomText: {
    color: '#666',
    fontSize: 13,
  },

  signIn: {
    marginLeft: 5,
    color: '#6B46F6',
    fontWeight: '700',
    fontSize: 13,
  },

});