import React from "react";
import {
  ChakraProvider,
  Box,
  Heading,
  VStack,
  Grid,
  HStack,
  theme,
  Container,
  Link,
  Divider,
  Text,
  Image,
  Button,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import { useState } from "react";
import { Aurilis, ElderLibrary, DragonLair, Raina, Clouds, Dawn, Tempest, Garden, 
  WoodSword, WoodSpear, SteelSword, SteelMace, SteelDagger, SpellfireSword, RainaSword,
  PGTwinSwords, OozeSword, NiftrasSword, MercurialSword, LeafsungWoodenSword, KingMaisSword,
  GlassScimitar, FusionSword, FlowerSlingshot, DragonsTailSword, DragonsClawHook,
  DawnSword, DFSword2017, DFSword, CaveSpear, BalanceHarpoon
} from './Locations.js';
import { LeafHelmet, ProtectedLeafHelmet } from './Head Items.js'


function HeadItemsByAtk() {

  const [LeafHelm, setLeafHelm] = useState(0);
  const [LeafHelmAtk, setLeafHelmAtk] = useState(0);
  const [LeafHelmDef, setLeafHelmDef] = useState(0);
  const [LeafHelmLuck, setLeafHelmLuck] = useState(0);

  const [ProLeafHelm, setProLeafHelm] = useState(0);
  const [ProLeafHelmAtk, setProLeafHelmAtk] = useState(0);
  const [ProLeafHelmDef, setProLeafHelmDef] = useState(0);
  const [ProLeafHelmLuck, setProLeafHelmLuck] = useState(0);

  const [FabHelm, setFabHelm] = useState(0);
  const [FabHelmAtk, setFabHelmAtk] = useState(0);
  const [FabHelmDef, setFabHelmDef] = useState(0);
  const [FabHelmLuck, setFabHelmLuck] = useState(0);

  const [RRHood, setRRHood] = useState(0);
  const [RRHoodAtk, setRRHoodAtk] = useState(0);
  const [RRHoodDef, setRRHoodDef] = useState(0);
  const [RRHoodLuck, setRRHoodLuck] = useState(0);

const [HelmAtk, setHelmAtk] = useState(0);
const totalHelmAtk = LeafHelmAtk + ProLeafHelmAtk + FabHelmAtk + RRHoodAtk
const [HelmDef, setHelmDef] = useState(0);
const totalHelmDef = LeafHelmDef + ProLeafHelmDef + FabHelmDef + RRHoodDef
const [HelmLuck, setHelmLuck] = useState(0);
const totalHelmLuck = LeafHelmLuck + ProLeafHelmLuck + FabHelmLuck + RRHoodLuck

return (
<Wrap>
<WrapItem>
  {!LeafHelm &&
  <Button w='300px' h='100px'         
      className="buttons-container-button"
        onClick={() => {
          setLeafHelm(!LeafHelm);
          setLeafHelmAtk(current => 0);
          setLeafHelmDef(current => 3);
          setLeafHelmLuck(current => 2);
          setProLeafHelm(false)
          setProLeafHelmAtk(current => 0);
          setProLeafHelmDef(current => 0);
          setProLeafHelmLuck(current => 0);
        }} pb={5} mb={15} style={{  backgroundColor: "#2D3748" }}>
      <LeafHelmet />
      </Button>}
      {LeafHelm &&
  <Button w='300px' h='100px'         
      className="buttons-container-button"
        onClick={() => {
          setLeafHelm(!LeafHelm);
          setLeafHelmAtk(current => 0);
          setLeafHelmDef(current => 0);
          setLeafHelmLuck(current => 0);
        }} pb={5} mb={15} style={{  backgroundColor: "#211742", borderColor: '#31294f', borderWidth: '2px'}}>
      <LeafHelmet />
      </Button>}
</WrapItem>
<WrapItem>
{!ProLeafHelm &&
<Button w='300px' h='100px'         
      className="buttons-container-button"
        onClick={() => {
          setLeafHelm(false)
          setLeafHelmAtk(current => 0);
          setLeafHelmDef(current => 0);
          setLeafHelmLuck(current => 0);
          setProLeafHelm(!ProLeafHelm)
          setProLeafHelmAtk(current => 0);
          setProLeafHelmDef(current => 5);
          setProLeafHelmLuck(current => 2);
        }} pb={5} mb={15} style={{  backgroundColor: "#2D3748"}}>
      <ProtectedLeafHelmet />
      </Button>}
{ProLeafHelm &&
<Button w='300px' h='100px'         
      className="buttons-container-button"
        onClick={() => {
          setProLeafHelm(!ProLeafHelm)
          setProLeafHelmAtk(current => 0);
          setProLeafHelmDef(current => 0);
          setProLeafHelmLuck(current => 0);
        }} pb={5} mb={15} style={{  backgroundColor: "#211742", borderColor: '#31294f', borderWidth: '2px'}}>
      <ProtectedLeafHelmet />
      </Button>}
</WrapItem>
</Wrap>
)
}

export default HeadItemsByAtk;
