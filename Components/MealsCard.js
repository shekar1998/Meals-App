import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { Box } from 'native-base';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import color from '../assets/color';

const bgcolor = color.light;
const MealsCard = (props) => {
  console.log('props => ', props.item.name);
  return (
    <Box 
    justifyContent={'center'} 
    w={185} 
    h={210} 
    bg={bgcolor.text} 
    borderRadius={10}
    m={2}>
      <Text style={{ color: '#fff' }}>{props.item.name}</Text>
    </Box>
  );
};

export default MealsCard;

const styles = StyleSheet.create({});
