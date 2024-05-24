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
  HStack,
  Image,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

function App() {

const [All, setAll] = useState(false)
const [AllIsShown, setAllIsShown] = useState(false)
const [AllActive, setAllActive] = useState(false)

const [Owned, setOwned] = useState(false)
const [OwnedIsShown, setOwnedIsShown] = useState(false)
const [OwnedActive, setOwnedActive] = useState(false)

const handleAllClick = event => {
  setAllIsShown (current => true);
  setAllActive (current => !AllActive);
  setOwnedIsShown (current => false);
  setOwnedActive (current => false);
  };

  const handleOwnedClick = event => {
    setOwnedIsShown (current => true);
    setOwnedActive (current => !OwnedActive);
    setAllIsShown (current => false);
    setAllActive (current => false);
    };

  //region clicks//

const [ForestRegionIsShown, setForestRegionIsShown] = useState(false)
const [ForestRegionActive, setForestRegionActive] = useState(false)
const [DesertRegionIsShown, setDesertRegionIsShown] = useState(false)
const [DesertRegionActive, setDesertRegionActive] = useState(false)
const [WaterRegionIsShown, setWaterRegionIsShown] = useState(false)
const [WaterRegionActive, setWaterRegionActive] = useState(false)
const [DustRegionIsShown, setDustRegionIsShown] = useState(false)
const [DustRegionActive, setDustRegionActive] = useState(false)
const [LightRegionIsShown, setLightRegionIsShown] = useState(false)
const [LightRegionActive, setLightRegionActive] = useState(false)
const [World2RegionIsShown, setWorld2RegionIsShown] = useState(false)
const [World2RegionActive, setWorld2RegionActive] = useState(false)

const [LuciolaForestIsShown, setLuciolaForestIsShown] = useState(false)
const [LuciolaForestActive, setLuciolaForestActive] = useState(false)
const [AurilisIsShown, setAurilisIsShown] = useState(false)
const [AurilisActive, setAurilisActive] = useState(false)

const [MamaTreeIsShown, setMamaTreeIsShown] = useState(false)
const [MamaTreeActive, setMamaTreeActive] = useState(false)

const [ThreePCIsShown, setThreePCIsShown] = useState(false)
const [ThreePCActive, setThreePCActive] = useState(false)
const [DragonLairIsShown, setDragonLairIsShown] = useState(false)
const [DragonLairActive, setDragonLairActive] = useState(false)

const [RizaRivertownIsShown, setRizaRivertownIsShown] = useState(false)
const [RizaRivertownActive, setRizaRivertownActive] = useState(false)
const [RainaIsShown, setRainaIsShown] = useState(false)
const [RainaActive, setRainaActive] = useState(false)
const [FloatingCityIsShown, setFloatingCityIsShown] = useState(false)
const [FloatingCityActive, setFloatingCityActive] = useState(false)
const [CloudsIsShown, setCloudsIsShown] = useState(false)
const [CloudsActive, setCloudsActive] = useState(false)
const [DawnIsShown, setDawnIsShown] = useState(false)
const [DawnActive, setDawnActive] = useState(false)
const [TempestIsShown, setTempestIsShown] = useState(false)
const [TempestActive, setTempestActive] = useState(false)

const [DFOIsShown, setDFOIsShown] = useState(false)
const [DFOActive, setDFOActive] = useState(false)
const [GardenIsShown, setGardenIsShown] = useState(false)
const [GardenActive, setGardenActive] = useState(false)

const [CoLIsShown, setCoLIsShown] = useState(false)
const [CoLActive, setCoLActive] = useState(false)
const [DCIsShown, setDCIsShown] = useState(false)
const [DCActive, setDCActive] = useState(false)

const [NivaliIsShown, setNivaliIsShown] = useState(false)
const [NivaliActive, setNivaliActive] = useState(false)



const handleForestRegionClick = event => {
setForestRegionIsShown (current => !ForestRegionIsShown);
setForestRegionActive (current => !ForestRegionActive);
setDesertRegionIsShown (current => false);
setDesertRegionActive (current => false);
setWaterRegionIsShown (current => false);
setWaterRegionActive (current => false);
setDustRegionIsShown (current => false);
setDustRegionActive (current => false);
setLightRegionIsShown (current => false);
setLightRegionActive (current => false);
setWorld2RegionIsShown (current => false);
setWorld2RegionActive (current => false);
setLuciolaForestIsShown (current => false);
setLuciolaForestActive (current => false);
setMamaTreeIsShown (current => false);
setMamaTreeActive (current => false);
setThreePCIsShown (current => false);
setThreePCActive (current => false);
setDragonLairIsShown (current => false);
setDragonLairActive (current => false);
setRizaRivertownIsShown (current => false);
setRizaRivertownActive (current => false);
setRainaIsShown (current => false);
setRainaActive (current => false);
setFloatingCityIsShown (current => false);
setFloatingCityActive (current => false);
setCloudsIsShown (current => false);
setCloudsActive (current => false);
setDawnIsShown (current => false);
setDawnActive (current => false);
setTempestIsShown (current => false);
setTempestActive (current => false);
setDFOIsShown (current => false);
setDFOActive (current => false);
setGardenIsShown (current => false);
setGardenActive (current => false);
setCoLIsShown (current => false);
setCoLActive (current => false);
setDCIsShown (current => false);
setDCActive (current => false);
setNivaliIsShown (current => false);
setNivaliActive (current => false);
};

const handleDesertRegionClick = event => {
setDesertRegionIsShown (current => !DesertRegionIsShown);
setDesertRegionActive (current => !DesertRegionActive);
setForestRegionIsShown (current => false);
setForestRegionActive (current => false);
setWaterRegionIsShown (current => false);
setWaterRegionActive (current => false);
setDustRegionIsShown (current => false);
setDustRegionActive (current => false);
setLightRegionIsShown (current => false);
setLightRegionActive (current => false);
setWorld2RegionIsShown (current => false);
setWorld2RegionActive (current => false);
setLuciolaForestIsShown (current => false);
setLuciolaForestActive (current => false);
setMamaTreeIsShown (current => false);
setMamaTreeActive (current => false);
setThreePCIsShown (current => false);
setThreePCActive (current => false);
setDragonLairIsShown (current => false);
setDragonLairActive (current => false);
setRizaRivertownIsShown (current => false);
setRizaRivertownActive (current => false);
setRainaIsShown (current => false);
setRainaActive (current => false);
setFloatingCityIsShown (current => false);
setFloatingCityActive (current => false);
setCloudsIsShown (current => false);
setCloudsActive (current => false);
setDawnIsShown (current => false);
setDawnActive (current => false);
setTempestIsShown (current => false);
setTempestActive (current => false);
setDFOIsShown (current => false);
setDFOActive (current => false);
setGardenIsShown (current => false);
setGardenActive (current => false);
setCoLIsShown (current => false);
setCoLActive (current => false);
setDCIsShown (current => false);
setDCActive (current => false);
setNivaliIsShown (current => false);
setNivaliActive (current => false);
};

const handleWaterRegionClick = event => {
setWaterRegionIsShown (current => !WaterRegionIsShown);
setWaterRegionActive (current => !WaterRegionActive);
setDesertRegionIsShown (current => false);
setDesertRegionActive (current => false);
setForestRegionIsShown (current => false);
setForestRegionActive (current => false);
setDustRegionIsShown (current => false);
setDustRegionActive (current => false);
setLightRegionIsShown (current => false);
setLightRegionActive (current => false);
setWorld2RegionIsShown (current => false);
setWorld2RegionActive (current => false);
setLuciolaForestIsShown (current => false);
setLuciolaForestActive (current => false);
setMamaTreeIsShown (current => false);
setMamaTreeActive (current => false);
setThreePCIsShown (current => false);
setThreePCActive (current => false);
setDragonLairIsShown (current => false);
setDragonLairActive (current => false);
setRizaRivertownIsShown (current => false);
setRizaRivertownActive (current => false);
setRainaIsShown (current => false);
setRainaActive (current => false);
setFloatingCityIsShown (current => false);
setFloatingCityActive (current => false);
setCloudsIsShown (current => false);
setCloudsActive (current => false);
setDawnIsShown (current => false);
setDawnActive (current => false);
setTempestIsShown (current => false);
setTempestActive (current => false);
setDFOIsShown (current => false);
setDFOActive (current => false);
setGardenIsShown (current => false);
setGardenActive (current => false);
setCoLIsShown (current => false);
setCoLActive (current => false);
setDCIsShown (current => false);
setDCActive (current => false);
setNivaliIsShown (current => false);
setNivaliActive (current => false);
};

const handleDustRegionClick = event => {
setDustRegionIsShown (current => !DustRegionIsShown);
setDustRegionActive (current => !DustRegionActive);
setDesertRegionIsShown (current => false);
setDesertRegionActive (current => false);
setWaterRegionIsShown (current => false);
setWaterRegionActive (current => false);
setForestRegionIsShown (current => false);
setForestRegionActive (current => false);
setLightRegionIsShown (current => false);
setLightRegionActive (current => false);
setWorld2RegionIsShown (current => false);
setWorld2RegionActive (current => false);
setLuciolaForestIsShown (current => false);
setLuciolaForestActive (current => false);
setMamaTreeIsShown (current => false);
setMamaTreeActive (current => false);
setThreePCIsShown (current => false);
setThreePCActive (current => false);
setDragonLairIsShown (current => false);
setDragonLairActive (current => false);
setRizaRivertownIsShown (current => false);
setRizaRivertownActive (current => false);
setRainaIsShown (current => false);
setRainaActive (current => false);
setFloatingCityIsShown (current => false);
setFloatingCityActive (current => false);
setCloudsIsShown (current => false);
setCloudsActive (current => false);
setDawnIsShown (current => false);
setDawnActive (current => false);
setTempestIsShown (current => false);
setTempestActive (current => false);
setDFOIsShown (current => false);
setDFOActive (current => false);
setGardenIsShown (current => false);
setGardenActive (current => false);
setCoLIsShown (current => false);
setCoLActive (current => false);
setDCIsShown (current => false);
setDCActive (current => false);
setNivaliIsShown (current => false);
setNivaliActive (current => false);
};

const handleLightRegionClick = event => {
setLightRegionIsShown (current => !LightRegionIsShown);
setLightRegionActive (current => !LightRegionActive);
setDesertRegionIsShown (current => false);
setDesertRegionActive (current => false);
setWaterRegionIsShown (current => false);
setWaterRegionActive (current => false);
setDustRegionIsShown (current => false);
setDustRegionActive (current => false);
setForestRegionIsShown (current => false);
setForestRegionActive (current => false);
setWorld2RegionIsShown (current => false);
setWorld2RegionActive (current => false);
setLuciolaForestIsShown (current => false);
setLuciolaForestActive (current => false);
setMamaTreeIsShown (current => false);
setMamaTreeActive (current => false);
setThreePCIsShown (current => false);
setThreePCActive (current => false);
setDragonLairIsShown (current => false);
setDragonLairActive (current => false);
setRizaRivertownIsShown (current => false);
setRizaRivertownActive (current => false);
setRainaIsShown (current => false);
setRainaActive (current => false);
setFloatingCityIsShown (current => false);
setFloatingCityActive (current => false);
setCloudsIsShown (current => false);
setCloudsActive (current => false);
setDawnIsShown (current => false);
setDawnActive (current => false);
setTempestIsShown (current => false);
setTempestActive (current => false);
setDFOIsShown (current => false);
setDFOActive (current => false);
setGardenIsShown (current => false);
setGardenActive (current => false);
setCoLIsShown (current => false);
setCoLActive (current => false);
setDCIsShown (current => false);
setDCActive (current => false);
setNivaliIsShown (current => false);
setNivaliActive (current => false);
};

const handleWorld2RegionClick = event => {
setWorld2RegionIsShown (current => !World2RegionIsShown);
setWorld2RegionActive (current => !World2RegionActive);
setDesertRegionIsShown (current => false);
setDesertRegionActive (current => false);
setWaterRegionIsShown (current => false);
setWaterRegionActive (current => false);
setDustRegionIsShown (current => false);
setDustRegionActive (current => false);
setLightRegionIsShown (current => false);
setLightRegionActive (current => false);
setForestRegionIsShown (current => false);
setForestRegionActive (current => false);
setLuciolaForestIsShown (current => false);
setLuciolaForestActive (current => false);
setMamaTreeIsShown (current => false);
setMamaTreeActive (current => false);
setThreePCIsShown (current => false);
setThreePCActive (current => false);
setDragonLairIsShown (current => false);
setDragonLairActive (current => false);
setRizaRivertownIsShown (current => false);
setRizaRivertownActive (current => false);
setRainaIsShown (current => false);
setRainaActive (current => false);
setFloatingCityIsShown (current => false);
setFloatingCityActive (current => false);
setCloudsIsShown (current => false);
setCloudsActive (current => false);
setDawnIsShown (current => false);
setDawnActive (current => false);
setTempestIsShown (current => false);
setTempestActive (current => false);
setDFOIsShown (current => false);
setDFOActive (current => false);
setGardenIsShown (current => false);
setGardenActive (current => false);
setCoLIsShown (current => false);
setCoLActive (current => false);
setDCIsShown (current => false);
setDCActive (current => false);
setNivaliIsShown (current => false);
setNivaliActive (current => false);
};

const handleLuciolaForestClick = event =>{
setLuciolaForestIsShown (current => !LuciolaForestIsShown)
setLuciolaForestActive (current => !LuciolaForestActive)
};

const handleAurilisClick = event =>{
  setAurilisIsShown (current => !AurilisIsShown);
  setAurilisActive (current => !AurilisActive);
};

const handleMamaTreeClick = event =>{
  setMamaTreeIsShown (current => !MamaTreeIsShown);
  setMamaTreeActive (current => !MamaTreeActive);
};

const handleThreePCClick = event =>{
  setThreePCIsShown (current => !ThreePCIsShown);
  setThreePCActive (current => !ThreePCActive);
};
const handleDragonLairClick = event =>{
  setDragonLairIsShown (current => !DragonLairIsShown);
  setDragonLairActive (current => !DragonLairActive);
};

const handleRizaRivertownClick = event =>{
  setRizaRivertownIsShown (current => !RizaRivertownIsShown);
  setRizaRivertownActive (current => !RizaRivertownActive);
};
const handleRainaClick = event =>{
  setRainaIsShown (current => !RainaIsShown);
  setRainaActive (current => !RainaActive);
};
const handleFloatingCityClick = event =>{
  setFloatingCityIsShown (current => !FloatingCityIsShown);
  setFloatingCityActive (current => !FloatingCityActive);
};
const handleCloudsClick = event =>{
  setCloudsIsShown (current => !CloudsIsShown);
  setCloudsActive (current => !CloudsActive);
};
const handleDawnClick = event =>{
  setDawnIsShown (current => !DawnIsShown);
  setDawnActive (current => !DawnActive);
};
const handleTempestClick = event =>{
  setTempestIsShown (current => !TempestIsShown);
  setTempestActive (current => !TempestActive);
};

const handleDFOClick = event =>{
  setDFOIsShown (current => !DFOIsShown);
  setDFOActive (current => !DFOActive);
};
const handleGardenClick = event =>{
  setGardenIsShown (current => !GardenIsShown);
  setGardenActive (current => !GardenActive);
};

const handleCoLClick = event =>{
  setCoLIsShown (current => !CoLIsShown);
  setCoLActive (current => !CoLActive);
};
const handleDCClick = event =>{
  setDCIsShown (current => !DCIsShown);
  setDCActive (current => !DCActive);
};

const handleNivaliClick = event =>{
  setNivaliIsShown (current => !NivaliIsShown);
  setNivaliActive (current => !NivaliActive);
};




//hunt yes/no//

const [HuntAll, setHuntAll] = useState(0)
const [HuntAllIsShown, setHuntAllIsShown] = useState(false)
const [HuntAllActive, setHuntAllActive] = useState(false)

const [HuntSelect, setHuntSelect] = useState(0)
const [HuntSelectIsShown, setHuntSelectIsShown] = useState(false)
const [HuntSelectActive, setHuntSelectActive] = useState(false)

const [HuntNone, setHuntNone] = useState(0)
const [HuntNoneIsShown, setHuntNoneIsShown] = useState(false)
const [HuntNoneActive, setHuntNoneActive] = useState(false)

const [HornsofWisdom, setHornsofWisdom] = useState(0)
const [HornsofWisdomIsShown, setHornsofWisdomIsShown] = useState(false)
const [HornsofWisdomActive, setHornsofWisdomActive] = useState(false)
const [HornsofWisdomAtk, setHornsofWisdomAtk] = useState(0)
const [HornsofWisdomDef, setHornsofWisdomDef] = useState(0)
const [HornsofWisdomLuck, setHornsofWisdomLuck] = useState(0)


const [HeadpieceofOldGold, setHeadpieceofOldGold] = useState(0)
const [HeadpieceofOldGoldIsShown, setHeadpieceofOldGoldIsShown] = useState(false)
const [HeadpieceofOldGoldActive, setHeadpieceofOldGoldActive] = useState(false)
const [HeadpieceofOldGoldAtk, setHeadpieceofOldGoldAtk] = useState(0)
const [HeadpieceofOldGoldDef, setHeadpieceofOldGoldDef] = useState(0)
const [HeadpieceofOldGoldLuck, setHeadpieceofOldGoldLuck] = useState(0)

const [BraceletsofWater, setBraceletsofWater] = useState(0)
const [BraceletsofWaterIsShown, setBraceletsofWaterIsShown] = useState(false)
const [BraceletsofWaterActive, setBraceletsofWaterActive] = useState(false)
const [BraceletsofWaterAtk, setBraceletsofWaterAtk] = useState(0)
const [BraceletsofWaterDef, setBraceletsofWaterDef] = useState(0)
const [BraceletsofWaterLuck, setBraceletsofWaterLuck] = useState(0)

const [StoriedHorns, setStoriedHorns] = useState(0)
const [StoriedHornsIsShown, setStoriedHornsIsShown] = useState(false)
const [StoriedHornsActive, setStoriedHornsActive] = useState(false)
const [StoriedHornsAtk, setStoriedHornsAtk] = useState(0)
const [StoriedHornsDef, setStoriedHornsDef] = useState(0)
const [StoriedHornsLuck, setStoriedHornsLuck] = useState(0)

const handleHornsofWisdomClick = event => {
  setHornsofWisdomIsShown (current => true);
  setHornsofWisdomActive (current => true);
  setHornsofWisdomAtk (value => 2);
  setHornsofWisdomDef (value => 0);
  setHornsofWisdomLuck (value => 14);
  };

const handleHeadpieceofOldGoldClick = event => {
  setHeadpieceofOldGoldIsShown (current => true);
  setHeadpieceofOldGoldActive (current => true);
  setHeadpieceofOldGoldAtk (value => 14);
  setHeadpieceofOldGoldDef (value => 0);
  setHeadpieceofOldGoldLuck (value => 2);
  };

const handleBraceletsofWaterClick = event => {
  setBraceletsofWaterIsShown (current => true);
  setBraceletsofWaterActive (current => true);
  setBraceletsofWaterAtk (value => 2);
  setBraceletsofWaterDef (value => 14);
  setBraceletsofWaterLuck (value => 0);
  };

const handleStoriedHornsClick = event => {
  setStoriedHornsIsShown (current => true);
  setStoriedHornsActive (current => true);
  setStoriedHornsAtk (value => 16);
  setStoriedHornsDef (value => 0);
  setStoriedHornsLuck (value => 0);
  };

//Weapon1 battle items//

const [NoWeapon1, setNoWeapon1] = useState(0)
const [NoWeapon1IsShown, setNoWeapon1IsShown] = useState(false)
const [NoWeapon1Active, setNoWeapon1Active] = useState(false)

//Weapon2 battle items//

const [NoWeapon2, setNoWeapon2] = useState(0)
const [NoWeapon2IsShown, setNoWeapon2IsShown] = useState(false)
const [NoWeapon2Active, setNoWeapon2Active] = useState(false)

const [MountainMace, setMountainMace] = useState(0)
const [MountainMaceIsShown, setMountainMaceIsShown] = useState(false)
const [MountainMaceActive, setMountainMaceActive] = useState(false)
const [MountainMaceAtk, setMountainMaceAtk] = useState(0)
const [MountainMaceDef, setMountainMaceDef] = useState(0)
const [MountainMaceLuck, setMountainMaceLuck] = useState(0)

//Accessory battle items//

const [NoAccessory, setNoAccessory] = useState(0)
const [NoAccessoryIsShown, setNoAccessoryIsShown] = useState(false)
const [NoAccessoryActive, setNoAccessoryActive] = useState(false)

//Helmet battle items//

const [NoHelmet, setNoHelmet] = useState(0)
const [NoHelmetIsShown, setNoHelmetIsShown] = useState(false)
const [NoHelmetActive, setNoHelmetActive] = useState(false)

  //chest battle items//

const [NoChest, setNoChest] = useState(0)
const [NoChestIsShown, setNoChestIsShown] = useState(false)
const [NoChestActive, setNoChestActive] = useState(false)


const [NivaliBreastplate, setNivaliBreastplate] = useState(0)
const [NivaliBreastplateIsShown, setNivaliBreastplateIsShown] = useState(false)
const [NivaliBreastplateActive, setNivaliBreastplateActive] = useState(false)
const [NivaliBreastplateAtk, setNivaliBreastplateAtk] = useState(0)
const [NivaliBreastplateDef, setNivaliBreastplateDef] = useState(0)
const [NivaliBreastplateLuck, setNivaliBreastplateLuck] = useState(0)

const handleNoChestClick = event => {
  setNoChestIsShown (current => !NoChestIsShown);
  setNoChestActive (current => !NoChestActive);
  setNivaliBreastplateIsShown (current => false);
  setNivaliBreastplateActive (current => false);
  setNivaliBreastplateAtk (value => 0);
  setNivaliBreastplateDef (value => 0);
  setNivaliBreastplateLuck (value => 0);
};

const handleMountainMaceClick = event => {
  setMountainMaceIsShown (current => true);
  setMountainMaceActive (current => true);
  setMountainMaceAtk (value => 2);
  setMountainMaceDef (value => 20);
  setMountainMaceLuck (value => 2);
  };

const handleNivaliBreastplateClick = event => {
  setNivaliBreastplateIsShown (current => !NivaliBreastplateIsShown);
  setNivaliBreastplateActive (current => !NivaliBreastplateActive);
  setNivaliBreastplateAtk (value => 0);
  setNivaliBreastplateDef (value => 22);
  setNivaliBreastplateLuck (value => 8);
};


const NivaliBreastplateClick = event => {
  if (!NivaliBreastplateIsShown)
    return (
      setNivaliBreastplateAtk (value => 0),
      setNivaliBreastplateDef (value => 0),
      setNivaliBreastplateLuck (value => 0)
  )
};

//Feet battle items//

const [NoFeet, setNoFeet] = useState(0)
const [NoFeetIsShown, setNoFeetIsShown] = useState(false)
const [NoFeetActive, setNoFeetActive] = useState(false)

const totalBestDefChest = Math.max (NivaliBreastplateDef)

const totalNivaliDef = Math.max (MountainMaceDef + NivaliBreastplateDef, 0)

  return (
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh">
            <Heading>Battle Items Planner</Heading>
            <Container><p>This page shows the best builds for each battle stat, specific to your progress in the game. You can see builds possible for your region of the game or specific to the battle items you currently have.</p></Container>
            <Container><Divider></Divider></Container>
            <Container align='center'>

            <Text mb='8px'>What item builds do you want to see?</Text>
            <VStack>
            <Button variant='outline' onClick= {handleAllClick} style={{ backgroundColor: AllActive ? "#2d1b59" : "transparent" }}>
              All possible for the regions I've unlocked</Button>
            <Button variant='outline' onClick= {handleOwnedClick} style={{ backgroundColor: OwnedActive ? "#2d1b59" : "transparent" }}>
            Specific to the battle items I own
              </Button>

            </VStack>

              <Text mt='25px' mb='8px'>How far into the game are you?</Text>
              <Wrap justify='center'>
              <WrapItem>
              <Button variant='outline' onClick= {handleForestRegionClick} style={{ backgroundColor: ForestRegionActive ? "#2d1b59" : "transparent" }}>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://i.imgur.com/x3k39BC.png'
        mr='12px'
      />      
      <span>Forest Region</span></Button>
      </WrapItem>
              <WrapItem>
              <Button variant='outline' onClick= {handleDesertRegionClick} style={{ backgroundColor: DesertRegionActive ? "#2d1b59" : "transparent" }}>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://i.imgur.com/x3k39BC.png'
        mr='12px'
      />      
      <span>Desert Region</span></Button>
      </WrapItem>
              <WrapItem>
              <Button variant='outline' onClick= {handleWaterRegionClick} style={{ backgroundColor: WaterRegionActive ? "#2d1b59" : "transparent" }}>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://i.imgur.com/x3k39BC.png'
        mr='12px'
      />      
      <span>Water Region</span></Button>
      </WrapItem>
              <WrapItem>
              <Button variant='outline' onClick= {handleDustRegionClick} style={{ backgroundColor: DustRegionActive ? "#2d1b59" : "transparent" }}>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://i.imgur.com/x3k39BC.png'
        mr='12px'
      />      
      <span>Dust Region</span></Button>
      </WrapItem>
              <WrapItem>
              <Button variant='outline' onClick= {handleLightRegionClick} style={{ backgroundColor: LightRegionActive ? "#2d1b59" : "transparent" }}>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://i.imgur.com/x3k39BC.png'
        mr='12px'
      />      
      <span>Light Region</span></Button>
      </WrapItem>
      <WrapItem>
              <Button variant='outline' onClick= {handleWorld2RegionClick} style={{ backgroundColor: World2RegionActive ? "#2d1b59" : "transparent" }}>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://i.imgur.com/x3k39BC.png'
        mr='12px'
      />      
      <span>World 2 Region</span></Button>
      </WrapItem>
      </Wrap>


              <Text mt='25px' mb='8px'>Which locations do you have unlocked?</Text>

              {!ForestRegionIsShown && !DesertRegionIsShown && !WaterRegionIsShown && !DustRegionIsShown && !LightRegionIsShown && !World2RegionIsShown &&
              <Text mb='30px' fontSize='md'><i>Select a region to show all available main and side areas</i></Text>
              }

              {ForestRegionIsShown &&
<Wrap justify='center'>
<WrapItem>
<Button variant='outline' onClick= {handleLuciolaForestClick} style={{ backgroundColor: LuciolaForestActive ? "#2d1b59" : "transparent" }}>
<Image
boxSize='2rem'
borderRadius='full'
src='https://i.imgur.com/x3k39BC.png'
mr='12px'
/>      
<span>Luciola Forest</span></Button>
</WrapItem>
<WrapItem>
<Button variant='outline' onClick= {handleMamaTreeClick} style={{ backgroundColor: MamaTreeActive ? "#2d1b59" : "transparent" }}>
<Image
boxSize='2rem'
borderRadius='full'
src='https://i.imgur.com/x3k39BC.png'
mr='12px'
/>      
<span>Mama Tree</span></Button>
</WrapItem>
</Wrap>
              }
{DesertRegionIsShown &&
  <Wrap justify='center'>
<WrapItem>
<Button variant='outline' onClick= {handleThreePCClick} style={{ backgroundColor: ThreePCActive ? "#2d1b59" : "transparent" }}>
<Image
boxSize='2rem'
borderRadius='full'
src='https://i.imgur.com/x3k39BC.png'
mr='12px'
/>      
<span>Three Points Crossing</span></Button>
</WrapItem>
</Wrap>
}

{WaterRegionIsShown &&
  <Wrap mt='8px' mb='25px' justify='center'>
<WrapItem>
<Button variant='outline' onClick= {handleRizaRivertownClick} style={{ backgroundColor: RizaRivertownActive ? "#2d1b59" : "transparent" }}>
<Image
boxSize='2rem'
borderRadius='full'
src='https://i.imgur.com/x3k39BC.png'
mr='12px'
/>      
<span>Riza Rivertown</span></Button>
</WrapItem>
<WrapItem>
<Button variant='outline' onClick= {handleFloatingCityClick} style={{ backgroundColor: FloatingCityActive ? "#2d1b59" : "transparent" }}>
<Image
boxSize='2rem'
borderRadius='full'
src='https://i.imgur.com/x3k39BC.png'
mr='12px'
/>      
<span>Floating City of Balance</span></Button>
</WrapItem>
</Wrap>
}

{DustRegionIsShown &&
  <Wrap mt='8px' mb='25px' justify='center'>
<WrapItem>
<Button variant='outline' onClick= {handleDFOClick} style={{ backgroundColor: DFOActive ? "#2d1b59" : "transparent" }}>
<Image
boxSize='2rem'
borderRadius='full'
src='https://i.imgur.com/x3k39BC.png'
mr='12px'
/>      
<span>Dark Forest Outpost</span></Button>
</WrapItem>
</Wrap>
}

{LightRegionIsShown &&
  <Wrap mt='8px' mb='25px' justify='center'>
<WrapItem>
<Button variant='outline' onClick= {handleCoLClick} style={{ backgroundColor: CoLActive ? "#2d1b59" : "transparent" }}>
<Image
boxSize='2rem'
borderRadius='full'
src='https://i.imgur.com/x3k39BC.png'
mr='12px'
/>      
<span>City of Light</span></Button>
</WrapItem>
<WrapItem>
<Button variant='outline' onClick= {handleDCClick} style={{ backgroundColor: DCActive ? "#2d1b59" : "transparent" }}>
<Image
boxSize='2rem'
borderRadius='full'
src='https://i.imgur.com/x3k39BC.png'
mr='12px'
/>      
<span>Dusted Castle</span></Button>
</WrapItem>
</Wrap>
}

{World2RegionIsShown &&
  <Wrap mt='8px' mb='25px' justify='center'>
<WrapItem>
<Button variant='outline' onClick= {handleNivaliClick} style={{ backgroundColor: NivaliActive ? "#2d1b59" : "transparent" }}>
<Image
boxSize='2rem'
borderRadius='full'
src='https://i.imgur.com/x3k39BC.png'
mr='12px'
/>      
<span>Nivali</span></Button>
</WrapItem>
</Wrap>
}

{!World2RegionIsShown && !LightRegionIsShown &&
<Text mt='25px' mb='8px'>Which side area(s) do you have unlocked?</Text>
}

{ForestRegionIsShown &&
<Button variant='outline' onClick= {handleAurilisClick} style={{ backgroundColor: AurilisActive ? "#2d1b59" : "transparent" }}>
<Image
boxSize='2rem'
borderRadius='full'
src='https://i.imgur.com/x3k39BC.png'
mr='12px'
/>      
<span>Aurilis Magic Academy</span></Button>
}
{DesertRegionIsShown &&
  <Wrap justify='center'>
  <WrapItem>
<Button variant='outline' onClick= {handleAurilisClick} style={{ backgroundColor: AurilisActive ? "#2d1b59" : "transparent" }}>
<Image
boxSize='2rem'
borderRadius='full'
src='https://i.imgur.com/x3k39BC.png'
mr='12px'
/>      
<span>Aurilis Magic Academy</span></Button>
</WrapItem>
<WrapItem>
<Button variant='outline' onClick= {handleDragonLairClick} style={{ backgroundColor: DragonLairActive ? "#2d1b59" : "transparent" }}>
<Image
boxSize='2rem'
borderRadius='full'
src='https://i.imgur.com/x3k39BC.png'
mr='12px'
/>      
<span>Dragon Lair</span></Button>
</WrapItem>
</Wrap>
}

{WaterRegionIsShown &&
  <Wrap justify='center'>
  <WrapItem>
<Button variant='outline' onClick= {handleAurilisClick} style={{ backgroundColor: AurilisActive ? "#2d1b59" : "transparent" }}>
<Image
boxSize='2rem'
borderRadius='full'
src='https://i.imgur.com/x3k39BC.png'
mr='12px'
/>      
<span>Aurilis Magic Academy</span></Button>
</WrapItem>
<WrapItem>
<Button variant='outline' onClick= {handleDragonLairClick} style={{ backgroundColor: DragonLairActive ? "#2d1b59" : "transparent" }}>
<Image
boxSize='2rem'
borderRadius='full'
src='https://i.imgur.com/x3k39BC.png'
mr='12px'
/>      
<span>Dragon Lair</span></Button>
</WrapItem>
<WrapItem>
<Button variant='outline' onClick= {handleRainaClick} style={{ backgroundColor: RainaActive ? "#2d1b59" : "transparent" }}>
<Image
boxSize='2rem'
borderRadius='full'
src='https://i.imgur.com/x3k39BC.png'
mr='12px'
/>      
<span>Raina</span></Button>
</WrapItem>
<WrapItem>
<Button variant='outline' onClick= {handleCloudsClick} style={{ backgroundColor: CloudsActive ? "#2d1b59" : "transparent" }}>
<Image
boxSize='2rem'
borderRadius='full'
src='https://i.imgur.com/x3k39BC.png'
mr='12px'
/>      
<span>Clouds</span></Button>
</WrapItem>
<WrapItem>
<Button variant='outline' onClick= {handleDawnClick} style={{ backgroundColor: DawnActive ? "#2d1b59" : "transparent" }}>
<Image
boxSize='2rem'
borderRadius='full'
src='https://i.imgur.com/x3k39BC.png'
mr='12px'
/>      
<span>Dawn</span></Button>
</WrapItem>
<WrapItem>
<Button variant='outline' onClick= {handleTempestClick} style={{ backgroundColor: TempestActive ? "#2d1b59" : "transparent" }}>
<Image
boxSize='2rem'
borderRadius='full'
src='https://i.imgur.com/x3k39BC.png'
mr='12px'
/>      
<span>Tempest</span></Button>
</WrapItem>
</Wrap>
}

{DustRegionIsShown &&
  <Wrap justify='center'>
  <WrapItem>
<Button variant='outline' onClick= {handleAurilisClick} style={{ backgroundColor: AurilisActive ? "#2d1b59" : "transparent" }}>
<Image
boxSize='2rem'
borderRadius='full'
src='https://i.imgur.com/x3k39BC.png'
mr='12px'
/>      
<span>Aurilis Magic Academy</span></Button>
</WrapItem>
<WrapItem>
<Button variant='outline' onClick= {handleDragonLairClick} style={{ backgroundColor: DragonLairActive ? "#2d1b59" : "transparent" }}>
<Image
boxSize='2rem'
borderRadius='full'
src='https://i.imgur.com/x3k39BC.png'
mr='12px'
/>      
<span>Dragon Lair</span></Button>
</WrapItem>
<WrapItem>
<Button variant='outline' onClick= {handleRainaClick} style={{ backgroundColor: RainaActive ? "#2d1b59" : "transparent" }}>
<Image
boxSize='2rem'
borderRadius='full'
src='https://i.imgur.com/x3k39BC.png'
mr='12px'
/>      
<span>Raina</span></Button>
</WrapItem>
<WrapItem>
<Button variant='outline' onClick= {handleCloudsClick} style={{ backgroundColor: CloudsActive ? "#2d1b59" : "transparent" }}>
<Image
boxSize='2rem'
borderRadius='full'
src='https://i.imgur.com/x3k39BC.png'
mr='12px'
/>      
<span>Clouds</span></Button>
</WrapItem>
<WrapItem>
<Button variant='outline' onClick= {handleDawnClick} style={{ backgroundColor: DawnActive ? "#2d1b59" : "transparent" }}>
<Image
boxSize='2rem'
borderRadius='full'
src='https://i.imgur.com/x3k39BC.png'
mr='12px'
/>      
<span>Dawn</span></Button>
</WrapItem>
<WrapItem>
<Button variant='outline' onClick= {handleGardenClick} style={{ backgroundColor: GardenActive ? "#2d1b59" : "transparent" }}>
<Image
boxSize='2rem'
borderRadius='full'
src='https://i.imgur.com/x3k39BC.png'
mr='12px'
/>      
<span>Caretaker's Garden</span></Button>
</WrapItem>
<WrapItem>
<Button variant='outline' onClick= {handleTempestClick} style={{ backgroundColor: TempestActive ? "#2d1b59" : "transparent" }}>
<Image
boxSize='2rem'
borderRadius='full'
src='https://i.imgur.com/x3k39BC.png'
mr='12px'
/>      
<span>Tempest</span></Button>
</WrapItem>
</Wrap>
}

              <Text mb='8px'>Include the late-game weapons from the Hunt for the Ancients?</Text>
              <HStack justify='center'>
              <Button>Yes: all of them</Button>
              <Button>Yes: select which one(s)</Button>
              <Button>No</Button>
              </HStack>

              <Button onClick={handleNoChestClick}>No Chest Armor</Button>
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