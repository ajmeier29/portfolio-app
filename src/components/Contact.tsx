'use client'

import { EmailIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, FormControl, Heading, Input, InputGroup, InputLeftElement, Stack, Text, Textarea, VStack, useToast } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { MdOutlinePerson } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { stringify } from "querystring";

export default function Contact() {

    const [captchaPass, setCaptchaPass] = useState<boolean>();
    const [loading, setLoading] = useState(false);
    const key: string = (process.env.NEXT_PUBLIC_SITE_KEY as string);
    const emailPubKey: string = (process.env.NEXT_PUBLIC_EMAIL_PUB_KEY as string);
    const emailServiceId: string = (process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string);
    const emailTemplateId: string = (process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string);
    const verifyUrl: string = (process.env.NEXT_PUBLIC_VERIFY_URL as string);
    const toast = useToast()
    const [token, setToken] = useState("");
    const recaptcha = React.createRef<ReCAPTCHA>();

    async function onChange(value: any) {
        // verify captcha
        const captchaValue = recaptcha?.current?.getValue()
        if (!captchaValue) {
            console.log('Please verify the reCAPTCHA!')
        } else {
            // make form submission
            console.log('Form submission started...')
            try {
                const res = await fetch(verifyUrl, {
                    method: 'POST',
                    body: JSON.stringify({ captchaValue }),
                    mode: 'cors',
                    headers: {
                        'content-type': 'application/json',
                    },
                })
                const data = await res.json()
                if (data.success) {
                    setCaptchaPass(data.success)
                    // make form submission
                    console.log(`Form submission successful! Data: ${JSON.stringify(data)}`)
                } else {
                    alert('reCAPTCHA validation failed!')
                }
            } catch (e) {
                console.log(`Exception from verify: ${e}`);
            }
        }
    }

    useEffect(() => emailjs.init(emailPubKey), []);
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
        
        if (!captchaPass) {
            toast({
                title: 'Unable to submit.',
                description: "You must check the Captcha checkbox!",
                status: 'error',
                duration: 5000,
                variant: 'subtle',
                isClosable: true,
            })
        } else {
            try {
                setLoading(true);
                await emailjs.send(emailServiceId, emailTemplateId, {
                    from_name: formData.name,
                    email: formData.email,
                    message: formData.message,
                });
                toast({
                    title: 'Message Sent!',
                    description: "We will be in contact soon.",
                    status: 'success',
                    duration: 5000,
                    variant: 'subtle',
                    isClosable: true,
                })
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
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
                                    <Stack
                                        spacing={5}
                                        mb={2}
                                    >
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
                                <ReCAPTCHA
                                    ref={recaptcha}
                                    sitekey={key}
                                    onChange={onChange}
                                    data-size={'normal'}
                                />
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