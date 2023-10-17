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
} from '@chakra-ui/react';


function App() {



  return (
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh">
          <VStack spacing={8}>
          <Heading pt={3}>About This Site</Heading>
            <Container><p>This is a work-in-progress 4theWords guide, intended to help you spend 
                less time planning and more time writing.
                <br></br>
                <br></br>
                The data on average drops, item requirements, and monsters comes from the <Link href='https://4thewords.fandom.com/wiki/Main_Page' color='teal.500'><b>4theWords Wiki</b></Link>. 
                When in doubt, check the Wiki!
                <br></br>
                <br></br>
                Coming soon:
                <br></br>
                - City of Light wardrobe and housing items
                <br></br>
                - Nivali battle items, wardrobe, and housing items
                <br></br>
                <br></br></p></Container>
                <Heading>Notice a Mistake?</Heading>
                <Container><text>This site is maintained by</text> <Link href='https://app.4thewords.com/account/ecstatic' color='teal.500'><b>ecstatic</b></Link><text>. <br></br> If you see an error, please let me know so I can correct it :)
                </text></Container>
                <br></br>
          </VStack>
        </Grid>
      </Box>
  );
}

export default App;