
'use client'

import {
  Flex, Box, Stack, Button
} from '@chakra-ui/react';

export default function Resume() {
  return (
    <Flex
      p={{ base: 3, md: 20 }}
      w='full'
      justifyContent='center'
      alignItems='center'
      pos='absolute'
    >
      <Box
        shadow='dark-lg'
        _dark={{
          bg: '#31363F',
          boxShadow: 'inset 2px 3px 5px #000000, 0px 1px 1px #333'
        }}
        px={16}
        py={20}
        mx='auto'
        borderRadius={20}
        w={'100%'}
      >
          <Button
            as='a'
            href='https://docs.google.com/document/d/1-OkGqA5kyTMANqpheed3RaX2Hazz8ThoN_9J46O1Vnc/edit?usp=sharing'
          >Download Resume</Button>
          <object width="100%" height="1000px" data="https://docs.google.com/document/d/e/2PACX-1vStO7tkroZheoEb3yk2ejnN0ETUrjg8fs4HGqP8KCqCpruqmiA_NqdmomzdehEoj1JLDV-PM4vHyJWW/pub" type="application/pdf">   </object>
      </Box>
    </Flex>
  );
}
