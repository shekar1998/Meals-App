import React from 'react';
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
  ScrollView,
} from 'native-base';
import { Dimensions } from 'react-native';
import partner from '../assets/partner.json';

const { width, height } = Dimensions.get('window');

export const Partners = () => {
  return (
    <Box
      w={width}
      rounded='none'
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
      <Box marginTop={10}>
        <Box
          bg='violet.500'
          _dark={{
            bg: 'violet.400',
          }}
          _text={{
            color: 'warmGray.50',
            fontWeight: '700',
            fontSize: 'md',
          }}
          position='absolute'
          bottom='0'
          w={'100%'}
          px='5'
          py='1.5'
        >
          Corporate Leaders
        </Box>
      </Box>
      <Stack p='4' space={3}>
        {partner.map((data) => {
          return (
            <>
              <Heading size='md' ml='-1'>
                {data.name}
              </Heading>
              <Text fontWeight='400'>{data.details}</Text>
            </>
          );
        })}
      </Stack>
    </Box>
  );
};
