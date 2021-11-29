import React from 'react';
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider } from 'native-base';
import color from '../assets/color';
import { Touchable, TouchableOpacity } from 'react-native';

export const MealsCard = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => props.navigation.navigate('Meals Details', { params: props.item })}
    >
      <Box
        maxW='80'
        rounded='lg'
        overflow='hidden'
        borderColor='coolGray.200'
        borderWidth='1'
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}
      >
        <Box>
          <AspectRatio w='100%' ratio={16 / 9}>
            <Image
              source={{
                uri: props.item.imageURL,
              }}
              alt='image'
            />
          </AspectRatio>
        </Box>
        <Stack p='4' space={3}>
          <Stack space={2}>
            <Heading size='md' ml='-1'>
              {props.item.name}
            </Heading>
            <Text
              fontSize='xs'
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
          </Stack>
          <Text fontWeight='400'>{props.item.description}</Text>
        </Stack>
       
      </Box>
    </TouchableOpacity>
  );
};
