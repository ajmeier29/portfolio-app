'use client'

import { EmailIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, FormControl, FormErrorIcon, FormErrorMessage, FormHelperText, Heading, Input, InputGroup, InputLeftElement, Stack, Text, Textarea, VStack, useColorModeValue, useToast } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { MdOutlinePerson } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { SubmitHandler, useForm } from "react-hook-form"

export default function Contact() {

    const [captchaPass, setCaptchaPass] = useState<boolean>();
    const [loading, setLoading] = useState(false);
    const key: string = (process.env.NEXT_PUBLIC_SITE_KEY as string);
    const emailPubKey: string = (process.env.NEXT_PUBLIC_EMAIL_PUB_KEY as string);
    const emailServiceId: string = (process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string);
    const emailTemplateId: string = (process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string);
    const verifyUrl: string = (process.env.NEXT_PUBLIC_VERIFY_URL as string);
    const toast = useToast()
    const recaptcha = React.useRef<ReCAPTCHA>(null);

    // TODO: Break this out into a separate file. 
    // Handle Captcha form submission 
    async function onChange(value: any) {
        // verify captcha
        const captchaValue = recaptcha?.current?.getValue()
        if (!captchaValue) {
            toast({
                title: 'Captcha Failed.',
                description: "Please try again.",
                status: 'error',
                duration: 5000,
                variant: 'subtle',
                isClosable: true,
            })
        } else {
            // make form submission
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
                } else {
                    alert('reCAPTCHA validation failed!')
                }
            } catch (e) {
                //console.log(`Exception from verify: ${e}`);
            }
        }
    }

    useEffect(() => emailjs.init(emailPubKey), []);

    // The form data type
    type FormData =
        {
            name: string,
            email: string,
            message: string
        }

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>()

    const onSubmit: SubmitHandler<FormData> = async (data) => {
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
                    from_name: data.name,
                    email: data.email,
                    message: data.message,
                });
                toast({
                    title: 'Message Sent!',
                    description: "We will be in contact soon.",
                    status: 'success',
                    duration: 5000,
                    variant: 'subtle',
                    isClosable: true,
                })
                // reset form and captcha
                reset();
                setCaptchaPass(false);
                recaptcha?.current?.reset();
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
    }

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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Stack
                                    spacing={5}
                                    mb={2}
                                >
                                    <FormControl isInvalid={errors.name ? true : false}>
                                        <InputGroup>
                                            <InputLeftElement>
                                                <MdOutlinePerson />
                                            </InputLeftElement>
                                            <Input
                                                {...register("name", {
                                                    required: true
                                                })}
                                                type="text"
                                                name="name"
                                                placeholder="Your Full Name"
                                            />
                                        </InputGroup>
                                        {errors.name ? (
                                            <FormErrorMessage >Name is required!</FormErrorMessage>
                                        ) : (
                                            <></>
                                        )}
                                    </FormControl>
                                    <FormControl isInvalid={errors.email ? true : false}>
                                        <InputGroup>
                                            <InputLeftElement>
                                                <EmailIcon />
                                            </InputLeftElement>
                                            <Input
                                                {...register("email",
                                                    {
                                                        required: true
                                                    })}
                                                type="email"
                                                name="email"
                                                placeholder="Your Email"
                                            />
                                        </InputGroup>
                                        {errors.email ? (
                                            <FormErrorMessage >Email is required!</FormErrorMessage>
                                        ) : (
                                            <></>
                                        )}
                                    </FormControl>
                                    <FormControl isInvalid={errors.message ? true : false}>
                                        <Textarea
                                            {...register("message", {
                                                required: true
                                            })}
                                            name="message"
                                            placeholder="Your Message"
                                            rows={6}
                                        />
                                        {errors.email ? (
                                            <FormErrorMessage >A message is required!</FormErrorMessage>
                                        ) : (
                                            <></>
                                        )}
                                    </FormControl>
                                </Stack>
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