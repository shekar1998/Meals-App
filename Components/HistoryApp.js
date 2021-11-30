import React from 'react';
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider } from 'native-base';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const HistoryApp = () => {
  return (
    <Box
      w={width}
      rounded='lg'
      overflow='hidden'
      borderColor='#fff'
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
        <Text fontWeight='400'>Engineers should help solve the hardest questions, the unknowns, where being familiar with how the product was built is essential. But we don’t want to keep answering solved problems over and over again. That’s where Stack Overflow for Teams really helps.</Text>
        <Text fontWeight='400'>As we started to use [Stack Overflow for Teams] and saw how nice it was to have a repository of information, we started to see it spread to other teams. Our customer support team started using it, our people success team started using it, next thing we knew, we had [Slack] integrations all over the place.</Text>
      </Stack>
    </Box>
  );
};
