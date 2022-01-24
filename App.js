import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Screen from './app/components/Screen';
import PostStackNavigator from './app/navigation/PostStackNavigator';
import PostTabNavigator from './app/navigation/PostTabNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import AuthNavigator from './app/navigation/AuthNavigator';

export default function App() {
  return (
    <Screen>
      <NavigationContainer theme={navigationTheme}>
        <PostStackNavigator />
        {/* <AuthNavigator /> */}
      </NavigationContainer>
    </Screen>
  );
}
