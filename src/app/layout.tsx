"use client"
import { Inter } from "next/font/google";
import { ChakraProvider, Box, useColorModeValue, background, extendTheme } from '@chakra-ui/react'
import Navbar from "@/components/Navbar";
import { mode } from '@chakra-ui/theme-tools'

const inter = Inter({ subsets: ["latin"] });

const theme = extendTheme({
  semanticTokens: {
    colors: {
      // "chakra-body-text": {
      //   _light: "purple.800",
      //   _dark: "pink.100",
      // },
      'chakra-body-bg': {
        _light: "#F1F1F1",
        _dark: "#222831",
      },
      'primary-dark':'#222831',
      'secondary-dark': '#50727B',
      'button-hover-dark': '#344955'
    },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body style={background}>
        <ChakraProvider theme={theme}>
          <Navbar />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
