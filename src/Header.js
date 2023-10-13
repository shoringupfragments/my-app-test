import React from 'react';
import {
  ChakraProvider,
  Center,
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
      <Center>
      <Box textAlign="center" fontSize="xl">
        <Grid w='360px'  minH="70vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8} justify='center'>
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
      </Center>

    </ChakraProvider>
  );
}

export default App;