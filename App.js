import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Screen from './app/components/Screen';
import PostTabNavigator from './app/navigation/PostTabNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';

export default function App() {
  return (
    <Screen>
      {/* <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer> */}
      <LoginScreen />
    </Screen>
  );
}
