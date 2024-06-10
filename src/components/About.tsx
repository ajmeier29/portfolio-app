
'use client'

import { Flex, SimpleGrid, Button, Box, useColorModeValue, Text, Heading, Image } from '@chakra-ui/react';

export default function About() {
    return (
        <Flex
            p={{ base: 3, lg: 20 }}
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
            >
                {FeaturesList.map((item: Features, index: number) => {
                    if (index % 2 === 0) {
                        item.isLeftSide = false;
                        return <Feature key={item.heading} {...item} />
                    } else {
                        item.isLeftSide = true;
                        return <Feature key={item.heading} {...item} />
                    }
                })}
            </Box>
        </Flex>
    );
}

const Feature = (items: Features) => {
    const { isLeftSide } = items;
    const textColor = useColorModeValue('black', 'white')
    const buttonHoverColor = useColorModeValue('gray.700', 'button-hover-dark')
    return (
        <SimpleGrid
            alignItems='center'
            justifyContent='center'
            columns={{
                base: 1,
                lg: 2,
            }}
            mb={24}
            spacingY={{
                base: 10,
                lg: 32,
            }}
            spacingX={{
                base: 10,
                lg: 24,
            }}
        >
            <Box
                order={{
                    base: (isLeftSide ? 'initial' : ''),
                    lg: (isLeftSide ? 2 : 0),
                }}

            >
                <Heading
                    mb={4}
                    textAlign={{ base: 'center', lg: 'left' }}
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
                    <Text
                        as={'span'}
                        position={'relative'}>
                        {items.heading}
                    </Text>
                </Heading>
                <Text
                    mb={5}
                    color={textColor}
                    textAlign={{ base: 'center', lg: 'left' }}
                >
                    {items.description}
                </Text>
                <Flex
                    justify={{ base: 'center', lg: 'left' }}
                    align={{ base: 'center', lg: 'left' }}
                >
                    <Button

                        w={{
                            base: 'full',
                            sm: 'auto',
                        }}
                        size='lg'
                        fontWeight={'normal'}
                        bg='button-light'
                        _dark={{
                            bg: 'secondary-dark',
                        }}
                        _hover={{
                            bg: 'gray.700',
                            _dark: {
                                bg: 'button-hover-dark',
                            },
                            _light: {
                                bg: 'button-light-hover'
                            }
                        }}
                        color='gray.900'
                        as='a'
                        href={items.buttonUrl}
                    >
                        {items.buttonText}
                    </Button>
                </Flex>
            </Box>
            <Box
                flexShrink={0}
                bg='gray.200'
                _dark={{
                    bg: '#344955',
                }}
                borderRadius={15}
            >
                <Image
                    alt={'Hero Image'}
                    fit={'cover'}
                    align={{ base: 'bottom'}}
                    w={'100%'}
                    h={'100%'}
                    src={items.imagePath}
                    borderRadius={15}
                />
            </Box>
        </SimpleGrid>
    );
}

interface Features {
    heading: string,
    description: string,
    buttonText: string,
    buttonUrl: string,
    imagePath: string,
    isLeftSide?: boolean
}

const FeaturesList: Array<Features> = [
    {
        heading: 'Software Developer Since 2012',
        description: 'I started my career by creating automation scripts to test the iPhone 3Gs/4, which then lead to Full Stack Development later in my 9 year career there. Since then I have built automation scripts, SQL Stored Procedures, built API\'s and worked with a plethora of languages! Check out my Resume to see more!',
        buttonText: 'My Github',
        imagePath: './github.jpg',
        buttonUrl: 'https://github.com/ajmeier29/portfolio-app'
    },
    {
        heading: '3D Printing Since 2016',
        description: 'I have been obsessed with 3D Printing since the day I bought my first 3D printer back in 2016. I bought the Monoprice FDM Printer. Since then I have taught myself how to make some models, tinker, and just flat out print the nerdiest things I could find on Thingiverse.',
        buttonText: 'See Album',
        imagePath: './3DPrintingAboutImage.jpg',
        buttonUrl: 'https://photos.app.goo.gl/LU5RCWuf8CuEj5J48'
    },
    {
        heading: 'Etsy Seller Since 2021',
        description: 'After years of 3D printing I decided to make my printers work for me. I was fascinated by the idea that I could just buy a 3D printer and pay it off by selling my prints over time. I dont sell much in terms of numbers but all my printers are paid off from sales!',
        buttonText: 'My Etsy Shop',
        imagePath: './etsyImage.jpg',
        buttonUrl: 'https://www.etsy.com/shop/3DPrintsByAndy'
    }
];
