import React from 'react';
import { useState,useEffect } from "react";
import {
  ChakraProvider,
  Box,
  Button,
  Heading,
  Grid,
  theme,
  Container,
  Divider,
  Text,
} from '@chakra-ui/react';

function App() {

  const [NoArmor, setNoArmor] = useState(0)
  const [NoArmorIsShown, setNoArmorIsShown] = useState(false)
  const [NoArmorActive, setNoArmorActive] = useState(false)


const [MountainMace, setMountainMace] = useState(0)
const [MountainMaceIsShown, setMountainMaceIsShown] = useState(false)
const [MountainMaceActive, setMountainMaceActive] = useState(false)
const [MountainMaceDef, setMountainMaceDef] = useState(0)

const [NivaliBreastplate, setNivaliBreastplate] = useState(0)
const [NivaliBreastplateIsShown, setNivaliBreastplateIsShown] = useState(false)
const [NivaliBreastplateActive, setNivaliBreastplateActive] = useState(false)
const [NivaliBreastplateDef, setNivaliBreastplateDef] = useState(0)

const handleNoArmorClick = event => {
  setNoArmorIsShown (current => !NoArmorIsShown);
  setNoArmorActive (current => !NoArmorActive);
  setNivaliBreastplateIsShown (current => false);
  setNivaliBreastplateActive (current => false);
  setMountainMaceDef (value => 0);
  
};

const handleMountainMaceClick = event => {
setMountainMaceIsShown (current => true);
setMountainMaceActive (current => true);
setMountainMaceDef (value => 20);
};

const handleNivaliBreastplateClick = event => {
  setNivaliBreastplateIsShown (current => !NivaliBreastplateIsShown);
  setNivaliBreastplateActive (current => !NivaliBreastplateActive);
  setNivaliBreastplateDef (value => 22);
};


const totalNivaliDef = Math.max (MountainMaceDef + NivaliBreastplateDef, 0)

  return (
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh">
            <Heading>Battle Items Planner</Heading>
            <Container><p>This page shows the best builds for each battle stat, specific to your progress in the game.</p></Container>
            <Container><Divider></Divider></Container>
            <Container>
              <Text>What is the furthest area in the game you've reached?</Text>
              <Button onClick={handleNoArmorClick}>No Chest Armor</Button>
              <Button onClick={handleMountainMaceClick}>Mountain Mace</Button>
              <Button onClick={handleNivaliBreastplateClick}>Nivali Breastplate</Button>
            <Text>Mountain Mace def: {MountainMaceDef}</Text>
            <Text>Nivali Breastplate def: {NivaliBreastplateDef}</Text>
            <Text>Total def: {totalNivaliDef}</Text>
            </Container>
        </Grid>
      </Box>
  );
}

export default App;