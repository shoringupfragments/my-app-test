import React from 'react';
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  ChakraProvider,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,
  Heading,
  HStack,
  Icon,
  VStack,
  List,
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
  Stat,
  StatLabel,
  StatNumber,
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

import {
  chakraComponents,
  Select,
} from "chakra-react-select";
import { toBePartiallyChecked } from '@testing-library/jest-dom/matchers';
import { useFormAction } from 'react-router-dom';




function App() {

  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue('light', 'dark');
  const SwitchIcon = useColorModeValue(FaSun, FaMoon);
  const tablecolor = useColorModeValue('purple', 'teal')


  const [NullIsShown, setNullIsShown] = useState(false);


  
  const monsterOptions = [
    {
      value: "darkreflection",
      label: "Dark Reflection",
      icon: <Image src="https://static.wikia.nocookie.net/4thewords/images/d/d6/Dark_Reflection.png" mr={2} h={5} w={5} />
    },
    {
      value: "dustedluzia",
      label: "Dusted Luzia",
      icon: <Image src="https://static.wikia.nocookie.net/4thewords/images/6/6b/Dusted_Luzia.png" mr={2} h={5} w={5} />,
    },
    {
      value: "kultalva",
      label: "Kultalva",
      icon: <Image src="https://static.wikia.nocookie.net/4thewords/images/8/87/Kultalva.png" mr={2} h={5} w={5} />
    },
    {
      value: "velsoun",
      label: "Velsoun",
      icon: <Image src="https://static.wikia.nocookie.net/4thewords/images/9/9d/Velsoun.png" mr={2} h={5} w={5} />
    },
  ];
  
  const customComponents = {
    Option: ({ children, ...props }) => (
      <chakraComponents.Option {...props}>
        {props.data.icon} {children}
      </chakraComponents.Option>
    )
  };


  const [LoleYActive, setLoleYActive] = useState(false);
  const [LoleNActive, setLoleNActive] = useState(false);
  const [LoleYIsShown, setLoleYIsShown] = useState(false);
  const [LoleNIsShown, setLoleNIsShown] = useState(false);

  const [GrenadeActive, setGrenadeActive] = useState(false);
  const [GrenadeIsShown, setGrenadeIsShown] = useState(false);
  const [BlastActive, setBlastActive] = useState(false);
  const [BlastIsShown, setBlastIsShown] = useState(false);

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

  const handleGrenadeClick = event => {
    // 👇️ toggle shown state
    setGrenadeIsShown(current => !GrenadeIsShown);
    setGrenadeActive(!GrenadeActive);
    setBlastIsShown(current => null);
    setBlastActive(current => null);
  };


    const handleBlastClick = event => {
      // 👇️ toggle shown state
      setBlastIsShown(current => !BlastIsShown);
      setBlastActive(!BlastActive);
      setGrenadeIsShown(current => null);
      setGrenadeActive(current => null);
  
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

    const [Wizell, setWizell] = useState(0); // Or any other non-zero value

    const handleWizellChange = (valueString) => {
      const value = parseFloat(valueString);
        setWizell(value);
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




// experiment ?? //

const [MasteryMonster, setMasteryMonster] = useState(0); // Or any other non-zero value

const handleMasteryMonsterChange = (valueString) => {
  const value = parseFloat(valueString);
    setMasteryMonster(value);
  };

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

const [ActualMibloom, setActualMibloom] = useState(0);
const totalActualMibloom = Math.min (totalMibloomPossAdjusted, totalKnuffOverflow)

const [ActualMibloomAdjusted, setActualMibloomAdjusted] = useState(0);
const totalActualMibloomAdjusted = Math.ceil (totalActualMibloom/3)

const [MibloomOverflow, setMibloomOverflow] = useState(0);
const totalMibloomOverflow = Math.max (totalKnuffOverflow-totalActualMibloom, 0)

const [ActualKinguz, setActualKinguz] = useState(0);
const totalActualKinguz = Math.min (totalKinguzPoss, totalMibloomOverflow)

const [KinguzOverflow, setKinguzOverflow] = useState(0);
const totalKinguzOverflow = Math.max (totalMibloomOverflow-totalActualKinguz, 0)

const [finalOdees, setFinalOdees] = useState(0);
const totalFinalOdees = Math.max (totalKinguzOverflow+totalActualOdees, totalActualOdees)

const [LoleYCutoutWC, setLoleYCutoutWC] = useState(0);
const totalLoleYCutoutWC = Math.max ((totalFinalOdees*44)+(totalActualMusya*50)+(totalActualQuaruk*50)+(totalActualKnuff*60)+(totalActualMibloomAdjusted*150)+(totalActualKinguz*70),0)


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

const [MibloomMaskDrops, setMibloomMaskDrops] = useState(0);
const totalMibloomMaskDrops = Math.min (totalMibloomPossAdjusted, totalKnuffMaskOverflow)

const [MibloomMaskActual, setMibloomMaskActual] = useState(0);
const totalMibloomMaskActual = Math.ceil (totalMibloomMaskDrops/3)

const [MibloomMaskOverflow, setMibloomMaskOverflow] = useState(0);
const totalMibloomMaskOverflow = Math.max (totalKnuffMaskOverflow-totalMibloomMaskDrops,0)

const [ActualKinguzMask, setActualKinguzMask] = useState(0);
const totalActualKinguzMask = Math.min (totalKinguzPoss, totalMibloomMaskOverflow)

const [KinguzMaskOverflow, setKinguzMaskOverflow] = useState(0);
const totalKinguzMaskOverflow = Math.max (totalMibloomMaskOverflow-totalActualKinguzMask, 0)

const [finalOdeesMask, setFinalOdeesMask] = useState(0);
const totalFinalOdeesMask = Math.max (totalKinguzMaskOverflow+totalActualOdeesMask, totalActualOdeesMask)

const [LoleYMaskWC, setLoleYMaskWC] = useState(0);
const totalLoleYMaskWC = Math.max ((totalFinalOdeesMask*44)+(totalActualMusyaMask*50)+(totalActualQuarukMask*50)+(totalActualKnuffMask*60)+(totalMibloomMaskActual*150)+(totalActualKinguzMask*70),0)


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

const [ActualMibloomLoleN, setActualMibloomLoleN] = useState(0);
const totalActualMibloomLoleN = Math.min (totalMibloomPossAdjusted, totalKnuffLoleNOverflow)

const [ActualMibloomLoleNAdjusted, setActualMibloomLoleNAdjusted] = useState(0);
const totalActualMibloomLoleNAdjusted = Math.ceil (totalActualMibloomLoleN/3)

const [MibloomLoleNOverflow, setMibloomLoleNOverflow] = useState(0);
const totalMibloomLoleNOverflow = Math.max (totalKnuffLoleNOverflow-totalActualMibloomLoleN, 0)

const [ActualKinguzLoleN, setActualKinguzLoleN] = useState(0);
const totalActualKinguzLoleN = Math.min (totalKinguzPoss, totalMibloomLoleNOverflow)

const [KinguzLoleNOverflow, setKinguzLoleNOverflow] = useState(0);
const totalKinguzLoleNOverflow = Math.max (totalMibloomLoleNOverflow-totalActualKinguzLoleN, 0)

const [finalOdeesLoleN, setFinalOdeesLoleN] = useState(0);
const totalFinalOdeesLoleN = Math.max (totalKinguzLoleNOverflow+totalActualOdeesLoleN, 0)

const [LoleNCutoutWC, setLoleNCutoutWC] = useState(0);
const totalLoleNCutoutWC = Math.max ((totalFinalOdeesLoleN*44)+(totalActualMusyaLoleN*50)+(totalActualQuarukLoleN*50)+(totalActualKnuffLoleN*60)+(totalActualMibloomLoleNAdjusted*150)+(totalActualKinguzLoleN*70),0)


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

const [MibloomMaskLoleNDrops, setMibloomMaskLoleNDrops] = useState(0);
const totalMibloomMaskLoleNDrops = Math.min (totalMibloomPossAdjusted, totalKnuffMaskLoleNOverflow)

const [MibloomMaskLoleNActual, setMibloomMaskLoleNActual] = useState(0);
const totalMibloomMaskLoleNActual = Math.ceil (totalMibloomMaskLoleNDrops/3)

const [MibloomMaskLoleNOverflow, setMibloomMaskLoleNOverflow] = useState(0);
const totalMibloomMaskLoleNOverflow = Math.max (totalKnuffMaskLoleNOverflow-totalMibloomMaskLoleNDrops,0)

const [ActualKinguzMaskLoleN, setActualKinguzMaskLoleN] = useState(0);
const totalActualKinguzMaskLoleN = Math.min (totalKinguzPoss, totalMibloomMaskLoleNOverflow)

const [KinguzMaskLoleNOverflow, setKinguzMaskLoleNOverflow] = useState(0);
const totalKinguzMaskLoleNOverflow = Math.max (totalMibloomMaskLoleNOverflow-totalActualKinguzMaskLoleN, 0)

const [finalOdeesLoleNMask, setFinalOdeesLoleNMask] = useState(0);
const totalFinalOdeesLoleNMask = Math.max (totalKinguzMaskLoleNOverflow + totalActualOdeesMaskLoleN, totalActualOdeesMaskLoleN)

const [LoleNMaskWC, setLoleNMaskWC] = useState(0);
const totalLoleNMaskWC = Math.max ((totalFinalOdeesLoleNMask*44)+(totalActualMusyaMaskLoleN*50)+(totalActualQuarukMaskLoleN*50)+(totalActualKnuffMaskLoleN*60)+(totalMibloomMaskLoleNActual*150)+(totalActualKinguzMaskLoleN*70),0)

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
const totalLoleBothMaskPotionCostWC = Math.max ((totalMasteryMonsterMask * 50),0)

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
const totalVelsounLoleYCutoutTotalCoinsWC = Math.max (totalVelsounLoleBothCutoutBattleCostCoinsWC + totalLoleYCutoutWC + totalLoleBothCutoutPotionCostWC,0)

const [VelsounLoleYMaskTotalCoinsWC, setVelsounLoleYMaskTotalCoinsWC] = useState(0);
const totalVelsounLoleYMaskTotalCoinsWC = Math.max (totalVelsounLoleBothMaskBattleCostCoinsWC + totalLoleYMaskWC + totalLoleBothMaskPotionCostWC,0)

const [VelsounLoleNCutoutTotalCoinsWC, setVelsounLoleNCutoutTotalCoinsWC] = useState(0);
const totalVelsounLoleNCutoutTotalCoinsWC = Math.max (totalVelsounLoleBothCutoutBattleCostCoinsWC + totalLoleNCutoutWC + totalLoleBothCutoutPotionCostWC,0)

const [VelsounLoleNMaskTotalCoinsWC, setVelsounLoleNMaskTotalCoinsWC] = useState(0);
const totalVelsounLoleNMaskTotalCoinsWC = Math.max (totalVelsounLoleBothMaskBattleCostCoinsWC + totalLoleNMaskWC + totalLoleBothMaskPotionCostWC,0)

const [VelsounKuikasLoleBothCutout, setVelsounKuikasLoleBothCutout] = useState(0);
const totalVelsounKuikasLoleBothCutout = Math.max (totalVelsounLoleBothCutoutKuikas+totalLoleBothCutoutKuikas,0)

const [VelsounKuikasLoleBothMask, setVelsounKuikasLoleBothMask] = useState(0);
const totalVelsounKuikasLoleBothMask = Math.max (totalVelsounLoleBothMaskKuikas+totalLoleBothMaskKuikas,0)

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
const totalWCAlphaTamboCutoutLoleY = Math.max (totalLoleYCutoutWC + totalWizellWCCutoutAT + totalLoleBothCutoutPotionCostWC,0)

const [WCAlphaTamboCutoutLoleN, setWCAlphaTamboCutoutLoleN] = useState(0);
const totalWCAlphaTamboCutoutLoleN = Math.max (totalLoleNCutoutWC + totalWizellWCCutoutAT + totalLoleBothCutoutPotionCostWC,0)

const [WCAlphaTamboMaskLoleY, setWCAlphaTamboMaskLoleY] = useState(0);
const totalWCAlphaTamboMaskLoleY = Math.max (totalLoleYMaskWC + totalWizellWCMaskAT + totalLoleBothMaskPotionCostWC,0)

const [WCAlphaTamboMaskLoleN, setWCAlphaTamboMaskLoleN] = useState(0);
const totalWCAlphaTamboMaskLoleN = Math.max (totalLoleNMaskWC + totalWizellWCMaskAT + totalLoleBothMaskPotionCostWC,0)

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
const totalWCRakstalCutoutLoleY = Math.max (totalLoleYCutoutWC + totalHeliodaeWCCutoutRakstal + totalLoleBothCutoutPotionCostWC,0)

const [WCRakstalCutoutLoleN, setWCRakstalCutoutLoleN] = useState(0);
const totalWCRakstalCutoutLoleN = Math.max (totalLoleNCutoutWC + totalHeliodaeWCCutoutRakstal + totalLoleBothCutoutPotionCostWC,0)

const [WCRakstalMaskLoleY, setWCRakstalMaskLoleY] = useState(0);
const totalWCRakstalMaskLoleY = Math.max (totalLoleYMaskWC + totalHeliodaeWCMaskRakstal + totalLoleBothMaskPotionCostWC,0)

const [WCRakstalMaskLoleN, setWCRakstalMaskLoleN] = useState(0);
const totalWCRakstalMaskLoleN = Math.max (totalLoleNMaskWC + totalHeliodaeWCMaskRakstal + totalLoleBothMaskPotionCostWC,0)

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

const [BabuBattleCostCutoutFifteen, setBabuBattleCostCutoutFifteen] = useState(0);
const totalBabuBattleCostCutoutFifteen = Math.max (totalMasteryMonsterCutout*15,0)

const [BabuBattleCostMaskFifteen, setBabuBattleCostMaskFifteen] = useState(0);
const totalBabuBattleCostMaskFifteen = Math.max (totalMasteryMonsterMask*15,0)




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

// END OF EQUATIONS SO FAR//

  return (
    <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh">
          <VStack spacing={8}>

          <Heading>Mastery Math: Potions</Heading>
            <Container><p>This page is for calculating a new mastery strategy on 4theWords: defeat small Aurilis creatures, make potions from their loot drops, 
              and use those potions to defeat large word count monsters. <br></br><br></br>
              You can use this page to estimate how many potions you can make from your current inventory or plan future mastery goals. <br></br><br></br>
              <b>Note:</b> this strategy requires the companion Lole to convert potion ingredients.
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
            The 10% grenade potion is the primary secret to this strategy. While the 1000-word potion is viable in some circumstances, 
            the beauty of the 10% potion is simple: 10 grenade potions will defeat any 4theWords creature of any size. <br></br><br></br> Each potion costs 4 Aurilis resources with the companion Lole or 
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
</VStack>

{NullIsShown &&
<Container>
  <FormControl p={4}>
      <FormLabel>
        <Code>chakra-react-select</Code> custom option demo
      </FormLabel>
      <Select
      id="monsters"
       closeMenuOnSelect 
        isClearable
        name="monster"
        options={monsterOptions}
        placeholder="Select a monster"
        components={customComponents}
      />
    </FormControl>
</Container>}

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
        <Button variant='outline' onClick={handleGrenadeClick} style={{ backgroundColor: GrenadeActive ? "#2d1b59" : "transparent" }}>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/c/cc/Blast_Potion.png'
        mr='12px'
      />
      <span>2000 words or fewer</span></Button>
      </WrapItem>
      <WrapItem>
        <Button variant='outline' onClick= {handleBlastClick} style={{ backgroundColor: BlastActive ? "#2d1b59" : "transparent" }}>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/0b/Fire_Grenade_Potion.png/'
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

            <Box w='250px' h='100px' pb={5} backgroundColor='#2D3748'>
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

       <Box w='250px' h='100px' pb={5} backgroundColor='#1A202C'>
       <HStack> 
       <Image
        ml='24px'
        mt='20px'
        align='center' 
        boxSize='4rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f1/Wizell.png/'
        mr='5px'        />
      <VStack align='center'> 
        <Text fontSize='sm' align='center'>Wizell</Text>
        <NumberInput defaultValue={0} min={0} max={10000} size='md' w='100px'>
  <NumberInputField id='Mibloom' onInput={(e) => handleWizellChange(e.target.value)} />
</NumberInput>
      </VStack>
      </HStack>
            </Box>      

          </Box>
          </Container>
      <br></br>
    </AccordionPanel>
  </AccordionItem>


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

    {TesvenIsShown && BlastIsShown &&
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

    {AzadiIsShown && BlastIsShown &&
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

    {DustSuwoIsShown && BlastIsShown &&
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


    {SuwoIsShown && BlastIsShown &&
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


    {DarkReflectionIsShown && BlastIsShown &&
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


    {ReflectionIsShown && BlastIsShown &&
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


    {CaravanIsShown && BlastIsShown &&
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


    {KultalvaIsShown && BlastIsShown &&
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


    {RiverGoddessIsShown && BlastIsShown &&
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

          {VelsounIsShown && BlastIsShown &&
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

  {AlphaTamboIsShown && BlastIsShown &&
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

       {BabuIsShown && BlastIsShown &&
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


  {RakstalIsShown && BlastIsShown &&
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

      {MiclanIsShown && BlastIsShown &&
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
  </AccordionItem>


  </Accordion>}
 

{DustedLuziaIsShown && BlastIsShown &&
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

{DustedLuziaIsShown && BlastIsShown &&
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
{BlastIsShown &&
<Container>
<br></br>
<Heading>Quick View</Heading><br></br>


<Container align='center'>

{BlastIsShown && !VelsounIsShown && !AlphaTamboIsShown && !TareitIsShown &&
!BabuIsShown && !RakstalIsShown && !ShamanLuziaIsShown && !MiclanIsShown &&
!KingMaiIsShown && !DustedLuziaIsShown && !DustyKingMaiIsShown &&
<Box rounded='lg'  w='290px' h='605px' pb={5} style={{ backgroundColor: 
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
        <Text fontSize='md'><b>Coin Cost:<br></br></b>
        {TotalLoleBothCutoutPotionCostComma} coins
          <br></br></Text>}

{LoleNIsShown && CutoutIsShown &&
        <Text fontSize='md'><b>Coin Cost:<br></br></b>
        {TotalLoleBothCutoutPotionCostComma} coins
          <br></br></Text>}

{LoleYIsShown && CutoutIsShown &&
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalLoleBothCutoutPotionCostWCComma}</Text>}

{LoleNIsShown && CutoutIsShown &&
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalLoleBothCutoutPotionCostWCComma}</Text>}



{LoleYIsShown && MaskIsShown &&
        <Text fontSize='md'><b>Coin Cost:<br></br></b>
        {TotalLoleBothMaskPotionCostComma} coins
          <br></br></Text>}

{LoleNIsShown && MaskIsShown &&
        <Text fontSize='md'><b>Coin Cost:<br></br></b>
        {TotalLoleBothMaskPotionCostComma} coins
          <br></br></Text>}

{LoleYIsShown && MaskIsShown &&
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalLoleBothMaskPotionCostWCComma}</Text>}

{LoleNIsShown && MaskIsShown &&
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalLoleBothMaskPotionCostWCComma}</Text>}




          </VStack>
            </Box>}

{VelsounIsShown && BlastIsShown && LoleYIsShown && CutoutIsShown && 
<Box rounded='lg'  w='290px' h='730px' pb={5} style={{ backgroundColor: VelsounActive ? "#1e0628" : "#2D3748" }}>
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
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleYCutoutResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleYCutoutWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br> {totalMasteryMonsterCutout} Leaf Breastplate</Text>
        <Text fontSize='md'><b>Battle Cost Word Count:</b><br></br>
        {VelsounCutoutBattleCostComma}
        </Text>

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coin Cost:<br></br></b>{TotalLoleBothCutoutPotionCostComma} coins
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalLoleBothCutoutPotionCostWCComma}</Text>
          </VStack>
            </Box>}

{VelsounIsShown && BlastIsShown && LoleNIsShown && CutoutIsShown && 
<Box rounded='lg'  w='290px' h='730px' pb={5} style={{ backgroundColor: VelsounActive ? "#1e0628" : "#2D3748" }}>
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
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleYCutoutResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleYCutoutWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br> {totalMasteryMonsterCutout} Leaf Breastplate</Text>
        <Text fontSize='md'><b>Battle Cost Word Count:</b><br></br>
        {VelsounCutoutBattleCostComma}
        </Text>

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coin Cost:<br></br></b>{TotalLoleBothCutoutPotionCostComma} coins
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalLoleBothCutoutPotionCostWCComma}</Text>
          </VStack>
            </Box>}

{VelsounIsShown && BlastIsShown && LoleYIsShown && MaskIsShown && 
<Box rounded='lg'  w='290px' h='730px' pb={5} style={{ backgroundColor: VelsounActive ? "#1e0628" : "#2D3748" }}>
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
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleYMaskResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleYMaskWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br>{totalMasteryMonsterMask} Leaf Breastplate</Text>
        <Text fontSize='md'><b>Battle Cost Word Count:</b><br></br>
        {VelsounCutoutBattleCostComma}
        </Text>

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coin Cost:<br></br></b>{TotalLoleBothMaskPotionCostComma} coins
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalLoleBothMaskPotionCostWCComma}</Text>
          </VStack>
            </Box>}

{VelsounIsShown && BlastIsShown && LoleNIsShown && MaskIsShown && 
<Box rounded='lg'  w='290px' h='730px' pb={5} style={{ backgroundColor: VelsounActive ? "#1e0628" : "#2D3748" }}>
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
        <Text fontSize='lg' textAlign='center'><b>Alpha Tambo</b><br></br>
        # to Fight: {totalMasteryMonsterMask}</Text>
        <Text fontSize='lg' textAlign='center'>
            Total Word Count:<br></br>{TotalLoleNMaskVelsounWCComma}
          </Text>
        <Divider w='250px' />
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleNMaskResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleNMaskWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br> {totalMasteryMonsterMask} Leaf Breastplate</Text>
        <Text fontSize='md'><b>Battle Cost Word Count:</b><br></br>
        {VelsounCutoutBattleCostComma}
        </Text>

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coin Cost:<br></br></b>{TotalLoleBothMaskPotionCostComma} coins
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalLoleBothMaskPotionCostWCComma}</Text>
          </VStack>
            </Box>}


{AlphaTamboIsShown && BlastIsShown && LoleYIsShown && CutoutIsShown && 
<Box rounded='lg'  w='290px' h='725px' pb={5} style={{ backgroundColor: AlphaTamboActive ? "#512F30" : "#2D3748" }}>
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
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleYCutoutResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleYCutoutWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br> {totalRoberriesCutoutAT} Roberries</Text>
        <Text fontSize='md'><b>Battle Cost Word Count:</b><br></br>
        {WizellWCCutoutATComma}
        </Text>

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coin Cost:<br></br></b>{TotalLoleBothCutoutPotionCostComma} coins
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalLoleBothCutoutPotionCostWCComma}</Text>
          </VStack>
            </Box>}

{AlphaTamboIsShown && BlastIsShown && LoleNIsShown && CutoutIsShown && 
<Box rounded='lg'  w='290px' h='725px' pb={5} style={{ backgroundColor: AlphaTamboActive ? "#512F30" : "#2D3748" }}>
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
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleYCutoutResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleYCutoutWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br> {totalRoberriesCutoutAT} Roberries</Text>
        <Text fontSize='md'><b>Battle Cost Word Count:</b><br></br>
        {WizellWCCutoutATComma}
        </Text>

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coin Cost:<br></br></b>{TotalLoleBothCutoutPotionCostComma} coins
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalLoleBothCutoutPotionCostWCComma}</Text>
          </VStack>
            </Box>}

{AlphaTamboIsShown && BlastIsShown && LoleYIsShown && MaskIsShown && 
<Box rounded='lg'  w='290px' h='725px' pb={5} style={{ backgroundColor: AlphaTamboActive ? "#512F30" : "#2D3748" }}>
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

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coin Cost:<br></br></b>{TotalLoleBothMaskPotionCostComma} coins
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalLoleBothMaskPotionCostWCComma}</Text>
          </VStack>
            </Box>}

{AlphaTamboIsShown && BlastIsShown && LoleNIsShown && MaskIsShown && 
<Box rounded='lg'  w='290px' h='725px' pb={5} style={{ backgroundColor: AlphaTamboActive ? "#512F30" : "#2D3748" }}>
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

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coin Cost:<br></br></b>{TotalLoleBothMaskPotionCostComma} coins
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalLoleBothMaskPotionCostWCComma}</Text>
          </VStack>
            </Box>}


{RakstalIsShown && BlastIsShown && LoleYIsShown && CutoutIsShown && 
<Box rounded='lg'  w='290px' h='725px' pb={5} style={{ backgroundColor: RakstalActive ? "#27445e" : "#2D3748" }}>
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
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleYCutoutResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleYCutoutWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br> {totalSwampMossCutoutRakstal} Swamp Moss</Text>
        <Text fontSize='md'><b>Battle Cost Word Count:</b><br></br>
        {HeliodaeWCCutoutRakstalComma}
        </Text>

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coin Cost:<br></br></b>{TotalLoleBothCutoutPotionCostComma} coins
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalLoleBothCutoutPotionCostWCComma}</Text>
          </VStack>
            </Box>}

{RakstalIsShown && BlastIsShown && LoleNIsShown && CutoutIsShown && 
<Box rounded='lg'  w='290px' h='725px' pb={5} style={{ backgroundColor: RakstalActive ? "#27445e" : "#2D3748" }}>
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
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleYCutoutResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleYCutoutWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br>{totalSwampMossCutoutRakstal} Swamp Moss</Text>
        <Text fontSize='md'><b>Battle Cost Word Count:</b><br></br>
        {HeliodaeWCCutoutRakstalComma}
        </Text>

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coin Cost:<br></br></b>{TotalLoleBothCutoutPotionCostComma} coins
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalLoleBothCutoutPotionCostWCComma}</Text>
          </VStack>
            </Box>}

{RakstalIsShown && BlastIsShown && LoleYIsShown && MaskIsShown && 
<Box rounded='lg'  w='290px' h='725px' pb={5} style={{ backgroundColor: RakstalActive ? "#27445e" : "#2D3748" }}>
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
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleYMaskResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleYMaskWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br>{totalSwampMossMaskRakstal} Swamp Moss</Text>
        <Text fontSize='md'><b>Battle Cost Word Count:</b><br></br>
        {HeliodaeWCMaskRakstalComma}
        </Text>

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coin Cost:<br></br></b>{TotalLoleBothMaskPotionCostComma} coins
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalLoleBothMaskPotionCostWCComma}</Text>
          </VStack>
            </Box>}

{RakstalIsShown && BlastIsShown && LoleNIsShown && MaskIsShown && 
<Box rounded='lg'  w='290px' h='725px' pb={5} style={{ backgroundColor: RakstalActive ? "#27445e" : "#2D3748" }}>
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
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleNMaskResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleNMaskWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br>{totalSwampMossMaskRakstal} Swamp Moss</Text>
        <Text fontSize='md'><b>Battle Cost Word Count:</b><br></br>
        {HeliodaeWCMaskRakstalComma}
        </Text>

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coin Cost:<br></br></b>{TotalLoleBothMaskPotionCostComma} coins
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalLoleBothMaskPotionCostWCComma}</Text>
          </VStack>
            </Box>}


{DustedLuziaIsShown && BlastIsShown && LoleYIsShown && CutoutIsShown && CoinsIsShown &&
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
        <Text fontSize='md'><b>Coin Cost:<br></br></b>{CoinsCutoutDLComma} coins
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {KuikasCoinsWCCutoutDLComma}</Text>
          </VStack>
            </Box>}

{DustedLuziaIsShown && BlastIsShown && LoleNIsShown && CutoutIsShown && CoinsIsShown &&
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
        <Text fontSize='md'><b>Coin Cost:<br></br></b>{CoinsCutoutDLComma} coins
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {KuikasCoinsWCCutoutDLComma}</Text>
          </VStack>
            </Box>}

      {DustedLuziaIsShown && BlastIsShown && LoleYIsShown && CutoutIsShown && ComboIsShown &&
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
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleYCutoutResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleYCutoutWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br> {totalMasteryMonsterCutout} Steel Axe<br></br> {totalMasteryMonsterCutout} Steel Shield</Text>
        <Text fontSize='md'><b>Battle Word Count:</b><br></br> {LoleBothCutoutDLComboBattleCostComma}</Text>

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coin Cost:<br></br></b>{CoinComboCutoutDL} coins
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalWCLoleBothCutoutDLComboCoinsComma}</Text>
          </VStack>
            </Box>}

            {DustedLuziaIsShown && BlastIsShown && LoleNIsShown && CutoutIsShown && ComboIsShown &&
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
        <Text fontSize='md'><b>Coin Cost:<br></br></b>{CoinComboCutoutDL} coins
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalWCLoleBothCutoutDLComboCoinsComma}</Text>
          </VStack>
            </Box>}

            {DustedLuziaIsShown && BlastIsShown && LoleYIsShown && CutoutIsShown && BattleIsShown &&
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
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleYCutoutResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleYCutoutWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br> {totalMasteryMonsterCutout} Steel Axe<br></br> {totalMasteryMonsterCutout} Steel Shield</Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br> {TotalWCLoleBothCutoutDLBattleComma}</Text>

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coin Cost:<br></br></b>{LoleBothCoinBattleCutoutDL} coins
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalWCLoleBothBattleCoinsCutoutDLComma}</Text>
          </VStack>
            </Box>}

            {DustedLuziaIsShown && BlastIsShown && LoleNIsShown && CutoutIsShown && BattleIsShown &&
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
        <Text fontSize='md'><b>Coin Cost:<br></br></b>{LoleBothCoinBattleCutoutDL} coins
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalWCLoleBothBattleCoinsCutoutDLComma}</Text>
          </VStack>
            </Box>}
            
  {DustedLuziaIsShown && BlastIsShown && LoleYIsShown && MaskIsShown && CoinsIsShown &&
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
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleYMaskResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleYMaskWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br> {totalMasteryMonsterMask} Steel Axe<br></br> {totalMasteryMonsterMask} Steel Shield</Text>


        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coin Cost:<br></br></b>{CoinsMaskDLComma} coins
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {KuikasCoinsWCMaskDLComma}</Text>
          </VStack>
            </Box>}

{DustedLuziaIsShown && BlastIsShown && LoleNIsShown && MaskIsShown && CoinsIsShown &&
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
        <Text fontSize='md'><b>Coin Cost:<br></br></b>{CoinsMaskDLComma} coins
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {KuikasCoinsWCMaskDLComma}</Text>
          </VStack>
            </Box>}

      {DustedLuziaIsShown && BlastIsShown && LoleYIsShown && MaskIsShown && ComboIsShown &&
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
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleYMaskResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleYMaskWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br> {totalMasteryMonsterMask} Steel Axe<br></br> {totalMasteryMonsterMask} Steel Shield</Text>
        <Text fontSize='md'><b>Battle Word Count:</b><br></br> {LoleBothMaskDLComboBattleCostComma}</Text>

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coin Cost:<br></br></b>{CoinComboMaskDL} coins
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalWCLoleBothMaskDLComboCoinsComma}</Text>
          </VStack>
            </Box>}

            {DustedLuziaIsShown && BlastIsShown && LoleNIsShown && MaskIsShown && ComboIsShown &&
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
        <Text fontSize='md'><b>Coin Cost:<br></br></b>{CoinComboMaskDL} coins
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalWCLoleBothMaskDLComboCoinsComma}</Text>
          </VStack>
            </Box>}

            {DustedLuziaIsShown && BlastIsShown && LoleYIsShown && MaskIsShown && BattleIsShown &&
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
        <Text fontSize='md'><b>Potion Resources Needed:</b><br></br> 
        {LoleYMaskResourcesComma}</Text>
        <Text fontSize='md'><b>Mastery Word Count:</b><br></br>
        {LoleYMaskWCComma}
        </Text>
        <Divider mt='3px' w='250px' />
        
        <Text fontSize='md'><b>Battle Cost:</b><br></br> {totalMasteryMonsterMask} Steel Axe<br></br> {totalMasteryMonsterMask} Steel Shield</Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br> {TotalWCLoleBothMaskDLBattleComma}</Text>

        <Divider mt='3px' w='250px' />
        <Text fontSize='md'><b>Coin Cost:<br></br></b>{LoleBothCoinBattleMaskDL} coins
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalWCLoleBothBattleCoinsMaskDLComma}</Text>
          </VStack>
            </Box>}

            {DustedLuziaIsShown && BlastIsShown && LoleNIsShown && MaskIsShown && BattleIsShown &&
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
        <Text fontSize='md'><b>Coin Cost:<br></br></b>{LoleBothCoinBattleMaskDL} coins
          <br></br></Text>
        <Text fontSize='md'><b>Monster Word Count:</b><br></br>
          {TotalWCLoleBothBattleCoinsMaskDLComma}</Text>
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
          <Text fontSize='md'><b>Coin Cost:<br></br></b>{CoinsCutoutDLComma} coins</Text>}
            {CutoutIsShown && CoinsIsShown &&
          <Text fontSize='md'><b>Monster Word Count:</b><br></br>
            {KuikasCoinsWCCutoutDLComma}</Text>}

            {CutoutIsShown && ComboIsShown &&
          <Text fontSize='md'><b>Coin Cost:<br></br></b>{CoinComboCutoutDL} coins</Text>}
            {CutoutIsShown && ComboIsShown &&
          <Text fontSize='md'><b>Coin Cost Word Count:</b><br></br>
            {0}</Text>}

            {CutoutIsShown && BattleIsShown &&
          <Text fontSize='md'><b>Coin Cost:<br></br></b>{LoleBothCoinBattleCutoutDL} coins</Text>}
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
      {CutoutIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalFinalOdees}</text>}
      {MaskIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalFinalOdeesMask}</text>}

      {CutoutIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalFinalOdeesLoleN}            </text>}
      {MaskIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalFinalOdeesLoleNMask}      </text>}
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
      {CutoutIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalActualMusya}</text>}
      {MaskIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalActualMusyaMask}      </text>}

      {CutoutIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalActualMusyaLoleN}</text>}
      {MaskIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalActualMusyaMaskLoleN}</text>}
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
      {CutoutIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalActualQuaruk}</text>}
      {MaskIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalActualQuarukMask}</text>}

      {CutoutIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalActualQuarukLoleN}      </text>}
      {MaskIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalActualQuarukMaskLoleN}      </text>}
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
      {CutoutIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalActualKnuff}</text>}
      {MaskIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalActualKnuffMask}</text>}

      {CutoutIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalActualKnuffLoleN}</text>}
      {MaskIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalActualKnuffMaskLoleN}</text>}
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
      {CutoutIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalActualMibloomAdjusted}</text>}
      {MaskIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalMibloomMaskActual}</text>}

      {CutoutIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalActualMibloomLoleNAdjusted}</text>}
      {MaskIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalMibloomMaskLoleNActual}
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
        src='https://static.wikia.nocookie.net/4thewords/images/6/65/Kinguz.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Kinguz</Text>
      {CutoutIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalActualKinguz}      </text>}
      {MaskIsShown && LoleYIsShown && BlastIsShown && <text align='center'>{totalActualKinguzMask}</text>}

      {CutoutIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalActualKinguzLoleN}      </text>}
      {MaskIsShown && LoleNIsShown && BlastIsShown && <text align='center'>{totalActualKinguzMaskLoleN}</text>}
      </VStack>
  </Box>
        </Td>
      </Tr>    

    </Tbody>
  </Table>
</TableContainer>
</Container> 

{BlastIsShown && !VelsounIsShown && !AlphaTamboIsShown && !TareitIsShown &&
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
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalLoleBothCutoutKuikas}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalLoleBothMaskKuikas}</text>}
      </VStack>
  </Box>
        </Td>
      </Tr>    
    </Tbody>
  </Table>
</TableContainer>
</Container> }

{VelsounIsShown &&
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
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalVelsounKuikasLoleBothCutout}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalVelsounKuikasLoleBothMask}</text>}
      </VStack>
  </Box>
        </Td>
      </Tr>    
    </Tbody>
  </Table>
</TableContainer>
</Container> }

{VelsounIsShown && 
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
        src='https://static.wikia.nocookie.net/4thewords/images/a/a6/Spiderlegs_md.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Spider Legs</Text>
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalVelsounLoleBothCutoutSpiderLegs}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalVelsounLoleBothMaskSpiderLegs}</text>}
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
        src='https://static.wikia.nocookie.net/4thewords/images/f/f9/Feathers_md.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Feathers</Text>
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalVelsounLoleBothCutoutFeathers}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalVelsounLoleBothMaskFeathers}</text>}
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
        src='https://static.wikia.nocookie.net/4thewords/images/f/fc/Leaves_md.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Leaves</Text>
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalVelsounLoleBothCutoutLeaves}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalVelsounLoleBothMaskLeaves}</text>}
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
        src='https://static.wikia.nocookie.net/4thewords/images/2/24/Tyluclaws_md.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Claws</Text>
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalVelsounLoleBothCutoutClaws}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalVelsounLoleBothMaskClaws}</text>}
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
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Coins</Text>
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalVelsounLoleBothCutoutCoinsLBP}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalVelsounLoleBothMaskCoinsLBP}</text>}
      </VStack>
  </Box>
        </Td>
      </Tr>    

    </Tbody>
  </Table>
</TableContainer>
</Container> } 

{AlphaTamboIsShown && 
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
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalLoleBothCutoutKuikas}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalLoleBothMaskKuikas}</text>}
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
        src='https://static.wikia.nocookie.net/4thewords/images/f/f1/Wizell.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Wizell</Text>
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalRoberriesCutoutAT}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalRoberriesMaskAT}</text>}
      </VStack>
  </Box>
        </Td>
      </Tr>    

    </Tbody>
  </Table>
</TableContainer>
</Container> } 


{BabuIsShown && 
<Container>
        <Text mt='12px'><b>Battle Cost: Materials Needed</b></Text>
        <TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
    <Tbody>
      <Tr>
        <Td>
        <Box w='50px' h='120px' pb={5}>
       <VStack> 
       <Image
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/05/Steel_chains.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Steel<br></br>Chains</Text>
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalBabuSteelChainsCutout}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalBabuSteelChainsMask}</text>}
      </VStack>
  </Box>
        </Td>
        <Td>
        <Box w='50px' h='120px' pb={5}>
       <VStack> 
       <Image
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/40/Piece-of-parchment.png/'
        mr='5px'
      /> <Text fontSize='md' align='center'>Piece of<br></br>Parchment</Text>
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalBabuPieceofParchCutout}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalBabuPieceofParchMask}</text>}
      </VStack>
  </Box>
        </Td>
        <Td>
        <Box w='50px' h='120px' pb={5}>
       <VStack> 
       <Image
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/d3/Blue-essence-ink.png/'
        mr='5px'
      /> <Text fontSize='md' align='center'>Blue Essence<br></br>Ink</Text>
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalBabuBlueEssInkCutout}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalBabuBlueEssInkMask}</text>}
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
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Coins</Text>
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalVelsounLoleBothCutoutCoinsLBP}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalVelsounLoleBothMaskCoinsLBP}</text>}
      </VStack>
  </Box>
        </Td>
      </Tr>    

    </Tbody>
  </Table>
</TableContainer>

<Text mt='12px'><b>Full Crafting Breakdown</b></Text>
        <TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
    <Tbody>
      <Tr>
        <Td>
        <Box w='50px' h='120px' pb={5}>
       <VStack> 
       <Image
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Steel</Text>
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalBabuSteelChainsCutout}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalBabuSteelChainsMask}</text>}
      </VStack>
  </Box>
        </Td>
        <Td>
        <Box w='50px' h='120px' pb={5}>
       <VStack> 
       <Image
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a6/Dried-pulp.png'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Dried Pulp</Text>
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalBabuBattleCostCutoutSix}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalBabuBattleCostMaskSix}</text>}
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
        src='https://static.wikia.nocookie.net/4thewords/images/b/b3/Dust_md.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Dust</Text>
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalBabuBattleCostCutoutSix}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalBabuBattleCostMaskSix}</text>}
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
        src='https://static.wikia.nocookie.net/4thewords/images/b/b2/Kuaywood_md.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Wood</Text>
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalBabuBattleCostCutoutFifteen}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalBabuBattleCostMaskFifteen}</text>}
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
        src='https://static.wikia.nocookie.net/4thewords/images/d/d5/Glass_md.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Glass Bar</Text>
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalBabuBlueEssInkCutout}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalBabuBlueEssInkMask}</text>}
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
        src='https://static.wikia.nocookie.net/4thewords/images/1/19/Wignowessence_md.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Essence</Text>
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalBabuBlueEssInkCutout}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalBabuBlueEssInkMask}</text>}
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
        src='https://static.wikia.nocookie.net/4thewords/images/e/e2/Refined-dust.png/'
        mr='5px'
      /> <Text fontSize='md' align='center'>Refined Dust</Text>
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalBabuSteelChainsCutout}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalBabuSteelChainsMask}</text>}
      </VStack>
  </Box>
        </Td>

      </Tr>    


    </Tbody>
  </Table>
</TableContainer>


</Container> } 


{RakstalIsShown && 
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
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalLoleBothCutoutKuikas}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalLoleBothMaskKuikas}</text>}
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
        src='https://static.wikia.nocookie.net/4thewords/images/7/76/Heliodae.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Heliodae</Text>
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalSwampMossCutoutRakstal}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalSwampMossMaskRakstal}</text>}
      </VStack>
  </Box>
        </Td>
      </Tr>    

    </Tbody>
  </Table>
</TableContainer>
</Container> } 



{MiclanIsShown && 
<Container>
        <Text mt='12px'><b>Battle Cost</b></Text>
        <TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
    <Tbody>
      <Tr>
        <Td>
        <Box w='50px' h='120px' pb={5}>
       <VStack> 
       <Image
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/05/Steel_chains.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Steel<br></br>Chains</Text>
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalMiclanSteelChainsCutout}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalMiclanSteelChainsMask}</text>}
      </VStack>
  </Box>
        </Td>
        <Td>
        <Box w='50px' h='120px' pb={5}>
       <VStack> 
       <Image
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/40/Piece-of-parchment.png/'
        mr='5px'
      /> <Text fontSize='md' align='center'>Piece of<br></br>Parchment</Text>
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalMiclanPieceofParchCutout}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalMiclanPieceofParchMask}</text>}
      </VStack>
  </Box>
        </Td>
        <Td>
        <Box w='50px' h='120px' pb={5}>
       <VStack> 
       <Image
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/d3/Blue-essence-ink.png/'
        mr='5px'
      /> <Text fontSize='md' align='center'>Blue Essence<br></br>Ink</Text>
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalMiclanBlueEssInkCutout}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalMiclanBlueEssInkMask}</text>}
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
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Coins</Text>
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalVelsounLoleBothCutoutCoinsLBP}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalVelsounLoleBothMaskCoinsLBP}</text>}
      </VStack>
  </Box>
        </Td>
      </Tr>    

    </Tbody>
  </Table>
</TableContainer>
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
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalKuikasCoinsCutoutDL}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalKuikasCoinsMaskDL}</text>}
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
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalKuikasFarmComboCutoutDL}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalKuikasFarmComboMaskDL}</text>}
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
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalJesoNeededCutoutDL}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalJesoNeededMaskDL}</text>}
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
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalKuikasFarmBattleCutoutDL}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalKuikasFarmBattleMaskDL}</text>}
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
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalHWCutoutDL}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalHWMaskDL}</text>}
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
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalRGBattleCutoutDL}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalRGBattleMaskDL}</text>}
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
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalScofinSteelCutoutDL}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalScofinSteelMaskDL}</text>}
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
      {CutoutIsShown && BlastIsShown && <text align='center'>{totalLeavesNeededCutoutDL}</text>}
      {MaskIsShown && BlastIsShown && <text align='center'>{totalLeavesNeededMaskDL}</text>}
      </VStack>
  </Box>
        </Td>
      </Tr>    

    </Tbody>
  </Table>
</TableContainer>
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