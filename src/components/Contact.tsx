'use client'

import { EmailIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, InputGroup, InputLeftElement, Stack, Textarea, VStack } from "@chakra-ui/react"
import { SetStateAction, useEffect, useState } from "react"
import { useForm } from 'react-hook-form'
import { MdOutlinePerson } from 'react-icons/md'
import emailjs, { EmailJSResponseStatus, send } from '@emailjs/browser';

import React, { useRef } from 'react';

export default function Contact() {
    const emailRef = useRef<HTMLInputElement>();
    const from_name = useRef<HTMLInputElement>();
    const message = useRef<HTMLInputElement>();
    const [loading, setLoading] = useState(false);
    useEffect(() => emailjs.init("q9WRjNUNHKzXT12F4"), []);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const serviceId = "service_8umnbiq";
        const templateId = "template_r9l8rsi";
        try {
            await emailjs.send(serviceId, templateId, {
                from_name: formData.name,
                email: formData.email,
                message: formData.message
            });
            alert("email successfully sent check inbox");
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

                shadow='dark-lg'
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
                        <Heading
                            fontSize={{
                                base: '3xl',
                                md: '4xl'
                            }}
                        >
                            Get In Touch
                        </Heading>

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

                    </VStack>
                </Box>

            </Flex>
        </>
    )
}