'use client'

import { EmailIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, InputGroup, InputLeftElement, Stack, Textarea, VStack } from "@chakra-ui/react"
import { SetStateAction, useState } from "react"
import { useForm } from 'react-hook-form'
import { MdOutlinePerson } from 'react-icons/md'

export default function Contact() {
    const [input, setInput] = useState(' ')
    const handleInputChange = (e: { target: { value: SetStateAction<string> } }) => setInput(e.target.value)
    const isError = input === ''

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()

    function onSubmit(values: any) {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                resolve()
            }, 3000)
        })
    }

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

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormControl isInvalid={isError}>
                                <Stack spacing={5}>
                                    <InputGroup>
                                        <InputLeftElement children={<MdOutlinePerson />} />
                                        <Input
                                            type="text"
                                            name="name"
                                            placeholder="Your Full Name"
                                        />
                                    </InputGroup>
                                    <InputGroup>
                                        <InputLeftElement children={<EmailIcon />} />
                                        <Input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                        />
                                    </InputGroup>
                                    <Textarea 
                                        name="message"
                                        placeholder="Your Message"
                                        rows={6}
                                    />
                                </Stack>
                            </FormControl>
                            <Button 
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