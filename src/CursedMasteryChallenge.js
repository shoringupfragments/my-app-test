import React from 'react';
import { useState, useEffect, useId } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  ChakraProvider,
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Icon,
  VStack,
  List,
  Input,
  ListItem,
  Grid,
  theme,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
  NumberInput,
  NumberInputField,
  Container,
  Spacer,
  Divider,
  Select,
  Stack,
  WrapItem,
  Wrap,
  Tfoot,
  useColorMode, useColorModeValue,
  FormControl,
  FormHelperText,
  FormLabel,
  Code,
} from '@chakra-ui/react';

import { FaMoon, FaSun } from 'react-icons/fa';

import { toBePartiallyChecked } from '@testing-library/jest-dom/matchers';
import { useFormAction } from 'react-router-dom';




function App() {

  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue('light', 'dark');
  const SwitchIcon = useColorModeValue(FaSun, FaMoon);
  const tablecolor = useColorModeValue('purple', 'teal')


  const [NullIsShown, setNullIsShown] = useState(false);


  const [PikiActive, setPikiActive] = useState(0)
  const [PikiIsShown, setPikiIsShown] = useState(0)

  const [KirerfActive, setKirerfActive] = useState(0)
  const [KirerfIsShown, setKirerfIsShown] = useState(0)

  const [ArdiiActive, setArdiiActive] = useState(0)
  const [ArdiiIsShown, setArdiiIsShown] = useState(0)



  const handleKirerfClick = event => {
  setPikiIsShown (current => null);
  setPikiActive (current => null);
  setArdiiIsShown (current => null);
  setArdiiActive (current => null);
  setKirerfIsShown (current => !KirerfIsShown);
  setKirerfActive (current => !KirerfActive);
};
  
const handleArdiiClick = event => {
  setPikiIsShown (current => null);
  setPikiActive (current => null);
  setArdiiIsShown (current => !ArdiiIsShown);
  setArdiiActive (current => !ArdiiActive);
  setKirerfIsShown (current => null);
  setKirerfActive (current => null);
};

const handlePikiClick = event => {
  setPikiIsShown (current => !PikiIsShown);
  setPikiActive (current => !PikiActive);
  setArdiiIsShown (current => null);
  setArdiiActive (current => null);
  setKirerfIsShown (current => null);
  setKirerfActive (current => null);
};


  const [LoleYActive, setLoleYActive] = useState(false);
  const [LoleNActive, setLoleNActive] = useState(false);
  const [LoleYIsShown, setLoleYIsShown] = useState(false);
  const [LoleNIsShown, setLoleNIsShown] = useState(false);

  const [BlastActive, setBlastActive] = useState(false);
  const [BlastIsShown, setBlastIsShown] = useState(false);
  const [GrenadeActive, setGrenadeActive] = useState(false);
  const [GrenadeIsShown, setGrenadeIsShown] = useState(false);

  const [BattleCostYActive, setBattleCostYActive] = useState(false);
  const [BattleCostNActive, setBattleCostNActive] = useState(false);
  const [BattleCostYIsShown, setBattleCostYIsShown] = useState(false);
  const [BattleCostNIsShown, setBattleCostNIsShown] = useState(false);

//monsters//
  const [TesvenActive, setTesvenActive] = useState(false);
  const [TesvenIsShown, setTesvenIsShown] = useState(false);

  const [VelsounActive, setVelsounActive] = useState(false);
  const [VelsounIsShown, setVelsounIsShown] = useState(false);

  const [AlphaTamboActive, setAlphaTamboActive] = useState(false);
  const [AlphaTamboIsShown, setAlphaTamboIsShown] = useState(false);

  const [AzadiActive, setAzadiActive] = useState(false);
  const [AzadiIsShown, setAzadiIsShown] = useState(false);

  const [TareitActive, setTareitActive] = useState(false);
  const [TareitIsShown, setTareitIsShown] = useState(false);

  const [BabuActive, setBabuActive] = useState(false);
  const [BabuIsShown, setBabuIsShown] = useState(false);

  const [DustSuwoActive, setDustSuwoActive] = useState(false);
  const [DustSuwoIsShown, setDustSuwoIsShown] = useState(false);

  const [SuwoActive, setSuwoActive] = useState(false);
  const [SuwoIsShown, setSuwoIsShown] = useState(false);

  const [RakstalActive, setRakstalActive] = useState(false);
  const [RakstalIsShown, setRakstalIsShown] = useState(false);

  const [ShamanLuziaActive, setShamanLuziaActive] = useState(false);
  const [ShamanLuziaIsShown, setShamanLuziaIsShown] = useState(false);

  const [DarkReflectionActive, setDarkReflectionActive] = useState(false);
  const [DarkReflectionIsShown, setDarkReflectionIsShown] = useState(false);

  const [ReflectionActive, setReflectionActive] = useState(false);
  const [ReflectionIsShown, setReflectionIsShown] = useState(false);

  const [CaravanActive, setCaravanActive] = useState(false);
  const [CaravanIsShown, setCaravanIsShown] = useState(false);

  const [KultalvaActive, setKultalvaActive] = useState(false);
  const [KultalvaIsShown, setKultalvaIsShown] = useState(false);

  const [MiclanActive, setMiclanActive] = useState(false);
  const [MiclanIsShown, setMiclanIsShown] = useState(false);

  const [RiverGoddessActive, setRiverGoddessActive] = useState(false);
  const [RiverGoddessIsShown, setRiverGoddessIsShown] = useState(false);

  const [KingMaiActive, setKingMaiActive] = useState(false);
  const [KingMaiIsShown, setKingMaiIsShown] = useState(false);
  
  const [DustedLuziaActive, setDustedLuziaActive] = useState(false);
  const [DustedLuziaIsShown, setDustedLuziaIsShown] = useState(false);

  const [DustyKingMaiActive, setDustyKingMaiActive] = useState(false);
  const [DustyKingMaiIsShown, setDustyKingMaiIsShown] = useState(false);


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

  const handleBlastClick = event => {
    // 👇️ toggle shown state
    setBlastIsShown(current => !BlastIsShown);
    setBlastActive(!BlastActive);
    setGrenadeIsShown(current => null);
    setGrenadeActive(current => null);
  };


    const handleGrenadeClick = event => {
      // 👇️ toggle shown state
      setGrenadeIsShown(current => !GrenadeIsShown);
      setGrenadeActive(!GrenadeActive);
      setBlastIsShown(current => null);
      setBlastActive(current => null);
  
    };
  
  const handleBattleCostYClick = event => {
    // 👇️ toggle shown state
    setBattleCostYIsShown(current => !BattleCostYIsShown);
    setBattleCostNIsShown(current => null);
    setBattleCostYActive(!BattleCostYActive);
    setBattleCostNActive(current => null);

  };

  const handleBattleCostNClick = event => {
    // 👇️ toggle shown state
    setBattleCostNIsShown(current => !BattleCostNIsShown);
    setBattleCostYIsShown(current => null);
    setBattleCostNActive(!BattleCostNActive);
    setBattleCostYActive(current => null);
    };


const handleTesvenClick = event => {
  setTesvenIsShown (current => !TesvenIsShown)
  setTesvenActive (current => !TesvenActive)  
  setVelsounIsShown (current => null)
  setVelsounActive (current => null)
  setAlphaTamboIsShown (current => null)
  setAlphaTamboActive (current => null)
  setAzadiIsShown (current => null)
  setAzadiActive (current => null)
  setTareitIsShown (current => null)
  setTareitActive (current => null)
  setBabuIsShown (current => null)
  setBabuActive (current => null)
  setDustSuwoIsShown (current => null)
  setDustSuwoActive (current => null)
  setSuwoIsShown (current => null)
  setSuwoActive (current => null)
  setRakstalIsShown (current => null)
  setRakstalActive (current => null)
  setShamanLuziaIsShown (current => null)
  setShamanLuziaActive (current => null)
  setDarkReflectionIsShown (current => null)
  setDarkReflectionActive (current => null)
  setReflectionIsShown (current => null)
  setReflectionActive (current => null)
  setCaravanIsShown (current => null)
  setCaravanActive (current => null)
  setKultalvaIsShown (current => null)
  setKultalvaActive (current => null)
  setMiclanIsShown (current => null)
  setMiclanActive (current => null)
  setRiverGoddessIsShown (current => null)
  setRiverGoddessActive (current => null)
  setKingMaiIsShown (current => null)
  setKingMaiActive (current => null)
  setDustedLuziaIsShown (current => null)
  setDustedLuziaActive (current => null)
  setDustyKingMaiIsShown (current => null)
  setDustyKingMaiActive (current => null)
  setMasteryMonster (current => null)
  setCoins (current => null)
  };

const handleVelsounClick = event => {
  setTesvenIsShown (current => null)
  setTesvenActive (current => null)  
  setVelsounIsShown (current => !VelsounIsShown)
  setVelsounActive (current => !VelsounActive)
  setAlphaTamboIsShown (current => null)
  setAlphaTamboActive (current => null)
  setAzadiIsShown (current => null)
  setAzadiActive (current => null)
  setTareitIsShown (current => null)
  setTareitActive (current => null)
  setBabuIsShown (current => null)
  setBabuActive (current => null)
  setDustSuwoIsShown (current => null)
  setDustSuwoActive (current => null)
  setSuwoIsShown (current => null)
  setSuwoActive (current => null)
  setRakstalIsShown (current => null)
  setRakstalActive (current => null)
  setShamanLuziaIsShown (current => null)
  setShamanLuziaActive (current => null)
  setDarkReflectionIsShown (current => null)
  setDarkReflectionActive (current => null)
  setReflectionIsShown (current => null)
  setReflectionActive (current => null)
  setCaravanIsShown (current => null)
  setCaravanActive (current => null)
  setKultalvaIsShown (current => null)
  setKultalvaActive (current => null)
  setMiclanIsShown (current => null)
  setMiclanActive (current => null)
  setRiverGoddessIsShown (current => null)
  setRiverGoddessActive (current => null)
  setKingMaiIsShown (current => null)
  setKingMaiActive (current => null)
  setDustedLuziaIsShown (current => null)
  setDustedLuziaActive (current => null)
  setDustyKingMaiIsShown (current => null)
  setDustyKingMaiActive (current => null)
  setMasteryMonster (current => null)
  setCoins (current => null)
  };

const handleAlphaTamboClick = event => {
  setTesvenIsShown (current => null)
  setTesvenActive (current => null)  
  setVelsounIsShown (current => null)
  setVelsounActive (current => null)
  setAlphaTamboIsShown (current => !AlphaTamboIsShown)
  setAlphaTamboActive (current => !AlphaTamboActive)
  setAzadiIsShown (current => null)
  setAzadiActive (current => null)
  setTareitIsShown (current => null)
  setTareitActive (current => null)
  setBabuIsShown (current => null)
  setBabuActive (current => null)
  setDustSuwoIsShown (current => null)
  setDustSuwoActive (current => null)
  setSuwoIsShown (current => null)
  setSuwoActive (current => null)
  setRakstalIsShown (current => null)
  setRakstalActive (current => null)
  setShamanLuziaIsShown (current => null)
  setShamanLuziaActive (current => null)
  setDarkReflectionIsShown (current => null)
  setDarkReflectionActive (current => null)
  setReflectionIsShown (current => null)
  setReflectionActive (current => null)
  setCaravanIsShown (current => null)
  setCaravanActive (current => null)
  setKultalvaIsShown (current => null)
  setKultalvaActive (current => null)
  setMiclanIsShown (current => null)
  setMiclanActive (current => null)
  setRiverGoddessIsShown (current => null)
  setRiverGoddessActive (current => null)
  setKingMaiIsShown (current => null)
  setKingMaiActive (current => null)
  setDustedLuziaIsShown (current => null)
  setDustedLuziaActive (current => null)
  setDustyKingMaiIsShown (current => null)
  setDustyKingMaiActive (current => null)
  setMasteryMonster (current => null)
  setCoins (current => null)
  };

const handleAzadiClick = event => {
  setTesvenIsShown (current => null)
  setTesvenActive (current => null)  
  setVelsounIsShown (current => null)
  setVelsounActive (current => null)
  setAlphaTamboIsShown (current => null)
  setAlphaTamboActive (current => null)
  setAzadiIsShown (current => !AzadiIsShown)
  setAzadiActive (current => !AzadiActive)
  setTareitIsShown (current => null)
  setTareitActive (current => null)
  setBabuIsShown (current => null)
  setBabuActive (current => null)
  setDustSuwoIsShown (current => null)
  setDustSuwoActive (current => null)
  setSuwoIsShown (current => null)
  setSuwoActive (current => null)
  setRakstalIsShown (current => null)
  setRakstalActive (current => null)
  setShamanLuziaIsShown (current => null)
  setShamanLuziaActive (current => null)
  setDarkReflectionIsShown (current => null)
  setDarkReflectionActive (current => null)
  setReflectionIsShown (current => null)
  setReflectionActive (current => null)
  setCaravanIsShown (current => null)
  setCaravanActive (current => null)
  setKultalvaIsShown (current => null)
  setKultalvaActive (current => null)
  setMiclanIsShown (current => null)
  setMiclanActive (current => null)
  setRiverGoddessIsShown (current => null)
  setRiverGoddessActive (current => null)
  setKingMaiIsShown (current => null)
  setKingMaiActive (current => null)
  setDustedLuziaIsShown (current => null)
  setDustedLuziaActive (current => null)
  setDustyKingMaiIsShown (current => null)
  setDustyKingMaiActive (current => null)
  setMasteryMonster (current => null)
  setCoins (current => null)
  };

  const handleTareitClick = event => {
    setTesvenIsShown (current => null)
    setTesvenActive (current => null)  
    setVelsounIsShown (current => null)
    setVelsounActive (current => null)
    setAlphaTamboIsShown (current => null)
    setAlphaTamboActive (current => null)
    setAzadiIsShown (current => null)
    setAzadiActive (current => null)
    setTareitIsShown (current => !TareitIsShown)
    setTareitActive (current => !TareitActive)
    setBabuIsShown (current => null)
    setBabuActive (current => null)
    setDustSuwoIsShown (current => null)
    setDustSuwoActive (current => null)
    setSuwoIsShown (current => null)
    setSuwoActive (current => null)
    setRakstalIsShown (current => null)
    setRakstalActive (current => null)
    setShamanLuziaIsShown (current => null)
    setShamanLuziaActive (current => null)
    setDarkReflectionIsShown (current => null)
    setDarkReflectionActive (current => null)
    setReflectionIsShown (current => null)
    setReflectionActive (current => null)
    setCaravanIsShown (current => null)
    setCaravanActive (current => null)
    setKultalvaIsShown (current => null)
    setKultalvaActive (current => null)
    setMiclanIsShown (current => null)
    setMiclanActive (current => null)
    setRiverGoddessIsShown (current => null)
    setRiverGoddessActive (current => null)
    setKingMaiIsShown (current => null)
    setKingMaiActive (current => null)
    setDustedLuziaIsShown (current => null)
    setDustedLuziaActive (current => null)
    setDustyKingMaiIsShown (current => null)
    setDustyKingMaiActive (current => null)
    setMasteryMonster (current => null)
    setCoins (current => null)
    };

  const handleBabuClick = event => {
  setTesvenIsShown (current => null)
  setTesvenActive (current => null)  
  setVelsounIsShown (current => null)
  setVelsounActive (current => null)
  setAlphaTamboIsShown (current => null)
  setAlphaTamboActive (current => null)
  setAzadiIsShown (current => null)
  setAzadiActive (current => null)
  setTareitIsShown (current => null)
  setTareitActive (current => null)
  setBabuIsShown (current => !BabuIsShown)
  setBabuActive (current => !BabuActive)
  setDustSuwoIsShown (current => null)
  setDustSuwoActive (current => null)
  setSuwoIsShown (current => null)
  setSuwoActive (current => null)
  setRakstalIsShown (current => null)
  setRakstalActive (current => null)
  setShamanLuziaIsShown (current => null)
  setShamanLuziaActive (current => null)
  setDarkReflectionIsShown (current => null)
  setDarkReflectionActive (current => null)
  setReflectionIsShown (current => null)
  setReflectionActive (current => null)
  setCaravanIsShown (current => null)
  setCaravanActive (current => null)
  setKultalvaIsShown (current => null)
  setKultalvaActive (current => null)
  setMiclanIsShown (current => null)
  setMiclanActive (current => null)
  setRiverGoddessIsShown (current => null)
  setRiverGoddessActive (current => null)
  setKingMaiIsShown (current => null)
  setKingMaiActive (current => null)
  setDustedLuziaIsShown (current => null)
  setDustedLuziaActive (current => null)
  setDustyKingMaiIsShown (current => null)
  setDustyKingMaiActive (current => null)
  setMasteryMonster (current => null)
  setCoins (current => null)
  };

  const handleDustSuwoClick = event => {
  setTesvenIsShown (current => null)
  setTesvenActive (current => null)  
  setVelsounIsShown (current => null)
  setVelsounActive (current => null)
  setAlphaTamboIsShown (current => null)
  setAlphaTamboActive (current => null)
  setAzadiIsShown (current => null)
  setAzadiActive (current => null)
  setTareitIsShown (current => null)
  setTareitActive (current => null)
  setBabuIsShown (current => null)
  setBabuActive (current => null)
  setDustSuwoIsShown (current => !DustSuwoIsShown)
  setDustSuwoActive (current => !DustSuwoActive)
  setSuwoIsShown (current => null)
  setSuwoActive (current => null)
  setRakstalIsShown (current => null)
  setRakstalActive (current => null)
  setShamanLuziaIsShown (current => null)
  setShamanLuziaActive (current => null)
  setDarkReflectionIsShown (current => null)
  setDarkReflectionActive (current => null)
  setReflectionIsShown (current => null)
  setReflectionActive (current => null)
  setCaravanIsShown (current => null)
  setCaravanActive (current => null)
  setKultalvaIsShown (current => null)
  setKultalvaActive (current => null)
  setMiclanIsShown (current => null)
  setMiclanActive (current => null)
  setRiverGoddessIsShown (current => null)
  setRiverGoddessActive (current => null)
  setKingMaiIsShown (current => null)
  setKingMaiActive (current => null)
  setDustedLuziaIsShown (current => null)
  setDustedLuziaActive (current => null)
  setDustyKingMaiIsShown (current => null)
  setDustyKingMaiActive (current => null)
  setMasteryMonster (current => null)
  setCoins (current => null)
  };

  const handleSuwoClick = event => {
  setTesvenIsShown (current => null)
  setTesvenActive (current => null)  
  setVelsounIsShown (current => null)
  setVelsounActive (current => null)
  setAlphaTamboIsShown (current => null)
  setAlphaTamboActive (current => null)
  setAzadiIsShown (current => null)
  setAzadiActive (current => null)
  setTareitIsShown (current => null)
  setTareitActive (current => null)
  setBabuIsShown (current => null)
  setBabuActive (current => null)
  setDustSuwoIsShown (current => null)
  setDustSuwoActive (current => null)
  setSuwoIsShown (current => !SuwoIsShown)
  setSuwoActive (current => !SuwoActive)
  setRakstalIsShown (current => null)
  setRakstalActive (current => null)
  setShamanLuziaIsShown (current => null)
  setShamanLuziaActive (current => null)
  setDarkReflectionIsShown (current => null)
  setDarkReflectionActive (current => null)
  setReflectionIsShown (current => null)
  setReflectionActive (current => null)
  setCaravanIsShown (current => null)
  setCaravanActive (current => null)
  setKultalvaIsShown (current => null)
  setKultalvaActive (current => null)
  setMiclanIsShown (current => null)
  setMiclanActive (current => null)
  setRiverGoddessIsShown (current => null)
  setRiverGoddessActive (current => null)
  setKingMaiIsShown (current => null)
  setKingMaiActive (current => null)
  setDustedLuziaIsShown (current => null)
  setDustedLuziaActive (current => null)
  setDustyKingMaiIsShown (current => null)
  setDustyKingMaiActive (current => null)
  setMasteryMonster (current => null)
  setCoins (current => null)
  };

  const handleRakstalClick = event => {
  setTesvenIsShown (current => null)
  setTesvenActive (current => null)  
  setVelsounIsShown (current => null)
  setVelsounActive (current => null)
  setAlphaTamboIsShown (current => null)
  setAlphaTamboActive (current => null)
  setAzadiIsShown (current => null)
  setAzadiActive (current => null)
  setTareitIsShown (current => null)
  setTareitActive (current => null)
  setBabuIsShown (current => null)
  setBabuActive (current => null)
  setDustSuwoIsShown (current => null)
  setDustSuwoActive (current => null)
  setSuwoIsShown (current => null)
  setSuwoActive (current => null)
  setRakstalIsShown (current => !RakstalIsShown)
  setRakstalActive (current => !RakstalActive)
  setShamanLuziaIsShown (current => null)
  setShamanLuziaActive (current => null)
  setDarkReflectionIsShown (current => null)
  setDarkReflectionActive (current => null)
  setReflectionIsShown (current => null)
  setReflectionActive (current => null)
  setCaravanIsShown (current => null)
  setCaravanActive (current => null)
  setKultalvaIsShown (current => null)
  setKultalvaActive (current => null)
  setMiclanIsShown (current => null)
  setMiclanActive (current => null)
  setRiverGoddessIsShown (current => null)
  setRiverGoddessActive (current => null)
  setKingMaiIsShown (current => null)
  setKingMaiActive (current => null)
  setDustedLuziaIsShown (current => null)
  setDustedLuziaActive (current => null)
  setDustyKingMaiIsShown (current => null)
  setDustyKingMaiActive (current => null)
  setMasteryMonster (current => null)
  setCoins (current => null)
  };

  const handleShamanLuziaClick = event => {
    setTesvenIsShown (current => null)
    setTesvenActive (current => null)  
    setVelsounIsShown (current => null)
    setVelsounActive (current => null)
    setAlphaTamboIsShown (current => null)
    setAlphaTamboActive (current => null)
    setAzadiIsShown (current => null)
    setAzadiActive (current => null)
    setTareitIsShown (current => null)
    setTareitActive (current => null)
    setBabuIsShown (current => null)
    setBabuActive (current => null)
    setDustSuwoIsShown (current => null)
    setDustSuwoActive (current => null)
    setSuwoIsShown (current => null)
    setSuwoActive (current => null)
    setRakstalIsShown (current => null)
    setRakstalActive (current => null)
    setShamanLuziaIsShown (current => !ShamanLuziaIsShown)
    setShamanLuziaActive (current => !ShamanLuziaActive)
    setDarkReflectionIsShown (current => null)
    setDarkReflectionActive (current => null)
    setReflectionIsShown (current => null)
    setReflectionActive (current => null)
    setCaravanIsShown (current => null)
    setCaravanActive (current => null)
    setKultalvaIsShown (current => null)
    setKultalvaActive (current => null)
    setMiclanIsShown (current => null)
    setMiclanActive (current => null)
    setRiverGoddessIsShown (current => null)
    setRiverGoddessActive (current => null)
    setKingMaiIsShown (current => null)
    setKingMaiActive (current => null)
    setDustedLuziaIsShown (current => null)
    setDustedLuziaActive (current => null)
    setDustyKingMaiIsShown (current => null)
    setDustyKingMaiActive (current => null)
    setMasteryMonster (current => null)
    setCoins (current => null)
    };

  const handleDarkReflectionClick = event => {
    setTesvenIsShown (current => null)
    setTesvenActive (current => null)  
    setVelsounIsShown (current => null)
    setVelsounActive (current => null)
    setAlphaTamboIsShown (current => null)
    setAlphaTamboActive (current => null)
    setAzadiIsShown (current => null)
    setAzadiActive (current => null)
    setTareitIsShown (current => null)
    setTareitActive (current => null)
    setBabuIsShown (current => null)
    setBabuActive (current => null)
    setDustSuwoIsShown (current => null)
    setDustSuwoActive (current => null)
    setSuwoIsShown (current => null)
    setSuwoActive (current => null)
    setRakstalIsShown (current => null)
    setRakstalActive (current => null)
    setShamanLuziaIsShown (current => null)
    setShamanLuziaActive (current => null)
    setDarkReflectionIsShown (current => !DarkReflectionIsShown)
    setDarkReflectionActive (current => !DarkReflectionActive)
    setReflectionIsShown (current => null)
    setReflectionActive (current => null)
    setCaravanIsShown (current => null)
    setCaravanActive (current => null)
    setKultalvaIsShown (current => null)
    setKultalvaActive (current => null)
    setMiclanIsShown (current => null)
    setMiclanActive (current => null)
    setRiverGoddessIsShown (current => null)
    setRiverGoddessActive (current => null)
    setKingMaiIsShown (current => null)
    setKingMaiActive (current => null)
    setDustedLuziaIsShown (current => null)
    setDustedLuziaActive (current => null)
    setDustyKingMaiIsShown (current => null)
    setDustyKingMaiActive (current => null)
    setMasteryMonster (current => null)  
    setCoins (current => null)
    };

const handleReflectionClick = event => {
  setTesvenIsShown (current => null)
  setTesvenActive (current => null)  
  setVelsounIsShown (current => null)
  setVelsounActive (current => null)
  setAlphaTamboIsShown (current => null)
  setAlphaTamboActive (current => null)
  setAzadiIsShown (current => null)
  setAzadiActive (current => null)
  setTareitIsShown (current => null)
  setTareitActive (current => null)
  setBabuIsShown (current => null)
  setBabuActive (current => null)
  setDustSuwoIsShown (current => null)
  setDustSuwoActive (current => null)
  setSuwoIsShown (current => null)
  setSuwoActive (current => null)
  setRakstalIsShown (current => null)
  setRakstalActive (current => null)
  setShamanLuziaIsShown (current => null)
  setShamanLuziaActive (current => null)
  setDarkReflectionIsShown (current => null)
  setDarkReflectionActive (current => null)
  setReflectionIsShown (current => !ReflectionIsShown)
  setReflectionActive (current => !ReflectionActive)
  setCaravanIsShown (current => null)
  setCaravanActive (current => null)
  setKultalvaIsShown (current => null)
  setKultalvaActive (current => null)
  setMiclanIsShown (current => null)
  setMiclanActive (current => null)
  setRiverGoddessIsShown (current => null)
  setRiverGoddessActive (current => null)
  setKingMaiIsShown (current => null)
  setKingMaiActive (current => null)
  setDustedLuziaIsShown (current => null)
  setDustedLuziaActive (current => null)
  setDustyKingMaiIsShown (current => null)
  setDustyKingMaiActive (current => null)
  setMasteryMonster (current => null) 
  setCoins (current => null)
  };

  const handleCaravanClick = event => {
    setTesvenIsShown (current => null)
    setTesvenActive (current => null)  
    setVelsounIsShown (current => null)
    setVelsounActive (current => null)
    setAlphaTamboIsShown (current => null)
    setAlphaTamboActive (current => null)
    setAzadiIsShown (current => null)
    setAzadiActive (current => null)
    setTareitIsShown (current => null)
    setTareitActive (current => null)
    setBabuIsShown (current => null)
    setBabuActive (current => null)
    setDustSuwoIsShown (current => null)
    setDustSuwoActive (current => null)
    setSuwoIsShown (current => null)
    setSuwoActive (current => null)
    setRakstalIsShown (current => null)
    setRakstalActive (current => null)
    setShamanLuziaIsShown (current => null)
    setShamanLuziaActive (current => null)
    setDarkReflectionIsShown (current => null)
    setDarkReflectionActive (current => null)
    setReflectionIsShown (current => null)
    setReflectionActive (current => null)
    setCaravanIsShown (current => !CaravanIsShown)
    setCaravanActive (current => !CaravanActive)
    setKultalvaIsShown (current => null)
    setKultalvaActive (current => null)
    setMiclanIsShown (current => null)
    setMiclanActive (current => null)
    setRiverGoddessIsShown (current => null)
    setRiverGoddessActive (current => null)
    setKingMaiIsShown (current => null)
    setKingMaiActive (current => null)
    setDustedLuziaIsShown (current => null)
    setDustedLuziaActive (current => null)
    setDustyKingMaiIsShown (current => null)
    setDustyKingMaiActive (current => null)
    setMasteryMonster (current => null)
    setCoins (current => null)
    };

  const handleKultalvaClick = event => {
    setTesvenIsShown (current => null)
    setTesvenActive (current => null)  
    setVelsounIsShown (current => null)
    setVelsounActive (current => null)
    setAlphaTamboIsShown (current => null)
    setAlphaTamboActive (current => null)
    setAzadiIsShown (current => null)
    setAzadiActive (current => null)
    setTareitIsShown (current => null)
    setTareitActive (current => null)
    setBabuIsShown (current => null)
    setBabuActive (current => null)
    setDustSuwoIsShown (current => null)
    setDustSuwoActive (current => null)
    setSuwoIsShown (current => null)
    setSuwoActive (current => null)
    setRakstalIsShown (current => null)
    setRakstalActive (current => null)
    setShamanLuziaIsShown (current => null)
    setShamanLuziaActive (current => null)
    setDarkReflectionIsShown (current => null)
    setDarkReflectionActive (current => null)
    setReflectionIsShown (current => null)
    setReflectionActive (current => null)
    setCaravanIsShown (current => null)
    setCaravanActive (current => null)
    setKultalvaIsShown (current => !KultalvaIsShown)
    setKultalvaActive (current => !KultalvaActive)
    setMiclanIsShown (current => null)
    setMiclanActive (current => null)
    setRiverGoddessIsShown (current => null)
    setRiverGoddessActive (current => null)
    setKingMaiIsShown (current => null)
    setKingMaiActive (current => null)
    setDustedLuziaIsShown (current => null)
    setDustedLuziaActive (current => null)
    setDustyKingMaiIsShown (current => null)
    setDustyKingMaiActive (current => null)
    setMasteryMonster (current => null)
    setCoins (current => null)
    };

  const handleMiclanClick = event => {
    setTesvenIsShown (current => null)
    setTesvenActive (current => null)  
    setVelsounIsShown (current => null)
    setVelsounActive (current => null)
    setAlphaTamboIsShown (current => null)
    setAlphaTamboActive (current => null)
    setAzadiIsShown (current => null)
    setAzadiActive (current => null)
    setTareitIsShown (current => null)
    setTareitActive (current => null)
    setBabuIsShown (current => null)
    setBabuActive (current => null)
    setDustSuwoIsShown (current => null)
    setDustSuwoActive (current => null)
    setSuwoIsShown (current => null)
    setSuwoActive (current => null)
    setRakstalIsShown (current => null)
    setRakstalActive (current => null)
    setShamanLuziaIsShown (current => null)
    setShamanLuziaActive (current => null)
    setDarkReflectionIsShown (current => null)
    setDarkReflectionActive (current => null)
    setReflectionIsShown (current => null)
    setReflectionActive (current => null)
    setCaravanIsShown (current => null)
    setCaravanActive (current => null)
    setKultalvaIsShown (current => null)
    setKultalvaActive (current => null)
    setMiclanIsShown (current => !MiclanIsShown)
    setMiclanActive (current => !MiclanActive)
    setRiverGoddessIsShown (current => null)
    setRiverGoddessActive (current => null)
    setKingMaiIsShown (current => null)
    setKingMaiActive (current => null)
    setDustedLuziaIsShown (current => null)
    setDustedLuziaActive (current => null)
    setDustyKingMaiIsShown (current => null)
    setDustyKingMaiActive (current => null)
    setMasteryMonster (current => null)
    setCoins (current => null)
    };

  const handleRiverGoddessClick = event => {
    setTesvenIsShown (current => null)
    setTesvenActive (current => null)  
    setVelsounIsShown (current => null)
    setVelsounActive (current => null)
    setAlphaTamboIsShown (current => null)
    setAlphaTamboActive (current => null)
    setAzadiIsShown (current => null)
    setAzadiActive (current => null)
    setTareitIsShown (current => null)
    setTareitActive (current => null)
    setBabuIsShown (current => null)
    setBabuActive (current => null)
    setDustSuwoIsShown (current => null)
    setDustSuwoActive (current => null)
    setSuwoIsShown (current => null)
    setSuwoActive (current => null)
    setRakstalIsShown (current => null)
    setRakstalActive (current => null)
    setShamanLuziaIsShown (current => null)
    setShamanLuziaActive (current => null)
    setDarkReflectionIsShown (current => null)
    setDarkReflectionActive (current => null)
    setReflectionIsShown (current => null)
    setReflectionActive (current => null)
    setCaravanIsShown (current => null)
    setCaravanActive (current => null)
    setKultalvaIsShown (current => null)
    setKultalvaActive (current => null)
    setMiclanIsShown (current => null)
    setMiclanActive (current => null)
    setRiverGoddessIsShown (current => !RiverGoddessIsShown)
    setRiverGoddessActive (current => !RiverGoddessActive)
    setKingMaiIsShown (current => null)
    setKingMaiActive (current => null)
    setDustedLuziaIsShown (current => null)
    setDustedLuziaActive (current => null)
    setDustyKingMaiIsShown (current => null)
    setDustyKingMaiActive (current => null)
    setMasteryMonster (current => null)
    setCoins (current => null)
    };

  const handleKingMaiClick = event => {
    setTesvenIsShown (current => null)
    setTesvenActive (current => null)  
    setVelsounIsShown (current => null)
    setVelsounActive (current => null)
    setAlphaTamboIsShown (current => null)
    setAlphaTamboActive (current => null)
    setAzadiIsShown (current => null)
    setAzadiActive (current => null)
    setTareitIsShown (current => null)
    setTareitActive (current => null)
    setBabuIsShown (current => null)
    setBabuActive (current => null)
    setDustSuwoIsShown (current => null)
    setDustSuwoActive (current => null)
    setSuwoIsShown (current => null)
    setSuwoActive (current => null)
    setRakstalIsShown (current => null)
    setRakstalActive (current => null)
    setShamanLuziaIsShown (current => null)
    setShamanLuziaActive (current => null)
    setDarkReflectionIsShown (current => null)
    setDarkReflectionActive (current => null)
    setReflectionIsShown (current => null)
    setReflectionActive (current => null)
    setCaravanIsShown (current => null)
    setCaravanActive (current => null)
    setKultalvaIsShown (current => null)
    setKultalvaActive (current => null)
    setMiclanIsShown (current => null)
    setMiclanActive (current => null)
    setRiverGoddessIsShown (current => null)
    setRiverGoddessActive (current => null)
    setKingMaiIsShown (current => !KingMaiIsShown)
    setKingMaiActive (current => !KingMaiActive)
    setDustedLuziaIsShown (current => null)
    setDustedLuziaActive (current => null)
    setDustyKingMaiIsShown (current => null)
    setDustyKingMaiActive (current => null)
    setMasteryMonster (current => null)
    setCoins (current => null)
    };


const handleDustedLuziaClick = event => {
  setDustedLuziaIsShown (current => !DustedLuziaIsShown)
  setDustedLuziaActive (current => !DustedLuziaActive)

  setTesvenIsShown (current => null)
  setTesvenActive (current => null)  
  setVelsounIsShown (current => null)
  setVelsounActive (current => null)
  setAlphaTamboIsShown (current => null)
  setAlphaTamboActive (current => null)
  setAzadiIsShown (current => null)
  setAzadiActive (current => null)
  setTareitIsShown (current => null)
  setTareitActive (current => null)
  setBabuIsShown (current => null)
  setBabuActive (current => null)
  setDustSuwoIsShown (current => null)
  setDustSuwoActive (current => null)
  setSuwoIsShown (current => null)
  setSuwoActive (current => null)
  setRakstalIsShown (current => null)
  setRakstalActive (current => null)
  setShamanLuziaIsShown (current => null)
  setShamanLuziaActive (current => null)
  setDarkReflectionIsShown (current => null)
  setDarkReflectionActive (current => null)
  setReflectionIsShown (current => null)
  setReflectionActive (current => null)
  setCaravanIsShown (current => null)
  setCaravanActive (current => null)
  setKultalvaIsShown (current => null)
  setKultalvaActive (current => null)
  setMiclanIsShown (current => null)
  setMiclanActive (current => null)
  setRiverGoddessIsShown (current => null)
  setRiverGoddessActive (current => null)
  setKingMaiIsShown (current => null)
  setKingMaiActive (current => null)
  setDustyKingMaiIsShown (current => null)
  setDustyKingMaiActive (current => null)
  setMasteryMonster (current => null)
  setCoins (current => null)
  };

  const handleDustyKingMaiClick = event => {
  setDustyKingMaiIsShown (current => !DustyKingMaiIsShown)
  setDustyKingMaiActive (current => !DustyKingMaiActive)
  
  setTesvenIsShown (current => null)
  setTesvenActive (current => null)  
  setVelsounIsShown (current => null)
  setVelsounActive (current => null)
  setAlphaTamboIsShown (current => null)
  setAlphaTamboActive (current => null)
  setAzadiIsShown (current => null)
  setAzadiActive (current => null)
  setTareitIsShown (current => null)
  setTareitActive (current => null)
  setBabuIsShown (current => null)
  setBabuActive (current => null)
  setDustSuwoIsShown (current => null)
  setDustSuwoActive (current => null)
  setSuwoIsShown (current => null)
  setSuwoActive (current => null)
  setRakstalIsShown (current => null)
  setRakstalActive (current => null)
  setShamanLuziaIsShown (current => null)
  setShamanLuziaActive (current => null)
  setDarkReflectionIsShown (current => null)
  setDarkReflectionActive (current => null)
  setReflectionIsShown (current => null)
  setReflectionActive (current => null)
  setCaravanIsShown (current => null)
  setCaravanActive (current => null)
  setKultalvaIsShown (current => null)
  setKultalvaActive (current => null)
  setMiclanIsShown (current => null)
  setMiclanActive (current => null)
  setRiverGoddessIsShown (current => null)
  setRiverGoddessActive (current => null)
  setKingMaiIsShown (current => null)
  setKingMaiActive (current => null)
  setDustedLuziaIsShown (current => null)
  setDustedLuziaActive (current => null)
  setMasteryMonster (current => null)
  setCoins (current => null)
};

const [CoinsIsShown, setCoinsIsShown] = useState(false)
const [CoinsActive, setCoinsActive] = useState(false)

const [ComboIsShown, setComboIsShown] = useState(false)
const [ComboActive, setComboActive] = useState(false)

const [BattleIsShown, setBattleIsShown] = useState(false)
const [BattleActive, setBattleActive] = useState(false)

const handleCoinsClick = event => {
  // 👇️ toggle shown state
  setCoinsIsShown (current => !CoinsIsShown);
  setCoinsActive (current => !CoinsActive);
  setBattleIsShown (current => null);
  setBattleActive (current => null);
  setComboIsShown (current => null);
  setComboActive (current => null);
};

const handleComboClick = event => {
  // 👇️ toggle shown state
  setComboIsShown (current => !ComboIsShown);
  setComboActive (current => !ComboActive);
  setBattleIsShown (current => null);
  setBattleActive (current => null);
  setCoinsIsShown (current => null);
  setCoinsActive (current => null);

};

const handleBattleClick = event => {
  // 👇️ toggle shown state
  setCoinsIsShown (current => null);
  setCoinsActive (current => null);
  setBattleIsShown (current => !BattleIsShown);
  setBattleActive (current => !BattleActive);
  setComboIsShown (current => null);
  setComboActive (current => null);
};

//mastery reward type//

const [CutoutIsShown, setCutoutIsShown] = useState(false)
const [CutoutActive, setCutoutActive] = useState(false)

const [MaskIsShown, setMaskIsShown] = useState(false)
const [MaskActive, setMaskActive] = useState(false)

const [StatueIsShown, setStatueIsShown] = useState(false)
const [StatueActive, setStatueActive] = useState(false)

const [BalloonIsShown, setBalloonIsShown] = useState(false)
const [BalloonActive, setBalloonActive] = useState(false)

const [BookIsShown, setBookIsShown] = useState(false)
const [BookActive, setBookActive] = useState(false)


const handleCutoutClick = event => {
  // 👇️ toggle shown state
  setCutoutIsShown (current => !CutoutIsShown);
  setCutoutActive (current => !CutoutActive);
  setMaskIsShown (current => null);
  setMaskActive (current => null);
  setStatueIsShown (current => null);
  setStatueActive (current => null);
  setBalloonIsShown (current => null);
  setBalloonActive (current => null);
  setBookIsShown (current => null);
  setBookActive (current => null);
};

  const handleMaskClick = event => {
  setMaskIsShown (current => !MaskIsShown);
  setMaskActive (current => !MaskActive);
  setCutoutIsShown (current => null);
  setCutoutActive (current => null);
  setStatueIsShown (current => null);
  setStatueActive (current => null);
  setBalloonIsShown (current => null);
  setBalloonActive (current => null);
  setBookIsShown (current => null);
  setBookActive (current => null);
};

  const handleStatueClick = event => {
  setStatueIsShown (current => !StatueIsShown);
  setStatueActive (current => !StatueActive);
  setCutoutIsShown (current => null);
  setCutoutActive (current => null);
  setMaskIsShown (current => null);
  setMaskActive (current => null);
  setBalloonIsShown (current => null);
  setBalloonActive (current => null);
  setBookIsShown (current => null);
  setBookActive (current => null);
};

  const handleBalloonClick = event => {
  setBalloonIsShown (current => !BalloonIsShown);
  setBalloonActive (current => !BalloonActive);
  setCutoutIsShown (current => null);
  setCutoutActive (current => null);
  setMaskIsShown (current => null);
  setMaskActive (current => null);
  setStatueIsShown (current => null);
  setStatueActive (current => null);
  setBookIsShown (current => null);
  setBookActive (current => null);
};

  const handleBookClick = event => {
  setBookIsShown (current => !BookIsShown);
  setBookActive (current => !BookActive);
  setCutoutIsShown (current => null);
  setCutoutActive (current => null);
  setMaskIsShown (current => null);
  setMaskActive (current => null);
  setStatueIsShown (current => null);
  setStatueActive (current => null);
  setBalloonIsShown (current => null);
  setBalloonActive (current => null);
};

//AURILIS MONSTERS TO SKIP//

const [Odees, setOdees] = useState(0); // Or any other non-zero value

const handleOdeesChange = (valueString) => {
  const value = parseFloat(valueString);
    setOdees(value);
  };

const [Musya, setMusya] = useState(0); // Or any other non-zero value

const handleMusyaChange = (valueString) => {
  const value = parseFloat(valueString);
    setMusya(value);
  };

const [Quaruk, setQuaruk] = useState(0); // Or any other non-zero value

const handleQuarukChange = (valueString) => {
  const value = parseFloat(valueString);
    setQuaruk(value);
  };

const [Knuff, setKnuff] = useState(0); // Or any other non-zero value

const handleKnuffChange = (valueString) => {
  const value = parseFloat(valueString);
    setKnuff(value);
  };

const [Mibloom, setMibloom] = useState(0); // Or any other non-zero value

const handleMibloomChange = (valueString) => {
  const value = parseFloat(valueString);
    setMibloom(value);
  };

const [Kinguz, setKinguz] = useState(0); // Or any other non-zero value

const handleKinguzChange = (valueString) => {
  const value = parseFloat(valueString);
    setKinguz(value);
  };

  const [YSS, setYSS] = useState(0); // Or any other non-zero value

const handleYSSChange = (valueString) => {
  const value = parseFloat(valueString);
    setYSS(value);
  };

  const [PSS, setPSS] = useState(0); // Or any other non-zero value

  const handlePSSChange = (valueString) => {
    const value = parseFloat(valueString);
      setPSS(value);
    };

    const [SSS, setSSS] = useState(0); // Or any other non-zero value

    const handleSSSChange = (valueString) => {
      const value = parseFloat(valueString);
        setSSS(value);
      };

    const [Aed, setAed] = useState(0); // Or any other non-zero value

    const handleAedChange = (valueString) => {
      const value = parseFloat(valueString);
        setAed(value);
      };

    const [Boma, setBoma] = useState(0); // Or any other non-zero value

    const handleBomaChange = (valueString) => {
      const value = parseFloat(valueString);
        setBoma(value);
      };

    const [Gull, setGull] = useState(0); // Or any other non-zero value

    const handleGullChange = (valueString) => {
      const value = parseFloat(valueString);
        setGull(value);
      };

    const [Misul, setMisul] = useState(0); // Or any other non-zero value

    const handleMisulChange = (valueString) => {
      const value = parseFloat(valueString);
        setMisul(value);
      };

      const [Sopoi, setSopoi] = useState(0); // Or any other non-zero value

      const handleSopoiChange = (valueString) => {
        const value = parseFloat(valueString);
          setSopoi(value);
        };

    const [Wizell, setWizell] = useState(0); // Or any other non-zero value

    const handleWizellChange = (valueString) => {
      const value = parseFloat(valueString);
        setWizell(value);
      };

    const [Heliodae, setHeliodae] = useState(0); // Or any other non-zero value

    const handleHeliodaeChange = (valueString) => {
      const value = parseFloat(valueString);
        setHeliodae(value);
      };

      const [Steel, setSteel] = useState(0); // Or any other non-zero value

      const handleSteelChange = (valueString) => {
        const value = parseFloat(valueString);
          setSteel(value);
        };

      const [RawSteel, setRawSteel] = useState(0); // Or any other non-zero value

      const handleRawSteelChange = (valueString) => {
        const value = parseFloat(valueString);
          setRawSteel(value);
        };

        //for steel bars
        const [RawSteelHave, setRawSteelHave] = useState(0);
        const totalRawSteelHave = Math.floor (RawSteel/3,0) 

        const [Leaves, setLeaves] = useState(0); // Or any other non-zero value

        const handleLeavesChange = (valueString) => {
          const value = parseFloat(valueString);
            setLeaves(value);
          };

          const [HW, setHW] = useState(0); // Or any other non-zero value

          const handleHWChange = (valueString) => {
            const value = parseFloat(valueString);
              setHW(value);
            };

            const [RG, setRG] = useState(0); // Or any other non-zero value

            const handleRGChange = (valueString) => {
              const value = parseFloat(valueString);
                setRG(value);
              };

              const [Coins, setCoins] = useState(0); // Or any other non-zero value

              const handleCoinsChange = (valueString) => {
                const value = parseFloat(valueString);
                  setCoins(value);
                };

                const [Roberries, setRoberries] = useState(0); // Or any other non-zero value

                const handleRoberriesChange = (valueString) => {
                  const value = parseFloat(valueString);
                    setRoberries(value);
                  };

                  const [SwampMoss, setSwampMoss] = useState(0); // Or any other non-zero value

                  const handleSwampMossChange = (valueString) => {
                    const value = parseFloat(valueString);
                      setSwampMoss(value);
                    };

                    const [LeafBreastplate, setLeafBreastplate] = useState(0); // Or any other non-zero value

                    const handleLeafBreastplateChange = (valueString) => {
                      const value = parseFloat(valueString);
                        setLeafBreastplate(value);
                      };

                      const [SpiderLegs, setSpiderLegs] = useState(0); // Or any other non-zero value

                      const handleSpiderLegsChange = (valueString) => {
                        const value = parseFloat(valueString);
                          setSpiderLegs(value);
                        };

                      const [Feathers, setFeathers] = useState(0); // Or any other non-zero value

                      const handleFeathersChange = (valueString) => {
                        const value = parseFloat(valueString);
                          setFeathers(value);
                        };

                      const [Claws, setClaws] = useState(0); // Or any other non-zero value

                      const handleClawsChange = (valueString) => {
                        const value = parseFloat(valueString);
                          setClaws(value);
                        };

                      const [SteelChains, setSteelChains] = useState(0); // Or any other non-zero value

                      const handleSteelChainsChange = (valueString) => {
                        const value = parseFloat(valueString);
                          setSteelChains(value);
                        };

                      const [PieceofParch, setPieceofParch] = useState(0); // Or any other non-zero value

                      const handlePieceofParchChange = (valueString) => {
                        const value = parseFloat(valueString);
                          setPieceofParch(value);
                        };

                      const [BlueEssInk, setBlueEssInk] = useState(0); // Or any other non-zero value

                      const handleBlueEssInkChange = (valueString) => {
                        const value = parseFloat(valueString);
                          setBlueEssInk(value);
                        };

                      const [DriedPulp, setDriedPulp] = useState(0); // Or any other non-zero value

                      const handleDriedPulpChange = (valueString) => {
                        const value = parseFloat(valueString);
                          setDriedPulp(value);
                        };

                        const [Dust, setDust] = useState(0); // Or any other non-zero value

                        const handleDustChange = (valueString) => {
                          const value = parseFloat(valueString);
                            setDust(value);
                          };
  
                          const [Wood, setWood] = useState(0); // Or any other non-zero value

                          const handleWoodChange = (valueString) => {
                            const value = parseFloat(valueString);
                              setWood(value);
                            };
    
                          const [GlassBar, setGlassBar] = useState(0); // Or any other non-zero value

                          const handleGlassBarChange = (valueString) => {
                            const value = parseFloat(valueString);
                              setGlassBar(value);
                            };

                            const [Ess, setEss] = useState(0); // Or any other non-zero value

                            const handleEssChange = (valueString) => {
                              const value = parseFloat(valueString);
                                setEss(value);
                              };

                          const [RD, setRD] = useState(0); // Or any other non-zero value

                          const handleRDChange = (valueString) => {
                            const value = parseFloat(valueString);
                              setRD(value);
                            };

                          const [RustyPen, setRustyPen] = useState(0); // Or any other non-zero value

                          const handleRustyPenChange = (valueString) => {
                            const value = parseFloat(valueString);
                              setRustyPen(value);
                            };                            

                          const [FabricHelmet, setFabricHelmet] = useState(0); // Or any other non-zero value

                          const handleFabricHelmetChange = (valueString) => {
                            const value = parseFloat(valueString);
                              setFabricHelmet(value);
                            };                   

                          const [SteelSpear, setSteelSpear] = useState(0); // Or any other non-zero value

                          const handleSteelSpearChange = (valueString) => {
                            const value = parseFloat(valueString);
                              setSteelSpear(value);
                            };                   

                          const [LeafHelmet, setLeafHelmet] = useState(0); // Or any other non-zero value

                          const handleLeafHelmetChange = (valueString) => {
                            const value = parseFloat(valueString);
                              setLeafHelmet(value);
                            };                                              

                          const [FabricBreastplate, setFabricBreastplate] = useState(0); // Or any other non-zero value

                          const handleFabricBreastplateChange = (valueString) => {
                            const value = parseFloat(valueString);
                              setFabricBreastplate(value);
                            };                   

                          const [SteelSword, setSteelSword] = useState(0); // Or any other non-zero value

                          const handleSteelSwordChange = (valueString) => {
                            const value = parseFloat(valueString);
                              setSteelSword(value);
                            };                   

                          const [WoodSword, setWoodSword] = useState(0); // Or any other non-zero value

                          const handleWoodSwordChange = (valueString) => {
                            const value = parseFloat(valueString);
                              setWoodSword(value);
                            };                                              



// experiment ?? //

const [MasteryMonster, setMasteryMonster] = useState(0); // Or any other non-zero value

const handleMasteryMonsterChange = (valueString) => {
  const value = parseFloat(valueString);
    setMasteryMonster(value);
  };



//Grenade potion calc

const totalResourcesCutoutLoleY = Math.max (20000-(MasteryMonster*40), 0)
const totalResourcesCutoutLoleYMusya = Math.max (totalResourcesCutoutLoleY-10000,0)
const totalResourcesCutoutLoleYOdees = Math.max (totalResourcesCutoutLoleY-totalResourcesCutoutLoleYMusya, 0)


const totalResourcesMaskLoleY = Math.max (40000-(MasteryMonster*40),0)
const totalResourcesMaskLoleYKnuff = Math.max (totalResourcesMaskLoleY-30000,0)
const totalResourcesMaskLoleYKnuQua = Math.max (totalResourcesMaskLoleY-totalResourcesMaskLoleYKnuff,0)
const totalResourcesMaskLoleYQuaruk = Math.max (totalResourcesMaskLoleYKnuQua-20000,0 )
const totalResourcesMaskLoleYQuaMus = Math.max (totalResourcesMaskLoleYKnuQua-totalResourcesMaskLoleYQuaruk,0)
const totalResourcesMaskLoleYMusya = Math.max (totalResourcesMaskLoleYQuaMus-10000,0)
const totalResourcesMaskLoleYOdees = Math.max (totalResourcesMaskLoleYQuaMus-totalResourcesMaskLoleYMusya,0)

const totalResourcesCutoutLoleN = Math.max (30000-(MasteryMonster*60), 0)
const totalResourcesCutoutLoleNQuaruk = Math.max (totalResourcesCutoutLoleN-20000,0 )
const totalResourcesCutoutLoleNQuaMus = Math.max (totalResourcesCutoutLoleN-totalResourcesCutoutLoleNQuaruk,0)
const totalResourcesCutoutLoleNMusya = Math.max (totalResourcesCutoutLoleNQuaMus-10000,0)
const totalResourcesCutoutLoleNOdees = Math.max (totalResourcesCutoutLoleNQuaMus-totalResourcesCutoutLoleNMusya, 0)


const totalResourcesMaskLoleN = Math.max (60000-(MasteryMonster*60), 0)
const totalResourcesMaskLoleNMibloom = Math.max (totalResourcesMaskLoleN-40000,0)
const totalResourcesMaskLoleNMiKnu = Math.max (totalResourcesMaskLoleN-totalResourcesMaskLoleNMibloom,0)
const totalResourcesMaskLoleNKnuff = Math.max (totalResourcesMaskLoleN-30000,0)
const totalResourcesMaskLoleNKnuQua = Math.max (totalResourcesMaskLoleN-totalResourcesMaskLoleNKnuff,0)
const totalResourcesMaskLoleNQuaruk = Math.max (totalResourcesMaskLoleN-20000,0 )
const totalResourcesMaskLoleNQuaMus = Math.max (totalResourcesMaskLoleN-totalResourcesMaskLoleNQuaruk,0)
const totalResourcesMaskLoleNMusya = Math.max (totalResourcesMaskLoleNQuaMus-10000,0)
const totalResourcesMaskLoleNOdees = Math.max (totalResourcesMaskLoleNQuaMus-totalResourcesMaskLoleNMusya,0)


const totalResourcesCutoutLoleY_GrenadePotionsNeeded = Math.ceil (totalResourcesCutoutLoleY/4)
const totalResourcesMaskLoleY_GrenadePotionsNeeded = Math.ceil (totalResourcesMaskLoleY/4)

const totalResourcesCutoutLoleN_GrenadePotionsNeeded = Math.ceil (totalResourcesCutoutLoleN/6)
const totalResourcesMaskLoleN_GrenadePotionsNeeded = Math.ceil (totalResourcesMaskLoleN/6)

//how many AURILIS MONSTERS are left//


const [WhichForOdee, setWhichForOdee] = useState(0);
const totalWhichForOdee = Math.min (totalResourcesCutoutLoleYOdees, 10000)

const [WhichForMusya, setWhichForMusya] = useState(0);
const totalWhichForMusya = Math.min (totalResourcesCutoutLoleYMusya, 10000)

const totalOdeesLeft = Math.max (totalWhichForOdee-Odees, 0)
const totalMusyaLeft = Math.max (totalWhichForMusya-Musya, 0)


const [WhichForOdeeMask, setWhichForOdeeMask] = useState(0);
const totalWhichForOdeeMask = Math.min (totalResourcesMaskLoleYOdees, 10000)

const [WhichForMusyaMask, setWhichForMusyaMask] = useState(0);
const totalWhichForMusyaMask = Math.min (totalResourcesMaskLoleYMusya, 10000)

const totalOdeesLeftMask = Math.max (totalWhichForOdeeMask-Odees, 0)
const totalMusyaLeftMask = Math.max (totalWhichForMusyaMask-Musya, 0)

const [WhichForOdeeCutoutLoleN, setWhichForOdeeCutoutLoleN] = useState(0);
const totalWhichForOdeeCutoutLoleN = Math.min (totalResourcesCutoutLoleNOdees, 10000)

const [WhichForMusyaCutoutLoleN, setWhichForMusyaCutoutLoleN] = useState(0);
const totalWhichForMusyaCutoutLoleN = Math.min (totalResourcesCutoutLoleNMusya, 10000)

const totalOdeesPossCutoutLoleN = Math.max (totalWhichForOdeeCutoutLoleN-Odees, 0)
const totalMusyaPossCutoutLoleN = Math.max (totalWhichForMusyaCutoutLoleN-Musya, 0)



const [WhichForOdeeMaskLoleN, setWhichForOdeeMaskLoleN] = useState(0);
const totalWhichForOdeeMaskLoleN = Math.min (totalResourcesMaskLoleNOdees, 10000)

const [WhichForMusyaMaskLoleN, setWhichForMusyaMaskLoleN] = useState(0);
const totalWhichForMusyaMaskLoleN = Math.min (totalResourcesMaskLoleNMusya, 10000)

const totalOdeesPossMaskLoleN = Math.max (totalWhichForOdeeMaskLoleN-Odees, 0)
const totalMusyaPossMaskLoleN = Math.max (totalWhichForMusyaMaskLoleN-Musya, 0)



const totalQuarukPoss = Math.max (10000-Quaruk, 0)

const totalKnuffPoss = Math.max (10000-Knuff, 0)

const totalMibloomPoss = Math.max ((10000-Mibloom), 0)
const totalMibloomPossAdjusted = Math.max (totalMibloomPoss*3,0)

const totalKinguzPoss = Math.max (10000-Kinguz, 0)

const totalAedLeft = Math.max (10000-Aed, 0)

const totalBomaLeft = Math.max (10000-Boma, 0)

const totalGullLeft = Math.max (10000-Gull, 0)

const totalMisulLeft = Math.max (10000-Misul, 0)

const totalSopoiPoss = Math.max (10000-Sopoi, 0)

//how many MASTERY MONSTER have you fought?//

const totalMasteryMonsterCutout = Math.max (500-MasteryMonster,0);


const [MasteryMonsterMask, setMasteryMonsterMask] = useState(0); // Or any other non-zero value

const totalMasteryMonsterMask = Math.max (1000-MasteryMonster,0);


const [MasteryMonsterStatue, setMasteryMonsterStatue] = useState(0); // Or any other non-zero value

const totalMasteryMonsterStatue = Math.max (2500-MasteryMonster,0);


const [MasteryMonsterBalloon, setMasteryMonsterBalloon] = useState(0); // Or any other non-zero value

const totalMasteryMonsterBalloon = Math.max (5000-MasteryMonster,0);

const [MasteryMonsterBook, setMasteryMonsterBook] = useState(0); // Or any other non-zero value


const totalMasteryMonsterBook = Math.max (10000-MasteryMonster,0);


//MASTERY MONSTER - Lole yes - resources//

const [MasteryMonsterLoleYCutout, setMasteryMonsterLoleYCutout] = useState(0);
const totalMasteryMonsterLoleYCutout = Math.max (totalMasteryMonsterCutout*40)

const [MasteryMonsterLoleYMask, setMasteryMonsterLoleYMask] = useState(0);
const totalMasteryMonsterLoleYMask = Math.max (totalMasteryMonsterMask*40)

const [MasteryMonsterLoleYStatue, setMasteryMonsterLoleYStatue] = useState(0);
const totalMasteryMonsterLoleYStatue = Math.max (totalMasteryMonsterStatue*40)

const [MasteryMonsterLoleYBalloon, setMasteryMonsterLoleYBalloon] = useState(0);
const totalMasteryMonsterLoleYBalloon = Math.max (totalMasteryMonsterBalloon*40)

const [MasteryMonsterLoleYBook, setMasteryMonsterLoleYBook] = useState(0);
const totalMasteryMonsterLoleYBook = Math.max (totalMasteryMonsterBook*40)

//MASTERY MONSTER - Lole no - resources//

const [MasteryMonsterLoleNCutout, setMasteryMonsterLoleNCutout] = useState(0);
const totalMasteryMonsterLoleNCutout = Math.max (totalMasteryMonsterCutout*60)

const [MasteryMonsterLoleNMask, setMasteryMonsterLoleNMask] = useState(0);
const totalMasteryMonsterLoleNMask = Math.max (totalMasteryMonsterMask*60)

const [MasteryMonsterLoleNStatue, setMasteryMonsterLoleNStatue] = useState(0);
const totalMasteryMonsterLoleNStatue = Math.max (totalMasteryMonsterStatue*60)

const [MasteryMonsterLoleNBalloon, setMasteryMonsterLoleNBalloon] = useState(0);
const totalMasteryMonsterLoleNBalloon = Math.max (totalMasteryMonsterBalloon*60)

const [MasteryMonsterLoleNBook, setMasteryMonsterLoleNBook] = useState(0);
const totalMasteryMonsterLoleNBook = Math.max (totalMasteryMonsterBook*60)



//LOLEY CUTOUT Odees -> Musya -> Quaruk -> Knuff -> Mibloom -> Kinguz//

const [ActualOdees, setActualOdees] = useState(0);
const totalActualOdees = Math.max (totalOdeesLeft, 0)

const [OdeesOverflow, setOdeesOverflow] = useState(0);
const totalOdeesOverflow = Math.min (totalResourcesCutoutLoleYOdees, Odees)

const [Musya_OdeesOverflow, setMusya_OdeesOverflow] = useState(0);
const totalMusya_OdeesOverflow = Math.max (totalOdeesOverflow + totalWhichForMusya, 0)

const [ActualMusya, setActualMusya] = useState(0);
const totalActualMusya = Math.min (totalMusyaLeft+totalOdeesOverflow, (10000-Musya))

const [MusyaOverflow, setMusyaOverflow] = useState(0);
const totalMusyaOverflow = Math.max ((totalMusya_OdeesOverflow-totalActualMusya), 0)

const [ActualQuaruk, setActualQuaruk] = useState(0);
const totalActualQuaruk = Math.min (totalMusyaOverflow, totalQuarukPoss + totalMusyaOverflow, (10000-Quaruk))

const [QuarukOverflow, setQuarukOverflow] = useState(0);
const totalQuarukOverflow = Math.max (totalMusyaOverflow-totalActualQuaruk,0)

const [ActualKnuff, setActualKnuff] = useState(0);
const totalActualKnuff = Math.min (totalKnuffPoss, totalQuarukOverflow)

const [KnuffOverflow, setKnuffOverflow] = useState(0);
const totalKnuffOverflow = Math.max (totalQuarukOverflow-totalActualKnuff,0)

const [ActualSopoi, setActualSopoi] = useState(0);
const totalActualSopoi = Math.min (totalSopoiPoss, totalKnuffOverflow)

const [SopoiOverflow, setSopoiOverflow] = useState(0);
const totalSopoiOverflow = Math.max (totalKnuffOverflow-totalActualSopoi,0)

const [ActualMibloom, setActualMibloom] = useState(0);
const totalActualMibloom = Math.min (totalMibloomPossAdjusted, totalSopoiOverflow)

const [ActualMibloomAdjusted, setActualMibloomAdjusted] = useState(0);
const totalActualMibloomAdjusted = Math.ceil (totalActualMibloom/3)

const [MibloomOverflow, setMibloomOverflow] = useState(0);
const totalMibloomOverflow = Math.max (totalSopoiOverflow-totalActualMibloom, 0)

const [ActualKinguz, setActualKinguz] = useState(0);
const totalActualKinguz = Math.min (totalKinguzPoss, totalMibloomOverflow)

const [KinguzOverflow, setKinguzOverflow] = useState(0);
const totalKinguzOverflow = Math.max (totalMibloomOverflow-totalActualKinguz, 0)

const [finalOdees, setFinalOdees] = useState(0);
const totalFinalOdees = Math.max (totalKinguzOverflow+totalActualOdees, totalActualOdees)

const [LoleYCutoutWC, setLoleYCutoutWC] = useState(0);
const totalLoleYCutoutWC = Math.max ((totalFinalOdees*44)+(totalActualMusya*50)+(totalActualQuaruk*50)+(totalActualKnuff*60)+(totalActualSopoi*60)+(totalActualMibloomAdjusted*150)+(totalActualKinguz*70),0)


//LOLEY MASK Odees -> Musya -> Quaruk -> Knuff -> Mibloom -> Kinguz//

const [ActualOdeesMask, setActualOdeesMask] = useState(0);
const totalActualOdeesMask = Math.max (totalOdeesLeftMask, 0)

const [OdeesMaskOverflow, setOdeesMaskOverflow] = useState(0);
const totalOdeesMaskOverflow = Math.max ((totalResourcesMaskLoleYOdees + totalResourcesMaskLoleYMusya + totalResourcesMaskLoleYQuaruk + totalResourcesMaskLoleYKnuff)-totalActualOdeesMask, 0)

const [ActualMusyaMask, setActualMusyaMask] = useState(0);
const totalActualMusyaMask = Math.min (totalMusyaLeftMask+totalOdeesMaskOverflow, (10000-Musya))

const [MusyaMaskOverflow, setMusyaMaskOverflow] = useState(0);
const totalMusyaMaskOverflow = Math.max ((totalOdeesMaskOverflow - totalActualMusyaMask), 0)

const [ActualQuarukMask, setActualQuarukMask] = useState(0);
const totalActualQuarukMask = Math.min (totalResourcesMaskLoleYQuaruk, totalQuarukPoss)

const [QuarukMaskOverflow, setQuarukMaskOverflow] = useState(0);
const totalQuarukMaskOverflow = Math.max ((totalMusyaMaskOverflow-totalActualQuarukMask), 0)

const [ActualKnuffMask, setActualKnuffMask] = useState(0);
const totalActualKnuffMask = Math.min (totalResourcesMaskLoleYKnuff, totalKnuffPoss)

const [KnuffMaskOverflow, setKnuffMaskOverflow] = useState(0);
const totalKnuffMaskOverflow = Math.max (totalQuarukMaskOverflow-totalActualKnuffMask, 0)

const [ActualSopoiMask, setActualSopoiMask] = useState(0);
const totalActualSopoiMask = Math.min (totalKnuffOverflow, totalSopoiPoss)

const [SopoiMaskOverflow, setSopoiMaskOverflow] = useState(0);
const totalSopoiMaskOverflow = Math.max (totalKnuffMaskOverflow-totalActualSopoiMask, 0)

const [MibloomMaskDrops, setMibloomMaskDrops] = useState(0);
const totalMibloomMaskDrops = Math.min (totalMibloomPossAdjusted, totalSopoiMaskOverflow)

const [MibloomMaskActual, setMibloomMaskActual] = useState(0);
const totalMibloomMaskActual = Math.ceil (totalMibloomMaskDrops/3)

const [MibloomMaskOverflow, setMibloomMaskOverflow] = useState(0);
const totalMibloomMaskOverflow = Math.max (totalSopoiMaskOverflow-totalMibloomMaskDrops,0)

const [ActualKinguzMask, setActualKinguzMask] = useState(0);
const totalActualKinguzMask = Math.min (totalKinguzPoss, totalMibloomMaskOverflow)

const [KinguzMaskOverflow, setKinguzMaskOverflow] = useState(0);
const totalKinguzMaskOverflow = Math.max (totalMibloomMaskOverflow-totalActualKinguzMask, 0)

const [finalOdeesMask, setFinalOdeesMask] = useState(0);
const totalFinalOdeesMask = Math.max (totalKinguzMaskOverflow+totalActualOdeesMask, totalActualOdeesMask)

const [LoleYMaskWC, setLoleYMaskWC] = useState(0);
const totalLoleYMaskWC = Math.max ((totalFinalOdeesMask*44)+(totalActualMusyaMask*50)+(totalActualQuarukMask*50)+(totalActualKnuffMask*60)+(totalActualSopoiMask*60)+(totalMibloomMaskActual*150)+(totalActualKinguzMask*70),0)


//LOLEN CUTOUT Odees -> Musya -> Quaruk -> Knuff -> Mibloom -> Kinguz//

const [ActualOdeesLoleN, setActualOdeesLoleN] = useState(0);
const totalActualOdeesLoleN = Math.max (totalOdeesPossCutoutLoleN, 0)

const [OdeesLoleNOverflow, setOdeesLoleNOverflow] = useState(0);
const totalOdeesLoleNOverflow = Math.max (totalResourcesCutoutLoleN - totalActualOdeesLoleN, 0)

const [Musya_OdeesLoleNOverflow, setMusya_OdeesLoleNOverflow] = useState(0);
const totalMusya_OdeesLoleNOverflow = Math.max (totalOdeesLoleNOverflow + totalWhichForMusyaCutoutLoleN, 0)

const [ActualMusyaLoleN, setActualMusyaLoleN] = useState(0);
const totalActualMusyaLoleN = Math.min (totalMusya_OdeesLoleNOverflow-totalOdeesLoleNOverflow, (10000-Musya))

const [MusyaLoleNOverflow, setMusyaLoleNOverflow] = useState(0);
const totalMusyaLoleNOverflow = Math.max ((totalOdeesLoleNOverflow-totalActualMusyaLoleN), 0)

const [ActualQuarukLoleN, setActualQuarukLoleN] = useState(0);
const totalActualQuarukLoleN = Math.min (Quaruk + totalMusyaLoleNOverflow, (10000-Quaruk))

const [QuarukLoleNOverflow, setQuarukLoleNOverflow] = useState(0);
const totalQuarukLoleNOverflow = Math.max (totalMusyaLoleNOverflow-totalActualQuarukLoleN,0)

const [ActualKnuffLoleN, setActualKnuffLoleN] = useState(0);
const totalActualKnuffLoleN = Math.min (totalKnuffPoss, totalQuarukLoleNOverflow)

const [KnuffLoleNOverflow, setKnuffLoleNOverflow] = useState(0);
const totalKnuffLoleNOverflow = Math.max (totalQuarukLoleNOverflow-totalActualKnuffLoleN,0)

const [ActualSopoiLoleN, setActualSopoiLoleN] = useState(0);
const totalActualSopoiLoleN = Math.min (totalSopoiPoss, totalKnuffLoleNOverflow)

const [SopoiLoleNOverflow, setSopoiLoleNOverflow] = useState(0);
const totalSopoiLoleNOverflow = Math.max (totalKnuffLoleNOverflow-totalActualSopoiLoleN,0)

const [ActualMibloomLoleN, setActualMibloomLoleN] = useState(0);
const totalActualMibloomLoleN = Math.min (totalMibloomPossAdjusted, totalSopoiLoleNOverflow)

const [ActualMibloomLoleNAdjusted, setActualMibloomLoleNAdjusted] = useState(0);
const totalActualMibloomLoleNAdjusted = Math.ceil (totalActualMibloomLoleN/3)

const [MibloomLoleNOverflow, setMibloomLoleNOverflow] = useState(0);
const totalMibloomLoleNOverflow = Math.max (totalSopoiLoleNOverflow-totalActualMibloomLoleN, 0)

const [ActualKinguzLoleN, setActualKinguzLoleN] = useState(0);
const totalActualKinguzLoleN = Math.min (totalKinguzPoss, totalMibloomLoleNOverflow)

const [KinguzLoleNOverflow, setKinguzLoleNOverflow] = useState(0);
const totalKinguzLoleNOverflow = Math.max (totalMibloomLoleNOverflow-totalActualKinguzLoleN, 0)

const [finalOdeesLoleN, setFinalOdeesLoleN] = useState(0);
const totalFinalOdeesLoleN = Math.max (totalKinguzLoleNOverflow+totalActualOdeesLoleN, 0)

const [LoleNCutoutWC, setLoleNCutoutWC] = useState(0);
const totalLoleNCutoutWC = Math.max ((totalFinalOdeesLoleN*44)+(totalActualMusyaLoleN*50)+(totalActualQuarukLoleN*50)+(totalActualKnuffLoleN*60)+(totalActualSopoiLoleN*60)+(totalActualMibloomLoleNAdjusted*150)+(totalActualKinguzLoleN*70),0)


//LOLEN MASK Odees -> Musya -> Quaruk -> Knuff -> Mibloom -> Kinguz//

const [ActualOdeesMaskLoleN, setActualOdeesMaskLoleN] = useState(0);
const totalActualOdeesMaskLoleN = Math.max (totalOdeesPossMaskLoleN, 0)

const [OdeesMaskLoleNOverflow, setOdeesMaskLoleNOverflow] = useState(0);
const totalOdeesMaskLoleNOverflow = Math.max (totalResourcesMaskLoleN-totalActualOdeesMaskLoleN, 0)

const [ActualMusyaMaskLoleN, setActualMusyaMaskLoleN] = useState(0);
const totalActualMusyaMaskLoleN = Math.min (totalMusyaLeft+totalOdeesMaskLoleNOverflow, (10000-Musya))

const [MusyaMaskLoleNOverflow, setMusyaMaskLoleNOverflow] = useState(0);
const totalMusyaMaskLoleNOverflow = Math.max ((totalOdeesMaskLoleNOverflow - totalActualMusyaMaskLoleN), 0)

const [ActualQuarukMaskLoleN, setActualQuarukMaskLoleN] = useState(0);
const totalActualQuarukMaskLoleN = Math.min (totalResourcesMaskLoleNQuaruk, totalQuarukPoss)

const [QuarukMaskLoleNOverflow, setQuarukMaskLoleNOverflow] = useState(0);
const totalQuarukMaskLoleNOverflow = Math.max ((totalMusyaMaskLoleNOverflow-totalActualQuarukMaskLoleN), 0)

const [ActualKnuffMaskLoleN, setActualKnuffMaskLoleN] = useState(0);
const totalActualKnuffMaskLoleN = Math.min (totalResourcesMaskLoleNKnuff, totalKnuffPoss)

const [KnuffMaskLoleNOverflow, setKnuffMaskLoleNOverflow] = useState(0);
const totalKnuffMaskLoleNOverflow = Math.max (totalQuarukMaskLoleNOverflow-totalActualKnuffMaskLoleN, 0)

const [ActualSopoiMaskLoleN, setActualSopoiMaskLoleN] = useState(0);
const totalActualSopoiMaskLoleN = Math.min (totalKnuffMaskLoleNOverflow, totalSopoiPoss)

const [SopoiMaskLoleNOverflow, setSopoiMaskLoleNOverflow] = useState(0);
const totalSopoiMaskLoleNOverflow = Math.max (totalKnuffMaskLoleNOverflow-totalActualSopoiMaskLoleN, 0)

const [MibloomMaskLoleNDrops, setMibloomMaskLoleNDrops] = useState(0);
const totalMibloomMaskLoleNDrops = Math.min (totalMibloomPossAdjusted, totalSopoiMaskLoleNOverflow)

const [MibloomMaskLoleNActual, setMibloomMaskLoleNActual] = useState(0);
const totalMibloomMaskLoleNActual = Math.ceil (totalMibloomMaskLoleNDrops/3)

const [MibloomMaskLoleNOverflow, setMibloomMaskLoleNOverflow] = useState(0);
const totalMibloomMaskLoleNOverflow = Math.max (totalSopoiMaskLoleNOverflow-totalMibloomMaskLoleNDrops,0)

const [ActualKinguzMaskLoleN, setActualKinguzMaskLoleN] = useState(0);
const totalActualKinguzMaskLoleN = Math.min (totalKinguzPoss, totalMibloomMaskLoleNOverflow)

const [KinguzMaskLoleNOverflow, setKinguzMaskLoleNOverflow] = useState(0);
const totalKinguzMaskLoleNOverflow = Math.max (totalMibloomMaskLoleNOverflow-totalActualKinguzMaskLoleN, 0)

const [finalOdeesLoleNMask, setFinalOdeesLoleNMask] = useState(0);
const totalFinalOdeesLoleNMask = Math.max (totalKinguzMaskLoleNOverflow + totalActualOdeesMaskLoleN, totalActualOdeesMaskLoleN)

const [LoleNMaskWC, setLoleNMaskWC] = useState(0);
const totalLoleNMaskWC = Math.max ((totalFinalOdeesLoleNMask*44)+(totalActualMusyaMaskLoleN*50)+(totalActualQuarukMaskLoleN*50)+(totalActualKnuffMaskLoleN*60)+(totalActualSopoiMaskLoleN*60)+(totalMibloomMaskLoleNActual*150)+(totalActualKinguzMaskLoleN*70),0)

//WC all monsters with no battle cost - incl. potion gold cost//

//Lole both, cutout
const [LoleBothCutoutPotionCost, setLoleBothCutoutPotionCost] = useState(0);
const totalLoleBothCutoutPotionCost = Math.max ((totalMasteryMonsterCutout * 850)-Coins,0)

const [LoleBothCutoutKuikas, setLoleBothCutoutKuikas] = useState(0);
const totalLoleBothCutoutKuikas = Math.ceil (totalLoleBothCutoutPotionCost/33)

const [LoleBothCutoutPotionCostWC, setLoleBothCutoutPotionCostWC] = useState(0);
const totalLoleBothCutoutPotionCostWC = Math.max ((totalLoleBothCutoutKuikas * 50),0)

//Lole both, mask
const [LoleBothMaskPotionCost, setLoleBothMaskPotionCost] = useState(0);
const totalLoleBothMaskPotionCost = Math.max ((totalMasteryMonsterMask * 850)-Coins,0)

const [LoleBothMaskKuikas, setLoleBothMaskKuikas] = useState(0);
const totalLoleBothMaskKuikas = Math.ceil (totalLoleBothMaskPotionCost/33)

const [LoleBothMaskPotionCostWC, setLoleBothMaskPotionCostWC] = useState(0);
const totalLoleBothMaskPotionCostWC = Math.max ((totalLoleBothMaskKuikas * 50),0)

//Lole Y cutout + mask - total WC

const [NoBattleCostMonsterLoleYCutoutWC, setNoBattleCostMonsterLoleYCutoutWC] = useState(0);
const totalNoBattleCostMonsterLoleYCutoutWC = Math.max (totalLoleYCutoutWC + totalLoleBothCutoutPotionCostWC,0)

const [NoBattleCostMonsterLoleYMaskWC, setNoBattleCostMonsterLoleYMaskWC] = useState(0);
const totalNoBattleCostMonsterLoleYMaskWC = Math.max (totalLoleYMaskWC + totalLoleBothMaskPotionCostWC,0)

//Lole N cutout + mask - total WC

const [NoBattleCostMonsterLoleNCutoutWC, setNoBattleCostMonsterLoleNCutoutWC] = useState(0);
const totalNoBattleCostMonsterLoleNCutoutWC = Math.max (totalLoleNCutoutWC + totalLoleBothCutoutPotionCostWC,0)

const [NoBattleCostMonsterLoleNMaskWC, setNoBattleCostMonsterLoleNMaskWC] = useState(0);
const totalNoBattleCostMonsterLoleNMaskWC = Math.max (totalLoleNMaskWC + totalLoleBothMaskPotionCostWC,0)

//TESVEN - offset value of drops

const [TesvenCoinValueDropsCutout, setTesvenCoinValueDropsCutout] = useState(0);
const totalTesvenCoinValueDropsCutout = Math.max ((totalMasteryMonsterCutout*195))

const [TesvenEquivKuikasCutout, setTesvenEquivKuikasCutout] = useState(0);
const totalTesvenEquivKuikasCutout = Math.ceil (totalTesvenCoinValueDropsCutout/33)

const [TesvenCoinsNeededCutout, setTesvenCoinsNeededCutout] = useState(0);
const totalTesvenCoinsNeededCutout = Math.max (totalLoleBothCutoutPotionCost-totalTesvenCoinValueDropsCutout,0)

const [TesvenKuikasQtyCutout, setTesvenKuikasQtyCutout] = useState(0);
const totalTesvenKuikasQtyCutout = Math.max (totalLoleBothCutoutKuikas-totalTesvenEquivKuikasCutout,0)

const [TesvenKuikasWCLoleBothCutout, setTesvenKuikasWCLoleBothCutout] = useState(0);
const totalTesvenKuikasWCLoleBothCutout = Math.max ((totalTesvenKuikasQtyCutout)*50,0)


//
const [TesvenCoinValueDropsMask, setTesvenCoinValueDropsMask] = useState(0);
const totalTesvenCoinValueDropsMask = Math.max ((totalMasteryMonsterMask*195))

const [TesvenEquivKuikasMask, setTesvenEquivKuikasMask] = useState(0);
const totalTesvenEquivKuikasMask = Math.ceil (totalTesvenCoinValueDropsMask/33)

const [TesvenCoinsNeededMask, setTesvenCoinsNeededMask] = useState(0);
const totalTesvenCoinsNeededMask = Math.max (totalLoleBothMaskPotionCost-totalTesvenCoinValueDropsMask,0)

const [TesvenKuikasQtyMask, setTesvenKuikasQtyMask] = useState(0);
const totalTesvenKuikasQtyMask = Math.max (totalLoleBothMaskKuikas-totalTesvenEquivKuikasMask,0)

const [TesvenKuikasWCLoleBothMask, setTesvenKuikasWCLoleBothMask] = useState(0);
const totalTesvenKuikasWCLoleBothMask = Math.max ((totalTesvenKuikasQtyMask)*50,0)




const [TesvenTotalWCLoleYCutout, setTesvenTotalWCLoleYCutout] = useState(0);
const totalTesvenTotalWCLoleYCutout = Math.max (totalLoleYCutoutWC + totalTesvenKuikasWCLoleBothCutout, 0)

const [TesvenTotalWCLoleNCutout, setTesvenTotalWCLoleNCutout] = useState(0);
const totalTesvenTotalWCLoleNCutout = Math.max (totalLoleNCutoutWC + totalTesvenKuikasWCLoleBothCutout, 0)

const [TesvenTotalWCLoleYMask, setTesvenTotalWCLoleYMask] = useState(0);
const totalTesvenTotalWCLoleYMask = Math.max (totalLoleYMaskWC + totalTesvenKuikasWCLoleBothMask, 0)

const [TesvenTotalWCLoleNMask, setTesvenTotalWCLoleNMask] = useState(0);
const totalTesvenTotalWCLoleNMask = Math.max (totalLoleNMaskWC + totalTesvenKuikasWCLoleBothMask, 0)

//AZADI - offset value of drops

const [AzadiCoinValueDropsCutout, setAzadiCoinValueDropsCutout] = useState(0);
const totalAzadiCoinValueDropsCutout = Math.max ((totalMasteryMonsterCutout*283))

const [AzadiEquivKuikasCutout, setAzadiEquivKuikasCutout] = useState(0);
const totalAzadiEquivKuikasCutout = Math.ceil (totalAzadiCoinValueDropsCutout/33)

const [AzadiCoinsNeededCutout, setAzadiCoinsNeededCutout] = useState(0);
const totalAzadiCoinsNeededCutout = Math.max (totalLoleBothCutoutPotionCost-totalAzadiCoinValueDropsCutout,0)

const [AzadiKuikasQtyCutout, setAzadiKuikasQtyCutout] = useState(0);
const totalAzadiKuikasQtyCutout = Math.max (totalLoleBothCutoutKuikas-totalAzadiEquivKuikasCutout,0)

const [AzadiKuikasWCLoleBothCutout, setAzadiKuikasWCLoleBothCutout] = useState(0);
const totalAzadiKuikasWCLoleBothCutout = Math.max ((totalAzadiKuikasQtyCutout)*50,0)


//
const [AzadiCoinValueDropsMask, setAzadiCoinValueDropsMask] = useState(0);
const totalAzadiCoinValueDropsMask = Math.max ((totalMasteryMonsterMask*283))

const [AzadiEquivKuikasMask, setAzadiEquivKuikasMask] = useState(0);
const totalAzadiEquivKuikasMask = Math.ceil (totalAzadiCoinValueDropsMask/33)

const [AzadiCoinsNeededMask, setAzadiCoinsNeededMask] = useState(0);
const totalAzadiCoinsNeededMask = Math.max (totalLoleBothMaskPotionCost-totalAzadiCoinValueDropsMask,0)

const [AzadiKuikasQtyMask, setAzadiKuikasQtyMask] = useState(0);
const totalAzadiKuikasQtyMask = Math.max (totalLoleBothMaskKuikas-totalAzadiEquivKuikasMask,0)

const [AzadiKuikasWCLoleBothMask, setAzadiKuikasWCLoleBothMask] = useState(0);
const totalAzadiKuikasWCLoleBothMask = Math.max ((totalAzadiKuikasQtyMask)*50,0)




const [AzadiTotalWCLoleYCutout, setAzadiTotalWCLoleYCutout] = useState(0);
const totalAzadiTotalWCLoleYCutout = Math.max (totalLoleYCutoutWC + totalAzadiKuikasWCLoleBothCutout, 0)

const [AzadiTotalWCLoleNCutout, setAzadiTotalWCLoleNCutout] = useState(0);
const totalAzadiTotalWCLoleNCutout = Math.max (totalLoleNCutoutWC + totalAzadiKuikasWCLoleBothCutout, 0)

const [AzadiTotalWCLoleYMask, setAzadiTotalWCLoleYMask] = useState(0);
const totalAzadiTotalWCLoleYMask = Math.max (totalLoleYMaskWC + totalAzadiKuikasWCLoleBothMask, 0)

const [AzadiTotalWCLoleNMask, setAzadiTotalWCLoleNMask] = useState(0);
const totalAzadiTotalWCLoleNMask = Math.max (totalLoleNMaskWC + totalAzadiKuikasWCLoleBothMask, 0)

//DUST SUWO - offset value of drops

const [DustSuwoCoinValueDropsCutout, setDustSuwoCoinValueDropsCutout] = useState(0);
const totalDustSuwoCoinValueDropsCutout = Math.max ((totalMasteryMonsterCutout*1680))

const [DustSuwoEquivKuikasCutout, setDustSuwoEquivKuikasCutout] = useState(0);
const totalDustSuwoEquivKuikasCutout = Math.ceil (totalDustSuwoCoinValueDropsCutout/33)

const [DustSuwoCoinsNeededCutout, setDustSuwoCoinsNeededCutout] = useState(0);
const totalDustSuwoCoinsNeededCutout = Math.max (totalLoleBothCutoutPotionCost-totalDustSuwoCoinValueDropsCutout,0)

const [DustSuwoKuikasQtyCutout, setDustSuwoKuikasQtyCutout] = useState(0);
const totalDustSuwoKuikasQtyCutout = Math.max (totalLoleBothCutoutKuikas-totalDustSuwoEquivKuikasCutout,0)

const [DustSuwoKuikasWCLoleBothCutout, setDustSuwoKuikasWCLoleBothCutout] = useState(0);
const totalDustSuwoKuikasWCLoleBothCutout = Math.max ((totalDustSuwoKuikasQtyCutout)*50,0)


//
const [DustSuwoCoinValueDropsMask, setDustSuwoCoinValueDropsMask] = useState(0);
const totalDustSuwoCoinValueDropsMask = Math.max ((totalMasteryMonsterMask*1680))

const [DustSuwoEquivKuikasMask, setDustSuwoEquivKuikasMask] = useState(0);
const totalDustSuwoEquivKuikasMask = Math.ceil (totalDustSuwoCoinValueDropsMask/33)

const [DustSuwoCoinsNeededMask, setDustSuwoCoinsNeededMask] = useState(0);
const totalDustSuwoCoinsNeededMask = Math.max (totalLoleBothMaskPotionCost-totalDustSuwoCoinValueDropsMask,0)

const [DustSuwoKuikasQtyMask, setDustSuwoKuikasQtyMask] = useState(0);
const totalDustSuwoKuikasQtyMask = Math.max (totalLoleBothMaskKuikas-totalDustSuwoEquivKuikasMask,0)

const [DustSuwoKuikasWCLoleBothMask, setDustSuwoKuikasWCLoleBothMask] = useState(0);
const totalDustSuwoKuikasWCLoleBothMask = Math.max ((totalDustSuwoKuikasQtyMask)*50,0)




const [DustSuwoTotalWCLoleYCutout, setDustSuwoTotalWCLoleYCutout] = useState(0);
const totalDustSuwoTotalWCLoleYCutout = Math.max (totalLoleYCutoutWC + totalDustSuwoKuikasWCLoleBothCutout, 0)

const [DustSuwoTotalWCLoleNCutout, setDustSuwoTotalWCLoleNCutout] = useState(0);
const totalDustSuwoTotalWCLoleNCutout = Math.max (totalLoleNCutoutWC + totalDustSuwoKuikasWCLoleBothCutout, 0)

const [DustSuwoTotalWCLoleYMask, setDustSuwoTotalWCLoleYMask] = useState(0);
const totalDustSuwoTotalWCLoleYMask = Math.max (totalLoleYMaskWC + totalDustSuwoKuikasWCLoleBothMask, 0)

const [DustSuwoTotalWCLoleNMask, setDustSuwoTotalWCLoleNMask] = useState(0);
const totalDustSuwoTotalWCLoleNMask = Math.max (totalLoleNMaskWC + totalDustSuwoKuikasWCLoleBothMask, 0)

//SUWO - offset value of drops

const [SuwoCoinValueDropsCutout, setSuwoCoinValueDropsCutout] = useState(0);
const totalSuwoCoinValueDropsCutout = Math.max ((totalMasteryMonsterCutout*1264))

const [SuwoEquivKuikasCutout, setSuwoEquivKuikasCutout] = useState(0);
const totalSuwoEquivKuikasCutout = Math.ceil (totalSuwoCoinValueDropsCutout/33)

const [SuwoCoinsNeededCutout, setSuwoCoinsNeededCutout] = useState(0);
const totalSuwoCoinsNeededCutout = Math.max (totalLoleBothCutoutPotionCost-totalSuwoCoinValueDropsCutout,0)

const [SuwoKuikasQtyCutout, setSuwoKuikasQtyCutout] = useState(0);
const totalSuwoKuikasQtyCutout = Math.max (totalLoleBothCutoutKuikas-totalSuwoEquivKuikasCutout,0)

const [SuwoKuikasWCLoleBothCutout, setSuwoKuikasWCLoleBothCutout] = useState(0);
const totalSuwoKuikasWCLoleBothCutout = Math.max ((totalSuwoKuikasQtyCutout)*50,0)


//
const [SuwoCoinValueDropsMask, setSuwoCoinValueDropsMask] = useState(0);
const totalSuwoCoinValueDropsMask = Math.max ((totalMasteryMonsterMask*1264))

const [SuwoEquivKuikasMask, setSuwoEquivKuikasMask] = useState(0);
const totalSuwoEquivKuikasMask = Math.ceil (totalSuwoCoinValueDropsMask/33)

const [SuwoCoinsNeededMask, setSuwoCoinsNeededMask] = useState(0);
const totalSuwoCoinsNeededMask = Math.max (totalLoleBothMaskPotionCost-totalSuwoCoinValueDropsMask,0)

const [SuwoKuikasQtyMask, setSuwoKuikasQtyMask] = useState(0);
const totalSuwoKuikasQtyMask = Math.max (totalLoleBothMaskKuikas-totalSuwoEquivKuikasMask,0)

const [SuwoKuikasWCLoleBothMask, setSuwoKuikasWCLoleBothMask] = useState(0);
const totalSuwoKuikasWCLoleBothMask = Math.max ((totalSuwoKuikasQtyMask)*50,0)




const [SuwoTotalWCLoleYCutout, setSuwoTotalWCLoleYCutout] = useState(0);
const totalSuwoTotalWCLoleYCutout = Math.max (totalLoleYCutoutWC + totalSuwoKuikasWCLoleBothCutout, 0)

const [SuwoTotalWCLoleNCutout, setSuwoTotalWCLoleNCutout] = useState(0);
const totalSuwoTotalWCLoleNCutout = Math.max (totalLoleNCutoutWC + totalSuwoKuikasWCLoleBothCutout, 0)

const [SuwoTotalWCLoleYMask, setSuwoTotalWCLoleYMask] = useState(0);
const totalSuwoTotalWCLoleYMask = Math.max (totalLoleYMaskWC + totalSuwoKuikasWCLoleBothMask, 0)

const [SuwoTotalWCLoleNMask, setSuwoTotalWCLoleNMask] = useState(0);
const totalSuwoTotalWCLoleNMask = Math.max (totalLoleNMaskWC + totalSuwoKuikasWCLoleBothMask, 0)


//DARK REFLECTION - offset value of drops

const [DarkReflectionCoinValueDropsCutout, setDarkReflectionCoinValueDropsCutout] = useState(0);
const totalDarkReflectionCoinValueDropsCutout = Math.max ((totalMasteryMonsterCutout*2770))

const [DarkReflectionEquivKuikasCutout, setDarkReflectionEquivKuikasCutout] = useState(0);
const totalDarkReflectionEquivKuikasCutout = Math.ceil (totalDarkReflectionCoinValueDropsCutout/33)

const [DarkReflectionCoinsNeededCutout, setDarkReflectionCoinsNeededCutout] = useState(0);
const totalDarkReflectionCoinsNeededCutout = Math.max (totalLoleBothCutoutPotionCost-totalDarkReflectionCoinValueDropsCutout,0)

const [DarkReflectionKuikasQtyCutout, setDarkReflectionKuikasQtyCutout] = useState(0);
const totalDarkReflectionKuikasQtyCutout = Math.max (totalLoleBothCutoutKuikas-totalDarkReflectionEquivKuikasCutout,0)

const [DarkReflectionKuikasWCLoleBothCutout, setDarkReflectionKuikasWCLoleBothCutout] = useState(0);
const totalDarkReflectionKuikasWCLoleBothCutout = Math.max ((totalDarkReflectionKuikasQtyCutout)*50,0)


//
const [DarkReflectionCoinValueDropsMask, setDarkReflectionCoinValueDropsMask] = useState(0);
const totalDarkReflectionCoinValueDropsMask = Math.max ((totalMasteryMonsterMask*2770))

const [DarkReflectionEquivKuikasMask, setDarkReflectionEquivKuikasMask] = useState(0);
const totalDarkReflectionEquivKuikasMask = Math.ceil (totalDarkReflectionCoinValueDropsMask/33)

const [DarkReflectionCoinsNeededMask, setDarkReflectionCoinsNeededMask] = useState(0);
const totalDarkReflectionCoinsNeededMask = Math.max (totalLoleBothMaskPotionCost-totalDarkReflectionCoinValueDropsMask,0)

const [DarkReflectionKuikasQtyMask, setDarkReflectionKuikasQtyMask] = useState(0);
const totalDarkReflectionKuikasQtyMask = Math.max (totalLoleBothMaskKuikas-totalDarkReflectionEquivKuikasMask,0)

const [DarkReflectionKuikasWCLoleBothMask, setDarkReflectionKuikasWCLoleBothMask] = useState(0);
const totalDarkReflectionKuikasWCLoleBothMask = Math.max ((totalDarkReflectionKuikasQtyMask)*50,0)




const [DarkReflectionTotalWCLoleYCutout, setDarkReflectionTotalWCLoleYCutout] = useState(0);
const totalDarkReflectionTotalWCLoleYCutout = Math.max (totalLoleYCutoutWC + totalDarkReflectionKuikasWCLoleBothCutout, 0)

const [DarkReflectionTotalWCLoleNCutout, setDarkReflectionTotalWCLoleNCutout] = useState(0);
const totalDarkReflectionTotalWCLoleNCutout = Math.max (totalLoleNCutoutWC + totalDarkReflectionKuikasWCLoleBothCutout, 0)

const [DarkReflectionTotalWCLoleYMask, setDarkReflectionTotalWCLoleYMask] = useState(0);
const totalDarkReflectionTotalWCLoleYMask = Math.max (totalLoleYMaskWC + totalDarkReflectionKuikasWCLoleBothMask, 0)

const [DarkReflectionTotalWCLoleNMask, setDarkReflectionTotalWCLoleNMask] = useState(0);
const totalDarkReflectionTotalWCLoleNMask = Math.max (totalLoleNMaskWC + totalDarkReflectionKuikasWCLoleBothMask, 0)

//CARAVAN - offset value of drops

const [CaravanCoinValueDropsCutout, setCaravanCoinValueDropsCutout] = useState(0);
const totalCaravanCoinValueDropsCutout = Math.max ((totalMasteryMonsterCutout*1775))

const [CaravanEquivKuikasCutout, setCaravanEquivKuikasCutout] = useState(0);
const totalCaravanEquivKuikasCutout = Math.ceil (totalCaravanCoinValueDropsCutout/33)

const [CaravanCoinsNeededCutout, setCaravanCoinsNeededCutout] = useState(0);
const totalCaravanCoinsNeededCutout = Math.max (totalLoleBothCutoutPotionCost-totalCaravanCoinValueDropsCutout,0)

const [CaravanKuikasQtyCutout, setCaravanKuikasQtyCutout] = useState(0);
const totalCaravanKuikasQtyCutout = Math.max (totalLoleBothCutoutKuikas-totalCaravanEquivKuikasCutout,0)

const [CaravanKuikasWCLoleBothCutout, setCaravanKuikasWCLoleBothCutout] = useState(0);
const totalCaravanKuikasWCLoleBothCutout = Math.max ((totalCaravanKuikasQtyCutout)*50,0)


//
const [CaravanCoinValueDropsMask, setCaravanCoinValueDropsMask] = useState(0);
const totalCaravanCoinValueDropsMask = Math.max ((totalMasteryMonsterMask*1775))

const [CaravanEquivKuikasMask, setCaravanEquivKuikasMask] = useState(0);
const totalCaravanEquivKuikasMask = Math.ceil (totalCaravanCoinValueDropsMask/33)

const [CaravanCoinsNeededMask, setCaravanCoinsNeededMask] = useState(0);
const totalCaravanCoinsNeededMask = Math.max (totalLoleBothMaskPotionCost-totalCaravanCoinValueDropsMask,0)

const [CaravanKuikasQtyMask, setCaravanKuikasQtyMask] = useState(0);
const totalCaravanKuikasQtyMask = Math.max (totalLoleBothMaskKuikas-totalCaravanEquivKuikasMask,0)

const [CaravanKuikasWCLoleBothMask, setCaravanKuikasWCLoleBothMask] = useState(0);
const totalCaravanKuikasWCLoleBothMask = Math.max ((totalCaravanKuikasQtyMask)*50,0)




const [CaravanTotalWCLoleYCutout, setCaravanTotalWCLoleYCutout] = useState(0);
const totalCaravanTotalWCLoleYCutout = Math.max (totalLoleYCutoutWC + totalCaravanKuikasWCLoleBothCutout, 0)

const [CaravanTotalWCLoleNCutout, setCaravanTotalWCLoleNCutout] = useState(0);
const totalCaravanTotalWCLoleNCutout = Math.max (totalLoleNCutoutWC + totalCaravanKuikasWCLoleBothCutout, 0)

const [CaravanTotalWCLoleYMask, setCaravanTotalWCLoleYMask] = useState(0);
const totalCaravanTotalWCLoleYMask = Math.max (totalLoleYMaskWC + totalCaravanKuikasWCLoleBothMask, 0)

const [CaravanTotalWCLoleNMask, setCaravanTotalWCLoleNMask] = useState(0);
const totalCaravanTotalWCLoleNMask = Math.max (totalLoleNMaskWC + totalCaravanKuikasWCLoleBothMask, 0)

//KULTALVA - offset value of drops

const [KultalvaCoinValueDropsCutout, setKultalvaCoinValueDropsCutout] = useState(0);
const totalKultalvaCoinValueDropsCutout = Math.max ((totalMasteryMonsterCutout*287))

const [KultalvaEquivKuikasCutout, setKultalvaEquivKuikasCutout] = useState(0);
const totalKultalvaEquivKuikasCutout = Math.ceil (totalKultalvaCoinValueDropsCutout/33)

const [KultalvaCoinsNeededCutout, setKultalvaCoinsNeededCutout] = useState(0);
const totalKultalvaCoinsNeededCutout = Math.max (totalLoleBothCutoutPotionCost-totalKultalvaCoinValueDropsCutout,0)

const [KultalvaKuikasQtyCutout, setKultalvaKuikasQtyCutout] = useState(0);
const totalKultalvaKuikasQtyCutout = Math.max (totalLoleBothCutoutKuikas-totalKultalvaEquivKuikasCutout,0)

const [KultalvaKuikasWCLoleBothCutout, setKultalvaKuikasWCLoleBothCutout] = useState(0);
const totalKultalvaKuikasWCLoleBothCutout = Math.max ((totalKultalvaKuikasQtyCutout)*50,0)


//
const [KultalvaCoinValueDropsMask, setKultalvaCoinValueDropsMask] = useState(0);
const totalKultalvaCoinValueDropsMask = Math.max ((totalMasteryMonsterMask*287))

const [KultalvaEquivKuikasMask, setKultalvaEquivKuikasMask] = useState(0);
const totalKultalvaEquivKuikasMask = Math.ceil (totalKultalvaCoinValueDropsMask/33)

const [KultalvaCoinsNeededMask, setKultalvaCoinsNeededMask] = useState(0);
const totalKultalvaCoinsNeededMask = Math.max (totalLoleBothMaskPotionCost-totalKultalvaCoinValueDropsMask,0)

const [KultalvaKuikasQtyMask, setKultalvaKuikasQtyMask] = useState(0);
const totalKultalvaKuikasQtyMask = Math.max (totalLoleBothMaskKuikas-totalKultalvaEquivKuikasMask,0)

const [KultalvaKuikasWCLoleBothMask, setKultalvaKuikasWCLoleBothMask] = useState(0);
const totalKultalvaKuikasWCLoleBothMask = Math.max ((totalKultalvaKuikasQtyMask)*50,0)




const [KultalvaTotalWCLoleYCutout, setKultalvaTotalWCLoleYCutout] = useState(0);
const totalKultalvaTotalWCLoleYCutout = Math.max (totalLoleYCutoutWC + totalKultalvaKuikasWCLoleBothCutout, 0)

const [KultalvaTotalWCLoleNCutout, setKultalvaTotalWCLoleNCutout] = useState(0);
const totalKultalvaTotalWCLoleNCutout = Math.max (totalLoleNCutoutWC + totalKultalvaKuikasWCLoleBothCutout, 0)

const [KultalvaTotalWCLoleYMask, setKultalvaTotalWCLoleYMask] = useState(0);
const totalKultalvaTotalWCLoleYMask = Math.max (totalLoleYMaskWC + totalKultalvaKuikasWCLoleBothMask, 0)

const [KultalvaTotalWCLoleNMask, setKultalvaTotalWCLoleNMask] = useState(0);
const totalKultalvaTotalWCLoleNMask = Math.max (totalLoleNMaskWC + totalKultalvaKuikasWCLoleBothMask, 0)


//RIVER GODDESS  - offset value of drops

const [RiverGoddessCoinValueDropsCutout, setRiverGoddessCoinValueDropsCutout] = useState(0);
const totalRiverGoddessCoinValueDropsCutout = Math.max ((totalMasteryMonsterCutout*1250))

const [RiverGoddessEquivKuikasCutout, setRiverGoddessEquivKuikasCutout] = useState(0);
const totalRiverGoddessEquivKuikasCutout = Math.ceil (totalRiverGoddessCoinValueDropsCutout/33)

const [RiverGoddessCoinsNeededCutout, setRiverGoddessCoinsNeededCutout] = useState(0);
const totalRiverGoddessCoinsNeededCutout = Math.max (totalLoleBothCutoutPotionCost-totalRiverGoddessCoinValueDropsCutout,0)

const [RiverGoddessKuikasQtyCutout, setRiverGoddessKuikasQtyCutout] = useState(0);
const totalRiverGoddessKuikasQtyCutout = Math.max (totalLoleBothCutoutKuikas-totalRiverGoddessEquivKuikasCutout,0)

const [RiverGoddessKuikasWCLoleBothCutout, setRiverGoddessKuikasWCLoleBothCutout] = useState(0);
const totalRiverGoddessKuikasWCLoleBothCutout = Math.max ((totalRiverGoddessKuikasQtyCutout)*50,0)


//
const [RiverGoddessCoinValueDropsMask, setRiverGoddessCoinValueDropsMask] = useState(0);
const totalRiverGoddessCoinValueDropsMask = Math.max ((totalMasteryMonsterMask*1250))

const [RiverGoddessEquivKuikasMask, setRiverGoddessEquivKuikasMask] = useState(0);
const totalRiverGoddessEquivKuikasMask = Math.ceil (totalRiverGoddessCoinValueDropsMask/33)

const [RiverGoddessCoinsNeededMask, setRiverGoddessCoinsNeededMask] = useState(0);
const totalRiverGoddessCoinsNeededMask = Math.max (totalLoleBothMaskPotionCost-totalRiverGoddessCoinValueDropsMask,0)

const [RiverGoddessKuikasQtyMask, setRiverGoddessKuikasQtyMask] = useState(0);
const totalRiverGoddessKuikasQtyMask = Math.max (totalLoleBothMaskKuikas-totalRiverGoddessEquivKuikasMask,0)

const [RiverGoddessKuikasWCLoleBothMask, setRiverGoddessKuikasWCLoleBothMask] = useState(0);
const totalRiverGoddessKuikasWCLoleBothMask = Math.max ((totalRiverGoddessKuikasQtyMask)*50,0)




const [RiverGoddessTotalWCLoleYCutout, setRiverGoddessTotalWCLoleYCutout] = useState(0);
const totalRiverGoddessTotalWCLoleYCutout = Math.max (totalLoleYCutoutWC + totalRiverGoddessKuikasWCLoleBothCutout, 0)

const [RiverGoddessTotalWCLoleNCutout, setRiverGoddessTotalWCLoleNCutout] = useState(0);
const totalRiverGoddessTotalWCLoleNCutout = Math.max (totalLoleNCutoutWC + totalRiverGoddessKuikasWCLoleBothCutout, 0)

const [RiverGoddessTotalWCLoleYMask, setRiverGoddessTotalWCLoleYMask] = useState(0);
const totalRiverGoddessTotalWCLoleYMask = Math.max (totalLoleYMaskWC + totalRiverGoddessKuikasWCLoleBothMask, 0)

const [RiverGoddessTotalWCLoleNMask, setRiverGoddessTotalWCLoleNMask] = useState(0);
const totalRiverGoddessTotalWCLoleNMask = Math.max (totalLoleNMaskWC + totalRiverGoddessKuikasWCLoleBothMask, 0)

//VELSOUN  - offset value of drops

const [VelsounCoinValueDropsCutout, setVelsounCoinValueDropsCutout] = useState(0);
const totalVelsounCoinValueDropsCutout = Math.max ((totalMasteryMonsterCutout*530-(totalMasteryMonsterCutout*416)), 0)

const [VelsounEquivKuikasCutout, setVelsounEquivKuikasCutout] = useState(0);
const totalVelsounEquivKuikasCutout = Math.ceil (totalVelsounCoinValueDropsCutout/33)

const [VelsounCoinsNeededCutout, setVelsounCoinsNeededCutout] = useState(0);
const totalVelsounCoinsNeededCutout = Math.max (totalLoleBothCutoutPotionCost-totalVelsounCoinValueDropsCutout,0)

const [VelsounKuikasQtyCutout, setVelsounKuikasQtyCutout] = useState(0);
const totalVelsounKuikasQtyCutout = Math.max (totalLoleBothCutoutKuikas-totalVelsounEquivKuikasCutout,0)

const [VelsounKuikasWCLoleBothCutout, setVelsounKuikasWCLoleBothCutout] = useState(0);
const totalVelsounKuikasWCLoleBothCutout = Math.max ((totalVelsounKuikasQtyCutout)*50,0)


//
const [VelsounCoinValueDropsMask, setVelsounCoinValueDropsMask] = useState(0);
const totalVelsounCoinValueDropsMask = Math.max ((totalMasteryMonsterMask*530-(totalMasteryMonsterMask*416)), 0)

const [VelsounEquivKuikasMask, setVelsounEquivKuikasMask] = useState(0);
const totalVelsounEquivKuikasMask = Math.ceil (totalVelsounCoinValueDropsMask/33)

const [VelsounCoinsNeededMask, setVelsounCoinsNeededMask] = useState(0);
const totalVelsounCoinsNeededMask = Math.max (totalLoleBothMaskPotionCost-totalVelsounCoinValueDropsMask,0)

const [VelsounKuikasQtyMask, setVelsounKuikasQtyMask] = useState(0);
const totalVelsounKuikasQtyMask = Math.max (totalLoleBothMaskKuikas-totalVelsounEquivKuikasMask,0)

const [VelsounKuikasWCLoleBothMask, setVelsounKuikasWCLoleBothMask] = useState(0);
const totalVelsounKuikasWCLoleBothMask = Math.max ((totalVelsounKuikasQtyMask)*50,0)


//ALPHA TAMBO  - offset value of drops

const [AlphaTamboCoinValueDropsCutout, setAlphaTamboCoinValueDropsCutout] = useState(0);
const totalAlphaTamboCoinValueDropsCutout = Math.max ((totalMasteryMonsterCutout*140))

const [AlphaTamboEquivKuikasCutout, setAlphaTamboEquivKuikasCutout] = useState(0);
const totalAlphaTamboEquivKuikasCutout = Math.ceil (totalAlphaTamboCoinValueDropsCutout/33)

const [AlphaTamboCoinsNeededCutout, setAlphaTamboCoinsNeededCutout] = useState(0);
const totalAlphaTamboCoinsNeededCutout = Math.max (totalLoleBothCutoutPotionCost-totalAlphaTamboCoinValueDropsCutout,0)

const [AlphaTamboKuikasQtyCutout, setAlphaTamboKuikasQtyCutout] = useState(0);
const totalAlphaTamboKuikasQtyCutout = Math.max (totalLoleBothCutoutKuikas-totalAlphaTamboEquivKuikasCutout,0)

const [AlphaTamboKuikasWCLoleBothCutout, setAlphaTamboKuikasWCLoleBothCutout] = useState(0);
const totalAlphaTamboKuikasWCLoleBothCutout = Math.max ((totalAlphaTamboKuikasQtyCutout)*50,0)


//
const [AlphaTamboCoinValueDropsMask, setAlphaTamboCoinValueDropsMask] = useState(0);
const totalAlphaTamboCoinValueDropsMask = Math.max ((totalMasteryMonsterMask*140))

const [AlphaTamboEquivKuikasMask, setAlphaTamboEquivKuikasMask] = useState(0);
const totalAlphaTamboEquivKuikasMask = Math.ceil (totalAlphaTamboCoinValueDropsMask/33)

const [AlphaTamboCoinsNeededMask, setAlphaTamboCoinsNeededMask] = useState(0);
const totalAlphaTamboCoinsNeededMask = Math.max (totalLoleBothMaskPotionCost-totalAlphaTamboCoinValueDropsMask,0)

const [AlphaTamboKuikasQtyMask, setAlphaTamboKuikasQtyMask] = useState(0);
const totalAlphaTamboKuikasQtyMask = Math.max (totalLoleBothMaskKuikas-totalAlphaTamboEquivKuikasMask,0)

const [AlphaTamboKuikasWCLoleBothMask, setAlphaTamboKuikasWCLoleBothMask] = useState(0);
const totalAlphaTamboKuikasWCLoleBothMask = Math.max ((totalAlphaTamboKuikasQtyMask)*50,0)

//RAKSTAL  - offset value of drops

const [RakstalCoinValueDropsCutout, setRakstalCoinValueDropsCutout] = useState(0);
const totalRakstalCoinValueDropsCutout = Math.max ((totalMasteryMonsterCutout*500))

const [RakstalEquivKuikasCutout, setRakstalEquivKuikasCutout] = useState(0);
const totalRakstalEquivKuikasCutout = Math.ceil (totalRakstalCoinValueDropsCutout/33)

const [RakstalCoinsNeededCutout, setRakstalCoinsNeededCutout] = useState(0);
const totalRakstalCoinsNeededCutout = Math.max (totalLoleBothCutoutPotionCost-totalRakstalCoinValueDropsCutout,0)

const [RakstalKuikasQtyCutout, setRakstalKuikasQtyCutout] = useState(0);
const totalRakstalKuikasQtyCutout = Math.max (totalLoleBothCutoutKuikas-totalRakstalEquivKuikasCutout,0)

const [RakstalKuikasWCLoleBothCutout, setRakstalKuikasWCLoleBothCutout] = useState(0);
const totalRakstalKuikasWCLoleBothCutout = Math.max ((totalRakstalKuikasQtyCutout)*50,0)


//
const [RakstalCoinValueDropsMask, setRakstalCoinValueDropsMask] = useState(0);
const totalRakstalCoinValueDropsMask = Math.max ((totalMasteryMonsterMask*500))

const [RakstalEquivKuikasMask, setRakstalEquivKuikasMask] = useState(0);
const totalRakstalEquivKuikasMask = Math.ceil (totalRakstalCoinValueDropsMask/33)

const [RakstalCoinsNeededMask, setRakstalCoinsNeededMask] = useState(0);
const totalRakstalCoinsNeededMask = Math.max (totalLoleBothMaskPotionCost-totalRakstalCoinValueDropsMask,0)

const [RakstalKuikasQtyMask, setRakstalKuikasQtyMask] = useState(0);
const totalRakstalKuikasQtyMask = Math.max (totalLoleBothMaskKuikas-totalRakstalEquivKuikasMask,0)

const [RakstalKuikasWCLoleBothMask, setRakstalKuikasWCLoleBothMask] = useState(0);
const totalRakstalKuikasWCLoleBothMask = Math.max ((totalRakstalKuikasQtyMask)*50,0)

//TAREIT  - offset value of drops

const [TareitCoinValueDropsCutout, setTareitCoinValueDropsCutout] = useState(0);
const totalTareitCoinValueDropsCutout = Math.max ((totalMasteryMonsterCutout*287)+(totalMasteryMonsterCutout*544))

const [TareitEquivKuikasCutout, setTareitEquivKuikasCutout] = useState(0);
const totalTareitEquivKuikasCutout = Math.ceil (totalTareitCoinValueDropsCutout/33)

const [TareitCoinsNeededCutout, setTareitCoinsNeededCutout] = useState(0);
const totalTareitCoinsNeededCutout = Math.max (totalLoleBothCutoutPotionCost+totalTareitCoinValueDropsCutout,0)

const [TareitKuikasQtyCutout, setTareitKuikasQtyCutout] = useState(0);
const totalTareitKuikasQtyCutout = Math.max (totalLoleBothCutoutKuikas+totalTareitEquivKuikasCutout,0)

const [TareitKuikasWCLoleBothCutout, setTareitKuikasWCLoleBothCutout] = useState(0);
const totalTareitKuikasWCLoleBothCutout = Math.max ((totalTareitKuikasQtyCutout)*50,0)


//
const [TareitCoinValueDropsMask, setTareitCoinValueDropsMask] = useState(0);
const totalTareitCoinValueDropsMask = Math.max ((totalMasteryMonsterMask*287)+(totalMasteryMonsterMask*544),0)

const [TareitEquivKuikasMask, setTareitEquivKuikasMask] = useState(0);
const totalTareitEquivKuikasMask = Math.ceil (totalTareitCoinValueDropsMask/33)

const [TareitCoinsNeededMask, setTareitCoinsNeededMask] = useState(0);
const totalTareitCoinsNeededMask = Math.max (totalLoleBothMaskPotionCost+totalTareitCoinValueDropsMask,0)

const [TareitKuikasQtyMask, setTareitKuikasQtyMask] = useState(0);
const totalTareitKuikasQtyMask = Math.max (totalLoleBothMaskKuikas+totalTareitEquivKuikasMask,0)

const [TareitKuikasWCLoleBothMask, setTareitKuikasWCLoleBothMask] = useState(0);
const totalTareitKuikasWCLoleBothMask = Math.max ((totalTareitKuikasQtyMask)*50,0)




const [TareitTotalWCLoleYCutout, setTareitTotalWCLoleYCutout] = useState(0);
const totalTareitTotalWCLoleYCutout = Math.max (totalLoleYCutoutWC + totalTareitKuikasWCLoleBothCutout, 0)

const [TareitTotalWCLoleNCutout, setTareitTotalWCLoleNCutout] = useState(0);
const totalTareitTotalWCLoleNCutout = Math.max (totalLoleNCutoutWC + totalTareitKuikasWCLoleBothCutout, 0)

const [TareitTotalWCLoleYMask, setTareitTotalWCLoleYMask] = useState(0);
const totalTareitTotalWCLoleYMask = Math.max (totalLoleYMaskWC + totalTareitKuikasWCLoleBothMask, 0)

const [TareitTotalWCLoleNMask, setTareitTotalWCLoleNMask] = useState(0);
const totalTareitTotalWCLoleNMask = Math.max (totalLoleNMaskWC + totalTareitKuikasWCLoleBothMask, 0)



//VELSOUN BATTLE COST - CUTOUT & MASK//

//2 spider legs

const [VelsounLoleBothCutoutSpiderLegs, setVelsounLoleBothCutoutSpiderLegs] = useState(0);
const totalVelsounLoleBothCutoutSpiderLegs = Math.max ((totalMasteryMonsterCutout*2)-SpiderLegs,0)

const [VelsounLoleBothMaskSpiderLegs, setVelsounLoleBothMaskSpiderLegs] = useState(0);
const totalVelsounLoleBothMaskSpiderLegs = Math.max ((totalMasteryMonsterMask*2)-SpiderLegs,0)

const [VelsounLoleBothCutoutFeathers, setVelsounLoleBothCutoutFeathers] = useState(0);
const totalVelsounLoleBothCutoutFeathers = Math.max ((totalMasteryMonsterCutout*5)-Feathers,0)

const [VelsounLoleBothMaskFeathers, setVelsounLoleBothMaskFeathers] = useState(0);
const totalVelsounLoleBothMaskFeathers = Math.max ((totalMasteryMonsterMask*5)-Feathers,0)

const [VelsounLoleBothCutoutLeaves, setVelsounLoleBothCutoutLeaves] = useState(0);
const totalVelsounLoleBothCutoutLeaves = Math.max ((totalMasteryMonsterCutout*25)-Leaves,0)

const [VelsounLoleBothMaskLeaves, setVelsounLoleBothMaskLeaves] = useState(0);
const totalVelsounLoleBothMaskLeaves = Math.max ((totalMasteryMonsterMask*25)-Leaves,0)

const [VelsounLoleBothCutoutClaws, setVelsounLoleBothCutoutClaws] = useState(0);
const totalVelsounLoleBothCutoutClaws = Math.max ((totalMasteryMonsterCutout*1)-Claws,0)

const [VelsounLoleBothMaskClaws, setVelsounLoleBothMaskClaws] = useState(0);
const totalVelsounLoleBothMaskClaws = Math.max ((totalMasteryMonsterMask*1)-Claws,0)

const [VelsounLoleBothCutoutCoinsLBP, setVelsounLoleBothCutoutCoinLBPs] = useState(0);
const totalVelsounLoleBothCutoutCoinsLBP = Math.max ((totalMasteryMonsterCutout*15)-Coins,0)

const [VelsounLoleBothMaskCoinsLBP, setVelsounLoleBothMaskCoinsLBP] = useState(0);
const totalVelsounLoleBothMaskCoinsLBP = Math.max ((totalMasteryMonsterMask*15)-Coins,0)

const [VelsounLoleBothCutoutCoins, setVelsounLoleBothCutoutCoins] = useState(0);
const totalVelsounLoleBothCutoutCoins = Math.max ((totalMasteryMonsterCutout*416)-LeafBreastplate,0)

const [VelsounLoleBothMaskCoins, setVelsounLoleBothMaskCoins] = useState(0);
const totalVelsounLoleBothMaskCoins = Math.max ((totalMasteryMonsterMask*416)-LeafBreastplate,0)

const [VelsounLoleBothCutoutKuikas, setVelsounLoleBothCutoutKuikas] = useState(0);
const totalVelsounLoleBothCutoutKuikas = Math.ceil (totalVelsounLoleBothCutoutCoins/33)

const [VelsounLoleBothMaskKuikas, setVelsounLoleBothMaskKuikas] = useState(0);
const totalVelsounLoleBothMaskKuikas = Math.ceil (totalVelsounLoleBothMaskCoins/33)

const [VelsounLoleBothCutoutBattleCostCoinsWC, setVelsounLoleBothCutoutBattleCostCoinsWC] = useState(0);
const totalVelsounLoleBothCutoutBattleCostCoinsWC = Math.max (totalVelsounLoleBothCutoutKuikas*50,0)

const [VelsounLoleBothMaskBattleCostCoinsWC, setVelsounLoleBothMaskBattleCostCoinsWC] = useState(0);
const totalVelsounLoleBothMaskBattleCostCoinsWC = Math.max (totalVelsounLoleBothMaskKuikas*50,0)

const [VelsounLoleYCutoutTotalCoinsWC, setVelsounLoleYCutoutTotalCoinsWC] = useState(0);
const totalVelsounLoleYCutoutTotalCoinsWC = Math.max (totalLoleYCutoutWC + totalVelsounKuikasWCLoleBothCutout,0)

const [VelsounLoleYMaskTotalCoinsWC, setVelsounLoleYMaskTotalCoinsWC] = useState(0);
const totalVelsounLoleYMaskTotalCoinsWC = Math.max (totalLoleYMaskWC + totalVelsounKuikasWCLoleBothMask,0)

const [VelsounLoleNCutoutTotalCoinsWC, setVelsounLoleNCutoutTotalCoinsWC] = useState(0);
const totalVelsounLoleNCutoutTotalCoinsWC = Math.max (totalLoleNCutoutWC + totalVelsounKuikasWCLoleBothCutout,0)

const [VelsounLoleNMaskTotalCoinsWC, setVelsounLoleNMaskTotalCoinsWC] = useState(0);
const totalVelsounLoleNMaskTotalCoinsWC = Math.max (totalLoleNMaskWC + totalVelsounKuikasWCLoleBothMask,0)

const [VelsounKuikasLoleBothCutout, setVelsounKuikasLoleBothCutout] = useState(0);
const totalVelsounKuikasLoleBothCutout = Math.max (totalLoleBothCutoutKuikas,0)

const [VelsounKuikasLoleBothMask, setVelsounKuikasLoleBothMask] = useState(0);
const totalVelsounKuikasLoleBothMask = Math.max (totalLoleBothMaskKuikas,0)

//ALPHA TAMBO BATTLE COST - CUTOUT & MASK//
const [RoberriesCutoutAT, setRoberriesCutoutAT] = useState(0);
const totalRoberriesCutoutAT = Math.max ((totalMasteryMonsterCutout*5)-Roberries,0)

const [RoberriesMaskAT, setRoberriesMaskAT] = useState(0);
const totalRoberriesMaskAT = Math.max ((totalMasteryMonsterMask*5)-Roberries,0)

const [WizellWCCutoutAT, setWizellWCCutoutAT] = useState(0);
const totalWizellWCCutoutAT = Math.max ((totalRoberriesCutoutAT-Wizell)*180,0)

const [WizellWCMaskAT, setWizellWCMaskAT] = useState(0);
const totalWizellWCMaskAT = Math.max ((totalRoberriesMaskAT-Wizell)*180,0)

const [WCAlphaTamboCutoutLoleY, setWCAlphaTamboCutoutLoleY] = useState(0);
const totalWCAlphaTamboCutoutLoleY = Math.max (totalLoleYCutoutWC + totalAlphaTamboKuikasWCLoleBothCutout + totalWizellWCCutoutAT,0)

const [WCAlphaTamboCutoutLoleN, setWCAlphaTamboCutoutLoleN] = useState(0);
const totalWCAlphaTamboCutoutLoleN = Math.max (totalLoleNCutoutWC + totalAlphaTamboKuikasWCLoleBothCutout + totalWizellWCCutoutAT,0)

const [WCAlphaTamboMaskLoleY, setWCAlphaTamboMaskLoleY] = useState(0);
const totalWCAlphaTamboMaskLoleY = Math.max (totalLoleYMaskWC + totalAlphaTamboKuikasWCLoleBothMask + totalWizellWCMaskAT,0)

const [WCAlphaTamboMaskLoleN, setWCAlphaTamboMaskLoleN] = useState(0);
const totalWCAlphaTamboMaskLoleN = Math.max (totalLoleNMaskWC + totalAlphaTamboKuikasWCLoleBothMask + totalWizellWCMaskAT,0)

//RAKSTAL BATTLE COST - CUTOUT & MASK//
const [SwampMossCutoutRakstal, setSwampMossCutoutRakstal] = useState(0);
const totalSwampMossCutoutRakstal = Math.max ((totalMasteryMonsterCutout*2)-SwampMoss,0)

const [SwampMossMaskRakstal, setSwampMossMaskRakstal] = useState(0);
const totalSwampMossMaskRakstal = Math.max ((totalMasteryMonsterMask*2)-SwampMoss,0)

const [HeliodaeWCCutoutRakstal, setHeliodaeWCCutoutRakstal] = useState(0);
const totalHeliodaeWCCutoutRakstal = Math.max (totalSwampMossCutoutRakstal*120,0)

const [HeliodaeWCMaskRakstal, setHeliodaeWCMaskRakstal] = useState(0);
const totalHeliodaeWCMaskRakstal = Math.max (totalSwampMossMaskRakstal*120,0)

const [WCRakstalCutoutLoleY, setWCRakstalCutoutLoleY] = useState(0);
const totalWCRakstalCutoutLoleY = Math.max (totalLoleYCutoutWC  + totalRakstalKuikasWCLoleBothCutout + totalHeliodaeWCCutoutRakstal,0)

const [WCRakstalCutoutLoleN, setWCRakstalCutoutLoleN] = useState(0);
const totalWCRakstalCutoutLoleN = Math.max (totalLoleNCutoutWC  + totalRakstalKuikasWCLoleBothCutout + totalHeliodaeWCMaskRakstal,0)

const [WCRakstalMaskLoleY, setWCRakstalMaskLoleY] = useState(0);
const totalWCRakstalMaskLoleY = Math.max (totalLoleYMaskWC + totalRakstalKuikasWCLoleBothMask + totalHeliodaeWCMaskRakstal,0)

const [WCRakstalMaskLoleN, setWCRakstalMaskLoleN] = useState(0);
const totalWCRakstalMaskLoleN = Math.max (totalLoleNMaskWC + totalRakstalKuikasWCLoleBothMask + totalHeliodaeWCMaskRakstal,0)

//TAREIT BATTLE COST //

const [RustyPenCutout, setRustyPenCutout] = useState(0);
const totalRustyPenCutout = Math.max ((totalMasteryMonsterCutout*2) - RustyPen,0)

const [RustyPenMask, setRustyPenMask] = useState(0);
const totalRustyPenMask = Math.max ((totalMasteryMonsterMask*2) - RustyPen,0)

const [GlassTareitCutout, setGlassTareitCutout] = useState(0);
const totalGlassTareitCutout = Math.max ((totalMasteryMonsterCutout*2) - GlassBar,0)

const [GlassTareitMask, setGlassTareitMask] = useState(0);
const totalGlassTareitMask = Math.max ((totalMasteryMonsterMask*2) - GlassBar,0)

const [CoinsTareitCutout, setCoinsTareitCutout] = useState(0);
const totalCoinsTareitCutout = Math.max ((totalMasteryMonsterCutout*75) - Coins,0)

const [CoinsTareitMask, setCoinsTareitMask] = useState(0);
const totalCoinsTareitMask = Math.max ((totalMasteryMonsterMask*75) - Coins,0)


//BABU AND MICLAN COST //

const [SteelChainsCutout, setSteelChainsCutout] = useState(0);
const totalSteelChainsCutout = Math.max (totalMasteryMonsterCutout - SteelChains,0)

const [PieceofParchCutout, setPieceofParchCutout] = useState(0);
const totalPieceofParchCutout = Math.max (totalMasteryMonsterCutout - PieceofParch,0)

const [BlueEssInkCutout, setBlueEssInkCutout] = useState(0);
const totalBlueEssInkCutout = Math.max (totalMasteryMonsterCutout - BlueEssInk,0)

const [SteelChainsMask, setSteelChainsMask] = useState(0);
const totalSteelChainsMask = Math.max (totalMasteryMonsterMask - SteelChains,0)

const [PieceofParchMask, setPieceofParchMask] = useState(0);
const totalPieceofParchMask = Math.max (totalMasteryMonsterMask - PieceofParch,0)

const [BlueEssInkMask, setBlueEssInkMask] = useState(0);
const totalBlueEssInkMask = Math.max (totalMasteryMonsterMask - BlueEssInk,0)

const [BabuSteelChainsCutout, setBabuSteelChainsCutout] = useState(0);
const totalBabuSteelChainsCutout = Math.max (totalSteelChainsCutout*3,0)

const [BabuPieceofParchCutout, setBabuPieceofParchCutout] = useState(0);
const totalBabuPieceofParchCutout = Math.max (totalPieceofParchCutout*2,0)

const [BabuBlueEssInkCutout, setBabuBlueEssInkCutout] = useState(0);
const totalBabuBlueEssInkCutout = Math.max (totalBlueEssInkCutout*1,0)

const [BabuSteelChainsMask, setBabuSteelChainsMask] = useState(0);
const totalBabuSteelChainsMask = Math.max (totalSteelChainsMask*3,0)

const [BabuPieceofParchMask, setBabuPieceofParchMask] = useState(0);
const totalBabuPieceofParchMask = Math.max (totalPieceofParchMask*2,0)

const [BabuBlueEssInkMask, setBabuBlueEssInkMask] = useState(0);
const totalBabuBlueEssInkMask = Math.max (totalBlueEssInkMask*1,0)

const [BabuBattleCostCutoutSix, setBabuBattleCostCutoutSix] = useState(0);
const totalBabuBattleCostCutoutSix = Math.max (totalMasteryMonsterCutout*6,0)

const [BabuBattleCostMaskSix, setBabuBattleCostMaskSix] = useState(0);
const totalBabuBattleCostMaskSix = Math.max (totalMasteryMonsterMask*6,0)

const [BabuBattleCostCutoutNine, setBabuBattleCostCutoutNine] = useState(0);
const totalBabuBattleCostCutoutNine = Math.max (totalMasteryMonsterCutout*9,0)

const [BabuBattleCostMaskNine, setBabuBattleCostMaskNine] = useState(0);
const totalBabuBattleCostMaskNine = Math.max (totalMasteryMonsterMask*9,0)




const [MiclanSteelChainsCutout, setMiclanSteelChainsCutout] = useState(0);
const totalMiclanSteelChainsCutout = Math.max (totalSteelChainsCutout*5,0)

const [MiclanPieceofParchCutout, setMiclanPieceofParchCutout] = useState(0);
const totalMiclanPieceofParchCutout = Math.max (totalPieceofParchCutout*3,0)

const [MiclanBlueEssInkCutout, setMiclanBlueEssInkCutout] = useState(0);
const totalMiclanBlueEssInkCutout = Math.max (totalBlueEssInkCutout*1,0)

const [MiclanSteelChainsMask, setMiclanSteelChainsMask] = useState(0);
const totalMiclanSteelChainsMask = Math.max (totalSteelChainsMask*5,0)

const [MiclanPieceofParchMask, setMiclanPieceofParchMask] = useState(0);
const totalMiclanPieceofParchMask = Math.max (totalPieceofParchMask*3,0)

const [MiclanBlueEssInkMask, setMiclanBlueEssInkMask] = useState(0);
const totalMiclanBlueEssInkMask = Math.max (totalBlueEssInkMask*1,0)

const [MiclanBattleCostCutoutFifteen, setMiclanBattleCostCutoutFifteen] = useState(0);
const totalMiclanBattleCostCutoutFifteen = Math.max (totalMasteryMonsterCutout*15,0)

const [MiclanBattleCostMaskFifteen, setMiclanBattleCostMaskFifteen] = useState(0);
const totalMiclanBattleCostMaskFifteen = Math.max (totalMasteryMonsterMask*15,0)

const [MiclanBattleCostCutoutNine, setMiclanBattleCostCutoutNine] = useState(0);
const totalMiclanBattleCostCutoutNine = Math.max (totalMasteryMonsterCutout*9,0)

const [MiclanBattleCostMaskNine, setMiclanBattleCostMaskNine] = useState(0);
const totalMiclanBattleCostMaskNine = Math.max (totalMasteryMonsterMask*9,0)

//BABU  - offset value of drops

const [BabuCoinValueDropsCutout, setBabuCoinValueDropsCutout] = useState(0);
const totalBabuCoinValueDropsCutout = Math.max ((totalMasteryMonsterCutout*144))

const [BabuEquivKuikasCutout, setBabuEquivKuikasCutout] = useState(0);
const totalBabuEquivKuikasCutout = Math.ceil (totalBabuCoinValueDropsCutout/33)

const [BabuCoinsNeededCutout, setBabuCoinsNeededCutout] = useState(0);
const totalBabuCoinsNeededCutout = Math.max (totalLoleBothCutoutPotionCost-totalBabuCoinValueDropsCutout,0)

const [BabuKuikasQtyCutout, setBabuKuikasQtyCutout] = useState(0);
const totalBabuKuikasQtyCutout = Math.max (totalLoleBothCutoutKuikas-totalBabuEquivKuikasCutout,0)

const [BabuKuikasWCLoleBothCutout, setBabuKuikasWCLoleBothCutout] = useState(0);
const totalBabuKuikasWCLoleBothCutout = Math.max ((totalBabuKuikasQtyCutout)*50,0)


//
const [BabuCoinValueDropsMask, setBabuCoinValueDropsMask] = useState(0);
const totalBabuCoinValueDropsMask = Math.max ((totalMasteryMonsterMask*144))

const [BabuEquivKuikasMask, setBabuEquivKuikasMask] = useState(0);
const totalBabuEquivKuikasMask = Math.ceil (totalBabuCoinValueDropsMask/33)

const [BabuCoinsNeededMask, setBabuCoinsNeededMask] = useState(0);
const totalBabuCoinsNeededMask = Math.max (totalLoleBothMaskPotionCost-totalBabuCoinValueDropsMask,0)

const [BabuKuikasQtyMask, setBabuKuikasQtyMask] = useState(0);
const totalBabuKuikasQtyMask = Math.max (totalLoleBothMaskKuikas-totalBabuEquivKuikasMask,0)

const [BabuKuikasWCLoleBothMask, setBabuKuikasWCLoleBothMask] = useState(0);
const totalBabuKuikasWCLoleBothMask = Math.max ((totalBabuKuikasQtyMask)*50,0)




const [BabuTotalWCLoleYCutout, setBabuTotalWCLoleYCutout] = useState(0);
const totalBabuTotalWCLoleYCutout = Math.max (totalLoleYCutoutWC + totalBabuKuikasWCLoleBothCutout, 0)

const [BabuTotalWCLoleNCutout, setBabuTotalWCLoleNCutout] = useState(0);
const totalBabuTotalWCLoleNCutout = Math.max (totalLoleNCutoutWC + totalBabuKuikasWCLoleBothCutout, 0)

const [BabuTotalWCLoleYMask, setBabuTotalWCLoleYMask] = useState(0);
const totalBabuTotalWCLoleYMask = Math.max (totalLoleYMaskWC + totalBabuKuikasWCLoleBothMask, 0)

const [BabuTotalWCLoleNMask, setBabuTotalWCLoleNMask] = useState(0);
const totalBabuTotalWCLoleNMask = Math.max (totalLoleNMaskWC + totalBabuKuikasWCLoleBothMask, 0)


//MICLAN  - offset value of drops

const [MiclanCoinValueDropsCutout, setMiclanCoinValueDropsCutout] = useState(0);
const totalMiclanCoinValueDropsCutout = Math.max ((totalMasteryMonsterCutout*856))

const [MiclanEquivKuikasCutout, setMiclanEquivKuikasCutout] = useState(0);
const totalMiclanEquivKuikasCutout = Math.ceil (totalMiclanCoinValueDropsCutout/33)

const [MiclanCoinsNeededCutout, setMiclanCoinsNeededCutout] = useState(0);
const totalMiclanCoinsNeededCutout = Math.max (totalLoleBothCutoutPotionCost-totalMiclanCoinValueDropsCutout,0)

const [MiclanKuikasQtyCutout, setMiclanKuikasQtyCutout] = useState(0);
const totalMiclanKuikasQtyCutout = Math.max (totalLoleBothCutoutKuikas-totalMiclanEquivKuikasCutout,0)

const [MiclanKuikasWCLoleBothCutout, setMiclanKuikasWCLoleBothCutout] = useState(0);
const totalMiclanKuikasWCLoleBothCutout = Math.max ((totalMiclanKuikasQtyCutout)*50,0)


//
const [MiclanCoinValueDropsMask, setMiclanCoinValueDropsMask] = useState(0);
const totalMiclanCoinValueDropsMask = Math.max ((totalMasteryMonsterMask*856))

const [MiclanEquivKuikasMask, setMiclanEquivKuikasMask] = useState(0);
const totalMiclanEquivKuikasMask = Math.ceil (totalMiclanCoinValueDropsMask/33)

const [MiclanCoinsNeededMask, setMiclanCoinsNeededMask] = useState(0);
const totalMiclanCoinsNeededMask = Math.max (totalLoleBothMaskPotionCost-totalMiclanCoinValueDropsMask,0)

const [MiclanKuikasQtyMask, setMiclanKuikasQtyMask] = useState(0);
const totalMiclanKuikasQtyMask = Math.max (totalLoleBothMaskKuikas-totalMiclanEquivKuikasMask,0)

const [MiclanKuikasWCLoleBothMask, setMiclanKuikasWCLoleBothMask] = useState(0);
const totalMiclanKuikasWCLoleBothMask = Math.max ((totalMiclanKuikasQtyMask)*50,0)




const [MiclanTotalWCLoleYCutout, setMiclanTotalWCLoleYCutout] = useState(0);
const totalMiclanTotalWCLoleYCutout = Math.max (totalLoleYCutoutWC + totalMiclanKuikasWCLoleBothCutout, 0)

const [MiclanTotalWCLoleNCutout, setMiclanTotalWCLoleNCutout] = useState(0);
const totalMiclanTotalWCLoleNCutout = Math.max (totalLoleNCutoutWC + totalMiclanKuikasWCLoleBothCutout, 0)

const [MiclanTotalWCLoleYMask, setMiclanTotalWCLoleYMask] = useState(0);
const totalMiclanTotalWCLoleYMask = Math.max (totalLoleYMaskWC + totalMiclanKuikasWCLoleBothMask, 0)

const [MiclanTotalWCLoleNMask, setMiclanTotalWCLoleNMask] = useState(0);
const totalMiclanTotalWCLoleNMask = Math.max (totalLoleNMaskWC + totalMiclanKuikasWCLoleBothMask, 0)



//SHAMAN LUZIA BATTLE COST //

const [FabricHelmetCutout, setFabricHelmetCutout] = useState(0);
const totalFabricHelmetCutout = Math.max (totalMasteryMonsterCutout - FabricHelmet,0)

const [SteelSpearCutout, setSteelSpearCutout] = useState(0);
const totalSteelSpearCutout = Math.max (totalMasteryMonsterCutout - SteelSpear,0)

const [FabricHelmetMask, setFabricHelmetMask] = useState(0);
const totalFabricHelmetMask = Math.max (totalMasteryMonsterMask - FabricHelmet,0)

const [SteelSpearMask, setSteelSpearMask] = useState(0);
const totalSteelSpearMask = Math.max (totalMasteryMonsterMask - SteelSpear,0)

const [LeafHelmetCutout, setLeafHelmetCutout] = useState(0);
const totalLeafHelmetCutout = Math.max (totalFabricHelmetCutout*2,0)

const [LeafHelmetMask, setLeafHelmetMask] = useState(0);
const totalLeafHelmetMask = Math.max (totalFabricHelmetCutout*2,0)

const [RawFabricCutout, setRawFabricCutout] = useState(0);
const totalRawFabricCutout = Math.max (totalFabricHelmetCutout*2,0)

const [RawFabricMask, setRawFabricMask] = useState(0);
const totalRawFabricMask = Math.max (totalFabricHelmetCutout*2,0)

const [RawFabricSteelSpearCutout, setRawFabricSteelSpearCutout] = useState(0);
const totalRawFabricSteelSpearCutout = Math.max (totalFabricHelmetCutout*3,0)

const [RawFabricSteelSpearMask, setRawFabricSteelSpearMask] = useState(0);
const totalRawFabricSteelSpearMask = Math.max (totalFabricHelmetCutout*3,0)

const [FineFabricCutout, setFineFabricCutout] = useState(0);
const totalFineFabricCutout = Math.max (totalFabricHelmetCutout*2,0)

const [FineFabricMask, setFineFabricMask] = useState(0);
const totalFineFabricMask = Math.max (totalFabricHelmetCutout*2,0)

const [SteelShaLuzCutout, setSteelShaLuzCutout] = useState(0);
const totalSteelShaLuzCutout = Math.max (totalFabricHelmetCutout*2,0)

const [SteelShaLuzMask, setSteelShaLuzMask] = useState(0);
const totalSteelShaLuzMask = Math.max (totalFabricHelmetCutout*2,0)

const [CoinsShaLuzCutout, setCoinsShaLuzCutout] = useState(0);
const totalCoinsShaLuzCutout = Math.max (totalFabricHelmetCutout*100,0)

const [CoinsShaLuzMask, setCoinsShaLuzMask] = useState(0);
const totalCoinsShaLuzMask = Math.max (totalFabricHelmetCutout*100,0)

const [WoodSpearCutout, setWoodSpearCutout] = useState(0);
const totalWoodSpearCutout = Math.max (totalFabricHelmetCutout*1,0)

const [WoodSpearMask, setWoodSpearMask] = useState(0);
const totalWoodSpearMask = Math.max (totalFabricHelmetCutout*1,0)

const [CoinsShaLuzSteelSpearCutout, setCoinsShaLuzSteelSpearCutout] = useState(0);
const totalCoinsShaLuzSteelSpearCutout = Math.max (totalFabricHelmetCutout*25,0)

const [CoinsShaLuzSteelSpearMask, setCoinsShaLuzSteelSpearMask] = useState(0);
const totalCoinsShaLuzSteelSpearMask = Math.max (totalFabricHelmetCutout*25,0)

//SHAMAN LUZIA  - offset value of drops

const [ShamanLuziaCoinValueDropsCutout, setShamanLuziaCoinValueDropsCutout] = useState(0);
const totalShamanLuziaCoinValueDropsCutout = Math.max ((totalMasteryMonsterCutout*1744)-(totalMasteryMonsterCutout*1521),0)

const [ShamanLuziaEquivKuikasCutout, setShamanLuziaEquivKuikasCutout] = useState(0);
const totalShamanLuziaEquivKuikasCutout = Math.ceil (totalShamanLuziaCoinValueDropsCutout/33)

const [ShamanLuziaCoinsNeededCutout, setShamanLuziaCoinsNeededCutout] = useState(0);
const totalShamanLuziaCoinsNeededCutout = Math.max (totalLoleBothCutoutPotionCost-totalShamanLuziaCoinValueDropsCutout,0)

const [ShamanLuziaKuikasQtyCutout, setShamanLuziaKuikasQtyCutout] = useState(0);
const totalShamanLuziaKuikasQtyCutout = Math.max (totalLoleBothCutoutKuikas-totalShamanLuziaEquivKuikasCutout,0)

const [ShamanLuziaKuikasWCLoleBothCutout, setShamanLuziaKuikasWCLoleBothCutout] = useState(0);
const totalShamanLuziaKuikasWCLoleBothCutout = Math.max ((totalShamanLuziaKuikasQtyCutout)*50,0)


//
const [ShamanLuziaCoinValueDropsMask, setShamanLuziaCoinValueDropsMask] = useState(0);
const totalShamanLuziaCoinValueDropsMask = Math.max ((totalMasteryMonsterMask*1744)-(totalMasteryMonsterMask*1521),0)

const [ShamanLuziaEquivKuikasMask, setShamanLuziaEquivKuikasMask] = useState(0);
const totalShamanLuziaEquivKuikasMask = Math.ceil (totalShamanLuziaCoinValueDropsMask/33)

const [ShamanLuziaCoinsNeededMask, setShamanLuziaCoinsNeededMask] = useState(0);
const totalShamanLuziaCoinsNeededMask = Math.max (totalLoleBothMaskPotionCost-totalShamanLuziaCoinValueDropsMask,0)

const [ShamanLuziaKuikasQtyMask, setShamanLuziaKuikasQtyMask] = useState(0);
const totalShamanLuziaKuikasQtyMask = Math.max (totalLoleBothMaskKuikas-totalShamanLuziaEquivKuikasMask,0)

const [ShamanLuziaKuikasWCLoleBothMask, setShamanLuziaKuikasWCLoleBothMask] = useState(0);
const totalShamanLuziaKuikasWCLoleBothMask = Math.max ((totalShamanLuziaKuikasQtyMask)*50,0)




const [ShamanLuziaTotalWCLoleYCutout, setShamanLuziaTotalWCLoleYCutout] = useState(0);
const totalShamanLuziaTotalWCLoleYCutout = Math.max (totalLoleYCutoutWC + totalShamanLuziaKuikasWCLoleBothCutout, 0)

const [ShamanLuziaTotalWCLoleNCutout, setShamanLuziaTotalWCLoleNCutout] = useState(0);
const totalShamanLuziaTotalWCLoleNCutout = Math.max (totalLoleNCutoutWC + totalShamanLuziaKuikasWCLoleBothCutout, 0)

const [ShamanLuziaTotalWCLoleYMask, setShamanLuziaTotalWCLoleYMask] = useState(0);
const totalShamanLuziaTotalWCLoleYMask = Math.max (totalLoleYMaskWC + totalShamanLuziaKuikasWCLoleBothMask, 0)

const [ShamanLuziaTotalWCLoleNMask, setShamanLuziaTotalWCLoleNMask] = useState(0);
const totalShamanLuziaTotalWCLoleNMask = Math.max (totalLoleNMaskWC + totalShamanLuziaKuikasWCLoleBothMask, 0)


//KING MAI BATTLE COST//

const [FabricBreastplateCutout, setFabricBreastplateCutout] = useState(0);
const totalFabricBreastplateCutout = Math.max (totalMasteryMonsterCutout - FabricBreastplate,0)

const [SteelSwordCutout, setSteelSwordCutout] = useState(0);
const totalSteelSwordCutout = Math.max (totalMasteryMonsterCutout - SteelSword,0)

const [FabricBreastplateMask, setFabricBreastplateMask] = useState(0);
const totalFabricBreastplateMask = Math.max (totalMasteryMonsterMask - FabricBreastplate,0)

const [SteelSwordMask, setSteelSwordMask] = useState(0);
const totalSteelSwordMask = Math.max (totalMasteryMonsterMask - SteelSword,0)

const [LeafBreastplateKingMaiCutout, setLeafBreastplateKingMaiCutout] = useState(0);
const totalLeafBreastplateKingMaiCutout = Math.max (totalFabricBreastplateCutout*2,0)

const [LeafBreastplateKingMaiMask, setLeafBreastplateKingMaiMask] = useState(0);
const totalLeafBreastplateKingMaiMask = Math.max (totalFabricBreastplateCutout*2,0)

const [RawFabricFBPCutout, setRawFabricFBPCutout] = useState(0);
const totalRawFabricFBPCutout = Math.max (totalFabricBreastplateCutout*5,0)

const [RawFabricFBPMask, setRawFabricFBPMask] = useState(0);
const totalRawFabricFBPMask = Math.max (totalFabricBreastplateCutout*5,0)

const [RawFabricSteelSwordCutout, setRawFabricSteelSwordCutout] = useState(0);
const totalRawFabricSteelSwordCutout = Math.max (totalFabricBreastplateCutout*2,0)

const [RawFabricSteelSwordMask, setRawFabricSteelSwordMask] = useState(0);
const totalRawFabricSteelSwordMask = Math.max (totalFabricBreastplateCutout*2,0)

const [FineFabricFBPCutout, setFineFabricFBPCutout] = useState(0);
const totalFineFabricFBPCutout = Math.max (totalFabricBreastplateCutout*2,0)

const [FineFabricFBPMask, setFineFabricFBPMask] = useState(0);
const totalFineFabricFBPMask = Math.max (totalFabricBreastplateCutout*2,0)

const [SteelKingMaiCutout, setSteelKingMaiCutout] = useState(0);
const totalSteelKingMaiCutout = Math.max (totalFabricBreastplateCutout*3,0)

const [SteelKingMaiMask, setSteelKingMaiMask] = useState(0);
const totalSteelKingMaiMask = Math.max (totalFabricBreastplateCutout*3,0)

const [CoinsKingMaiCutout, setCoinsKingMaiCutout] = useState(0);
const totalCoinsKingMaiCutout = Math.max (totalFabricBreastplateCutout*100,0)

const [CoinsKingMaiMask, setCoinsKingMaiMask] = useState(0);
const totalCoinsKingMaiMask = Math.max (totalFabricBreastplateCutout*100,0)

const [WoodSwordCutout, setWoodSwordCutout] = useState(0);
const totalWoodSwordCutout = Math.max (totalFabricBreastplateCutout*3,0)

const [WoodSwordMask, setWoodSwordMask] = useState(0);
const totalWoodSwordMask = Math.max (totalFabricBreastplateCutout*3,0)

const [FineFabricSteelSwordCutout, setFineFabricSteelSwordCutout] = useState(0);
const totalFineFabricSteelSwordCutout = Math.max (totalFabricBreastplateCutout*2,0)

const [FineFabricSteelSwordMask, setFineFabricSteelSwordMask] = useState(0);
const totalFineFabricSteelSwordMask = Math.max (totalFabricBreastplateCutout*2,0)

const [CoinsKingMaiSteelSwordCutout, setCoinsKingMaiSteelSwordCutout] = useState(0);
const totalCoinsKingMaiSteelSwordCutout = Math.max (totalFabricBreastplateCutout*25,0)

const [CoinsKingMaiSteelSwordMask, setCoinsKingMaiSteelSwordMask] = useState(0);
const totalCoinsKingMaiSteelSwordMask = Math.max (totalFabricBreastplateCutout*25,0)

//KINGMAI  - offset value of drops

const [KingMaiCoinValueDropsCutout, setKingMaiCoinValueDropsCutout] = useState(0);
const totalKingMaiCoinValueDropsCutout = Math.max ((totalMasteryMonsterCutout*1500)+(totalMasteryMonsterCutout*2179))

const [KingMaiEquivKuikasCutout, setKingMaiEquivKuikasCutout] = useState(0);
const totalKingMaiEquivKuikasCutout = Math.ceil (totalKingMaiCoinValueDropsCutout/33)

const [KingMaiCoinsNeededCutout, setKingMaiCoinsNeededCutout] = useState(0);
const totalKingMaiCoinsNeededCutout = Math.max (totalLoleBothCutoutPotionCost+totalKingMaiCoinValueDropsCutout,0)

const [KingMaiKuikasQtyCutout, setKingMaiKuikasQtyCutout] = useState(0);
const totalKingMaiKuikasQtyCutout = Math.max (totalLoleBothCutoutKuikas+totalKingMaiEquivKuikasCutout,0)

const [KingMaiKuikasWCLoleBothCutout, setKingMaiKuikasWCLoleBothCutout] = useState(0);
const totalKingMaiKuikasWCLoleBothCutout = Math.max ((totalKingMaiKuikasQtyCutout)*50,0)


//
const [KingMaiCoinValueDropsMask, setKingMaiCoinValueDropsMask] = useState(0);
const totalKingMaiCoinValueDropsMask = Math.max ((totalMasteryMonsterMask*1500)+(totalMasteryMonsterMask*2179),0)

const [KingMaiEquivKuikasMask, setKingMaiEquivKuikasMask] = useState(0);
const totalKingMaiEquivKuikasMask = Math.ceil (totalKingMaiCoinValueDropsMask/33)

const [KingMaiCoinsNeededMask, setKingMaiCoinsNeededMask] = useState(0);
const totalKingMaiCoinsNeededMask = Math.max (totalLoleBothMaskPotionCost+totalKingMaiCoinValueDropsMask,0)

const [KingMaiKuikasQtyMask, setKingMaiKuikasQtyMask] = useState(0);
const totalKingMaiKuikasQtyMask = Math.max (totalLoleBothMaskKuikas+totalKingMaiEquivKuikasMask,0)

const [KingMaiKuikasWCLoleBothMask, setKingMaiKuikasWCLoleBothMask] = useState(0);
const totalKingMaiKuikasWCLoleBothMask = Math.max ((totalKingMaiKuikasQtyMask)*50,0)




const [KingMaiTotalWCLoleYCutout, setKingMaiTotalWCLoleYCutout] = useState(0);
const totalKingMaiTotalWCLoleYCutout = Math.max (totalLoleYCutoutWC + totalKingMaiKuikasWCLoleBothCutout, 0)

const [KingMaiTotalWCLoleNCutout, setKingMaiTotalWCLoleNCutout] = useState(0);
const totalKingMaiTotalWCLoleNCutout = Math.max (totalLoleNCutoutWC + totalKingMaiKuikasWCLoleBothCutout, 0)

const [KingMaiTotalWCLoleYMask, setKingMaiTotalWCLoleYMask] = useState(0);
const totalKingMaiTotalWCLoleYMask = Math.max (totalLoleYMaskWC + totalKingMaiKuikasWCLoleBothMask, 0)

const [KingMaiTotalWCLoleNMask, setKingMaiTotalWCLoleNMask] = useState(0);
const totalKingMaiTotalWCLoleNMask = Math.max (totalLoleNMaskWC + totalKingMaiKuikasWCLoleBothMask, 0)


//DUSTED LUZIA - CASUAL BATTLE COST//

const [SteelShieldDLSteelCutout, setSteelShieldDLSteelCutout] = useState(0);
const totalSteelShieldDLSteelCutout = Math.max (totalMasteryMonsterCutout*2)

const [SteelShieldDLSteelMask, setSteelShieldDLSteelMask] = useState(0);
const totalSteelShieldDLSteelMask = Math.max (totalMasteryMonsterMask*2)

const [SteelShieldDLHardwoodCutout, setSteelShieldDLHardwoodCutout] = useState(0);
const totalSteelShieldDLHardwoodCutout = Math.max (totalMasteryMonsterCutout*6)

const [SteelShieldDLHardwoodMask, setSteelShieldDLHardwoodMask] = useState(0);
const totalSteelShieldDLHardwoodMask = Math.max (totalMasteryMonsterMask*6)

const [SteelShieldDLRGCutout, setSteelShieldDLRGCutout] = useState(0);
const totalSteelShieldDLRGCutout = Math.max (totalMasteryMonsterCutout*2)

const [SteelShieldDLRGMask, setSteelShieldDLRGMask] = useState(0);
const totalSteelShieldDLRGMask = Math.max (totalMasteryMonsterMask*2)

const [SteelAxeDLSteelCutout, setSteelAxeDLSteelCutout] = useState(0);
const totalSteelAxeDLSteelCutout = Math.max (totalMasteryMonsterCutout*3)

const [SteelAxeDLSteelMask, setSteelAxeDLSteelMask] = useState(0);
const totalSteelAxeDLSteelMask = Math.max (totalMasteryMonsterMask*3)

const [SteelAxeDLHardwoodCutout, setSteelAxeDLHardwoodCutout] = useState(0);
const totalSteelAxeDLHardwoodCutout = Math.max (totalMasteryMonsterCutout*1)

const [SteelAxeDLHardwoodMask, setSteelAxeDLHardwoodMask] = useState(0);
const totalSteelAxeDLHardwoodMask = Math.max (totalMasteryMonsterMask*1)

const [SteelAxeDLRGCutout, setSteelAxeDLRGCutout] = useState(0);
const totalSteelAxeDLRGCutout = Math.max (totalMasteryMonsterCutout*1)

const [SteelAxeDLRGMask, setSteelAxeDLRGMask] = useState(0);
const totalSteelAxeDLRGMask = Math.max (totalMasteryMonsterMask*1)

//DUSTED LUZIA  - offset value of drops

const [DustedLuziaCoinValueDropsCutout, setDustedLuziaCoinValueDropsCutout] = useState(0);
const totalDustedLuziaCoinValueDropsCutout = Math.max ((totalMasteryMonsterCutout*2210)-(totalMasteryMonsterCutout*2178))

const [DustedLuziaEquivKuikasCutout, setDustedLuziaEquivKuikasCutout] = useState(0);
const totalDustedLuziaEquivKuikasCutout = Math.ceil (totalDustedLuziaCoinValueDropsCutout/33)

const [DustedLuziaCoinsNeededCutout, setDustedLuziaCoinsNeededCutout] = useState(0);
const totalDustedLuziaCoinsNeededCutout = Math.max (totalLoleBothCutoutPotionCost+totalDustedLuziaCoinValueDropsCutout,0)

const [DustedLuziaKuikasQtyCutout, setDustedLuziaKuikasQtyCutout] = useState(0);
const totalDustedLuziaKuikasQtyCutout = Math.max (totalLoleBothCutoutKuikas+totalDustedLuziaEquivKuikasCutout,0)

const [DustedLuziaKuikasWCLoleBothCutout, setDustedLuziaKuikasWCLoleBothCutout] = useState(0);
const totalDustedLuziaKuikasWCLoleBothCutout = Math.max ((totalDustedLuziaKuikasQtyCutout)*50,0)

//
const [DustedLuziaCoinValueDropsMask, setDustedLuziaCoinValueDropsMask] = useState(0);
const totalDustedLuziaCoinValueDropsMask = Math.max ((totalMasteryMonsterMask*2210)-(totalMasteryMonsterMask*2178),0)

const [DustedLuziaEquivKuikasMask, setDustedLuziaEquivKuikasMask] = useState(0);
const totalDustedLuziaEquivKuikasMask = Math.ceil (totalDustedLuziaCoinValueDropsMask/33)

const [DustedLuziaCoinsNeededMask, setDustedLuziaCoinsNeededMask] = useState(0);
const totalDustedLuziaCoinsNeededMask = Math.max (totalLoleBothMaskPotionCost+totalDustedLuziaCoinValueDropsMask,0)

const [DustedLuziaKuikasQtyMask, setDustedLuziaKuikasQtyMask] = useState(0);
const totalDustedLuziaKuikasQtyMask = Math.max (totalLoleBothMaskKuikas+totalDustedLuziaEquivKuikasMask,0)

const [DustedLuziaKuikasWCLoleBothMask, setDustedLuziaKuikasWCLoleBothMask] = useState(0);
const totalDustedLuziaKuikasWCLoleBothMask = Math.max ((totalDustedLuziaKuikasQtyMask)*50,0)

//scofin

const [DustedLuziaScofinQtyCutout, setDustedLuziaScofinQtyCutout] = useState(0);
const totalDustedLuziaScofinQtyCutout = Math.max (totalMasteryMonsterCutout*15,0)

const [DustedLuziaScofinQtyMask, setDustedLuziaScofinQtyMask] = useState(0);
const totalDustedLuziaScofinQtyMask = Math.max (totalMasteryMonsterMask*15,0)

const [DustedLuziaScofinWCCutout, setDustedLuziaScofinWCCutout] = useState(0);
const totalDustedLuziaScofinWCCutout = Math.max ((totalDustedLuziaScofinQtyCutout*1.5)*150)

const [DustedLuziaScofinWCMask, setDustedLuziaScofinWCMask] = useState(0);
const totalDustedLuziaScofinWCMask = Math.max ((totalDustedLuziaScofinQtyMask*1.5)*150)


const [DustedLuziaTotalWCLoleYCutout, setDustedLuziaTotalWCLoleYCutout] = useState(0);
const totalDustedLuziaTotalWCLoleYCutout = Math.max (totalLoleYCutoutWC + totalDustedLuziaKuikasWCLoleBothCutout + totalDustedLuziaScofinWCCutout, 0)

const [DustedLuziaTotalWCLoleNCutout, setDustedLuziaTotalWCLoleNCutout] = useState(0);
const totalDustedLuziaTotalWCLoleNCutout = Math.max (totalLoleNCutoutWC + totalDustedLuziaKuikasWCLoleBothCutout + totalDustedLuziaScofinWCCutout, 0)

const [DustedLuziaTotalWCLoleYMask, setDustedLuziaTotalWCLoleYMask] = useState(0);
const totalDustedLuziaTotalWCLoleYMask = Math.max (totalLoleYMaskWC + totalDustedLuziaKuikasWCLoleBothMask + totalDustedLuziaScofinWCMask, 0)

const [DustedLuziaTotalWCLoleNMask, setDustedLuziaTotalWCLoleNMask] = useState(0);
const totalDustedLuziaTotalWCLoleNMask = Math.max (totalLoleNMaskWC + totalDustedLuziaKuikasWCLoleBothMask + totalDustedLuziaScofinWCMask, 0)



//DUSTED LUZIA BATTLE COST - CUTOUT - //

const [SteelCutoutDL, setSteelCutoutDL] = useState(0);
const totalSteelCutoutDL = Math.max ((totalMasteryMonsterCutout*5)-Steel-totalRawSteelHave,0)

const [RawSteelNeededCutoutDL, setRawSteelNeededCutoutDL] = useState(0);
const totalRawSteelNeededCutoutDL = Math.max (totalSteelCutoutDL*3,0)

const [LeavesNeededCutoutDL, setLeavesNeededCutoutDL] = useState(0);
const totalLeavesNeededCutoutDL = Math.max (totalSteelCutoutDL*4, 0)

const [HWCutoutDL, setHWCutoutDL] = useState(0);
const totalHWCutoutDL = Math.max ((totalMasteryMonsterCutout*7)-HW,0)

const [RGCutoutDL, setRGCutoutDL] = useState(0);
const totalRGCutoutDL = Math.max ((totalMasteryMonsterCutout*2)-RG,0)

// coinsssss

const [CoinsCutoutDL, setCoinsCutoutDL] = useState(0);
const totalCoinsCutoutDL = Math.max (((totalMasteryMonsterCutout*850)+(totalRawSteelNeededCutoutDL*35)+(totalLeavesNeededCutoutDL*8)+(totalHWCutoutDL*250)+(totalRGCutoutDL*100)-Coins), 0)

const [KuikasCoinsCutoutDL, setKuikasCoinsCutoutDL] = useState(0);
const totalKuikasCoinsCutoutDL = Math.ceil ((totalCoinsCutoutDL/33))

const [KuikasCoinsWCCutoutDL, setKuikasCoinsWCCutoutDL] = useState(0);
const totalKuikasCoinsWCCutoutDL = Math.max (totalKuikasCoinsCutoutDL*50,0)

//combo

//buy: hardwood, leaves
//fight: JESO, 3 steel, 5 raw steel, 34 distorted signals tokens, 17  hunter tokens, 1 gold, 5 raw gold, 1 red dye, 15 coins

const [JesoSteelCutoutDL, setJesoSteelCutoutDL] = useState(0);
const totalJesoSteelCutoutDL = Math.ceil (totalRawSteelNeededCutoutDL/20)

const [JesoNeededCutoutDL, setJesoNeededCutoutDL] = useState(0);
const totalJesoNeededCutoutDL = Math.max (totalJesoSteelCutoutDL, 0)

const [JesoWCCutoutDL, setJesoWCCutoutDL] = useState(0);
const totalJesoWCCutoutDL = Math.max (totalJesoNeededCutoutDL*1667, 0)

const [JesoRawGold, setJesoRawGold] = useState(0);
const totalJesoRawGold = Math.round ((totalJesoNeededCutoutDL*5)/3)

const [JesoCoinsCutoutDL, setJesoCoinsCutoutDL] = useState(0);
const totalJesoCoinsCutoutDL = Math.max ((totalJesoNeededCutoutDL*34*10)+(totalJesoNeededCutoutDL*17*10)+(totalJesoNeededCutoutDL*100)+
                                          (totalJesoRawGold*66)+(totalJesoNeededCutoutDL*15)+(totalJesoNeededCutoutDL*49),0)
//total coins = DS token val + Hunt token val + gold val + raw gold val + red dye val + coin drop

const [LeavesComboCutoutDL, setLeavesComboCutoutDL] = useState(0);
const totalLeavesComboCutoutDL = Math.max (totalLeavesNeededCutoutDL*8, 0)

const [HWComboCutoutDL, setHWComboCutoutDL] = useState(0);
const totalHWComboCutoutDL = Math.max (totalHWCutoutDL*250, 0)

const [RGComboCutoutDL, setRGComboCutoutDL] = useState(0);
const totalRGComboCutoutDL = Math.max (totalRGCutoutDL*100, 0)

const [PurchaseComboCutoutDL, setPurchaseComboCutoutDL] = useState(0);
const totalPurchaseComboCutoutDL = Math.max (totalLeavesComboCutoutDL + totalHWComboCutoutDL + totalRGComboCutoutDL, 0)

const [CoinFarmComboCutoutDL, setCoinFarmComboCutoutDL] = useState(0);
const totalCoinFarmComboCutoutDL = Math.max ((totalMasteryMonsterCutout*850+(totalPurchaseComboCutoutDL-totalJesoCoinsCutoutDL))-Coins, 0)

//kuikas = 2 battles are 66 g

const [KuikasFarmComboCutoutDL, setKuikasFarmComboCutoutDL] = useState(0);
const totalKuikasFarmComboCutoutDL = Math.ceil ((totalCoinFarmComboCutoutDL/66)*2)

const [LoleYComboDLCoinsWC, setLoleYComboDLCoinsWC] = useState(0);
const totalLoleBothComboDLCoinsWC = Math.max (totalKuikasFarmComboCutoutDL*50,0)

//battle only - need HW and Leaves

//scofin for steel
const [ScofinSteelCutoutDL, setScofinSteelCutoutDL] = useState(0);
const totalScofinSteelCutoutDL = Math.ceil (totalRawSteelNeededCutoutDL/1.5)

const [ScofinSteelWCCutoutDL, setScofinSteelWCCutoutDL] = useState(0);
const totalScofinSteelWCCutoutDL = Math.max (totalScofinSteelCutoutDL * 150,0)

//xin for leaves
const [LeavesBattleWCCutoutDL, setLeavesBattleWCCutoutDL] = useState(0);
const totalLeavesBattleWCCutoutDL = Math.max (totalLeavesNeededCutoutDL*50, 0)

//jaaje for HW everyone else is too ugly
const [HWBattleWCCutoutDL, setHWBattleWCCutoutDL] = useState(0);
const totalHWBattleWCCutout = Math.max (totalHWCutoutDL*500,0)

//Olea for RG, drops .5 RG per 100 words

const [RGBattleCutoutDL, setRGBattleCutoutDL] = useState(0);
const totalRGBattleCutoutDL = Math.ceil ((totalRGCutoutDL/.5))

const [RGBattleWCCutoutDL, setRGBattleWCCutoutDL] = useState(0);
const totalRGBattleWCCutoutDL = Math.max (totalRGBattleCutoutDL*100, 0)

//battle wc - no coins, that's in the next step

const [BattleWCCutoutDL, setBattleWCCutoutDL] = useState(0);
const totalBattleWCCutoutDL = Math.max (totalHWBattleWCCutout+totalLeavesBattleWCCutoutDL+totalScofinSteelWCCutoutDL+totalRGBattleWCCutoutDL,0)


//kuikas for coins
const [BattleCoinCutoutDL, setBattleCoinCutoutDL] = useState(0);
const totalBattleCoinCutoutDL = Math.max ((totalMasteryMonsterCutout*850)-Coins,0)

const [KuikasFarmBattleCutoutDL, setKuikasFarmBattleCutoutDL] = useState(0);
const totalKuikasFarmBattleCutoutDL = Math.ceil ((totalBattleCoinCutoutDL/66)*2)

const [KuikasWCBattleCutoutDL, setKuikasWCBattleCutoutDL] = useState(0);
const totalKuikasWCBattleCutoutDL = Math.max (totalKuikasFarmBattleCutoutDL*50,0)


//TOTAL WORD COUNTS - DUSTED LUZIA CUTOUT//

const [WCDustedLuziaCutoutLoleYCoins, setWCDustedLuziaCutoutLoleYCoins] = useState(0);
const totalWCDustedLuziaCutoutLoleYCoins = Math.max (totalLoleYCutoutWC + totalKuikasCoinsWCCutoutDL,0)

const [WCDustedLuziaCutoutLoleNCoins, setWCDustedLuziaCutoutLoleNCoins] = useState(0);
const totalWCDustedLuziaCutoutLoleNCoins = Math.max (totalLoleNCutoutWC + totalKuikasCoinsWCCutoutDL,0)

const [WCDustedLuziaCutoutLoleYCombo, setWCDustedLuziaCutoutLoleYCombo] = useState(0);
const totalWCDustedLuziaCutoutLoleYCombo = Math.max (totalLoleYCutoutWC + totalJesoWCCutoutDL + totalLoleBothComboDLCoinsWC,0)

const [WCDustedLuziaCutoutLoleNCombo, setWCDustedLuziaCutoutLoleNCombo] = useState(0);
const totalWCDustedLuziaCutoutLoleNCombo = Math.max (totalLoleNCutoutWC + totalJesoWCCutoutDL + totalLoleBothComboDLCoinsWC, 0)

const [WCDustedLuziaCutoutLoleYBattle, setWCDustedLuziaCutoutLoleYBattle] = useState(0);
const totalWCDustedLuziaCutoutLoleYBattle = Math.max (totalLoleYCutoutWC + totalBattleWCCutoutDL + totalKuikasWCBattleCutoutDL,0)

const [WCDustedLuziaCutoutLoleNBattle, setWCDustedLuziaCutoutLoleNBattle] = useState(0);
const totalWCDustedLuziaCutoutLoleNBattle = Math.max (totalLoleNCutoutWC + totalBattleWCCutoutDL + totalKuikasWCBattleCutoutDL, 0)


//DUSTED LUZIA BATTLE COST - MASK - //

const [SteelMaskDL, setSteelMaskDL] = useState(0);
const totalSteelMaskDL = Math.max ((totalMasteryMonsterMask*5)-Steel-totalRawSteelHave,0)

const [RawSteelNeededMaskDL, setRawSteelNeededMaskDL] = useState(0);
const totalRawSteelNeededMaskDL = Math.max (totalSteelMaskDL*3,0)

const [LeavesNeededMaskDL, setLeavesNeededMaskDL] = useState(0);
const totalLeavesNeededMaskDL = Math.max (totalSteelMaskDL*4, 0)

const [HWMaskDL, setHWMaskDL] = useState(0);
const totalHWMaskDL = Math.max ((totalMasteryMonsterMask*7)-HW,0)

const [RGMaskDL, setRGMaskDL] = useState(0);
const totalRGMaskDL = Math.max ((totalMasteryMonsterMask*2)-RG,0)

// coinsssss

const [CoinsMaskDL, setCoinsMaskDL] = useState(0);
const totalCoinsMaskDL = Math.max (((totalMasteryMonsterMask*850)+(totalRawSteelNeededMaskDL*35)+(totalLeavesNeededMaskDL*8)+(totalHWMaskDL*250)+(totalRGMaskDL*100)-Coins), 0)

const [KuikasCoinsMaskDL, setKuikasCoinsMaskDL] = useState(0);
const totalKuikasCoinsMaskDL = Math.ceil ((totalCoinsMaskDL/33))

const [KuikasCoinsWCMaskDL, setKuikasCoinsWCMaskDL] = useState(0);
const totalKuikasCoinsWCMaskDL = Math.max (totalKuikasCoinsMaskDL*50,0)

//combo

//buy: hardwood, leaves
//fight: JESO, 3 steel, 5 raw steel, 34 distorted signals tokens, 17  hunter tokens, 1 gold, 5 raw gold, 1 red dye, 15 coins

const [JesoSteelMaskDL, setJesoSteelMaskDL] = useState(0);
const totalJesoSteelMaskDL = Math.ceil (totalRawSteelNeededMaskDL/20)

const [JesoNeededMaskDL, setJesoNeededMaskDL] = useState(0);
const totalJesoNeededMaskDL = Math.max (totalJesoSteelMaskDL, 0)

const [JesoWCMaskDL, setJesoWCMaskDL] = useState(0);
const totalJesoWCMaskDL = Math.max (totalJesoNeededMaskDL*1667, 0)

const [JesoRawGoldMask, setJesoRawGoldMask] = useState(0);
const totalJesoRawGoldMask = Math.round ((totalJesoNeededMaskDL*5)/3)

const [JesoCoinsMaskDL, setJesoCoinsMaskDL] = useState(0);
const totalJesoCoinsMaskDL = Math.max ((totalJesoNeededMaskDL*34*10)+(totalJesoNeededMaskDL*17*10)+(totalJesoNeededMaskDL*100)+
                                          (totalJesoRawGoldMask*66)+(totalJesoNeededMaskDL*15)+(totalJesoNeededMaskDL*49),0)
//total coins = DS token val + Hunt token val + gold val + raw gold val + red dye val + coin drop

const [LeavesComboMaskDL, setLeavesComboMaskDL] = useState(0);
const totalLeavesComboMaskDL = Math.max (totalLeavesNeededMaskDL*8, 0)

const [HWComboMaskDL, setHWComboMaskDL] = useState(0);
const totalHWComboMaskDL = Math.max (totalHWMaskDL*250, 0)

const [RGComboMaskDL, setRGComboMaskDL] = useState(0);
const totalRGComboMaskDL = Math.max (totalRGMaskDL*100, 0)

const [PurchaseComboMaskDL, setPurchaseComboMaskDL] = useState(0);
const totalPurchaseComboMaskDL = Math.max (totalLeavesComboMaskDL + totalHWComboMaskDL + totalRGComboMaskDL, 0)

const [CoinFarmComboMaskDL, setCoinFarmComboMaskDL] = useState(0);
const totalCoinFarmComboMaskDL = Math.max ((totalMasteryMonsterMask*850+(totalPurchaseComboMaskDL-totalJesoCoinsMaskDL))-Coins, 0)

//kuikas = 2 battles are 66 g

const [KuikasFarmComboMaskDL, setKuikasFarmComboMaskDL] = useState(0);
const totalKuikasFarmComboMaskDL = Math.ceil ((totalCoinFarmComboMaskDL/66)*2)

const [LoleYComboMaskDLCoinsWC, setLoleYComboMaskDLCoinsWC] = useState(0);
const totalLoleBothComboMaskDLCoinsWC = Math.max (totalKuikasFarmComboMaskDL*50,0)

//battle only - need HW and Leaves

//scofin for steel
const [ScofinSteelMaskDL, setScofinSteelMaskDL] = useState(0);
const totalScofinSteelMaskDL = Math.ceil (totalRawSteelNeededMaskDL/1.5)

const [ScofinSteelWCMaskDL, setScofinSteelWCMaskDL] = useState(0);
const totalScofinSteelWCMaskDL = Math.max (totalScofinSteelMaskDL * 150,0)

//xin for leaves
const [LeavesBattleWCMaskDL, setLeavesBattleWCMaskDL] = useState(0);
const totalLeavesBattleWCMaskDL = Math.max (totalLeavesNeededMaskDL*50, 0)

//jaaje for HW everyone else is too ugly
const [HWBattleWCMaskDL, setHWBattleWCMaskDL] = useState(0);
const totalHWBattleWCMask = Math.max (totalHWMaskDL*500,0)

//Olea for RG, drops .5 RG per 100 words

const [RGBattleMaskDL, setRGBattleMaskDL] = useState(0);
const totalRGBattleMaskDL = Math.ceil ((totalRGMaskDL/.5))

const [RGBattleWCMaskDL, setRGBattleWCMaskDL] = useState(0);
const totalRGBattleWCMaskDL = Math.max (totalRGBattleMaskDL*100, 0)

//battle wc - no coins, that's in the next step

const [BattleWCMaskDL, setBattleWCMaskDL] = useState(0);
const totalBattleWCMaskDL = Math.max (totalHWBattleWCMask+totalLeavesBattleWCMaskDL+totalScofinSteelWCMaskDL+totalRGBattleWCMaskDL,0)


//kuikas for coins
const [BattleCoinMaskDL, setBattleCoinMaskDL] = useState(0);
const totalBattleCoinMaskDL = Math.max ((totalMasteryMonsterMask*850)-Coins,0)

const [KuikasFarmBattleMaskDL, setKuikasFarmBattleMaskDL] = useState(0);
const totalKuikasFarmBattleMaskDL = Math.ceil ((totalBattleCoinMaskDL/66)*2)

const [KuikasWCBattleMaskDL, setKuikasWCBattleMaskDL] = useState(0);
const totalKuikasWCBattleMaskDL = Math.max (totalKuikasFarmBattleMaskDL*50,0)


//TOTAL WORD COUNTS - DUSTED LUZIA MASK//

const [WCDustedLuziaMaskLoleYCoins, setWCDustedLuziaMaskLoleYCoins] = useState(0);
const totalWCDustedLuziaMaskLoleYCoins = Math.max (totalLoleYMaskWC + totalKuikasCoinsWCMaskDL,0)

const [WCDustedLuziaMaskLoleNCoins, setWCDustedLuziaMaskLoleNCoins] = useState(0);
const totalWCDustedLuziaMaskLoleNCoins = Math.max (totalLoleNMaskWC + totalKuikasCoinsWCMaskDL,0)

const [WCDustedLuziaMaskLoleYCombo, setWCDustedLuziaMaskLoleYCombo] = useState(0);
const totalWCDustedLuziaMaskLoleYCombo = Math.max (totalLoleYMaskWC + totalJesoWCMaskDL + totalLoleBothComboMaskDLCoinsWC,0)

const [WCDustedLuziaMaskLoleNCombo, setWCDustedLuziaMaskLoleNCombo] = useState(0);
const totalWCDustedLuziaMaskLoleNCombo = Math.max (totalLoleNMaskWC + totalJesoWCMaskDL + totalLoleBothComboMaskDLCoinsWC, 0)

const [WCDustedLuziaMaskLoleYBattle, setWCDustedLuziaMaskLoleYBattle] = useState(0);
const totalWCDustedLuziaMaskLoleYBattle = Math.max (totalLoleYMaskWC + totalBattleWCMaskDL + totalKuikasWCBattleMaskDL,0)

const [WCDustedLuziaMaskLoleNBattle, setWCDustedLuziaMaskLoleNBattle] = useState(0);
const totalWCDustedLuziaMaskLoleNBattle = Math.max (totalLoleNMaskWC + totalBattleWCMaskDL + totalKuikasWCBattleMaskDL, 0)

//DUSTY KING MAI  - offset value of drops

const [DustyKingMaiCoinValueDropsCutout, setDustyKingMaiCoinValueDropsCutout] = useState(0);
const totalDustyKingMaiCoinValueDropsCutout = Math.max ((totalMasteryMonsterCutout*14681)-(totalMasteryMonsterCutout*2396))

const [DustyKingMaiEquivKuikasCutout, setDustyKingMaiEquivKuikasCutout] = useState(0);
const totalDustyKingMaiEquivKuikasCutout = Math.ceil (totalDustyKingMaiCoinValueDropsCutout/33)

const [DustyKingMaiCoinsNeededCutout, setDustyKingMaiCoinsNeededCutout] = useState(0);
const totalDustyKingMaiCoinsNeededCutout = Math.max (totalLoleBothCutoutPotionCost+totalDustyKingMaiCoinValueDropsCutout,0)

const [DustyKingMaiKuikasQtyCutout, setDustyKingMaiKuikasQtyCutout] = useState(0);
const totalDustyKingMaiKuikasQtyCutout = Math.max (totalLoleBothCutoutKuikas+totalDustyKingMaiEquivKuikasCutout,0)

const [DustyKingMaiKuikasWCLoleBothCutout, setDustyKingMaiKuikasWCLoleBothCutout] = useState(0);
const totalDustyKingMaiKuikasWCLoleBothCutout = Math.max ((totalDustyKingMaiKuikasQtyCutout)*50,0)


//
const [DustyKingMaiCoinValueDropsMask, setDustyKingMaiCoinValueDropsMask] = useState(0);
const totalDustyKingMaiCoinValueDropsMask = Math.max ((totalMasteryMonsterMask*14681)-(totalMasteryMonsterMask*2396),0)

const [DustyKingMaiEquivKuikasMask, setDustyKingMaiEquivKuikasMask] = useState(0);
const totalDustyKingMaiEquivKuikasMask = Math.ceil (totalDustyKingMaiCoinValueDropsMask/33)

const [DustyKingMaiCoinsNeededMask, setDustyKingMaiCoinsNeededMask] = useState(0);
const totalDustyKingMaiCoinsNeededMask = Math.max (totalLoleBothMaskPotionCost+totalDustyKingMaiCoinValueDropsMask,0)

const [DustyKingMaiKuikasQtyMask, setDustyKingMaiKuikasQtyMask] = useState(0);
const totalDustyKingMaiKuikasQtyMask = Math.max (totalLoleBothMaskKuikas+totalDustyKingMaiEquivKuikasMask,0)

const [DustyKingMaiKuikasWCLoleBothMask, setDustyKingMaiKuikasWCLoleBothMask] = useState(0);
const totalDustyKingMaiKuikasWCLoleBothMask = Math.max ((totalDustyKingMaiKuikasQtyMask)*50,0)




const [DustyKingMaiTotalWCLoleYCutout, setDustyKingMaiTotalWCLoleYCutout] = useState(0);
const totalDustyKingMaiTotalWCLoleYCutout = Math.max (totalLoleYCutoutWC + totalDustyKingMaiKuikasWCLoleBothCutout, 0)

const [DustyKingMaiTotalWCLoleNCutout, setDustyKingMaiTotalWCLoleNCutout] = useState(0);
const totalDustyKingMaiTotalWCLoleNCutout = Math.max (totalLoleNCutoutWC + totalDustyKingMaiKuikasWCLoleBothCutout, 0)

const [DustyKingMaiTotalWCLoleYMask, setDustyKingMaiTotalWCLoleYMask] = useState(0);
const totalDustyKingMaiTotalWCLoleYMask = Math.max (totalLoleYMaskWC + totalDustyKingMaiKuikasWCLoleBothMask, 0)

const [DustyKingMaiTotalWCLoleNMask, setDustyKingMaiTotalWCLoleNMask] = useState(0);
const totalDustyKingMaiTotalWCLoleNMask = Math.max (totalLoleNMaskWC + totalDustyKingMaiKuikasWCLoleBothMask, 0)

///

const [DustyKingMaiCutoutQtyTwo, setDustyKingMaiCutoutQtyTwo] = useState(0);
const totalDustyKingMaiCutoutQtyTwo = Math.max (totalMasteryMonsterCutout*2,0)

const [DustyKingMaiMaskQtyTwo, setDustyKingMaiMaskQtyTwo] = useState(0);
const totalDustyKingMaiMaskQtyTwo = Math.max (totalMasteryMonsterMask*2,0)

const [DustyKingMaiCutoutQtyFour, setDustyKingMaiCutoutQtyFour] = useState(0);
const totalDustyKingMaiCutoutQtyFour = Math.max (totalMasteryMonsterCutout*4,0)

const [DustyKingMaiMaskQtyFour, setDustyKingMaiMaskQtyFour] = useState(0);
const totalDustyKingMaiMaskQtyFour = Math.max (totalMasteryMonsterMask*4,0)



const [DustyKingMaiCutoutQtyEight, setDustyKingMaiCutoutQtyEight] = useState(0);
const totalDustyKingMaiCutoutQtyEight = Math.max (totalMasteryMonsterCutout*8,0)

const [DustyKingMaiMaskQtyEight, setDustyKingMaiMaskQtyEight] = useState(0);
const totalDustyKingMaiMaskQtyEight = Math.max (totalMasteryMonsterMask*8,0)


const [DustyKingMaiCutoutQtyTen, setDustyKingMaiCutoutQtyTen] = useState(0);
const totalDustyKingMaiCutoutQtyTen = Math.max (totalMasteryMonsterCutout*10,0)

const [DustyKingMaiMaskQtyTen, setDustyKingMaiMaskQtyTen] = useState(0);
const totalDustyKingMaiMaskQtyTen = Math.max (totalMasteryMonsterMask*10,0)

const [DustyKingMaiCutoutQtyFifteen, setDustyKingMaiCutoutQtyFifteen] = useState(0);
const totalDustyKingMaiCutoutQtyFifteen = Math.max (totalMasteryMonsterCutout*15,0)

const [DustyKingMaiMaskQtyFifteen, setDustyKingMaiMaskQtyFifteen] = useState(0);
const totalDustyKingMaiMaskQtyFifteen = Math.max (totalMasteryMonsterMask*15,0)

const [DustyKingMaiCutoutQtyFiveHundo, setDustyKingMaiCutoutQtyFiveHundo] = useState(0);
const totalDustyKingMaiCutoutQtyFiveHundo = Math.max (totalMasteryMonsterCutout*500,0)

const [DustyKingMaiMaskQtyFiveHundo, setDustyKingMaiMaskQtyFiveHundo] = useState(0);
const totalDustyKingMaiMaskQtyFiveHundo = Math.max (totalMasteryMonsterMask*500,0)

const [DustyKingMaiCutoutQtyOneK, setDustyKingMaiCutoutQtyOneK] = useState(0);
const totalDustyKingMaiCutoutQtyOneK = Math.max (totalMasteryMonsterCutout*500,0)

const [DustyKingMaiMaskQtyOneK, setDustyKingMaiMaskQtyOneK] = useState(0);
const totalDustyKingMaiMaskQtyOneK = Math.max (totalMasteryMonsterMask*500,0)


//WORDS SAVED VS TRADITIONAL MASTERY//

const [TesvenMasteryCutout, setTesvenMasteryCutout] = useState(0);
const totalTesvenMasteryCutout = Math.max (totalMasteryMonsterCutout*2100,0)

const [TesvenMasteryMask, setTesvenMasteryMask] = useState(0);
const totalTesvenMasteryMask = Math.max (totalMasteryMonsterMask*2100,0)

const [TesvenMasteryStatue, setTesvenMasteryStatue] = useState(0);
const totalTesvenMasteryStatue = Math.max (totalMasteryMonsterStatue*2100,0)

const [TesvenMasteryBalloon, setTesvenMasteryBalloon] = useState(0);
const totalTesvenMasteryBalloon = Math.max (totalMasteryMonsterBalloon*2100,0)

const [TesvenMasteryBook, setTesvenMasteryBook] = useState(0);
const totalTesvenMasteryBook = Math.max (totalMasteryMonsterBook*2100,0)

//

const [VelsounMasteryCutout, setVelsounMasteryCutout] = useState(0);
const totalVelsounMasteryCutout = Math.max (totalMasteryMonsterCutout*2430,0)

const [VelsounMasteryMask, setVelsounMasteryMask] = useState(0);
const totalVelsounMasteryMask = Math.max (totalMasteryMonsterMask*2430,0)

const [VelsounMasteryStatue, setVelsounMasteryStatue] = useState(0);
const totalVelsounMasteryStatue = Math.max (totalMasteryMonsterStatue*2430,0)

const [VelsounMasteryBalloon, setVelsounMasteryBalloon] = useState(0);
const totalVelsounMasteryBalloon = Math.max (totalMasteryMonsterBalloon*2430,0)

const [VelsounMasteryBook, setVelsounMasteryBook] = useState(0);
const totalVelsounMasteryBook = Math.max (totalMasteryMonsterBook*2430,0)

//

const [AlphaTamboAzadiMasteryCutout, setAlphaTamboAzadiMasteryCutout] = useState(0);
const totalAlphaTamboAzadiMasteryCutout = Math.max (totalMasteryMonsterCutout*2500,0)

const [AlphaTamboAzadiMasteryMask, setAlphaTamboAzadiMasteryMask] = useState(0);
const totalAlphaTamboAzadiMasteryMask = Math.max (totalMasteryMonsterMask*2500,0)

const [AlphaTamboAzadiMasteryStatue, setAlphaTamboAzadiMasteryStatue] = useState(0);
const totalAlphaTamboAzadiMasteryStatue = Math.max (totalMasteryMonsterStatue*2500,0)

const [AlphaTamboAzadiMasteryBalloon, setAlphaTamboAzadiMasteryBalloon] = useState(0);
const totalAlphaTamboAzadiMasteryBalloon = Math.max (totalMasteryMonsterBalloon*2500,0)

const [AlphaTamboAzadiMasteryBook, setAlphaTamboAzadiMasteryBook] = useState(0);
const totalAlphaTamboAzadiMasteryBook = Math.max (totalMasteryMonsterBook*2500,0)

//

const [TareitMasteryCutout, setTareitMasteryCutout] = useState(0);
const totalTareitMasteryCutout = Math.max (totalMasteryMonsterCutout*2999,0)

const [TareitMasteryMask, setTareitMasteryMask] = useState(0);
const totalTareitMasteryMask = Math.max (totalMasteryMonsterMask*2999,0)

const [TareitMasteryStatue, setTareitMasteryStatue] = useState(0);
const totalTareitMasteryStatue = Math.max (totalMasteryMonsterStatue*2999,0)

const [TareitMasteryBalloon, setTareitMasteryBalloon] = useState(0);
const totalTareitMasteryBalloon = Math.max (totalMasteryMonsterBalloon*2999,0)

const [TareitMasteryBook, setTareitMasteryBook] = useState(0);
const totalTareitMasteryBook = Math.max (totalMasteryMonsterBook*2999,0)


//

const [BabuSuwoDustSuwoMasteryCutout, setBabuSuwoDustSuwoMasteryCutout] = useState(0);
const totalBabuSuwoDustSuwoMasteryCutout = Math.max (totalMasteryMonsterCutout*3000,0)

const [BabuSuwoDustSuwoMasteryMask, setBabuSuwoDustSuwoMasteryMask] = useState(0);
const totalBabuSuwoDustSuwoMasteryMask = Math.max (totalMasteryMonsterMask*3000,0)

const [BabuSuwoDustSuwoMasteryStatue, setBabuSuwoDustSuwoMasteryStatue] = useState(0);
const totalBabuSuwoDustSuwoMasteryStatue = Math.max (totalMasteryMonsterStatue*3000,0)

const [BabuSuwoDustSuwoMasteryBalloon, setBabuSuwoDustSuwoMasteryBalloon] = useState(0);
const totalBabuSuwoDustSuwoMasteryBalloon = Math.max (totalMasteryMonsterBalloon*3000,0)

const [BabuSuwoDustSuwoMasteryBook, setBabuSuwoDustSuwoMasteryBook] = useState(0);
const totalBabuSuwoDustSuwoMasteryBook = Math.max (totalMasteryMonsterBook*3000,0)


//

const [RakstalMasteryCutout, setRakstalMasteryCutout] = useState(0);
const totalRakstalMasteryCutout = Math.max (totalMasteryMonsterCutout*3154,0)

const [RakstalMasteryMask, setRakstalMasteryMask] = useState(0);
const totalRakstalMasteryMask = Math.max (totalMasteryMonsterMask*3154,0)

const [RakstalMasteryStatue, setRakstalMasteryStatue] = useState(0);
const totalRakstalMasteryStatue = Math.max (totalMasteryMonsterStatue*3154,0)

const [RakstalMasteryBalloon, setRakstalMasteryBalloon] = useState(0);
const totalRakstalMasteryBalloon = Math.max (totalMasteryMonsterBalloon*3154,0)

const [RakstalMasteryBook, setRakstalMasteryBook] = useState(0);
const totalRakstalMasteryBook = Math.max (totalMasteryMonsterBook*3154,0)

//

const [ShamanLuziaMasteryCutout, setShamanLuziaMasteryCutout] = useState(0);
const totalShamanLuziaMasteryCutout = Math.max (totalMasteryMonsterCutout*3600,0)

const [ShamanLuziaMasteryMask, setShamanLuziaMasteryMask] = useState(0);
const totalShamanLuziaMasteryMask = Math.max (totalMasteryMonsterMask*3600,0)

const [ShamanLuziaMasteryStatue, setShamanLuziaMasteryStatue] = useState(0);
const totalShamanLuziaMasteryStatue = Math.max (totalMasteryMonsterStatue*3600,0)

const [ShamanLuziaMasteryBalloon, setShamanLuziaMasteryBalloon] = useState(0);
const totalShamanLuziaMasteryBalloon = Math.max (totalMasteryMonsterBalloon*3600,0)

const [ShamanLuziaMasteryBook, setShamanLuziaMasteryBook] = useState(0);
const totalShamanLuziaMasteryBook = Math.max (totalMasteryMonsterBook*3600,0)

//

const [ReflDarkReflMasteryCutout, setReflDarkReflMasteryCutout] = useState(0);
const totalReflDarkReflMasteryCutout = Math.max (totalMasteryMonsterCutout*4444,0)

const [ReflDarkReflMasteryMask, setReflDarkReflMasteryMask] = useState(0);
const totalReflDarkReflMasteryMask = Math.max (totalMasteryMonsterMask*4444,0)

const [ReflDarkReflMasteryStatue, setReflDarkReflMasteryStatue] = useState(0);
const totalReflDarkReflMasteryStatue = Math.max (totalMasteryMonsterStatue*4444,0)

const [ReflDarkReflMasteryBalloon, setReflDarkReflMasteryBalloon] = useState(0);
const totalReflDarkReflMasteryBalloon = Math.max (totalMasteryMonsterBalloon*4444,0)

const [ReflDarkReflMasteryBook, setReflDarkReflMasteryBook] = useState(0);
const totalReflDarkReflMasteryBook = Math.max (totalMasteryMonsterBook*4444,0)

//

const [CaraKultMicRivGodKingMaiMasteryCutout, setCaraKultMicRivGodKingMaiMasteryCutout] = useState(0);
const totalCaraKultMicRivGodKingMaiMasteryCutout = Math.max (totalMasteryMonsterCutout*5000,0)

const [CaraKultMicRivGodKingMaiMasteryMask, setCaraKultMicRivGodKingMaiMasteryMask] = useState(0);
const totalCaraKultMicRivGodKingMaiMasteryMask = Math.max (totalMasteryMonsterMask*5000,0)

const [CaraKultMicRivGodKingMaiMasteryStatue, setCaraKultMicRivGodKingMaiMasteryStatue] = useState(0);
const totalCaraKultMicRivGodKingMaiMasteryStatue = Math.max (totalMasteryMonsterStatue*5000,0)

const [CaraKultMicRivGodKingMaiMasteryBalloon, setCaraKultMicRivGodKingMaiMasteryBalloon] = useState(0);
const totalCaraKultMicRivGodKingMaiMasteryBalloon = Math.max (totalMasteryMonsterBalloon*5000,0)

const [CaraKultMicRivGodKingMaiMasteryBook, setCaraKultMicRivGodKingMaiMasteryBook] = useState(0);
const totalCaraKultMicRivGodKingMaiMasteryBook = Math.max (totalMasteryMonsterBook*5000,0)


//

const [DustyLuzMasteryCutout, setDustyLuzMasteryCutout] = useState(0);
const totalDustyLuzMasteryCutout = Math.max (totalMasteryMonsterCutout*8160,0)

const [DustyLuzMasteryMask, setDustyLuzMasteryMask] = useState(0);
const totalDustyLuzMasteryMask = Math.max (totalMasteryMonsterMask*8160,0)

const [DustyLuzMasteryStatue, setDustyLuzMasteryStatue] = useState(0);
const totalDustyLuzMasteryStatue = Math.max (totalMasteryMonsterStatue*8160,0)

const [DustyLuzMasteryBalloon, setDustyLuzMasteryBalloon] = useState(0);
const totalDustyLuzMasteryBalloon = Math.max (totalMasteryMonsterBalloon*8160,0)

const [DustyLuzMasteryBook, setDustyLuzMasteryBook] = useState(0);
const totalDustyLuzMasteryBook = Math.max (totalMasteryMonsterBook*8160,0)

//

const [DustyKingMaiMasteryCutout, setDustyKingMaiMasteryCutout] = useState(0);
const totalDustyKingMaiMasteryCutout = Math.max (totalMasteryMonsterCutout*15000,0)

const [DustyKingMaiMasteryMask, setDustyKingMaiMasteryMask] = useState(0);
const totalDustyKingMaiMasteryMask = Math.max (totalMasteryMonsterMask*15000,0)

const [DustyKingMaiMasteryStatue, setDustyKingMaiMasteryStatue] = useState(0);
const totalDustyKingMaiMasteryStatue = Math.max (totalMasteryMonsterStatue*15000,0)

const [DustyKingMaiMasteryBalloon, setDustyKingMaiMasteryBalloon] = useState(0);
const totalDustyKingMaiMasteryBalloon = Math.max (totalMasteryMonsterBalloon*15000,0)

const [DustyKingMaiMasteryBook, setDustyKingMaiMasteryBook] = useState(0);
const totalDustyKingMaiMasteryBook = Math.max (totalMasteryMonsterBook*15000,0)

//LOLE YES & NO - CUTOUT & MASK

//

const [WCDiffTesvenMasteryLoleYCutout, setWCDiffTesvenMasteryLoleYCutout] = useState(0);
const totalWCDiffTesvenMasteryLoleYCutout = Math.max (totalTesvenMasteryCutout-totalLoleYCutoutWC,0)

const [WCDiffTesvenMasteryLoleYMask, setWCDiffTesvenMasteryLoleYMask] = useState(0);
const totalWCDiffTesvenMasteryLoleYMask = Math.max (totalTesvenMasteryMask-totalLoleYMaskWC,0)

const [WCDiffTesvenMasteryLoleNCutout, setWCDiffTesvenMasteryLoleNCutout] = useState(0);
const totalWCDiffTesvenMasteryLoleNCutout = Math.max (totalTesvenMasteryCutout-totalLoleNCutoutWC,0)

const [WCDiffTesvenMasteryLoleNMask, setWCDiffTesvenMasteryLoleNMask] = useState(0);
const totalWCDiffTesvenMasteryLoleNMask = Math.max (totalTesvenMasteryMask-totalLoleNMaskWC,0)

//

const [WCDiffVelsounMasteryLoleYCutout, setWCDiffVelsounMasteryLoleYCutout] = useState(0);
const totalWCDiffVelsounMasteryLoleYCutout = Math.max (totalVelsounMasteryCutout-totalLoleYCutoutWC,0)

const [WCDiffVelsounMasteryLoleYMask, setWCDiffVelsounMasteryLoleYMask] = useState(0);
const totalWCDiffVelsounMasteryLoleYMask = Math.max (totalVelsounMasteryMask-totalLoleYMaskWC,0)

const [WCDiffVelsounMasteryLoleNCutout, setWCDiffVelsounMasteryLoleNCutout] = useState(0);
const totalWCDiffVelsounMasteryLoleNCutout = Math.max (totalVelsounMasteryCutout-totalLoleNCutoutWC)

const [WCDiffVelsounMasteryLoleNMask, setWCDiffVelsounMasteryLoleNMask] = useState(0);
const totalWCDiffVelsounMasteryLoleNMask = Math.max (totalVelsounMasteryMask-totalLoleNMaskWC)

//

const [WCDiffAlphaTamboAzadiMasteryLoleYCutout, setWCDiffAlphaTamboAzadiMasteryLoleYCutout] = useState(0);
const totalWCDiffAlphaTamboAzadiMasteryLoleYCutout = Math.max (totalAlphaTamboAzadiMasteryCutout-totalLoleYCutoutWC,0)

const [WCDiffAlphaTamboAzadiMasteryLoleYMask, setWCDiffAlphaTamboAzadiMasteryLoleYMask] = useState(0);
const totalWCDiffAlphaTamboAzadiMasteryLoleYMask = Math.max (totalAlphaTamboAzadiMasteryMask-totalLoleYMaskWC,0)

const [WCDiffAlphaTamboAzadiMasteryLoleNCutout, setWCDiffAlphaTamboAzadiMasteryLoleNCutout] = useState(0);
const totalWCDiffAlphaTamboAzadiMasteryLoleNCutout = Math.max (totalAlphaTamboAzadiMasteryCutout-totalLoleNCutoutWC,0)

const [WCDiffAlphaTamboAzadiMasteryLoleNMask, setWCDiffAlphaTamboAzadiMasteryLoleNMask] = useState(0);
const totalWCDiffAlphaTamboAzadiMasteryLoleNMask = Math.max (totalAlphaTamboAzadiMasteryMask-totalLoleNMaskWC,0)

//

const [WCDiffTareitMasteryLoleYCutout, setWCDiffTareitMasteryLoleYCutout] = useState(0);
const totalWCDiffTareitMasteryLoleYCutout = Math.max (totalTareitMasteryCutout-totalLoleYCutoutWC,0)

const [WCDiffTareitMasteryLoleYMask, setWCDiffTareitMasteryLoleYMask] = useState(0);
const totalWCDiffTareitMasteryLoleYMask = Math.max (totalTareitMasteryMask-totalLoleYMaskWC,0)

const [WCDiffTareitMasteryLoleNCutout, setWCDiffTareitMasteryLoleNCutout] = useState(0);
const totalWCDiffTareitMasteryLoleNCutout = Math.max (totalTareitMasteryCutout-totalLoleNCutoutWC,0)

const [WCDiffTareitMasteryLoleNMask, setWCDiffTareitMasteryLoleNMask] = useState(0);
const totalWCDiffTareitMasteryLoleNMask = Math.max (totalTareitMasteryMask-totalLoleNMaskWC,0)

//

const [WCDiffBabuSuwoDustSuwoMasteryLoleYCutout, setWCDiffBabuSuwoDustSuwoMasteryLoleYCutout] = useState(0);
const totalWCDiffBabuSuwoDustSuwoMasteryLoleYCutout = Math.max (totalBabuSuwoDustSuwoMasteryCutout-totalLoleYCutoutWC,0)

const [WCDiffBabuSuwoDustSuwoMasteryLoleYMask, setWCDiffBabuSuwoDustSuwoMasteryLoleYMask] = useState(0);
const totalWCDiffBabuSuwoDustSuwoMasteryLoleYMask = Math.max (totalBabuSuwoDustSuwoMasteryMask-totalLoleYMaskWC,0)

const [WCDiffBabuSuwoDustSuwoMasteryLoleNCutout, setWCDiffBabuSuwoDustSuwoMasteryLoleNCutout] = useState(0);
const totalWCDiffBabuSuwoDustSuwoMasteryLoleNCutout = Math.max (totalBabuSuwoDustSuwoMasteryCutout-totalLoleNCutoutWC,0)

const [WCDiffBabuSuwoDustSuwoMasteryLoleNMask, setWCDiffBabuSuwoDustSuwoMasteryLoleNMask] = useState(0);
const totalWCDiffBabuSuwoDustSuwoMasteryLoleNMask = Math.max (totalBabuSuwoDustSuwoMasteryMask-totalLoleNMaskWC,0)

//

const [WCDiffRakstalMasteryLoleYCutout, setWCDiffRakstalMasteryLoleYCutout] = useState(0);
const totalWCDiffRakstalMasteryLoleYCutout = Math.max (totalRakstalMasteryCutout-totalLoleYCutoutWC,0)

const [WCDiffRakstalMasteryLoleYMask, setWCDiffRakstalMasteryLoleYMask] = useState(0);
const totalWCDiffRakstalMasteryLoleYMask = Math.max (totalRakstalMasteryMask-totalLoleYMaskWC,0)

const [WCDiffRakstalMasteryLoleNCutout, setWCDiffRakstalMasteryLoleNCutout] = useState(0);
const totalWCDiffRakstalMasteryLoleNCutout = Math.max (totalRakstalMasteryCutout-totalLoleNCutoutWC,0)

const [WCDiffRakstalMasteryLoleNMask, setWCDiffRakstalMasteryLoleNMask] = useState(0);
const totalWCDiffRakstalMasteryLoleNMask = Math.max (totalRakstalMasteryMask-totalLoleNMaskWC,0)

//

const [WCDiffShamanLuziaMasteryLoleYCutout, setWCDiffShamanLuziaMasteryLoleYCutout] = useState(0);
const totalWCDiffShamanLuziaMasteryLoleYCutout = Math.max (totalShamanLuziaMasteryCutout-totalLoleYCutoutWC,0)

const [WCDiffShamanLuziaMasteryLoleYMask, setWCDiffShamanLuziaMasteryLoleYMask] = useState(0);
const totalWCDiffShamanLuziaMasteryLoleYMask = Math.max (totalShamanLuziaMasteryMask-totalLoleYMaskWC,0)

const [WCDiffShamanLuziaMasteryLoleNCutout, setWCDiffShamanLuziaMasteryLoleNCutout] = useState(0);
const totalWCDiffShamanLuziaMasteryLoleNCutout = Math.max (totalShamanLuziaMasteryCutout-totalLoleNCutoutWC,0)

const [WCDiffShamanLuziaMasteryLoleNMask, setWCDiffShamanLuziaMasteryLoleNMask] = useState(0);
const totalWCDiffShamanLuziaMasteryLoleNMask = Math.max (totalShamanLuziaMasteryMask-totalLoleNMaskWC,0)

//

const [WCDiffReflDarkReflMasteryLoleYCutout, setWCDiffReflDarkReflMasteryLoleYCutout] = useState(0);
const totalWCDiffReflDarkReflMasteryLoleYCutout = Math.max (totalReflDarkReflMasteryCutout-totalLoleYCutoutWC,0)

const [WCDiffReflDarkReflMasteryLoleYMask, setWCDiffReflDarkReflMasteryLoleYMask] = useState(0);
const totalWCDiffReflDarkReflMasteryLoleYMask = Math.max (totalReflDarkReflMasteryMask-totalLoleYMaskWC,0)

const [WCDiffReflDarkReflMasteryLoleNCutout, setWCDiffReflDarkReflMasteryLoleNCutout] = useState(0);
const totalWCDiffReflDarkReflMasteryLoleNCutout = Math.max (totalReflDarkReflMasteryCutout-totalLoleNCutoutWC,0)

const [WCDiffReflDarkReflMasteryLoleNMask, setWCDiffReflDarkReflMasteryLoleNMask] = useState(0);
const totalWCDiffReflDarkReflMasteryLoleNMask = Math.max (totalReflDarkReflMasteryMask-totalLoleNMaskWC,0)

//

const [WCDiffCaraKultMicRivGodKingMaiMasteryLoleYCutout, setWCDiffCaraKultMicRivGodKingMaiMasteryLoleYCutout] = useState(0);
const totalWCDiffCaraKultMicRivGodKingMaiMasteryLoleYCutout = Math.max (totalCaraKultMicRivGodKingMaiMasteryCutout-totalLoleYCutoutWC,0)

const [WCDiffCaraKultMicRivGodKingMaiMasteryLoleYMask, setWCDiffCaraKultMicRivGodKingMaiMasteryLoleYMask] = useState(0);
const totalWCDiffCaraKultMicRivGodKingMaiMasteryLoleYMask = Math.max (totalCaraKultMicRivGodKingMaiMasteryMask-totalLoleYMaskWC,0)

const [WCDiffCaraKultMicRivGodKingMaiMasteryLoleNCutout, setWCDiffCaraKultMicRivGodKingMaiMasteryLoleNCutout] = useState(0);
const totalWCDiffCaraKultMicRivGodKingMaiMasteryLoleNCutout = Math.max (totalCaraKultMicRivGodKingMaiMasteryCutout-totalLoleNCutoutWC,0)

const [WCDiffCaraKultMicRivGodKingMaiMasteryLoleNMask, setWCDiffCaraKultMicRivGodKingMaiMasteryLoleNMask] = useState(0);
const totalWCDiffCaraKultMicRivGodKingMaiMasteryLoleNMask = Math.max (totalCaraKultMicRivGodKingMaiMasteryMask-totalLoleNMaskWC,0)

//

const [WCDiffDustyLuzMasteryLoleYCutout, setWCDiffDustyLuzMasteryLoleYCutout] = useState(0);
const totalWCDiffDustyLuzMasteryLoleYCutout = Math.max (totalDustyLuzMasteryCutout-totalLoleYCutoutWC,0)

const [WCDiffDustyLuzMasteryLoleYMask, setWCDiffDustyLuzMasteryLoleYMask] = useState(0);
const totalWCDiffDustyLuzMasteryLoleYMask = Math.max (totalDustyLuzMasteryMask-totalLoleYMaskWC,0)

const [WCDiffDustyLuzMasteryLoleNCutout, setWCDiffDustyLuzMasteryLoleNCutout] = useState(0);
const totalWCDiffDustyLuzMasteryLoleNCutout = Math.max (totalDustyLuzMasteryCutout-totalLoleNCutoutWC,0)

const [WCDiffDustyLuzMasteryLoleNMask, setWCDiffDustyLuzMasteryLoleNMask] = useState(0);
const totalWCDiffDustyLuzMasteryLoleNMask = Math.max (totalDustyLuzMasteryMask-totalLoleNMaskWC,0)

//

const [WCDiffDustyKingMaiMasteryLoleYCutout, setWCDiffDustyKingMaiMasteryLoleYCutout] = useState(0);
const totalWCDiffDustyKingMaiMasteryLoleYCutout = Math.max (totalDustyKingMaiMasteryCutout-totalLoleYCutoutWC,0)

const [WCDiffDustyKingMaiMasteryLoleYMask, setWCDiffDustyKingMaiMasteryLoleYMask] = useState(0);
const totalWCDiffDustyKingMaiMasteryLoleYMask = Math.max (totalDustyKingMaiMasteryMask-totalLoleYMaskWC,0)

const [WCDiffDustyKingMaiMasteryLoleNCutout, setWCDiffDustyKingMaiMasteryLoleNCutout] = useState(0);
const totalWCDiffDustyKingMaiMasteryLoleNCutout = Math.max (totalDustyKingMaiMasteryCutout-totalLoleNCutoutWC,0)

const [WCDiffDustyKingMaiMasteryLoleNMask, setWCDiffDustyKingMaiMasteryLoleNMask] = useState(0);
const totalWCDiffDustyKingMaiMasteryLoleNMask = Math.max (totalDustyKingMaiMasteryMask-totalLoleNMaskWC,0)

//DONT DELETE THIS I USE IT//

const [fakeZero, SetFakeZero] = useState(0);
const totalFakeZero = (0+0)

//CALCULATOR //
  
const [attackStat, setAttackStat] = useState(0); // Or any other non-zero value

  
  const handleAttackStatChange = (valueString) => {
    const value = parseFloat(valueString); 
      setAttackStat(value);
  };



  //ALL MONSTERS - POTION STAT ADJUSTMENT//
  const totalLoleYCutoutWCResult = Math.round (totalLoleYCutoutWC / ((attackStat/100) + 1))  
  const totalLoleYMaskWCResult = Math.round (totalLoleYMaskWC / ((attackStat/100) + 1))

  const totalLoleNCutoutWCResult = Math.round (totalLoleNCutoutWC / ((attackStat/100) + 1))
  const totalLoleNMaskWCResult = Math.round (totalLoleNMaskWC / ((attackStat/100) + 1))

  //TESVEN COIN + TOTAL WCs
  const totalTesvenCoinsWCCutoutResult = Math.round (totalTesvenKuikasWCLoleBothCutout / ((attackStat/100) +1))
  const totalTesvenCoinsWCMaskResult = Math.round (totalTesvenKuikasWCLoleBothMask / ((attackStat/100) +1))

  const totalTesvenWCLoleYCutoutResult = Math.round (totalTesvenTotalWCLoleYCutout / ((attackStat/100) +1))
  const totalTesvenWCLoleNCutoutResult = Math.round (totalTesvenTotalWCLoleNCutout / ((attackStat/100) +1))

  const totalTesvenWCLoleYMaskResult = Math.round (totalTesvenTotalWCLoleYMask / ((attackStat/100) +1))
  const totalTesvenWCLoleNMaskResult = Math.round (totalTesvenTotalWCLoleNMask / ((attackStat/100) +1))

  //AZADI COIN + TOTAL WCs
  const totalAzadiCoinsWCCutoutResult = Math.round (totalAzadiKuikasWCLoleBothCutout / ((attackStat/100) +1))
  const totalAzadiCoinsWCMaskResult = Math.round (totalAzadiKuikasWCLoleBothMask / ((attackStat/100) +1))

  const totalAzadiWCLoleYCutoutResult = Math.round (totalAzadiTotalWCLoleYCutout / ((attackStat/100) +1))
  const totalAzadiWCLoleNCutoutResult = Math.round (totalAzadiTotalWCLoleNCutout / ((attackStat/100) +1))

  const totalAzadiWCLoleYMaskResult = Math.round (totalAzadiTotalWCLoleYMask / ((attackStat/100) +1))
  const totalAzadiWCLoleNMaskResult = Math.round (totalAzadiTotalWCLoleNMask / ((attackStat/100) +1))


  //DUST SUWO COIN + TOTAL WCs
  const totalDustSuwoCoinsWCCutoutResult = Math.round (totalDustSuwoKuikasWCLoleBothCutout / ((attackStat/100) +1))
  const totalDustSuwoCoinsWCMaskResult = Math.round (totalDustSuwoKuikasWCLoleBothMask / ((attackStat/100) +1))

  const totalDustSuwoWCLoleYCutoutResult = Math.round (totalDustSuwoTotalWCLoleYCutout / ((attackStat/100) +1))
  const totalDustSuwoWCLoleNCutoutResult = Math.round (totalDustSuwoTotalWCLoleNCutout / ((attackStat/100) +1))

  const totalDustSuwoWCLoleYMaskResult = Math.round (totalDustSuwoTotalWCLoleYMask / ((attackStat/100) +1))
  const totalDustSuwoWCLoleNMaskResult = Math.round (totalDustSuwoTotalWCLoleNMask / ((attackStat/100) +1))


    //SUWO COIN + TOTAL WCs
    const totalSuwoCoinsWCCutoutResult = Math.round (totalSuwoKuikasWCLoleBothCutout / ((attackStat/100) +1))
    const totalSuwoCoinsWCMaskResult = Math.round (totalSuwoKuikasWCLoleBothMask / ((attackStat/100) +1))
  
    const totalSuwoWCLoleYCutoutResult = Math.round (totalSuwoTotalWCLoleYCutout / ((attackStat/100) +1))
    const totalSuwoWCLoleNCutoutResult = Math.round (totalSuwoTotalWCLoleNCutout / ((attackStat/100) +1))
  
    const totalSuwoWCLoleYMaskResult = Math.round (totalSuwoTotalWCLoleYMask / ((attackStat/100) +1))
    const totalSuwoWCLoleNMaskResult = Math.round (totalSuwoTotalWCLoleNMask / ((attackStat/100) +1))
  


  //DARK REFLECTION COIN + TOTAL WCs
  const totalDarkReflectionCoinsWCCutoutResult = Math.round (totalDarkReflectionKuikasWCLoleBothCutout / ((attackStat/100) +1))
  const totalDarkReflectionCoinsWCMaskResult = Math.round (totalDarkReflectionKuikasWCLoleBothMask / ((attackStat/100) +1))

  const totalDarkReflectionWCLoleYCutoutResult = Math.round (totalDarkReflectionTotalWCLoleYCutout / ((attackStat/100) +1))
  const totalDarkReflectionWCLoleNCutoutResult = Math.round (totalDarkReflectionTotalWCLoleNCutout / ((attackStat/100) +1))

  const totalDarkReflectionWCLoleYMaskResult = Math.round (totalDarkReflectionTotalWCLoleYMask / ((attackStat/100) +1))
  const totalDarkReflectionWCLoleNMaskResult = Math.round (totalDarkReflectionTotalWCLoleNMask / ((attackStat/100) +1))


  //CARAVAN COIN + TOTAL WCs
  const totalCaravanCoinsWCCutoutResult = Math.round (totalCaravanKuikasWCLoleBothCutout / ((attackStat/100) +1))
  const totalCaravanCoinsWCMaskResult = Math.round (totalCaravanKuikasWCLoleBothMask / ((attackStat/100) +1))

  const totalCaravanWCLoleYCutoutResult = Math.round (totalCaravanTotalWCLoleYCutout / ((attackStat/100) +1))
  const totalCaravanWCLoleNCutoutResult = Math.round (totalCaravanTotalWCLoleNCutout / ((attackStat/100) +1))

  const totalCaravanWCLoleYMaskResult = Math.round (totalCaravanTotalWCLoleYMask / ((attackStat/100) +1))
  const totalCaravanWCLoleNMaskResult = Math.round (totalCaravanTotalWCLoleNMask / ((attackStat/100) +1))


  //KULTALVA COIN + TOTAL WCs
  const totalKultalvaCoinsWCCutoutResult = Math.round (totalKultalvaKuikasWCLoleBothCutout / ((attackStat/100) +1))
  const totalKultalvaCoinsWCMaskResult = Math.round (totalKultalvaKuikasWCLoleBothMask / ((attackStat/100) +1))

  const totalKultalvaWCLoleYCutoutResult = Math.round (totalKultalvaTotalWCLoleYCutout / ((attackStat/100) +1))
  const totalKultalvaWCLoleNCutoutResult = Math.round (totalKultalvaTotalWCLoleNCutout / ((attackStat/100) +1))

  const totalKultalvaWCLoleYMaskResult = Math.round (totalKultalvaTotalWCLoleYMask / ((attackStat/100) +1))
  const totalKultalvaWCLoleNMaskResult = Math.round (totalKultalvaTotalWCLoleNMask / ((attackStat/100) +1))


  //RIVER GODDESS  COIN + TOTAL WCs
  const totalRiverGoddessCoinsWCCutoutResult = Math.round (totalRiverGoddessKuikasWCLoleBothCutout / ((attackStat/100) +1))
  const totalRiverGoddessCoinsWCMaskResult = Math.round (totalRiverGoddessKuikasWCLoleBothMask / ((attackStat/100) +1))

  const totalRiverGoddessWCLoleYCutoutResult = Math.round (totalRiverGoddessTotalWCLoleYCutout / ((attackStat/100) +1))
  const totalRiverGoddessWCLoleNCutoutResult = Math.round (totalRiverGoddessTotalWCLoleNCutout / ((attackStat/100) +1))

  const totalRiverGoddessWCLoleYMaskResult = Math.round (totalRiverGoddessTotalWCLoleYMask / ((attackStat/100) +1))
  const totalRiverGoddessWCLoleNMaskResult = Math.round (totalRiverGoddessTotalWCLoleNMask / ((attackStat/100) +1))

  //VELSOUN  COIN + TOTAL WCs
  const totalVelsounCoinsWCCutoutResult = Math.round (totalVelsounKuikasWCLoleBothCutout / ((attackStat/100) +1))
  const totalVelsounCoinsWCMaskResult = Math.round (totalVelsounKuikasWCLoleBothMask / ((attackStat/100) +1))


  //ALPHA TAMBO  COIN + TOTAL WCs
  const totalAlphaTamboCoinsWCCutoutResult = Math.round (totalAlphaTamboKuikasWCLoleBothCutout / ((attackStat/100) +1))
  const totalAlphaTamboCoinsWCMaskResult = Math.round (totalAlphaTamboKuikasWCLoleBothMask / ((attackStat/100) +1))

  //RAKSTAL  COIN + TOTAL WCs
  const totalRakstalCoinsWCCutoutResult = Math.round (totalRakstalKuikasWCLoleBothCutout / ((attackStat/100) +1))
  const totalRakstalCoinsWCMaskResult = Math.round (totalRakstalKuikasWCLoleBothMask / ((attackStat/100) +1))

  //TAREIT  COIN + TOTAL WCs
  const totalTareitCoinsWCCutoutResult = Math.round (totalTareitKuikasWCLoleBothCutout / ((attackStat/100) +1))
  const totalTareitCoinsWCMaskResult = Math.round (totalTareitKuikasWCLoleBothMask / ((attackStat/100) +1))

  const totalTareitWCLoleYCutoutResult = Math.round (totalTareitTotalWCLoleYCutout / ((attackStat/100) +1))
  const totalTareitWCLoleNCutoutResult = Math.round (totalTareitTotalWCLoleNCutout / ((attackStat/100) +1))

  const totalTareitWCLoleYMaskResult = Math.round (totalTareitTotalWCLoleYMask / ((attackStat/100) +1))
  const totalTareitWCLoleNMaskResult = Math.round (totalTareitTotalWCLoleNMask / ((attackStat/100) +1))

  //BABU  COIN + TOTAL WCs
  const totalBabuCoinsWCCutoutResult = Math.round (totalBabuKuikasWCLoleBothCutout / ((attackStat/100) +1))
  const totalBabuCoinsWCMaskResult = Math.round (totalBabuKuikasWCLoleBothMask / ((attackStat/100) +1))

  const totalBabuWCLoleYCutoutResult = Math.round (totalBabuTotalWCLoleYCutout / ((attackStat/100) +1))
  const totalBabuWCLoleNCutoutResult = Math.round (totalBabuTotalWCLoleNCutout / ((attackStat/100) +1))

  const totalBabuWCLoleYMaskResult = Math.round (totalBabuTotalWCLoleYMask / ((attackStat/100) +1))
  const totalBabuWCLoleNMaskResult = Math.round (totalBabuTotalWCLoleNMask / ((attackStat/100) +1))

  //MICLAN  COIN + TOTAL WCs
  const totalMiclanCoinsWCCutoutResult = Math.round (totalMiclanKuikasWCLoleBothCutout / ((attackStat/100) +1))
  const totalMiclanCoinsWCMaskResult = Math.round (totalMiclanKuikasWCLoleBothMask / ((attackStat/100) +1))

  const totalMiclanWCLoleYCutoutResult = Math.round (totalMiclanTotalWCLoleYCutout / ((attackStat/100) +1))
  const totalMiclanWCLoleNCutoutResult = Math.round (totalMiclanTotalWCLoleNCutout / ((attackStat/100) +1))

  const totalMiclanWCLoleYMaskResult = Math.round (totalMiclanTotalWCLoleYMask / ((attackStat/100) +1))
  const totalMiclanWCLoleNMaskResult = Math.round (totalMiclanTotalWCLoleNMask / ((attackStat/100) +1))


  //SHAMAN LUZIA  COIN + TOTAL WCs
  const totalShamanLuziaCoinsWCCutoutResult = Math.round (totalShamanLuziaKuikasWCLoleBothCutout / ((attackStat/100) +1))
  const totalShamanLuziaCoinsWCMaskResult = Math.round (totalShamanLuziaKuikasWCLoleBothMask / ((attackStat/100) +1))

  const totalShamanLuziaWCLoleYCutoutResult = Math.round (totalShamanLuziaTotalWCLoleYCutout / ((attackStat/100) +1))
  const totalShamanLuziaWCLoleNCutoutResult = Math.round (totalShamanLuziaTotalWCLoleNCutout / ((attackStat/100) +1))

  const totalShamanLuziaWCLoleYMaskResult = Math.round (totalShamanLuziaTotalWCLoleYMask / ((attackStat/100) +1))
  const totalShamanLuziaWCLoleNMaskResult = Math.round (totalShamanLuziaTotalWCLoleNMask / ((attackStat/100) +1))

  //KING MAI  COIN + TOTAL WCs
  const totalKingMaiCoinsWCCutoutResult = Math.round (totalKingMaiKuikasWCLoleBothCutout / ((attackStat/100) +1))
  const totalKingMaiCoinsWCMaskResult = Math.round (totalKingMaiKuikasWCLoleBothMask / ((attackStat/100) +1))

  const totalKingMaiWCLoleYCutoutResult = Math.round (totalKingMaiTotalWCLoleYCutout / ((attackStat/100) +1))
  const totalKingMaiWCLoleNCutoutResult = Math.round (totalKingMaiTotalWCLoleNCutout / ((attackStat/100) +1))

  const totalKingMaiWCLoleYMaskResult = Math.round (totalKingMaiTotalWCLoleYMask / ((attackStat/100) +1))
  const totalKingMaiWCLoleNMaskResult = Math.round (totalKingMaiTotalWCLoleNMask / ((attackStat/100) +1))

  //DUSTED LUZIA  COIN + TOTAL WCs
  const totalDustedLuziaCoinsWCCutoutResult = Math.round (totalDustedLuziaKuikasWCLoleBothCutout / ((attackStat/100) +1))
  const totalDustedLuziaCoinsWCMaskResult = Math.round (totalDustedLuziaKuikasWCLoleBothMask / ((attackStat/100) +1))

  const totalDustedLuziaWCLoleYCutoutResult = Math.round (totalDustedLuziaTotalWCLoleYCutout / ((attackStat/100) +1))
  const totalDustedLuziaWCLoleNCutoutResult = Math.round (totalDustedLuziaTotalWCLoleNCutout / ((attackStat/100) +1))

  const totalDustedLuziaWCLoleYMaskResult = Math.round (totalDustedLuziaTotalWCLoleYMask / ((attackStat/100) +1))
  const totalDustedLuziaWCLoleNMaskResult = Math.round (totalDustedLuziaTotalWCLoleNMask / ((attackStat/100) +1))

  const totalDustedLuziaScofinWCCutoutResult = Math.round (totalDustedLuziaScofinWCCutout / ((attackStat/100) +1))
  const totalDustedLuziaScofinWCMaskResult = Math.round (totalDustedLuziaScofinWCMask / ((attackStat/100) +1))



  //DUSTED LUZIA CUTOUT STAT ADJUSTMENT//
  const totalCutoutDLBattleWCResult = Math.round (totalBattleWCCutoutDL / ((attackStat/100) +1))

  const totalLoleYCutoutDLCoinsWCResult = Math.round (totalWCDustedLuziaCutoutLoleYCoins / ((attackStat/100) + 1))
  const totalLoleNCutoutDLCoinsWCResult = Math.round (totalWCDustedLuziaCutoutLoleNCoins / ((attackStat/100) + 1))
  const totalLoleBothCutoutDLCoinsCoinsWCResult = Math.round (totalKuikasCoinsWCCutoutDL / ((attackStat/100) + 1))


  const totalLoleYCutoutDLComboWCResult = Math.round (totalWCDustedLuziaCutoutLoleYCombo / ((attackStat/100) + 1))
  const totalLoleBothComboDLCoinsWCResult = Math.round (totalLoleBothComboDLCoinsWC / ((attackStat / 100) +1))
  const totalLoleNCutoutDLComboWCResult = Math.round (totalWCDustedLuziaCutoutLoleNCombo / ((attackStat/100) + 1))
  const totalLoleBothComboDLBattleCostWCResult = Math.round (totalJesoWCCutoutDL / ((attackStat/100) + 1))


  const totalLoleYCutoutDLBattleWCResult = Math.round (totalWCDustedLuziaCutoutLoleYBattle / ((attackStat/100) + 1))
  const totalLoleNCutoutDLBattleWCResult = Math.round (totalWCDustedLuziaCutoutLoleNBattle / ((attackStat/100) + 1))
  const totalLoleBothCutoutDLBattleCoinWCResult = Math.round (totalKuikasWCBattleCutoutDL / ((attackStat/100)+ 1))

  //DUSTED LUZIA MASK STAT ADJUSTMENT//
  const totalMaskDLBattleWCResult = Math.round (totalBattleWCMaskDL / ((attackStat/100) +1))

  const totalLoleYMaskDLCoinsWCResult = Math.round (totalWCDustedLuziaMaskLoleYCoins / ((attackStat/100) + 1))
  const totalLoleNMaskDLCoinsWCResult = Math.round (totalWCDustedLuziaMaskLoleNCoins / ((attackStat/100) + 1))
  const totalLoleBothMaskDLCoinsCoinsWCResult = Math.round (totalKuikasCoinsWCMaskDL / ((attackStat/100) + 1))


  const totalLoleYMaskDLComboWCResult = Math.round (totalWCDustedLuziaMaskLoleYCombo / ((attackStat/100) + 1))
  const totalLoleBothMaskComboDLCoinsWCResult = Math.round (totalLoleBothComboMaskDLCoinsWC / ((attackStat / 100) +1))
  const totalLoleNMaskDLComboWCResult = Math.round (totalWCDustedLuziaMaskLoleNCombo / ((attackStat/100) + 1))
  const totalLoleBothMaskComboDLBattleCostWCResult = Math.round (totalJesoWCMaskDL / ((attackStat/100) + 1))


  const totalLoleYMaskDLBattleWCResult = Math.round (totalWCDustedLuziaMaskLoleYBattle / ((attackStat/100) + 1))
  const totalLoleNMaskDLBattleWCResult = Math.round (totalWCDustedLuziaMaskLoleNBattle / ((attackStat/100) + 1))
  const totalLoleBothMaskDLBattleCoinWCResult = Math.round (totalKuikasWCBattleMaskDL / ((attackStat/100)+ 1))


  
  //DUSTY KING MAI  COIN + TOTAL WCs
  const totalDustyKingMaiCoinsWCCutoutResult = Math.round (totalDustyKingMaiKuikasWCLoleBothCutout / ((attackStat/100) +1))
  const totalDustyKingMaiCoinsWCMaskResult = Math.round (totalDustyKingMaiKuikasWCLoleBothMask / ((attackStat/100) +1))

  const totalDustyKingMaiWCLoleYCutoutResult = Math.round (totalDustyKingMaiTotalWCLoleYCutout / ((attackStat/100) +1))
  const totalDustyKingMaiWCLoleNCutoutResult = Math.round (totalDustyKingMaiTotalWCLoleNCutout / ((attackStat/100) +1))

  const totalDustyKingMaiWCLoleYMaskResult = Math.round (totalDustyKingMaiTotalWCLoleYMask / ((attackStat/100) +1))
  const totalDustyKingMaiWCLoleNMaskResult = Math.round (totalDustyKingMaiTotalWCLoleNMask / ((attackStat/100) +1))


//Blast POTIONS


  const id = useId();

  const [input, setInput] = useState(null)

  const MyComponent = props => {
    const [input, setInput] = useState(props || '')
    return (
      {input}
    )
  }


  const [MonsterWC, setMonsterWC] = useState(0); // Or any other non-zero value

  
  const handleMonsterWCChange = (valueString) => {
    const value = parseFloat(valueString); 
      setMonsterWC(value);
  };

  const idWC = useId();

  const [inputWC, setInputWC] = useState(null)

  const MyComponentWC = props => {
    const [inputWC, setInputWC] = useState(props || '')
    return (
      {inputWC}
    )
  }

  
  const [MasteryMonsterQtyPerPotion, setMasteryMonsterQtyPerPotion] = useState(0);
  const totalMasteryMonsterQtyPerPotion = Math.max (1000/inputWC, 0)
  

//lole yes - cutout + mask

  const [MasteryMonsterLoleYCutoutPotionsNeeded, setMasteryMonsterLoleYCutoutPotionsNeeded] = useState(0);
  const totalMasteryMonsterLoleYCutoutPotionsNeeded = Math.ceil (totalMasteryMonsterCutout/totalMasteryMonsterQtyPerPotion)

  const [MasteryMonsterLoleYCutoutResourcesNeeded, setMasteryMonsterLoleYCutoutResourcesNeeded] = useState(0);
  const totalMasteryMonsterLoleYCutoutResourcesNeeded = Math.max (totalMasteryMonsterLoleYCutoutPotionsNeeded*20)

  const [MasteryMonsterLoleYCutoutCoinsNeeded, setMasteryMonsterLoleYCutoutCoinsNeeded] = useState(0);
  const totalMasteryMonsterLoleYCutoutCoinsNeeded = Math.max (totalMasteryMonsterLoleYCutoutPotionsNeeded*375)

  const [MasteryMonsterLoleYMaskPotionsNeeded, setMasteryMonsterLoleYMaskPotionsNeeded] = useState(0);
  const totalMasteryMonsterLoleYMaskPotionsNeeded = Math.ceil (totalMasteryMonsterMask/totalMasteryMonsterQtyPerPotion)

  const [MasteryMonsterLoleYMaskResourcesNeeded, setMasteryMonsterLoleYMaskResourcesNeeded] = useState(0);
  const totalMasteryMonsterLoleYMaskResourcesNeeded = Math.max (totalMasteryMonsterLoleYMaskPotionsNeeded*20)

  const [MasteryMonsterLoleYMaskCoinsNeeded, setMasteryMonsterLoleYMaskCoinsNeeded] = useState(0);
  const totalMasteryMonsterLoleYMaskCoinsNeeded = Math.max (totalMasteryMonsterLoleYMaskPotionsNeeded*375)

  const [MasteryMonsterLoleYStatuePotionsNeeded, setMasteryMonsterLoleYStatuePotionsNeeded] = useState(0);
  const totalMasteryMonsterLoleYStatuePotionsNeeded = Math.ceil (totalMasteryMonsterStatue/totalMasteryMonsterQtyPerPotion)

  const [MasteryMonsterLoleYStatueResourcesNeeded, setMasteryMonsterLoleYStatueResourcesNeeded] = useState(0);
  const totalMasteryMonsterLoleYStatueResourcesNeeded = Math.max (totalMasteryMonsterLoleYStatuePotionsNeeded*20)

  const [MasteryMonsterLoleYStatueCoinsNeeded, setMasteryMonsterLoleYStatueCoinsNeeded] = useState(0);
  const totalMasteryMonsterLoleYStatueCoinsNeeded = Math.max (totalMasteryMonsterLoleYStatuePotionsNeeded*375)

  const [MasteryMonsterLoleYBalloonPotionsNeeded, setMasteryMonsterLoleYBalloonPotionsNeeded] = useState(0);
  const totalMasteryMonsterLoleYBalloonPotionsNeeded = Math.ceil (totalMasteryMonsterBalloon/totalMasteryMonsterQtyPerPotion)

  const [MasteryMonsterLoleYBalloonResourcesNeeded, setMasteryMonsterLoleYBalloonResourcesNeeded] = useState(0);
  const totalMasteryMonsterLoleYBalloonResourcesNeeded = Math.max (totalMasteryMonsterLoleYBalloonPotionsNeeded*20)

  const [MasteryMonsterLoleYBalloonCoinsNeeded, setMasteryMonsterLoleYBalloonCoinsNeeded] = useState(0);
  const totalMasteryMonsterLoleYBalloonCoinsNeeded = Math.max (totalMasteryMonsterLoleYBalloonPotionsNeeded*375)

  const [MasteryMonsterLoleYBookPotionsNeeded, setMasteryMonsterLoleYBookPotionsNeeded] = useState(0);
  const totalMasteryMonsterLoleYBookPotionsNeeded = Math.ceil (totalMasteryMonsterBook/totalMasteryMonsterQtyPerPotion)

  const [MasteryMonsterLoleYBookResourcesNeeded, setMasteryMonsterLoleYBookResourcesNeeded] = useState(0);
  const totalMasteryMonsterLoleYBookResourcesNeeded = Math.max (totalMasteryMonsterLoleYBookPotionsNeeded*20)

  const [MasteryMonsterLoleYBookCoinsNeeded, setMasteryMonsterLoleYBookCoinsNeeded] = useState(0);
  const totalMasteryMonsterLoleYBookCoinsNeeded = Math.max (totalMasteryMonsterLoleYBookPotionsNeeded*375)



  //lole no - cutout + mask

  const [MasteryMonsterLoleNCutoutPotionsNeeded, setMasteryMonsterLoleNCutoutPotionsNeeded] = useState(0);
  const totalMasteryMonsterLoleNCutoutPotionsNeeded = Math.ceil (totalMasteryMonsterCutout/totalMasteryMonsterQtyPerPotion)

  const [MasteryMonsterLoleNCutoutResourcesNeeded, setMasteryMonsterLoleNCutoutResourcesNeeded] = useState(0);
  const totalMasteryMonsterLoleNCutoutResourcesNeeded = Math.max (totalMasteryMonsterLoleNCutoutPotionsNeeded*26)

  const [MasteryMonsterLoleNCutoutCoinsNeeded, setMasteryMonsterLoleNCutoutCoinsNeeded] = useState(0);
  const totalMasteryMonsterLoleNCutoutCoinsNeeded = Math.max (totalMasteryMonsterLoleNCutoutPotionsNeeded*375)

  const [MasteryMonsterLoleNMaskPotionsNeeded, setMasteryMonsterLoleNMaskPotionsNeeded] = useState(0);
  const totalMasteryMonsterLoleNMaskPotionsNeeded = Math.ceil (totalMasteryMonsterMask/totalMasteryMonsterQtyPerPotion)

  const [MasteryMonsterLoleNMaskResourcesNeeded, setMasteryMonsterLoleNMaskResourcesNeeded] = useState(0);
  const totalMasteryMonsterLoleNMaskResourcesNeeded = Math.max (totalMasteryMonsterLoleNMaskPotionsNeeded*26)

  const [MasteryMonsterLoleNMaskCoinsNeeded, setMasteryMonsterLoleNMaskCoinsNeeded] = useState(0);
  const totalMasteryMonsterLoleNMaskCoinsNeeded = Math.max (totalMasteryMonsterLoleNMaskPotionsNeeded*375)

  const [MasteryMonsterLoleNStatuePotionsNeeded, setMasteryMonsterLoleNStatuePotionsNeeded] = useState(0);
  const totalMasteryMonsterLoleNStatuePotionsNeeded = Math.ceil (totalMasteryMonsterStatue/totalMasteryMonsterQtyPerPotion)

  const [MasteryMonsterLoleNStatueResourcesNeeded, setMasteryMonsterLoleNStatueResourcesNeeded] = useState(0);
  const totalMasteryMonsterLoleNStatueResourcesNeeded = Math.max (totalMasteryMonsterLoleNStatuePotionsNeeded*26)

  const [MasteryMonsterLoleNStatueCoinsNeeded, setMasteryMonsterLoleNStatueCoinsNeeded] = useState(0);
  const totalMasteryMonsterLoleNStatueCoinsNeeded = Math.max (totalMasteryMonsterLoleNStatuePotionsNeeded*375)

  const [MasteryMonsterLoleNBalloonPotionsNeeded, setMasteryMonsterLoleNBalloonPotionsNeeded] = useState(0);
  const totalMasteryMonsterLoleNBalloonPotionsNeeded = Math.ceil (totalMasteryMonsterBalloon/totalMasteryMonsterQtyPerPotion)

  const [MasteryMonsterLoleNBalloonResourcesNeeded, setMasteryMonsterLoleNBalloonResourcesNeeded] = useState(0);
  const totalMasteryMonsterLoleNBalloonResourcesNeeded = Math.max (totalMasteryMonsterLoleNBalloonPotionsNeeded*26)

  const [MasteryMonsterLoleNBalloonCoinsNeeded, setMasteryMonsterLoleNBalloonCoinsNeeded] = useState(0);
  const totalMasteryMonsterLoleNBalloonCoinsNeeded = Math.max (totalMasteryMonsterLoleNBalloonPotionsNeeded*375)

  const [MasteryMonsterLoleNBookPotionsNeeded, setMasteryMonsterLoleNBookPotionsNeeded] = useState(0);
  const totalMasteryMonsterLoleNBookPotionsNeeded = Math.ceil (totalMasteryMonsterBook/totalMasteryMonsterQtyPerPotion)

  const [MasteryMonsterLoleNBookResourcesNeeded, setMasteryMonsterLoleNBookResourcesNeeded] = useState(0);
  const totalMasteryMonsterLoleNBookResourcesNeeded = Math.max (totalMasteryMonsterLoleNBookPotionsNeeded*26)

  const [MasteryMonsterLoleNBookCoinsNeeded, setMasteryMonsterLoleNBookCoinsNeeded] = useState(0);
  const totalMasteryMonsterLoleNBookCoinsNeeded = Math.max (totalMasteryMonsterLoleNBookPotionsNeeded*375)



  
//WC//

//Blast potion calc


const [MasteryMonsterLoleYCutout_OdeeTen, setMasteryMonsterLoleYCutout_OdeeTen] = useState(0);
const totalMasteryMonsterLoleYCutout_OdeeTen = Math.min (totalMasteryMonsterLoleYCutoutResourcesNeeded-Odees, 10000-Odees)

const [MasteryMonsterLoleYCutout_OdeeOverflow, setMasteryMonsterLoleYCutout_OdeeOverflow] = useState(0);
const totalMasteryMonsterLoleYCutout_OdeeOverflow = Math.max (totalMasteryMonsterLoleYCutoutResourcesNeeded-totalMasteryMonsterLoleYCutout_OdeeTen)

const [MasteryMonsterLoleYCutout_MusyaTen, setMasteryMonsterLoleYCutout_MusyaTen] = useState(0);
const totalMasteryMonsterLoleYCutout_MusyaTen = Math.min (totalMasteryMonsterLoleYCutout_OdeeOverflow-Musya, 10000-Musya)

const [MasteryMonsterLoleYCutout_MusyaOverflow, setMasteryMonsterLoleYCutout_MusyaOverflow] = useState(0);
const totalMasteryMonsterLoleYCutout_MusyaOverflow = Math.min (totalMasteryMonsterLoleYCutout_OdeeOverflow-totalMasteryMonsterLoleYCutout_MusyaTen)

const [MasteryMonsterLoleYCutout_MusyaDisplay, setMasteryMonsterLoleYCutout_MusyaDisplay] = useState(0);
const totalMasteryMonsterLoleYCutout_MusyaDisplay = Math.max (totalMasteryMonsterLoleYCutout_MusyaTen,0)

const [MasteryMonsterLoleYCutout_QuarukTen, setMasteryMonsterLoleYCutout_QuarukTen] = useState(0);
const totalMasteryMonsterLoleYCutout_QuarukTen = Math.min (totalMasteryMonsterLoleYCutout_MusyaOverflow-Quaruk, 10000-Quaruk)

const [MasteryMonsterLoleYCutout_QuarukOverflow, setMasteryMonsterLoleYCutout_QuarukOverflow] = useState(0);
const totalMasteryMonsterLoleYCutout_QuarukOverflow = Math.min (totalMasteryMonsterLoleYCutout_MusyaOverflow-totalMasteryMonsterLoleYCutout_QuarukTen)

const [MasteryMonsterLoleYCutout_QuarukDisplay, setMasteryMonsterLoleYCutout_QuarukDisplay] = useState(0);
const totalMasteryMonsterLoleYCutout_QuarukDisplay = Math.max (totalMasteryMonsterLoleYCutout_QuarukTen,0)

const [MasteryMonsterLoleYCutout_KnuffTen, setMasteryMonsterLoleYCutout_KnuffTen] = useState(0);
const totalMasteryMonsterLoleYCutout_KnuffTen = Math.min (totalMasteryMonsterLoleYCutout_QuarukOverflow-Knuff, 10000-Knuff)

const [MasteryMonsterLoleYCutout_KnuffOverflow, setMasteryMonsterLoleYCutout_KnuffOverflow] = useState(0);
const totalMasteryMonsterLoleYCutout_KnuffOverflow = Math.min (totalMasteryMonsterLoleYCutout_QuarukOverflow-totalMasteryMonsterLoleYCutout_KnuffTen)

const [MasteryMonsterLoleYCutout_KnuffDisplay, setMasteryMonsterLoleYCutout_KnuffDisplay] = useState(0);
const totalMasteryMonsterLoleYCutout_KnuffDisplay = Math.max (totalMasteryMonsterLoleYCutout_KnuffTen,0)

const [MasteryMonsterLoleYCutout_SopoiTen, setMasteryMonsterLoleYCutout_SopoiTen] = useState(0);
const totalMasteryMonsterLoleYCutout_SopoiTen = Math.min (totalMasteryMonsterLoleYCutout_KnuffOverflow-Sopoi, 10000-Sopoi)

const [MasteryMonsterLoleYCutout_SopoiOverflow, setMasteryMonsterLoleYCutout_SopoiOverflow] = useState(0);
const totalMasteryMonsterLoleYCutout_SopoiOverflow = Math.min (totalMasteryMonsterLoleYCutout_KnuffOverflow-totalMasteryMonsterLoleYCutout_SopoiTen)

const [MasteryMonsterLoleYCutout_SopoiDisplay, setMasteryMonsterLoleYCutout_SopoiDisplay] = useState(0);
const totalMasteryMonsterLoleYCutout_SopoiDisplay = Math.max (totalMasteryMonsterLoleYCutout_SopoiTen,0)

const [MasteryMonsterLoleYCutout_MibloomTen, setMasteryMonsterLoleYCutout_MibloomTen] = useState(0);
const totalMasteryMonsterLoleYCutout_MibloomTen = Math.min (totalMasteryMonsterLoleYCutout_SopoiOverflow-Mibloom, 30000-(Mibloom*3))

const [MasteryMonsterLoleYCutout_ActualMibloomAdjusted, setMasteryMonsterLoleYCutout_ActualMibloomAdjusted] = useState(0);
const totalMasteryMonsterLoleYCutout_ActualMibloomAdjusted = Math.ceil (totalMasteryMonsterLoleYCutout_MibloomTen/3)

const [MasteryMonsterLoleYCutout_MibloomDisplay, setMasteryMonsterLoleYCutout_MibloomDisplay] = useState(0);
const totalMasteryMonsterLoleYCutout_MibloomDisplay = Math.max (totalMasteryMonsterLoleYCutout_ActualMibloomAdjusted,0)

const [MasteryMonsterLoleYCutout_MibloomOverflow, setMasteryMonsterLoleYCutout_MibloomOverflow] = useState(0);
const totalMasteryMonsterLoleYCutout_MibloomOverflow = Math.min (totalMasteryMonsterLoleYCutout_SopoiOverflow-totalMasteryMonsterLoleYCutout_MibloomTen)

const [MasteryMonsterLoleYCutout_KinguzTen, setMasteryMonsterLoleYCutout_KinguzTen] = useState(0);
const totalMasteryMonsterLoleYCutout_KinguzTen = Math.min (totalMasteryMonsterLoleYCutout_MibloomOverflow-Kinguz, 10000-Kinguz)

const [MasteryMonsterLoleYCutout_KinguzOverflow, setMasteryMonsterLoleYCutout_KinguzOverflow] = useState(0);
const totalMasteryMonsterLoleYCutout_KinguzOverflow = Math.min (totalMasteryMonsterLoleYCutout_MibloomOverflow-totalMasteryMonsterLoleYCutout_KinguzTen)

const [MasteryMonsterLoleYCutout_KinguzDisplay, setMasteryMonsterLoleYCutout_KinguzDisplay] = useState(0);
const totalMasteryMonsterLoleYCutout_KinguzDisplay = Math.max (totalMasteryMonsterLoleYCutout_KinguzTen,0)


const [MasteryMonsterLoleYCutout_OdeesFinal, setMasteryMonsterLoleYCutout_OdeesFinal] = useState(0);
const totalMasteryMonsterLoleYCutout_OdeesFinal = Math.max (totalMasteryMonsterLoleYCutout_KinguzOverflow+totalMasteryMonsterLoleYCutout_OdeeTen,0)

const [MasteryMonsterLoleYCutout_WC, setMasteryMonsterLoleYCutout_WC] = useState(0);
const totalMasteryMonsterLoleYCutout_WC = Math.max ((totalMasteryMonsterLoleYCutout_OdeesFinal*44)+(totalMasteryMonsterLoleYCutout_QuarukDisplay*50)+
(totalMasteryMonsterLoleYCutout_MusyaDisplay*50)+(totalMasteryMonsterLoleYCutout_KnuffDisplay*60)+(totalMasteryMonsterLoleYCutout_SopoiDisplay*60)
+(totalMasteryMonsterLoleYCutout_MibloomDisplay*150) + (totalMasteryMonsterLoleYCutout_KinguzDisplay*70))

//lole n cutout yes


const [MasteryMonsterLoleNCutout_OdeeTen, setMasteryMonsterLoleNCutout_OdeeTen] = useState(0);
const totalMasteryMonsterLoleNCutout_OdeeTen = Math.min (totalMasteryMonsterLoleNCutoutResourcesNeeded-Odees, 10000-Odees)

const [MasteryMonsterLoleNCutout_OdeeOverflow, setMasteryMonsterLoleNCutout_OdeeOverflow] = useState(0);
const totalMasteryMonsterLoleNCutout_OdeeOverflow = Math.max (totalMasteryMonsterLoleNCutoutResourcesNeeded-totalMasteryMonsterLoleNCutout_OdeeTen)

const [MasteryMonsterLoleNCutout_MusyaTen, setMasteryMonsterLoleNCutout_MusyaTen] = useState(0);
const totalMasteryMonsterLoleNCutout_MusyaTen = Math.min (totalMasteryMonsterLoleNCutout_OdeeOverflow-Musya, 10000-Musya)

const [MasteryMonsterLoleNCutout_MusyaOverflow, setMasteryMonsterLoleNCutout_MusyaOverflow] = useState(0);
const totalMasteryMonsterLoleNCutout_MusyaOverflow = Math.min (totalMasteryMonsterLoleNCutout_OdeeOverflow-totalMasteryMonsterLoleNCutout_MusyaTen)

const [MasteryMonsterLoleNCutout_MusyaDisplay, setMasteryMonsterLoleNCutout_MusyaDisplay] = useState(0);
const totalMasteryMonsterLoleNCutout_MusyaDisplay = Math.max (totalMasteryMonsterLoleNCutout_MusyaTen,0)

const [MasteryMonsterLoleNCutout_QuarukTen, setMasteryMonsterLoleNCutout_QuarukTen] = useState(0);
const totalMasteryMonsterLoleNCutout_QuarukTen = Math.min (totalMasteryMonsterLoleNCutout_MusyaOverflow-Quaruk, 10000-Quaruk)

const [MasteryMonsterLoleNCutout_QuarukOverflow, setMasteryMonsterLoleNCutout_QuarukOverflow] = useState(0);
const totalMasteryMonsterLoleNCutout_QuarukOverflow = Math.min (totalMasteryMonsterLoleNCutout_MusyaOverflow-totalMasteryMonsterLoleNCutout_QuarukTen)

const [MasteryMonsterLoleNCutout_QuarukDisplay, setMasteryMonsterLoleNCutout_QuarukDisplay] = useState(0);
const totalMasteryMonsterLoleNCutout_QuarukDisplay = Math.max (totalMasteryMonsterLoleNCutout_QuarukTen,0)

const [MasteryMonsterLoleNCutout_KnuffTen, setMasteryMonsterLoleNCutout_KnuffTen] = useState(0);
const totalMasteryMonsterLoleNCutout_KnuffTen = Math.min (totalMasteryMonsterLoleNCutout_QuarukOverflow-Knuff, 10000-Knuff)

const [MasteryMonsterLoleNCutout_KnuffOverflow, setMasteryMonsterLoleNCutout_KnuffOverflow] = useState(0);
const totalMasteryMonsterLoleNCutout_KnuffOverflow = Math.min (totalMasteryMonsterLoleNCutout_QuarukOverflow-totalMasteryMonsterLoleNCutout_KnuffTen)

const [MasteryMonsterLoleNCutout_KnuffDisplay, setMasteryMonsterLoleNCutout_KnuffDisplay] = useState(0);
const totalMasteryMonsterLoleNCutout_KnuffDisplay = Math.max (totalMasteryMonsterLoleNCutout_KnuffTen,0)

const [MasteryMonsterLoleNCutout_SopoiTen, setMasteryMonsterLoleNCutout_SopoiTen] = useState(0);
const totalMasteryMonsterLoleNCutout_SopoiTen = Math.min (totalMasteryMonsterLoleNCutout_KnuffOverflow-Sopoi, 10000-Sopoi)

const [MasteryMonsterLoleNCutout_SopoiOverflow, setMasteryMonsterLoleNCutout_SopoiOverflow] = useState(0);
const totalMasteryMonsterLoleNCutout_SopoiOverflow = Math.min (totalMasteryMonsterLoleNCutout_KnuffOverflow-totalMasteryMonsterLoleNCutout_SopoiTen)

const [MasteryMonsterLoleNCutout_SopoiDisplay, setMasteryMonsterLoleNCutout_SopoiDisplay] = useState(0);
const totalMasteryMonsterLoleNCutout_SopoiDisplay = Math.max (totalMasteryMonsterLoleNCutout_SopoiTen,0)

const [MasteryMonsterLoleNCutout_MibloomTen, setMasteryMonsterLoleNCutout_MibloomTen] = useState(0);
const totalMasteryMonsterLoleNCutout_MibloomTen = Math.min (totalMasteryMonsterLoleNCutout_SopoiOverflow-Mibloom, 30000-(Mibloom*3))

const [MasteryMonsterLoleNCutout_ActualMibloomAdjusted, setMasteryMonsterLoleNCutout_ActualMibloomAdjusted] = useState(0);
const totalMasteryMonsterLoleNCutout_ActualMibloomAdjusted = Math.ceil (totalMasteryMonsterLoleNCutout_MibloomTen/3)

const [MasteryMonsterLoleNCutout_MibloomDisplay, setMasteryMonsterLoleNCutout_MibloomDisplay] = useState(0);
const totalMasteryMonsterLoleNCutout_MibloomDisplay = Math.max (totalMasteryMonsterLoleNCutout_ActualMibloomAdjusted,0)

const [MasteryMonsterLoleNCutout_MibloomOverflow, setMasteryMonsterLoleNCutout_MibloomOverflow] = useState(0);
const totalMasteryMonsterLoleNCutout_MibloomOverflow = Math.min (totalMasteryMonsterLoleNCutout_SopoiOverflow-totalMasteryMonsterLoleNCutout_MibloomTen)

const [MasteryMonsterLoleNCutout_KinguzTen, setMasteryMonsterLoleNCutout_KinguzTen] = useState(0);
const totalMasteryMonsterLoleNCutout_KinguzTen = Math.min (totalMasteryMonsterLoleNCutout_MibloomOverflow-Kinguz, 10000-Kinguz)

const [MasteryMonsterLoleNCutout_KinguzOverflow, setMasteryMonsterLoleNCutout_KinguzOverflow] = useState(0);
const totalMasteryMonsterLoleNCutout_KinguzOverflow = Math.min (totalMasteryMonsterLoleNCutout_MibloomOverflow-totalMasteryMonsterLoleNCutout_KinguzTen)

const [MasteryMonsterLoleNCutout_KinguzDisplay, setMasteryMonsterLoleNCutout_KinguzDisplay] = useState(0);
const totalMasteryMonsterLoleNCutout_KinguzDisplay = Math.max (totalMasteryMonsterLoleNCutout_KinguzTen,0)


const [MasteryMonsterLoleNCutout_OdeesFinal, setMasteryMonsterLoleNCutout_OdeesFinal] = useState(0);
const totalMasteryMonsterLoleNCutout_OdeesFinal = Math.max (totalMasteryMonsterLoleNCutout_KinguzOverflow+totalMasteryMonsterLoleNCutout_OdeeTen,0)

const [MasteryMonsterLoleNCutout_WC, setMasteryMonsterLoleNCutout_WC] = useState(0);
const totalMasteryMonsterLoleNCutout_WC = Math.max ((totalMasteryMonsterLoleNCutout_OdeesFinal*44)+(totalMasteryMonsterLoleNCutout_QuarukDisplay*50)+
(totalMasteryMonsterLoleNCutout_MusyaDisplay*50)+(totalMasteryMonsterLoleNCutout_KnuffDisplay*60)+(totalMasteryMonsterLoleNCutout_SopoiDisplay*60)
+(totalMasteryMonsterLoleNCutout_MibloomDisplay*150) + (totalMasteryMonsterLoleNCutout_KinguzDisplay*70))


//lole y mask

const [MasteryMonsterLoleYMask_OdeeTen, setMasteryMonsterLoleYMask_OdeeTen] = useState(0);
const totalMasteryMonsterLoleYMask_OdeeTen = Math.min (totalMasteryMonsterLoleYMaskResourcesNeeded-Odees, 10000-Odees)

const [MasteryMonsterLoleYMask_OdeeOverflow, setMasteryMonsterLoleYMask_OdeeOverflow] = useState(0);
const totalMasteryMonsterLoleYMask_OdeeOverflow = Math.max (totalMasteryMonsterLoleYMaskResourcesNeeded-totalMasteryMonsterLoleYMask_OdeeTen)

const [MasteryMonsterLoleYMask_MusyaTen, setMasteryMonsterLoleYMask_MusyaTen] = useState(0);
const totalMasteryMonsterLoleYMask_MusyaTen = Math.min (totalMasteryMonsterLoleYMask_OdeeOverflow-Musya, 10000-Musya)

const [MasteryMonsterLoleYMask_MusyaOverflow, setMasteryMonsterLoleYMask_MusyaOverflow] = useState(0);
const totalMasteryMonsterLoleYMask_MusyaOverflow = Math.min (totalMasteryMonsterLoleYMask_OdeeOverflow-totalMasteryMonsterLoleYMask_MusyaTen)

const [MasteryMonsterLoleYMask_MusyaDisplay, setMasteryMonsterLoleYMask_MusyaDisplay] = useState(0);
const totalMasteryMonsterLoleYMask_MusyaDisplay = Math.max (totalMasteryMonsterLoleYMask_MusyaTen,0)

const [MasteryMonsterLoleYMask_QuarukTen, setMasteryMonsterLoleYMask_QuarukTen] = useState(0);
const totalMasteryMonsterLoleYMask_QuarukTen = Math.min (totalMasteryMonsterLoleYMask_MusyaOverflow-Quaruk, 10000-Quaruk)

const [MasteryMonsterLoleYMask_QuarukOverflow, setMasteryMonsterLoleYMask_QuarukOverflow] = useState(0);
const totalMasteryMonsterLoleYMask_QuarukOverflow = Math.min (totalMasteryMonsterLoleYMask_MusyaOverflow-totalMasteryMonsterLoleYMask_QuarukTen)

const [MasteryMonsterLoleYMask_QuarukDisplay, setMasteryMonsterLoleYMask_QuarukDisplay] = useState(0);
const totalMasteryMonsterLoleYMask_QuarukDisplay = Math.max (totalMasteryMonsterLoleYMask_QuarukTen,0)

const [MasteryMonsterLoleYMask_KnuffTen, setMasteryMonsterLoleYMask_KnuffTen] = useState(0);
const totalMasteryMonsterLoleYMask_KnuffTen = Math.min (totalMasteryMonsterLoleYMask_QuarukOverflow-Knuff, 10000-Knuff)

const [MasteryMonsterLoleYMask_KnuffOverflow, setMasteryMonsterLoleYMask_KnuffOverflow] = useState(0);
const totalMasteryMonsterLoleYMask_KnuffOverflow = Math.min (totalMasteryMonsterLoleYMask_QuarukOverflow-totalMasteryMonsterLoleYMask_KnuffTen)

const [MasteryMonsterLoleYMask_KnuffDisplay, setMasteryMonsterLoleYMask_KnuffDisplay] = useState(0);
const totalMasteryMonsterLoleYMask_KnuffDisplay = Math.max (totalMasteryMonsterLoleYMask_KnuffTen,0)

const [MasteryMonsterLoleYMask_SopoiTen, setMasteryMonsterLoleYMask_SopoiTen] = useState(0);
const totalMasteryMonsterLoleYMask_SopoiTen = Math.min (totalMasteryMonsterLoleYMask_KnuffOverflow-Sopoi, 10000-Sopoi)

const [MasteryMonsterLoleYMask_SopoiOverflow, setMasteryMonsterLoleYMask_SopoiOverflow] = useState(0);
const totalMasteryMonsterLoleYMask_SopoiOverflow = Math.min (totalMasteryMonsterLoleYMask_KnuffOverflow-totalMasteryMonsterLoleYMask_SopoiTen)

const [MasteryMonsterLoleYMask_SopoiDisplay, setMasteryMonsterLoleYMask_SopoiDisplay] = useState(0);
const totalMasteryMonsterLoleYMask_SopoiDisplay = Math.max (totalMasteryMonsterLoleYMask_SopoiTen,0)

const [MasteryMonsterLoleYMask_MibloomTen, setMasteryMonsterLoleYMask_MibloomTen] = useState(0);
const totalMasteryMonsterLoleYMask_MibloomTen = Math.min (totalMasteryMonsterLoleYMask_SopoiOverflow-Mibloom, 30000-(Mibloom*3))

const [MasteryMonsterLoleYMask_ActualMibloomAdjusted, setMasteryMonsterLoleYMask_ActualMibloomAdjusted] = useState(0);
const totalMasteryMonsterLoleYMask_ActualMibloomAdjusted = Math.ceil (totalMasteryMonsterLoleYMask_MibloomTen/3)

const [MasteryMonsterLoleYMask_MibloomDisplay, setMasteryMonsterLoleYMask_MibloomDisplay] = useState(0);
const totalMasteryMonsterLoleYMask_MibloomDisplay = Math.max (totalMasteryMonsterLoleYMask_ActualMibloomAdjusted,0)

const [MasteryMonsterLoleYMask_MibloomOverflow, setMasteryMonsterLoleYMask_MibloomOverflow] = useState(0);
const totalMasteryMonsterLoleYMask_MibloomOverflow = Math.min (totalMasteryMonsterLoleYMask_SopoiOverflow-totalMasteryMonsterLoleYMask_MibloomTen)

const [MasteryMonsterLoleYMask_KinguzTen, setMasteryMonsterLoleYMask_KinguzTen] = useState(0);
const totalMasteryMonsterLoleYMask_KinguzTen = Math.min (totalMasteryMonsterLoleYMask_MibloomOverflow-Kinguz, 10000-Kinguz)

const [MasteryMonsterLoleYMask_KinguzOverflow, setMasteryMonsterLoleYMask_KinguzOverflow] = useState(0);
const totalMasteryMonsterLoleYMask_KinguzOverflow = Math.min (totalMasteryMonsterLoleYMask_MibloomOverflow-totalMasteryMonsterLoleYMask_KinguzTen)

const [MasteryMonsterLoleYMask_KinguzDisplay, setMasteryMonsterLoleYMask_KinguzDisplay] = useState(0);
const totalMasteryMonsterLoleYMask_KinguzDisplay = Math.max (totalMasteryMonsterLoleYMask_KinguzTen,0)


const [MasteryMonsterLoleYMask_OdeesFinal, setMasteryMonsterLoleYMask_OdeesFinal] = useState(0);
const totalMasteryMonsterLoleYMask_OdeesFinal = Math.max (totalMasteryMonsterLoleYMask_KinguzOverflow+totalMasteryMonsterLoleYMask_OdeeTen,0)

const [MasteryMonsterLoleYMask_WC, setMasteryMonsterLoleYMask_WC] = useState(0);
const totalMasteryMonsterLoleYMask_WC = Math.max ((totalMasteryMonsterLoleYMask_OdeesFinal*44)+(totalMasteryMonsterLoleYMask_QuarukDisplay*50)+
(totalMasteryMonsterLoleYMask_MusyaDisplay*50)+(totalMasteryMonsterLoleYMask_KnuffDisplay*60)+(totalMasteryMonsterLoleYMask_SopoiDisplay*60)
+(totalMasteryMonsterLoleYMask_MibloomDisplay*150) + (totalMasteryMonsterLoleYMask_KinguzDisplay*70))

//lole n mask


const [MasteryMonsterLoleNMask_OdeeTen, setMasteryMonsterLoleNMask_OdeeTen] = useState(0);
const totalMasteryMonsterLoleNMask_OdeeTen = Math.min (totalMasteryMonsterLoleNMaskResourcesNeeded-Odees, 10000-Odees)

const [MasteryMonsterLoleNMask_OdeeOverflow, setMasteryMonsterLoleNMask_OdeeOverflow] = useState(0);
const totalMasteryMonsterLoleNMask_OdeeOverflow = Math.max (totalMasteryMonsterLoleNMaskResourcesNeeded-totalMasteryMonsterLoleNMask_OdeeTen)

const [MasteryMonsterLoleNMask_MusyaTen, setMasteryMonsterLoleNMask_MusyaTen] = useState(0);
const totalMasteryMonsterLoleNMask_MusyaTen = Math.min (totalMasteryMonsterLoleNMask_OdeeOverflow-Musya, 10000-Musya)

const [MasteryMonsterLoleNMask_MusyaOverflow, setMasteryMonsterLoleNMask_MusyaOverflow] = useState(0);
const totalMasteryMonsterLoleNMask_MusyaOverflow = Math.min (totalMasteryMonsterLoleNMask_OdeeOverflow-totalMasteryMonsterLoleNMask_MusyaTen)

const [MasteryMonsterLoleNMask_MusyaDisplay, setMasteryMonsterLoleNMask_MusyaDisplay] = useState(0);
const totalMasteryMonsterLoleNMask_MusyaDisplay = Math.max (totalMasteryMonsterLoleNMask_MusyaTen,0)

const [MasteryMonsterLoleNMask_QuarukTen, setMasteryMonsterLoleNMask_QuarukTen] = useState(0);
const totalMasteryMonsterLoleNMask_QuarukTen = Math.min (totalMasteryMonsterLoleNMask_MusyaOverflow-Quaruk, 10000-Quaruk)

const [MasteryMonsterLoleNMask_QuarukOverflow, setMasteryMonsterLoleNMask_QuarukOverflow] = useState(0);
const totalMasteryMonsterLoleNMask_QuarukOverflow = Math.min (totalMasteryMonsterLoleNMask_MusyaOverflow-totalMasteryMonsterLoleNMask_QuarukTen)

const [MasteryMonsterLoleNMask_QuarukDisplay, setMasteryMonsterLoleNMask_QuarukDisplay] = useState(0);
const totalMasteryMonsterLoleNMask_QuarukDisplay = Math.max (totalMasteryMonsterLoleNMask_QuarukTen,0)

const [MasteryMonsterLoleNMask_KnuffTen, setMasteryMonsterLoleNMask_KnuffTen] = useState(0);
const totalMasteryMonsterLoleNMask_KnuffTen = Math.min (totalMasteryMonsterLoleNMask_QuarukOverflow-Knuff, 10000-Knuff)

const [MasteryMonsterLoleNMask_KnuffOverflow, setMasteryMonsterLoleNMask_KnuffOverflow] = useState(0);
const totalMasteryMonsterLoleNMask_KnuffOverflow = Math.min (totalMasteryMonsterLoleNMask_QuarukOverflow-totalMasteryMonsterLoleNMask_KnuffTen)

const [MasteryMonsterLoleNMask_KnuffDisplay, setMasteryMonsterLoleNMask_KnuffDisplay] = useState(0);
const totalMasteryMonsterLoleNMask_KnuffDisplay = Math.max (totalMasteryMonsterLoleNMask_KnuffTen,0)

const [MasteryMonsterLoleNMask_SopoiTen, setMasteryMonsterLoleNMask_SopoiTen] = useState(0);
const totalMasteryMonsterLoleNMask_SopoiTen = Math.min (totalMasteryMonsterLoleNMask_KnuffOverflow-Sopoi, 10000-Sopoi)

const [MasteryMonsterLoleNMask_SopoiOverflow, setMasteryMonsterLoleNMask_SopoiOverflow] = useState(0);
const totalMasteryMonsterLoleNMask_SopoiOverflow = Math.min (totalMasteryMonsterLoleNMask_KnuffOverflow-totalMasteryMonsterLoleNMask_SopoiTen)

const [MasteryMonsterLoleNMask_SopoiDisplay, setMasteryMonsterLoleNMask_SopoiDisplay] = useState(0);
const totalMasteryMonsterLoleNMask_SopoiDisplay = Math.max (totalMasteryMonsterLoleNMask_SopoiTen,0)

const [MasteryMonsterLoleNMask_MibloomTen, setMasteryMonsterLoleNMask_MibloomTen] = useState(0);
const totalMasteryMonsterLoleNMask_MibloomTen = Math.min (totalMasteryMonsterLoleNMask_SopoiOverflow-Mibloom, 30000-(Mibloom*3))

const [MasteryMonsterLoleNMask_ActualMibloomAdjusted, setMasteryMonsterLoleNMask_ActualMibloomAdjusted] = useState(0);
const totalMasteryMonsterLoleNMask_ActualMibloomAdjusted = Math.ceil (totalMasteryMonsterLoleNMask_MibloomTen/3)

const [MasteryMonsterLoleNMask_MibloomDisplay, setMasteryMonsterLoleNMask_MibloomDisplay] = useState(0);
const totalMasteryMonsterLoleNMask_MibloomDisplay = Math.max (totalMasteryMonsterLoleNMask_ActualMibloomAdjusted,0)

const [MasteryMonsterLoleNMask_MibloomOverflow, setMasteryMonsterLoleNMask_MibloomOverflow] = useState(0);
const totalMasteryMonsterLoleNMask_MibloomOverflow = Math.min (totalMasteryMonsterLoleNMask_SopoiOverflow-totalMasteryMonsterLoleNMask_MibloomTen)

const [MasteryMonsterLoleNMask_KinguzTen, setMasteryMonsterLoleNMask_KinguzTen] = useState(0);
const totalMasteryMonsterLoleNMask_KinguzTen = Math.min (totalMasteryMonsterLoleNMask_MibloomOverflow-Kinguz, 10000-Kinguz)

const [MasteryMonsterLoleNMask_KinguzOverflow, setMasteryMonsterLoleNMask_KinguzOverflow] = useState(0);
const totalMasteryMonsterLoleNMask_KinguzOverflow = Math.min (totalMasteryMonsterLoleNMask_MibloomOverflow-totalMasteryMonsterLoleNMask_KinguzTen)

const [MasteryMonsterLoleNMask_KinguzDisplay, setMasteryMonsterLoleNMask_KinguzDisplay] = useState(0);
const totalMasteryMonsterLoleNMask_KinguzDisplay = Math.max (totalMasteryMonsterLoleNMask_KinguzTen,0)


const [MasteryMonsterLoleNMask_OdeesFinal, setMasteryMonsterLoleNMask_OdeesFinal] = useState(0);
const totalMasteryMonsterLoleNMask_OdeesFinal = Math.max (totalMasteryMonsterLoleNMask_KinguzOverflow+totalMasteryMonsterLoleNMask_OdeeTen,0)

const [MasteryMonsterLoleNMask_WC, setMasteryMonsterLoleNMask_WC] = useState(0);
const totalMasteryMonsterLoleNMask_WC = Math.max ((totalMasteryMonsterLoleNMask_OdeesFinal*44)+(totalMasteryMonsterLoleNMask_QuarukDisplay*50)+
(totalMasteryMonsterLoleNMask_MusyaDisplay*50)+(totalMasteryMonsterLoleNMask_KnuffDisplay*60)+(totalMasteryMonsterLoleNMask_SopoiDisplay*60)
+(totalMasteryMonsterLoleNMask_MibloomDisplay*150) + (totalMasteryMonsterLoleNMask_KinguzDisplay*70))


//lole y statue

const [MasteryMonsterLoleYStatue_OdeeTen, setMasteryMonsterLoleYStatue_OdeeTen] = useState(0);
const totalMasteryMonsterLoleYStatue_OdeeTen = Math.min (totalMasteryMonsterLoleYStatueResourcesNeeded-Odees, 10000-Odees)

const [MasteryMonsterLoleYStatue_OdeeOverflow, setMasteryMonsterLoleYStatue_OdeeOverflow] = useState(0);
const totalMasteryMonsterLoleYStatue_OdeeOverflow = Math.max (totalMasteryMonsterLoleYStatueResourcesNeeded-totalMasteryMonsterLoleYStatue_OdeeTen)

const [MasteryMonsterLoleYStatue_MusyaTen, setMasteryMonsterLoleYStatue_MusyaTen] = useState(0);
const totalMasteryMonsterLoleYStatue_MusyaTen = Math.min (totalMasteryMonsterLoleYStatue_OdeeOverflow-Musya, 10000-Musya)

const [MasteryMonsterLoleYStatue_MusyaOverflow, setMasteryMonsterLoleYStatue_MusyaOverflow] = useState(0);
const totalMasteryMonsterLoleYStatue_MusyaOverflow = Math.min (totalMasteryMonsterLoleYStatue_OdeeOverflow-totalMasteryMonsterLoleYStatue_MusyaTen)

const [MasteryMonsterLoleYStatue_MusyaDisplay, setMasteryMonsterLoleYStatue_MusyaDisplay] = useState(0);
const totalMasteryMonsterLoleYStatue_MusyaDisplay = Math.max (totalMasteryMonsterLoleYStatue_MusyaTen,0)

const [MasteryMonsterLoleYStatue_QuarukTen, setMasteryMonsterLoleYStatue_QuarukTen] = useState(0);
const totalMasteryMonsterLoleYStatue_QuarukTen = Math.min (totalMasteryMonsterLoleYStatue_MusyaOverflow-Quaruk, 10000-Quaruk)

const [MasteryMonsterLoleYStatue_QuarukOverflow, setMasteryMonsterLoleYStatue_QuarukOverflow] = useState(0);
const totalMasteryMonsterLoleYStatue_QuarukOverflow = Math.min (totalMasteryMonsterLoleYStatue_MusyaOverflow-totalMasteryMonsterLoleYStatue_QuarukTen)

const [MasteryMonsterLoleYStatue_QuarukDisplay, setMasteryMonsterLoleYStatue_QuarukDisplay] = useState(0);
const totalMasteryMonsterLoleYStatue_QuarukDisplay = Math.max (totalMasteryMonsterLoleYStatue_QuarukTen,0)

const [MasteryMonsterLoleYStatue_KnuffTen, setMasteryMonsterLoleYStatue_KnuffTen] = useState(0);
const totalMasteryMonsterLoleYStatue_KnuffTen = Math.min (totalMasteryMonsterLoleYStatue_QuarukOverflow-Knuff, 10000-Knuff)

const [MasteryMonsterLoleYStatue_KnuffOverflow, setMasteryMonsterLoleYStatue_KnuffOverflow] = useState(0);
const totalMasteryMonsterLoleYStatue_KnuffOverflow = Math.min (totalMasteryMonsterLoleYStatue_QuarukOverflow-totalMasteryMonsterLoleYStatue_KnuffTen)

const [MasteryMonsterLoleYStatue_KnuffDisplay, setMasteryMonsterLoleYStatue_KnuffDisplay] = useState(0);
const totalMasteryMonsterLoleYStatue_KnuffDisplay = Math.max (totalMasteryMonsterLoleYStatue_KnuffTen,0)

const [MasteryMonsterLoleYStatue_SopoiTen, setMasteryMonsterLoleYStatue_SopoiTen] = useState(0);
const totalMasteryMonsterLoleYStatue_SopoiTen = Math.min (totalMasteryMonsterLoleYStatue_KnuffOverflow-Sopoi, 10000-Sopoi)

const [MasteryMonsterLoleYStatue_SopoiOverflow, setMasteryMonsterLoleYStatue_SopoiOverflow] = useState(0);
const totalMasteryMonsterLoleYStatue_SopoiOverflow = Math.min (totalMasteryMonsterLoleYStatue_KnuffOverflow-totalMasteryMonsterLoleYStatue_SopoiTen)

const [MasteryMonsterLoleYStatue_SopoiDisplay, setMasteryMonsterLoleYStatue_SopoiDisplay] = useState(0);
const totalMasteryMonsterLoleYStatue_SopoiDisplay = Math.max (totalMasteryMonsterLoleYStatue_SopoiTen,0)

const [MasteryMonsterLoleYStatue_MibloomTen, setMasteryMonsterLoleYStatue_MibloomTen] = useState(0);
const totalMasteryMonsterLoleYStatue_MibloomTen = Math.min (totalMasteryMonsterLoleYStatue_SopoiOverflow-Mibloom, 30000-(Mibloom*3))

const [MasteryMonsterLoleYStatue_ActualMibloomAdjusted, setMasteryMonsterLoleYStatue_ActualMibloomAdjusted] = useState(0);
const totalMasteryMonsterLoleYStatue_ActualMibloomAdjusted = Math.ceil (totalMasteryMonsterLoleYStatue_MibloomTen/3)

const [MasteryMonsterLoleYStatue_MibloomDisplay, setMasteryMonsterLoleYStatue_MibloomDisplay] = useState(0);
const totalMasteryMonsterLoleYStatue_MibloomDisplay = Math.max (totalMasteryMonsterLoleYStatue_ActualMibloomAdjusted,0)

const [MasteryMonsterLoleYStatue_MibloomOverflow, setMasteryMonsterLoleYStatue_MibloomOverflow] = useState(0);
const totalMasteryMonsterLoleYStatue_MibloomOverflow = Math.min (totalMasteryMonsterLoleYStatue_SopoiOverflow-totalMasteryMonsterLoleYStatue_MibloomTen)

const [MasteryMonsterLoleYStatue_KinguzTen, setMasteryMonsterLoleYStatue_KinguzTen] = useState(0);
const totalMasteryMonsterLoleYStatue_KinguzTen = Math.min (totalMasteryMonsterLoleYStatue_MibloomOverflow-Kinguz, 10000-Kinguz)

const [MasteryMonsterLoleYStatue_KinguzOverflow, setMasteryMonsterLoleYStatue_KinguzOverflow] = useState(0);
const totalMasteryMonsterLoleYStatue_KinguzOverflow = Math.min (totalMasteryMonsterLoleYStatue_MibloomOverflow-totalMasteryMonsterLoleYStatue_KinguzTen)

const [MasteryMonsterLoleYStatue_KinguzDisplay, setMasteryMonsterLoleYStatue_KinguzDisplay] = useState(0);
const totalMasteryMonsterLoleYStatue_KinguzDisplay = Math.max (totalMasteryMonsterLoleYStatue_KinguzTen,0)


const [MasteryMonsterLoleYStatue_OdeesFinal, setMasteryMonsterLoleYStatue_OdeesFinal] = useState(0);
const totalMasteryMonsterLoleYStatue_OdeesFinal = Math.max (totalMasteryMonsterLoleYStatue_KinguzOverflow+totalMasteryMonsterLoleYStatue_OdeeTen,0)

const [MasteryMonsterLoleYStatue_WC, setMasteryMonsterLoleYStatue_WC] = useState(0);
const totalMasteryMonsterLoleYStatue_WC = Math.max ((totalMasteryMonsterLoleYStatue_OdeesFinal*44)+(totalMasteryMonsterLoleYStatue_QuarukDisplay*50)+
(totalMasteryMonsterLoleYStatue_MusyaDisplay*50)+(totalMasteryMonsterLoleYStatue_KnuffDisplay*60)+(totalMasteryMonsterLoleYStatue_SopoiDisplay*60)
+(totalMasteryMonsterLoleYStatue_MibloomDisplay*150) + (totalMasteryMonsterLoleYStatue_KinguzDisplay*70))

//lole n statue

const [MasteryMonsterLoleNStatue_OdeeTen, setMasteryMonsterLoleNStatue_OdeeTen] = useState(0);
const totalMasteryMonsterLoleNStatue_OdeeTen = Math.min (totalMasteryMonsterLoleNStatueResourcesNeeded-Odees, 10000-Odees)

const [MasteryMonsterLoleNStatue_OdeeOverflow, setMasteryMonsterLoleNStatue_OdeeOverflow] = useState(0);
const totalMasteryMonsterLoleNStatue_OdeeOverflow = Math.max (totalMasteryMonsterLoleNStatueResourcesNeeded-totalMasteryMonsterLoleNStatue_OdeeTen)

const [MasteryMonsterLoleNStatue_MusyaTen, setMasteryMonsterLoleNStatue_MusyaTen] = useState(0);
const totalMasteryMonsterLoleNStatue_MusyaTen = Math.min (totalMasteryMonsterLoleNStatue_OdeeOverflow-Musya, 10000-Musya)

const [MasteryMonsterLoleNStatue_MusyaOverflow, setMasteryMonsterLoleNStatue_MusyaOverflow] = useState(0);
const totalMasteryMonsterLoleNStatue_MusyaOverflow = Math.min (totalMasteryMonsterLoleNStatue_OdeeOverflow-totalMasteryMonsterLoleNStatue_MusyaTen)

const [MasteryMonsterLoleNStatue_MusyaDisplay, setMasteryMonsterLoleNStatue_MusyaDisplay] = useState(0);
const totalMasteryMonsterLoleNStatue_MusyaDisplay = Math.max (totalMasteryMonsterLoleNStatue_MusyaTen,0)

const [MasteryMonsterLoleNStatue_QuarukTen, setMasteryMonsterLoleNStatue_QuarukTen] = useState(0);
const totalMasteryMonsterLoleNStatue_QuarukTen = Math.min (totalMasteryMonsterLoleNStatue_MusyaOverflow-Quaruk, 10000-Quaruk)

const [MasteryMonsterLoleNStatue_QuarukOverflow, setMasteryMonsterLoleNStatue_QuarukOverflow] = useState(0);
const totalMasteryMonsterLoleNStatue_QuarukOverflow = Math.min (totalMasteryMonsterLoleNStatue_MusyaOverflow-totalMasteryMonsterLoleNStatue_QuarukTen)

const [MasteryMonsterLoleNStatue_QuarukDisplay, setMasteryMonsterLoleNStatue_QuarukDisplay] = useState(0);
const totalMasteryMonsterLoleNStatue_QuarukDisplay = Math.max (totalMasteryMonsterLoleNStatue_QuarukTen,0)

const [MasteryMonsterLoleNStatue_KnuffTen, setMasteryMonsterLoleNStatue_KnuffTen] = useState(0);
const totalMasteryMonsterLoleNStatue_KnuffTen = Math.min (totalMasteryMonsterLoleNStatue_QuarukOverflow-Knuff, 10000-Knuff)

const [MasteryMonsterLoleNStatue_KnuffOverflow, setMasteryMonsterLoleNStatue_KnuffOverflow] = useState(0);
const totalMasteryMonsterLoleNStatue_KnuffOverflow = Math.min (totalMasteryMonsterLoleNStatue_QuarukOverflow-totalMasteryMonsterLoleNStatue_KnuffTen)

const [MasteryMonsterLoleNStatue_KnuffDisplay, setMasteryMonsterLoleNStatue_KnuffDisplay] = useState(0);
const totalMasteryMonsterLoleNStatue_KnuffDisplay = Math.max (totalMasteryMonsterLoleNStatue_KnuffTen,0)

const [MasteryMonsterLoleNStatue_SopoiTen, setMasteryMonsterLoleNStatue_SopoiTen] = useState(0);
const totalMasteryMonsterLoleNStatue_SopoiTen = Math.min (totalMasteryMonsterLoleNStatue_KnuffOverflow-Sopoi, 10000-Sopoi)

const [MasteryMonsterLoleNStatue_SopoiOverflow, setMasteryMonsterLoleNStatue_SopoiOverflow] = useState(0);
const totalMasteryMonsterLoleNStatue_SopoiOverflow = Math.min (totalMasteryMonsterLoleNStatue_KnuffOverflow-totalMasteryMonsterLoleNStatue_SopoiTen)

const [MasteryMonsterLoleNStatue_SopoiDisplay, setMasteryMonsterLoleNStatue_SopoiDisplay] = useState(0);
const totalMasteryMonsterLoleNStatue_SopoiDisplay = Math.max (totalMasteryMonsterLoleNStatue_SopoiTen,0)

const [MasteryMonsterLoleNStatue_MibloomTen, setMasteryMonsterLoleNStatue_MibloomTen] = useState(0);
const totalMasteryMonsterLoleNStatue_MibloomTen = Math.min (totalMasteryMonsterLoleNStatue_SopoiOverflow-Mibloom, 30000-(Mibloom*3))

const [MasteryMonsterLoleNStatue_ActualMibloomAdjusted, setMasteryMonsterLoleNStatue_ActualMibloomAdjusted] = useState(0);
const totalMasteryMonsterLoleNStatue_ActualMibloomAdjusted = Math.ceil (totalMasteryMonsterLoleNStatue_MibloomTen/3)

const [MasteryMonsterLoleNStatue_MibloomDisplay, setMasteryMonsterLoleNStatue_MibloomDisplay] = useState(0);
const totalMasteryMonsterLoleNStatue_MibloomDisplay = Math.max (totalMasteryMonsterLoleNStatue_ActualMibloomAdjusted,0)

const [MasteryMonsterLoleNStatue_MibloomOverflow, setMasteryMonsterLoleNStatue_MibloomOverflow] = useState(0);
const totalMasteryMonsterLoleNStatue_MibloomOverflow = Math.min (totalMasteryMonsterLoleNStatue_SopoiOverflow-totalMasteryMonsterLoleNStatue_MibloomTen)

const [MasteryMonsterLoleNStatue_KinguzTen, setMasteryMonsterLoleNStatue_KinguzTen] = useState(0);
const totalMasteryMonsterLoleNStatue_KinguzTen = Math.min (totalMasteryMonsterLoleNStatue_MibloomOverflow-Kinguz, 10000-Kinguz)

const [MasteryMonsterLoleNStatue_KinguzOverflow, setMasteryMonsterLoleNStatue_KinguzOverflow] = useState(0);
const totalMasteryMonsterLoleNStatue_KinguzOverflow = Math.min (totalMasteryMonsterLoleNStatue_MibloomOverflow-totalMasteryMonsterLoleNStatue_KinguzTen)

const [MasteryMonsterLoleNStatue_KinguzDisplay, setMasteryMonsterLoleNStatue_KinguzDisplay] = useState(0);
const totalMasteryMonsterLoleNStatue_KinguzDisplay = Math.max (totalMasteryMonsterLoleNStatue_KinguzTen,0)


const [MasteryMonsterLoleNStatue_OdeesFinal, setMasteryMonsterLoleNStatue_OdeesFinal] = useState(0);
const totalMasteryMonsterLoleNStatue_OdeesFinal = Math.max (totalMasteryMonsterLoleNStatue_KinguzOverflow+totalMasteryMonsterLoleNStatue_OdeeTen,0)

const [MasteryMonsterLoleNStatue_WC, setMasteryMonsterLoleNStatue_WC] = useState(0);
const totalMasteryMonsterLoleNStatue_WC = Math.max ((totalMasteryMonsterLoleNStatue_OdeesFinal*44)+(totalMasteryMonsterLoleNStatue_QuarukDisplay*50)+
(totalMasteryMonsterLoleNStatue_MusyaDisplay*50)+(totalMasteryMonsterLoleNStatue_KnuffDisplay*60)+(totalMasteryMonsterLoleNStatue_SopoiDisplay*60)
+(totalMasteryMonsterLoleNStatue_MibloomDisplay*150) + (totalMasteryMonsterLoleNStatue_KinguzDisplay*70))



//lole y balloon

const [MasteryMonsterLoleYBalloon_OdeeTen, setMasteryMonsterLoleYBalloon_OdeeTen] = useState(0);
const totalMasteryMonsterLoleYBalloon_OdeeTen = Math.min (totalMasteryMonsterLoleYBalloonResourcesNeeded-Odees, 10000-Odees)

const [MasteryMonsterLoleYBalloon_OdeeOverflow, setMasteryMonsterLoleYBalloon_OdeeOverflow] = useState(0);
const totalMasteryMonsterLoleYBalloon_OdeeOverflow = Math.max (totalMasteryMonsterLoleYBalloonResourcesNeeded-totalMasteryMonsterLoleYBalloon_OdeeTen)

const [MasteryMonsterLoleYBalloon_MusyaTen, setMasteryMonsterLoleYBalloon_MusyaTen] = useState(0);
const totalMasteryMonsterLoleYBalloon_MusyaTen = Math.min (totalMasteryMonsterLoleYBalloon_OdeeOverflow-Musya, 10000-Musya)

const [MasteryMonsterLoleYBalloon_MusyaOverflow, setMasteryMonsterLoleYBalloon_MusyaOverflow] = useState(0);
const totalMasteryMonsterLoleYBalloon_MusyaOverflow = Math.min (totalMasteryMonsterLoleYBalloon_OdeeOverflow-totalMasteryMonsterLoleYBalloon_MusyaTen)

const [MasteryMonsterLoleYBalloon_MusyaDisplay, setMasteryMonsterLoleYBalloon_MusyaDisplay] = useState(0);
const totalMasteryMonsterLoleYBalloon_MusyaDisplay = Math.max (totalMasteryMonsterLoleYBalloon_MusyaTen,0)

const [MasteryMonsterLoleYBalloon_QuarukTen, setMasteryMonsterLoleYBalloon_QuarukTen] = useState(0);
const totalMasteryMonsterLoleYBalloon_QuarukTen = Math.min (totalMasteryMonsterLoleYBalloon_MusyaOverflow-Quaruk, 10000-Quaruk)

const [MasteryMonsterLoleYBalloon_QuarukOverflow, setMasteryMonsterLoleYBalloon_QuarukOverflow] = useState(0);
const totalMasteryMonsterLoleYBalloon_QuarukOverflow = Math.min (totalMasteryMonsterLoleYBalloon_MusyaOverflow-totalMasteryMonsterLoleYBalloon_QuarukTen)

const [MasteryMonsterLoleYBalloon_QuarukDisplay, setMasteryMonsterLoleYBalloon_QuarukDisplay] = useState(0);
const totalMasteryMonsterLoleYBalloon_QuarukDisplay = Math.max (totalMasteryMonsterLoleYBalloon_QuarukTen,0)

const [MasteryMonsterLoleYBalloon_KnuffTen, setMasteryMonsterLoleYBalloon_KnuffTen] = useState(0);
const totalMasteryMonsterLoleYBalloon_KnuffTen = Math.min (totalMasteryMonsterLoleYBalloon_QuarukOverflow-Knuff, 10000-Knuff)

const [MasteryMonsterLoleYBalloon_KnuffOverflow, setMasteryMonsterLoleYBalloon_KnuffOverflow] = useState(0);
const totalMasteryMonsterLoleYBalloon_KnuffOverflow = Math.min (totalMasteryMonsterLoleYBalloon_QuarukOverflow-totalMasteryMonsterLoleYBalloon_KnuffTen)

const [MasteryMonsterLoleYBalloon_KnuffDisplay, setMasteryMonsterLoleYBalloon_KnuffDisplay] = useState(0);
const totalMasteryMonsterLoleYBalloon_KnuffDisplay = Math.max (totalMasteryMonsterLoleYBalloon_KnuffTen,0)

const [MasteryMonsterLoleYBalloon_SopoiTen, setMasteryMonsterLoleYBalloon_SopoiTen] = useState(0);
const totalMasteryMonsterLoleYBalloon_SopoiTen = Math.min (totalMasteryMonsterLoleYBalloon_KnuffOverflow-Sopoi, 10000-Sopoi)

const [MasteryMonsterLoleYBalloon_SopoiOverflow, setMasteryMonsterLoleYBalloon_SopoiOverflow] = useState(0);
const totalMasteryMonsterLoleYBalloon_SopoiOverflow = Math.min (totalMasteryMonsterLoleYBalloon_KnuffOverflow-totalMasteryMonsterLoleYBalloon_SopoiTen)

const [MasteryMonsterLoleYBalloon_SopoiDisplay, setMasteryMonsterLoleYBalloon_SopoiDisplay] = useState(0);
const totalMasteryMonsterLoleYBalloon_SopoiDisplay = Math.max (totalMasteryMonsterLoleYBalloon_SopoiTen,0)

const [MasteryMonsterLoleYBalloon_MibloomTen, setMasteryMonsterLoleYBalloon_MibloomTen] = useState(0);
const totalMasteryMonsterLoleYBalloon_MibloomTen = Math.min (totalMasteryMonsterLoleYBalloon_SopoiOverflow-Mibloom, 30000-(Mibloom*3))

const [MasteryMonsterLoleYBalloon_ActualMibloomAdjusted, setMasteryMonsterLoleYBalloon_ActualMibloomAdjusted] = useState(0);
const totalMasteryMonsterLoleYBalloon_ActualMibloomAdjusted = Math.ceil (totalMasteryMonsterLoleYBalloon_MibloomTen/3)

const [MasteryMonsterLoleYBalloon_MibloomDisplay, setMasteryMonsterLoleYBalloon_MibloomDisplay] = useState(0);
const totalMasteryMonsterLoleYBalloon_MibloomDisplay = Math.max (totalMasteryMonsterLoleYBalloon_ActualMibloomAdjusted,0)

const [MasteryMonsterLoleYBalloon_MibloomOverflow, setMasteryMonsterLoleYBalloon_MibloomOverflow] = useState(0);
const totalMasteryMonsterLoleYBalloon_MibloomOverflow = Math.min (totalMasteryMonsterLoleYBalloon_SopoiOverflow-totalMasteryMonsterLoleYBalloon_MibloomTen)

const [MasteryMonsterLoleYBalloon_KinguzTen, setMasteryMonsterLoleYBalloon_KinguzTen] = useState(0);
const totalMasteryMonsterLoleYBalloon_KinguzTen = Math.min (totalMasteryMonsterLoleYBalloon_MibloomOverflow-Kinguz, 10000-Kinguz)

const [MasteryMonsterLoleYBalloon_KinguzOverflow, setMasteryMonsterLoleYBalloon_KinguzOverflow] = useState(0);
const totalMasteryMonsterLoleYBalloon_KinguzOverflow = Math.min (totalMasteryMonsterLoleYBalloon_MibloomOverflow-totalMasteryMonsterLoleYBalloon_KinguzTen)

const [MasteryMonsterLoleYBalloon_KinguzDisplay, setMasteryMonsterLoleYBalloon_KinguzDisplay] = useState(0);
const totalMasteryMonsterLoleYBalloon_KinguzDisplay = Math.max (totalMasteryMonsterLoleYBalloon_KinguzTen,0)


const [MasteryMonsterLoleYBalloon_OdeesFinal, setMasteryMonsterLoleYBalloon_OdeesFinal] = useState(0);
const totalMasteryMonsterLoleYBalloon_OdeesFinal = Math.max (totalMasteryMonsterLoleYBalloon_KinguzOverflow+totalMasteryMonsterLoleYBalloon_OdeeTen,0)

const [MasteryMonsterLoleYBalloon_WC, setMasteryMonsterLoleYBalloon_WC] = useState(0);
const totalMasteryMonsterLoleYBalloon_WC = Math.max ((totalMasteryMonsterLoleYBalloon_OdeesFinal*44)+(totalMasteryMonsterLoleYBalloon_QuarukDisplay*50)+
(totalMasteryMonsterLoleYBalloon_MusyaDisplay*50)+(totalMasteryMonsterLoleYBalloon_KnuffDisplay*60)+(totalMasteryMonsterLoleYBalloon_SopoiDisplay*60)
+(totalMasteryMonsterLoleYBalloon_MibloomDisplay*150) + (totalMasteryMonsterLoleYBalloon_KinguzDisplay*70))

//lole n balloon

const [MasteryMonsterLoleNBalloon_OdeeTen, setMasteryMonsterLoleNBalloon_OdeeTen] = useState(0);
const totalMasteryMonsterLoleNBalloon_OdeeTen = Math.min (totalMasteryMonsterLoleNBalloonResourcesNeeded-Odees, 10000-Odees)

const [MasteryMonsterLoleNBalloon_OdeeOverflow, setMasteryMonsterLoleNBalloon_OdeeOverflow] = useState(0);
const totalMasteryMonsterLoleNBalloon_OdeeOverflow = Math.max (totalMasteryMonsterLoleNBalloonResourcesNeeded-totalMasteryMonsterLoleNBalloon_OdeeTen)

const [MasteryMonsterLoleNBalloon_MusyaTen, setMasteryMonsterLoleNBalloon_MusyaTen] = useState(0);
const totalMasteryMonsterLoleNBalloon_MusyaTen = Math.min (totalMasteryMonsterLoleNBalloon_OdeeOverflow-Musya, 10000-Musya)

const [MasteryMonsterLoleNBalloon_MusyaOverflow, setMasteryMonsterLoleNBalloon_MusyaOverflow] = useState(0);
const totalMasteryMonsterLoleNBalloon_MusyaOverflow = Math.min (totalMasteryMonsterLoleNBalloon_OdeeOverflow-totalMasteryMonsterLoleNBalloon_MusyaTen)

const [MasteryMonsterLoleNBalloon_MusyaDisplay, setMasteryMonsterLoleNBalloon_MusyaDisplay] = useState(0);
const totalMasteryMonsterLoleNBalloon_MusyaDisplay = Math.max (totalMasteryMonsterLoleNBalloon_MusyaTen,0)

const [MasteryMonsterLoleNBalloon_QuarukTen, setMasteryMonsterLoleNBalloon_QuarukTen] = useState(0);
const totalMasteryMonsterLoleNBalloon_QuarukTen = Math.min (totalMasteryMonsterLoleNBalloon_MusyaOverflow-Quaruk, 10000-Quaruk)

const [MasteryMonsterLoleNBalloon_QuarukOverflow, setMasteryMonsterLoleNBalloon_QuarukOverflow] = useState(0);
const totalMasteryMonsterLoleNBalloon_QuarukOverflow = Math.min (totalMasteryMonsterLoleNBalloon_MusyaOverflow-totalMasteryMonsterLoleNBalloon_QuarukTen)

const [MasteryMonsterLoleNBalloon_QuarukDisplay, setMasteryMonsterLoleNBalloon_QuarukDisplay] = useState(0);
const totalMasteryMonsterLoleNBalloon_QuarukDisplay = Math.max (totalMasteryMonsterLoleNBalloon_QuarukTen,0)

const [MasteryMonsterLoleNBalloon_KnuffTen, setMasteryMonsterLoleNBalloon_KnuffTen] = useState(0);
const totalMasteryMonsterLoleNBalloon_KnuffTen = Math.min (totalMasteryMonsterLoleNBalloon_QuarukOverflow-Knuff, 10000-Knuff)

const [MasteryMonsterLoleNBalloon_KnuffOverflow, setMasteryMonsterLoleNBalloon_KnuffOverflow] = useState(0);
const totalMasteryMonsterLoleNBalloon_KnuffOverflow = Math.min (totalMasteryMonsterLoleNBalloon_QuarukOverflow-totalMasteryMonsterLoleNBalloon_KnuffTen)

const [MasteryMonsterLoleNBalloon_KnuffDisplay, setMasteryMonsterLoleNBalloon_KnuffDisplay] = useState(0);
const totalMasteryMonsterLoleNBalloon_KnuffDisplay = Math.max (totalMasteryMonsterLoleNBalloon_KnuffTen,0)

const [MasteryMonsterLoleNBalloon_SopoiTen, setMasteryMonsterLoleNBalloon_SopoiTen] = useState(0);
const totalMasteryMonsterLoleNBalloon_SopoiTen = Math.min (totalMasteryMonsterLoleNBalloon_KnuffOverflow-Sopoi, 10000-Sopoi)

const [MasteryMonsterLoleNBalloon_SopoiOverflow, setMasteryMonsterLoleNBalloon_SopoiOverflow] = useState(0);
const totalMasteryMonsterLoleNBalloon_SopoiOverflow = Math.min (totalMasteryMonsterLoleNBalloon_KnuffOverflow-totalMasteryMonsterLoleNBalloon_SopoiTen)

const [MasteryMonsterLoleNBalloon_SopoiDisplay, setMasteryMonsterLoleNBalloon_SopoiDisplay] = useState(0);
const totalMasteryMonsterLoleNBalloon_SopoiDisplay = Math.max (totalMasteryMonsterLoleNBalloon_SopoiTen,0)

const [MasteryMonsterLoleNBalloon_MibloomTen, setMasteryMonsterLoleNBalloon_MibloomTen] = useState(0);
const totalMasteryMonsterLoleNBalloon_MibloomTen = Math.min (totalMasteryMonsterLoleNBalloon_SopoiOverflow-Mibloom, 30000-(Mibloom*3))

const [MasteryMonsterLoleNBalloon_ActualMibloomAdjusted, setMasteryMonsterLoleNBalloon_ActualMibloomAdjusted] = useState(0);
const totalMasteryMonsterLoleNBalloon_ActualMibloomAdjusted = Math.ceil (totalMasteryMonsterLoleNBalloon_MibloomTen/3)

const [MasteryMonsterLoleNBalloon_MibloomDisplay, setMasteryMonsterLoleNBalloon_MibloomDisplay] = useState(0);
const totalMasteryMonsterLoleNBalloon_MibloomDisplay = Math.max (totalMasteryMonsterLoleNBalloon_ActualMibloomAdjusted,0)

const [MasteryMonsterLoleNBalloon_MibloomOverflow, setMasteryMonsterLoleNBalloon_MibloomOverflow] = useState(0);
const totalMasteryMonsterLoleNBalloon_MibloomOverflow = Math.min (totalMasteryMonsterLoleNBalloon_SopoiOverflow-totalMasteryMonsterLoleNBalloon_MibloomTen)

const [MasteryMonsterLoleNBalloon_KinguzTen, setMasteryMonsterLoleNBalloon_KinguzTen] = useState(0);
const totalMasteryMonsterLoleNBalloon_KinguzTen = Math.min (totalMasteryMonsterLoleNBalloon_MibloomOverflow-Kinguz, 10000-Kinguz)

const [MasteryMonsterLoleNBalloon_KinguzOverflow, setMasteryMonsterLoleNBalloon_KinguzOverflow] = useState(0);
const totalMasteryMonsterLoleNBalloon_KinguzOverflow = Math.min (totalMasteryMonsterLoleNBalloon_MibloomOverflow-totalMasteryMonsterLoleNBalloon_KinguzTen)

const [MasteryMonsterLoleNBalloon_KinguzDisplay, setMasteryMonsterLoleNBalloon_KinguzDisplay] = useState(0);
const totalMasteryMonsterLoleNBalloon_KinguzDisplay = Math.max (totalMasteryMonsterLoleNBalloon_KinguzTen,0)


const [MasteryMonsterLoleNBalloon_OdeesFinal, setMasteryMonsterLoleNBalloon_OdeesFinal] = useState(0);
const totalMasteryMonsterLoleNBalloon_OdeesFinal = Math.max (totalMasteryMonsterLoleNBalloon_KinguzOverflow+totalMasteryMonsterLoleNBalloon_OdeeTen,0)

const [MasteryMonsterLoleNBalloon_WC, setMasteryMonsterLoleNBalloon_WC] = useState(0);
const totalMasteryMonsterLoleNBalloon_WC = Math.max ((totalMasteryMonsterLoleNBalloon_OdeesFinal*44)+(totalMasteryMonsterLoleNBalloon_QuarukDisplay*50)+
(totalMasteryMonsterLoleNBalloon_MusyaDisplay*50)+(totalMasteryMonsterLoleNBalloon_KnuffDisplay*60)+(totalMasteryMonsterLoleNBalloon_SopoiDisplay*60)
+(totalMasteryMonsterLoleNBalloon_MibloomDisplay*150) + (totalMasteryMonsterLoleNBalloon_KinguzDisplay*70))





//lole y book

const [MasteryMonsterLoleYBook_OdeeTen, setMasteryMonsterLoleYBook_OdeeTen] = useState(0);
const totalMasteryMonsterLoleYBook_OdeeTen = Math.min (totalMasteryMonsterLoleYBookResourcesNeeded-Odees, 10000-Odees)

const [MasteryMonsterLoleYBook_OdeeOverflow, setMasteryMonsterLoleYBook_OdeeOverflow] = useState(0);
const totalMasteryMonsterLoleYBook_OdeeOverflow = Math.max (totalMasteryMonsterLoleYBookResourcesNeeded-totalMasteryMonsterLoleYBook_OdeeTen)

const [MasteryMonsterLoleYBook_MusyaTen, setMasteryMonsterLoleYBook_MusyaTen] = useState(0);
const totalMasteryMonsterLoleYBook_MusyaTen = Math.min (totalMasteryMonsterLoleYBook_OdeeOverflow-Musya, 10000-Musya)

const [MasteryMonsterLoleYBook_MusyaOverflow, setMasteryMonsterLoleYBook_MusyaOverflow] = useState(0);
const totalMasteryMonsterLoleYBook_MusyaOverflow = Math.min (totalMasteryMonsterLoleYBook_OdeeOverflow-totalMasteryMonsterLoleYBook_MusyaTen)

const [MasteryMonsterLoleYBook_MusyaDisplay, setMasteryMonsterLoleYBook_MusyaDisplay] = useState(0);
const totalMasteryMonsterLoleYBook_MusyaDisplay = Math.max (totalMasteryMonsterLoleYBook_MusyaTen,0)

const [MasteryMonsterLoleYBook_QuarukTen, setMasteryMonsterLoleYBook_QuarukTen] = useState(0);
const totalMasteryMonsterLoleYBook_QuarukTen = Math.min (totalMasteryMonsterLoleYBook_MusyaOverflow-Quaruk, 10000-Quaruk)

const [MasteryMonsterLoleYBook_QuarukOverflow, setMasteryMonsterLoleYBook_QuarukOverflow] = useState(0);
const totalMasteryMonsterLoleYBook_QuarukOverflow = Math.min (totalMasteryMonsterLoleYBook_MusyaOverflow-totalMasteryMonsterLoleYBook_QuarukTen)

const [MasteryMonsterLoleYBook_QuarukDisplay, setMasteryMonsterLoleYBook_QuarukDisplay] = useState(0);
const totalMasteryMonsterLoleYBook_QuarukDisplay = Math.max (totalMasteryMonsterLoleYBook_QuarukTen,0)

const [MasteryMonsterLoleYBook_KnuffTen, setMasteryMonsterLoleYBook_KnuffTen] = useState(0);
const totalMasteryMonsterLoleYBook_KnuffTen = Math.min (totalMasteryMonsterLoleYBook_QuarukOverflow-Knuff, 10000-Knuff)

const [MasteryMonsterLoleYBook_KnuffOverflow, setMasteryMonsterLoleYBook_KnuffOverflow] = useState(0);
const totalMasteryMonsterLoleYBook_KnuffOverflow = Math.min (totalMasteryMonsterLoleYBook_QuarukOverflow-totalMasteryMonsterLoleYBook_KnuffTen)

const [MasteryMonsterLoleYBook_KnuffDisplay, setMasteryMonsterLoleYBook_KnuffDisplay] = useState(0);
const totalMasteryMonsterLoleYBook_KnuffDisplay = Math.max (totalMasteryMonsterLoleYBook_KnuffTen,0)

const [MasteryMonsterLoleYBook_SopoiTen, setMasteryMonsterLoleYBook_SopoiTen] = useState(0);
const totalMasteryMonsterLoleYBook_SopoiTen = Math.min (totalMasteryMonsterLoleYBook_KnuffOverflow-Sopoi, 10000-Sopoi)

const [MasteryMonsterLoleYBook_SopoiOverflow, setMasteryMonsterLoleYBook_SopoiOverflow] = useState(0);
const totalMasteryMonsterLoleYBook_SopoiOverflow = Math.min (totalMasteryMonsterLoleYBook_KnuffOverflow-totalMasteryMonsterLoleYBook_SopoiTen)

const [MasteryMonsterLoleYBook_SopoiDisplay, setMasteryMonsterLoleYBook_SopoiDisplay] = useState(0);
const totalMasteryMonsterLoleYBook_SopoiDisplay = Math.max (totalMasteryMonsterLoleYBook_SopoiTen,0)

const [MasteryMonsterLoleYBook_MibloomTen, setMasteryMonsterLoleYBook_MibloomTen] = useState(0);
const totalMasteryMonsterLoleYBook_MibloomTen = Math.min (totalMasteryMonsterLoleYBook_SopoiOverflow-Mibloom, 30000-(Mibloom*3))

const [MasteryMonsterLoleYBook_ActualMibloomAdjusted, setMasteryMonsterLoleYBook_ActualMibloomAdjusted] = useState(0);
const totalMasteryMonsterLoleYBook_ActualMibloomAdjusted = Math.ceil (totalMasteryMonsterLoleYBook_MibloomTen/3)

const [MasteryMonsterLoleYBook_MibloomDisplay, setMasteryMonsterLoleYBook_MibloomDisplay] = useState(0);
const totalMasteryMonsterLoleYBook_MibloomDisplay = Math.max (totalMasteryMonsterLoleYBook_ActualMibloomAdjusted,0)

const [MasteryMonsterLoleYBook_MibloomOverflow, setMasteryMonsterLoleYBook_MibloomOverflow] = useState(0);
const totalMasteryMonsterLoleYBook_MibloomOverflow = Math.min (totalMasteryMonsterLoleYBook_SopoiOverflow-totalMasteryMonsterLoleYBook_MibloomTen)

const [MasteryMonsterLoleYBook_KinguzTen, setMasteryMonsterLoleYBook_KinguzTen] = useState(0);
const totalMasteryMonsterLoleYBook_KinguzTen = Math.min (totalMasteryMonsterLoleYBook_MibloomOverflow-Kinguz, 10000-Kinguz)

const [MasteryMonsterLoleYBook_KinguzOverflow, setMasteryMonsterLoleYBook_KinguzOverflow] = useState(0);
const totalMasteryMonsterLoleYBook_KinguzOverflow = Math.min (totalMasteryMonsterLoleYBook_MibloomOverflow-totalMasteryMonsterLoleYBook_KinguzTen)

const [MasteryMonsterLoleYBook_KinguzDisplay, setMasteryMonsterLoleYBook_KinguzDisplay] = useState(0);
const totalMasteryMonsterLoleYBook_KinguzDisplay = Math.max (totalMasteryMonsterLoleYBook_KinguzTen,0)


const [MasteryMonsterLoleYBook_OdeesFinal, setMasteryMonsterLoleYBook_OdeesFinal] = useState(0);
const totalMasteryMonsterLoleYBook_OdeesFinal = Math.max (totalMasteryMonsterLoleYBook_KinguzOverflow+totalMasteryMonsterLoleYBook_OdeeTen,0)

const [MasteryMonsterLoleYBook_WC, setMasteryMonsterLoleYBook_WC] = useState(0);
const totalMasteryMonsterLoleYBook_WC = Math.max ((totalMasteryMonsterLoleYBook_OdeesFinal*44)+(totalMasteryMonsterLoleYBook_QuarukDisplay*50)+
(totalMasteryMonsterLoleYBook_MusyaDisplay*50)+(totalMasteryMonsterLoleYBook_KnuffDisplay*60)+(totalMasteryMonsterLoleYBook_SopoiDisplay*60)
+(totalMasteryMonsterLoleYBook_MibloomDisplay*150) + (totalMasteryMonsterLoleYBook_KinguzDisplay*70))

//lole n book

const [MasteryMonsterLoleNBook_OdeeTen, setMasteryMonsterLoleNBook_OdeeTen] = useState(0);
const totalMasteryMonsterLoleNBook_OdeeTen = Math.min (totalMasteryMonsterLoleNBookResourcesNeeded-Odees, 10000-Odees)

const [MasteryMonsterLoleNBook_OdeeOverflow, setMasteryMonsterLoleNBook_OdeeOverflow] = useState(0);
const totalMasteryMonsterLoleNBook_OdeeOverflow = Math.max (totalMasteryMonsterLoleNBookResourcesNeeded-totalMasteryMonsterLoleNBook_OdeeTen)

const [MasteryMonsterLoleNBook_MusyaTen, setMasteryMonsterLoleNBook_MusyaTen] = useState(0);
const totalMasteryMonsterLoleNBook_MusyaTen = Math.min (totalMasteryMonsterLoleNBook_OdeeOverflow-Musya, 10000-Musya)

const [MasteryMonsterLoleNBook_MusyaOverflow, setMasteryMonsterLoleNBook_MusyaOverflow] = useState(0);
const totalMasteryMonsterLoleNBook_MusyaOverflow = Math.min (totalMasteryMonsterLoleNBook_OdeeOverflow-totalMasteryMonsterLoleNBook_MusyaTen)

const [MasteryMonsterLoleNBook_MusyaDisplay, setMasteryMonsterLoleNBook_MusyaDisplay] = useState(0);
const totalMasteryMonsterLoleNBook_MusyaDisplay = Math.max (totalMasteryMonsterLoleNBook_MusyaTen,0)

const [MasteryMonsterLoleNBook_QuarukTen, setMasteryMonsterLoleNBook_QuarukTen] = useState(0);
const totalMasteryMonsterLoleNBook_QuarukTen = Math.min (totalMasteryMonsterLoleNBook_MusyaOverflow-Quaruk, 10000-Quaruk)

const [MasteryMonsterLoleNBook_QuarukOverflow, setMasteryMonsterLoleNBook_QuarukOverflow] = useState(0);
const totalMasteryMonsterLoleNBook_QuarukOverflow = Math.min (totalMasteryMonsterLoleNBook_MusyaOverflow-totalMasteryMonsterLoleNBook_QuarukTen)

const [MasteryMonsterLoleNBook_QuarukDisplay, setMasteryMonsterLoleNBook_QuarukDisplay] = useState(0);
const totalMasteryMonsterLoleNBook_QuarukDisplay = Math.max (totalMasteryMonsterLoleNBook_QuarukTen,0)

const [MasteryMonsterLoleNBook_KnuffTen, setMasteryMonsterLoleNBook_KnuffTen] = useState(0);
const totalMasteryMonsterLoleNBook_KnuffTen = Math.min (totalMasteryMonsterLoleNBook_QuarukOverflow-Knuff, 10000-Knuff)

const [MasteryMonsterLoleNBook_KnuffOverflow, setMasteryMonsterLoleNBook_KnuffOverflow] = useState(0);
const totalMasteryMonsterLoleNBook_KnuffOverflow = Math.min (totalMasteryMonsterLoleNBook_QuarukOverflow-totalMasteryMonsterLoleNBook_KnuffTen)

const [MasteryMonsterLoleNBook_KnuffDisplay, setMasteryMonsterLoleNBook_KnuffDisplay] = useState(0);
const totalMasteryMonsterLoleNBook_KnuffDisplay = Math.max (totalMasteryMonsterLoleNBook_KnuffTen,0)

const [MasteryMonsterLoleNBook_SopoiTen, setMasteryMonsterLoleNBook_SopoiTen] = useState(0);
const totalMasteryMonsterLoleNBook_SopoiTen = Math.min (totalMasteryMonsterLoleNBook_KnuffOverflow-Sopoi, 10000-Sopoi)

const [MasteryMonsterLoleNBook_SopoiOverflow, setMasteryMonsterLoleNBook_SopoiOverflow] = useState(0);
const totalMasteryMonsterLoleNBook_SopoiOverflow = Math.min (totalMasteryMonsterLoleNBook_KnuffOverflow-totalMasteryMonsterLoleNBook_SopoiTen)

const [MasteryMonsterLoleNBook_SopoiDisplay, setMasteryMonsterLoleNBook_SopoiDisplay] = useState(0);
const totalMasteryMonsterLoleNBook_SopoiDisplay = Math.max (totalMasteryMonsterLoleNBook_SopoiTen,0)

const [MasteryMonsterLoleNBook_MibloomTen, setMasteryMonsterLoleNBook_MibloomTen] = useState(0);
const totalMasteryMonsterLoleNBook_MibloomTen = Math.min (totalMasteryMonsterLoleNBook_SopoiOverflow-Mibloom, 30000-(Mibloom*3))

const [MasteryMonsterLoleNBook_ActualMibloomAdjusted, setMasteryMonsterLoleNBook_ActualMibloomAdjusted] = useState(0);
const totalMasteryMonsterLoleNBook_ActualMibloomAdjusted = Math.ceil (totalMasteryMonsterLoleNBook_MibloomTen/3)

const [MasteryMonsterLoleNBook_MibloomDisplay, setMasteryMonsterLoleNBook_MibloomDisplay] = useState(0);
const totalMasteryMonsterLoleNBook_MibloomDisplay = Math.max (totalMasteryMonsterLoleNBook_ActualMibloomAdjusted,0)

const [MasteryMonsterLoleNBook_MibloomOverflow, setMasteryMonsterLoleNBook_MibloomOverflow] = useState(0);
const totalMasteryMonsterLoleNBook_MibloomOverflow = Math.min (totalMasteryMonsterLoleNBook_SopoiOverflow-totalMasteryMonsterLoleNBook_MibloomTen)

const [MasteryMonsterLoleNBook_KinguzTen, setMasteryMonsterLoleNBook_KinguzTen] = useState(0);
const totalMasteryMonsterLoleNBook_KinguzTen = Math.min (totalMasteryMonsterLoleNBook_MibloomOverflow-Kinguz, 10000-Kinguz)

const [MasteryMonsterLoleNBook_KinguzOverflow, setMasteryMonsterLoleNBook_KinguzOverflow] = useState(0);
const totalMasteryMonsterLoleNBook_KinguzOverflow = Math.min (totalMasteryMonsterLoleNBook_MibloomOverflow-totalMasteryMonsterLoleNBook_KinguzTen)

const [MasteryMonsterLoleNBook_KinguzDisplay, setMasteryMonsterLoleNBook_KinguzDisplay] = useState(0);
const totalMasteryMonsterLoleNBook_KinguzDisplay = Math.max (totalMasteryMonsterLoleNBook_KinguzTen,0)


const [MasteryMonsterLoleNBook_OdeesFinal, setMasteryMonsterLoleNBook_OdeesFinal] = useState(0);
const totalMasteryMonsterLoleNBook_OdeesFinal = Math.max (totalMasteryMonsterLoleNBook_KinguzOverflow+totalMasteryMonsterLoleNBook_OdeeTen,0)

const [MasteryMonsterLoleNBook_WC, setMasteryMonsterLoleNBook_WC] = useState(0);
const totalMasteryMonsterLoleNBook_WC = Math.max ((totalMasteryMonsterLoleNBook_OdeesFinal*44)+(totalMasteryMonsterLoleNBook_QuarukDisplay*50)+
(totalMasteryMonsterLoleNBook_MusyaDisplay*50)+(totalMasteryMonsterLoleNBook_KnuffDisplay*60)+(totalMasteryMonsterLoleNBook_SopoiDisplay*60)
+(totalMasteryMonsterLoleNBook_MibloomDisplay*150) + (totalMasteryMonsterLoleNBook_KinguzDisplay*70))



//wc via Kuikas

const [MasteryMonsterLoleYCutoutCoinsWC, setMasteryMonsterLoleYCutoutCoinsWC] = useState(0);
const totalMasteryMonsterLoleYCutoutCoinsWC = Math.ceil ((totalMasteryMonsterLoleYCutoutCoinsNeeded/33)*50)

const [MasteryMonsterLoleYMaskCoinsWC, setMasteryMonsterLoleYMaskCoinsWC] = useState(0);
const totalMasteryMonsterLoleYMaskCoinsWC = Math.ceil ((totalMasteryMonsterLoleYMaskCoinsNeeded/33)*50)

const [MasteryMonsterLoleYStatueCoinsWC, setMasteryMonsterLoleYStatueCoinsWC] = useState(0);
const totalMasteryMonsterLoleYStatueCoinsWC = Math.ceil ((totalMasteryMonsterLoleYStatueCoinsNeeded/33)*50)

const [MasteryMonsterLoleYBalloonCoinsWC, setMasteryMonsterLoleYBalloonCoinsWC] = useState(0);
const totalMasteryMonsterLoleYBalloonCoinsWC = Math.ceil ((totalMasteryMonsterLoleYBalloonCoinsNeeded/33)*50)

const [MasteryMonsterLoleYBookCoinsWC, setMasteryMonsterLoleYBookCoinsWC] = useState(0);
const totalMasteryMonsterLoleYBookCoinsWC = Math.ceil ((totalMasteryMonsterLoleYBookCoinsNeeded/33)*50)

const [MasteryMonsterLoleNCutoutCoinsWC, setMasteryMonsterLoleNCutoutCoinsWC] = useState(0);
const totalMasteryMonsterLoleNCutoutCoinsWC = Math.ceil ((totalMasteryMonsterLoleNCutoutCoinsNeeded/33)*50)

const [MasteryMonsterLoleNMaskCoinsWC, setMasteryMonsterLoleNMaskCoinsWC] = useState(0);
const totalMasteryMonsterLoleNMaskCoinsWC = Math.ceil ((totalMasteryMonsterLoleNMaskCoinsNeeded/33)*50)

const [MasteryMonsterLoleNStatueCoinsWC, setMasteryMonsterLoleNStatueCoinsWC] = useState(0);
const totalMasteryMonsterLoleNStatueCoinsWC = Math.ceil ((totalMasteryMonsterLoleNStatueCoinsNeeded/33)*50)

const [MasteryMonsterLoleNBalloonCoinsWC, setMasteryMonsterLoleNBalloonCoinsWC] = useState(0);
const totalMasteryMonsterLoleNBalloonCoinsWC = Math.ceil ((totalMasteryMonsterLoleNBalloonCoinsNeeded/33)*50)

const [MasteryMonsterLoleNBookCoinsWC, setMasteryMonsterLoleNBookCoinsWC] = useState(0);
const totalMasteryMonsterLoleNBookCoinsWC = Math.ceil ((totalMasteryMonsterLoleNBookCoinsNeeded/33)*50)



const [MasteryMonsterLoleYCutout_KuikasQty, setMasteryMonsterLoleYCutout_KuikasQty] = useState(0);
const totalMasteryMonsterLoleYCutout_KuikasQty = Math.ceil (totalMasteryMonsterLoleYCutoutCoinsNeeded/33)

const [MasteryMonsterLoleYMask_KuikasQty, setMasteryMonsterLoleYMask_KuikasQty] = useState(0);
const totalMasteryMonsterLoleYMask_KuikasQty = Math.ceil (totalMasteryMonsterLoleYMaskCoinsNeeded/33)

const [MasteryMonsterLoleYStatue_KuikasQty, setMasteryMonsterLoleYStatue_KuikasQty] = useState(0);
const totalMasteryMonsterLoleYStatue_KuikasQty = Math.ceil (totalMasteryMonsterLoleYStatueCoinsNeeded/33)

const [MasteryMonsterLoleYBalloon_KuikasQty, setMasteryMonsterLoleYBalloon_KuikasQty] = useState(0);
const totalMasteryMonsterLoleYBalloon_KuikasQty = Math.ceil (totalMasteryMonsterLoleYBalloonCoinsNeeded/33)

const [MasteryMonsterLoleYBook_KuikasQty, setMasteryMonsterLoleYBook_KuikasQty] = useState(0);
const totalMasteryMonsterLoleYBook_KuikasQty = Math.ceil (totalMasteryMonsterLoleYBookCoinsNeeded/33)



const [MasteryMonsterLoleNCutout_KuikasQty, setMasteryMonsterLoleNCutout_KuikasQty] = useState(0);
const totalMasteryMonsterLoleNCutout_KuikasQty = Math.ceil (totalMasteryMonsterLoleNCutoutCoinsNeeded/33)

const [MasteryMonsterLoleNMask_KuikasQty, setMasteryMonsterLoleNMask_KuikasQty] = useState(0);
const totalMasteryMonsterLoleNMask_KuikasQty = Math.ceil (totalMasteryMonsterLoleNMaskCoinsNeeded/33)

const [MasteryMonsterLoleNStatue_KuikasQty, setMasteryMonsterLoleNStatue_KuikasQty] = useState(0);
const totalMasteryMonsterLoleNStatue_KuikasQty = Math.ceil (totalMasteryMonsterLoleNStatueCoinsNeeded/33)

const [MasteryMonsterLoleNBalloon_KuikasQty, setMasteryMonsterLoleNBalloon_KuikasQty] = useState(0);
const totalMasteryMonsterLoleNBalloon_KuikasQty = Math.ceil (totalMasteryMonsterLoleNBalloonCoinsNeeded/33)

const [MasteryMonsterLoleNBook_KuikasQty, setMasteryMonsterLoleNBook_KuikasQty] = useState(0);
const totalMasteryMonsterLoleNBook_KuikasQty = Math.ceil (totalMasteryMonsterLoleNBookCoinsNeeded/33)



//WC for all levels Blast potion

const [MasteryMonsterLoleYCutoutWC, setMasteryMonsterLoleYCutoutWC] = useState(0);
const totalMasteryMonsterLoleYCutoutWC = Math.max (totalMasteryMonsterLoleYCutout_WC+totalMasteryMonsterLoleYCutoutCoinsWC,0)

const [MasteryMonsterLoleYMaskWC, setMasteryMonsterLoleYMaskWC] = useState(0);
const totalMasteryMonsterLoleYMaskWC = Math.max (totalMasteryMonsterLoleYMask_WC + totalMasteryMonsterLoleYMaskCoinsWC,0)

const [MasteryMonsterLoleYStatueWC, setMasteryMonsterLoleYStatueWC] = useState(0);
const totalMasteryMonsterLoleYStatueWC = Math.max (totalMasteryMonsterLoleYStatue_WC+totalMasteryMonsterLoleYStatueCoinsWC,0)

const [MasteryMonsterLoleYBalloonWC, setMasteryMonsterLoleYBalloonWC] = useState(0);
const totalMasteryMonsterLoleYBalloonWC = Math.max (totalMasteryMonsterLoleYBalloon_WC + totalMasteryMonsterLoleYBalloonCoinsWC,0)

const [MasteryMonsterLoleYBookWC, setMasteryMonsterLoleYBookWC] = useState(0);
const totalMasteryMonsterLoleYBookWC = Math.max (totalMasteryMonsterLoleYBook_WC+totalMasteryMonsterLoleYBookCoinsWC,0)


const [MasteryMonsterLoleNCutoutWC, setMasteryMonsterLoleNCutoutWC] = useState(0);
const totalMasteryMonsterLoleNCutoutWC = Math.max (totalMasteryMonsterLoleNCutout_WC + totalMasteryMonsterLoleNCutoutCoinsWC,0)

const [MasteryMonsterLoleNMaskWC, setMasteryMonsterLoleNMaskWC] = useState(0);
const totalMasteryMonsterLoleNMaskWC = Math.max (totalMasteryMonsterLoleNMask_WC + totalMasteryMonsterLoleNMaskCoinsWC,0)

const [MasteryMonsterLoleNStatueWC, setMasteryMonsterLoleNStatueWC] = useState(0);
const totalMasteryMonsterLoleNStatueWC = Math.max (totalMasteryMonsterLoleNStatue_WC+totalMasteryMonsterLoleNStatueCoinsWC,0)

const [MasteryMonsterLoleNBalloonWC, setMasteryMonsterLoleNBalloonWC] = useState(0);
const totalMasteryMonsterLoleNBalloonWC = Math.max (totalMasteryMonsterLoleNBalloon_WC + totalMasteryMonsterLoleNBalloonCoinsWC,0)

const [MasteryMonsterLoleNBookWC, setMasteryMonsterLoleNBookWC] = useState(0);
const totalMasteryMonsterLoleNBookWC = Math.max (totalMasteryMonsterLoleNBook_WC+totalMasteryMonsterLoleNBookCoinsWC,0)


//typical mastery cost at this WC//

const [MasteryMonsterTypicalCutout, setMasteryMonsterTypicalCutout] = useState(0);
const totalMasteryMonsterTypicalCutout = Math.max (inputWC*500)

const [MasteryMonsterTypicalMask, setMasteryMonsterTypicalMask] = useState(0);
const totalMasteryMonsterTypicalMask = Math.max (inputWC*1000)

const [MasteryMonsterTypicalStatue, setMasteryMonsterTypicalStatue] = useState(0);
const totalMasteryMonsterTypicalStatue = Math.max (inputWC*2500)

const [MasteryMonsterTypicalBalloon, setMasteryMonsterTypicalBalloon] = useState(0);
const totalMasteryMonsterTypicalBalloon = Math.max (inputWC*5000)

const [MasteryMonsterTypicalBook, setMasteryMonsterTypicalBook] = useState(0);
const totalMasteryMonsterTypicalBook = Math.max (inputWC*10000)

//attack stat for Blast eq//

const totalMasteryMonsterLoleYCutoutCoinsWCAttack = Math.round ( totalMasteryMonsterLoleYCutoutCoinsWC/ ((attackStat/100) + 1))
const totalMasteryMonsterLoleYMaskCoinsWCAttack = Math.round ( totalMasteryMonsterLoleYMaskCoinsWC/ ((attackStat/100) + 1))
const totalMasteryMonsterLoleYStatueCoinsWCAttack = Math.round ( totalMasteryMonsterLoleYStatueCoinsWC/ ((attackStat/100) + 1))
const totalMasteryMonsterLoleYBalloonCoinsWCAttack = Math.round ( totalMasteryMonsterLoleYBalloonCoinsWC/ ((attackStat/100) + 1))
const totalMasteryMonsterLoleYBookCoinsWCAttack = Math.round ( totalMasteryMonsterLoleYBookCoinsWC/ ((attackStat/100) + 1))

const totalMasteryMonsterLoleNCutoutCoinsWCAttack = Math.round ( totalMasteryMonsterLoleNCutoutCoinsWC/ ((attackStat/100) + 1))
const totalMasteryMonsterLoleNMaskCoinsWCAttack = Math.round ( totalMasteryMonsterLoleNMaskCoinsWC/ ((attackStat/100) + 1))
const totalMasteryMonsterLoleNStatueCoinsWCAttack = Math.round ( totalMasteryMonsterLoleNStatueCoinsWC/ ((attackStat/100) + 1))
const totalMasteryMonsterLoleNBalloonCoinsWCAttack = Math.round ( totalMasteryMonsterLoleNBalloonCoinsWC/ ((attackStat/100) + 1))
const totalMasteryMonsterLoleNBookCoinsWCAttack = Math.round ( totalMasteryMonsterLoleNBookCoinsWC/ ((attackStat/100) + 1))


const totalMasteryMonsterLoleYCutoutTotalWC = Math.round (totalMasteryMonsterLoleYCutoutWC/ ((attackStat/100) + 1))
const totalMasteryMonsterLoleYMaskTotalWC = Math.round (totalMasteryMonsterLoleYMaskWC/ ((attackStat/100) + 1))
const totalMasteryMonsterLoleYStatueTotalWC = Math.round (totalMasteryMonsterLoleYStatueWC/ ((attackStat/100) + 1))
const totalMasteryMonsterLoleYBalloonTotalWC = Math.round (totalMasteryMonsterLoleYBalloonWC/ ((attackStat/100) + 1))
const totalMasteryMonsterLoleYBookTotalWC = Math.round (totalMasteryMonsterLoleYBookWC/ ((attackStat/100) + 1))


const totalMasteryMonsterLoleNCutoutTotalWC = Math.round (totalMasteryMonsterLoleNCutoutWC/ ((attackStat/100) + 1))
const totalMasteryMonsterLoleNMaskTotalWC = Math.round (totalMasteryMonsterLoleNMaskWC/ ((attackStat/100) + 1))
const totalMasteryMonsterLoleNStatueTotalWC = Math.round (totalMasteryMonsterLoleNStatueWC/ ((attackStat/100) + 1))
const totalMasteryMonsterLoleNBalloonTotalWC = Math.round (totalMasteryMonsterLoleNBalloonWC/ ((attackStat/100) + 1))
const totalMasteryMonsterLoleNBookTotalWC = Math.round (totalMasteryMonsterLoleNBookWC/ ((attackStat/100) + 1))

const totalMasteryMonsterTypicalCutoutAttack = Math.round (totalMasteryMonsterTypicalCutout/ ((attackStat/100) + 1))
const totalMasteryMonsterTypicalMaskAttack = Math.round (totalMasteryMonsterTypicalMask/ ((attackStat/100) + 1))
const totalMasteryMonsterTypicalStatueAttack = Math.round (totalMasteryMonsterTypicalStatue/ ((attackStat/100) + 1))
const totalMasteryMonsterTypicalBalloonAttack = Math.round (totalMasteryMonsterTypicalBalloon/ ((attackStat/100) + 1))
const totalMasteryMonsterTypicalBookAttack = Math.round (totalMasteryMonsterTypicalBook/ ((attackStat/100) + 1))

const totalMasteryMonsterLoleYCutout_PotionWC = Math.round (totalMasteryMonsterLoleYCutout_WC/ ((attackStat/100) + 1))
const totalMasteryMonsterLoleYMask_PotionWC = Math.round (totalMasteryMonsterLoleYMask_WC/ ((attackStat/100) + 1))
const totalMasteryMonsterLoleYStatue_PotionWC = Math.round (totalMasteryMonsterLoleYStatue_WC/ ((attackStat/100) + 1))
const totalMasteryMonsterLoleYBalloon_PotionWC = Math.round (totalMasteryMonsterLoleYBalloon_WC/ ((attackStat/100) + 1))
const totalMasteryMonsterLoleYBook_PotionWC = Math.round (totalMasteryMonsterLoleYBook_WC/ ((attackStat/100) + 1))


const totalMasteryMonsterLoleNCutout_PotionWC = Math.round (totalMasteryMonsterLoleNCutout_WC/ ((attackStat/100) + 1))
const totalMasteryMonsterLoleNMask_PotionWC = Math.round (totalMasteryMonsterLoleNMask_WC/ ((attackStat/100) + 1))
const totalMasteryMonsterLoleNStatue_PotionWC = Math.round (totalMasteryMonsterLoleNStatue_WC/ ((attackStat/100) + 1))
const totalMasteryMonsterLoleNBalloon_PotionWC = Math.round (totalMasteryMonsterLoleNBalloon_WC/ ((attackStat/100) + 1))
const totalMasteryMonsterLoleNBook_PotionWC = Math.round (totalMasteryMonsterLoleNBook_WC/ ((attackStat/100) + 1))


  //wc diff why//
  const totalWCDiffTesvenMasteryLoleYCutoutWCResult = Math.round (totalWCDiffTesvenMasteryLoleYCutout / ((attackStat/100) + 1))
  const totalWCDiffTesvenMasteryLoleYMaskWCResult = Math.round (totalWCDiffTesvenMasteryLoleYMask / ((attackStat/100) + 1))
  const totalWCDiffTesvenMasteryLoleNCutoutWCResult = Math.round (totalWCDiffTesvenMasteryLoleNCutout / ((attackStat/100) + 1))
  const totalWCDiffTesvenMasteryLoleNMaskWCResult = Math.round (totalWCDiffTesvenMasteryLoleNMask / ((attackStat/100) + 1))

  const totalWCDiffVelsounMasteryLoleYCutoutWCResult = Math.round (totalWCDiffVelsounMasteryLoleYCutout / ((attackStat/100) + 1))
  const totalWCDiffVelsounMasteryLoleYMaskWCResult = Math.round (totalWCDiffVelsounMasteryLoleYMask / ((attackStat/100) + 1))
  const totalWCDiffVelsounMasteryLoleNCutoutWCResult = Math.round (totalWCDiffVelsounMasteryLoleNCutout / ((attackStat/100) + 1))
  const totalWCDiffVelsounMasteryLoleNMaskWCResult = Math.round (totalWCDiffVelsounMasteryLoleNMask / ((attackStat/100) + 1))

  const totalWCDiffAlphaTamboAzadiMasteryLoleYCutoutWCResult = Math.round (totalWCDiffAlphaTamboAzadiMasteryLoleYCutout / ((attackStat/100) + 1))
  const totalWCDiffAlphaTamboAzadiMasteryLoleYMaskWCResult = Math.round (totalWCDiffAlphaTamboAzadiMasteryLoleYMask / ((attackStat/100) + 1))
  const totalWCDiffAlphaTamboAzadiMasteryLoleNCutoutWCResult = Math.round (totalWCDiffAlphaTamboAzadiMasteryLoleNCutout / ((attackStat/100) + 1))
  const totalWCDiffAlphaTamboAzadiMasteryLoleNMaskWCResult = Math.round (totalWCDiffAlphaTamboAzadiMasteryLoleNMask / ((attackStat/100) + 1))

  const totalWCDiffTareitMasteryLoleYCutoutWCResult = Math.round (totalWCDiffTareitMasteryLoleYCutout / ((attackStat/100) + 1))
  const totalWCDiffTareitMasteryLoleYMaskWCResult = Math.round (totalWCDiffTareitMasteryLoleYMask / ((attackStat/100) + 1))
  const totalWCDiffTareitMasteryLoleNCutoutWCResult = Math.round (totalWCDiffTareitMasteryLoleNCutout / ((attackStat/100) + 1))
  const totalWCDiffTareitMasteryLoleNMaskWCResult = Math.round (totalWCDiffTareitMasteryLoleNMask / ((attackStat/100) + 1))

  const totalWCDiffBabuSuwoDustSuwoMasteryLoleYCutoutWCResult = Math.round (totalWCDiffBabuSuwoDustSuwoMasteryLoleYCutout / ((attackStat/100) + 1))
  const totalWCDiffBabuSuwoDustSuwoMasteryLoleYMaskWCResult = Math.round (totalWCDiffBabuSuwoDustSuwoMasteryLoleYMask / ((attackStat/100) + 1))
  const totalWCDiffBabuSuwoDustSuwoMasteryLoleNCutoutWCResult = Math.round (totalWCDiffBabuSuwoDustSuwoMasteryLoleNCutout / ((attackStat/100) + 1))
  const totalWCDiffBabuSuwoDustSuwoMasteryLoleNMaskWCResult = Math.round (totalWCDiffBabuSuwoDustSuwoMasteryLoleNMask / ((attackStat/100) + 1))

  const totalWCDiffRakstalMasteryLoleYCutoutWCResult = Math.round (totalWCDiffRakstalMasteryLoleYCutout / ((attackStat/100) + 1))
  const totalWCDiffRakstalMasteryLoleYMaskWCResult = Math.round (totalWCDiffRakstalMasteryLoleYMask / ((attackStat/100) + 1))
  const totalWCDiffRakstalMasteryLoleNCutoutWCResult = Math.round (totalWCDiffRakstalMasteryLoleNCutout / ((attackStat/100) + 1))
  const totalWCDiffRakstalMasteryLoleNMaskWCResult = Math.round (totalWCDiffRakstalMasteryLoleNMask / ((attackStat/100) + 1))

  const totalWCDiffShamanLuziaMasteryLoleYCutoutWCResult = Math.round (totalWCDiffShamanLuziaMasteryLoleYCutout / ((attackStat/100) + 1))
  const totalWCDiffShamanLuziaMasteryLoleYMaskWCResult = Math.round (totalWCDiffShamanLuziaMasteryLoleYMask / ((attackStat/100) + 1))
  const totalWCDiffShamanLuziaMasteryLoleNCutoutWCResult = Math.round (totalWCDiffShamanLuziaMasteryLoleNCutout / ((attackStat/100) + 1))
  const totalWCDiffShamanLuziaMasteryLoleNMaskWCResult = Math.round (totalWCDiffShamanLuziaMasteryLoleNMask / ((attackStat/100) + 1))

  const totalWCDiffReflDarkReflMasteryLoleYCutoutWCResult = Math.round (totalWCDiffReflDarkReflMasteryLoleYCutout / ((attackStat/100) + 1))
  const totalWCDiffReflDarkReflMasteryLoleYMaskWCResult = Math.round (totalWCDiffReflDarkReflMasteryLoleYMask / ((attackStat/100) + 1))
  const totalWCDiffReflDarkReflMasteryLoleNCutoutWCResult = Math.round (totalWCDiffReflDarkReflMasteryLoleNCutout / ((attackStat/100) + 1))
  const totalWCDiffReflDarkReflMasteryLoleNMaskWCResult = Math.round (totalWCDiffReflDarkReflMasteryLoleNMask / ((attackStat/100) + 1))

  const totalWCDiffCaraKultMicRivGodKingMaiMasteryLoleYCutoutWCResult = Math.round (totalWCDiffCaraKultMicRivGodKingMaiMasteryLoleYCutout / ((attackStat/100) + 1))
  const totalWCDiffCaraKultMicRivGodKingMaiMasteryLoleYMaskWCResult = Math.round (totalWCDiffCaraKultMicRivGodKingMaiMasteryLoleYMask / ((attackStat/100) + 1))
  const totalWCDiffCaraKultMicRivGodKingMaiMasteryLoleNCutoutWCResult = Math.round (totalWCDiffCaraKultMicRivGodKingMaiMasteryLoleNCutout / ((attackStat/100) + 1))
  const totalWCDiffCaraKultMicRivGodKingMaiMasteryLoleNMaskWCResult = Math.round (totalWCDiffCaraKultMicRivGodKingMaiMasteryLoleNMask / ((attackStat/100) + 1))

  const totalWCDiffDustyLuzMasteryLoleYCutoutWCResult = Math.round (totalWCDiffDustyLuzMasteryLoleYCutout / ((attackStat/100) + 1))
  const totalWCDiffDustyLuzMasteryLoleYMaskWCResult = Math.round (totalWCDiffDustyLuzMasteryLoleYMask / ((attackStat/100) + 1))
  const totalWCDiffDustyLuzMasteryLoleNCutoutWCResult = Math.round (totalWCDiffDustyLuzMasteryLoleNCutout / ((attackStat/100) + 1))
  const totalWCDiffDustyLuzMasteryLoleNMaskWCResult = Math.round (totalWCDiffDustyLuzMasteryLoleNMask / ((attackStat/100) + 1))

  const totalWCDiffDustyKingMaiMasteryLoleYCutoutWCResult = Math.round (totalWCDiffDustyKingMaiMasteryLoleYCutout / ((attackStat/100) + 1))
  const totalWCDiffDustyKingMaiMasteryLoleYMaskWCResult = Math.round (totalWCDiffDustyKingMaiMasteryLoleYMask / ((attackStat/100) + 1))
  const totalWCDiffDustyKingMaiMasteryLoleNCutoutWCResult = Math.round (totalWCDiffDustyKingMaiMasteryLoleNCutout / ((attackStat/100) + 1))
  const totalWCDiffDustyKingMaiMasteryLoleNMaskWCResult = Math.round (totalWCDiffDustyKingMaiMasteryLoleNMask / ((attackStat/100) + 1))


  //format the WC #s//
        const number = totalMasteryMonsterBook;
        const USformatter = new Intl.NumberFormat("en-US");
        const MasteryMonsterBookComma = USformatter.format(number);

        const number1 = totalLoleYCutoutWCResult;
        const LoleYCutoutWCComma = USformatter.format(number1)

        const number2 = totalMasteryMonsterLoleYMask;
        const MasteryMonsterLoleYMaskComma = USformatter.format(number2)

        const number3 = totalMasteryMonsterLoleYStatue;
        const MasteryMonsterLoleYStatueComma = USformatter.format(number3)

        const number4 = totalMasteryMonsterLoleYBalloon;
        const MasteryMonsterLoleYBalloonComma = USformatter.format(number4)

        const number5 = totalMasteryMonsterLoleYBook;
        const MasteryMonsterLoleYBookComma = USformatter.format(number5)

        const number6 = totalMasteryMonsterLoleNCutout;
        const MasteryMonsterLoleNCutoutComma = USformatter.format(number6)

        const number7 = totalMasteryMonsterLoleNMask;
        const MasteryMonsterLoleNMaskComma = USformatter.format(number7)

        const number8 = totalMasteryMonsterLoleNStatue;
        const MasteryMonsterLoleNStatueComma = USformatter.format(number8)

        const number9 = totalMasteryMonsterLoleNBalloon;
        const MasteryMonsterLoleNBalloonComma = USformatter.format(number9)

        const number10 = totalMasteryMonsterLoleNBook;
        const MasteryMonsterLoleNBookComma = USformatter.format(number10)

        const number11 = totalResourcesCutoutLoleY;
        const LoleYCutoutResourcesComma = USformatter.format(number11)

        const number12 = totalLoleYMaskWCResult;
        const LoleYMaskWCComma = USformatter.format(number12)

        const number13 = totalResourcesMaskLoleY;
        const LoleYMaskResourcesComma = USformatter.format(number13)

        const number14 = totalResourcesCutoutLoleN;
        const LoleNCutoutResourcesComma = USformatter.format(number14)

        const number15 = totalLoleNCutoutWCResult;
        const LoleNCutoutWCComma = USformatter.format(number15)
        
        const number16 = totalLoleNMaskWCResult;
        const LoleNMaskWCComma = USformatter.format(number16)

        const number17 = totalBattleWCCutoutDL;
        const BattleWCCutoutDLComma = USformatter.format(number17)

        const number18 = totalCoinsCutoutDL;
        const CoinsCutoutDLComma = USformatter.format(number18)

        const number19 = totalLoleBothCutoutDLCoinsCoinsWCResult;
        const KuikasCoinsWCCutoutDLComma = USformatter.format(number19)

        const number20 = totalKuikasCoinsCutoutDL;
        const KuikasCoinCutoutDL = USformatter.format(number20)

        const number21 = totalLoleBothComboDLBattleCostWCResult;
        const LoleBothCutoutDLComboBattleCostComma = USformatter.format(number21)

        const number22 = totalCoinFarmComboCutoutDL;
        const CoinComboCutoutDL = USformatter.format(number22)

        const number23 = totalLoleNCutoutDLComboWCResult;
        const TotalWCLoleNCutoutDLComboComma = USformatter.format(number23)

        const number24 = totalBattleCoinCutoutDL;
        const LoleBothCoinBattleCutoutDL = USformatter.format(number24)

        const number25 = totalLoleBothCutoutDLBattleCoinWCResult;
        const TotalWCLoleBothBattleCoinsCutoutDLComma = USformatter.format(number25)

        const number26 = totalLoleYCutoutDLCoinsWCResult;
        const TotalWCLoleYCutoutDLCoinsComma = USformatter.format(number26)

        const number27 = totalLoleNCutoutDLCoinsWCResult;
        const TotalWCLoleNCutoutDLCoinsComma = USformatter.format(number27)

        const number28 = totalLoleYCutoutDLComboWCResult;
        const TotalWCLoleYCutoutDLComboComma = USformatter.format(number28)

        const number29 = totalLoleBothComboDLCoinsWCResult;
        const TotalWCLoleBothCutoutDLComboCoinsComma = USformatter.format(number29)

        const number30 = totalCutoutDLBattleWCResult;
        const TotalWCLoleBothCutoutDLBattleComma = USformatter.format(number30)

        const number31 = totalLoleYCutoutDLBattleWCResult;
        const TotalWCLoleYCutoutDLBattleComma = USformatter.format(number31)

        const number32 = totalLoleNCutoutDLBattleWCResult;
        const TotalWCLoleNCutoutDLBattleComma = USformatter.format(number32)

        const number33 = totalResourcesMaskLoleN;
        const LoleNMaskResourcesComma = USformatter.format(number33)
        
        const number34 = totalBattleWCMaskDL;
        const BattleWCMaskDLComma = USformatter.format(number34)
  
        const number35 = totalCoinsMaskDL;
        const CoinsMaskDLComma = USformatter.format(number35)
  
        const number36 = totalLoleBothMaskDLCoinsCoinsWCResult;
        const KuikasCoinsWCMaskDLComma = USformatter.format(number36)
  
        const number37 = totalKuikasCoinsMaskDL;
        const KuikasCoinMaskDL = USformatter.format(number37)
  
        const number38 = totalLoleBothMaskComboDLBattleCostWCResult;
        const LoleBothMaskDLComboBattleCostComma = USformatter.format(number38)
  
        const number39 = totalCoinFarmComboMaskDL;
        const CoinComboMaskDL = USformatter.format(number39)
  
        const number40 = totalLoleNMaskDLComboWCResult;
        const TotalWCLoleNMaskDLComboComma = USformatter.format(number40)
  
        const number41 = totalBattleCoinMaskDL;
        const LoleBothCoinBattleMaskDL = USformatter.format(number41)
  
        const number42 = totalLoleBothMaskDLBattleCoinWCResult;
        const TotalWCLoleBothBattleCoinsMaskDLComma = USformatter.format(number42)
  
        const number43 = totalLoleYMaskDLCoinsWCResult;
        const TotalWCLoleYMaskDLCoinsComma = USformatter.format(number43)
  
        const number44 = totalLoleNMaskDLCoinsWCResult;
        const TotalWCLoleNMaskDLCoinsComma = USformatter.format(number44)
  
        const number45 = totalLoleYMaskDLComboWCResult;
        const TotalWCLoleYMaskDLComboComma = USformatter.format(number45)
  
        const number46 = totalLoleBothMaskComboDLCoinsWCResult;
        const TotalWCLoleBothMaskDLComboCoinsComma = USformatter.format(number46)
  
        const number47 = totalMaskDLBattleWCResult;
        const TotalWCLoleBothMaskDLBattleComma = USformatter.format(number47)
  
        const number48 = totalLoleYMaskDLBattleWCResult;
        const TotalWCLoleYMaskDLBattleComma = USformatter.format(number48)
  
        const number49 = totalLoleNMaskDLBattleWCResult;
        const TotalWCLoleNMaskDLBattleComma = USformatter.format(number49)

        const number50 = totalLoleBothCutoutPotionCost;
        const TotalLoleBothCutoutPotionCostComma = USformatter.format(number50)

        const number51 = totalLoleBothMaskPotionCost;
        const TotalLoleBothMaskPotionCostComma = USformatter.format(number51)

        const number52 = totalNoBattleCostMonsterLoleYCutoutWC;
        const TotalLoleYCutoutWCComma = USformatter.format(number52)

        const number53 = totalNoBattleCostMonsterLoleNCutoutWC;
        const TotalLoleNCutoutWCComma = USformatter.format(number53)

        const number54 = totalLoleBothCutoutPotionCostWC;
        const TotalLoleBothCutoutPotionCostWCComma = USformatter.format(number54)

        const number55 = totalLoleBothMaskPotionCostWC;
        const TotalLoleBothMaskPotionCostWCComma = USformatter.format(number55)

        const number56 = totalNoBattleCostMonsterLoleYMaskWC;
        const TotalLoleYMaskWCComma = USformatter.format(number56)

        const number57 = totalNoBattleCostMonsterLoleNMaskWC;
        const TotalLoleNMaskWCComma = USformatter.format(number57)

        const number58 = totalWCAlphaTamboCutoutLoleY;
        const TotalLoleYCutoutAlphaTamboWCComma = USformatter.format(number58)

        const number59 = totalWCAlphaTamboCutoutLoleN;
        const TotalLoleNCutoutAlphaTamboWCComma = USformatter.format(number59)

        const number60 = totalWCAlphaTamboMaskLoleY;
        const TotalLoleYMaskAlphaTamboWCComma = USformatter.format(number60)

        const number61 = totalWCAlphaTamboMaskLoleN;
        const TotalLoleNMaskAlphaTamboWCComma = USformatter.format(number61)

        const number62 = totalWCRakstalCutoutLoleY;
        const TotalLoleYCutoutRakstalWCComma = USformatter.format(number62)

        const number63 = totalWCRakstalCutoutLoleN;
        const TotalLoleNCutoutRakstalWCComma = USformatter.format(number63)

        const number64 = totalWCRakstalMaskLoleY;
        const TotalLoleYMaskRakstalWCComma = USformatter.format(number64)

        const number65 = totalWCRakstalMaskLoleN;
        const TotalLoleNMaskRakstalWCComma = USformatter.format(number65)

        const number66 = totalVelsounLoleYCutoutTotalCoinsWC;
        const TotalLoleYCutoutVelsounWCComma = USformatter.format(number66)

        const number67 = totalVelsounLoleNCutoutTotalCoinsWC;
        const TotalLoleNCutoutVelsounWCComma = USformatter.format(number67)

        const number68 = totalVelsounLoleYMaskTotalCoinsWC;
        const TotalLoleYMaskVelsounWCComma = USformatter.format(number68)

        const number69 = totalVelsounLoleNMaskTotalCoinsWC;
        const TotalLoleNMaskVelsounWCComma = USformatter.format(number69)

        const number70 = totalWizellWCCutoutAT;
        const WizellWCCutoutATComma = USformatter.format(number70)

        const number71 = totalWizellWCMaskAT;
        const WizellWCMaskATComma = USformatter.format(number71)

        const number72 = totalHeliodaeWCCutoutRakstal;
        const HeliodaeWCCutoutRakstalComma = USformatter.format(number72)

        const number73 = totalHeliodaeWCMaskRakstal;
        const HeliodaeWCMaskRakstalComma = USformatter.format(number73)

        const number74 = totalVelsounLoleBothCutoutBattleCostCoinsWC;
        const VelsounCutoutBattleCostComma = USformatter.format(number74)

        const number75 = totalVelsounLoleBothMaskBattleCostCoinsWC;
        const VelsounMaskBattleCostComma = USformatter.format(number75)

        const number76 = totalWCDiffTesvenMasteryLoleYCutoutWCResult;
        const TesvenMasteryLoleYCutoutComma = USformatter.format(number76)

        const number120 = totalWCDiffTesvenMasteryLoleYMaskWCResult;
        const TesvenMasteryLoleYMaskComma = USformatter.format(number120)

        const number78 = totalWCDiffTesvenMasteryLoleNCutoutWCResult;
        const TesvenMasteryLoleNCutoutComma = USformatter.format(number78)

        const number79 = totalWCDiffTesvenMasteryLoleNMaskWCResult;
        const TesvenMasteryLoleNMaskComma = USformatter.format(number79)

        const number80 = totalWCDiffVelsounMasteryLoleYCutoutWCResult;
        const VelsounMasteryLoleYCutoutComma = USformatter.format(number80)
  
        const number81 = totalWCDiffVelsounMasteryLoleYMaskWCResult;
        const VelsounMasteryLoleYMaskComma = USformatter.format(number81)
  
        const number82 = totalWCDiffVelsounMasteryLoleNCutoutWCResult;
        const VelsounMasteryLoleNCutoutComma = USformatter.format(number82)
  
        const number83 = totalWCDiffVelsounMasteryLoleNMaskWCResult;
        const VelsounMasteryLoleNMaskComma = USformatter.format(number83)
  
        const number84 = totalWCDiffAlphaTamboAzadiMasteryLoleYCutoutWCResult;
        const AlphaTamboAzadiMasteryLoleYCutoutComma = USformatter.format(number84)
  
        const number85 = totalWCDiffAlphaTamboAzadiMasteryLoleYMaskWCResult;
        const AlphaTamboAzadiMasteryLoleYMaskComma = USformatter.format(number85)
  
        const number86 = totalWCDiffAlphaTamboAzadiMasteryLoleNCutoutWCResult;
        const AlphaTamboAzadiMasteryLoleNCutoutComma = USformatter.format(number86)
  
        const number87 = totalWCDiffAlphaTamboAzadiMasteryLoleNMaskWCResult;
        const AlphaTamboAzadiMasteryLoleNMaskComma = USformatter.format(number87)

        const number88 = totalWCDiffTareitMasteryLoleYCutoutWCResult;
        const TareitMasteryLoleYCutoutComma = USformatter.format(number88)
  
        const number89 = totalWCDiffTareitMasteryLoleYMaskWCResult;
        const TareitMasteryLoleYMaskComma = USformatter.format(number89)
  
        const number90 = totalWCDiffTareitMasteryLoleNCutoutWCResult;
        const TareitMasteryLoleNCutoutComma = USformatter.format(number90)
  
        const number91 = totalWCDiffTareitMasteryLoleNMaskWCResult;
        const TareitMasteryLoleNMaskComma = USformatter.format(number91)

        const number92 = totalWCDiffBabuSuwoDustSuwoMasteryLoleYCutoutWCResult;
        const BabuSuwoDustSuwoMasteryLoleYCutoutComma = USformatter.format(number92)
  
        const number93 = totalWCDiffBabuSuwoDustSuwoMasteryLoleYMaskWCResult;
        const BabuSuwoDustSuwoMasteryLoleYMaskComma = USformatter.format(number93)
  
        const number94 = totalWCDiffBabuSuwoDustSuwoMasteryLoleNCutoutWCResult;
        const BabuSuwoDustSuwoMasteryLoleNCutoutComma = USformatter.format(number94)
  
        const number95 = totalWCDiffBabuSuwoDustSuwoMasteryLoleNMaskWCResult;
        const BabuSuwoDustSuwoMasteryLoleNMaskComma = USformatter.format(number95)

        const number96 = totalWCDiffRakstalMasteryLoleYCutoutWCResult;
        const RakstalMasteryLoleYCutoutComma = USformatter.format(number96)
  
        const number97 = totalWCDiffRakstalMasteryLoleYMaskWCResult;
        const RakstalMasteryLoleYMaskComma = USformatter.format(number97)
  
        const number98 = totalWCDiffRakstalMasteryLoleNCutoutWCResult;
        const RakstalMasteryLoleNCutoutComma = USformatter.format(number98)
  
        const number99 = totalWCDiffRakstalMasteryLoleNMaskWCResult;
        const RakstalMasteryLoleNMaskComma = USformatter.format(number99)

        const number100 = totalWCDiffShamanLuziaMasteryLoleYCutoutWCResult;
        const ShamanLuziaMasteryLoleYCutoutComma = USformatter.format(number100)
  
        const number101 = totalWCDiffShamanLuziaMasteryLoleYMaskWCResult;
        const ShamanLuziaMasteryLoleYMaskComma = USformatter.format(number101)
  
        const number102 = totalWCDiffShamanLuziaMasteryLoleNCutoutWCResult;
        const ShamanLuziaMasteryLoleNCutoutComma = USformatter.format(number102)
  
        const number103 = totalWCDiffShamanLuziaMasteryLoleNMaskWCResult;
        const ShamanLuziaMasteryLoleNMaskComma = USformatter.format(number103)

        const number104 = totalWCDiffReflDarkReflMasteryLoleYCutoutWCResult;
        const ReflDarkReflMasteryLoleYCutoutComma = USformatter.format(number104)
  
        const number105 = totalWCDiffReflDarkReflMasteryLoleYMaskWCResult;
        const ReflDarkReflMasteryLoleYMaskComma = USformatter.format(number105)
  
        const number106 = totalWCDiffReflDarkReflMasteryLoleNCutoutWCResult;
        const ReflDarkReflMasteryLoleNCutoutComma = USformatter.format(number106)
  
        const number107 = totalWCDiffReflDarkReflMasteryLoleNMaskWCResult;
        const ReflDarkReflMasteryLoleNMaskComma = USformatter.format(number107)

        const number108 = totalWCDiffCaraKultMicRivGodKingMaiMasteryLoleYCutoutWCResult;
        const CaraKultMicRivGodKingMaiMasteryLoleYCutoutComma = USformatter.format(number108)
  
        const number109 = totalWCDiffCaraKultMicRivGodKingMaiMasteryLoleYMaskWCResult;
        const CaraKultMicRivGodKingMaiMasteryLoleYMaskComma = USformatter.format(number109)
  
        const number110 = totalWCDiffCaraKultMicRivGodKingMaiMasteryLoleNCutoutWCResult;
        const CaraKultMicRivGodKingMaiMasteryLoleNCutoutComma = USformatter.format(number110)
  
        const number111 = totalWCDiffCaraKultMicRivGodKingMaiMasteryLoleNMaskWCResult;
        const CaraKultMicRivGodKingMaiMasteryLoleNMaskComma = USformatter.format(number111)

        const number112 = totalWCDiffDustyLuzMasteryLoleYCutoutWCResult;
        const DustyLuzMasteryLoleYCutoutComma = USformatter.format(number112)
  
        const number113 = totalWCDiffDustyLuzMasteryLoleYMaskWCResult;
        const DustyLuzMasteryLoleYMaskComma = USformatter.format(number113)
  
        const number114 = totalWCDiffDustyLuzMasteryLoleNCutoutWCResult;
        const DustyLuzMasteryLoleNCutoutComma = USformatter.format(number114)
  
        const number115 = totalWCDiffDustyLuzMasteryLoleNMaskWCResult;
        const DustyLuzMasteryLoleNMaskComma = USformatter.format(number115)

        const number116 = totalWCDiffDustyKingMaiMasteryLoleYCutoutWCResult;
        const DustyKingMaiMasteryLoleYCutoutComma = USformatter.format(number116)
  
        const number117 = totalWCDiffDustyKingMaiMasteryLoleYMaskWCResult;
        const DustyKingMaiMasteryLoleYMaskComma = USformatter.format(number117)
  
        const number118 = totalWCDiffDustyKingMaiMasteryLoleNCutoutWCResult;
        const DustyKingMaiMasteryLoleNCutoutComma = USformatter.format(number118)
  
        const number119 = totalWCDiffDustyKingMaiMasteryLoleNMaskWCResult;
        const DustyKingMaiMasteryLoleNMaskComma = USformatter.format(number119)
  
        const number121 = totalTesvenCoinsNeededCutout;
        const TesvenCoinsNeededCutoutComma = USformatter.format(number121)

        const number122 = totalTesvenCoinsWCCutoutResult;
        const TesvenKuikasWCCutoutComma = USformatter.format(number122)

        const number123 = totalTesvenCoinsNeededMask;
        const TesvenCoinsNeededMaskComma = USformatter.format(number123)

        const number124 = totalTesvenCoinsWCMaskResult;
        const TesvenKuikasWCMaskComma = USformatter.format(number124)

        const number125 = totalTesvenWCLoleYCutoutResult;
        const TesvenWCLoleYCutoutComma = USformatter.format(number125)

        const number126 = totalTesvenWCLoleNCutoutResult;
        const TesvenWCLoleNCutoutComma = USformatter.format(number126)

        const number127 = totalTesvenWCLoleYMaskResult;
        const TesvenWCLoleYMaskComma = USformatter.format(number127)

        const number128 = totalTesvenWCLoleNMaskResult;
        const TesvenWCLoleNMaskComma = USformatter.format(number128)

        const number129 = totalAzadiCoinsNeededCutout;
        const AzadiCoinsNeededCutoutComma = USformatter.format(number129)
  
        const number130 = totalAzadiCoinsWCCutoutResult;
        const AzadiKuikasWCCutoutComma = USformatter.format(number130)
  
        const number131 = totalAzadiCoinsNeededMask;
        const AzadiCoinsNeededMaskComma = USformatter.format(number131)
  
        const number132 = totalAzadiCoinsWCMaskResult;
        const AzadiKuikasWCMaskComma = USformatter.format(number132)
  
        const number133 = totalAzadiWCLoleYCutoutResult;
        const AzadiWCLoleYCutoutComma = USformatter.format(number133)
  
        const number134 = totalAzadiWCLoleNCutoutResult;
        const AzadiWCLoleNCutoutComma = USformatter.format(number134)
  
        const number135 = totalAzadiWCLoleYMaskResult;
        const AzadiWCLoleYMaskComma = USformatter.format(number135)
  
        const number136 = totalAzadiWCLoleNMaskResult;
        const AzadiWCLoleNMaskComma = USformatter.format(number136)

        const number137 = totalDustSuwoCoinsNeededCutout;
        const DustSuwoCoinsNeededCutoutComma = USformatter.format(number137)
  
        const number138 = totalDustSuwoCoinsWCCutoutResult;
        const DustSuwoKuikasWCCutoutComma = USformatter.format(number138)
  
        const number139 = totalDustSuwoCoinsNeededMask;
        const DustSuwoCoinsNeededMaskComma = USformatter.format(number139)
  
        const number140 = totalDustSuwoCoinsWCMaskResult;
        const DustSuwoKuikasWCMaskComma = USformatter.format(number140)
  
        const number141 = totalDustSuwoWCLoleYCutoutResult;
        const DustSuwoWCLoleYCutoutComma = USformatter.format(number141)
  
        const number142 = totalDustSuwoWCLoleNCutoutResult;
        const DustSuwoWCLoleNCutoutComma = USformatter.format(number142)
  
        const number143 = totalDustSuwoWCLoleYMaskResult;
        const DustSuwoWCLoleYMaskComma = USformatter.format(number143)
  
        const number144 = totalDustSuwoWCLoleNMaskResult;
        const DustSuwoWCLoleNMaskComma = USformatter.format(number144)

        const number145 = totalSuwoCoinsNeededCutout;
        const SuwoCoinsNeededCutoutComma = USformatter.format(number145)
  
        const number146 = totalSuwoCoinsWCCutoutResult;
        const SuwoKuikasWCCutoutComma = USformatter.format(number146)
  
        const number147 = totalSuwoCoinsNeededMask;
        const SuwoCoinsNeededMaskComma = USformatter.format(number147)
  
        const number148 = totalSuwoCoinsWCMaskResult;
        const SuwoKuikasWCMaskComma = USformatter.format(number148)
  
        const number149 = totalSuwoWCLoleYCutoutResult;
        const SuwoWCLoleYCutoutComma = USformatter.format(number149)
  
        const number150 = totalSuwoWCLoleNCutoutResult;
        const SuwoWCLoleNCutoutComma = USformatter.format(number150)
  
        const number151 = totalSuwoWCLoleYMaskResult;
        const SuwoWCLoleYMaskComma = USformatter.format(number151)
  
        const number152 = totalSuwoWCLoleNMaskResult;
        const SuwoWCLoleNMaskComma = USformatter.format(number152)

        const number153 = totalDarkReflectionCoinsNeededCutout;
        const DarkReflectionCoinsNeededCutoutComma = USformatter.format(number153)
  
        const number154 = totalDarkReflectionCoinsWCCutoutResult;
        const DarkReflectionKuikasWCCutoutComma = USformatter.format(number154)
  
        const number155 = totalDarkReflectionCoinsNeededMask;
        const DarkReflectionCoinsNeededMaskComma = USformatter.format(number155)
  
        const number156 = totalDarkReflectionCoinsWCMaskResult;
        const DarkReflectionKuikasWCMaskComma = USformatter.format(number156)
  
        const number157 = totalDarkReflectionWCLoleYCutoutResult;
        const DarkReflectionWCLoleYCutoutComma = USformatter.format(number157)
  
        const number158 = totalDarkReflectionWCLoleNCutoutResult;
        const DarkReflectionWCLoleNCutoutComma = USformatter.format(number158)
  
        const number159 = totalDarkReflectionWCLoleYMaskResult;
        const DarkReflectionWCLoleYMaskComma = USformatter.format(number159)
  
        const number160 = totalDarkReflectionWCLoleNMaskResult;
        const DarkReflectionWCLoleNMaskComma = USformatter.format(number160)

        const number161 = totalCaravanCoinsNeededCutout;
        const CaravanCoinsNeededCutoutComma = USformatter.format(number161)
  
        const number162 = totalCaravanCoinsWCCutoutResult;
        const CaravanKuikasWCCutoutComma = USformatter.format(number162)
  
        const number163 = totalCaravanCoinsNeededMask;
        const CaravanCoinsNeededMaskComma = USformatter.format(number163)
  
        const number164 = totalCaravanCoinsWCMaskResult;
        const CaravanKuikasWCMaskComma = USformatter.format(number164)
  
        const number165 = totalCaravanWCLoleYCutoutResult;
        const CaravanWCLoleYCutoutComma = USformatter.format(number165)
  
        const number166 = totalCaravanWCLoleNCutoutResult;
        const CaravanWCLoleNCutoutComma = USformatter.format(number166)
  
        const number167 = totalCaravanWCLoleYMaskResult;
        const CaravanWCLoleYMaskComma = USformatter.format(number167)
  
        const number168 = totalCaravanWCLoleNMaskResult;
        const CaravanWCLoleNMaskComma = USformatter.format(number168)

        const number169 = totalKultalvaCoinsNeededCutout;
        const KultalvaCoinsNeededCutoutComma = USformatter.format(number169)
  
        const number170 = totalKultalvaCoinsWCCutoutResult;
        const KultalvaKuikasWCCutoutComma = USformatter.format(number170)
  
        const number171 = totalKultalvaCoinsNeededMask;
        const KultalvaCoinsNeededMaskComma = USformatter.format(number171)
  
        const number172 = totalKultalvaCoinsWCMaskResult;
        const KultalvaKuikasWCMaskComma = USformatter.format(number172)
  
        const number173 = totalKultalvaWCLoleYCutoutResult;
        const KultalvaWCLoleYCutoutComma = USformatter.format(number173)
  
        const number174 = totalKultalvaWCLoleNCutoutResult;
        const KultalvaWCLoleNCutoutComma = USformatter.format(number174)
  
        const number175 = totalKultalvaWCLoleYMaskResult;
        const KultalvaWCLoleYMaskComma = USformatter.format(number175)
  
        const number176 = totalKultalvaWCLoleNMaskResult;
        const KultalvaWCLoleNMaskComma = USformatter.format(number176)

        const number177 = totalRiverGoddessCoinsNeededCutout;
        const RiverGoddessCoinsNeededCutoutComma = USformatter.format(number177)
  
        const number178 = totalRiverGoddessCoinsWCCutoutResult;
        const RiverGoddessKuikasWCCutoutComma = USformatter.format(number178)
  
        const number179 = totalRiverGoddessCoinsNeededMask;
        const RiverGoddessCoinsNeededMaskComma = USformatter.format(number179)
  
        const number180 = totalRiverGoddessCoinsWCMaskResult;
        const RiverGoddessKuikasWCMaskComma = USformatter.format(number180)
  
        const number181 = totalRiverGoddessWCLoleYCutoutResult;
        const RiverGoddessWCLoleYCutoutComma = USformatter.format(number181)
  
        const number182 = totalRiverGoddessWCLoleNCutoutResult;
        const RiverGoddessWCLoleNCutoutComma = USformatter.format(number182)
  
        const number183 = totalRiverGoddessWCLoleYMaskResult;
        const RiverGoddessWCLoleYMaskComma = USformatter.format(number183)
  
        const number184 = totalRiverGoddessWCLoleNMaskResult;
        const RiverGoddessWCLoleNMaskComma = USformatter.format(number184)

        const number185 = totalVelsounCoinsNeededCutout;
        const VelsounCoinsNeededCutoutComma = USformatter.format(number185)
  
        const number186 = totalVelsounCoinsWCCutoutResult;
        const VelsounKuikasWCCutoutComma = USformatter.format(number186)
  
        const number187 = totalVelsounCoinsNeededMask;
        const VelsounCoinsNeededMaskComma = USformatter.format(number187)
  
        const number188 = totalVelsounCoinsWCMaskResult;
        const VelsounKuikasWCMaskComma = USformatter.format(number188)

        const number189 = totalAlphaTamboCoinsNeededCutout;
        const AlphaTamboCoinsNeededCutoutComma = USformatter.format(number189)
  
        const number190 = totalAlphaTamboCoinsWCCutoutResult;
        const AlphaTamboKuikasWCCutoutComma = USformatter.format(number190)
  
        const number191 = totalAlphaTamboCoinsNeededMask;
        const AlphaTamboCoinsNeededMaskComma = USformatter.format(number191)
  
        const number192 = totalAlphaTamboCoinsWCMaskResult;
        const AlphaTamboKuikasWCMaskComma = USformatter.format(number192)
  
        const number193 = totalRakstalCoinsNeededCutout;
        const RakstalCoinsNeededCutoutComma = USformatter.format(number193)
  
        const number194 = totalRakstalCoinsWCCutoutResult;
        const RakstalKuikasWCCutoutComma = USformatter.format(number194)
  
        const number195 = totalRakstalCoinsNeededMask;
        const RakstalCoinsNeededMaskComma = USformatter.format(number195)
  
        const number196 = totalRakstalCoinsWCMaskResult;
        const RakstalKuikasWCMaskComma = USformatter.format(number196)
  
        const number197 = totalTareitCoinsNeededCutout;
        const TareitCoinsNeededCutoutComma = USformatter.format(number197)
  
        const number198 = totalTareitCoinsWCCutoutResult;
        const TareitKuikasWCCutoutComma = USformatter.format(number198)
  
        const number199 = totalTareitCoinsNeededMask;
        const TareitCoinsNeededMaskComma = USformatter.format(number199)
  
        const number200 = totalTareitCoinsWCMaskResult;
        const TareitKuikasWCMaskComma = USformatter.format(number200)
  
        const number201 = totalTareitWCLoleYCutoutResult;
        const TareitWCLoleYCutoutComma = USformatter.format(number201)
  
        const number202 = totalTareitWCLoleNCutoutResult;
        const TareitWCLoleNCutoutComma = USformatter.format(number202)
  
        const number203 = totalTareitWCLoleYMaskResult;
        const TareitWCLoleYMaskComma = USformatter.format(number203)
  
        const number204 = totalTareitWCLoleNMaskResult;
        const TareitWCLoleNMaskComma = USformatter.format(number204)

        const number205 = totalBabuCoinsNeededCutout;
        const BabuCoinsNeededCutoutComma = USformatter.format(number205)
  
        const number206 = totalBabuCoinsWCCutoutResult;
        const BabuKuikasWCCutoutComma = USformatter.format(number206)
  
        const number207 = totalBabuCoinsNeededMask;
        const BabuCoinsNeededMaskComma = USformatter.format(number207)
  
        const number208 = totalBabuCoinsWCMaskResult;
        const BabuKuikasWCMaskComma = USformatter.format(number208)
  
        const number209 = totalBabuWCLoleYCutoutResult;
        const BabuWCLoleYCutoutComma = USformatter.format(number209)
  
        const number210 = totalBabuWCLoleNCutoutResult;
        const BabuWCLoleNCutoutComma = USformatter.format(number210)
  
        const number211 = totalBabuWCLoleYMaskResult;
        const BabuWCLoleYMaskComma = USformatter.format(number211)
  
        const number212 = totalBabuWCLoleNMaskResult;
        const BabuWCLoleNMaskComma = USformatter.format(number212)

        const number213 = totalMiclanCoinsNeededCutout;
        const MiclanCoinsNeededCutoutComma = USformatter.format(number213)
  
        const number214 = totalMiclanCoinsWCCutoutResult;
        const MiclanKuikasWCCutoutComma = USformatter.format(number214)
  
        const number215 = totalMiclanCoinsNeededMask;
        const MiclanCoinsNeededMaskComma = USformatter.format(number215)
  
        const number216 = totalMiclanCoinsWCMaskResult;
        const MiclanKuikasWCMaskComma = USformatter.format(number216)
  
        const number217 = totalMiclanWCLoleYCutoutResult;
        const MiclanWCLoleYCutoutComma = USformatter.format(number217)
  
        const number218 = totalMiclanWCLoleNCutoutResult;
        const MiclanWCLoleNCutoutComma = USformatter.format(number218)
  
        const number219 = totalMiclanWCLoleYMaskResult;
        const MiclanWCLoleYMaskComma = USformatter.format(number219)
  
        const number220 = totalMiclanWCLoleNMaskResult;
        const MiclanWCLoleNMaskComma = USformatter.format(number220)

        const number221 = totalShamanLuziaCoinsNeededCutout;
        const ShamanLuziaCoinsNeededCutoutComma = USformatter.format(number221)
  
        const number222 = totalShamanLuziaCoinsWCCutoutResult;
        const ShamanLuziaKuikasWCCutoutComma = USformatter.format(number222)
  
        const number223 = totalShamanLuziaCoinsNeededMask;
        const ShamanLuziaCoinsNeededMaskComma = USformatter.format(number223)
  
        const number224 = totalShamanLuziaCoinsWCMaskResult;
        const ShamanLuziaKuikasWCMaskComma = USformatter.format(number224)
  
        const number225 = totalShamanLuziaWCLoleYCutoutResult;
        const ShamanLuziaWCLoleYCutoutComma = USformatter.format(number225)
  
        const number226 = totalShamanLuziaWCLoleNCutoutResult;
        const ShamanLuziaWCLoleNCutoutComma = USformatter.format(number226)
  
        const number227 = totalShamanLuziaWCLoleYMaskResult;
        const ShamanLuziaWCLoleYMaskComma = USformatter.format(number227)
  
        const number228 = totalShamanLuziaWCLoleNMaskResult;
        const ShamanLuziaWCLoleNMaskComma = USformatter.format(number228)

        const number229 = totalKingMaiCoinsNeededCutout;
        const KingMaiCoinsNeededCutoutComma = USformatter.format(number229)
  
        const number230 = totalKingMaiCoinsWCCutoutResult;
        const KingMaiKuikasWCCutoutComma = USformatter.format(number230)
  
        const number231 = totalKingMaiCoinsNeededMask;
        const KingMaiCoinsNeededMaskComma = USformatter.format(number231)
  
        const number232 = totalKingMaiCoinsWCMaskResult;
        const KingMaiKuikasWCMaskComma = USformatter.format(number232)
  
        const number233 = totalKingMaiWCLoleYCutoutResult;
        const KingMaiWCLoleYCutoutComma = USformatter.format(number233)
  
        const number234 = totalKingMaiWCLoleNCutoutResult;
        const KingMaiWCLoleNCutoutComma = USformatter.format(number234)
  
        const number235 = totalKingMaiWCLoleYMaskResult;
        const KingMaiWCLoleYMaskComma = USformatter.format(number235)
  
        const number236 = totalKingMaiWCLoleNMaskResult;
        const KingMaiWCLoleNMaskComma = USformatter.format(number236)

        const number237 = totalDustedLuziaCoinsNeededCutout;
        const DustedLuziaCoinsNeededCutoutComma = USformatter.format(number237)
  
        const number238 = totalDustedLuziaCoinsWCCutoutResult;
        const DustedLuziaKuikasWCCutoutComma = USformatter.format(number238)
  
        const number239 = totalDustedLuziaCoinsNeededMask;
        const DustedLuziaCoinsNeededMaskComma = USformatter.format(number239)
  
        const number240 = totalDustedLuziaCoinsWCMaskResult;
        const DustedLuziaKuikasWCMaskComma = USformatter.format(number240)
  
        const number241 = totalDustedLuziaWCLoleYCutoutResult;
        const DustedLuziaWCLoleYCutoutComma = USformatter.format(number241)
  
        const number242 = totalDustedLuziaWCLoleNCutoutResult;
        const DustedLuziaWCLoleNCutoutComma = USformatter.format(number242)
  
        const number243 = totalDustedLuziaWCLoleYMaskResult;
        const DustedLuziaWCLoleYMaskComma = USformatter.format(number243)
  
        const number244 = totalDustedLuziaWCLoleNMaskResult;
        const DustedLuziaWCLoleNMaskComma = USformatter.format(number244)

        const number245 = totalDustedLuziaScofinWCCutoutResult;
        const DustedLuziaWCScofinCutoutComma = USformatter.format(number245)

        const number246 = totalDustedLuziaScofinWCMaskResult;
        const DustedLuziaWCScofinMaskComma = USformatter.format(number246)

        const number247 = totalDustyKingMaiCoinsNeededCutout;
        const DustyKingMaiCoinsNeededCutoutComma = USformatter.format(number247)
  
        const number248 = totalDustyKingMaiCoinsWCCutoutResult;
        const DustyKingMaiKuikasWCCutoutComma = USformatter.format(number248)
  
        const number249 = totalDustyKingMaiCoinsNeededMask;
        const DustyKingMaiCoinsNeededMaskComma = USformatter.format(number249)
  
        const number250 = totalDustyKingMaiCoinsWCMaskResult;
        const DustyKingMaiKuikasWCMaskComma = USformatter.format(number250)
  
        const number251 = totalDustyKingMaiWCLoleYCutoutResult;
        const DustyKingMaiWCLoleYCutoutComma = USformatter.format(number251)
  
        const number252 = totalDustyKingMaiWCLoleNCutoutResult;
        const DustyKingMaiWCLoleNCutoutComma = USformatter.format(number252)
  
        const number253 = totalDustyKingMaiWCLoleYMaskResult;
        const DustyKingMaiWCLoleYMaskComma = USformatter.format(number253)
  
        const number254 = totalDustyKingMaiWCLoleNMaskResult;
        const DustyKingMaiWCLoleNMaskComma = USformatter.format(number254)

        const number255 = totalMasteryMonsterLoleYCutout_PotionWC;
        const MasteryMonsterLoleYCutoutWCComma = USformatter.format(number255)

        const number256 = totalMasteryMonsterLoleNCutout_PotionWC;
        const MasteryMonsterLoleNCutoutWCComma = USformatter.format(number256)

        const number257 = totalMasteryMonsterLoleYMask_PotionWC;
        const MasteryMonsterLoleYMaskWCComma = USformatter.format(number257)

        const number258 = totalMasteryMonsterLoleNMask_PotionWC;
        const MasteryMonsterLoleNMaskWCComma = USformatter.format(number258)

        const number259 = totalMasteryMonsterLoleYCutoutCoinsNeeded;
        const MasteryMonsterLoleYCutoutCoinsComma = USformatter.format(number259)

        const number260 = totalMasteryMonsterLoleYMaskCoinsNeeded;
        const MasteryMonsterLoleYMaskCoinsComma = USformatter.format(number260)

        const number261 = totalMasteryMonsterLoleNCutoutCoinsNeeded;
        const MasteryMonsterLoleNCutoutCoinsComma = USformatter.format(number261)

        const number262 = totalMasteryMonsterLoleNMaskCoinsNeeded;
        const MasteryMonsterLoleNMaskCoinsComma = USformatter.format(number262)

        const number263 = totalMasteryMonsterLoleYCutoutCoinsWCAttack;
        const totalMasteryMonsterLoleYCutoutCoinsWCAttackComma = USformatter.format(number263)

        const number264 = totalMasteryMonsterLoleYMaskCoinsWCAttack;
        const totalMasteryMonsterLoleYMaskCoinsWCAttackComma = USformatter.format(number264)

        const number265 = totalMasteryMonsterLoleNCutoutCoinsWCAttack;
        const totalMasteryMonsterLoleNCutoutCoinsWCAttackComma = USformatter.format(number265)

        const number266 = totalMasteryMonsterLoleNMaskCoinsWCAttack;
        const totalMasteryMonsterLoleNMaskCoinsWCAttackComma = USformatter.format(number266)

        const number267 = totalMasteryMonsterLoleYCutoutPotionsNeeded;
        const MasteryMonsterLoleYCutoutPotionsNeededComma = USformatter.format(number267)

        const number268 = totalMasteryMonsterLoleYMaskPotionsNeeded;
        const MasteryMonsterLoleYMaskPotionsNeededComma = USformatter.format(number268)

        const number269 = totalMasteryMonsterLoleNCutoutPotionsNeeded;
        const MasteryMonsterLoleNCutoutPotionsNeededComma = USformatter.format(number269)

        const number270 = totalMasteryMonsterLoleNMaskPotionsNeeded;
        const MasteryMonsterLoleNMaskPotionsNeededComma = USformatter.format(number270)

        const number271 = totalMasteryMonsterLoleYCutoutTotalWC;
        const MasteryMonsterLoleYCutoutTotalWCComma = USformatter.format(number271)

        const number272 = totalMasteryMonsterLoleYMaskTotalWC;
        const MasteryMonsterLoleYMaskTotalWCComma = USformatter.format(number272)

        const number273 = totalMasteryMonsterLoleNCutoutTotalWC;
        const MasteryMonsterLoleNCutoutTotalWCComma = USformatter.format(number273)

        const number274 = totalMasteryMonsterLoleNMaskTotalWC;
        const MasteryMonsterLoleNMaskTotalWCComma = USformatter.format(number274)

        const number275 = totalMasteryMonsterTypicalCutoutAttack;
        const totalMasteryMonsterTypicalCutoutAttackComma = USformatter.format(number275)

        const number276 = totalMasteryMonsterTypicalMaskAttack;
        const totalMasteryMonsterTypicalMaskAttackComma = USformatter.format(number276)

        const number277 = totalMasteryMonsterTypicalStatueAttack;
        const totalMasteryMonsterTypicalStatueAttackComma = USformatter.format(number277)

        const number278 = totalMasteryMonsterTypicalBalloonAttack;
        const totalMasteryMonsterTypicalBalloonAttackComma = USformatter.format(number278)

        const number279 = totalMasteryMonsterTypicalBookAttack;
        const totalMasteryMonsterTypicalBookAttackComma = USformatter.format(number279)

        const number280 = totalMasteryMonsterLoleYCutoutResourcesNeeded;
        const MasteryMonsterLoleYCutoutResourcesNeededComma = USformatter.format(number280)

        const number281 = totalMasteryMonsterLoleYMaskResourcesNeeded;
        const MasteryMonsterLoleYMaskResourcesNeededComma = USformatter.format(number281)

        const number282 = totalMasteryMonsterLoleNCutoutResourcesNeeded;
        const MasteryMonsterLoleNCutoutResourcesNeededComma = USformatter.format(number282)

        const number283 = totalMasteryMonsterLoleNMaskResourcesNeeded;
        const MasteryMonsterLoleNMaskResourcesNeededComma = USformatter.format(number283)


        const number284 = totalMasteryMonsterLoleYStatue_PotionWC;
        const MasteryMonsterLoleYStatueWCComma = USformatter.format(number284)
  
        const number285 = totalMasteryMonsterLoleYBalloon_PotionWC;
        const MasteryMonsterLoleYBalloonWCComma = USformatter.format(number285)
  
        const number286 = totalMasteryMonsterLoleYBook_PotionWC;
        const MasteryMonsterLoleYBookWCComma = USformatter.format(number286)
  
  
        const number287 = totalMasteryMonsterLoleNStatue_PotionWC;
        const MasteryMonsterLoleNStatueWCComma = USformatter.format(number287)
  
        const number288 = totalMasteryMonsterLoleNBalloon_PotionWC;
        const MasteryMonsterLoleNBalloonWCComma = USformatter.format(number288)
  
        const number289 = totalMasteryMonsterLoleNBook_PotionWC;
        const MasteryMonsterLoleNBookWCComma = USformatter.format(number289)
  
        const number290 = totalMasteryMonsterLoleYStatueCoinsNeeded;
        const MasteryMonsterLoleYStatueCoinsComma = USformatter.format(number290)
  
        const number291 = totalMasteryMonsterLoleYBalloonCoinsNeeded;
        const MasteryMonsterLoleYBalloonCoinsComma = USformatter.format(number291)
  
        const number292 = totalMasteryMonsterLoleYBookCoinsNeeded;
        const MasteryMonsterLoleYBookCoinsComma = USformatter.format(number292)
  
        const number293 = totalMasteryMonsterLoleNStatueCoinsNeeded;
        const MasteryMonsterLoleNStatueCoinsComma = USformatter.format(number293)
  
        const number294 = totalMasteryMonsterLoleNBalloonCoinsNeeded;
        const MasteryMonsterLoleNBalloonCoinsComma = USformatter.format(number294)
  
        const number295 = totalMasteryMonsterLoleNBookCoinsNeeded;
        const MasteryMonsterLoleNBookCoinsComma = USformatter.format(number295)
  
        const number296 = totalMasteryMonsterLoleYStatueCoinsWCAttack;
        const totalMasteryMonsterLoleYStatueCoinsWCAttackComma = USformatter.format(number296)
  
        const number297 = totalMasteryMonsterLoleYBalloonCoinsWCAttack;
        const totalMasteryMonsterLoleYBalloonCoinsWCAttackComma = USformatter.format(number297)
  
        const number298 = totalMasteryMonsterLoleYBookCoinsWCAttack;
        const totalMasteryMonsterLoleYBookCoinsWCAttackComma = USformatter.format(number298)
  
        const number299 = totalMasteryMonsterLoleNStatueCoinsWCAttack;
        const totalMasteryMonsterLoleNStatueCoinsWCAttackComma = USformatter.format(number299)
  
        const number300 = totalMasteryMonsterLoleNBalloonCoinsWCAttack;
        const totalMasteryMonsterLoleNBalloonCoinsWCAttackComma = USformatter.format(number300)
  
        const number301 = totalMasteryMonsterLoleNBookCoinsWCAttack;
        const totalMasteryMonsterLoleNBookCoinsWCAttackComma = USformatter.format(number301)
  
        const number302 = totalMasteryMonsterLoleYStatuePotionsNeeded;
        const MasteryMonsterLoleYStatuePotionsNeededComma = USformatter.format(number302)
  
        const number303 = totalMasteryMonsterLoleYBalloonPotionsNeeded;
        const MasteryMonsterLoleYBalloonPotionsNeededComma = USformatter.format(number303)
  
        const number304 = totalMasteryMonsterLoleYBookPotionsNeeded;
        const MasteryMonsterLoleYBookPotionsNeededComma = USformatter.format(number304)
  
        const number305 = totalMasteryMonsterLoleNStatuePotionsNeeded;
        const MasteryMonsterLoleNStatuePotionsNeededComma = USformatter.format(number305)
  
        const number306 = totalMasteryMonsterLoleNBalloonPotionsNeeded;
        const MasteryMonsterLoleNBalloonPotionsNeededComma = USformatter.format(number306)
  
        const number307 = totalMasteryMonsterLoleNBookPotionsNeeded;
        const MasteryMonsterLoleNBookPotionsNeededComma = USformatter.format(number307)
  
        const number308 = totalMasteryMonsterLoleYStatueTotalWC;
        const MasteryMonsterLoleYStatueTotalWCComma = USformatter.format(number308)
  
        const number309 = totalMasteryMonsterLoleYBalloonTotalWC;
        const MasteryMonsterLoleYBalloonTotalWCComma = USformatter.format(number309)
  
        const number310 = totalMasteryMonsterLoleYBookTotalWC;
        const MasteryMonsterLoleYBookTotalWCComma = USformatter.format(number310)
  
        const number311 = totalMasteryMonsterLoleNStatueTotalWC;
        const MasteryMonsterLoleNStatueTotalWCComma = USformatter.format(number311)
  
        const number312 = totalMasteryMonsterLoleNBalloonTotalWC;
        const MasteryMonsterLoleNBalloonTotalWCComma = USformatter.format(number312)
  
        const number313 = totalMasteryMonsterLoleNBookTotalWC;
        const MasteryMonsterLoleNBookTotalWCComma = USformatter.format(number313)
  
        const number314 = totalMasteryMonsterLoleYStatueResourcesNeeded;
        const MasteryMonsterLoleYStatueResourcesNeededComma = USformatter.format(number314)
  
        const number315 = totalMasteryMonsterLoleYBalloonResourcesNeeded;
        const MasteryMonsterLoleYBalloonResourcesNeededComma = USformatter.format(number315)
  
        const number316 = totalMasteryMonsterLoleYBookResourcesNeeded;
        const MasteryMonsterLoleYBookResourcesNeededComma = USformatter.format(number316)
  
        const number317 = totalMasteryMonsterLoleNStatueResourcesNeeded;
        const MasteryMonsterLoleNStatueResourcesNeededComma = USformatter.format(number317)
  
        const number318 = totalMasteryMonsterLoleNBalloonResourcesNeeded;
        const MasteryMonsterLoleNBalloonResourcesNeededComma = USformatter.format(number318)
  
        const number319 = totalMasteryMonsterLoleNBookResourcesNeeded;
        const MasteryMonsterLoleNBookResourcesNeededComma = USformatter.format(number319)
  
        const number320 = totalResourcesCutoutLoleY_GrenadePotionsNeeded;
        const ResourcesCutoutLoleY_GrenadePotionsNeededComma = USformatter.format(number320)

        const number321 = totalResourcesMaskLoleY_GrenadePotionsNeeded;
        const ResourcesMaskLoleY_GrenadePotionsNeededComma = USformatter.format(number321)

        const number322 = totalResourcesCutoutLoleN_GrenadePotionsNeeded;
        const ResourcesCutoutLoleN_GrenadePotionsNeededComma = USformatter.format(number322)

        const number323 = totalResourcesMaskLoleN_GrenadePotionsNeeded;
        const ResourcesMaskLoleN_GrenadePotionsNeededComma = USformatter.format(number323)

// END OF EQUATIONS SO FAR//

  return (
    <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh">
          <VStack spacing={8}>

          <Heading>Mastery Math: Potions</Heading>
            <Container><p>This page is for calculating a new mastery strategy on 4theWords: defeat small Aurilis creatures, make potions from their loot drops, 
              and use those potions to defeat large word count monsters. <br></br><br></br>
              You can use this page to estimate how many potions you can make from your current inventory 
               or plan future mastery goals.<br></br><br></br>
              <b>Note:</b> this strategy requires the companion Mund to convert potion ingredients.
              <br></br><br></br>
            </p>
            
<Accordion allowMultiple>
  <AccordionItem>
  <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='center' p={3}>
        <Heading as='h3' size='lg'>Potion Mastery Explained</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>

          <p><b>The Strategy: Simplified</b><br></br><br></br>
          1. Fight tiny Aurilis monsters to book-level (10,000 battles)<br></br><br></br>
          2. Use the resources earned from those battles to create damage potions.<br></br><br></br>
          3. Use those damage potions to defeat BIG word count monsters and achieve their mastery rewards, effectively double-dipping the words into two masteries at once.            
          <br></br><br></br>
            The 10% Blast potion is the primary secret to this strategy. While the 1000-word potion is viable in some circumstances, 
            the beauty of the 10% potion is simple: 10 Blast potions will defeat any 4theWords creature of any size. <br></br><br></br> Each potion costs 4 Aurilis resources with the companion Lole or 
            6 resources without Lole. Thus, defeating <b>any monster in the game</b> costs 40 or 60 Aurilis resources + 850 coins, depending on whether the user owns Lole.<br></br><br></br>

          This is where the masteries can double-dip. To defeat any monster 500 times (cutout mastery) via potions, you need 20,000 or 30,000 resources, depending on if you have Lole. To defeat any 
          monster 1000 times (mask mastery), you need 40,000 or 60,000 resources. <br></br><br></br> These resources can be farmed by mastering tiny Aurilis monsters to Level 10 book mastery (10,000 battles). 
          Since most of these lil fellas drop 1 resource per fight, the math is simple. <br></br><br></br>20,000 resources = 2 tiny mastery books<br></br>30,000 resources = 3 tiny mastery books<br></br><br></br>

          This allows you to accomplish mastery for the Aurilis tiny monsters <i>and</i> a much larger, perhaps impossible-to-master-otherwise creature, <b>all from the same words</b>.
          </p>

      <br></br>
    </AccordionPanel>
  </AccordionItem>

  </Accordion>
            <Divider></Divider></Container>
      
<VStack>
<Heading>4theMath:</Heading>
<Spacer></Spacer>
<Container>Your Attack Stat</Container>
<NumberInput defaultValue={0} min={0} max={9999} size='md'>
<NumberInputField id='atk' onInput={(e) => handleAttackStatChange(e.target.value)} />
</NumberInput>
<Container mt='20px'>How many coins do you have?</Container>
<NumberInput defaultValue={0} min={0} max={10000000} size='md'>
<NumberInputField id='atk' onInput={(e) => handleCoinsChange(e.target.value)} />
</NumberInput>
</VStack>

            <HStack><text ml='10px'>Do you have </text> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/6d/Lole.png/ '
        mr='0px'
      /><text mr='10px'><b>Lole</b>?</text>
         </HStack>
        <Container><Wrap justify='center'>
        <WrapItem>
        <Button variant='outline' onClick={handleLoleYClick} style={{ backgroundColor: LoleYActive ? "#3f011c" : "transparent" }}>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/77/Yes.png'
        mr='12px'
      />
      <span>Yes</span></Button>
      </WrapItem>
      <WrapItem>
        <Button variant='outline' onClick= {handleLoleNClick} style={{ backgroundColor: LoleNActive ? "#3f011c" : "transparent" }}>      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/c/ce/1576709063_no-thanks.png'
        mr='12px'
      />
      <span>No</span></Button></WrapItem>
        </Wrap></Container>

      <VStack>
        <text mr='10px' ml='10px'>What is the word count of the monster you're mastering?<br></br><br></br></text> 
    
        <Container><Wrap justify='center'>
        <WrapItem>
        <Button variant='outline' onClick={handleBlastClick} style={{ backgroundColor: BlastActive ? "#2d1b59" : "transparent" }}>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/c/cc/Grenade_Potion.png'
        mr='12px'
      />
      <span>2000 words or fewer</span></Button>
      </WrapItem>
      <WrapItem>
        <Button variant='outline' onClick= {handleGrenadeClick} style={{ backgroundColor: GrenadeActive ? "#2d1b59" : "transparent" }}>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/0b/Fire_Blast_Potion.png/'
        mr='12px'
      />      
      <span>over 2000 words</span></Button></WrapItem>
        </Wrap></Container></VStack>

{BlastIsShown &&
<Accordion allowMultiple w={350}>
<AccordionItem>
  <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='center' p={3}>
        <Heading as='h3' size='lg'>Mastery Monster: Basic Info</Heading>
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
        src='https://i.imgur.com/DRyEVTd.png'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Word Count</Text>
        <NumberInput defaultValue={0} min={0} max={15000} size='md' w='100px'>
  <NumberInputField id='MonsterWC' id={idWC} value={inputWC} onInput={e => setInputWC(e.target.value)} />
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
        src='https://i.imgur.com/vE1cS1Z.png'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'># Already Fought</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='alreadyfought' onInput={(e) => handleMasteryMonsterChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/f/f1/Musya_Plushie_2.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text id='monstername' fontSize='sm' align='center'>Monster's Name</Text>
        <Input variant='outline' id={id} value={input} onInput={e => setInput(e.target.value)} placeholder='Add Name' />
      </VStack>
      </HStack>
            </Box>
          </Box>
      <br></br>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
  <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='center' p={3}>
        <Heading as='h3' size='lg'>Select Mastery Goal</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>

      <Box h='300px' overflowY='scroll'>
          <Wrap>
            <WrapItem>
            <Button w='100px' h='140px' pb={5} onClick={handleCutoutClick} style={{ backgroundColor: CutoutActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/73/Winter_Cordu_Cutout.png'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Cutout<br></br>(500 battles)</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='140px' pb={5} onClick={handleMaskClick} style={{ backgroundColor: MaskActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/90/Winter_Cordu_Wardrobe_Mask.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Mask<br></br>(1000 battles)</Text>
      </VStack>
            </Button>
            </WrapItem>

            <WrapItem>
            <Button w='100px' h='140px' pb={5} onClick={handleStatueClick} style={{ backgroundColor: StatueActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/40/Winter_Cordu_Statue.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Statue<br></br>(2500 battles)</Text>
      </VStack>
            </Button>
            </WrapItem>
            

            <WrapItem>
            <Button w='100px' h='140px' pb={5} onClick={handleBalloonClick} style={{ backgroundColor: BalloonActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a2/Winter_Cordu_Wardrobe_Balloon.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Balloon<br></br>(5000 battles)</Text>
      </VStack>
            </Button>
            </WrapItem>

            <WrapItem>
            <Button w='100px' h='140px' pb={5} onClick={handleBookClick} style={{ backgroundColor: BookActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/94/Winter_Cordu_Book_Wardrobe.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Book<br></br>(10,000 battles)</Text>
      </VStack>
            </Button>
            </WrapItem>
          </Wrap>
          </Box>
      <br></br>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
  <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='center' p={3}>
        <Heading as='h3' size='lg'>Monsters Already Fought</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
<Container align='center'>

      <Box align='center' h='300px' overflowY='scroll'>

      <Box w='250px' h='100px' pb={5} backgroundColor='#1A202C'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f7/OdysOdees.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Odees/Odys</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Odees' onInput={(e) => handleOdeesChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/3/33/Musya.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Musya</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleMusyaChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/8/85/Quaruk.png'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Quaruk</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Quaruk' onInput={(e) => handleQuarukChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/2/24/Knuff.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Knuff</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Knuff' onInput={(e) => handleKnuffChange(e.target.value)} />
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
        src='https://media.4thewords.com/public/monsters/image_1708469171.png'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Sopoi</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Sopoi' onInput={(e) => handleSopoiChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/b/b2/Mibloom.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Mibloom</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Mibloom' onInput={(e) => handleMibloomChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/6/65/Kinguz.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Kinguz</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Kinguz' onInput={(e) => handleKinguzChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box>    


          </Box>
          </Container>
      <br></br>
    </AccordionPanel>
  </AccordionItem>
  </Accordion> }

  {BlastIsShown && LoleYIsShown && CutoutIsShown &&
            <Heading>Quick View</Heading>}

  {BlastIsShown && LoleYIsShown && CutoutIsShown &&
<Box rounded='lg'  w='290px' h='700px' pb={5} style={{ backgroundColor: TesvenActive ? "#15391E" : "#2D3748" }}>
       <VStack>
       <Box mr='220px' mb='225px'>

       <Box
        position='absolute'
        mt="100px"
        ml='63px'
        w='100px'
        h='100px'
        align='center'>
            <Text align='center'>
            {inputWC}-word monster
            </Text>
        </Box>

         <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
      />

      </Box>
        <Text fontSize='lg' textAlign='center'><b>{input}</b><br></br>
        Total Word Count: {MasteryMonsterLoleYCutoutTotalWCComma}</Text>
        <Divider w='250px' />
        <Text fontSize='md'><b>Blast Potions Needed:</b><br></br> 
        {MasteryMonsterLoleYCutoutPotionsNeededComma}</Text>
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {MasteryMonsterLoleYCutoutResourcesNeededComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {MasteryMonsterLoleYCutoutWCComma}
        </Text>

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coins Needed:<br></br></b>{MasteryMonsterLoleYCutoutCoinsComma}
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {totalMasteryMonsterLoleYCutoutCoinsWCAttackComma}</Text>
          <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Typical Mastery Cost at this Word Count:<br></br></b>{totalMasteryMonsterTypicalCutoutAttackComma}
          <br></br></Text>
          </VStack>
            </Box>}


  {BlastIsShown && LoleYIsShown && MaskIsShown &&
            <Heading>Quick View</Heading>}


  {BlastIsShown && LoleYIsShown && MaskIsShown &&
<Box rounded='lg'  w='290px' h='700px' pb={5} style={{ backgroundColor: TesvenActive ? "#15391E" : "#2D3748" }}>
       <VStack>
       <Box mr='220px' mb='225px'>

       <Box
        position='absolute'
        mt="100px"
        ml='63px'
        w='100px'
        h='100px'
        align='center'>
            <Text align='center'>
            {inputWC}-word monster
            </Text>
        </Box>

         <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
      />

      </Box>
        <Text fontSize='lg' textAlign='center'><b>{input}</b><br></br>
        Total Word Count: {MasteryMonsterLoleYMaskTotalWCComma}</Text>
        <Divider w='250px' />
        <Text fontSize='md'><b>Blast Potions Needed:</b><br></br> 
        {totalMasteryMonsterLoleYMaskPotionsNeeded}</Text>

        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {MasteryMonsterLoleYMaskResourcesNeededComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {MasteryMonsterLoleYMaskWCComma}
        </Text>

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coins Needed:<br></br></b>{MasteryMonsterLoleYMaskCoinsComma}
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {totalMasteryMonsterLoleYMaskCoinsWCAttackComma}</Text>

          <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Typical Mastery Cost at this Word Count:<br></br></b>{totalMasteryMonsterTypicalMaskAttackComma}
          <br></br></Text>
          </VStack>
            </Box>}

            {BlastIsShown && LoleYIsShown && StatueIsShown &&
        	<Heading>Quick View</Heading>}

  {BlastIsShown && LoleYIsShown && StatueIsShown &&
<Box rounded='lg'  w='290px' h='700px' pb={5} style={{ backgroundColor: TesvenActive ? "#15391E" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>

   	<Box
    	position='absolute'
    	mt="100px"
    	ml='63px'
    	w='100px'
    	h='100px'
    	align='center'>
        	<Text align='center'>
        	{inputWC}-word monster
        	</Text>
    	</Box>

     	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/8/81/DarkBadge.png/'
  	/>

  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>{input}</b><br></br>
    	Total Word Count: {MasteryMonsterLoleYStatueTotalWCComma}</Text>
    	<Divider w='250px' />
    	<Text fontSize='md'><b>Blast Potions Needed:</b><br></br>
    	{MasteryMonsterLoleYStatuePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{MasteryMonsterLoleYStatueResourcesNeededComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{MasteryMonsterLoleYStatueWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{MasteryMonsterLoleYStatueCoinsComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{totalMasteryMonsterLoleYStatueCoinsWCAttackComma}</Text>
      	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Typical Mastery Cost at this Word Count:<br></br></b>{totalMasteryMonsterTypicalStatueAttackComma}
      	<br></br></Text>
      	</VStack>
        	</Box>}

  {BlastIsShown && LoleYIsShown && BalloonIsShown &&
        	<Heading>Quick View</Heading>}

  {BlastIsShown && LoleYIsShown && BalloonIsShown &&
<Box rounded='lg'  w='290px' h='700px' pb={5} style={{ backgroundColor: TesvenActive ? "#15391E" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>

   	<Box
    	position='absolute'
    	mt="100px"
    	ml='63px'
    	w='100px'
    	h='100px'
    	align='center'>
        	<Text align='center'>
        	{inputWC}-word monster
        	</Text>
    	</Box>

     	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/ff/FireBadge.png/'
  	/>

  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>{input}</b><br></br>
    	Total Word Count: {MasteryMonsterLoleYBalloonTotalWCComma}</Text>
    	<Divider w='250px' />
    	<Text fontSize='md'><b>Blast Potions Needed:</b><br></br>
    	{MasteryMonsterLoleYBalloonPotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{MasteryMonsterLoleYBalloonResourcesNeededComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{MasteryMonsterLoleYBalloonWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{MasteryMonsterLoleYBalloonCoinsComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{totalMasteryMonsterLoleYBalloonCoinsWCAttackComma}</Text>
      	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Typical Mastery Cost at this Word Count:<br></br></b>{totalMasteryMonsterTypicalBalloonAttackComma}
      	<br></br></Text>
      	</VStack>
        	</Box>}

  {BlastIsShown && LoleYIsShown && BookIsShown &&
        	<Heading>Quick View</Heading>}

  {BlastIsShown && LoleYIsShown && BookIsShown &&
<Box rounded='lg'  w='290px' h='700px' pb={5} style={{ backgroundColor: TesvenActive ? "#15391E" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>

   	<Box
    	position='absolute'
    	mt="100px"
    	ml='63px'
    	w='100px'
    	h='100px'
    	align='center'>
        	<Text align='center'>
        	{inputWC}-word monster
        	</Text>
    	</Box>

     	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/9/95/AscendedBadge2.png/'
  	/>

  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>{input}</b><br></br>
    	Total Word Count: {MasteryMonsterLoleYBookTotalWCComma}</Text>
    	<Divider w='250px' />
    	<Text fontSize='md'><b>Blast Potions Needed:</b><br></br>
    	{MasteryMonsterLoleYBookPotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{MasteryMonsterLoleYBookResourcesNeededComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{MasteryMonsterLoleYBookWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{MasteryMonsterLoleYBookCoinsComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{totalMasteryMonsterLoleYBookCoinsWCAttackComma}</Text>
      	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Typical Mastery Cost at this Word Count:<br></br></b>{totalMasteryMonsterTypicalBookAttackComma}
      	<br></br></Text>
      	</VStack>
        	</Box>}



            {BlastIsShown && LoleNIsShown && CutoutIsShown &&
        	<Heading>Quick View</Heading>}

  {BlastIsShown && LoleNIsShown && CutoutIsShown &&
<Box rounded='lg'  w='290px' h='700px' pb={5} style={{ backgroundColor: TesvenActive ? "#15391E" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>

   	<Box
    	position='absolute'
    	mt="100px"
    	ml='63px'
    	w='100px'
    	h='100px'
    	align='center'>
        	<Text align='center'>
        	{inputWC}-word monster
        	</Text>
    	</Box>

     	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
  	/>

  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>{input}</b><br></br>
    	Total Word Count: {MasteryMonsterLoleNCutoutTotalWCComma}</Text>
    	<Divider w='250px' />
    	<Text fontSize='md'><b>Blast Potions Needed:</b><br></br>
    	{MasteryMonsterLoleNCutoutPotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{MasteryMonsterLoleNCutoutResourcesNeededComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{MasteryMonsterLoleNCutoutWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{MasteryMonsterLoleNCutoutCoinsComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{totalMasteryMonsterLoleNCutoutCoinsWCAttackComma}</Text>
      	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Typical Mastery Cost at this Word Count:<br></br></b>{totalMasteryMonsterTypicalCutoutAttackComma}
      	<br></br></Text>
      	</VStack>
        	</Box>}

  {BlastIsShown && LoleNIsShown && MaskIsShown &&
        	<Heading>Quick View</Heading>}


  {BlastIsShown && LoleNIsShown && MaskIsShown &&
<Box rounded='lg'  w='290px' h='700px' pb={5} style={{ backgroundColor: TesvenActive ? "#15391E" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>

   	<Box
    	position='absolute'
    	mt="100px"
    	ml='63px'
    	w='100px'
    	h='100px'
    	align='center'>
        	<Text align='center'>
        	{inputWC}-word monster
        	</Text>
    	</Box>

     	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
  	/>

  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>{input}</b><br></br>
    	Total Word Count: {MasteryMonsterLoleNMaskTotalWCComma}</Text>
    	<Divider w='250px' />
    	<Text fontSize='md'><b>Blast Potions Needed:</b><br></br>
    	{totalMasteryMonsterLoleNMaskPotionsNeeded}</Text>

    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{MasteryMonsterLoleNMaskResourcesNeededComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{MasteryMonsterLoleNMaskWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{MasteryMonsterLoleNMaskCoinsComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{totalMasteryMonsterLoleNMaskCoinsWCAttackComma}</Text>

      	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Typical Mastery Cost at this Word Count:<br></br></b>{totalMasteryMonsterTypicalMaskAttackComma}
      	<br></br></Text>
      	</VStack>
        	</Box>}


          {BlastIsShown && LoleNIsShown && StatueIsShown &&
        	<Heading>Quick View</Heading>}

  {BlastIsShown && LoleNIsShown && StatueIsShown &&
<Box rounded='lg'  w='290px' h='700px' pb={5} style={{ backgroundColor: TesvenActive ? "#15391E" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>

   	<Box
    	position='absolute'
    	mt="100px"
    	ml='63px'
    	w='100px'
    	h='100px'
    	align='center'>
        	<Text align='center'>
        	{inputWC}-word monster
        	</Text>
    	</Box>

     	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/8/81/DarkBadge.png/'
  	/>

  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>{input}</b><br></br>
    	Total Word Count: {MasteryMonsterLoleNStatueTotalWCComma}</Text>
    	<Divider w='250px' />
    	<Text fontSize='md'><b>Blast Potions Needed:</b><br></br>
    	{MasteryMonsterLoleNStatuePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{MasteryMonsterLoleNStatueResourcesNeededComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{MasteryMonsterLoleNStatueWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{MasteryMonsterLoleNStatueCoinsComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{totalMasteryMonsterLoleNStatueCoinsWCAttackComma}</Text>
      	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Typical Mastery Cost at this Word Count:<br></br></b>{totalMasteryMonsterTypicalStatueAttackComma}
      	<br></br></Text>
      	</VStack>
        	</Box>}

  {BlastIsShown && LoleNIsShown && BalloonIsShown &&
        	<Heading>Quick View</Heading>}

  {BlastIsShown && LoleNIsShown && BalloonIsShown &&
<Box rounded='lg'  w='290px' h='700px' pb={5} style={{ backgroundColor: TesvenActive ? "#15391E" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>

   	<Box
    	position='absolute'
    	mt="100px"
    	ml='63px'
    	w='100px'
    	h='100px'
    	align='center'>
        	<Text align='center'>
        	{inputWC}-word monster
        	</Text>
    	</Box>

     	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/ff/FireBadge.png/'
  	/>

  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>{input}</b><br></br>
    	Total Word Count: {MasteryMonsterLoleNBalloonTotalWCComma}</Text>
    	<Divider w='250px' />
    	<Text fontSize='md'><b>Blast Potions Needed:</b><br></br>
    	{MasteryMonsterLoleNBalloonPotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{MasteryMonsterLoleNBalloonResourcesNeededComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{MasteryMonsterLoleNBalloonWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{MasteryMonsterLoleNBalloonCoinsComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{totalMasteryMonsterLoleNBalloonCoinsWCAttackComma}</Text>
      	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Typical Mastery Cost at this Word Count:<br></br></b>{totalMasteryMonsterTypicalBalloonAttackComma}
      	<br></br></Text>
      	</VStack>
        	</Box>}

  {BlastIsShown && LoleNIsShown && BookIsShown &&
        	<Heading>Quick View</Heading>}

  {BlastIsShown && LoleNIsShown && BookIsShown &&
<Box rounded='lg'  w='290px' h='700px' pb={5} style={{ backgroundColor: TesvenActive ? "#15391E" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>

   	<Box
    	position='absolute'
    	mt="100px"
    	ml='63px'
    	w='100px'
    	h='100px'
    	align='center'>
        	<Text align='center'>
        	{inputWC}-word monster
        	</Text>
    	</Box>

     	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/9/95/AscendedBadge2.png/'
  	/>

  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>{input}</b><br></br>
    	Total Word Count: {MasteryMonsterLoleNBookTotalWCComma}</Text>
    	<Divider w='250px' />
    	<Text fontSize='md'><b>Blast Potions Needed:</b><br></br>
    	{MasteryMonsterLoleNBookPotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{MasteryMonsterLoleNBookResourcesNeededComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{MasteryMonsterLoleNBookWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{MasteryMonsterLoleNBookCoinsComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{totalMasteryMonsterLoleNBookCoinsWCAttackComma}</Text>
      	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Typical Mastery Cost at this Word Count:<br></br></b>{totalMasteryMonsterTypicalBookAttackComma}
      	<br></br></Text>
      	</VStack>
        	</Box>}





{BlastIsShown && 
            <Heading>Detailed View</Heading>}

{BlastIsShown &&
<Box as="span" flex='1' textAlign='center' padding-top={3}>
  <Text mb='12px' fontSize='2xl'><u><b>Monsters to Fight</b></u></Text>
        </Box>}
        {BlastIsShown &&
        <Container>
        <Text><b>Potion Resources</b></Text>
        <TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
    <Tbody>
      <Tr>
        <Td>
        <Box w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f7/OdysOdees.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Odees</Text>
      {CutoutIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYCutout_OdeesFinal}
      </text>}
      {MaskIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYMask_OdeesFinal}
      </text>}
  	{StatueIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYStatue_OdeesFinal}
  	</text>}
  	{BalloonIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYBalloon_OdeesFinal}
  	</text>}
  	{BookIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYBook_OdeesFinal}
  	</text>}

      {CutoutIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNCutout_OdeesFinal}
      </text>}
      {MaskIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNMask_OdeesFinal}
      </text>}
      {StatueIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNStatue_OdeesFinal}
  	</text>}
  	{BalloonIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNBalloon_OdeesFinal}
  	</text>}
  	{BookIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNBook_OdeesFinal}
  	</text>}
      </VStack>
  </Box>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
        align='center'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/3/33/Musya.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Musya</Text>
  	{CutoutIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYCutout_MusyaDisplay}
  	</text>}
  	{MaskIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYMask_MusyaDisplay}
  	</text>}
      {StatueIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYStatue_MusyaDisplay}
      </text>}
      {BalloonIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYBalloon_MusyaDisplay}
      </text>}
      {BookIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYBook_MusyaDisplay}
      </text>}

  	{CutoutIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNCutout_MusyaDisplay}
  	</text>}
  	{MaskIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNMask_MusyaDisplay}
  	</text>}
  	{StatueIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNStatue_MusyaDisplay}
      </text>}
      {BalloonIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNBalloon_MusyaDisplay}
      </text>}
      {BookIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNBook_MusyaDisplay}
      </text>}


      </VStack>
  </Box>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
       align='center'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/85/Quaruk.png'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Quaruk</Text>
  	{CutoutIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYCutout_QuarukDisplay}
  	</text>}
  	{MaskIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYMask_QuarukDisplay}
  	</text>}
      {StatueIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYStatue_QuarukDisplay}
      </text>}
      {BalloonIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYBalloon_QuarukDisplay}
      </text>}
      {BookIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYBook_QuarukDisplay}
      </text>}

  	{CutoutIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNCutout_QuarukDisplay}
  	</text>}
  	{MaskIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNMask_QuarukDisplay}
  	</text>}
  	{StatueIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNStatue_QuarukDisplay}
      </text>}
      {BalloonIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNBalloon_QuarukDisplay}
      </text>}
      {BookIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNBook_QuarukDisplay}
      </text>}


      </VStack>
  </Box>
        </Td>
      </Tr>    

      <Tr>
        <Td>
        <Box w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/24/Knuff.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Knuff</Text>
  	{CutoutIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYCutout_KnuffDisplay}
  	</text>}
  	{MaskIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYMask_KnuffDisplay}
  	</text>}
      {StatueIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYStatue_KnuffDisplay}
      </text>}
      {BalloonIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYBalloon_KnuffDisplay}
      </text>}
      {BookIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYBook_KnuffDisplay}
      </text>}

  	{CutoutIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNCutout_KnuffDisplay}
  	</text>}
  	{MaskIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNMask_KnuffDisplay}
  	</text>}
  	{StatueIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNStatue_KnuffDisplay}
      </text>}
      {BalloonIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNBalloon_KnuffDisplay}
      </text>}
      {BookIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNBook_KnuffDisplay}
      </text>}

      </VStack>
  </Box>
        </Td>

        <Td>
        <Box justify='center' w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
       align='center'
        boxSize='3rem'
        borderRadius='full'
        src='https://media.4thewords.com/public/monsters/image_1708469171.png'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Sopoi</Text>
  	{CutoutIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYCutout_SopoiDisplay}
  	</text>}
  	{MaskIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYMask_SopoiDisplay}
  	</text>}
      {StatueIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYStatue_SopoiDisplay}
      </text>}
      {BalloonIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYBalloon_SopoiDisplay}
      </text>}
      {BookIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYBook_SopoiDisplay}
      </text>}

  	{CutoutIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNCutout_SopoiDisplay}
  	</text>}
  	{MaskIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNMask_SopoiDisplay}
  	</text>}
  	{StatueIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNStatue_SopoiDisplay}
      </text>}
      {BalloonIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNBalloon_SopoiDisplay}
      </text>}
      {BookIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNBook_SopoiDisplay}
      </text>}

      </VStack>
  </Box>
        </Td>

        <Td>
        <Box justify='center' w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
        align='center'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b2/Mibloom.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Mibloom</Text>
  	{CutoutIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYCutout_MibloomDisplay}
  	</text>}
  	{MaskIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYMask_MibloomDisplay}
  	</text>}
      {StatueIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYStatue_MibloomDisplay}
      </text>}
      {BalloonIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYBalloon_MibloomDisplay}
      </text>}
      {BookIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYBook_MibloomDisplay}
      </text>}

  	{CutoutIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNCutout_MibloomDisplay}
  	</text>}
  	{MaskIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNMask_MibloomDisplay}
  	</text>}
  	{StatueIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNStatue_MibloomDisplay}
      </text>}
      {BalloonIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNBalloon_MibloomDisplay}
      </text>}
      {BookIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNBook_MibloomDisplay}
      </text>}


      </VStack>
  </Box>
        </Td>

      </Tr>    

      <Tr>
        <Td>
        <Box justify='center' w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
       align='center'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/65/Kinguz.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Kinguz</Text>
  	{CutoutIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYCutout_KinguzDisplay}
  	</text>}
  	{MaskIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYMask_KinguzDisplay}
  	</text>}
      {StatueIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYStatue_KinguzDisplay}
      </text>}
      {BalloonIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYBalloon_KinguzDisplay}
      </text>}
      {BookIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYBook_KinguzDisplay}
      </text>}

  	{CutoutIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNCutout_KinguzDisplay}
  	</text>}
  	{MaskIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNMask_KinguzDisplay}
  	</text>}
  	{StatueIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNStatue_KinguzDisplay}
      </text>}
      {BalloonIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNBalloon_KinguzDisplay}
      </text>}
      {BookIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleNBook_KinguzDisplay}
      </text>}



      </VStack>
  </Box>
        </Td>
      </Tr>    


    </Tbody>
  </Table>
</TableContainer>
</Container> }

{BlastIsShown && 
<Container>
        <Text mt='12px'><b>Farm for Coins</b></Text>
        <TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
    <Tbody>
      <Tr>
        <Td>
        <Box w='50px' h='100px' pb={5}>
        <VStack> 
       <Image
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/40/Kuikas.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Kuikas</Text>
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYCutout_KuikasQty}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYMask_KuikasQty}</text>}
      {StatueIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYStatue_KuikasQty}</text>}
     	{BalloonIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYBalloon_KuikasQty}</text>}
    	{BookIsShown && BlastIsShown && <text align='center'>{totalMasteryMonsterLoleYBook_KuikasQty}</text>}
      </VStack>
  </Box>
        </Td>
      </Tr>    
    </Tbody>
  </Table>
</TableContainer>
</Container> }


{GrenadeIsShown &&
<Container>
  <Text>
<b>Note:</b> This guide estimates the coin cost of large creature mastery by combining potion coin costs + coins
 to purchase battle cost, then subtracting the value of the large monster's drops.
  </Text>
</Container>
}

{GrenadeIsShown &&
<Accordion allowMultiple w={350}>
  <AccordionItem>
  <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='center' p={3}>
        <Heading as='h3' size='lg'>Select Monster</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>

      <Box h='300px' overflowY='scroll'>
          <Wrap>
            <WrapItem>
            <Button w='100px' h='140px' pb={5} onClick={handleTesvenClick} style={{ backgroundColor: TesvenActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        BoxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/8a/Tesven.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Tesven<br></br>(2100 words)</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='140px' pb={5} onClick={handleVelsounClick} style={{ backgroundColor: VelsounActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        BoxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/9d/Velsoun.png'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Velsoun<br></br>(2430 words)</Text>
      </VStack>
            </Button>
            </WrapItem>

            <WrapItem>
            <Button w='100px' h='140px' pb={5} onClick={handleAlphaTamboClick} style={{ backgroundColor: AlphaTamboActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        BoxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/6d/Alpha_Tambo.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Alpha Tambo<br></br>(2500 words)</Text>
      </VStack>
            </Button>
            </WrapItem>

            <WrapItem>
            <Button w='100px' h='140px' pb={5} onClick={handleAzadiClick} style={{ backgroundColor: AzadiActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        BoxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a8/Azadi.png'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Azadi<br></br>(2500 words)</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='140px' pb={5} onClick={handleTareitClick} style={{ backgroundColor: TareitActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        BoxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/9f/Tareit.png'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Tareit<br></br>(2999 words)</Text>
      </VStack>
            </Button>
            </WrapItem>

            <WrapItem>
            <Button w='100px' h='140px' pb={5} onClick={handleBabuClick} style={{ backgroundColor: BabuActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        BoxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b0/Babu.png'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Babu<br></br>(3000 words)</Text>
      </VStack>
            </Button>
            </WrapItem>

            
            <WrapItem>
            <Button w='100px' h='140px' pb={5} onClick={handleDustSuwoClick} style={{ backgroundColor: DustSuwoActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        BoxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/dd/Dust_Suwo.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Dust Suwo<br></br>(3000 words)</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='140px' pb={5} onClick={handleSuwoClick} style={{ backgroundColor: SuwoActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        BoxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/Suwo.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Suwo<br></br>(3000 words)</Text>
      </VStack>
            </Button>
            </WrapItem>

            <WrapItem>
            <Button w='100px' h='140px' pb={5} onClick={handleRakstalClick} style={{ backgroundColor: RakstalActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        BoxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/2f/Rakstal.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Rakstal<br></br>(3154 words)</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='140px' pb={5} onClick={handleShamanLuziaClick} style={{ backgroundColor: ShamanLuziaActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        BoxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/41/Shaman_Luzia.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Shaman Luzia<br></br>(3600 words)</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='140px' pb={5} onClick={handleDarkReflectionClick} style={{ backgroundColor: DarkReflectionActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        BoxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/d6/Dark_Reflection.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Dark Reflection<br></br>(4444 words)</Text>
      </VStack>
            </Button>
            </WrapItem>

            <WrapItem>
            <Button w='100px' h='140px' pb={5} onClick={handleReflectionClick} style={{ backgroundColor: ReflectionActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        BoxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/20/Reflection.png'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Reflection<br></br>(4444 words)</Text>
      </VStack>
            </Button>
            </WrapItem>

            <WrapItem>
            <Button w='100px' h='140px' pb={5} onClick={handleCaravanClick} style={{ backgroundColor: CaravanActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        BoxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/2e/Caravan.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Caravan<br></br>(5000 words)</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='140px' pb={5} onClick={handleKultalvaClick} style={{ backgroundColor: KultalvaActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        BoxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/87/Kultalva.png'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Kultalva<br></br>(5000 words)</Text>
      </VStack>
            </Button>
            </WrapItem>

            <WrapItem>
            <Button w='100px' h='140px' pb={5} onClick={handleMiclanClick} style={{ backgroundColor: MiclanActive ? "#2d1b59" : "#2D3748" }}> 
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        BoxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/7d/Miclan.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Miclan<br></br>(5000 words)</Text>
      </VStack>
            </Button>
            </WrapItem>

            <WrapItem>
            <Button w='100px' h='140px' pb={5}  onClick={handleRiverGoddessClick} style={{ backgroundColor: RiverGoddessActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        BoxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/73/River_Goddess.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>River Goddess<br></br>(5000 words)</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='140px' pb={5}onClick={handleKingMaiClick} style={{ backgroundColor: KingMaiActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        BoxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/8b/King_Mai.png'
        mr='5px'
      /> <Text fontSize='sm' align='center'>King Mai<br></br>(5000 words)</Text>
      </VStack>
            </Button>
            </WrapItem>

            <WrapItem>
            <Button w='100px' h='140px' pb={5} onClick={handleDustedLuziaClick} style={{ backgroundColor: DustedLuziaActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        BoxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/6b/Dusted_Luzia.png'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Dusted Luzia<br></br>(8160 words)</Text>
      </VStack>
            </Button>
            </WrapItem>

            <WrapItem>
            <Button w='100px' h='140px' pb={5} onClick={handleDustyKingMaiClick} style={{ backgroundColor: DustyKingMaiActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/23/King_Mai_(Corrupted).png/'
        mr='5px'
      /> <Text fontSize='xs' align='center'>Dusty King Mai<br></br>(15000 words)</Text>
      </VStack>
            </Button>
            </WrapItem>

          </Wrap>
          </Box>
      <br></br>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
  <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='center' p={3}>
        <Heading as='h3' size='lg'>Select Mastery Goal</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>

      <Box h='150px' overflowY='scroll'>
          <Wrap>
            <WrapItem>
            <Button w='100px' h='140px' pb={5} onClick={handleCutoutClick} style={{ backgroundColor: CutoutActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/73/Winter_Cordu_Cutout.png'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Cutout<br></br>(500 battles)</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='140px' pb={5} onClick={handleMaskClick} style={{ backgroundColor: MaskActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/90/Winter_Cordu_Wardrobe_Mask.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Mask<br></br>(1000 battles)</Text>
      </VStack>
            </Button>
            </WrapItem>

{NullIsShown &&
            <WrapItem>
            <Button w='100px' h='140px' pb={5} onClick={handleStatueClick} style={{ backgroundColor: StatueActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/40/Winter_Cordu_Statue.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Statue<br></br>(2500 battles)</Text>
      </VStack>
            </Button>
            </WrapItem>}
            
{NullIsShown &&
            <WrapItem>
            <Button w='100px' h='140px' pb={5} onClick={handleBalloonClick} style={{ backgroundColor: BalloonActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a2/Winter_Cordu_Wardrobe_Balloon.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Balloon<br></br>(5000 battles)</Text>
      </VStack>
            </Button>
            </WrapItem>}

{NullIsShown &&

            <WrapItem>
            <Button w='100px' h='140px' pb={5} onClick={handleBookClick} style={{ backgroundColor: BookActive ? "#2d1b59" : "#2D3748" }}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/94/Winter_Cordu_Book_Wardrobe.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Book<br></br>(10,000 battles)</Text>
      </VStack>
            </Button>
            </WrapItem>}
          </Wrap>
          </Box>
      <br></br>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
  <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='center' p={3}>
        <Heading as='h3' size='lg'>Monsters Already Fought</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
<Container align='center'>

      <Box align='center' h='300px' overflowY='scroll'>

{TesvenIsShown &&
      <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/8a/Tesven.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Tesven</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleMasteryMonsterChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box> }  
            
{VelsounIsShown &&
      <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/9d/Velsoun.png'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Velsoun</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleMasteryMonsterChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box> }       

{AlphaTamboIsShown &&
      <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/6d/Alpha_Tambo.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Alpha Tambo</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleMasteryMonsterChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box> }  

{AzadiIsShown &&
      <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a8/Azadi.png'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Azadi</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleMasteryMonsterChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box> }  

{TareitIsShown &&
      <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/9f/Tareit.png'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Tareit</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleMasteryMonsterChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box> }  

{BabuIsShown &&
      <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b0/Babu.png'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Babu</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleMasteryMonsterChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box> }  

{DustSuwoIsShown &&
      <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/dd/Dust_Suwo.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Dust Suwo</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleMasteryMonsterChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box> }  

{SuwoIsShown &&
      <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/Suwo.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Suwo</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleMasteryMonsterChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box> }  


{RakstalIsShown &&
      <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/2f/Rakstal.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Rakstal</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleMasteryMonsterChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box> }  

{ShamanLuziaIsShown &&
      <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/41/Shaman_Luzia.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Shaman Luzia</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleMasteryMonsterChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box> }  


{DarkReflectionIsShown &&
      <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/d6/Dark_Reflection.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Dark Reflection</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleMasteryMonsterChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box> }  

{ReflectionIsShown &&
      <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/20/Reflection.png'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Reflection</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleMasteryMonsterChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box> }  

{CaravanIsShown &&
      <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/2e/Caravan.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Caravan</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleMasteryMonsterChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box> }  

{KultalvaIsShown &&
      <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/87/Kultalva.png'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Kultalva</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleMasteryMonsterChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box> }  

{MiclanIsShown &&
      <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/7d/Miclan.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Miclan</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleMasteryMonsterChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box> }  

{RiverGoddessIsShown &&
      <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/73/River_Goddess.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>River Goddess</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleMasteryMonsterChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box> }  

{KingMaiIsShown &&
      <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/8b/King_Mai.png'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>King Mai</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleMasteryMonsterChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box> }  

{DustedLuziaIsShown &&
      <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/6b/Dusted_Luzia.png'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Dusted Luzia</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleMasteryMonsterChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box> }  

{DustyKingMaiIsShown &&
      <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/23/King_Mai_(Corrupted).png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Dusty King Mai</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleMasteryMonsterChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box> }  

      <Box w='250px' h='100px' pb={5} backgroundColor='#1A202C'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f7/OdysOdees.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Odees/Odys</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Odees' onInput={(e) => handleOdeesChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/3/33/Musya.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Musya</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleMusyaChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/8/85/Quaruk.png'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Quaruk</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Quaruk' onInput={(e) => handleQuarukChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/2/24/Knuff.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Knuff</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Knuff' onInput={(e) => handleKnuffChange(e.target.value)} />
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
        src='https://media.4thewords.com/public/monsters/image_1708469171.png'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Sopoi</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Sopoi' onInput={(e) => handleSopoiChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/b/b2/Mibloom.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Mibloom</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Mibloom' onInput={(e) => handleMibloomChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/6/65/Kinguz.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Kinguz</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Kinguz' onInput={(e) => handleKinguzChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box>    


          </Box>
          </Container>
      <br></br>
    </AccordionPanel>
  </AccordionItem>

{NullIsShown &&
<AccordionItem>
  <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='center' p={3}>
        <Heading as='h3' size='lg'>Materials You Already Have</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
{!VelsounIsShown && !AlphaTamboIsShown && !TareitIsShown &&
!BabuIsShown && !RakstalIsShown && !ShamanLuziaIsShown && !MiclanIsShown &&
!KingMaiIsShown && !DustedLuziaIsShown && !DustyKingMaiIsShown && !TesvenIsShown &&
!AzadiIsShown && !DustSuwoIsShown && !SuwoIsShown && !DarkReflectionIsShown && !ReflectionIsShown &&
!CaravanIsShown && !KultalvaIsShown && !RiverGoddessIsShown &&
    <Container align='center'>
      <Box align='center' h='70px' overflowY='scroll'>
        <Text>
          Select a monster above for this information to populate :)
        </Text>
</Box></Container>}


    {TesvenIsShown && GrenadeIsShown &&
<Container align='center'>
      <Box align='center' h='100px' overflowY='scroll'>

            <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
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
        <Text fontSize='sm' align='center'>Coins</Text>
        <NumberInput defaultValue={0} min={0} max={10000000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleCoinsChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box>            
          </Box>
          </Container>}

    {AzadiIsShown && GrenadeIsShown &&
<Container align='center'>
      <Box align='center' h='100px' overflowY='scroll'>

            <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
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
        <Text fontSize='sm' align='center'>Coins</Text>
        <NumberInput defaultValue={0} min={0} max={10000000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleCoinsChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box>            
          </Box>
          </Container>}

    {DustSuwoIsShown && GrenadeIsShown &&
<Container align='center'>
      <Box align='center' h='100px' overflowY='scroll'>

            <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
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
        <Text fontSize='sm' align='center'>Coins</Text>
        <NumberInput defaultValue={0} min={0} max={10000000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleCoinsChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box>            
          </Box>
          </Container>}


    {SuwoIsShown && GrenadeIsShown &&
<Container align='center'>
      <Box align='center' h='100px' overflowY='scroll'>

            <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
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
        <Text fontSize='sm' align='center'>Coins</Text>
        <NumberInput defaultValue={0} min={0} max={10000000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleCoinsChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box>            
          </Box>
          </Container>}


    {DarkReflectionIsShown && GrenadeIsShown &&
<Container align='center'>
      <Box align='center' h='100px' overflowY='scroll'>

            <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
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
        <Text fontSize='sm' align='center'>Coins</Text>
        <NumberInput defaultValue={0} min={0} max={10000000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleCoinsChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box>            
          </Box>
          </Container>}


    {ReflectionIsShown && GrenadeIsShown &&
<Container align='center'>
      <Box align='center' h='100px' overflowY='scroll'>

            <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
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
        <Text fontSize='sm' align='center'>Coins</Text>
        <NumberInput defaultValue={0} min={0} max={10000000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleCoinsChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box>            
          </Box>
          </Container>}


    {CaravanIsShown && GrenadeIsShown &&
<Container align='center'>
      <Box align='center' h='100px' overflowY='scroll'>

            <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
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
        <Text fontSize='sm' align='center'>Coins</Text>
        <NumberInput defaultValue={0} min={0} max={10000000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleCoinsChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box>            
          </Box>
          </Container>}


    {KultalvaIsShown && GrenadeIsShown &&
<Container align='center'>
      <Box align='center' h='100px' overflowY='scroll'>

            <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
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
        <Text fontSize='sm' align='center'>Coins</Text>
        <NumberInput defaultValue={0} min={0} max={10000000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleCoinsChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box>            
          </Box>
          </Container>}


    {RiverGoddessIsShown && GrenadeIsShown &&
<Container align='center'>
      <Box align='center' h='100px' overflowY='scroll'>

            <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
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
        <Text fontSize='sm' align='center'>Coins</Text>
        <NumberInput defaultValue={0} min={0} max={10000000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleCoinsChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box>            
          </Box>
          </Container>}

          {VelsounIsShown && GrenadeIsShown &&
<Container align='center'>

      <Box align='center' h='300px' overflowY='scroll'>
            <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/60/Leafbreastplate_md.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Leaf Breastplate</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Odees' onInput={(e) => handleLeafBreastplateChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/a/a6/Spiderlegs_md.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Spider Legs</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleSpiderLegsChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/f/f9/Feathers_md.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Feathers</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleFeathersChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/f/fc/Leaves_md.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Leaves</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Quaruk' onInput={(e) => handleLeavesChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Coins</Text>
        <NumberInput defaultValue={0} min={0} max={10000000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleCoinsChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box>            
          </Box>
          </Container>}

  {AlphaTamboIsShown && GrenadeIsShown &&
<Container align='center'>

      <Box align='center' h='200px' overflowY='scroll'>
            <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/ee/Roberries.png'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Roberries</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Odees' onInput={(e) => handleRoberriesChange(e.target.value)} />
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
        <Text fontSize='sm' align='center'>Coins</Text>
        <NumberInput defaultValue={0} min={0} max={10000000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleCoinsChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box>            
     
          </Box>
          </Container>}

       {BabuIsShown && GrenadeIsShown &&
<Container align='center'>

      <Box align='center' h='300px' overflowY='scroll'>
            <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/05/Steel_chains.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Steel Chains</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Odees' onInput={(e) => handleSteelChainsChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Steel</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Odees' onInput={(e) => handleSteelChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/7/76/Rawsteel_md.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Raw Steel</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleRawSteelChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/f/fc/Leaves_md.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Leaves</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Quaruk' onInput={(e) => handleLeavesChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/4/40/Piece-of-parchment.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Piece of Parchment</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handlePieceofParchChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/a/a6/Dried-pulp.png'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Dried Pulp</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleDriedPulpChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/b/b3/Dust_md.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Dust</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Quaruk' onInput={(e) => handleDustChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/b/b2/Kuaywood_md.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Wood</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleWoodChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/d/d3/Blue-essence-ink.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Blue Essence Ink</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleBlueEssInkChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/d/d5/Glass_md.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Glass Bar</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleGlassBarChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/1/19/Wignowessence_md.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Essence</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Quaruk' onInput={(e) => handleEssChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/e/e2/Refined-dust.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Refined Dust</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleRDChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Coins</Text>
        <NumberInput defaultValue={0} min={0} max={10000000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleCoinsChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box>            
          </Box>
          </Container>}


  {RakstalIsShown && GrenadeIsShown &&
<Container align='center'>

      <Box align='center' h='200px' overflowY='scroll'>
            <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/08/Swamp-moss.png'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Swamp Moss</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Odees' onInput={(e) => handleSwampMossChange(e.target.value)} />
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
        <Text fontSize='sm' align='center'>Coins</Text>
        <NumberInput defaultValue={0} min={0} max={10000000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleCoinsChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box>            
     
          </Box>
          </Container>}

       {BabuIsShown && GrenadeIsShown &&
<Container align='center'>

      <Box align='center' h='300px' overflowY='scroll'>
            <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/05/Steel_chains.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Steel Chains</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Odees' onInput={(e) => handleSteelChainsChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Steel</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Odees' onInput={(e) => handleSteelChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/7/76/Rawsteel_md.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Raw Steel</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleRawSteelChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/f/fc/Leaves_md.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Leaves</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Quaruk' onInput={(e) => handleLeavesChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/4/40/Piece-of-parchment.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Piece of Parchment</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handlePieceofParchChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/a/a6/Dried-pulp.png'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Dried Pulp</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleDriedPulpChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/b/b3/Dust_md.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Dust</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Quaruk' onInput={(e) => handleDustChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/b/b2/Kuaywood_md.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Wood</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleWoodChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/d/d3/Blue-essence-ink.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Blue Essence Ink</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleBlueEssInkChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/d/d5/Glass_md.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Glass Bar</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleGlassBarChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/1/19/Wignowessence_md.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Essence</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Quaruk' onInput={(e) => handleEssChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/e/e2/Refined-dust.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Refined Dust</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleRDChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Coins</Text>
        <NumberInput defaultValue={0} min={0} max={10000000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleCoinsChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box>            
          </Box>
          </Container>}


      <br></br>
    </AccordionPanel>
  </AccordionItem>}


  </Accordion>}
 

{NullIsShown && GrenadeIsShown &&
  <Container align='center'>
    <VStack>
<Text><b>Dusted Luzia</b> has a battle cost (1 Steel Axe + 1 Steel Shield)<br></br> Select a source for farming battle cost:</Text><br></br>
<Wrap justify='center'>
        <WrapItem>
        <Button variant='outline' onClick={handleCoinsClick} style={{ backgroundColor: CoinsActive ? "#2d1b59" : "transparent" }}>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        mr='12px'
      />
      <span>Buy with Coins</span></Button>
      </WrapItem>

      <WrapItem>
        <Button variant='outline' onClick={handleComboClick} style={{ backgroundColor: ComboActive ? "#2d1b59" : "transparent" }}>
        <Image
        boxSize='2rem'
        src='https://static.wikia.nocookie.net/4thewords/images/9/9e/Better-together.png'
        mr='12px'
      />
      <span>Combo of both</span></Button>
      </WrapItem>

      <WrapItem>
        <Button variant='outline' onClick= {handleBattleClick} style={{ backgroundColor: BattleActive ? "#2d1b59" : "transparent" }}>      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/29/1576709093_for-the-valley.png/'
        mr='12px'
      />
      <span>Battle Monsters</span></Button></WrapItem>
        </Wrap>
</VStack>
</Container>}

{NullIsShown && GrenadeIsShown &&
        <Accordion allowMultiple w={350}>
<AccordionItem>
  <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='center' p={3}>
        <Heading as='h3' size='lg'>Materials You Already Have</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
<Container align='center'>

      <Box align='center' h='300px' overflowY='scroll'>
            <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Steel</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Odees' onInput={(e) => handleSteelChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/7/76/Rawsteel_md.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Raw Steel</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleRawSteelChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/f/fc/Leaves_md.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Leaves</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Quaruk' onInput={(e) => handleLeavesChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/0/0c/Hardwood_md.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Hardwood</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleHWChange(e.target.value)} />
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
        src='https://static.wikia.nocookie.net/4thewords/images/e/ea/Rivergrass_md.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>River Grass</Text>
        <NumberInput defaultValue={0} min={0} max={100000} size='md' w='100px'>
  <NumberInputField id='Quaruk' onInput={(e) => handleRGChange(e.target.value)} />
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
        <Text fontSize='sm' align='center'>Coins</Text>
        <NumberInput defaultValue={0} min={0} max={10000000} size='md' w='100px'>
  <NumberInputField id='Musya' onInput={(e) => handleCoinsChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box>            


          </Box>
          </Container>
      <br></br>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
}


<Spacer></Spacer>
<Spacer></Spacer>
          </VStack>
<Divider />
{GrenadeIsShown &&
<Container>
<br></br>
<Heading>Quick View</Heading><br></br>


<Container align='center'>

{NullIsShown && !VelsounIsShown && !AlphaTamboIsShown && !TareitIsShown &&
!BabuIsShown && !RakstalIsShown && !ShamanLuziaIsShown && !MiclanIsShown &&
!KingMaiIsShown && !DustedLuziaIsShown && !DustyKingMaiIsShown && 
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: 
TesvenActive ? "#15391E" : "#1A202C" &&
AzadiActive ? "#2b0707" : "#1A202C" &&
DustSuwoActive ? "#2b0723" : "#1A202C" &&
SuwoActive ? "#18292b" : "#1A202C" &&
DarkReflectionActive ? "#0d030f" : "#1A202C" &&
ReflectionActive ? "#0d211f" : "#1A202C" &&
CaravanActive ? "#423222" : "#1A202C" &&
KultalvaActive ? "#191b21" : "#1A202C" &&
RiverGoddessActive ? "#171321" : "#1A202C" }}>
       <VStack>


{TesvenIsShown && CutoutIsShown &&
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/8a/Tesven.png/'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
      />
      </Box>}
{TesvenIsShown && CutoutIsShown &&
        <Text fontSize='lg' textAlign='center'><b>Tesven</b><br></br>
        # to Fight: {totalMasteryMonsterCutout}</Text>}

{TesvenIsShown && MaskIsShown &&
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/8a/Tesven.png/'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
      />
      </Box>}
{TesvenIsShown && MaskIsShown &&
        <Text fontSize='lg' textAlign='center'><b>Tesven</b><br></br>
        # to Fight: {totalMasteryMonsterMask}</Text>}


        {AzadiIsShown && CutoutIsShown &&
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a8/Azadi.png/'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
      />
      </Box>}
{AzadiIsShown && CutoutIsShown &&
        <Text fontSize='lg' textAlign='center'><b>Azadi</b><br></br>
        # to Fight: {totalMasteryMonsterCutout}</Text>}

{AzadiIsShown && MaskIsShown &&
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a8/Azadi.png/'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
      />
      </Box>}
{AzadiIsShown && MaskIsShown &&
        <Text fontSize='lg' textAlign='center'><b>Azadi</b><br></br>
        # to Fight: {totalMasteryMonsterMask}</Text>}

{DustSuwoIsShown && CutoutIsShown &&
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/dd/Dust_Suwo.png/'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
      />
      </Box>}
{DustSuwoIsShown && CutoutIsShown &&
        <Text fontSize='lg' textAlign='center'><b>Dust Suwo</b><br></br>
        # to Fight: {totalMasteryMonsterCutout}</Text>}

{DustSuwoIsShown && MaskIsShown &&
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/dd/Dust_Suwo.png/'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
      />
      </Box>}
{DustSuwoIsShown && MaskIsShown &&
        <Text fontSize='lg' textAlign='center'><b>Dust Suwo</b><br></br>
        # to Fight: {totalMasteryMonsterMask}</Text>}


{SuwoIsShown && CutoutIsShown &&
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/Suwo.png/'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
      />
      </Box>}
{SuwoIsShown && CutoutIsShown &&
        <Text fontSize='lg' textAlign='center'><b>Suwo</b><br></br>
        # to Fight: {totalMasteryMonsterCutout}</Text>}

{SuwoIsShown && MaskIsShown &&
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/Suwo.png/'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
      />
      </Box>}
{SuwoIsShown && MaskIsShown &&
        <Text fontSize='lg' textAlign='center'><b>Suwo</b><br></br>
        # to Fight: {totalMasteryMonsterMask}</Text>}

{DarkReflectionIsShown && CutoutIsShown &&
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/d6/Dark_Reflection.png/'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
      />
      </Box>}
{DarkReflectionIsShown && CutoutIsShown &&
        <Text fontSize='lg' textAlign='center'><b>Dark Reflection</b><br></br>
        # to Fight: {totalMasteryMonsterCutout}</Text>}

{DarkReflectionIsShown && MaskIsShown &&
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/d6/Dark_Reflection.png/'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
      />
      </Box>}
{DarkReflectionIsShown && MaskIsShown &&
        <Text fontSize='lg' textAlign='center'><b>Dark Reflection</b><br></br>
        # to Fight: {totalMasteryMonsterMask}</Text>}


{ReflectionIsShown && CutoutIsShown &&
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/20/Reflection.png'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
      />
      </Box>}
{ReflectionIsShown && CutoutIsShown &&
        <Text fontSize='lg' textAlign='center'><b>Reflection</b><br></br>
        # to Fight: {totalMasteryMonsterCutout}</Text>}

{ReflectionIsShown && MaskIsShown &&
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/20/Reflection.png'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
      />
      </Box>}
{ReflectionIsShown && MaskIsShown &&
        <Text fontSize='lg' textAlign='center'><b>Reflection</b><br></br>
        # to Fight: {totalMasteryMonsterMask}</Text>}


{CaravanIsShown && CutoutIsShown &&
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/2e/Caravan.png/'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
      />
      </Box>}
{CaravanIsShown && CutoutIsShown &&
        <Text fontSize='lg' textAlign='center'><b>Caravan</b><br></br>
        # to Fight: {totalMasteryMonsterCutout}</Text>}

{CaravanIsShown && MaskIsShown &&
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/2e/Caravan.png/'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
      />
      </Box>}
{CaravanIsShown && MaskIsShown &&
        <Text fontSize='lg' textAlign='center'><b>Caravan</b><br></br>
        # to Fight: {totalMasteryMonsterMask}</Text>}


{KultalvaIsShown && CutoutIsShown &&
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/87/Kultalva.png/'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
      />
      </Box>}
{KultalvaIsShown && CutoutIsShown &&
        <Text fontSize='lg' textAlign='center'><b>Kultalva</b><br></br>
        # to Fight: {totalMasteryMonsterCutout}</Text>}

{KultalvaIsShown && MaskIsShown &&
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/87/Kultalva.png/'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
      />
      </Box>}
{KultalvaIsShown && MaskIsShown &&
        <Text fontSize='lg' textAlign='center'><b>Kultalva</b><br></br>
        # to Fight: {totalMasteryMonsterMask}</Text>}

{RiverGoddessIsShown && CutoutIsShown &&
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='60px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/73/River_Goddess.png/'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
      />
      </Box>}
{RiverGoddessIsShown && CutoutIsShown &&
        <Text fontSize='lg' textAlign='center'><b>River Goddess</b><br></br>
        # to Fight: {totalMasteryMonsterCutout}</Text>}

{RiverGoddessIsShown && MaskIsShown &&
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='60px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/73/River_Goddess.png/'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
      />
      </Box>}
{RiverGoddessIsShown && MaskIsShown &&
        <Text fontSize='lg' textAlign='center'><b>River Goddess</b><br></br>
        # to Fight: {totalMasteryMonsterMask}</Text>}



{LoleYIsShown && CutoutIsShown &&
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TotalLoleYCutoutWCComma}
          </Text>}
{LoleYIsShown && CutoutIsShown &&
        <Divider w='250px' />}

{LoleNIsShown && CutoutIsShown &&
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TotalLoleNCutoutWCComma}
          </Text>}
{LoleNIsShown && CutoutIsShown &&
        <Divider w='250px' />}



{LoleYIsShown && MaskIsShown &&
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TotalLoleYMaskWCComma}
          </Text>}
{LoleYIsShown && MaskIsShown &&
        <Divider w='250px' />}

{LoleNIsShown && MaskIsShown &&
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TotalLoleNMaskWCComma}
          </Text>}
{LoleNIsShown && MaskIsShown &&
        <Divider w='250px' />}



{LoleYIsShown && CutoutIsShown &&
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleYCutoutResourcesComma}</Text>}

{LoleNIsShown && CutoutIsShown &&
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleNCutoutResourcesComma}</Text>}

{LoleYIsShown && CutoutIsShown &&
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleYCutoutWCComma}
        </Text>}
{LoleYIsShown && CutoutIsShown &&
        <Divider mt='3px' w='250px' />}

{LoleNIsShown && CutoutIsShown &&
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleNCutoutWCComma}
        </Text>}
{LoleNIsShown && CutoutIsShown &&
        <Divider mt='3px' w='250px' />}



{LoleYIsShown && MaskIsShown &&
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleYMaskResourcesComma}</Text>}

{LoleNIsShown && MaskIsShown &&
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleNMaskResourcesComma}</Text>}

{LoleYIsShown && MaskIsShown &&
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleYMaskWCComma}
        </Text>}
{LoleYIsShown && MaskIsShown &&
        <Divider mt='3px' w='250px' />}

{LoleNIsShown && MaskIsShown &&
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleNMaskWCComma}
        </Text>}
{LoleNIsShown && MaskIsShown &&
        <Divider mt='3px' w='250px' />}




{LoleYIsShown && CutoutIsShown &&
        <Text fontSize='md'><b>Coins Needed:<br></br></b>
        {TotalLoleBothCutoutPotionCostComma}
          <br></br></Text>}

{LoleNIsShown && CutoutIsShown &&
        <Text fontSize='md'><b>Coins Needed:<br></br></b>
        {TotalLoleBothCutoutPotionCostComma}
          <br></br></Text>}

{LoleYIsShown && CutoutIsShown &&
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalLoleBothCutoutPotionCostWCComma}</Text>}

{LoleNIsShown && CutoutIsShown &&
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalLoleBothCutoutPotionCostWCComma}</Text>}



{LoleYIsShown && MaskIsShown &&
        <Text fontSize='md'><b>Coins Needed:<br></br></b>
        {TotalLoleBothMaskPotionCostComma}
          <br></br></Text>}

{LoleNIsShown && MaskIsShown &&
        <Text fontSize='md'><b>Coins Needed:<br></br></b>
        {TotalLoleBothMaskPotionCostComma}
          <br></br></Text>}

{LoleYIsShown && MaskIsShown &&
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalLoleBothMaskPotionCostWCComma}</Text>}

{LoleNIsShown && MaskIsShown &&
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalLoleBothMaskPotionCostWCComma}</Text>}




          </VStack>
            </Box>}

{TesvenIsShown && GrenadeIsShown && LoleYIsShown && CutoutIsShown && 
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: TesvenActive ? "#15391E" : "#2D3748" }}>
       <VStack>
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/8a/Tesven.png/'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
      />
      </Box>
        <Text fontSize='lg' textAlign='center'><b>Tesven</b><br></br>
        # to Fight: {totalMasteryMonsterCutout}</Text>
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TesvenWCLoleYCutoutComma}
          </Text>
        <Divider w='250px' />
        <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleY_GrenadePotionsNeededComma}</Text>
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleYCutoutResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleYCutoutWCComma}
        </Text>

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coins Needed:<br></br></b>{TesvenCoinsNeededCutoutComma}
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TesvenKuikasWCCutoutComma}</Text>
          </VStack>
            </Box>}

{TesvenIsShown && GrenadeIsShown && LoleNIsShown && CutoutIsShown && 
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: TesvenActive ? "#15391E" : "#2D3748" }}>
       <VStack>
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/8a/Tesven.png/'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
      />
      </Box>
        <Text fontSize='lg' textAlign='center'><b>Tesven</b><br></br>
        # to Fight: {totalMasteryMonsterCutout}</Text>
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TesvenWCLoleNCutoutComma}
          </Text>
        <Divider w='250px' />
        <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleN_GrenadePotionsNeededComma}</Text>
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleNCutoutResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleNCutoutWCComma}
        </Text>

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coins Needed:<br></br></b>{TesvenCoinsNeededCutoutComma}
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TesvenKuikasWCCutoutComma}</Text>
          </VStack>
            </Box>}

{TesvenIsShown && GrenadeIsShown && LoleYIsShown && MaskIsShown && 
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: TesvenActive ? "#15391E" : "#2D3748" }}>
       <VStack>
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/8a/Tesven.png/'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
      />
      </Box>
        <Text fontSize='lg' textAlign='center'><b>Tesven</b><br></br>
        # to Fight: {totalMasteryMonsterMask}</Text>
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TesvenWCLoleYMaskComma}
          </Text>
        <Divider w='250px' />
        <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleY_GrenadePotionsNeededComma}</Text>
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleYMaskResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleYMaskWCComma}
        </Text>

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coins Needed:<br></br></b>{TesvenCoinsNeededMaskComma}
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TesvenKuikasWCMaskComma}</Text>
          </VStack>
            </Box>}

{TesvenIsShown && GrenadeIsShown && LoleNIsShown && MaskIsShown && 
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: TesvenActive ? "#15391E" : "#2D3748" }}>
       <VStack>
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/8a/Tesven.png/'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
      />
      </Box>
        <Text fontSize='lg' textAlign='center'><b>Tesven</b><br></br>
        # to Fight: {totalMasteryMonsterMask}</Text>
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TesvenWCLoleNMaskComma}
          </Text>
        <Divider w='250px' />
        <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleN_GrenadePotionsNeededComma}</Text>
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleNMaskResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleNMaskWCComma}
        </Text>

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coins Needed:<br></br></b>{TesvenCoinsNeededMaskComma}
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TesvenKuikasWCMaskComma}</Text>
          </VStack>
            </Box>}            



{AzadiIsShown && GrenadeIsShown && LoleYIsShown && CutoutIsShown &&
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: AzadiActive ? "#2b0707" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/a/a8/Azadi.png'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Azadi</b><br></br>
    	# to Fight: {totalMasteryMonsterCutout}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{AzadiWCLoleYCutoutComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleY_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleYCutoutResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleYCutoutWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{AzadiCoinsNeededCutoutComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{AzadiKuikasWCCutoutComma}</Text>
      	</VStack>
        	</Box>}

{AzadiIsShown && GrenadeIsShown && LoleNIsShown && CutoutIsShown &&
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: AzadiActive ? "#2b0707" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/a/a8/Azadi.png'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Azadi</b><br></br>
    	# to Fight: {AzadiWCLoleNCutoutComma}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{0}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleN_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleNCutoutResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleNCutoutWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{AzadiCoinsNeededCutoutComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{AzadiKuikasWCCutoutComma}</Text>
      	</VStack>
        	</Box>}

{AzadiIsShown && GrenadeIsShown && LoleYIsShown && MaskIsShown &&
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: AzadiActive ? "#2b0707" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/a/a8/Azadi.png'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Azadi</b><br></br>
    	# to Fight: {totalMasteryMonsterMask}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{AzadiWCLoleYMaskComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleY_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleYMaskResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleYMaskWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{AzadiCoinsNeededMaskComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{AzadiKuikasWCMaskComma}</Text>
      	</VStack>
        	</Box>}

{AzadiIsShown && GrenadeIsShown && LoleNIsShown && MaskIsShown &&
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: AzadiActive ? "#2b0707" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/a/a8/Azadi.png'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Azadi</b><br></br>
    	# to Fight: {totalMasteryMonsterMask}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{AzadiWCLoleNMaskComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleN_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleNMaskResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleNMaskWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{AzadiCoinsNeededMaskComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{AzadiKuikasWCMaskComma}</Text>
      	</VStack>
        	</Box>}     


          {DustSuwoIsShown && GrenadeIsShown && LoleYIsShown && CutoutIsShown &&
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: DustSuwoActive ? "#2b0723" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/d/dd/Dust_Suwo.png/'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Dust Suwo</b><br></br>
    	# to Fight: {totalMasteryMonsterCutout}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{DustSuwoWCLoleYCutoutComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleY_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleYCutoutResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleYCutoutWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{DustSuwoCoinsNeededCutoutComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{DustSuwoKuikasWCCutoutComma}</Text>
      	</VStack>
        	</Box>}

{DustSuwoIsShown && GrenadeIsShown && LoleNIsShown && CutoutIsShown &&
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: DustSuwoActive ? "#2b0723" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/d/dd/Dust_Suwo.png/'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Dust Suwo</b><br></br>
    	# to Fight: {DustSuwoWCLoleNCutoutComma}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{0}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleN_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleNCutoutResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleNCutoutWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{DustSuwoCoinsNeededCutoutComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{DustSuwoKuikasWCCutoutComma}</Text>
      	</VStack>
        	</Box>}

{DustSuwoIsShown && GrenadeIsShown && LoleYIsShown && MaskIsShown &&
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: DustSuwoActive ? "#2b0723" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/d/dd/Dust_Suwo.png/'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Dust Suwo</b><br></br>
    	# to Fight: {totalMasteryMonsterMask}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{DustSuwoWCLoleYMaskComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleY_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleYMaskResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleYMaskWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{DustSuwoCoinsNeededMaskComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{DustSuwoKuikasWCMaskComma}</Text>
      	</VStack>
        	</Box>}

{DustSuwoIsShown && GrenadeIsShown && LoleNIsShown && MaskIsShown &&
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: DustSuwoActive ? "#2b0723" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/d/dd/Dust_Suwo.png/'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Dust Suwo</b><br></br>
    	# to Fight: {totalMasteryMonsterMask}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{DustSuwoWCLoleNMaskComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleN_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleNMaskResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleNMaskWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{DustSuwoCoinsNeededMaskComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{DustSuwoKuikasWCMaskComma}</Text>
      	</VStack>
        	</Box>}        	   	



          {SuwoIsShown && GrenadeIsShown && LoleYIsShown && CutoutIsShown &&
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: SuwoActive ? "#18292b" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/Suwo.png/'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Suwo</b><br></br>
    	# to Fight: {totalMasteryMonsterCutout}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{SuwoWCLoleYCutoutComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleY_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleYCutoutResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleYCutoutWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{SuwoCoinsNeededCutoutComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{SuwoKuikasWCCutoutComma}</Text>
      	</VStack>
        	</Box>}

{SuwoIsShown && GrenadeIsShown && LoleNIsShown && CutoutIsShown &&
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: SuwoActive ? "#18292b" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/Suwo.png/'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Suwo</b><br></br>
    	# to Fight: {SuwoWCLoleNCutoutComma}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{0}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleN_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleNCutoutResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleNCutoutWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{SuwoCoinsNeededCutoutComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{SuwoKuikasWCCutoutComma}</Text>
      	</VStack>
        	</Box>}

{SuwoIsShown && GrenadeIsShown && LoleYIsShown && MaskIsShown &&
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: SuwoActive ? "#18292b" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/Suwo.png/'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Suwo</b><br></br>
    	# to Fight: {totalMasteryMonsterMask}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{SuwoWCLoleYMaskComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleY_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleYMaskResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleYMaskWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{SuwoCoinsNeededMaskComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{SuwoKuikasWCMaskComma}</Text>
      	</VStack>
        	</Box>}

{SuwoIsShown && GrenadeIsShown && LoleNIsShown && MaskIsShown &&
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: SuwoActive ? "#18292b" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/Suwo.png/'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Suwo</b><br></br>
    	# to Fight: {totalMasteryMonsterMask}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{SuwoWCLoleNMaskComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleN_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleNMaskResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleNMaskWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{SuwoCoinsNeededMaskComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{SuwoKuikasWCMaskComma}</Text>
      	</VStack>
        	</Box>}        	

{DarkReflectionIsShown && GrenadeIsShown && LoleYIsShown && CutoutIsShown &&
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: DarkReflectionActive ? "#0d030f" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/d/d6/Dark_Reflection.png/'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Dark Reflection</b><br></br>
    	# to Fight: {totalMasteryMonsterCutout}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{DarkReflectionWCLoleYCutoutComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleY_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleYCutoutResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleYCutoutWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{DarkReflectionCoinsNeededCutoutComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{DarkReflectionKuikasWCCutoutComma}</Text>
      	</VStack>
        	</Box>}

{DarkReflectionIsShown && GrenadeIsShown && LoleNIsShown && CutoutIsShown &&
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: DarkReflectionActive ? "#0d030f" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/d/d6/Dark_Reflection.png/'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Dark Reflection</b><br></br>
    	# to Fight: {DarkReflectionWCLoleNCutoutComma}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{0}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleN_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleNCutoutResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleNCutoutWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{DarkReflectionCoinsNeededCutoutComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{DarkReflectionKuikasWCCutoutComma}</Text>
      	</VStack>
        	</Box>}

{DarkReflectionIsShown && GrenadeIsShown && LoleYIsShown && MaskIsShown &&
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: DarkReflectionActive ? "#0d030f" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/d/d6/Dark_Reflection.png/'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Dark Reflection</b><br></br>
    	# to Fight: {totalMasteryMonsterMask}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{DarkReflectionWCLoleYMaskComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleY_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleYMaskResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleYMaskWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{DarkReflectionCoinsNeededMaskComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{DarkReflectionKuikasWCMaskComma}</Text>
      	</VStack>
        	</Box>}

{DarkReflectionIsShown && GrenadeIsShown && LoleNIsShown && MaskIsShown &&
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: DarkReflectionActive ? "#0d030f" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/d/d6/Dark_Reflection.png/'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Dark Reflection</b><br></br>
    	# to Fight: {totalMasteryMonsterMask}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{DarkReflectionWCLoleNMaskComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleN_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleNMaskResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleNMaskWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{DarkReflectionCoinsNeededMaskComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{DarkReflectionKuikasWCMaskComma}</Text>
      	</VStack>
        	</Box>}        	

          {ReflectionIsShown && GrenadeIsShown && LoleYIsShown && CutoutIsShown &&
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: ReflectionActive ? "#0d211f" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/2/20/Reflection.png'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Reflection</b><br></br>
    	# to Fight: {totalMasteryMonsterCutout}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{DarkReflectionWCLoleYCutoutComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleY_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleYCutoutResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleYCutoutWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{DarkReflectionCoinsNeededCutoutComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{DarkReflectionKuikasWCCutoutComma}</Text>
      	</VStack>
        	</Box>}

{ReflectionIsShown && GrenadeIsShown && LoleNIsShown && CutoutIsShown &&
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: ReflectionActive ? "#0d211f" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/2/20/Reflection.png'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Reflection</b><br></br>
    	# to Fight: {DarkReflectionWCLoleNCutoutComma}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{0}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleN_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleNCutoutResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleNCutoutWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{DarkReflectionCoinsNeededCutoutComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{DarkReflectionKuikasWCCutoutComma}</Text>
      	</VStack>
        	</Box>}

{ReflectionIsShown && GrenadeIsShown && LoleYIsShown && MaskIsShown &&
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: ReflectionActive ? "#0d211f" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/2/20/Reflection.png'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Reflection</b><br></br>
    	# to Fight: {totalMasteryMonsterMask}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{DarkReflectionWCLoleYMaskComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleY_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleYMaskResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleYMaskWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{DarkReflectionCoinsNeededMaskComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{DarkReflectionKuikasWCMaskComma}</Text>
      	</VStack>
        	</Box>}

{ReflectionIsShown && GrenadeIsShown && LoleNIsShown && MaskIsShown &&
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: ReflectionActive ? "#0d211f" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/2/20/Reflection.png'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Reflection</b><br></br>
    	# to Fight: {totalMasteryMonsterMask}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{DarkReflectionWCLoleNMaskComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleN_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleNMaskResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleNMaskWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{DarkReflectionCoinsNeededMaskComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{DarkReflectionKuikasWCMaskComma}</Text>
      	</VStack>
        	</Box>}        


          {CaravanIsShown && GrenadeIsShown && LoleYIsShown && CutoutIsShown &&
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: CaravanActive ? "#423222" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/2/2e/Caravan.png/'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Caravan</b><br></br>
    	# to Fight: {totalMasteryMonsterCutout}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{CaravanWCLoleYCutoutComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleY_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleYCutoutResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleYCutoutWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{CaravanCoinsNeededCutoutComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{CaravanKuikasWCCutoutComma}</Text>
      	</VStack>
        	</Box>}

{CaravanIsShown && GrenadeIsShown && LoleNIsShown && CutoutIsShown &&
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: CaravanActive ? "#423222" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/2/2e/Caravan.png/'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Caravan</b><br></br>
    	# to Fight: {CaravanWCLoleNCutoutComma}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{0}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleN_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleNCutoutResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleNCutoutWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{CaravanCoinsNeededCutoutComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{CaravanKuikasWCCutoutComma}</Text>
      	</VStack>
        	</Box>}

{CaravanIsShown && GrenadeIsShown && LoleYIsShown && MaskIsShown &&
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: CaravanActive ? "#423222" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/2/2e/Caravan.png/'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Caravan</b><br></br>
    	# to Fight: {totalMasteryMonsterMask}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{CaravanWCLoleYMaskComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleY_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleYMaskResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleYMaskWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{CaravanCoinsNeededMaskComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{CaravanKuikasWCMaskComma}</Text>
      	</VStack>
        	</Box>}

{CaravanIsShown && GrenadeIsShown && LoleNIsShown && MaskIsShown &&
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: CaravanActive ? "#423222" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/2/2e/Caravan.png/'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Caravan</b><br></br>
    	# to Fight: {totalMasteryMonsterMask}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{CaravanWCLoleNMaskComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleN_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleNMaskResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleNMaskWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{CaravanCoinsNeededMaskComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{CaravanKuikasWCMaskComma}</Text>
      	</VStack>
        	</Box>}      

          {RiverGoddessIsShown && GrenadeIsShown && LoleYIsShown && CutoutIsShown &&
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: RiverGoddessActive ? "#171321" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/7/73/River_Goddess.png/'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>River Goddess</b><br></br>
    	# to Fight: {totalMasteryMonsterCutout}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{RiverGoddessWCLoleYCutoutComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleY_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleYCutoutResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleYCutoutWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{RiverGoddessCoinsNeededCutoutComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{RiverGoddessKuikasWCCutoutComma}</Text>
      	</VStack>
        	</Box>}

{RiverGoddessIsShown && GrenadeIsShown && LoleNIsShown && CutoutIsShown &&
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: RiverGoddessActive ? "#171321" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/7/73/River_Goddess.png/'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>River Goddess</b><br></br>
    	# to Fight: {RiverGoddessWCLoleNCutoutComma}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{0}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleN_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleNCutoutResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleNCutoutWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{RiverGoddessCoinsNeededCutoutComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{RiverGoddessKuikasWCCutoutComma}</Text>
      	</VStack>
        	</Box>}

{RiverGoddessIsShown && GrenadeIsShown && LoleYIsShown && MaskIsShown &&
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: RiverGoddessActive ? "#171321" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/7/73/River_Goddess.png/'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>River Goddess</b><br></br>
    	# to Fight: {totalMasteryMonsterMask}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{RiverGoddessWCLoleYMaskComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleY_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleYMaskResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleYMaskWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{RiverGoddessCoinsNeededMaskComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{RiverGoddessKuikasWCMaskComma}</Text>
      	</VStack>
        	</Box>}

{RiverGoddessIsShown && GrenadeIsShown && LoleNIsShown && MaskIsShown &&
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: RiverGoddessActive ? "#171321" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/7/73/River_Goddess.png/'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>River Goddess</b><br></br>
    	# to Fight: {totalMasteryMonsterMask}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{RiverGoddessWCLoleNMaskComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleN_GrenadePotionsNeededComma}</Text>

    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleNMaskResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleNMaskWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{RiverGoddessCoinsNeededMaskComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{RiverGoddessKuikasWCMaskComma}</Text>
      	</VStack>
        	</Box>}     


            {KultalvaIsShown && GrenadeIsShown && LoleYIsShown && CutoutIsShown &&
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: KultalvaActive ? "#191b21" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/8/87/Kultalva.png'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Kultalva</b><br></br>
    	# to Fight: {totalMasteryMonsterCutout}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{KultalvaWCLoleYCutoutComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleY_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleYCutoutResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleYCutoutWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{KultalvaCoinsNeededCutoutComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{KultalvaKuikasWCCutoutComma}</Text>
      	</VStack>
        	</Box>}

{KultalvaIsShown && GrenadeIsShown && LoleNIsShown && CutoutIsShown &&
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: KultalvaActive ? "#191b21" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/8/87/Kultalva.png'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Kultalva</b><br></br>
    	# to Fight: {KultalvaWCLoleNCutoutComma}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{0}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleN_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleNCutoutResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleNCutoutWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{KultalvaCoinsNeededCutoutComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{KultalvaKuikasWCCutoutComma}</Text>
      	</VStack>
        	</Box>}

{KultalvaIsShown && GrenadeIsShown && LoleYIsShown && MaskIsShown &&
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: KultalvaActive ? "#191b21" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/8/87/Kultalva.png'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Kultalva</b><br></br>
    	# to Fight: {totalMasteryMonsterMask}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{KultalvaWCLoleYMaskComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleY_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleYMaskResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleYMaskWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{KultalvaCoinsNeededMaskComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{KultalvaKuikasWCMaskComma}</Text>
      	</VStack>
        	</Box>}

{KultalvaIsShown && GrenadeIsShown && LoleNIsShown && MaskIsShown &&
<Box rounded='lg'  w='290px' h='660px' pb={5} style={{ backgroundColor: KultalvaActive ? "#191b21" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/8/87/Kultalva.png'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Kultalva</b><br></br>
    	# to Fight: {totalMasteryMonsterMask}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{KultalvaWCLoleNMaskComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleN_GrenadePotionsNeededComma}</Text>

    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleNMaskResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleNMaskWCComma}
    	</Text>

    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{KultalvaCoinsNeededMaskComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{KultalvaKuikasWCMaskComma}</Text>
      	</VStack>
        	</Box>}        	

{VelsounIsShown && GrenadeIsShown && LoleYIsShown && CutoutIsShown && 
<Box rounded='lg'  w='290px' h='735px' pb={5} style={{ backgroundColor: VelsounActive ? "#1e0628" : "#2D3748" }}>
       <VStack>
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/9d/Velsoun.png/'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
      />
      </Box>
        <Text fontSize='lg' textAlign='center'><b>Velsoun</b><br></br>
        # to Fight: {totalMasteryMonsterCutout}</Text>
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TotalLoleYCutoutVelsounWCComma}
          </Text>
        <Divider w='250px' />
        <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleY_GrenadePotionsNeededComma}</Text>
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleYCutoutResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleYCutoutWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br> {totalMasteryMonsterCutout} Leaf Breastplate</Text>

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coins Needed:<br></br></b>{VelsounCoinsNeededCutoutComma}
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {VelsounKuikasWCCutoutComma}</Text>
          </VStack>

            </Box>}


{VelsounIsShown && GrenadeIsShown && LoleNIsShown && CutoutIsShown && 
<Box rounded='lg'  w='290px' h='735px' pb={5} style={{ backgroundColor: VelsounActive ? "#1e0628" : "#2D3748" }}>
       <VStack>
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/9d/Velsoun.png/'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
      />
      </Box>
        <Text fontSize='lg' textAlign='center'><b>Velsoun</b><br></br>
        # to Fight: {totalMasteryMonsterCutout}</Text>
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TotalLoleNCutoutVelsounWCComma}
          </Text>
        <Divider w='250px' />
        <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleN_GrenadePotionsNeededComma}</Text>
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleNCutoutResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleNCutoutWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br> {totalMasteryMonsterCutout} Leaf Breastplate</Text>

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coins Needed:<br></br></b>{VelsounCoinsNeededCutoutComma}
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {VelsounKuikasWCCutoutComma}</Text>
          </VStack>
            </Box>}

{VelsounIsShown && GrenadeIsShown && LoleYIsShown && MaskIsShown && 
<Box rounded='lg'  w='290px' h='735px' pb={5} style={{ backgroundColor: VelsounActive ? "#1e0628" : "#2D3748" }}>
       <VStack>
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/9d/Velsoun.png/'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
      />
      </Box>
        <Text fontSize='lg' textAlign='center'><b>Velsoun</b><br></br>
        # to Fight: {totalMasteryMonsterMask}</Text>
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TotalLoleYMaskVelsounWCComma}
          </Text>
        <Divider w='250px' />
        <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleY_GrenadePotionsNeededComma}</Text>
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleYMaskResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleYMaskWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br>{totalMasteryMonsterMask} Leaf Breastplate</Text>

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coins Needed:<br></br></b>{VelsounCoinsNeededMaskComma}
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {VelsounKuikasWCMaskComma}</Text>
          </VStack>
            </Box>}

{VelsounIsShown && GrenadeIsShown && LoleNIsShown && MaskIsShown && 
<Box rounded='lg'  w='290px' h='735px' pb={5} style={{ backgroundColor: VelsounActive ? "#1e0628" : "#2D3748" }}>
       <VStack>
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/9d/Velsoun.png/'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
      />
      </Box>
        <Text fontSize='lg' textAlign='center'><b>Velsoun</b><br></br>
        # to Fight: {totalMasteryMonsterMask}</Text>
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TotalLoleNMaskVelsounWCComma}
          </Text>
        <Divider w='250px' />
        <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleN_GrenadePotionsNeededComma}</Text>

        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleNMaskResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleNMaskWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br> {totalMasteryMonsterMask} Leaf Breastplate</Text>

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coins Needed:<br></br></b>{VelsounCoinsNeededMaskComma}
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {VelsounKuikasWCMaskComma}</Text>
          </VStack>
            </Box>}


{AlphaTamboIsShown && GrenadeIsShown && LoleYIsShown && CutoutIsShown && 
<Box rounded='lg'  w='290px' h='730px' pb={5} style={{ backgroundColor: AlphaTamboActive ? "#512F30" : "#2D3748" }}>
       <VStack>
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/6d/Alpha_Tambo.png/'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
      />
      </Box>
        <Text fontSize='lg' textAlign='center'><b>Alpha Tambo</b><br></br>
        # to Fight: {totalMasteryMonsterCutout}</Text>
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TotalLoleYCutoutAlphaTamboWCComma}
          </Text>
        <Divider w='250px' />
        <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleY_GrenadePotionsNeededComma}</Text>
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleYCutoutResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleYCutoutWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br> {totalRoberriesCutoutAT} Roberries</Text>
        <Text fontSize='md'><b>Wizell Word Count:</b><br></br> {WizellWCCutoutATComma}</Text>
        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coins Needed:<br></br></b>{AlphaTamboCoinsNeededCutoutComma}
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {AlphaTamboKuikasWCCutoutComma}</Text>
          </VStack>
            </Box>}

{AlphaTamboIsShown && GrenadeIsShown && LoleNIsShown && CutoutIsShown && 
<Box rounded='lg'  w='290px' h='730px' pb={5} style={{ backgroundColor: AlphaTamboActive ? "#512F30" : "#2D3748" }}>
       <VStack>
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/6d/Alpha_Tambo.png/'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
      />
      </Box>
        <Text fontSize='lg' textAlign='center'><b>Alpha Tambo</b><br></br>
        # to Fight: {totalMasteryMonsterCutout}</Text>
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TotalLoleNCutoutAlphaTamboWCComma}
          </Text>
        <Divider w='250px' />
        <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleN_GrenadePotionsNeededComma}</Text>
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleYCutoutResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleYCutoutWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br> {totalRoberriesCutoutAT} Roberries</Text>
        <Text fontSize='md'><b>Wizell Word Count:</b><br></br> {WizellWCCutoutATComma}</Text>
        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coins Needed:<br></br></b>{AlphaTamboCoinsNeededCutoutComma}
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {AlphaTamboKuikasWCCutoutComma}</Text>
          </VStack>
            </Box>}

{AlphaTamboIsShown && GrenadeIsShown && LoleYIsShown && MaskIsShown && 
<Box rounded='lg'  w='290px' h='730px' pb={5} style={{ backgroundColor: AlphaTamboActive ? "#512F30" : "#2D3748" }}>
       <VStack>
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/6d/Alpha_Tambo.png/'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
      />
      </Box>
        <Text fontSize='lg' textAlign='center'><b>Alpha Tambo</b><br></br>
        # to Fight: {totalMasteryMonsterMask}</Text>
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TotalLoleYMaskAlphaTamboWCComma}
          </Text>
        <Divider w='250px' />
        <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleY_GrenadePotionsNeededComma}</Text>
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleYMaskResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleYMaskWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br> {totalRoberriesMaskAT} Roberries</Text>
        <Text fontSize='md'><b>Battle Cost Word Count:</b><br></br>
        {WizellWCMaskATComma}
        </Text>
        <Text fontSize='md'><b>Wizell Word Count:</b><br></br> {WizellWCMaskATComma}</Text>
        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coins Needed:<br></br></b>{AlphaTamboCoinsNeededMaskComma}
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {AlphaTamboKuikasWCMaskComma}</Text>
          </VStack>
            </Box>}

{AlphaTamboIsShown && GrenadeIsShown && LoleNIsShown && MaskIsShown && 
<Box rounded='lg'  w='290px' h='730px' pb={5} style={{ backgroundColor: AlphaTamboActive ? "#512F30" : "#2D3748" }}>
       <VStack>
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/6d/Alpha_Tambo.png/'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
      />
      </Box>
        <Text fontSize='lg' textAlign='center'><b>Alpha Tambo</b><br></br>
        # to Fight: {totalMasteryMonsterMask}</Text>
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TotalLoleNMaskAlphaTamboWCComma}
          </Text>
        <Divider w='250px' />
        <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleN_GrenadePotionsNeededComma}</Text>

        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleNMaskResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleNMaskWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br> {totalRoberriesMaskAT} Roberries</Text>
        <Text fontSize='md'><b>Battle Cost Word Count:</b><br></br>
        {WizellWCMaskATComma}
        </Text>
        <Text fontSize='md'><b>Wizell Word Count:</b><br></br> {WizellWCMaskATComma}</Text>
        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coins Needed:<br></br></b>{AlphaTamboCoinsNeededMaskComma}
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {AlphaTamboKuikasWCMaskComma}</Text>
          </VStack>
            </Box>}


{RakstalIsShown && GrenadeIsShown && LoleYIsShown && CutoutIsShown && 
<Box rounded='lg'  w='290px' h='730px' pb={5} style={{ backgroundColor: RakstalActive ? "#27445e" : "#2D3748" }}>
       <VStack>
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/2f/Rakstal.png'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
      />
      </Box>
        <Text fontSize='lg' textAlign='center'><b>Rakstal</b><br></br>
        # to Fight: {totalMasteryMonsterCutout}</Text>
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TotalLoleYCutoutRakstalWCComma}
          </Text>
        <Divider w='250px' />
        <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleY_GrenadePotionsNeededComma}</Text>
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleYCutoutResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleYCutoutWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br> {totalSwampMossCutoutRakstal} Swamp Moss</Text>
        <Text fontSize='md'><b>Heliodae Word Count:</b><br></br> {HeliodaeWCCutoutRakstalComma}</Text>
        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coins Needed:<br></br></b>{RakstalCoinsNeededCutoutComma}
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {RakstalKuikasWCCutoutComma}</Text>
          </VStack>
            </Box>}

{RakstalIsShown && GrenadeIsShown && LoleNIsShown && CutoutIsShown && 
<Box rounded='lg'  w='290px' h='730px' pb={5} style={{ backgroundColor: RakstalActive ? "#27445e" : "#2D3748" }}>
       <VStack>
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/2f/Rakstal.png'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
      />
      </Box>
        <Text fontSize='lg' textAlign='center'><b>Rakstal</b><br></br>
        # to Fight: {totalMasteryMonsterCutout}</Text>
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TotalLoleNCutoutRakstalWCComma}
          </Text>
        <Divider w='250px' />
        <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleN_GrenadePotionsNeededComma}</Text>
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleYCutoutResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleYCutoutWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br>{totalSwampMossCutoutRakstal} Swamp Moss</Text>
        <Text fontSize='md'><b>Heliodae Word Count:</b><br></br> {HeliodaeWCCutoutRakstalComma}</Text>
        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coins Needed:<br></br></b>{RakstalCoinsNeededCutoutComma}
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {RakstalKuikasWCCutoutComma}</Text>
          </VStack>
            </Box>}

{RakstalIsShown && GrenadeIsShown && LoleYIsShown && MaskIsShown && 
<Box rounded='lg'  w='290px' h='730px' pb={5} style={{ backgroundColor: RakstalActive ? "#27445e" : "#2D3748" }}>
       <VStack>
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/2f/Rakstal.png'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
      />
      </Box>
        <Text fontSize='lg' textAlign='center'><b>Rakstal</b><br></br>
        # to Fight: {totalMasteryMonsterMask}</Text>
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TotalLoleYMaskRakstalWCComma}
          </Text>
        <Divider w='250px' />
        <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleY_GrenadePotionsNeededComma}</Text>
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleYMaskResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleYMaskWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br>{totalSwampMossMaskRakstal} Swamp Moss</Text>
        <Text fontSize='md'><b>Heliodae Word Count:</b><br></br> {HeliodaeWCMaskRakstalComma}</Text>
        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coins Needed:<br></br></b>{RakstalCoinsNeededMaskComma}
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {RakstalKuikasWCMaskComma}</Text>
          </VStack>
            </Box>}

{RakstalIsShown && GrenadeIsShown && LoleNIsShown && MaskIsShown && 
<Box rounded='lg'  w='290px' h='730px' pb={5} style={{ backgroundColor: RakstalActive ? "#27445e" : "#2D3748" }}>
       <VStack>
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/2f/Rakstal.png'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
      />
      </Box>
        <Text fontSize='lg' textAlign='center'><b>Rakstal</b><br></br>
        # to Fight: {totalMasteryMonsterMask}</Text>
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TotalLoleNMaskRakstalWCComma}
          </Text>
        <Divider w='250px' />
        <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleN_GrenadePotionsNeededComma}</Text>

        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleNMaskResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleNMaskWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br>{totalSwampMossMaskRakstal} Swamp Moss</Text>
        <Text fontSize='md'><b>Heliodae Word Count:</b><br></br> {HeliodaeWCMaskRakstalComma}</Text>
        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coins Needed:<br></br></b>{RakstalCoinsNeededMaskComma}
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {RakstalKuikasWCMaskComma}</Text>
          </VStack>
            </Box>}


          {TareitIsShown && GrenadeIsShown && LoleYIsShown && CutoutIsShown &&
<Box rounded='lg'  w='290px' h='735px' pb={5} style={{ backgroundColor: TareitActive ? "#4f2e49" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/9/9f/Tareit.png'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Tareit</b><br></br>
    	# to Fight: {totalMasteryMonsterCutout}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{TareitWCLoleYCutoutComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleY_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleYCutoutResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleYCutoutWCComma}
    	</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Battle Cost:</b><br></br>{totalMasteryMonsterCutout} Glass Necklace</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{TareitCoinsNeededCutoutComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{TareitKuikasWCCutoutComma}</Text>
      	</VStack>
        	</Box>}

{TareitIsShown && GrenadeIsShown && LoleNIsShown && CutoutIsShown &&
<Box rounded='lg'  w='290px' h='735px' pb={5} style={{ backgroundColor: TareitActive ? "#4f2e49" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/9/9f/Tareit.png'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Tareit</b><br></br>
    	# to Fight: {TareitWCLoleNCutoutComma}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{0}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleN_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleNCutoutResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleNCutoutWCComma}
    	</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Battle Cost:</b><br></br>{totalMasteryMonsterCutout} Glass Necklace</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{TareitCoinsNeededCutoutComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{TareitKuikasWCCutoutComma}</Text>
      	</VStack>
        	</Box>}

{TareitIsShown && GrenadeIsShown && LoleYIsShown && MaskIsShown &&
<Box rounded='lg'  w='290px' h='735px' pb={5} style={{ backgroundColor: TareitActive ? "#4f2e49" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/9/9f/Tareit.png'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Tareit</b><br></br>
    	# to Fight: {totalMasteryMonsterMask}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{TareitWCLoleYMaskComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleY_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleYMaskResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleYMaskWCComma}
    	</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Battle Cost:</b><br></br>{totalMasteryMonsterMask} Glass Necklace</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{TareitCoinsNeededMaskComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{TareitKuikasWCMaskComma}</Text>
      	</VStack>
        	</Box>}

{TareitIsShown && GrenadeIsShown && LoleNIsShown && MaskIsShown &&
<Box rounded='lg'  w='290px' h='735px' pb={5} style={{ backgroundColor: TareitActive ? "#4f2e49" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/9/9f/Tareit.png'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Tareit</b><br></br>
    	# to Fight: {totalMasteryMonsterMask}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{TareitWCLoleNMaskComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleN_GrenadePotionsNeededComma}</Text>

    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleNMaskResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleNMaskWCComma}
    	</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Battle Cost:</b><br></br>{totalMasteryMonsterMask} Glass Necklace</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{TareitCoinsNeededMaskComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{TareitKuikasWCMaskComma}</Text>
      	</VStack>
        	</Box>}        	

{BabuIsShown && GrenadeIsShown && LoleYIsShown && CutoutIsShown &&
<Box rounded='lg'  w='290px' h='775px' pb={5} style={{ backgroundColor: BabuActive ? "#4f2e49" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/b/b0/Babu.png'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Babu</b><br></br>
    	# to Fight: {totalMasteryMonsterCutout}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{BabuWCLoleYCutoutComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleY_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleYCutoutResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleYCutoutWCComma}
    	</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Battle Cost:</b>
<br></br>{totalBabuSteelChainsCutout} Steel Chains
<br></br>{totalBabuPieceofParchCutout} Piece of Parchment
<br></br>{totalBabuBlueEssInkCutout} Blue Essence Ink</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{BabuCoinsNeededCutoutComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{BabuKuikasWCCutoutComma}</Text>
      	</VStack>
        	</Box>}

{BabuIsShown && GrenadeIsShown && LoleNIsShown && CutoutIsShown &&
<Box rounded='lg'  w='290px' h='775px' pb={5} style={{ backgroundColor: BabuActive ? "#4f2e49" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/b/b0/Babu.png'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Babu</b><br></br>
    	# to Fight: {BabuWCLoleNCutoutComma}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{0}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleN_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleNCutoutResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleNCutoutWCComma}
    	</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Battle Cost:</b>
<br></br>{totalBabuSteelChainsCutout} Steel Chains
<br></br>{totalBabuPieceofParchCutout} Piece of Parchment
<br></br>{totalBabuBlueEssInkCutout} Blue Essence Ink</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{BabuCoinsNeededCutoutComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{BabuKuikasWCCutoutComma}</Text>
      	</VStack>
        	</Box>}

{BabuIsShown && GrenadeIsShown && LoleYIsShown && MaskIsShown &&
<Box rounded='lg'  w='290px' h='775px' pb={5} style={{ backgroundColor: BabuActive ? "#4f2e49" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/b/b0/Babu.png'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Babu</b><br></br>
    	# to Fight: {totalMasteryMonsterMask}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{BabuWCLoleYMaskComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleY_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleYMaskResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleYMaskWCComma}
    	</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Battle Cost:</b>
<br></br>{totalBabuSteelChainsCutout} Steel Chains
<br></br>{totalBabuPieceofParchCutout} Piece of Parchment
<br></br>{totalBabuBlueEssInkCutout} Blue Essence Ink</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{BabuCoinsNeededMaskComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{BabuKuikasWCMaskComma}</Text>
      	</VStack>
        	</Box>}

{BabuIsShown && GrenadeIsShown && LoleNIsShown && MaskIsShown &&
<Box rounded='lg'  w='290px' h='775px' pb={5} style={{ backgroundColor: BabuActive ? "#4f2e49" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/b/b0/Babu.png'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Babu</b><br></br>
    	# to Fight: {totalMasteryMonsterMask}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{BabuWCLoleNMaskComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleN_GrenadePotionsNeededComma}</Text>

    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleNMaskResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleNMaskWCComma}
    	</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Battle Cost:</b>
<br></br>{totalBabuSteelChainsCutout} Steel Chains
<br></br>{totalBabuPieceofParchCutout} Piece of Parchment
<br></br>{totalBabuBlueEssInkCutout} Blue Essence Ink</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{BabuCoinsNeededMaskComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{BabuKuikasWCMaskComma}</Text>
      	</VStack>
        	</Box>}        	

          {MiclanIsShown && GrenadeIsShown && LoleYIsShown && CutoutIsShown &&
<Box rounded='lg'  w='290px' h='775px' pb={5} style={{ backgroundColor: MiclanActive ? "#072627" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/7/7d/Miclan.png/'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Miclan</b><br></br>
    	# to Fight: {totalMasteryMonsterCutout}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{MiclanWCLoleYCutoutComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleY_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleYCutoutResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleYCutoutWCComma}
    	</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Battle Cost:</b>
<br></br>{totalMiclanSteelChainsCutout} Steel Chains
<br></br>{totalMiclanPieceofParchCutout} Piece of Parchment
<br></br>{totalMiclanBlueEssInkCutout} Blue Essence Ink</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{MiclanCoinsNeededCutoutComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{MiclanKuikasWCCutoutComma}</Text>
      	</VStack>
        	</Box>}

{MiclanIsShown && GrenadeIsShown && LoleNIsShown && CutoutIsShown &&
<Box rounded='lg'  w='290px' h='775px' pb={5} style={{ backgroundColor: MiclanActive ? "#072627" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/7/7d/Miclan.png/'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Miclan</b><br></br>
    	# to Fight: {MiclanWCLoleNCutoutComma}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{0}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleN_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleNCutoutResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleNCutoutWCComma}
    	</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Battle Cost:</b>
<br></br>{totalMiclanSteelChainsCutout} Steel Chains
<br></br>{totalMiclanPieceofParchCutout} Piece of Parchment
<br></br>{totalMiclanBlueEssInkCutout} Blue Essence Ink</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{MiclanCoinsNeededCutoutComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{MiclanKuikasWCCutoutComma}</Text>
      	</VStack>
        	</Box>}

{MiclanIsShown && GrenadeIsShown && LoleYIsShown && MaskIsShown &&
<Box rounded='lg'  w='290px' h='775px' pb={5} style={{ backgroundColor: MiclanActive ? "#072627" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/7/7d/Miclan.png/'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Miclan</b><br></br>
    	# to Fight: {totalMasteryMonsterMask}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{MiclanWCLoleYMaskComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleY_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleYMaskResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleYMaskWCComma}
    	</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Battle Cost:</b>
<br></br>{totalMiclanSteelChainsCutout} Steel Chains
<br></br>{totalMiclanPieceofParchCutout} Piece of Parchment
<br></br>{totalMiclanBlueEssInkCutout} Blue Essence Ink</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{MiclanCoinsNeededMaskComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{MiclanKuikasWCMaskComma}</Text>
      	</VStack>
        	</Box>}

{MiclanIsShown && GrenadeIsShown && LoleNIsShown && MaskIsShown &&
<Box rounded='lg'  w='290px' h='775px' pb={5} style={{ backgroundColor: MiclanActive ? "#072627" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/7/7d/Miclan.png/'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Miclan</b><br></br>
    	# to Fight: {totalMasteryMonsterMask}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{MiclanWCLoleNMaskComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleN_GrenadePotionsNeededComma}</Text>

      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleY_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleNMaskResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleNMaskWCComma}
    	</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Battle Cost:</b>
<br></br>{totalMiclanSteelChainsCutout} Steel Chains
<br></br>{totalMiclanPieceofParchCutout} Piece of Parchment
<br></br>{totalMiclanBlueEssInkCutout} Blue Essence Ink</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{MiclanCoinsNeededMaskComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{MiclanKuikasWCMaskComma}</Text>
      	</VStack>
        	</Box>}        	

{ShamanLuziaIsShown && GrenadeIsShown && LoleYIsShown && CutoutIsShown &&
<Box rounded='lg'  w='290px' h='765px' pb={5} style={{ backgroundColor: ShamanLuziaActive ? "#403954" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/4/41/Shaman_Luzia.png/'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Shaman Luzia</b><br></br>
    	# to Fight: {totalMasteryMonsterCutout}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{ShamanLuziaWCLoleYCutoutComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleY_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleYCutoutResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleYCutoutWCComma}
    	</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Battle Cost:</b>
<br></br>{totalMasteryMonsterCutout} Fabric Helmet
<br></br>{totalMasteryMonsterCutout} Steel Spear</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{ShamanLuziaCoinsNeededCutoutComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{ShamanLuziaKuikasWCCutoutComma}</Text>
      	</VStack>
        	</Box>}

{ShamanLuziaIsShown && GrenadeIsShown && LoleNIsShown && CutoutIsShown &&
<Box rounded='lg'  w='290px' h='765px' pb={5} style={{ backgroundColor: ShamanLuziaActive ? "#403954" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/4/41/Shaman_Luzia.png/'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Shaman Luzia</b><br></br>
    	# to Fight: {ShamanLuziaWCLoleNCutoutComma}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{0}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleN_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleNCutoutResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleNCutoutWCComma}
    	</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Battle Cost:</b>
<br></br>{totalMasteryMonsterCutout} Fabric Helmet
<br></br>{totalMasteryMonsterCutout} Steel Spear</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{ShamanLuziaCoinsNeededCutoutComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{ShamanLuziaKuikasWCCutoutComma}</Text>
      	</VStack>
        	</Box>}

{ShamanLuziaIsShown && GrenadeIsShown && LoleYIsShown && MaskIsShown &&
<Box rounded='lg'  w='290px' h='765px' pb={5} style={{ backgroundColor: ShamanLuziaActive ? "#403954" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/4/41/Shaman_Luzia.png/'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Shaman Luzia</b><br></br>
    	# to Fight: {totalMasteryMonsterMask}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{ShamanLuziaWCLoleYMaskComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleY_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleYMaskResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleYMaskWCComma}
    	</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Battle Cost:</b>
<br></br>{totalMasteryMonsterMask} Fabric Helmet
<br></br>{totalMasteryMonsterMask} Steel Spear</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{ShamanLuziaCoinsNeededMaskComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{ShamanLuziaKuikasWCMaskComma}</Text>
      	</VStack>
        	</Box>}

{ShamanLuziaIsShown && GrenadeIsShown && LoleNIsShown && MaskIsShown &&
<Box rounded='lg'  w='290px' h='765px' pb={5} style={{ backgroundColor: ShamanLuziaActive ? "#403954" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/4/41/Shaman_Luzia.png/'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Shaman Luzia</b><br></br>
    	# to Fight: {totalMasteryMonsterMask}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{ShamanLuziaWCLoleNMaskComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleN_GrenadePotionsNeededComma}</Text>

    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleNMaskResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleNMaskWCComma}
    	</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Battle Cost:</b>
<br></br>{totalMasteryMonsterMask} Fabric Helmet
<br></br>{totalMasteryMonsterMask} Steel Spear</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{ShamanLuziaCoinsNeededMaskComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{ShamanLuziaKuikasWCMaskComma}</Text>
      	</VStack>
        	</Box>}

          {KingMaiIsShown && GrenadeIsShown && LoleYIsShown && CutoutIsShown &&
<Box rounded='lg'  w='290px' h='765px' pb={5} style={{ backgroundColor: KingMaiActive ? "#0b1d2d" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/8/8b/King_Mai.png'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>King Mai</b><br></br>
    	# to Fight: {totalMasteryMonsterCutout}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{KingMaiWCLoleYCutoutComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleY_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleYCutoutResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleYCutoutWCComma}
    	</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Battle Cost:</b>
<br></br>{totalMasteryMonsterCutout} Fabric Helmet
<br></br>{totalMasteryMonsterCutout} Steel Spear</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{KingMaiCoinsNeededCutoutComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{KingMaiKuikasWCCutoutComma}</Text>
      	</VStack>
        	</Box>}

{KingMaiIsShown && GrenadeIsShown && LoleNIsShown && CutoutIsShown &&
<Box rounded='lg'  w='290px' h='765px' pb={5} style={{ backgroundColor: KingMaiActive ? "#0b1d2d" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/8/8b/King_Mai.png'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>King Mai</b><br></br>
    	# to Fight: {KingMaiWCLoleNCutoutComma}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{0}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleN_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleNCutoutResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleNCutoutWCComma}
    	</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Battle Cost:</b>
<br></br>{totalMasteryMonsterCutout} Fabric Helmet
<br></br>{totalMasteryMonsterCutout} Steel Spear</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{KingMaiCoinsNeededCutoutComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{KingMaiKuikasWCCutoutComma}</Text>
      	</VStack>
        	</Box>}

{KingMaiIsShown && GrenadeIsShown && LoleYIsShown && MaskIsShown &&
<Box rounded='lg'  w='290px' h='765px' pb={5} style={{ backgroundColor: KingMaiActive ? "#0b1d2d" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/8/8b/King_Mai.png'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>King Mai</b><br></br>
    	# to Fight: {totalMasteryMonsterMask}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{KingMaiWCLoleYMaskComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleY_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleYMaskResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleYMaskWCComma}
    	</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Battle Cost:</b>
<br></br>{totalMasteryMonsterMask} Fabric Helmet
<br></br>{totalMasteryMonsterMask} Steel Spear</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{KingMaiCoinsNeededMaskComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{KingMaiKuikasWCMaskComma}</Text>
      	</VStack>
        	</Box>}

{KingMaiIsShown && GrenadeIsShown && LoleNIsShown && MaskIsShown &&
<Box rounded='lg'  w='290px' h='765px' pb={5} style={{ backgroundColor: KingMaiActive ? "#0b1d2d" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/8/8b/King_Mai.png'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>King Mai</b><br></br>
    	# to Fight: {totalMasteryMonsterMask}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{KingMaiWCLoleNMaskComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleN_GrenadePotionsNeededComma}</Text>

    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleNMaskResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleNMaskWCComma}
    	</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Battle Cost:</b>
<br></br>{totalMasteryMonsterMask} Fabric Helmet
<br></br>{totalMasteryMonsterMask} Steel Spear</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{KingMaiCoinsNeededMaskComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{KingMaiKuikasWCMaskComma}</Text>
      	</VStack>
        	</Box>}        	

          {DustedLuziaIsShown && GrenadeIsShown && LoleYIsShown && CutoutIsShown &&
<Box rounded='lg'  w='290px' h='760px' pb={5} style={{ backgroundColor: DustedLuziaActive ? "#1c1138" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/6b/Dusted_Luzia.png'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Dusted Luzia</b><br></br>
    	# to Fight: {totalMasteryMonsterCutout}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{DustedLuziaWCLoleYCutoutComma}
      	</Text>
    	<Divider w='250px' />
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleYCutoutResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleYCutoutWCComma}
    	</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Battle Cost:</b>
<br></br>{totalMasteryMonsterCutout} Steel Shield
<br></br>{totalMasteryMonsterCutout} Steel Axe</Text>
<Text fontSize='md'><b>Scofin Word Count:</b><br></br> {DustedLuziaWCScofinCutoutComma}</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{DustedLuziaCoinsNeededCutoutComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{DustedLuziaKuikasWCCutoutComma}</Text>
      	</VStack>
        	</Box>}

{DustedLuziaIsShown && GrenadeIsShown && LoleNIsShown && CutoutIsShown &&
<Box rounded='lg'  w='290px' h='760px' pb={5} style={{ backgroundColor: DustedLuziaActive ? "#1c1138" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/6b/Dusted_Luzia.png'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Dusted Luzia</b><br></br>
    	# to Fight: {DustedLuziaWCLoleNCutoutComma}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{0}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleN_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleNCutoutResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleNCutoutWCComma}
    	</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Battle Cost:</b>
<br></br>{totalMasteryMonsterCutout} Steel Shield
<br></br>{totalMasteryMonsterCutout} Steel Axe</Text>
<Text fontSize='md'><b>Scofin Word Count:</b><br></br> {DustedLuziaWCScofinCutoutComma}</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{DustedLuziaCoinsNeededCutoutComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{DustedLuziaKuikasWCCutoutComma}</Text>
      	</VStack>
        	</Box>}

{DustedLuziaIsShown && GrenadeIsShown && LoleYIsShown && MaskIsShown &&
<Box rounded='lg'  w='290px' h='760px' pb={5} style={{ backgroundColor: DustedLuziaActive ? "#1c1138" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/6b/Dusted_Luzia.png'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Dusted Luzia</b><br></br>
    	# to Fight: {totalMasteryMonsterMask}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{DustedLuziaWCLoleYMaskComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleY_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleYMaskResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleYMaskWCComma}
    	</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Battle Cost:</b>
<br></br>{totalMasteryMonsterMask} Steel Shield
<br></br>{totalMasteryMonsterMask} Steel Axe</Text>
<Text fontSize='md'><b>Scofin Word Count:</b><br></br> {DustedLuziaWCScofinMaskComma}</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{DustedLuziaCoinsNeededMaskComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{DustedLuziaKuikasWCMaskComma}</Text>
      	</VStack>
        	</Box>}

{DustedLuziaIsShown && GrenadeIsShown && LoleNIsShown && MaskIsShown &&
<Box rounded='lg'  w='290px' h='760px' pb={5} style={{ backgroundColor: DustedLuziaActive ? "#1c1138" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/6b/Dusted_Luzia.png'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Dusted Luzia</b><br></br>
    	# to Fight: {totalMasteryMonsterMask}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{DustedLuziaWCLoleNMaskComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleN_GrenadePotionsNeededComma}</Text>

    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleNMaskResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleNMaskWCComma}
    	</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Battle Cost:</b>
<br></br>{totalMasteryMonsterMask} Steel Shield
<br></br>{totalMasteryMonsterMask} Steel Axe</Text>
<Text fontSize='md'><b>Scofin Word Count:</b><br></br> {DustedLuziaWCScofinMaskComma}</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{DustedLuziaCoinsNeededMaskComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{DustedLuziaKuikasWCMaskComma}</Text>
      	</VStack>
        	</Box>}        	


{DustedLuziaIsShown && GrenadeIsShown && LoleYIsShown && CutoutIsShown && CoinsIsShown &&
<Box rounded='lg'  w='290px' h='700px' pb={5} style={{ backgroundColor: DustedLuziaActive ? "#1c1138" : "#2D3748" }}>
       <VStack>
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/6b/Dusted_Luzia.png'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
      />
      </Box>
        <Text fontSize='lg' textAlign='center'><b>Dusted Luzia</b><br></br>
        # to Fight: {totalMasteryMonsterCutout}</Text>
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TotalWCLoleYCutoutDLCoinsComma}
          </Text>
        <Divider w='250px' />
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleYCutoutResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleYCutoutWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br> {totalMasteryMonsterCutout} Steel Axe<br></br> {totalMasteryMonsterCutout} Steel Shield</Text>


        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coins Needed:<br></br></b>{CoinsCutoutDLComma}
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {KuikasCoinsWCCutoutDLComma}</Text>
          </VStack>
            </Box>}

{DustedLuziaIsShown && GrenadeIsShown && LoleNIsShown && CutoutIsShown && CoinsIsShown &&
<Box rounded='lg'  w='290px' h='700px' pb={5} style={{ backgroundColor: DustedLuziaActive ? "#1c1138" : "#2D3748" }}>
       <VStack>
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/6b/Dusted_Luzia.png'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
      />
      </Box>
        <Text fontSize='lg' textAlign='center'><b>Dusted Luzia</b><br></br>
        # to Fight: {totalMasteryMonsterCutout}</Text>
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TotalWCLoleNCutoutDLCoinsComma}
          </Text>
        <Divider w='250px' />
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleNCutoutResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleNCutoutWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br> {totalMasteryMonsterCutout} Steel Axe<br></br> {totalMasteryMonsterCutout} Steel Shield</Text>


        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coins Needed:<br></br></b>{CoinsCutoutDLComma}
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {KuikasCoinsWCCutoutDLComma}</Text>
          </VStack>
            </Box>}

      {DustedLuziaIsShown && GrenadeIsShown && LoleYIsShown && CutoutIsShown && ComboIsShown &&
        <Box rounded='lg'  w='290px' h='750px' pb={5} style={{ backgroundColor: DustedLuziaActive ? "#1c1138" : "#2D3748" }}>
       <VStack>
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/6b/Dusted_Luzia.png'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
      />
      </Box>
        <Text fontSize='lg' textAlign='center'><b>Dusted Luzia</b><br></br>
        # to Fight: {totalMasteryMonsterCutout}</Text>
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TotalWCLoleYCutoutDLComboComma}
          </Text>
        <Divider w='250px' />
        <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleY_GrenadePotionsNeededComma}</Text>
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleYCutoutResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleYCutoutWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br> {totalMasteryMonsterCutout} Steel Axe<br></br> {totalMasteryMonsterCutout} Steel Shield</Text>
        <Text fontSize='md'><b>Battle Word Count:</b><br></br> {LoleBothCutoutDLComboBattleCostComma}</Text>

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coins Needed:<br></br></b>{CoinComboCutoutDL}
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalWCLoleBothCutoutDLComboCoinsComma}</Text>
          </VStack>
            </Box>}

            {DustedLuziaIsShown && GrenadeIsShown && LoleNIsShown && CutoutIsShown && ComboIsShown &&
        <Box rounded='lg'  w='290px' h='750px' pb={5} style={{ backgroundColor: DustedLuziaActive ? "#1c1138" : "#2D3748" }}>
       <VStack>
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/6b/Dusted_Luzia.png'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
      />
      </Box>
        <Text fontSize='lg' textAlign='center'><b>Dusted Luzia</b><br></br>
        # to Fight: {totalMasteryMonsterCutout}</Text>
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TotalWCLoleNCutoutDLComboComma}
          </Text>
        <Divider w='250px' />
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleNCutoutResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleNCutoutWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br> {totalMasteryMonsterCutout} Steel Axe<br></br> {totalMasteryMonsterCutout} Steel Shield</Text>
        <Text fontSize='md'><b>Battle Word Count:</b><br></br> {LoleBothCutoutDLComboBattleCostComma}</Text>

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coins Needed:<br></br></b>{CoinComboCutoutDL}
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalWCLoleBothCutoutDLComboCoinsComma}</Text>
          </VStack>
            </Box>}

            {DustedLuziaIsShown && GrenadeIsShown && LoleYIsShown && CutoutIsShown && BattleIsShown &&
        <Box rounded='lg'  w='290px' h='750px' pb={5} style={{ backgroundColor: DustedLuziaActive ? "#1c1138" : "#2D3748" }}>
       <VStack>
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/6b/Dusted_Luzia.png'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
      />
      </Box>
        <Text fontSize='lg' textAlign='center'><b>Dusted Luzia</b><br></br>
        # to Fight: {totalMasteryMonsterCutout}</Text>
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TotalWCLoleYCutoutDLBattleComma}
          </Text>
        <Divider w='250px' />
        <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleY_GrenadePotionsNeededComma}</Text>
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleYCutoutResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleYCutoutWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br> {totalMasteryMonsterCutout} Steel Axe<br></br> {totalMasteryMonsterCutout} Steel Shield</Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br> {TotalWCLoleBothCutoutDLBattleComma}</Text>

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coins Needed:<br></br></b>{LoleBothCoinBattleCutoutDL}
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalWCLoleBothBattleCoinsCutoutDLComma}</Text>
          </VStack>
            </Box>}

            {DustedLuziaIsShown && GrenadeIsShown && LoleNIsShown && CutoutIsShown && BattleIsShown &&
        <Box rounded='lg'  w='290px' h='750px' pb={5} style={{ backgroundColor: DustedLuziaActive ? "#1c1138" : "#2D3748" }}>
       <VStack>
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/6b/Dusted_Luzia.png'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
      />
      </Box>
        <Text fontSize='lg' textAlign='center'><b>Dusted Luzia</b><br></br>
        # to Fight: {totalMasteryMonsterCutout}</Text>
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TotalWCLoleNCutoutDLBattleComma}
          </Text>
        <Divider w='250px' />
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleNCutoutResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleNCutoutWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br> {totalMasteryMonsterCutout} Steel Axe<br></br> {totalMasteryMonsterCutout} Steel Shield</Text>
        <Text fontSize='md'><b>Battle Word Count:</b><br></br> {TotalWCLoleBothCutoutDLBattleComma}</Text>

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coins Needed:<br></br></b>{LoleBothCoinBattleCutoutDL}
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalWCLoleBothBattleCoinsCutoutDLComma}</Text>
          </VStack>
            </Box>}
            
  {DustedLuziaIsShown && GrenadeIsShown && LoleYIsShown && MaskIsShown && CoinsIsShown &&
      <Box rounded='lg'  w='290px' h='700px' pb={5} style={{ backgroundColor: DustedLuziaActive ? "#1c1138" : "#2D3748" }}>
       <VStack>
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/6b/Dusted_Luzia.png'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
      />
      </Box>
        <Text fontSize='lg' textAlign='center'><b>Dusted Luzia </b><br></br>
        # to Fight: {totalMasteryMonsterMask}</Text>
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TotalWCLoleYMaskDLCoinsComma}
          </Text>
        <Divider w='250px' />
        <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleY_GrenadePotionsNeededComma}</Text>
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleYMaskResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleYMaskWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br> {totalMasteryMonsterMask} Steel Axe<br></br> {totalMasteryMonsterMask} Steel Shield</Text>


        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coins Needed:<br></br></b>{CoinsMaskDLComma}
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {KuikasCoinsWCMaskDLComma}</Text>
          </VStack>
            </Box>}

{DustedLuziaIsShown && GrenadeIsShown && LoleNIsShown && MaskIsShown && CoinsIsShown &&
<Box rounded='lg'  w='290px' h='700px' pb={5} style={{ backgroundColor: DustedLuziaActive ? "#1c1138" : "#2D3748" }}>
       <VStack>
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/6b/Dusted_Luzia.png'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
      />
      </Box>
        <Text fontSize='lg' textAlign='center'><b>Dusted Luzia </b><br></br>
        # to Fight: {totalMasteryMonsterMask}</Text>
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TotalWCLoleNMaskDLCoinsComma}
          </Text>
        <Divider w='250px' />
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleNMaskResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleNMaskWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br> {totalMasteryMonsterMask} Steel Axe<br></br> {totalMasteryMonsterMask} Steel Shield</Text>


        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coins Needed:<br></br></b>{CoinsMaskDLComma}
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {KuikasCoinsWCMaskDLComma}</Text>
          </VStack>
            </Box>}

      {DustedLuziaIsShown && GrenadeIsShown && LoleYIsShown && MaskIsShown && ComboIsShown &&
        <Box rounded='lg'  w='290px' h='750px' pb={5} style={{ backgroundColor: DustedLuziaActive ? "#1c1138" : "#2D3748" }}>
       <VStack>
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/6b/Dusted_Luzia.png'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
      />
      </Box>
        <Text fontSize='lg' textAlign='center'><b>Dusted Luzia </b><br></br>
        # to Fight: {totalMasteryMonsterMask}</Text>
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TotalWCLoleYMaskDLComboComma}
          </Text>
        <Divider w='250px' />
        <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleY_GrenadePotionsNeededComma}</Text>
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleYMaskResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleYMaskWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br> {totalMasteryMonsterMask} Steel Axe<br></br> {totalMasteryMonsterMask} Steel Shield</Text>
        <Text fontSize='md'><b>Battle Word Count:</b><br></br> {LoleBothMaskDLComboBattleCostComma}</Text>

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coins Needed:<br></br></b>{CoinComboMaskDL}
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalWCLoleBothMaskDLComboCoinsComma}</Text>
          </VStack>
            </Box>}

            {DustedLuziaIsShown && GrenadeIsShown && LoleNIsShown && MaskIsShown && ComboIsShown &&
        <Box rounded='lg'  w='290px' h='750px' pb={5} style={{ backgroundColor: DustedLuziaActive ? "#1c1138" : "#2D3748" }}>
       <VStack>
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/6b/Dusted_Luzia.png'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
      />
      </Box>
        <Text fontSize='lg' textAlign='center'><b>Dusted Luzia </b><br></br>
        # to Fight: {totalMasteryMonsterMask}</Text>
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TotalWCLoleNMaskDLComboComma}
          </Text>
        <Divider w='250px' />
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleNMaskResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleNMaskWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br> {totalMasteryMonsterMask} Steel Axe<br></br> {totalMasteryMonsterMask} Steel Shield</Text>
        <Text fontSize='md'><b>Battle Word Count:</b><br></br> {LoleBothMaskDLComboBattleCostComma}</Text>

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coins Needed:<br></br></b>{CoinComboMaskDL}
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalWCLoleBothMaskDLComboCoinsComma}</Text>
          </VStack>
            </Box>}

            {DustedLuziaIsShown && GrenadeIsShown && LoleYIsShown && MaskIsShown && BattleIsShown &&
        <Box rounded='lg'  w='290px' h='750px' pb={5} style={{ backgroundColor: DustedLuziaActive ? "#1c1138" : "#2D3748" }}>
       <VStack>
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/6b/Dusted_Luzia.png'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
      />
      </Box>
        <Text fontSize='lg' textAlign='center'><b>Dusted Luzia </b><br></br>
        # to Fight: {totalMasteryMonsterMask}</Text>
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TotalWCLoleYMaskDLBattleComma}
          </Text>
        <Divider w='250px' />
        <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleY_GrenadePotionsNeededComma}</Text>
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleYMaskResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleYMaskWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br> {totalMasteryMonsterMask} Steel Axe<br></br> {totalMasteryMonsterMask} Steel Shield</Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br> {TotalWCLoleBothMaskDLBattleComma}</Text>

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coins Needed:<br></br></b>{LoleBothCoinBattleMaskDL}
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalWCLoleBothBattleCoinsMaskDLComma}</Text>
          </VStack>
            </Box>}

            {DustedLuziaIsShown && GrenadeIsShown && LoleNIsShown && MaskIsShown && BattleIsShown &&
        <Box rounded='lg'  w='290px' h='750px' pb={5} style={{ backgroundColor: DustedLuziaActive ? "#1c1138" : "#2D3748" }}>
       <VStack>
       <Box mr='220px' mb='225px'>
        <Image
        position='absolute'
         mt="70px"
         ml='54px'
        align='center' 
        boxSize='7.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/6b/Dusted_Luzia.png'
      />
              <Image
        position='absolute'
         mt="12px"
        align='center' 
        boxSize='14rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
      />
      </Box>
        <Text fontSize='lg' textAlign='center'><b>Dusted Luzia </b><br></br>
        # to Fight: {totalMasteryMonsterMask}</Text>
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TotalWCLoleNMaskDLBattleComma}
          </Text>
        <Divider w='250px' />
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleNMaskResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleNMaskWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br> {totalMasteryMonsterMask} Steel Axe<br></br> {totalMasteryMonsterMask} Steel Shield</Text>
        <Text fontSize='md'><b>Battle Word Count:</b><br></br> {TotalWCLoleBothMaskDLBattleComma}</Text>

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coins Needed:<br></br></b>{LoleBothCoinBattleMaskDL}
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalWCLoleBothBattleCoinsMaskDLComma}</Text>
          </VStack>
            </Box>}


            {DustyKingMaiIsShown && GrenadeIsShown && LoleYIsShown && CutoutIsShown &&
<Box rounded='lg'  w='290px' h='765px' pb={5} style={{ backgroundColor: DustyKingMaiActive ? "#1c1138" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/2/23/King_Mai_(Corrupted).png/'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Dusty King Mai</b><br></br>
    	# to Fight: {totalMasteryMonsterCutout}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{DustyKingMaiWCLoleYCutoutComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleY_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleYCutoutResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleYCutoutWCComma}
    	</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Battle Cost:</b>
<br></br>{totalMasteryMonsterCutout} Crested Helmet
<br></br>{totalMasteryMonsterCutout} Fusion Cuirass</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{DustyKingMaiCoinsNeededCutoutComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{DustyKingMaiKuikasWCCutoutComma}</Text>
      	</VStack>
        	</Box>}

{DustyKingMaiIsShown && GrenadeIsShown && LoleNIsShown && CutoutIsShown &&
<Box rounded='lg'  w='290px' h='765px' pb={5} style={{ backgroundColor: DustyKingMaiActive ? "#1c1138" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/2/23/King_Mai_(Corrupted).png/'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/6/64/GoldBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Dusty King Mai</b><br></br>
    	# to Fight: {DustyKingMaiWCLoleNCutoutComma}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{0}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesCutoutLoleN_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleNCutoutResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleNCutoutWCComma}
    	</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Battle Cost:</b>
<br></br>{totalMasteryMonsterCutout} Crested Helmet
<br></br>{totalMasteryMonsterCutout} Fusion Cuirass</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{DustyKingMaiCoinsNeededCutoutComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{DustyKingMaiKuikasWCCutoutComma}</Text>
      	</VStack>
        	</Box>}

{DustyKingMaiIsShown && GrenadeIsShown && LoleYIsShown && MaskIsShown &&
<Box rounded='lg'  w='290px' h='765px' pb={5} style={{ backgroundColor: DustyKingMaiActive ? "#1c1138" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/2/23/King_Mai_(Corrupted).png/'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Dusty King Mai</b><br></br>
    	# to Fight: {totalMasteryMonsterMask}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{DustyKingMaiWCLoleYMaskComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleY_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleYMaskResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleYMaskWCComma}
    	</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Battle Cost:</b>
<br></br>{totalMasteryMonsterMask} Crested Helmet
<br></br>{totalMasteryMonsterMask} Fusion Cuirass</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{DustyKingMaiCoinsNeededMaskComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{DustyKingMaiKuikasWCMaskComma}</Text>
      	</VStack>
        	</Box>}

{DustyKingMaiIsShown && GrenadeIsShown && LoleNIsShown && MaskIsShown &&
<Box rounded='lg'  w='290px' h='765px' pb={5} style={{ backgroundColor: DustyKingMaiActive ? "#1c1138" : "#2D3748" }}>
   	<VStack>
   	<Box mr='220px' mb='225px'>
    	<Image
    	position='absolute'
     	mt="70px"
     	ml='54px'
    	align='center'
    	boxSize='7.5rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/2/23/King_Mai_(Corrupted).png/'
  	/>
          	<Image
    	position='absolute'
     	mt="12px"
    	align='center'
    	boxSize='14rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/f/fd/LightBadge.png/'
  	/>
  	</Box>
    	<Text fontSize='lg' textAlign='center'><b>Dusty King Mai</b><br></br>
    	# to Fight: {totalMasteryMonsterMask}</Text>
    	<Text fontSize='lg' textAlign='center'>
        	Total Word Count:<br></br>{DustyKingMaiWCLoleNMaskComma}
      	</Text>
    	<Divider w='250px' />
      <Text fontSize='md'><b>Grenade Potions Needed:</b><br></br> 
        {ResourcesMaskLoleN_GrenadePotionsNeededComma}</Text>
    	<Text fontSize='md'><b>Potion Resources Needed:</b><br></br>
    	{LoleNMaskResourcesComma}</Text>
    	<Text fontSize='md'><b>Mastery Word Count:</b><br></br>
    	{LoleNMaskWCComma}
    	</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Battle Cost:</b>
<br></br>{totalMasteryMonsterMask} Crested Helmet
<br></br>{totalMasteryMonsterMask} Fusion Cuirass</Text>
    	<Divider mt='3px' w='250px' />
    	<Text fontSize='md'><b>Coins Needed:<br></br></b>{DustyKingMaiCoinsNeededMaskComma}
      	<br></br></Text>
    	<Text fontSize='md'><b>Monster Word Count:</b><br></br>
      	{DustyKingMaiKuikasWCMaskComma}</Text>
      	</VStack>
        	</Box>}        	


  </Container>


{NullIsShown &&

  <Container align='center'>
  <Box rounded='lg'  w='290px' h='670px' pb={5} style={{ backgroundColor: DustedLuziaActive ? "#1c1138" : "#2D3748" }}>
         <VStack>
         <Image
           mt="12px"
          align='center' 
          boxSize='10rem'
          borderRadius='full'
          src='https://static.wikia.nocookie.net/4thewords/images/6/6b/Dusted_Luzia.png'
        />
          <Text fontSize='lg' textAlign='center'><b>Dusted Luzia</b><br></br></Text>
          
          {CutoutIsShown &&<Text># to Fight: {totalMasteryMonsterCutout}</Text>}
        {MaskIsShown &&
          <Text fontSize='lg' textAlign='center'># to Fight: {totalMasteryMonsterMask}</Text>}
        {StatueIsShown &&
          <Text fontSize='lg' textAlign='center'># to Fight: {totalMasteryMonsterStatue}</Text>}
        {BalloonIsShown &&
          <Text fontSize='lg' textAlign='center'># to Fight: {totalMasteryMonsterBalloon}</Text>}
        {BookIsShown &&
          <Text fontSize='lg' textAlign='center'># to Fight: {MasteryMonsterBookComma}</Text>}


        {DustedLuziaIsShown && CutoutIsShown && CoinsIsShown && LoleYIsShown &&
            <Text fontSize='lg'>
              Total Word Count:<br></br>{TotalWCLoleYCutoutDLCoinsComma}
            </Text>}

        {DustedLuziaIsShown && CutoutIsShown && CoinsIsShown && LoleNIsShown &&
            <Text fontSize='lg'>
              Total Word Count:<br></br>{TotalWCLoleNCutoutDLCoinsComma}
            </Text>}

          <Divider w='250px' />
          <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
          {CutoutIsShown && LoleYActive &&
          <Text fontSize='md' textAlign='center'>{LoleYCutoutResourcesComma}</Text>}
        {MaskIsShown && LoleYActive &&
          <Text fontSize='md' textAlign='center'>{LoleYMaskResourcesComma}</Text>}
        {StatueIsShown && LoleYActive &&
          <Text fontSize='md' textAlign='center'>{MasteryMonsterLoleYStatueComma}</Text>}
        {BalloonIsShown && LoleYActive &&
          <Text fontSize='md' textAlign='center'>{MasteryMonsterLoleYBalloonComma}</Text>}
        {BookIsShown && LoleYActive &&
          <Text fontSize='md' textAlign='center'>{MasteryMonsterLoleYBookComma}</Text>}

        {CutoutIsShown && LoleNActive &&
          <Text fontSize='md' textAlign='center'>{LoleNCutoutResourcesComma}</Text>}
        {MaskIsShown && LoleNActive &&
          <Text fontSize='md' textAlign='center'>{MasteryMonsterLoleNMaskComma}</Text>}
        {StatueIsShown && LoleNActive &&
          <Text fontSize='md' textAlign='center'>{MasteryMonsterLoleNStatueComma}</Text>}
        {BalloonIsShown && LoleNActive &&
          <Text fontSize='md' textAlign='center'>{MasteryMonsterLoleNBalloonComma}</Text>}
        {BookIsShown && LoleNActive &&
          <Text fontSize='md' textAlign='center'>{MasteryMonsterLoleNBookComma}</Text>}

          </Text>
          <Text fontSize='md'><b>Mastery Word Count:</b><br></br>

{LoleYIsShown && CutoutIsShown &&
          <Text fontSize='md' textAlign='center'>
          {LoleYCutoutWCComma}<br></br>
          </Text>}

          {LoleYIsShown && MaskIsShown &&
          <Text fontSize='md' textAlign='center'>
            {LoleYMaskWCComma}<br></br>
          </Text>}

          {LoleNIsShown && CutoutIsShown &&
          <Text fontSize='md' textAlign='center'>
            {LoleNCutoutWCComma}<br></br>
          </Text>}

          {LoleNIsShown && MaskIsShown &&
          <Text fontSize='md' textAlign='center'>
            {LoleNMaskWCComma}<br></br>
          </Text>}

          </Text>

          <Divider mt='3px' w='250px' />
          {CutoutIsShown &&
          <Text fontSize='md'><b>Battle Cost:</b><br></br> {totalMasteryMonsterCutout} Steel Axe<br></br> {totalMasteryMonsterCutout} Steel Shield</Text>}


          {CutoutIsShown && ComboIsShown &&
          <Text fontSize='md'><b>Battle Cost Word Count:</b><br></br>
          {LoleBothCutoutDLComboBattleCostComma}
          </Text>}

          {CutoutIsShown && BattleIsShown &&
          <Text fontSize='md'><b>Battle Cost Word Count:</b><br></br>
          {BattleWCCutoutDLComma}
          </Text>}

          <Divider mt='3px' w='250px' />
            {CutoutIsShown && CoinsIsShown &&
          <Text fontSize='md'><b>Coins Needed:<br></br></b>{CoinsCutoutDLComma} </Text>}
            {CutoutIsShown && CoinsIsShown &&
          <Text fontSize='md'><b>Monster Word Count:</b><br></br>
            {KuikasCoinsWCCutoutDLComma}</Text>}

            {CutoutIsShown && ComboIsShown &&
          <Text fontSize='md'><b>Coins Needed:<br></br></b>{CoinComboCutoutDL} </Text>}
            {CutoutIsShown && ComboIsShown &&
          <Text fontSize='md'><b>Coin Cost Word Count:</b><br></br>
            {0}</Text>}

            {CutoutIsShown && BattleIsShown &&
          <Text fontSize='md'><b>Coins Needed:<br></br></b>{LoleBothCoinBattleCutoutDL} </Text>}
            {CutoutIsShown && BattleIsShown &&
          <Text fontSize='md'><b>Coin Cost Word Count:</b><br></br>
            {TotalWCLoleBothBattleCoinsCutoutDLComma}</Text>}
        </VStack>
              </Box></Container>
  }
<br></br>

<Heading>Detailed View</Heading><br></br>


<Box as="span" flex='1' textAlign='center' padding-top={3}>
  <Text mb='12px' fontSize='2xl'><u><b>Monsters to Fight</b></u></Text>
        </Box>
        <Container>
        <Text><b>Potion Resources</b></Text>
        <TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
    <Tbody>
      <Tr>
        <Td>
        <Box w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f7/OdysOdees.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Odees</Text>
      {CutoutIsShown && LoleYIsShown && GrenadeIsShown && <text align='center'>{totalFinalOdees}</text>}
      {MaskIsShown && LoleYIsShown && GrenadeIsShown && <text align='center'>{totalFinalOdeesMask}</text>}

      {CutoutIsShown && LoleNIsShown && GrenadeIsShown && <text align='center'>{totalFinalOdeesLoleN}            </text>}
      {MaskIsShown && LoleNIsShown && GrenadeIsShown && <text align='center'>{totalFinalOdeesLoleNMask}      </text>}
      </VStack>
  </Box>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
        align='center'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/3/33/Musya.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Musya</Text>
      {CutoutIsShown && LoleYIsShown && GrenadeIsShown && <text align='center'>{totalActualMusya}</text>}
      {MaskIsShown && LoleYIsShown && GrenadeIsShown && <text align='center'>{totalActualMusyaMask}      </text>}

      {CutoutIsShown && LoleNIsShown && GrenadeIsShown && <text align='center'>{totalActualMusyaLoleN}</text>}
      {MaskIsShown && LoleNIsShown && GrenadeIsShown && <text align='center'>{totalActualMusyaMaskLoleN}</text>}
      </VStack>
  </Box>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
       align='center'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/85/Quaruk.png'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Quaruk</Text>
      {CutoutIsShown && LoleYIsShown && GrenadeIsShown && <text align='center'>{totalActualQuaruk}</text>}
      {MaskIsShown && LoleYIsShown && GrenadeIsShown && <text align='center'>{totalActualQuarukMask}</text>}

      {CutoutIsShown && LoleNIsShown && GrenadeIsShown && <text align='center'>{totalActualQuarukLoleN}      </text>}
      {MaskIsShown && LoleNIsShown && GrenadeIsShown && <text align='center'>{totalActualQuarukMaskLoleN}      </text>}
      </VStack>
  </Box>
        </Td>
      </Tr>    

      <Tr>
        <Td>
        <Box w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/24/Knuff.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Knuff</Text>
      {CutoutIsShown && LoleYIsShown && GrenadeIsShown && <text align='center'>{totalActualKnuff}</text>}
      {MaskIsShown && LoleYIsShown && GrenadeIsShown && <text align='center'>{totalActualKnuffMask}</text>}

      {CutoutIsShown && LoleNIsShown && GrenadeIsShown && <text align='center'>{totalActualKnuffLoleN}</text>}
      {MaskIsShown && LoleNIsShown && GrenadeIsShown && <text align='center'>{totalActualKnuffMaskLoleN}</text>}
      </VStack>
  </Box>
        </Td>

        <Td>
        <Box justify='center' w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
       align='center'
        boxSize='3rem'
        borderRadius='full'
        src='https://media.4thewords.com/public/monsters/image_1708469171.png'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Sopoi</Text>
      {CutoutIsShown && LoleYIsShown && GrenadeIsShown && <text align='center'>{totalActualSopoi}      </text>}
      {MaskIsShown && LoleYIsShown && GrenadeIsShown && <text align='center'>{totalActualSopoiMask}</text>}

      {CutoutIsShown && LoleNIsShown && GrenadeIsShown && <text align='center'>{totalActualSopoiLoleN}      </text>}
      {MaskIsShown && LoleNIsShown && GrenadeIsShown && <text align='center'>{totalActualSopoiMaskLoleN}</text>}
      </VStack>
  </Box>
        </Td>

        <Td>
        <Box justify='center' w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
        align='center'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b2/Mibloom.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Mibloom</Text>
      {CutoutIsShown && LoleYIsShown && GrenadeIsShown && <text align='center'>{totalActualMibloomAdjusted}</text>}
      {MaskIsShown && LoleYIsShown && GrenadeIsShown && <text align='center'>{totalMibloomMaskActual}</text>}

      {CutoutIsShown && LoleNIsShown && GrenadeIsShown && <text align='center'>{totalActualMibloomLoleNAdjusted}</text>}
      {MaskIsShown && LoleNIsShown && GrenadeIsShown && <text align='center'>{totalMibloomMaskLoleNActual}
      </text>}
      </VStack>
  </Box>
        </Td>

      </Tr>    

      <Tr>
        <Td>
        <Box justify='center' w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
       align='center'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/65/Kinguz.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Kinguz</Text>
      {CutoutIsShown && LoleYIsShown && GrenadeIsShown && <text align='center'>{totalActualKinguz}      </text>}
      {MaskIsShown && LoleYIsShown && GrenadeIsShown && <text align='center'>{totalActualKinguzMask}</text>}

      {CutoutIsShown && LoleNIsShown && GrenadeIsShown && <text align='center'>{totalActualKinguzLoleN}      </text>}
      {MaskIsShown && LoleNIsShown && GrenadeIsShown && <text align='center'>{totalActualKinguzMaskLoleN}</text>}
      </VStack>
  </Box>
        </Td>
      </Tr>    


    </Tbody>
  </Table>
</TableContainer>
</Container> 

{NullIsShown && !VelsounIsShown && !AlphaTamboIsShown && !TareitIsShown &&
!BabuIsShown && !RakstalIsShown && !ShamanLuziaIsShown && !MiclanIsShown &&
!KingMaiIsShown && !DustedLuziaIsShown && !DustyKingMaiIsShown &&
<Container>
        <Text mt='12px'><b>Farm for Coins</b></Text>
        <TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
    <Tbody>
      <Tr>
        <Td>
        <Box w='50px' h='100px' pb={5}>
        <VStack> 
       <Image
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/40/Kuikas.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Kuikas</Text>
      {CutoutIsShown && GrenadeIsShown && <text align='center'>{totalLoleBothCutoutKuikas}</text>}
      {MaskIsShown && GrenadeIsShown && <text align='center'>{totalLoleBothMaskKuikas}</text>}
      </VStack>
  </Box>
        </Td>
      </Tr>    
    </Tbody>
  </Table>
</TableContainer>
</Container> }

{GrenadeIsShown && TesvenIsShown &&
<Container>
        <Text mt='12px'><b>Farm for Coins</b></Text>
        <TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
    <Tbody>
      <Tr>
        <Td>
        <Box w='50px' h='100px' pb={5}>
        <VStack> 
       <Image
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/40/Kuikas.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Kuikas</Text>
      {CutoutIsShown && GrenadeIsShown && <text align='center'>{totalTesvenKuikasQtyCutout}</text>}
      {MaskIsShown && GrenadeIsShown && <text align='center'>{totalTesvenKuikasQtyMask}</text>}
      </VStack>
  </Box>
        </Td>
      </Tr>    
    </Tbody>
  </Table>
</TableContainer>
</Container> }

{GrenadeIsShown && AzadiIsShown &&
<Container>
    	<Text mt='12px'><b>Farm for Coins</b></Text>
    	<TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
	<Tbody>
  	<Tr>
    	<Td>
    	<Box w='50px' h='100px' pb={5}>
    	<VStack>
   	<Image
    	align='center'
    	boxSize='3rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/4/40/Kuikas.png/'
    	mr='5px'
  	/> <Text fontSize='lg' align='center'>Kuikas</Text>
  	{CutoutIsShown && GrenadeIsShown && <text align='center'>{totalAzadiKuikasQtyCutout}</text>}
  	{MaskIsShown && GrenadeIsShown && <text align='center'>{totalAzadiKuikasQtyMask}</text>}
  	</VStack>
  </Box>
    	</Td>
  	</Tr>    
	</Tbody>
  </Table>
</TableContainer>
</Container> }

{GrenadeIsShown && DustSuwoIsShown &&
<Container>
    	<Text mt='12px'><b>Farm for Coins</b></Text>
    	<TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
	<Tbody>
  	<Tr>
    	<Td>
    	<Box w='50px' h='100px' pb={5}>
    	<VStack>
   	<Image
    	align='center'
    	boxSize='3rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/4/40/Kuikas.png/'
    	mr='5px'
  	/> <Text fontSize='lg' align='center'>Kuikas</Text>
  	{CutoutIsShown && GrenadeIsShown && <text align='center'>{totalDustSuwoKuikasQtyCutout}</text>}
  	{MaskIsShown && GrenadeIsShown && <text align='center'>{totalDustSuwoKuikasQtyMask}</text>}
  	</VStack>
  </Box>
    	</Td>
  	</Tr>    
	</Tbody>
  </Table>
</TableContainer>
</Container> }


{GrenadeIsShown && SuwoIsShown &&
<Container>
    	<Text mt='12px'><b>Farm for Coins</b></Text>
    	<TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
	<Tbody>
  	<Tr>
    	<Td>
    	<Box w='50px' h='100px' pb={5}>
    	<VStack>
   	<Image
    	align='center'
    	boxSize='3rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/4/40/Kuikas.png/'
    	mr='5px'
  	/> <Text fontSize='lg' align='center'>Kuikas</Text>
  	{CutoutIsShown && GrenadeIsShown && <text align='center'>{totalSuwoKuikasQtyCutout}</text>}
  	{MaskIsShown && GrenadeIsShown && <text align='center'>{totalSuwoKuikasQtyMask}</text>}
  	</VStack>
  </Box>
    	</Td>
  	</Tr>    
	</Tbody>
  </Table>
</TableContainer>
</Container> }



{GrenadeIsShown && DarkReflectionIsShown &&
<Container>
    	<Text mt='12px'><b>Farm for Coins</b></Text>
    	<TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
	<Tbody>
  	<Tr>
    	<Td>
    	<Box w='50px' h='100px' pb={5}>
    	<VStack>
   	<Image
    	align='center'
    	boxSize='3rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/4/40/Kuikas.png/'
    	mr='5px'
  	/> <Text fontSize='lg' align='center'>Kuikas</Text>
  	{CutoutIsShown && GrenadeIsShown && <text align='center'>{totalDarkReflectionKuikasQtyCutout}</text>}
  	{MaskIsShown && GrenadeIsShown && <text align='center'>{totalDarkReflectionKuikasQtyMask}</text>}
  	</VStack>
  </Box>
    	</Td>
  	</Tr>    
	</Tbody>
  </Table>
</TableContainer>
</Container> }

{GrenadeIsShown && ReflectionIsShown &&
<Container>
    	<Text mt='12px'><b>Farm for Coins</b></Text>
    	<TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
	<Tbody>
  	<Tr>
    	<Td>
    	<Box w='50px' h='100px' pb={5}>
    	<VStack>
   	<Image
    	align='center'
    	boxSize='3rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/4/40/Kuikas.png/'
    	mr='5px'
  	/> <Text fontSize='lg' align='center'>Kuikas</Text>
  	{CutoutIsShown && GrenadeIsShown && <text align='center'>{totalDarkReflectionKuikasQtyCutout}</text>}
  	{MaskIsShown && GrenadeIsShown && <text align='center'>{totalDarkReflectionKuikasQtyMask}</text>}
  	</VStack>
  </Box>
    	</Td>
  	</Tr>    
	</Tbody>
  </Table>
</TableContainer>
</Container> }


{GrenadeIsShown && CaravanIsShown &&
<Container>
    	<Text mt='12px'><b>Farm for Coins</b></Text>
    	<TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
	<Tbody>
  	<Tr>
    	<Td>
    	<Box w='50px' h='100px' pb={5}>
    	<VStack>
   	<Image
    	align='center'
    	boxSize='3rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/4/40/Kuikas.png/'
    	mr='5px'
  	/> <Text fontSize='lg' align='center'>Kuikas</Text>
  	{CutoutIsShown && GrenadeIsShown && <text align='center'>{totalCaravanKuikasQtyCutout}</text>}
  	{MaskIsShown && GrenadeIsShown && <text align='center'>{totalCaravanKuikasQtyMask}</text>}
  	</VStack>
  </Box>
    	</Td>
  	</Tr>    
	</Tbody>
  </Table>
</TableContainer>
</Container> }

{GrenadeIsShown && KultalvaIsShown &&
<Container>
    	<Text mt='12px'><b>Farm for Coins</b></Text>
    	<TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
	<Tbody>
  	<Tr>
    	<Td>
    	<Box w='50px' h='100px' pb={5}>
    	<VStack>
   	<Image
    	align='center'
    	boxSize='3rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/4/40/Kuikas.png/'
    	mr='5px'
  	/> <Text fontSize='lg' align='center'>Kuikas</Text>
  	{CutoutIsShown && GrenadeIsShown && <text align='center'>{totalKultalvaKuikasQtyCutout}</text>}
  	{MaskIsShown && GrenadeIsShown && <text align='center'>{totalKultalvaKuikasQtyMask}</text>}
  	</VStack>
  </Box>
    	</Td>
  	</Tr>    
	</Tbody>
  </Table>
</TableContainer>
</Container> }

{GrenadeIsShown && RiverGoddessIsShown &&
<Container>
    	<Text mt='12px'><b>Farm for Coins</b></Text>
    	<TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
	<Tbody>
  	<Tr>
    	<Td>
    	<Box w='50px' h='100px' pb={5}>
    	<VStack>
   	<Image
    	align='center'
    	boxSize='3rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/4/40/Kuikas.png/'
    	mr='5px'
  	/> <Text fontSize='lg' align='center'>Kuikas</Text>
  	{CutoutIsShown && GrenadeIsShown && <text align='center'>{totalRiverGoddessKuikasQtyCutout}</text>}
  	{MaskIsShown && GrenadeIsShown && <text align='center'>{totalRiverGoddessKuikasQtyMask}</text>}
  	</VStack>
  </Box>
    	</Td>
  	</Tr>    
	</Tbody>
  </Table>
</TableContainer>
</Container> }



{GrenadeIsShown && VelsounIsShown &&
  <Container>
        <Text mt='12px'><b>Farm for Coins</b></Text>
        <TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
    <Tbody>
      <Tr>
        <Td>
        <Box w='50px' h='100px' pb={5}>
        <VStack> 
       <Image
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/40/Kuikas.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Kuikas</Text>
      {CutoutIsShown && GrenadeIsShown && <text align='center'>{totalVelsounKuikasQtyCutout}</text>}
      {MaskIsShown && GrenadeIsShown && <text align='center'>{totalVelsounKuikasQtyMask}</text>}
      </VStack>
  </Box>
        </Td>
      </Tr>    
    </Tbody>
  </Table>
</TableContainer>
</Container> }

{GrenadeIsShown && VelsounIsShown && 
<Container align='center'>
<Text mt='20px' mb='12px' fontSize='2xl'><u><b>Materials to Gather</b></u></Text>
<Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/60/Leafbreastplate_md.png/'
        mr='5px'        />
      <VStack align='center'> 
{CutoutIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalMasteryMonsterCutout} Leaf Breastplate</Text>}

{MaskIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalMasteryMonsterMask} Leaf Breastplate</Text>}
      </VStack>
      </HStack>
            </Box>   
            <Box 
            alignItems='center'
            w='250px' h='320px' 
            borderBottomColor='#2D3748' borderBottomWidth='2px'
            borderLeftColor='#2D3748' borderLeftWidth='2px'
            borderRightColor='#2D3748' borderRightWidth='2px'
            pb={5} backgroundColor='#1A202C'>
       
       <VStack>
       <HStack> 
       <Image
       mt='9px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a6/Spiderlegs_md.png/'
        mr='5px'
      /> 
      {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalVelsounLoleBothCutoutSpiderLegs} Spider Legs</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalVelsounLoleBothMaskSpiderLegs} Spider Legs</Text>}
      </HStack>

       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f9/Feathers_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalVelsounLoleBothCutoutFeathers} Feathers</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalVelsounLoleBothMaskFeathers} Feathers</Text>}
      </HStack>

      <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fc/Leaves_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalVelsounLoleBothCutoutLeaves} Leaves</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalVelsounLoleBothMaskLeaves} Leaves</Text>}
      </HStack>

       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/24/Tyluclaws_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalVelsounLoleBothCutoutClaws} Claws</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalVelsounLoleBothMaskClaws} Claws</Text>}
      </HStack>

       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalVelsounLoleBothCutoutCoinsLBP} Coins</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalVelsounLoleBothMaskCoinsLBP} Coins</Text>}
      </HStack>
      
      </VStack>
            </Box>   
</Container> } 

{GrenadeIsShown && AlphaTamboIsShown &&
  <Container>
        <Text mt='12px'><b>Farm for Roberries</b></Text>
        <TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
    <Tbody>
      <Tr>
        <Td>
        <Box w='50px' h='100px' pb={5}>
        <VStack> 
       <Image
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f1/Wizell.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Wizell</Text>
      {CutoutIsShown && GrenadeIsShown && <text align='center'>{totalRoberriesCutoutAT}</text>}
      {MaskIsShown && GrenadeIsShown && <text align='center'>{totalRoberriesMaskAT}</text>}
      </VStack>
  </Box>
        </Td>
      </Tr>    
    </Tbody>
  </Table>
</TableContainer>
</Container> }

{GrenadeIsShown && AlphaTamboIsShown && 
  <Container align='center'>
<Text mt='20px' mb='12px' fontSize='2xl'><u><b>Materials to Gather</b></u></Text>
<Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/ee/Roberries.png/'
        mr='5px'        />
      <VStack align='center'> 
{CutoutIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalRoberriesCutoutAT} Roberries</Text>}

{MaskIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalRoberriesMaskAT} Roberries</Text>}
      </VStack>
      </HStack>
            </Box>   
</Container> } 

{GrenadeIsShown && TareitIsShown &&
<Container>
    	<Text mt='12px'><b>Farm for Coins</b></Text>
    	<TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
	<Tbody>
  	<Tr>
    	<Td>
    	<Box w='50px' h='100px' pb={5}>

    	<VStack>
   	<Image
    	align='center'
    	boxSize='3rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/4/40/Kuikas.png/'
    	mr='5px'
  	/> <Text fontSize='lg' align='center'>Kuikas</Text>
  	{CutoutIsShown && GrenadeIsShown && <text align='center'>{totalTareitKuikasQtyCutout}</text>}
  	{MaskIsShown && GrenadeIsShown && <text align='center'>{totalTareitKuikasQtyMask}</text>}
  	</VStack>
  </Box>
    	</Td>
  	</Tr>    
	</Tbody>
  </Table>
</TableContainer>
</Container> }



{GrenadeIsShown && TareitIsShown && 
<Container align='center'>
<Text mt='20px' mb='12px' fontSize='2xl'><u><b>Materials to Gather</b></u></Text>
<Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/0d/Glassnecklace_md.png/'
        mr='5px'        />
      <VStack align='center'> 
{CutoutIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalMasteryMonsterCutout} Glass Necklace</Text>}

{MaskIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalMasteryMonsterMask} Glass NEcklace</Text>}
      </VStack>
      </HStack>
            </Box>   
            <Box 
            alignItems='center'
            w='250px' h='260px' 
            borderBottomColor='#2D3748' borderBottomWidth='2px'
            borderLeftColor='#2D3748' borderLeftWidth='2px'
            borderRightColor='#2D3748' borderRightWidth='2px'
            pb={5} backgroundColor='#1A202C'>
       
       <VStack>
       <HStack> 
       <Image
       mt='9px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/8b/Rustypendant_md.png/'
        mr='5px'
      /> 
      {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalRustyPenCutout} Rusty Pendant</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalRustyPenMask} Rusty Pendant</Text>}
      </HStack>

       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/d5/Glass_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalGlassTareitCutout} Glass Bar</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalGlassTareitMask} Glass Bar</Text>}
      </HStack>

      <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalMasteryMonsterCutout} Steel</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalMasteryMonsterMask} Steel</Text>}
      </HStack>

       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalCoinsTareitCutout} Coins</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalCoinsTareitMask} Coins</Text>}
      </HStack>
      
      </VStack>
            </Box>   
</Container> } 


{GrenadeIsShown && BabuIsShown &&
<Container>
    	<Text mt='12px'><b>Farm for Coins</b></Text>
    	<TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
	<Tbody>
  	<Tr>
    	<Td>
    	<Box w='50px' h='100px' pb={5}>

    	<VStack>
   	<Image
    	align='center'
    	boxSize='3rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/4/40/Kuikas.png/'
    	mr='5px'
  	/> <Text fontSize='lg' align='center'>Kuikas</Text>
  	{CutoutIsShown && GrenadeIsShown && <text align='center'>{totalBabuKuikasQtyCutout}</text>}
  	{MaskIsShown && GrenadeIsShown && <text align='center'>{totalBabuKuikasQtyMask}</text>}
  	</VStack>
  </Box>
    	</Td>
  	</Tr>    
	</Tbody>
  </Table>
</TableContainer>
</Container> }


{GrenadeIsShown && BabuIsShown && 
<Container align='center'>
<Text mt='20px' mb='12px' fontSize='2xl'><u><b>Materials to Gather</b></u></Text>
<Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/05/Steel_chains.png/'
        mr='5px'        />
      <VStack align='center'> 
{CutoutIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalBabuSteelChainsCutout} Steel Chains</Text>}

{MaskIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalBabuSteelChainsMask} Steel Chains</Text>}
      </VStack>
      </HStack>
            </Box>   
            <Box 
            alignItems='center'
            w='250px' h='130px' 
            borderBottomColor='#2D3748' borderBottomWidth='2px'
            borderLeftColor='#2D3748' borderLeftWidth='2px'
            borderRightColor='#2D3748' borderRightWidth='2px'
            pb={5} backgroundColor='#1A202C'>
       
       <VStack>
       <HStack> 
       <Image
       mt='9px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png/'
        mr='5px'
      /> 
      {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalBabuBattleCostCutoutNine} Steel</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalBabuBattleCostMaskNine} Steel</Text>}
      </HStack>

       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b2/Kuaywood_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalBabuBattleCostCutoutNine} Wood</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalBabuBattleCostMaskNine} Wood</Text>}
      </HStack>
      </VStack>
  
            </Box>   



<Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/40/Piece-of-parchment.png/'
        mr='5px'        />
      <VStack align='center'> 
{CutoutIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalBabuPieceofParchCutout} Piece of Parchment</Text>}

{MaskIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalBabuPieceofParchMask} Piece of Parchment</Text>}
      </VStack>
      </HStack>
            </Box>   

            <Box 
            alignItems='center'
            w='250px' h='190px' 
            borderBottomColor='#2D3748' borderBottomWidth='2px'
            borderLeftColor='#2D3748' borderLeftWidth='2px'
            borderRightColor='#2D3748' borderRightWidth='2px'
            pb={5} backgroundColor='#1A202C'>
       
       <VStack>
       <HStack> 
       <Image
       mt='9px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a6/Dried-pulp.png'
        mr='5px'
      /> 
      {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalBabuBattleCostCutoutSix} Dried Pulp</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalBabuBattleCostMaskSix} Dried Pulp</Text>}
      </HStack>

       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b3/Dust_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalBabuBattleCostCutoutSix} Dust</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalBabuBattleCostMaskSix} Dust</Text>}
      </HStack>

      <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b2/Kuaywood_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalBabuBattleCostCutoutSix} Wood</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalBabuBattleCostMaskSix} Wood</Text>}
      </HStack>


      </VStack>
  
            </Box>   

<Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/d3/Blue-essence-ink.png/'
        mr='5px'        />
      <VStack align='center'> 
{CutoutIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalBabuBlueEssInkCutout} Blue Essence Ink</Text>}

{MaskIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalBabuBlueEssInkMask} Blue Essence Ink</Text>}
      </VStack>
      </HStack>
            </Box>
            <Box 
            alignItems='center'
            w='250px' h='190px' 
            borderBottomColor='#2D3748' borderBottomWidth='2px'
            borderLeftColor='#2D3748' borderLeftWidth='2px'
            borderRightColor='#2D3748' borderRightWidth='2px'
            pb={5} backgroundColor='#1A202C'>
       
       <VStack>
       <HStack> 
       <Image
       mt='9px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/d5/Glass_md.png/'
        mr='5px'
      /> 
      {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalBabuBlueEssInkCutout} Glass Bar</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalBabuBlueEssInkMask} Glass Bar</Text>}
      </HStack>

       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/19/Wignowessence_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalBabuBlueEssInkCutout} Essence</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalBabuBlueEssInkMask} Essence</Text>}
      </HStack>

      <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e2/Refined-dust.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalBabuSteelChainsCutout} Refined Dust</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalBabuSteelChainsMask} Refined Dust</Text>}
      </HStack>

      </VStack>
            </Box>   
</Container> } 



{GrenadeIsShown && MiclanIsShown &&
<Container>
    	<Text mt='12px'><b>Farm for Coins</b></Text>
    	<TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
	<Tbody>
  	<Tr>
    	<Td>
    	<Box w='50px' h='100px' pb={5}>

    	<VStack>
   	<Image
    	align='center'
    	boxSize='3rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/4/40/Kuikas.png/'
    	mr='5px'
  	/> <Text fontSize='lg' align='center'>Kuikas</Text>
  	{CutoutIsShown && GrenadeIsShown && <text align='center'>{totalMiclanKuikasQtyCutout}</text>}
  	{MaskIsShown && GrenadeIsShown && <text align='center'>{totalMiclanKuikasQtyMask}</text>}
  	</VStack>
  </Box>
    	</Td>
  	</Tr>    
	</Tbody>
  </Table>
</TableContainer>
</Container> }


{GrenadeIsShown && MiclanIsShown && 
<Container align='center'>
<Text mt='20px' mb='12px' fontSize='2xl'><u><b>Materials to Gather</b></u></Text>
<Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/05/Steel_chains.png/'
        mr='5px'        />
      <VStack align='center'> 
{CutoutIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalMiclanSteelChainsCutout} Steel Chains</Text>}

{MaskIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalMiclanSteelChainsMask} Steel Chains</Text>}
      </VStack>
      </HStack>
            </Box>   
            <Box 
            alignItems='center'
            w='250px' h='130px' 
            borderBottomColor='#2D3748' borderBottomWidth='2px'
            borderLeftColor='#2D3748' borderLeftWidth='2px'
            borderRightColor='#2D3748' borderRightWidth='2px'
            pb={5} backgroundColor='#1A202C'>
       
       <VStack>
       <HStack> 
       <Image
       mt='9px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png/'
        mr='5px'
      /> 
      {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalMiclanSteelChainsCutout} Steel</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalMiclanSteelChainsMask} Steel</Text>}
      </HStack>

       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b2/Kuaywood_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalMiclanBattleCostCutoutFifteen} Wood</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalMiclanBattleCostMaskFifteen} Wood</Text>}
      </HStack>
      </VStack>
  
            </Box>   



<Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/40/Piece-of-parchment.png/'
        mr='5px'        />
      <VStack align='center'> 
{CutoutIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalMiclanPieceofParchCutout} Piece of Parchment</Text>}

{MaskIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalMiclanPieceofParchMask} Piece of Parchment</Text>}
      </VStack>
      </HStack>
            </Box>   

            <Box 
            alignItems='center'
            w='250px' h='190px' 
            borderBottomColor='#2D3748' borderBottomWidth='2px'
            borderLeftColor='#2D3748' borderLeftWidth='2px'
            borderRightColor='#2D3748' borderRightWidth='2px'
            pb={5} backgroundColor='#1A202C'>
       
       <VStack>
       <HStack> 
       <Image
       mt='9px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a6/Dried-pulp.png'
        mr='5px'
      /> 
      {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalMiclanBattleCostCutoutNine} Dried Pulp</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalMiclanBattleCostMaskNine} Dried Pulp</Text>}
      </HStack>

       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b3/Dust_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalMiclanBattleCostCutoutNine} Dust</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalMiclanBattleCostMaskNine} Dust</Text>}
      </HStack>

      <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b2/Kuaywood_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalMiclanBattleCostCutoutNine} Wood</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalMiclanBattleCostMaskNine} Wood</Text>}
      </HStack>


      </VStack>
  
            </Box>   

<Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/d3/Blue-essence-ink.png/'
        mr='5px'        />
      <VStack align='center'> 
{CutoutIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalMiclanBlueEssInkCutout} Blue Essence Ink</Text>}

{MaskIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalMiclanBlueEssInkMask} Blue Essence Ink</Text>}
      </VStack>
      </HStack>
            </Box>
            <Box 
            alignItems='center'
            w='250px' h='190px' 
            borderBottomColor='#2D3748' borderBottomWidth='2px'
            borderLeftColor='#2D3748' borderLeftWidth='2px'
            borderRightColor='#2D3748' borderRightWidth='2px'
            pb={5} backgroundColor='#1A202C'>
       
       <VStack>
       <HStack> 
       <Image
       mt='9px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/d5/Glass_md.png/'
        mr='5px'
      /> 
      {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalMiclanBlueEssInkCutout} Glass Bar</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalMiclanBlueEssInkMask} Glass Bar</Text>}
      </HStack>

       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/19/Wignowessence_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalMiclanBlueEssInkCutout} Essence</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalMiclanBlueEssInkMask} Essence</Text>}
      </HStack>

      <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e2/Refined-dust.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalMiclanSteelChainsCutout} Refined Dust</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalMiclanSteelChainsMask} Refined Dust</Text>}
      </HStack>

      </VStack>
            </Box>   
</Container> } 

{GrenadeIsShown && RakstalIsShown &&
  <Container>
        <Text mt='12px'><b>Farm for Swamp Moss</b></Text>
        <TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
    <Tbody>
      <Tr>
        <Td>
        <Box w='50px' h='100px' pb={5}>
        <VStack> 
       <Image
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/76/Heliodae.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Heliodae</Text>
      {CutoutIsShown && GrenadeIsShown && <text align='center'>{totalSwampMossCutoutRakstal}</text>}
      {MaskIsShown && GrenadeIsShown && <text align='center'>{totalSwampMossMaskRakstal}</text>}
      </VStack>
  </Box>
        </Td>
      </Tr>    
    </Tbody>
  </Table>
</TableContainer>
</Container> }



{GrenadeIsShown && RakstalIsShown && 
<Container align='center'>
<Text mt='20px' mb='12px' fontSize='2xl'><u><b>Materials to Gather</b></u></Text>
<Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/08/Swamp-moss.png/'
        mr='5px'        />
      <VStack align='center'> 
{CutoutIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalSwampMossCutoutRakstal} Swamp Moss</Text>}

{MaskIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalSwampMossMaskRakstal} Swamp Moss</Text>}
      </VStack>
      </HStack>
            </Box>   
</Container> } 

{GrenadeIsShown && ShamanLuziaIsShown &&
<Container>
    	<Text mt='12px'><b>Farm for Coins</b></Text>
    	<TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
	<Tbody>
  	<Tr>
    	<Td>
    	<Box w='50px' h='100px' pb={5}>

    	<VStack>
   	<Image
    	align='center'
    	boxSize='3rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/4/40/Kuikas.png/'
    	mr='5px'
  	/> <Text fontSize='lg' align='center'>Kuikas</Text>
  	{CutoutIsShown && GrenadeIsShown && <text align='center'>{totalShamanLuziaKuikasQtyCutout}</text>}
  	{MaskIsShown && GrenadeIsShown && <text align='center'>{totalShamanLuziaKuikasQtyMask}</text>}
  	</VStack>
  </Box>
    	</Td>
  	</Tr>    
	</Tbody>
  </Table>
</TableContainer>
</Container> }


{GrenadeIsShown && ShamanLuziaIsShown && 
<Container align='center'>
<Text mt='20px' mb='12px' fontSize='2xl'><u><b>Materials to Gather</b></u></Text>

            <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/c/c8/Fabrichelmet_md.png/'
        mr='5px'        />
      <VStack align='center'> 
{CutoutIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalFabricHelmetCutout} Fabric Helmet</Text>}

{MaskIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalFabricHelmetMask} Fabric Helmet</Text>}
      </VStack>
      </HStack>
            </Box>   
            <Box 
            alignItems='center'
            w='250px' h='320px' 
            borderBottomColor='#2D3748' borderBottomWidth='2px'
            borderLeftColor='#2D3748' borderLeftWidth='2px'
            borderRightColor='#2D3748' borderRightWidth='2px'
            pb={5} backgroundColor='#1A202C'>
       
       <VStack>
       <HStack> 
       <Image
       mt='9px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f3/Leafhelmet_md.png/'
        mr='5px'
      /> 
      {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalLeafHelmetCutout} Leaf Helmet</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalLeafHelmetMask} Leaf Helmet</Text>}
      </HStack>

       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/61/RawFabric.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalRawFabricCutout} Raw Fabric</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalRawFabricMask} Raw Fabric</Text>}
      </HStack>

      <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/0b/Finefabric_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalFineFabricCutout} Fine Fabric</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalFineFabricMask} Fine Fabric</Text>}
      </HStack>

       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalSteelShaLuzCutout} Steel</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalSteelShaLuzMask} Steel</Text>}
      </HStack>

       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalCoinsShaLuzCutout} Coins</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalCoinsShaLuzMask} Coins</Text>}
      </HStack>
      
      </VStack>
            </Box>   

            <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        src='https://static.wikia.nocookie.net/4thewords/images/7/7d/Steelspear_md.png/'
        mr='5px'        />
      <VStack align='center'> 
{CutoutIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalSteelSpearCutout} Steel Spear</Text>}

{MaskIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalSteelSpearMask} Steel Spear</Text>}
      </VStack>
      </HStack>
            </Box>   
            <Box 
            alignItems='center'
            w='250px' h='265px' 
            borderBottomColor='#2D3748' borderBottomWidth='2px'
            borderLeftColor='#2D3748' borderLeftWidth='2px'
            borderRightColor='#2D3748' borderRightWidth='2px'
            pb={5} backgroundColor='#1A202C'>
       
       <VStack>
       <HStack> 
       <Image
       mt='9px'
        align='center' 
        boxSize='3rem'
        src='https://static.wikia.nocookie.net/4thewords/images/a/ac/Woodspear_md.png/'
        mr='5px'
      /> 
      {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalWoodSpearCutout} Wood Spear</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalWoodSpearMask} Wood Spear</Text>}
      </HStack>

       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/61/RawFabric.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalRawFabricSteelSpearCutout} Raw Fabric</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalRawFabricSteelSpearMask} Raw Fabric</Text>}
      </HStack>

       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalSteelShaLuzCutout} Steel</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalSteelShaLuzMask} Steel</Text>}
      </HStack>

       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalCoinsShaLuzSteelSpearCutout} Coins</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalCoinsShaLuzSteelSpearMask} Coins</Text>}
      </HStack>
      
      </VStack>
            </Box>   

</Container> } 

{GrenadeIsShown && KingMaiIsShown &&
<Container>
    	<Text mt='12px'><b>Farm for Coins</b></Text>
    	<TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
	<Tbody>
  	<Tr>
    	<Td>
    	<Box w='50px' h='100px' pb={5}>

    	<VStack>
   	<Image
    	align='center'
    	boxSize='3rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/4/40/Kuikas.png/'
    	mr='5px'
  	/> <Text fontSize='lg' align='center'>Kuikas</Text>
  	{CutoutIsShown && GrenadeIsShown && <text align='center'>{totalKingMaiKuikasQtyCutout}</text>}
  	{MaskIsShown && GrenadeIsShown && <text align='center'>{totalKingMaiKuikasQtyMask}</text>}
  	</VStack>
  </Box>
    	</Td>
  	</Tr>    
	</Tbody>
  </Table>
</TableContainer>
</Container> }


{GrenadeIsShown && KingMaiIsShown && 
<Container align='center'>
<Text mt='20px' mb='12px' fontSize='2xl'><u><b>Materials to Gather</b></u></Text>

            <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/3/31/Fabricbreastplate_md.png/'
        mr='5px'        />
      <VStack align='center'> 
{CutoutIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalFabricBreastplateCutout} Fabric Breastplate</Text>}

{MaskIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalFabricBreastplateMask} Fabric Breastplate</Text>}
      </VStack>
      </HStack>
            </Box>   
            <Box 
            alignItems='center'
            w='250px' h='320px' 
            borderBottomColor='#2D3748' borderBottomWidth='2px'
            borderLeftColor='#2D3748' borderLeftWidth='2px'
            borderRightColor='#2D3748' borderRightWidth='2px'
            pb={5} backgroundColor='#1A202C'>
       
       <VStack>
       <HStack> 
       <Image
       mt='9px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/60/Leafbreastplate_md.png/'
        mr='5px'
      /> 
      {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalLeafBreastplateKingMaiCutout} Leaf Breastplate</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalLeafBreastplateKingMaiMask} Leaf Breastplate</Text>}
      </HStack>

       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/61/RawFabric.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalRawFabricFBPCutout} Raw Fabric</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalRawFabricFBPMask} Raw Fabric</Text>}
      </HStack>

      <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/0b/Finefabric_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalFineFabricFBPCutout} Fine Fabric</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalFineFabricFBPMask} Fine Fabric</Text>}
      </HStack>

       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalSteelKingMaiCutout} Steel</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalSteelKingMaiMask} Steel</Text>}
      </HStack>

       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalCoinsKingMaiCutout} Coins</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalCoinsKingMaiMask} Coins</Text>}
      </HStack>
      
      </VStack>
            </Box>   

            <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        src='https://static.wikia.nocookie.net/4thewords/images/1/10/Steelsword_md.png/'
        mr='5px'        />
      <VStack align='center'> 
{CutoutIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalSteelSwordCutout} Steel Sword</Text>}

{MaskIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalSteelSwordMask} Steel Sword</Text>}
      </VStack>
      </HStack>
            </Box>   
            <Box 
            alignItems='center'
            w='250px' h='265px' 
            borderBottomColor='#2D3748' borderBottomWidth='2px'
            borderLeftColor='#2D3748' borderLeftWidth='2px'
            borderRightColor='#2D3748' borderRightWidth='2px'
            pb={5} backgroundColor='#1A202C'>
       
       <VStack>
       <HStack> 
       <Image
       mt='9px'
        align='center' 
        boxSize='3rem'
        src='https://static.wikia.nocookie.net/4thewords/images/7/7b/Woodsword_md.png/'
        mr='5px'
      /> 
      {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalWoodSwordCutout} Wood Sword</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalWoodSwordMask} Wood Sword</Text>}
      </HStack>

       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/0b/Finefabric_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalFineFabricSteelSwordCutout} Fine Fabric</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalFineFabricSteelSwordMask} Fine Fabric</Text>}
      </HStack>

       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalSteelKingMaiCutout} Steel</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalSteelKingMaiMask} Steel</Text>}
      </HStack>

       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalCoinsKingMaiSteelSwordCutout} Coins</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalCoinsKingMaiSteelSwordMask} Coins</Text>}
      </HStack>
      
      </VStack>
            </Box>   

</Container> } 

{GrenadeIsShown && DustedLuziaIsShown &&
<Container>
    	<Text mt='12px'><b>Farm for Materials</b></Text>
    	<TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
	<Tbody>
  	<Tr>
    	<Td>
    	<Box w='50px' h='100px' pb={5}>

    	<VStack>
   	<Image
    	align='center'
    	boxSize='3rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/4/40/Kuikas.png/'
    	mr='5px'
  	/> <Text fontSize='lg' align='center'>Kuikas</Text>
  	{CutoutIsShown && GrenadeIsShown && <text align='center'>{totalDustedLuziaKuikasQtyCutout}</text>}
  	{MaskIsShown && GrenadeIsShown && <text align='center'>{totalDustedLuziaKuikasQtyMask}</text>}
  	</VStack>
  </Box>
    	</Td>
      <Td>
    	<Box w='50px' h='100px' pb={5}>

    	<VStack>
   	<Image
    	align='center'
    	boxSize='3rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Scofin.png/'
    	mr='5px'
  	/> <Text fontSize='lg' align='center'>Scofin</Text>
  	{CutoutIsShown && GrenadeIsShown && <text align='center'>{totalDustedLuziaScofinQtyCutout}</text>}
  	{MaskIsShown && GrenadeIsShown && <text align='center'>{totalDustedLuziaScofinQtyMask}</text>}
  	</VStack>
  </Box>
    	</Td>
  	</Tr>    
	</Tbody>
  </Table>
</TableContainer>
</Container> }


{GrenadeIsShown && DustedLuziaIsShown && 
<Container align='center'>
<Text mt='20px' mb='12px' fontSize='2xl'><u><b>Materials to Gather</b></u></Text>

            <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b9/Steelshield_md.png/'
        mr='5px'        />
      <VStack align='center'> 
{CutoutIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalMasteryMonsterCutout} Steel Shield</Text>}

{MaskIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalMasteryMonsterMask} Steel Shield</Text>}
      </VStack>
      </HStack>
            </Box>   
            <Box 
            alignItems='center'
            w='250px' h='200px' 
            borderBottomColor='#2D3748' borderBottomWidth='2px'
            borderLeftColor='#2D3748' borderLeftWidth='2px'
            borderRightColor='#2D3748' borderRightWidth='2px'
            pb={5} backgroundColor='#1A202C'>
       
       <VStack>

       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalSteelShieldDLSteelCutout} Steel</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalSteelShieldDLSteelMask} Steel</Text>}
      </HStack>

      <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/0c/Hardwood_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalSteelShieldDLHardwoodCutout} Hardwood</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalSteelShieldDLHardwoodMask} Hardwood</Text>}
      </HStack>


       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/ea/Rivergrass_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalSteelShieldDLRGCutout} River Grass</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalSteelShieldDLRGMask} River Grass</Text>}
      </HStack>
      
      </VStack>
            </Box>   
  
            <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/4b/Steelaxe_md.png/'
        mr='5px'        />
      <VStack align='center'> 
{CutoutIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalMasteryMonsterCutout} Steel Axe</Text>}

{MaskIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalMasteryMonsterMask} Steel Axe</Text>}
      </VStack>
      </HStack>
            </Box>   
            <Box 
            alignItems='center'
            w='250px' h='200px' 
            borderBottomColor='#2D3748' borderBottomWidth='2px'
            borderLeftColor='#2D3748' borderLeftWidth='2px'
            borderRightColor='#2D3748' borderRightWidth='2px'
            pb={5} backgroundColor='#1A202C'>
       
       <VStack>

       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalSteelAxeDLSteelCutout} Steel</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalSteelAxeDLSteelMask} Steel</Text>}
      </HStack>

      <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/0c/Hardwood_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalSteelAxeDLHardwoodCutout} Hardwood</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalSteelAxeDLHardwoodMask} Hardwood</Text>}
      </HStack>


       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/ea/Rivergrass_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalSteelAxeDLRGCutout} River Grass</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalSteelAxeDLRGMask} River Grass</Text>}
      </HStack>
      
      </VStack>
            </Box>   


</Container> } 

      
{DustedLuziaIsShown && CoinsIsShown &&
<Container>
        <Text mt='12px'><b>Battle Cost</b></Text>
        <TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
    <Tbody>
      <Tr>
        <Td>
        <Box w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/40/Kuikas.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Kuikas</Text>
      {CutoutIsShown && GrenadeIsShown && <text align='center'>{totalKuikasCoinsCutoutDL}</text>}
      {MaskIsShown && GrenadeIsShown && <text align='center'>{totalKuikasCoinsMaskDL}</text>}
      </VStack>
  </Box>
        </Td>
      </Tr>    

    </Tbody>
  </Table>
</TableContainer>
</Container> }


{DustedLuziaIsShown && ComboIsShown &&
<Container>
        <Text mt='12px'><b>Battle Cost</b></Text>
        <TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
    <Tbody>
      <Tr>
        <Td>
        <Box w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/40/Kuikas.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Kuikas</Text>
      {CutoutIsShown && GrenadeIsShown && <text align='center'>{totalKuikasFarmComboCutoutDL}</text>}
      {MaskIsShown && GrenadeIsShown && <text align='center'>{totalKuikasFarmComboMaskDL}</text>}
      </VStack>
  </Box>
        </Td>
        <Td>
        <Box w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/26/Jeso.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Jeso</Text>
      {CutoutIsShown && GrenadeIsShown && <text align='center'>{totalJesoNeededCutoutDL}</text>}
      {MaskIsShown && GrenadeIsShown && <text align='center'>{totalJesoNeededMaskDL}</text>}
      </VStack>
  </Box>
        </Td>
      </Tr>    
    </Tbody>
  </Table>
</TableContainer>
</Container> }


{DustedLuziaIsShown && BattleIsShown &&
<Container>
        <Text mt='12px'><b>Battle Cost</b></Text>
        <TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
    <Tbody>
      <Tr>
        <Td>
        <Box w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/40/Kuikas.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Kuikas</Text>
      {CutoutIsShown && GrenadeIsShown && <text align='center'>{totalKuikasFarmBattleCutoutDL}</text>}
      {MaskIsShown && GrenadeIsShown && <text align='center'>{totalKuikasFarmBattleMaskDL}</text>}
      </VStack>
  </Box>
        </Td>
    
        <Td>
        <Box w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/60/Jaaje.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Jaaje</Text>
      {CutoutIsShown && GrenadeIsShown && <text align='center'>{totalHWCutoutDL}</text>}
      {MaskIsShown && GrenadeIsShown && <text align='center'>{totalHWMaskDL}</text>}
      </VStack>
  </Box>
        </Td>
        <Td>
        <Box w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/0e/Olea.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Olea</Text>
      {CutoutIsShown && GrenadeIsShown && <text align='center'>{totalRGBattleCutoutDL}</text>}
      {MaskIsShown && GrenadeIsShown && <text align='center'>{totalRGBattleMaskDL}</text>}
      </VStack>
  </Box>
        </Td>
      </Tr>    

      <Tr>
        <Td>
        <Box w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Scofin.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Scofin</Text>
      {CutoutIsShown && GrenadeIsShown && <text align='center'>{totalScofinSteelCutoutDL}</text>}
      {MaskIsShown && GrenadeIsShown && <text align='center'>{totalScofinSteelMaskDL}</text>}
      </VStack>
  </Box>
        </Td>
        <Td>
        <Box w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/78/Xin.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Xin</Text>
      {CutoutIsShown && GrenadeIsShown && <text align='center'>{totalLeavesNeededCutoutDL}</text>}
      {MaskIsShown && GrenadeIsShown && <text align='center'>{totalLeavesNeededMaskDL}</text>}
      </VStack>
  </Box>
        </Td>
      </Tr>    

    </Tbody>
  </Table>
</TableContainer>
</Container> }



{GrenadeIsShown && KingMaiIsShown &&
<Container>
    	<Text mt='12px'><b>Farm for Coins</b></Text>
    	<TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
	<Tbody>
  	<Tr>
    	<Td>
    	<Box w='50px' h='100px' pb={5}>

    	<VStack>
   	<Image
    	align='center'
    	boxSize='3rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/4/40/Kuikas.png/'
    	mr='5px'
  	/> <Text fontSize='lg' align='center'>Kuikas</Text>
  	{CutoutIsShown && GrenadeIsShown && <text align='center'>{totalKingMaiKuikasQtyCutout}</text>}
  	{MaskIsShown && GrenadeIsShown && <text align='center'>{totalKingMaiKuikasQtyMask}</text>}
  	</VStack>
  </Box>
    	</Td>
  	</Tr>    
	</Tbody>
  </Table>
</TableContainer>
</Container> }


{GrenadeIsShown && DustyKingMaiIsShown &&
<Container>
    	<Text mt='12px'><b>Farm for Coins</b></Text>
    	<TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
	<Tbody>
  	<Tr>
    	<Td>
    	<Box w='50px' h='100px' pb={5}>

    	<VStack>
   	<Image
    	align='center'
    	boxSize='3rem'
    	borderRadius='full'
    	src='https://static.wikia.nocookie.net/4thewords/images/4/40/Kuikas.png/'
    	mr='5px'
  	/> <Text fontSize='lg' align='center'>Kuikas</Text>
  	{CutoutIsShown && GrenadeIsShown && <text align='center'>{totalDustyKingMaiKuikasQtyCutout}</text>}
  	{MaskIsShown && GrenadeIsShown && <text align='center'>{totalDustyKingMaiKuikasQtyMask}</text>}
  	</VStack>
  </Box>
    	</Td>
  	</Tr>    
	</Tbody>
  </Table>
</TableContainer>
</Container> }

{GrenadeIsShown && DustyKingMaiIsShown && 
<Container align='center'>
<Text mt='20px' mb='12px' fontSize='2xl'><u><b>Materials to Gather</b></u></Text>

            <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fa/FusionCuirass.png/'
        mr='5px'        />
      <VStack align='center'> 
{CutoutIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalMasteryMonsterCutout} Fusion Cuirass</Text>}

{MaskIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalMasteryMonsterMask} Fusion Cuirass</Text>}
      </VStack>
      </HStack>
            </Box>   
            <Box 
            alignItems='center'
            w='250px' h='320px' 
            borderBottomColor='#2D3748' borderBottomWidth='2px'
            borderLeftColor='#2D3748' borderLeftWidth='2px'
            borderRightColor='#2D3748' borderRightWidth='2px'
            pb={5} backgroundColor='#1A202C'>
       
       <VStack>
       <HStack> 
       <Image
       mt='9px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1f/FusionGlass.png/'
        mr='5px'
      /> 
      {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalDustyKingMaiCutoutQtyEight} Fusion Glass</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalDustyKingMaiMaskQtyEight} Fusion Glass</Text>}
      </HStack>

       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalDustyKingMaiCutoutQtyFifteen} Steel</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalDustyKingMaiMaskQtyFifteen} Steel</Text>}
      </HStack>

       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e7/DustRepellentElixir.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalDustyKingMaiCutoutQtyFour} D-R Elixir</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalDustyKingMaiMaskQtyFour} D-R Elixir</Text>}
      </HStack>

      <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/0b/Finefabric_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalDustyKingMaiCutoutQtyFour} Fine Fabric</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalDustyKingMaiMaskQtyFour} Fine Fabric</Text>}
      </HStack>


       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalDustyKingMaiCutoutQtyFiveHundo} Coins</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalDustyKingMaiMaskQtyFiveHundo} Coins</Text>}
      </HStack>
      
      </VStack>
            </Box>   


            <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f8/CrestedHelmet.png/'
        mr='5px'        />
      <VStack align='center'> 
{CutoutIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalMasteryMonsterCutout} Crested Helmet</Text>}

{MaskIsShown &&
        <Text mt='12px' mr='24px' fontSize='lg' align='center'>{totalMasteryMonsterMask} Crested Helmet</Text>}
      </VStack>
      </HStack>
            </Box>   
            <Box 
            alignItems='center'
            w='250px' h='255px' 
            borderBottomColor='#2D3748' borderBottomWidth='2px'
            borderLeftColor='#2D3748' borderLeftWidth='2px'
            borderRightColor='#2D3748' borderRightWidth='2px'
            pb={5} backgroundColor='#1A202C'>
       
       <VStack>
       <HStack> 
       <Image
       mt='9px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1f/FusionGlass.png/'
        mr='5px'
      /> 
      {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalDustyKingMaiCutoutQtyTen} Fusion Glass</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalDustyKingMaiMaskQtyTen} Fusion Glass</Text>}
      </HStack>

       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalDustyKingMaiCutoutQtyEight} Steel</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalDustyKingMaiMaskQtyEight} Steel</Text>}
      </HStack>

       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e7/DustRepellentElixir.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalDustyKingMaiCutoutQtyTwo} D-R Elixir</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalDustyKingMaiMaskQtyTwo} D-R Elixir</Text>}
      </HStack>


       <HStack> 
       <Image
         mt='6px'
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        mr='5px'
      /> 
            {CutoutIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalDustyKingMaiCutoutQtyOneK} Coins</Text>}
      {MaskIsShown && GrenadeIsShown && 
      <Text fontSize='lg' align='center'>{totalDustyKingMaiMaskQtyOneK} Coins</Text>}
      </HStack>
      
      </VStack>
            </Box>   
 

</Container> } 


        <br></br>
        <br></br>
        </Container>}
<br></br><br></br>

        </Grid>
      </Box>
  );
}


export default App;
export   const MyComponent = props => {
  const [input, setInput] = useState(props || '')
  return (
    {input}
  )
}

export   const MyComponentWC = props => {
  const [inputWC, setInputWC] = useState(props || '')
  return (
    {inputWC}
  )
}