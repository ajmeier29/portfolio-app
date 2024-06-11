'use client'

import { EmailIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, FormControl, Heading, Input, InputGroup, InputLeftElement, Stack, Text, Textarea, VStack, useToast } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { MdOutlinePerson } from 'react-icons/md'
import emailjs from '@emailjs/browser';

import React, { useRef } from 'react';

export default function Contact() {
    const emailRef = useRef<HTMLInputElement>();
    const from_name = useRef<HTMLInputElement>();
    const message = useRef<HTMLInputElement>();
    const [loading, setLoading] = useState(false);
    const [width, setWidth] = useState<number>(window.innerWidth);
    const toast = useToast()
    useEffect(() => emailjs.init("q9WRjNUNHKzXT12F4"), []);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        isMobile: false
    });

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        setLoading(true);
        e.preventDefault();
        const serviceId = "service_8umnbiq";
        const templateId = "template_r9l8rsi";
        try {
            await emailjs.send(serviceId, templateId, {
                from_name: formData.name,
                email: formData.email,
                message: formData.message,
                isMobile: (width <= 768)
            });
            toast({
                title: 'Message Sent!.',
                description: "We will be in contact soon.",
                status: 'success',
                duration: 5000,
                variant: 'subtle',
                isClosable: true,
            })
            setFormData({
                name: '',
                email: '',
                message: '',
                isMobile: false
            });
            //alert("email successfully sent check inbox");
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Flex
                align={'center'}
                justify={'center'}

                shadow={{ base: 'dark-lg', md: '2xl' }}
                px={16}
                py={20}
                mx={{ base: 2, md: '25%' }}
                mt={{ base: 2, md: '4%' }}
                borderRadius={20}
            >
                <Box>
                    <VStack
                        spacing={5}
                    >
                        <Box>
                            <Heading
                                fontSize={{
                                    base: '3xl',
                                    md: '4xl'
                                }}
                            >
                                Get In Touch
                            </Heading>
                            <Text
                                mt={2}
                                mb={2}
                            >
                                If you are interested in hiring me for a job, <br />or frelance work. Lets talk.
                            </Text>
                            <form onSubmit={handleSubmit}>
                                <FormControl>
                                    <Stack spacing={5}>
                                        <InputGroup>
                                            <InputLeftElement>
                                                <MdOutlinePerson />
                                            </InputLeftElement>
                                            <Input
                                                type="text"
                                                name="name"
                                                placeholder="Your Full Name"
                                                onChange={handleInputChange}
                                            />
                                        </InputGroup>
                                        <InputGroup>
                                            <InputLeftElement>
                                                <EmailIcon />
                                            </InputLeftElement>
                                            <Input
                                                type="email"
                                                name="email"
                                                placeholder="Your Email"
                                                onChange={handleInputChange}
                                            />
                                        </InputGroup>
                                        <Textarea
                                            name="message"
                                            placeholder="Your Message"
                                            rows={6}
                                            onChange={handleInputChange}
                                        />
                                    </Stack>
                                </FormControl>
                                <Button
                                    isLoading={loading}
                                    loadingText='Sending'
                                    type='submit'
                                    mt={5}
                                    width={'full'}
                                    fontWeight={'normal'}
                                    _light={{
                                        bg: 'button-light',
                                        _hover: {
                                            bg: 'button-light-hover'
                                        }
                                    }}
                                >
                                    Send Message
                                </Button>
                            </form>
                        </Box>
                    </VStack>
                </Box>

            </Flex>
        </>
    )
}