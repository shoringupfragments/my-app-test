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
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh">
            <Heading mt='-50px'>Battle Items Planner</Heading>
            <Container><p>This page shows the best builds for each defense stat, specific to your progress in the game.</p></Container>
            <Container><Divider></Divider></Container>
        </Grid>
      </Box>
  );
}

export default App;