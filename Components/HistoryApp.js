import React from 'react';
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider } from 'native-base';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const HistoryApp = () => {
  return (
    <Box
      w={width}
      rounded='none'
      overflow='hidden'
      borderColor='#fff'
      borderWidth='1'
      _dark={{
        borderColor: 'coolGray.600',
        backgroundColor: 'gray.700',
      }}

      _light={{
        backgroundColor: '#fff',
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
          Our History
        </Box>
      </Box>
      <Stack p='4' space={3}>
        <Text fontWeight='400'>In the first year, the startup began by listing thousands of restaurants in India's six biggest cities. Then came an email from entrepreneur-turned-investor Sanjeev Bikhchandani, who invested $1 million through his Info Edge India Ltd. Foodiebay was renamed Zomato to rhyme with tomato.</Text>
        <Text fontWeight='400'>In 2013, the two founders, Sriharsha Majety and Nandan Reddy, designed an e-commerce website called Bundl to facilitate courier service and shipping within India. Bundl was halted, and was rebranded to enter the food delivery market.</Text>
      </Stack>
    </Box>
  );
};
