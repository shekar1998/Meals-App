import { Box, Circle, Divider, Heading, Icon, ScrollView, Stack, Text } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import color from '../assets/color';
let { height, width } = Dimensions.get('window');
import { AntDesign } from '@expo/vector-icons';
import { Rating } from 'react-native-elements';
import moment from 'moment';
import AddComments from './AddComments';

const ratng = [
  {
    text: 'Good Food with good taste',
    ratings: 4.5,
  },
  {
    text: 'Good Food with good taste',
    ratings: 3.5,
  },
  {
    text: 'Good Food with good taste',
    ratings: 4,
  },
  {
    text: 'Good Food with good taste',
    ratings: 3,
  },
  {
    text: 'Good Food with good taste',
    ratings: 2,
  },
];

const SingleMeal = (props) => {
  console.log(props.route.params.params);
  const [Visible, setVisible] = useState(false);

  const handleClose = () => {
    setVisible(false);
  }
  return (
    <ScrollView>
      <Box w={width} bg={'#fff'}>
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
          <Circle size={'md'} bg='secondary.400' mx={3}>
            <Icon as={<AntDesign name='hearto' />} color='white' size={8} />
          </Circle>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setVisible(true)}
          >
            <Circle size={'md'} bg='blue.500' mx={3}>
              <Icon as={<AntDesign name='edit' />} color='white' size={8} />
            </Circle>
          </TouchableOpacity>
        </Box>
        <Divider my={2} bg='coolGray.300' thickness='10' />
        <Box w={width} h={height} alignItems={'flex-start'}>
          <Heading size='md' ml='-1' alignSelf={'center'}>
            Comments
          </Heading>
          <Divider my={2} bg='coolGray.300' thickness='1' />
          {ratng.map((data) => {
            return (
              <>
                <Text
                  m={1}
                  fontSize='md'
                  _dark={{
                    color: 'violet.400',
                  }}
                  fontWeight='700'
                >
                  {data.text}
                </Text>
                <Rating
                  type='star'
                  fractions={1}
                  startingValue={data.ratings}
                  ratingCount={5}
                  imageSize={20}
                  ratingBackgroundColor={'red'}
                />
                <Box flexDirection={'row'}>
                  <Text
                    m={1}
                    fontSize='sm'
                    _dark={{
                      color: 'violet.400',
                    }}
                    fontWeight='500'
                  >
                    Manjunath
                  </Text>
                  <Text
                    m={1}
                    fontSize='sm'
                    _dark={{
                      color: 'violet.400',
                    }}
                    fontWeight='500'
                  >
                    {moment().format('MMMM Do, h:mm a')}
                  </Text>
                </Box>
              </>
            );
          })}
        </Box>
        
           <AddComments visible={Visible} handleClose={handleClose} item={props.route.params.params} />
        
      </Box>
    </ScrollView>
  );
};

export default SingleMeal;

const styles = StyleSheet.create({
  image: {
    width: width,
    height: height / 4,
  },
});
