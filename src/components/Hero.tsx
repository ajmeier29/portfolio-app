
'use client'

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';

import {
  InfoIcon
} from '@chakra-ui/icons';

import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroColor = useColorModeValue('button-light', 'secondary-dark');
  const messageColor = useColorModeValue('black', 'white');
  const myResumeHover = useColorModeValue('button-light-hover', 'button-dark-hover');
  const blobColor = useColorModeValue('button-light', 'secondary-dark');
  const resumeDownload = 'https://docs.google.com/document/d/1-OkGqA5kyTMANqpheed3RaX2Hazz8ThoN_9J46O1Vnc/edit?usp=sharing';
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Designer', 'Thinker', 'Hobbyist', 'Dope'],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 8, md: 28 }}
        px={{ base: 8, lg: 70 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
            <Text
              _light={{
                color: '#103126'
              }}
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: heroColor,
                zIndex: -1,
              }}>
              Developer
            </Text>
            <span ref={typedRef}></span>
            <br />
            <Text color={heroColor}>
              Geek, <Text as={'span'} ref={typedRef} />
            </Text>
          </Heading>
          <Text color={messageColor}>
            Thank you for visiting my portfolio website. Here you will find a variety of projects
            that I have personally built to showcase my abilities as a devloper. I am fluent in C#/.NET, SQL, React,
            JS, Pyhon and more. Click More Information to learn more about me, or click See My Work above to view my
            Resume, LinkedIn, or GitHub!
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
            <Button
              as={'a'}
              href={'https://docs.google.com/document/d/1-OkGqA5kyTMANqpheed3RaX2Hazz8ThoN_9J46O1Vnc/edit?usp=sharing'}
              rounded={'full'}
              size={'lg'}
              textColor={'#f9f9f9'}
              fontWeight={'normal'}
              px={6}
              bg={heroColor}
              _hover={{ bg: myResumeHover }}>
              My Resume
            </Button>
            <Button
              _light={{
                bg: '#eeeeee',
                _hover: {
                  textColor: 'blue.400'
                }
              }}
              as={'a'}
              href='/about'
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              leftIcon={
                <InfoIcon
                  h={4}
                  w={4}
                  _light={{
                    _hover: {
                      textColor: 'blue.400'
                    }
                  }}
                />}>
              More Information
            </Button>
          </Stack>
        </Stack>
        <Flex
          justify={{ base: 'center', lg: 'right' }}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Blob
            w={{ base: '150%', md: '130%' }}
            h={{ base: '150%', md: '130%' }}
            position={'absolute'}
            top={{ md: '-10%' }}
            left={0}
            zIndex={-1}
            color={blobColor}
          />
          <Box
            position={'relative'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            overflow={'hidden'}>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              // align={{base: 'bottom', md: '0px -110px'}}
              height={{ base: '100%', md: '400px' }}
              width={{ base: '100%', md: '900px' }}
              src={
                './heroPagePhoto.png'
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}

export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};