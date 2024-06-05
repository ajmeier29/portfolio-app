
'use client'

import { Flex, SimpleGrid, chakra, Button, Box } from "@chakra-ui/react";
import { RiAlignItemLeftFill } from "react-icons/ri";




export default function AboutPage() {

    return (
        <Flex
            bg="blue.500"
            _dark={{
                bg: "gray.800",
            }}
            p={20}
            w="full"
            justifyContent="center"
            alignItems="center"
            pos="absolute"
        >
            <Box
                shadow="xl"
                bg="white"
                _dark={{
                    bg: "gray.800",
                }}
                px={8}
                py={20}
                mx="auto"
                borderRadius={20}
            >
                
                {FeaturesList.map((item: Features, index: number)  => {

                    if (index % 2 === 0) {
                        item.isLeftSide = false;
                        return <Feature key={item.heading} {...item} />
                    } else {
                        item.isLeftSide = true;
                        return <Feature key={item.heading} {...item} />
                    }
                })}

                {/* <SimpleGrid
                    alignItems="center"
                    columns={{
                        base: 1,
                        md: 2,
                    }}
                    flexDirection="column-reverse"
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
                </SimpleGrid> */}

            </Box>
        </Flex>
    );
}

const Feature = (items: Features) => {
    const { isLeftSide } = items;
    return (
        <SimpleGrid
            alignItems="center"
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
                    base: (isLeftSide ? "initial" : ""),
                    md: (isLeftSide ? 2 : 0),
                }}
            >
                <chakra.h2
                    mb={4}
                    fontSize={{
                        base: "2xl",
                        md: "4xl",
                    }}
                    fontWeight="extrabold"
                    letterSpacing="tight"
                    textAlign={{
                        base: "center",
                        md: "left",
                    }}
                    color="gray.900"
                    _dark={{
                        color: "gray.400",
                    }}
                    lineHeight={{
                        md: "shorter",
                    }}
                    textShadow="2px 0 currentcolor"
                >
                    {items.heading}
                </chakra.h2>
                <chakra.p
                    mb={5}
                    textAlign={{
                        base: "center",
                        sm: "left",
                    }}
                    color="gray.600"
                    _dark={{
                        color: "gray.400",
                    }}
                    fontSize={{
                        md: "lg",
                    }}
                >
                    {items.description}
                </chakra.p>
                <Button
                    w={{
                        base: "full",
                        sm: "auto",
                    }}
                    size="lg"
                    bg="gray.900"
                    _dark={{
                        bg: "gray.700",
                    }}
                    _hover={{
                        bg: "gray.700",
                        _dark: {
                            bg: "gray.600",
                        },
                    }}
                    color="gray.100"
                    as="a"
                >
                    {items.buttonText}
                </Button>
            </Box>
            <Box
                w="full"
                h="full"
                py={48}
                bg="gray.200"
                _dark={{
                    bg: "gray.700",
                }}
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
        heading: 'Etsy Seller Since 2012',
        description: 'After years of 3D printing I decided to make my printers work for me. I was fascinated by the idea that I could just buy a 3D printer and pay it off by selling my prints over time. I dont sell much in terms of numbers but all my printers are paid off from sales!',
        buttonText: 'My Etsy Shop',
        buttonUrl: '#', 
    },
    {
        heading: 'Etsy Seller Since 2012',
        description: 'After years of 3D printing I decided to make my printers work for me. I was fascinated by the idea that I could just buy a 3D printer and pay it off by selling my prints over time. I dont sell much in terms of numbers but all my printers are paid off from sales!',
        buttonText: 'My Etsy Shop',
        buttonUrl: '#',
    }
];
