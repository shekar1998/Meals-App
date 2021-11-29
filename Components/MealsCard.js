import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { Box } from 'native-base';
import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import color from '../assets/color';

const bgcolor = color.light;
const MealsCard = (props) => {
  console.log('props => ', props.item.name);
  return (
    <Box justifyContent={'space-between'} w={185} h={210} borderRadius={15} m={2}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: props.item.imageURL }} />
      </View>
      <Text style={{ color: '#000' }}>{props.item.name}</Text>
    </Box>
  );
};

export default MealsCard;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageContainer: {
    width: '100%',
    height: 150,
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 0.5,
    elevation:1
  },
});
