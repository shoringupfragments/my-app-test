import React from 'react';
import { useState,useEffect } from "react";
import {
  ChakraProvider,
  Box,
  Heading,
  VStack,
  Grid,
  theme,
  Container,
  Link,
  Divider,
  Image,
  Button,
} from '@chakra-ui/react';


function App() {



  return (
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh">
          <VStack spacing={8}>
          <Heading mt='-50px'>Aurilis Guides</Heading>
            <Container><p>Here are the Aurilis Guides available so far:
                <br></br>
                <br></br>
                <a href="https://4thewords-planner.vercel.app/mastery-potions">
                <Image
        align='center' 
        w='750px'
        src='https://i.imgur.com/mSL2WDe.png'
      /></a>
      <br></br><br></br>
      <a href="https://4thewords-planner.vercel.app/aurilis-thesis">
             <Image
        align='center' 
        w='750px'
        src='https://i.imgur.com/gcQ1vLX.png'
      /></a>

      </p>
                </Container>
          </VStack>
        </Grid>
      </Box>
  );
}

export default App;