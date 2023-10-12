import React from 'react';
import {
  ChakraProvider,
  Box,
  Heading,
  VStack,
  Grid,
  theme,
  Container,
} from '@chakra-ui/react';


function App() {


  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh">
          <VStack spacing={8}>
          <Heading>Nivali</Heading>
            <Container><p>coming soon</p></Container>
          </VStack>
          
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;