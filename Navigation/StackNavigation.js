import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import color from '../assets/color';
import HomeScreen from '../Screen/HomeScreen';
import SingleMeal from '../Components/SingleMeal';

const bgcolor = color.light;
const Stack = createNativeStackNavigator();
const StackNavigation = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Drawer'
        options={{
          headerShown: false,
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        name='Meals Details'
        options={{
          headerShown: false,
        }}
        component={SingleMeal}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
