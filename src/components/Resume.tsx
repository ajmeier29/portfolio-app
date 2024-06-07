
'use client'

import {
    Container, Stack
  } from '@chakra-ui/react';
  
  export default function Resume() {
    return (
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          px={{base: 50, lg: 0}}
          direction={{ base: 'column', md: 'row' }}>
          <object width="100%" height="1000px" data="https://docs.google.com/document/d/e/2PACX-1vStO7tkroZheoEb3yk2ejnN0ETUrjg8fs4HGqP8KCqCpruqmiA_NqdmomzdehEoj1JLDV-PM4vHyJWW/pub" type="application/pdf">   </object>
        </Stack>
      </Container>
    );
  }
