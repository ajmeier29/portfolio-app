"use client"
import { Inter } from "next/font/google";
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraProvider>
          <Navbar />
          { children }
        </ChakraProvider>
      </body>
    </html>
  );
}
