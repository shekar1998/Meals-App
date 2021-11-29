import { Box, Circle, Divider, Heading, Icon, Stack, Text } from 'native-base';
import React from 'react';
import { StyleSheet, View, Dimensions, Image } from 'react-native';
import color from '../assets/color';
let { height, width } = Dimensions.get('window');
import { AntDesign } from '@expo/vector-icons';

const ratng = [
  {
    text: 'Good Food with good taste',
    ratings: 4.5,
  },
];

const SingleMeal = (props) => {
  console.log(props.route.params.params);
  return (
    <Box w={width}>
      <Image
        style={styles.image}
        source={{
          uri: props.route.params.params.imageURL,
        }}
      />
      <Stack p='4' space={3}>
        <Stack space={2}>
          <Heading size='lg' ml='-1'>
            {props.route.params.params.name}
          </Heading>
          <Text
            fontSize='lg'
            _light={{
              color: 'violet.500',
            }}
            _dark={{
              color: 'violet.400',
            }}
            fontWeight='500'
            ml='-0.5'
            mt='-1'
          >
            Italian
          </Text>
          <Text
            fontSize='sm'
            _dark={{
              color: 'violet.400',
            }}
            fontWeight='500'
          >
            {props.route.params.params.description}
          </Text>
        </Stack>
      </Stack>
      <Box w={width} justifyContent={'center'} flexDirection={'row'}>
        <Circle size={20} bg='secondary.400' mx={3}>
          <Icon as={<AntDesign name='hearto' />} color='white' size={8} />
        </Circle>
        <Circle size={20} bg='blue.500' mx={3}>
          <Icon as={<AntDesign name='edit' />} color='white' size={8} />
        </Circle>
      </Box>
      <Divider my={2} bg='coolGray.300' thickness='10' />
      <Box w={width}>
        <Heading size='md' ml='-1' alignSelf={'center'}>
          Comments
        </Heading>
        <Divider my={2} bg='coolGray.300' thickness='1' />
        <Text
          m={1}
          fontSize='md'
          _dark={{
            color: 'violet.400',
          }}
          fontWeight='700'
        >
          Good Food with good taste
        </Text>
      </Box>
    </Box>
  );
};

export default SingleMeal;

const styles = StyleSheet.create({
  image: {
    width: width,
    height: height / 4,
  },
});
