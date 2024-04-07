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
      <Box textAlign="center" fontSize="xl" w="100%">
        <Grid minH="70vh" p={3}>
          <VStack spacing={8} justify='center'>
            <Image src='https://i.imgur.com/svUT2a2.png' />
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
            _hover={{  color: "teal.300",  }}><Link to="removeimages">Remove Images</Link></BreadcrumbLink>
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