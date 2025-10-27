import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Usuarios from '../screens/Usuarios';
import NuevoPost from '../screens/NuevoPost';

const Tab = createBottomTabNavigator();

function HomeMenu() {

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Usuarios"
        component={Usuarios}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Nuevo post"
        component={NuevoPost}
        options={{ tabBarIcon: ({ size, color }) => <FontAwesome name="plus-square" size={size} color={color} /> }}
      />
    </Tab.Navigator>
  );
}

export default HomeMenu;
