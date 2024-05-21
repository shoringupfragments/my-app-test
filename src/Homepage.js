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
  List,
  Text,
  UnorderedList,
  Image
} from '@chakra-ui/react';


function App() {
  const [hover, setHover] = useState(false);



  return (
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh">
          <VStack spacing={8}>
          <Heading mt='-50px'>All Current Guides</Heading>
            <Container>
            <UnorderedList>
  <Text mb='15px'><b>General Gameplay / All Areas</b></Text>

  <Text mt='8px' textAlign='left'>🍃 <span><Link color='teal.500'   
        _hover={{  color: "teal.300",  }} href='/quickwccalc'>
    Quick Word Count Calculator</Link></span>: input your attack stat and target word count to see how 
    many words you need to type/paste at your attack</Text>
    <Text mt='15px' textAlign='left'>🍃 <span><Link color='teal.500'   
        _hover={{  color: "teal.300",  }} href='/endurance'>
    Endurance Monster Planner</Link></span>: calculate the timing to win endurance battles. Includes a visual timer to 
    run alongside the battle and guarantee 4x reward multipliers</Text>
  <Text mt='50px' mb='15px'><b>Aurilis Magic Academy</b></Text>
  <Text mt='8px' textAlign='left'>⭐ <span><Link color='teal.500'   
        _hover={{  color: "teal.300",  }} href='/mastery-potions'>
    Potion Mastery Calculator</Link></span>: earn masteries of low word count Aurilis creatures to invest their resource drops into 
    potions to master high word count creatures</Text>
    <Text mt='15px' textAlign='left'>⭐ <span><Link color='teal.500'   
        _hover={{  color: "teal.300",  }} href='/aurilis-thesis'>
    Defend Your Thesis Quest Tracker</Link></span>: plan for repeatable quest overlap with the Year 1 thesis quests (Year 2 coming soon)</Text>
    <Text mt='50px' mb='15px'><b>Late Game</b></Text>
  <Text mt='8px' textAlign='left'>⚔️ <span><Link color='teal.500'   
        _hover={{  color: "teal.300",  }} href='/cityoflight'>
    City of Light</Link></span>: calculate resources needed for City of Light battle items</Text>
</UnorderedList>

                <Divider mt='50px' /></Container>

          <Heading>About This Site</Heading>
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
                <br></br></p>
                <Divider /></Container>
                <Heading>Notice a Mistake?</Heading>
                <Container><text>This planner is maintained by</text> <Link href='https://app.4thewords.com/account/ecstatic' color='teal.500'><b>ecstatic</b></Link><text>. <br></br> If you see an error, please let me know so I can correct it :)
                </text></Container>
                <br></br>
          </VStack>
        </Grid>
      </Box>
  );
}

export default App;