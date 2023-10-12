import React from 'react';
import { useState,useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  ChakraProvider,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Button,
  Center,
  Heading,
  HStack,
  VStack,
  Grid,
  theme,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
  List,
  ListItem,
  ListIcon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Container,
  Spacer,
  Divider,
  onClick,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  WrapItem,
  Wrap,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronRightIcon, MinusIcon, AddIcon, } from '@chakra-ui/icons';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Routes, Route, Link } from 'react-router-dom';
import QuickWCCalc from './QuickWCCalc';
import CityofLight from './CityofLight'

function App() {

  
  return (
    <ChakraProvider theme={theme}>
      <Routes>
      <Route path="QuickWCCalc" element={ <QuickWCCalc/> } />
      <Route path="CityofLight" element={ <CityofLight/> } />
      </Routes>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Image src='https://i.imgur.com/QUBFKJf.png' />
            <Heading  
                    _hover={{  color: 'teal.500' ,  }}><Link to="/">4theWords Planner</Link></Heading>
            <Breadcrumb>
            <BreadcrumbItem>
    <BreadcrumbLink
        color='teal.500'   
        _hover={{  color: "white",  }}><Link to="QuickWCCalc">Quick Word Count Calculator</Link></BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink
            color='teal.500'   
            _hover={{  color: "white",  }}><Link to="CityofLight">City of Light</Link></BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'
        color='teal.500'   
        _hover={{  color: "white",  }}>Dusted Castle</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#' 
        color='teal.500'   
        _hover={{  color: "white",  }}>
            Nivali</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>

          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;