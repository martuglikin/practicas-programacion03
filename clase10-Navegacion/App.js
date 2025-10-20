import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login';
import Register from './src/screens/Register';
import HomeMenu from './src/components/HomeMenu';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator options={{ headerShown: false }}>
        <Stack.Screen  name="HomeMenu"  component={HomeMenu} />
        <Stack.Screen  name="Login"     component={Login} />
        <Stack.Screen  name="Register"  component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

