import React from 'react';
import {
  ChakraProvider,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Heading,
  VStack,
  Grid,
  theme,
  Image,
  Divider,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Link } from 'react-router-dom';

function App() {

  
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        
        <Grid minH="70vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Image src='https://i.imgur.com/QUBFKJf.png' />
            <Heading
                    _hover={{  color: "teal.500",  }}><Link to="/">4theWords Planner</Link></Heading>
            <Breadcrumb>
            <BreadcrumbItem>
    <BreadcrumbLink
        color='teal.500'   
        _hover={{  color: "white",  }}><Link to="quickwccalc">Quick Calculator</Link></BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink
            color='teal.500'   
            _hover={{  color: "white",  }}><Link to="cityoflight">City of Light</Link></BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'
        color='teal.500'   
        _hover={{  color: "white",  }}><Link to="dustedcastle">Dusted Castle</Link></BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#' 
        color='teal.500'   
        _hover={{  color: "white",  }}><Link to="nivali">Nivali</Link></BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
<Divider></Divider>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;