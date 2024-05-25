import React from 'react';
import { useState,useEffect } from "react";
import {
  ChakraProvider,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
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
  AbsoluteCenter,
} from '@chakra-ui/react';
import { FaBullseye, FaHourglassEnd } from 'react-icons/fa';

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
const [ElderLibraryIsShown, setElderLibraryIsShown] = useState(false)
const [ElderLibraryActive, setElderLibraryActive] = useState(false)

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

const [EarlyCoLIsShown, setEarlyCoLIsShown] = useState(false)
const [EarlyCoLActive, setEarlyCoLActive] = useState(false)

const [LateCoLIsShown, setLateCoLIsShown] = useState(false)
const [LateCoLActive, setLateCoLActive] = useState(false)


const [DCIsShown, setDCIsShown] = useState(false)
const [DCActive, setDCActive] = useState(false)

const [NivaliIsShown, setNivaliIsShown] = useState(false)
const [NivaliActive, setNivaliActive] = useState(false)


const [DesertRegionAllSideRegionsIsShown, setDesertRegionAllSideRegionsIsShown] = useState(false)
const [DesertRegionAllSideRegionsActive, setDesertRegionAllSideRegionsActive] = useState(false)
const [RizaRivertownAllSideRegionsIsShown, setRizaRivertownAllSideRegionsIsShown] = useState(false)
const [RizaRivertownAllSideRegionsActive, setRizaRivertownAllSideRegionsActive] = useState(false)
const [WaterRegionAllSideRegionsIsShown, setWaterRegionAllSideRegionsIsShown] = useState(false)
const [WaterRegionAllSideRegionsActive, setWaterRegionAllSideRegionsActive] = useState(false)
const [DustRegionAllSideRegionsIsShown, setDustRegionAllSideRegionsIsShown] = useState(false)
const [DustRegionAllSideRegionsActive, setDustRegionAllSideRegionsActive] = useState(false)
const [LightRegionAllSideRegionsIsShown, setLightRegionAllSideRegionsIsShown] = useState(false)
const [LightRegionAllSideRegionsActive, setLightRegionAllSideRegionsActive] = useState(false)
const [World2RegionAllSideRegionsIsShown, setWorld2RegionAllSideRegionsIsShown] = useState(false)
const [World2RegionAllSideRegionsActive, setWorld2RegionAllSideRegionsActive] = useState(false)

const [DesertRegionNoneSideRegionsIsShown, setDesertRegionNoneSideRegionsIsShown] = useState(false)
const [DesertRegionNoneSideRegionsActive, setDesertRegionNoneSideRegionsActive] = useState(false)
const [RizaRivertownNoneSideRegionsIsShown, setRizaRivertownNoneSideRegionsIsShown] = useState(false)
const [RizaRivertownNoneSideRegionsActive, setRizaRivertownNoneSideRegionsActive] = useState(false)
const [WaterRegionNoneSideRegionsIsShown, setWaterRegionNoneSideRegionsIsShown] = useState(false)
const [WaterRegionNoneSideRegionsActive, setWaterRegionNoneSideRegionsActive] = useState(false)
const [DustRegionNoneSideRegionsIsShown, setDustRegionNoneSideRegionsIsShown] = useState(false)
const [DustRegionNoneSideRegionsActive, setDustRegionNoneSideRegionsActive] = useState(false)
const [LightRegionNoneSideRegionsIsShown, setLightRegionNoneSideRegionsIsShown] = useState(false)
const [LightRegionNoneSideRegionsActive, setLightRegionNoneSideRegionsActive] = useState(false)
const [World2RegionNoneSideRegionsIsShown, setWorld2RegionNoneSideRegionsIsShown] = useState(false)
const [World2RegionNoneSideRegionsActive, setWorld2RegionNoneSideRegionsActive] = useState(false)

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
setDesertRegionAllSideRegionsIsShown (current => false);
setDesertRegionAllSideRegionsActive (current => false);
setWaterRegionAllSideRegionsIsShown (current => false);
setWaterRegionAllSideRegionsActive (current => false);
setDustRegionAllSideRegionsIsShown (current => false);
setDustRegionAllSideRegionsActive (current => false);
setLightRegionAllSideRegionsIsShown (current => false);
setLightRegionAllSideRegionsActive (current => false);
setWorld2RegionAllSideRegionsIsShown (current => false);
setWorld2RegionAllSideRegionsActive (current => false);
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
setEarlyCoLIsShown (current => false);
setEarlyCoLActive (current => false);
setLateCoLIsShown (current => false);
setLateCoLActive (current => false);
setDCIsShown (current => false);
setDCActive (current => false);
setNivaliIsShown (current => false);
setNivaliActive (current => false);
setAurilisIsShown (current => false);
setAurilisActive (current => false);
setElderLibraryIsShown (current => false);
setElderLibraryActive (current => false);
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
setDesertRegionAllSideRegionsIsShown (current => false);
setDesertRegionAllSideRegionsActive (current => false);
setWaterRegionAllSideRegionsIsShown (current => false);
setWaterRegionAllSideRegionsActive (current => false);
setDustRegionAllSideRegionsIsShown (current => false);
setDustRegionAllSideRegionsActive (current => false);
setLightRegionAllSideRegionsIsShown (current => false);
setLightRegionAllSideRegionsActive (current => false);
setWorld2RegionAllSideRegionsIsShown (current => false);
setWorld2RegionAllSideRegionsActive (current => false);
setLuciolaForestIsShown (current => false);
setLuciolaForestActive (current => false);
setMamaTreeIsShown (current => false);
setMamaTreeActive (current => false);
setThreePCIsShown (current => true);
setThreePCActive (current => true);
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
setEarlyCoLIsShown (current => false);
setEarlyCoLActive (current => false);
setLateCoLIsShown (current => false);
setLateCoLActive (current => false);
setDCIsShown (current => false);
setDCActive (current => false);
setNivaliIsShown (current => false);
setNivaliActive (current => false);
setAurilisIsShown (current => false);
setAurilisActive (current => false);
setElderLibraryIsShown (current => false);
setElderLibraryActive (current => false);
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
setWaterRegionAllSideRegionsIsShown (current => false);
setWaterRegionAllSideRegionsActive (current => false);
setDustRegionAllSideRegionsIsShown (current => false);
setDustRegionAllSideRegionsActive (current => false);
setLightRegionAllSideRegionsIsShown (current => false);
setLightRegionAllSideRegionsActive (current => false);
setWorld2RegionAllSideRegionsIsShown (current => false);
setWorld2RegionAllSideRegionsActive (current => false);
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
setEarlyCoLIsShown (current => false);
setEarlyCoLActive (current => false);
setLateCoLIsShown (current => false);
setLateCoLActive (current => false);
setDCIsShown (current => false);
setDCActive (current => false);
setNivaliIsShown (current => false);
setNivaliActive (current => false);
setAurilisIsShown (current => false);
setAurilisActive (current => false);
setElderLibraryIsShown (current => false);
setElderLibraryActive (current => false);
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
setDustRegionAllSideRegionsIsShown (current => false);
setDustRegionAllSideRegionsActive (current => false);
setLightRegionAllSideRegionsIsShown (current => false);
setLightRegionAllSideRegionsActive (current => false);
setWorld2RegionAllSideRegionsIsShown (current => false);
setWorld2RegionAllSideRegionsActive (current => false);
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
setDFOIsShown (current => true);
setDFOActive (current => true);
setGardenIsShown (current => false);
setGardenActive (current => false);
setCoLIsShown (current => false);
setCoLActive (current => false);
setEarlyCoLIsShown (current => false);
setEarlyCoLActive (current => false);
setLateCoLIsShown (current => false);
setLateCoLActive (current => false);
setDCIsShown (current => false);
setDCActive (current => false);
setNivaliIsShown (current => false);
setNivaliActive (current => false);
setAurilisIsShown (current => false);
setAurilisActive (current => false);
setElderLibraryIsShown (current => false);
setElderLibraryActive (current => false);
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
setLightRegionAllSideRegionsIsShown (current => false);
setLightRegionAllSideRegionsActive (current => false);
setWorld2RegionAllSideRegionsIsShown (current => false);
setWorld2RegionAllSideRegionsActive (current => false);
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
setEarlyCoLIsShown (current => false);
setEarlyCoLActive (current => false);
setLateCoLIsShown (current => false);
setLateCoLActive (current => false);
setDCIsShown (current => false);
setDCActive (current => false);
setNivaliIsShown (current => false);
setNivaliActive (current => false);
setAurilisIsShown (current => false);
setAurilisActive (current => false);
setElderLibraryIsShown (current => false);
setElderLibraryActive (current => false);
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
setWorld2RegionAllSideRegionsIsShown (current => false);
setWorld2RegionAllSideRegionsActive (current => false);
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
setEarlyCoLIsShown (current => false);
setEarlyCoLActive (current => false);
setLateCoLIsShown (current => false);
setLateCoLActive (current => false);
setDCIsShown (current => false);
setDCActive (current => false);
setNivaliIsShown (current => true);
setNivaliActive (current => true);
setAurilisIsShown (current => false);
setAurilisActive (current => false);
setElderLibraryIsShown (current => false);
setElderLibraryActive (current => false);
};

// ^^^ change the nivali one when new world 2 region releases//

const handleLuciolaForestClick = event =>{
setLuciolaForestIsShown (current => !LuciolaForestIsShown)
setLuciolaForestActive (current => !LuciolaForestActive)
setMamaTreeIsShown (current => false);
setMamaTreeActive (current => false);

};

const handleAurilisClick = event =>{
  setAurilisIsShown (current => !AurilisIsShown);
  setAurilisActive (current => !AurilisActive);

};

const handleMamaTreeClick = event =>{
  setMamaTreeIsShown (current => !MamaTreeIsShown);
  setMamaTreeActive (current => !MamaTreeActive);
  setLuciolaForestIsShown (current => false)
  setLuciolaForestActive (current => false)
};

const handleElderLibraryClick = event =>{
  setElderLibraryIsShown (current => !ElderLibraryIsShown);
  setElderLibraryActive (current => !ElderLibraryActive);

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
  setFloatingCityIsShown (current => false);
  setFloatingCityActive (current => false);
  setAurilisIsShown (current => false);
  setAurilisActive (current => false);
  setElderLibraryIsShown (current => false);
  setElderLibraryActive (current => false);
  setDragonLairIsShown (current => false);
  setDragonLairActive (current => false);
  setRainaIsShown (current => false);
  setRainaActive (current => false);
  setCloudsIsShown (current => false);
  setCloudsActive (current => false);
  setDawnIsShown (current => false);
  setDawnActive (current => false);
  setTempestIsShown (current => false);
  setTempestActive (current => false);
  setRizaRivertownNoneSideRegionsIsShown (current => false);
  setRizaRivertownNoneSideRegionsActive (current => false);
  setRizaRivertownAllSideRegionsIsShown (current => false);
  setRizaRivertownAllSideRegionsActive (current => false);
  setWaterRegionNoneSideRegionsIsShown (current => false);
  setWaterRegionNoneSideRegionsActive (current => false);
  setWaterRegionAllSideRegionsIsShown (current => false);
  setWaterRegionAllSideRegionsActive (current => false);
};
const handleRainaClick = event =>{
  setRainaIsShown (current => !RainaIsShown);
  setRainaActive (current => !RainaActive);
};
const handleFloatingCityClick = event =>{
  setFloatingCityIsShown (current => !FloatingCityIsShown);
  setFloatingCityActive (current => !FloatingCityActive);
  setRizaRivertownIsShown (current => false);
  setRizaRivertownActive (current => false);
  setAurilisIsShown (current => false);
  setAurilisActive (current => false);
  setElderLibraryIsShown (current => false);
  setElderLibraryActive (current => false);
  setDragonLairIsShown (current => false);
  setDragonLairActive (current => false);
  setRainaIsShown (current => false);
  setRainaActive (current => false);
  setCloudsIsShown (current => false);
  setCloudsActive (current => false);
  setDawnIsShown (current => false);
  setDawnActive (current => false);
  setTempestIsShown (current => false);
  setTempestActive (current => false);
  setRizaRivertownNoneSideRegionsIsShown (current => false);
  setRizaRivertownNoneSideRegionsActive (current => false);
  setRizaRivertownAllSideRegionsIsShown (current => false);
  setRizaRivertownAllSideRegionsActive (current => false);
  setWaterRegionNoneSideRegionsIsShown (current => false);
  setWaterRegionNoneSideRegionsActive (current => false);
  setWaterRegionAllSideRegionsIsShown (current => false);
  setWaterRegionAllSideRegionsActive (current => false);
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

const handleEarlyCoLClick = event =>{
  setEarlyCoLIsShown (current => !EarlyCoLIsShown);
  setEarlyCoLActive (current => !EarlyCoLActive);
  setLateCoLIsShown (current => false);
  setLateCoLActive (current => false);
  setAurilisIsShown (current => false);
  setAurilisActive (current => false);
  setElderLibraryIsShown (current => false);
  setElderLibraryActive (current => false);
  setDragonLairIsShown (current => false);
  setDragonLairActive (current => false);
  setRainaIsShown (current => false);
  setRainaActive (current => false);
  setCloudsIsShown (current => false);
  setCloudsActive (current => false);
  setDawnIsShown (current => false);
  setDawnActive (current => false);
  setTempestIsShown (current => false);
  setTempestActive (current => false);
  setGardenIsShown (current => false);
  setGardenActive (current => false);
};

const handleLateCoLClick = event =>{
  setLateCoLIsShown (current => !LateCoLIsShown);
  setLateCoLActive (current => !LateCoLActive);
  setEarlyCoLIsShown (current => false);
  setEarlyCoLActive (current => false);
  setAurilisIsShown (current => false);
  setAurilisActive (current => false);
  setElderLibraryIsShown (current => false);
  setElderLibraryActive (current => false);
  setDragonLairIsShown (current => false);
  setDragonLairActive (current => false);
  setRainaIsShown (current => false);
  setRainaActive (current => false);
  setCloudsIsShown (current => false);
  setCloudsActive (current => false);
  setDawnIsShown (current => false);
  setDawnActive (current => false);
  setTempestIsShown (current => false);
  setTempestActive (current => false);
  setGardenIsShown (current => false);
  setGardenActive (current => false);
};

const handleDCClick = event =>{
  setDCIsShown (current => !DCIsShown);
  setDCActive (current => !DCActive);
};

const handleNivaliClick = event =>{
  setNivaliIsShown (current => !NivaliIsShown);
  setNivaliActive (current => !NivaliActive);
};


const handleDesertRegionAllSideRegionsClick = event =>{
  setDesertRegionAllSideRegionsIsShown (current => true);
  setDesertRegionAllSideRegionsActive (current => true);
  setDesertRegionNoneSideRegionsIsShown (current => false);
  setDesertRegionNoneSideRegionsActive (current => false);
  setAurilisIsShown (current => true);
  setAurilisActive (current => true);
  setElderLibraryIsShown (current => true);
  setElderLibraryActive (current => true);
  setDragonLairIsShown (current => true);
  setDragonLairActive (current => true);
};

const handleRizaRivertownAllSideRegionsClick = event =>{
  setRizaRivertownAllSideRegionsIsShown (current => true);
  setRizaRivertownAllSideRegionsActive (current => true);
  setRizaRivertownNoneSideRegionsIsShown (current => false);
  setRizaRivertownNoneSideRegionsActive (current => false);
  setAurilisIsShown (current => true);
  setAurilisActive (current => true);
  setElderLibraryIsShown (current => true);
  setElderLibraryActive (current => true);
  setDragonLairIsShown (current => true);
  setDragonLairActive (current => true);
  setRainaIsShown (current => true);
  setRainaActive (current => true);
};

const handleWaterRegionAllSideRegionsClick = event =>{
  setWaterRegionAllSideRegionsIsShown (current => true);
  setWaterRegionAllSideRegionsActive (current => true);
  setWaterRegionNoneSideRegionsIsShown (current => false);
  setWaterRegionNoneSideRegionsActive (current => false);
  setAurilisIsShown (current => true);
  setAurilisActive (current => true);
  setElderLibraryIsShown (current => true);
  setElderLibraryActive (current => true);
  setDragonLairIsShown (current => true);
  setDragonLairActive (current => true);
  setRainaIsShown (current => true);
  setRainaActive (current => true);
  setCloudsIsShown (current => true);
  setCloudsActive (current => true);
  setDawnIsShown (current => true);
  setDawnActive (current => true);
  setTempestIsShown (current => true);
  setTempestActive (current => true);
};

const handleDustRegionAllSideRegionsClick = event =>{
  setDustRegionAllSideRegionsIsShown (current => true);
  setDustRegionAllSideRegionsActive (current => true);
  setDustRegionNoneSideRegionsIsShown (current => false);
  setDustRegionNoneSideRegionsActive (current => false);
  setAurilisIsShown (current => true);
  setAurilisActive (current => true);
  setElderLibraryIsShown (current => true);
  setElderLibraryActive (current => true);
  setDragonLairIsShown (current => true);
  setDragonLairActive (current => true);
  setRainaIsShown (current => true);
  setRainaActive (current => true);
  setCloudsIsShown (current => true);
  setCloudsActive (current => true);
  setDawnIsShown (current => true);
  setDawnActive (current => true);
  setTempestIsShown (current => true);
  setTempestActive (current => true);
  setGardenIsShown (current => true);
  setGardenActive (current => true);
};


const handleWorld2RegionAllSideRegionsClick = event =>{
  setWorld2RegionAllSideRegionsIsShown (current => true);
  setWorld2RegionAllSideRegionsActive (current => true);
  setWorld2RegionNoneSideRegionsIsShown (current => false);
  setWorld2RegionNoneSideRegionsActive (current => false);
  setAurilisIsShown (current => true);
  setAurilisActive (current => true);
  setElderLibraryIsShown (current => true);
  setElderLibraryActive (current => true);
  setDragonLairIsShown (current => true);
  setDragonLairActive (current => true);
  setRainaIsShown (current => true);
  setRainaActive (current => true);
  setCloudsIsShown (current => true);
  setCloudsActive (current => true);
  setDawnIsShown (current => true);
  setDawnActive (current => true);
  setTempestIsShown (current => true);
  setTempestActive (current => true);
  setGardenIsShown (current => true);
  setGardenActive (current => true);
};

const handleDesertRegionNoneSideRegionsClick = event =>{
  setDesertRegionNoneSideRegionsIsShown (current => false);
  setDesertRegionNoneSideRegionsActive (current => false);
  setDesertRegionAllSideRegionsIsShown (current => false);
  setDesertRegionAllSideRegionsActive (current => false);
  setAurilisIsShown (current => false);
  setAurilisActive (current => false);
  setElderLibraryIsShown (current => false);
  setElderLibraryActive (current => false);
  setDragonLairIsShown (current => false);
  setDragonLairActive (current => false);
};

const handleRizaRivertownNoneSideRegionsClick = event =>{
  setRizaRivertownNoneSideRegionsIsShown (current => false);
  setRizaRivertownNoneSideRegionsActive (current => false);
  setRizaRivertownAllSideRegionsIsShown (current => false);
  setRizaRivertownAllSideRegionsActive (current => false);
  setAurilisIsShown (current => false);
  setAurilisActive (current => false);
  setElderLibraryIsShown (current => false);
  setElderLibraryActive (current => false);
  setDragonLairIsShown (current => false);
  setDragonLairActive (current => false);
  setRainaIsShown (current => false);
  setRainaActive (current => false);
};

const handleWaterRegionNoneSideRegionsClick = event =>{
  setWaterRegionNoneSideRegionsIsShown (current => false);
  setWaterRegionNoneSideRegionsActive (current => false);
  setWaterRegionAllSideRegionsIsShown (current => false);
  setWaterRegionAllSideRegionsActive (current => false);
  setAurilisIsShown (current => false);
  setAurilisActive (current => false);
  setElderLibraryIsShown (current => false);
  setElderLibraryActive (current => false);
  setDragonLairIsShown (current => false);
  setDragonLairActive (current => false);
  setRainaIsShown (current => false);
  setRainaActive (current => false);
  setCloudsIsShown (current => false);
  setCloudsActive (current => false);
  setDawnIsShown (current => false);
  setDawnActive (current => false);
  setTempestIsShown (current => false);
  setTempestActive (current => false);
};

const handleDustRegionNoneSideRegionsClick = event =>{
  setDustRegionNoneSideRegionsIsShown (current => false);
  setDustRegionNoneSideRegionsActive (current => false);
  setDustRegionAllSideRegionsIsShown (current => false);
  setDustRegionAllSideRegionsActive (current => false);
  setAurilisIsShown (current => false);
  setAurilisActive (current => false);
  setElderLibraryIsShown (current => false);
  setElderLibraryActive (current => false);
  setDragonLairIsShown (current => false);
  setDragonLairActive (current => false);
  setRainaIsShown (current => false);
  setRainaActive (current => false);
  setCloudsIsShown (current => false);
  setCloudsActive (current => false);
  setDawnIsShown (current => false);
  setDawnActive (current => false);
  setTempestIsShown (current => false);
  setTempestActive (current => false);
  setGardenIsShown (current => false);
  setGardenActive (current => false);
};

const handleWorld2RegionNoneSideRegionsClick = event =>{
  setWorld2RegionNoneSideRegionsIsShown (current => false);
  setWorld2RegionNoneSideRegionsActive (current => false);
  setWorld2RegionAllSideRegionsIsShown (current => false);
  setWorld2RegionAllSideRegionsActive (current => false);
  setAurilisIsShown (current => false);
  setAurilisActive (current => false);
  setElderLibraryIsShown (current => false);
  setElderLibraryActive (current => false);
  setDragonLairIsShown (current => false);
  setDragonLairActive (current => false);
  setRainaIsShown (current => false);
  setRainaActive (current => false);
  setCloudsIsShown (current => false);
  setCloudsActive (current => false);
  setDawnIsShown (current => false);
  setDawnActive (current => false);
  setTempestIsShown (current => false);
  setTempestActive (current => false);
  setGardenIsShown (current => false);
  setGardenActive (current => false);
  setEarlyCoLIsShown (current => false);
  setEarlyCoLActive (current => false);
  setLateCoLIsShown (current => false);
  setLateCoLActive (current => false);
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

//companion slots//

const [NoCompanionIsShown, setNoCompanionIsShown] = useState(false)
const [NoCompanionActive, setNoCompanionActive] = useState(false)

const [SuwoIsShown, setSuwoIsShown] = useState(false)
const [SuwoActive, setSuwoActive] = useState(false)
const [SuwoAtk, setSuwoAtk] = useState(0)
const [SuwoDef, setSuwoDef] = useState(0)
const [SuwoLuck, setSuwoLuck] = useState(0)

const [AzadiIsShown, setAzadiIsShown] = useState(false)
const [AzadiActive, setAzadiActive] = useState(false)
const [AzadiAtk, setAzadiAtk] = useState(0)
const [AzadiDef, setAzadiDef] = useState(0)
const [AzadiLuck, setAzadiLuck] = useState(0)

const [LodoIsShown, setLodoIsShown] = useState(false)
const [LodoActive, setLodoActive] = useState(false)
const [LodoAtk, setLodoAtk] = useState(0)
const [LodoDef, setLodoDef] = useState(0)
const [LodoLuck, setLodoLuck] = useState(0)

const [NoanzaIsShown, setNoanzaIsShown] = useState(false)
const [NoanzaActive, setNoanzaActive] = useState(false)
const [NoanzaAtk, setNoanzaAtk] = useState(0)
const [NoanzaDef, setNoanzaDef] = useState(0)
const [NoanzaLuck, setNoanzaLuck] = useState(0)

const [KaiszarIsShown, setKaiszarIsShown] = useState(false)
const [KaiszarActive, setKaiszarActive] = useState(false)
const [KaiszarAtk, setKaiszarAtk] = useState(0)
const [KaiszarDef, setKaiszarDef] = useState(0)
const [KaiszarLuck, setKaiszarLuck] = useState(0)

const [LoksiIsShown, setLoksiIsShown] = useState(false)
const [LoksiActive, setLoksiActive] = useState(false)
const [LoksiAtk, setLoksiAtk] = useState(0)
const [LoksiDef, setLoksiDef] = useState(0)
const [LoksiLuck, setLoksiLuck] = useState(0)

const [ThalamarisIsShown, setThalamarisIsShown] = useState(false)
const [ThalamarisActive, setThalamarisActive] = useState(false)
const [ThalamarisAtk, setThalamarisAtk] = useState(0)
const [ThalamarisDef, setThalamarisDef] = useState(0)
const [ThalamarisLuck, setThalamarisLuck] = useState(0)

const [ValkosIsShown, setValkosIsShown] = useState(false)
const [ValkosActive, setValkosActive] = useState(false)
const [ValkosAtk, setValkosAtk] = useState(0)
const [ValkosDef, setValkosDef] = useState(0)
const [ValkosLuck, setValkosLuck] = useState(0)

const [EenrisIsShown, setEenrisIsShown] = useState(false)
const [EenrisActive, setEenrisActive] = useState(false)
const [EenrisAtk, setEenrisAtk] = useState(0)
const [EenrisDef, setEenrisDef] = useState(0)
const [EenrisLuck, setEenrisLuck] = useState(0)

const [RairaselIsShown, setRairaselIsShown] = useState(false)
const [RairaselActive, setRairaselActive] = useState(false)
const [RairaselAtk, setRairaselAtk] = useState(0)
const [RairaselDef, setRairaselDef] = useState(0)
const [RairaselLuck, setRairaselLuck] = useState(0)

const [AlderbamIsShown, setAlderbamIsShown] = useState(false)
const [AlderbamActive, setAlderbamActive] = useState(false)
const [AlderbamAtk, setAlderbamAtk] = useState(0)
const [AlderbamDef, setAlderbamDef] = useState(0)
const [AlderbamLuck, setAlderbamLuck] = useState(0)

const [ChysisIsShown, setChysisIsShown] = useState(false)
const [ChysisActive, setChysisActive] = useState(false)
const [ChysisAtk, setChysisAtk] = useState(0)
const [ChysisDef, setChysisDef] = useState(0)
const [ChysisLuck, setChysisLuck] = useState(0)

const [MundIsShown, setMundIsShown] = useState(false)
const [MundActive, setMundActive] = useState(false)
const [MundAtk, setMundAtk] = useState(0)
const [MundDef, setMundDef] = useState(0)
const [MundLuck, setMundLuck] = useState(0)

const [WhodiniIsShown, setWhodiniIsShown] = useState(false)
const [WhodiniActive, setWhodiniActive] = useState(false)
const [WhodiniAtk, setWhodiniAtk] = useState(0)
const [WhodiniDef, setWhodiniDef] = useState(0)
const [WhodiniLuck, setWhodiniLuck] = useState(0)

const [AtkKaiszarIsShown, setAtkKaiszarIsShown] = useState(false)
const [AtkKaiszarActive, setAtkKaiszarActive] = useState(false)
const [AtkKaiszarAtk, setAtkKaiszarAtk] = useState(0)
const [AtkKaiszarDef, setAtkKaiszarDef] = useState(0)
const [AtkKaiszarLuck, setAtkKaiszarLuck] = useState(0)

const [DefKaiszarIsShown, setDefKaiszarIsShown] = useState(false)
const [DefKaiszarActive, setDefKaiszarActive] = useState(false)
const [DefKaiszarAtk, setDefKaiszarAtk] = useState(0)
const [DefKaiszarDef, setDefKaiszarDef] = useState(0)
const [DefKaiszarLuck, setDefKaiszarLuck] = useState(0)

const [LuckKaiszarIsShown, setLuckKaiszarIsShown] = useState(false)
const [LuckKaiszarActive, setLuckKaiszarActive] = useState(false)
const [LuckKaiszarAtk, setLuckKaiszarAtk] = useState(0)
const [LuckKaiszarDef, setLuckKaiszarDef] = useState(0)
const [LuckKaiszarLuck, setLuckKaiszarLuck] = useState(0)

const [AtkLoksiIsShown, setAtkLoksiIsShown] = useState(false)
const [AtkLoksiActive, setAtkLoksiActive] = useState(false)
const [AtkLoksiAtk, setAtkLoksiAtk] = useState(0)
const [AtkLoksiDef, setAtkLoksiDef] = useState(0)
const [AtkLoksiLuck, setAtkLoksiLuck] = useState(0)

const [DefLoksiIsShown, setDefLoksiIsShown] = useState(false)
const [DefLoksiActive, setDefLoksiActive] = useState(false)
const [DefLoksiAtk, setDefLoksiAtk] = useState(0)
const [DefLoksiDef, setDefLoksiDef] = useState(0)
const [DefLoksiLuck, setDefLoksiLuck] = useState(0)

const [LuckLoksiIsShown, setLuckLoksiIsShown] = useState(false)
const [LuckLoksiActive, setLuckLoksiActive] = useState(false)
const [LuckLoksiAtk, setLuckLoksiAtk] = useState(0)
const [LuckLoksiDef, setLuckLoksiDef] = useState(0)
const [LuckLoksiLuck, setLuckLoksiLuck] = useState(0)

const [AtkThalamarisIsShown, setAtkThalamarisIsShown] = useState(false)
const [AtkThalamarisActive, setAtkThalamarisActive] = useState(false)
const [AtkThalamarisAtk, setAtkThalamarisAtk] = useState(0)
const [AtkThalamarisDef, setAtkThalamarisDef] = useState(0)
const [AtkThalamarisLuck, setAtkThalamarisLuck] = useState(0)

const [DefThalamarisIsShown, setDefThalamarisIsShown] = useState(false)
const [DefThalamarisActive, setDefThalamarisActive] = useState(false)
const [DefThalamarisAtk, setDefThalamarisAtk] = useState(0)
const [DefThalamarisDef, setDefThalamarisDef] = useState(0)
const [DefThalamarisLuck, setDefThalamarisLuck] = useState(0)

const [LuckThalamarisIsShown, setLuckThalamarisIsShown] = useState(false)
const [LuckThalamarisActive, setLuckThalamarisActive] = useState(false)
const [LuckThalamarisAtk, setLuckThalamarisAtk] = useState(0)
const [LuckThalamarisDef, setLuckThalamarisDef] = useState(0)
const [LuckThalamarisLuck, setLuckThalamarisLuck] = useState(0)

const [AtkValkosIsShown, setAtkValkosIsShown] = useState(false)
const [AtkValkosActive, setAtkValkosActive] = useState(false)
const [AtkValkosAtk, setAtkValkosAtk] = useState(0)
const [AtkValkosDef, setAtkValkosDef] = useState(0)
const [AtkValkosLuck, setAtkValkosLuck] = useState(0)

const [DefValkosIsShown, setDefValkosIsShown] = useState(false)
const [DefValkosActive, setDefValkosActive] = useState(false)
const [DefValkosAtk, setDefValkosAtk] = useState(0)
const [DefValkosDef, setDefValkosDef] = useState(0)
const [DefValkosLuck, setDefValkosLuck] = useState(0)

const [LuckValkosIsShown, setLuckValkosIsShown] = useState(false)
const [LuckValkosActive, setLuckValkosActive] = useState(false)
const [LuckValkosAtk, setLuckValkosAtk] = useState(0)
const [LuckValkosDef, setLuckValkosDef] = useState(0)
const [LuckValkosLuck, setLuckValkosLuck] = useState(0)

const [AtkEenrisIsShown, setAtkEenrisIsShown] = useState(false)
const [AtkEenrisActive, setAtkEenrisActive] = useState(false)
const [AtkEenrisAtk, setAtkEenrisAtk] = useState(0)
const [AtkEenrisDef, setAtkEenrisDef] = useState(0)
const [AtkEenrisLuck, setAtkEenrisLuck] = useState(0)

const [DefEenrisIsShown, setDefEenrisIsShown] = useState(false)
const [DefEenrisActive, setDefEenrisActive] = useState(false)
const [DefEenrisAtk, setDefEenrisAtk] = useState(0)
const [DefEenrisDef, setDefEenrisDef] = useState(0)
const [DefEenrisLuck, setDefEenrisLuck] = useState(0)

const [LuckEenrisIsShown, setLuckEenrisIsShown] = useState(false)
const [LuckEenrisActive, setLuckEenrisActive] = useState(false)
const [LuckEenrisAtk, setLuckEenrisAtk] = useState(0)
const [LuckEenrisDef, setLuckEenrisDef] = useState(0)
const [LuckEenrisLuck, setLuckEenrisLuck] = useState(0)

const [AtkRairaselIsShown, setAtkRairaselIsShown] = useState(false)
const [AtkRairaselActive, setAtkRairaselActive] = useState(false)
const [AtkRairaselAtk, setAtkRairaselAtk] = useState(0)
const [AtkRairaselDef, setAtkRairaselDef] = useState(0)
const [AtkRairaselLuck, setAtkRairaselLuck] = useState(0)

const [DefRairaselIsShown, setDefRairaselIsShown] = useState(false)
const [DefRairaselActive, setDefRairaselActive] = useState(false)
const [DefRairaselAtk, setDefRairaselAtk] = useState(0)
const [DefRairaselDef, setDefRairaselDef] = useState(0)
const [DefRairaselLuck, setDefRairaselLuck] = useState(0)

const [LuckRairaselIsShown, setLuckRairaselIsShown] = useState(false)
const [LuckRairaselActive, setLuckRairaselActive] = useState(false)
const [LuckRairaselAtk, setLuckRairaselAtk] = useState(0)
const [LuckRairaselDef, setLuckRairaselDef] = useState(0)
const [LuckRairaselLuck, setLuckRairaselLuck] = useState(0)

const handleKaiszarClick = event => {
  setKaiszarIsShown (current => !KaiszarIsShown);
  setKaiszarActive (current => !KaiszarActive);
  setKaiszarAtk (value => 16);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);
  };

const handleAtkKaiszarClick = event => {
  setAtkKaiszarIsShown (current => !AtkKaiszarIsShown);
  setAtkKaiszarActive (current => !AtkKaiszarIsShown);
  setAtkKaiszarAtk (value => 16);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setKaiszarIsShown (current => true);
  setKaiszarActive (current => true);
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);
  };

const handleDefKaiszarClick = event => {
  setDefKaiszarIsShown (current => !DefKaiszarIsShown);
  setDefKaiszarActive (current => !DefKaiszarIsShown);
  setDefKaiszarAtk (value => 12);
  setDefKaiszarDef (value => 4);
  setDefKaiszarLuck (value => 0);
  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);
  setKaiszarIsShown (current => true);
  setKaiszarActive (current => true);
  };

const handleLuckKaiszarClick = event => {
  setLuckKaiszarIsShown (current => !LuckKaiszarIsShown);
  setLuckKaiszarActive (current => !LuckKaiszarIsShown);
  setLuckKaiszarAtk (value => 12);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 4);
  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setKaiszarIsShown (current => true);
  setKaiszarActive (current => true);
  };

const handleLoksiClick = event => {
  setLoksiIsShown (current => !LoksiIsShown);
  setLoksiActive (current => !LoksiActive);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 12);
  setLoksiLuck (value => 0);
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  };

const handleAtkLoksiClick = event => {
  setAtkLoksiIsShown (current => !AtkLoksiIsShown);
  setAtkLoksiActive (current => !AtkLoksiIsShown);
  setAtkLoksiAtk (value => 4);
  setAtkLoksiDef (value => 12);
  setAtkLoksiLuck (value => 0);
  setLoksiIsShown (current => true);
  setLoksiActive (current => true);
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  };

const handleDefLoksiClick = event => {
  setDefLoksiIsShown (current => !DefLoksiIsShown);
  setDefLoksiActive (current => !DefLoksiIsShown);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 16);
  setDefLoksiLuck (value => 0);
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  setLoksiIsShown (current => true);
  setLoksiActive (current => true);
  };

const handleLuckLoksiClick = event => {
  setLuckLoksiIsShown (current => !LuckLoksiIsShown);
  setLuckLoksiActive (current => !LuckLoksiIsShown);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 12);
  setLuckLoksiLuck (value => 4);
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setLoksiIsShown (current => true);
  setLoksiActive (current => true);
  };

const handleThalamarisClick = event => {
  setThalamarisIsShown (current => !ThalamarisIsShown);
  setThalamarisActive (current => !ThalamarisActive);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 12);
  setAtkThalamarisIsShown (current => false);
  setAtkThalamarisActive (current => false);
  setDefThalamarisIsShown (current => false);
  setDefThalamarisActive (current => false);
  setLuckThalamarisIsShown (current => false);
  setLuckThalamarisActive (current => false);
  };

const handleAtkThalamarisClick = event => {
  setAtkThalamarisIsShown (current => !AtkThalamarisIsShown);
  setAtkThalamarisActive (current => !AtkThalamarisIsShown);
  setAtkThalamarisAtk (value => 4);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 12);
  setThalamarisIsShown (current => true);
  setThalamarisActive (current => true);
  setDefThalamarisIsShown (current => false);
  setDefThalamarisActive (current => false);
  setLuckThalamarisIsShown (current => false);
  setLuckThalamarisActive (current => false);
  };

const handleDefThalamarisClick = event => {
  setDefThalamarisIsShown (current => !DefThalamarisIsShown);
  setDefThalamarisActive (current => !DefThalamarisIsShown);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 4);
  setDefThalamarisLuck (value => 12);
  setAtkThalamarisIsShown (current => false);
  setAtkThalamarisActive (current => false);
  setLuckThalamarisIsShown (current => false);
  setLuckThalamarisActive (current => false);
  setThalamarisIsShown (current => true);
  setThalamarisActive (current => true);
  };

const handleLuckThalamarisClick = event => {
  setLuckThalamarisIsShown (current => !LuckThalamarisIsShown);
  setLuckThalamarisActive (current => !LuckThalamarisIsShown);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 16);
  setAtkThalamarisIsShown (current => false);
  setAtkThalamarisActive (current => false);
  setDefThalamarisIsShown (current => false);
  setDefThalamarisActive (current => false);
  setThalamarisIsShown (current => true);
  setThalamarisActive (current => true);
  };

const handleValkosClick = event => {
  setValkosIsShown (current => !ValkosIsShown);
  setValkosActive (current => !ValkosActive);
  setValkosAtk (value => 4);
  setValkosDef (value => 4);
  setValkosLuck (value => 4);
  setAtkValkosIsShown (current => false);
  setAtkValkosActive (current => false);
  setDefValkosIsShown (current => false);
  setDefValkosActive (current => false);
  setLuckValkosIsShown (current => false);
  setLuckValkosActive (current => false);
  };

const handleAtkValkosClick = event => {
  setAtkValkosIsShown (current => !AtkValkosIsShown);
  setAtkValkosActive (current => !AtkValkosIsShown);
  setAtkValkosAtk (value => 8);
  setAtkValkosDef (value => 4);
  setAtkValkosLuck (value => 4);
  setValkosIsShown (current => true);
  setValkosActive (current => true);
  setDefValkosIsShown (current => false);
  setDefValkosActive (current => false);
  setLuckValkosIsShown (current => false);
  setLuckValkosActive (current => false);
  };

const handleDefValkosClick = event => {
  setDefValkosIsShown (current => !DefValkosIsShown);
  setDefValkosActive (current => !DefValkosIsShown);
  setDefValkosAtk (value => 4);
  setDefValkosDef (value => 8);
  setDefValkosLuck (value => 4);
  setAtkValkosIsShown (current => false);
  setAtkValkosActive (current => false);
  setLuckValkosIsShown (current => false);
  setLuckValkosActive (current => false);
  setValkosIsShown (current => true);
  setValkosActive (current => true);
  };

const handleLuckValkosClick = event => {
  setLuckValkosIsShown (current => !LuckValkosIsShown);
  setLuckValkosActive (current => !LuckValkosIsShown);
  setLuckValkosAtk (value => 4);
  setLuckValkosDef (value => 4);
  setLuckValkosLuck (value => 8);
  setAtkValkosIsShown (current => false);
  setAtkValkosActive (current => false);
  setDefValkosIsShown (current => false);
  setDefValkosActive (current => false);
  setValkosIsShown (current => true);
  setValkosActive (current => true);
  };

const handleEenrisClick = event => {
  setEenrisIsShown (current => !EenrisIsShown);
  setEenrisActive (current => !EenrisActive);
  setEenrisAtk (value => 3);
  setEenrisDef (value => 6);
  setEenrisLuck (value => 9);
  setAtkEenrisIsShown (current => false);
  setAtkEenrisActive (current => false);
  setDefEenrisIsShown (current => false);
  setDefEenrisActive (current => false);
  setLuckEenrisIsShown (current => false);
  setLuckEenrisActive (current => false);
  };

const handleAtkEenrisClick = event => {
  setAtkEenrisIsShown (current => !AtkEenrisIsShown);
  setAtkEenrisActive (current => !AtkEenrisIsShown);
  setAtkEenrisAtk (value => 7);
  setAtkEenrisDef (value => 6);
  setAtkEenrisLuck (value => 9);
  setEenrisIsShown (current => true);
  setEenrisActive (current => true);
  setDefEenrisIsShown (current => false);
  setDefEenrisActive (current => false);
  setLuckEenrisIsShown (current => false);
  setLuckEenrisActive (current => false);
  };

const handleDefEenrisClick = event => {
  setDefEenrisIsShown (current => !DefEenrisIsShown);
  setDefEenrisActive (current => !DefEenrisIsShown);
  setDefEenrisAtk (value => 3);
  setDefEenrisDef (value => 10);
  setDefEenrisLuck (value => 3);
  setAtkEenrisIsShown (current => false);
  setAtkEenrisActive (current => false);
  setLuckEenrisIsShown (current => false);
  setLuckEenrisActive (current => false);
  setEenrisIsShown (current => true);
  setEenrisActive (current => true);
  };

const handleLuckEenrisClick = event => {
  setLuckEenrisIsShown (current => !LuckEenrisIsShown);
  setLuckEenrisActive (current => !LuckEenrisIsShown);
  setLuckEenrisAtk (value => 3);
  setLuckEenrisDef (value => 6);
  setLuckEenrisLuck (value => 7);
  setAtkEenrisIsShown (current => false);
  setAtkEenrisActive (current => false);
  setDefEenrisIsShown (current => false);
  setDefEenrisActive (current => false);
  setEenrisIsShown (current => true);
  setEenrisActive (current => true);
  };

const handleRairaselClick = event => {
  setRairaselIsShown (current => !RairaselIsShown);
  setRairaselActive (current => !RairaselActive);
  setRairaselAtk (value => 6);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 6);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  };

const handleAtkRairaselClick = event => {
  setAtkRairaselIsShown (current => !AtkRairaselIsShown);
  setAtkRairaselActive (current => !AtkRairaselIsShown);
  setAtkRairaselAtk (value => 10);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 6);
  setRairaselIsShown (current => true);
  setRairaselActive (current => true);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  };

const handleDefRairaselClick = event => {
  setDefRairaselIsShown (current => !DefRairaselIsShown);
  setDefRairaselActive (current => !DefRairaselIsShown);
  setDefRairaselAtk (value => 6);
  setDefRairaselDef (value => 4);
  setDefRairaselLuck (value => 6);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  setRairaselIsShown (current => true);
  setRairaselActive (current => true);
  };

const handleLuckRairaselClick = event => {
  setLuckRairaselIsShown (current => !LuckRairaselIsShown);
  setLuckRairaselActive (current => !LuckRairaselIsShown);
  setLuckRairaselAtk (value => 6);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 10);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  setRairaselIsShown (current => true);
  setRairaselActive (current => true);
  };

  const handleSuwoClick = event => {
  setSuwoIsShown (current => !SuwoIsShown);
  setSuwoActive (current => !SuwoActive);
  setSuwoAtk (value => 3);
  setSuwoDef (value => 7);
  setSuwoLuck (value => 2);
  };

const handleAzadiClick = event => {
  setAzadiIsShown (current => !AzadiIsShown);
  setAzadiActive (current => !AzadiActive);
  setAzadiAtk (value => 5);
  setAzadiDef (value => 0);
  setAzadiLuck (value => 10);
  };

const handleLodoClick = event => {
  setLodoIsShown (current => !LodoIsShown);
  setLodoActive (current => !LodoActive);
  setLodoAtk (value => 12);
  setLodoDef (value => 2);
  setLodoLuck (value => 0);
  };

const handleNoanzaClick = event => {
  setNoanzaIsShown (current => !NoanzaIsShown);
  setNoanzaActive (current => !NoanzaActive);
  setNoanzaAtk (value => 0);
  setNoanzaDef (value => 14);
  setNoanzaLuck (value => 6);
  };

const handleAlderbamClick = event => {
  setAlderbamIsShown (current => !AlderbamIsShown);
  setAlderbamActive (current => !AlderbamActive);
  setAlderbamAtk (value => 0);
  setAlderbamDef (value => 0);
  setAlderbamLuck (value => 12);
  };

const handleChysisClick = event => {
  setChysisIsShown (current => !ChysisIsShown);
  setChysisActive (current => !ChysisActive);
  setChysisAtk (value => 12);
  setChysisDef (value => 0);
  setChysisLuck (value => 0);
  };

const handleMundClick = event => {
  setMundIsShown (current => !MundIsShown);
  setMundActive (current => !MundActive);
  setMundAtk (value => 4);
  setMundDef (value => 4);
  setMundLuck (value => 4);
  };

const handleWhodiniClick = event => {
  setWhodiniIsShown (current => !WhodiniIsShown);
  setWhodiniActive (current => !WhodiniActive);
  setWhodiniAtk (value => 0);
  setWhodiniDef (value => 12);
  setWhodiniLuck (value => 0);
  };

//Weapon1 battle items//

const [NoWeapon1IsShown, setNoWeapon1IsShown] = useState(false)
const [NoWeapon1Active, setNoWeapon1Active] = useState(false)

const [MonsterIsShown, setMonsterIsShown] = useState(false)
const [MonsterActive, setMonsterActive] = useState(false)
const [MonsterAtk, setMonsterAtk] = useState(0)
const [MonsterDef, setMonsterDef] = useState(0)
const [MonsterLuck, setMonsterLuck] = useState(0)


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
        <Container align='center'>
            <Heading mt='-50px'>Battle Items Planner</Heading>
            <Text mt='15px'>This page shows the best builds for each battle stat, specific to your progress in the game. You can see builds possible for your region of the game or specific to the battle items you currently have.</Text>
            <Divider mt='15px' />

            <Text mt='25px' mb='8px'>What item builds do you want to see?</Text>
            <VStack>
            <Button variant='outline' onClick= {handleAllClick} style={{ backgroundColor: AllActive ? "#2d1b59" : "transparent" }}>
              All possible for the regions I've unlocked</Button>
            <Button variant='outline' onClick= {handleOwnedClick} style={{ backgroundColor: OwnedActive ? "#2d1b59" : "transparent" }}>
            Specific to the battle items I own
              </Button>

            </VStack>

  <Accordion mt='25px' allowMultiple w={350}>
  <AccordionItem>
  <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='center' p={3}>
        <Heading as='h3' size='lg'>Game Progress</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <Box h='400px' overflowY='scroll'>
          <Text fontSize='md' mt='25px' mb='15px'><b>Your furthest main region:</b></Text>
                <Wrap>
            <WrapItem>
            <Button w='100px' h='60px' pb={5} onClick={handleForestRegionClick} style={{ backgroundColor: ForestRegionActive ? "#2d1b59" : "#2D3748" }}>
          <Text fontSize='md' align='center' pt='18px'>Forest<br/>Region</Text>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='60px' pb={5} onClick={handleDesertRegionClick} style={{ backgroundColor: DesertRegionActive ? "#2d1b59" : "#2D3748" }}>
        <Text fontSize='md' align='center' pt='18px'>Desert<br/>Region</Text>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='60px' pb={5} onClick={handleWaterRegionClick} style={{ backgroundColor: WaterRegionActive ? "#2d1b59" : "#2D3748" }}>
        <Text fontSize='md' align='center' pt='18px'>Water<br/>Region</Text>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='60px' pb={5} onClick={handleDustRegionClick} style={{ backgroundColor: DustRegionActive ? "#2d1b59" : "#2D3748" }}>
        <Text fontSize='md' align='center' pt='18px'>Dust<br/>Region</Text>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='60px' pb={5} onClick={handleLightRegionClick} style={{ backgroundColor: LightRegionActive ? "#2d1b59" : "#2D3748" }}>
        <Text fontSize='md' align='center' pt='18px'>Light<br/>Region</Text>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='60px' pb={5} onClick={handleWorld2RegionClick} style={{ backgroundColor: World2RegionActive ? "#2d1b59" : "#2D3748" }}>
        <Text fontSize='md' align='center' pt='18px'>World 2</Text>
            </Button>
            </WrapItem>

          </Wrap>

{ForestRegionIsShown &&
          <Text fontSize='md' mt='25px' mb='15px'><b>Your furthest main location:</b></Text>
          }
{ForestRegionIsShown &&
          <Wrap>
          <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleLuciolaForestClick} style={{ backgroundColor: LuciolaForestActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/2a/Medalluciola_sm.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Luciola Forest</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleMamaTreeClick} style={{ backgroundColor: MamaTreeActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/8d/Medalmamatree_sm.png'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Mama Tree</Text>
      </VStack>
            </Button>
            </WrapItem>
          </Wrap>}     

{WaterRegionIsShown &&
          <Text fontSize='md' mt='25px' mb='15px'><b>Your furthest main region:</b></Text>
        }
{WaterRegionIsShown &&
          <Wrap>
            <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleRizaRivertownClick} style={{ backgroundColor: RizaRivertownActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/c/cb/Medalrisa_md.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Riza<br/>Rivertown</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleFloatingCityClick} style={{ backgroundColor: FloatingCityActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b5/Medalbalance_md.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Floating City<br />of Balance</Text>
      </VStack>
            </Button>
            </WrapItem>
          </Wrap>}          

          {LightRegionIsShown &&
          <Text fontSize='md' mt='25px' mb='15px'><b>Your furthest main region:</b></Text>
        }
{LightRegionIsShown &&
          <Wrap>
            <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleEarlyCoLClick} style={{ backgroundColor: EarlyCoLActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/98/CityOfLightIcon.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Early CoL</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleLateCoLClick} style={{ backgroundColor: LateCoLActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/3/31/You_want_what.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Mid-CoL</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleDCClick} style={{ backgroundColor: DCActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/86/Dusted_Castle.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Dusted Castle</Text>
      </VStack>
            </Button>
            </WrapItem>
            
          </Wrap>}

          {World2RegionIsShown &&
          <Text fontSize='md' mt='25px' mb='15px'><b>Your furthest main region:</b></Text>
        }
{World2RegionIsShown &&
          <Wrap>
            <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleNivaliClick} style={{ backgroundColor: NivaliActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/ba/NivaliCampIcon.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Nivali<br/>Camp</Text>
      </VStack>
            </Button>
            </WrapItem>            
          </Wrap>}

{LuciolaForestIsShown &&
          <Text fontSize='md' mt='25px' mb='15px'><b>Your unlocked side locations:</b></Text>
          }

{LuciolaForestIsShown &&
          <Wrap>
          <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleAurilisClick} style={{ backgroundColor: AurilisActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a9/AssemblyHallIcon.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Aurilis Magic<br/> Academy</Text>
      </VStack>
            </Button>
            </WrapItem>
          </Wrap>}
          
{MamaTreeIsShown &&
          <Text fontSize='md' mt='25px' mb='15px'><b>Your unlocked side locations:</b></Text>
          }

{MamaTreeIsShown &&
          <Wrap>
          <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleAurilisClick} style={{ backgroundColor: AurilisActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a9/AssemblyHallIcon.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Aurilis Magic<br/> Academy</Text>
      </VStack>
            </Button>
            </WrapItem>
          <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleElderLibraryClick} style={{ backgroundColor: ElderLibraryActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e2/Icon_elder-library.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Elder Library</Text>
      </VStack>
            </Button>
            </WrapItem>
          </Wrap>}      

{DesertRegionIsShown &&
          <Text fontSize='md' mt='25px' mb='15px'><b>Your unlocked side locations:</b></Text>
          }
{DesertRegionIsShown &&
          <Wrap>
            {!DesertRegionAllSideRegionsIsShown &&
          <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleDesertRegionAllSideRegionsClick} style={{ backgroundColor: DesertRegionAllSideRegionsActive ? "#2D3748" : "#2D3748" }}>
            <Text fontSize='md' mt='35px' mb='15px'><b>Select All</b></Text>
            </Button>
            </WrapItem>}
            {DesertRegionAllSideRegionsIsShown && 
          <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleDesertRegionNoneSideRegionsClick} style={{ backgroundColor: DesertRegionNoneSideRegionsActive ? "#2d1b59" : "#2D3748" }}>
            <Text fontSize='md' mt='35px' mb='15px'><b>Unselect All</b></Text>
            </Button>
            </WrapItem>}
            <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleAurilisClick} style={{ backgroundColor: AurilisActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a9/AssemblyHallIcon.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Aurilis Magic<br/> Academy</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleElderLibraryClick} style={{ backgroundColor: ElderLibraryActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e2/Icon_elder-library.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Elder Library</Text>
      </VStack>
            </Button>
            </WrapItem>
          <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleDragonLairClick} style={{ backgroundColor: DragonLairActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/dd/Dragon_Lair_Icon.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Dragon Lair</Text>
      </VStack>
            </Button>
            </WrapItem>
          </Wrap>}

{RizaRivertownIsShown &&
          <Text fontSize='md' mt='25px' mb='15px'><b>Your unlocked side locations:</b></Text>
          }
{RizaRivertownIsShown &&
          <Wrap>
           {!RizaRivertownAllSideRegionsIsShown &&
          <WrapItem>
        <Button w='100px' h='110px' pb={5} onClick={handleRizaRivertownAllSideRegionsClick} style={{ backgroundColor: RizaRivertownAllSideRegionsActive ? "#2D3748" : "#2D3748" }}>
        <Text fontSize='md' mt='35px' mb='15px'><b>Select All</b></Text>
            </Button>
            </WrapItem>}
          {RizaRivertownAllSideRegionsIsShown &&
            <WrapItem>
        <Button w='100px' h='110px' pb={5} onClick={handleRizaRivertownNoneSideRegionsClick} style={{ backgroundColor: RizaRivertownAllSideRegionsActive ? "#2D3748" : "#2D3748" }}>
        <Text fontSize='md' mt='35px' mb='15px'><b>Unselect all</b></Text>
            </Button>
            </WrapItem>}
          <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleAurilisClick} style={{ backgroundColor: AurilisActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a9/AssemblyHallIcon.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Aurilis Magic<br/> Academy</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleElderLibraryClick} style={{ backgroundColor: ElderLibraryActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e2/Icon_elder-library.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Elder Library</Text>
      </VStack>
            </Button>
            </WrapItem>
          <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleDragonLairClick} style={{ backgroundColor: DragonLairActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/dd/Dragon_Lair_Icon.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Dragon Lair</Text>
      </VStack>
            </Button>
            </WrapItem>
          <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleRainaClick} style={{ backgroundColor: RainaActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/22/Raina-surface-camp.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Raina<br/>Surface Camp</Text>
      </VStack>
            </Button>
            </WrapItem>
          </Wrap>}

{FloatingCityIsShown &&
          <Text fontSize='md' mt='25px' mb='15px'><b>Your unlocked side locations:</b></Text>
          }
{FloatingCityIsShown &&
          <Wrap>
          {!WaterRegionAllSideRegionsIsShown &&
          <WrapItem>
        <Button w='100px' h='110px' pb={5} onClick={handleWaterRegionAllSideRegionsClick} style={{ backgroundColor: WaterRegionAllSideRegionsActive ? "#2D3748" : "#2D3748" }}>
        <Text fontSize='md' mt='35px' mb='15px'><b>Select All</b></Text>
            </Button>
            </WrapItem>}
          {WaterRegionAllSideRegionsIsShown &&
            <WrapItem>
        <Button w='100px' h='110px' pb={5} onClick={handleWaterRegionNoneSideRegionsClick} style={{ backgroundColor: WaterRegionAllSideRegionsActive ? "#2D3748" : "#2D3748" }}>
        <Text fontSize='md' mt='35px' mb='15px'><b>Unselect All</b></Text>

            </Button>
            </WrapItem>}
          <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleAurilisClick} style={{ backgroundColor: AurilisActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a9/AssemblyHallIcon.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Aurilis Magic<br/> Academy</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleElderLibraryClick} style={{ backgroundColor: ElderLibraryActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e2/Icon_elder-library.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Elder Library</Text>
      </VStack>
            </Button>
            </WrapItem>
          <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleDragonLairClick} style={{ backgroundColor: DragonLairActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/dd/Dragon_Lair_Icon.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Dragon Lair</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleRainaClick} style={{ backgroundColor: RainaActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/22/Raina-surface-camp.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Raina<br/>Surface Camp</Text>
      </VStack>
            </Button>
            </WrapItem>
          <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleCloudsClick} style={{ backgroundColor: CloudsActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/44/Icon_bg_clouds.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Clouds</Text>
      </VStack>
            </Button>
            </WrapItem>
          <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleDawnClick} style={{ backgroundColor: DawnActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5d/Icon_bg_dawn.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Dawn</Text>
      </VStack>
            </Button>
            </WrapItem>
          <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleTempestClick} style={{ backgroundColor: TempestActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/4c/Icon_bg_tempest.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Tempest</Text>
      </VStack>
            </Button>
            </WrapItem>
          </Wrap>}

{(DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) &&
          <Text fontSize='md' mt='25px' mb='15px'><b>Your unlocked side locations:</b></Text>
          }
{(DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) &&
          <Wrap>
          <WrapItem>
  {!DustRegionAllSideRegionsIsShown &&
            <Button w='100px' h='110px' pb={5} onClick={handleDustRegionAllSideRegionsClick} style={{ backgroundColor: DustRegionAllSideRegionsActive ? "#2D3748" : "#2D3748" }}>
        <Text fontSize='md' mt='35px' mb='15px'><b>Select All</b></Text>
            </Button>}
  {DustRegionAllSideRegionsIsShown &&
            <Button w='100px' h='110px' pb={5} onClick={handleDustRegionNoneSideRegionsClick} style={{ backgroundColor: DustRegionAllSideRegionsActive ? "#2D3748" : "#2D3748" }}>
        <Text fontSize='md' mt='35px' mb='15px'><b>Unselect All</b></Text>

            </Button>}
            </WrapItem>
          <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleAurilisClick} style={{ backgroundColor: AurilisActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a9/AssemblyHallIcon.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Aurilis Magic<br/> Academy</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleElderLibraryClick} style={{ backgroundColor: ElderLibraryActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e2/Icon_elder-library.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Elder Library</Text>
      </VStack>
            </Button>
            </WrapItem>
          <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleDragonLairClick} style={{ backgroundColor: DragonLairActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/dd/Dragon_Lair_Icon.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Dragon Lair</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleRainaClick} style={{ backgroundColor: RainaActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/22/Raina-surface-camp.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Raina<br/>Surface Camp</Text>
      </VStack>
            </Button>
            </WrapItem>
          <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleCloudsClick} style={{ backgroundColor: CloudsActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/44/Icon_bg_clouds.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Clouds</Text>
      </VStack>
            </Button>
            </WrapItem>
          <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleDawnClick} style={{ backgroundColor: DawnActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5d/Icon_bg_dawn.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Dawn</Text>
      </VStack>
            </Button>
            </WrapItem>
          <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleTempestClick} style={{ backgroundColor: TempestActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/4c/Icon_bg_tempest.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Tempest</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleGardenClick} style={{ backgroundColor: GardenActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/7c/HealedGardenIcon.png'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Caretaker's<br/>Garden</Text>
      </VStack>
            </Button>
            </WrapItem>
          </Wrap>}


          </Box>
      <br></br>
    </AccordionPanel>
  </AccordionItem>
  
{OwnedIsShown &&
  <AccordionItem>
  <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='center' p={3}>
        <Heading as='h3' size='lg'>Owned Items</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <Box h='400px' overflowY='scroll'>
          <Text fontSize='md' mt='25px' mb='15px'><b>Main Quest Companions:</b></Text>
                <Wrap>
            {(DCIsShown || World2RegionIsShown) &&
                <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleNoanzaClick} style={{ backgroundColor: NoanzaActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/df/Noanza.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Noanza</Text>
      </VStack>
            </Button>
            </WrapItem>}
{(FloatingCityIsShown || DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) && 
            <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleLodoClick} style={{ backgroundColor: LodoActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e6/Lodo.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Lodo</Text>
      </VStack>
            </Button>
            </WrapItem>}
{(ThreePCIsShown || WaterRegionIsShown || DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) &&
            <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleAzadiClick} style={{ backgroundColor: AzadiActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a8/Azadi.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Azadi</Text>
      </VStack>
            </Button>
            </WrapItem>
}
{(MamaTreeIsShown || ThreePCIsShown || WaterRegionIsShown || DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) && 
            <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleSuwoClick} style={{ backgroundColor: SuwoActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/Suwo.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Suwo</Text>
      </VStack>
            </Button>
            </WrapItem>
          }
      </Wrap>
{DragonLairIsShown &&
          <Text fontSize='md' mt='25px' mb='15px'><b>Dragon Companions:</b></Text>

}
{DragonLairIsShown &&
           <Wrap>
           <WrapItem>
            <Button w='315px' h='110px' pb={5} onClick={handleKaiszarClick} style={{ backgroundColor: KaiszarActive ? "#2d1b59" : "#2D3748" }}>
       <HStack> 
       <Image
       ml='-15px'
        mt='12px'
        align='center' 
        boxSize='6rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fa/Kaiszar.png/'
        mr='5px'
      /> 
      <VStack>
      <Text fontSize='md' mt='15px' align='center'><b>Kaiszar</b></Text>
      <Text fontSize='sm' align='center'>+12 Atk / +0 Def / +0 Luck </Text>
      </VStack>
      </HStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleAtkKaiszarClick} style={{ backgroundColor: AtkKaiszarActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1d/AttackUpgrade.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Kaiszar:<br/>Attack Boost</Text>
      </VStack>
            </Button>
            </WrapItem>
           <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleDefKaiszarClick} style={{ backgroundColor: DefKaiszarActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/DefenseUpgrade.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Kaiszar:<br/>Defense Boost</Text>
      </VStack>
            </Button>
            </WrapItem>
           <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleLuckKaiszarClick} style={{ backgroundColor: LuckKaiszarActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/8b/LuckUpgrade.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Kaiszar:<br/>Luck Boost</Text>
      </VStack>
            </Button>
            </WrapItem>
           <WrapItem>
            <Button w='315px' h='110px' pb={5} onClick={handleLoksiClick} style={{ backgroundColor: LoksiActive ? "#2d1b59" : "#2D3748" }}>
            <HStack> 
       <Image
       ml='-15px'
        mt='12px'
        align='center' 
        boxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/75/Loksi.png'
        mr='5px'
      /> 
      <VStack>
      <Text fontSize='md' mt='15px' align='center'><b>Loksi</b></Text>
      <Text fontSize='sm' align='center'>+0 Atk / +12 Def / +0 Luck </Text>
      </VStack>
      </HStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleAtkLoksiClick} style={{ backgroundColor: AtkLoksiActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1d/AttackUpgrade.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Loksi:<br/>Attack Boost</Text>
      </VStack>
            </Button>
            </WrapItem>
           <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleDefLoksiClick} style={{ backgroundColor: DefLoksiActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/DefenseUpgrade.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Loksi:<br/>Defense Boost</Text>
      </VStack>
            </Button>
            </WrapItem>
           <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleLuckLoksiClick} style={{ backgroundColor: LuckLoksiActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/8b/LuckUpgrade.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Loksi:<br/>Luck Boost</Text>
      </VStack>
            </Button>
            </WrapItem>
           <WrapItem>
            <Button w='315px' h='110px' pb={5} onClick={handleThalamarisClick} style={{ backgroundColor: ThalamarisActive ? "#2d1b59" : "#2D3748" }}>
            <HStack> 
       <Image
       ml='-15px'
        mt='12px'
        align='center' 
        boxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/4a/Thalamaris.png/'
        mr='5px'
      /> 
      <VStack>
      <Text fontSize='md' mt='15px' align='center'><b>Thalamaris</b></Text>
      <Text fontSize='sm' align='center'>+0 Atk / +0 Def / +12 Luck </Text>
      </VStack>
      </HStack>

            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleAtkThalamarisClick} style={{ backgroundColor: AtkThalamarisActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1d/AttackUpgrade.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Thalamaris:<br/>Attack Boost</Text>
      </VStack>
            </Button>
            </WrapItem>
           <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleDefThalamarisClick} style={{ backgroundColor: DefThalamarisActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/DefenseUpgrade.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Thalamaris:<br/>Defense Boost</Text>
      </VStack>
            </Button>
            </WrapItem>
           <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleLuckThalamarisClick} style={{ backgroundColor: LuckThalamarisActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/8b/LuckUpgrade.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Thalamaris:<br/>Luck Boost</Text>
      </VStack>
            </Button>
            </WrapItem>
           <WrapItem>
            <Button w='315px' h='110px' pb={5} onClick={handleValkosClick} style={{ backgroundColor: ValkosActive ? "#2d1b59" : "#2D3748" }}>
            <HStack> 
       <Image
       ml='-15px'
        mt='12px'
        align='center' 
        boxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/63/Valkos.png'
        mr='5px'
      /> 
      <VStack>
      <Text fontSize='md' mt='15px' align='center'><b>Valkos</b></Text>
      <Text fontSize='sm' align='center'>+4 Atk / +4 Def / +4 Luck </Text>
      </VStack>
      </HStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleAtkValkosClick} style={{ backgroundColor: AtkValkosActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1d/AttackUpgrade.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Valkos:<br/>Attack Boost</Text>
      </VStack>
            </Button>
            </WrapItem>
           <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleDefValkosClick} style={{ backgroundColor: DefValkosActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/DefenseUpgrade.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Valkos:<br/>Defense Boost</Text>
      </VStack>
            </Button>
            </WrapItem>
           <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleLuckValkosClick} style={{ backgroundColor: LuckValkosActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/8b/LuckUpgrade.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Valkos:<br/>Luck Boost</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='315px' h='110px' pb={5} onClick={handleEenrisClick} style={{ backgroundColor: EenrisActive ? "#2d1b59" : "#2D3748" }}>
            <HStack> 
       <Image
       ml='-15px'
        mt='12px'
        align='center' 
        boxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1d/Eenris.png/'
        mr='5px'
      /> 
      <VStack>
      <Text fontSize='md' mt='15px' align='center'><b>Eenris</b></Text>
      <Text fontSize='sm' align='center'>+3 Atk / +6 Def / +3 Luck </Text>
      </VStack>
      </HStack>

            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleAtkEenrisClick} style={{ backgroundColor: AtkEenrisActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1d/AttackUpgrade.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Eenris:<br/>Attack Boost</Text>
      </VStack>
            </Button>
            </WrapItem>
           <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleDefEenrisClick} style={{ backgroundColor: DefEenrisActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/DefenseUpgrade.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Eenris:<br/>Defense Boost</Text>
      </VStack>
            </Button>
            </WrapItem>
           <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleLuckEenrisClick} style={{ backgroundColor: LuckEenrisActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/8b/LuckUpgrade.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Eenris:<br/>Luck Boost</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='315px' h='110px' pb={5} onClick={handleRairaselClick} style={{ backgroundColor: RairaselActive ? "#2d1b59" : "#2D3748" }}>
            <HStack> 
       <Image
       ml='-15px'
        mt='12px'
        align='center' 
        boxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fc/Rairasel.png/'
        mr='5px'
      /> 
      <VStack>
      <Text fontSize='md' mt='15px' align='center'><b>Rairasel</b></Text>
      <Text fontSize='sm' align='center'>+6 Atk / +0 Def / +6 Luck </Text>
      </VStack>
      </HStack>

            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleAtkRairaselClick} style={{ backgroundColor: AtkRairaselActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1d/AttackUpgrade.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Rairasel:<br/>Attack Boost</Text>
      </VStack>
            </Button>
            </WrapItem>
           <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleDefRairaselClick} style={{ backgroundColor: DefRairaselActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/DefenseUpgrade.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Rairasel:<br/>Defense Boost</Text>
      </VStack>
            </Button>
            </WrapItem>
           <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleLuckRairaselClick} style={{ backgroundColor: LuckRairaselActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/8b/LuckUpgrade.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Rairasel:<br/>Luck Boost</Text>
      </VStack>
            </Button>
            </WrapItem>
            </Wrap>
}

{AurilisIsShown &&
<Text fontSize='md' mt='25px' mb='15px'><b>Aurilis Companions:</b></Text>
}

{AurilisIsShown &&
                <Wrap>
                <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleAlderbamClick} style={{ backgroundColor: AlderbamActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/95/Alderbam.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Alderbam</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleChysisClick} style={{ backgroundColor: ChysisActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/97/Chysis.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Chysis</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleMundClick} style={{ backgroundColor: MundActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e3/Mund.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Mund</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='110px' pb={5} onClick={handleWhodiniClick} style={{ backgroundColor: WhodiniActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/d5/Whodini.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Whodini</Text>
      </VStack>
            </Button>
            </WrapItem>
            </Wrap>}


      </Box>
    </AccordionPanel>
  </AccordionItem>
}

  </Accordion>
            </Container>
        </Grid>
      </Box>
  );
}

export default App;