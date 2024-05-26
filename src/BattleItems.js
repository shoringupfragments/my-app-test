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

const handleAtkKaiszarSwitchClick = event => {
  setDefKaiszarIsShown (current => false);
  setDefKaiszarActive (current => false);
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

  setKaiszarIsShown (current => false);
  setKaiszarActive (current => false);
  setAtkKaiszarIsShown (current => !AtkKaiszarIsShown);
  setAtkKaiszarActive (current => !AtkKaiszarActive);
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

  setKaiszarIsShown (current => false);
  setKaiszarActive (current => false);
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
  setLuckKaiszarIsShown (current => !LuckKaiszarIsShown);
  setLuckKaiszarActive (current => !LuckKaiszarIsShown);
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

  setKaiszarIsShown (current => false);
  setKaiszarActive (current => false);
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
  setLoksiIsShown (current => false);
  setLoksiActive (current => false);
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
  setLoksiIsShown (current => false);
  setLoksiActive (current => false);
  setAtkLoksiIsShown (current => false);
  setAtkLoksiActive (current => false);
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
  setLoksiIsShown (current => false);
  setLoksiActive (current => false);
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
  setThalamarisIsShown (current => false);
  setThalamarisActive (current => false);
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
  setThalamarisIsShown (current => false);
  setThalamarisActive (current => false);
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
  setThalamarisIsShown (current => false);
  setThalamarisActive (current => false);
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
  setValkosIsShown (current => false);
  setValkosActive (current => false);
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
  setValkosIsShown (current => false);
  setValkosActive (current => false);
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
  setValkosIsShown (current => false);
  setValkosActive (current => false);
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
  setEenrisIsShown (current => false);
  setEenrisActive (current => false);
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
  setEenrisIsShown (current => false);
  setEenrisActive (current => false);
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
  setEenrisIsShown (current => false);
  setEenrisActive (current => false);
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
  setRairaselIsShown (current => false);
  setRairaselActive (current => false);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  };

const handleDefRairaselSwitchClick = event => {
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
  setRairaselIsShown (current => false);
  setRairaselActive (current => false);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setLuckRairaselIsShown (current => false);
  setLuckRairaselActive (current => false);
  };

const handleLuckRairaselSwitchClick = event => {
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
  setRairaselIsShown (current => false);
  setRairaselActive (current => false);
  setAtkRairaselIsShown (current => false);
  setAtkRairaselActive (current => false);
  setDefRairaselIsShown (current => false);
  setDefRairaselActive (current => false);
  };

  const handleKaiszarSwitchNoClick = event => {
  setKaiszarIsShown (current => !KaiszarIsShown);
  setKaiszarActive (current => !KaiszarIsShown);
  setKaiszarAtk (value => 0);
  setKaiszarDef (value => 0);
  setKaiszarLuck (value => 0);
  };

const handleAtkKaiszarSwitchNoClick = event => {
  setAtkKaiszarIsShown (current => !AtkKaiszarIsShown);
  setAtkKaiszarActive (current => !AtkKaiszarIsShown);
  setAtkKaiszarAtk (value => 0);
  setAtkKaiszarDef (value => 0);
  setAtkKaiszarLuck (value => 0);
  };

const handleDefKaiszarSwitchNoClick = event => {
  setDefKaiszarIsShown (current => !DefKaiszarIsShown);
  setDefKaiszarActive (current => !DefKaiszarIsShown);
  setDefKaiszarAtk (value => 0);
  setDefKaiszarDef (value => 0);
  setDefKaiszarLuck (value => 0);
  };

const handleLuckKaiszarSwitchNoClick = event => {
  setLuckKaiszarIsShown (current => !LuckKaiszarIsShown);
  setLuckKaiszarActive (current => !LuckKaiszarIsShown);
  setLuckKaiszarAtk (value => 0);
  setLuckKaiszarDef (value => 0);
  setLuckKaiszarLuck (value => 0);
  };

const handleLoksiSwitchNoClick = event => {
  setLoksiIsShown (current => !LoksiIsShown);
  setLoksiActive (current => !LoksiIsShown);
  setLoksiAtk (value => 0);
  setLoksiDef (value => 0);
  setLoksiLuck (value => 0);
  };

const handleAtkLoksiSwitchNoClick = event => {
  setAtkLoksiIsShown (current => !AtkLoksiIsShown);
  setAtkLoksiActive (current => !AtkLoksiIsShown);
  setAtkLoksiAtk (value => 0);
  setAtkLoksiDef (value => 0);
  setAtkLoksiLuck (value => 0);
  };

const handleDefLoksiSwitchNoClick = event => {
  setDefLoksiIsShown (current => !DefLoksiIsShown);
  setDefLoksiActive (current => !DefLoksiIsShown);
  setDefLoksiAtk (value => 0);
  setDefLoksiDef (value => 0);
  setDefLoksiLuck (value => 0);
  };

const handleLuckLoksiSwitchNoClick = event => {
  setLuckLoksiIsShown (current => !LuckLoksiIsShown);
  setLuckLoksiActive (current => !LuckLoksiIsShown);
  setLuckLoksiAtk (value => 0);
  setLuckLoksiDef (value => 0);
  setLuckLoksiLuck (value => 0);
  };

const handleThalamarisSwitchNoClick = event => {
  setThalamarisIsShown (current => !ThalamarisIsShown);
  setThalamarisActive (current => !ThalamarisIsShown);
  setThalamarisAtk (value => 0);
  setThalamarisDef (value => 0);
  setThalamarisLuck (value => 0);
  };

const handleAtkThalamarisSwitchNoClick = event => {
  setAtkThalamarisIsShown (current => !AtkThalamarisIsShown);
  setAtkThalamarisActive (current => !AtkThalamarisIsShown);
  setAtkThalamarisAtk (value => 0);
  setAtkThalamarisDef (value => 0);
  setAtkThalamarisLuck (value => 0);
  };

const handleDefThalamarisSwitchNoClick = event => {
  setDefThalamarisIsShown (current => !DefThalamarisIsShown);
  setDefThalamarisActive (current => !DefThalamarisIsShown);
  setDefThalamarisAtk (value => 0);
  setDefThalamarisDef (value => 0);
  setDefThalamarisLuck (value => 0);
  };

const handleLuckThalamarisSwitchNoClick = event => {
  setLuckThalamarisIsShown (current => !LuckThalamarisIsShown);
  setLuckThalamarisActive (current => !LuckThalamarisIsShown);
  setLuckThalamarisAtk (value => 0);
  setLuckThalamarisDef (value => 0);
  setLuckThalamarisLuck (value => 0);
  }; 
  
const handleValkosSwitchNoClick = event => {
  setValkosIsShown (current => !ValkosIsShown);
  setValkosActive (current => !ValkosIsShown);
  setValkosAtk (value => 0);
  setValkosDef (value => 0);
  setValkosLuck (value => 0);
  };

const handleAtkValkosSwitchNoClick = event => {
  setAtkValkosIsShown (current => !AtkValkosIsShown);
  setAtkValkosActive (current => !AtkValkosIsShown);
  setAtkValkosAtk (value => 0);
  setAtkValkosDef (value => 0);
  setAtkValkosLuck (value => 0);
  };

const handleDefValkosSwitchNoClick = event => {
  setDefValkosIsShown (current => !DefValkosIsShown);
  setDefValkosActive (current => !DefValkosIsShown);
  setDefValkosAtk (value => 0);
  setDefValkosDef (value => 0);
  setDefValkosLuck (value => 0);
  };

const handleLuckValkosSwitchNoClick = event => {
  setLuckValkosIsShown (current => !LuckValkosIsShown);
  setLuckValkosActive (current => !LuckValkosIsShown);
  setLuckValkosAtk (value => 0);
  setLuckValkosDef (value => 0);
  setLuckValkosLuck (value => 0);
  };

const handleEenrisSwitchNoClick = event => {
  setEenrisIsShown (current => !EenrisIsShown);
  setEenrisActive (current => !EenrisIsShown);
  setEenrisAtk (value => 0);
  setEenrisDef (value => 0);
  setEenrisLuck (value => 0);
  };

const handleAtkEenrisSwitchNoClick = event => {
  setAtkEenrisIsShown (current => !AtkEenrisIsShown);
  setAtkEenrisActive (current => !AtkEenrisIsShown);
  setAtkEenrisAtk (value => 0);
  setAtkEenrisDef (value => 0);
  setAtkEenrisLuck (value => 0);
  };

const handleDefEenrisSwitchNoClick = event => {
  setDefEenrisIsShown (current => !DefEenrisIsShown);
  setDefEenrisActive (current => !DefEenrisIsShown);
  setDefEenrisAtk (value => 0);
  setDefEenrisDef (value => 0);
  setDefEenrisLuck (value => 0);
  };

const handleLuckEenrisSwitchNoClick = event => {
  setLuckEenrisIsShown (current => !LuckEenrisIsShown);
  setLuckEenrisActive (current => !LuckEenrisIsShown);
  setLuckEenrisAtk (value => 0);
  setLuckEenrisDef (value => 0);
  setLuckEenrisLuck (value => 0);
  };
  
const handleRairaselSwitchNoClick = event => {
  setRairaselIsShown (current => !RairaselIsShown);
  setRairaselActive (current => !RairaselIsShown);
  setRairaselAtk (value => 0);
  setRairaselDef (value => 0);
  setRairaselLuck (value => 0);
  };

const handleAtkRairaselSwitchNoClick = event => {
  setAtkRairaselIsShown (current => !AtkRairaselIsShown);
  setAtkRairaselActive (current => !AtkRairaselIsShown);
  setAtkRairaselAtk (value => 0);
  setAtkRairaselDef (value => 0);
  setAtkRairaselLuck (value => 0);
  };

const handleDefRairaselSwitchNoClick = event => {
  setDefRairaselIsShown (current => !DefRairaselIsShown);
  setDefRairaselActive (current => !DefRairaselIsShown);
  setDefRairaselAtk (value => 0);
  setDefRairaselDef (value => 0);
  setDefRairaselLuck (value => 0);
  };

const handleLuckRairaselSwitchNoClick = event => {
  setLuckRairaselIsShown (current => !LuckRairaselIsShown);
  setLuckRairaselActive (current => !LuckRairaselIsShown);
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

const [CompanionTopAtk, setCompanionTopAtk] = useState(0)
const [CompanionTopDef, setCompanionTopDef] = useState(0)
const [CompanionTopLuck, setCompanionTopLuck] = useState(0)

const totalCompanionTopAtk = Math.max (SuwoAtk, AzadiAtk, LodoAtk, NoanzaAtk, 
  KaiszarAtk, LoksiAtk, ThalamarisAtk, ValkosAtk, EenrisAtk, RairaselAtk, 
  AtkKaiszarAtk, AtkLoksiAtk, AtkThalamarisAtk, AtkValkosAtk, AtkEenrisAtk, 
  AtkRairaselAtk, DefKaiszarAtk, DefLoksiAtk, DefThalamarisAtk, DefValkosAtk, 
  DefEenrisAtk, DefRairaselAtk, LuckKaiszarAtk, LuckLoksiAtk, LuckThalamarisAtk, 
  LuckValkosAtk, LuckEenrisAtk, LuckRairaselAtk, AlderbamAtk, ChysisAtk, MundAtk, WhodiniAtk)

const totalCompanionTopDef = Math.max (SuwoDef, AzadiDef, LodoDef, NoanzaDef, 
  KaiszarDef, LoksiDef, ThalamarisDef, ValkosDef, EenrisDef, RairaselDef, 
  AtkKaiszarDef, AtkLoksiDef, AtkThalamarisDef, AtkValkosDef, AtkEenrisDef, 
  AtkRairaselDef, DefKaiszarDef, DefLoksiDef, DefThalamarisDef, DefValkosDef, 
  DefEenrisDef, DefRairaselDef, LuckKaiszarDef, LuckLoksiDef, LuckThalamarisDef, 
  LuckValkosDef, LuckEenrisDef, LuckRairaselDef, AlderbamDef, ChysisDef, MundDef, WhodiniDef)

const totalCompanionTopLuck = Math.max (SuwoLuck, AzadiLuck, LodoLuck, NoanzaLuck, 
  KaiszarLuck, LoksiLuck, ThalamarisLuck, ValkosLuck, EenrisLuck, RairaselLuck, 
  AtkKaiszarLuck, AtkLoksiLuck, AtkThalamarisLuck, AtkValkosLuck, AtkEenrisLuck, 
  AtkRairaselLuck, DefKaiszarLuck, DefLoksiLuck, DefThalamarisLuck, DefValkosLuck, 
  DefEenrisLuck, DefRairaselLuck, LuckKaiszarLuck, LuckLoksiLuck, LuckThalamarisLuck, 
  LuckValkosLuck, LuckEenrisLuck, LuckRairaselLuck, AlderbamLuck, ChysisLuck, MundLuck, WhodiniLuck)

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

const [LeagsungWoodenSwordIsShown, setLeagsungWoodenSwordIsShown] = useState(false)
const [LeagsungWoodenSwordActive, setLeagsungWoodenSwordActive] = useState(false)
const [LeagsungWoodenSwordNoIsShown, setLeagsungWoodenSwordNoIsShown] = useState(false)
const [LeagsungWoodenSwordNoActive, setLeagsungWoodenSwordNoActive] = useState(false)
const [LeagsungWoodenSwordAtk, setLeagsungWoodenSwordAtk] = useState(0)
const [LeagsungWoodenSwordDef, setLeagsungWoodenSwordDef] = useState(0)
const [LeagsungWoodenSwordLuck, setLeagsungWoodenSwordLuck] = useState(0)

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
  };

  const handleWoodSpearClick = event => {
  setWoodSpearIsShown (current => !WoodSpearIsShown);
  setWoodSpearActive (current => !WoodSpearActive);
  setWoodSpearAtk (value => 4);
  setWoodSpearDef (value => 1);
  setWoodSpearLuck (value => 0);
  };

  const handleSteelSwordClick = event => {
  setSteelSwordIsShown (current => !SteelSwordIsShown);
  setSteelSwordActive (current => !SteelSwordActive);
  setSteelSwordAtk (value => 10);
  setSteelSwordDef (value => 0);
  setSteelSwordLuck (value => 0);
  };

  const handleSteelMaceClick = event => {
  setSteelMaceIsShown (current => !SteelMaceIsShown);
  setSteelMaceActive (current => !SteelMaceActive);
  setSteelMaceAtk (value => 15);
  setSteelMaceDef (value => 0);
  setSteelMaceLuck (value => 0);
  };

  const handleSteelDaggerClick = event => {
  setSteelDaggerIsShown (current => !SteelDaggerIsShown);
  setSteelDaggerActive (current => !SteelDaggerActive);
  setSteelDaggerAtk (value => 4);
  setSteelDaggerDef (value => 0);
  setSteelDaggerLuck (value => 1);
  };

  const handleSpellfireSwordClick = event => {
  setSpellfireSwordIsShown (current => !SpellfireSwordIsShown);
  setSpellfireSwordActive (current => !SpellfireSwordActive);
  setSpellfireSwordAtk (value => 14);
  setSpellfireSwordDef (value => 0);
  setSpellfireSwordLuck (value => 0);
  };

  const handleRainaSwordClick = event => {
  setRainaSwordIsShown (current => !RainaSwordIsShown);
  setRainaSwordActive (current => !RainaSwordActive);
  setRainaSwordAtk (value => 11);
  setRainaSwordDef (value => 0);
  setRainaSwordLuck (value => 8);
  };

  const handleOozeSwordClick = event => {
  setOozeSwordIsShown (current => !OozeSwordIsShown);
  setOozeSwordActive (current => !OozeSwordActive);
  setOozeSwordAtk (value => 10);
  setOozeSwordDef (value => 10);
  setOozeSwordLuck (value => 5);
  };

  const handleNiftraSwordClick = event => {
  setNiftraSwordIsShown (current => !NiftraSwordIsShown);
  setNiftraSwordActive (current => !NiftraSwordActive);
  setNiftraSwordAtk (value => 18);
  setNiftraSwordDef (value => 0);
  setNiftraSwordLuck (value => 0);
  };

  const handleMercurialSwordClick = event => {
  setMercurialSwordIsShown (current => !MercurialSwordIsShown);
  setMercurialSwordActive (current => !MercurialSwordActive);
  setMercurialSwordAtk (value => 11);
  setMercurialSwordDef (value => 11);
  setMercurialSwordLuck (value => 4);
  };

  const handleLeagsungWoodenSwordClick = event => {
  setLeagsungWoodenSwordIsShown (current => !LeagsungWoodenSwordIsShown);
  setLeagsungWoodenSwordActive (current => !LeagsungWoodenSwordActive);
  setLeagsungWoodenSwordAtk (value => 3);
  setLeagsungWoodenSwordDef (value => 0);
  setLeagsungWoodenSwordLuck (value => 1);
  };

  const handleKingMaiSwordClick = event => {
  setKingMaiSwordIsShown (current => !KingMaiSwordIsShown);
  setKingMaiSwordActive (current => !KingMaiSwordActive);
  setKingMaiSwordAtk (value => 28);
  setKingMaiSwordDef (value => 5);
  setKingMaiSwordLuck (value => 2);
  };

  const handleGlassScimitarClick = event => {
  setGlassScimitarIsShown (current => !GlassScimitarIsShown);
  setGlassScimitarActive (current => !GlassScimitarActive);
  setGlassScimitarAtk (value => 9);
  setGlassScimitarDef (value => 0);
  setGlassScimitarLuck (value => 4);
  };

  const handleFusionSwordClick = event => {
  setFusionSwordIsShown (current => !FusionSwordIsShown);
  setFusionSwordActive (current => !FusionSwordActive);
  setFusionSwordAtk (value => 25);
  setFusionSwordDef (value => 0);
  setFusionSwordLuck (value => 0);
  };

  const handleFlowerSlingshotClick = event => {
  setFlowerSlingshotIsShown (current => !FlowerSlingshotIsShown);
  setFlowerSlingshotActive (current => !FlowerSlingshotActive);
  setFlowerSlingshotAtk (value => 17);
  setFlowerSlingshotDef (value => 0);
  setFlowerSlingshotLuck (value => 8);
  };

  const handleDragonTailSwordClick = event => {
  setDragonTailSwordIsShown (current => !DragonTailSwordIsShown);
  setDragonTailSwordActive (current => !DragonTailSwordActive);
  setDragonTailSwordAtk (value => 10);
  setDragonTailSwordDef (value => 4);
  setDragonTailSwordLuck (value => 4);
  };

  const handleDragonClawHookClick = event => {
  setDragonClawHookIsShown (current => !DragonClawHookIsShown);
  setDragonClawHookActive (current => !DragonClawHookActive);
  setDragonClawHookAtk (value => 14);
  setDragonClawHookDef (value => 2);
  setDragonClawHookLuck (value => 0);
  };

  const handleDawnSwordClick = event => {
  setDawnSwordIsShown (current => !DawnSwordIsShown);
  setDawnSwordActive (current => !DawnSwordActive);
  setDawnSwordAtk (value => 16);
  setDawnSwordDef (value => 0);
  setDawnSwordLuck (value => 2);
  };

  const handleDarkForestSwordOldClick = event => {
  setDarkForestSwordOldIsShown (current => !DarkForestSwordOldIsShown);
  setDarkForestSwordOldActive (current => !DarkForestSwordOldActive);
  setDarkForestSwordOldAtk (value => 12);
  setDarkForestSwordOldDef (value => 0);
  setDarkForestSwordOldLuck (value => 12);
  };

  const handleDarkForestSwordClick = event => {
  setDarkForestSwordIsShown (current => !DarkForestSwordIsShown);
  setDarkForestSwordActive (current => !DarkForestSwordActive);
  setDarkForestSwordAtk (value => 15);
  setDarkForestSwordDef (value => 0);
  setDarkForestSwordLuck (value => 2);
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

  const handleLeagsungWoodenSwordNoClick = event => {
  setLeagsungWoodenSwordIsShown (current => !LeagsungWoodenSwordIsShown);
  setLeagsungWoodenSwordActive (current => !LeagsungWoodenSwordActive);
  setLeagsungWoodenSwordAtk (value => 0);
  setLeagsungWoodenSwordDef (value => 0);
  setLeagsungWoodenSwordLuck (value => 0);
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



//Weapon2 battle items//

const [NoWeapon2, setNoWeapon2] = useState(0)
const [NoWeapon2IsShown, setNoWeapon2IsShown] = useState(false)
const [NoWeapon2Active, setNoWeapon2Active] = useState(false)

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
  };

const handlePoePickClick = event => {
  setPoePickIsShown (current => !PoePickIsShown);
  setPoePickActive (current => !PoePickActive);
  setPoePickAtk (value => 15);
  setPoePickDef (value => 5);
  setPoePickLuck (value => 8);
    };

const handleFusionCrossbowNoClick = event => {
  setFusionCrossbowIsShown (current => !FusionCrossbowIsShown);
  setFusionCrossbowActive (current => !FusionCrossbowActive);
  setFusionCrossbowAtk (value => 0);
  setFusionCrossbowDef (value => 0);
  setFusionCrossbowLuck (value => 0);
  };

const handlePoePickNoClick = event => {
  setPoePickIsShown (current => !PoePickIsShown);
  setPoePickActive (current => !PoePickActive);
  setPoePickAtk (value => 0);
  setPoePickDef (value => 0);
  setPoePickLuck (value => 0);
    };

const handleMountainMaceClick = event => {
  setMountainMaceIsShown (current => !MountainMaceIsShown);
  setMountainMaceActive (current => !MountainMaceActive);
  setMountainMaceAtk (value => 2);
  setMountainMaceDef (value => 20);
  setMountainMaceLuck (value => 2);
  };

const handleMountainMaceNoClick = event => {
  setMountainMaceIsShown (current => !MountainMaceIsShown);
  setMountainMaceActive (current => !MountainMaceActive);
  setMountainMaceAtk (value => 0);
  setMountainMaceDef (value => 0);
  setMountainMaceLuck (value => 0);
    };

const handleNivaliBowClick = event => {
  setNivaliBowIsShown (current => !NivaliBowIsShown);
  setNivaliBowActive (current => !NivaliBowActive);
  setNivaliBowAtk (value => 28);
  setNivaliBowDef (value => 0);
  setNivaliBowLuck (value => 0);
  };

const handleNivaliBowNoClick = event => {
  setNivaliBowIsShown (current => !NivaliBowIsShown);
  setNivaliBowActive (current => !NivaliBowActive);
  setNivaliBowAtk (value => 0);
  setNivaliBowDef (value => 0);
  setNivaliBowLuck (value => 0);
    };  
  
const handleNivaliSlingshotClick = event => {
  setNivaliSlingshotIsShown (current => !NivaliSlingshotIsShown);
  setNivaliSlingshotActive (current => !NivaliSlingshotActive);
  setNivaliSlingshotAtk (value => 10);
  setNivaliSlingshotDef (value => 10);
  setNivaliSlingshotLuck (value => 0);
    };

const handleNivaliSlingshotNoClick = event => {
  setNivaliSlingshotIsShown (current => !NivaliSlingshotIsShown);
  setNivaliSlingshotActive (current => !NivaliSlingshotActive);
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
setSuwoIsShown (current => false);
setSuwoActive (current => false);
setSuwoAtk (value => 0);
setSuwoDef (value => 0);
setSuwoLuck (value => 0);
setAzadiIsShown (current => false);
setAzadiActive (current => false);
setAzadiAtk (value => 0);
setAzadiDef (value => 0);
setAzadiLuck (value => 0);
setLodoIsShown (current => false);
setLodoActive (current => false);
setLodoAtk (value => 0);
setLodoDef (value => 0);
setLodoLuck (value => 0);
setNoanzaIsShown (current => false);
setNoanzaActive (current => false);
setNoanzaAtk (value => 0);
setNoanzaDef (value => 0);
setNoanzaLuck (value => 0);
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
setSuwoIsShown (current => true);
setSuwoActive (current => true);
setSuwoAtk (value => 3);
setSuwoDef (value => 7);
setSuwoLuck (value => 2);
setAzadiIsShown (current => true);
setAzadiActive (current => true);
setAzadiAtk (value => 5);
setAzadiDef (value => 0);
setAzadiLuck (value => 10);
setLodoIsShown (current => false);
setLodoActive (current => false);
setLodoAtk (value => 0);
setLodoDef (value => 0);
setLodoLuck (value => 0);
setNoanzaIsShown (current => false);
setNoanzaActive (current => false);
setNoanzaAtk (value => 0);
setNoanzaDef (value => 0);
setNoanzaLuck (value => 0);
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
setSuwoIsShown (current => true);
setSuwoActive (current => true);
setSuwoAtk (value => 3);
setSuwoDef (value => 7);
setSuwoLuck (value => 2);
setAzadiIsShown (current => true);
setAzadiActive (current => true);
setAzadiAtk (value => 5);
setAzadiDef (value => 0);
setAzadiLuck (value => 10);
setLodoIsShown (current => true);
setLodoActive (current => true);
setLodoAtk (value => 12);
setLodoDef (value => 2);
setLodoLuck (value => 0);
setNoanzaIsShown (current => false);
setNoanzaActive (current => false);
setNoanzaAtk (value => 0);
setNoanzaDef (value => 0);
setNoanzaLuck (value => 0);
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
setSuwoIsShown (current => true);
setSuwoActive (current => true);
setSuwoAtk (value => 3);
setSuwoDef (value => 7);
setSuwoLuck (value => 2);
setAzadiIsShown (current => true);
setAzadiActive (current => true);
setAzadiAtk (value => 5);
setAzadiDef (value => 0);
setAzadiLuck (value => 10);
setLodoIsShown (current => true);
setLodoActive (current => true);
setLodoAtk (value => 12);
setLodoDef (value => 2);
setLodoLuck (value => 0);
setNoanzaIsShown (current => false);
setNoanzaActive (current => false);
setNoanzaAtk (value => 0);
setNoanzaDef (value => 0);
setNoanzaLuck (value => 0);
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
setSuwoIsShown (current => true);
setSuwoActive (current => true);
setSuwoAtk (value => 3);
setSuwoDef (value => 7);
setSuwoLuck (value => 2);
setAzadiIsShown (current => true);
setAzadiActive (current => true);
setAzadiAtk (value => 5);
setAzadiDef (value => 0);
setAzadiLuck (value => 10);
setLodoIsShown (current => true);
setLodoActive (current => true);
setLodoAtk (value => 12);
setLodoDef (value => 2);
setLodoLuck (value => 0);
setNoanzaIsShown (current => false);
setNoanzaActive (current => false);
setNoanzaAtk (value => 0);
setNoanzaDef (value => 0);
setNoanzaLuck (value => 0);
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
setSuwoIsShown (current => true);
setSuwoActive (current => true);
setSuwoAtk (value => 3);
setSuwoDef (value => 7);
setSuwoLuck (value => 2);
setAzadiIsShown (current => true);
setAzadiActive (current => true);
setAzadiAtk (value => 5);
setAzadiDef (value => 0);
setAzadiLuck (value => 10);
setLodoIsShown (current => true);
setLodoActive (current => true);
setLodoAtk (value => 12);
setLodoDef (value => 2);
setLodoLuck (value => 0);
setNoanzaIsShown (current => true);
setNoanzaActive (current => true);
setNoanzaAtk (value => 0);
setNoanzaDef (value => 14);
setNoanzaLuck (value => 6);
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

const TopAttackCompanion16 = () => {
  if (totalCompanionTopAtk === 16)
    return (
  <Text>Attack-Armor Kaiszar</Text>
  )
};

const TopAttackCompanion12 = () => {
  if (totalCompanionTopAtk === 12)
    return (
  <Text>Kaiszar, Defense Kaiszar, Luck Kaiszar, Chysis, Lodo</Text>
  )
};


  return (
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" maxW='100%'>
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

  <Accordion with='290px' mt='25px' allowMultiple w={350}>
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
            <Button w='90px' h='60px' pb={5} onClick={handleForestRegionClick} style={{ backgroundColor: ForestRegionActive ? "#2d1b59" : "#2D3748" }}>
          <Text fontSize='md' align='center' pt='18px'>Forest<br/>Region</Text>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='90px' h='60px' pb={5} onClick={handleDesertRegionClick} style={{ backgroundColor: DesertRegionActive ? "#2d1b59" : "#2D3748" }}>
        <Text fontSize='md' align='center' pt='18px'>Desert<br/>Region</Text>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='90px' h='60px' pb={5} onClick={handleWaterRegionClick} style={{ backgroundColor: WaterRegionActive ? "#2d1b59" : "#2D3748" }}>
        <Text fontSize='md' align='center' pt='18px'>Water<br/>Region</Text>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='90px' h='60px' pb={5} onClick={handleDustRegionClick} style={{ backgroundColor: DustRegionActive ? "#2d1b59" : "#2D3748" }}>
        <Text fontSize='md' align='center' pt='18px'>Dust<br/>Region</Text>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='90px' h='60px' pb={5} onClick={handleLightRegionClick} style={{ backgroundColor: LightRegionActive ? "#2d1b59" : "#2D3748" }}>
        <Text fontSize='md' align='center' pt='18px'>Light<br/>Region</Text>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='90px' h='60px' pb={5} onClick={handleWorld2RegionClick} style={{ backgroundColor: World2RegionActive ? "#2d1b59" : "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleLuciolaForestClick} style={{ backgroundColor: LuciolaForestActive ? "#2d1b59" : "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleMamaTreeClick} style={{ backgroundColor: MamaTreeActive ? "#2d1b59" : "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleRizaRivertownClick} style={{ backgroundColor: RizaRivertownActive ? "#2d1b59" : "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleFloatingCityClick} style={{ backgroundColor: FloatingCityActive ? "#2d1b59" : "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleEarlyCoLClick} style={{ backgroundColor: EarlyCoLActive ? "#2d1b59" : "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleLateCoLClick} style={{ backgroundColor: LateCoLActive ? "#2d1b59" : "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleDCClick} style={{ backgroundColor: DCActive ? "#2d1b59" : "#2D3748" }}>
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

          {World2RegionIsShown &&
          <Text fontSize='md' mt='25px' mb='15px'><b>Your furthest main location:</b></Text>
        }
{World2RegionIsShown &&
          <Wrap justify='center'>
            <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleNivaliClick} style={{ backgroundColor: NivaliActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/ba/NivaliCampIcon.png/'
      /> <Text fontSize='sm' align='center'>Nivali<br/>Camp</Text>
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
            <Button w='90px' h='110px' pb={5} onClick={handleAurilisClick} style={{ backgroundColor: AurilisActive ? "#2d1b59" : "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleAurilisClick} style={{ backgroundColor: AurilisActive ? "#2d1b59" : "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleElderLibraryClick} style={{ backgroundColor: ElderLibraryActive ? "#2d1b59" : "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleDesertRegionNoneSideRegionsClick} style={{ backgroundColor: DesertRegionNoneSideRegionsActive ? "#2d1b59" : "#2D3748" }}>
            <Text fontSize='md' mt='35px' mb='15px'><b>Unselect<br/>All</b></Text>
            </Button>
            </WrapItem>}
            <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleAurilisClick} style={{ backgroundColor: AurilisActive ? "#2d1b59" : "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleElderLibraryClick} style={{ backgroundColor: ElderLibraryActive ? "#2d1b59" : "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleDragonLairClick} style={{ backgroundColor: DragonLairActive ? "#2d1b59" : "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleAurilisClick} style={{ backgroundColor: AurilisActive ? "#2d1b59" : "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleElderLibraryClick} style={{ backgroundColor: ElderLibraryActive ? "#2d1b59" : "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleDragonLairClick} style={{ backgroundColor: DragonLairActive ? "#2d1b59" : "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleRainaClick} style={{ backgroundColor: RainaActive ? "#2d1b59" : "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleAurilisClick} style={{ backgroundColor: AurilisActive ? "#2d1b59" : "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleElderLibraryClick} style={{ backgroundColor: ElderLibraryActive ? "#2d1b59" : "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleDragonLairClick} style={{ backgroundColor: DragonLairActive ? "#2d1b59" : "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleRainaClick} style={{ backgroundColor: RainaActive ? "#2d1b59" : "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleCloudsClick} style={{ backgroundColor: CloudsActive ? "#2d1b59" : "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleDawnClick} style={{ backgroundColor: DawnActive ? "#2d1b59" : "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleTempestClick} style={{ backgroundColor: TempestActive ? "#2d1b59" : "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleAurilisClick} style={{ backgroundColor: AurilisActive ? "#2d1b59" : "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleElderLibraryClick} style={{ backgroundColor: ElderLibraryActive ? "#2d1b59" : "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleDragonLairClick} style={{ backgroundColor: DragonLairActive ? "#2d1b59" : "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleRainaClick} style={{ backgroundColor: RainaActive ? "#2d1b59" : "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleCloudsClick} style={{ backgroundColor: CloudsActive ? "#2d1b59" : "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleDawnClick} style={{ backgroundColor: DawnActive ? "#2d1b59" : "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleTempestClick} style={{ backgroundColor: TempestActive ? "#2d1b59" : "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleGardenClick} style={{ backgroundColor: GardenActive ? "#2d1b59" : "#2D3748" }}>
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
  
{OwnedIsShown &&
  <AccordionItem>
  <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='center' p={3}>
        <Heading as='h3' size='lg'>Your Companions</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <Box h='400px' overflowY='scroll'>
          <Text fontSize='md' mt='25px' mb='15px'><b>Main Quest Companions:</b></Text>
                <Wrap justify='center'>

   {(DCIsShown || World2RegionIsShown) && !NoanzaIsShown &&
           <WrapItem>
            <Button w='290px' h='110px' pb={5} onClick={handleNoanzaClick} style={{ backgroundColor: "#2D3748" }}>
       <HStack justify='center'>  
       <Image
        mt='12px'
        align='center' 
        boxSize='4rem'
        src='https://static.wikia.nocookie.net/4thewords/images/d/df/Noanza.png/'
      /> 
      <VStack>
      <Text fontSize='md' mt='15px' align='center'><b>Noanza</b></Text>
      <Text fontSize='sm' align='center'>+0 Atk / +14 Def / +6 Luck </Text>
      </VStack>
      </HStack>
            </Button>
            </WrapItem>}

   {(DCIsShown || World2RegionIsShown) && NoanzaIsShown &&
           <WrapItem>
            <Button w='290px' h='110px' pb={5} onClick={handleNoanzaNoClick} style={{ backgroundColor: "#2d1b59"}}>
      <HStack justify='center'>  
       <Image
        mt='12px'
        align='center' 
        boxSize='4rem'
        src='https://static.wikia.nocookie.net/4thewords/images/d/df/Noanza.png/'
      /> 
      <VStack>
  <Text fontSize='md' mt='15px' align='center'><b>Noanza</b></Text>
  <Text fontSize='sm' align='center'>+0 Atk / +14 Def / +6 Luck </Text>
      </VStack>
      </HStack>
      </Button>
      </WrapItem>}


{(FloatingCityIsShown || DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) && !LodoIsShown &&
            <WrapItem>
            <Button w='290px' h='110px' pb={5} onClick={handleLodoClick} style={{ backgroundColor: "#2D3748" }}>
    <HStack justify='center'> 
       <Image
        mt='12px'
        align='center' 
        boxSize='4rem'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e6/Lodo.png/'
      /> 
      <VStack>
      <Text fontSize='md' align='center'><b>Lodo</b></Text>
      <Text fontSize='sm' align='center'>+12 Atk / +2 Def / +0 Luck </Text>
      </VStack>
      </HStack>
            </Button>
            </WrapItem>}

{(FloatingCityIsShown || DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) && LodoIsShown &&
            <WrapItem>
            <Button w='290px' h='110px' pb={5} onClick={handleLodoNoClick} style={{ backgroundColor: "#2d1b59" }}>
       <HStack justify='center'>  
       <Image
        mt='12px'
        align='center' 
        boxSize='4rem'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e6/Lodo.png/'
      /> 
      <VStack>
      <Text fontSize='md' align='center'><b>Lodo</b></Text>
      <Text fontSize='sm' align='center'>+12 Atk / +2 Def / +0 Luck </Text>
      </VStack>
      </HStack>
            </Button>
            </WrapItem>}

{(ThreePCIsShown || WaterRegionIsShown || DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) && !AzadiIsShown &&
            <WrapItem>
            <Button w='290px' h='110px' pb={5} onClick={handleAzadiClick} style={{ backgroundColor: "#2D3748" }}>
    <HStack justify='center'> 
       <Image
        mt='12px'
        align='center' 
        boxSize='4rem'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a8/Azadi.png/'
      /> 
      <VStack>
      <Text fontSize='md' align='center'><b>Azadi</b></Text>
      <Text fontSize='sm' align='center'>+5 Atk / +0 Def / +10 Luck </Text>
      </VStack>
      </HStack>
            </Button>
            </WrapItem>}

{(ThreePCIsShown || WaterRegionIsShown || DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) && AzadiIsShown &&
            <WrapItem>
            <Button w='290px' h='110px' pb={5} onClick={handleAzadiNoClick} style={{ backgroundColor: "#2d1b59" }}>
       <HStack justify='center'>  
       <Image
        mt='12px'
        align='center' 
        boxSize='4rem'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a8/Azadi.png/'
      /> 
      <VStack>
      <Text fontSize='md' align='center'><b>Azadi</b></Text>
      <Text fontSize='sm' align='center'>+5 Atk / +0 Def / +10 Luck </Text>
      </VStack>
      </HStack>
            </Button>
            </WrapItem>}

{(MamaTreeIsShown || ThreePCIsShown || WaterRegionIsShown || DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) && !SuwoIsShown &&
            <WrapItem>
            <Button w='290px' h='110px' pb={5} onClick={handleSuwoClick} style={{ backgroundColor: "#2D3748" }}>
    <HStack justify='center'> 
       <Image
        mt='12px'
        align='center' 
        boxSize='4rem'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/Suwo.png/'
      /> 
      <VStack>
      <Text fontSize='md' align='center'><b>Suwo</b></Text>
      <Text fontSize='sm' align='center'>+3 Atk / +7 Def / +2 Luck </Text>
      </VStack>
      </HStack>
            </Button>
            </WrapItem>}

{(MamaTreeIsShown || ThreePCIsShown || WaterRegionIsShown || DustRegionIsShown || LightRegionIsShown || World2RegionIsShown) && SuwoIsShown &&
            <WrapItem>
            <Button w='290px' h='110px' pb={5} onClick={handleSuwoNoClick} style={{ backgroundColor: "#2d1b59" }}>
       <HStack justify='center'>  
       <Image
        mt='12px'
        align='center' 
        boxSize='4rem'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/Suwo.png/'
      /> 
      <VStack>
      <Text fontSize='md' align='center'><b>Suwo</b></Text>
      <Text fontSize='sm' align='center'>+3 Atk / +7 Def / +2 Luck </Text>
      </VStack>
      </HStack>
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
            <Button w='290px' h='110px' pb={5} onClick={handleKaiszarClick} style={{ backgroundColor: "#2D3748" }}>
       <HStack justify='center'> 
       <Image
        mt='12px'
        align='center' 
        boxSize='5rem'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fa/Kaiszar.png/'
      /> 
      <VStack>
      <Text fontSize='md' mt='15px' align='center'><b>Kaiszar</b></Text>
      <Text fontSize='sm' align='center'>+12 Atk / +0 Def / +0 Luck </Text>
      </VStack>
      </HStack>
            </Button>
            </WrapItem>}

{KaiszarIsShown &&
           <WrapItem>
            <Button w='290px' h='110px' pb={5} onClick={handleKaiszarNoClick} style={{ backgroundColor: "#2d1b59"}}>
       {!AtkKaiszarIsShown && !DefKaiszarIsShown && !LuckKaiszarIsShown &&
       <HStack justify='center'> 
       <Image
        mt='12px'
        align='center' 
        boxSize='5rem'
                src='https://static.wikia.nocookie.net/4thewords/images/f/fa/Kaiszar.png/'
      /> 
      <VStack>
  <Text fontSize='md' mt='15px' align='center'><b>Kaiszar</b></Text>
  <Text fontSize='sm' align='center'>+12 Atk / +0 Def / +0 Luck </Text>
  
      </VStack>
      </HStack>}
{AtkKaiszarIsShown && !DefKaiszarIsShown && !LuckKaiszarIsShown &&
      <HStack justify='center'> 
       <Image
        mt='12px'
        align='center' 
        boxSize='4rem'
        src='https://i.imgur.com/gbuo4mt.png'
      /> 
  <VStack>
  <Text fontSize='md' mt='15px' align='center'><b>Attack Kaiszar</b></Text>
  <Text fontSize='sm' align='center'>+16 Atk / +0 Def / +0 Luck </Text>

  </VStack>
  </HStack>
  }
  {!AtkKaiszarIsShown && DefKaiszarIsShown && !LuckKaiszarIsShown &&
  <HStack justify='center'> 
       <Image
        mt='12px'
        align='center' 
        boxSize='4rem'
        src='https://i.imgur.com/LGazi9x.png'
      /> 
  <VStack>    
  <Text fontSize='md' mt='15px' align='center'><b>Defense Kaiszar</b></Text>
  <Text fontSize='sm' align='center'>+12 Atk / +4 Def / +0 Luck </Text>
  </VStack>
  </HStack>
  }
         {!AtkKaiszarIsShown && !DefKaiszarIsShown && LuckKaiszarIsShown &&
         <HStack justify='center'> 
       <Image
        mt='12px'
        align='center' 
        boxSize='4rem'
        src='https://i.imgur.com/gbpdG0f.png'
      /> 
  <VStack>
  <Text fontSize='md' mt='15px' align='center'><b>Luck Kaiszar</b></Text>
  <Text fontSize='sm' align='center'>+12 Atk / +0 Def / +4 Luck </Text>
  </VStack> 
  </HStack>}

            </Button>
            </WrapItem>}

{!AtkKaiszarIsShown &&
            <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleAtkKaiszarClick} style={{ backgroundColor: "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleAtkKaiszarNoClick} style={{ backgroundColor: "#2d1b59"}}>
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

{!DefKaiszarIsShown &&
           <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleDefKaiszarClick} style={{ backgroundColor: "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleDefKaiszarNoClick} style={{ backgroundColor: "#2d1b59" }}>
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

{!LuckKaiszarIsShown &&
           <WrapItem>
            <Button w='90px' h='110px' pb={5} onClick={handleLuckKaiszarClick} style={{ backgroundColor: "#2D3748" }}>
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
            <Button w='90px' h='110px' pb={5} onClick={handleLuckKaiszarNoClick} style={{ backgroundColor: "#2d1b59" }}>
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

            {!LoksiIsShown &&
  <WrapItem>
   <Button w='290px' h='110px' pb={5} onClick={handleLoksiClick} style={{ backgroundColor: "#2D3748" }}>
<HStack justify='center'>  
<Image
ml='-15px'
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/7/75/Loksi.png'
mr='5px'
/> 
<VStack>
<Text fontSize='md' mt='15px' align='center'><b>Loksi</b></Text>
<Text fontSize='sm' align='center'>+0 Atk / +12 Def / +0 Luck </Text>
</VStack>
</HStack>
   </Button>
   </WrapItem>}
{LoksiIsShown && 
  <WrapItem>
   <Button w='290px' h='110px' pb={5} onClick={handleLoksiNoClick} style={{ backgroundColor: "#2d1b59"}}>
   {!AtkLoksiIsShown && !DefLoksiIsShown && !LuckLoksiIsShown &&
<HStack justify='center'>  
<Image
ml='-15px'
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/7/75/Loksi.png'
mr='5px'
/> 
<VStack>
  <Text fontSize='md' mt='15px' align='center'><b>Loksi</b></Text>
  <Text fontSize='sm' align='center'>+0 Atk / +12 Def / +0 Luck </Text>
</VStack>
</HStack>}
{AtkLoksiIsShown && !DefLoksiIsShown && !LuckLoksiIsShown &&
<HStack justify='center'>  
<Image
ml='-15px'
mt='12px'
align='center' 
boxSize='4rem'
src='https://i.imgur.com/Zb1N51B.png'
mr='5px'
/> 
<VStack>
<Text fontSize='md' mt='15px' align='center'><b>Attack Loksi</b></Text>
<Text fontSize='sm' align='center'>+4 Atk / +12 Def / +0 Luck </Text>
</VStack>
</HStack>}
{!AtkLoksiIsShown && DefLoksiIsShown && !LuckLoksiIsShown &&
<HStack justify='center'>  
<Image
ml='-15px'
mt='12px'
align='center' 
boxSize='4rem'
src='https://i.imgur.com/zGo6cCD.png'
mr='5px'
/> 
<VStack>
<Text fontSize='md' mt='15px' align='center'><b>Defense Loksi</b></Text>
<Text fontSize='sm' align='center'>+0 Atk / +16 Def / +0 Luck </Text>
</VStack>
</HStack>}
{!AtkLoksiIsShown && !DefLoksiIsShown && LuckLoksiIsShown &&
<HStack justify='center'>  
<Image
ml='-15px'
mt='12px'
align='center' 
boxSize='4rem'
src='https://i.imgur.com/bgb1J58.png'
mr='5px'
/> 
<VStack>
<Text fontSize='md' mt='15px' align='center'><b>Luck Loksi</b></Text>
<Text fontSize='sm' align='center'>+0 Atk / +12 Def / +4 Luck </Text>
</VStack>
</HStack>}

</Button>
</WrapItem>}


{!AtkLoksiIsShown &&
   <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleAtkLoksiClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/1/1d/AttackUpgrade.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Loksi:<br/>Attack Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{AtkLoksiIsShown &&
   <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleAtkLoksiNoClick} style={{ backgroundColor: "#2d1b59"}}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/1/1d/AttackUpgrade.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Loksi:<br/>Attack Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{!DefLoksiIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleDefLoksiClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/b/b4/DefenseUpgrade.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Loksi:<br/>Def. Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{DefLoksiIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleDefLoksiNoClick} style={{ backgroundColor: "#2d1b59" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/b/b4/DefenseUpgrade.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Loksi:<br/>Def. Boost</Text>
</VStack>
   </Button>
   </WrapItem>}            

{!LuckLoksiIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleLuckLoksiClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/8/8b/LuckUpgrade.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Loksi:<br/>Luck Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{LuckLoksiIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleLuckLoksiNoClick} style={{ backgroundColor: "#2d1b59" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/8/8b/LuckUpgrade.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Loksi:<br/>Luck Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

   <WrapItem>
   {!ThalamarisIsShown && !AtkThalamarisIsShown && !DefThalamarisIsShown && !LuckThalamarisIsShown &&
     <Button w='290px' h='110px' pb={5} onClick={handleThalamarisClick} style={{ backgroundColor: "#2D3748" }}>  
<HStack justify='center'>  
<Image
ml='-15px'
mt='12px'
align='center' 
boxSize='5rem'
src='https://static.wikia.nocookie.net/4thewords/images/4/4a/Thalamaris.png/'
mr='5px'
/> 
<VStack>
<Text fontSize='md' mt='15px' align='center'><b>Thalamaris</b></Text>
<Text fontSize='sm' align='center'>+0 Atk / +0 Def / +12 Luck </Text>
</VStack>
</HStack>
</Button>}

{ThalamarisIsShown &&
<Button w='290px' h='110px' pb={5} onClick={handleThalamarisNoClick} style={{ backgroundColor: "#2d1b59" }}> 
{!AtkThalamarisIsShown && !DefThalamarisIsShown && !LuckThalamarisIsShown &&
<HStack justify='center'>  
<Image
ml='-15px'
mt='12px'
align='center' 
boxSize='5rem'
src='https://static.wikia.nocookie.net/4thewords/images/4/4a/Thalamaris.png/'
mr='5px'
/> 
<VStack>
  <Text fontSize='md' mt='15px' align='center'><b>Thalamaris</b></Text>
  <Text fontSize='sm' align='center'>+0 Atk / +0 Def / +12 Luck </Text>
</VStack>
</HStack>}

{AtkThalamarisIsShown && !DefThalamarisIsShown && !LuckThalamarisIsShown &&
<HStack justify='center'>  
<Image
ml='-15px'
mt='12px'
align='center' 
boxSize='4rem'
src='https://i.imgur.com/fe9fXNc.png'
mr='5px'
/> 
<VStack>
<Text fontSize='md' mt='15px' align='center'><b>Attack Thalamaris</b></Text>
<Text fontSize='sm' align='center'>+4 Atk / +0 Def / +12 Luck </Text>
</VStack>
</HStack>}
{!AtkThalamarisIsShown && DefThalamarisIsShown && !LuckThalamarisIsShown &&
<HStack justify='center'>  
<Image
ml='-15px'
mt='12px'
align='center' 
boxSize='4rem'
src='https://i.imgur.com/1G7xegk.png'
mr='5px'
/> 
<VStack>
<Text fontSize='md' mt='15px' align='center'><b>Defense Thalamaris</b></Text>
<Text fontSize='sm' align='center'>+0 Atk / +4 Def / +12 Luck </Text>
</VStack>
</HStack>}
{!AtkThalamarisIsShown && !DefThalamarisIsShown && LuckThalamarisIsShown &&
<HStack justify='center'>  
<Image
ml='-15px'
mt='12px'
align='center' 
boxSize='4rem'
src='https://i.imgur.com/VpveKDD.png'
mr='5px'
/> 
<VStack>
<Text fontSize='md' mt='15px' align='center'><b>Luck Thalamaris</b></Text>
<Text fontSize='sm' align='center'>+0 Atk / +0 Def / +16 Luck </Text>
</VStack>
</HStack>}
   </Button>}
   </WrapItem>


{!AtkThalamarisIsShown &&
   <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleAtkThalamarisClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/1/1d/AttackUpgrade.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Thalamaris:<br/>Attack Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{AtkThalamarisIsShown &&
   <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleAtkThalamarisNoClick} style={{ backgroundColor: "#2d1b59"}}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/1/1d/AttackUpgrade.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Thalamaris:<br/>Attack Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{!DefThalamarisIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleDefThalamarisClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/b/b4/DefenseUpgrade.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Thalamaris:<br/>Def. Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{DefThalamarisIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleDefThalamarisNoClick} style={{ backgroundColor: "#2d1b59" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/b/b4/DefenseUpgrade.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Thalamaris:<br/>Def. Boost</Text>
</VStack>
   </Button>
   </WrapItem>}            

{!LuckThalamarisIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleLuckThalamarisClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/8/8b/LuckUpgrade.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Thalamaris:<br/>Luck Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{LuckThalamarisIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleLuckThalamarisNoClick} style={{ backgroundColor: "#2d1b59" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/8/8b/LuckUpgrade.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Thalamaris:<br/>Luck Boost</Text>
</VStack>
   </Button>
   </WrapItem>}
   
   {!ValkosIsShown &&
  <WrapItem>
   <Button w='290px' h='110px' pb={5} onClick={handleValkosClick} style={{ backgroundColor: "#2D3748" }}>
<HStack justify='center'>  
<Image
ml='-15px'
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/6/63/Valkos.png'
mr='5px'
/> 
<VStack>
<Text fontSize='md' mt='15px' align='center'><b>Valkos</b></Text>
<Text fontSize='sm' align='center'>+4 Atk / +4 Def / +4 Luck </Text>
</VStack>
</HStack>
   </Button>
   </WrapItem>}

{ValkosIsShown &&
  <WrapItem>
   <Button w='290px' h='110px' pb={5} onClick={handleValkosNoClick} style={{ backgroundColor: "#2d1b59"}}>
   {!AtkValkosIsShown && !DefValkosIsShown && !LuckValkosIsShown &&
<HStack justify='center'>  
<Image
ml='-15px'
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/6/63/Valkos.png'
mr='5px'
/> 
<VStack>
<Text fontSize='md' mt='15px' align='center'><b>Valkos</b></Text>
<Text fontSize='sm' align='center'>+4 Atk / +4 Def / +4 Luck </Text>
  
</VStack>
</HStack>}
{AtkValkosIsShown && !DefValkosIsShown && !LuckValkosIsShown &&
<HStack justify='center'>  
<Image
ml='-15px'
mt='12px'
align='center' 
boxSize='4rem'
src='https://i.imgur.com/Ci51Pa1.png'
mr='5px'
/> 
<VStack>
<Text fontSize='md' mt='15px' align='center'><b>Attack Valkos</b></Text>
<Text fontSize='sm' align='center'>+8 Atk / +4 Def / +4 Luck </Text>
  
</VStack>
</HStack>}
{!AtkValkosIsShown && DefValkosIsShown && !LuckValkosIsShown &&
<HStack justify='center'>  
<Image
ml='-15px'
mt='12px'
align='center' 
boxSize='4rem'
src='https://i.imgur.com/1sMl04A.png'
mr='5px'
/> 
<VStack>
<Text fontSize='md' mt='15px' align='center'><b>Defense Valkos</b></Text>
<Text fontSize='sm' align='center'>+4 Atk / +8 Def / +4 Luck </Text>
  
</VStack>
</HStack>}
{!AtkValkosIsShown && !DefValkosIsShown && LuckValkosIsShown &&
<HStack justify='center'>  
<Image
ml='-15px'
mt='12px'
align='center' 
boxSize='4rem'
src='https://i.imgur.com/pGyg8DO.png'
mr='5px'
/> 
<VStack>
<Text fontSize='md' mt='15px' align='center'><b>Luck Valkos</b></Text>
<Text fontSize='sm' align='center'>+4 Atk / +4 Def / +8 Luck </Text>
  
</VStack>
</HStack>}
   </Button>
   </WrapItem>}




{!AtkValkosIsShown &&
   <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleAtkValkosClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/1/1d/AttackUpgrade.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Valkos:<br/>Attack Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{AtkValkosIsShown &&
   <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleAtkValkosNoClick} style={{ backgroundColor: "#2d1b59"}}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/1/1d/AttackUpgrade.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Valkos:<br/>Attack Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{!DefValkosIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleDefValkosClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/b/b4/DefenseUpgrade.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Valkos:<br/>Def. Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{DefValkosIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleDefValkosNoClick} style={{ backgroundColor: "#2d1b59" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/b/b4/DefenseUpgrade.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Valkos:<br/>Def. Boost</Text>
</VStack>
   </Button>
   </WrapItem>}            

{!LuckValkosIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleLuckValkosClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/8/8b/LuckUpgrade.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Valkos:<br/>Luck Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{LuckValkosIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleLuckValkosNoClick} style={{ backgroundColor: "#2d1b59" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/8/8b/LuckUpgrade.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Valkos:<br/>Luck Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{!EenrisIsShown && !AtkEenrisIsShown && !DefEenrisIsShown && !LuckEenrisIsShown &&
  <WrapItem>
   <Button w='290px' h='110px' pb={5} onClick={handleEenrisClick} style={{ backgroundColor: "#2D3748" }}>
<HStack justify='center'>  
<Image
ml='-15px'
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/1/1d/Eenris.png/'
mr='5px'
/> 
<VStack>
<Text fontSize='md' mt='15px' align='center'><b>Eenris</b></Text>
<Text fontSize='sm' align='center'>+3 Atk / +6 Def / +3 Luck </Text>
</VStack>
</HStack>
   </Button>
   </WrapItem>}

{EenrisIsShown && 
  <WrapItem>
   <Button w='290px' h='110px' pb={5} onClick={handleEenrisNoClick} style={{ backgroundColor: "#2d1b59"}}>
{!AtkEenrisIsShown && !DefEenrisIsShown && !LuckEenrisIsShown &&
<HStack justify='center'>  
<Image
ml='-15px'
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/1/1d/Eenris.png/'
mr='5px'
/> 
<VStack>
<Text fontSize='md' mt='15px' align='center'><b>Eenris</b></Text>
<Text fontSize='sm' align='center'>+3 Atk / +6 Def / +3 Luck </Text>
</VStack>
</HStack>}
{AtkEenrisIsShown && !DefEenrisIsShown && !LuckEenrisIsShown &&
<HStack justify='center'>  
<Image
ml='-15px'
mt='12px'
align='center' 
boxSize='4rem'
src='https://i.imgur.com/lU6zkfR.png'
mr='5px'
/> 
<VStack>
  <Text fontSize='md' mt='15px' align='center'><b>Attack Eenris</b></Text>
  <Text fontSize='sm' align='center'>+7 Atk / +6 Def / +3 Luck </Text>
</VStack>
</HStack>}
{!AtkEenrisIsShown && DefEenrisIsShown && !LuckEenrisIsShown &&
<HStack justify='center'>  
<Image
ml='-15px'
mt='12px'
align='center' 
boxSize='4rem'
src='https://i.imgur.com/5sRBeCz.png'
mr='5px'
/> 
<VStack>
  <Text fontSize='md' mt='15px' align='center'><b>Defense Eenris</b></Text>
  <Text fontSize='sm' align='center'>+3 Atk / +10 Def / +3 Luck </Text>
</VStack>
</HStack>}
{!AtkEenrisIsShown && !DefEenrisIsShown && LuckEenrisIsShown &&
<HStack justify='center'>  
<Image
ml='-15px'
mt='12px'
align='center' 
boxSize='4rem'
src='https://i.imgur.com/exqGLIN.png'
mr='5px'
/> 
<VStack>
  <Text fontSize='md' mt='15px' align='center'><b>Luck Eenris</b></Text>
  <Text fontSize='sm' align='center'>+3 Atk / +6 Def / +7 Luck </Text>
</VStack>
</HStack>}

   </Button>
   </WrapItem>}



{!AtkEenrisIsShown &&
   <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleAtkEenrisClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/1/1d/AttackUpgrade.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Eenris:<br/>Attack Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{AtkEenrisIsShown &&
   <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleAtkEenrisNoClick} style={{ backgroundColor: "#2d1b59"}}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/1/1d/AttackUpgrade.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Eenris:<br/>Attack Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{!DefEenrisIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleDefEenrisClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/b/b4/DefenseUpgrade.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Eenris:<br/>Def. Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{DefEenrisIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleDefEenrisNoClick} style={{ backgroundColor: "#2d1b59" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/b/b4/DefenseUpgrade.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Eenris:<br/>Def. Boost</Text>
</VStack>
   </Button>
   </WrapItem>}            

{!LuckEenrisIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleLuckEenrisClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/8/8b/LuckUpgrade.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Eenris:<br/>Luck Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{LuckEenrisIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleLuckEenrisNoClick} style={{ backgroundColor: "#2d1b59" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/8/8b/LuckUpgrade.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Eenris:<br/>Luck Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{!RairaselIsShown && !AtkRairaselIsShown && !DefRairaselIsShown && !LuckRairaselIsShown &&
  <WrapItem>
   <Button w='290px' h='110px' pb={5} onClick={handleRairaselClick} style={{ backgroundColor: "#2D3748" }}>
<HStack justify='center'>  
<Image
ml='-15px'
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/f/fc/Rairasel.png/'
mr='5px'
/> 
<VStack>
<Text fontSize='md' mt='15px' align='center'><b>Rairasel</b></Text>
<Text fontSize='sm' align='center'>+6 Atk / +0 Def / +6 Luck </Text>
</VStack>
</HStack>
   </Button>
   </WrapItem>}

{RairaselIsShown &&
  <WrapItem>
   <Button w='290px' h='110px' pb={5} onClick={handleRairaselNoClick} style={{ backgroundColor: "#2d1b59"}}>
{!AtkRairaselIsShown && !DefRairaselIsShown && !LuckRairaselIsShown &&
<HStack justify='center'>  
<Image
ml='-15px'
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/f/fc/Rairasel.png/'
mr='5px'
/> 
<VStack>
<Text fontSize='md' mt='15px' align='center'><b>Rairasel</b></Text>
<Text fontSize='sm' align='center'>+6 Atk / +0 Def / +6 Luck </Text>
</VStack>
</HStack>}
{AtkRairaselIsShown && !DefRairaselIsShown && !LuckRairaselIsShown &&
<HStack justify='center'>  
<Image
ml='-15px'
mt='12px'
align='center' 
boxSize='4rem'
src='https://i.imgur.com/YB3iqt7.png'
mr='5px'
/> 
<VStack>
<Text fontSize='md' mt='15px' align='center'><b>Attack Rairasel</b></Text>
<Text fontSize='sm' align='center'>+10 Atk / +0 Def / +6 Luck </Text>
</VStack>
</HStack>}
{!AtkRairaselIsShown && DefRairaselIsShown && !LuckRairaselIsShown &&
<HStack justify='center'>  
<Image
ml='-15px'
mt='12px'
align='center' 
boxSize='4rem'
src='https://i.imgur.com/vgropoV.png'
mr='5px'
/> 
<VStack>
<Text fontSize='md' mt='15px' align='center'><b>Defense Rairasel</b></Text>
<Text fontSize='sm' align='center'>+6 Atk / +4 Def / +6 Luck </Text>
</VStack>
</HStack>}
{!AtkRairaselIsShown && !DefRairaselIsShown && LuckRairaselIsShown &&
<HStack justify='center'>  
<Image
ml='-15px'
mt='12px'
align='center' 
boxSize='4rem'
src='https://i.imgur.com/3GrgauN.png'
mr='5px'
/> 
<VStack>
<Text fontSize='md' mt='15px' align='center'><b>Luck Rairasel</b></Text>
<Text fontSize='sm' align='center'>+6 Atk / +0 Def / +10 Luck </Text>
</VStack>
</HStack>}

   </Button>
   </WrapItem>}


{!AtkRairaselIsShown &&
   <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleAtkRairaselClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/1/1d/AttackUpgrade.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Rairasel:<br/>Attack Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{AtkRairaselIsShown &&
   <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleAtkRairaselNoClick} style={{ backgroundColor: "#2d1b59"}}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/1/1d/AttackUpgrade.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Rairasel:<br/>Attack Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{!DefRairaselIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleDefRairaselClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/b/b4/DefenseUpgrade.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Rairasel:<br/>Def. Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{DefRairaselIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleDefRairaselNoClick} style={{ backgroundColor: "#2d1b59" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/b/b4/DefenseUpgrade.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Rairasel:<br/>Def. Boost</Text>
</VStack>
   </Button>
   </WrapItem>}            

{!LuckRairaselIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleLuckRairaselClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/8/8b/LuckUpgrade.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Rairasel:<br/>Luck Boost</Text>
</VStack>
   </Button>
   </WrapItem>}

{LuckRairaselIsShown &&
  <WrapItem>
   <Button w='90px' h='110px' pb={5} onClick={handleLuckRairaselNoClick} style={{ backgroundColor: "#2d1b59" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/8/8b/LuckUpgrade.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Rairasel:<br/>Luck Boost</Text>
</VStack>
   </Button>
   </WrapItem>}
            </Wrap>
}

{AurilisIsShown &&
<Text fontSize='md' mt='25px' mb='15px'><b>Aurilis Companions:</b></Text>
}

{AurilisIsShown &&
                <Wrap justify='center'>
          {!AlderbamIsShown &&
            <WrapItem>
            <Button w='290px' h='110px' pb={5} onClick={handleAlderbamClick} style={{ backgroundColor: "#2D3748" }}>
    <HStack justify='center'> 
       <Image
        mt='12px'
        align='center' 
        boxSize='4rem'
        src='https://static.wikia.nocookie.net/4thewords/images/9/95/Alderbam.png/'
      /> 
      <VStack>
      <Text fontSize='md' align='center'><b>Alderbam</b></Text>
      <Text fontSize='sm' align='center'>+0 Atk / +0 Def / +12 Luck </Text>
      </VStack>
      </HStack>
            </Button>
            </WrapItem>}

            {AlderbamIsShown &&
            <WrapItem>
            <Button w='290px' h='110px' pb={5} onClick={handleAlderbamNoClick} style={{ backgroundColor: "#2d1b59" }}>
       <HStack justify='center'>  
       <Image
        mt='12px'
        align='center' 
        boxSize='4rem'
        src='https://static.wikia.nocookie.net/4thewords/images/9/95/Alderbam.png/'
      /> 
      <VStack>
      <Text fontSize='md' align='center'><b>Alderbam</b></Text>
      <Text fontSize='sm' align='center'>+0 Atk / +0 Def / +12 Luck </Text>
      </VStack>
      </HStack>
            </Button>
            </WrapItem>}
          {!ChysisIsShown &&
            <WrapItem>
            <Button w='290px' h='110px' pb={5} onClick={handleChysisClick} style={{ backgroundColor: "#2D3748" }}>
    <HStack justify='center'> 
       <Image
        mt='12px'
        align='center' 
        boxSize='4rem'
        src='https://static.wikia.nocookie.net/4thewords/images/9/97/Chysis.png/'
      /> 
      <VStack>
      <Text fontSize='md' align='center'><b>Chysis</b></Text>
      <Text fontSize='sm' align='center'>+12 Atk / +0 Def / +0 Luck </Text>
      </VStack>
      </HStack>
            </Button>
            </WrapItem>}

            {ChysisIsShown &&
            <WrapItem>
            <Button w='290px' h='110px' pb={5} onClick={handleChysisNoClick} style={{ backgroundColor: "#2d1b59" }}>
       <HStack justify='center'>  
       <Image
        mt='12px'
        align='center' 
        boxSize='4rem'
        src='https://static.wikia.nocookie.net/4thewords/images/9/97/Chysis.png/'
      /> 
      <VStack>
      <Text fontSize='md' align='center'><b>Chysis</b></Text>
      <Text fontSize='sm' align='center'>+12 Atk / +0 Def / +0 Luck </Text>
      </VStack>
      </HStack>
            </Button>
            </WrapItem>}                  

    {!MundIsShown &&
            <WrapItem>
            <Button w='290px' h='110px' pb={5} onClick={handleMundClick} style={{ backgroundColor: "#2D3748" }}>
    <HStack justify='center'> 
       <Image
        mt='12px'
        align='center' 
        boxSize='4rem'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e3/Mund.png/'
      /> 
      <VStack>
      <Text fontSize='md' align='center'><b>Mund</b></Text>
      <Text fontSize='sm' align='center'>+4 Atk / +4 Def / +4 Luck </Text>
      </VStack>
      </HStack>
            </Button>
            </WrapItem>}

            {MundIsShown &&
            <WrapItem>
            <Button w='290px' h='110px' pb={5} onClick={handleMundNoClick} style={{ backgroundColor: "#2d1b59" }}>
       <HStack justify='center'>  
       <Image
        mt='12px'
        align='center' 
        boxSize='4rem'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e3/Mund.png/'
      /> 
      <VStack>
      <Text fontSize='md' align='center'><b>Mund</b></Text>
      <Text fontSize='sm' align='center'>+4 Atk / +4 Def / +4 Luck </Text>
      </VStack>
      </HStack>
            </Button>
            </WrapItem>}

     {!WhodiniIsShown &&
            <WrapItem>
            <Button w='290px' h='110px' pb={5} onClick={handleWhodiniClick} style={{ backgroundColor: "#2D3748" }}>
    <HStack justify='center'> 
       <Image
        mt='12px'
        align='center' 
        boxSize='4rem'
        src='https://static.wikia.nocookie.net/4thewords/images/d/d5/Whodini.png/'
      /> 
      <VStack>
      <Text fontSize='md' align='center'><b>Whodini</b></Text>
      <Text fontSize='sm' align='center'>+0 Atk / +12 Def / +0 Luck </Text>
      </VStack>
      </HStack>
            </Button>
            </WrapItem>}

            {WhodiniIsShown &&
            <WrapItem>
            <Button w='290px' h='110px' pb={5} onClick={handleWhodiniNoClick} style={{ backgroundColor: "#2d1b59" }}>
       <HStack justify='center'>  
       <Image
        mt='12px'
        align='center' 
        boxSize='4rem'
        src='https://static.wikia.nocookie.net/4thewords/images/d/d5/Whodini.png/'
      /> 
      <VStack>
      <Text fontSize='md' align='center'><b>Whodini</b></Text>
      <Text fontSize='sm' align='center'>+0 Atk / +12 Def / +0 Luck </Text>
      </VStack>
      </HStack>
            </Button>
            </WrapItem>}

            </Wrap>}


      </Box>
    </AccordionPanel>
  </AccordionItem>
}
<AccordionItem>
  <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='center' p={3}>
        <Heading as='h3' size='lg'>Your Battle Items</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <Box h='400px' overflowY='scroll'>
          <Text fontSize='md' mb='15px'><b>Weapon 1 Items:</b></Text>
                <Wrap justify='center'>
                {(DCIsShown || World2RegionIsShown) && !KingMaiSwordIsShown &&
  <WrapItem>
<Button w='90px' h='110px' pb={5} onClick={handleKingMaiSwordClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/7/7c/KingMaiSword.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>King Mai's<br/>Sword</Text>
</VStack>
  </Button>
  </WrapItem>}
  {(DCIsShown || World2RegionIsShown) && KingMaiSwordIsShown &&
  <WrapItem>
<Button w='90px' h='110px' pb={5} onClick={handleKingMaiSwordNoClick} style={{ backgroundColor: "#2d1b59"}}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/7/7c/KingMaiSword.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>King Mai's<br/>Sword</Text>
</VStack>
  </Button>
  </WrapItem>}

  {(DCIsShown || World2RegionIsShown) && !MercurialSwordIsShown &&
    <WrapItem>
  <Button w='90px' h='110px' pb={5} onClick={handleMercurialSwordClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/d/d7/MercurialSword.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Mercurial<br/>Sword</Text>
</VStack>
    </Button>
    </WrapItem>}
    {(DCIsShown || World2RegionIsShown) && MercurialSwordIsShown &&
    <WrapItem>
  <Button w='90px' h='110px' pb={5} onClick={handleMercurialSwordNoClick} style={{ backgroundColor: "#2d1b59"}}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/d/d7/MercurialSword.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Mercurial<br/>Sword</Text>
</VStack>
    </Button>
    </WrapItem>}
    {(CoLIsShown || DCIsShown || World2RegionIsShown) && !FlowerSlingshotIsShown &&
  <WrapItem>
<Button w='90px' h='110px' pb={5} onClick={handleFlowerSlingshotClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/b/b6/FlowerSlingshot.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Flower<br/>Slingshot</Text>
</VStack>
  </Button>
  </WrapItem>}
  {(CoLIsShown || DCIsShown || World2RegionIsShown) && FlowerSlingshotIsShown &&
  <WrapItem>
<Button w='90px' h='110px' pb={5} onClick={handleFlowerSlingshotNoClick} style={{ backgroundColor: "#2d1b59"}}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/b/b6/FlowerSlingshot.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Flower<br/>Slingshot</Text>
</VStack>
  </Button>
  </WrapItem>}

  {(CoLIsShown || DCIsShown || World2RegionIsShown) && !FusionSwordIsShown &&
  <WrapItem>
<Button w='90px' h='110px' pb={5} onClick={handleFusionSwordClick} style={{ backgroundColor: "#2D3748" }}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/c/c6/FusionSword.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Fusion<br/>Sword</Text>
</VStack>
  </Button>
  </WrapItem>}
  {(CoLIsShown || DCIsShown || World2RegionIsShown) && FusionSwordIsShown &&
  <WrapItem>
<Button w='90px' h='110px' pb={5} onClick={handleFusionSwordNoClick} style={{ backgroundColor: "#2d1b59"}}>
<VStack> 
<Image
mt='12px'
align='center' 
boxSize='3rem'
src='https://static.wikia.nocookie.net/4thewords/images/c/c6/FusionSword.png/'
mr='5px'
/> <Text fontSize='sm' align='center'>Fusion<br/>Sword</Text>
</VStack>
  </Button>
  </WrapItem>}
            </Wrap>

          <Text fontSize='md' mt='25px' mb='15px'><b>Weapon 2 Items:</b></Text>
  <Wrap justify='center'>
  {World2RegionIsShown && !NivaliBowIsShown &&
    <WrapItem>
    <Button w='90px' h='110px' pb={5} onClick={handleNivaliBowClick} style={{ backgroundColor: "#2D3748" }}>
    <VStack> 
    <Image
    mt='12px'
    align='center' 
    boxSize='3rem'
    src='https://static.wikia.nocookie.net/4thewords/images/8/88/Nivali_Bow.png/'
    mr='5px'
    /> <Text fontSize='sm' align='center'>Nivali<br/>Bow</Text>
    </VStack>
      </Button>
      </WrapItem>}

{World2RegionIsShown && NivaliBowIsShown &&
    <WrapItem>
    <Button w='90px' h='110px' pb={5} onClick={handleNivaliBowNoClick} style={{ backgroundColor: "#2d1b59"}}>
    <VStack> 
    <Image
    mt='12px'
    align='center' 
    boxSize='3rem'
    src='https://static.wikia.nocookie.net/4thewords/images/8/88/Nivali_Bow.png/'
    mr='5px'
    /> <Text fontSize='sm' align='center'>Nivali<br/>Bow</Text>
    </VStack>
      </Button>
      </WrapItem>}

  {World2RegionIsShown && !NivaliSlingshotIsShown &&
    <WrapItem>
    <Button w='90px' h='110px' pb={5} onClick={handleNivaliSlingshotClick} style={{ backgroundColor: "#2D3748" }}>
    <VStack> 
    <Image
    mt='12px'
    align='center' 
    boxSize='3rem'
    src='https://static.wikia.nocookie.net/4thewords/images/2/20/Nivali_Slingshot.png/'
    mr='5px'
    /> <Text fontSize='sm' align='center'>Nivali<br/>Slingshot</Text>
    </VStack>
      </Button>
      </WrapItem>}

{World2RegionIsShown && NivaliSlingshotIsShown &&
    <WrapItem>
    <Button w='90px' h='110px' pb={5} onClick={handleNivaliSlingshotNoClick} style={{ backgroundColor: "#2d1b59"}}>
    <VStack> 
    <Image
    mt='12px'
    align='center' 
    boxSize='3rem'
    src='https://static.wikia.nocookie.net/4thewords/images/2/20/Nivali_Slingshot.png/'
    mr='5px'
    /> <Text fontSize='sm' align='center'>Nivali<br/>Slingshot</Text>
    </VStack>
      </Button>
      </WrapItem>}

      {(DCIsShown || World2RegionIsShown) && !MountainMaceIsShown &&
    <WrapItem>
    <Button w='90px' h='110px' pb={5} onClick={handleMountainMaceClick} style={{ backgroundColor: "#2D3748" }}>
    <VStack> 
    <Image
    mt='12px'
    align='center' 
    boxSize='3rem'
    src='https://static.wikia.nocookie.net/4thewords/images/7/7f/MountainMace.png/'
    mr='5px'
    /> <Text fontSize='sm' align='center'>Mountain<br/>Mace</Text>
    </VStack>
      </Button>
      </WrapItem>}

  {(DCIsShown || World2RegionIsShown) && MountainMaceIsShown &&
    <WrapItem>
    <Button w='90px' h='110px' pb={5} onClick={handleMountainMaceNoClick} style={{ backgroundColor: "#2d1b59"}}>
    <VStack> 
    <Image
    mt='12px'
    align='center' 
    boxSize='3rem'
    src='https://static.wikia.nocookie.net/4thewords/images/7/7f/MountainMace.png/'
    mr='5px'
    /> <Text fontSize='sm' align='center'>Mountain<br/>Mace</Text>
    </VStack>
      </Button>
      </WrapItem>}

  {(CoLIsShown || DCIsShown || World2RegionIsShown) && !FusionCrossbowIsShown &&
    <WrapItem>
    <Button w='90px' h='110px' pb={5} onClick={handleFusionCrossbowClick} style={{ backgroundColor: "#2D3748" }}>
    <VStack> 
    <Image
    mt='12px'
    align='center' 
    boxSize='3rem'
    src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Fusion_Crossbow.png/'
    mr='5px'
    /> <Text fontSize='sm' align='center'>Fusion<br/>Crossbow</Text>
    </VStack>
      </Button>
      </WrapItem>}

  {(CoLIsShown || DCIsShown || World2RegionIsShown) && FusionCrossbowIsShown &&
    <WrapItem>
    <Button w='90px' h='110px' pb={5} onClick={handleFusionCrossbowNoClick} style={{ backgroundColor: "#2d1b59"}}>
    <VStack> 
    <Image
    mt='12px'
    align='center' 
    boxSize='3rem'
    src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Fusion_Crossbow.png/'
    mr='5px'
    /> <Text fontSize='sm' align='center'>Fusion<br/>Crossbow</Text>
    </VStack>
      </Button>
      </WrapItem>}

  {(CoLIsShown || DCIsShown || World2RegionIsShown) && !PoePickIsShown &&
    <WrapItem>
    <Button w='90px' h='110px' pb={5} onClick={handlePoePickClick} style={{ backgroundColor: "#2D3748" }}>
    <VStack> 
    <Image
    mt='12px'
    align='center' 
    boxSize='3rem'
    src='https://static.wikia.nocookie.net/4thewords/images/f/f0/PoePick.png/'
    mr='5px'
    /> <Text fontSize='sm' align='center'>Poe Pick</Text>
    </VStack>
      </Button>
      </WrapItem>}

  {(CoLIsShown || DCIsShown || World2RegionIsShown) && PoePickIsShown &&
    <WrapItem>
    <Button w='90px' h='110px' pb={5} onClick={handlePoePickNoClick} style={{ backgroundColor: "#2d1b59"}}>
    <VStack> 
    <Image
    mt='12px'
    align='center' 
    boxSize='3rem'
    src='https://static.wikia.nocookie.net/4thewords/images/f/f0/PoePick.png/'
    mr='5px'
    /> <Text fontSize='sm' align='center'>Poe Pick</Text>
    </VStack>
      </Button>
      </WrapItem>}

  </Wrap>
          <Text fontSize='md' mt='25px' mb='15px'><b>Accessory Items:</b></Text>
          <Text fontSize='md' mt='25px' mb='15px'><b>Head Items:</b></Text>
          <Text fontSize='md' mt='25px' mb='15px'><b>Chest Items:</b></Text>
          <Text fontSize='md' mt='25px' mb='15px'><b>Feet Items:</b></Text>


           </Box>
         </AccordionPanel>
       </AccordionItem>
     </Accordion>
  <Text><b>Equation Tests</b></Text>
  <TopAttackCompanion16 />
  <TopAttackCompanion12 />
  <Text>Companion Atk: {totalCompanionTopAtk} </Text>
  <Text>Companion Def: {totalCompanionTopDef} </Text>
  <Text>Companion Luck: {totalCompanionTopLuck} </Text>
            </Container>
        </Grid>
      </Box>
  );
}

export default App;