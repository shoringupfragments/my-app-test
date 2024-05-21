import React from 'react';
import { useState,useEffect } from "react";
import {
  ChakraProvider,
  Box,
  Button,
  Image,
  Heading,
  HStack,
  VStack,
  Grid,
  theme,
  Container,
  Link,
  Divider,
  Wrap,
  WrapItem,
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  AccordionItem,
  Text,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';


function App() {

  const [LoleYActive, setLoleYActive] = useState(false);
  const [LoleNActive, setLoleNActive] = useState(false);
  const [LoleYIsShown, setLoleYIsShown] = useState(false);
  const [LoleNIsShown, setLoleNIsShown] = useState(false);

  const [MundYActive, setMundYActive] = useState(false);
  const [MundNActive, setMundNActive] = useState(false);
  const [MundYIsShown, setMundYIsShown] = useState(false);
  const [MundNIsShown, setMundNIsShown] = useState(false);

  const handleLoleYClick = event => {
    // 👇️ toggle shown state
    setLoleYIsShown(current => !LoleYIsShown);
    setLoleNIsShown(current => null);
    setLoleYActive(!LoleYActive);
    setLoleNActive(current => null);

  };

  const handleLoleNClick = event => {
    // 👇️ toggle shown state
    setLoleNIsShown(current => !LoleNIsShown);
    setLoleYIsShown(current => null);
    setLoleNActive(!LoleNActive);
    setLoleYActive(current => null);
    };

  const handleMundYClick = event => {
    // 👇️ toggle shown state
    setMundYIsShown(current => !MundYIsShown);
    setMundNIsShown(current => null);
    setMundYActive(!MundYActive);
    setMundNActive(current => null);

  };

  const handleMundNClick = event => {
    // 👇️ toggle shown state
    setMundNIsShown(current => !MundNIsShown);
    setMundYIsShown(current => null);
    setMundNActive(!MundNActive);
    setMundYActive(current => null);
    };


  const [Spellfire, setSpellfire] = useState(0); // Or any other non-zero value

  const handleSpellfireChange = (valueString) => {
    const value = parseFloat(valueString);
      setSpellfire(value);
    };

  const [Stardust, setStardust] = useState(0); // Or any other non-zero value

  const handleStardustChange = (valueString) => {
    const value = parseFloat(valueString);
      setStardust(value);
    };

  const [Scroll, setScroll] = useState(0); // Or any other non-zero value

  const handleScrollChange = (valueString) => {
    const value = parseFloat(valueString);
      setScroll(value);
    };
    
  const [Dewberry, setDewberry] = useState(0); // Or any other non-zero value

  const handleDewberryChange = (valueString) => {
    const value = parseFloat(valueString);
      setDewberry(value);
    };    

  const [Coin, setCoin] = useState(0); // Or any other non-zero value

  const handleCoinChange = (valueString) => {
    const value = parseFloat(valueString);
      setCoin(value);
    };   


  return (
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh">
          <VStack spacing={8}>
          <Heading mt='-50px'>Simple Potion Calculator</Heading>
            <Container align='center'><p>This page estimates how many potions you can make from a set amount of materials + coins.<br></br><br></br></p>
                <Divider /></Container>
                
                <text ml='10px'>Which familiar(s) do you have? </text> 
        <Container><Wrap justify='center'>
        <WrapItem>
        <Button variant='outline' onClick={handleLoleYClick} style={{ backgroundColor: LoleYActive ? "#3f011c" : "transparent" }}>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/6d/Lole.png/ '
        mr='12px'
      />
      <span>Lole</span></Button>
      </WrapItem>
      <WrapItem>
        <Button variant='outline' onClick= {handleMundYClick} style={{ backgroundColor: MundYActive ? "#3f471e" : "transparent" }}>      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e3/Mund.png/'
        mr='12px'
      />
      <span>Mund</span></Button></WrapItem>
        </Wrap>

<Container mt='25px' align='center'>                
<Accordion allowMultiple w={350}>
  <AccordionItem>
  <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='center' p={3}>
        <Heading as='h3' size='lg'>Resources You Have</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>

      <Box align='center' h='300px' overflowY='scroll'>
      <Box w='250px' h='100px' pb={5} backgroundColor='#1A202C'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/50/Spellfire_(Spells).png'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Spellfire</Text>
        <NumberInput defaultValue={0} min={0} max={15000} size='md' w='100px'>
        <NumberInputField id='alreadyfought' onInput={(e) => handleSpellfireChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box>

            <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/c/c7/Stardust_(Astrology).png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Stardust</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='alreadyfought' onInput={(e) => handleStardustChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box>   
            <Box w='250px' h='100px' pb={5} backgroundColor='#1A202C'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/67/Scrolls_%28Knowledge%29.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text id='monstername' fontSize='sm' align='center'>Scrolls</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='alreadyfought' onInput={(e) => handleScrollChange(e.target.value)} />
</NumberInput>      </VStack>
      </HStack>
            </Box>

            <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a4/Dew_Berry_%28Alchemy%29.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text id='monstername' fontSize='sm' align='center'>Dewberries</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='alreadyfought' onInput={(e) => handleDewberryChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box>

       <Box w='250px' h='100px' pb={5} backgroundColor='#1A202C'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text id='monstername' fontSize='sm' align='center'>Coins</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='alreadyfought' onInput={(e) => handleCoinChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box>

          </Box>
      <br></br>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>    
  </Container>            
                
                </Container>
          </VStack>
        </Grid>
      </Box>
  );
}

export default App;