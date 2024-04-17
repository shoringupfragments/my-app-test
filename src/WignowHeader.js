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
  Image,
  Divider,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import darkTheme from './theme';

function App() {

  
  return (
    <ChakraProvider theme={darkTheme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="70vh" p={3} w="100%">
          <VStack spacing={8} justify='center' flexShrink={0}>
            <Image src='https://i.imgur.com/svUT2a2.png' 
            width={{ base: 150, sm: 150, md: 200, lg: 250, xl: 375, "2xl": 375 }}/>
            <Heading
                    _hover={{  color: "teal.500",  }}><Link to="/">4theWords Planner</Link></Heading>
            <Breadcrumb>
            <BreadcrumbItem>
    <BreadcrumbLink
        color='teal.500'   
        _hover={{  color: "teal.300",  }}><Link to="quickwccalc">Quick Calculator</Link></BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink
            color='teal.500'   
            _hover={{  color: "teal.300",  }}><Link to="cityoflight">City of Light</Link></BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink
            color='teal.500'   
            _hover={{  color: "teal.300",  }}><Link to="aurilis">Aurilis Guides</Link></BreadcrumbLink>
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