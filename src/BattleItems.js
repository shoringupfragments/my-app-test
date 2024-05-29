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
  HStack,
  Grid,
  theme,
  Container,
  Divider,
  Image,
  Show,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  VStack,
  Wrap,
  WrapItem,
  AbsoluteCenter,
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
const [SuwoNoIsShown, setSuwoNoIsShown] = useState(false)
const [SuwoNoActive, setSuwoNoActive] = useState(false)
const [SuwoAtk, setSuwoAtk] = useState(0)
const [SuwoDef, setSuwoDef] = useState(0)
const [SuwoLuck, setSuwoLuck] = useState(0)

const [AzadiIsShown, setAzadiIsShown] = useState(false)
const [AzadiActive, setAzadiActive] = useState(false)
const [AzadiNoIsShown, setAzadiNoIsShown] = useState(false)
const [AzadiNoActive, setAzadiNoActive] = useState(false)

const [AzadiAtk, setAzadiAtk] = useState(0)
const [AzadiDef, setAzadiDef] = useState(0)
const [AzadiLuck, setAzadiLuck] = useState(0)

const [LodoIsShown, setLodoIsShown] = useState(false)
const [LodoActive, setLodoActive] = useState(false)
const [LodoNoIsShown, setLodoNoIsShown] = useState(false)
const [LodoNoActive, setLodoNoActive] = useState(false)
const [LodoAtk, setLodoAtk] = useState(0)
const [LodoDef, setLodoDef] = useState(0)
const [LodoLuck, setLodoLuck] = useState(0)

const [NoanzaIsShown, setNoanzaIsShown] = useState(false)
const [NoanzaActive, setNoanzaActive] = useState(false)
const [NoanzaNoIsShown, setNoanzaNoIsShown] = useState(false)
const [NoanzaNoActive, setNoanzaNoActive] = useState(false)

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
const [AlderbamNoIsShown, setAlderbamNoIsShown] = useState(false)
const [AlderbamNoActive, setAlderbamNoActive] = useState(false)
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
  setKaiszarAtk (value => 12);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
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
  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
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
  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
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
  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
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
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
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
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
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
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
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
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
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
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
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
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setAtkThalamarisAtk (value => 4);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 12);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
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
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 4);
  setDefThalamarisLuck (value => 12);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
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
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
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
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
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
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
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
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
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
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
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
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
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
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
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
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
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
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
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
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);
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
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);
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
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);
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
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  setRairaselIsShown (current => true);
  setRairaselActive (current => true);
  };

const [KaiszarNoIsShown, setKaiszarNoIsShown] = useState(false)
const [KaiszarNoActive, setKaiszarNoActive] = useState(false)
const [AtkKaiszarNoIsShown, setAtkKaiszarNoIsShown] = useState(false)
const [AtkKaiszarNoActive, setAtkKaiszarNoActive] = useState(false)
const [DefKaiszarNoIsShown, setDefKaiszarNoIsShown] = useState(false)
const [DefKaiszarNoActive, setDefKaiszarNoActive] = useState(false)
const [LuckKaiszarNoIsShown, setLuckKaiszarNoIsShown] = useState(false)
const [LuckKaiszarNoActive, setLuckKaiszarNoActive] = useState(false)


const handleKaiszarNoClick = event => {
  setKaiszarIsShown (current => !KaiszarIsShown);
  setKaiszarActive (current => !KaiszarActive);
  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);
  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
  };

const handleAtkKaiszarNoClick = event => {
  setAtkKaiszarIsShown (current => !AtkKaiszarIsShown);
  setAtkKaiszarActive (current => !AtkKaiszarIsShown);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setKaiszarAtk (value => 12);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  };

const handleDefKaiszarNoClick = event => {
  setDefKaiszarIsShown (current => !DefKaiszarIsShown);
  setDefKaiszarActive (current => !DefKaiszarIsShown);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  setKaiszarAtk (value => 12);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  };

const handleLuckKaiszarNoClick = event => {
  setLuckKaiszarIsShown (current => !LuckKaiszarIsShown);
  setLuckKaiszarActive (current => !LuckKaiszarIsShown);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
  setKaiszarAtk (value => 12);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  };

const [LoksiNoIsShown, setLoksiNoIsShown] = useState(false)
const [LoksiNoActive, setLoksiNoActive] = useState(false)
const [AtkLoksiNoIsShown, setAtkLoksiNoIsShown] = useState(false)
const [AtkLoksiNoActive, setAtkLoksiNoActive] = useState(false)
const [DefLoksiNoIsShown, setDefLoksiNoIsShown] = useState(false)
const [DefLoksiNoActive, setDefLoksiNoActive] = useState(false)
const [LuckLoksiNoIsShown, setLuckLoksiNoIsShown] = useState(false)
const [LuckLoksiNoActive, setLuckLoksiNoActive] = useState(false)


const handleLoksiNoClick = event => {
  setLoksiIsShown (current => !LoksiIsShown);
  setLoksiActive (current => !LoksiActive);
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
  };

const handleAtkLoksiNoClick = event => {
  setAtkLoksiIsShown (current => !AtkLoksiIsShown);
  setAtkLoksiActive (current => !AtkLoksiIsShown);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 12);
  setLoksiLuck (value => 0);
  };

const handleDefLoksiNoClick = event => {
  setDefLoksiIsShown (current => !DefLoksiIsShown);
  setDefLoksiActive (current => !DefLoksiIsShown);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 12);
  setLoksiLuck (value => 0);
  };

const handleLuckLoksiNoClick = event => {
  setLuckLoksiIsShown (current => !LuckLoksiIsShown);
  setLuckLoksiActive (current => !LuckLoksiIsShown);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 12);
  setLoksiLuck (value => 0);
  };

const [ThalamarisNoIsShown, setThalamarisNoIsShown] = useState(false)
const [ThalamarisNoActive, setThalamarisNoActive] = useState(false)
const [AtkThalamarisNoIsShown, setAtkThalamarisNoIsShown] = useState(false)
const [AtkThalamarisNoActive, setAtkThalamarisNoActive] = useState(false)
const [DefThalamarisNoIsShown, setDefThalamarisNoIsShown] = useState(false)
const [DefThalamarisNoActive, setDefThalamarisNoActive] = useState(false)
const [LuckThalamarisNoIsShown, setLuckThalamarisNoIsShown] = useState(false)
const [LuckThalamarisNoActive, setLuckThalamarisNoActive] = useState(false)


const handleThalamarisNoClick = event => {
  setThalamarisIsShown (current => !ThalamarisIsShown);
  setThalamarisActive (current => !ThalamarisActive);
  setAtkThalamarisIsShown (current => false);
  setAtkThalamarisActive (current => false);
  setDefThalamarisIsShown (current => false);
  setDefThalamarisActive (current => false);
  setLuckThalamarisIsShown (current => false);
  setLuckThalamarisActive (current => false);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
  };

const handleAtkThalamarisNoClick = event => {
  setAtkThalamarisIsShown (current => !AtkThalamarisIsShown);
  setAtkThalamarisActive (current => !AtkThalamarisIsShown);
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 12);
  };

const handleDefThalamarisNoClick = event => {
  setDefThalamarisIsShown (current => !DefThalamarisIsShown);
  setDefThalamarisActive (current => !DefThalamarisIsShown);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 12);
  };

const handleLuckThalamarisNoClick = event => {
  setLuckThalamarisIsShown (current => !LuckThalamarisIsShown);
  setLuckThalamarisActive (current => !LuckThalamarisIsShown);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 12);
  };  

const [ValkosNoIsShown, setValkosNoIsShown] = useState(false)
const [ValkosNoActive, setValkosNoActive] = useState(false)
const [AtkValkosNoIsShown, setAtkValkosNoIsShown] = useState(false)
const [AtkValkosNoActive, setAtkValkosNoActive] = useState(false)
const [DefValkosNoIsShown, setDefValkosNoIsShown] = useState(false)
const [DefValkosNoActive, setDefValkosNoActive] = useState(false)
const [LuckValkosNoIsShown, setLuckValkosNoIsShown] = useState(false)
const [LuckValkosNoActive, setLuckValkosNoActive] = useState(false)


const handleValkosNoClick = event => {
  setValkosIsShown (current => !ValkosIsShown);
  setValkosActive (current => !ValkosActive);
  setAtkValkosIsShown (current => false);
  setAtkValkosActive (current => false);
  setDefValkosIsShown (current => false);
  setDefValkosActive (current => false);
  setLuckValkosIsShown (current => false);
  setLuckValkosActive (current => false);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
  };

const handleAtkValkosNoClick = event => {
  setAtkValkosIsShown (current => !AtkValkosIsShown);
  setAtkValkosActive (current => !AtkValkosIsShown);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  setValkosAtk (value => 4);
  setValkosDef (value => 4);
  setValkosLuck (value => 4);
  };

const handleDefValkosNoClick = event => {
  setDefValkosIsShown (current => !DefValkosIsShown);
  setDefValkosActive (current => !DefValkosIsShown);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  setValkosAtk (value => 4);
  setValkosDef (value => 4);
  setValkosLuck (value => 4);
  };

const handleLuckValkosNoClick = event => {
  setLuckValkosIsShown (current => !LuckValkosIsShown);
  setLuckValkosActive (current => !LuckValkosIsShown);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
  setValkosAtk (value => 4);
  setValkosDef (value => 4);
  setValkosLuck (value => 4);
  };

const [EenrisNoIsShown, setEenrisNoIsShown] = useState(false)
const [EenrisNoActive, setEenrisNoActive] = useState(false)
const [AtkEenrisNoIsShown, setAtkEenrisNoIsShown] = useState(false)
const [AtkEenrisNoActive, setAtkEenrisNoActive] = useState(false)
const [DefEenrisNoIsShown, setDefEenrisNoIsShown] = useState(false)
const [DefEenrisNoActive, setDefEenrisNoActive] = useState(false)
const [LuckEenrisNoIsShown, setLuckEenrisNoIsShown] = useState(false)
const [LuckEenrisNoActive, setLuckEenrisNoActive] = useState(false)


const handleEenrisNoClick = event => {
  setEenrisIsShown (current => !EenrisIsShown);
  setEenrisActive (current => !EenrisActive);
  setAtkEenrisIsShown (current => false);
  setAtkEenrisActive (current => false);
  setDefEenrisIsShown (current => false);
  setDefEenrisActive (current => false);
  setLuckEenrisIsShown (current => false);
  setLuckEenrisActive (current => false);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
  };

const handleAtkEenrisNoClick = event => {
  setAtkEenrisIsShown (current => !AtkEenrisIsShown);
  setAtkEenrisActive (current => !AtkEenrisIsShown);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  setEenrisAtk (value => 3);
  setEenrisDef (value => 6);
  setEenrisLuck (value => 9);
  };

const handleDefEenrisNoClick = event => {
  setDefEenrisIsShown (current => !DefEenrisIsShown);
  setDefEenrisActive (current => !DefEenrisIsShown);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  setEenrisAtk (value => 3);
  setEenrisDef (value => 6);
  setEenrisLuck (value => 9);
  };

const handleLuckEenrisNoClick = event => {
  setLuckEenrisIsShown (current => !LuckEenrisIsShown);
  setLuckEenrisActive (current => !LuckEenrisIsShown);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
  setEenrisAtk (value => 3);
  setEenrisDef (value => 6);
  setEenrisLuck (value => 9);
  };
  
const [RairaselNoIsShown, setRairaselNoIsShown] = useState(false)
const [RairaselNoActive, setRairaselNoActive] = useState(false)
const [AtkRairaselNoIsShown, setAtkRairaselNoIsShown] = useState(false)
const [AtkRairaselNoActive, setAtkRairaselNoActive] = useState(false)
const [DefRairaselNoIsShown, setDefRairaselNoIsShown] = useState(false)
const [DefRairaselNoActive, setDefRairaselNoActive] = useState(false)
const [LuckRairaselNoIsShown, setLuckRairaselNoIsShown] = useState(false)
const [LuckRairaselNoActive, setLuckRairaselNoActive] = useState(false)


const handleRairaselNoClick = event => {
  setRairaselIsShown (current => !RairaselIsShown);
  setRairaselActive (current => !RairaselActive);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);
  };

const handleAtkRairaselNoClick = event => {
  setAtkRairaselIsShown (current => !AtkRairaselIsShown);
  setAtkRairaselActive (current => !AtkRairaselIsShown);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  setRairaselAtk (value => 6);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 6);
  };

const handleDefRairaselNoClick = event => {
  setDefRairaselIsShown (current => !DefRairaselIsShown);
  setDefRairaselActive (current => !DefRairaselIsShown);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  setRairaselAtk (value => 6);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 6);
  };

const handleLuckRairaselNoClick = event => {
  setLuckRairaselIsShown (current => !LuckRairaselIsShown);
  setLuckRairaselActive (current => !LuckRairaselIsShown);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);
  setRairaselAtk (value => 6);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 6);
  };  

//dragons select//

const handleKaiszarSwitchClick = event => {
  setNoanzaAtk (value => 0);
  setNoanzaDef (value => 0);
  setNoanzaLuck (value => 0);
  setLodoAtk (value => 0);
  setLodoDef (value => 0);
  setLodoLuck (value => 0);
  setAzadiAtk (value => 0);
  setAzadiDef (value => 0);
  setAzadiLuck (value => 0);
  setSuwoAtk (value => 0);
  setSuwoDef (value => 0);
  setSuwoLuck (value => 0);

  setNoanzaIsShown (current => false);
  setNoanzaActive (current => false);
  setLodoIsShown (current => false)
  setLodoIsShown (current => false)
  setAzadiIsShown (current => false)
  setAzadiIsShown (current => false)
  setSuwoIsShown (current => false)
  setSuwoIsShown (current => false)
  setKaiszarIsShown (current => !KaiszarIsShown);
  setKaiszarActive (current => !KaiszarActive);
  setKaiszarAtk (value => 12);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);

  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);
  setLoksiIsShown (current => false);
  setLoksiActive (current => false);
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  setThalamarisIsShown (current => false);
  setThalamarisActive (current => false);
  setAtkThalamarisIsShown (current => false);
  setAtkThalamarisActive (current => false);
  setDefThalamarisIsShown (current => false);
  setDefThalamarisActive (current => false);
  setLuckThalamarisIsShown (current => false);
  setLuckThalamarisActive (current => false);
  setValkosIsShown (current => false);
  setValkosActive (current => false);
  setAtkValkosIsShown (current => false);
  setAtkValkosActive (current => false);
  setDefValkosIsShown (current => false);
  setDefValkosActive (current => false);
  setLuckValkosIsShown (current => false);
  setLuckValkosActive (current => false);
  setEenrisIsShown (current => false);
  setEenrisActive (current => false);
  setAtkEenrisIsShown (current => false);
  setAtkEenrisActive (current => false);
  setDefEenrisIsShown (current => false);
  setDefEenrisActive (current => false);
  setLuckEenrisIsShown (current => false);
  setLuckEenrisActive (current => false);
  setRairaselIsShown (current => false);
  setRairaselActive (current => false);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  };

const handleAtkKaiszarSwitchClick = event => {
  setNoanzaAtk (value => 0);
  setNoanzaDef (value => 0);
  setNoanzaLuck (value => 0);
  setLodoAtk (value => 0);
  setLodoDef (value => 0);
  setLodoLuck (value => 0);
  setAzadiAtk (value => 0);
  setAzadiDef (value => 0);
  setAzadiLuck (value => 0);
  setSuwoAtk (value => 0);
  setSuwoDef (value => 0);
  setSuwoLuck (value => 0);

  setNoanzaIsShown (current => false);
  setNoanzaActive (current => false);
  setLodoIsShown (current => false)
  setLodoIsShown (current => false)
  setAzadiIsShown (current => false)
  setAzadiIsShown (current => false)
  setSuwoIsShown (current => false)
  setSuwoIsShown (current => false)

  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 16);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);


  setKaiszarIsShown (current => true);
  setKaiszarActive (current => true);
  setAtkKaiszarIsShown (current => !AtkKaiszarIsShown);
  setAtkKaiszarActive (current => !AtkKaiszarActive);
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);
  setLoksiIsShown (current => false);
  setLoksiActive (current => false);
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  setThalamarisIsShown (current => false);
  setThalamarisActive (current => false);
  setAtkThalamarisIsShown (current => false);
  setAtkThalamarisActive (current => false);
  setDefThalamarisIsShown (current => false);
  setDefThalamarisActive (current => false);
  setLuckThalamarisIsShown (current => false);
  setLuckThalamarisActive (current => false);
  setValkosIsShown (current => false);
  setValkosActive (current => false);
  setAtkValkosIsShown (current => false);
  setAtkValkosActive (current => false);
  setDefValkosIsShown (current => false);
  setDefValkosActive (current => false);
  setLuckValkosIsShown (current => false);
  setLuckValkosActive (current => false);
  setEenrisIsShown (current => false);
  setEenrisActive (current => false);
  setAtkEenrisIsShown (current => false);
  setAtkEenrisActive (current => false);
  setDefEenrisIsShown (current => false);
  setDefEenrisActive (current => false);
  setLuckEenrisIsShown (current => false);
  setLuckEenrisActive (current => false);
  setRairaselIsShown (current => false);
  setRairaselActive (current => false);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  };

  const handleDefKaiszarSwitchClick = event => {
  setNoanzaAtk (value => 0);
  setNoanzaDef (value => 0);
  setNoanzaLuck (value => 0);
  setLodoAtk (value => 0);
  setLodoDef (value => 0);
  setLodoLuck (value => 0);
  setAzadiAtk (value => 0);
  setAzadiDef (value => 0);
  setAzadiLuck (value => 0);
  setSuwoAtk (value => 0);
  setSuwoDef (value => 0);
  setSuwoLuck (value => 0);

  setNoanzaIsShown (current => false);
  setNoanzaActive (current => false);
  setLodoIsShown (current => false)
  setLodoIsShown (current => false)
  setAzadiIsShown (current => false)
  setAzadiIsShown (current => false)
  setSuwoIsShown (current => false)
  setSuwoIsShown (current => false)

  setDefKaiszarIsShown (current => !DefKaiszarIsShown);
  setDefKaiszarActive (current => !DefKaiszarIsShown);
  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 12);
  setDefKaiszarDef (value => 4);
  setDefKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);

  setKaiszarIsShown (current => true);
  setKaiszarActive (current => true);
  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);
  setLoksiIsShown (current => false);
  setLoksiActive (current => false);
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  setThalamarisIsShown (current => false);
  setThalamarisActive (current => false);
  setAtkThalamarisIsShown (current => false);
  setAtkThalamarisActive (current => false);
  setDefThalamarisIsShown (current => false);
  setDefThalamarisActive (current => false);
  setLuckThalamarisIsShown (current => false);
  setLuckThalamarisActive (current => false);
  setValkosIsShown (current => false);
  setValkosActive (current => false);
  setAtkValkosIsShown (current => false);
  setAtkValkosActive (current => false);
  setDefValkosIsShown (current => false);
  setDefValkosActive (current => false);
  setLuckValkosIsShown (current => false);
  setLuckValkosActive (current => false);
  setEenrisIsShown (current => false);
  setEenrisActive (current => false);
  setAtkEenrisIsShown (current => false);
  setAtkEenrisActive (current => false);
  setDefEenrisIsShown (current => false);
  setDefEenrisActive (current => false);
  setLuckEenrisIsShown (current => false);
  setLuckEenrisActive (current => false);
  setRairaselIsShown (current => false);
  setRairaselActive (current => false);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  };

const handleLuckKaiszarSwitchClick = event => {
  setNoanzaAtk (value => 0);
  setNoanzaDef (value => 0);
  setNoanzaLuck (value => 0);
  setLodoAtk (value => 0);
  setLodoDef (value => 0);
  setLodoLuck (value => 0);
  setAzadiAtk (value => 0);
  setAzadiDef (value => 0);
  setAzadiLuck (value => 0);
  setSuwoAtk (value => 0);
  setSuwoDef (value => 0);
  setSuwoLuck (value => 0);

  setNoanzaIsShown (current => false);
  setNoanzaActive (current => false);
  setLodoIsShown (current => false)
  setLodoIsShown (current => false)
  setAzadiIsShown (current => false)
  setAzadiIsShown (current => false)
  setSuwoIsShown (current => false)
  setSuwoIsShown (current => false)

  setLuckKaiszarIsShown (current => !LuckKaiszarIsShown);
  setLuckKaiszarActive (current => !LuckKaiszarActive);
  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 12);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 4);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);

  setKaiszarIsShown (current => true);
  setKaiszarActive (current => true);
  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setLoksiIsShown (current => false);
  setLoksiActive (current => false);
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  setThalamarisIsShown (current => false);
  setThalamarisActive (current => false);
  setAtkThalamarisIsShown (current => false);
  setAtkThalamarisActive (current => false);
  setDefThalamarisIsShown (current => false);
  setDefThalamarisActive (current => false);
  setLuckThalamarisIsShown (current => false);
  setLuckThalamarisActive (current => false);
  setValkosIsShown (current => false);
  setValkosActive (current => false);
  setAtkValkosIsShown (current => false);
  setAtkValkosActive (current => false);
  setDefValkosIsShown (current => false);
  setDefValkosActive (current => false);
  setLuckValkosIsShown (current => false);
  setLuckValkosActive (current => false);
  setEenrisIsShown (current => false);
  setEenrisActive (current => false);
  setAtkEenrisIsShown (current => false);
  setAtkEenrisActive (current => false);
  setDefEenrisIsShown (current => false);
  setDefEenrisActive (current => false);
  setLuckEenrisIsShown (current => false);
  setLuckEenrisActive (current => false);
  setRairaselIsShown (current => false);
  setRairaselActive (current => false);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  };

const handleLoksiSwitchClick = event => {
  setNoanzaAtk (value => 0);
  setNoanzaDef (value => 0);
  setNoanzaLuck (value => 0);
  setLodoAtk (value => 0);
  setLodoDef (value => 0);
  setLodoLuck (value => 0);
  setAzadiAtk (value => 0);
  setAzadiDef (value => 0);
  setAzadiLuck (value => 0);
  setSuwoAtk (value => 0);
  setSuwoDef (value => 0);
  setSuwoLuck (value => 0);

  setNoanzaIsShown (current => false);
  setNoanzaActive (current => false);
  setLodoIsShown (current => false)
  setLodoIsShown (current => false)
  setAzadiIsShown (current => false)
  setAzadiIsShown (current => false)
  setSuwoIsShown (current => false)
  setSuwoIsShown (current => false)

  setLoksiIsShown (current => !LoksiIsShown);
  setLoksiActive (current => !LoksiActive);
  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 12);
  setLoksiLuck (value => 0);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);

  setKaiszarIsShown (current => false);
  setKaiszarActive (current => false);
  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  setThalamarisIsShown (current => false);
  setThalamarisActive (current => false);
  setAtkThalamarisIsShown (current => false);
  setAtkThalamarisActive (current => false);
  setDefThalamarisIsShown (current => false);
  setDefThalamarisActive (current => false);
  setLuckThalamarisIsShown (current => false);
  setLuckThalamarisActive (current => false);
  setValkosIsShown (current => false);
  setValkosActive (current => false);
  setAtkValkosIsShown (current => false);
  setAtkValkosActive (current => false);
  setDefValkosIsShown (current => false);
  setDefValkosActive (current => false);
  setLuckValkosIsShown (current => false);
  setLuckValkosActive (current => false);
  setEenrisIsShown (current => false);
  setEenrisActive (current => false);
  setAtkEenrisIsShown (current => false);
  setAtkEenrisActive (current => false);
  setDefEenrisIsShown (current => false);
  setDefEenrisActive (current => false);
  setLuckEenrisIsShown (current => false);
  setLuckEenrisActive (current => false);
  setRairaselIsShown (current => false);
  setRairaselActive (current => false);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  };

const handleAtkLoksiSwitchClick = event => {
  setNoanzaAtk (value => 0);
  setNoanzaDef (value => 0);
  setNoanzaLuck (value => 0);
  setLodoAtk (value => 0);
  setLodoDef (value => 0);
  setLodoLuck (value => 0);
  setAzadiAtk (value => 0);
  setAzadiDef (value => 0);
  setAzadiLuck (value => 0);
  setSuwoAtk (value => 0);
  setSuwoDef (value => 0);
  setSuwoLuck (value => 0);

  setNoanzaIsShown (current => false);
  setNoanzaActive (current => false);
  setLodoIsShown (current => false)
  setLodoIsShown (current => false)
  setAzadiIsShown (current => false)
  setAzadiIsShown (current => false)
  setSuwoIsShown (current => false)
  setSuwoIsShown (current => false)

  setAtkLoksiIsShown (current => !AtkLoksiIsShown);
  setAtkLoksiActive (current => !AtkLoksiIsShown);
  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  setAtkLoksiAtk (value => 4);
  setAtkLoksiDef (value => 12);
  setAtkLoksiLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);

  setKaiszarIsShown (current => false);
  setKaiszarActive (current => false);
  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  setThalamarisIsShown (current => false);
  setThalamarisActive (current => false);
  setAtkThalamarisIsShown (current => false);
  setAtkThalamarisActive (current => false);
  setDefThalamarisIsShown (current => false);
  setDefThalamarisActive (current => false);
  setLuckThalamarisIsShown (current => false);
  setLuckThalamarisActive (current => false);
  setValkosIsShown (current => false);
  setValkosActive (current => false);
  setAtkValkosIsShown (current => false);
  setAtkValkosActive (current => false);
  setDefValkosIsShown (current => false);
  setDefValkosActive (current => false);
  setLuckValkosIsShown (current => false);
  setLuckValkosActive (current => false);
  setEenrisIsShown (current => false);
  setEenrisActive (current => false);
  setAtkEenrisIsShown (current => false);
  setAtkEenrisActive (current => false);
  setDefEenrisIsShown (current => false);
  setDefEenrisActive (current => false);
  setLuckEenrisIsShown (current => false);
  setLuckEenrisActive (current => false);
  setRairaselIsShown (current => false);
  setRairaselActive (current => false);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  };

const handleDefLoksiSwitchClick = event => {
  setNoanzaAtk (value => 0);
  setNoanzaDef (value => 0);
  setNoanzaLuck (value => 0);
  setLodoAtk (value => 0);
  setLodoDef (value => 0);
  setLodoLuck (value => 0);
  setAzadiAtk (value => 0);
  setAzadiDef (value => 0);
  setAzadiLuck (value => 0);
  setSuwoAtk (value => 0);
  setSuwoDef (value => 0);
  setSuwoLuck (value => 0);

  setNoanzaIsShown (current => false);
  setNoanzaActive (current => false);
  setLodoIsShown (current => false)
  setLodoIsShown (current => false)
  setAzadiIsShown (current => false)
  setAzadiIsShown (current => false)
  setSuwoIsShown (current => false)
  setSuwoIsShown (current => false)

  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 16);
  setDefLoksiLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);

  setKaiszarIsShown (current => false);
  setKaiszarActive (current => false);
  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);

  setLoksiIsShown (current => true)
  setLoksiActive (current => true)
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setDefLoksiIsShown (current => !DefLoksiIsShown);
  setDefLoksiActive (current => !DefLoksiActive);
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  setThalamarisIsShown (current => false);
  setThalamarisActive (current => false);
  setAtkThalamarisIsShown (current => false);
  setAtkThalamarisActive (current => false);
  setDefThalamarisIsShown (current => false);
  setDefThalamarisActive (current => false);
  setLuckThalamarisIsShown (current => false);
  setLuckThalamarisActive (current => false);
  setValkosIsShown (current => false);
  setValkosActive (current => false);
  setAtkValkosIsShown (current => false);
  setAtkValkosActive (current => false);
  setDefValkosIsShown (current => false);
  setDefValkosActive (current => false);
  setLuckValkosIsShown (current => false);
  setLuckValkosActive (current => false);
  setEenrisIsShown (current => false);
  setEenrisActive (current => false);
  setAtkEenrisIsShown (current => false);
  setAtkEenrisActive (current => false);
  setDefEenrisIsShown (current => false);
  setDefEenrisActive (current => false);
  setLuckEenrisIsShown (current => false);
  setLuckEenrisActive (current => false);
  setRairaselIsShown (current => false);
  setRairaselActive (current => false);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  };

const handleLuckLoksiSwitchClick = event => {
  setNoanzaAtk (value => 0);
  setNoanzaDef (value => 0);
  setNoanzaLuck (value => 0);
  setLodoAtk (value => 0);
  setLodoDef (value => 0);
  setLodoLuck (value => 0);
  setAzadiAtk (value => 0);
  setAzadiDef (value => 0);
  setAzadiLuck (value => 0);
  setSuwoAtk (value => 0);
  setSuwoDef (value => 0);
  setSuwoLuck (value => 0);

  setNoanzaIsShown (current => false);
  setNoanzaActive (current => false);
  setLodoIsShown (current => false)
  setLodoIsShown (current => false)
  setAzadiIsShown (current => false)
  setAzadiIsShown (current => false)
  setSuwoIsShown (current => false)
  setSuwoIsShown (current => false)

  setLuckLoksiIsShown (current => !LuckLoksiIsShown);
  setLuckLoksiActive (current => !LuckLoksiIsShown);
  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 12);
  setLuckLoksiLuck (value => 4);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);

  setKaiszarIsShown (current => false);
  setKaiszarActive (current => false);
  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);

  setLoksiIsShown (current => true);
  setLoksiActive (current => true);
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setThalamarisIsShown (current => false);
  setThalamarisActive (current => false);
  setAtkThalamarisIsShown (current => false);
  setAtkThalamarisActive (current => false);
  setDefThalamarisIsShown (current => false);
  setDefThalamarisActive (current => false);
  setLuckThalamarisIsShown (current => false);
  setLuckThalamarisActive (current => false);
  setValkosIsShown (current => false);
  setValkosActive (current => false);
  setAtkValkosIsShown (current => false);
  setAtkValkosActive (current => false);
  setDefValkosIsShown (current => false);
  setDefValkosActive (current => false);
  setLuckValkosIsShown (current => false);
  setLuckValkosActive (current => false);
  setEenrisIsShown (current => false);
  setEenrisActive (current => false);
  setAtkEenrisIsShown (current => false);
  setAtkEenrisActive (current => false);
  setDefEenrisIsShown (current => false);
  setDefEenrisActive (current => false);
  setLuckEenrisIsShown (current => false);
  setLuckEenrisActive (current => false);
  setRairaselIsShown (current => false);
  setRairaselActive (current => false);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  };

const handleThalamarisSwitchClick = event => {
  setNoanzaAtk (value => 0);
  setNoanzaDef (value => 0);
  setNoanzaLuck (value => 0);
  setLodoAtk (value => 0);
  setLodoDef (value => 0);
  setLodoLuck (value => 0);
  setAzadiAtk (value => 0);
  setAzadiDef (value => 0);
  setAzadiLuck (value => 0);
  setSuwoAtk (value => 0);
  setSuwoDef (value => 0);
  setSuwoLuck (value => 0);

  setNoanzaIsShown (current => false);
  setNoanzaActive (current => false);
  setLodoIsShown (current => false)
  setLodoIsShown (current => false)
  setAzadiIsShown (current => false)
  setAzadiIsShown (current => false)
  setSuwoIsShown (current => false)
  setSuwoIsShown (current => false)

  setThalamarisIsShown (current => !ThalamarisIsShown);
  setThalamarisActive (current => !ThalamarisActive);
  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 12);
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);

  setKaiszarIsShown (current => false);
  setKaiszarActive (current => false);
  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);
  setLoksiIsShown (current => false);
  setLoksiActive (current => false);
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  setAtkThalamarisIsShown (current => false);
  setAtkThalamarisActive (current => false);
  setDefThalamarisIsShown (current => false);
  setDefThalamarisActive (current => false);
  setLuckThalamarisIsShown (current => false);
  setLuckThalamarisActive (current => false);
  setValkosIsShown (current => false);
  setValkosActive (current => false);
  setAtkValkosIsShown (current => false);
  setAtkValkosActive (current => false);
  setDefValkosIsShown (current => false);
  setDefValkosActive (current => false);
  setLuckValkosIsShown (current => false);
  setLuckValkosActive (current => false);
  setEenrisIsShown (current => false);
  setEenrisActive (current => false);
  setAtkEenrisIsShown (current => false);
  setAtkEenrisActive (current => false);
  setDefEenrisIsShown (current => false);
  setDefEenrisActive (current => false);
  setLuckEenrisIsShown (current => false);
  setLuckEenrisActive (current => false);
  setRairaselIsShown (current => false);
  setRairaselActive (current => false);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  };

const handleAtkThalamarisSwitchClick = event => {
  setNoanzaAtk (value => 0);
  setNoanzaDef (value => 0);
  setNoanzaLuck (value => 0);
  setLodoAtk (value => 0);
  setLodoDef (value => 0);
  setLodoLuck (value => 0);
  setAzadiAtk (value => 0);
  setAzadiDef (value => 0);
  setAzadiLuck (value => 0);
  setSuwoAtk (value => 0);
  setSuwoDef (value => 0);
  setSuwoLuck (value => 0);

  setNoanzaIsShown (current => false);
  setNoanzaActive (current => false);
  setLodoIsShown (current => false)
  setLodoIsShown (current => false)
  setAzadiIsShown (current => false)
  setAzadiIsShown (current => false)
  setSuwoIsShown (current => false)
  setSuwoIsShown (current => false)

  setAtkThalamarisIsShown (current => !AtkThalamarisIsShown);
  setAtkThalamarisActive (current => !AtkThalamarisIsShown);
  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setAtkThalamarisAtk (value => 4);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 12);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);

  setKaiszarIsShown (current => false);
  setKaiszarActive (current => false);
  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);
  setLoksiIsShown (current => false);
  setLoksiActive (current => false);
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  setThalamarisIsShown (current => true);
  setThalamarisActive (current => true);
  setDefThalamarisIsShown (current => false);
  setDefThalamarisActive (current => false);
  setLuckThalamarisIsShown (current => false);
  setLuckThalamarisActive (current => false);
  setValkosIsShown (current => false);
  setValkosActive (current => false);
  setAtkValkosIsShown (current => false);
  setAtkValkosActive (current => false);
  setDefValkosIsShown (current => false);
  setDefValkosActive (current => false);
  setLuckValkosIsShown (current => false);
  setLuckValkosActive (current => false);
  setEenrisIsShown (current => false);
  setEenrisActive (current => false);
  setAtkEenrisIsShown (current => false);
  setAtkEenrisActive (current => false);
  setDefEenrisIsShown (current => false);
  setDefEenrisActive (current => false);
  setLuckEenrisIsShown (current => false);
  setLuckEenrisActive (current => false);
  setRairaselIsShown (current => false);
  setRairaselActive (current => false);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  };

const handleDefThalamarisSwitchClick = event => {
  setNoanzaAtk (value => 0);
  setNoanzaDef (value => 0);
  setNoanzaLuck (value => 0);
  setLodoAtk (value => 0);
  setLodoDef (value => 0);
  setLodoLuck (value => 0);
  setAzadiAtk (value => 0);
  setAzadiDef (value => 0);
  setAzadiLuck (value => 0);
  setSuwoAtk (value => 0);
  setSuwoDef (value => 0);
  setSuwoLuck (value => 0);

  setNoanzaIsShown (current => false);
  setNoanzaActive (current => false);
  setLodoIsShown (current => false)
  setLodoIsShown (current => false)
  setAzadiIsShown (current => false)
  setAzadiIsShown (current => false)
  setSuwoIsShown (current => false)
  setSuwoIsShown (current => false)

  setDefThalamarisIsShown (current => !DefThalamarisIsShown);
  setDefThalamarisActive (current => !DefThalamarisIsShown);
  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 4);
  setDefThalamarisLuck (value => 12);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);

  setKaiszarIsShown (current => false);
  setKaiszarActive (current => false);
  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);
  setLoksiIsShown (current => false);
  setLoksiActive (current => false);
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  setThalamarisIsShown (current => true);
  setThalamarisActive (current => true);
  setAtkThalamarisIsShown (current => false);
  setAtkThalamarisActive (current => false);
  setLuckThalamarisIsShown (current => false);
  setLuckThalamarisActive (current => false);
  setValkosIsShown (current => false);
  setValkosActive (current => false);
  setAtkValkosIsShown (current => false);
  setAtkValkosActive (current => false);
  setDefValkosIsShown (current => false);
  setDefValkosActive (current => false);
  setLuckValkosIsShown (current => false);
  setLuckValkosActive (current => false);
  setEenrisIsShown (current => false);
  setEenrisActive (current => false);
  setAtkEenrisIsShown (current => false);
  setAtkEenrisActive (current => false);
  setDefEenrisIsShown (current => false);
  setDefEenrisActive (current => false);
  setLuckEenrisIsShown (current => false);
  setLuckEenrisActive (current => false);
  setRairaselIsShown (current => false);
  setRairaselActive (current => false);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  };

const handleLuckThalamarisSwitchClick = event => {
  setNoanzaAtk (value => 0);
  setNoanzaDef (value => 0);
  setNoanzaLuck (value => 0);
  setLodoAtk (value => 0);
  setLodoDef (value => 0);
  setLodoLuck (value => 0);
  setAzadiAtk (value => 0);
  setAzadiDef (value => 0);
  setAzadiLuck (value => 0);
  setSuwoAtk (value => 0);
  setSuwoDef (value => 0);
  setSuwoLuck (value => 0);

  setNoanzaIsShown (current => false);
  setNoanzaActive (current => false);
  setLodoIsShown (current => false)
  setLodoIsShown (current => false)
  setAzadiIsShown (current => false)
  setAzadiIsShown (current => false)
  setSuwoIsShown (current => false)
  setSuwoIsShown (current => false)

  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 16);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);

  setKaiszarIsShown (current => false);
  setKaiszarActive (current => false);
  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);
  setLoksiIsShown (current => false);
  setLoksiActive (current => false);
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  setThalamarisIsShown (current => true);
  setThalamarisActive (current => true);
  setAtkThalamarisIsShown (current => false);
  setAtkThalamarisActive (current => false);
  setDefThalamarisIsShown (current => false);
  setDefThalamarisActive (current => false);
  setValkosIsShown (current => false);
  setValkosActive (current => false);
  setAtkValkosIsShown (current => false);
  setAtkValkosActive (current => false);
  setDefValkosIsShown (current => false);
  setDefValkosActive (current => false);
  setLuckValkosIsShown (current => false);
  setLuckValkosActive (current => false);
  setEenrisIsShown (current => false);
  setEenrisActive (current => false);
  setAtkEenrisIsShown (current => false);
  setAtkEenrisActive (current => false);
  setDefEenrisIsShown (current => false);
  setDefEenrisActive (current => false);
  setLuckEenrisIsShown (current => false);
  setLuckEenrisActive (current => false);
  setRairaselIsShown (current => false);
  setRairaselActive (current => false);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  };

const handleValkosSwitchClick = event => {
  setNoanzaAtk (value => 0);
  setNoanzaDef (value => 0);
  setNoanzaLuck (value => 0);
  setLodoAtk (value => 0);
  setLodoDef (value => 0);
  setLodoLuck (value => 0);
  setAzadiAtk (value => 0);
  setAzadiDef (value => 0);
  setAzadiLuck (value => 0);
  setSuwoAtk (value => 0);
  setSuwoDef (value => 0);
  setSuwoLuck (value => 0);

  setNoanzaIsShown (current => false);
  setNoanzaActive (current => false);
  setLodoIsShown (current => false)
  setLodoIsShown (current => false)
  setAzadiIsShown (current => false)
  setAzadiIsShown (current => false)
  setSuwoIsShown (current => false)
  setSuwoIsShown (current => false)

  setValkosIsShown (current => !ValkosIsShown);
  setValkosActive (current => !ValkosActive);
  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
  setValkosAtk (value => 4);
  setValkosDef (value => 4);
  setValkosLuck (value => 4);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);

  setKaiszarIsShown (current => false);
  setKaiszarActive (current => false);
  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);
  setLoksiIsShown (current => false);
  setLoksiActive (current => false);
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  setThalamarisIsShown (current => false);
  setThalamarisActive (current => false);
  setAtkThalamarisIsShown (current => false);
  setAtkThalamarisActive (current => false);
  setDefThalamarisIsShown (current => false);
  setDefThalamarisActive (current => false);
  setLuckThalamarisIsShown (current => false);
  setLuckThalamarisActive (current => false);
  setAtkValkosIsShown (current => false);
  setAtkValkosActive (current => false);
  setDefValkosIsShown (current => false);
  setDefValkosActive (current => false);
  setLuckValkosIsShown (current => false);
  setLuckValkosActive (current => false);
  setEenrisIsShown (current => false);
  setEenrisActive (current => false);
  setAtkEenrisIsShown (current => false);
  setAtkEenrisActive (current => false);
  setDefEenrisIsShown (current => false);
  setDefEenrisActive (current => false);
  setLuckEenrisIsShown (current => false);
  setLuckEenrisActive (current => false);
  setRairaselIsShown (current => false);
  setRairaselActive (current => false);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  };

const handleAtkValkosSwitchClick = event => {
  setNoanzaAtk (value => 0);
  setNoanzaDef (value => 0);
  setNoanzaLuck (value => 0);
  setLodoAtk (value => 0);
  setLodoDef (value => 0);
  setLodoLuck (value => 0);
  setAzadiAtk (value => 0);
  setAzadiDef (value => 0);
  setAzadiLuck (value => 0);
  setSuwoAtk (value => 0);
  setSuwoDef (value => 0);
  setSuwoLuck (value => 0);

  setNoanzaIsShown (current => false);
  setNoanzaActive (current => false);
  setLodoIsShown (current => false)
  setLodoIsShown (current => false)
  setAzadiIsShown (current => false)
  setAzadiIsShown (current => false)
  setSuwoIsShown (current => false)
  setSuwoIsShown (current => false)

  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setAtkValkosAtk (value => 8);
  setAtkValkosDef (value => 4);
  setAtkValkosLuck (value => 4);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);

  setKaiszarIsShown (current => false);
  setKaiszarActive (current => false);
  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);
  setLoksiIsShown (current => false);
  setLoksiActive (current => false);
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  setThalamarisIsShown (current => false);
  setThalamarisActive (current => false);
  setAtkThalamarisIsShown (current => false);
  setAtkThalamarisActive (current => false);
  setDefThalamarisIsShown (current => false);
  setDefThalamarisActive (current => false);
  setLuckThalamarisIsShown (current => false);
  setLuckThalamarisActive (current => false);
  setValkosIsShown (current => true);
  setValkosActive (current => true);
  setDefValkosIsShown (current => false);
  setDefValkosActive (current => false);
  setLuckValkosIsShown (current => false);
  setLuckValkosActive (current => false);
  setEenrisIsShown (current => false);
  setEenrisActive (current => false);
  setAtkEenrisIsShown (current => false);
  setAtkEenrisActive (current => false);
  setDefEenrisIsShown (current => false);
  setDefEenrisActive (current => false);
  setLuckEenrisIsShown (current => false);
  setLuckEenrisActive (current => false);
  setRairaselIsShown (current => false);
  setRairaselActive (current => false);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  };

const handleDefValkosSwitchClick = event => {
  setNoanzaAtk (value => 0);
  setNoanzaDef (value => 0);
  setNoanzaLuck (value => 0);
  setLodoAtk (value => 0);
  setLodoDef (value => 0);
  setLodoLuck (value => 0);
  setAzadiAtk (value => 0);
  setAzadiDef (value => 0);
  setAzadiLuck (value => 0);
  setSuwoAtk (value => 0);
  setSuwoDef (value => 0);
  setSuwoLuck (value => 0);

  setNoanzaIsShown (current => false);
  setNoanzaActive (current => false);
  setLodoIsShown (current => false)
  setLodoIsShown (current => false)
  setAzadiIsShown (current => false)
  setAzadiIsShown (current => false)
  setSuwoIsShown (current => false)
  setSuwoIsShown (current => false)

  setDefValkosIsShown (current => !DefValkosIsShown);
  setDefValkosActive (current => !DefValkosIsShown);
  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  setDefValkosAtk (value => 4);
  setDefValkosDef (value => 8);
  setDefValkosLuck (value => 4);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);

  setKaiszarIsShown (current => false);
  setKaiszarActive (current => false);
  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);
  setLoksiIsShown (current => false);
  setLoksiActive (current => false);
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  setThalamarisIsShown (current => false);
  setThalamarisActive (current => false);
  setAtkThalamarisIsShown (current => false);
  setAtkThalamarisActive (current => false);
  setDefThalamarisIsShown (current => false);
  setDefThalamarisActive (current => false);
  setLuckThalamarisIsShown (current => false);
  setLuckThalamarisActive (current => false);
  setValkosIsShown (current => true);
  setValkosActive (current => true);
  setAtkValkosIsShown (current => false);
  setAtkValkosActive (current => false);
  setLuckValkosIsShown (current => false);
  setLuckValkosActive (current => false);
  setEenrisIsShown (current => false);
  setEenrisActive (current => false);
  setAtkEenrisIsShown (current => false);
  setAtkEenrisActive (current => false);
  setDefEenrisIsShown (current => false);
  setDefEenrisActive (current => false);
  setLuckEenrisIsShown (current => false);
  setLuckEenrisActive (current => false);
  setRairaselIsShown (current => false);
  setRairaselActive (current => false);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  };

const handleLuckValkosSwitchClick = event => {
  setNoanzaAtk (value => 0);
  setNoanzaDef (value => 0);
  setNoanzaLuck (value => 0);
  setLodoAtk (value => 0);
  setLodoDef (value => 0);
  setLodoLuck (value => 0);
  setAzadiAtk (value => 0);
  setAzadiDef (value => 0);
  setAzadiLuck (value => 0);
  setSuwoAtk (value => 0);
  setSuwoDef (value => 0);
  setSuwoLuck (value => 0);

  setNoanzaIsShown (current => false);
  setNoanzaActive (current => false);
  setLodoIsShown (current => false)
  setLodoIsShown (current => false)
  setAzadiIsShown (current => false)
  setAzadiIsShown (current => false)
  setSuwoIsShown (current => false)
  setSuwoIsShown (current => false)

  setLuckValkosIsShown (current => !LuckValkosIsShown);
  setLuckValkosActive (current => !LuckValkosIsShown);
  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  setLuckValkosAtk (value => 4);
  setLuckValkosDef (value => 4);
  setLuckValkosLuck (value => 8);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);

  setKaiszarIsShown (current => false);
  setKaiszarActive (current => false);
  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);
  setLoksiIsShown (current => false);
  setLoksiActive (current => false);
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  setThalamarisIsShown (current => false);
  setThalamarisActive (current => false);
  setAtkThalamarisIsShown (current => false);
  setAtkThalamarisActive (current => false);
  setDefThalamarisIsShown (current => false);
  setDefThalamarisActive (current => false);
  setLuckThalamarisIsShown (current => false);
  setLuckThalamarisActive (current => false);
  setValkosIsShown (current => true);
  setValkosActive (current => true);
  setAtkValkosIsShown (current => false);
  setAtkValkosActive (current => false);
  setDefValkosIsShown (current => false);
  setDefValkosActive (current => false);
  setEenrisIsShown (current => false);
  setEenrisActive (current => false);
  setAtkEenrisIsShown (current => false);
  setAtkEenrisActive (current => false);
  setDefEenrisIsShown (current => false);
  setDefEenrisActive (current => false);
  setLuckEenrisIsShown (current => false);
  setLuckEenrisActive (current => false);
  setRairaselIsShown (current => false);
  setRairaselActive (current => false);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  };

const handleEenrisSwitchClick = event => {
  setNoanzaAtk (value => 0);
  setNoanzaDef (value => 0);
  setNoanzaLuck (value => 0);
  setLodoAtk (value => 0);
  setLodoDef (value => 0);
  setLodoLuck (value => 0);
  setAzadiAtk (value => 0);
  setAzadiDef (value => 0);
  setAzadiLuck (value => 0);
  setSuwoAtk (value => 0);
  setSuwoDef (value => 0);
  setSuwoLuck (value => 0);

  setNoanzaIsShown (current => false);
  setNoanzaActive (current => false);
  setLodoIsShown (current => false)
  setLodoIsShown (current => false)
  setAzadiIsShown (current => false)
  setAzadiIsShown (current => false)
  setSuwoIsShown (current => false)
  setSuwoIsShown (current => false)

  setEenrisIsShown (current => !EenrisIsShown);
  setEenrisActive (current => !EenrisIsShown);
  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
  setEenrisAtk (value => 3);
  setEenrisDef (value => 6);
  setEenrisLuck (value => 3);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);

  setKaiszarIsShown (current => false);
  setKaiszarActive (current => false);
  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);
  setLoksiIsShown (current => false);
  setLoksiActive (current => false);
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  setThalamarisIsShown (current => false);
  setThalamarisActive (current => false);
  setAtkThalamarisIsShown (current => false);
  setAtkThalamarisActive (current => false);
  setDefThalamarisIsShown (current => false);
  setDefThalamarisActive (current => false);
  setLuckThalamarisIsShown (current => false);
  setLuckThalamarisActive (current => false);
  setValkosIsShown (current => false);
  setValkosActive (current => false);
  setAtkValkosIsShown (current => false);
  setAtkValkosActive (current => false);
  setDefValkosIsShown (current => false);
  setDefValkosActive (current => false);
  setLuckValkosIsShown (current => false);
  setLuckValkosActive (current => false);
  setAtkEenrisIsShown (current => false);
  setAtkEenrisActive (current => false);
  setDefEenrisIsShown (current => false);
  setDefEenrisActive (current => false);
  setLuckEenrisIsShown (current => false);
  setLuckEenrisActive (current => false);
  setRairaselIsShown (current => false);
  setRairaselActive (current => false);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  };

const handleAtkEenrisSwitchClick = event => {
  setNoanzaAtk (value => 0);
  setNoanzaDef (value => 0);
  setNoanzaLuck (value => 0);
  setLodoAtk (value => 0);
  setLodoDef (value => 0);
  setLodoLuck (value => 0);
  setAzadiAtk (value => 0);
  setAzadiDef (value => 0);
  setAzadiLuck (value => 0);
  setSuwoAtk (value => 0);
  setSuwoDef (value => 0);
  setSuwoLuck (value => 0);

  setNoanzaIsShown (current => false);
  setNoanzaActive (current => false);
  setLodoIsShown (current => false)
  setLodoIsShown (current => false)
  setAzadiIsShown (current => false)
  setAzadiIsShown (current => false)
  setSuwoIsShown (current => false)
  setSuwoIsShown (current => false)

  setAtkEenrisIsShown (current => !AtkEenrisIsShown);
  setAtkEenrisActive (current => !AtkEenrisIsShown);
  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setAtkEenrisAtk (value => 7);
  setAtkEenrisDef (value => 6);
  setAtkEenrisLuck (value => 3);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);

  setKaiszarIsShown (current => false);
  setKaiszarActive (current => false);
  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);
  setLoksiIsShown (current => false);
  setLoksiActive (current => false);
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  setThalamarisIsShown (current => false);
  setThalamarisActive (current => false);
  setAtkThalamarisIsShown (current => false);
  setAtkThalamarisActive (current => false);
  setDefThalamarisIsShown (current => false);
  setDefThalamarisActive (current => false);
  setLuckThalamarisIsShown (current => false);
  setLuckThalamarisActive (current => false);
  setValkosIsShown (current => false);
  setValkosActive (current => false);
  setAtkValkosIsShown (current => false);
  setAtkValkosActive (current => false);
  setDefValkosIsShown (current => false);
  setDefValkosActive (current => false);
  setLuckValkosIsShown (current => false);
  setLuckValkosActive (current => false);
  setEenrisIsShown (current => true);
  setEenrisActive (current => true);
  setDefEenrisIsShown (current => false);
  setDefEenrisActive (current => false);
  setLuckEenrisIsShown (current => false);
  setLuckEenrisActive (current => false);
  setRairaselIsShown (current => false);
  setRairaselActive (current => false);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  };

const handleDefEenrisSwitchClick = event => {
  setNoanzaAtk (value => 0);
  setNoanzaDef (value => 0);
  setNoanzaLuck (value => 0);
  setLodoAtk (value => 0);
  setLodoDef (value => 0);
  setLodoLuck (value => 0);
  setAzadiAtk (value => 0);
  setAzadiDef (value => 0);
  setAzadiLuck (value => 0);
  setSuwoAtk (value => 0);
  setSuwoDef (value => 0);
  setSuwoLuck (value => 0);

  setNoanzaIsShown (current => false);
  setNoanzaActive (current => false);
  setLodoIsShown (current => false)
  setLodoIsShown (current => false)
  setAzadiIsShown (current => false)
  setAzadiIsShown (current => false)
  setSuwoIsShown (current => false)
  setSuwoIsShown (current => false)

  setDefEenrisIsShown (current => !DefEenrisIsShown);
  setDefEenrisActive (current => !DefEenrisIsShown);
  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  setDefEenrisAtk (value => 3);
  setDefEenrisDef (value => 10);
  setDefEenrisLuck (value => 3);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);

  setKaiszarIsShown (current => false);
  setKaiszarActive (current => false);
  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);
  setLoksiIsShown (current => false);
  setLoksiActive (current => false);
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  setThalamarisIsShown (current => false);
  setThalamarisActive (current => false);
  setAtkThalamarisIsShown (current => false);
  setAtkThalamarisActive (current => false);
  setDefThalamarisIsShown (current => false);
  setDefThalamarisActive (current => false);
  setLuckThalamarisIsShown (current => false);
  setLuckThalamarisActive (current => false);
  setValkosIsShown (current => false);
  setValkosActive (current => false);
  setAtkValkosIsShown (current => false);
  setAtkValkosActive (current => false);
  setDefValkosIsShown (current => false);
  setDefValkosActive (current => false);
  setLuckValkosIsShown (current => false);
  setLuckValkosActive (current => false);
  setEenrisIsShown (current => true);
  setEenrisActive (current => true);
  setAtkEenrisIsShown (current => false);
  setAtkEenrisActive (current => false);
  setLuckEenrisIsShown (current => false);
  setLuckEenrisActive (current => false);
  setRairaselIsShown (current => false);
  setRairaselActive (current => false);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  };

const handleLuckEenrisSwitchClick = event => {
  setNoanzaAtk (value => 0);
  setNoanzaDef (value => 0);
  setNoanzaLuck (value => 0);
  setLodoAtk (value => 0);
  setLodoDef (value => 0);
  setLodoLuck (value => 0);
  setAzadiAtk (value => 0);
  setAzadiDef (value => 0);
  setAzadiLuck (value => 0);
  setSuwoAtk (value => 0);
  setSuwoDef (value => 0);
  setSuwoLuck (value => 0);

  setNoanzaIsShown (current => false);
  setNoanzaActive (current => false);
  setLodoIsShown (current => false)
  setLodoIsShown (current => false)
  setAzadiIsShown (current => false)
  setAzadiIsShown (current => false)
  setSuwoIsShown (current => false)
  setSuwoIsShown (current => false)

  setLuckEenrisIsShown (current => !LuckEenrisIsShown);
  setLuckEenrisActive (current => !LuckEenrisIsShown);
  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  setLuckEenrisAtk (value => 3);
  setLuckEenrisDef (value => 6);
  setLuckEenrisLuck (value => 7);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);

  setKaiszarIsShown (current => false);
  setKaiszarActive (current => false);
  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);
  setLoksiIsShown (current => false);
  setLoksiActive (current => false);
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  setThalamarisIsShown (current => false);
  setThalamarisActive (current => false);
  setAtkThalamarisIsShown (current => false);
  setAtkThalamarisActive (current => false);
  setDefThalamarisIsShown (current => false);
  setDefThalamarisActive (current => false);
  setLuckThalamarisIsShown (current => false);
  setLuckThalamarisActive (current => false);
  setValkosIsShown (current => false);
  setValkosActive (current => false);
  setAtkValkosIsShown (current => false);
  setAtkValkosActive (current => false);
  setDefValkosIsShown (current => false);
  setDefValkosActive (current => false);
  setLuckValkosIsShown (current => false);
  setLuckValkosActive (current => false);
  setEenrisIsShown (current => true);
  setEenrisActive (current => true);
  setAtkEenrisIsShown (current => false);
  setAtkEenrisActive (current => false);
  setDefEenrisIsShown (current => false);
  setDefEenrisActive (current => false);
  setRairaselIsShown (current => false);
  setRairaselActive (current => false);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  };

const handleRairaselSwitchClick = event => {
  setNoanzaAtk (value => 0);
  setNoanzaDef (value => 0);
  setNoanzaLuck (value => 0);
  setLodoAtk (value => 0);
  setLodoDef (value => 0);
  setLodoLuck (value => 0);
  setAzadiAtk (value => 0);
  setAzadiDef (value => 0);
  setAzadiLuck (value => 0);
  setSuwoAtk (value => 0);
  setSuwoDef (value => 0);
  setSuwoLuck (value => 0);

  setNoanzaIsShown (current => false);
  setNoanzaActive (current => false);
  setLodoIsShown (current => false)
  setLodoIsShown (current => false)
  setAzadiIsShown (current => false)
  setAzadiIsShown (current => false)
  setSuwoIsShown (current => false)
  setSuwoIsShown (current => false)

  setRairaselIsShown (current => !RairaselIsShown);
  setRairaselActive (current => !RairaselActive);
  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
  setRairaselAtk (value => 6);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 6);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);

  setKaiszarIsShown (current => false);
  setKaiszarActive (current => false);
  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);
  setLoksiIsShown (current => false);
  setLoksiActive (current => false);
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  setThalamarisIsShown (current => false);
  setThalamarisActive (current => false);
  setAtkThalamarisIsShown (current => false);
  setAtkThalamarisActive (current => false);
  setDefThalamarisIsShown (current => false);
  setDefThalamarisActive (current => false);
  setLuckThalamarisIsShown (current => false);
  setLuckThalamarisActive (current => false);
  setValkosIsShown (current => false);
  setValkosActive (current => false);
  setAtkValkosIsShown (current => false);
  setAtkValkosActive (current => false);
  setDefValkosIsShown (current => false);
  setDefValkosActive (current => false);
  setLuckValkosIsShown (current => false);
  setLuckValkosActive (current => false);
  setEenrisIsShown (current => false);
  setEenrisActive (current => false);
  setAtkEenrisIsShown (current => false);
  setAtkEenrisActive (current => false);
  setDefEenrisIsShown (current => false);
  setDefEenrisActive (current => false);
  setLuckEenrisIsShown (current => false);
  setLuckEenrisActive (current => false);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  };

const handleAtkRairaselSwitchClick = event => {
  setNoanzaAtk (value => 0);
  setNoanzaDef (value => 0);
  setNoanzaLuck (value => 0);
  setLodoAtk (value => 0);
  setLodoDef (value => 0);
  setLodoLuck (value => 0);
  setAzadiAtk (value => 0);
  setAzadiDef (value => 0);
  setAzadiLuck (value => 0);
  setSuwoAtk (value => 0);
  setSuwoDef (value => 0);
  setSuwoLuck (value => 0);

  setNoanzaIsShown (current => false);
  setNoanzaActive (current => false);
  setLodoIsShown (current => false)
  setLodoIsShown (current => false)
  setAzadiIsShown (current => false)
  setAzadiIsShown (current => false)
  setSuwoIsShown (current => false)
  setSuwoIsShown (current => false)

  setAtkRairaselIsShown (current => !AtkRairaselIsShown);
  setAtkRairaselActive (current => !AtkRairaselIsShown);
  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setAtkRairaselAtk (value => 10);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 6);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);

  setKaiszarIsShown (current => false);
  setKaiszarActive (current => false);
  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);
  setLoksiIsShown (current => false);
  setLoksiActive (current => false);
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  setThalamarisIsShown (current => false);
  setThalamarisActive (current => false);
  setAtkThalamarisIsShown (current => false);
  setAtkThalamarisActive (current => false);
  setDefThalamarisIsShown (current => false);
  setDefThalamarisActive (current => false);
  setLuckThalamarisIsShown (current => false);
  setLuckThalamarisActive (current => false);
  setValkosIsShown (current => false);
  setValkosActive (current => false);
  setAtkValkosIsShown (current => false);
  setAtkValkosActive (current => false);
  setDefValkosIsShown (current => false);
  setDefValkosActive (current => false);
  setLuckValkosIsShown (current => false);
  setLuckValkosActive (current => false);
  setEenrisIsShown (current => false);
  setEenrisActive (current => false);
  setAtkEenrisIsShown (current => false);
  setAtkEenrisActive (current => false);
  setDefEenrisIsShown (current => false);
  setDefEenrisActive (current => false);
  setLuckEenrisIsShown (current => false);
  setLuckEenrisActive (current => false);
  setRairaselIsShown (current => true);
  setRairaselActive (current => true);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  };

const handleDefRairaselSwitchClick = event => {
  setNoanzaAtk (value => 0);
  setNoanzaDef (value => 0);
  setNoanzaLuck (value => 0);
  setLodoAtk (value => 0);
  setLodoDef (value => 0);
  setLodoLuck (value => 0);
  setAzadiAtk (value => 0);
  setAzadiDef (value => 0);
  setAzadiLuck (value => 0);
  setSuwoAtk (value => 0);
  setSuwoDef (value => 0);
  setSuwoLuck (value => 0);

  setNoanzaIsShown (current => false);
  setNoanzaActive (current => false);
  setLodoIsShown (current => false)
  setLodoIsShown (current => false)
  setAzadiIsShown (current => false)
  setAzadiIsShown (current => false)
  setSuwoIsShown (current => false)
  setSuwoIsShown (current => false)

  setDefRairaselIsShown (current => !DefRairaselIsShown);
  setDefRairaselActive (current => !DefRairaselIsShown);
  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  setDefRairaselAtk (value => 6);
  setDefRairaselDef (value => 4);
  setDefRairaselLuck (value => 6);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);

  setKaiszarIsShown (current => false);
  setKaiszarActive (current => false);
  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);
  setLoksiIsShown (current => false);
  setLoksiActive (current => false);
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  setThalamarisIsShown (current => false);
  setThalamarisActive (current => false);
  setAtkThalamarisIsShown (current => false);
  setAtkThalamarisActive (current => false);
  setDefThalamarisIsShown (current => false);
  setDefThalamarisActive (current => false);
  setLuckThalamarisIsShown (current => false);
  setLuckThalamarisActive (current => false);
  setValkosIsShown (current => false);
  setValkosActive (current => false);
  setAtkValkosIsShown (current => false);
  setAtkValkosActive (current => false);
  setDefValkosIsShown (current => false);
  setDefValkosActive (current => false);
  setLuckValkosIsShown (current => false);
  setLuckValkosActive (current => false);
  setEenrisIsShown (current => false);
  setEenrisActive (current => false);
  setAtkEenrisIsShown (current => false);
  setAtkEenrisActive (current => false);
  setDefEenrisIsShown (current => false);
  setDefEenrisActive (current => false);
  setLuckEenrisIsShown (current => false);
  setLuckEenrisActive (current => false);
  setRairaselIsShown (current => true);
  setRairaselActive (current => true);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  };

const handleLuckRairaselSwitchClick = event => {
  setNoanzaAtk (value => 0);
  setNoanzaDef (value => 0);
  setNoanzaLuck (value => 0);
  setLodoAtk (value => 0);
  setLodoDef (value => 0);
  setLodoLuck (value => 0);
  setAzadiAtk (value => 0);
  setAzadiDef (value => 0);
  setAzadiLuck (value => 0);
  setSuwoAtk (value => 0);
  setSuwoDef (value => 0);
  setSuwoLuck (value => 0);

  setNoanzaIsShown (current => false);
  setNoanzaActive (current => false);
  setLodoIsShown (current => false)
  setLodoIsShown (current => false)
  setAzadiIsShown (current => false)
  setAzadiIsShown (current => false)
  setSuwoIsShown (current => false)
  setSuwoIsShown (current => false)

  setLuckRairaselIsShown (current => !LuckRairaselIsShown);
  setLuckRairaselActive (current => !LuckRairaselIsShown);
  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  setLuckRairaselAtk (value => 6);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 10);

  setKaiszarIsShown (current => false);
  setKaiszarActive (current => false);
  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);
  setLoksiIsShown (current => false);
  setLoksiActive (current => false);
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  setThalamarisIsShown (current => false);
  setThalamarisActive (current => false);
  setAtkThalamarisIsShown (current => false);
  setAtkThalamarisActive (current => false);
  setDefThalamarisIsShown (current => false);
  setDefThalamarisActive (current => false);
  setLuckThalamarisIsShown (current => false);
  setLuckThalamarisActive (current => false);
  setValkosIsShown (current => false);
  setValkosActive (current => false);
  setAtkValkosIsShown (current => false);
  setAtkValkosActive (current => false);
  setDefValkosIsShown (current => false);
  setDefValkosActive (current => false);
  setLuckValkosIsShown (current => false);
  setLuckValkosActive (current => false);
  setEenrisIsShown (current => false);
  setEenrisActive (current => false);
  setAtkEenrisIsShown (current => false);
  setAtkEenrisActive (current => false);
  setDefEenrisIsShown (current => false);
  setDefEenrisActive (current => false);
  setLuckEenrisIsShown (current => false);
  setLuckEenrisActive (current => false);
  setRairaselIsShown (current => true);
  setRairaselActive (current => true);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  };

const handleAlderbamSwitchClick = event => {
   setAlderbamIsShown (current => !AlderbamIsShown);
   setAlderbamActive (current => !AlderbamActive);
   setNoanzaAtk (value => 0);
   setNoanzaDef (value => 0);
   setNoanzaLuck (value => 0);
   setLodoAtk (value => 0);
   setLodoDef (value => 0);
   setLodoLuck (value => 0);
   setAzadiAtk (value => 0);
   setAzadiDef (value => 0);
   setAzadiLuck (value => 0);
   setSuwoAtk (value => 0);
   setSuwoDef (value => 0);
   setSuwoLuck (value => 0);
 
   setLodoIsShown (current => false)
   setLodoIsShown (current => false)
   setAzadiIsShown (current => false)
   setAzadiIsShown (current => false)
   setSuwoIsShown (current => false)
   setSuwoIsShown (current => false)
   setNoanzaIsShown (current => false);
   setNoanzaActive (current => false);
 
   setAlderbamAtk (value => 0);
   setAlderbamDef (value => 0);
   setAlderbamLuck (value => 12);
   setChysisAtk (value => 0);
   setChysisDef (value => 0);
   setChysisLuck (value => 0);
   setMundAtk (value => 0);
   setMundDef (value => 0);
   setMundLuck (value => 0);
   setWhodiniAtk (value => 0);
   setWhodiniDef (value => 0);
   setWhodiniLuck (value => 0);
 
   setChysisIsShown (current => false)
   setChysisIsShown (current => false)
   setMundIsShown (current => false)
   setMundIsShown (current => false)
   setWhodiniIsShown (current => false)
   setWhodiniIsShown (current => false)
 
   setKaiszarAtk (value => 0);
   setKaiszarDef (value => 0);
   setKaiszarLuck (value => 0);
   setAtkKaiszarAtk (value => 0);
   setAtkKaiszarDef (value => 0);
   setAtkKaiszarLuck (value => 0);
   setDefKaiszarAtk (value => 0);
   setDefKaiszarDef (value => 0);
   setDefKaiszarLuck (value => 0);
   setLuckKaiszarAtk (value => 0);
   setLuckKaiszarDef (value => 0);
   setLuckKaiszarLuck (value => 0);
   setLoksiAtk (value => 0);
   setLoksiDef (value => 0);
   setLoksiLuck (value => 0);
   setAtkLoksiAtk (value => 0);
   setAtkLoksiDef (value => 0);
   setAtkLoksiLuck (value => 0);
   setDefLoksiAtk (value => 0);
   setDefLoksiDef (value => 0);
   setDefLoksiLuck (value => 0);
   setLuckLoksiAtk (value => 0);
   setLuckLoksiDef (value => 0);
   setLuckLoksiLuck (value => 0);
   setThalamarisAtk (value => 0);
   setThalamarisDef (value => 0);
   setThalamarisLuck (value => 0);
   setAtkThalamarisAtk (value => 0);
   setAtkThalamarisDef (value => 0);
   setAtkThalamarisLuck (value => 0);
   setDefThalamarisAtk (value => 0);
   setDefThalamarisDef (value => 0);
   setDefThalamarisLuck (value => 0);
   setLuckThalamarisAtk (value => 0);
   setLuckThalamarisDef (value => 0);
   setLuckThalamarisLuck (value => 0);
   setValkosAtk (value => 0);
   setValkosDef (value => 0);
   setValkosLuck (value => 0);
   setAtkValkosAtk (value => 0);
   setAtkValkosDef (value => 0);
   setAtkValkosLuck (value => 0);
   setDefValkosAtk (value => 0);
   setDefValkosDef (value => 0);
   setDefValkosLuck (value => 0);
   setLuckValkosAtk (value => 0);
   setLuckValkosDef (value => 0);
   setLuckValkosLuck (value => 0);
   setEenrisAtk (value => 0);
   setEenrisDef (value => 0);
   setEenrisLuck (value => 0);
   setAtkEenrisAtk (value => 0);
   setAtkEenrisDef (value => 0);
   setAtkEenrisLuck (value => 0);
   setDefEenrisAtk (value => 0);
   setDefEenrisDef (value => 0);
   setDefEenrisLuck (value => 0);
   setLuckEenrisAtk (value => 0);
   setLuckEenrisDef (value => 0);
   setLuckEenrisLuck (value => 0);
   setRairaselAtk (value => 0);
   setRairaselDef (value => 0);
   setRairaselLuck (value => 0);
   setAtkRairaselAtk (value => 0);
   setAtkRairaselDef (value => 0);
   setAtkRairaselLuck (value => 0);
   setDefRairaselAtk (value => 0);
   setDefRairaselDef (value => 0);
   setDefRairaselLuck (value => 0);
   setLuckRairaselAtk (value => 0);
   setLuckRairaselDef (value => 0);
   setLuckRairaselLuck (value => 0);
 
   setKaiszarIsShown (current => false);
   setKaiszarActive (current => false);
   setAtkKaiszarIsShown (current => false);
   setAtkKaiszarActive (current => false);
   setDefKaiszarIsShown (current => false);
   setDefKaiszarActive (current => false);
   setLuckKaiszarIsShown (current => false);
   setLuckKaiszarActive (current => false);
   setLoksiIsShown (current => false);
   setLoksiActive (current => false);
   setAtkLoksiIsShown (current => false);
   setAtkLoksiActive (current => false);
   setDefLoksiIsShown (current => false);
   setDefLoksiActive (current => false);
   setLuckLoksiIsShown (current => false);
   setLuckLoksiActive (current => false);
   setThalamarisIsShown (current => false);
   setThalamarisActive (current => false);
   setAtkThalamarisIsShown (current => false);
   setAtkThalamarisActive (current => false);
   setDefThalamarisIsShown (current => false);
   setDefThalamarisActive (current => false);
   setLuckThalamarisIsShown (current => false);
   setLuckThalamarisActive (current => false);
   setValkosIsShown (current => false);
   setValkosActive (current => false);
   setAtkValkosIsShown (current => false);
   setAtkValkosActive (current => false);
   setDefValkosIsShown (current => false);
   setDefValkosActive (current => false);
   setLuckValkosIsShown (current => false);
   setLuckValkosActive (current => false);
   setEenrisIsShown (current => false);
   setEenrisActive (current => false);
   setAtkEenrisIsShown (current => false);
   setAtkEenrisActive (current => false);
   setDefEenrisIsShown (current => false);
   setDefEenrisActive (current => false);
   setLuckEenrisIsShown (current => false);
   setLuckEenrisActive (current => false);
   setRairaselIsShown (current => false);
   setRairaselActive (current => false);
   setAtkRairaselIsShown (current => false);
   setAtkRairaselActive (current => false);
   setDefRairaselIsShown (current => false);
   setDefRairaselActive (current => false);
   setLuckRairaselIsShown (current => false);
   setLuckRairaselActive (current => false);
   };

const handleChysisSwitchClick = event => {
   setChysisIsShown (current => !ChysisIsShown);
   setChysisActive (current => !ChysisActive);
   setNoanzaAtk (value => 0);
   setNoanzaDef (value => 0);
   setNoanzaLuck (value => 0);
   setLodoAtk (value => 0);
   setLodoDef (value => 0);
   setLodoLuck (value => 0);
   setAzadiAtk (value => 0);
   setAzadiDef (value => 0);
   setAzadiLuck (value => 0);
   setSuwoAtk (value => 0);
   setSuwoDef (value => 0);
   setSuwoLuck (value => 0);
 
   setLodoIsShown (current => false)
   setLodoIsShown (current => false)
   setAzadiIsShown (current => false)
   setAzadiIsShown (current => false)
   setSuwoIsShown (current => false)
   setSuwoIsShown (current => false)
   setNoanzaIsShown (current => false);
   setNoanzaActive (current => false);
 
   setAlderbamAtk (value => 0);
   setAlderbamDef (value => 0);
   setAlderbamLuck (value => 0);
   setChysisAtk (value => 12);
   setChysisDef (value => 0);
   setChysisLuck (value => 0);
   setMundAtk (value => 0);
   setMundDef (value => 0);
   setMundLuck (value => 0);
   setWhodiniAtk (value => 0);
   setWhodiniDef (value => 0);
   setWhodiniLuck (value => 0);
 
   setAlderbamIsShown (current => false)
   setAlderbamIsShown (current => false)
   setMundIsShown (current => false)
   setMundIsShown (current => false)
   setWhodiniIsShown (current => false)
   setWhodiniIsShown (current => false)
 
   setKaiszarAtk (value => 0);
   setKaiszarDef (value => 0);
   setKaiszarLuck (value => 0);
   setAtkKaiszarAtk (value => 0);
   setAtkKaiszarDef (value => 0);
   setAtkKaiszarLuck (value => 0);
   setDefKaiszarAtk (value => 0);
   setDefKaiszarDef (value => 0);
   setDefKaiszarLuck (value => 0);
   setLuckKaiszarAtk (value => 0);
   setLuckKaiszarDef (value => 0);
   setLuckKaiszarLuck (value => 0);
   setLoksiAtk (value => 0);
   setLoksiDef (value => 0);
   setLoksiLuck (value => 0);
   setAtkLoksiAtk (value => 0);
   setAtkLoksiDef (value => 0);
   setAtkLoksiLuck (value => 0);
   setDefLoksiAtk (value => 0);
   setDefLoksiDef (value => 0);
   setDefLoksiLuck (value => 0);
   setLuckLoksiAtk (value => 0);
   setLuckLoksiDef (value => 0);
   setLuckLoksiLuck (value => 0);
   setThalamarisAtk (value => 0);
   setThalamarisDef (value => 0);
   setThalamarisLuck (value => 0);
   setAtkThalamarisAtk (value => 0);
   setAtkThalamarisDef (value => 0);
   setAtkThalamarisLuck (value => 0);
   setDefThalamarisAtk (value => 0);
   setDefThalamarisDef (value => 0);
   setDefThalamarisLuck (value => 0);
   setLuckThalamarisAtk (value => 0);
   setLuckThalamarisDef (value => 0);
   setLuckThalamarisLuck (value => 0);
   setValkosAtk (value => 0);
   setValkosDef (value => 0);
   setValkosLuck (value => 0);
   setAtkValkosAtk (value => 0);
   setAtkValkosDef (value => 0);
   setAtkValkosLuck (value => 0);
   setDefValkosAtk (value => 0);
   setDefValkosDef (value => 0);
   setDefValkosLuck (value => 0);
   setLuckValkosAtk (value => 0);
   setLuckValkosDef (value => 0);
   setLuckValkosLuck (value => 0);
   setEenrisAtk (value => 0);
   setEenrisDef (value => 0);
   setEenrisLuck (value => 0);
   setAtkEenrisAtk (value => 0);
   setAtkEenrisDef (value => 0);
   setAtkEenrisLuck (value => 0);
   setDefEenrisAtk (value => 0);
   setDefEenrisDef (value => 0);
   setDefEenrisLuck (value => 0);
   setLuckEenrisAtk (value => 0);
   setLuckEenrisDef (value => 0);
   setLuckEenrisLuck (value => 0);
   setRairaselAtk (value => 0);
   setRairaselDef (value => 0);
   setRairaselLuck (value => 0);
   setAtkRairaselAtk (value => 0);
   setAtkRairaselDef (value => 0);
   setAtkRairaselLuck (value => 0);
   setDefRairaselAtk (value => 0);
   setDefRairaselDef (value => 0);
   setDefRairaselLuck (value => 0);
   setLuckRairaselAtk (value => 0);
   setLuckRairaselDef (value => 0);
   setLuckRairaselLuck (value => 0);
 
   setKaiszarIsShown (current => false);
   setKaiszarActive (current => false);
   setAtkKaiszarIsShown (current => false);
   setAtkKaiszarActive (current => false);
   setDefKaiszarIsShown (current => false);
   setDefKaiszarActive (current => false);
   setLuckKaiszarIsShown (current => false);
   setLuckKaiszarActive (current => false);
   setLoksiIsShown (current => false);
   setLoksiActive (current => false);
   setAtkLoksiIsShown (current => false);
   setAtkLoksiActive (current => false);
   setDefLoksiIsShown (current => false);
   setDefLoksiActive (current => false);
   setLuckLoksiIsShown (current => false);
   setLuckLoksiActive (current => false);
   setThalamarisIsShown (current => false);
   setThalamarisActive (current => false);
   setAtkThalamarisIsShown (current => false);
   setAtkThalamarisActive (current => false);
   setDefThalamarisIsShown (current => false);
   setDefThalamarisActive (current => false);
   setLuckThalamarisIsShown (current => false);
   setLuckThalamarisActive (current => false);
   setValkosIsShown (current => false);
   setValkosActive (current => false);
   setAtkValkosIsShown (current => false);
   setAtkValkosActive (current => false);
   setDefValkosIsShown (current => false);
   setDefValkosActive (current => false);
   setLuckValkosIsShown (current => false);
   setLuckValkosActive (current => false);
   setEenrisIsShown (current => false);
   setEenrisActive (current => false);
   setAtkEenrisIsShown (current => false);
   setAtkEenrisActive (current => false);
   setDefEenrisIsShown (current => false);
   setDefEenrisActive (current => false);
   setLuckEenrisIsShown (current => false);
   setLuckEenrisActive (current => false);
   setRairaselIsShown (current => false);
   setRairaselActive (current => false);
   setAtkRairaselIsShown (current => false);
   setAtkRairaselActive (current => false);
   setDefRairaselIsShown (current => false);
   setDefRairaselActive (current => false);
   setLuckRairaselIsShown (current => false);
   setLuckRairaselActive (current => false);
   };

const handleMundSwitchClick = event => {
   setMundIsShown (current => !MundIsShown);
   setMundActive (current => !MundActive);
   setNoanzaAtk (value => 0);
   setNoanzaDef (value => 0);
   setNoanzaLuck (value => 0);
   setLodoAtk (value => 0);
   setLodoDef (value => 0);
   setLodoLuck (value => 0);
   setAzadiAtk (value => 0);
   setAzadiDef (value => 0);
   setAzadiLuck (value => 0);
   setSuwoAtk (value => 0);
   setSuwoDef (value => 0);
   setSuwoLuck (value => 0);
 
   setLodoIsShown (current => false)
   setLodoIsShown (current => false)
   setAzadiIsShown (current => false)
   setAzadiIsShown (current => false)
   setSuwoIsShown (current => false)
   setSuwoIsShown (current => false)
   setNoanzaIsShown (current => false);
   setNoanzaActive (current => false);

   setAlderbamAtk (value => 0);
   setAlderbamDef (value => 0);
   setAlderbamLuck (value => 0);
   setChysisAtk (value => 0);
   setChysisDef (value => 0);
   setChysisLuck (value => 0);
   setMundAtk (value => 4);
   setMundDef (value => 4);
   setMundLuck (value => 4);
   setWhodiniAtk (value => 0);
   setWhodiniDef (value => 0);
   setWhodiniLuck (value => 0);
 
   setAlderbamIsShown (current => false)
   setAlderbamIsShown (current => false)
   setChysisIsShown (current => false)
   setChysisIsShown (current => false)
   setWhodiniIsShown (current => false)
   setWhodiniIsShown (current => false)
 
   setKaiszarAtk (value => 0);
   setKaiszarDef (value => 0);
   setKaiszarLuck (value => 0);
   setAtkKaiszarAtk (value => 0);
   setAtkKaiszarDef (value => 0);
   setAtkKaiszarLuck (value => 0);
   setDefKaiszarAtk (value => 0);
   setDefKaiszarDef (value => 0);
   setDefKaiszarLuck (value => 0);
   setLuckKaiszarAtk (value => 0);
   setLuckKaiszarDef (value => 0);
   setLuckKaiszarLuck (value => 0);
   setLoksiAtk (value => 0);
   setLoksiDef (value => 0);
   setLoksiLuck (value => 0);
   setAtkLoksiAtk (value => 0);
   setAtkLoksiDef (value => 0);
   setAtkLoksiLuck (value => 0);
   setDefLoksiAtk (value => 0);
   setDefLoksiDef (value => 0);
   setDefLoksiLuck (value => 0);
   setLuckLoksiAtk (value => 0);
   setLuckLoksiDef (value => 0);
   setLuckLoksiLuck (value => 0);
   setThalamarisAtk (value => 0);
   setThalamarisDef (value => 0);
   setThalamarisLuck (value => 0);
   setAtkThalamarisAtk (value => 0);
   setAtkThalamarisDef (value => 0);
   setAtkThalamarisLuck (value => 0);
   setDefThalamarisAtk (value => 0);
   setDefThalamarisDef (value => 0);
   setDefThalamarisLuck (value => 0);
   setLuckThalamarisAtk (value => 0);
   setLuckThalamarisDef (value => 0);
   setLuckThalamarisLuck (value => 0);
   setValkosAtk (value => 0);
   setValkosDef (value => 0);
   setValkosLuck (value => 0);
   setAtkValkosAtk (value => 0);
   setAtkValkosDef (value => 0);
   setAtkValkosLuck (value => 0);
   setDefValkosAtk (value => 0);
   setDefValkosDef (value => 0);
   setDefValkosLuck (value => 0);
   setLuckValkosAtk (value => 0);
   setLuckValkosDef (value => 0);
   setLuckValkosLuck (value => 0);
   setEenrisAtk (value => 0);
   setEenrisDef (value => 0);
   setEenrisLuck (value => 0);
   setAtkEenrisAtk (value => 0);
   setAtkEenrisDef (value => 0);
   setAtkEenrisLuck (value => 0);
   setDefEenrisAtk (value => 0);
   setDefEenrisDef (value => 0);
   setDefEenrisLuck (value => 0);
   setLuckEenrisAtk (value => 0);
   setLuckEenrisDef (value => 0);
   setLuckEenrisLuck (value => 0);
   setRairaselAtk (value => 0);
   setRairaselDef (value => 0);
   setRairaselLuck (value => 0);
   setAtkRairaselAtk (value => 0);
   setAtkRairaselDef (value => 0);
   setAtkRairaselLuck (value => 0);
   setDefRairaselAtk (value => 0);
   setDefRairaselDef (value => 0);
   setDefRairaselLuck (value => 0);
   setLuckRairaselAtk (value => 0);
   setLuckRairaselDef (value => 0);
   setLuckRairaselLuck (value => 0);
 
   setKaiszarIsShown (current => false);
   setKaiszarActive (current => false);
   setAtkKaiszarIsShown (current => false);
   setAtkKaiszarActive (current => false);
   setDefKaiszarIsShown (current => false);
   setDefKaiszarActive (current => false);
   setLuckKaiszarIsShown (current => false);
   setLuckKaiszarActive (current => false);
   setLoksiIsShown (current => false);
   setLoksiActive (current => false);
   setAtkLoksiIsShown (current => false);
   setAtkLoksiActive (current => false);
   setDefLoksiIsShown (current => false);
   setDefLoksiActive (current => false);
   setLuckLoksiIsShown (current => false);
   setLuckLoksiActive (current => false);
   setThalamarisIsShown (current => false);
   setThalamarisActive (current => false);
   setAtkThalamarisIsShown (current => false);
   setAtkThalamarisActive (current => false);
   setDefThalamarisIsShown (current => false);
   setDefThalamarisActive (current => false);
   setLuckThalamarisIsShown (current => false);
   setLuckThalamarisActive (current => false);
   setValkosIsShown (current => false);
   setValkosActive (current => false);
   setAtkValkosIsShown (current => false);
   setAtkValkosActive (current => false);
   setDefValkosIsShown (current => false);
   setDefValkosActive (current => false);
   setLuckValkosIsShown (current => false);
   setLuckValkosActive (current => false);
   setEenrisIsShown (current => false);
   setEenrisActive (current => false);
   setAtkEenrisIsShown (current => false);
   setAtkEenrisActive (current => false);
   setDefEenrisIsShown (current => false);
   setDefEenrisActive (current => false);
   setLuckEenrisIsShown (current => false);
   setLuckEenrisActive (current => false);
   setRairaselIsShown (current => false);
   setRairaselActive (current => false);
   setAtkRairaselIsShown (current => false);
   setAtkRairaselActive (current => false);
   setDefRairaselIsShown (current => false);
   setDefRairaselActive (current => false);
   setLuckRairaselIsShown (current => false);
   setLuckRairaselActive (current => false);
   };

const handleWhodiniSwitchClick = event => {
   setWhodiniIsShown (current => !WhodiniIsShown);
   setWhodiniActive (current => !WhodiniActive);

   setNoanzaAtk (value => 0);
   setNoanzaDef (value => 0);
   setNoanzaLuck (value => 0);
   setLodoAtk (value => 0);
   setLodoDef (value => 0);
   setLodoLuck (value => 0);
   setAzadiAtk (value => 0);
   setAzadiDef (value => 0);
   setAzadiLuck (value => 0);
   setSuwoAtk (value => 0);
   setSuwoDef (value => 0);
   setSuwoLuck (value => 0);
 
   setLodoIsShown (current => false)
   setLodoIsShown (current => false)
   setAzadiIsShown (current => false)
   setAzadiIsShown (current => false)
   setSuwoIsShown (current => false)
   setSuwoIsShown (current => false)
 
   setAlderbamAtk (value => 0);
   setAlderbamDef (value => 0);
   setAlderbamLuck (value => 0);
   setChysisAtk (value => 0);
   setChysisDef (value => 0);
   setChysisLuck (value => 0);
   setMundAtk (value => 0);
   setMundDef (value => 0);
   setMundLuck (value => 0);
   setWhodiniAtk (value => 0);
   setWhodiniDef (value => 12);
   setWhodiniLuck (value => 0);
 
   setAlderbamIsShown (current => false)
   setAlderbamIsShown (current => false)
   setChysisIsShown (current => false)
   setChysisIsShown (current => false)
   setMundIsShown (current => false)
   setMundIsShown (current => false)
 
   setKaiszarAtk (value => 0);
   setKaiszarDef (value => 0);
   setKaiszarLuck (value => 0);
   setAtkKaiszarAtk (value => 0);
   setAtkKaiszarDef (value => 0);
   setAtkKaiszarLuck (value => 0);
   setDefKaiszarAtk (value => 0);
   setDefKaiszarDef (value => 0);
   setDefKaiszarLuck (value => 0);
   setLuckKaiszarAtk (value => 0);
   setLuckKaiszarDef (value => 0);
   setLuckKaiszarLuck (value => 0);
   setLoksiAtk (value => 0);
   setLoksiDef (value => 0);
   setLoksiLuck (value => 0);
   setAtkLoksiAtk (value => 0);
   setAtkLoksiDef (value => 0);
   setAtkLoksiLuck (value => 0);
   setDefLoksiAtk (value => 0);
   setDefLoksiDef (value => 0);
   setDefLoksiLuck (value => 0);
   setLuckLoksiAtk (value => 0);
   setLuckLoksiDef (value => 0);
   setLuckLoksiLuck (value => 0);
   setThalamarisAtk (value => 0);
   setThalamarisDef (value => 0);
   setThalamarisLuck (value => 0);
   setAtkThalamarisAtk (value => 0);
   setAtkThalamarisDef (value => 0);
   setAtkThalamarisLuck (value => 0);
   setDefThalamarisAtk (value => 0);
   setDefThalamarisDef (value => 0);
   setDefThalamarisLuck (value => 0);
   setLuckThalamarisAtk (value => 0);
   setLuckThalamarisDef (value => 0);
   setLuckThalamarisLuck (value => 0);
   setValkosAtk (value => 0);
   setValkosDef (value => 0);
   setValkosLuck (value => 0);
   setAtkValkosAtk (value => 0);
   setAtkValkosDef (value => 0);
   setAtkValkosLuck (value => 0);
   setDefValkosAtk (value => 0);
   setDefValkosDef (value => 0);
   setDefValkosLuck (value => 0);
   setLuckValkosAtk (value => 0);
   setLuckValkosDef (value => 0);
   setLuckValkosLuck (value => 0);
   setEenrisAtk (value => 0);
   setEenrisDef (value => 0);
   setEenrisLuck (value => 0);
   setAtkEenrisAtk (value => 0);
   setAtkEenrisDef (value => 0);
   setAtkEenrisLuck (value => 0);
   setDefEenrisAtk (value => 0);
   setDefEenrisDef (value => 0);
   setDefEenrisLuck (value => 0);
   setLuckEenrisAtk (value => 0);
   setLuckEenrisDef (value => 0);
   setLuckEenrisLuck (value => 0);
   setRairaselAtk (value => 0);
   setRairaselDef (value => 0);
   setRairaselLuck (value => 0);
   setAtkRairaselAtk (value => 0);
   setAtkRairaselDef (value => 0);
   setAtkRairaselLuck (value => 0);
   setDefRairaselAtk (value => 0);
   setDefRairaselDef (value => 0);
   setDefRairaselLuck (value => 0);
   setLuckRairaselAtk (value => 0);
   setLuckRairaselDef (value => 0);
   setLuckRairaselLuck (value => 0);
 
   setKaiszarIsShown (current => false);
   setKaiszarActive (current => false);
   setAtkKaiszarIsShown (current => false);
   setAtkKaiszarActive (current => false);
   setDefKaiszarIsShown (current => false);
   setDefKaiszarActive (current => false);
   setLuckKaiszarIsShown (current => false);
   setLuckKaiszarActive (current => false);
   setLoksiIsShown (current => false);
   setLoksiActive (current => false);
   setAtkLoksiIsShown (current => false);
   setAtkLoksiActive (current => false);
   setDefLoksiIsShown (current => false);
   setDefLoksiActive (current => false);
   setLuckLoksiIsShown (current => false);
   setLuckLoksiActive (current => false);
   setThalamarisIsShown (current => false);
   setThalamarisActive (current => false);
   setAtkThalamarisIsShown (current => false);
   setAtkThalamarisActive (current => false);
   setDefThalamarisIsShown (current => false);
   setDefThalamarisActive (current => false);
   setLuckThalamarisIsShown (current => false);
   setLuckThalamarisActive (current => false);
   setValkosIsShown (current => false);
   setValkosActive (current => false);
   setAtkValkosIsShown (current => false);
   setAtkValkosActive (current => false);
   setDefValkosIsShown (current => false);
   setDefValkosActive (current => false);
   setLuckValkosIsShown (current => false);
   setLuckValkosActive (current => false);
   setEenrisIsShown (current => false);
   setEenrisActive (current => false);
   setAtkEenrisIsShown (current => false);
   setAtkEenrisActive (current => false);
   setDefEenrisIsShown (current => false);
   setDefEenrisActive (current => false);
   setLuckEenrisIsShown (current => false);
   setLuckEenrisActive (current => false);
   setRairaselIsShown (current => false);
   setRairaselActive (current => false);
   setAtkRairaselIsShown (current => false);
   setAtkRairaselActive (current => false);
   setDefRairaselIsShown (current => false);
   setDefRairaselActive (current => false);
   setLuckRairaselIsShown (current => false);
   setLuckRairaselActive (current => false);
   };   

  const handleKaiszarSwitchNoClick = event => {
  setKaiszarIsShown (current => !KaiszarIsShown);
  setKaiszarActive (current => !KaiszarIsShown);
  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);
  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  };

const handleAtkKaiszarSwitchNoClick = event => {
  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setKaiszarIsShown (current => false);
  setKaiszarActive (current => false);
  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  };

const handleDefKaiszarSwitchNoClick = event => {
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setKaiszarIsShown (current => false);
  setKaiszarActive (current => false);
  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  };

const handleLuckKaiszarSwitchNoClick = event => {
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);
  setKaiszarIsShown (current => false);
  setKaiszarActive (current => false);
  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
  };

const handleLoksiSwitchNoClick = event => {
  setLoksiIsShown (current => !LoksiIsShown);
  setLoksiActive (current => !LoksiIsShown);
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  };

const handleAtkLoksiSwitchNoClick = event => {
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setLoksiIsShown (current => false);
  setLoksiActive (current => false);
  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  };

const handleDefLoksiSwitchNoClick = event => {
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setLoksiIsShown (current => false);
  setLoksiActive (current => false);
  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  };

const handleLuckLoksiSwitchNoClick = event => {
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  setLoksiIsShown (current => false);
  setLoksiActive (current => false);
  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
  };

const handleThalamarisSwitchNoClick = event => {
  setThalamarisIsShown (current => !ThalamarisIsShown);
  setThalamarisActive (current => !ThalamarisIsShown);
  setAtkThalamarisIsShown (current => false);
  setAtkThalamarisActive (current => false);
  setDefThalamarisIsShown (current => false);
  setDefThalamarisActive (current => false);
  setLuckThalamarisIsShown (current => false);
  setLuckThalamarisActive (current => false);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  };

const handleAtkThalamarisSwitchNoClick = event => {
  setAtkThalamarisIsShown (current => !AtkThalamarisIsShown);
  setAtkThalamarisActive (current => !AtkThalamarisIsShown);
  setThalamarisIsShown (current => false);
  setThalamarisActive (current => false);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  };

const handleDefThalamarisSwitchNoClick = event => {
  setDefThalamarisIsShown (current => !DefThalamarisIsShown);
  setDefThalamarisActive (current => !DefThalamarisIsShown);
  setThalamarisIsShown (current => false);
  setThalamarisActive (current => false);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  };

const handleLuckThalamarisSwitchNoClick = event => {
  setLuckThalamarisIsShown (current => !LuckThalamarisIsShown);
  setLuckThalamarisActive (current => !LuckThalamarisIsShown);
  setThalamarisIsShown (current => false);
  setThalamarisActive (current => false);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
  }; 
  
const handleValkosSwitchNoClick = event => {
  setValkosIsShown (current => !ValkosIsShown);
  setValkosActive (current => !ValkosIsShown);
  setAtkValkosIsShown (current => false);
setAtkValkosActive (current => false);
setDefValkosIsShown (current => false);
setDefValkosActive (current => false);
setLuckValkosIsShown (current => false);
setLuckValkosActive (current => false);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  };

const handleAtkValkosSwitchNoClick = event => {
  setAtkValkosIsShown (current => !AtkValkosIsShown);
  setAtkValkosActive (current => !AtkValkosIsShown);
  setValkosIsShown (current => false);
  setValkosActive (current => false);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  };

const handleDefValkosSwitchNoClick = event => {
  setDefValkosIsShown (current => !DefValkosIsShown);
  setDefValkosActive (current => !DefValkosIsShown);
  setValkosIsShown (current => false);
  setValkosActive (current => false);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  };

const handleLuckValkosSwitchNoClick = event => {
  setLuckValkosIsShown (current => !LuckValkosIsShown);
  setLuckValkosActive (current => !LuckValkosIsShown);
  setValkosIsShown (current => false);
  setValkosActive (current => false);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
  };

const handleEenrisSwitchNoClick = event => {
  setEenrisIsShown (current => !EenrisIsShown);
  setEenrisActive (current => !EenrisIsShown);
  setAtkEenrisIsShown (current => false);
setAtkEenrisActive (current => false);
setDefEenrisIsShown (current => false);
setDefEenrisActive (current => false);
setLuckEenrisIsShown (current => false);
setLuckEenrisActive (current => false);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  };

const handleAtkEenrisSwitchNoClick = event => {
  setAtkEenrisIsShown (current => !AtkEenrisIsShown);
  setAtkEenrisActive (current => !AtkEenrisIsShown);
  setEenrisIsShown (current => false);
  setEenrisActive (current => false);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  };

const handleDefEenrisSwitchNoClick = event => {
  setDefEenrisIsShown (current => !DefEenrisIsShown);
  setDefEenrisActive (current => !DefEenrisIsShown);
  setEenrisIsShown (current => false);
  setEenrisActive (current => false);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  };

const handleLuckEenrisSwitchNoClick = event => {
  setLuckEenrisIsShown (current => !LuckEenrisIsShown);
  setLuckEenrisActive (current => !LuckEenrisIsShown);
  setEenrisIsShown (current => false);
  setEenrisActive (current => false);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
  };
  
const handleRairaselSwitchNoClick = event => {
  setRairaselIsShown (current => !RairaselIsShown);
  setRairaselActive (current => !RairaselIsShown);
  setAtkRairaselIsShown (current => false);
setAtkRairaselActive (current => false);
setDefRairaselIsShown (current => false);
setDefRairaselActive (current => false);
setLuckRairaselIsShown (current => false);
setLuckRairaselActive (current => false);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  };

const handleAtkRairaselSwitchNoClick = event => {
  setAtkRairaselIsShown (current => !AtkRairaselIsShown);
  setAtkRairaselActive (current => !AtkRairaselIsShown);
  setRairaselIsShown (current => false);
  setRairaselActive (current => false);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  };

const handleDefRairaselSwitchNoClick = event => {
  setDefRairaselIsShown (current => !DefRairaselIsShown);
  setDefRairaselActive (current => !DefRairaselIsShown);
  setRairaselIsShown (current => false);
  setRairaselActive (current => false);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  };

const handleLuckRairaselSwitchNoClick = event => {
  setLuckRairaselIsShown (current => !LuckRairaselIsShown);
  setLuckRairaselActive (current => !LuckRairaselIsShown);
  setRairaselIsShown (current => false);
  setRairaselActive (current => false);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);
  };  

//main quest companions//

  const handleSuwoClick = event => {
  setSuwoIsShown (current => !SuwoIsShown);
  setSuwoActive (current => !SuwoActive);
  setSuwoAtk (value => 3);
  setSuwoDef (value => 7);
  setSuwoLuck (value => 2);
  };

  const handleSuwoNoClick = event => {
    setSuwoIsShown (current => !SuwoIsShown);
    setSuwoActive (current => !SuwoActive);
    setSuwoAtk (value => 0);
    setSuwoDef (value => 0);
    setSuwoLuck (value => 0);
    };

const handleAzadiClick = event => {
  setAzadiIsShown (current => !AzadiIsShown);
  setAzadiActive (current => !AzadiActive);
  setAzadiAtk (value => 5);
  setAzadiDef (value => 0);
  setAzadiLuck (value => 10);
  };

  const handleAzadiNoClick = event => {
    setAzadiIsShown (current => !AzadiIsShown);
    setAzadiActive (current => !AzadiActive);
    setAzadiAtk (value => 0);
    setAzadiDef (value => 0);
    setAzadiLuck (value => 0);
    };

const handleLodoClick = event => {
  setLodoIsShown (current => !LodoIsShown);
  setLodoActive (current => !LodoActive);
  setLodoAtk (value => 12);
  setLodoDef (value => 2);
  setLodoLuck (value => 0);
  };

  const handleLodoNoClick = event => {
    setLodoIsShown (current => !LodoIsShown);
    setLodoActive (current => !LodoActive);
    setLodoAtk (value => 0);
    setLodoDef (value => 0);
    setLodoLuck (value => 0);
    };  

const handleNoanzaClick = event => {
  setNoanzaIsShown (current => !NoanzaIsShown);
  setNoanzaActive (current => !NoanzaActive);
  setNoanzaAtk (value => 0);
  setNoanzaDef (value => 14);
  setNoanzaLuck (value => 6);
  };

  const handleNoanzaNoClick = event => {
    setNoanzaIsShown (current => !NoanzaIsShown);
    setNoanzaActive (current => !NoanzaActive);
    setNoanzaAtk (value => 0);
    setNoanzaDef (value => 0);
    setNoanzaLuck (value => 0);
    };

const handleAlderbamClick = event => {
  setAlderbamIsShown (current => !AlderbamIsShown);
  setAlderbamActive (current => !AlderbamActive);
  setAlderbamAtk (value => 0);
  setAlderbamDef (value => 0);
  setAlderbamLuck (value => 12);
  };

  const handleAlderbamNoClick = event => {
  setAlderbamIsShown (current => !AlderbamIsShown);
  setAlderbamActive (current => !AlderbamActive);
  setAlderbamAtk (value => 0);
  setAlderbamDef (value => 0);
  setAlderbamLuck (value => 0);
  };

const handleChysisClick = event => {
  setChysisIsShown (current => !ChysisIsShown);
  setChysisActive (current => !ChysisActive);
  setChysisAtk (value => 12);
  setChysisDef (value => 0);
  setChysisLuck (value => 0);
  };

const handleChysisNoClick = event => {
  setChysisIsShown (current => !ChysisIsShown);
  setChysisActive (current => !ChysisActive);
  setChysisAtk (value => 0);
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

const handleMundNoClick = event => {
  setMundIsShown (current => !MundIsShown);
  setMundActive (current => !MundActive);
  setMundAtk (value => 0);
  setMundDef (value => 0);
  setMundLuck (value => 0);
  };

const handleWhodiniClick = event => {
  setWhodiniIsShown (current => !WhodiniIsShown);
  setWhodiniActive (current => !WhodiniActive);
  setWhodiniAtk (value => 0);
  setWhodiniDef (value => 12);
  setWhodiniLuck (value => 0);
  };

const handleWhodiniNoClick = event => {
  setWhodiniIsShown (current => !WhodiniIsShown);
  setWhodiniActive (current => !WhodiniActive);
  setWhodiniAtk (value => 0);
  setWhodiniDef (value => 0);
  setWhodiniLuck (value => 0);
  };

const handleNoanzaSwitchClick = event => {
  setNoanzaIsShown (current => !NoanzaIsShown);
  setNoanzaActive (current => !NoanzaActive);
  setNoanzaAtk (value => 0);
  setNoanzaDef (value => 14);
  setNoanzaLuck (value => 6);
  setLodoAtk (value => 0);
  setLodoDef (value => 0);
  setLodoLuck (value => 0);
  setAzadiAtk (value => 0);
  setAzadiDef (value => 0);
  setAzadiLuck (value => 0);
  setSuwoAtk (value => 0);
  setSuwoDef (value => 0);
  setSuwoLuck (value => 0);

  setLodoIsShown (current => false)
  setLodoIsShown (current => false)
  setAzadiIsShown (current => false)
  setAzadiIsShown (current => false)
  setSuwoIsShown (current => false)
  setSuwoIsShown (current => false)

  setAlderbamAtk (value => 0);
  setAlderbamDef (value => 0);
  setAlderbamLuck (value => 0);
  setChysisAtk (value => 0);
  setChysisDef (value => 0);
  setChysisLuck (value => 0);
  setMundAtk (value => 0);
  setMundDef (value => 0);
  setMundLuck (value => 0);
  setWhodiniAtk (value => 0);
  setWhodiniDef (value => 0);
  setWhodiniLuck (value => 0);

  setAlderbamIsShown (current => false)
  setAlderbamIsShown (current => false)
  setChysisIsShown (current => false)
  setChysisIsShown (current => false)
  setMundIsShown (current => false)
  setMundIsShown (current => false)
  setWhodiniIsShown (current => false)
  setWhodiniIsShown (current => false)

  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);

  setKaiszarIsShown (current => false);
  setKaiszarActive (current => false);
  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);
  setLoksiIsShown (current => false);
  setLoksiActive (current => false);
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  setThalamarisIsShown (current => false);
  setThalamarisActive (current => false);
  setAtkThalamarisIsShown (current => false);
  setAtkThalamarisActive (current => false);
  setDefThalamarisIsShown (current => false);
  setDefThalamarisActive (current => false);
  setLuckThalamarisIsShown (current => false);
  setLuckThalamarisActive (current => false);
  setValkosIsShown (current => false);
  setValkosActive (current => false);
  setAtkValkosIsShown (current => false);
  setAtkValkosActive (current => false);
  setDefValkosIsShown (current => false);
  setDefValkosActive (current => false);
  setLuckValkosIsShown (current => false);
  setLuckValkosActive (current => false);
  setEenrisIsShown (current => false);
  setEenrisActive (current => false);
  setAtkEenrisIsShown (current => false);
  setAtkEenrisActive (current => false);
  setDefEenrisIsShown (current => false);
  setDefEenrisActive (current => false);
  setLuckEenrisIsShown (current => false);
  setLuckEenrisActive (current => false);
  setRairaselIsShown (current => false);
  setRairaselActive (current => false);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  };

const handleLodoSwitchClick = event => {
  setLodoIsShown (current => !LodoIsShown);
  setLodoActive (current => !LodoActive);
  setNoanzaAtk (value => 0);
  setNoanzaDef (value => 0);
  setNoanzaLuck (value => 0);
  setLodoAtk (value => 12);
  setLodoDef (value => 2);
  setLodoLuck (value => 0);
  setAzadiAtk (value => 0);
  setAzadiDef (value => 0);
  setAzadiLuck (value => 0);
  setSuwoAtk (value => 0);
  setSuwoDef (value => 0);
  setSuwoLuck (value => 0);

  setNoanzaIsShown (current => false)
  setNoanzaIsShown (current => false)
  setAzadiIsShown (current => false)
  setAzadiIsShown (current => false)
  setSuwoIsShown (current => false)
  setSuwoIsShown (current => false)

  setAlderbamAtk (value => 0);
  setAlderbamDef (value => 0);
  setAlderbamLuck (value => 0);
  setChysisAtk (value => 0);
  setChysisDef (value => 0);
  setChysisLuck (value => 0);
  setMundAtk (value => 0);
  setMundDef (value => 0);
  setMundLuck (value => 0);
  setWhodiniAtk (value => 0);
  setWhodiniDef (value => 0);
  setWhodiniLuck (value => 0);

  setAlderbamIsShown (current => false)
  setAlderbamIsShown (current => false)
  setChysisIsShown (current => false)
  setChysisIsShown (current => false)
  setMundIsShown (current => false)
  setMundIsShown (current => false)
  setWhodiniIsShown (current => false)
  setWhodiniIsShown (current => false)

  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);

  setKaiszarIsShown (current => false);
  setKaiszarActive (current => false);
  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);
  setLoksiIsShown (current => false);
  setLoksiActive (current => false);
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  setThalamarisIsShown (current => false);
  setThalamarisActive (current => false);
  setAtkThalamarisIsShown (current => false);
  setAtkThalamarisActive (current => false);
  setDefThalamarisIsShown (current => false);
  setDefThalamarisActive (current => false);
  setLuckThalamarisIsShown (current => false);
  setLuckThalamarisActive (current => false);
  setValkosIsShown (current => false);
  setValkosActive (current => false);
  setAtkValkosIsShown (current => false);
  setAtkValkosActive (current => false);
  setDefValkosIsShown (current => false);
  setDefValkosActive (current => false);
  setLuckValkosIsShown (current => false);
  setLuckValkosActive (current => false);
  setEenrisIsShown (current => false);
  setEenrisActive (current => false);
  setAtkEenrisIsShown (current => false);
  setAtkEenrisActive (current => false);
  setDefEenrisIsShown (current => false);
  setDefEenrisActive (current => false);
  setLuckEenrisIsShown (current => false);
  setLuckEenrisActive (current => false);
  setRairaselIsShown (current => false);
  setRairaselActive (current => false);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  };
  
const handleAzadiSwitchClick = event => {
  setAzadiIsShown (current => !AzadiIsShown);
  setAzadiActive (current => !AzadiActive);
  setNoanzaAtk (value => 0);
  setNoanzaDef (value => 0);
  setNoanzaLuck (value => 0);
  setLodoAtk (value => 0);
  setLodoDef (value => 0);
  setLodoLuck (value => 0);
  setAzadiAtk (value => 5);
  setAzadiDef (value => 0);
  setAzadiLuck (value => 10);
  setSuwoAtk (value => 0);
  setSuwoDef (value => 0);
  setSuwoLuck (value => 0);

  setNoanzaIsShown (current => false)
  setNoanzaIsShown (current => false)
  setLodoIsShown (current => false)
  setLodoIsShown (current => false)
  setSuwoIsShown (current => false)
  setSuwoIsShown (current => false)

  setAlderbamAtk (value => 0);
  setAlderbamDef (value => 0);
  setAlderbamLuck (value => 0);
  setChysisAtk (value => 0);
  setChysisDef (value => 0);
  setChysisLuck (value => 0);
  setMundAtk (value => 0);
  setMundDef (value => 0);
  setMundLuck (value => 0);
  setWhodiniAtk (value => 0);
  setWhodiniDef (value => 0);
  setWhodiniLuck (value => 0);

  setAlderbamIsShown (current => false)
  setAlderbamIsShown (current => false)
  setChysisIsShown (current => false)
  setChysisIsShown (current => false)
  setMundIsShown (current => false)
  setMundIsShown (current => false)
  setWhodiniIsShown (current => false)
  setWhodiniIsShown (current => false)

  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);

  setKaiszarIsShown (current => false);
  setKaiszarActive (current => false);
  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);
  setLoksiIsShown (current => false);
  setLoksiActive (current => false);
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  setThalamarisIsShown (current => false);
  setThalamarisActive (current => false);
  setAtkThalamarisIsShown (current => false);
  setAtkThalamarisActive (current => false);
  setDefThalamarisIsShown (current => false);
  setDefThalamarisActive (current => false);
  setLuckThalamarisIsShown (current => false);
  setLuckThalamarisActive (current => false);
  setValkosIsShown (current => false);
  setValkosActive (current => false);
  setAtkValkosIsShown (current => false);
  setAtkValkosActive (current => false);
  setDefValkosIsShown (current => false);
  setDefValkosActive (current => false);
  setLuckValkosIsShown (current => false);
  setLuckValkosActive (current => false);
  setEenrisIsShown (current => false);
  setEenrisActive (current => false);
  setAtkEenrisIsShown (current => false);
  setAtkEenrisActive (current => false);
  setDefEenrisIsShown (current => false);
  setDefEenrisActive (current => false);
  setLuckEenrisIsShown (current => false);
  setLuckEenrisActive (current => false);
  setRairaselIsShown (current => false);
  setRairaselActive (current => false);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  };  

const handleSuwoSwitchClick = event => {
  setSuwoIsShown (current => !SuwoIsShown);
  setSuwoActive (current => !SuwoActive);
  setNoanzaAtk (value => 0);
  setNoanzaDef (value => 0);
  setNoanzaLuck (value => 0);
  setLodoAtk (value => 0);
  setLodoDef (value => 0);
  setLodoLuck (value => 0);
  setAzadiAtk (value => 0);
  setAzadiDef (value => 0);
  setAzadiLuck (value => 0);
  setSuwoAtk (value => 3);
  setSuwoDef (value => 7);
  setSuwoLuck (value => 2);

  setNoanzaIsShown (current => false)
  setNoanzaIsShown (current => false)
  setLodoIsShown (current => false)
  setLodoIsShown (current => false)
  setAzadiIsShown (current => false)
  setAzadiIsShown (current => false)

  setAlderbamAtk (value => 0);
  setAlderbamDef (value => 0);
  setAlderbamLuck (value => 0);
  setChysisAtk (value => 0);
  setChysisDef (value => 0);
  setChysisLuck (value => 0);
  setMundAtk (value => 0);
  setMundDef (value => 0);
  setMundLuck (value => 0);
  setWhodiniAtk (value => 0);
  setWhodiniDef (value => 0);
  setWhodiniLuck (value => 0);

  setAlderbamIsShown (current => false)
  setAlderbamIsShown (current => false)
  setChysisIsShown (current => false)
  setChysisIsShown (current => false)
  setMundIsShown (current => false)
  setMundIsShown (current => false)
  setWhodiniIsShown (current => false)
  setWhodiniIsShown (current => false)

  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  setLuckRairaselAtk (value => 0);
  setLuckRairaselDef (value => 0);
  setLuckRairaselLuck (value => 0);

  setKaiszarIsShown (current => false);
  setKaiszarActive (current => false);
  setAtkKaiszarIsShown (current => false);
  setAtkKaiszarActive (current => false);
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
  setLuckKaiszarIsShown (current => false);
  setLuckKaiszarActive (current => false);
  setLoksiIsShown (current => false);
  setLoksiActive (current => false);
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
  setDefLoksiIsShown (current => false);
  setDefLoksiActive (current => false);
  setLuckLoksiIsShown (current => false);
  setLuckLoksiActive (current => false);
  setThalamarisIsShown (current => false);
  setThalamarisActive (current => false);
  setAtkThalamarisIsShown (current => false);
  setAtkThalamarisActive (current => false);
  setDefThalamarisIsShown (current => false);
  setDefThalamarisActive (current => false);
  setLuckThalamarisIsShown (current => false);
  setLuckThalamarisActive (current => false);
  setValkosIsShown (current => false);
  setValkosActive (current => false);
  setAtkValkosIsShown (current => false);
  setAtkValkosActive (current => false);
  setDefValkosIsShown (current => false);
  setDefValkosActive (current => false);
  setLuckValkosIsShown (current => false);
  setLuckValkosActive (current => false);
  setEenrisIsShown (current => false);
  setEenrisActive (current => false);
  setAtkEenrisIsShown (current => false);
  setAtkEenrisActive (current => false);
  setDefEenrisIsShown (current => false);
  setDefEenrisActive (current => false);
  setLuckEenrisIsShown (current => false);
  setLuckEenrisActive (current => false);
  setRairaselIsShown (current => false);
  setRairaselActive (current => false);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  };


const handleNoanzaSwitchNoClick = event => {
  setNoanzaIsShown (current => !NoanzaIsShown);
  setNoanzaActive (current => !NoanzaIsShown);
  setNoanzaAtk (value => 0);
  setNoanzaDef (value => 0);
  setNoanzaLuck (value => 0);
  };

const handleLodoSwitchNoClick = event => {
  setLodoIsShown (current => !LodoIsShown);
  setLodoActive (current => !LodoIsShown);
  setLodoAtk (value => 0);
  setLodoDef (value => 0);
  setLodoLuck (value => 0);
  };

const handleAzadiSwitchNoClick = event => {
  setAzadiIsShown (current => !AzadiIsShown);
  setAzadiActive (current => !AzadiIsShown);
  setAzadiAtk (value => 0);
  setAzadiDef (value => 0);
  setAzadiLuck (value => 0);
  };

const handleSuwoSwitchNoClick = event => {
  setSuwoIsShown (current => !SuwoIsShown);
  setSuwoActive (current => !SuwoIsShown);
  setSuwoAtk (value => 0);
  setSuwoDef (value => 0);
  setSuwoLuck (value => 0);
  };

  const handleAlderbamSwitchNoClick = event => {
  setAlderbamIsShown (current => !AlderbamIsShown);
  setAlderbamActive (current => !AlderbamIsShown);
  setAlderbamAtk (value => 0);
  setAlderbamDef (value => 0);
  setAlderbamLuck (value => 0);
  };

  const handleChysisSwitchNoClick = event => {
  setChysisIsShown (current => !ChysisIsShown);
  setChysisActive (current => !ChysisIsShown);
  setChysisAtk (value => 0);
  setChysisDef (value => 0);
  setChysisLuck (value => 0);
  };

  const handleMundSwitchNoClick = event => {
  setMundIsShown (current => !MundIsShown);
  setMundActive (current => !MundIsShown);
  setMundAtk (value => 0);
  setMundDef (value => 0);
  setMundLuck (value => 0);
  };

  const handleWhodiniSwitchNoClick = event => {
  setWhodiniIsShown (current => !WhodiniIsShown);
  setWhodiniActive (current => !WhodiniIsShown);
  setWhodiniAtk (value => 0);
  setWhodiniDef (value => 0);
  setWhodiniLuck (value => 0);
  };

const [CompanionTopAtk, setCompanionTopAtk] = useState(0)
const [CompanionTopDef, setCompanionTopDef] = useState(0)
const [CompanionTopLuck, setCompanionTopLuck] = useState(0)

const totalCompanionTopAtk = Math.max (SuwoAtk, AzadiAtk, LodoAtk, NoanzaAtk, 
  KaiszarAtk, LoksiAtk, ThalamarisAtk, ValkosAtk, EenrisAtk, RairaselAtk, 
  AtkKaiszarAtk, AtkLoksiAtk, AtkThalamarisAtk, AtkValkosAtk, AtkEenrisAtk, 
  AtkRairaselAtk, DefKaiszarAtk, DefLoksiAtk, DefThalamarisAtk, DefValkosAtk, 
  DefEenrisAtk, DefRairaselAtk, LuckKaiszarAtk, LuckLoksiAtk, LuckThalamarisAtk, 
  LuckValkosAtk, LuckEenrisAtk, LuckRairaselAtk, 
  AlderbamAtk, ChysisAtk, MundAtk, WhodiniAtk)

const totalCompanionTopDef = Math.max (SuwoDef, AzadiDef, LodoDef, NoanzaDef, 
  KaiszarDef, LoksiDef, ThalamarisDef, ValkosDef, EenrisDef, RairaselDef, 
  AtkKaiszarDef, AtkLoksiDef, AtkThalamarisDef, AtkValkosDef, AtkEenrisDef, 
  AtkRairaselDef, DefKaiszarDef, DefLoksiDef, DefThalamarisDef, DefValkosDef, 
  DefEenrisDef, DefRairaselDef, LuckKaiszarDef, LuckLoksiDef, LuckThalamarisDef, 
  LuckValkosDef, LuckEenrisDef, LuckRairaselDef, 
  AlderbamDef, ChysisDef, MundDef, WhodiniDef)

const totalCompanionTopLuck = Math.max (SuwoLuck, AzadiLuck, LodoLuck, NoanzaLuck, 
  KaiszarLuck, LoksiLuck, ThalamarisLuck, ValkosLuck, EenrisLuck, RairaselLuck, 
  AtkKaiszarLuck, AtkLoksiLuck, AtkThalamarisLuck, AtkValkosLuck, AtkEenrisLuck, 
  AtkRairaselLuck, DefKaiszarLuck, DefLoksiLuck, DefThalamarisLuck, DefValkosLuck, 
  DefEenrisLuck, DefRairaselLuck, LuckKaiszarLuck, LuckLoksiLuck, LuckThalamarisLuck, 
  LuckValkosLuck, LuckEenrisLuck, LuckRairaselLuck, 
  AlderbamLuck, ChysisLuck, MundLuck, WhodiniLuck)

  //Weapon1 battle items//

const [NoWeapon1IsShown, setNoWeapon1IsShown] = useState(false)
const [NoWeapon1Active, setNoWeapon1Active] = useState(false)

const [WoodSwordIsShown, setWoodSwordIsShown] = useState(false)
const [WoodSwordActive, setWoodSwordActive] = useState(false)
const [WoodSwordNoIsShown, setWoodSwordNoIsShown] = useState(false)
const [WoodSwordNoActive, setWoodSwordNoActive] = useState(false)
const [WoodSwordAtk, setWoodSwordAtk] = useState(0)
const [WoodSwordDef, setWoodSwordDef] = useState(0)
const [WoodSwordLuck, setWoodSwordLuck] = useState(0)

const [WoodSpearIsShown, setWoodSpearIsShown] = useState(false)
const [WoodSpearActive, setWoodSpearActive] = useState(false)
const [WoodSpearNoIsShown, setWoodSpearNoIsShown] = useState(false)
const [WoodSpearNoActive, setWoodSpearNoActive] = useState(false)
const [WoodSpearAtk, setWoodSpearAtk] = useState(0)
const [WoodSpearDef, setWoodSpearDef] = useState(0)
const [WoodSpearLuck, setWoodSpearLuck] = useState(0)

const [SteelSwordIsShown, setSteelSwordIsShown] = useState(false)
const [SteelSwordActive, setSteelSwordActive] = useState(false)
const [SteelSwordNoIsShown, setSteelSwordNoIsShown] = useState(false)
const [SteelSwordNoActive, setSteelSwordNoActive] = useState(false)
const [SteelSwordAtk, setSteelSwordAtk] = useState(0)
const [SteelSwordDef, setSteelSwordDef] = useState(0)
const [SteelSwordLuck, setSteelSwordLuck] = useState(0)

const [SteelMaceIsShown, setSteelMaceIsShown] = useState(false)
const [SteelMaceActive, setSteelMaceActive] = useState(false)
const [SteelMaceNoIsShown, setSteelMaceNoIsShown] = useState(false)
const [SteelMaceNoActive, setSteelMaceNoActive] = useState(false)
const [SteelMaceAtk, setSteelMaceAtk] = useState(0)
const [SteelMaceDef, setSteelMaceDef] = useState(0)
const [SteelMaceLuck, setSteelMaceLuck] = useState(0)

const [SteelDaggerIsShown, setSteelDaggerIsShown] = useState(false)
const [SteelDaggerActive, setSteelDaggerActive] = useState(false)
const [SteelDaggerNoIsShown, setSteelDaggerNoIsShown] = useState(false)
const [SteelDaggerNoActive, setSteelDaggerNoActive] = useState(false)
const [SteelDaggerAtk, setSteelDaggerAtk] = useState(0)
const [SteelDaggerDef, setSteelDaggerDef] = useState(0)
const [SteelDaggerLuck, setSteelDaggerLuck] = useState(0)

const [SpellfireSwordIsShown, setSpellfireSwordIsShown] = useState(false)
const [SpellfireSwordActive, setSpellfireSwordActive] = useState(false)
const [SpellfireSwordNoIsShown, setSpellfireSwordNoIsShown] = useState(false)
const [SpellfireSwordNoActive, setSpellfireSwordNoActive] = useState(false)
const [SpellfireSwordAtk, setSpellfireSwordAtk] = useState(0)
const [SpellfireSwordDef, setSpellfireSwordDef] = useState(0)
const [SpellfireSwordLuck, setSpellfireSwordLuck] = useState(0)

const [RainaSwordIsShown, setRainaSwordIsShown] = useState(false)
const [RainaSwordActive, setRainaSwordActive] = useState(false)
const [RainaSwordNoIsShown, setRainaSwordNoIsShown] = useState(false)
const [RainaSwordNoActive, setRainaSwordNoActive] = useState(false)
const [RainaSwordAtk, setRainaSwordAtk] = useState(0)
const [RainaSwordDef, setRainaSwordDef] = useState(0)
const [RainaSwordLuck, setRainaSwordLuck] = useState(0)

const [OozeSwordIsShown, setOozeSwordIsShown] = useState(false)
const [OozeSwordActive, setOozeSwordActive] = useState(false)
const [OozeSwordNoIsShown, setOozeSwordNoIsShown] = useState(false)
const [OozeSwordNoActive, setOozeSwordNoActive] = useState(false)
const [OozeSwordAtk, setOozeSwordAtk] = useState(0)
const [OozeSwordDef, setOozeSwordDef] = useState(0)
const [OozeSwordLuck, setOozeSwordLuck] = useState(0)

const [NiftraSwordIsShown, setNiftraSwordIsShown] = useState(false)
const [NiftraSwordActive, setNiftraSwordActive] = useState(false)
const [NiftraSwordNoIsShown, setNiftraSwordNoIsShown] = useState(false)
const [NiftraSwordNoActive, setNiftraSwordNoActive] = useState(false)
const [NiftraSwordAtk, setNiftraSwordAtk] = useState(0)
const [NiftraSwordDef, setNiftraSwordDef] = useState(0)
const [NiftraSwordLuck, setNiftraSwordLuck] = useState(0)

const [MercurialSwordIsShown, setMercurialSwordIsShown] = useState(false)
const [MercurialSwordActive, setMercurialSwordActive] = useState(false)
const [MercurialSwordNoIsShown, setMercurialSwordNoIsShown] = useState(false)
const [MercurialSwordNoActive, setMercurialSwordNoActive] = useState(false)
const [MercurialSwordAtk, setMercurialSwordAtk] = useState(0)
const [MercurialSwordDef, setMercurialSwordDef] = useState(0)
const [MercurialSwordLuck, setMercurialSwordLuck] = useState(0)

const [LeafsungWoodenSwordIsShown, setLeafsungWoodenSwordIsShown] = useState(false)
const [LeafsungWoodenSwordActive, setLeafsungWoodenSwordActive] = useState(false)
const [LeafsungWoodenSwordNoIsShown, setLeafsungWoodenSwordNoIsShown] = useState(false)
const [LeafsungWoodenSwordNoActive, setLeafsungWoodenSwordNoActive] = useState(false)
const [LeafsungWoodenSwordAtk, setLeafsungWoodenSwordAtk] = useState(0)
const [LeafsungWoodenSwordDef, setLeafsungWoodenSwordDef] = useState(0)
const [LeafsungWoodenSwordLuck, setLeafsungWoodenSwordLuck] = useState(0)

const [KingMaiSwordIsShown, setKingMaiSwordIsShown] = useState(false)
const [KingMaiSwordActive, setKingMaiSwordActive] = useState(false)
const [KingMaiSwordNoIsShown, setKingMaiSwordNoIsShown] = useState(false)
const [KingMaiSwordNoActive, setKingMaiSwordNoActive] = useState(false)
const [KingMaiSwordAtk, setKingMaiSwordAtk] = useState(0)
const [KingMaiSwordDef, setKingMaiSwordDef] = useState(0)
const [KingMaiSwordLuck, setKingMaiSwordLuck] = useState(0)

const [GlassScimitarIsShown, setGlassScimitarIsShown] = useState(false)
const [GlassScimitarActive, setGlassScimitarActive] = useState(false)
const [GlassScimitarNoIsShown, setGlassScimitarNoIsShown] = useState(false)
const [GlassScimitarNoActive, setGlassScimitarNoActive] = useState(false)
const [GlassScimitarAtk, setGlassScimitarAtk] = useState(0)
const [GlassScimitarDef, setGlassScimitarDef] = useState(0)
const [GlassScimitarLuck, setGlassScimitarLuck] = useState(0)

const [FusionSwordIsShown, setFusionSwordIsShown] = useState(false)
const [FusionSwordActive, setFusionSwordActive] = useState(false)
const [FusionSwordNoIsShown, setFusionSwordNoIsShown] = useState(false)
const [FusionSwordNoActive, setFusionSwordNoActive] = useState(false)
const [FusionSwordAtk, setFusionSwordAtk] = useState(0)
const [FusionSwordDef, setFusionSwordDef] = useState(0)
const [FusionSwordLuck, setFusionSwordLuck] = useState(0)

const [FlowerSlingshotIsShown, setFlowerSlingshotIsShown] = useState(false)
const [FlowerSlingshotActive, setFlowerSlingshotActive] = useState(false)
const [FlowerSlingshotNoIsShown, setFlowerSlingshotNoIsShown] = useState(false)
const [FlowerSlingshotNoActive, setFlowerSlingshotNoActive] = useState(false)
const [FlowerSlingshotAtk, setFlowerSlingshotAtk] = useState(0)
const [FlowerSlingshotDef, setFlowerSlingshotDef] = useState(0)
const [FlowerSlingshotLuck, setFlowerSlingshotLuck] = useState(0)

const [DragonTailSwordIsShown, setDragonTailSwordIsShown] = useState(false)
const [DragonTailSwordActive, setDragonTailSwordActive] = useState(false)
const [DragonTailSwordNoIsShown, setDragonTailSwordNoIsShown] = useState(false)
const [DragonTailSwordNoActive, setDragonTailSwordNoActive] = useState(false)
const [DragonTailSwordAtk, setDragonTailSwordAtk] = useState(0)
const [DragonTailSwordDef, setDragonTailSwordDef] = useState(0)
const [DragonTailSwordLuck, setDragonTailSwordLuck] = useState(0)

const [DragonClawHookIsShown, setDragonClawHookIsShown] = useState(false)
const [DragonClawHookActive, setDragonClawHookActive] = useState(false)
const [DragonClawHookNoIsShown, setDragonClawHookNoIsShown] = useState(false)
const [DragonClawHookNoActive, setDragonClawHookNoActive] = useState(false)
const [DragonClawHookAtk, setDragonClawHookAtk] = useState(0)
const [DragonClawHookDef, setDragonClawHookDef] = useState(0)
const [DragonClawHookLuck, setDragonClawHookLuck] = useState(0)

const [DawnSwordIsShown, setDawnSwordIsShown] = useState(false)
const [DawnSwordActive, setDawnSwordActive] = useState(false)
const [DawnSwordNoIsShown, setDawnSwordNoIsShown] = useState(false)
const [DawnSwordNoActive, setDawnSwordNoActive] = useState(false)
const [DawnSwordAtk, setDawnSwordAtk] = useState(0)
const [DawnSwordDef, setDawnSwordDef] = useState(0)
const [DawnSwordLuck, setDawnSwordLuck] = useState(0)

const [DarkForestSwordOldIsShown, setDarkForestSwordOldIsShown] = useState(false)
const [DarkForestSwordOldActive, setDarkForestSwordOldActive] = useState(false)
const [DarkForestSwordOldNoIsShown, setDarkForestSwordOldNoIsShown] = useState(false)
const [DarkForestSwordOldNoActive, setDarkForestSwordOldNoActive] = useState(false)
const [DarkForestSwordOldAtk, setDarkForestSwordOldAtk] = useState(0)
const [DarkForestSwordOldDef, setDarkForestSwordOldDef] = useState(0)
const [DarkForestSwordOldLuck, setDarkForestSwordOldLuck] = useState(0)

const [DarkForestSwordIsShown, setDarkForestSwordIsShown] = useState(false)
const [DarkForestSwordActive, setDarkForestSwordActive] = useState(false)
const [DarkForestSwordNoIsShown, setDarkForestSwordNoIsShown] = useState(false)
const [DarkForestSwordNoActive, setDarkForestSwordNoActive] = useState(false)
const [DarkForestSwordAtk, setDarkForestSwordAtk] = useState(0)
const [DarkForestSwordDef, setDarkForestSwordDef] = useState(0)
const [DarkForestSwordLuck, setDarkForestSwordLuck] = useState(0)

const handleWoodSwordClick = event => {
  setWoodSwordIsShown (current => !WoodSwordIsShown);
  setWoodSwordActive (current => !WoodSwordActive);
  setWoodSwordAtk (value => 1);
  setWoodSwordDef (value => 0);
  setWoodSwordLuck (value => 0);
  
 setWoodSpearIsShown (current => false);
 setWoodSpearActive (current => false);
 setWoodSpearAtk (value => 0);
 setWoodSpearDef (value => 0);
 setWoodSpearLuck (value => 0);

 setSteelSwordIsShown (current => false);
 setSteelSwordActive (current => false);
 setSteelSwordAtk (value => 0);
 setSteelSwordDef (value => 0);
 setSteelSwordLuck (value => 0);

 setSteelMaceIsShown (current => false);
 setSteelMaceActive (current => false);
 setSteelMaceAtk (value => 0);
 setSteelMaceDef (value => 0);
 setSteelMaceLuck (value => 0);

 setSteelDaggerIsShown (current => false);
 setSteelDaggerActive (current => false);
 setSteelDaggerAtk (value => 0);
 setSteelDaggerDef (value => 0);
 setSteelDaggerLuck (value => 0);

 setSpellfireSwordIsShown (current => false);
 setSpellfireSwordActive (current => false);
 setSpellfireSwordAtk (value => 0);
 setSpellfireSwordDef (value => 0);
 setSpellfireSwordLuck (value => 0);

 setRainaSwordIsShown (current => false);
 setRainaSwordActive (current => false);
 setRainaSwordAtk (value => 0);
 setRainaSwordDef (value => 0);
 setRainaSwordLuck (value => 0);

 setOozeSwordIsShown (current => false);
 setOozeSwordActive (current => false);
 setOozeSwordAtk (value => 0);
 setOozeSwordDef (value => 0);
 setOozeSwordLuck (value => 0);

 setNiftraSwordIsShown (current => false);
 setNiftraSwordActive (current => false);
 setNiftraSwordAtk (value => 0);
 setNiftraSwordDef (value => 0);
 setNiftraSwordLuck (value => 0);

 setMercurialSwordIsShown (current => false);
 setMercurialSwordActive (current => false);
 setMercurialSwordAtk (value => 0);
 setMercurialSwordDef (value => 0);
 setMercurialSwordLuck (value => 0);

 setLeafsungWoodenSwordIsShown (current => false);
 setLeafsungWoodenSwordActive (current => false);
 setLeafsungWoodenSwordAtk (value => 0);
 setLeafsungWoodenSwordDef (value => 0);
 setLeafsungWoodenSwordLuck (value => 0);

 setKingMaiSwordIsShown (current => false);
 setKingMaiSwordActive (current => false);
 setKingMaiSwordAtk (value => 0);
 setKingMaiSwordDef (value => 0);
 setKingMaiSwordLuck (value => 0);

 setGlassScimitarIsShown (current => false);
 setGlassScimitarActive (current => false);
 setGlassScimitarAtk (value => 0);
 setGlassScimitarDef (value => 0);
 setGlassScimitarLuck (value => 0);

 setFusionSwordIsShown (current => false);
 setFusionSwordActive (current => false);
 setFusionSwordAtk (value => 0);
 setFusionSwordDef (value => 0);
 setFusionSwordLuck (value => 0);

 setFlowerSlingshotIsShown (current => false);
 setFlowerSlingshotActive (current => false);
 setFlowerSlingshotAtk (value => 0);
 setFlowerSlingshotDef (value => 0);
 setFlowerSlingshotLuck (value => 0);

 setDragonTailSwordIsShown (current => false);
 setDragonTailSwordActive (current => false);
 setDragonTailSwordAtk (value => 0);
 setDragonTailSwordDef (value => 0);
 setDragonTailSwordLuck (value => 0);

 setDragonClawHookIsShown (current => false);
 setDragonClawHookActive (current => false);
 setDragonClawHookAtk (value => 0);
 setDragonClawHookDef (value => 0);
 setDragonClawHookLuck (value => 0);

 setDawnSwordIsShown (current => false);
 setDawnSwordActive (current => false);
 setDawnSwordAtk (value => 0);
 setDawnSwordDef (value => 0);
 setDawnSwordLuck (value => 0);

 setDarkForestSwordOldIsShown (current => false);
 setDarkForestSwordOldActive (current => false);
 setDarkForestSwordOldAtk (value => 0);
 setDarkForestSwordOldDef (value => 0);
 setDarkForestSwordOldLuck (value => 0);

 setDarkForestSwordIsShown (current => false);
 setDarkForestSwordActive (current => false);
 setDarkForestSwordAtk (value => 0);
 setDarkForestSwordDef (value => 0);
 setDarkForestSwordLuck (value => 0);
  };

  const handleWoodSpearClick = event => {
  setWoodSpearIsShown (current => !WoodSpearIsShown);
  setWoodSpearActive (current => !WoodSpearActive);
  setWoodSpearAtk (value => 4);
  setWoodSpearDef (value => 1);
  setWoodSpearLuck (value => 0);

  setWoodSwordIsShown (current => false);
   setWoodSwordActive (current => false);
   setWoodSwordAtk (value => 0);
   setWoodSwordDef (value => 0);
   setWoodSwordLuck (value => 0);

  setSteelSwordIsShown (current => false);
  setSteelSwordActive (current => false);
  setSteelSwordAtk (value => 0);
  setSteelSwordDef (value => 0);
  setSteelSwordLuck (value => 0);

  setSteelMaceIsShown (current => false);
  setSteelMaceActive (current => false);
  setSteelMaceAtk (value => 0);
  setSteelMaceDef (value => 0);
  setSteelMaceLuck (value => 0);

  setSteelDaggerIsShown (current => false);
  setSteelDaggerActive (current => false);
  setSteelDaggerAtk (value => 0);
  setSteelDaggerDef (value => 0);
  setSteelDaggerLuck (value => 0);

  setSpellfireSwordIsShown (current => false);
  setSpellfireSwordActive (current => false);
  setSpellfireSwordAtk (value => 0);
  setSpellfireSwordDef (value => 0);
  setSpellfireSwordLuck (value => 0);

  setRainaSwordIsShown (current => false);
  setRainaSwordActive (current => false);
  setRainaSwordAtk (value => 0);
  setRainaSwordDef (value => 0);
  setRainaSwordLuck (value => 0);

  setOozeSwordIsShown (current => false);
  setOozeSwordActive (current => false);
  setOozeSwordAtk (value => 0);
  setOozeSwordDef (value => 0);
  setOozeSwordLuck (value => 0);

  setNiftraSwordIsShown (current => false);
  setNiftraSwordActive (current => false);
  setNiftraSwordAtk (value => 0);
  setNiftraSwordDef (value => 0);
  setNiftraSwordLuck (value => 0);

  setMercurialSwordIsShown (current => false);
  setMercurialSwordActive (current => false);
  setMercurialSwordAtk (value => 0);
  setMercurialSwordDef (value => 0);
  setMercurialSwordLuck (value => 0);

  setLeafsungWoodenSwordIsShown (current => false);
  setLeafsungWoodenSwordActive (current => false);
  setLeafsungWoodenSwordAtk (value => 0);
  setLeafsungWoodenSwordDef (value => 0);
  setLeafsungWoodenSwordLuck (value => 0);

  setKingMaiSwordIsShown (current => false);
  setKingMaiSwordActive (current => false);
  setKingMaiSwordAtk (value => 0);
  setKingMaiSwordDef (value => 0);
  setKingMaiSwordLuck (value => 0);

  setGlassScimitarIsShown (current => false);
  setGlassScimitarActive (current => false);
  setGlassScimitarAtk (value => 0);
  setGlassScimitarDef (value => 0);
  setGlassScimitarLuck (value => 0);

  setFusionSwordIsShown (current => false);
  setFusionSwordActive (current => false);
  setFusionSwordAtk (value => 0);
  setFusionSwordDef (value => 0);
  setFusionSwordLuck (value => 0);

  setFlowerSlingshotIsShown (current => false);
  setFlowerSlingshotActive (current => false);
  setFlowerSlingshotAtk (value => 0);
  setFlowerSlingshotDef (value => 0);
  setFlowerSlingshotLuck (value => 0);

  setDragonTailSwordIsShown (current => false);
  setDragonTailSwordActive (current => false);
  setDragonTailSwordAtk (value => 0);
  setDragonTailSwordDef (value => 0);
  setDragonTailSwordLuck (value => 0);

  setDragonClawHookIsShown (current => false);
  setDragonClawHookActive (current => false);
  setDragonClawHookAtk (value => 0);
  setDragonClawHookDef (value => 0);
  setDragonClawHookLuck (value => 0);

  setDawnSwordIsShown (current => false);
  setDawnSwordActive (current => false);
  setDawnSwordAtk (value => 0);
  setDawnSwordDef (value => 0);
  setDawnSwordLuck (value => 0);

  setDarkForestSwordOldIsShown (current => false);
  setDarkForestSwordOldActive (current => false);
  setDarkForestSwordOldAtk (value => 0);
  setDarkForestSwordOldDef (value => 0);
  setDarkForestSwordOldLuck (value => 0);

  setDarkForestSwordIsShown (current => false);
  setDarkForestSwordActive (current => false);
  setDarkForestSwordAtk (value => 0);
  setDarkForestSwordDef (value => 0);
  setDarkForestSwordLuck (value => 0);
  };

  const handleSteelSwordClick = event => {
  setSteelSwordIsShown (current => !SteelSwordIsShown);
  setSteelSwordActive (current => !SteelSwordActive);
  setSteelSwordAtk (value => 10);
  setSteelSwordDef (value => 0);
  setSteelSwordLuck (value => 0);

  setWoodSwordIsShown (current => false);
  setWoodSwordActive (current => false);
  setWoodSwordAtk (value => 0);
  setWoodSwordDef (value => 0);
  setWoodSwordLuck (value => 0);
  
 setWoodSpearIsShown (current => false);
 setWoodSpearActive (current => false);
 setWoodSpearAtk (value => 0);
 setWoodSpearDef (value => 0);
 setWoodSpearLuck (value => 0);

 setSteelMaceIsShown (current => false);
 setSteelMaceActive (current => false);
 setSteelMaceAtk (value => 0);
 setSteelMaceDef (value => 0);
 setSteelMaceLuck (value => 0);

 setSteelDaggerIsShown (current => false);
 setSteelDaggerActive (current => false);
 setSteelDaggerAtk (value => 0);
 setSteelDaggerDef (value => 0);
 setSteelDaggerLuck (value => 0);

 setSpellfireSwordIsShown (current => false);
 setSpellfireSwordActive (current => false);
 setSpellfireSwordAtk (value => 0);
 setSpellfireSwordDef (value => 0);
 setSpellfireSwordLuck (value => 0);

 setRainaSwordIsShown (current => false);
 setRainaSwordActive (current => false);
 setRainaSwordAtk (value => 0);
 setRainaSwordDef (value => 0);
 setRainaSwordLuck (value => 0);

 setOozeSwordIsShown (current => false);
 setOozeSwordActive (current => false);
 setOozeSwordAtk (value => 0);
 setOozeSwordDef (value => 0);
 setOozeSwordLuck (value => 0);

 setNiftraSwordIsShown (current => false);
 setNiftraSwordActive (current => false);
 setNiftraSwordAtk (value => 0);
 setNiftraSwordDef (value => 0);
 setNiftraSwordLuck (value => 0);

 setMercurialSwordIsShown (current => false);
 setMercurialSwordActive (current => false);
 setMercurialSwordAtk (value => 0);
 setMercurialSwordDef (value => 0);
 setMercurialSwordLuck (value => 0);

 setLeafsungWoodenSwordIsShown (current => false);
 setLeafsungWoodenSwordActive (current => false);
 setLeafsungWoodenSwordAtk (value => 0);
 setLeafsungWoodenSwordDef (value => 0);
 setLeafsungWoodenSwordLuck (value => 0);

 setKingMaiSwordIsShown (current => false);
 setKingMaiSwordActive (current => false);
 setKingMaiSwordAtk (value => 0);
 setKingMaiSwordDef (value => 0);
 setKingMaiSwordLuck (value => 0);

 setGlassScimitarIsShown (current => false);
 setGlassScimitarActive (current => false);
 setGlassScimitarAtk (value => 0);
 setGlassScimitarDef (value => 0);
 setGlassScimitarLuck (value => 0);

 setFusionSwordIsShown (current => false);
 setFusionSwordActive (current => false);
 setFusionSwordAtk (value => 0);
 setFusionSwordDef (value => 0);
 setFusionSwordLuck (value => 0);

 setFlowerSlingshotIsShown (current => false);
 setFlowerSlingshotActive (current => false);
 setFlowerSlingshotAtk (value => 0);
 setFlowerSlingshotDef (value => 0);
 setFlowerSlingshotLuck (value => 0);

 setDragonTailSwordIsShown (current => false);
 setDragonTailSwordActive (current => false);
 setDragonTailSwordAtk (value => 0);
 setDragonTailSwordDef (value => 0);
 setDragonTailSwordLuck (value => 0);

 setDragonClawHookIsShown (current => false);
 setDragonClawHookActive (current => false);
 setDragonClawHookAtk (value => 0);
 setDragonClawHookDef (value => 0);
 setDragonClawHookLuck (value => 0);

 setDawnSwordIsShown (current => false);
 setDawnSwordActive (current => false);
 setDawnSwordAtk (value => 0);
 setDawnSwordDef (value => 0);
 setDawnSwordLuck (value => 0);

 setDarkForestSwordOldIsShown (current => false);
 setDarkForestSwordOldActive (current => false);
 setDarkForestSwordOldAtk (value => 0);
 setDarkForestSwordOldDef (value => 0);
 setDarkForestSwordOldLuck (value => 0);

 setDarkForestSwordIsShown (current => false);
 setDarkForestSwordActive (current => false);
 setDarkForestSwordAtk (value => 0);
 setDarkForestSwordDef (value => 0);
 setDarkForestSwordLuck (value => 0);
  };

  const handleSteelMaceClick = event => {
  setSteelMaceIsShown (current => !SteelMaceIsShown);
  setSteelMaceActive (current => !SteelMaceActive);
  setSteelMaceAtk (value => 15);
  setSteelMaceDef (value => 0);
  setSteelMaceLuck (value => 0);

  setWoodSwordIsShown (current => false);
  setWoodSwordActive (current => false);
  setWoodSwordAtk (value => 0);
  setWoodSwordDef (value => 0);
  setWoodSwordLuck (value => 0);
  
 setWoodSpearIsShown (current => false);
 setWoodSpearActive (current => false);
 setWoodSpearAtk (value => 0);
 setWoodSpearDef (value => 0);
 setWoodSpearLuck (value => 0);

 setSteelSwordIsShown (current => false);
 setSteelSwordActive (current => false);
 setSteelSwordAtk (value => 0);
 setSteelSwordDef (value => 0);
 setSteelSwordLuck (value => 0);

 setSteelDaggerIsShown (current => false);
 setSteelDaggerActive (current => false);
 setSteelDaggerAtk (value => 0);
 setSteelDaggerDef (value => 0);
 setSteelDaggerLuck (value => 0);

 setSpellfireSwordIsShown (current => false);
 setSpellfireSwordActive (current => false);
 setSpellfireSwordAtk (value => 0);
 setSpellfireSwordDef (value => 0);
 setSpellfireSwordLuck (value => 0);

 setRainaSwordIsShown (current => false);
 setRainaSwordActive (current => false);
 setRainaSwordAtk (value => 0);
 setRainaSwordDef (value => 0);
 setRainaSwordLuck (value => 0);

 setOozeSwordIsShown (current => false);
 setOozeSwordActive (current => false);
 setOozeSwordAtk (value => 0);
 setOozeSwordDef (value => 0);
 setOozeSwordLuck (value => 0);

 setNiftraSwordIsShown (current => false);
 setNiftraSwordActive (current => false);
 setNiftraSwordAtk (value => 0);
 setNiftraSwordDef (value => 0);
 setNiftraSwordLuck (value => 0);

 setMercurialSwordIsShown (current => false);
 setMercurialSwordActive (current => false);
 setMercurialSwordAtk (value => 0);
 setMercurialSwordDef (value => 0);
 setMercurialSwordLuck (value => 0);

 setLeafsungWoodenSwordIsShown (current => false);
 setLeafsungWoodenSwordActive (current => false);
 setLeafsungWoodenSwordAtk (value => 0);
 setLeafsungWoodenSwordDef (value => 0);
 setLeafsungWoodenSwordLuck (value => 0);

 setKingMaiSwordIsShown (current => false);
 setKingMaiSwordActive (current => false);
 setKingMaiSwordAtk (value => 0);
 setKingMaiSwordDef (value => 0);
 setKingMaiSwordLuck (value => 0);

 setGlassScimitarIsShown (current => false);
 setGlassScimitarActive (current => false);
 setGlassScimitarAtk (value => 0);
 setGlassScimitarDef (value => 0);
 setGlassScimitarLuck (value => 0);

 setFusionSwordIsShown (current => false);
 setFusionSwordActive (current => false);
 setFusionSwordAtk (value => 0);
 setFusionSwordDef (value => 0);
 setFusionSwordLuck (value => 0);

 setFlowerSlingshotIsShown (current => false);
 setFlowerSlingshotActive (current => false);
 setFlowerSlingshotAtk (value => 0);
 setFlowerSlingshotDef (value => 0);
 setFlowerSlingshotLuck (value => 0);

 setDragonTailSwordIsShown (current => false);
 setDragonTailSwordActive (current => false);
 setDragonTailSwordAtk (value => 0);
 setDragonTailSwordDef (value => 0);
 setDragonTailSwordLuck (value => 0);

 setDragonClawHookIsShown (current => false);
 setDragonClawHookActive (current => false);
 setDragonClawHookAtk (value => 0);
 setDragonClawHookDef (value => 0);
 setDragonClawHookLuck (value => 0);

 setDawnSwordIsShown (current => false);
 setDawnSwordActive (current => false);
 setDawnSwordAtk (value => 0);
 setDawnSwordDef (value => 0);
 setDawnSwordLuck (value => 0);

 setDarkForestSwordOldIsShown (current => false);
 setDarkForestSwordOldActive (current => false);
 setDarkForestSwordOldAtk (value => 0);
 setDarkForestSwordOldDef (value => 0);
 setDarkForestSwordOldLuck (value => 0);

 setDarkForestSwordIsShown (current => false);
 setDarkForestSwordActive (current => false);
 setDarkForestSwordAtk (value => 0);
 setDarkForestSwordDef (value => 0);
 setDarkForestSwordLuck (value => 0);
  };

  const handleSteelDaggerClick = event => {
  setSteelDaggerIsShown (current => !SteelDaggerIsShown);
  setSteelDaggerActive (current => !SteelDaggerActive);
  setSteelDaggerAtk (value => 4);
  setSteelDaggerDef (value => 0);
  setSteelDaggerLuck (value => 1);

  setWoodSwordIsShown (current => false);
  setWoodSwordActive (current => false);
  setWoodSwordAtk (value => 0);
  setWoodSwordDef (value => 0);
  setWoodSwordLuck (value => 0);
  
 setWoodSpearIsShown (current => false);
 setWoodSpearActive (current => false);
 setWoodSpearAtk (value => 0);
 setWoodSpearDef (value => 0);
 setWoodSpearLuck (value => 0);

 setSteelSwordIsShown (current => false);
 setSteelSwordActive (current => false);
 setSteelSwordAtk (value => 0);
 setSteelSwordDef (value => 0);
 setSteelSwordLuck (value => 0);

 setSteelMaceIsShown (current => false);
 setSteelMaceActive (current => false);
 setSteelMaceAtk (value => 0);
 setSteelMaceDef (value => 0);
 setSteelMaceLuck (value => 0);

 setSpellfireSwordIsShown (current => false);
 setSpellfireSwordActive (current => false);
 setSpellfireSwordAtk (value => 0);
 setSpellfireSwordDef (value => 0);
 setSpellfireSwordLuck (value => 0);

 setRainaSwordIsShown (current => false);
 setRainaSwordActive (current => false);
 setRainaSwordAtk (value => 0);
 setRainaSwordDef (value => 0);
 setRainaSwordLuck (value => 0);

 setOozeSwordIsShown (current => false);
 setOozeSwordActive (current => false);
 setOozeSwordAtk (value => 0);
 setOozeSwordDef (value => 0);
 setOozeSwordLuck (value => 0);

 setNiftraSwordIsShown (current => false);
 setNiftraSwordActive (current => false);
 setNiftraSwordAtk (value => 0);
 setNiftraSwordDef (value => 0);
 setNiftraSwordLuck (value => 0);

 setMercurialSwordIsShown (current => false);
 setMercurialSwordActive (current => false);
 setMercurialSwordAtk (value => 0);
 setMercurialSwordDef (value => 0);
 setMercurialSwordLuck (value => 0);

 setLeafsungWoodenSwordIsShown (current => false);
 setLeafsungWoodenSwordActive (current => false);
 setLeafsungWoodenSwordAtk (value => 0);
 setLeafsungWoodenSwordDef (value => 0);
 setLeafsungWoodenSwordLuck (value => 0);

 setKingMaiSwordIsShown (current => false);
 setKingMaiSwordActive (current => false);
 setKingMaiSwordAtk (value => 0);
 setKingMaiSwordDef (value => 0);
 setKingMaiSwordLuck (value => 0);

 setGlassScimitarIsShown (current => false);
 setGlassScimitarActive (current => false);
 setGlassScimitarAtk (value => 0);
 setGlassScimitarDef (value => 0);
 setGlassScimitarLuck (value => 0);

 setFusionSwordIsShown (current => false);
 setFusionSwordActive (current => false);
 setFusionSwordAtk (value => 0);
 setFusionSwordDef (value => 0);
 setFusionSwordLuck (value => 0);

 setFlowerSlingshotIsShown (current => false);
 setFlowerSlingshotActive (current => false);
 setFlowerSlingshotAtk (value => 0);
 setFlowerSlingshotDef (value => 0);
 setFlowerSlingshotLuck (value => 0);

 setDragonTailSwordIsShown (current => false);
 setDragonTailSwordActive (current => false);
 setDragonTailSwordAtk (value => 0);
 setDragonTailSwordDef (value => 0);
 setDragonTailSwordLuck (value => 0);

 setDragonClawHookIsShown (current => false);
 setDragonClawHookActive (current => false);
 setDragonClawHookAtk (value => 0);
 setDragonClawHookDef (value => 0);
 setDragonClawHookLuck (value => 0);

 setDawnSwordIsShown (current => false);
 setDawnSwordActive (current => false);
 setDawnSwordAtk (value => 0);
 setDawnSwordDef (value => 0);
 setDawnSwordLuck (value => 0);

 setDarkForestSwordOldIsShown (current => false);
 setDarkForestSwordOldActive (current => false);
 setDarkForestSwordOldAtk (value => 0);
 setDarkForestSwordOldDef (value => 0);
 setDarkForestSwordOldLuck (value => 0);

 setDarkForestSwordIsShown (current => false);
 setDarkForestSwordActive (current => false);
 setDarkForestSwordAtk (value => 0);
 setDarkForestSwordDef (value => 0);
 setDarkForestSwordLuck (value => 0);
  };

  const handleSpellfireSwordClick = event => {
  setSpellfireSwordIsShown (current => !SpellfireSwordIsShown);
  setSpellfireSwordActive (current => !SpellfireSwordActive);
  setSpellfireSwordAtk (value => 14);
  setSpellfireSwordDef (value => 0);
  setSpellfireSwordLuck (value => 0);

  setWoodSwordIsShown (current => false);
  setWoodSwordActive (current => false);
  setWoodSwordAtk (value => 0);
  setWoodSwordDef (value => 0);
  setWoodSwordLuck (value => 0);
  
 setWoodSpearIsShown (current => false);
 setWoodSpearActive (current => false);
 setWoodSpearAtk (value => 0);
 setWoodSpearDef (value => 0);
 setWoodSpearLuck (value => 0);

 setSteelSwordIsShown (current => false);
 setSteelSwordActive (current => false);
 setSteelSwordAtk (value => 0);
 setSteelSwordDef (value => 0);
 setSteelSwordLuck (value => 0);

 setSteelMaceIsShown (current => false);
 setSteelMaceActive (current => false);
 setSteelMaceAtk (value => 0);
 setSteelMaceDef (value => 0);
 setSteelMaceLuck (value => 0);

 setSteelDaggerIsShown (current => false);
 setSteelDaggerActive (current => false);
 setSteelDaggerAtk (value => 0);
 setSteelDaggerDef (value => 0);
 setSteelDaggerLuck (value => 0);

 setRainaSwordIsShown (current => false);
 setRainaSwordActive (current => false);
 setRainaSwordAtk (value => 0);
 setRainaSwordDef (value => 0);
 setRainaSwordLuck (value => 0);

 setOozeSwordIsShown (current => false);
 setOozeSwordActive (current => false);
 setOozeSwordAtk (value => 0);
 setOozeSwordDef (value => 0);
 setOozeSwordLuck (value => 0);

 setNiftraSwordIsShown (current => false);
 setNiftraSwordActive (current => false);
 setNiftraSwordAtk (value => 0);
 setNiftraSwordDef (value => 0);
 setNiftraSwordLuck (value => 0);

 setMercurialSwordIsShown (current => false);
 setMercurialSwordActive (current => false);
 setMercurialSwordAtk (value => 0);
 setMercurialSwordDef (value => 0);
 setMercurialSwordLuck (value => 0);

 setLeafsungWoodenSwordIsShown (current => false);
 setLeafsungWoodenSwordActive (current => false);
 setLeafsungWoodenSwordAtk (value => 0);
 setLeafsungWoodenSwordDef (value => 0);
 setLeafsungWoodenSwordLuck (value => 0);

 setKingMaiSwordIsShown (current => false);
 setKingMaiSwordActive (current => false);
 setKingMaiSwordAtk (value => 0);
 setKingMaiSwordDef (value => 0);
 setKingMaiSwordLuck (value => 0);

 setGlassScimitarIsShown (current => false);
 setGlassScimitarActive (current => false);
 setGlassScimitarAtk (value => 0);
 setGlassScimitarDef (value => 0);
 setGlassScimitarLuck (value => 0);

 setFusionSwordIsShown (current => false);
 setFusionSwordActive (current => false);
 setFusionSwordAtk (value => 0);
 setFusionSwordDef (value => 0);
 setFusionSwordLuck (value => 0);

 setFlowerSlingshotIsShown (current => false);
 setFlowerSlingshotActive (current => false);
 setFlowerSlingshotAtk (value => 0);
 setFlowerSlingshotDef (value => 0);
 setFlowerSlingshotLuck (value => 0);

 setDragonTailSwordIsShown (current => false);
 setDragonTailSwordActive (current => false);
 setDragonTailSwordAtk (value => 0);
 setDragonTailSwordDef (value => 0);
 setDragonTailSwordLuck (value => 0);

 setDragonClawHookIsShown (current => false);
 setDragonClawHookActive (current => false);
 setDragonClawHookAtk (value => 0);
 setDragonClawHookDef (value => 0);
 setDragonClawHookLuck (value => 0);

 setDawnSwordIsShown (current => false);
 setDawnSwordActive (current => false);
 setDawnSwordAtk (value => 0);
 setDawnSwordDef (value => 0);
 setDawnSwordLuck (value => 0);

 setDarkForestSwordOldIsShown (current => false);
 setDarkForestSwordOldActive (current => false);
 setDarkForestSwordOldAtk (value => 0);
 setDarkForestSwordOldDef (value => 0);
 setDarkForestSwordOldLuck (value => 0);

 setDarkForestSwordIsShown (current => false);
 setDarkForestSwordActive (current => false);
 setDarkForestSwordAtk (value => 0);
 setDarkForestSwordDef (value => 0);
 setDarkForestSwordLuck (value => 0);
  };

  const handleRainaSwordClick = event => {
  setRainaSwordIsShown (current => !RainaSwordIsShown);
  setRainaSwordActive (current => !RainaSwordActive);
  setRainaSwordAtk (value => 11);
  setRainaSwordDef (value => 0);
  setRainaSwordLuck (value => 8);

  setWoodSwordIsShown (current => false);
  setWoodSwordActive (current => false);
  setWoodSwordAtk (value => 0);
  setWoodSwordDef (value => 0);
  setWoodSwordLuck (value => 0);
  
 setWoodSpearIsShown (current => false);
 setWoodSpearActive (current => false);
 setWoodSpearAtk (value => 0);
 setWoodSpearDef (value => 0);
 setWoodSpearLuck (value => 0);

 setSteelSwordIsShown (current => false);
 setSteelSwordActive (current => false);
 setSteelSwordAtk (value => 0);
 setSteelSwordDef (value => 0);
 setSteelSwordLuck (value => 0);

 setSteelMaceIsShown (current => false);
 setSteelMaceActive (current => false);
 setSteelMaceAtk (value => 0);
 setSteelMaceDef (value => 0);
 setSteelMaceLuck (value => 0);

 setSteelDaggerIsShown (current => false);
 setSteelDaggerActive (current => false);
 setSteelDaggerAtk (value => 0);
 setSteelDaggerDef (value => 0);
 setSteelDaggerLuck (value => 0);

 setSpellfireSwordIsShown (current => false);
 setSpellfireSwordActive (current => false);
 setSpellfireSwordAtk (value => 0);
 setSpellfireSwordDef (value => 0);
 setSpellfireSwordLuck (value => 0);

 setOozeSwordIsShown (current => false);
 setOozeSwordActive (current => false);
 setOozeSwordAtk (value => 0);
 setOozeSwordDef (value => 0);
 setOozeSwordLuck (value => 0);

 setNiftraSwordIsShown (current => false);
 setNiftraSwordActive (current => false);
 setNiftraSwordAtk (value => 0);
 setNiftraSwordDef (value => 0);
 setNiftraSwordLuck (value => 0);

 setMercurialSwordIsShown (current => false);
 setMercurialSwordActive (current => false);
 setMercurialSwordAtk (value => 0);
 setMercurialSwordDef (value => 0);
 setMercurialSwordLuck (value => 0);

 setLeafsungWoodenSwordIsShown (current => false);
 setLeafsungWoodenSwordActive (current => false);
 setLeafsungWoodenSwordAtk (value => 0);
 setLeafsungWoodenSwordDef (value => 0);
 setLeafsungWoodenSwordLuck (value => 0);

 setKingMaiSwordIsShown (current => false);
 setKingMaiSwordActive (current => false);
 setKingMaiSwordAtk (value => 0);
 setKingMaiSwordDef (value => 0);
 setKingMaiSwordLuck (value => 0);

 setGlassScimitarIsShown (current => false);
 setGlassScimitarActive (current => false);
 setGlassScimitarAtk (value => 0);
 setGlassScimitarDef (value => 0);
 setGlassScimitarLuck (value => 0);

 setFusionSwordIsShown (current => false);
 setFusionSwordActive (current => false);
 setFusionSwordAtk (value => 0);
 setFusionSwordDef (value => 0);
 setFusionSwordLuck (value => 0);

 setFlowerSlingshotIsShown (current => false);
 setFlowerSlingshotActive (current => false);
 setFlowerSlingshotAtk (value => 0);
 setFlowerSlingshotDef (value => 0);
 setFlowerSlingshotLuck (value => 0);

 setDragonTailSwordIsShown (current => false);
 setDragonTailSwordActive (current => false);
 setDragonTailSwordAtk (value => 0);
 setDragonTailSwordDef (value => 0);
 setDragonTailSwordLuck (value => 0);

 setDragonClawHookIsShown (current => false);
 setDragonClawHookActive (current => false);
 setDragonClawHookAtk (value => 0);
 setDragonClawHookDef (value => 0);
 setDragonClawHookLuck (value => 0);

 setDawnSwordIsShown (current => false);
 setDawnSwordActive (current => false);
 setDawnSwordAtk (value => 0);
 setDawnSwordDef (value => 0);
 setDawnSwordLuck (value => 0);

 setDarkForestSwordOldIsShown (current => false);
 setDarkForestSwordOldActive (current => false);
 setDarkForestSwordOldAtk (value => 0);
 setDarkForestSwordOldDef (value => 0);
 setDarkForestSwordOldLuck (value => 0);

 setDarkForestSwordIsShown (current => false);
 setDarkForestSwordActive (current => false);
 setDarkForestSwordAtk (value => 0);
 setDarkForestSwordDef (value => 0);
 setDarkForestSwordLuck (value => 0);
  };

  const handleOozeSwordClick = event => {
  setOozeSwordIsShown (current => !OozeSwordIsShown);
  setOozeSwordActive (current => !OozeSwordActive);
  setOozeSwordAtk (value => 10);
  setOozeSwordDef (value => 10);
  setOozeSwordLuck (value => 5);

  setWoodSwordIsShown (current => false);
  setWoodSwordActive (current => false);
  setWoodSwordAtk (value => 0);
  setWoodSwordDef (value => 0);
  setWoodSwordLuck (value => 0);
  
 setWoodSpearIsShown (current => false);
 setWoodSpearActive (current => false);
 setWoodSpearAtk (value => 0);
 setWoodSpearDef (value => 0);
 setWoodSpearLuck (value => 0);

 setSteelSwordIsShown (current => false);
 setSteelSwordActive (current => false);
 setSteelSwordAtk (value => 0);
 setSteelSwordDef (value => 0);
 setSteelSwordLuck (value => 0);

 setSteelMaceIsShown (current => false);
 setSteelMaceActive (current => false);
 setSteelMaceAtk (value => 0);
 setSteelMaceDef (value => 0);
 setSteelMaceLuck (value => 0);

 setSteelDaggerIsShown (current => false);
 setSteelDaggerActive (current => false);
 setSteelDaggerAtk (value => 0);
 setSteelDaggerDef (value => 0);
 setSteelDaggerLuck (value => 0);

 setSpellfireSwordIsShown (current => false);
 setSpellfireSwordActive (current => false);
 setSpellfireSwordAtk (value => 0);
 setSpellfireSwordDef (value => 0);
 setSpellfireSwordLuck (value => 0);

 setRainaSwordIsShown (current => false);
 setRainaSwordActive (current => false);
 setRainaSwordAtk (value => 0);
 setRainaSwordDef (value => 0);
 setRainaSwordLuck (value => 0);

 setNiftraSwordIsShown (current => false);
 setNiftraSwordActive (current => false);
 setNiftraSwordAtk (value => 0);
 setNiftraSwordDef (value => 0);
 setNiftraSwordLuck (value => 0);

 setMercurialSwordIsShown (current => false);
 setMercurialSwordActive (current => false);
 setMercurialSwordAtk (value => 0);
 setMercurialSwordDef (value => 0);
 setMercurialSwordLuck (value => 0);

 setLeafsungWoodenSwordIsShown (current => false);
 setLeafsungWoodenSwordActive (current => false);
 setLeafsungWoodenSwordAtk (value => 0);
 setLeafsungWoodenSwordDef (value => 0);
 setLeafsungWoodenSwordLuck (value => 0);

 setKingMaiSwordIsShown (current => false);
 setKingMaiSwordActive (current => false);
 setKingMaiSwordAtk (value => 0);
 setKingMaiSwordDef (value => 0);
 setKingMaiSwordLuck (value => 0);

 setGlassScimitarIsShown (current => false);
 setGlassScimitarActive (current => false);
 setGlassScimitarAtk (value => 0);
 setGlassScimitarDef (value => 0);
 setGlassScimitarLuck (value => 0);

 setFusionSwordIsShown (current => false);
 setFusionSwordActive (current => false);
 setFusionSwordAtk (value => 0);
 setFusionSwordDef (value => 0);
 setFusionSwordLuck (value => 0);

 setFlowerSlingshotIsShown (current => false);
 setFlowerSlingshotActive (current => false);
 setFlowerSlingshotAtk (value => 0);
 setFlowerSlingshotDef (value => 0);
 setFlowerSlingshotLuck (value => 0);

 setDragonTailSwordIsShown (current => false);
 setDragonTailSwordActive (current => false);
 setDragonTailSwordAtk (value => 0);
 setDragonTailSwordDef (value => 0);
 setDragonTailSwordLuck (value => 0);

 setDragonClawHookIsShown (current => false);
 setDragonClawHookActive (current => false);
 setDragonClawHookAtk (value => 0);
 setDragonClawHookDef (value => 0);
 setDragonClawHookLuck (value => 0);

 setDawnSwordIsShown (current => false);
 setDawnSwordActive (current => false);
 setDawnSwordAtk (value => 0);
 setDawnSwordDef (value => 0);
 setDawnSwordLuck (value => 0);

 setDarkForestSwordOldIsShown (current => false);
 setDarkForestSwordOldActive (current => false);
 setDarkForestSwordOldAtk (value => 0);
 setDarkForestSwordOldDef (value => 0);
 setDarkForestSwordOldLuck (value => 0);

 setDarkForestSwordIsShown (current => false);
 setDarkForestSwordActive (current => false);
 setDarkForestSwordAtk (value => 0);
 setDarkForestSwordDef (value => 0);
 setDarkForestSwordLuck (value => 0);
  };

  const handleNiftraSwordClick = event => {
  setNiftraSwordIsShown (current => !NiftraSwordIsShown);
  setNiftraSwordActive (current => !NiftraSwordActive);
  setNiftraSwordAtk (value => 18);
  setNiftraSwordDef (value => 0);
  setNiftraSwordLuck (value => 0);

  setWoodSwordIsShown (current => false);
  setWoodSwordActive (current => false);
  setWoodSwordAtk (value => 0);
  setWoodSwordDef (value => 0);
  setWoodSwordLuck (value => 0);
  
 setWoodSpearIsShown (current => false);
 setWoodSpearActive (current => false);
 setWoodSpearAtk (value => 0);
 setWoodSpearDef (value => 0);
 setWoodSpearLuck (value => 0);

 setSteelSwordIsShown (current => false);
 setSteelSwordActive (current => false);
 setSteelSwordAtk (value => 0);
 setSteelSwordDef (value => 0);
 setSteelSwordLuck (value => 0);

 setSteelMaceIsShown (current => false);
 setSteelMaceActive (current => false);
 setSteelMaceAtk (value => 0);
 setSteelMaceDef (value => 0);
 setSteelMaceLuck (value => 0);

 setSteelDaggerIsShown (current => false);
 setSteelDaggerActive (current => false);
 setSteelDaggerAtk (value => 0);
 setSteelDaggerDef (value => 0);
 setSteelDaggerLuck (value => 0);

 setSpellfireSwordIsShown (current => false);
 setSpellfireSwordActive (current => false);
 setSpellfireSwordAtk (value => 0);
 setSpellfireSwordDef (value => 0);
 setSpellfireSwordLuck (value => 0);

 setRainaSwordIsShown (current => false);
 setRainaSwordActive (current => false);
 setRainaSwordAtk (value => 0);
 setRainaSwordDef (value => 0);
 setRainaSwordLuck (value => 0);

 setOozeSwordIsShown (current => false);
 setOozeSwordActive (current => false);
 setOozeSwordAtk (value => 0);
 setOozeSwordDef (value => 0);
 setOozeSwordLuck (value => 0);

 setMercurialSwordIsShown (current => false);
 setMercurialSwordActive (current => false);
 setMercurialSwordAtk (value => 0);
 setMercurialSwordDef (value => 0);
 setMercurialSwordLuck (value => 0);

 setLeafsungWoodenSwordIsShown (current => false);
 setLeafsungWoodenSwordActive (current => false);
 setLeafsungWoodenSwordAtk (value => 0);
 setLeafsungWoodenSwordDef (value => 0);
 setLeafsungWoodenSwordLuck (value => 0);

 setKingMaiSwordIsShown (current => false);
 setKingMaiSwordActive (current => false);
 setKingMaiSwordAtk (value => 0);
 setKingMaiSwordDef (value => 0);
 setKingMaiSwordLuck (value => 0);

 setGlassScimitarIsShown (current => false);
 setGlassScimitarActive (current => false);
 setGlassScimitarAtk (value => 0);
 setGlassScimitarDef (value => 0);
 setGlassScimitarLuck (value => 0);

 setFusionSwordIsShown (current => false);
 setFusionSwordActive (current => false);
 setFusionSwordAtk (value => 0);
 setFusionSwordDef (value => 0);
 setFusionSwordLuck (value => 0);

 setFlowerSlingshotIsShown (current => false);
 setFlowerSlingshotActive (current => false);
 setFlowerSlingshotAtk (value => 0);
 setFlowerSlingshotDef (value => 0);
 setFlowerSlingshotLuck (value => 0);

 setDragonTailSwordIsShown (current => false);
 setDragonTailSwordActive (current => false);
 setDragonTailSwordAtk (value => 0);
 setDragonTailSwordDef (value => 0);
 setDragonTailSwordLuck (value => 0);

 setDragonClawHookIsShown (current => false);
 setDragonClawHookActive (current => false);
 setDragonClawHookAtk (value => 0);
 setDragonClawHookDef (value => 0);
 setDragonClawHookLuck (value => 0);

 setDawnSwordIsShown (current => false);
 setDawnSwordActive (current => false);
 setDawnSwordAtk (value => 0);
 setDawnSwordDef (value => 0);
 setDawnSwordLuck (value => 0);

 setDarkForestSwordOldIsShown (current => false);
 setDarkForestSwordOldActive (current => false);
 setDarkForestSwordOldAtk (value => 0);
 setDarkForestSwordOldDef (value => 0);
 setDarkForestSwordOldLuck (value => 0);

 setDarkForestSwordIsShown (current => false);
 setDarkForestSwordActive (current => false);
 setDarkForestSwordAtk (value => 0);
 setDarkForestSwordDef (value => 0);
 setDarkForestSwordLuck (value => 0);
  };

  const handleMercurialSwordClick = event => {
  setMercurialSwordIsShown (current => !MercurialSwordIsShown);
  setMercurialSwordActive (current => !MercurialSwordActive);
  setMercurialSwordAtk (value => 11);
  setMercurialSwordDef (value => 11);
  setMercurialSwordLuck (value => 4);

  setWoodSwordIsShown (current => false);
  setWoodSwordActive (current => false);
  setWoodSwordAtk (value => 0);
  setWoodSwordDef (value => 0);
  setWoodSwordLuck (value => 0);
  
 setWoodSpearIsShown (current => false);
 setWoodSpearActive (current => false);
 setWoodSpearAtk (value => 0);
 setWoodSpearDef (value => 0);
 setWoodSpearLuck (value => 0);

 setSteelSwordIsShown (current => false);
 setSteelSwordActive (current => false);
 setSteelSwordAtk (value => 0);
 setSteelSwordDef (value => 0);
 setSteelSwordLuck (value => 0);

 setSteelMaceIsShown (current => false);
 setSteelMaceActive (current => false);
 setSteelMaceAtk (value => 0);
 setSteelMaceDef (value => 0);
 setSteelMaceLuck (value => 0);

 setSteelDaggerIsShown (current => false);
 setSteelDaggerActive (current => false);
 setSteelDaggerAtk (value => 0);
 setSteelDaggerDef (value => 0);
 setSteelDaggerLuck (value => 0);

 setSpellfireSwordIsShown (current => false);
 setSpellfireSwordActive (current => false);
 setSpellfireSwordAtk (value => 0);
 setSpellfireSwordDef (value => 0);
 setSpellfireSwordLuck (value => 0);

 setRainaSwordIsShown (current => false);
 setRainaSwordActive (current => false);
 setRainaSwordAtk (value => 0);
 setRainaSwordDef (value => 0);
 setRainaSwordLuck (value => 0);

 setOozeSwordIsShown (current => false);
 setOozeSwordActive (current => false);
 setOozeSwordAtk (value => 0);
 setOozeSwordDef (value => 0);
 setOozeSwordLuck (value => 0);

 setNiftraSwordIsShown (current => false);
 setNiftraSwordActive (current => false);
 setNiftraSwordAtk (value => 0);
 setNiftraSwordDef (value => 0);
 setNiftraSwordLuck (value => 0);

 setLeafsungWoodenSwordIsShown (current => false);
 setLeafsungWoodenSwordActive (current => false);
 setLeafsungWoodenSwordAtk (value => 0);
 setLeafsungWoodenSwordDef (value => 0);
 setLeafsungWoodenSwordLuck (value => 0);

 setKingMaiSwordIsShown (current => false);
 setKingMaiSwordActive (current => false);
 setKingMaiSwordAtk (value => 0);
 setKingMaiSwordDef (value => 0);
 setKingMaiSwordLuck (value => 0);

 setGlassScimitarIsShown (current => false);
 setGlassScimitarActive (current => false);
 setGlassScimitarAtk (value => 0);
 setGlassScimitarDef (value => 0);
 setGlassScimitarLuck (value => 0);

 setFusionSwordIsShown (current => false);
 setFusionSwordActive (current => false);
 setFusionSwordAtk (value => 0);
 setFusionSwordDef (value => 0);
 setFusionSwordLuck (value => 0);

 setFlowerSlingshotIsShown (current => false);
 setFlowerSlingshotActive (current => false);
 setFlowerSlingshotAtk (value => 0);
 setFlowerSlingshotDef (value => 0);
 setFlowerSlingshotLuck (value => 0);

 setDragonTailSwordIsShown (current => false);
 setDragonTailSwordActive (current => false);
 setDragonTailSwordAtk (value => 0);
 setDragonTailSwordDef (value => 0);
 setDragonTailSwordLuck (value => 0);

 setDragonClawHookIsShown (current => false);
 setDragonClawHookActive (current => false);
 setDragonClawHookAtk (value => 0);
 setDragonClawHookDef (value => 0);
 setDragonClawHookLuck (value => 0);

 setDawnSwordIsShown (current => false);
 setDawnSwordActive (current => false);
 setDawnSwordAtk (value => 0);
 setDawnSwordDef (value => 0);
 setDawnSwordLuck (value => 0);

 setDarkForestSwordOldIsShown (current => false);
 setDarkForestSwordOldActive (current => false);
 setDarkForestSwordOldAtk (value => 0);
 setDarkForestSwordOldDef (value => 0);
 setDarkForestSwordOldLuck (value => 0);

 setDarkForestSwordIsShown (current => false);
 setDarkForestSwordActive (current => false);
 setDarkForestSwordAtk (value => 0);
 setDarkForestSwordDef (value => 0);
 setDarkForestSwordLuck (value => 0);
  };

  const handleLeafsungWoodenSwordClick = event => {
  setLeafsungWoodenSwordIsShown (current => !LeafsungWoodenSwordIsShown);
  setLeafsungWoodenSwordActive (current => !LeafsungWoodenSwordActive);
  setLeafsungWoodenSwordAtk (value => 3);
  setLeafsungWoodenSwordDef (value => 0);
  setLeafsungWoodenSwordLuck (value => 1);

  setWoodSwordIsShown (current => false);
  setWoodSwordActive (current => false);
  setWoodSwordAtk (value => 0);
  setWoodSwordDef (value => 0);
  setWoodSwordLuck (value => 0);
  
 setWoodSpearIsShown (current => false);
 setWoodSpearActive (current => false);
 setWoodSpearAtk (value => 0);
 setWoodSpearDef (value => 0);
 setWoodSpearLuck (value => 0);

 setSteelSwordIsShown (current => false);
 setSteelSwordActive (current => false);
 setSteelSwordAtk (value => 0);
 setSteelSwordDef (value => 0);
 setSteelSwordLuck (value => 0);

 setSteelMaceIsShown (current => false);
 setSteelMaceActive (current => false);
 setSteelMaceAtk (value => 0);
 setSteelMaceDef (value => 0);
 setSteelMaceLuck (value => 0);

 setSteelDaggerIsShown (current => false);
 setSteelDaggerActive (current => false);
 setSteelDaggerAtk (value => 0);
 setSteelDaggerDef (value => 0);
 setSteelDaggerLuck (value => 0);

 setSpellfireSwordIsShown (current => false);
 setSpellfireSwordActive (current => false);
 setSpellfireSwordAtk (value => 0);
 setSpellfireSwordDef (value => 0);
 setSpellfireSwordLuck (value => 0);

 setRainaSwordIsShown (current => false);
 setRainaSwordActive (current => false);
 setRainaSwordAtk (value => 0);
 setRainaSwordDef (value => 0);
 setRainaSwordLuck (value => 0);

 setOozeSwordIsShown (current => false);
 setOozeSwordActive (current => false);
 setOozeSwordAtk (value => 0);
 setOozeSwordDef (value => 0);
 setOozeSwordLuck (value => 0);

 setNiftraSwordIsShown (current => false);
 setNiftraSwordActive (current => false);
 setNiftraSwordAtk (value => 0);
 setNiftraSwordDef (value => 0);
 setNiftraSwordLuck (value => 0);

 setMercurialSwordIsShown (current => false);
 setMercurialSwordActive (current => false);
 setMercurialSwordAtk (value => 0);
 setMercurialSwordDef (value => 0);
 setMercurialSwordLuck (value => 0);

 setKingMaiSwordIsShown (current => false);
 setKingMaiSwordActive (current => false);
 setKingMaiSwordAtk (value => 0);
 setKingMaiSwordDef (value => 0);
 setKingMaiSwordLuck (value => 0);

 setGlassScimitarIsShown (current => false);
 setGlassScimitarActive (current => false);
 setGlassScimitarAtk (value => 0);
 setGlassScimitarDef (value => 0);
 setGlassScimitarLuck (value => 0);

 setFusionSwordIsShown (current => false);
 setFusionSwordActive (current => false);
 setFusionSwordAtk (value => 0);
 setFusionSwordDef (value => 0);
 setFusionSwordLuck (value => 0);

 setFlowerSlingshotIsShown (current => false);
 setFlowerSlingshotActive (current => false);
 setFlowerSlingshotAtk (value => 0);
 setFlowerSlingshotDef (value => 0);
 setFlowerSlingshotLuck (value => 0);

 setDragonTailSwordIsShown (current => false);
 setDragonTailSwordActive (current => false);
 setDragonTailSwordAtk (value => 0);
 setDragonTailSwordDef (value => 0);
 setDragonTailSwordLuck (value => 0);

 setDragonClawHookIsShown (current => false);
 setDragonClawHookActive (current => false);
 setDragonClawHookAtk (value => 0);
 setDragonClawHookDef (value => 0);
 setDragonClawHookLuck (value => 0);

 setDawnSwordIsShown (current => false);
 setDawnSwordActive (current => false);
 setDawnSwordAtk (value => 0);
 setDawnSwordDef (value => 0);
 setDawnSwordLuck (value => 0);

 setDarkForestSwordOldIsShown (current => false);
 setDarkForestSwordOldActive (current => false);
 setDarkForestSwordOldAtk (value => 0);
 setDarkForestSwordOldDef (value => 0);
 setDarkForestSwordOldLuck (value => 0);

 setDarkForestSwordIsShown (current => false);
 setDarkForestSwordActive (current => false);
 setDarkForestSwordAtk (value => 0);
 setDarkForestSwordDef (value => 0);
 setDarkForestSwordLuck (value => 0);
  };

  const handleKingMaiSwordClick = event => {
  setKingMaiSwordIsShown (current => !KingMaiSwordIsShown);
  setKingMaiSwordActive (current => !KingMaiSwordActive);
  setKingMaiSwordAtk (value => 28);
  setKingMaiSwordDef (value => 5);
  setKingMaiSwordLuck (value => 2);

  setWoodSwordIsShown (current => false);
  setWoodSwordActive (current => false);
  setWoodSwordAtk (value => 0);
  setWoodSwordDef (value => 0);
  setWoodSwordLuck (value => 0);
  
 setWoodSpearIsShown (current => false);
 setWoodSpearActive (current => false);
 setWoodSpearAtk (value => 0);
 setWoodSpearDef (value => 0);
 setWoodSpearLuck (value => 0);

 setSteelSwordIsShown (current => false);
 setSteelSwordActive (current => false);
 setSteelSwordAtk (value => 0);
 setSteelSwordDef (value => 0);
 setSteelSwordLuck (value => 0);

 setSteelMaceIsShown (current => false);
 setSteelMaceActive (current => false);
 setSteelMaceAtk (value => 0);
 setSteelMaceDef (value => 0);
 setSteelMaceLuck (value => 0);

 setSteelDaggerIsShown (current => false);
 setSteelDaggerActive (current => false);
 setSteelDaggerAtk (value => 0);
 setSteelDaggerDef (value => 0);
 setSteelDaggerLuck (value => 0);

 setSpellfireSwordIsShown (current => false);
 setSpellfireSwordActive (current => false);
 setSpellfireSwordAtk (value => 0);
 setSpellfireSwordDef (value => 0);
 setSpellfireSwordLuck (value => 0);

 setRainaSwordIsShown (current => false);
 setRainaSwordActive (current => false);
 setRainaSwordAtk (value => 0);
 setRainaSwordDef (value => 0);
 setRainaSwordLuck (value => 0);

 setOozeSwordIsShown (current => false);
 setOozeSwordActive (current => false);
 setOozeSwordAtk (value => 0);
 setOozeSwordDef (value => 0);
 setOozeSwordLuck (value => 0);

 setNiftraSwordIsShown (current => false);
 setNiftraSwordActive (current => false);
 setNiftraSwordAtk (value => 0);
 setNiftraSwordDef (value => 0);
 setNiftraSwordLuck (value => 0);

 setMercurialSwordIsShown (current => false);
 setMercurialSwordActive (current => false);
 setMercurialSwordAtk (value => 0);
 setMercurialSwordDef (value => 0);
 setMercurialSwordLuck (value => 0);

 setLeafsungWoodenSwordIsShown (current => false);
 setLeafsungWoodenSwordActive (current => false);
 setLeafsungWoodenSwordAtk (value => 0);
 setLeafsungWoodenSwordDef (value => 0);
 setLeafsungWoodenSwordLuck (value => 0);

 setGlassScimitarIsShown (current => false);
 setGlassScimitarActive (current => false);
 setGlassScimitarAtk (value => 0);
 setGlassScimitarDef (value => 0);
 setGlassScimitarLuck (value => 0);

 setFusionSwordIsShown (current => false);
 setFusionSwordActive (current => false);
 setFusionSwordAtk (value => 0);
 setFusionSwordDef (value => 0);
 setFusionSwordLuck (value => 0);

 setFlowerSlingshotIsShown (current => false);
 setFlowerSlingshotActive (current => false);
 setFlowerSlingshotAtk (value => 0);
 setFlowerSlingshotDef (value => 0);
 setFlowerSlingshotLuck (value => 0);

 setDragonTailSwordIsShown (current => false);
 setDragonTailSwordActive (current => false);
 setDragonTailSwordAtk (value => 0);
 setDragonTailSwordDef (value => 0);
 setDragonTailSwordLuck (value => 0);

 setDragonClawHookIsShown (current => false);
 setDragonClawHookActive (current => false);
 setDragonClawHookAtk (value => 0);
 setDragonClawHookDef (value => 0);
 setDragonClawHookLuck (value => 0);

 setDawnSwordIsShown (current => false);
 setDawnSwordActive (current => false);
 setDawnSwordAtk (value => 0);
 setDawnSwordDef (value => 0);
 setDawnSwordLuck (value => 0);

 setDarkForestSwordOldIsShown (current => false);
 setDarkForestSwordOldActive (current => false);
 setDarkForestSwordOldAtk (value => 0);
 setDarkForestSwordOldDef (value => 0);
 setDarkForestSwordOldLuck (value => 0);

 setDarkForestSwordIsShown (current => false);
 setDarkForestSwordActive (current => false);
 setDarkForestSwordAtk (value => 0);
 setDarkForestSwordDef (value => 0);
 setDarkForestSwordLuck (value => 0);
  };

  const handleGlassScimitarClick = event => {
  setGlassScimitarIsShown (current => !GlassScimitarIsShown);
  setGlassScimitarActive (current => !GlassScimitarActive);
  setGlassScimitarAtk (value => 9);
  setGlassScimitarDef (value => 0);
  setGlassScimitarLuck (value => 4);

  setWoodSwordIsShown (current => false);
  setWoodSwordActive (current => false);
  setWoodSwordAtk (value => 0);
  setWoodSwordDef (value => 0);
  setWoodSwordLuck (value => 0);
  
 setWoodSpearIsShown (current => false);
 setWoodSpearActive (current => false);
 setWoodSpearAtk (value => 0);
 setWoodSpearDef (value => 0);
 setWoodSpearLuck (value => 0);

 setSteelSwordIsShown (current => false);
 setSteelSwordActive (current => false);
 setSteelSwordAtk (value => 0);
 setSteelSwordDef (value => 0);
 setSteelSwordLuck (value => 0);

 setSteelMaceIsShown (current => false);
 setSteelMaceActive (current => false);
 setSteelMaceAtk (value => 0);
 setSteelMaceDef (value => 0);
 setSteelMaceLuck (value => 0);

 setSteelDaggerIsShown (current => false);
 setSteelDaggerActive (current => false);
 setSteelDaggerAtk (value => 0);
 setSteelDaggerDef (value => 0);
 setSteelDaggerLuck (value => 0);

 setSpellfireSwordIsShown (current => false);
 setSpellfireSwordActive (current => false);
 setSpellfireSwordAtk (value => 0);
 setSpellfireSwordDef (value => 0);
 setSpellfireSwordLuck (value => 0);

 setRainaSwordIsShown (current => false);
 setRainaSwordActive (current => false);
 setRainaSwordAtk (value => 0);
 setRainaSwordDef (value => 0);
 setRainaSwordLuck (value => 0);

 setOozeSwordIsShown (current => false);
 setOozeSwordActive (current => false);
 setOozeSwordAtk (value => 0);
 setOozeSwordDef (value => 0);
 setOozeSwordLuck (value => 0);

 setNiftraSwordIsShown (current => false);
 setNiftraSwordActive (current => false);
 setNiftraSwordAtk (value => 0);
 setNiftraSwordDef (value => 0);
 setNiftraSwordLuck (value => 0);

 setMercurialSwordIsShown (current => false);
 setMercurialSwordActive (current => false);
 setMercurialSwordAtk (value => 0);
 setMercurialSwordDef (value => 0);
 setMercurialSwordLuck (value => 0);

 setLeafsungWoodenSwordIsShown (current => false);
 setLeafsungWoodenSwordActive (current => false);
 setLeafsungWoodenSwordAtk (value => 0);
 setLeafsungWoodenSwordDef (value => 0);
 setLeafsungWoodenSwordLuck (value => 0);

 setKingMaiSwordIsShown (current => false);
 setKingMaiSwordActive (current => false);
 setKingMaiSwordAtk (value => 0);
 setKingMaiSwordDef (value => 0);
 setKingMaiSwordLuck (value => 0);

 setFusionSwordIsShown (current => false);
 setFusionSwordActive (current => false);
 setFusionSwordAtk (value => 0);
 setFusionSwordDef (value => 0);
 setFusionSwordLuck (value => 0);

 setFlowerSlingshotIsShown (current => false);
 setFlowerSlingshotActive (current => false);
 setFlowerSlingshotAtk (value => 0);
 setFlowerSlingshotDef (value => 0);
 setFlowerSlingshotLuck (value => 0);

 setDragonTailSwordIsShown (current => false);
 setDragonTailSwordActive (current => false);
 setDragonTailSwordAtk (value => 0);
 setDragonTailSwordDef (value => 0);
 setDragonTailSwordLuck (value => 0);

 setDragonClawHookIsShown (current => false);
 setDragonClawHookActive (current => false);
 setDragonClawHookAtk (value => 0);
 setDragonClawHookDef (value => 0);
 setDragonClawHookLuck (value => 0);

 setDawnSwordIsShown (current => false);
 setDawnSwordActive (current => false);
 setDawnSwordAtk (value => 0);
 setDawnSwordDef (value => 0);
 setDawnSwordLuck (value => 0);

 setDarkForestSwordOldIsShown (current => false);
 setDarkForestSwordOldActive (current => false);
 setDarkForestSwordOldAtk (value => 0);
 setDarkForestSwordOldDef (value => 0);
 setDarkForestSwordOldLuck (value => 0);

 setDarkForestSwordIsShown (current => false);
 setDarkForestSwordActive (current => false);
 setDarkForestSwordAtk (value => 0);
 setDarkForestSwordDef (value => 0);
 setDarkForestSwordLuck (value => 0);
  };

  const handleFusionSwordClick = event => {
  setFusionSwordIsShown (current => !FusionSwordIsShown);
  setFusionSwordActive (current => !FusionSwordActive);
  setFusionSwordAtk (value => 25);
  setFusionSwordDef (value => 0);
  setFusionSwordLuck (value => 0);

  setWoodSwordIsShown (current => false);
  setWoodSwordActive (current => false);
  setWoodSwordAtk (value => 0);
  setWoodSwordDef (value => 0);
  setWoodSwordLuck (value => 0);
  
 setWoodSpearIsShown (current => false);
 setWoodSpearActive (current => false);
 setWoodSpearAtk (value => 0);
 setWoodSpearDef (value => 0);
 setWoodSpearLuck (value => 0);

 setSteelSwordIsShown (current => false);
 setSteelSwordActive (current => false);
 setSteelSwordAtk (value => 0);
 setSteelSwordDef (value => 0);
 setSteelSwordLuck (value => 0);

 setSteelMaceIsShown (current => false);
 setSteelMaceActive (current => false);
 setSteelMaceAtk (value => 0);
 setSteelMaceDef (value => 0);
 setSteelMaceLuck (value => 0);

 setSteelDaggerIsShown (current => false);
 setSteelDaggerActive (current => false);
 setSteelDaggerAtk (value => 0);
 setSteelDaggerDef (value => 0);
 setSteelDaggerLuck (value => 0);

 setSpellfireSwordIsShown (current => false);
 setSpellfireSwordActive (current => false);
 setSpellfireSwordAtk (value => 0);
 setSpellfireSwordDef (value => 0);
 setSpellfireSwordLuck (value => 0);

 setRainaSwordIsShown (current => false);
 setRainaSwordActive (current => false);
 setRainaSwordAtk (value => 0);
 setRainaSwordDef (value => 0);
 setRainaSwordLuck (value => 0);

 setOozeSwordIsShown (current => false);
 setOozeSwordActive (current => false);
 setOozeSwordAtk (value => 0);
 setOozeSwordDef (value => 0);
 setOozeSwordLuck (value => 0);

 setNiftraSwordIsShown (current => false);
 setNiftraSwordActive (current => false);
 setNiftraSwordAtk (value => 0);
 setNiftraSwordDef (value => 0);
 setNiftraSwordLuck (value => 0);

 setMercurialSwordIsShown (current => false);
 setMercurialSwordActive (current => false);
 setMercurialSwordAtk (value => 0);
 setMercurialSwordDef (value => 0);
 setMercurialSwordLuck (value => 0);

 setLeafsungWoodenSwordIsShown (current => false);
 setLeafsungWoodenSwordActive (current => false);
 setLeafsungWoodenSwordAtk (value => 0);
 setLeafsungWoodenSwordDef (value => 0);
 setLeafsungWoodenSwordLuck (value => 0);

 setKingMaiSwordIsShown (current => false);
 setKingMaiSwordActive (current => false);
 setKingMaiSwordAtk (value => 0);
 setKingMaiSwordDef (value => 0);
 setKingMaiSwordLuck (value => 0);

 setGlassScimitarIsShown (current => false);
 setGlassScimitarActive (current => false);
 setGlassScimitarAtk (value => 0);
 setGlassScimitarDef (value => 0);
 setGlassScimitarLuck (value => 0);

 setFlowerSlingshotIsShown (current => false);
 setFlowerSlingshotActive (current => false);
 setFlowerSlingshotAtk (value => 0);
 setFlowerSlingshotDef (value => 0);
 setFlowerSlingshotLuck (value => 0);

 setDragonTailSwordIsShown (current => false);
 setDragonTailSwordActive (current => false);
 setDragonTailSwordAtk (value => 0);
 setDragonTailSwordDef (value => 0);
 setDragonTailSwordLuck (value => 0);

 setDragonClawHookIsShown (current => false);
 setDragonClawHookActive (current => false);
 setDragonClawHookAtk (value => 0);
 setDragonClawHookDef (value => 0);
 setDragonClawHookLuck (value => 0);

 setDawnSwordIsShown (current => false);
 setDawnSwordActive (current => false);
 setDawnSwordAtk (value => 0);
 setDawnSwordDef (value => 0);
 setDawnSwordLuck (value => 0);

 setDarkForestSwordOldIsShown (current => false);
 setDarkForestSwordOldActive (current => false);
 setDarkForestSwordOldAtk (value => 0);
 setDarkForestSwordOldDef (value => 0);
 setDarkForestSwordOldLuck (value => 0);

 setDarkForestSwordIsShown (current => false);
 setDarkForestSwordActive (current => false);
 setDarkForestSwordAtk (value => 0);
 setDarkForestSwordDef (value => 0);
 setDarkForestSwordLuck (value => 0);
  };

  const handleFlowerSlingshotClick = event => {
  setFlowerSlingshotIsShown (current => !FlowerSlingshotIsShown);
  setFlowerSlingshotActive (current => !FlowerSlingshotActive);
  setFlowerSlingshotAtk (value => 17);
  setFlowerSlingshotDef (value => 0);
  setFlowerSlingshotLuck (value => 8);

  setWoodSwordIsShown (current => false);
  setWoodSwordActive (current => false);
  setWoodSwordAtk (value => 0);
  setWoodSwordDef (value => 0);
  setWoodSwordLuck (value => 0);
  
 setWoodSpearIsShown (current => false);
 setWoodSpearActive (current => false);
 setWoodSpearAtk (value => 0);
 setWoodSpearDef (value => 0);
 setWoodSpearLuck (value => 0);

 setSteelSwordIsShown (current => false);
 setSteelSwordActive (current => false);
 setSteelSwordAtk (value => 0);
 setSteelSwordDef (value => 0);
 setSteelSwordLuck (value => 0);

 setSteelMaceIsShown (current => false);
 setSteelMaceActive (current => false);
 setSteelMaceAtk (value => 0);
 setSteelMaceDef (value => 0);
 setSteelMaceLuck (value => 0);

 setSteelDaggerIsShown (current => false);
 setSteelDaggerActive (current => false);
 setSteelDaggerAtk (value => 0);
 setSteelDaggerDef (value => 0);
 setSteelDaggerLuck (value => 0);

 setSpellfireSwordIsShown (current => false);
 setSpellfireSwordActive (current => false);
 setSpellfireSwordAtk (value => 0);
 setSpellfireSwordDef (value => 0);
 setSpellfireSwordLuck (value => 0);

 setRainaSwordIsShown (current => false);
 setRainaSwordActive (current => false);
 setRainaSwordAtk (value => 0);
 setRainaSwordDef (value => 0);
 setRainaSwordLuck (value => 0);

 setOozeSwordIsShown (current => false);
 setOozeSwordActive (current => false);
 setOozeSwordAtk (value => 0);
 setOozeSwordDef (value => 0);
 setOozeSwordLuck (value => 0);

 setNiftraSwordIsShown (current => false);
 setNiftraSwordActive (current => false);
 setNiftraSwordAtk (value => 0);
 setNiftraSwordDef (value => 0);
 setNiftraSwordLuck (value => 0);

 setMercurialSwordIsShown (current => false);
 setMercurialSwordActive (current => false);
 setMercurialSwordAtk (value => 0);
 setMercurialSwordDef (value => 0);
 setMercurialSwordLuck (value => 0);

 setLeafsungWoodenSwordIsShown (current => false);
 setLeafsungWoodenSwordActive (current => false);
 setLeafsungWoodenSwordAtk (value => 0);
 setLeafsungWoodenSwordDef (value => 0);
 setLeafsungWoodenSwordLuck (value => 0);

 setKingMaiSwordIsShown (current => false);
 setKingMaiSwordActive (current => false);
 setKingMaiSwordAtk (value => 0);
 setKingMaiSwordDef (value => 0);
 setKingMaiSwordLuck (value => 0);

 setGlassScimitarIsShown (current => false);
 setGlassScimitarActive (current => false);
 setGlassScimitarAtk (value => 0);
 setGlassScimitarDef (value => 0);
 setGlassScimitarLuck (value => 0);

 setFusionSwordIsShown (current => false);
 setFusionSwordActive (current => false);
 setFusionSwordAtk (value => 0);
 setFusionSwordDef (value => 0);
 setFusionSwordLuck (value => 0);

 setDragonTailSwordIsShown (current => false);
 setDragonTailSwordActive (current => false);
 setDragonTailSwordAtk (value => 0);
 setDragonTailSwordDef (value => 0);
 setDragonTailSwordLuck (value => 0);

 setDragonClawHookIsShown (current => false);
 setDragonClawHookActive (current => false);
 setDragonClawHookAtk (value => 0);
 setDragonClawHookDef (value => 0);
 setDragonClawHookLuck (value => 0);

 setDawnSwordIsShown (current => false);
 setDawnSwordActive (current => false);
 setDawnSwordAtk (value => 0);
 setDawnSwordDef (value => 0);
 setDawnSwordLuck (value => 0);

 setDarkForestSwordOldIsShown (current => false);
 setDarkForestSwordOldActive (current => false);
 setDarkForestSwordOldAtk (value => 0);
 setDarkForestSwordOldDef (value => 0);
 setDarkForestSwordOldLuck (value => 0);

 setDarkForestSwordIsShown (current => false);
 setDarkForestSwordActive (current => false);
 setDarkForestSwordAtk (value => 0);
 setDarkForestSwordDef (value => 0);
 setDarkForestSwordLuck (value => 0);
  };

  const handleDragonTailSwordClick = event => {
  setDragonTailSwordIsShown (current => !DragonTailSwordIsShown);
  setDragonTailSwordActive (current => !DragonTailSwordActive);
  setDragonTailSwordAtk (value => 10);
  setDragonTailSwordDef (value => 4);
  setDragonTailSwordLuck (value => 4);

  setWoodSwordIsShown (current => false);
  setWoodSwordActive (current => false);
  setWoodSwordAtk (value => 0);
  setWoodSwordDef (value => 0);
  setWoodSwordLuck (value => 0);
  
 setWoodSpearIsShown (current => false);
 setWoodSpearActive (current => false);
 setWoodSpearAtk (value => 0);
 setWoodSpearDef (value => 0);
 setWoodSpearLuck (value => 0);

 setSteelSwordIsShown (current => false);
 setSteelSwordActive (current => false);
 setSteelSwordAtk (value => 0);
 setSteelSwordDef (value => 0);
 setSteelSwordLuck (value => 0);

 setSteelMaceIsShown (current => false);
 setSteelMaceActive (current => false);
 setSteelMaceAtk (value => 0);
 setSteelMaceDef (value => 0);
 setSteelMaceLuck (value => 0);

 setSteelDaggerIsShown (current => false);
 setSteelDaggerActive (current => false);
 setSteelDaggerAtk (value => 0);
 setSteelDaggerDef (value => 0);
 setSteelDaggerLuck (value => 0);

 setSpellfireSwordIsShown (current => false);
 setSpellfireSwordActive (current => false);
 setSpellfireSwordAtk (value => 0);
 setSpellfireSwordDef (value => 0);
 setSpellfireSwordLuck (value => 0);

 setRainaSwordIsShown (current => false);
 setRainaSwordActive (current => false);
 setRainaSwordAtk (value => 0);
 setRainaSwordDef (value => 0);
 setRainaSwordLuck (value => 0);

 setOozeSwordIsShown (current => false);
 setOozeSwordActive (current => false);
 setOozeSwordAtk (value => 0);
 setOozeSwordDef (value => 0);
 setOozeSwordLuck (value => 0);

 setNiftraSwordIsShown (current => false);
 setNiftraSwordActive (current => false);
 setNiftraSwordAtk (value => 0);
 setNiftraSwordDef (value => 0);
 setNiftraSwordLuck (value => 0);

 setMercurialSwordIsShown (current => false);
 setMercurialSwordActive (current => false);
 setMercurialSwordAtk (value => 0);
 setMercurialSwordDef (value => 0);
 setMercurialSwordLuck (value => 0);

 setLeafsungWoodenSwordIsShown (current => false);
 setLeafsungWoodenSwordActive (current => false);
 setLeafsungWoodenSwordAtk (value => 0);
 setLeafsungWoodenSwordDef (value => 0);
 setLeafsungWoodenSwordLuck (value => 0);

 setKingMaiSwordIsShown (current => false);
 setKingMaiSwordActive (current => false);
 setKingMaiSwordAtk (value => 0);
 setKingMaiSwordDef (value => 0);
 setKingMaiSwordLuck (value => 0);

 setGlassScimitarIsShown (current => false);
 setGlassScimitarActive (current => false);
 setGlassScimitarAtk (value => 0);
 setGlassScimitarDef (value => 0);
 setGlassScimitarLuck (value => 0);

 setFusionSwordIsShown (current => false);
 setFusionSwordActive (current => false);
 setFusionSwordAtk (value => 0);
 setFusionSwordDef (value => 0);
 setFusionSwordLuck (value => 0);

 setFlowerSlingshotIsShown (current => false);
 setFlowerSlingshotActive (current => false);
 setFlowerSlingshotAtk (value => 0);
 setFlowerSlingshotDef (value => 0);
 setFlowerSlingshotLuck (value => 0);

 setDragonClawHookIsShown (current => false);
 setDragonClawHookActive (current => false);
 setDragonClawHookAtk (value => 0);
 setDragonClawHookDef (value => 0);
 setDragonClawHookLuck (value => 0);

 setDawnSwordIsShown (current => false);
 setDawnSwordActive (current => false);
 setDawnSwordAtk (value => 0);
 setDawnSwordDef (value => 0);
 setDawnSwordLuck (value => 0);

 setDarkForestSwordOldIsShown (current => false);
 setDarkForestSwordOldActive (current => false);
 setDarkForestSwordOldAtk (value => 0);
 setDarkForestSwordOldDef (value => 0);
 setDarkForestSwordOldLuck (value => 0);

 setDarkForestSwordIsShown (current => false);
 setDarkForestSwordActive (current => false);
 setDarkForestSwordAtk (value => 0);
 setDarkForestSwordDef (value => 0);
 setDarkForestSwordLuck (value => 0);
  };

  const handleDragonClawHookClick = event => {
  setDragonClawHookIsShown (current => !DragonClawHookIsShown);
  setDragonClawHookActive (current => !DragonClawHookActive);
  setDragonClawHookAtk (value => 14);
  setDragonClawHookDef (value => 2);
  setDragonClawHookLuck (value => 0);

  setWoodSwordIsShown (current => false);
  setWoodSwordActive (current => false);
  setWoodSwordAtk (value => 0);
  setWoodSwordDef (value => 0);
  setWoodSwordLuck (value => 0);
  
 setWoodSpearIsShown (current => false);
 setWoodSpearActive (current => false);
 setWoodSpearAtk (value => 0);
 setWoodSpearDef (value => 0);
 setWoodSpearLuck (value => 0);

 setSteelSwordIsShown (current => false);
 setSteelSwordActive (current => false);
 setSteelSwordAtk (value => 0);
 setSteelSwordDef (value => 0);
 setSteelSwordLuck (value => 0);

 setSteelMaceIsShown (current => false);
 setSteelMaceActive (current => false);
 setSteelMaceAtk (value => 0);
 setSteelMaceDef (value => 0);
 setSteelMaceLuck (value => 0);

 setSteelDaggerIsShown (current => false);
 setSteelDaggerActive (current => false);
 setSteelDaggerAtk (value => 0);
 setSteelDaggerDef (value => 0);
 setSteelDaggerLuck (value => 0);

 setSpellfireSwordIsShown (current => false);
 setSpellfireSwordActive (current => false);
 setSpellfireSwordAtk (value => 0);
 setSpellfireSwordDef (value => 0);
 setSpellfireSwordLuck (value => 0);

 setRainaSwordIsShown (current => false);
 setRainaSwordActive (current => false);
 setRainaSwordAtk (value => 0);
 setRainaSwordDef (value => 0);
 setRainaSwordLuck (value => 0);

 setOozeSwordIsShown (current => false);
 setOozeSwordActive (current => false);
 setOozeSwordAtk (value => 0);
 setOozeSwordDef (value => 0);
 setOozeSwordLuck (value => 0);

 setNiftraSwordIsShown (current => false);
 setNiftraSwordActive (current => false);
 setNiftraSwordAtk (value => 0);
 setNiftraSwordDef (value => 0);
 setNiftraSwordLuck (value => 0);

 setMercurialSwordIsShown (current => false);
 setMercurialSwordActive (current => false);
 setMercurialSwordAtk (value => 0);
 setMercurialSwordDef (value => 0);
 setMercurialSwordLuck (value => 0);

 setLeafsungWoodenSwordIsShown (current => false);
 setLeafsungWoodenSwordActive (current => false);
 setLeafsungWoodenSwordAtk (value => 0);
 setLeafsungWoodenSwordDef (value => 0);
 setLeafsungWoodenSwordLuck (value => 0);

 setKingMaiSwordIsShown (current => false);
 setKingMaiSwordActive (current => false);
 setKingMaiSwordAtk (value => 0);
 setKingMaiSwordDef (value => 0);
 setKingMaiSwordLuck (value => 0);

 setGlassScimitarIsShown (current => false);
 setGlassScimitarActive (current => false);
 setGlassScimitarAtk (value => 0);
 setGlassScimitarDef (value => 0);
 setGlassScimitarLuck (value => 0);

 setFusionSwordIsShown (current => false);
 setFusionSwordActive (current => false);
 setFusionSwordAtk (value => 0);
 setFusionSwordDef (value => 0);
 setFusionSwordLuck (value => 0);

 setFlowerSlingshotIsShown (current => false);
 setFlowerSlingshotActive (current => false);
 setFlowerSlingshotAtk (value => 0);
 setFlowerSlingshotDef (value => 0);
 setFlowerSlingshotLuck (value => 0);

 setDragonTailSwordIsShown (current => false);
 setDragonTailSwordActive (current => false);
 setDragonTailSwordAtk (value => 0);
 setDragonTailSwordDef (value => 0);
 setDragonTailSwordLuck (value => 0);

 setDawnSwordIsShown (current => false);
 setDawnSwordActive (current => false);
 setDawnSwordAtk (value => 0);
 setDawnSwordDef (value => 0);
 setDawnSwordLuck (value => 0);

 setDarkForestSwordOldIsShown (current => false);
 setDarkForestSwordOldActive (current => false);
 setDarkForestSwordOldAtk (value => 0);
 setDarkForestSwordOldDef (value => 0);
 setDarkForestSwordOldLuck (value => 0);

 setDarkForestSwordIsShown (current => false);
 setDarkForestSwordActive (current => false);
 setDarkForestSwordAtk (value => 0);
 setDarkForestSwordDef (value => 0);
 setDarkForestSwordLuck (value => 0);
  };

  const handleDawnSwordClick = event => {
  setDawnSwordIsShown (current => !DawnSwordIsShown);
  setDawnSwordActive (current => !DawnSwordActive);
  setDawnSwordAtk (value => 16);
  setDawnSwordDef (value => 0);
  setDawnSwordLuck (value => 2);

  setWoodSwordIsShown (current => false);
  setWoodSwordActive (current => false);
  setWoodSwordAtk (value => 0);
  setWoodSwordDef (value => 0);
  setWoodSwordLuck (value => 0);
  
 setWoodSpearIsShown (current => false);
 setWoodSpearActive (current => false);
 setWoodSpearAtk (value => 0);
 setWoodSpearDef (value => 0);
 setWoodSpearLuck (value => 0);

 setSteelSwordIsShown (current => false);
 setSteelSwordActive (current => false);
 setSteelSwordAtk (value => 0);
 setSteelSwordDef (value => 0);
 setSteelSwordLuck (value => 0);

 setSteelMaceIsShown (current => false);
 setSteelMaceActive (current => false);
 setSteelMaceAtk (value => 0);
 setSteelMaceDef (value => 0);
 setSteelMaceLuck (value => 0);

 setSteelDaggerIsShown (current => false);
 setSteelDaggerActive (current => false);
 setSteelDaggerAtk (value => 0);
 setSteelDaggerDef (value => 0);
 setSteelDaggerLuck (value => 0);

 setSpellfireSwordIsShown (current => false);
 setSpellfireSwordActive (current => false);
 setSpellfireSwordAtk (value => 0);
 setSpellfireSwordDef (value => 0);
 setSpellfireSwordLuck (value => 0);

 setRainaSwordIsShown (current => false);
 setRainaSwordActive (current => false);
 setRainaSwordAtk (value => 0);
 setRainaSwordDef (value => 0);
 setRainaSwordLuck (value => 0);

 setOozeSwordIsShown (current => false);
 setOozeSwordActive (current => false);
 setOozeSwordAtk (value => 0);
 setOozeSwordDef (value => 0);
 setOozeSwordLuck (value => 0);

 setNiftraSwordIsShown (current => false);
 setNiftraSwordActive (current => false);
 setNiftraSwordAtk (value => 0);
 setNiftraSwordDef (value => 0);
 setNiftraSwordLuck (value => 0);

 setMercurialSwordIsShown (current => false);
 setMercurialSwordActive (current => false);
 setMercurialSwordAtk (value => 0);
 setMercurialSwordDef (value => 0);
 setMercurialSwordLuck (value => 0);

 setLeafsungWoodenSwordIsShown (current => false);
 setLeafsungWoodenSwordActive (current => false);
 setLeafsungWoodenSwordAtk (value => 0);
 setLeafsungWoodenSwordDef (value => 0);
 setLeafsungWoodenSwordLuck (value => 0);

 setKingMaiSwordIsShown (current => false);
 setKingMaiSwordActive (current => false);
 setKingMaiSwordAtk (value => 0);
 setKingMaiSwordDef (value => 0);
 setKingMaiSwordLuck (value => 0);

 setGlassScimitarIsShown (current => false);
 setGlassScimitarActive (current => false);
 setGlassScimitarAtk (value => 0);
 setGlassScimitarDef (value => 0);
 setGlassScimitarLuck (value => 0);

 setFusionSwordIsShown (current => false);
 setFusionSwordActive (current => false);
 setFusionSwordAtk (value => 0);
 setFusionSwordDef (value => 0);
 setFusionSwordLuck (value => 0);

 setFlowerSlingshotIsShown (current => false);
 setFlowerSlingshotActive (current => false);
 setFlowerSlingshotAtk (value => 0);
 setFlowerSlingshotDef (value => 0);
 setFlowerSlingshotLuck (value => 0);

 setDragonTailSwordIsShown (current => false);
 setDragonTailSwordActive (current => false);
 setDragonTailSwordAtk (value => 0);
 setDragonTailSwordDef (value => 0);
 setDragonTailSwordLuck (value => 0);

 setDragonClawHookIsShown (current => false);
 setDragonClawHookActive (current => false);
 setDragonClawHookAtk (value => 0);
 setDragonClawHookDef (value => 0);
 setDragonClawHookLuck (value => 0);

 setDarkForestSwordOldIsShown (current => false);
 setDarkForestSwordOldActive (current => false);
 setDarkForestSwordOldAtk (value => 0);
 setDarkForestSwordOldDef (value => 0);
 setDarkForestSwordOldLuck (value => 0);

 setDarkForestSwordIsShown (current => false);
 setDarkForestSwordActive (current => false);
 setDarkForestSwordAtk (value => 0);
 setDarkForestSwordDef (value => 0);
 setDarkForestSwordLuck (value => 0);
  };

  const handleDarkForestSwordOldClick = event => {
  setDarkForestSwordOldIsShown (current => !DarkForestSwordOldIsShown);
  setDarkForestSwordOldActive (current => !DarkForestSwordOldActive);
  setDarkForestSwordOldAtk (value => 12);
  setDarkForestSwordOldDef (value => 0);
  setDarkForestSwordOldLuck (value => 12);

  setWoodSwordIsShown (current => false);
  setWoodSwordActive (current => false);
  setWoodSwordAtk (value => 0);
  setWoodSwordDef (value => 0);
  setWoodSwordLuck (value => 0);
  
 setWoodSpearIsShown (current => false);
 setWoodSpearActive (current => false);
 setWoodSpearAtk (value => 0);
 setWoodSpearDef (value => 0);
 setWoodSpearLuck (value => 0);

 setSteelSwordIsShown (current => false);
 setSteelSwordActive (current => false);
 setSteelSwordAtk (value => 0);
 setSteelSwordDef (value => 0);
 setSteelSwordLuck (value => 0);

 setSteelMaceIsShown (current => false);
 setSteelMaceActive (current => false);
 setSteelMaceAtk (value => 0);
 setSteelMaceDef (value => 0);
 setSteelMaceLuck (value => 0);

 setSteelDaggerIsShown (current => false);
 setSteelDaggerActive (current => false);
 setSteelDaggerAtk (value => 0);
 setSteelDaggerDef (value => 0);
 setSteelDaggerLuck (value => 0);

 setSpellfireSwordIsShown (current => false);
 setSpellfireSwordActive (current => false);
 setSpellfireSwordAtk (value => 0);
 setSpellfireSwordDef (value => 0);
 setSpellfireSwordLuck (value => 0);

 setRainaSwordIsShown (current => false);
 setRainaSwordActive (current => false);
 setRainaSwordAtk (value => 0);
 setRainaSwordDef (value => 0);
 setRainaSwordLuck (value => 0);

 setOozeSwordIsShown (current => false);
 setOozeSwordActive (current => false);
 setOozeSwordAtk (value => 0);
 setOozeSwordDef (value => 0);
 setOozeSwordLuck (value => 0);

 setNiftraSwordIsShown (current => false);
 setNiftraSwordActive (current => false);
 setNiftraSwordAtk (value => 0);
 setNiftraSwordDef (value => 0);
 setNiftraSwordLuck (value => 0);

 setMercurialSwordIsShown (current => false);
 setMercurialSwordActive (current => false);
 setMercurialSwordAtk (value => 0);
 setMercurialSwordDef (value => 0);
 setMercurialSwordLuck (value => 0);

 setLeafsungWoodenSwordIsShown (current => false);
 setLeafsungWoodenSwordActive (current => false);
 setLeafsungWoodenSwordAtk (value => 0);
 setLeafsungWoodenSwordDef (value => 0);
 setLeafsungWoodenSwordLuck (value => 0);

 setKingMaiSwordIsShown (current => false);
 setKingMaiSwordActive (current => false);
 setKingMaiSwordAtk (value => 0);
 setKingMaiSwordDef (value => 0);
 setKingMaiSwordLuck (value => 0);

 setGlassScimitarIsShown (current => false);
 setGlassScimitarActive (current => false);
 setGlassScimitarAtk (value => 0);
 setGlassScimitarDef (value => 0);
 setGlassScimitarLuck (value => 0);

 setFusionSwordIsShown (current => false);
 setFusionSwordActive (current => false);
 setFusionSwordAtk (value => 0);
 setFusionSwordDef (value => 0);
 setFusionSwordLuck (value => 0);

 setFlowerSlingshotIsShown (current => false);
 setFlowerSlingshotActive (current => false);
 setFlowerSlingshotAtk (value => 0);
 setFlowerSlingshotDef (value => 0);
 setFlowerSlingshotLuck (value => 0);

 setDragonTailSwordIsShown (current => false);
 setDragonTailSwordActive (current => false);
 setDragonTailSwordAtk (value => 0);
 setDragonTailSwordDef (value => 0);
 setDragonTailSwordLuck (value => 0);

 setDragonClawHookIsShown (current => false);
 setDragonClawHookActive (current => false);
 setDragonClawHookAtk (value => 0);
 setDragonClawHookDef (value => 0);
 setDragonClawHookLuck (value => 0);

 setDawnSwordIsShown (current => false);
 setDawnSwordActive (current => false);
 setDawnSwordAtk (value => 0);
 setDawnSwordDef (value => 0);
 setDawnSwordLuck (value => 0);

 setDarkForestSwordIsShown (current => false);
 setDarkForestSwordActive (current => false);
 setDarkForestSwordAtk (value => 0);
 setDarkForestSwordDef (value => 0);
 setDarkForestSwordLuck (value => 0);
  };

  const handleDarkForestSwordClick = event => {
  setDarkForestSwordIsShown (current => !DarkForestSwordIsShown);
  setDarkForestSwordActive (current => !DarkForestSwordActive);
  setDarkForestSwordAtk (value => 15);
  setDarkForestSwordDef (value => 0);
  setDarkForestSwordLuck (value => 2);

  setWoodSwordIsShown (current => false);
  setWoodSwordActive (current => false);
  setWoodSwordAtk (value => 0);
  setWoodSwordDef (value => 0);
  setWoodSwordLuck (value => 0);
  
 setWoodSpearIsShown (current => false);
 setWoodSpearActive (current => false);
 setWoodSpearAtk (value => 0);
 setWoodSpearDef (value => 0);
 setWoodSpearLuck (value => 0);

 setSteelSwordIsShown (current => false);
 setSteelSwordActive (current => false);
 setSteelSwordAtk (value => 0);
 setSteelSwordDef (value => 0);
 setSteelSwordLuck (value => 0);

 setSteelMaceIsShown (current => false);
 setSteelMaceActive (current => false);
 setSteelMaceAtk (value => 0);
 setSteelMaceDef (value => 0);
 setSteelMaceLuck (value => 0);

 setSteelDaggerIsShown (current => false);
 setSteelDaggerActive (current => false);
 setSteelDaggerAtk (value => 0);
 setSteelDaggerDef (value => 0);
 setSteelDaggerLuck (value => 0);

 setSpellfireSwordIsShown (current => false);
 setSpellfireSwordActive (current => false);
 setSpellfireSwordAtk (value => 0);
 setSpellfireSwordDef (value => 0);
 setSpellfireSwordLuck (value => 0);

 setRainaSwordIsShown (current => false);
 setRainaSwordActive (current => false);
 setRainaSwordAtk (value => 0);
 setRainaSwordDef (value => 0);
 setRainaSwordLuck (value => 0);

 setOozeSwordIsShown (current => false);
 setOozeSwordActive (current => false);
 setOozeSwordAtk (value => 0);
 setOozeSwordDef (value => 0);
 setOozeSwordLuck (value => 0);

 setNiftraSwordIsShown (current => false);
 setNiftraSwordActive (current => false);
 setNiftraSwordAtk (value => 0);
 setNiftraSwordDef (value => 0);
 setNiftraSwordLuck (value => 0);

 setMercurialSwordIsShown (current => false);
 setMercurialSwordActive (current => false);
 setMercurialSwordAtk (value => 0);
 setMercurialSwordDef (value => 0);
 setMercurialSwordLuck (value => 0);

 setLeafsungWoodenSwordIsShown (current => false);
 setLeafsungWoodenSwordActive (current => false);
 setLeafsungWoodenSwordAtk (value => 0);
 setLeafsungWoodenSwordDef (value => 0);
 setLeafsungWoodenSwordLuck (value => 0);

 setKingMaiSwordIsShown (current => false);
 setKingMaiSwordActive (current => false);
 setKingMaiSwordAtk (value => 0);
 setKingMaiSwordDef (value => 0);
 setKingMaiSwordLuck (value => 0);

 setGlassScimitarIsShown (current => false);
 setGlassScimitarActive (current => false);
 setGlassScimitarAtk (value => 0);
 setGlassScimitarDef (value => 0);
 setGlassScimitarLuck (value => 0);

 setFusionSwordIsShown (current => false);
 setFusionSwordActive (current => false);
 setFusionSwordAtk (value => 0);
 setFusionSwordDef (value => 0);
 setFusionSwordLuck (value => 0);

 setFlowerSlingshotIsShown (current => false);
 setFlowerSlingshotActive (current => false);
 setFlowerSlingshotAtk (value => 0);
 setFlowerSlingshotDef (value => 0);
 setFlowerSlingshotLuck (value => 0);

 setDragonTailSwordIsShown (current => false);
 setDragonTailSwordActive (current => false);
 setDragonTailSwordAtk (value => 0);
 setDragonTailSwordDef (value => 0);
 setDragonTailSwordLuck (value => 0);

 setDragonClawHookIsShown (current => false);
 setDragonClawHookActive (current => false);
 setDragonClawHookAtk (value => 0);
 setDragonClawHookDef (value => 0);
 setDragonClawHookLuck (value => 0);

 setDawnSwordIsShown (current => false);
 setDawnSwordActive (current => false);
 setDawnSwordAtk (value => 0);
 setDawnSwordDef (value => 0);
 setDawnSwordLuck (value => 0);

 setDarkForestSwordOldIsShown (current => false);
 setDarkForestSwordOldActive (current => false);
 setDarkForestSwordOldAtk (value => 0);
 setDarkForestSwordOldDef (value => 0);
 setDarkForestSwordOldLuck (value => 0);
  };

const handleWoodSwordNoClick = event => {
  setWoodSwordIsShown (current => !WoodSwordIsShown);
  setWoodSwordActive (current => !WoodSwordActive);
  setWoodSwordAtk (value => 0);
  setWoodSwordDef (value => 0);
  setWoodSwordLuck (value => 0);
  };

  const handleWoodSpearNoClick = event => {
  setWoodSpearIsShown (current => !WoodSpearIsShown);
  setWoodSpearActive (current => !WoodSpearActive);
  setWoodSpearAtk (value => 0);
  setWoodSpearDef (value => 0);
  setWoodSpearLuck (value => 0);
  };

  const handleSteelSwordNoClick = event => {
  setSteelSwordIsShown (current => !SteelSwordIsShown);
  setSteelSwordActive (current => !SteelSwordActive);
  setSteelSwordAtk (value => 0);
  setSteelSwordDef (value => 0);
  setSteelSwordLuck (value => 0);
  };

  const handleSteelMaceNoClick = event => {
  setSteelMaceIsShown (current => !SteelMaceIsShown);
  setSteelMaceActive (current => !SteelMaceActive);
  setSteelMaceAtk (value => 0);
  setSteelMaceDef (value => 0);
  setSteelMaceLuck (value => 0);
  };

  const handleSteelDaggerNoClick = event => {
  setSteelDaggerIsShown (current => !SteelDaggerIsShown);
  setSteelDaggerActive (current => !SteelDaggerActive);
  setSteelDaggerAtk (value => 0);
  setSteelDaggerDef (value => 0);
  setSteelDaggerLuck (value => 0);
  };

  const handleSpellfireSwordNoClick = event => {
  setSpellfireSwordIsShown (current => !SpellfireSwordIsShown);
  setSpellfireSwordActive (current => !SpellfireSwordActive);
  setSpellfireSwordAtk (value => 0);
  setSpellfireSwordDef (value => 0);
  setSpellfireSwordLuck (value => 0);
  };

  const handleRainaSwordNoClick = event => {
  setRainaSwordIsShown (current => !RainaSwordIsShown);
  setRainaSwordActive (current => !RainaSwordActive);
  setRainaSwordAtk (value => 0);
  setRainaSwordDef (value => 0);
  setRainaSwordLuck (value => 0);
  };

  const handleOozeSwordNoClick = event => {
  setOozeSwordIsShown (current => !OozeSwordIsShown);
  setOozeSwordActive (current => !OozeSwordActive);
  setOozeSwordAtk (value => 0);
  setOozeSwordDef (value => 0);
  setOozeSwordLuck (value => 0);
  };

  const handleNiftraSwordNoClick = event => {
  setNiftraSwordIsShown (current => !NiftraSwordIsShown);
  setNiftraSwordActive (current => !NiftraSwordActive);
  setNiftraSwordAtk (value => 0);
  setNiftraSwordDef (value => 0);
  setNiftraSwordLuck (value => 0);
  };

  const handleMercurialSwordNoClick = event => {
  setMercurialSwordIsShown (current => !MercurialSwordIsShown);
  setMercurialSwordActive (current => !MercurialSwordActive);
  setMercurialSwordAtk (value => 0);
  setMercurialSwordDef (value => 0);
  setMercurialSwordLuck (value => 0);
  };

  const handleLeafsungWoodenSwordNoClick = event => {
  setLeafsungWoodenSwordIsShown (current => !LeafsungWoodenSwordIsShown);
  setLeafsungWoodenSwordActive (current => !LeafsungWoodenSwordActive);
  setLeafsungWoodenSwordAtk (value => 0);
  setLeafsungWoodenSwordDef (value => 0);
  setLeafsungWoodenSwordLuck (value => 0);
  };

  const handleKingMaiSwordNoClick = event => {
  setKingMaiSwordIsShown (current => !KingMaiSwordIsShown);
  setKingMaiSwordActive (current => !KingMaiSwordActive);
  setKingMaiSwordAtk (value => 0);
  setKingMaiSwordDef (value => 0);
  setKingMaiSwordLuck (value => 0);
  };

  const handleGlassScimitarNoClick = event => {
  setGlassScimitarIsShown (current => !GlassScimitarIsShown);
  setGlassScimitarActive (current => !GlassScimitarActive);
  setGlassScimitarAtk (value => 0);
  setGlassScimitarDef (value => 0);
  setGlassScimitarLuck (value => 0);
  };

  const handleFusionSwordNoClick = event => {
  setFusionSwordIsShown (current => !FusionSwordIsShown);
  setFusionSwordActive (current => !FusionSwordActive);
  setFusionSwordAtk (value => 0);
  setFusionSwordDef (value => 0);
  setFusionSwordLuck (value => 0);
  };

  const handleFlowerSlingshotNoClick = event => {
  setFlowerSlingshotIsShown (current => !FlowerSlingshotIsShown);
  setFlowerSlingshotActive (current => !FlowerSlingshotActive);
  setFlowerSlingshotAtk (value => 0);
  setFlowerSlingshotDef (value => 0);
  setFlowerSlingshotLuck (value => 0);
  };

  const handleDragonTailSwordNoClick = event => {
  setDragonTailSwordIsShown (current => !DragonTailSwordIsShown);
  setDragonTailSwordActive (current => !DragonTailSwordActive);
  setDragonTailSwordAtk (value => 0);
  setDragonTailSwordDef (value => 0);
  setDragonTailSwordLuck (value => 0);
  };

  const handleDragonClawHookNoClick = event => {
  setDragonClawHookIsShown (current => !DragonClawHookIsShown);
  setDragonClawHookActive (current => !DragonClawHookActive);
  setDragonClawHookAtk (value => 0);
  setDragonClawHookDef (value => 0);
  setDragonClawHookLuck (value => 0);
  };

  const handleDawnSwordNoClick = event => {
  setDawnSwordIsShown (current => !DawnSwordIsShown);
  setDawnSwordActive (current => !DawnSwordActive);
  setDawnSwordAtk (value => 0);
  setDawnSwordDef (value => 0);
  setDawnSwordLuck (value => 0);
  };

  const handleDarkForestSwordOldNoClick = event => {
  setDarkForestSwordOldIsShown (current => !DarkForestSwordOldIsShown);
  setDarkForestSwordOldActive (current => !DarkForestSwordOldActive);
  setDarkForestSwordOldAtk (value => 0);
  setDarkForestSwordOldDef (value => 0);
  setDarkForestSwordOldLuck (value => 0);
  };

  const handleDarkForestSwordNoClick = event => {
  setDarkForestSwordIsShown (current => !DarkForestSwordIsShown);
  setDarkForestSwordActive (current => !DarkForestSwordActive);
  setDarkForestSwordAtk (value => 0);
  setDarkForestSwordDef (value => 0);
  setDarkForestSwordLuck (value => 0);
  };

//weapon1 equations//

const totalWeapon1TopAtk = Math.max (WoodSwordAtk, WoodSpearAtk, SteelSwordAtk, SteelMaceAtk, 
SteelDaggerAtk, SpellfireSwordAtk, RainaSwordAtk, OozeSwordAtk, NiftraSwordAtk, 
MercurialSwordAtk, LeafsungWoodenSwordAtk, KingMaiSwordAtk, GlassScimitarAtk, FusionSwordAtk, 
FlowerSlingshotAtk, DragonTailSwordAtk, DragonClawHookAtk, DawnSwordAtk, DarkForestSwordOldAtk, 
DarkForestSwordAtk)

const totalWeapon1TopDef = Math.max (WoodSwordDef, WoodSpearDef, SteelSwordDef, SteelMaceDef, 
SteelDaggerDef, SpellfireSwordDef, RainaSwordDef, OozeSwordDef, NiftraSwordDef, 
MercurialSwordDef, LeafsungWoodenSwordDef, KingMaiSwordDef, GlassScimitarDef, FusionSwordDef, 
FlowerSlingshotDef, DragonTailSwordDef, DragonClawHookDef, DawnSwordDef, DarkForestSwordOldDef, 
DarkForestSwordDef)

const totalWeapon1TopLuck = Math.max (WoodSwordLuck, WoodSpearLuck, SteelSwordLuck, SteelMaceLuck, 
  SteelDaggerLuck, SpellfireSwordLuck, RainaSwordLuck, OozeSwordLuck, NiftraSwordLuck, 
  MercurialSwordLuck, LeafsungWoodenSwordLuck, KingMaiSwordLuck, GlassScimitarLuck, FusionSwordLuck, 
  FlowerSlingshotLuck, DragonTailSwordLuck, DragonClawHookLuck, DawnSwordLuck, DarkForestSwordOldLuck, 
  DarkForestSwordLuck)

//Weapon2 battle items//

const [NoWeapon2, setNoWeapon2] = useState(0)
const [NoWeapon2IsShown, setNoWeapon2IsShown] = useState(false)
const [NoWeapon2Active, setNoWeapon2Active] = useState(false)

const [WoodenGardenHornIsShown, setWoodenGardenHornIsShown] = useState(false)
const [WoodenGardenHornActive, setWoodenGardenHornActive] = useState(false)
const [WoodenGardenHornNoIsShown, setWoodenGardenHornNoIsShown] = useState(false)
const [WoodenGardenHornNoActive, setWoodenGardenHornNoActive] = useState(false)
const [WoodenGardenHornAtk, setWoodenGardenHornAtk] = useState(0)
const [WoodenGardenHornDef, setWoodenGardenHornDef] = useState(0)
const [WoodenGardenHornLuck, setWoodenGardenHornLuck] = useState(0)

const [StaffOfTheDeadIsShown, setStaffOfTheDeadIsShown] = useState(false)
const [StaffOfTheDeadActive, setStaffOfTheDeadActive] = useState(false)
const [StaffOfTheDeadNoIsShown, setStaffOfTheDeadNoIsShown] = useState(false)
const [StaffOfTheDeadNoActive, setStaffOfTheDeadNoActive] = useState(false)
const [StaffOfTheDeadAtk, setStaffOfTheDeadAtk] = useState(0)
const [StaffOfTheDeadDef, setStaffOfTheDeadDef] = useState(0)
const [StaffOfTheDeadLuck, setStaffOfTheDeadLuck] = useState(0)

const [TempestYoYoIsShown, setTempestYoYoIsShown] = useState(false)
const [TempestYoYoActive, setTempestYoYoActive] = useState(false)
const [TempestYoYoNoIsShown, setTempestYoYoNoIsShown] = useState(false)
const [TempestYoYoNoActive, setTempestYoYoNoActive] = useState(false)
const [TempestYoYoAtk, setTempestYoYoAtk] = useState(0)
const [TempestYoYoDef, setTempestYoYoDef] = useState(0)
const [TempestYoYoLuck, setTempestYoYoLuck] = useState(0)

const [SteelShieldIsShown, setSteelShieldIsShown] = useState(false)
const [SteelShieldActive, setSteelShieldActive] = useState(false)
const [SteelShieldNoIsShown, setSteelShieldNoIsShown] = useState(false)
const [SteelShieldNoActive, setSteelShieldNoActive] = useState(false)
const [SteelShieldAtk, setSteelShieldAtk] = useState(0)
const [SteelShieldDef, setSteelShieldDef] = useState(0)
const [SteelShieldLuck, setSteelShieldLuck] = useState(0)

const [SteelAxeIsShown, setSteelAxeIsShown] = useState(false)
const [SteelAxeActive, setSteelAxeActive] = useState(false)
const [SteelAxeNoIsShown, setSteelAxeNoIsShown] = useState(false)
const [SteelAxeNoActive, setSteelAxeNoActive] = useState(false)
const [SteelAxeAtk, setSteelAxeAtk] = useState(0)
const [SteelAxeDef, setSteelAxeDef] = useState(0)
const [SteelAxeLuck, setSteelAxeLuck] = useState(0)

const [HarpoonIsShown, setHarpoonIsShown] = useState(false)
const [HarpoonActive, setHarpoonActive] = useState(false)
const [HarpoonNoIsShown, setHarpoonNoIsShown] = useState(false)
const [HarpoonNoActive, setHarpoonNoActive] = useState(false)
const [HarpoonAtk, setHarpoonAtk] = useState(0)
const [HarpoonDef, setHarpoonDef] = useState(0)
const [HarpoonLuck, setHarpoonLuck] = useState(0)

const [StoneHammerIsShown, setStoneHammerIsShown] = useState(false)
const [StoneHammerActive, setStoneHammerActive] = useState(false)
const [StoneHammerNoIsShown, setStoneHammerNoIsShown] = useState(false)
const [StoneHammerNoActive, setStoneHammerNoActive] = useState(false)
const [StoneHammerAtk, setStoneHammerAtk] = useState(0)
const [StoneHammerDef, setStoneHammerDef] = useState(0)
const [StoneHammerLuck, setStoneHammerLuck] = useState(0)

const [SteelSpearIsShown, setSteelSpearIsShown] = useState(false)
const [SteelSpearActive, setSteelSpearActive] = useState(false)
const [SteelSpearNoIsShown, setSteelSpearNoIsShown] = useState(false)
const [SteelSpearNoActive, setSteelSpearNoActive] = useState(false)
const [SteelSpearAtk, setSteelSpearAtk] = useState(0)
const [SteelSpearDef, setSteelSpearDef] = useState(0)
const [SteelSpearLuck, setSteelSpearLuck] = useState(0)

const [NetIsShown, setNetIsShown] = useState(false)
const [NetActive, setNetActive] = useState(false)
const [NetNoIsShown, setNetNoIsShown] = useState(false)
const [NetNoActive, setNetNoActive] = useState(false)
const [NetAtk, setNetAtk] = useState(0)
const [NetDef, setNetDef] = useState(0)
const [NetLuck, setNetLuck] = useState(0)

const [GlassStaffIsShown, setGlassStaffIsShown] = useState(false)
const [GlassStaffActive, setGlassStaffActive] = useState(false)
const [GlassStaffNoIsShown, setGlassStaffNoIsShown] = useState(false)
const [GlassStaffNoActive, setGlassStaffNoActive] = useState(false)
const [GlassStaffAtk, setGlassStaffAtk] = useState(0)
const [GlassStaffDef, setGlassStaffDef] = useState(0)
const [GlassStaffLuck, setGlassStaffLuck] = useState(0)

const [CrossbowIsShown, setCrossbowIsShown] = useState(false)
const [CrossbowActive, setCrossbowActive] = useState(false)
const [CrossbowNoIsShown, setCrossbowNoIsShown] = useState(false)
const [CrossbowNoActive, setCrossbowNoActive] = useState(false)
const [CrossbowAtk, setCrossbowAtk] = useState(0)
const [CrossbowDef, setCrossbowDef] = useState(0)
const [CrossbowLuck, setCrossbowLuck] = useState(0)

const [WoodenBowIsShown, setWoodenBowIsShown] = useState(false)
const [WoodenBowActive, setWoodenBowActive] = useState(false)
const [WoodenBowNoIsShown, setWoodenBowNoIsShown] = useState(false)
const [WoodenBowNoActive, setWoodenBowNoActive] = useState(false)
const [WoodenBowAtk, setWoodenBowAtk] = useState(0)
const [WoodenBowDef, setWoodenBowDef] = useState(0)
const [WoodenBowLuck, setWoodenBowLuck] = useState(0)

const [WoodHammerIsShown, setWoodHammerIsShown] = useState(false)
const [WoodHammerActive, setWoodHammerActive] = useState(false)
const [WoodHammerNoIsShown, setWoodHammerNoIsShown] = useState(false)
const [WoodHammerNoActive, setWoodHammerNoActive] = useState(false)
const [WoodHammerAtk, setWoodHammerAtk] = useState(0)
const [WoodHammerDef, setWoodHammerDef] = useState(0)
const [WoodHammerLuck, setWoodHammerLuck] = useState(0)

const [VineNetIsShown, setVineNetIsShown] = useState(false)
const [VineNetActive, setVineNetActive] = useState(false)
const [VineNetNoIsShown, setVineNetNoIsShown] = useState(false)
const [VineNetNoActive, setVineNetNoActive] = useState(false)
const [VineNetAtk, setVineNetAtk] = useState(0)
const [VineNetDef, setVineNetDef] = useState(0)
const [VineNetLuck, setVineNetLuck] = useState(0)

const [OldStaffIsShown, setOldStaffIsShown] = useState(false)
const [OldStaffActive, setOldStaffActive] = useState(false)
const [OldStaffNoIsShown, setOldStaffNoIsShown] = useState(false)
const [OldStaffNoActive, setOldStaffNoActive] = useState(false)
const [OldStaffAtk, setOldStaffAtk] = useState(0)
const [OldStaffDef, setOldStaffDef] = useState(0)
const [OldStaffLuck, setOldStaffLuck] = useState(0)

const [SpiderBowIsShown, setSpiderBowIsShown] = useState(false)
const [SpiderBowActive, setSpiderBowActive] = useState(false)
const [SpiderBowNoIsShown, setSpiderBowNoIsShown] = useState(false)
const [SpiderBowNoActive, setSpiderBowNoActive] = useState(false)
const [SpiderBowAtk, setSpiderBowAtk] = useState(0)
const [SpiderBowDef, setSpiderBowDef] = useState(0)
const [SpiderBowLuck, setSpiderBowLuck] = useState(0)

const [FusionCrossbowIsShown, setFusionCrossbowIsShown] = useState(false)
const [FusionCrossbowActive, setFusionCrossbowActive] = useState(false)
const [FusionCrossbowNoIsShown, setFusionCrossbowNoIsShown] = useState(false)
const [FusionCrossbowNoActive, setFusionCrossbowNoActive] = useState(false)
const [FusionCrossbowAtk, setFusionCrossbowAtk] = useState(0)
const [FusionCrossbowDef, setFusionCrossbowDef] = useState(0)
const [FusionCrossbowLuck, setFusionCrossbowLuck] = useState(0)

const [PoePickIsShown, setPoePickIsShown] = useState(false)
const [PoePickActive, setPoePickActive] = useState(false)
const [PoePickNoIsShown, setPoePickNoIsShown] = useState(false)
const [PoePickNoActive, setPoePickNoActive] = useState(false)
const [PoePickAtk, setPoePickAtk] = useState(0)
const [PoePickDef, setPoePickDef] = useState(0)
const [PoePickLuck, setPoePickLuck] = useState(0)

const [MountainMace, setMountainMace] = useState(0)
const [MountainMaceIsShown, setMountainMaceIsShown] = useState(false)
const [MountainMaceActive, setMountainMaceActive] = useState(false)
const [MountainMaceAtk, setMountainMaceAtk] = useState(0)
const [MountainMaceDef, setMountainMaceDef] = useState(0)
const [MountainMaceLuck, setMountainMaceLuck] = useState(0)

const [NivaliBowIsShown, setNivaliBowIsShown] = useState(false)
const [NivaliBowActive, setNivaliBowActive] = useState(false)
const [NivaliBowNoIsShown, setNivaliBowNoIsShown] = useState(false)
const [NivaliBowNoActive, setNivaliBowNoActive] = useState(false)
const [NivaliBowAtk, setNivaliBowAtk] = useState(0)
const [NivaliBowDef, setNivaliBowDef] = useState(0)
const [NivaliBowLuck, setNivaliBowLuck] = useState(0)

const [NivaliSlingshotIsShown, setNivaliSlingshotIsShown] = useState(false)
const [NivaliSlingshotActive, setNivaliSlingshotActive] = useState(false)
const [NivaliSlingshotNoIsShown, setNivaliSlingshotNoIsShown] = useState(false)
const [NivaliSlingshotNoActive, setNivaliSlingshotNoActive] = useState(false)
const [NivaliSlingshotAtk, setNivaliSlingshotAtk] = useState(0)
const [NivaliSlingshotDef, setNivaliSlingshotDef] = useState(0)
const [NivaliSlingshotLuck, setNivaliSlingshotLuck] = useState(0)



const handleFusionCrossbowClick = event => {
  setFusionCrossbowIsShown (current => !FusionCrossbowIsShown);
  setFusionCrossbowActive (current => !FusionCrossbowActive);
  setFusionCrossbowAtk (value => 20);
  setFusionCrossbowDef (value => 0);
  setFusionCrossbowLuck (value => 0);

  setPoePickIsShown (current => false);
  setPoePickActive (current => false);
  setPoePickAtk (value => 0);
  setPoePickDef (value => 0);
  setPoePickLuck (value => 0);
  setMountainMaceIsShown (current => false);
  setMountainMaceActive (current => false);
  setMountainMaceAtk (value => 0);
  setMountainMaceDef (value => 0);
  setMountainMaceLuck (value => 0);
  setNivaliBowIsShown (current => false);
  setNivaliBowActive (current => false);
  setNivaliBowAtk (value => 0);
  setNivaliBowDef (value => 0);
  setNivaliBowLuck (value => 0);
  setNivaliSlingshotIsShown (current => false);
  setNivaliSlingshotActive (current => false);
  setNivaliSlingshotAtk (value => 0);
  setNivaliSlingshotDef (value => 0);
  setNivaliSlingshotLuck (value => 0);
  setWoodenGardenHornIsShown (current => false);
  setWoodenGardenHornActive (current => false);
  setWoodenGardenHornAtk (value => 0);
  setWoodenGardenHornDef (value => 0);
  setWoodenGardenHornLuck (value => 0);
  setStaffOfTheDeadIsShown (current => false);
  setStaffOfTheDeadActive (current => false);
  setStaffOfTheDeadAtk (value => 0);
  setStaffOfTheDeadDef (value => 0);
  setStaffOfTheDeadLuck (value => 0);
 setTempestYoYoIsShown (current => false);
 setTempestYoYoActive (current => false);
 setTempestYoYoAtk (value => 0);
 setTempestYoYoDef (value => 0);
 setTempestYoYoLuck (value => 0);
 setSteelShieldIsShown (current => false);
 setSteelShieldActive (current => false);
 setSteelShieldAtk (value => 0);
 setSteelShieldDef (value => 0);
 setSteelShieldLuck (value => 0);
 setSteelAxeIsShown (current => false);
 setSteelAxeActive (current => false);
 setSteelAxeAtk (value => 0);
 setSteelAxeDef (value => 0);
 setSteelAxeLuck (value => 0);
 setHarpoonIsShown (current => false);
 setHarpoonActive (current => false);
 setHarpoonAtk (value => 0);
 setHarpoonDef (value => 0);
 setHarpoonLuck (value => 0);
 setStoneHammerIsShown (current => false);
 setStoneHammerActive (current => false);
 setStoneHammerAtk (value => 0);
 setStoneHammerDef (value => 0);
 setStoneHammerLuck (value => 0);
 setSteelSpearIsShown (current => false);
 setSteelSpearActive (current => false);
 setSteelSpearAtk (value => 0);
 setSteelSpearDef (value => 0);
 setSteelSpearLuck (value => 0);
 setNetIsShown (current => false);
 setNetActive (current => false);
 setNetAtk (value => 0);
 setNetDef (value => 0);
 setNetLuck (value => 0);
 setGlassStaffIsShown (current => false);
 setGlassStaffActive (current => false);
 setGlassStaffAtk (value => 0);
 setGlassStaffDef (value => 0);
 setGlassStaffLuck (value => 0);
 setCrossbowIsShown (current => false);
 setCrossbowActive (current => false);
 setCrossbowAtk (value => 0);
 setCrossbowDef (value => 0);
 setCrossbowLuck (value => 0);
 setWoodenBowIsShown (current => false);
 setWoodenBowActive (current => false);
 setWoodenBowAtk (value => 0);
 setWoodenBowDef (value => 0);
 setWoodenBowLuck (value => 0);
 setWoodHammerIsShown (current => false);
 setWoodHammerActive (current => false);
 setWoodHammerAtk (value => 0);
 setWoodHammerDef (value => 0);
 setWoodHammerLuck (value => 0);
 setVineNetIsShown (current => false);
 setVineNetActive (current => false);
 setVineNetAtk (value => 0);
 setVineNetDef (value => 0);
 setVineNetLuck (value => 0);
 setOldStaffIsShown (current => false);
 setOldStaffActive (current => false);
 setOldStaffAtk (value => 0);
 setOldStaffDef (value => 0);
 setOldStaffLuck (value => 0);
 setSpiderBowIsShown (current => false);
 setSpiderBowActive (current => false);
 setSpiderBowAtk (value => 0);
 setSpiderBowDef (value => 0);
 setSpiderBowLuck (value => 0);
  };

const handlePoePickClick = event => {
  setPoePickIsShown (current => !PoePickIsShown);
  setPoePickActive (current => !PoePickActive);
  setPoePickAtk (value => 15);
  setPoePickDef (value => 5);
  setPoePickLuck (value => 8);
  
  setFusionCrossbowIsShown (current => false);
  setFusionCrossbowActive (current => false);
  setFusionCrossbowAtk (value => 0);
  setFusionCrossbowDef (value => 0);
  setFusionCrossbowLuck (value => 0);
  setMountainMaceIsShown (current => false);
  setMountainMaceActive (current => false);
  setMountainMaceAtk (value => 0);
  setMountainMaceDef (value => 0);
  setMountainMaceLuck (value => 0);
  setNivaliBowIsShown (current => false);
  setNivaliBowActive (current => false);
  setNivaliBowAtk (value => 0);
  setNivaliBowDef (value => 0);
  setNivaliBowLuck (value => 0);
  setNivaliSlingshotIsShown (current => false);
  setNivaliSlingshotActive (current => false);
  setNivaliSlingshotAtk (value => 0);
  setNivaliSlingshotDef (value => 0);
  setNivaliSlingshotLuck (value => 0);
  setWoodenGardenHornIsShown (current => false);
  setWoodenGardenHornActive (current => false);
  setWoodenGardenHornAtk (value => 0);
  setWoodenGardenHornDef (value => 0);
  setWoodenGardenHornLuck (value => 0);
  setStaffOfTheDeadIsShown (current => false);
  setStaffOfTheDeadActive (current => false);
  setStaffOfTheDeadAtk (value => 0);
  setStaffOfTheDeadDef (value => 0);
  setStaffOfTheDeadLuck (value => 0);
 setTempestYoYoIsShown (current => false);
 setTempestYoYoActive (current => false);
 setTempestYoYoAtk (value => 0);
 setTempestYoYoDef (value => 0);
 setTempestYoYoLuck (value => 0);
 setSteelShieldIsShown (current => false);
 setSteelShieldActive (current => false);
 setSteelShieldAtk (value => 0);
 setSteelShieldDef (value => 0);
 setSteelShieldLuck (value => 0);
 setSteelAxeIsShown (current => false);
 setSteelAxeActive (current => false);
 setSteelAxeAtk (value => 0);
 setSteelAxeDef (value => 0);
 setSteelAxeLuck (value => 0);
 setHarpoonIsShown (current => false);
 setHarpoonActive (current => false);
 setHarpoonAtk (value => 0);
 setHarpoonDef (value => 0);
 setHarpoonLuck (value => 0);
 setStoneHammerIsShown (current => false);
 setStoneHammerActive (current => false);
 setStoneHammerAtk (value => 0);
 setStoneHammerDef (value => 0);
 setStoneHammerLuck (value => 0);
 setSteelSpearIsShown (current => false);
 setSteelSpearActive (current => false);
 setSteelSpearAtk (value => 0);
 setSteelSpearDef (value => 0);
 setSteelSpearLuck (value => 0);
 setNetIsShown (current => false);
 setNetActive (current => false);
 setNetAtk (value => 0);
 setNetDef (value => 0);
 setNetLuck (value => 0);
 setGlassStaffIsShown (current => false);
 setGlassStaffActive (current => false);
 setGlassStaffAtk (value => 0);
 setGlassStaffDef (value => 0);
 setGlassStaffLuck (value => 0);
 setCrossbowIsShown (current => false);
 setCrossbowActive (current => false);
 setCrossbowAtk (value => 0);
 setCrossbowDef (value => 0);
 setCrossbowLuck (value => 0);
 setWoodenBowIsShown (current => false);
 setWoodenBowActive (current => false);
 setWoodenBowAtk (value => 0);
 setWoodenBowDef (value => 0);
 setWoodenBowLuck (value => 0);
 setWoodHammerIsShown (current => false);
 setWoodHammerActive (current => false);
 setWoodHammerAtk (value => 0);
 setWoodHammerDef (value => 0);
 setWoodHammerLuck (value => 0);
 setVineNetIsShown (current => false);
 setVineNetActive (current => false);
 setVineNetAtk (value => 0);
 setVineNetDef (value => 0);
 setVineNetLuck (value => 0);
 setOldStaffIsShown (current => false);
 setOldStaffActive (current => false);
 setOldStaffAtk (value => 0);
 setOldStaffDef (value => 0);
 setOldStaffLuck (value => 0);
 setSpiderBowIsShown (current => false);
 setSpiderBowActive (current => false);
 setSpiderBowAtk (value => 0);
 setSpiderBowDef (value => 0);
 setSpiderBowLuck (value => 0);
    };

const handleFusionCrossbowNoClick = event => {
  setFusionCrossbowIsShown (current => !FusionCrossbowIsShown);
  setFusionCrossbowActive (current => !FusionCrossbowActive);
  setFusionCrossbowAtk (value => 0);
  setFusionCrossbowDef (value => 0);
  setFusionCrossbowLuck (value => 0);
  };

const handleNivaliBowClick = event => {
  setNivaliBowIsShown (current => !NivaliBowIsShown);
  setNivaliBowActive (current => !NivaliBowActive);
  setNivaliBowAtk (value => 28);
  setNivaliBowDef (value => 0);
  setNivaliBowLuck (value => 0);
  
  setFusionCrossbowIsShown (current => false);
  setFusionCrossbowActive (current => false);
  setFusionCrossbowAtk (value => 0);
  setFusionCrossbowDef (value => 0);
  setFusionCrossbowLuck (value => 0);
  setPoePickIsShown (current => false);
  setPoePickActive (current => false);
  setPoePickAtk (value => 0);
  setPoePickDef (value => 0);
  setPoePickLuck (value => 0);
  setMountainMaceIsShown (current => false);
  setMountainMaceActive (current => false);
  setMountainMaceAtk (value => 0);
  setMountainMaceDef (value => 0);
  setMountainMaceLuck (value => 0);
  setNivaliSlingshotIsShown (current => false);
  setNivaliSlingshotActive (current => false);
  setNivaliSlingshotAtk (value => 0);
  setNivaliSlingshotDef (value => 0);
  setNivaliSlingshotLuck (value => 0);
  setWoodenGardenHornIsShown (current => false);
  setWoodenGardenHornActive (current => false);
  setWoodenGardenHornAtk (value => 0);
  setWoodenGardenHornDef (value => 0);
  setWoodenGardenHornLuck (value => 0);
  setStaffOfTheDeadIsShown (current => false);
  setStaffOfTheDeadActive (current => false);
  setStaffOfTheDeadAtk (value => 0);
  setStaffOfTheDeadDef (value => 0);
  setStaffOfTheDeadLuck (value => 0);
 setTempestYoYoIsShown (current => false);
 setTempestYoYoActive (current => false);
 setTempestYoYoAtk (value => 0);
 setTempestYoYoDef (value => 0);
 setTempestYoYoLuck (value => 0);
 setSteelShieldIsShown (current => false);
 setSteelShieldActive (current => false);
 setSteelShieldAtk (value => 0);
 setSteelShieldDef (value => 0);
 setSteelShieldLuck (value => 0);
 setSteelAxeIsShown (current => false);
 setSteelAxeActive (current => false);
 setSteelAxeAtk (value => 0);
 setSteelAxeDef (value => 0);
 setSteelAxeLuck (value => 0);
 setHarpoonIsShown (current => false);
 setHarpoonActive (current => false);
 setHarpoonAtk (value => 0);
 setHarpoonDef (value => 0);
 setHarpoonLuck (value => 0);
 setStoneHammerIsShown (current => false);
 setStoneHammerActive (current => false);
 setStoneHammerAtk (value => 0);
 setStoneHammerDef (value => 0);
 setStoneHammerLuck (value => 0);
 setSteelSpearIsShown (current => false);
 setSteelSpearActive (current => false);
 setSteelSpearAtk (value => 0);
 setSteelSpearDef (value => 0);
 setSteelSpearLuck (value => 0);
 setNetIsShown (current => false);
 setNetActive (current => false);
 setNetAtk (value => 0);
 setNetDef (value => 0);
 setNetLuck (value => 0);
 setGlassStaffIsShown (current => false);
 setGlassStaffActive (current => false);
 setGlassStaffAtk (value => 0);
 setGlassStaffDef (value => 0);
 setGlassStaffLuck (value => 0);
 setCrossbowIsShown (current => false);
 setCrossbowActive (current => false);
 setCrossbowAtk (value => 0);
 setCrossbowDef (value => 0);
 setCrossbowLuck (value => 0);
 setWoodenBowIsShown (current => false);
 setWoodenBowActive (current => false);
 setWoodenBowAtk (value => 0);
 setWoodenBowDef (value => 0);
 setWoodenBowLuck (value => 0);
 setWoodHammerIsShown (current => false);
 setWoodHammerActive (current => false);
 setWoodHammerAtk (value => 0);
 setWoodHammerDef (value => 0);
 setWoodHammerLuck (value => 0);
 setVineNetIsShown (current => false);
 setVineNetActive (current => false);
 setVineNetAtk (value => 0);
 setVineNetDef (value => 0);
 setVineNetLuck (value => 0);
 setOldStaffIsShown (current => false);
 setOldStaffActive (current => false);
 setOldStaffAtk (value => 0);
 setOldStaffDef (value => 0);
 setOldStaffLuck (value => 0);
 setSpiderBowIsShown (current => false);
 setSpiderBowActive (current => false);
 setSpiderBowAtk (value => 0);
 setSpiderBowDef (value => 0);
 setSpiderBowLuck (value => 0);
  };

 
const handleNivaliSlingshotClick = event => {
  setNivaliSlingshotIsShown (current => !NivaliSlingshotIsShown);
  setNivaliSlingshotActive (current => !NivaliSlingshotActive);
  setNivaliSlingshotAtk (value => 10);
  setNivaliSlingshotDef (value => 10);
  setNivaliSlingshotLuck (value => 0);
  
  setFusionCrossbowIsShown (current => false);
  setFusionCrossbowActive (current => false);
  setFusionCrossbowAtk (value => 0);
  setFusionCrossbowDef (value => 0);
  setFusionCrossbowLuck (value => 0);
  setPoePickIsShown (current => false);
  setPoePickActive (current => false);
  setPoePickAtk (value => 0);
  setPoePickDef (value => 0);
  setPoePickLuck (value => 0);
  setMountainMaceIsShown (current => false);
  setMountainMaceActive (current => false);
  setMountainMaceAtk (value => 0);
  setMountainMaceDef (value => 0);
  setMountainMaceLuck (value => 0);
  setNivaliBowIsShown (current => false);
  setNivaliBowActive (current => false);
  setNivaliBowAtk (value => 0);
  setNivaliBowDef (value => 0);
  setNivaliBowLuck (value => 0);
  setWoodenGardenHornIsShown (current => false);
  setWoodenGardenHornActive (current => false);
  setWoodenGardenHornAtk (value => 0);
  setWoodenGardenHornDef (value => 0);
  setWoodenGardenHornLuck (value => 0);
  setStaffOfTheDeadIsShown (current => false);
  setStaffOfTheDeadActive (current => false);
  setStaffOfTheDeadAtk (value => 0);
  setStaffOfTheDeadDef (value => 0);
  setStaffOfTheDeadLuck (value => 0);
 setTempestYoYoIsShown (current => false);
 setTempestYoYoActive (current => false);
 setTempestYoYoAtk (value => 0);
 setTempestYoYoDef (value => 0);
 setTempestYoYoLuck (value => 0);
 setSteelShieldIsShown (current => false);
 setSteelShieldActive (current => false);
 setSteelShieldAtk (value => 0);
 setSteelShieldDef (value => 0);
 setSteelShieldLuck (value => 0);
 setSteelAxeIsShown (current => false);
 setSteelAxeActive (current => false);
 setSteelAxeAtk (value => 0);
 setSteelAxeDef (value => 0);
 setSteelAxeLuck (value => 0);
 setHarpoonIsShown (current => false);
 setHarpoonActive (current => false);
 setHarpoonAtk (value => 0);
 setHarpoonDef (value => 0);
 setHarpoonLuck (value => 0);
 setStoneHammerIsShown (current => false);
 setStoneHammerActive (current => false);
 setStoneHammerAtk (value => 0);
 setStoneHammerDef (value => 0);
 setStoneHammerLuck (value => 0);
 setSteelSpearIsShown (current => false);
 setSteelSpearActive (current => false);
 setSteelSpearAtk (value => 0);
 setSteelSpearDef (value => 0);
 setSteelSpearLuck (value => 0);
 setNetIsShown (current => false);
 setNetActive (current => false);
 setNetAtk (value => 0);
 setNetDef (value => 0);
 setNetLuck (value => 0);
 setGlassStaffIsShown (current => false);
 setGlassStaffActive (current => false);
 setGlassStaffAtk (value => 0);
 setGlassStaffDef (value => 0);
 setGlassStaffLuck (value => 0);
 setCrossbowIsShown (current => false);
 setCrossbowActive (current => false);
 setCrossbowAtk (value => 0);
 setCrossbowDef (value => 0);
 setCrossbowLuck (value => 0);
 setWoodenBowIsShown (current => false);
 setWoodenBowActive (current => false);
 setWoodenBowAtk (value => 0);
 setWoodenBowDef (value => 0);
 setWoodenBowLuck (value => 0);
 setWoodHammerIsShown (current => false);
 setWoodHammerActive (current => false);
 setWoodHammerAtk (value => 0);
 setWoodHammerDef (value => 0);
 setWoodHammerLuck (value => 0);
 setVineNetIsShown (current => false);
 setVineNetActive (current => false);
 setVineNetAtk (value => 0);
 setVineNetDef (value => 0);
 setVineNetLuck (value => 0);
 setOldStaffIsShown (current => false);
 setOldStaffActive (current => false);
 setOldStaffAtk (value => 0);
 setOldStaffDef (value => 0);
 setOldStaffLuck (value => 0);
 setSpiderBowIsShown (current => false);
 setSpiderBowActive (current => false);
 setSpiderBowAtk (value => 0);
 setSpiderBowDef (value => 0);
 setSpiderBowLuck (value => 0);
    };

const handleMountainMaceClick = event => {
  setMountainMaceIsShown (current => !MountainMaceIsShown);
  setMountainMaceActive (current => !MountainMaceActive);
  setMountainMaceAtk (value => 2);
  setMountainMaceDef (value => 20);
  setMountainMaceLuck (value => 2);

  
  setFusionCrossbowIsShown (current => false);
  setFusionCrossbowActive (current => false);
  setFusionCrossbowAtk (value => 0);
  setFusionCrossbowDef (value => 0);
  setFusionCrossbowLuck (value => 0);
  setPoePickIsShown (current => false);
  setPoePickActive (current => false);
  setPoePickAtk (value => 0);
  setPoePickDef (value => 0);
  setPoePickLuck (value => 0);
  setNivaliBowIsShown (current => false);
  setNivaliBowActive (current => false);
  setNivaliBowAtk (value => 0);
  setNivaliBowDef (value => 0);
  setNivaliBowLuck (value => 0);
  setNivaliSlingshotIsShown (current => false);
  setNivaliSlingshotActive (current => false);
  setNivaliSlingshotAtk (value => 0);
  setNivaliSlingshotDef (value => 0);
  setNivaliSlingshotLuck (value => 0);
  setWoodenGardenHornIsShown (current => false);
  setWoodenGardenHornActive (current => false);
  setWoodenGardenHornAtk (value => 0);
  setWoodenGardenHornDef (value => 0);
  setWoodenGardenHornLuck (value => 0);
  setStaffOfTheDeadIsShown (current => false);
  setStaffOfTheDeadActive (current => false);
  setStaffOfTheDeadAtk (value => 0);
  setStaffOfTheDeadDef (value => 0);
  setStaffOfTheDeadLuck (value => 0);
 setTempestYoYoIsShown (current => false);
 setTempestYoYoActive (current => false);
 setTempestYoYoAtk (value => 0);
 setTempestYoYoDef (value => 0);
 setTempestYoYoLuck (value => 0);
 setSteelShieldIsShown (current => false);
 setSteelShieldActive (current => false);
 setSteelShieldAtk (value => 0);
 setSteelShieldDef (value => 0);
 setSteelShieldLuck (value => 0);
 setSteelAxeIsShown (current => false);
 setSteelAxeActive (current => false);
 setSteelAxeAtk (value => 0);
 setSteelAxeDef (value => 0);
 setSteelAxeLuck (value => 0);
 setHarpoonIsShown (current => false);
 setHarpoonActive (current => false);
 setHarpoonAtk (value => 0);
 setHarpoonDef (value => 0);
 setHarpoonLuck (value => 0);
 setStoneHammerIsShown (current => false);
 setStoneHammerActive (current => false);
 setStoneHammerAtk (value => 0);
 setStoneHammerDef (value => 0);
 setStoneHammerLuck (value => 0);
 setSteelSpearIsShown (current => false);
 setSteelSpearActive (current => false);
 setSteelSpearAtk (value => 0);
 setSteelSpearDef (value => 0);
 setSteelSpearLuck (value => 0);
 setNetIsShown (current => false);
 setNetActive (current => false);
 setNetAtk (value => 0);
 setNetDef (value => 0);
 setNetLuck (value => 0);
 setGlassStaffIsShown (current => false);
 setGlassStaffActive (current => false);
 setGlassStaffAtk (value => 0);
 setGlassStaffDef (value => 0);
 setGlassStaffLuck (value => 0);
 setCrossbowIsShown (current => false);
 setCrossbowActive (current => false);
 setCrossbowAtk (value => 0);
 setCrossbowDef (value => 0);
 setCrossbowLuck (value => 0);
 setWoodenBowIsShown (current => false);
 setWoodenBowActive (current => false);
 setWoodenBowAtk (value => 0);
 setWoodenBowDef (value => 0);
 setWoodenBowLuck (value => 0);
 setWoodHammerIsShown (current => false);
 setWoodHammerActive (current => false);
 setWoodHammerAtk (value => 0);
 setWoodHammerDef (value => 0);
 setWoodHammerLuck (value => 0);
 setVineNetIsShown (current => false);
 setVineNetActive (current => false);
 setVineNetAtk (value => 0);
 setVineNetDef (value => 0);
 setVineNetLuck (value => 0);
 setOldStaffIsShown (current => false);
 setOldStaffActive (current => false);
 setOldStaffAtk (value => 0);
 setOldStaffDef (value => 0);
 setOldStaffLuck (value => 0);
 setSpiderBowIsShown (current => false);
 setSpiderBowActive (current => false);
 setSpiderBowAtk (value => 0);
 setSpiderBowDef (value => 0);
 setSpiderBowLuck (value => 0);
  };

  const handleWoodenGardenHornClick = event => {
    setFusionCrossbowIsShown (current => false);
    setFusionCrossbowActive (current => false);
    setFusionCrossbowAtk (value => 0);
    setFusionCrossbowDef (value => 0);
    setFusionCrossbowLuck (value => 0);
    setPoePickIsShown (current => false);
    setPoePickActive (current => false);
    setPoePickAtk (value => 0);
    setPoePickDef (value => 0);
    setPoePickLuck (value => 0);
    setMountainMaceIsShown (current => false);
    setMountainMaceActive (current => false);
    setMountainMaceAtk (value => 0);
    setMountainMaceDef (value => 0);
    setMountainMaceLuck (value => 0);
    setNivaliBowIsShown (current => false);
    setNivaliBowActive (current => false);
    setNivaliBowAtk (value => 0);
    setNivaliBowDef (value => 0);
    setNivaliBowLuck (value => 0);
    setNivaliSlingshotIsShown (current => false);
    setNivaliSlingshotActive (current => false);
    setNivaliSlingshotAtk (value => 0);
    setNivaliSlingshotDef (value => 0);
    setNivaliSlingshotLuck (value => 0);
    setWoodenGardenHornIsShown (current => !WoodenGardenHornIsShown);
    setWoodenGardenHornActive (current => !WoodenGardenHornActive);
    setWoodenGardenHornAtk (value => 0);
    setWoodenGardenHornDef (value => 0);
    setWoodenGardenHornLuck (value => 0);
    setStaffOfTheDeadIsShown (current => false);
    setStaffOfTheDeadActive (current => false);
    setStaffOfTheDeadAtk (value => 0);
    setStaffOfTheDeadDef (value => 0);
    setStaffOfTheDeadLuck (value => 0);
   setTempestYoYoIsShown (current => false);
   setTempestYoYoActive (current => false);
   setTempestYoYoAtk (value => 0);
   setTempestYoYoDef (value => 0);
   setTempestYoYoLuck (value => 0);
   setSteelShieldIsShown (current => false);
   setSteelShieldActive (current => false);
   setSteelShieldAtk (value => 0);
   setSteelShieldDef (value => 0);
   setSteelShieldLuck (value => 0);
   setSteelAxeIsShown (current => false);
   setSteelAxeActive (current => false);
   setSteelAxeAtk (value => 0);
   setSteelAxeDef (value => 0);
   setSteelAxeLuck (value => 0);
   setHarpoonIsShown (current => false);
   setHarpoonActive (current => false);
   setHarpoonAtk (value => 0);
   setHarpoonDef (value => 0);
   setHarpoonLuck (value => 0);
   setStoneHammerIsShown (current => false);
   setStoneHammerActive (current => false);
   setStoneHammerAtk (value => 0);
   setStoneHammerDef (value => 0);
   setStoneHammerLuck (value => 0);
   setSteelSpearIsShown (current => false);
   setSteelSpearActive (current => false);
   setSteelSpearAtk (value => 0);
   setSteelSpearDef (value => 0);
   setSteelSpearLuck (value => 0);
   setNetIsShown (current => false);
   setNetActive (current => false);
   setNetAtk (value => 0);
   setNetDef (value => 0);
   setNetLuck (value => 0);
   setGlassStaffIsShown (current => false);
   setGlassStaffActive (current => false);
   setGlassStaffAtk (value => 0);
   setGlassStaffDef (value => 0);
   setGlassStaffLuck (value => 0);
   setCrossbowIsShown (current => false);
   setCrossbowActive (current => false);
   setCrossbowAtk (value => 0);
   setCrossbowDef (value => 0);
   setCrossbowLuck (value => 0);
   setWoodenBowIsShown (current => false);
   setWoodenBowActive (current => false);
   setWoodenBowAtk (value => 0);
   setWoodenBowDef (value => 0);
   setWoodenBowLuck (value => 0);
   setWoodHammerIsShown (current => false);
   setWoodHammerActive (current => false);
   setWoodHammerAtk (value => 0);
   setWoodHammerDef (value => 0);
   setWoodHammerLuck (value => 0);
   setVineNetIsShown (current => false);
   setVineNetActive (current => false);
   setVineNetAtk (value => 0);
   setVineNetDef (value => 0);
   setVineNetLuck (value => 0);
   setOldStaffIsShown (current => false);
   setOldStaffActive (current => false);
   setOldStaffAtk (value => 0);
   setOldStaffDef (value => 0);
   setOldStaffLuck (value => 0);
   setSpiderBowIsShown (current => false);
   setSpiderBowActive (current => false);
   setSpiderBowAtk (value => 0);
   setSpiderBowDef (value => 0);
   setSpiderBowLuck (value => 0);
 }
 
 const handleStaffOfTheDeadClick = event => {
    setStaffOfTheDeadIsShown (current => !StaffOfTheDeadIsShown);
    setStaffOfTheDeadActive (current => !StaffOfTheDeadActive);
    setStaffOfTheDeadAtk (value => 0);
    setStaffOfTheDeadDef (value => 0);
    setStaffOfTheDeadLuck (value => 0);
 
    setFusionCrossbowIsShown (current => false);
    setFusionCrossbowActive (current => false);
    setFusionCrossbowAtk (value => 0);
    setFusionCrossbowDef (value => 0);
    setFusionCrossbowLuck (value => 0);
    setPoePickIsShown (current => false);
    setPoePickActive (current => false);
    setPoePickAtk (value => 0);
    setPoePickDef (value => 0);
    setPoePickLuck (value => 0);
    setMountainMaceIsShown (current => false);
    setMountainMaceActive (current => false);
    setMountainMaceAtk (value => 0);
    setMountainMaceDef (value => 0);
    setMountainMaceLuck (value => 0);
    setNivaliBowIsShown (current => false);
    setNivaliBowActive (current => false);
    setNivaliBowAtk (value => 0);
    setNivaliBowDef (value => 0);
    setNivaliBowLuck (value => 0);
    setNivaliSlingshotIsShown (current => false);
    setNivaliSlingshotActive (current => false);
    setNivaliSlingshotAtk (value => 0);
    setNivaliSlingshotDef (value => 0);
    setNivaliSlingshotLuck (value => 0);
    setWoodenGardenHornIsShown (current => !WoodenGardenHornIsShown);
    setWoodenGardenHornActive (current => !WoodenGardenHornActive);
    setWoodenGardenHornAtk (value => 0);
    setWoodenGardenHornDef (value => 0);
    setWoodenGardenHornLuck (value => 0);
   setTempestYoYoIsShown (current => false);
   setTempestYoYoActive (current => false);
   setTempestYoYoAtk (value => 0);
   setTempestYoYoDef (value => 0);
   setTempestYoYoLuck (value => 0);
   setSteelShieldIsShown (current => false);
   setSteelShieldActive (current => false);
   setSteelShieldAtk (value => 0);
   setSteelShieldDef (value => 0);
   setSteelShieldLuck (value => 0);
   setSteelAxeIsShown (current => false);
   setSteelAxeActive (current => false);
   setSteelAxeAtk (value => 0);
   setSteelAxeDef (value => 0);
   setSteelAxeLuck (value => 0);
   setHarpoonIsShown (current => false);
   setHarpoonActive (current => false);
   setHarpoonAtk (value => 0);
   setHarpoonDef (value => 0);
   setHarpoonLuck (value => 0);
   setStoneHammerIsShown (current => false);
   setStoneHammerActive (current => false);
   setStoneHammerAtk (value => 0);
   setStoneHammerDef (value => 0);
   setStoneHammerLuck (value => 0);
   setSteelSpearIsShown (current => false);
   setSteelSpearActive (current => false);
   setSteelSpearAtk (value => 0);
   setSteelSpearDef (value => 0);
   setSteelSpearLuck (value => 0);
   setNetIsShown (current => false);
   setNetActive (current => false);
   setNetAtk (value => 0);
   setNetDef (value => 0);
   setNetLuck (value => 0);
   setGlassStaffIsShown (current => false);
   setGlassStaffActive (current => false);
   setGlassStaffAtk (value => 0);
   setGlassStaffDef (value => 0);
   setGlassStaffLuck (value => 0);
   setCrossbowIsShown (current => false);
   setCrossbowActive (current => false);
   setCrossbowAtk (value => 0);
   setCrossbowDef (value => 0);
   setCrossbowLuck (value => 0);
   setWoodenBowIsShown (current => false);
   setWoodenBowActive (current => false);
   setWoodenBowAtk (value => 0);
   setWoodenBowDef (value => 0);
   setWoodenBowLuck (value => 0);
   setWoodHammerIsShown (current => false);
   setWoodHammerActive (current => false);
   setWoodHammerAtk (value => 0);
   setWoodHammerDef (value => 0);
   setWoodHammerLuck (value => 0);
   setVineNetIsShown (current => false);
   setVineNetActive (current => false);
   setVineNetAtk (value => 0);
   setVineNetDef (value => 0);
   setVineNetLuck (value => 0);
   setOldStaffIsShown (current => false);
   setOldStaffActive (current => false);
   setOldStaffAtk (value => 0);
   setOldStaffDef (value => 0);
   setOldStaffLuck (value => 0);
   setSpiderBowIsShown (current => false);
   setSpiderBowActive (current => false);
   setSpiderBowAtk (value => 0);
   setSpiderBowDef (value => 0);
   setSpiderBowLuck (value => 0);
    };
 
 const handleTempestYoYoClick = event => {
   setTempestYoYoIsShown (current => !TempestYoYoIsShown);
   setTempestYoYoActive (current => !TempestYoYoActive);
   setTempestYoYoAtk (value => 0);
   setTempestYoYoDef (value => 0);
   setTempestYoYoLuck (value => 0);
 
   setFusionCrossbowIsShown (current => false);
   setFusionCrossbowActive (current => false);
   setFusionCrossbowAtk (value => 0);
   setFusionCrossbowDef (value => 0);
   setFusionCrossbowLuck (value => 0);
   setPoePickIsShown (current => false);
   setPoePickActive (current => false);
   setPoePickAtk (value => 0);
   setPoePickDef (value => 0);
   setPoePickLuck (value => 0);
   setMountainMaceIsShown (current => false);
   setMountainMaceActive (current => false);
   setMountainMaceAtk (value => 0);
   setMountainMaceDef (value => 0);
   setMountainMaceLuck (value => 0);
   setNivaliBowIsShown (current => false);
   setNivaliBowActive (current => false);
   setNivaliBowAtk (value => 0);
   setNivaliBowDef (value => 0);
   setNivaliBowLuck (value => 0);
   setNivaliSlingshotIsShown (current => false);
   setNivaliSlingshotActive (current => false);
   setNivaliSlingshotAtk (value => 0);
   setNivaliSlingshotDef (value => 0);
   setNivaliSlingshotLuck (value => 0);
    setWoodenGardenHornIsShown (current => !WoodenGardenHornIsShown);
    setWoodenGardenHornActive (current => !WoodenGardenHornActive);
    setWoodenGardenHornAtk (value => 0);
    setWoodenGardenHornDef (value => 0);
    setWoodenGardenHornLuck (value => 0);
    setStaffOfTheDeadIsShown (current => false);
    setStaffOfTheDeadActive (current => false);
    setStaffOfTheDeadAtk (value => 0);
    setStaffOfTheDeadDef (value => 0);
    setStaffOfTheDeadLuck (value => 0);
   setSteelShieldIsShown (current => false);
   setSteelShieldActive (current => false);
   setSteelShieldAtk (value => 0);
   setSteelShieldDef (value => 0);
   setSteelShieldLuck (value => 0);
   setSteelAxeIsShown (current => false);
   setSteelAxeActive (current => false);
   setSteelAxeAtk (value => 0);
   setSteelAxeDef (value => 0);
   setSteelAxeLuck (value => 0);
   setHarpoonIsShown (current => false);
   setHarpoonActive (current => false);
   setHarpoonAtk (value => 0);
   setHarpoonDef (value => 0);
   setHarpoonLuck (value => 0);
   setStoneHammerIsShown (current => false);
   setStoneHammerActive (current => false);
   setStoneHammerAtk (value => 0);
   setStoneHammerDef (value => 0);
   setStoneHammerLuck (value => 0);
   setSteelSpearIsShown (current => false);
   setSteelSpearActive (current => false);
   setSteelSpearAtk (value => 0);
   setSteelSpearDef (value => 0);
   setSteelSpearLuck (value => 0);
   setNetIsShown (current => false);
   setNetActive (current => false);
   setNetAtk (value => 0);
   setNetDef (value => 0);
   setNetLuck (value => 0);
   setGlassStaffIsShown (current => false);
   setGlassStaffActive (current => false);
   setGlassStaffAtk (value => 0);
   setGlassStaffDef (value => 0);
   setGlassStaffLuck (value => 0);
   setCrossbowIsShown (current => false);
   setCrossbowActive (current => false);
   setCrossbowAtk (value => 0);
   setCrossbowDef (value => 0);
   setCrossbowLuck (value => 0);
   setWoodenBowIsShown (current => false);
   setWoodenBowActive (current => false);
   setWoodenBowAtk (value => 0);
   setWoodenBowDef (value => 0);
   setWoodenBowLuck (value => 0);
   setWoodHammerIsShown (current => false);
   setWoodHammerActive (current => false);
   setWoodHammerAtk (value => 0);
   setWoodHammerDef (value => 0);
   setWoodHammerLuck (value => 0);
   setVineNetIsShown (current => false);
   setVineNetActive (current => false);
   setVineNetAtk (value => 0);
   setVineNetDef (value => 0);
   setVineNetLuck (value => 0);
   setOldStaffIsShown (current => false);
   setOldStaffActive (current => false);
   setOldStaffAtk (value => 0);
   setOldStaffDef (value => 0);
   setOldStaffLuck (value => 0);
   setSpiderBowIsShown (current => false);
   setSpiderBowActive (current => false);
   setSpiderBowAtk (value => 0);
   setSpiderBowDef (value => 0);
   setSpiderBowLuck (value => 0);
   };
 
 const handleSteelShieldClick = event => {
   setSteelShieldIsShown (current => !SteelShieldIsShown);
   setSteelShieldActive (current => !SteelShieldActive);
   setSteelShieldAtk (value => 0);
   setSteelShieldDef (value => 0);
   setSteelShieldLuck (value => 0);
 
   setFusionCrossbowIsShown (current => false);
   setFusionCrossbowActive (current => false);
   setFusionCrossbowAtk (value => 0);
   setFusionCrossbowDef (value => 0);
   setFusionCrossbowLuck (value => 0);
   setPoePickIsShown (current => false);
   setPoePickActive (current => false);
   setPoePickAtk (value => 0);
   setPoePickDef (value => 0);
   setPoePickLuck (value => 0);
   setMountainMaceIsShown (current => false);
   setMountainMaceActive (current => false);
   setMountainMaceAtk (value => 0);
   setMountainMaceDef (value => 0);
   setMountainMaceLuck (value => 0);
   setNivaliBowIsShown (current => false);
   setNivaliBowActive (current => false);
   setNivaliBowAtk (value => 0);
   setNivaliBowDef (value => 0);
   setNivaliBowLuck (value => 0);
   setNivaliSlingshotIsShown (current => false);
   setNivaliSlingshotActive (current => false);
   setNivaliSlingshotAtk (value => 0);
   setNivaliSlingshotDef (value => 0);
   setNivaliSlingshotLuck (value => 0);
    setWoodenGardenHornIsShown (current => !WoodenGardenHornIsShown);
    setWoodenGardenHornActive (current => !WoodenGardenHornActive);
    setWoodenGardenHornAtk (value => 0);
    setWoodenGardenHornDef (value => 0);
    setWoodenGardenHornLuck (value => 0);
    setStaffOfTheDeadIsShown (current => false);
    setStaffOfTheDeadActive (current => false);
    setStaffOfTheDeadAtk (value => 0);
    setStaffOfTheDeadDef (value => 0);
    setStaffOfTheDeadLuck (value => 0);
   setTempestYoYoIsShown (current => false);
   setTempestYoYoActive (current => false);
   setTempestYoYoAtk (value => 0);
   setTempestYoYoDef (value => 0);
   setTempestYoYoLuck (value => 0);
   setSteelAxeIsShown (current => false);
   setSteelAxeActive (current => false);
   setSteelAxeAtk (value => 0);
   setSteelAxeDef (value => 0);
   setSteelAxeLuck (value => 0);
   setHarpoonIsShown (current => false);
   setHarpoonActive (current => false);
   setHarpoonAtk (value => 0);
   setHarpoonDef (value => 0);
   setHarpoonLuck (value => 0);
   setStoneHammerIsShown (current => false);
   setStoneHammerActive (current => false);
   setStoneHammerAtk (value => 0);
   setStoneHammerDef (value => 0);
   setStoneHammerLuck (value => 0);
   setSteelSpearIsShown (current => false);
   setSteelSpearActive (current => false);
   setSteelSpearAtk (value => 0);
   setSteelSpearDef (value => 0);
   setSteelSpearLuck (value => 0);
   setNetIsShown (current => false);
   setNetActive (current => false);
   setNetAtk (value => 0);
   setNetDef (value => 0);
   setNetLuck (value => 0);
   setGlassStaffIsShown (current => false);
   setGlassStaffActive (current => false);
   setGlassStaffAtk (value => 0);
   setGlassStaffDef (value => 0);
   setGlassStaffLuck (value => 0);
   setCrossbowIsShown (current => false);
   setCrossbowActive (current => false);
   setCrossbowAtk (value => 0);
   setCrossbowDef (value => 0);
   setCrossbowLuck (value => 0);
   setWoodenBowIsShown (current => false);
   setWoodenBowActive (current => false);
   setWoodenBowAtk (value => 0);
   setWoodenBowDef (value => 0);
   setWoodenBowLuck (value => 0);
   setWoodHammerIsShown (current => false);
   setWoodHammerActive (current => false);
   setWoodHammerAtk (value => 0);
   setWoodHammerDef (value => 0);
   setWoodHammerLuck (value => 0);
   setVineNetIsShown (current => false);
   setVineNetActive (current => false);
   setVineNetAtk (value => 0);
   setVineNetDef (value => 0);
   setVineNetLuck (value => 0);
   setOldStaffIsShown (current => false);
   setOldStaffActive (current => false);
   setOldStaffAtk (value => 0);
   setOldStaffDef (value => 0);
   setOldStaffLuck (value => 0);
   setSpiderBowIsShown (current => false);
   setSpiderBowActive (current => false);
   setSpiderBowAtk (value => 0);
   setSpiderBowDef (value => 0);
   setSpiderBowLuck (value => 0);
   };
 
 const handleSteelAxeClick = event => {
   setSteelAxeIsShown (current => !SteelAxeIsShown);
   setSteelAxeActive (current => !SteelAxeActive);
   setSteelAxeAtk (value => 0);
   setSteelAxeDef (value => 0);
   setSteelAxeLuck (value => 0);
 
   setFusionCrossbowIsShown (current => false);
   setFusionCrossbowActive (current => false);
   setFusionCrossbowAtk (value => 0);
   setFusionCrossbowDef (value => 0);
   setFusionCrossbowLuck (value => 0);
   setPoePickIsShown (current => false);
   setPoePickActive (current => false);
   setPoePickAtk (value => 0);
   setPoePickDef (value => 0);
   setPoePickLuck (value => 0);
   setMountainMaceIsShown (current => false);
   setMountainMaceActive (current => false);
   setMountainMaceAtk (value => 0);
   setMountainMaceDef (value => 0);
   setMountainMaceLuck (value => 0);
   setNivaliBowIsShown (current => false);
   setNivaliBowActive (current => false);
   setNivaliBowAtk (value => 0);
   setNivaliBowDef (value => 0);
   setNivaliBowLuck (value => 0);
   setNivaliSlingshotIsShown (current => false);
   setNivaliSlingshotActive (current => false);
   setNivaliSlingshotAtk (value => 0);
   setNivaliSlingshotDef (value => 0);
   setNivaliSlingshotLuck (value => 0);
    setWoodenGardenHornIsShown (current => !WoodenGardenHornIsShown);
    setWoodenGardenHornActive (current => !WoodenGardenHornActive);
    setWoodenGardenHornAtk (value => 0);
    setWoodenGardenHornDef (value => 0);
    setWoodenGardenHornLuck (value => 0);
    setStaffOfTheDeadIsShown (current => false);
    setStaffOfTheDeadActive (current => false);
    setStaffOfTheDeadAtk (value => 0);
    setStaffOfTheDeadDef (value => 0);
    setStaffOfTheDeadLuck (value => 0);
   setTempestYoYoIsShown (current => false);
   setTempestYoYoActive (current => false);
   setTempestYoYoAtk (value => 0);
   setTempestYoYoDef (value => 0);
   setTempestYoYoLuck (value => 0);
   setSteelShieldIsShown (current => false);
   setSteelShieldActive (current => false);
   setSteelShieldAtk (value => 0);
   setSteelShieldDef (value => 0);
   setSteelShieldLuck (value => 0);
   setHarpoonIsShown (current => false);
   setHarpoonActive (current => false);
   setHarpoonAtk (value => 0);
   setHarpoonDef (value => 0);
   setHarpoonLuck (value => 0);
   setStoneHammerIsShown (current => false);
   setStoneHammerActive (current => false);
   setStoneHammerAtk (value => 0);
   setStoneHammerDef (value => 0);
   setStoneHammerLuck (value => 0);
   setSteelSpearIsShown (current => false);
   setSteelSpearActive (current => false);
   setSteelSpearAtk (value => 0);
   setSteelSpearDef (value => 0);
   setSteelSpearLuck (value => 0);
   setNetIsShown (current => false);
   setNetActive (current => false);
   setNetAtk (value => 0);
   setNetDef (value => 0);
   setNetLuck (value => 0);
   setGlassStaffIsShown (current => false);
   setGlassStaffActive (current => false);
   setGlassStaffAtk (value => 0);
   setGlassStaffDef (value => 0);
   setGlassStaffLuck (value => 0);
   setCrossbowIsShown (current => false);
   setCrossbowActive (current => false);
   setCrossbowAtk (value => 0);
   setCrossbowDef (value => 0);
   setCrossbowLuck (value => 0);
   setWoodenBowIsShown (current => false);
   setWoodenBowActive (current => false);
   setWoodenBowAtk (value => 0);
   setWoodenBowDef (value => 0);
   setWoodenBowLuck (value => 0);
   setWoodHammerIsShown (current => false);
   setWoodHammerActive (current => false);
   setWoodHammerAtk (value => 0);
   setWoodHammerDef (value => 0);
   setWoodHammerLuck (value => 0);
   setVineNetIsShown (current => false);
   setVineNetActive (current => false);
   setVineNetAtk (value => 0);
   setVineNetDef (value => 0);
   setVineNetLuck (value => 0);
   setOldStaffIsShown (current => false);
   setOldStaffActive (current => false);
   setOldStaffAtk (value => 0);
   setOldStaffDef (value => 0);
   setOldStaffLuck (value => 0);
   setSpiderBowIsShown (current => false);
   setSpiderBowActive (current => false);
   setSpiderBowAtk (value => 0);
   setSpiderBowDef (value => 0);
   setSpiderBowLuck (value => 0);
   };
 
 const handleHarpoonClick = event => {
   setHarpoonIsShown (current => !HarpoonIsShown);
   setHarpoonActive (current => !HarpoonActive);
   setHarpoonAtk (value => 0);
   setHarpoonDef (value => 0);
   setHarpoonLuck (value => 0);
 
   setFusionCrossbowIsShown (current => false);
   setFusionCrossbowActive (current => false);
   setFusionCrossbowAtk (value => 0);
   setFusionCrossbowDef (value => 0);
   setFusionCrossbowLuck (value => 0);
   setPoePickIsShown (current => false);
   setPoePickActive (current => false);
   setPoePickAtk (value => 0);
   setPoePickDef (value => 0);
   setPoePickLuck (value => 0);
   setMountainMaceIsShown (current => false);
   setMountainMaceActive (current => false);
   setMountainMaceAtk (value => 0);
   setMountainMaceDef (value => 0);
   setMountainMaceLuck (value => 0);
   setNivaliBowIsShown (current => false);
   setNivaliBowActive (current => false);
   setNivaliBowAtk (value => 0);
   setNivaliBowDef (value => 0);
   setNivaliBowLuck (value => 0);
   setNivaliSlingshotIsShown (current => false);
   setNivaliSlingshotActive (current => false);
   setNivaliSlingshotAtk (value => 0);
   setNivaliSlingshotDef (value => 0);
   setNivaliSlingshotLuck (value => 0);
    setWoodenGardenHornIsShown (current => !WoodenGardenHornIsShown);
    setWoodenGardenHornActive (current => !WoodenGardenHornActive);
    setWoodenGardenHornAtk (value => 0);
    setWoodenGardenHornDef (value => 0);
    setWoodenGardenHornLuck (value => 0);
    setStaffOfTheDeadIsShown (current => false);
    setStaffOfTheDeadActive (current => false);
    setStaffOfTheDeadAtk (value => 0);
    setStaffOfTheDeadDef (value => 0);
    setStaffOfTheDeadLuck (value => 0);
   setTempestYoYoIsShown (current => false);
   setTempestYoYoActive (current => false);
   setTempestYoYoAtk (value => 0);
   setTempestYoYoDef (value => 0);
   setTempestYoYoLuck (value => 0);
   setSteelShieldIsShown (current => false);
   setSteelShieldActive (current => false);
   setSteelShieldAtk (value => 0);
   setSteelShieldDef (value => 0);
   setSteelShieldLuck (value => 0);
   setSteelAxeIsShown (current => false);
   setSteelAxeActive (current => false);
   setSteelAxeAtk (value => 0);
   setSteelAxeDef (value => 0);
   setSteelAxeLuck (value => 0);
   setStoneHammerIsShown (current => false);
   setStoneHammerActive (current => false);
   setStoneHammerAtk (value => 0);
   setStoneHammerDef (value => 0);
   setStoneHammerLuck (value => 0);
   setSteelSpearIsShown (current => false);
   setSteelSpearActive (current => false);
   setSteelSpearAtk (value => 0);
   setSteelSpearDef (value => 0);
   setSteelSpearLuck (value => 0);
   setNetIsShown (current => false);
   setNetActive (current => false);
   setNetAtk (value => 0);
   setNetDef (value => 0);
   setNetLuck (value => 0);
   setGlassStaffIsShown (current => false);
   setGlassStaffActive (current => false);
   setGlassStaffAtk (value => 0);
   setGlassStaffDef (value => 0);
   setGlassStaffLuck (value => 0);
   setCrossbowIsShown (current => false);
   setCrossbowActive (current => false);
   setCrossbowAtk (value => 0);
   setCrossbowDef (value => 0);
   setCrossbowLuck (value => 0);
   setWoodenBowIsShown (current => false);
   setWoodenBowActive (current => false);
   setWoodenBowAtk (value => 0);
   setWoodenBowDef (value => 0);
   setWoodenBowLuck (value => 0);
   setWoodHammerIsShown (current => false);
   setWoodHammerActive (current => false);
   setWoodHammerAtk (value => 0);
   setWoodHammerDef (value => 0);
   setWoodHammerLuck (value => 0);
   setVineNetIsShown (current => false);
   setVineNetActive (current => false);
   setVineNetAtk (value => 0);
   setVineNetDef (value => 0);
   setVineNetLuck (value => 0);
   setOldStaffIsShown (current => false);
   setOldStaffActive (current => false);
   setOldStaffAtk (value => 0);
   setOldStaffDef (value => 0);
   setOldStaffLuck (value => 0);
   setSpiderBowIsShown (current => false);
   setSpiderBowActive (current => false);
   setSpiderBowAtk (value => 0);
   setSpiderBowDef (value => 0);
   setSpiderBowLuck (value => 0);
   };
 
 const handleStoneHammerClick = event => {
   setStoneHammerIsShown (current => !StoneHammerIsShown);
   setStoneHammerActive (current => !StoneHammerActive);
   setStoneHammerAtk (value => 0);
   setStoneHammerDef (value => 0);
   setStoneHammerLuck (value => 0);
 
   setFusionCrossbowIsShown (current => false);
   setFusionCrossbowActive (current => false);
   setFusionCrossbowAtk (value => 0);
   setFusionCrossbowDef (value => 0);
   setFusionCrossbowLuck (value => 0);
   setPoePickIsShown (current => false);
   setPoePickActive (current => false);
   setPoePickAtk (value => 0);
   setPoePickDef (value => 0);
   setPoePickLuck (value => 0);
   setMountainMaceIsShown (current => false);
   setMountainMaceActive (current => false);
   setMountainMaceAtk (value => 0);
   setMountainMaceDef (value => 0);
   setMountainMaceLuck (value => 0);
   setNivaliBowIsShown (current => false);
   setNivaliBowActive (current => false);
   setNivaliBowAtk (value => 0);
   setNivaliBowDef (value => 0);
   setNivaliBowLuck (value => 0);
   setNivaliSlingshotIsShown (current => false);
   setNivaliSlingshotActive (current => false);
   setNivaliSlingshotAtk (value => 0);
   setNivaliSlingshotDef (value => 0);
   setNivaliSlingshotLuck (value => 0);
    setWoodenGardenHornIsShown (current => !WoodenGardenHornIsShown);
    setWoodenGardenHornActive (current => !WoodenGardenHornActive);
    setWoodenGardenHornAtk (value => 0);
    setWoodenGardenHornDef (value => 0);
    setWoodenGardenHornLuck (value => 0);
    setStaffOfTheDeadIsShown (current => false);
    setStaffOfTheDeadActive (current => false);
    setStaffOfTheDeadAtk (value => 0);
    setStaffOfTheDeadDef (value => 0);
    setStaffOfTheDeadLuck (value => 0);
   setTempestYoYoIsShown (current => false);
   setTempestYoYoActive (current => false);
   setTempestYoYoAtk (value => 0);
   setTempestYoYoDef (value => 0);
   setTempestYoYoLuck (value => 0);
   setSteelShieldIsShown (current => false);
   setSteelShieldActive (current => false);
   setSteelShieldAtk (value => 0);
   setSteelShieldDef (value => 0);
   setSteelShieldLuck (value => 0);
   setSteelAxeIsShown (current => false);
   setSteelAxeActive (current => false);
   setSteelAxeAtk (value => 0);
   setSteelAxeDef (value => 0);
   setSteelAxeLuck (value => 0);
   setHarpoonIsShown (current => false);
   setHarpoonActive (current => false);
   setHarpoonAtk (value => 0);
   setHarpoonDef (value => 0);
   setHarpoonLuck (value => 0);
   setSteelSpearIsShown (current => false);
   setSteelSpearActive (current => false);
   setSteelSpearAtk (value => 0);
   setSteelSpearDef (value => 0);
   setSteelSpearLuck (value => 0);
   setNetIsShown (current => false);
   setNetActive (current => false);
   setNetAtk (value => 0);
   setNetDef (value => 0);
   setNetLuck (value => 0);
   setGlassStaffIsShown (current => false);
   setGlassStaffActive (current => false);
   setGlassStaffAtk (value => 0);
   setGlassStaffDef (value => 0);
   setGlassStaffLuck (value => 0);
   setCrossbowIsShown (current => false);
   setCrossbowActive (current => false);
   setCrossbowAtk (value => 0);
   setCrossbowDef (value => 0);
   setCrossbowLuck (value => 0);
   setWoodenBowIsShown (current => false);
   setWoodenBowActive (current => false);
   setWoodenBowAtk (value => 0);
   setWoodenBowDef (value => 0);
   setWoodenBowLuck (value => 0);
   setWoodHammerIsShown (current => false);
   setWoodHammerActive (current => false);
   setWoodHammerAtk (value => 0);
   setWoodHammerDef (value => 0);
   setWoodHammerLuck (value => 0);
   setVineNetIsShown (current => false);
   setVineNetActive (current => false);
   setVineNetAtk (value => 0);
   setVineNetDef (value => 0);
   setVineNetLuck (value => 0);
   setOldStaffIsShown (current => false);
   setOldStaffActive (current => false);
   setOldStaffAtk (value => 0);
   setOldStaffDef (value => 0);
   setOldStaffLuck (value => 0);
   setSpiderBowIsShown (current => false);
   setSpiderBowActive (current => false);
   setSpiderBowAtk (value => 0);
   setSpiderBowDef (value => 0);
   setSpiderBowLuck (value => 0);
   };
 
 const handleSteelSpearClick = event => {
   setSteelSpearIsShown (current => !SteelSpearIsShown);
   setSteelSpearActive (current => !SteelSpearActive);
   setSteelSpearAtk (value => 0);
   setSteelSpearDef (value => 0);
   setSteelSpearLuck (value => 0);
 
   setFusionCrossbowIsShown (current => false);
   setFusionCrossbowActive (current => false);
   setFusionCrossbowAtk (value => 0);
   setFusionCrossbowDef (value => 0);
   setFusionCrossbowLuck (value => 0);
   setPoePickIsShown (current => false);
   setPoePickActive (current => false);
   setPoePickAtk (value => 0);
   setPoePickDef (value => 0);
   setPoePickLuck (value => 0);
   setMountainMaceIsShown (current => false);
   setMountainMaceActive (current => false);
   setMountainMaceAtk (value => 0);
   setMountainMaceDef (value => 0);
   setMountainMaceLuck (value => 0);
   setNivaliBowIsShown (current => false);
   setNivaliBowActive (current => false);
   setNivaliBowAtk (value => 0);
   setNivaliBowDef (value => 0);
   setNivaliBowLuck (value => 0);
   setNivaliSlingshotIsShown (current => false);
   setNivaliSlingshotActive (current => false);
   setNivaliSlingshotAtk (value => 0);
   setNivaliSlingshotDef (value => 0);
   setNivaliSlingshotLuck (value => 0);
      setWoodenGardenHornIsShown (current => !WoodenGardenHornIsShown);
    setWoodenGardenHornActive (current => !WoodenGardenHornActive);
    setWoodenGardenHornAtk (value => 0);
    setWoodenGardenHornDef (value => 0);
    setWoodenGardenHornLuck (value => 0);
    setStaffOfTheDeadIsShown (current => false);
    setStaffOfTheDeadActive (current => false);
    setStaffOfTheDeadAtk (value => 0);
    setStaffOfTheDeadDef (value => 0);
    setStaffOfTheDeadLuck (value => 0);
   setTempestYoYoIsShown (current => false);
   setTempestYoYoActive (current => false);
   setTempestYoYoAtk (value => 0);
   setTempestYoYoDef (value => 0);
   setTempestYoYoLuck (value => 0);
   setSteelShieldIsShown (current => false);
   setSteelShieldActive (current => false);
   setSteelShieldAtk (value => 0);
   setSteelShieldDef (value => 0);
   setSteelShieldLuck (value => 0);
   setSteelAxeIsShown (current => false);
   setSteelAxeActive (current => false);
   setSteelAxeAtk (value => 0);
   setSteelAxeDef (value => 0);
   setSteelAxeLuck (value => 0);
   setHarpoonIsShown (current => false);
   setHarpoonActive (current => false);
   setHarpoonAtk (value => 0);
   setHarpoonDef (value => 0);
   setHarpoonLuck (value => 0);
   setStoneHammerIsShown (current => false);
   setStoneHammerActive (current => false);
   setStoneHammerAtk (value => 0);
   setStoneHammerDef (value => 0);
   setStoneHammerLuck (value => 0);
   setNetIsShown (current => false);
   setNetActive (current => false);
   setNetAtk (value => 0);
   setNetDef (value => 0);
   setNetLuck (value => 0);
   setGlassStaffIsShown (current => false);
   setGlassStaffActive (current => false);
   setGlassStaffAtk (value => 0);
   setGlassStaffDef (value => 0);
   setGlassStaffLuck (value => 0);
   setCrossbowIsShown (current => false);
   setCrossbowActive (current => false);
   setCrossbowAtk (value => 0);
   setCrossbowDef (value => 0);
   setCrossbowLuck (value => 0);
   setWoodenBowIsShown (current => false);
   setWoodenBowActive (current => false);
   setWoodenBowAtk (value => 0);
   setWoodenBowDef (value => 0);
   setWoodenBowLuck (value => 0);
   setWoodHammerIsShown (current => false);
   setWoodHammerActive (current => false);
   setWoodHammerAtk (value => 0);
   setWoodHammerDef (value => 0);
   setWoodHammerLuck (value => 0);
   setVineNetIsShown (current => false);
   setVineNetActive (current => false);
   setVineNetAtk (value => 0);
   setVineNetDef (value => 0);
   setVineNetLuck (value => 0);
   setOldStaffIsShown (current => false);
   setOldStaffActive (current => false);
   setOldStaffAtk (value => 0);
   setOldStaffDef (value => 0);
   setOldStaffLuck (value => 0);
   setSpiderBowIsShown (current => false);
   setSpiderBowActive (current => false);
   setSpiderBowAtk (value => 0);
   setSpiderBowDef (value => 0);
   setSpiderBowLuck (value => 0);
   };
 
 const handleNetClick = event => {
   setNetIsShown (current => !NetIsShown);
   setNetActive (current => !NetActive);
   setNetAtk (value => 0);
   setNetDef (value => 0);
   setNetLuck (value => 0);
 
   setFusionCrossbowIsShown (current => false);
   setFusionCrossbowActive (current => false);
   setFusionCrossbowAtk (value => 0);
   setFusionCrossbowDef (value => 0);
   setFusionCrossbowLuck (value => 0);
   setPoePickIsShown (current => false);
   setPoePickActive (current => false);
   setPoePickAtk (value => 0);
   setPoePickDef (value => 0);
   setPoePickLuck (value => 0);
   setMountainMaceIsShown (current => false);
   setMountainMaceActive (current => false);
   setMountainMaceAtk (value => 0);
   setMountainMaceDef (value => 0);
   setMountainMaceLuck (value => 0);
   setNivaliBowIsShown (current => false);
   setNivaliBowActive (current => false);
   setNivaliBowAtk (value => 0);
   setNivaliBowDef (value => 0);
   setNivaliBowLuck (value => 0);
   setNivaliSlingshotIsShown (current => false);
   setNivaliSlingshotActive (current => false);
   setNivaliSlingshotAtk (value => 0);
   setNivaliSlingshotDef (value => 0);
   setNivaliSlingshotLuck (value => 0);
    setWoodenGardenHornIsShown (current => !WoodenGardenHornIsShown);
    setWoodenGardenHornActive (current => !WoodenGardenHornActive);
    setWoodenGardenHornAtk (value => 0);
    setWoodenGardenHornDef (value => 0);
    setWoodenGardenHornLuck (value => 0);
    setStaffOfTheDeadIsShown (current => false);
    setStaffOfTheDeadActive (current => false);
    setStaffOfTheDeadAtk (value => 0);
    setStaffOfTheDeadDef (value => 0);
    setStaffOfTheDeadLuck (value => 0);
   setTempestYoYoIsShown (current => false);
   setTempestYoYoActive (current => false);
   setTempestYoYoAtk (value => 0);
   setTempestYoYoDef (value => 0);
   setTempestYoYoLuck (value => 0);
   setSteelShieldIsShown (current => false);
   setSteelShieldActive (current => false);
   setSteelShieldAtk (value => 0);
   setSteelShieldDef (value => 0);
   setSteelShieldLuck (value => 0);
   setSteelAxeIsShown (current => false);
   setSteelAxeActive (current => false);
   setSteelAxeAtk (value => 0);
   setSteelAxeDef (value => 0);
   setSteelAxeLuck (value => 0);
   setHarpoonIsShown (current => false);
   setHarpoonActive (current => false);
   setHarpoonAtk (value => 0);
   setHarpoonDef (value => 0);
   setHarpoonLuck (value => 0);
   setStoneHammerIsShown (current => false);
   setStoneHammerActive (current => false);
   setStoneHammerAtk (value => 0);
   setStoneHammerDef (value => 0);
   setStoneHammerLuck (value => 0);
   setSteelSpearIsShown (current => false);
   setSteelSpearActive (current => false);
   setSteelSpearAtk (value => 0);
   setSteelSpearDef (value => 0);
   setSteelSpearLuck (value => 0);
   setGlassStaffIsShown (current => false);
   setGlassStaffActive (current => false);
   setGlassStaffAtk (value => 0);
   setGlassStaffDef (value => 0);
   setGlassStaffLuck (value => 0);
   setCrossbowIsShown (current => false);
   setCrossbowActive (current => false);
   setCrossbowAtk (value => 0);
   setCrossbowDef (value => 0);
   setCrossbowLuck (value => 0);
   setWoodenBowIsShown (current => false);
   setWoodenBowActive (current => false);
   setWoodenBowAtk (value => 0);
   setWoodenBowDef (value => 0);
   setWoodenBowLuck (value => 0);
   setWoodHammerIsShown (current => false);
   setWoodHammerActive (current => false);
   setWoodHammerAtk (value => 0);
   setWoodHammerDef (value => 0);
   setWoodHammerLuck (value => 0);
   setVineNetIsShown (current => false);
   setVineNetActive (current => false);
   setVineNetAtk (value => 0);
   setVineNetDef (value => 0);
   setVineNetLuck (value => 0);
   setOldStaffIsShown (current => false);
   setOldStaffActive (current => false);
   setOldStaffAtk (value => 0);
   setOldStaffDef (value => 0);
   setOldStaffLuck (value => 0);
   setSpiderBowIsShown (current => false);
   setSpiderBowActive (current => false);
   setSpiderBowAtk (value => 0);
   setSpiderBowDef (value => 0);
   setSpiderBowLuck (value => 0);
   };
 
 const handleGlassStaffClick = event => {
   setGlassStaffIsShown (current => !GlassStaffIsShown);
   setGlassStaffActive (current => !GlassStaffActive);
   setGlassStaffAtk (value => 0);
   setGlassStaffDef (value => 0);
   setGlassStaffLuck (value => 0);
 
   setFusionCrossbowIsShown (current => false);
   setFusionCrossbowActive (current => false);
   setFusionCrossbowAtk (value => 0);
   setFusionCrossbowDef (value => 0);
   setFusionCrossbowLuck (value => 0);
   setPoePickIsShown (current => false);
   setPoePickActive (current => false);
   setPoePickAtk (value => 0);
   setPoePickDef (value => 0);
   setPoePickLuck (value => 0);
   setMountainMaceIsShown (current => false);
   setMountainMaceActive (current => false);
   setMountainMaceAtk (value => 0);
   setMountainMaceDef (value => 0);
   setMountainMaceLuck (value => 0);
   setNivaliBowIsShown (current => false);
   setNivaliBowActive (current => false);
   setNivaliBowAtk (value => 0);
   setNivaliBowDef (value => 0);
   setNivaliBowLuck (value => 0);
   setNivaliSlingshotIsShown (current => false);
   setNivaliSlingshotActive (current => false);
   setNivaliSlingshotAtk (value => 0);
   setNivaliSlingshotDef (value => 0);
   setNivaliSlingshotLuck (value => 0);
    setWoodenGardenHornIsShown (current => !WoodenGardenHornIsShown);
    setWoodenGardenHornActive (current => !WoodenGardenHornActive);
    setWoodenGardenHornAtk (value => 0);
    setWoodenGardenHornDef (value => 0);
    setWoodenGardenHornLuck (value => 0);
    setStaffOfTheDeadIsShown (current => false);
    setStaffOfTheDeadActive (current => false);
    setStaffOfTheDeadAtk (value => 0);
    setStaffOfTheDeadDef (value => 0);
    setStaffOfTheDeadLuck (value => 0);
   setTempestYoYoIsShown (current => false);
   setTempestYoYoActive (current => false);
   setTempestYoYoAtk (value => 0);
   setTempestYoYoDef (value => 0);
   setTempestYoYoLuck (value => 0);
   setSteelShieldIsShown (current => false);
   setSteelShieldActive (current => false);
   setSteelShieldAtk (value => 0);
   setSteelShieldDef (value => 0);
   setSteelShieldLuck (value => 0);
   setSteelAxeIsShown (current => false);
   setSteelAxeActive (current => false);
   setSteelAxeAtk (value => 0);
   setSteelAxeDef (value => 0);
   setSteelAxeLuck (value => 0);
   setHarpoonIsShown (current => false);
   setHarpoonActive (current => false);
   setHarpoonAtk (value => 0);
   setHarpoonDef (value => 0);
   setHarpoonLuck (value => 0);
   setStoneHammerIsShown (current => false);
   setStoneHammerActive (current => false);
   setStoneHammerAtk (value => 0);
   setStoneHammerDef (value => 0);
   setStoneHammerLuck (value => 0);
   setSteelSpearIsShown (current => false);
   setSteelSpearActive (current => false);
   setSteelSpearAtk (value => 0);
   setSteelSpearDef (value => 0);
   setSteelSpearLuck (value => 0);
   setNetIsShown (current => false);
   setNetActive (current => false);
   setNetAtk (value => 0);
   setNetDef (value => 0);
   setNetLuck (value => 0);
   setCrossbowIsShown (current => false);
   setCrossbowActive (current => false);
   setCrossbowAtk (value => 0);
   setCrossbowDef (value => 0);
   setCrossbowLuck (value => 0);
   setWoodenBowIsShown (current => false);
   setWoodenBowActive (current => false);
   setWoodenBowAtk (value => 0);
   setWoodenBowDef (value => 0);
   setWoodenBowLuck (value => 0);
   setWoodHammerIsShown (current => false);
   setWoodHammerActive (current => false);
   setWoodHammerAtk (value => 0);
   setWoodHammerDef (value => 0);
   setWoodHammerLuck (value => 0);
   setVineNetIsShown (current => false);
   setVineNetActive (current => false);
   setVineNetAtk (value => 0);
   setVineNetDef (value => 0);
   setVineNetLuck (value => 0);
   setOldStaffIsShown (current => false);
   setOldStaffActive (current => false);
   setOldStaffAtk (value => 0);
   setOldStaffDef (value => 0);
   setOldStaffLuck (value => 0);
   setSpiderBowIsShown (current => false);
   setSpiderBowActive (current => false);
   setSpiderBowAtk (value => 0);
   setSpiderBowDef (value => 0);
   setSpiderBowLuck (value => 0);
   };
 
 const handleCrossbowClick = event => {
   setCrossbowIsShown (current => !CrossbowIsShown);
   setCrossbowActive (current => !CrossbowActive);
   setCrossbowAtk (value => 0);
   setCrossbowDef (value => 0);
   setCrossbowLuck (value => 0);
 
   setFusionCrossbowIsShown (current => false);
   setFusionCrossbowActive (current => false);
   setFusionCrossbowAtk (value => 0);
   setFusionCrossbowDef (value => 0);
   setFusionCrossbowLuck (value => 0);
   setPoePickIsShown (current => false);
   setPoePickActive (current => false);
   setPoePickAtk (value => 0);
   setPoePickDef (value => 0);
   setPoePickLuck (value => 0);
   setMountainMaceIsShown (current => false);
   setMountainMaceActive (current => false);
   setMountainMaceAtk (value => 0);
   setMountainMaceDef (value => 0);
   setMountainMaceLuck (value => 0);
   setNivaliBowIsShown (current => false);
   setNivaliBowActive (current => false);
   setNivaliBowAtk (value => 0);
   setNivaliBowDef (value => 0);
   setNivaliBowLuck (value => 0);
   setNivaliSlingshotIsShown (current => false);
   setNivaliSlingshotActive (current => false);
   setNivaliSlingshotAtk (value => 0);
   setNivaliSlingshotDef (value => 0);
   setNivaliSlingshotLuck (value => 0);
    setWoodenGardenHornIsShown (current => !WoodenGardenHornIsShown);
    setWoodenGardenHornActive (current => !WoodenGardenHornActive);
    setWoodenGardenHornAtk (value => 0);
    setWoodenGardenHornDef (value => 0);
    setWoodenGardenHornLuck (value => 0);
    setStaffOfTheDeadIsShown (current => false);
    setStaffOfTheDeadActive (current => false);
    setStaffOfTheDeadAtk (value => 0);
    setStaffOfTheDeadDef (value => 0);
    setStaffOfTheDeadLuck (value => 0);
   setTempestYoYoIsShown (current => false);
   setTempestYoYoActive (current => false);
   setTempestYoYoAtk (value => 0);
   setTempestYoYoDef (value => 0);
   setTempestYoYoLuck (value => 0);
   setSteelShieldIsShown (current => false);
   setSteelShieldActive (current => false);
   setSteelShieldAtk (value => 0);
   setSteelShieldDef (value => 0);
   setSteelShieldLuck (value => 0);
   setSteelAxeIsShown (current => false);
   setSteelAxeActive (current => false);
   setSteelAxeAtk (value => 0);
   setSteelAxeDef (value => 0);
   setSteelAxeLuck (value => 0);
   setHarpoonIsShown (current => false);
   setHarpoonActive (current => false);
   setHarpoonAtk (value => 0);
   setHarpoonDef (value => 0);
   setHarpoonLuck (value => 0);
   setStoneHammerIsShown (current => false);
   setStoneHammerActive (current => false);
   setStoneHammerAtk (value => 0);
   setStoneHammerDef (value => 0);
   setStoneHammerLuck (value => 0);
   setSteelSpearIsShown (current => false);
   setSteelSpearActive (current => false);
   setSteelSpearAtk (value => 0);
   setSteelSpearDef (value => 0);
   setSteelSpearLuck (value => 0);
   setNetIsShown (current => false);
   setNetActive (current => false);
   setNetAtk (value => 0);
   setNetDef (value => 0);
   setNetLuck (value => 0);
   setGlassStaffIsShown (current => false);
   setGlassStaffActive (current => false);
   setGlassStaffAtk (value => 0);
   setGlassStaffDef (value => 0);
   setGlassStaffLuck (value => 0);
   setWoodenBowIsShown (current => false);
   setWoodenBowActive (current => false);
   setWoodenBowAtk (value => 0);
   setWoodenBowDef (value => 0);
   setWoodenBowLuck (value => 0);
   setWoodHammerIsShown (current => false);
   setWoodHammerActive (current => false);
   setWoodHammerAtk (value => 0);
   setWoodHammerDef (value => 0);
   setWoodHammerLuck (value => 0);
   setVineNetIsShown (current => false);
   setVineNetActive (current => false);
   setVineNetAtk (value => 0);
   setVineNetDef (value => 0);
   setVineNetLuck (value => 0);
   setOldStaffIsShown (current => false);
   setOldStaffActive (current => false);
   setOldStaffAtk (value => 0);
   setOldStaffDef (value => 0);
   setOldStaffLuck (value => 0);
   setSpiderBowIsShown (current => false);
   setSpiderBowActive (current => false);
   setSpiderBowAtk (value => 0);
   setSpiderBowDef (value => 0);
   setSpiderBowLuck (value => 0);
   };
 
 const handleWoodenBowClick = event => {
   setWoodenBowIsShown (current => !WoodenBowIsShown);
   setWoodenBowActive (current => !WoodenBowActive);
   setWoodenBowAtk (value => 0);
   setWoodenBowDef (value => 0);
   setWoodenBowLuck (value => 0);
 
   setFusionCrossbowIsShown (current => false);
   setFusionCrossbowActive (current => false);
   setFusionCrossbowAtk (value => 0);
   setFusionCrossbowDef (value => 0);
   setFusionCrossbowLuck (value => 0);
   setPoePickIsShown (current => false);
   setPoePickActive (current => false);
   setPoePickAtk (value => 0);
   setPoePickDef (value => 0);
   setPoePickLuck (value => 0);
   setMountainMaceIsShown (current => false);
   setMountainMaceActive (current => false);
   setMountainMaceAtk (value => 0);
   setMountainMaceDef (value => 0);
   setMountainMaceLuck (value => 0);
   setNivaliBowIsShown (current => false);
   setNivaliBowActive (current => false);
   setNivaliBowAtk (value => 0);
   setNivaliBowDef (value => 0);
   setNivaliBowLuck (value => 0);
   setNivaliSlingshotIsShown (current => false);
   setNivaliSlingshotActive (current => false);
   setNivaliSlingshotAtk (value => 0);
   setNivaliSlingshotDef (value => 0);
   setNivaliSlingshotLuck (value => 0);
      setWoodenGardenHornIsShown (current => !WoodenGardenHornIsShown);
    setWoodenGardenHornActive (current => !WoodenGardenHornActive);
    setWoodenGardenHornAtk (value => 0);
    setWoodenGardenHornDef (value => 0);
    setWoodenGardenHornLuck (value => 0);
    setStaffOfTheDeadIsShown (current => false);
    setStaffOfTheDeadActive (current => false);
    setStaffOfTheDeadAtk (value => 0);
    setStaffOfTheDeadDef (value => 0);
    setStaffOfTheDeadLuck (value => 0);
   setTempestYoYoIsShown (current => false);
   setTempestYoYoActive (current => false);
   setTempestYoYoAtk (value => 0);
   setTempestYoYoDef (value => 0);
   setTempestYoYoLuck (value => 0);
   setSteelShieldIsShown (current => false);
   setSteelShieldActive (current => false);
   setSteelShieldAtk (value => 0);
   setSteelShieldDef (value => 0);
   setSteelShieldLuck (value => 0);
   setSteelAxeIsShown (current => false);
   setSteelAxeActive (current => false);
   setSteelAxeAtk (value => 0);
   setSteelAxeDef (value => 0);
   setSteelAxeLuck (value => 0);
   setHarpoonIsShown (current => false);
   setHarpoonActive (current => false);
   setHarpoonAtk (value => 0);
   setHarpoonDef (value => 0);
   setHarpoonLuck (value => 0);
   setStoneHammerIsShown (current => false);
   setStoneHammerActive (current => false);
   setStoneHammerAtk (value => 0);
   setStoneHammerDef (value => 0);
   setStoneHammerLuck (value => 0);
   setSteelSpearIsShown (current => false);
   setSteelSpearActive (current => false);
   setSteelSpearAtk (value => 0);
   setSteelSpearDef (value => 0);
   setSteelSpearLuck (value => 0);
   setNetIsShown (current => false);
   setNetActive (current => false);
   setNetAtk (value => 0);
   setNetDef (value => 0);
   setNetLuck (value => 0);
   setGlassStaffIsShown (current => false);
   setGlassStaffActive (current => false);
   setGlassStaffAtk (value => 0);
   setGlassStaffDef (value => 0);
   setGlassStaffLuck (value => 0);
   setCrossbowIsShown (current => false);
   setCrossbowActive (current => false);
   setCrossbowAtk (value => 0);
   setCrossbowDef (value => 0);
   setCrossbowLuck (value => 0);
   setWoodHammerIsShown (current => false);
   setWoodHammerActive (current => false);
   setWoodHammerAtk (value => 0);
   setWoodHammerDef (value => 0);
   setWoodHammerLuck (value => 0);
   setVineNetIsShown (current => false);
   setVineNetActive (current => false);
   setVineNetAtk (value => 0);
   setVineNetDef (value => 0);
   setVineNetLuck (value => 0);
   setOldStaffIsShown (current => false);
   setOldStaffActive (current => false);
   setOldStaffAtk (value => 0);
   setOldStaffDef (value => 0);
   setOldStaffLuck (value => 0);
   setSpiderBowIsShown (current => false);
   setSpiderBowActive (current => false);
   setSpiderBowAtk (value => 0);
   setSpiderBowDef (value => 0);
   setSpiderBowLuck (value => 0);
   };
 
 const handleWoodHammerClick = event => {
   setWoodHammerIsShown (current => !WoodHammerIsShown);
   setWoodHammerActive (current => !WoodHammerActive);
   setWoodHammerAtk (value => 0);
   setWoodHammerDef (value => 0);
   setWoodHammerLuck (value => 0);
 
   setFusionCrossbowIsShown (current => false);
   setFusionCrossbowActive (current => false);
   setFusionCrossbowAtk (value => 0);
   setFusionCrossbowDef (value => 0);
   setFusionCrossbowLuck (value => 0);
   setPoePickIsShown (current => false);
   setPoePickActive (current => false);
   setPoePickAtk (value => 0);
   setPoePickDef (value => 0);
   setPoePickLuck (value => 0);
   setMountainMaceIsShown (current => false);
   setMountainMaceActive (current => false);
   setMountainMaceAtk (value => 0);
   setMountainMaceDef (value => 0);
   setMountainMaceLuck (value => 0);
   setNivaliBowIsShown (current => false);
   setNivaliBowActive (current => false);
   setNivaliBowAtk (value => 0);
   setNivaliBowDef (value => 0);
   setNivaliBowLuck (value => 0);
   setNivaliSlingshotIsShown (current => false);
   setNivaliSlingshotActive (current => false);
   setNivaliSlingshotAtk (value => 0);
   setNivaliSlingshotDef (value => 0);
   setNivaliSlingshotLuck (value => 0);
      setWoodenGardenHornIsShown (current => !WoodenGardenHornIsShown);
    setWoodenGardenHornActive (current => !WoodenGardenHornActive);
    setWoodenGardenHornAtk (value => 0);
    setWoodenGardenHornDef (value => 0);
    setWoodenGardenHornLuck (value => 0);
    setStaffOfTheDeadIsShown (current => false);
    setStaffOfTheDeadActive (current => false);
    setStaffOfTheDeadAtk (value => 0);
    setStaffOfTheDeadDef (value => 0);
    setStaffOfTheDeadLuck (value => 0);
   setTempestYoYoIsShown (current => false);
   setTempestYoYoActive (current => false);
   setTempestYoYoAtk (value => 0);
   setTempestYoYoDef (value => 0);
   setTempestYoYoLuck (value => 0);
   setSteelShieldIsShown (current => false);
   setSteelShieldActive (current => false);
   setSteelShieldAtk (value => 0);
   setSteelShieldDef (value => 0);
   setSteelShieldLuck (value => 0);
   setSteelAxeIsShown (current => false);
   setSteelAxeActive (current => false);
   setSteelAxeAtk (value => 0);
   setSteelAxeDef (value => 0);
   setSteelAxeLuck (value => 0);
   setHarpoonIsShown (current => false);
   setHarpoonActive (current => false);
   setHarpoonAtk (value => 0);
   setHarpoonDef (value => 0);
   setHarpoonLuck (value => 0);
   setStoneHammerIsShown (current => false);
   setStoneHammerActive (current => false);
   setStoneHammerAtk (value => 0);
   setStoneHammerDef (value => 0);
   setStoneHammerLuck (value => 0);
   setSteelSpearIsShown (current => false);
   setSteelSpearActive (current => false);
   setSteelSpearAtk (value => 0);
   setSteelSpearDef (value => 0);
   setSteelSpearLuck (value => 0);
   setNetIsShown (current => false);
   setNetActive (current => false);
   setNetAtk (value => 0);
   setNetDef (value => 0);
   setNetLuck (value => 0);
   setGlassStaffIsShown (current => false);
   setGlassStaffActive (current => false);
   setGlassStaffAtk (value => 0);
   setGlassStaffDef (value => 0);
   setGlassStaffLuck (value => 0);
   setCrossbowIsShown (current => false);
   setCrossbowActive (current => false);
   setCrossbowAtk (value => 0);
   setCrossbowDef (value => 0);
   setCrossbowLuck (value => 0);
   setWoodenBowIsShown (current => false);
   setWoodenBowActive (current => false);
   setWoodenBowAtk (value => 0);
   setWoodenBowDef (value => 0);
   setWoodenBowLuck (value => 0);
   setVineNetIsShown (current => false);
   setVineNetActive (current => false);
   setVineNetAtk (value => 0);
   setVineNetDef (value => 0);
   setVineNetLuck (value => 0);
   setOldStaffIsShown (current => false);
   setOldStaffActive (current => false);
   setOldStaffAtk (value => 0);
   setOldStaffDef (value => 0);
   setOldStaffLuck (value => 0);
   setSpiderBowIsShown (current => false);
   setSpiderBowActive (current => false);
   setSpiderBowAtk (value => 0);
   setSpiderBowDef (value => 0);
   setSpiderBowLuck (value => 0);
   };
 
 const handleVineNetClick = event => {
   setVineNetIsShown (current => !VineNetIsShown);
   setVineNetActive (current => !VineNetActive);
   setVineNetAtk (value => 0);
   setVineNetDef (value => 0);
   setVineNetLuck (value => 0);
 
   setFusionCrossbowIsShown (current => false);
   setFusionCrossbowActive (current => false);
   setFusionCrossbowAtk (value => 0);
   setFusionCrossbowDef (value => 0);
   setFusionCrossbowLuck (value => 0);
   setPoePickIsShown (current => false);
   setPoePickActive (current => false);
   setPoePickAtk (value => 0);
   setPoePickDef (value => 0);
   setPoePickLuck (value => 0);
   setMountainMaceIsShown (current => false);
   setMountainMaceActive (current => false);
   setMountainMaceAtk (value => 0);
   setMountainMaceDef (value => 0);
   setMountainMaceLuck (value => 0);
   setNivaliBowIsShown (current => false);
   setNivaliBowActive (current => false);
   setNivaliBowAtk (value => 0);
   setNivaliBowDef (value => 0);
   setNivaliBowLuck (value => 0);
   setNivaliSlingshotIsShown (current => false);
   setNivaliSlingshotActive (current => false);
   setNivaliSlingshotAtk (value => 0);
   setNivaliSlingshotDef (value => 0);
   setNivaliSlingshotLuck (value => 0);
    setWoodenGardenHornIsShown (current => !WoodenGardenHornIsShown);
    setWoodenGardenHornActive (current => !WoodenGardenHornActive);
    setWoodenGardenHornAtk (value => 0);
    setWoodenGardenHornDef (value => 0);
    setWoodenGardenHornLuck (value => 0);
    setStaffOfTheDeadIsShown (current => false);
    setStaffOfTheDeadActive (current => false);
    setStaffOfTheDeadAtk (value => 0);
    setStaffOfTheDeadDef (value => 0);
    setStaffOfTheDeadLuck (value => 0);
   setTempestYoYoIsShown (current => false);
   setTempestYoYoActive (current => false);
   setTempestYoYoAtk (value => 0);
   setTempestYoYoDef (value => 0);
   setTempestYoYoLuck (value => 0);
   setSteelShieldIsShown (current => false);
   setSteelShieldActive (current => false);
   setSteelShieldAtk (value => 0);
   setSteelShieldDef (value => 0);
   setSteelShieldLuck (value => 0);
   setSteelAxeIsShown (current => false);
   setSteelAxeActive (current => false);
   setSteelAxeAtk (value => 0);
   setSteelAxeDef (value => 0);
   setSteelAxeLuck (value => 0);
   setHarpoonIsShown (current => false);
   setHarpoonActive (current => false);
   setHarpoonAtk (value => 0);
   setHarpoonDef (value => 0);
   setHarpoonLuck (value => 0);
   setStoneHammerIsShown (current => false);
   setStoneHammerActive (current => false);
   setStoneHammerAtk (value => 0);
   setStoneHammerDef (value => 0);
   setStoneHammerLuck (value => 0);
   setSteelSpearIsShown (current => false);
   setSteelSpearActive (current => false);
   setSteelSpearAtk (value => 0);
   setSteelSpearDef (value => 0);
   setSteelSpearLuck (value => 0);
   setNetIsShown (current => false);
   setNetActive (current => false);
   setNetAtk (value => 0);
   setNetDef (value => 0);
   setNetLuck (value => 0);
   setGlassStaffIsShown (current => false);
   setGlassStaffActive (current => false);
   setGlassStaffAtk (value => 0);
   setGlassStaffDef (value => 0);
   setGlassStaffLuck (value => 0);
   setCrossbowIsShown (current => false);
   setCrossbowActive (current => false);
   setCrossbowAtk (value => 0);
   setCrossbowDef (value => 0);
   setCrossbowLuck (value => 0);
   setWoodenBowIsShown (current => false);
   setWoodenBowActive (current => false);
   setWoodenBowAtk (value => 0);
   setWoodenBowDef (value => 0);
   setWoodenBowLuck (value => 0);
   setWoodHammerIsShown (current => false);
   setWoodHammerActive (current => false);
   setWoodHammerAtk (value => 0);
   setWoodHammerDef (value => 0);
   setWoodHammerLuck (value => 0);
   setOldStaffIsShown (current => false);
   setOldStaffActive (current => false);
   setOldStaffAtk (value => 0);
   setOldStaffDef (value => 0);
   setOldStaffLuck (value => 0);
   setSpiderBowIsShown (current => false);
   setSpiderBowActive (current => false);
   setSpiderBowAtk (value => 0);
   setSpiderBowDef (value => 0);
   setSpiderBowLuck (value => 0);
   };
 
 const handleOldStaffClick = event => {
   setOldStaffIsShown (current => !OldStaffIsShown);
   setOldStaffActive (current => !OldStaffActive);
   setOldStaffAtk (value => 0);
   setOldStaffDef (value => 0);
   setOldStaffLuck (value => 0);
 
   setFusionCrossbowIsShown (current => false);
   setFusionCrossbowActive (current => false);
   setFusionCrossbowAtk (value => 0);
   setFusionCrossbowDef (value => 0);
   setFusionCrossbowLuck (value => 0);
   setPoePickIsShown (current => false);
   setPoePickActive (current => false);
   setPoePickAtk (value => 0);
   setPoePickDef (value => 0);
   setPoePickLuck (value => 0);
   setMountainMaceIsShown (current => false);
   setMountainMaceActive (current => false);
   setMountainMaceAtk (value => 0);
   setMountainMaceDef (value => 0);
   setMountainMaceLuck (value => 0);
   setNivaliBowIsShown (current => false);
   setNivaliBowActive (current => false);
   setNivaliBowAtk (value => 0);
   setNivaliBowDef (value => 0);
   setNivaliBowLuck (value => 0);
   setNivaliSlingshotIsShown (current => false);
   setNivaliSlingshotActive (current => false);
   setNivaliSlingshotAtk (value => 0);
   setNivaliSlingshotDef (value => 0);
   setNivaliSlingshotLuck (value => 0);
      setWoodenGardenHornIsShown (current => !WoodenGardenHornIsShown);
    setWoodenGardenHornActive (current => !WoodenGardenHornActive);
    setWoodenGardenHornAtk (value => 0);
    setWoodenGardenHornDef (value => 0);
    setWoodenGardenHornLuck (value => 0);
    setStaffOfTheDeadIsShown (current => false);
    setStaffOfTheDeadActive (current => false);
    setStaffOfTheDeadAtk (value => 0);
    setStaffOfTheDeadDef (value => 0);
    setStaffOfTheDeadLuck (value => 0);
   setTempestYoYoIsShown (current => false);
   setTempestYoYoActive (current => false);
   setTempestYoYoAtk (value => 0);
   setTempestYoYoDef (value => 0);
   setTempestYoYoLuck (value => 0);
   setSteelShieldIsShown (current => false);
   setSteelShieldActive (current => false);
   setSteelShieldAtk (value => 0);
   setSteelShieldDef (value => 0);
   setSteelShieldLuck (value => 0);
   setSteelAxeIsShown (current => false);
   setSteelAxeActive (current => false);
   setSteelAxeAtk (value => 0);
   setSteelAxeDef (value => 0);
   setSteelAxeLuck (value => 0);
   setHarpoonIsShown (current => false);
   setHarpoonActive (current => false);
   setHarpoonAtk (value => 0);
   setHarpoonDef (value => 0);
   setHarpoonLuck (value => 0);
   setStoneHammerIsShown (current => false);
   setStoneHammerActive (current => false);
   setStoneHammerAtk (value => 0);
   setStoneHammerDef (value => 0);
   setStoneHammerLuck (value => 0);
   setSteelSpearIsShown (current => false);
   setSteelSpearActive (current => false);
   setSteelSpearAtk (value => 0);
   setSteelSpearDef (value => 0);
   setSteelSpearLuck (value => 0);
   setNetIsShown (current => false);
   setNetActive (current => false);
   setNetAtk (value => 0);
   setNetDef (value => 0);
   setNetLuck (value => 0);
   setGlassStaffIsShown (current => false);
   setGlassStaffActive (current => false);
   setGlassStaffAtk (value => 0);
   setGlassStaffDef (value => 0);
   setGlassStaffLuck (value => 0);
   setCrossbowIsShown (current => false);
   setCrossbowActive (current => false);
   setCrossbowAtk (value => 0);
   setCrossbowDef (value => 0);
   setCrossbowLuck (value => 0);
   setWoodenBowIsShown (current => false);
   setWoodenBowActive (current => false);
   setWoodenBowAtk (value => 0);
   setWoodenBowDef (value => 0);
   setWoodenBowLuck (value => 0);
   setWoodHammerIsShown (current => false);
   setWoodHammerActive (current => false);
   setWoodHammerAtk (value => 0);
   setWoodHammerDef (value => 0);
   setWoodHammerLuck (value => 0);
   setVineNetIsShown (current => false);
   setVineNetActive (current => false);
   setVineNetAtk (value => 0);
   setVineNetDef (value => 0);
   setVineNetLuck (value => 0);
   setSpiderBowIsShown (current => false);
   setSpiderBowActive (current => false);
   setSpiderBowAtk (value => 0);
   setSpiderBowDef (value => 0);
   setSpiderBowLuck (value => 0);
   };
 
   const handleSpiderBowClick = event => {
   setSpiderBowIsShown (current => !SpiderBowIsShown);
   setSpiderBowActive (current => !SpiderBowActive);
   setSpiderBowAtk (value => 0);
   setSpiderBowDef (value => 0);
   setSpiderBowLuck (value => 0);
 
    setFusionCrossbowIsShown (current => false);
    setFusionCrossbowActive (current => false);
    setFusionCrossbowAtk (value => 0);
    setFusionCrossbowDef (value => 0);
    setFusionCrossbowLuck (value => 0);
    setPoePickIsShown (current => false);
    setPoePickActive (current => false);
    setPoePickAtk (value => 0);
    setPoePickDef (value => 0);
    setPoePickLuck (value => 0);
    setMountainMaceIsShown (current => false);
    setMountainMaceActive (current => false);
    setMountainMaceAtk (value => 0);
    setMountainMaceDef (value => 0);
    setMountainMaceLuck (value => 0);
    setNivaliBowIsShown (current => false);
    setNivaliBowActive (current => false);
    setNivaliBowAtk (value => 0);
    setNivaliBowDef (value => 0);
    setNivaliBowLuck (value => 0);
    setNivaliSlingshotIsShown (current => false);
    setNivaliSlingshotActive (current => false);
    setNivaliSlingshotAtk (value => 0);
    setNivaliSlingshotDef (value => 0);
    setNivaliSlingshotLuck (value => 0);
    setWoodenGardenHornIsShown (current => !WoodenGardenHornIsShown);
    setWoodenGardenHornActive (current => !WoodenGardenHornActive);
    setWoodenGardenHornAtk (value => 0);
    setWoodenGardenHornDef (value => 0);
    setWoodenGardenHornLuck (value => 0);
    setStaffOfTheDeadIsShown (current => false);
    setStaffOfTheDeadActive (current => false);
    setStaffOfTheDeadAtk (value => 0);
    setStaffOfTheDeadDef (value => 0);
    setStaffOfTheDeadLuck (value => 0);
   setTempestYoYoIsShown (current => false);
   setTempestYoYoActive (current => false);
   setTempestYoYoAtk (value => 0);
   setTempestYoYoDef (value => 0);
   setTempestYoYoLuck (value => 0);
   setSteelShieldIsShown (current => false);
   setSteelShieldActive (current => false);
   setSteelShieldAtk (value => 0);
   setSteelShieldDef (value => 0);
   setSteelShieldLuck (value => 0);
   setSteelAxeIsShown (current => false);
   setSteelAxeActive (current => false);
   setSteelAxeAtk (value => 0);
   setSteelAxeDef (value => 0);
   setSteelAxeLuck (value => 0);
   setHarpoonIsShown (current => false);
   setHarpoonActive (current => false);
   setHarpoonAtk (value => 0);
   setHarpoonDef (value => 0);
   setHarpoonLuck (value => 0);
   setStoneHammerIsShown (current => false);
   setStoneHammerActive (current => false);
   setStoneHammerAtk (value => 0);
   setStoneHammerDef (value => 0);
   setStoneHammerLuck (value => 0);
   setSteelSpearIsShown (current => false);
   setSteelSpearActive (current => false);
   setSteelSpearAtk (value => 0);
   setSteelSpearDef (value => 0);
   setSteelSpearLuck (value => 0);
   setNetIsShown (current => false);
   setNetActive (current => false);
   setNetAtk (value => 0);
   setNetDef (value => 0);
   setNetLuck (value => 0);
   setGlassStaffIsShown (current => false);
   setGlassStaffActive (current => false);
   setGlassStaffAtk (value => 0);
   setGlassStaffDef (value => 0);
   setGlassStaffLuck (value => 0);
   setCrossbowIsShown (current => false);
   setCrossbowActive (current => false);
   setCrossbowAtk (value => 0);
   setCrossbowDef (value => 0);
   setCrossbowLuck (value => 0);
   setWoodenBowIsShown (current => false);
   setWoodenBowActive (current => false);
   setWoodenBowAtk (value => 0);
   setWoodenBowDef (value => 0);
   setWoodenBowLuck (value => 0);
   setWoodHammerIsShown (current => false);
   setWoodHammerActive (current => false);
   setWoodHammerAtk (value => 0);
   setWoodHammerDef (value => 0);
   setWoodHammerLuck (value => 0);
   setVineNetIsShown (current => false);
   setVineNetActive (current => false);
   setVineNetAtk (value => 0);
   setVineNetDef (value => 0);
   setVineNetLuck (value => 0);
   setOldStaffIsShown (current => false);
   setOldStaffActive (current => false);
   setOldStaffAtk (value => 0);
   setOldStaffDef (value => 0);
   setOldStaffLuck (value => 0);
   };

const handleWoodenGardenHornNoClick = event => {
   setWoodenGardenHornIsShown (current => false);
   setWoodenGardenHornActive (current => false);
   setWoodenGardenHornAtk (value => 0);
   setWoodenGardenHornDef (value => 0);
   setWoodenGardenHornLuck (value => 0);
}

const handleStaffOfTheDeadNoClick = event => {
   setStaffOfTheDeadIsShown (current => false);
   setStaffOfTheDeadActive (current => false);
   setStaffOfTheDeadAtk (value => 0);
   setStaffOfTheDeadDef (value => 0);
   setStaffOfTheDeadLuck (value => 0);
   };

const handleTempestYoYoNoClick = event => {
  setTempestYoYoIsShown (current => false);
  setTempestYoYoActive (current => false);
  setTempestYoYoAtk (value => 0);
  setTempestYoYoDef (value => 0);
  setTempestYoYoLuck (value => 0);
  };

const handleSteelShieldNoClick = event => {
  setSteelShieldIsShown (current => false);
  setSteelShieldActive (current => false);
  setSteelShieldAtk (value => 0);
  setSteelShieldDef (value => 0);
  setSteelShieldLuck (value => 0);
  };

const handleSteelAxeNoClick = event => {
  setSteelAxeIsShown (current => false);
  setSteelAxeActive (current => false);
  setSteelAxeAtk (value => 0);
  setSteelAxeDef (value => 0);
  setSteelAxeLuck (value => 0);
  };

const handleHarpoonNoClick = event => {
  setHarpoonIsShown (current => false);
  setHarpoonActive (current => false);
  setHarpoonAtk (value => 0);
  setHarpoonDef (value => 0);
  setHarpoonLuck (value => 0);
  };

const handleStoneHammerNoClick = event => {
  setStoneHammerIsShown (current => false);
  setStoneHammerActive (current => false);
  setStoneHammerAtk (value => 0);
  setStoneHammerDef (value => 0);
  setStoneHammerLuck (value => 0);
  };

const handleSteelSpearNoClick = event => {
  setSteelSpearIsShown (current => false);
  setSteelSpearActive (current => false);
  setSteelSpearAtk (value => 0);
  setSteelSpearDef (value => 0);
  setSteelSpearLuck (value => 0);
  };

const handleNetNoClick = event => {
  setNetIsShown (current => false);
  setNetActive (current => false);
  setNetAtk (value => 0);
  setNetDef (value => 0);
  setNetLuck (value => 0);
  };

const handleGlassStaffNoClick = event => {
  setGlassStaffIsShown (current => false);
  setGlassStaffActive (current => false);
  setGlassStaffAtk (value => 0);
  setGlassStaffDef (value => 0);
  setGlassStaffLuck (value => 0);
  };

const handleCrossbowNoClick = event => {
  setCrossbowIsShown (current => false);
  setCrossbowActive (current => false);
  setCrossbowAtk (value => 0);
  setCrossbowDef (value => 0);
  setCrossbowLuck (value => 0);
  };

const handleWoodenBowNoClick = event => {
  setWoodenBowIsShown (current => false);
  setWoodenBowActive (current => false);
  setWoodenBowAtk (value => 0);
  setWoodenBowDef (value => 0);
  setWoodenBowLuck (value => 0);
  };

const handleWoodHammerNoClick = event => {
  setWoodHammerIsShown (current => false);
  setWoodHammerActive (current => false);
  setWoodHammerAtk (value => 0);
  setWoodHammerDef (value => 0);
  setWoodHammerLuck (value => 0);
  };

const handleVineNetNoClick = event => {
  setVineNetIsShown (current => false);
  setVineNetActive (current => false);
  setVineNetAtk (value => 0);
  setVineNetDef (value => 0);
  setVineNetLuck (value => 0);
  };

const handleOldStaffNoClick = event => {
  setOldStaffIsShown (current => false);
  setOldStaffActive (current => false);
  setOldStaffAtk (value => 0);
  setOldStaffDef (value => 0);
  setOldStaffLuck (value => 0);
  };

  const handleSpiderBowNoClick = event => {
  setSpiderBowIsShown (current => false);
  setSpiderBowActive (current => false);
  setSpiderBowAtk (value => 0);
  setSpiderBowDef (value => 0);
  setSpiderBowLuck (value => 0);
  };

const handlePoePickNoClick = event => {
  setPoePickIsShown (current => false);
  setPoePickActive (current => false);
  setPoePickAtk (value => 0);
  setPoePickDef (value => 0);
  setPoePickLuck (value => 0);
    };


const handleMountainMaceNoClick = event => {
  setMountainMaceIsShown (current => false);
  setMountainMaceActive (current => false);
  setMountainMaceAtk (value => 0);
  setMountainMaceDef (value => 0);
  setMountainMaceLuck (value => 0);
    };

const handleNivaliBowNoClick = event => {
  setNivaliBowIsShown (current => false);
  setNivaliBowActive (current => false);
  setNivaliBowAtk (value => 0);
  setNivaliBowDef (value => 0);
  setNivaliBowLuck (value => 0);
    }; 


const handleNivaliSlingshotNoClick = event => {
  setNivaliSlingshotIsShown (current => false);
  setNivaliSlingshotActive (current => false);
  setNivaliSlingshotAtk (value => 0);
  setNivaliSlingshotDef (value => 0);
  setNivaliSlingshotLuck (value => 0);
    };

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

//totals//

const totalAtk = Math.max (totalCompanionTopAtk + totalWeapon1TopAtk)
const totalDef = Math.max (totalCompanionTopDef + totalWeapon1TopDef)
const totalLuck = Math.max (totalCompanionTopLuck + totalWeapon1TopLuck)

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
setNoanzaIsShown (current => false);
setNoanzaActive (current => false);
setNoanzaAtk (value => 0);
setNoanzaDef (value => 0);
setNoanzaLuck (value => 0);
setLodoAtk (value => 0);
setLodoDef (value => 0);
setLodoLuck (value => 0);
setAzadiAtk (value => 0);
setAzadiDef (value => 0);
setAzadiLuck (value => 0);

setLodoIsShown (current => false)
setLodoIsShown (current => false)
setAzadiIsShown (current => false)
setAzadiIsShown (current => false)

setAlderbamAtk (value => 0);
setAlderbamDef (value => 0);
setAlderbamLuck (value => 0);
setChysisAtk (value => 0);
setChysisDef (value => 0);
setChysisLuck (value => 0);
setMundAtk (value => 0);
setMundDef (value => 0);
setMundLuck (value => 0);
setWhodiniAtk (value => 0);
setWhodiniDef (value => 0);
setWhodiniLuck (value => 0);

setAlderbamIsShown (current => false)
setAlderbamIsShown (current => false)
setChysisIsShown (current => false)
setChysisIsShown (current => false)
setMundIsShown (current => false)
setMundIsShown (current => false)
setWhodiniIsShown (current => false)
setWhodiniIsShown (current => false)

setKaiszarAtk (value => 0);
setKaiszarDef (value => 0);
setKaiszarLuck (value => 0);
setAtkKaiszarAtk (value => 0);
setAtkKaiszarDef (value => 0);
setAtkKaiszarLuck (value => 0);
setDefKaiszarAtk (value => 0);
setDefKaiszarDef (value => 0);
setDefKaiszarLuck (value => 0);
setLuckKaiszarAtk (value => 0);
setLuckKaiszarDef (value => 0);
setLuckKaiszarLuck (value => 0);
setLoksiAtk (value => 0);
setLoksiDef (value => 0);
setLoksiLuck (value => 0);
setAtkLoksiAtk (value => 0);
setAtkLoksiDef (value => 0);
setAtkLoksiLuck (value => 0);
setDefLoksiAtk (value => 0);
setDefLoksiDef (value => 0);
setDefLoksiLuck (value => 0);
setLuckLoksiAtk (value => 0);
setLuckLoksiDef (value => 0);
setLuckLoksiLuck (value => 0);
setThalamarisAtk (value => 0);
setThalamarisDef (value => 0);
setThalamarisLuck (value => 0);
setAtkThalamarisAtk (value => 0);
setAtkThalamarisDef (value => 0);
setAtkThalamarisLuck (value => 0);
setDefThalamarisAtk (value => 0);
setDefThalamarisDef (value => 0);
setDefThalamarisLuck (value => 0);
setLuckThalamarisAtk (value => 0);
setLuckThalamarisDef (value => 0);
setLuckThalamarisLuck (value => 0);
setValkosAtk (value => 0);
setValkosDef (value => 0);
setValkosLuck (value => 0);
setAtkValkosAtk (value => 0);
setAtkValkosDef (value => 0);
setAtkValkosLuck (value => 0);
setDefValkosAtk (value => 0);
setDefValkosDef (value => 0);
setDefValkosLuck (value => 0);
setLuckValkosAtk (value => 0);
setLuckValkosDef (value => 0);
setLuckValkosLuck (value => 0);
setEenrisAtk (value => 0);
setEenrisDef (value => 0);
setEenrisLuck (value => 0);
setAtkEenrisAtk (value => 0);
setAtkEenrisDef (value => 0);
setAtkEenrisLuck (value => 0);
setDefEenrisAtk (value => 0);
setDefEenrisDef (value => 0);
setDefEenrisLuck (value => 0);
setLuckEenrisAtk (value => 0);
setLuckEenrisDef (value => 0);
setLuckEenrisLuck (value => 0);
setRairaselAtk (value => 0);
setRairaselDef (value => 0);
setRairaselLuck (value => 0);
setAtkRairaselAtk (value => 0);
setAtkRairaselDef (value => 0);
setAtkRairaselLuck (value => 0);
setDefRairaselAtk (value => 0);
setDefRairaselDef (value => 0);
setDefRairaselLuck (value => 0);
setLuckRairaselAtk (value => 0);
setLuckRairaselDef (value => 0);
setLuckRairaselLuck (value => 0);

setKaiszarIsShown (current => false);
setKaiszarActive (current => false);
setAtkKaiszarIsShown (current => false);
setAtkKaiszarActive (current => false);
setDefKaiszarIsShown (current => false);
setDefKaiszarActive (current => false);
setLuckKaiszarIsShown (current => false);
setLuckKaiszarActive (current => false);
setLoksiIsShown (current => false);
setLoksiActive (current => false);
setAtkLoksiIsShown (current => false);
setAtkLoksiActive (current => false);
setDefLoksiIsShown (current => false);
setDefLoksiActive (current => false);
setLuckLoksiIsShown (current => false);
setLuckLoksiActive (current => false);
setThalamarisIsShown (current => false);
setThalamarisActive (current => false);
setAtkThalamarisIsShown (current => false);
setAtkThalamarisActive (current => false);
setDefThalamarisIsShown (current => false);
setDefThalamarisActive (current => false);
setLuckThalamarisIsShown (current => false);
setLuckThalamarisActive (current => false);
setValkosIsShown (current => false);
setValkosActive (current => false);
setAtkValkosIsShown (current => false);
setAtkValkosActive (current => false);
setDefValkosIsShown (current => false);
setDefValkosActive (current => false);
setLuckValkosIsShown (current => false);
setLuckValkosActive (current => false);
setEenrisIsShown (current => false);
setEenrisActive (current => false);
setAtkEenrisIsShown (current => false);
setAtkEenrisActive (current => false);
setDefEenrisIsShown (current => false);
setDefEenrisActive (current => false);
setLuckEenrisIsShown (current => false);
setLuckEenrisActive (current => false);
setRairaselIsShown (current => false);
setRairaselActive (current => false);
setAtkRairaselIsShown (current => false);
setAtkRairaselActive (current => false);
setDefRairaselIsShown (current => false);
setDefRairaselActive (current => false);
setLuckRairaselIsShown (current => false);
setLuckRairaselActive (current => false);
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


const GreyAtkCompanion = () => {
  if (totalCompanionTopAtk === 0)
	return(
<Image boxSize={['1rem', '1.25rem', '1.5rem']} align='center' src='https://i.imgur.com/hbcvJHt.png' />
  )
}

const ColorAtkCompanion = () => {
  if (totalCompanionTopAtk > 0)
	return(
<Image boxSize={['1rem', '1.25rem', '1.5rem']} align='center' src='https://i.imgur.com/cPrPVxc.png' />
  )
}

const GreyDefCompanion = () => {
  if (totalCompanionTopDef === 0)
	return(
<Image boxSize={['1rem', '1.25rem', '1.5rem']} align='center' src='https://i.imgur.com/6Pw8bpA.png' />
  )
}

const ColorDefCompanion = () => {
  if (totalCompanionTopDef > 0)
	return(
<Image boxSize={['1rem', '1.25rem', '1.5rem']} align='center' src='https://i.imgur.com/eXyDuR9.png' />
  )
}

const GreyLuckCompanion = () => {
  if (totalCompanionTopLuck === 0)
	return(
<Image boxSize={['1rem', '1.25rem', '1.5rem']} align='center' src='https://i.imgur.com/SsdiAg9.png' />
  )
}

const ColorLuckCompanion = () => {
  if (totalCompanionTopLuck > 0)
	return(
<Image boxSize={['1rem', '1.25rem', '1.5rem']} align='center' src='https://i.imgur.com/9e2WZyS.png' />
  )
}

const GreyAtkWeapon1 = () => {
  if (totalWeapon1TopAtk === 0)
   return(
<Image boxSize={['1rem', '1.25rem', '1.5rem']} align='center' src='https://i.imgur.com/hbcvJHt.png' />
  )
}

const ColorAtkWeapon1 = () => {
  if (totalWeapon1TopAtk > 0)
   return(
<Image boxSize={['1rem', '1.25rem', '1.5rem']} align='center' src='https://i.imgur.com/cPrPVxc.png' />
  )
}

const GreyDefWeapon1 = () => {
  if (totalWeapon1TopDef === 0)
   return(
<Image boxSize={['1rem', '1.25rem', '1.5rem']} align='center' src='https://i.imgur.com/6Pw8bpA.png' />
  )
}

const ColorDefWeapon1 = () => {
  if (totalWeapon1TopDef > 0)
   return(
<Image boxSize={['1rem', '1.25rem', '1.5rem']} align='center' src='https://i.imgur.com/eXyDuR9.png' />
  )
}

const GreyLuckWeapon1 = () => {
  if (totalWeapon1TopLuck === 0)
   return(
<Image boxSize={['1rem', '1.25rem', '1.5rem']} align='center' src='https://i.imgur.com/SsdiAg9.png' />
  )
}

const ColorLuckWeapon1 = () => {
  if (totalWeapon1TopLuck > 0)
   return(
<Image boxSize={['1rem', '1.25rem', '1.5rem']} align='center' src='https://i.imgur.com/9e2WZyS.png' />
  )
}


  return (
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" maxW='100%'>
        <Container align='center'>
            <Heading mt='-50px'>Battle Items Planner</Heading>
            <Text mt='15px'>This page shows the best builds for each battle stat, specific to your progress in the game. You can see builds possible for your region of the game or specific to the battle items you currently have.</Text>
            <Divider mt='15px' />

            <Text mt='25px' mb='8px'>What battle items do you want to see?</Text>
            <VStack>
            <Button variant='outline' onClick= {handleAllClick} style={{ backgroundColor: AllActive ? "#211742" : "transparent" }}>
              All available battle items</Button>
            <Button variant='outline' onClick= {handleOwnedClick} style={{ backgroundColor: OwnedActive ? "#211742" : "transparent" }}>
            Specific to the regions I've unlocked
              </Button>

            </VStack>

  <Accordion mt='25px' allowMultiple>
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
                <Wrap justify='center'>
            <WrapItem>
            <Button w='90px' h='60px' pb={5} onClick={handleForestRegionClick} style={{ backgroundColor: ForestRegionActive ? "#211742" : "#2D3748" }}>
          <Text fontSize='md' align='center' pt='18px'>Forest<br/>Region</Text>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='90px' h='60px' pb={5} onClick={handleDesertRegionClick} style={{ backgroundColor: DesertRegionActive ? "#211742" : "#2D3748" }}>
        <Text fontSize='md' align='center' pt='18px'>Desert<br/>Region</Text>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='90px' h='60px' pb={5} onClick={handleWaterRegionClick} style={{ backgroundColor: WaterRegionActive ? "#211742" : "#2D3748" }}>
        <Text fontSize='md' align='center' pt='18px'>Water<br/>Region</Text>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='90px' h='60px' pb={5} onClick={handleDustRegionClick} style={{ backgroundColor: DustRegionActive ? "#211742" : "#2D3748" }}>
        <Text fontSize='md' align='center' pt='18px'>Dust<br/>Region</Text>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='90px' h='60px' pb={5} onClick={handleLightRegionClick} style={{ backgroundColor: LightRegionActive ? "#211742" : "#2D3748" }}>
        <Text fontSize='md' align='center' pt='18px'>Light<br/>Region</Text>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='90px' h='60px' pb={5} onClick={handleWorld2RegionClick} style={{ backgroundColor: World2RegionActive ? "#211742" : "#2D3748" }}>
        <Text fontSize='md' align='center' pt='18px'>World 2</Text>
            </Button>
            </WrapItem>

          </Wrap>

{ForestRegionIsShown &&
          <Text fontSize='md' mt='25px' mb='15px'><b>Your furthest main location:</b></Text>
          }
{ForestRegionIsShown &&
          <Wrap justify='center'>
          <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleLuciolaForestClick} style={{ backgroundColor: LuciolaForestActive ? "#211742" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/2a/Medalluciola_sm.png/'
      /> <Text fontSize='sm' align='center'>Luciola Forest</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleMamaTreeClick} style={{ backgroundColor: MamaTreeActive ? "#211742" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/8d/Medalmamatree_sm.png'
      /> <Text fontSize='sm' align='center'>Mama Tree</Text>
      </VStack>
            </Button>
            </WrapItem>
          </Wrap>}     

{WaterRegionIsShown &&
          <Text fontSize='md' mt='25px' mb='15px'><b>Your furthest main location:</b></Text>
        }
{WaterRegionIsShown &&
          <Wrap justify='center'>
            <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleRizaRivertownClick} style={{ backgroundColor: RizaRivertownActive ? "#211742" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/c/cb/Medalrisa_md.png/'
      /> <Text fontSize='sm' align='center'>Riza<br/>Rivertown</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleFloatingCityClick} style={{ backgroundColor: FloatingCityActive ? "#211742" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b5/Medalbalance_md.png/'
      /> <Text fontSize='sm' align='center'>Floating City<br />of Balance</Text>
      </VStack>
            </Button>
            </WrapItem>
          </Wrap>}          

          {LightRegionIsShown &&
          <Text fontSize='md' mt='25px' mb='15px'><b>Your furthest main location:</b></Text>
        }
{LightRegionIsShown &&
          <Wrap justify='center'>
            <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleEarlyCoLClick} style={{ backgroundColor: EarlyCoLActive ? "#211742" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/98/CityOfLightIcon.png/'
      /> <Text fontSize='sm' align='center'>Early CoL</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleLateCoLClick} style={{ backgroundColor: LateCoLActive ? "#211742" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/3/31/You_want_what.png/'
      /> <Text fontSize='sm' align='center'>Mid-CoL</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleDCClick} style={{ backgroundColor: DCActive ? "#211742" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/86/Dusted_Castle.png/'
      /> <Text fontSize='sm' align='center'>Dusted Castle</Text>
      </VStack>
            </Button>
            </WrapItem>
            
          </Wrap>}

{LuciolaForestIsShown &&
          <Text fontSize='md' mt='25px' mb='15px'><b>Your unlocked side locations:</b></Text>
          }

{LuciolaForestIsShown &&
          <Wrap justify='center'>
          <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleAurilisClick} style={{ backgroundColor: AurilisActive ? "#211742" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a9/AssemblyHallIcon.png/'
      /> <Text fontSize='sm' align='center'>Aurilis Magic<br/> Academy</Text>
      </VStack>
            </Button>
            </WrapItem>
          </Wrap>}
          
{MamaTreeIsShown &&
          <Text fontSize='md' mt='25px' mb='15px'><b>Your unlocked side locations:</b></Text>
          }

{MamaTreeIsShown &&
          <Wrap justify='center'>
          <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleAurilisClick} style={{ backgroundColor: AurilisActive ? "#211742" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a9/AssemblyHallIcon.png/'
      /> <Text fontSize='sm' align='center'>Aurilis Magic<br/> Academy</Text>
      </VStack>
            </Button>
            </WrapItem>
          <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleElderLibraryClick} style={{ backgroundColor: ElderLibraryActive ? "#211742" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e2/Icon_elder-library.png/'
      /> <Text fontSize='sm' align='center'>Elder Library</Text>
      </VStack>
            </Button>
            </WrapItem>
          </Wrap>}      

{DesertRegionIsShown &&
          <Text fontSize='md' mt='25px' mb='15px'><b>Your unlocked side locations:</b></Text>
          }
{DesertRegionIsShown &&
          <Wrap justify='center'>
            {!DesertRegionAllSideRegionsIsShown &&
          <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleDesertRegionAllSideRegionsClick} style={{ backgroundColor: DesertRegionAllSideRegionsActive ? "#2D3748" : "#2D3748" }}>
            <Text fontSize='md' mt='35px' mb='15px'><b>Select All</b></Text>
            </Button>
            </WrapItem>}
            {DesertRegionAllSideRegionsIsShown && 
          <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleDesertRegionNoneSideRegionsClick} style={{ backgroundColor: DesertRegionNoneSideRegionsActive ? "#211742" : "#2D3748" }}>
            <Text fontSize='md' mt='35px' mb='15px'><b>Unselect<br/>All</b></Text>
            </Button>
            </WrapItem>}
            <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleAurilisClick} style={{ backgroundColor: AurilisActive ? "#211742" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a9/AssemblyHallIcon.png/'
      /> <Text fontSize='sm' align='center'>Aurilis Magic<br/> Academy</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleElderLibraryClick} style={{ backgroundColor: ElderLibraryActive ? "#211742" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e2/Icon_elder-library.png/'
      /> <Text fontSize='sm' align='center'>Elder Library</Text>
      </VStack>
            </Button>
            </WrapItem>
          <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleDragonLairClick} style={{ backgroundColor: DragonLairActive ? "#211742" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/dd/Dragon_Lair_Icon.png/'
      /> <Text fontSize='sm' align='center'>Dragon Lair</Text>
      </VStack>
            </Button>
            </WrapItem>
          </Wrap>}

{RizaRivertownIsShown &&
          <Text fontSize='md' mt='25px' mb='15px'><b>Your unlocked side locations:</b></Text>
          }
{RizaRivertownIsShown &&
          <Wrap justify='center'>
           {!RizaRivertownAllSideRegionsIsShown &&
          <WrapItem>
        <Button w='90px' h='110px' pb={5} onClick={handleRizaRivertownAllSideRegionsClick} style={{ backgroundColor: RizaRivertownAllSideRegionsActive ? "#2D3748" : "#2D3748" }}>
        <Text fontSize='md' mt='35px' mb='15px'><b>Select All</b></Text>
            </Button>
            </WrapItem>}
          {RizaRivertownAllSideRegionsIsShown &&
            <WrapItem>
        <Button w='90px' h='110px' pb={5} onClick={handleRizaRivertownNoneSideRegionsClick} style={{ backgroundColor: RizaRivertownAllSideRegionsActive ? "#2D3748" : "#2D3748" }}>
        <Text fontSize='md' mt='35px' mb='15px'><b>Unselect<br/>all</b></Text>
            </Button>
            </WrapItem>}
          <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleAurilisClick} style={{ backgroundColor: AurilisActive ? "#211742" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a9/AssemblyHallIcon.png/'
      /> <Text fontSize='sm' align='center'>Aurilis Magic<br/> Academy</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleElderLibraryClick} style={{ backgroundColor: ElderLibraryActive ? "#211742" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e2/Icon_elder-library.png/'
      /> <Text fontSize='sm' align='center'>Elder Library</Text>
      </VStack>
            </Button>
            </WrapItem>
          <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleDragonLairClick} style={{ backgroundColor: DragonLairActive ? "#211742" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/dd/Dragon_Lair_Icon.png/'
      /> <Text fontSize='sm' align='center'>Dragon Lair</Text>
      </VStack>
            </Button>
            </WrapItem>
          <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleRainaClick} style={{ backgroundColor: RainaActive ? "#211742" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/22/Raina-surface-camp.png/'
      /> <Text fontSize='sm' align='center'>Raina<br/>Surface Camp</Text>
      </VStack>
            </Button>
            </WrapItem>
          </Wrap>}

{FloatingCityIsShown &&
          <Text fontSize='md' mt='25px' mb='15px'><b>Your unlocked side locations:</b></Text>
          }
{FloatingCityIsShown &&
          <Wrap justify='center'>
          {!WaterRegionAllSideRegionsIsShown &&
          <WrapItem>
        <Button w='90px' h='110px' pb={5} onClick={handleWaterRegionAllSideRegionsClick} style={{ backgroundColor: WaterRegionAllSideRegionsActive ? "#2D3748" : "#2D3748" }}>
        <Text fontSize='md' mt='35px' mb='15px'><b>Select All</b></Text>
            </Button>
            </WrapItem>}
          {WaterRegionAllSideRegionsIsShown &&
            <WrapItem>
        <Button w='90px' h='110px' pb={5} onClick={handleWaterRegionNoneSideRegionsClick} style={{ backgroundColor: WaterRegionAllSideRegionsActive ? "#2D3748" : "#2D3748" }}>
        <Text fontSize='md' mt='35px' mb='15px'><b>Unselect<br/>all</b></Text>

            </Button>
            </WrapItem>}
          <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleAurilisClick} style={{ backgroundColor: AurilisActive ? "#211742" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a9/AssemblyHallIcon.png/'
      /> <Text fontSize='sm' align='center'>Aurilis Magic<br/> Academy</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleElderLibraryClick} style={{ backgroundColor: ElderLibraryActive ? "#211742" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e2/Icon_elder-library.png/'
      /> <Text fontSize='sm' align='center'>Elder Library</Text>
      </VStack>
            </Button>
            </WrapItem>
          <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleDragonLairClick} style={{ backgroundColor: DragonLairActive ? "#211742" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/dd/Dragon_Lair_Icon.png/'
      /> <Text fontSize='sm' align='center'>Dragon Lair</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleRainaClick} style={{ backgroundColor: RainaActive ? "#211742" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/22/Raina-surface-camp.png/'
      /> <Text fontSize='sm' align='center'>Raina<br/>Surface Camp</Text>
      </VStack>
            </Button>
            </WrapItem>
          <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleCloudsClick} style={{ backgroundColor: CloudsActive ? "#211742" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/44/Icon_bg_clouds.png/'
      /> <Text fontSize='sm' align='center'>Clouds</Text>
      </VStack>
            </Button>
            </WrapItem>
          <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleDawnClick} style={{ backgroundColor: DawnActive ? "#211742" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5d/Icon_bg_dawn.png/'
      /> <Text fontSize='sm' align='center'>Dawn</Text>
      </VStack>
            </Button>
            </WrapItem>
          <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleTempestClick} style={{ backgroundColor: TempestActive ? "#211742" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/4c/Icon_bg_tempest.png/'
      /> <Text fontSize='sm' align='center'>Tempest</Text>
      </VStack>
            </Button>
            </WrapItem>
          </Wrap>}

{(DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) &&
          <Text fontSize='md' mt='25px' mb='15px'><b>Your unlocked side locations:</b></Text>
          }
{(DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) &&
          <Wrap justify='center'>
          <WrapItem>
  {!DustRegionAllSideRegionsIsShown &&
            <Button w='90px' h='110px' pb={5} onClick={handleDustRegionAllSideRegionsClick} style={{ backgroundColor: DustRegionAllSideRegionsActive ? "#2D3748" : "#2D3748" }}>
        <Text fontSize='md' mt='35px' mb='15px'><b>Select All</b></Text>
            </Button>}
  {DustRegionAllSideRegionsIsShown &&
            <Button w='90px' h='110px' pb={5} onClick={handleDustRegionNoneSideRegionsClick} style={{ backgroundColor: DustRegionAllSideRegionsActive ? "#2D3748" : "#2D3748" }}>
        <Text fontSize='md' mt='35px' mb='15px'><b>Unselect<br/>all</b></Text>

            </Button>}
            </WrapItem>
          <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleAurilisClick} style={{ backgroundColor: AurilisActive ? "#211742" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a9/AssemblyHallIcon.png/'
      /> <Text fontSize='sm' align='center'>Aurilis Magic<br/> Academy</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleElderLibraryClick} style={{ backgroundColor: ElderLibraryActive ? "#211742" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e2/Icon_elder-library.png/'
      /> <Text fontSize='sm' align='center'>Elder Library</Text>
      </VStack>
            </Button>
            </WrapItem>
          <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleDragonLairClick} style={{ backgroundColor: DragonLairActive ? "#211742" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/dd/Dragon_Lair_Icon.png/'
      /> <Text fontSize='sm' align='center'>Dragon Lair</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleRainaClick} style={{ backgroundColor: RainaActive ? "#211742" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/22/Raina-surface-camp.png/'
      /> <Text fontSize='sm' align='center'>Raina<br/>Surface Camp</Text>
      </VStack>
            </Button>
            </WrapItem>
          <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleCloudsClick} style={{ backgroundColor: CloudsActive ? "#211742" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/44/Icon_bg_clouds.png/'
      /> <Text fontSize='sm' align='center'>Clouds</Text>
      </VStack>
            </Button>
            </WrapItem>
          <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleDawnClick} style={{ backgroundColor: DawnActive ? "#211742" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5d/Icon_bg_dawn.png/'
      /> <Text fontSize='sm' align='center'>Dawn</Text>
      </VStack>
            </Button>
            </WrapItem>
          <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleTempestClick} style={{ backgroundColor: TempestActive ? "#211742" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/4c/Icon_bg_tempest.png/'
      /> <Text fontSize='sm' align='center'>Tempest</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleGardenClick} style={{ backgroundColor: GardenActive ? "#211742" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/7c/HealedGardenIcon.png'
      /> <Text fontSize='sm' align='center'>Caretaker's<br/>Garden</Text>
      </VStack>
            </Button>
            </WrapItem>
          </Wrap>}


          </Box>
      <br></br>
    </AccordionPanel>
  </AccordionItem>
     </Accordion>

<Wrap mt='45px' justify='center'>

  <WrapItem>
    <Box w={[150, 170, 190]} h={[170, 200, 220]} borderRadius='10%' style={{backgroundColor: "#191E27", borderColor: '#20293A', borderWidth: '2px'}}>
      <VStack>
        <Text fontSize={['md', 'lg', 'lg']} mt={['4px', '6px', '8px']}>
          <b>Weapon 1</b>
        </Text>
        {!WoodSwordIsShown && !WoodSpearIsShown && !SteelSwordIsShown && !SteelMaceIsShown && !SteelDaggerIsShown &&
  !SpellfireSwordIsShown && !RainaSwordIsShown && !OozeSwordIsShown && !NiftraSwordIsShown && !MercurialSwordIsShown &&
  !LeafsungWoodenSwordIsShown && !KingMaiSwordIsShown && !GlassScimitarIsShown && !FusionSwordIsShown && 
  !FlowerSlingshotIsShown && !DragonTailSwordIsShown && !DragonClawHookIsShown && !DawnSwordIsShown && 
  !DarkForestSwordOldIsShown && !DarkForestSwordIsShown &&
          <Image
        style={{position:'absolute'}}
        mt={['37px', '47px', '55px']}
        align='center' 
        boxSize={['4rem', '4.5rem', '5rem']}
        src='https://i.imgur.com/5FfZ6Yl.png'
      />}
        {!WoodSwordIsShown && !WoodSpearIsShown && !SteelSwordIsShown && !SteelMaceIsShown && !SteelDaggerIsShown &&
  !SpellfireSwordIsShown && !RainaSwordIsShown && !OozeSwordIsShown && !NiftraSwordIsShown && !MercurialSwordIsShown &&
  !LeafsungWoodenSwordIsShown && !KingMaiSwordIsShown && !GlassScimitarIsShown && !FusionSwordIsShown && 
  !FlowerSlingshotIsShown && !DragonTailSwordIsShown && !DragonClawHookIsShown && !DawnSwordIsShown && 
  !DarkForestSwordOldIsShown && !DarkForestSwordIsShown &&
        <Text        
        style={{position:'absolute'}}
        mt={['110px', '130px', '145px']}
        fontSize={['sm', 'md', 'md']}>
          No item</Text>}

          {WoodSwordIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://static.wikia.nocookie.net/4thewords/images/7/7b/Woodsword_md.png/'
   />}
   {WoodSwordIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Wood Sword</Text>
     }

{WoodSpearIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://static.wikia.nocookie.net/4thewords/images/a/ac/Woodspear_md.png/'
   />}
   {WoodSpearIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Wood Spear</Text>
     }

{SteelSwordIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://static.wikia.nocookie.net/4thewords/images/1/10/Steelsword_md.png/'
   />}
   {SteelSwordIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Steel Sword</Text>
     }

{SteelMaceIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://static.wikia.nocookie.net/4thewords/images/8/85/Steelmace_md.png/'
 />}
   {SteelMaceIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Steel Mace</Text>
     }

{SteelDaggerIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://static.wikia.nocookie.net/4thewords/images/a/ac/Steeldagger_md.png/'
   />}
   {SteelDaggerIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Steel Dagger</Text>
     }

{SpellfireSwordIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://static.wikia.nocookie.net/4thewords/images/d/da/Spellfire_Sword.png/'
 />}
   {SpellfireSwordIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Spellfire Sword</Text>
     }

{RainaSwordIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://static.wikia.nocookie.net/4thewords/images/7/72/Raina_sword.png/'
   />}
   {RainaSwordIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Raina Sword</Text>
     }

{OozeSwordIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://static.wikia.nocookie.net/4thewords/images/8/88/Ooze-sword.png'
   />}
   {OozeSwordIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Ooze Sword</Text>
     }

{NiftraSwordIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://static.wikia.nocookie.net/4thewords/images/8/8e/Niftras-sword.png/'
 />}
   {NiftraSwordIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Niftra's Sword</Text>
     }

{MercurialSwordIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://static.wikia.nocookie.net/4thewords/images/d/d7/MercurialSword.png'
   />}
   {MercurialSwordIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Mercurial Sword</Text>
     }

{LeafsungWoodenSwordIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://static.wikia.nocookie.net/4thewords/images/2/20/Leafsungwoodensword_md.png/'
   />}
   {LeafsungWoodenSwordIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Leafsung Sword</Text>
     }

{KingMaiSwordIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://static.wikia.nocookie.net/4thewords/images/7/7c/KingMaiSword.png/'
   />}
   {KingMaiSwordIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     King Mai's Sword</Text>
     }

{GlassScimitarIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://static.wikia.nocookie.net/4thewords/images/e/e2/Glassscimitar_md.png/'
   />}
   {GlassScimitarIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Glass Scimitar</Text>
     }

{FusionSwordIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://static.wikia.nocookie.net/4thewords/images/c/c6/FusionSword.png'
   />}
   {FusionSwordIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Fusion Sword</Text>
     }

{FlowerSlingshotIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://static.wikia.nocookie.net/4thewords/images/b/b6/FlowerSlingshot.png/'
   />}
   {FlowerSlingshotIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Flower Slingshot</Text>
     }

{DragonTailSwordIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://static.wikia.nocookie.net/4thewords/images/7/78/DragonsTailSword.png/'
   />}
   {DragonTailSwordIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Dragon's Tail Sword</Text>
     }

{DragonClawHookIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://static.wikia.nocookie.net/4thewords/images/3/32/DragonsClawHook.png/'
   />}
   {DragonClawHookIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Dragon's Claw Hook</Text>
     }

{DawnSwordIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://static.wikia.nocookie.net/4thewords/images/3/37/Dawn-sword.png'
   />}
   {DawnSwordIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Dawn Sword</Text>
     }

{DarkForestSwordOldIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://static.wikia.nocookie.net/4thewords/images/b/bf/DarkForestSword.png/'
   />}
   {DarkForestSwordOldIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Dark Forest Sword</Text>
     }

{DarkForestSwordIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://static.wikia.nocookie.net/4thewords/images/8/87/Dark_forest_sword.png/'
   />}
   {DarkForestSwordIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Dark Forest Sword</Text>
     }

 <HStack
 style={{position:'absolute'}}
 mt={['135px', '160px', '175px']}
 >
 <span>
   <GreyAtkWeapon1 />
   <ColorAtkWeapon1 />
   </span>
   <span>
   <Text ml='-7px' fontSize='md'>+{totalWeapon1TopAtk}</Text>
 </span>
 <span>
 <GreyDefWeapon1 />
 <ColorDefWeapon1 />
 </span>
   <span>
   <Text ml='-7px' fontSize='md'>+{totalWeapon1TopDef}</Text>
 </span>
 <span>
 <GreyLuckWeapon1 />
 <ColorLuckWeapon1 />
 </span>
   <span>
   <Text ml='-7px' fontSize='md'>+{totalWeapon1TopLuck}</Text>
 </span>
 </HStack>

      </VStack>
    </Box>
  </WrapItem>

  <WrapItem>
    <Box w={[150, 170, 190]} h={[170, 200, 220]} borderRadius='10%' style={{backgroundColor: "#191E27", borderColor: '#20293A', borderWidth: '2px'}}>
      <VStack>
        <Text fontSize={['md', 'lg', 'lg']} mt={['4px', '6px', '8px']}>
          <b>Weapon 2</b>
        </Text>
        <Image
        style={{position:'absolute'}}
        mt={['37px', '47px', '55px']}
        align='center' 
        boxSize={['4rem', '4.5rem', '5rem']}
        src='https://i.imgur.com/E5GuYRW.png'
      />
        <Text        
        style={{position:'absolute'}}
        mt={['110px', '130px', '145px']}
        fontSize={['sm', 'md', 'md']}>
          No item</Text>
        <HStack
        style={{position:'absolute'}}
        mt={['135px', '160px', '175px']}
        >
        <span>
          <Image boxSize={['1rem', '1.25rem', '1.5rem']} align='center' src='https://i.imgur.com/hbcvJHt.png' /></span>
          <span>
          <Text ml='-7px' fontSize='md'>+0</Text>
        </span>
        <span>
          <Image boxSize={['1rem', '1.25rem', '1.5rem']} align='center' src='https://i.imgur.com/6Pw8bpA.png' /></span>
          <span>
          <Text ml='-7px' fontSize='md'>+0</Text>
        </span>
        <span>
          <Image boxSize={['1rem', '1.25rem', '1.5rem']} align='center' src='https://i.imgur.com/SsdiAg9.png' /></span>
          <span>
          <Text ml='-7px' fontSize='md'>+0</Text>
        </span>
        </HStack>
      </VStack>
    </Box>
  </WrapItem>

  <WrapItem>
    <Box w={[150, 170, 190]} h={[170, 200, 220]} borderRadius='10%' style={{backgroundColor: "#191E27", borderColor: '#20293A', borderWidth: '2px'}}>
      <VStack>
        <Text fontSize={['md', 'lg', 'lg']} mt={['4px', '6px', '8px']}>
          <b>Accessory</b>
        </Text>
        <Image
        style={{position:'absolute'}}
        mt={['37px', '47px', '55px']}
        align='center' 
        boxSize={['4rem', '4.5rem', '5rem']}
        src='https://i.imgur.com/6J2IXDf.png'
      />
        <Text        
        style={{position:'absolute'}}
        mt={['110px', '130px', '145px']}
        fontSize={['sm', 'md', 'md']}>
          No item</Text>
        <HStack
        style={{position:'absolute'}}
        mt={['135px', '160px', '175px']}
        >
        <span>
          <Image boxSize={['1rem', '1.25rem', '1.5rem']} align='center' src='https://i.imgur.com/hbcvJHt.png' /></span>
          <span>
          <Text ml='-7px' fontSize='md'>+0</Text>
        </span>
        <span>
          <Image boxSize={['1rem', '1.25rem', '1.5rem']} align='center' src='https://i.imgur.com/6Pw8bpA.png' /></span>
          <span>
          <Text ml='-7px' fontSize='md'>+0</Text>
        </span>
        <span>
          <Image boxSize={['1rem', '1.25rem', '1.5rem']} align='center' src='https://i.imgur.com/SsdiAg9.png' /></span>
          <span>
          <Text ml='-7px' fontSize='md'>+0</Text>
        </span>
        </HStack>
      </VStack>
    </Box>
  </WrapItem>

  <WrapItem>
    <Box w={[150, 170, 190]} h={[170, 200, 220]} borderRadius='10%' style={{backgroundColor: "#191E27", borderColor: '#20293A', borderWidth: '2px'}}>
      <VStack>
        <Text fontSize={['md', 'lg', 'lg']} mt={['4px', '6px', '8px']}>
          <b>Head</b>
        </Text>
        <Image
        style={{position:'absolute'}}
        mt={['37px', '47px', '55px']}
        align='center' 
        boxSize={['4rem', '4.5rem', '5rem']}
        src='https://i.imgur.com/T9o4YqE.png'
      />
        <Text        
        style={{position:'absolute'}}
        mt={['110px', '130px', '145px']}
        fontSize={['sm', 'md', 'md']}>
          No item</Text>
        <HStack
        style={{position:'absolute'}}
        mt={['135px', '160px', '175px']}
        >
        <span>
          <Image boxSize={['1rem', '1.25rem', '1.5rem']} align='center' src='https://i.imgur.com/hbcvJHt.png' /></span>
          <span>
          <Text ml='-7px' fontSize='md'>+0</Text>
        </span>
        <span>
          <Image boxSize={['1rem', '1.25rem', '1.5rem']} align='center' src='https://i.imgur.com/6Pw8bpA.png' /></span>
          <span>
          <Text ml='-7px' fontSize='md'>+0</Text>
        </span>
        <span>
          <Image boxSize={['1rem', '1.25rem', '1.5rem']} align='center' src='https://i.imgur.com/SsdiAg9.png' /></span>
          <span>
          <Text ml='-7px' fontSize='md'>+0</Text>
        </span>
        </HStack>
      </VStack>
    </Box>
  </WrapItem>

  <WrapItem>
    <Box w={[150, 170, 190]} h={[170, 200, 220]} borderRadius='10%' style={{backgroundColor: "#191E27", borderColor: '#20293A', borderWidth: '2px'}}>
      <VStack>
        <Text fontSize={['md', 'lg', 'lg']} mt={['4px', '6px', '8px']}>
          <b>Chest</b>
        </Text>
        <Image
        style={{position:'absolute'}}
        mt={['37px', '47px', '55px']}
        align='center' 
        boxSize={['4rem', '4.5rem', '5rem']}
        src='https://i.imgur.com/yQLgdcB.png'
      />
        <Text        
        style={{position:'absolute'}}
        mt={['110px', '130px', '145px']}
        fontSize={['sm', 'md', 'md']}>
          No item</Text>
        <HStack
        style={{position:'absolute'}}
        mt={['135px', '160px', '175px']}
        >
        <span>
          <Image boxSize={['1rem', '1.25rem', '1.5rem']} align='center' src='https://i.imgur.com/hbcvJHt.png' /></span>
          <span>
          <Text ml='-7px' fontSize='md'>+0</Text>
        </span>
        <span>
          <Image boxSize={['1rem', '1.25rem', '1.5rem']} align='center' src='https://i.imgur.com/6Pw8bpA.png' /></span>
          <span>
          <Text ml='-7px' fontSize='md'>+0</Text>
        </span>
        <span>
          <Image boxSize={['1rem', '1.25rem', '1.5rem']} align='center' src='https://i.imgur.com/SsdiAg9.png' /></span>
          <span>
          <Text ml='-7px' fontSize='md'>+0</Text>
        </span>
        </HStack>
      </VStack>
    </Box>
  </WrapItem>

  <WrapItem>
    <Box w={[150, 170, 190]} h={[170, 200, 220]} borderRadius='10%' style={{backgroundColor: "#191E27", borderColor: '#20293A', borderWidth: '2px'}}>
      <VStack>
        <Text fontSize={['md', 'lg', 'lg']} mt={['4px', '6px', '8px']}>
          <b>Feet</b>
        </Text>
        <Image
        style={{position:'absolute'}}
        mt={['37px', '47px', '55px']}
        align='center' 
        boxSize={['4rem', '4.5rem', '5rem']}
        src='https://i.imgur.com/qMNT5k8.png'
      />
        <Text        
        style={{position:'absolute'}}
        mt={['110px', '130px', '145px']}
        fontSize={['sm', 'md', 'md']}>
          No item</Text>
        <HStack
        style={{position:'absolute'}}
        mt={['135px', '160px', '175px']}
        >
        <span>
          <Image boxSize={['1rem', '1.25rem', '1.5rem']} align='center' src='https://i.imgur.com/hbcvJHt.png' /></span>
          <span>
          <Text ml='-7px' fontSize='md'>+0</Text>
        </span>
        <span>
          <Image boxSize={['1rem', '1.25rem', '1.5rem']} align='center' src='https://i.imgur.com/6Pw8bpA.png' /></span>
          <span>
          <Text ml='-7px' fontSize='md'>+0</Text>
        </span>
        <span>
          <Image boxSize={['1rem', '1.25rem', '1.5rem']} align='center' src='https://i.imgur.com/SsdiAg9.png' /></span>
          <span>
          <Text ml='-7px' fontSize='md'>+0</Text>
        </span>
        </HStack>
      </VStack>
    </Box>
  </WrapItem>


  </Wrap>
  <Wrap pt='8px' justify='center'>
  <WrapItem>
    <Box w={[150, 170, 190]} h={[170, 200, 220]} borderRadius='10%' style={{backgroundColor: "#191E27", borderColor: '#20293A', borderWidth: '2px'}}>
      <VStack>
        <Text fontSize={['md', 'lg', 'lg']} mt={['4px', '6px', '8px']}>
          <b>Companion</b>
        </Text>


        {(!SuwoIsShown && !AzadiIsShown && !LodoIsShown && !NoanzaIsShown && 
  !KaiszarIsShown && !LoksiIsShown && !ThalamarisIsShown && !ValkosIsShown && !EenrisIsShown && !RairaselIsShown && 
  !AtkKaiszarIsShown && !AtkLoksiIsShown && !AtkThalamarisIsShown && !AtkValkosIsShown && !AtkEenrisIsShown && !AtkRairaselIsShown && 
  !DefKaiszarIsShown && !DefLoksiIsShown && !DefThalamarisIsShown && !DefValkosIsShown && !DefEenrisIsShown && !DefRairaselIsShown && 
  !LuckKaiszarIsShown && !LuckLoksiIsShown && !LuckThalamarisIsShown && !LuckValkosIsShown && !LuckEenrisIsShown && !LuckRairaselIsShown 
  && !AlderbamIsShown && !ChysisIsShown && !MundIsShown && !WhodiniIsShown) &&        
        <Image
        style={{position:'absolute'}}
        mt={['37px', '47px', '55px']}
        align='center' 
        boxSize={['4rem', '4.5rem', '5rem']}
        src='https://i.imgur.com/gR84XcP.png'
      />}
    {(!SuwoIsShown && !AzadiIsShown && !LodoIsShown && !NoanzaIsShown && 
  !KaiszarIsShown && !LoksiIsShown && !ThalamarisIsShown && !ValkosIsShown && !EenrisIsShown && !RairaselIsShown && 
  !AtkKaiszarIsShown && !AtkLoksiIsShown && !AtkThalamarisIsShown && !AtkValkosIsShown && !AtkEenrisIsShown && !AtkRairaselIsShown && 
  !DefKaiszarIsShown && !DefLoksiIsShown && !DefThalamarisIsShown && !DefValkosIsShown && !DefEenrisIsShown && !DefRairaselIsShown && 
  !LuckKaiszarIsShown && !LuckLoksiIsShown && !LuckThalamarisIsShown && !LuckValkosIsShown && !LuckEenrisIsShown && !LuckRairaselIsShown 
  && !AlderbamIsShown && !ChysisIsShown && !MundIsShown && !WhodiniIsShown) &&        
        <Text        
        style={{position:'absolute'}}
        mt={['110px', '130px', '145px']}
        fontSize={['sm', 'md', 'md']}>
          No item</Text>
          }

        {NoanzaIsShown &&        
        <Image
        style={{position:'absolute'}}
        mt={['37px', '47px', '55px']}
        align='center' 
        boxSize={['4rem', '4.5rem', '5rem']}
        src='https://static.wikia.nocookie.net/4thewords/images/d/df/Noanza.png/'
      />}
        {NoanzaIsShown &&        
        <Text        
        style={{position:'absolute'}}
        mt={['110px', '130px', '145px']}
        fontSize={['sm', 'md', 'md']}>
          Noanza</Text>
          }
        {LodoIsShown &&        
        <Image
        style={{position:'absolute'}}
        mt={['37px', '47px', '55px']}
        align='center' 
        boxSize={['4rem', '4.5rem', '5rem']}
        src='https://static.wikia.nocookie.net/4thewords/images/e/e6/Lodo.png/'
      />}
        {LodoIsShown &&        
        <Text        
        style={{position:'absolute'}}
        mt={['110px', '130px', '145px']}
        fontSize={['sm', 'md', 'md']}>
          Lodo</Text>
          }
        {AzadiIsShown &&        
        <Image
        style={{position:'absolute'}}
        mt={['37px', '47px', '55px']}
        align='center' 
        boxSize={['4rem', '4.5rem', '5rem']}
        src='https://static.wikia.nocookie.net/4thewords/images/a/a8/Azadi.png/'
      />}
        {AzadiIsShown &&        
        <Text        
        style={{position:'absolute'}}
        mt={['110px', '130px', '145px']}
        fontSize={['sm', 'md', 'md']}>
          Azadi</Text>
          }
        {SuwoIsShown &&        
        <Image
        style={{position:'absolute'}}
        mt={['37px', '47px', '55px']}
        align='center' 
        boxSize={['4rem', '4.5rem', '5rem']}
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/Suwo.png/'
      />}
        {SuwoIsShown &&        
        <Text        
        style={{position:'absolute'}}
        mt={['110px', '130px', '145px']}
        fontSize={['sm', 'md', 'md']}>
          Suwo</Text>
          }

{KaiszarIsShown &&   !AtkKaiszarIsShown && !DefKaiszarIsShown && !LuckKaiszarIsShown &&  
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://static.wikia.nocookie.net/4thewords/images/f/fa/Kaiszar.png/'
 />}
   {KaiszarIsShown &&   !AtkKaiszarIsShown && !DefKaiszarIsShown && !LuckKaiszarIsShown &&  
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Kaiszar</Text>
     }

{AtkKaiszarIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://i.imgur.com/gbuo4mt.png'
 />}
   {AtkKaiszarIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Attack Kaiszar</Text>
     }
     
{DefKaiszarIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://i.imgur.com/LGazi9x.png'
 />}
   {DefKaiszarIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Defense Kaiszar</Text>
     }

{LuckKaiszarIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://i.imgur.com/gbpdG0f.png'
 />}
   {LuckKaiszarIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Luck Kaiszar</Text>
     }

{LoksiIsShown &&  !AtkLoksiIsShown && !DefLoksiIsShown && !LuckLoksiIsShown &&         
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://static.wikia.nocookie.net/4thewords/images/7/75/Loksi.png'
 />}
   {LoksiIsShown &&   !AtkLoksiIsShown && !DefLoksiIsShown && !LuckLoksiIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Loksi</Text>
     }

{AtkLoksiIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://i.imgur.com/Zb1N51B.png'
 />}
   {AtkLoksiIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Attack Loksi</Text>
     }
     
{DefLoksiIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://i.imgur.com/zGo6cCD.png'
 />}
   {DefLoksiIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Defense Loksi</Text>
     }

{LuckLoksiIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://i.imgur.com/bgb1J58.png'
 />}
   {LuckLoksiIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Luck Loksi</Text>
     }

{ThalamarisIsShown &&  !AtkThalamarisIsShown && !DefThalamarisIsShown && !LuckThalamarisIsShown &&  
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://static.wikia.nocookie.net/4thewords/images/4/4a/Thalamaris.png/'
 />}
   {ThalamarisIsShown &&  !AtkThalamarisIsShown && !DefThalamarisIsShown && !LuckThalamarisIsShown &&  
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Thalamaris</Text>
     }

{AtkThalamarisIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://i.imgur.com/fe9fXNc.png'
 />}
   {AtkThalamarisIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Attack Thalamaris</Text>
     }
     
{DefThalamarisIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://i.imgur.com/1G7xegk.png'
 />}
   {DefThalamarisIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Defense Thalamaris</Text>
     }

{LuckThalamarisIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://i.imgur.com/VpveKDD.png'
 />}
   {LuckThalamarisIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Luck Thalamaris</Text>
     }

{ValkosIsShown &&  !AtkValkosIsShown && !DefValkosIsShown && !LuckValkosIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://static.wikia.nocookie.net/4thewords/images/6/63/Valkos.png'
 />}
   {ValkosIsShown && !AtkValkosIsShown && !DefValkosIsShown && !LuckValkosIsShown &&       
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Valkos</Text>
     }

{AtkValkosIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://i.imgur.com/Ci51Pa1.png'
 />}
   {AtkValkosIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Attack Valkos</Text>
     }
     
{DefValkosIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://i.imgur.com/1sMl04A.png'
 />}
   {DefValkosIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Defense Valkos</Text>
     }

{LuckValkosIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://i.imgur.com/pGyg8DO.png'
 />}
   {LuckValkosIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Luck Valkos</Text>
     }

{EenrisIsShown &&  !AtkEenrisIsShown && !DefEenrisIsShown && !LuckEenrisIsShown &&  
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://static.wikia.nocookie.net/4thewords/images/1/1d/Eenris.png/'
 />}
   {EenrisIsShown &&  !AtkEenrisIsShown && !DefEenrisIsShown && !LuckEenrisIsShown &&
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Eenris</Text>
     }

{AtkEenrisIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://i.imgur.com/lU6zkfR.png'
 />}
   {AtkEenrisIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Attack Eenris</Text>
     }
     
{DefEenrisIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://i.imgur.com/5sRBeCz.png'
 />}
   {DefEenrisIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Defense Eenris</Text>
     }

{LuckEenrisIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://i.imgur.com/exqGLIN.png'
 />}
   {LuckEenrisIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Luck Eenris</Text>
     }

{RairaselIsShown &&  !AtkRairaselIsShown && !DefRairaselIsShown && !LuckRairaselIsShown &&  
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://static.wikia.nocookie.net/4thewords/images/f/fc/Rairasel.png/'
 />}
   {RairaselIsShown &&  !AtkRairaselIsShown && !DefRairaselIsShown && !LuckRairaselIsShown &&  
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Rairasel</Text>
     }

{AtkRairaselIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://i.imgur.com/YB3iqt7.png'
 />}
   {AtkRairaselIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Attack Rairasel</Text>
     }
     
{DefRairaselIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://i.imgur.com/vgropoV.png'
 />}
   {DefRairaselIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Defense Rairasel</Text>
     }

{LuckRairaselIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://i.imgur.com/3GrgauN.png'
 />}
   {LuckRairaselIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Luck Rairasel</Text>
     }

{AlderbamIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://static.wikia.nocookie.net/4thewords/images/9/95/Alderbam.png/'
 />}
   {AlderbamIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Alderbam</Text>
     }
     
{ChysisIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://static.wikia.nocookie.net/4thewords/images/9/97/Chysis.png/'
 />}
   {ChysisIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Chysis</Text>
     }
     
{MundIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://static.wikia.nocookie.net/4thewords/images/e/e3/Mund.png/'
 />}
   {MundIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Mund</Text>
     }
     
{WhodiniIsShown &&        
   <Image
   style={{position:'absolute'}}
   mt={['37px', '47px', '55px']}
   align='center' 
   boxSize={['4rem', '4.5rem', '5rem']}
   src='https://static.wikia.nocookie.net/4thewords/images/d/d5/Whodini.png/'
 />}
   {WhodiniIsShown &&        
   <Text        
   style={{position:'absolute'}}
   mt={['110px', '130px', '145px']}
   fontSize={['sm', 'md', 'md']}>
     Whodini</Text>
     }
     

          
        <HStack
        style={{position:'absolute'}}
        mt={['135px', '160px', '175px']}
        >
        <span>
          <GreyAtkCompanion />
          <ColorAtkCompanion />
          </span>
          <span>
          <Text ml='-7px' fontSize='md'>+{totalCompanionTopAtk}</Text>
        </span>
        <span>
        <GreyDefCompanion />
        <ColorDefCompanion />
        </span>
          <span>
          <Text ml='-7px' fontSize='md'>+{totalCompanionTopDef}</Text>
        </span>
        <span>
        <GreyLuckCompanion />
        <ColorLuckCompanion />
        </span>
          <span>
          <Text ml='-7px' fontSize='md'>+{totalCompanionTopLuck}</Text>
        </span>
        </HStack>
      </VStack>

    </Box>
  </WrapItem>

  <WrapItem>
    <Box w={[150, 170, 390]} h={[170, 200, 220]} borderRadius='10%' style={{backgroundColor: "#191E27", borderColor: '#20293A', borderWidth: '2px'}}>
      <VStack>
        <Text fontSize={['md', 'lg', 'lg']} mt='8px'>
          <b> Battle Stats</b>
        </Text>
        <HStack
        mt={['6px','18px','20px']}
        >
        <span>
          <Image boxSize='1.5rem' align='center' src='https://i.imgur.com/cPrPVxc.png' /></span>
        <span>
          <Text fontSize={['md', 'md', 'lg']}><b>Attack:</b></Text>
        </span>
          <span>
          <Text fontSize={['md', 'md', 'lg']} ml={['2px', '4px', '5px']} mr='3px'>{totalAtk}</Text>
        </span>
        </HStack>
        <HStack
        mt='5px'
        >
        <span>
          <Image boxSize='1.5rem' align='center' src='https://i.imgur.com/eXyDuR9.png' /></span>
        <span>
          <Text fontSize={['md', 'md', 'lg']}><b>Defense:</b></Text>
        </span>
          <span>
          <Text fontSize={['md', 'md', 'lg']}  ml={['2px', '4px', '5px']} mr='3px'>{totalDef}</Text>
        </span>
        </HStack>

        <HStack
        mt='5px'
        >
        <span>
          <Image boxSize='1.5rem' align='center' src='https://i.imgur.com/9e2WZyS.png' /></span>
        <span>
          <Text fontSize={['md', 'md', 'lg']}><b>Luck:</b></Text>
        </span>
          <span>
          <Text fontSize={['md', 'md', 'lg']}  ml={['2px', '4px', '5px']} mr='3px'>{totalLuck}</Text>
        </span>
        </HStack>
      </VStack>
    </Box>
  </WrapItem>
</Wrap>

     <Tabs mt='50px' variant='soft-rounded' colorScheme='purple'>
  <TabList p={5}>
    <Wrap justify='center'>
    <WrapItem>
    <Tab>Companions</Tab>
    </WrapItem>
    <WrapItem>
    <Tab>Weapon 1</Tab>
    </WrapItem>
    <WrapItem>
    <Tab>Weapon 2</Tab>
    </WrapItem>
    <WrapItem>
    <Tab>Accessory</Tab>
    </WrapItem>
    <WrapItem>
    <Tab>Head</Tab>
    </WrapItem>
    <WrapItem>
    <Tab>Chest</Tab>
    </WrapItem>
    <WrapItem>
    <Tab>Feet</Tab>
    </WrapItem>
    </Wrap>
  </TabList>
  <TabPanels>
    <TabPanel>
    <Text fontSize='md' mt='25px' mb='15px'><b>Main Quest Companions:</b></Text>
                <Wrap justify='center'>
   {(DCIsShown || World2RegionIsShown) && !NoanzaIsShown &&
           <WrapItem>
            <Button w='110px' h='170px' pb={5} onClick={handleNoanzaSwitchClick} style={{ backgroundColor: "#2D3748" }}>
       <VStack justify='center'>  
       <Image
        mt='12px'
        align='center' 
        boxSize='5rem'
        src='https://static.wikia.nocookie.net/4thewords/images/d/df/Noanza.png/'
      /> 
      <Text fontSize='md' mt='-15px' align='center'><b>Noanza</b></Text>
      <Text fontSize='sm' align='center'>+0 Atk<br/>+14 Def<br/>+6 Luck </Text>
      </VStack>
            </Button>
            </WrapItem>}

   {(DCIsShown || World2RegionIsShown) && NoanzaIsShown &&
           <WrapItem>
            <Button w='110px' h='170px' pb={5} onClick={handleNoanzaSwitchNoClick} style={{ backgroundColor: "#211742"}}>
      <VStack justify='center'>  
       <Image
        mt='12px'
        align='center' 
        boxSize='5rem'
        src='https://static.wikia.nocookie.net/4thewords/images/d/df/Noanza.png/'
      /> 
  <Text fontSize='md' mt='-15px' align='center'><b>Noanza</b></Text>
  <Text fontSize='sm' align='center'>+0 Atk<br/>+14 Def<br/>+6 Luck </Text>
      </VStack>
      </Button>
      </WrapItem>}


{(FloatingCityIsShown || DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) && !LodoIsShown &&
            <WrapItem>
            <Button w='110px' h='170px' pb={5} onClick={handleLodoSwitchClick} style={{ backgroundColor: "#2D3748" }}>
      <VStack justify='center'>  
       <Image
        mt='12px'
        align='center' 
        boxSize='4.5rem'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e6/Lodo.png/'
      /> 
      <Text mt='-8px' fontSize='md' align='center'><b>Lodo</b></Text>
      <Text fontSize='sm' align='center'>+12 Atk<br />+2 Def<br />+0 Luck </Text>
      </VStack>

            </Button>
            </WrapItem>}

{(FloatingCityIsShown || DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) && LodoIsShown &&
            <WrapItem>
            <Button w='110px' h='170px' pb={5} onClick={handleLodoSwitchNoClick} style={{ backgroundColor: "#211742" }}>
       <VStack justify='center'>  
       <Image
        mt='12px'
        align='center' 
        boxSize='4.5rem'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e6/Lodo.png/'
      /> 
      <Text mt='-8px' fontSize='md' align='center'><b>Lodo</b></Text>
      <Text fontSize='sm' align='center'>+12 Atk<br />+2 Def<br />+0 Luck </Text>
      </VStack>

            </Button>
            </WrapItem>}

{(ThreePCIsShown || WaterRegionIsShown || DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) && !AzadiIsShown &&
            <WrapItem>
            <Button w='110px' h='170px' pb={5} onClick={handleAzadiSwitchClick} style={{ backgroundColor: "#2D3748" }}>
      <VStack justify='center'>  
       <Image
        mt='12px'
        align='center' 
        boxSize='4.5rem'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a8/Azadi.png/'
      /> 
      <Text mt='-8px' fontSize='md' align='center'><b>Azadi</b></Text>
      <Text fontSize='sm' align='center'>+5 Atk<br />+0 Def<br />+10 Luck </Text>
      </VStack>

            </Button>
            </WrapItem>}

{(ThreePCIsShown || WaterRegionIsShown || DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) && AzadiIsShown &&
            <WrapItem>
            <Button w='110px' h='170px' pb={5} onClick={handleAzadiSwitchNoClick} style={{ backgroundColor: "#211742" }}>
       <VStack justify='center'>  
       <Image
        mt='12px'
        align='center' 
        boxSize='4.5rem'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a8/Azadi.png/'
      /> 
      <Text mt='-8px' fontSize='md' align='center'><b>Azadi</b></Text>
      <Text fontSize='sm' align='center'>+5 Atk<br />+0 Def<br />+10 Luck </Text>
      </VStack>

            </Button>
            </WrapItem>}

{(MamaTreeIsShown || ThreePCIsShown || WaterRegionIsShown || DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) && !SuwoIsShown &&
            <WrapItem>
            <Button w='110px' h='170px' pb={5} onClick={handleSuwoSwitchClick} style={{ backgroundColor: "#2D3748" }}>
      <VStack justify='center'>  
       <Image
        mt='12px'
        align='center' 
        boxSize='4.5rem'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/Suwo.png/'
      /> 
      <Text mt='-8px' fontSize='md' align='center'><b>Suwo</b></Text>
      <Text fontSize='sm' align='center'>+3 Atk<br />+7 Def<br />+2 Luck </Text>
      </VStack>

            </Button>
            </WrapItem>}

{(MamaTreeIsShown || ThreePCIsShown || WaterRegionIsShown || DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) && SuwoIsShown &&
            <WrapItem>
            <Button w='110px' h='170px' pb={5} onClick={handleSuwoSwitchNoClick} style={{ backgroundColor: "#211742" }}>
       <VStack justify='center'>  
       <Image
        mt='12px'
        align='center' 
        boxSize='4.5rem'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/Suwo.png/'
      /> 
      <Text mt='-8px' fontSize='md' align='center'><b>Suwo</b></Text>
      <Text fontSize='sm' align='center'>+3 Atk<br />+7 Def<br />+2 Luck </Text>
      </VStack>

            </Button>
            </WrapItem>}
      </Wrap>
{DragonLairIsShown &&
          <Text fontSize='md' mt='25px' mb='15px'><b>Dragon Companions:</b></Text>

}
{DragonLairIsShown &&
           <Wrap justify='center'>

{!KaiszarIsShown &&
           <WrapItem>
          <Button w='110px' h='170px' pb={5} onClick={handleKaiszarSwitchClick} style={{ backgroundColor: "#2D3748" }}>
         <VStack justify='center'>    
       <Image
        mt='12px'
        align='center' 
        boxSize='5rem'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fa/Kaiszar.png/'
      /> 
      <Text fontSize='md' mt='-8px' align='center'><b>Kaiszar</b></Text>
      <Text fontSize='sm' align='center'>+12 Atk<br />+0 Def<br />+0 Luck </Text>
      </VStack>
          </Button>
            </WrapItem>}


{KaiszarIsShown && 
           <WrapItem>
       {!AtkKaiszarIsShown && !DefKaiszarIsShown && !LuckKaiszarIsShown &&
            <Button w='110px' h='170px' pb={5} onClick={handleKaiszarSwitchNoClick} style={{ backgroundColor: "#211742"}}>
         <VStack justify='center'>  
       <Image
        mt='12px'
        align='center' 
        boxSize='5rem'
                src='https://static.wikia.nocookie.net/4thewords/images/f/fa/Kaiszar.png/'
      /> 
  <Text fontSize='md' mt='-8px' align='center'><b>Kaiszar</b></Text>
  <Text fontSize='sm' align='center'>+12 Atk<br />+0 Def<br />+0 Luck </Text>
      </VStack>
    </Button>
}
{AtkKaiszarIsShown && !DefKaiszarIsShown && !LuckKaiszarIsShown &&
            <Button w='110px' h='170px' pb={5} onClick={handleAtkKaiszarSwitchNoClick} style={{ backgroundColor: "#211742"}}>
         <VStack justify='center'>  
       <Image
        mt='12px'
        align='center' 
        boxSize='4rem'
        src='https://i.imgur.com/gbuo4mt.png'
      /> 
  <Text fontSize='md' mt='-8px' align='center'><b>Attack<br/>Kaiszar</b></Text>
  <Text fontSize='sm' align='center'>+16 Atk<br />+0 Def<br />+0 Luck </Text>
      </VStack>
    </Button>
}

  {!AtkKaiszarIsShown && DefKaiszarIsShown && !LuckKaiszarIsShown &&
  <Button w='110px' h='170px' pb={5} onClick={handleDefKaiszarSwitchNoClick} style={{ backgroundColor: "#211742"}}>
  <VStack justify='center'> 
       <Image
        mt='12px'
        align='center' 
        boxSize='4rem'
        src='https://i.imgur.com/LGazi9x.png'
      />     
  <Text fontSize='md' mt='-8px' align='center'><b>Defense<br/>Kaiszar</b></Text>
  <Text fontSize='sm' align='center'>+12 Atk<br />+4 Def<br />+0 Luck </Text>
  </VStack>
  </Button>
  }
         {!AtkKaiszarIsShown && !DefKaiszarIsShown && LuckKaiszarIsShown &&
<Button w='110px' h='170px' pb={5} onClick={handleLuckKaiszarSwitchNoClick} style={{ backgroundColor: "#211742"}}>
      <VStack justify='center'>  
       <Image
        mt='18px'
        align='center' 
        boxSize='4rem'
        src='https://i.imgur.com/gbpdG0f.png'
      /> 
  <Text fontSize='md' mt='-8px' align='center'><b>Luck Kaiszar</b></Text>
  <Text fontSize='sm' align='center'>+12 Atk<br />+0 Def<br />+4 Luck </Text>
  </VStack> 
  </Button>
  }
                      
  </WrapItem>}

{!LoksiIsShown &&
  <WrapItem>
   <Button w='110px' h='170px' pb={5} onClick={handleLoksiSwitchClick} style={{ backgroundColor: "#2D3748" }}>
<VStack justify='center'>  
<Image
mt='20px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/7/75/Loksi.png'
/> 
<Text fontSize='md' mt='0px' align='center'><b>Loksi</b></Text>
<Text fontSize='sm' align='center'>+0 Atk<br />+12 Def<br />+0 Luck </Text>
</VStack>
   </Button>
   </WrapItem>}
{LoksiIsShown && 
  <WrapItem>
   <Button w='110px' h='170px' pb={5} onClick={handleLoksiSwitchNoClick} style={{ backgroundColor: "#211742"}}>
   {!AtkLoksiIsShown && !DefLoksiIsShown && !LuckLoksiIsShown &&
<VStack justify='center'>  
<Image
mt='20px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/7/75/Loksi.png'
/> 
<Text fontSize='md' mt='0px' align='center'><b>Loksi</b></Text>
  <Text fontSize='sm' align='center'>+0 Atk<br />+12 Def<br />+0 Luck </Text>
</VStack>}
{AtkLoksiIsShown && !DefLoksiIsShown && !LuckLoksiIsShown &&
<VStack justify='center'>  
<Image
mt='20px'
align='center' 
boxSize='4rem'
src='https://i.imgur.com/Zb1N51B.png'

/> 
<Text fontSize='md' align='center'><b>Attack Loksi</b></Text>
<Text fontSize='sm' align='center'>+4 Atk<br />+12 Def<br />+0 Luck </Text>
</VStack>}
{!AtkLoksiIsShown && DefLoksiIsShown && !LuckLoksiIsShown &&
<VStack justify='center'>  
<Image
mt='20px'
align='center' 
boxSize='4rem'
src='https://i.imgur.com/zGo6cCD.png'

/> 
<Text fontSize='md' align='center'><b>Defense Loksi</b></Text>
<Text fontSize='sm' align='center'>+0 Atk<br />+16 Def<br />+0 Luck </Text>
</VStack>}
{!AtkLoksiIsShown && !DefLoksiIsShown && LuckLoksiIsShown &&
<VStack justify='center'>  
<Image
mt='20px'
align='center' 
boxSize='4rem'
src='https://i.imgur.com/bgb1J58.png'

/> 
<Text fontSize='md' align='center'><b>Luck Loksi</b></Text>
<Text fontSize='sm' align='center'>+0 Atk<br />+12 Def<br />+4 Luck </Text>
</VStack>}

</Button>
</WrapItem>}

   <WrapItem>
   {!ThalamarisIsShown && 
     <Button w='110px' h='170px' pb={5} onClick={handleThalamarisSwitchClick} style={{ backgroundColor: "#2D3748" }}>  
  {!AtkThalamarisIsShown && !DefThalamarisIsShown && !LuckThalamarisIsShown &&
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='5rem'
src='https://static.wikia.nocookie.net/4thewords/images/4/4a/Thalamaris.png/'

/> 
<Text fontSize='md' mt='-8px' align='center'><b>Thalamaris</b></Text>
<Text fontSize='sm' align='center'>+0 Atk<br />+0 Def<br />+12 Luck </Text>
</VStack>}
</Button>}

{ThalamarisIsShown &&
<Button w='110px' h='170px' pb={5} onClick={handleThalamarisSwitchNoClick} style={{ backgroundColor: "#211742" }}> 
{!AtkThalamarisIsShown && !DefThalamarisIsShown && !LuckThalamarisIsShown &&
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='5rem'
src='https://static.wikia.nocookie.net/4thewords/images/4/4a/Thalamaris.png/'

/> 
  <Text fontSize='md' mt='-8px' align='center'><b>Thalamaris</b></Text>
  <Text fontSize='sm' align='center'>+0 Atk<br />+0 Def<br />+12 Luck </Text>
</VStack>}

{AtkThalamarisIsShown && !DefThalamarisIsShown && !LuckThalamarisIsShown &&
<VStack justify='center'>  
<Image
mt='20px'
align='center' 
boxSize='4rem'
src='https://i.imgur.com/fe9fXNc.png'

/> 
<Text fontSize='sm' mt='-8px' align='center'><b>Attack<br/>Thalamaris</b></Text>
<Text fontSize='sm' align='center'>+4 Atk<br />+0 Def<br />+12 Luck </Text>
</VStack>}
{!AtkThalamarisIsShown && DefThalamarisIsShown && !LuckThalamarisIsShown &&
<VStack justify='center'>  
<Image
mt='20px'
align='center' 
boxSize='4rem'
src='https://i.imgur.com/1G7xegk.png'

/> 
<Text fontSize='sm' mt='-8px' align='center'><b>Defense<br/>Thalamaris</b></Text>
<Text fontSize='sm' align='center'>+0 Atk<br />+4 Def<br />+12 Luck </Text>
</VStack>}
{!AtkThalamarisIsShown && !DefThalamarisIsShown && LuckThalamarisIsShown &&
<VStack justify='center'>  
<Image
mt='20px'
align='center' 
boxSize='4rem'
src='https://i.imgur.com/VpveKDD.png'

/> 
<Text fontSize='sm' mt='-8px' align='center'><b>Luck<br/>Thalamaris</b></Text>
<Text fontSize='sm' align='center'>+0 Atk<br />+0 Def<br />+16 Luck </Text>
</VStack>}
   </Button>}
   </WrapItem>

   {!ValkosIsShown &&
  <WrapItem>
   <Button w='110px' h='170px' pb={5} onClick={handleValkosSwitchClick} style={{ backgroundColor: "#2D3748" }}>
<VStack justify='center'>  
<Image
mt='20px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/6/63/Valkos.png'

/> 
<Text fontSize='md' mt='0px' align='center'><b>Valkos</b></Text>
<Text fontSize='sm' align='center'>+4 Atk<br />+4 Def<br />+4 Luck </Text>
</VStack>
   </Button>
   </WrapItem>}

{ValkosIsShown &&
  <WrapItem>
   <Button w='110px' h='170px' pb={5} onClick={handleValkosSwitchNoClick} style={{ backgroundColor: "#211742"}}>
   {!AtkValkosIsShown && !DefValkosIsShown && !LuckValkosIsShown &&
<VStack justify='center'>  
<Image
mt='20px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/6/63/Valkos.png'

/> 
<Text fontSize='md' mt='0px' align='center'><b>Valkos</b></Text>
<Text fontSize='sm' align='center'>+4 Atk<br />+4 Def<br />+4 Luck </Text>
  
</VStack>}
{AtkValkosIsShown && !DefValkosIsShown && !LuckValkosIsShown &&
<VStack justify='center'>  
<Image
mt='20px'
align='center' 
boxSize='4rem'
src='https://i.imgur.com/Ci51Pa1.png'

/> 
<Text fontSize='md' mt='0px' align='center'><b>Attack Valkos</b></Text>
<Text fontSize='sm' align='center'>+8 Atk<br />+4 Def<br />+4 Luck </Text>
  
</VStack>}
{!AtkValkosIsShown && DefValkosIsShown && !LuckValkosIsShown &&
<VStack justify='center'>  
<Image
mt='20px'
align='center' 
boxSize='4rem'
src='https://i.imgur.com/1sMl04A.png'

/> 
<Text fontSize='md' mt='0px' align='center'><b>Defense Valkos</b></Text>
<Text fontSize='sm' align='center'>+4 Atk<br />+8 Def<br />+4 Luck </Text>
  
</VStack>}
{!AtkValkosIsShown && !DefValkosIsShown && LuckValkosIsShown &&
<VStack justify='center'>  
<Image
mt='20px'
align='center' 
boxSize='4rem'
src='https://i.imgur.com/pGyg8DO.png'

/> 
<Text fontSize='md' mt='0px' align='center'><b>Luck Valkos</b></Text>
<Text fontSize='sm' align='center'>+4 Atk<br />+4 Def<br />+8 Luck </Text>
  
</VStack>}
   </Button>
   </WrapItem>}


{!EenrisIsShown && !AtkEenrisIsShown && !DefEenrisIsShown && !LuckEenrisIsShown &&
  <WrapItem>
   <Button w='110px' h='170px' pb={5} onClick={handleEenrisSwitchClick} style={{ backgroundColor: "#2D3748" }}>
<VStack justify='center'>  
<Image
mt='20px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/1/1d/Eenris.png/'

/> 
<Text fontSize='md' mt='0px' align='center'><b>Eenris</b></Text>
<Text fontSize='sm' align='center'>+3 Atk<br />+6 Def<br />+3 Luck </Text>
</VStack>
   </Button>
   </WrapItem>}

{EenrisIsShown && 
  <WrapItem>
   <Button w='110px' h='170px' pb={5} onClick={handleEenrisSwitchNoClick} style={{ backgroundColor: "#211742"}}>
{!AtkEenrisIsShown && !DefEenrisIsShown && !LuckEenrisIsShown &&
<VStack justify='center'>  
<Image
mt='20px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/1/1d/Eenris.png/'

/> 
<Text fontSize='md' mt='0px' align='center'><b>Eenris</b></Text>
<Text fontSize='sm' align='center'>+3 Atk<br />+6 Def<br />+3 Luck </Text>
</VStack>}
{AtkEenrisIsShown && !DefEenrisIsShown && !LuckEenrisIsShown &&
<VStack justify='center'>  
<Image
mt='20px'
align='center' 
boxSize='4rem'
src='https://i.imgur.com/lU6zkfR.png'

/> 
  <Text fontSize='md' mt='0px' align='center'><b>Attack Eenris</b></Text>
  <Text fontSize='sm' align='center'>+7 Atk<br />+6 Def<br />+3 Luck </Text>
</VStack>}
{!AtkEenrisIsShown && DefEenrisIsShown && !LuckEenrisIsShown &&
<VStack justify='center'>  
<Image
mt='20px'
align='center' 
boxSize='4rem'
src='https://i.imgur.com/5sRBeCz.png'

/> 
  <Text fontSize='md' mt='0px' align='center'><b>Defense Eenris</b></Text>
  <Text fontSize='sm' align='center'>+3 Atk<br />+10 Def<br />+3 Luck </Text>
</VStack>}
{!AtkEenrisIsShown && !DefEenrisIsShown && LuckEenrisIsShown &&
<VStack justify='center'>  
<Image
mt='20px'
align='center' 
boxSize='4rem'
src='https://i.imgur.com/exqGLIN.png'

/> 
  <Text fontSize='md' mt='0px' align='center'><b>Luck Eenris</b></Text>
  <Text fontSize='sm' align='center'>+3 Atk<br />+6 Def<br />+7 Luck </Text>
</VStack>}

   </Button>
   </WrapItem>}



{!RairaselIsShown && !AtkRairaselIsShown && !DefRairaselIsShown && !LuckRairaselIsShown &&
  <WrapItem>
   <Button w='110px' h='170px' pb={5} onClick={handleRairaselSwitchClick} style={{ backgroundColor: "#2D3748" }}>
<VStack justify='center'>  
<Image
mt='20px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/f/fc/Rairasel.png/'

/> 
<Text fontSize='md' mt='0px' align='center'><b>Rairasel</b></Text>
<Text fontSize='sm' align='center'>+6 Atk<br />+0 Def<br />+6 Luck </Text>
</VStack>
   </Button>
   </WrapItem>}

{RairaselIsShown &&
  <WrapItem>
   <Button w='110px' h='170px' pb={5} onClick={handleRairaselSwitchNoClick} style={{ backgroundColor: "#211742"}}>
{!AtkRairaselIsShown && !DefRairaselIsShown && !LuckRairaselIsShown &&
<VStack justify='center'>  
<Image
mt='20px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/f/fc/Rairasel.png/'

/> 
<Text fontSize='md' mt='0px' align='center'><b>Rairasel</b></Text>
<Text fontSize='sm' align='center'>+6 Atk<br />+0 Def<br />+6 Luck </Text>
</VStack>}
{AtkRairaselIsShown && !DefRairaselIsShown && !LuckRairaselIsShown &&
<VStack justify='center'>  
<Image
mt='20px'
align='center' 
boxSize='4rem'
src='https://i.imgur.com/YB3iqt7.png'

/> 
<Text fontSize='md' mt='0px' align='center'><b>Attack Rairasel</b></Text>
<Text fontSize='sm' align='center'>+10 Atk<br />+0 Def<br />+6 Luck </Text>
</VStack>}
{!AtkRairaselIsShown && DefRairaselIsShown && !LuckRairaselIsShown &&
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='4rem'
src='https://i.imgur.com/vgropoV.png'

/> 
<Text fontSize='md' mt='0px' align='center'><b>Defense<br/>Rairasel</b></Text>
<Text fontSize='sm' align='center'>+6 Atk<br />+4 Def<br />+6 Luck </Text>
</VStack>}
{!AtkRairaselIsShown && !DefRairaselIsShown && LuckRairaselIsShown &&
<VStack justify='center'>  
<Image
mt='20px'
align='center' 
boxSize='4rem'
src='https://i.imgur.com/3GrgauN.png'

/> 
<Text fontSize='md' mt='0px' align='center'><b>Luck Rairasel</b></Text>
<Text fontSize='sm' align='center'>+6 Atk<br />+0 Def<br />+10 Luck </Text>
</VStack>}

   </Button>
   </WrapItem>}



            </Wrap>
}

{DragonLairIsShown && 
<Text fontSize='md' mt='25px' mb='15px'><b>Select Armor Boost:</b></Text>}

{DragonLairIsShown && !KaiszarIsShown && !LoksiIsShown && !ThalamarisIsShown && !ValkosIsShown && !EenrisIsShown && !RairaselIsShown &&
  <Text fontSize='md' mt='25px' mb='15px'><i>select a dragon to show armor options</i></Text>
}

<Wrap justify='center'>
{!AtkKaiszarIsShown && KaiszarIsShown &&
   <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleAtkKaiszarSwitchClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/1/1d/AttackUpgrade.png/'

/> <Text fontSize='sm' align='center'>Kaiszar:<br/>Attack Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{AtkKaiszarIsShown &&
   <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleAtkKaiszarSwitchNoClick} style={{ backgroundColor: "#211742"}}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/1/1d/AttackUpgrade.png/'

/> <Text fontSize='sm' align='center'>Kaiszar:<br/>Attack Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{!DefKaiszarIsShown && KaiszarIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleDefKaiszarSwitchClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/b/b4/DefenseUpgrade.png/'

/> <Text fontSize='sm' align='center'>Kaiszar:<br/>Def. Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{DefKaiszarIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleDefKaiszarSwitchNoClick} style={{ backgroundColor: "#211742" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/b/b4/DefenseUpgrade.png/'

/> <Text fontSize='sm' align='center'>Kaiszar:<br/>Def. Boost</Text>
</VStack>
   </Button>
   </WrapItem>}            

{!LuckKaiszarIsShown && KaiszarIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleLuckKaiszarSwitchClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/8/8b/LuckUpgrade.png/'

/> <Text fontSize='sm' align='center'>Kaiszar:<br/>Luck Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{LuckKaiszarIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleLuckKaiszarSwitchNoClick} style={{ backgroundColor: "#211742" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/8/8b/LuckUpgrade.png/'

/> <Text fontSize='sm' align='center'>Kaiszar:<br/>Luck Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{!AtkLoksiIsShown && LoksiIsShown &&
   <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleAtkLoksiSwitchClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/1/1d/AttackUpgrade.png/'

/> <Text fontSize='sm' align='center'>Loksi:<br/>Attack Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{AtkLoksiIsShown &&
   <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleAtkLoksiSwitchNoClick} style={{ backgroundColor: "#211742"}}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/1/1d/AttackUpgrade.png/'

/> <Text fontSize='sm' align='center'>Loksi:<br/>Attack Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{!DefLoksiIsShown && LoksiIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleDefLoksiSwitchClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/b/b4/DefenseUpgrade.png/'

/> <Text fontSize='sm' align='center'>Loksi:<br/>Def. Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{DefLoksiIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleDefLoksiSwitchNoClick} style={{ backgroundColor: "#211742" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/b/b4/DefenseUpgrade.png/'

/> <Text fontSize='sm' align='center'>Loksi:<br/>Def. Boost</Text>
</VStack>
   </Button>
   </WrapItem>}            

{!LuckLoksiIsShown && LoksiIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleLuckLoksiSwitchClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/8/8b/LuckUpgrade.png/'

/> <Text fontSize='sm' align='center'>Loksi:<br/>Luck Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{LuckLoksiIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleLuckLoksiSwitchNoClick} style={{ backgroundColor: "#211742" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/8/8b/LuckUpgrade.png/'

/> <Text fontSize='sm' align='center'>Loksi:<br/>Luck Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{!AtkThalamarisIsShown && ThalamarisIsShown &&
   <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleAtkThalamarisClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/1/1d/AttackUpgrade.png/'

/> <Text fontSize='sm' align='center'>Thalamaris:<br/>Attack Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{AtkThalamarisIsShown &&
   <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleAtkThalamarisSwitchNoClick} style={{ backgroundColor: "#211742"}}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/1/1d/AttackUpgrade.png/'

/> <Text fontSize='sm' align='center'>Thalamaris:<br/>Attack Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{!DefThalamarisIsShown && ThalamarisIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleDefThalamarisClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/b/b4/DefenseUpgrade.png/'

/> <Text fontSize='sm' align='center'>Thalamaris:<br/>Def. Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{DefThalamarisIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleDefThalamarisSwitchNoClick} style={{ backgroundColor: "#211742" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/b/b4/DefenseUpgrade.png/'

/> <Text fontSize='sm' align='center'>Thalamaris:<br/>Def. Boost</Text>
</VStack>
   </Button>
   </WrapItem>}            

{!LuckThalamarisIsShown && ThalamarisIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleLuckThalamarisClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/8/8b/LuckUpgrade.png/'

/> <Text fontSize='sm' align='center'>Thalamaris:<br/>Luck Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{LuckThalamarisIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleLuckThalamarisSwitchNoClick} style={{ backgroundColor: "#211742" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/8/8b/LuckUpgrade.png/'

/> <Text fontSize='sm' align='center'>Thalamaris:<br/>Luck Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{!AtkValkosIsShown && ValkosIsShown &&
   <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleAtkValkosClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/1/1d/AttackUpgrade.png/'

/> <Text fontSize='sm' align='center'>Valkos:<br/>Attack Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{AtkValkosIsShown &&
   <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleAtkValkosSwitchNoClick} style={{ backgroundColor: "#211742"}}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/1/1d/AttackUpgrade.png/'

/> <Text fontSize='sm' align='center'>Valkos:<br/>Attack Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{!DefValkosIsShown && ValkosIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleDefValkosClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/b/b4/DefenseUpgrade.png/'

/> <Text fontSize='sm' align='center'>Valkos:<br/>Def. Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{DefValkosIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleDefValkosSwitchNoClick} style={{ backgroundColor: "#211742" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/b/b4/DefenseUpgrade.png/'

/> <Text fontSize='sm' align='center'>Valkos:<br/>Def. Boost</Text>
</VStack>
   </Button>
   </WrapItem>}            

{!LuckValkosIsShown && ValkosIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleLuckValkosClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/8/8b/LuckUpgrade.png/'

/> <Text fontSize='sm' align='center'>Valkos:<br/>Luck Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{LuckValkosIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleLuckValkosSwitchNoClick} style={{ backgroundColor: "#211742" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/8/8b/LuckUpgrade.png/'

/> <Text fontSize='sm' align='center'>Valkos:<br/>Luck Boost</Text>
</VStack>
   </Button>
   </WrapItem>}      

{!AtkEenrisIsShown && EenrisIsShown &&
   <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleAtkEenrisClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/1/1d/AttackUpgrade.png/'

/> <Text fontSize='sm' align='center'>Eenris:<br/>Attack Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{AtkEenrisIsShown &&
   <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleAtkEenrisSwitchNoClick} style={{ backgroundColor: "#211742"}}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/1/1d/AttackUpgrade.png/'

/> <Text fontSize='sm' align='center'>Eenris:<br/>Attack Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{!DefEenrisIsShown && EenrisIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleDefEenrisClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/b/b4/DefenseUpgrade.png/'

/> <Text fontSize='sm' align='center'>Eenris:<br/>Def. Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{DefEenrisIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleDefEenrisSwitchNoClick} style={{ backgroundColor: "#211742" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/b/b4/DefenseUpgrade.png/'

/> <Text fontSize='sm' align='center'>Eenris:<br/>Def. Boost</Text>
</VStack>
   </Button>
   </WrapItem>}            

{!LuckEenrisIsShown && EenrisIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleLuckEenrisClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/8/8b/LuckUpgrade.png/'

/> <Text fontSize='sm' align='center'>Eenris:<br/>Luck Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{LuckEenrisIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleLuckEenrisSwitchNoClick} style={{ backgroundColor: "#211742" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/8/8b/LuckUpgrade.png/'

/> <Text fontSize='sm' align='center'>Eenris:<br/>Luck Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

   {!AtkRairaselIsShown && RairaselIsShown &&
   <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleAtkRairaselClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/1/1d/AttackUpgrade.png/'

/> <Text fontSize='sm' align='center'>Rairasel:<br/>Attack Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{AtkRairaselIsShown &&
   <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleAtkRairaselSwitchNoClick} style={{ backgroundColor: "#211742"}}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/1/1d/AttackUpgrade.png/'

/> <Text fontSize='sm' align='center'>Rairasel:<br/>Attack Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{!DefRairaselIsShown && RairaselIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleDefRairaselClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/b/b4/DefenseUpgrade.png/'

/> <Text fontSize='sm' align='center'>Rairasel:<br/>Def. Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{DefRairaselIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleDefRairaselSwitchNoClick} style={{ backgroundColor: "#211742" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/b/b4/DefenseUpgrade.png/'

/> <Text fontSize='sm' align='center'>Rairasel:<br/>Def. Boost</Text>
</VStack>
   </Button>
   </WrapItem>}            

{!LuckRairaselIsShown && RairaselIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleLuckRairaselClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/8/8b/LuckUpgrade.png/'

/> <Text fontSize='sm' align='center'>Rairasel:<br/>Luck Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{LuckRairaselIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleLuckRairaselSwitchNoClick} style={{ backgroundColor: "#211742" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/8/8b/LuckUpgrade.png/'

/> <Text fontSize='sm' align='center'>Rairasel:<br/>Luck Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

</Wrap>

{AurilisIsShown &&
<Text fontSize='md' mt='25px' mb='15px'><b>Aurilis Companions:</b></Text>
}

{AurilisIsShown &&
                <Wrap justify='center'>
          {!AlderbamIsShown &&
            <WrapItem>
            <Button w='110px' h='170px' pb={5} onClick={handleAlderbamSwitchClick} style={{ backgroundColor: "#2D3748" }}>
      <VStack justify='center'>  
       <Image
        mt='12px'
        align='center' 
        boxSize='4rem'
        src='https://static.wikia.nocookie.net/4thewords/images/9/95/Alderbam.png/'
      /> 
      <Text mt='-8px' fontSize='md' align='center'><b>Alderbam</b></Text>
      <Text fontSize='sm' align='center'>+0 Atk<br />+0 Def<br />+12 Luck </Text>
      </VStack>

            </Button>
            </WrapItem>}

            {AlderbamIsShown &&
            <WrapItem>
            <Button w='110px' h='170px' pb={5} onClick={handleAlderbamSwitchNoClick} style={{ backgroundColor: "#211742" }}>
       <VStack justify='center'>  
       <Image
        mt='12px'
        align='center' 
        boxSize='4rem'
        src='https://static.wikia.nocookie.net/4thewords/images/9/95/Alderbam.png/'
      /> 
      <Text mt='-8px' fontSize='md' align='center'><b>Alderbam</b></Text>
      <Text fontSize='sm' align='center'>+0 Atk<br />+0 Def<br />+12 Luck </Text>
      </VStack>

            </Button>
            </WrapItem>}
          {!ChysisIsShown &&
            <WrapItem>
            <Button w='110px' h='170px' pb={5} onClick={handleChysisSwitchClick} style={{ backgroundColor: "#2D3748" }}>
      <VStack justify='center'>  
       <Image
        mt='12px'
        align='center' 
        boxSize='4rem'
        src='https://static.wikia.nocookie.net/4thewords/images/9/97/Chysis.png/'
      /> 
      <Text mt='-8px' fontSize='md' align='center'><b>Chysis</b></Text>
      <Text fontSize='sm' align='center'>+12 Atk<br />+0 Def<br />+0 Luck </Text>
      </VStack>

            </Button>
            </WrapItem>}

            {ChysisIsShown &&
            <WrapItem>
            <Button w='110px' h='170px' pb={5} onClick={handleChysisSwitchNoClick} style={{ backgroundColor: "#211742" }}>
       <VStack justify='center'>  
       <Image
        mt='12px'
        align='center' 
        boxSize='4rem'
        src='https://static.wikia.nocookie.net/4thewords/images/9/97/Chysis.png/'
      /> 
      <Text mt='-8px' fontSize='md' align='center'><b>Chysis</b></Text>
      <Text fontSize='sm' align='center'>+12 Atk<br />+0 Def<br />+0 Luck </Text>
      </VStack>

            </Button>
            </WrapItem>}                  

    {!MundIsShown &&
            <WrapItem>
            <Button w='110px' h='170px' pb={5} onClick={handleMundSwitchClick} style={{ backgroundColor: "#2D3748" }}>
      <VStack justify='center'>  
       <Image
        mt='12px'
        align='center' 
        boxSize='4rem'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e3/Mund.png/'
      /> 
      <Text mt='-8px' fontSize='md' align='center'><b>Mund</b></Text>
      <Text fontSize='sm' align='center'>+4 Atk<br />+4 Def<br />+4 Luck </Text>
      </VStack>

            </Button>
            </WrapItem>}

            {MundIsShown &&
            <WrapItem>
            <Button w='110px' h='170px' pb={5} onClick={handleMundSwitchNoClick} style={{ backgroundColor: "#211742" }}>
       <VStack justify='center'>  
       <Image
        mt='12px'
        align='center' 
        boxSize='4rem'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e3/Mund.png/'
      /> 
      <Text mt='-8px' fontSize='md' align='center'><b>Mund</b></Text>
      <Text fontSize='sm' align='center'>+4 Atk<br />+4 Def<br />+4 Luck </Text>
      </VStack>

            </Button>
            </WrapItem>}

     {!WhodiniIsShown &&
            <WrapItem>
            <Button w='110px' h='170px' pb={5} onClick={handleWhodiniSwitchClick} style={{ backgroundColor: "#2D3748" }}>
      <VStack justify='center'>  
       <Image
        mt='12px'
        align='center' 
        boxSize='4rem'
        src='https://static.wikia.nocookie.net/4thewords/images/d/d5/Whodini.png/'
      /> 
      <Text mt='-8px' fontSize='md' align='center'><b>Whodini</b></Text>
      <Text fontSize='sm' align='center'>+0 Atk<br />+12 Def<br />+0 Luck </Text>
      </VStack>

            </Button>
            </WrapItem>}

            {WhodiniIsShown &&
            <WrapItem>
            <Button w='110px' h='170px' pb={5} onClick={handleWhodiniSwitchNoClick} style={{ backgroundColor: "#211742" }}>
       <VStack justify='center'>  
       <Image
        mt='12px'
        align='center' 
        boxSize='4rem'
        src='https://static.wikia.nocookie.net/4thewords/images/d/d5/Whodini.png/'
      /> 
      <Text mt='-8px' fontSize='md' align='center'><b>Whodini</b></Text>
      <Text fontSize='sm' align='center'>+0 Atk<br />+12 Def<br />+0 Luck </Text>
      </VStack>

            </Button>
            </WrapItem>}

            </Wrap>}
                </TabPanel>
    <TabPanel>
    <Text fontSize='md' mt='25px' mb='15px'><b>Main Quest Battle Items:</b></Text>
      <Wrap justify='center'>
      {(DCIsShown || World2RegionIsShown) && !KingMaiSwordIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleKingMaiSwordClick} style={{ backgroundColor: "#2D3748"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='3.75rem'
src='https://static.wikia.nocookie.net/4thewords/images/7/7c/KingMaiSword.png/'
/> 
<Text fontSize='sm' align='center'><b>King Mai's<br/>Sword</b></Text>
<Text fontSize='sm' align='center'>+28 Atk<br/>+5 Def<br/>+2 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{(DCIsShown || World2RegionIsShown) && KingMaiSwordIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleKingMaiSwordNoClick} style={{ backgroundColor: "#211742"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='3.75rem'
src='https://static.wikia.nocookie.net/4thewords/images/7/7c/KingMaiSword.png/'
/> 
<Text fontSize='sm' align='center'><b>King Mai's<br/>Sword</b></Text>
<Text fontSize='sm' align='center'>+28 Atk<br/>+5 Def<br/>+2 Luck </Text>
</VStack>
</Button>
</WrapItem>}

      {(DCIsShown || World2RegionIsShown) && !MercurialSwordIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleMercurialSwordClick} style={{ backgroundColor: "#2D3748"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='3.5rem'
src='https://static.wikia.nocookie.net/4thewords/images/d/d7/MercurialSword.png'
/> 
<Text fontSize='sm' align='center'><b>Mercurial<br/>Sword</b></Text>
<Text fontSize='sm' align='center'>+11 Atk<br/>+11 Def<br/>+4 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{(DCIsShown || World2RegionIsShown) && MercurialSwordIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleMercurialSwordNoClick} style={{ backgroundColor: "#211742"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='3.5rem'
src='https://static.wikia.nocookie.net/4thewords/images/d/d7/MercurialSword.png'
/> 
<Text fontSize='sm' align='center'><b>Mercurial<br/>Sword</b></Text>
<Text fontSize='sm' align='center'>+11 Atk<br/>+11 Def<br/>+4 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{(LightRegionIsShown || World2RegionIsShown) && !FusionSwordIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleFusionSwordClick} style={{ backgroundColor: "#2D3748"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='3.75rem'
src='https://static.wikia.nocookie.net/4thewords/images/c/c6/FusionSword.png'
/> 
<Text fontSize='md' align='center'><b>Fusion Sword</b></Text>
<Text fontSize='sm' align='center'>+25 Atk<br/>+0 Def<br/>+0 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{(LightRegionIsShown || World2RegionIsShown) && FusionSwordIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleFusionSwordNoClick} style={{ backgroundColor: "#211742"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='3.75rem'
src='https://static.wikia.nocookie.net/4thewords/images/c/c6/FusionSword.png'
/> 
<Text fontSize='md' align='center'><b>Fusion Sword</b></Text>
<Text fontSize='sm' align='center'>+25 Atk<br/>+0 Def<br/>+0 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{(LightRegionIsShown || World2RegionIsShown) && !FlowerSlingshotIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleFlowerSlingshotClick} style={{ backgroundColor: "#2D3748"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='3.75rem'
src='https://static.wikia.nocookie.net/4thewords/images/b/b6/FlowerSlingshot.png/'
/> 
<Text fontSize='sm' align='center'><b>Flower<br/>Slingshot</b></Text>
<Text fontSize='sm' align='center'>+17 Atk<br/>+0 Def<br/>+8 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{(LightRegionIsShown || World2RegionIsShown) && FlowerSlingshotIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleFlowerSlingshotNoClick} style={{ backgroundColor: "#211742"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='3.75rem'
src='https://static.wikia.nocookie.net/4thewords/images/b/b6/FlowerSlingshot.png/'
/> 
<Text fontSize='sm' align='center'><b>Flower<br/>Slingshot</b></Text>
<Text fontSize='sm' align='center'>+17 Atk<br/>+0 Def<br/>+8 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{DawnIsShown && !DawnSwordIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleDawnSwordClick} style={{ backgroundColor: "#2D3748"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/3/37/Dawn-sword.png'
/> 
<Text fontSize='md' align='center'><b>Dawn Sword</b></Text>
<Text fontSize='sm' align='center'>+16 Atk<br/>+0 Def<br/>+2 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{DawnIsShown && DawnSwordIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleDawnSwordNoClick} style={{ backgroundColor: "#211742"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/3/37/Dawn-sword.png'
/> 
<Text fontSize='md' align='center'><b>Dawn Sword</b></Text>
<Text fontSize='sm' align='center'>+16 Atk<br/>+0 Def<br/>+2 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{(DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) && !DarkForestSwordIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleDarkForestSwordClick} style={{ backgroundColor: "#2D3748"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='3.75rem'
src='https://static.wikia.nocookie.net/4thewords/images/8/87/Dark_forest_sword.png/'
/> 
<Text fontSize='sm' align='center'><b>Dark Forest<br/>Sword</b></Text>
<Text fontSize='sm' align='center'>+15 Atk<br/>+0 Def<br/>+2 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{(DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) && DarkForestSwordIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleDarkForestSwordNoClick} style={{ backgroundColor: "#211742"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='3.75rem'
src='https://static.wikia.nocookie.net/4thewords/images/8/87/Dark_forest_sword.png/'
/> 
<Text fontSize='sm' align='center'><b>Dark Forest<br/>Sword</b></Text>
<Text fontSize='sm' align='center'>+15 Atk<br/>+0 Def<br/>+2 Luck </Text>
</VStack>
</Button>
</WrapItem>}

      {(WaterRegionIsShown || DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) && !SteelMaceIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleSteelMaceClick} style={{ backgroundColor: "#2D3748"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/8/85/Steelmace_md.png/'
/> 
<Text fontSize='md' align='center'><b>Steel Mace</b></Text>
<Text fontSize='sm' align='center'>+15 Atk<br/>+0 Def<br/>+0 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{(WaterRegionIsShown || DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) && SteelMaceIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleSteelMaceNoClick} style={{ backgroundColor: "#211742"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/8/85/Steelmace_md.png/'
/> 
<Text fontSize='md' align='center'><b>Steel Mace</b></Text>
<Text fontSize='sm' align='center'>+15 Atk<br/>+0 Def<br/>+0 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{RainaIsShown && !RainaSwordIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleRainaSwordClick} style={{ backgroundColor: "#2D3748"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/7/72/Raina_sword.png/'
/> 
<Text fontSize='md' align='center'><b>Raina Sword</b></Text>
<Text fontSize='sm' align='center'>+11 Atk<br/>+0 Def<br/>+8 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{RainaIsShown && RainaSwordIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleRainaSwordNoClick} style={{ backgroundColor: "#211742"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/7/72/Raina_sword.png/'
/> 
<Text fontSize='md' align='center'><b>Raina Sword</b></Text>
<Text fontSize='sm' align='center'>+11 Atk<br/>+0 Def<br/>+8 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{(ForestRegionIsShown || DesertRegionIsShown || WaterRegionIsShown || DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) && AurilisIsShown && !SpellfireSwordIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleSpellfireSwordClick} style={{ backgroundColor: "#2D3748"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/d/da/Spellfire_Sword.png/'
/> 
<Text fontSize='sm' align='center'><b>Spellfire Sword</b></Text>
<Text fontSize='sm' align='center'>+14 Atk<br/>+0 Def<br/>+0 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{(ForestRegionIsShown || DesertRegionIsShown || WaterRegionIsShown || DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) && AurilisIsShown && SpellfireSwordIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleSpellfireSwordNoClick} style={{ backgroundColor: "#211742"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/d/da/Spellfire_Sword.png/'
/> 
<Text fontSize='sm' align='center'><b>Spellfire Sword</b></Text>
<Text fontSize='sm' align='center'>+14 Atk<br/>+0 Def<br/>+0 Luck </Text>
</VStack>
</Button>
</WrapItem>}

      {(DesertRegionIsShown || WaterRegionIsShown || DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) && !SteelSwordIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleSteelSwordClick} style={{ backgroundColor: "#2D3748" }}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/1/10/Steelsword_md.png/'
/> 
<Text fontSize='md' align='center'><b>Steel Sword</b></Text>
<Text fontSize='sm' align='center'>+10 Atk<br/>+0 Def<br/>+0 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{(DesertRegionIsShown || WaterRegionIsShown || DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) && SteelSwordIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleSteelSwordNoClick} style={{ backgroundColor: "#211742" }}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/1/10/Steelsword_md.png/'
/> 
<Text fontSize='md' align='center'><b>Steel Sword</b></Text>
<Text fontSize='sm' align='center'>+10 Atk<br/>+0 Def<br/>+0 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{(DesertRegionIsShown || WaterRegionIsShown || DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) && !GlassScimitarIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleGlassScimitarClick} style={{ backgroundColor: "#2D3748"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/e/e2/Glassscimitar_md.png/'
/> 
<Text fontSize='md' align='center'><b>Glass Scimitar</b></Text>
<Text fontSize='sm' align='center'>+9 Atk<br/>+0 Def<br/>+4 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{(DesertRegionIsShown || WaterRegionIsShown || DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) && GlassScimitarIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleGlassScimitarNoClick} style={{ backgroundColor: "#211742"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/e/e2/Glassscimitar_md.png/'
/> 
<Text fontSize='md' align='center'><b>Glass Scimitar</b></Text>
<Text fontSize='sm' align='center'>+9 Atk<br/>+0 Def<br/>+4 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{(DesertRegionIsShown || WaterRegionIsShown || DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) && !SteelDaggerIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleSteelDaggerClick} style={{ backgroundColor: "#2D3748"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/a/ac/Steeldagger_md.png/'
/> 
<Text fontSize='md' align='center'><b>Steel Dagger</b></Text>
<Text fontSize='sm' align='center'>+4 Atk<br/>+0 Def<br/>+1 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{(DesertRegionIsShown || WaterRegionIsShown || DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) && SteelDaggerIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleSteelDaggerNoClick} style={{ backgroundColor: "#211742"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/a/ac/Steeldagger_md.png/'
/> 
<Text fontSize='md' align='center'><b>Steel Dagger</b></Text>
<Text fontSize='sm' align='center'>+4 Atk<br/>+0 Def<br/>+1 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{(ForestRegionIsShown || DesertRegionIsShown || WaterRegionIsShown || DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) && !WoodSpearIsShown &&
   <WrapItem>
   <Button w='110px' h='170px' pb={5} onClick={handleWoodSpearClick} style={{ backgroundColor: "#2D3748"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/a/ac/Woodspear_md.png/'
/> 
<Text fontSize='md' align='center'><b>Wood Spear</b></Text>
<Text fontSize='sm' align='center'>+4 Atk<br/>+1 Def<br/>+0 Luck </Text>
</VStack>
</Button>
</WrapItem>
}

{(ForestRegionIsShown || DesertRegionIsShown || WaterRegionIsShown || DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) && WoodSpearIsShown &&
   <WrapItem>
    <Button w='110px' h='170px' pb={5} onClick={handleWoodSpearNoClick} style={{ backgroundColor: "#211742"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/a/ac/Woodspear_md.png/'
/> 
<Text fontSize='md' align='center'><b>Wood Spear</b></Text>
<Text fontSize='sm' align='center'>+4 Atk<br/>+1 Def<br/>+0 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{(ForestRegionIsShown || DesertRegionIsShown || WaterRegionIsShown || DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) && !LeafsungWoodenSwordIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleLeafsungWoodenSwordClick} style={{ backgroundColor: "#2D3748"}}>
<VStack justify='center'>  
<Image
mt='16px'
align='center' 
boxSize='3.5rem'
src='https://static.wikia.nocookie.net/4thewords/images/2/20/Leafsungwoodensword_md.png/'
/> 
<Text fontSize='sm' align='center'><b>Leafsung<br/>Wooden Sword</b></Text>
<Text fontSize='sm' align='center'>+3 Atk<br/>+0 Def<br/>+1 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{(ForestRegionIsShown || DesertRegionIsShown || WaterRegionIsShown || DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) && LeafsungWoodenSwordIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleLeafsungWoodenSwordNoClick} style={{ backgroundColor: "#211742"}}>
<VStack justify='center'>  
<Image
mt='16px'
align='center' 
boxSize='3.5rem'
src='https://static.wikia.nocookie.net/4thewords/images/2/20/Leafsungwoodensword_md.png/'
/> 
<Text fontSize='sm' align='center'><b>Leafsung<br/>Wooden Sword</b></Text>
<Text fontSize='sm' align='center'>+3 Atk<br/>+0 Def<br/>+1 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{(ForestRegionIsShown || DesertRegionIsShown || WaterRegionIsShown || DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) && !WoodSwordIsShown &&
      <WrapItem>
    <Button w='110px' h='170px' pb={5} onClick={handleWoodSwordClick} style={{ backgroundColor: "#2D3748" }}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/7/7b/Woodsword_md.png/'
/> 
<Text fontSize='md' align='center'><b>Wood Sword</b></Text>
<Text fontSize='sm' align='center'>+1 Atk<br/>+0 Def<br/>+0 Luck </Text>
</VStack>
    </Button>
    </WrapItem>}

    {(ForestRegionIsShown || DesertRegionIsShown || WaterRegionIsShown || DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) && WoodSwordIsShown &&
      <WrapItem>
    <Button w='110px' h='170px' pb={5} onClick={handleWoodSwordNoClick} style={{ backgroundColor: "#211742" }}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/7/7b/Woodsword_md.png/'
/> 
<Text fontSize='md' align='center'><b>Wood Sword</b></Text>
<Text fontSize='sm' align='center'>+1 Atk<br/>+0 Def<br/>+0 Luck </Text>
</VStack>
    </Button>
    </WrapItem>}
      </Wrap>
      <Text fontSize='md' mt='25px' mb='15px'><b>Past Event Battle Items:</b></Text>
<Wrap justify='center'>

{!DragonClawHookIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleDragonClawHookClick} style={{ backgroundColor: "#2D3748"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/3/32/DragonsClawHook.png/'
/> 
<Text fontSize='sm' align='center'><b>Dragon's Claw<br/>Hook</b></Text>
<Text fontSize='sm' align='center'>+14 Atk<br/>+2 Def<br/>+0 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{DragonClawHookIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleDragonClawHookNoClick} style={{ backgroundColor: "#211742"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/3/32/DragonsClawHook.png/'
/> 
<Text fontSize='sm' align='center'><b>Dragon's Claw<br/>Hook</b></Text>
<Text fontSize='sm' align='center'>+14 Atk<br/>+2 Def<br/>+0 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{!DragonTailSwordIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleDragonTailSwordClick} style={{ backgroundColor: "#2D3748"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/7/78/DragonsTailSword.png/'
/> 
<Text fontSize='sm' align='center'><b>Dragon's Tail<br/>Sword</b></Text>
<Text fontSize='sm' align='center'>+10 Atk<br/>+4 Def<br/>+4 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{DragonTailSwordIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleDragonTailSwordNoClick} style={{ backgroundColor: "#211742"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/7/78/DragonsTailSword.png/'
/> 
<Text fontSize='sm' align='center'><b>Dragon's Tail<br/>Sword</b></Text>
<Text fontSize='sm' align='center'>+10 Atk<br/>+4 Def<br/>+4 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{!NiftraSwordIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleNiftraSwordClick} style={{ backgroundColor: "#2D3748"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/8/8e/Niftras-sword.png'
/> 
<Text fontSize='sm' align='center'><b>Niftra's Sword</b></Text>
<Text fontSize='sm' align='center'>+18 Atk<br/>+0 Def<br/>+0 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{NiftraSwordIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleNiftraSwordNoClick} style={{ backgroundColor: "#211742"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/8/8e/Niftras-sword.png'
/> 
<Text fontSize='sm' align='center'><b>Niftra's Sword</b></Text>
<Text fontSize='sm' align='center'>+18 Atk<br/>+0 Def<br/>+0 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{!OozeSwordIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleOozeSwordClick} style={{ backgroundColor: "#2D3748"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/8/88/Ooze-sword.png'
/> 
<Text fontSize='md' align='center'><b>Ooze Sword</b></Text>
<Text fontSize='sm' align='center'>+10 Atk<br/>+10 Def<br/>+5 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{OozeSwordIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleOozeSwordNoClick} style={{ backgroundColor: "#211742"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/8/88/Ooze-sword.png'
/> 
<Text fontSize='md' align='center'><b>Ooze Sword</b></Text>
<Text fontSize='sm' align='center'>+10 Atk<br/>+10 Def<br/>+5 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{!DarkForestSwordOldIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleDarkForestSwordOldClick} style={{ backgroundColor: "#2D3748"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/b/bf/DarkForestSword.png/'
/> 
<Text fontSize='sm' align='center'><b>Dark Forest<br/>Sword (2017)</b></Text>
<Text fontSize='sm' align='center'>+12 Atk<br/>+0 Def<br/>+2 Luck </Text>
</VStack>
</Button>
</WrapItem>}

{DarkForestSwordOldIsShown &&
<WrapItem>
<Button w='110px' h='170px' pb={5} onClick={handleDarkForestSwordOldNoClick} style={{ backgroundColor: "#211742"}}>
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/b/bf/DarkForestSword.png/'
/> 
<Text fontSize='sm' align='center'><b>Dark Forest<br/>Sword (2017)</b></Text>
<Text fontSize='sm' align='center'>+12 Atk<br/>+0 Def<br/>+2 Luck </Text>
</VStack>
</Button>
</WrapItem>}


</Wrap>
    </TabPanel>
  </TabPanels>
</Tabs>
<Box h='100px' />
            </Container>
        </Grid>
      </Box>
  );
}

export default App;