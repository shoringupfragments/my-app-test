import React from 'react';
import { useState,useEffect } from "react";
import {
  ChakraProvider,
  Box,
  Heading,
  Grid,
  theme,
  Container,
  Divider,
} from '@chakra-ui/react';

function App() {


  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
            <Heading>Nivali</Heading>
            <br></br>
            <Container><text>Coming soon</text></Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;