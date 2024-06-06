
'use client'

import { Flex, SimpleGrid, chakra, Button, Box, useColorModeValue, Text, Heading, Center } from '@chakra-ui/react';

export default function AboutPage() {
    return (
        <Flex
            p={20}
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
    const buttonHoverColor = useColorModeValue('gray.700','button-hover-dark')
    return (
        <SimpleGrid
            alignItems='center'
            justifyContent='center'
            columns={{
                base: 1,
                md: 2,
            }}
            mb={24}
            spacingY={{
                base: 10,
                md: 32,
            }}
            spacingX={{
                base: 10,
                md: 24,
            }}
        >
            <Box
                order={{
                    base: (isLeftSide ? 'initial' : ''),
                    md: (isLeftSide ? 2 : 0),
                }}

            >
                {/* <chakra.h2
                    mb={4}
                    fontSize={{
                        base: '2xl',
                        md: '4xl',
                    }}
                    fontWeight='extrabold'
                    letterSpacing='tight'
                    textAlign={{
                        base: 'center',
                        md: 'left',
                    }}
                    color={textColor}
                    lineHeight={{
                        md: 'shorter',
                    }}
                    textShadow='2px 0 currentcolor'
                >
                    {items.heading}
                </chakra.h2> */}

                <Heading
                    mb={4}
                    textAlign={{ base: 'center', md: 'left' }}
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
                    textAlign={{ base: 'center', md: 'left' }}
                >
                    {items.description}
                </Text>
                <Flex
                    justify={{ base: 'center', md: 'left' }}
                    align={{ base: 'center', md: 'left' }}
                >
                    <Button

                        w={{
                            base: 'full',
                            sm: 'auto',
                        }}
                        size='lg'
                        bg='gray.900'
                        _dark={{
                            bg: 'secondary-dark',
                        }}
                        _hover={{
                            bg: 'gray.700',
                            _dark: {
                                bg: 'button-hover-dark',
                            },
                        }}
                        color='gray.100'
                        as='a'
                        href={items.buttonUrl}
                    >
                        {items.buttonText}
                    </Button>
                </Flex>
            </Box>
            <Box
                w='full'
                h='full'
                py={48}
                bg='gray.200'
                _dark={{
                    bg: '#344955',
                }}
                borderRadius={15}
            ></Box>
        </SimpleGrid>
    );
}

interface Features {
    heading: string,
    description: string,
    buttonText: string,
    buttonUrl: string,
    isLeftSide?: boolean
}

const FeaturesList: Array<Features> = [
    {
        heading: '3D Printing Since 2016',
        description: 'I have been obsessed with 3D Printing since the day I bought my first 3D printer back in 2016. I bought the Monoprice FDM Printer. Since then I have taught myself how to make some models, tinker, and just flat out print the nerdiest things I could find on Thingiverse.',
        buttonText: 'Learn More',
        buttonUrl: '#',
    },
    {
        heading: 'Etsy Seller Since 2021',
        description: 'After years of 3D printing I decided to make my printers work for me. I was fascinated by the idea that I could just buy a 3D printer and pay it off by selling my prints over time. I dont sell much in terms of numbers but all my printers are paid off from sales!',
        buttonText: 'My Etsy Shop',
        buttonUrl: 'https://www.etsy.com/shop/3DPrintsByAndy',
    },
    {
        heading: 'Etsy Seller Since 2012',
        description: 'After years of 3D printing I decided to make my printers work for me. I was fascinated by the idea that I could just buy a 3D printer and pay it off by selling my prints over time. I dont sell much in terms of numbers but all my printers are paid off from sales!',
        buttonText: 'My Etsy Shop',
        buttonUrl: '#',
    }
];
