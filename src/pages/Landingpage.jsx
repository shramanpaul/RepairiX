import React from 'react'
import { Box, Button } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup, Stack,ButtonGroup,Text, Heading, Divider, Image } from '@chakra-ui/react';
import Cards from '../components/Cards';
import Navbar from '../components/Header';
import HeroSection from '../components/HeroSection';


function Landingpage() {
  return (
    <>
        <Navbar/>
        <HeroSection />
        <Cards/>
        
    </>
  )
}

export default Landingpage;