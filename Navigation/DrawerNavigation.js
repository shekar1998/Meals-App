import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screen/HomeScreen';
import AboutUs from '../Screen/AboutUs';
import Menu from '../Screen/Menu';
import ContactUs from '../Screen/ContactUs';
import Icon from '@expo/vector-icons/AntDesign';
import color from '../assets/color';
import StackNavigation from './StackNavigation';

const bgcolor = color.light;

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen
        name='Home'
        options={{
            headerStyle: { backgroundColor: bgcolor.header },
          }}
        component={StackNavigation}
      />
      <Drawer.Screen name='AboutUs' component={AboutUs} />
      <Drawer.Screen name='Menu' component={Menu} />
      <Drawer.Screen name='ContactUs' component={ContactUs} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
