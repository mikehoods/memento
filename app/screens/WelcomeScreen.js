import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

import Button from '../components/Button';
import colors from '../config/colors';
import Logo from '../components/Logo';
import routes from '../navigation/routes';

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={10}
      source={require('../assets/lavendar.png')}
      style={styles.background}
    >
      <Logo />
      <View style={styles.buttonContainer}>
        <Button name='Login' onPress={() => navigation.navigate(routes.LOGIN, {screen: 'Login'})} />
        <Button color={colors.secondary} name='Register' onPress={() => navigation.navigate(routes.REGISTER, {screen: 'Register'})}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end'
  },
  buttonContainer: {
    padding: 20,
    width: '100%'
  }
});

export default WelcomeScreen