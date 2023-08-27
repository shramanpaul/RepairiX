import { useState } from "react";
import logo from "../assets/logo.png";
import {
  Heading,
  Flex,
  Box,
  Button,
  UnorderedList,
  ListItem,
  Image,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";

function Navbar() {
  return (
    <>
      <Flex
        w="100vw"
        h="12vh"
        bgColor="#f7f8fc"
        justify="space-between"
        alignItems="center"
        boxShadow="rgba(157, 157, 157, 0.2) 0px 4px 10px"
      >
        <Image src={logo} pl={{ base: 2, md: 6, lg: 10 }}></Image>

        <UnorderedList
          display="flex"
          listStyleType="none"
          gap={{ base: 2, md: 6, lg: 8 }}
          fontFamily="sans-serif"
          fontSize="lg"
          fontWeight="medium"
          cursor= "pointer"
        >
          <ListItem _hover={{ color: "#6674CC" }}>Home</ListItem>
          <ListItem _hover={{ color: "#6674CC" }}>Services</ListItem>
          <ListItem _hover={{ color: "#6674CC" }}>About us</ListItem>
          <ListItem _hover={{ color: "#6674CC" }}>Contact</ListItem>
        </UnorderedList>

        <Heading pr={{ base: 2, md: 6, lg: 10 }}>Image</Heading>
      </Flex>
    </>
  );
}
export default Navbar;
