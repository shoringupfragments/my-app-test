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
            <Heading>Dusted Castle</Heading>
            <Container><p>This page calculates what monsters you need for City of Light materials and battle items, based on average loot drops.</p></Container>
            <Container><Divider></Divider></Container>
        </Grid>
      </Box>
  );
}

export default App;