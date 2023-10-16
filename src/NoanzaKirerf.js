import React from 'react';
import { useState,useEffect } from "react";
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Container,
  Spacer
} from '@chakra-ui/react';


function App() {

const [KirerfIsShown, setKirerfIsShown] = useState(false);
const handleKirerfClick = event => {
    setKirerfIsShown(current => !KirerfIsShown);

};

const [GlivaIsShown, setGlivaIsShown] = useState(false);
const handleGlivaClick = event => {
    setGlivaIsShown(current => !GlivaIsShown);

};

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh">
          <VStack spacing={8}>
        <HStack><text>Select source for</text> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/72/Cave-mushroom.png'
        alt='Mushrooms'
        mr='0px'
      /><text><b>Mushrooms</b></text>
         Source:</HStack>
        <Center><Container><Wrap justify='center'>
        <Button  variant='outline' onClick={handleKirerfClick}  style={{ backgroundColor: kirerfActive ? "#2C7A7B" : "transparent" }}>      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a6/Kirerf.png'
        alt='Kirerf'
        mr='12px'
      />
      <text>Kirerf</text></Button>
        <Button  variant='outline' onClick={handleGlivaClick}  style={{ backgroundColor: glivaActive ? "#2C7A7B" : "transparent" }}>      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/15/Gliva.png'
        alt='Gliva'
        mr='12px'
      />
      <text>Gliva</text></Button>
        </Wrap></Container></Center>
        <Spacer></Spacer>
          </VStack>
          
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;