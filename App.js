import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './Navigation/StackNavigation';
import DrawerNavigation from './Navigation/DrawerNavigation';
import { NativeBaseProvider } from 'native-base';
const { width, height } = Dimensions.get('window');
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
