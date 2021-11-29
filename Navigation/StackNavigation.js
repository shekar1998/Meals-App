import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import color from '../assets/color';
import Icon from '@expo/vector-icons/AntDesign';
import HomeScreen from '../Screen/HomeScreen';
import DrawerNavigation from './DrawerNavigation';

const bgcolor = color.light;
const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Drawer'
        options={{
          headerShown: false,
        }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
