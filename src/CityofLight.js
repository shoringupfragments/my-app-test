import React from 'react';
import { useState,useEffect, useColorMode, useColorModeValue, } from "react";
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
  VStack,
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
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronRightIcon, MinusIcon, AddIcon, } from '@chakra-ui/icons';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  const [noanzaActive, setNoanzaActive] = useState(false);
  const [aakultaActive, setAakultaActive] = useState(false);
  const [fgCraftingActive, setFgCraftingActive] = useState(false);
  const [glivaActive, setGlivaActive] = useState(false);
  const [kirerfActive, setKirerfActive] = useState(false);


  const [NoanzaIsShown, setNoanzaIsShown] = useState(false);
  const [NoanzaQtyIsShown, setNoanzaQtyIsShown] = useState(false);
  const [AakultaIsShown, setAakultaIsShown] = useState(false);
  const [AakultaQtyIsShown, setAakultaQtyIsShown] = useState(false);
  const [FgCraftingIsShown, setFgCraftingIsShown] = useState(false);
  const [FgCraftingQtyIsShown, setFgCraftingQtyIsShown] = useState(false);
  const [SummaryFgCraftingIsShown, setSummaryFgCraftingIsShown] = useState(false);
  const [SummaryAakultaIsShown, setSummaryAakultaIsShown] = useState(false);
  const [SummaryNoanzaIsShown, setSummaryNoanzaIsShown] = useState(false);
  const [MushNoanzaIsShown, setMushNoanzaIsShown] = useState(false);
  const [MushAakultaIsShown, setMushAakultaIsShown] = useState(false);
  const [MushFgCraftingIsShown, setMushFgCraftingIsShown] = useState(false);
  const [NoanzaKirerfButton, setNoanzaKirerfButton] = useState(false);

  const handleNoanzaClick = event => {
    // 👇️ toggle shown state
    setNoanzaIsShown(current => !NoanzaIsShown);
    setNoanzaQtyIsShown(current => !NoanzaQtyIsShown)
    setSummaryNoanzaIsShown(current => !SummaryNoanzaIsShown);
    setMushNoanzaIsShown(current =>!MushNoanzaIsShown)
    setAakultaIsShown(current => null);
    setAakultaQtyIsShown(current => 0);
    setFgCraftingIsShown(current => null);
    setFgCraftingQtyIsShown(current => null);
    setSummaryAakultaIsShown(current => null);
    setSummaryFgCraftingIsShown(current => null);
    setMushAakultaIsShown(current =>null)
    setMushFgCraftingIsShown(current => null);
    setNoanzaActive(!noanzaActive);
    setAakultaActive(current => null);
    setFgCraftingActive(current => null);
    setAakultaKirerfActive(current => null);
    setAakultaGlivaActive(current => null);
    setNoanzaGlivaActive(current => null);
    setNoanzaKirerfActive(current => null);
    setCraftingGlivaActive(current => null);
    setCraftingKirerfActive(current => null);
  };

  const handleAakultaClick = event => {
    // 👇️ toggle shown state
    setAakultaIsShown(current => !AakultaIsShown);
    setAakultaQtyIsShown(current => !AakultaQtyIsShown);
    setSummaryAakultaIsShown(current => !SummaryAakultaIsShown);
    setMushAakultaIsShown(current =>!MushAakultaIsShown)
    setFgCraftingIsShown(current => null);
    setFgCraftingQtyIsShown(current => null);
    setSummaryFgCraftingIsShown(current => null);
    setSummaryFgCraftingIsShown(current => null);
    setMushFgCraftingIsShown(current => null);
    setNoanzaIsShown(current => null);
    setNoanzaQtyIsShown(current => 0);
    setSummaryNoanzaIsShown(current => null);
    setMushNoanzaIsShown(current =>null)
    setAakultaActive(!aakultaActive);
    setNoanzaActive(current => null);
    setFgCraftingActive(current => null);
    setAakultaKirerfActive(current => null);
    setAakultaGlivaActive(current => null);
    setNoanzaGlivaActive(current => null);
    setNoanzaKirerfActive(current => null);
    setCraftingGlivaActive(current => null);
    setCraftingKirerfActive(current => null);
    };

  const handleFgCraftingClick = event => {
    // 👇️ toggle shown state
    setFgCraftingIsShown(current => !FgCraftingIsShown);
    setFgCraftingQtyIsShown(current => !FgCraftingQtyIsShown);
    setSummaryFgCraftingIsShown(current => !SummaryFgCraftingIsShown);
    setMushFgCraftingIsShown(current => !MushFgCraftingIsShown);
    setAakultaIsShown(current => null);
    setAakultaQtyIsShown(current => 0);
    setSummaryAakultaIsShown(current => null);
    setMushAakultaIsShown(current =>null)
    setNoanzaIsShown(current => null);
    setNoanzaQtyIsShown(current => 0);
    setSummaryNoanzaIsShown(current => null);
    setMushNoanzaIsShown(current =>null);
    setFgCraftingActive(!fgCraftingActive)
    setNoanzaActive(current => null);
    setAakultaActive(current => null);
    setAakultaKirerfActive(current => null);
    setAakultaGlivaActive(current => null);
    setNoanzaGlivaActive(current => null);
    setNoanzaKirerfActive(current => null);
    setCraftingGlivaActive(current => null);
    setCraftingKirerfActive(current => null);
  };

  const [GlivaIsShown, setGlivaIsShown] = useState(false);
  const [GlivaQtyIsShown, setGlivaQtyIsShown] = useState(false);
  const [SummaryGlivaIsShown, setSummaryGlivaIsShown] = useState(false);
  const [KirerfIsShown, setKirerfIsShown] = useState(false);
  const [KirerfQtyIsShown, setKirerfQtyIsShown] = useState(false);
  const [SummaryKirerfIsShown, setSummaryKirerfIsShown] = useState(false);



//NOANZA + MUSHROOM//

const [noanzaGlivaActive, setNoanzaGlivaActive] = useState(false);
const [noanzaKirerfActive, setNoanzaKirerfActive] = useState(false); 

const [NoanzaGlivaIsShown, setNoanzaGlivaIsShown] = useState(false);
const [NoanzaGlivaQtyIsShown, setNoanzaGlivaQtyIsShown] = useState(false);
const [SummaryNoanzaGlivaIsShown, setSummaryNoanzaGlivaIsShown] = useState(false);
const [NoanzaKirerfIsShown, setNoanzaKirerfIsShown] = useState(false);
const [NoanzaKirerfQtyIsShown, setNoanzaKirerfQtyIsShown] = useState(false);
const [SummaryNoanzaKirerfIsShown, setSummaryNoanzaKirerfIsShown] = useState(false);


const handleNoanzaGlivaClick = event => {
// 👇️ toggle shown state
setNoanzaGlivaIsShown(current => !NoanzaGlivaIsShown);
setNoanzaGlivaQtyIsShown(current => !NoanzaGlivaQtyIsShown);
setNoanzaKirerfIsShown(current => null);
setNoanzaKirerfQtyIsShown(current => null);

setNoanzaGlivaActive(!noanzaGlivaActive);
setNoanzaKirerfActive(current => null);
setAakultaGlivaActive(current => null);
setAakultaKirerfActive(current => null);
setCraftingGlivaActive(current => null);
setCraftingKirerfActive(current => null);

setAakultaGlivaQtyIsShown(current => null);
setAakultaKirerfQtyIsShown(current => null);
setCraftingGlivaQtyIsShown(current => null);
setCraftingKirerfQtyIsShown(current => null);
};

const handleNoanzaKirerfClick = event => {
// 👇️ toggle shown state
setNoanzaKirerfIsShown(current => !NoanzaKirerfIsShown);
setNoanzaKirerfQtyIsShown(current => !NoanzaKirerfQtyIsShown);
setNoanzaGlivaIsShown(current => null);
setNoanzaGlivaQtyIsShown(current => null);

setNoanzaKirerfActive(!noanzaKirerfActive);
setNoanzaGlivaActive(current => null);
setAakultaGlivaActive(current => null);
setAakultaKirerfActive(current => null);
setCraftingGlivaActive(current => null);
setCraftingKirerfActive(current => null);

setAakultaGlivaQtyIsShown(current => null);
setAakultaKirerfQtyIsShown(current => null);
setCraftingGlivaQtyIsShown(current => null);
setCraftingKirerfQtyIsShown(current => null);
};

//AAKULTA + MUSHROOM//
const [aakultaGlivaActive, setAakultaGlivaActive] = useState(false);
const [aakultaKirerfActive, setAakultaKirerfActive] = useState(false);

const [AakultaGlivaIsShown, setAakultaGlivaIsShown] = useState(false);
const [AakultaGlivaQtyIsShown, setAakultaGlivaQtyIsShown] = useState(false);
const [SummaryAakultaGlivaIsShown, setSummaryAakultaGlivaIsShown] = useState(false);
const [AakultaKirerfIsShown, setAakultaKirerfIsShown] = useState(false);
const [AakultaKirerfQtyIsShown, setAakultaKirerfQtyIsShown] = useState(false);
const [SummaryAakultaKirerfIsShown, setSummaryAakultaKirerfIsShown] = useState(false);


const handleAakultaGlivaClick = event => {
// 👇️ toggle shown state
setAakultaGlivaIsShown(current => !AakultaGlivaIsShown);
setAakultaGlivaQtyIsShown(current => !AakultaGlivaQtyIsShown);
setAakultaKirerfIsShown(current => null);
setAakultaKirerfQtyIsShown(current => null);

setAakultaGlivaActive(!aakultaGlivaActive);
setAakultaKirerfActive(current => null);
setNoanzaGlivaActive(current => null);
setNoanzaKirerfActive(current => null);
setCraftingGlivaActive(current => null);
setCraftingKirerfActive(current => null);

setNoanzaGlivaQtyIsShown(current => null);
setNoanzaKirerfQtyIsShown(current => null);
setCraftingGlivaQtyIsShown(current => null);
setCraftingKirerfQtyIsShown(current => null);
};

const handleAakultaKirerfClick = event => {
// 👇️ toggle shown state
setAakultaKirerfIsShown(current => !AakultaKirerfIsShown);
setAakultaKirerfQtyIsShown(current => !AakultaKirerfQtyIsShown);
setAakultaGlivaIsShown(current => null);
setAakultaGlivaQtyIsShown(current => null);

setAakultaKirerfActive(!aakultaKirerfActive);
setAakultaGlivaActive(current => null);
setNoanzaGlivaActive(current => null);
setNoanzaKirerfActive(current => null);
setCraftingGlivaActive(current => null);
setCraftingKirerfActive(current => null);

setNoanzaGlivaQtyIsShown(current => null);
setNoanzaKirerfQtyIsShown(current => null);
setCraftingGlivaQtyIsShown(current => null);
setCraftingKirerfQtyIsShown(current => null);
};

//CRAFTING + MUSHROOM//

const [craftingGlivaActive, setCraftingGlivaActive] = useState(false);
const [craftingKirerfActive, setCraftingKirerfActive] = useState(false);

const [CraftingGlivaIsShown, setCraftingGlivaIsShown] = useState(false);
const [CraftingGlivaQtyIsShown, setCraftingGlivaQtyIsShown] = useState(false);
const [SummaryCraftingGlivaIsShown, setSummaryCraftingGlivaIsShown] = useState(false);
const [CraftingKirerfIsShown, setCraftingKirerfIsShown] = useState(false);
const [CraftingKirerfQtyIsShown, setCraftingKirerfQtyIsShown] = useState(false);
const [SummaryCraftingKirerfIsShown, setSummaryCraftingKirerfIsShown] = useState(false);


const handleCraftingGlivaClick = event => {
// 👇️ toggle shown state
setCraftingGlivaIsShown(current => !CraftingGlivaIsShown);
setCraftingGlivaQtyIsShown(current => !CraftingGlivaQtyIsShown);
setCraftingKirerfIsShown(current => null);
setCraftingKirerfQtyIsShown(current => null);

setCraftingGlivaActive(!craftingGlivaActive);
setCraftingKirerfActive(current => null);
setNoanzaGlivaActive(current => null);
setNoanzaKirerfActive(current => null);
setAakultaGlivaActive(current => null);
setAakultaKirerfActive(current => null);
setNoanzaKirerfActive(current => null);
setNoanzaGlivaActive(current => null);

setAakultaGlivaQtyIsShown(current => null);
setAakultaKirerfQtyIsShown(current => null);
setNoanzaGlivaQtyIsShown(current => null);
setNoanzaKirerfQtyIsShown(current => null);

};

const handleCraftingKirerfClick = event => {
// 👇️ toggle shown state
setCraftingKirerfIsShown(current => !CraftingKirerfIsShown);
setCraftingKirerfQtyIsShown(current => !CraftingKirerfQtyIsShown);
setCraftingGlivaIsShown(current => null);
setCraftingGlivaQtyIsShown(current => null);

setCraftingKirerfActive(!craftingKirerfActive);
setCraftingGlivaActive(current => null);
setNoanzaGlivaActive(current => null);
setNoanzaKirerfActive(current => null);
setAakultaGlivaActive(current => null);
setAakultaKirerfActive(current => null);
setNoanzaKirerfActive(current => null);
setNoanzaGlivaActive(current => null);


setAakultaGlivaQtyIsShown(current => null);
setAakultaKirerfQtyIsShown(current => null);
setNoanzaGlivaQtyIsShown(current => null);
setNoanzaKirerfQtyIsShown(current => null);
};




//DONT DELETE THIS I USE IT//

const [fakeZero, SetFakeZero] = useState(0);
const totalFakeZero = (0+0)

//CALCULATOR //
  
const [attackStat, setAttackStat] = useState(0); // Or any other non-zero value
const [wordCount, setWordCount] = useState(0);   // Or any other non-zero value
const [wcResult, setWCResult] = useState(0);

  useEffect(() => {
    // Calculate the result whenever attackStat or wordCount changes
    calculateWCResult(attackStat, wordCount);
  }, [attackStat, wordCount]);
  
  const handleAttackStatChange = (valueString) => {
    const value = parseFloat(valueString); 
      setAttackStat(value);
  };
  
  const handleWordCountChange = (valueString) => {
    const value = parseFloat(valueString);
      setWordCount(value);
    };
  

  const calculateWCResult = (atk, wc) => {
    const totalWords = Math.round (wc / ((atk/100) + 1));
    setWCResult(totalWords);

};

//DUST-REPELLENT ELIXIR -- NO WEAPONS ONLY INPUT//

const [dreN, setDreN] = useState(0); // Or any other non-zero value
const [dreH, setDreH] = useState(0);   // Or any other non-zero value
const [dreResult, setDreResult] = useState(0);
const [totalDre, setTotalDre] = useState(0);
const [ldDreResult, setLdDreResult] = useState(0);
const [rdDreResult, setRdDreResult] = useState(0);
const [dustDreResult, setDustDreResult] = useState(0);
const [essDreResult, setEssDreResult] = useState(0);
const [mushDreResult, setMushDreResult] = useState(0);
const [dflDreResult, setDflDreResult] = useState(0);
const [bonesDreResult, setBonesDreResult] = useState(0);


useEffect(() => {
  // Calculate the result whenever attackStat or wordCount changes
  calculateDreResult(dreN, dreH);
}, [dreN, dreH]);

const handleDreNChange = (valueString) => {
  const value = parseFloat(valueString); 
    setDreN(value);
};

const handleDreHChange = (valueString) => {
  const value = parseFloat(valueString);
    setDreH(value);
  };


const calculateDreResult = (dreN, dreH) => {
  const totalDre = Math.max (dreN - dreH,0);
  const totalLdDre = Math.max (totalDre*10);
  const totalRdDre = Math.max (totalDre*8);
  const totalDustDre = Math.max (totalDre*20);
  const totalEssDre = Math.max (totalDre*5);
  const totalMushDre = Math.max (totalDre*1);
  const totalDflDre = Math.max (totalDre*2);
  const totalBonesDre = Math.max (totalDre*3);
  setDreResult(totalDre);
  setLdDreResult(totalLdDre);
  setRdDreResult(totalRdDre);
  setDustDreResult(totalDustDre);
  setEssDreResult(totalEssDre);
  setMushDreResult(totalMushDre);
  setDflDreResult(totalDflDre);
  setBonesDreResult(totalBonesDre);
  };
  
//FUSION GLASS - NO WEAPONS OR OTHER ITEMS YET, JUST THE INPUTS IN THE TABLE//

const [fgN, setFgN] = useState(0); // Or any other non-zero value
const [fgH, setFgH] = useState(0);   // Or any other non-zero value
const [fgResult, setFgResult] = useState(0);

useEffect(() => {
  // Calculate the result whenever attackStat or wordCount changes
  calculateFgResult(fgN, fgH);
}, [fgN, fgH]);

const handleFgNChange = (valueString) => {
  const value = parseFloat(valueString);
	setFgN(value);
};

const handleFgHChange = (valueString) => {
  const value = parseFloat(valueString);
	setFgH(value);
  };


const calculateFgResult = (fgN, fgH) => {
  const totalFg = Math.max (fgN - fgH,0);
  setFgResult(totalFg);
  };

//LIGHTENED DUST: INPUT ONLY//

const [ldN, setLdN] = useState(0); // Or any other non-zero value
const [ldH, setLdH] = useState(0);   // Or any other non-zero value
const [ldResult, setLdResult] = useState(0);

useEffect(() => {
  calculateLdResult(ldN, ldH);
}, [ldN, ldH]);

const handleLdNChange = (valueString) => {
  const value = parseFloat(valueString); 
    setLdN(value);
};

const handleLdHChange = (valueString) => {
  const value = parseFloat(valueString);
    setLdH(value);
  };


const calculateLdResult = (ldN, ldH) => {
  const totalLd = Math.max (ldN - ldH,0);
  setLdResult(totalLd);
  };

  //REFINED DUST: INPUT ONLY//

const [rdN, setRdN] = useState(0); // Or any other non-zero value
const [rdH, setRdH] = useState(0);   // Or any other non-zero value
const [rdResult, setRdResult] = useState(0);

useEffect(() => {
  calculateRdResult(rdN, rdH);
}, [rdN, rdH]);

const handleRdNChange = (valueString) => {
  const value = parseFloat(valueString);
	setRdN(value);
};

const handleRdHChange = (valueString) => {
  const value = parseFloat(valueString);
	setRdH(value);
  };


const calculateRdResult = (rdN, rdH) => {
  const totalRd = Math.max (rdN - rdH,0);
  setRdResult(totalRd);
  };

  //DUST: INPUT ONLY//

const [dustN, setDustN] = useState(0); // Or any other non-zero value
const [dustH, setDustH] = useState(0);   // Or any other non-zero value
const [dustResult, setDustResult] = useState(0);

useEffect(() => {
  calculateDustResult(dustN, dustH);
}, [dustN, dustH]);

const handleDustNChange = (valueString) => {
  const value = parseFloat(valueString);
	setDustN(value);
};

const handleDustHChange = (valueString) => {
  const value = parseFloat(valueString);
	setDustH(value);
  };


const calculateDustResult = (dustN, dustH) => {
  const totalDust = Math.max (dustN - dustH,0);
  setDustResult(totalDust);
  };

  //ESSENCE: INPUT ONLY//

const [essN, setEssN] = useState(0); // Or any other non-zero value
const [essH, setEssH] = useState(0);   // Or any other non-zero value
const [essResult, setEssResult] = useState(0);

useEffect(() => {
  calculateEssResult(essN, essH);
}, [essN, essH]);

const handleEssNChange = (valueString) => {
  const value = parseFloat(valueString);
	setEssN(value);
};

const handleEssHChange = (valueString) => {
  const value = parseFloat(valueString);
	setEssH(value);
  };


const calculateEssResult = (essN, essH) => {
  const totalEss = Math.max (essN - essH,0);
  setEssResult(totalEss);
  };

  //Dark Forest Leaves: INPUT ONLY//

  const [dflN, setDflN] = useState(0); // Or any other non-zero value
  const [dflH, setDflH] = useState(0);   // Or any other non-zero value
  const [dflResult, setDflResult] = useState(0);
  
  useEffect(() => {
    calculateDflResult(dflN, dflH);
  }, [dflN, dflH]);
  
  const handleDflNChange = (valueString) => {
    const value = parseFloat(valueString);
    setDflN(value);
  };
  
  const handleDflHChange = (valueString) => {
    const value = parseFloat(valueString);
    setDflH(value);
    };
  
  
  const calculateDflResult = (dflN, dflH) => {
    const totalDfl = Math.max (dflN - dflH,0);
    setDflResult(totalDfl);
    };
  
//Bones: INPUT ONLY//

const [bonesN, setBonesN] = useState(0); // Or any other non-zero value
const [bonesH, setBonesH] = useState(0);   // Or any other non-zero value
const [bonesResult, setBonesResult] = useState(0);

useEffect(() => {
  calculateBonesResult(bonesN, bonesH);
}, [bonesN, bonesH]);

const handleBonesNChange = (valueString) => {
  const value = parseFloat(valueString);
	setBonesN(value);
};

const handleBonesHChange = (valueString) => {
  const value = parseFloat(valueString);
	setBonesH(value);
  };


const calculateBonesResult = (bonesN, bonesH) => {
  const totalBones = Math.max (bonesN - bonesH,0);
  setBonesResult(totalBones);
  };

  //PCS: INPUT ONLY//

  const [pCSN, setPCSN] = useState(0); // Or any other non-zero value
  const [pCSH, setPCSH] = useState(0);   // Or any other non-zero value
  const [pCSResult, setPCSResult] = useState(0);
  
  useEffect(() => {
    calculatePCSResult(pCSN, pCSH);
  }, [pCSN, pCSH]);
  
  const handlePCSNChange = (valueString) => {
    const value = parseFloat(valueString);
      setPCSN(value);
  };
  
  const handlePCSHChange = (valueString) => {
    const value = parseFloat(valueString);
      setPCSH(value);
    };
  
  
  const calculatePCSResult = (pCSN, pCSH) => {
    const totalPCS = Math.max (pCSN - pCSH,0);
    setPCSResult(totalPCS);
    };


  //Mushroom: INPUT ONLY//

  const [mushN, setMushN] = useState(0); // Or any other non-zero value
  const [mushH, setMushH] = useState(0);   // Or any other non-zero value
  const [mushResult, setMushResult] = useState(0);
  
  useEffect(() => {
    calculateMushResult(mushN, mushH);
  }, [mushN, mushH]);
  
  const handleMushNChange = (valueString) => {
    const value = parseFloat(valueString);
      setMushN(value);
  };
  
  const handleMushHChange = (valueString) => {
    const value = parseFloat(valueString);
      setMushH(value);
    };
  
  
  const calculateMushResult = (mushN, mushH) => {
    const totalMush = Math.max (mushN - mushH,0);
    setMushResult(totalMush);
    };
  

//AAKULTA HELMET: INPUT ONLY//

const [aakhelN, setAakhelN] = useState(0); // Or any other non-zero value
const [aakhelH, setAakhelH] = useState(0);   // Or any other non-zero value
const [aakhelResult, setAakhelResult] = useState(0);
const [totalAakhel, setTotalAakhel] = useState(0);
const [fgAakhelResult, setFgAakhelResult] = useState(0);
const [dreAakhelResult, setDreAakhelResult] = useState(0);
const [steelAakhelResult, setSteelAakhelResult] = useState(0);
const [goldAakhelResult, setGoldAakhelResult] = useState(0);
const [coinsAakhelResult, setCoinsAakhelResult] = useState(0);


useEffect(() => {
  calculateAakhelResult(aakhelN, aakhelH);
}, [aakhelN, aakhelH]);

const handleAakhelNChange = (valueString) => {
  const value = parseFloat(valueString);
	setAakhelN(value);
};

const handleAakhelHChange = (valueString) => {
  const value = parseFloat(valueString);
	setAakhelH(value);
  };

  const calculateAakhelResult = (aakhelN, aakhelH) => {
    const totalAakhel = Math.max (aakhelN - aakhelH,0);
    const totalFgAakhel = Math.max (totalAakhel*4);
    const totalDreAakhel = Math.max (totalAakhel*2);
    const totalSteelAakhel = Math.max (totalAakhel*8);
    const totalGoldAakhel = Math.max (totalAakhel*2);
    const totalCoinsAakhel = Math.max (totalAakhel*500);
    setAakhelResult(totalAakhel);
    setFgAakhelResult(totalFgAakhel);
    setDreAakhelResult(totalDreAakhel);
    setSteelAakhelResult(totalSteelAakhel);
    setGoldAakhelResult(totalGoldAakhel);
    setCoinsAakhelResult(totalCoinsAakhel);  
    };



//CLIMBING BOOTS: INPUT ONLY//

const [clibooN, setClibooN] = useState(0); // Or any other non-zero value
const [clibooH, setClibooH] = useState(0);   // Or any other non-zero value
const [clibooResult, setClibooResult] = useState(0);
const [totalCliboo, setTotalCliboo] = useState(0);
const [dreClibooResult, setDreClibooResult] = useState(0);
const [leatherrollClibooResult, setLeatherrollClibooResult] = useState(0);
const [steelClibooResult, setSteelClibooResult] = useState(0);
const [coinsClibooResult, setCoinsClibooResult] = useState(0);

useEffect(() => {
  calculateClibooResult(clibooN, clibooH);
}, [clibooN, clibooH]);

const handleClibooNChange = (valueString) => {
  const value = parseFloat(valueString);
	setClibooN(value);
};

const handleClibooHChange = (valueString) => {
  const value = parseFloat(valueString);
	setClibooH(value);
  };


  const calculateClibooResult = (clibooN, clibooH) => {
    const totalCliboo = Math.max (clibooN - clibooH,0);
    const totalDreCliboo = Math.max (totalCliboo*3);
    const totalLeatherrollCliboo = Math.max (totalCliboo*8);
    const totalSteelCliboo = Math.max (totalCliboo*2);
    const totalCoinsCliboo = Math.max (totalCliboo*500);
    setClibooResult(totalCliboo);
    setDreClibooResult(totalDreCliboo);
    setLeatherrollClibooResult(totalLeatherrollCliboo);
    setSteelClibooResult(totalSteelCliboo);
    setCoinsClibooResult(totalCoinsCliboo);  
    };


//CRESTED HELMET: INPUT ONLY//

const [crehelN, setCrehelN] = useState(0); // Or any other non-zero value
const [crehelH, setCrehelH] = useState(0);   // Or any other non-zero value
const [crehelResult, setCrehelResult] = useState(0);
const [totalCrehel, setTotalCrehel] = useState(0);
const [fgCrehelResult, setFgCrehelResult] = useState(0);
const [dreCrehelResult, setDreCrehelResult] = useState(0);
const [steelCrehelResult, setSteelCrehelResult] = useState(0);
const [coinsCrehelResult, setCoinsCrehelResult] = useState(0);

useEffect(() => {
  calculateCrehelResult(crehelN, crehelH);
}, [crehelN, crehelH]);

const handleCrehelNChange = (valueString) => {
  const value = parseFloat(valueString);
    setCrehelN(value);
};

const handleCrehelHChange = (valueString) => {
  const value = parseFloat(valueString);
    setCrehelH(value);
  };


  const calculateCrehelResult = (crehelN, crehelH) => {
	const totalCrehel = Math.max (crehelN - crehelH,0);
	const totalFgCrehel = Math.max (totalCrehel*10);
	const totalDreCrehel = Math.max (totalCrehel*2);
	const totalSteelCrehel = Math.max (totalCrehel*8);
	const totalCoinsCrehel = Math.max (totalCrehel*500);
	setCrehelResult(totalCrehel);
	setFgCrehelResult(totalFgCrehel);
	setDreCrehelResult(totalDreCrehel);
	setSteelCrehelResult(totalSteelCrehel);
	setCoinsCrehelResult(totalCoinsCrehel);  
	};



//FLOWER SLINGSHOT: INPUT ONLY//

const [flosliN, setFlosliN] = useState(0); // Or any other non-zero value
const [flosliH, setFlosliH] = useState(0);   // Or any other non-zero value
const [flosliResult, setFlosliResult] = useState(0);
const [totalFlosli, setTotalFlosli] = useState(0);
const [dreFlosliResult, setDreFlosliResult] = useState(0);
const [hardwoodFlosliResult, setHardwoodFlosliResult] = useState(0);
const [reinforcedropeFlosliResult, setReinforcedropeFlosliResult] = useState(0);
const [leatherrollFlosliResult, setLeatherrollFlosliResult] = useState(0);
const [coinsFlosliResult, setCoinsFlosliResult] = useState(0);

useEffect(() => {
  calculateFlosliResult(flosliN, flosliH);
}, [flosliN, flosliH]);

const handleFlosliNChange = (valueString) => {
  const value = parseFloat(valueString);
    setFlosliN(value);
};

const handleFlosliHChange = (valueString) => {
  const value = parseFloat(valueString);
    setFlosliH(value);
  };


  const calculateFlosliResult = (flosliN, flosliH) => {
	const totalFlosli = Math.max (flosliN - flosliH,0)
	const totalDreFlosli = Math.max (totalFlosli*2);
	const totalHardwoodFlosli = Math.max (totalFlosli*4);
	const totalReinforcedropeFlosli = Math.max (totalFlosli*2);
	const totalLeatherrollFlosli = Math.max (totalFlosli*1);
	const totalCoinsFlosli = Math.max (totalFlosli*500);
	setFlosliResult(totalFlosli);
	setDreFlosliResult(totalDreFlosli);
	setHardwoodFlosliResult(totalHardwoodFlosli );
	setReinforcedropeFlosliResult(totalReinforcedropeFlosli );
	setLeatherrollFlosliResult(totalLeatherrollFlosli );
	setCoinsFlosliResult(totalCoinsFlosli);  
	};


//FUSION CUIRASS: INPUT ONLY//

const [fuscuiN, setFuscuiN] = useState(0); // Or any other non-zero value
const [fuscuiH, setFuscuiH] = useState(0);   // Or any other non-zero value
const [fuscuiResult, setFuscuiResult] = useState(0);
const [totalFuscui, setTotalFuscui] = useState(0);
const [fgFuscuiResult, setFgFuscuiResult] = useState(0);
const [dreFuscuiResult, setDreFuscuiResult] = useState(0);
const [finefabricFuscuiResult, setFinefabricFuscuiResult] = useState(0);
const [steelFuscuiResult, setSteelFuscuiResult] = useState(0);
const [coinsFuscuiResult, setCoinsFuscuiResult] = useState(0);

useEffect(() => {
  calculateFuscuiResult(fuscuiN, fuscuiH);
}, [fuscuiN, fuscuiH]);

const handleFuscuiNChange = (valueString) => {
  const value = parseFloat(valueString);
	setFuscuiN(value);
};

const handleFuscuiHChange = (valueString) => {
  const value = parseFloat(valueString);
	setFuscuiH(value);
  };


  const calculateFuscuiResult = (fuscuiN, fuscuiH) => {
    const totalFuscui = Math.max (fuscuiN - fuscuiH,0)
    const totalFgFuscui = Math.max (totalFuscui*8);
    const totalDreFuscui = Math.max (totalFuscui*4);
    const totalFinefabricFuscui = Math.max (totalFuscui*4);
    const totalSteelFuscui = Math.max (totalFuscui*15);
    const totalCoinsFuscui = Math.max (totalFuscui*1000);
    setFuscuiResult(totalFuscui);
    setFgFuscuiResult(totalFgFuscui);
    setDreFuscuiResult(totalDreFuscui);
    setFinefabricFuscuiResult(totalFinefabricFuscui);
    setSteelFuscuiResult(totalSteelFuscui);
    setCoinsFuscuiResult(totalCoinsFuscui);  
    };

//FUSION CROSSBOW: INPUT ONLY//

const [fuscroN, setFuscroN] = useState(0); // Or any other non-zero value
const [fuscroH, setFuscroH] = useState(0);   // Or any other non-zero value
const [fuscroResult, setFuscroResult] = useState(0);
const [totalFuscro, setTotalFuscro] = useState(0);
const [fgFuscroResult, setFgFuscroResult] = useState(0);
const [dreFuscroResult, setDreFuscroResult] = useState(0);
const [hardwoodFuscroResult, setHardwoodFuscroResult] = useState(0);
const [reinforcedropeFuscroResult, setReinforcedropeFuscroResult] = useState(0);
const [steelFuscroResult, setSteelFuscroResult] = useState(0);
const [coinsFuscroResult, setCoinsFuscroResult] = useState(0);

useEffect(() => {
  calculateFuscroResult(fuscroN, fuscroH);
}, [fuscroN, fuscroH]);

const handleFuscroNChange = (valueString) => {
  const value = parseFloat(valueString);
    setFuscroN(value);
};

const handleFuscroHChange = (valueString) => {
  const value = parseFloat(valueString);
    setFuscroH(value);
  };


  const calculateFuscroResult = (fuscroN, fuscroH) => {
	const totalFuscro = Math.max (fuscroN - fuscroH,0)
	const totalFgFuscro = Math.max (totalFuscro*1);
	const totalDreFuscro = Math.max (totalFuscro*1);
	const totalHardwoodFuscro = Math.max (totalFuscro*5);
	const totalReinforcedropeFuscro = Math.max (totalFuscro*2);
	const totalSteelFuscro = Math.max (totalFuscro*3);
	const totalCoinsFuscro = Math.max (totalFuscro*500);
	setFuscroResult(totalFuscro);
	setFgFuscroResult(totalFgFuscro);
  setDreFuscroResult(totalDreFuscro);
	setHardwoodFuscroResult(totalHardwoodFuscro);
	setReinforcedropeFuscroResult(totalReinforcedropeFuscro);
	setSteelFuscroResult(totalSteelFuscro);
	setCoinsFuscroResult(totalCoinsFuscro);  
	};



//FUSION SWORD: INPUT ONLY//

const [fusswoN, setFusswoN] = useState(0); // Or any other non-zero value
const [fusswoH, setFusswoH] = useState(0);   // Or any other non-zero value
const [fusswoResult, setFusswoResult] = useState(0);
const [totalFusswo, setTotalFusswo] = useState(0);
const [fgFusswoResult, setFgFusswoResult] = useState(0);
const [dreFusswoResult, setDreFusswoResult] = useState(0);
const [goldFusswoResult, setGoldFusswoResult] = useState(0);
const [steelFusswoResult, setSteelFusswoResult] = useState(0);
const [coinsFusswoResult, setCoinsFusswoResult] = useState(0);

useEffect(() => {
  calculateFusswoResult(fusswoN, fusswoH);
}, [fusswoN, fusswoH]);

const handleFusswoNChange = (valueString) => {
  const value = parseFloat(valueString);
    setFusswoN(value);
};

const handleFusswoHChange = (valueString) => {
  const value = parseFloat(valueString);
    setFusswoH(value);
  };


  const calculateFusswoResult = (fusswoN, fusswoH) => {
	const totalFusswo = Math.max (fusswoN - fusswoH,0)
	const totalFgFusswo = Math.max (totalFusswo*6);
	const totalDreFusswo = Math.max (totalFusswo*2);
	const totalGoldFusswo = Math.max (totalFusswo*2);
	const totalSteelFusswo = Math.max (totalFusswo*10);
	const totalCoinsFusswo = Math.max (totalFusswo*500);
	setFusswoResult(totalFusswo);
  setFgFusswoResult(totalFgFusswo);
	setDreFusswoResult(totalDreFusswo);
	setGoldFusswoResult(totalGoldFusswo);
	setSteelFusswoResult(totalSteelFusswo);
	setCoinsFusswoResult(totalCoinsFusswo);  
	};



//HOPES LIGHT: INPUT ONLY//

const [hopligN, setHopligN] = useState(0); // Or any other non-zero value
const [hopligH, setHopligH] = useState(0);   // Or any other non-zero value
const [hopligResult, setHopligResult] = useState(0);
const [totalHoplig, setTotalHoplig] = useState(0);
const [fgHopligResult, setFgHopligResult] = useState(0);
const [dreHopligResult, setDreHopligResult] = useState(0);
const [steelHopligResult, setSteelHopligResult] = useState(0);
const [coinsHopligResult, setCoinsHopligResult] = useState(0);

useEffect(() => {
  calculateHopligResult(hopligN, hopligH);
}, [hopligN, hopligH]);

const handleHopligNChange = (valueString) => {
  const value = parseFloat(valueString);
	setHopligN(value);
};

const handleHopligHChange = (valueString) => {
  const value = parseFloat(valueString);
	setHopligH(value);
  };


  const calculateHopligResult = (hopligN, hopligH) => {
    const totalHoplig = Math.max (hopligN - hopligH,0)
    const totalFgHoplig = Math.max (totalHoplig*6);
    const totalDreHoplig = Math.max (totalHoplig*2);
    const totalSteelHoplig = Math.max (totalHoplig*6);
    const totalCoinsHoplig = Math.max (totalHoplig*500);
    setHopligResult(totalHoplig);
    setDreHopligResult(totalDreHoplig);
    setFgHopligResult(totalFgHoplig);
    setSteelHopligResult(totalSteelHoplig);
    setCoinsHopligResult(totalCoinsHoplig);  
    };


//LEATHER CUIRASS: INPUT ONLY//

const [leacuiN, setLeacuiN] = useState(0); // Or any other non-zero value
const [leacuiH, setLeacuiH] = useState(0);   // Or any other non-zero value
const [leacuiResult, setLeacuiResult] = useState(0);
const [totalLeacui, setTotalLeacui] = useState(0);
const [leatherrollLeacuiResult, setLeatherrollLeacuiResult] = useState(0);
const [dreLeacuiResult, setDreLeacuiResult] = useState(0);
const [steelLeacuiResult, setSteelLeacuiResult] = useState(0);
const [finefabricLeacuiResult, setFinefabricLeacuiResult] = useState(0);
const [coinsLeacuiResult, setCoinsLeacuiResult] = useState(0);

useEffect(() => {
  calculateLeacuiResult(leacuiN, leacuiH);
}, [leacuiN, leacuiH]);

const handleLeacuiNChange = (valueString) => {
  const value = parseFloat(valueString);
	setLeacuiN(value);
};

const handleLeacuiHChange = (valueString) => {
  const value = parseFloat(valueString);
	setLeacuiH(value);
  };


  const calculateLeacuiResult = (leacuiN, leacuiH) => {
    const totalLeacui = Math.max (leacuiN - leacuiH,0)
    const totalLeatherrollLeacui = Math.max (totalLeacui*15);
    const totalDreLeacui = Math.max (totalLeacui*4);
    const totalSteelLeacui = Math.max (totalLeacui*2);
    const totalFinefabricLeacui = Math.max (totalLeacui*4);
    const totalCoinsLeacui = Math.max (totalLeacui*1000);
    setLeacuiResult(totalLeacui);
    setDreLeacuiResult(totalDreLeacui);
    setLeatherrollLeacuiResult(totalLeatherrollLeacui);
    setSteelLeacuiResult(totalSteelLeacui);
    setFinefabricLeacuiResult(totalFinefabricLeacui);
    setCoinsLeacuiResult(totalCoinsLeacui);  
    };


 


//LEATHER TURNSHOE: INPUT ONLY//

const [leaturN, setLeaturN] = useState(0); // Or any other non-zero value
const [leaturH, setLeaturH] = useState(0);   // Or any other non-zero value
const [leaturResult, setLeaturResult] = useState(0);
const [totalLeatur, setTotalLeatur] = useState(0);
const [leatherrollLeaturResult, setLeatherrollLeaturResult] = useState(0);
const [dreLeaturResult, setDreLeaturResult] = useState(0);
const [finefabricLeaturResult, setFinefabricLeaturResult] = useState(0);
const [coinsLeaturResult, setCoinsLeaturResult] = useState(0);

useEffect(() => {
  calculateLeaturResult(leaturN, leaturH);
}, [leaturN, leaturH]);

const handleLeaturNChange = (valueString) => {
  const value = parseFloat(valueString);
    setLeaturN(value);
};

const handleLeaturHChange = (valueString) => {
  const value = parseFloat(valueString);
    setLeaturH(value);
  };


  const calculateLeaturResult = (leaturN, leaturH) => {
	const totalLeatur = Math.max (leaturN - leaturH,0)
	const totalLeatherrollLeatur = Math.max (totalLeatur*8);
	const totalDreLeatur = Math.max (totalLeatur*3);
	const totalFinefabricLeatur = Math.max (totalLeatur*4);
	const totalCoinsLeatur = Math.max (totalLeatur*500);
	setLeaturResult(totalLeatur);
	setDreLeaturResult(totalDreLeatur);
	setLeatherrollLeaturResult(totalLeatherrollLeatur);
	setFinefabricLeaturResult(totalFinefabricLeatur);
	setCoinsLeaturResult(totalCoinsLeatur);  
	};


//LIGHTS BLOOM: INPUT ONLY//

const [ligbloN, setLigbloN] = useState(0); // Or any other non-zero value
const [ligbloH, setLigbloH] = useState(0);   // Or any other non-zero value
const [ligbloResult, setLigbloResult] = useState(0);
const [totalLigblo, setTotalLigblo] = useState(0);
const [fgLigbloResult, setFgLigbloResult] = useState(0);
const [dreLigbloResult, setDreLigbloResult] = useState(0);
const [goldLigbloResult, setGoldLigbloResult] = useState(0);
const [coinsLigbloResult, setCoinsLigbloResult] = useState(0);

useEffect(() => {
  calculateLigbloResult(ligbloN, ligbloH);
}, [ligbloN, ligbloH]);

const handleLigbloNChange = (valueString) => {
  const value = parseFloat(valueString);
    setLigbloN(value);
};

const handleLigbloHChange = (valueString) => {
  const value = parseFloat(valueString);
    setLigbloH(value);
  };


  const calculateLigbloResult = (ligbloN, ligbloH) => {
	const totalLigblo = Math.max (ligbloN - ligbloH,0)
	const totalFgLigblo = Math.max (totalLigblo*1);
	const totalDreLigblo = Math.max (totalLigblo*3);
	const totalGoldLigblo = Math.max (totalLigblo*1);
	const totalCoinsLigblo = Math.max (totalLigblo*500);
	setLigbloResult(totalLigblo);
	setFgLigbloResult(totalFgLigblo);
	setDreLigbloResult(totalDreLigblo);
	setGoldLigbloResult(totalGoldLigblo);
	setCoinsLigbloResult(totalCoinsLigblo);  
	};


//POE PICK: INPUT ONLY//

const [poepicN, setPoepicN] = useState(0); // Or any other non-zero value
const [poepicH, setPoepicH] = useState(0);   // Or any other non-zero value
const [poepicResult, setPoepicResult] = useState(0);
const [totalPoepic, setTotalPoepic] = useState(0);
const [hardwoodPoepicResult, setHardwoodPoepicResult] = useState(0);
const [drePoepicResult, setDrePoepicResult] = useState(0);
const [steelPoepicResult, setSteelPoepicResult] = useState(0);
const [coinsPoepicResult, setCoinsPoepicResult] = useState(0);

useEffect(() => {
  calculatePoepicResult(poepicN, poepicH);
}, [poepicN, poepicH]);

const handlePoepicNChange = (valueString) => {
  const value = parseFloat(valueString);
	setPoepicN(value);
};

const handlePoepicHChange = (valueString) => {
  const value = parseFloat(valueString);
	setPoepicH(value);
  };


  const calculatePoepicResult = (poepicN, poepicH) => {
    const totalPoepic = Math.max (poepicN - poepicH,0)
    const totalHardwoodPoepic = Math.max (totalPoepic*8);
    const totalDrePoepic = Math.max (totalPoepic*2);
    const totalSteelPoepic = Math.max (totalPoepic*8);
    const totalCoinsPoepic = Math.max (totalPoepic*500);
    setPoepicResult(totalPoepic);
    setHardwoodPoepicResult(totalHardwoodPoepic);
    setDrePoepicResult(totalDrePoepic);
    setSteelPoepicResult(totalSteelPoepic);
    setCoinsPoepicResult(totalCoinsPoepic);  
    };


//D-R ELIXIR TOTAL//
const calculateAllDreResult = {dreResult, dreAakhelResult, dreClibooResult, dreCrehelResult, dreFlosliResult, dreFuscuiResult, dreFuscroResult, dreFusswoResult, dreHopligResult, dreLeacuiResult, dreLeaturResult, dreLigbloResult, drePoepicResult}
const totalAllDre = Math.round (dreResult + dreAakhelResult + dreClibooResult + dreCrehelResult + dreFlosliResult + dreFuscuiResult + dreFuscroResult + dreFusswoResult + dreHopligResult + dreLeacuiResult + dreLeaturResult + dreLigbloResult + drePoepicResult)

//FG TOTAL//

const calculateAllFgResult = {fgResult, fgAakhelResult, fgCrehelResult, fgFuscuiResult, fgFuscroResult, fgFusswoResult, fgHopligResult, fgLigbloResult}
const totalAllFg = Math.round (fgResult + fgAakhelResult + fgCrehelResult + fgFuscuiResult + fgFuscroResult + fgFusswoResult + fgHopligResult + fgLigbloResult)

//D-R ELIX FOR FUSION GLASS MATH//
const [dreFgCrafting, setDreFgCrafting] = useState(0); // Or any other non-zero value
const calculateDreFgCraftingResult = {totalAllDre, totalAllFg}
const totalDreFgCrafting = Math.max (totalAllDre + totalAllFg,0)

//LD FOR LOOTING//
const [ldLooting, setLdLooting] = useState(0); // Or any other non-zero value
const calculateLdLooting = {ldResult, totalAllDre}
const totalLdLooting = Math.max ((ldResult + (totalAllDre*10)),0)

//LD FOR Crafting//
const [ldCrafting, setLdCrafting] = useState(0); // Or any other non-zero value
const calculateLdCrafting = {ldResult, totalDreFgCrafting, totalAllFg}
const totalLdCrafting = Math.max ((ldResult + (totalDreFgCrafting*10) + (totalAllFg*4)),0)

//RD FOR LOOTING//
const [rdLooting, setRdLooting] = useState(0); // Or any other non-zero value
const calculateRdLooting = {rdResult, totalAllDre}
const totalRdLooting = Math.max ((rdResult + (totalAllDre*8)),0)

//RD FOR Crafting//
const [rdCrafting, setRdCrafting] = useState(0); // Or any other non-zero value
const calculateRdCrafting = {rdResult, totalDreFgCrafting}
const totalRdCrafting = Math.max ((rdResult + (totalDreFgCrafting*8)),0)

//DU FOR LOOTING//
const [duLooting, setDuLooting] = useState(0); // Or any other non-zero value
const calculateDuLooting = {dustResult, totalAllDre}
const totalDuLooting = Math.max ((dustResult + (totalAllDre*20)),0)

//DU FOR Crafting//
const [duCrafting, setDuCrafting] = useState(0); // Or any other non-zero value
const calculateDuCrafting = {dustResult, totalDreFgCrafting}
const totalDuCrafting = Math.max ((dustResult + (totalDreFgCrafting*20)),0)

//ESS FOR LOOTING//
const [essLooting, setEssLooting] = useState(0); // Or any other non-zero value
const calculateEssLooting = {essResult, totalAllDre}
const totalEssLooting = Math.max ((essResult + (totalAllDre*5)),0)

//ESS FOR Crafting//
const [essCrafting, setEssCrafting] = useState(0); // Or any other non-zero value
const calculateEssCrafting = {essResult, totalDreFgCrafting}
const totalEssCrafting = Math.max ((essResult + (totalDreFgCrafting*5)),0)

//DFL FOR LOOTING//
const [dflLooting, setDflLooting] = useState(0); // Or any other non-zero value
const calculateDflLooting = {dflResult, totalAllDre}
const totalDflLooting = Math.max ((dflResult + (totalAllDre*2)),0)

//DFL FOR Crafting//
const [dflCrafting, setDflCrafting] = useState(0); // Or any other non-zero value
const calculateDflCrafting = {dflResult, totalDreFgCrafting}
const totalDflCrafting = Math.max ((dflResult + (totalDreFgCrafting*2)),0)

//BONES FOR LOOTING//
const [bonesLooting, setBonesLooting] = useState(0); // Or any other non-zero value
const calculateBonesLooting = {bonesResult, totalAllDre}
const totalBonesLooting = Math.max ((bonesResult + (totalAllDre*3)),0)

//BONES FOR Crafting//
const [bonesCrafting, setBonesCrafting] = useState(0); // Or any other non-zero value
const calculateBonesCrafting = {bonesResult, totalDreFgCrafting}
const totalBonesCrafting = Math.max ((bonesResult + (totalDreFgCrafting*3)),0)

//PCS FOR Looting//
const [pcsLooting, setPcsLooting] = useState(0); // Or any other non-zero value
const calculatePcsLooting = {pCSResult, totalAllFg}
const totalPcsLooting = Math.max ((pCSResult),0)

//PCS FOR Crafting//
const [pcsCrafting, setPcsCrafting] = useState(0); // Or any other non-zero value
const calculatePcsCrafting = {pCSResult, totalAllFg}
const totalPcsCrafting = Math.max ((pCSResult + (totalAllFg*2)),0)

//MUSH FOR LOOTING//
const [mushLooting, setMushLooting] = useState(0); // Or any other non-zero value
const calculateMushLooting = {mushResult, totalAllDre}
const totalMushLooting = Math.max ((mushResult + (totalAllDre*1)),0)

//MUSH FOR Crafting//
const [mushCrafting, setMushCrafting] = useState(0); // Or any other non-zero value
const calculateMushCrafting = {mushResult, totalAllDre, totalAllFg}
const totalMushCrafting = Math.max ((mushResult + (totalDreFgCrafting*1)),0)


//AAKULTA QTY + WC//
const [aakultaQty, setAakultaQty] = useState(0);
const calculateAakultaQty = {totalAllFg}
const totalAakultaQty = Math.max ((totalAllFg/1), 0)

const [aakultaWC, setAakultaWC] = useState (0);
const calculateAakultaWC = {totalAakultaQty, attackStat}
const totalAakultaWC = Math.round ((totalAakultaQty*1500) / ((attackStat/100) + 1));

//Arluzi QTY + WC//
const [arluziQtyLoot, setArluziQtyLoot] = useState(0);
const calculateArluziQtyLoot = {totalLdLooting}
const totalArluziQtyLoot = Math.max ((totalLdLooting/1), 0)

const [arluziWCLoot, setArluziWCLoot] = useState (0);
const calculateArluziWCLoot = {totalArluziQtyLoot, attackStat}
const totalArluziWCLoot = Math.round ((totalArluziQtyLoot*50) / ((attackStat/100) + 1));

const [arluziQtyCraft, setArluziQtyCraft] = useState(0);
const calculateArluziQtyCraft = {totalLdCrafting}
const totalArluziQtyCraft = Math.max ((totalLdCrafting/1), 0)

const [arluziWCCraft, setArluziWCCraft] = useState (0);
const calculateArluziWCCraft = {totalArluziQtyCraft, attackStat}
const totalArluziWCCraft = Math.round ((totalArluziQtyCraft*50) / ((attackStat/100) + 1));

//Ascre QTY + WC//
const [ascreQtyLoot, setAscreQtyLoot] = useState(0);
const calculateAscreQtyLoot = {totalRdLooting}
const totalAscreQtyLoot = Math.ceil ((totalRdLooting/.5), 0)

const [ascreWCLoot, setAscreWCLoot] = useState (0);
const calculateAscreWCLoot = {totalAscreQtyLoot, attackStat}
const totalAscreWCLoot = Math.round ((totalAscreQtyLoot*150) / ((attackStat/100) + 1));

const [ascreQtyCraft, setAscreQtyCraft] = useState(0);
const calculateAscreQtyCraft = {totalRdCrafting}
const totalAscreQtyCraft = Math.ceil ((totalRdCrafting/.5), 0)

const [ascreWCCraft, setAscreWCCraft] = useState (0);
const calculateAscreWCCraft = {totalAscreQtyCraft, attackStat}
const totalAscreWCCraft = Math.round ((totalAscreQtyCraft*150) / ((attackStat/100) + 1));


//ADJUST FOR ASCRE'S DFL DROP//
const [checkDflLooting, setCheckDflLooting] = useState (0);
const calculateCheckflLooting = {totalDflLooting, totalAscreQtyLoot}
const totalCheckDflLooting = Math.max ((totalDflLooting - totalAscreQtyLoot),0);

const [checkDflCrafting, setCheckDflCrafting] = useState (0);
const calculateCheckDflCrafting = {totalDflCrafting, totalAscreQtyCraft}
const totalCheckDflCrafting = Math.max ((totalDflCrafting - totalAscreQtyCraft),0);

//DustWignow QTY + WC//
const [dustWignowQtyLoot, setDustWignowQtyLoot] = useState(0);
const calculateDustWignowQtyLoot = {totalCheckDflLooting}
const totalDustWignowQtyLoot = Math.ceil (totalCheckDflLooting/3.5)

const [dustWignowWCLoot, setDustWignowWCLoot] = useState (0);
const calculateDustWignowWCLoot = {totalDustWignowQtyLoot, attackStat}
const totalDustWignowWCLoot = Math.round ((totalDustWignowQtyLoot*444) / ((attackStat/100) + 1));

const [dustWignowQtyCraft, setDustWignowQtyCraft] = useState(0);
const calculateDustWignowQtyCraft = {totalCheckDflCrafting}
const totalDustWignowQtyCraft = Math.ceil (totalCheckDflCrafting/3.5)

const [dustWignowWCCraft, setDustWignowWCCraft] = useState (0);
const calculateDustWignowWCCraft = {totalDustWignowQtyCraft, attackStat}
const totalDustWignowWCCraft = Math.round ((totalDustWignowQtyCraft*444) / ((attackStat/100) + 1));


//Noanza QTY + WC//
const [noanzaQty, setNoanzaQty] = useState(0);
const calculateNoanzaQty = {totalAllFg}
const totalNoanzaQty = Math.ceil ((totalAllFg/2.5), 0)

const [noanzaWC, setNoanzaWC] = useState (0);
const calculateNoanzaWC = {totalNoanzaQty, attackStat}
const totalNoanzaWC = Math.round ((totalNoanzaQty*1500) / ((attackStat/100) + 1));

//Xaey QTY + WC//
const [xaeyQtyLoot, setXaeyQtyLoot] = useState(0);
const calculateXaeyQtyLoot = {totalBonesLooting}
const totalXaeyQtyLoot = Math.max ((totalBonesLooting/1), 0)

const [xaeyWCLoot, setXaeyWCLoot] = useState (0);
const calculateXaeyWCLoot = {totalXaeyQtyLoot, attackStat}
const totalXaeyWCLoot = Math.round (((totalXaeyQtyLoot)*120) / ((attackStat/100) + 1));

const [xaeyQtyCraft, setXaeyQtyCraft] = useState(0);
const calculateXaeyQtyCraft = {totalBonesCrafting}
const totalXaeyQtyCraft = Math.max ((totalBonesCrafting/1), 0)

const [xaeyWCCraft, setXaeyWCCraft] = useState (0);
const calculateXaeyWCCraft = {totalXaeyQtyCraft, attackStat}
const totalXaeyWCCraft = Math.round ((totalXaeyQtyCraft*120) / ((attackStat/100) + 1));

//PCS overlap calc//

const [overlapPcsLoot, setOverlapPcsLoot] = useState (0);
const calculateOverlapPcsLoot = {totalXaeyQtyLoot}
const totalOverlapPcsLoot = Math.floor (.5 * totalXaeyQtyLoot)

const [overlapPcsCraft, setOverlapPcsCraft] = useState (0);
const calculateOverlapPcsCraft = {totalXaeyQtyCraft}
const totalOverlapPcsCraft = Math.floor (.5 * totalXaeyQtyCraft)

const [pcsNeededLoot, setPcsNeededLoot] = useState(0);
const calculatePcsNeededLoot = {totalPcsLooting, totalOverlapPcsLoot}
const totalPcsNeededLoot = Math.round ((totalPcsLooting - totalOverlapPcsLoot),0)

const [pcsNeededCraft, setPcsNeededCraft] = useState(0);
const calculatePcsNeededCraft = {totalPcsCrafting, totalOverlapPcsCraft}
const totalPcsNeededCraft = Math.round ((totalPcsCrafting - totalOverlapPcsCraft),0)

//GLIVA MUSH CALC//

const [glivaQtyLoot, setGlivaQtyLoot] = useState(0);
const calculateGlivaQtyLoot = {mushResult, totalAllDre}
const totalGlivaQtyLoot = Math.max ((mushResult + totalAllDre), 0)

const [glivaWCLoot, setGlivaWCLoot] = useState (0);
const calculateGlivaWCLoot = {totalGlivaQtyLoot, attackStat}
const totalGlivaWCLoot = Math.round ((totalGlivaQtyLoot*300) / ((attackStat/100) + 1));

const [glivaQtyCrafting, setGlivaQtyCrafting] = useState(0);
const calculateGlivaQtyCrafting = {mushResult, totalAllDre, totalAllFg}
const totalGlivaQtyCrafting = Math.max ((mushResult + totalAllFg + totalAllDre), 0)

const [glivaWCCrafting, setGlivaWCCrafting] = useState (0);
const calculateGlivaWCCrafting = {totalGlivaQtyCrafting, attackStat}
const totalGlivaWCCrafting = Math.round ((totalGlivaQtyCrafting*300) / ((attackStat/100) + 1));




//KIRERF MUSH CALC//


const [kirerfQtyLoot, setKirerfQtyLoot] = useState(0);
const calculateKirerfQtyLoot = {mushResult, totalAllDre}
const totalKirerfQtyLoot = Math.max ((mushResult + totalAllDre), 0)

const [kirerfWCLoot, setKirerfWCLoot] = useState (0);
const calculateKirerfWCLoot = {totalKirerfQtyLoot, attackStat}
const totalKirerfWCLoot = Math.round ((totalKirerfQtyLoot*66) / ((attackStat/100) + 1));

const [kirerfQtyCrafting, setKirerfQtyCrafting] = useState(0);
const calculateKirerfQtyCrafting = {mushResult, totalAllDre, totalAllFg}
const totalKirerfQtyCrafting = Math.max ((mushResult + totalAllFg + totalAllDre), 0)

const [kirerfWCCrafting, setKirerfWCCrafting] = useState (0);
const calculateKirerfWCCrafting = {totalKirerfQtyCrafting, attackStat}
const totalKirerfWCCrafting = Math.round ((totalKirerfQtyCrafting*66) / ((attackStat/100) + 1));




//DFL AND RD OVERLAP (REDUCES DFL)//






//DO I EVEN NEED XAEY CALC LOL - DFL overlap CALC//
//must be here so I can use it in the PCS calculations//

const [bonesOverlapLoot, setBonesOverlapLoot] = useState(0);
const calculateBonesOverlapLoot = {totalDustWignowQtyLoot,totalBonesLooting}
const totalBonesOverlapLoot = Math.max ((totalBonesLooting-totalDustWignowQtyLoot),0)

const [bonesOverlapCraft, setBonesOverlapCraft] = useState(0);
const calculateBonesOverlapCraft = {totalDustWignowQtyCraft,totalBonesLooting}
const totalBonesOverlapCraft = Math.max ((totalBonesCrafting-totalDustWignowQtyCraft),0)

//essence overlap//

const [essOverlapLoot, setEssOverlapLoot] = useState(0);
const calculateEssOverlapLoot = {totalDustWignowQtyLoot,totalEssLooting}
const totalEssOverlapLoot = Math.max ((totalEssLooting-totalDustWignowQtyLoot),0)

const [essOverlapCraft, setEssOverlapCraft] = useState(0);
const calculateEssOverlapCraft = {totalDustWignowQtyCraft,totalEssLooting}
const totalEssOverlapCraft = Math.max ((totalEssCrafting-totalDustWignowQtyCraft),0)

//XAEY ADJUSTED//



//PCS CALC//


//ARDID CALC//
const [ardidQtyLoot, SetArdidQtyLoot] = useState (0);
const calculateArdidQtyLoot = {totalPcsNeededLoot}
const totalArdidQtyLoot = Math.max ((totalPcsNeededLoot*2),0)

const [ardidWCLoot, setArdidWCLoot] = useState (0);
const calculateArdidWCLoot = {totalArdidQtyLoot, attackStat}
const totalArdidWCLoot = Math.round ((totalArdidQtyLoot*90) / ((attackStat/100) + 1));

const [ardidQtyCraft, SetArdidQtyCraft] = useState (0);
const calculateArdidQtyCraft = {totalPcsNeededCraft}
const totalArdidQtyCraft = Math.max ((totalPcsNeededCraft*2),0)

const [ardidWCCraft, setArdidWCCraft] = useState (0);
const calculateArdidWCCraft = {totalArdidQtyCraft, attackStat}
const totalArdidWCCraft = Math.round ((totalArdidQtyCraft*90) / ((attackStat/100) + 1));

//DUST overlap CALC//
const [dustArdidTotalLoot, setDustArdidTotalLoot] = useState (0);
const calculateDustArdidTotalLoot = {totalArdidQtyLoot}
const totalDustArdidTotalLoot = Math.round (totalArdidQtyLoot*1.5)

const [dustArdidTotalCraft, setDustArdidTotalCraft] = useState (0);
const calculateDustArdidTotalCraft = {totalArdidQtyCraft}
const totalDustArdidTotalCraft = Math.round (totalArdidQtyCraft*1.5)

const [dustAllOtherMonstersLoot, SetDustAllOtherMonstersLoot] = useState (0);
const calculateDustAllOtherMonstersTotalLoot = {totalDustArdidTotalLoot, totalKirerfQtyLoot}
const totalDustAllOtherMonstersLoot = Math.max ((totalDustArdidTotalLoot + totalKirerfQtyLoot),0)

const [dustAllOtherMonstersCraft, SetDustAllOtherMonstersCraft] = useState (0);
const calculateDustAllOtherMonstersTotalCraft = {totalDustArdidTotalCraft, totalKirerfQtyLoot}
const totalDustAllOtherMonstersCraft = Math.max ((totalDustArdidTotalCraft + totalKirerfQtyLoot),0)


//LD overlap CALC//

//need different LD 'need' variable for fighting Noanza//
const [roundUpNoanzaQty, setRoundUpNoanzaQty] = useState (0);
const calculateRoundUpNoanzaQty = {totalNoanzaQty}
const totalRoundUpNoanzaQty = Math.ceil (totalNoanzaQty*1)

const [ldNeedNoanza, setLdNeedNoanza] = useState (0);
const calculateLdNeedNoanza = {ldN, totalRoundUpNoanzaQty}
const totalLdNeedNoanza = Math.max ((ldN + (totalRoundUpNoanzaQty*4)),0)

const [ldResultNoanza, setLdResultNoanza] = useState (0);
const calculateLdResultNoanza = {ldH, totalLdNeedNoanza}
const totalLdResultNoanza = Math.max ((totalLdNeedNoanza-ldH),0)

const [ldLootingNoanza, setLdLootingNoanza] = useState(0); // Or any other non-zero value
const calculateLdLootingNoanza = {totalLdResultNoanza, totalAllDre}
const totalLdLootingNoanza = Math.max ((totalLdResultNoanza + (totalAllDre*10)),0)

const [aakultaLdLoot, SetAakultaLdLoot] = useState (0);
const calculateAakultaLdLoot = {totalAakultaQty}
const totalAakultaLdLoot = Math.ceil ((totalAakultaQty*5.5))

const [adjustedLdAakultaLoot, SetAdjustedAakultaLdLoot] = useState (0);
const calculateAdjustedLdAakultaLoot = {totalAakultaLdLoot, totalLdLooting}
const totalAdjustedLdAakultaLoot = Math.max ((totalLdLooting-totalAakultaLdLoot),0)

const [adjustedLdAakultaLootWC, SetAdjustedAakultaLdLootWC] = useState (0);
const calculateAdjustedLdAakultaLootWC = {totalAdjustedLdAakultaLoot, totalLdLooting}
const totalAdjustedLdAakultaLootWC = Math.round ((totalAdjustedLdAakultaLoot*50) / ((attackStat/100) + 1))

const [adjustedLdNoanzaLootWC, SetAdjustedNoanzaLdLootWC] = useState (0);
const calculateAdjustedLdNoanzaLootWC = {totalLdLootingNoanza, attackStat}
const totalAdjustedLdNoanzaLootWC = Math.round ((totalLdLootingNoanza*50) / ((attackStat/100) + 1))

//CALC NOANZA + KIRERF //

//CALC NOANZA + GLIVA //

//wild idea time //

const [groupWC, setGroupWC] = useState(0);
const calculateGroupWC = {totalAakultaWC, totalArdidWCLoot, totalAscreWCLoot, totalDustWignowWCLoot, totalXaeyWCLoot}
const totalGroupWC = (totalAakultaWC + totalArdidWCLoot + totalAscreWCLoot + totalDustWignowWCLoot + totalXaeyWCLoot)

const [ldNoanWC, setLdNoanWC] = useState(0);
const calculateLdNoanWC = {totalNoanzaWC, totalAdjustedLdNoanzaLootWC}
const totalLdNoanWC = (totalNoanzaWC + totalAdjustedLdNoanzaLootWC)

const [ldAakWC, setLdAakWC] = useState(0);
const calculateLdAakWC = {totalAakultaWC, totalAdjustedLdAakultaLootWC}
const totalLdAakWC = (totalAakultaWC + totalAdjustedLdAakultaLootWC)


//Total WC Noanza + Gliva//

const calculateNoanzaGlivaWCResult = {totalXaeyWCLoot, totalDustWignowWCLoot, totalAscreWCLoot,  totalAdjustedLdNoanzaLootWC, totalNoanzaWC, totalGlivaWCLoot}
const totalNoanzaGlivaWCResult = (totalXaeyWCLoot + totalDustWignowWCLoot + totalAscreWCLoot +  totalAdjustedLdNoanzaLootWC + totalNoanzaWC + totalGlivaWCLoot)

const calculateNoanzaKirerfWCResult = {totalXaeyWCLoot, totalDustWignowWCLoot, totalAscreWCLoot,  totalAdjustedLdNoanzaLootWC, totalNoanzaWC, totalKirerfWCLoot}
const totalNoanzaKirerfWCResult = (totalXaeyWCLoot + totalDustWignowWCLoot + totalAscreWCLoot +  totalAdjustedLdNoanzaLootWC + totalNoanzaWC  + totalKirerfWCLoot)

const calculateAakultaGlivaWCResult = {totalXaeyWCLoot, totalDustWignowWCLoot, totalAscreWCLoot,  totalAdjustedLdAakultaLootWC, totalAakultaWC, totalGlivaWCLoot}
const totalAakultaGlivaWCResult = (totalXaeyWCLoot + totalDustWignowWCLoot + totalAscreWCLoot +  totalAdjustedLdAakultaLootWC + totalAakultaWC + totalGlivaWCLoot)

const calculateAakultaKirerfWCResult = {totalXaeyWCLoot, totalDustWignowWCLoot, totalAscreWCLoot,  totalAdjustedLdAakultaLootWC, totalAakultaWC, totalKirerfWCLoot}
const totalAakultaKirerfWCResult = (totalXaeyWCLoot + totalDustWignowWCLoot + totalAscreWCLoot +  totalAdjustedLdAakultaLootWC + totalAakultaWC + totalKirerfWCLoot)

const calculateFgCraftingGlivaWCResult = {totalXaeyWCCraft, totalDustWignowWCCraft, totalAscreWCCraft, totalArluziWCCraft, totalArdidWCCraft, totalGlivaWCLoot}
const totalFgCraftingGlivaWCResult = (totalXaeyWCCraft + totalDustWignowWCCraft + totalAscreWCCraft + totalArluziWCCraft + totalArdidWCCraft + totalGlivaWCLoot)

const calculateFgCraftingKirerfWCResult = {totalXaeyWCCraft, totalDustWignowWCCraft, totalAscreWCCraft, totalArluziWCCraft, totalArdidWCCraft, totalKirerfWCLoot}
const totalFgCraftingKirerfWCResult = (totalXaeyWCCraft + totalDustWignowWCCraft + totalAscreWCCraft + totalArluziWCCraft + totalArdidWCCraft + totalKirerfWCLoot)

//format the WC #s//
//NOANZA//
        const number = totalNoanzaGlivaWCResult;
        const USformatter = new Intl.NumberFormat("en-US");
        const NoanzaGlivaWC = USformatter.format(number);

        const number1 = totalNoanzaKirerfWCResult;
        const NoanzaKirerfWC = USformatter.format(number1)
      
        const number2 = totalAakultaGlivaWCResult;
        const AakultaGlivaWC = USformatter.format(number2);

        const number3 = totalAakultaKirerfWCResult;
        const AakultaKirerfWC = USformatter.format(number3)

        const number4 = totalFgCraftingGlivaWCResult;
        const CraftingGlivaWC = USformatter.format(number4);

        const number5 = totalFgCraftingKirerfWCResult;
        const CraftingKirerfWC = USformatter.format(number5)


//assorted other mats -- essence up above//

//coins//

const [coins, setCoins] = useState(0);

const calculateCoins = {coinsAakhelResult, coinsClibooResult, coinsCrehelResult, 
                        coinsFuscroResult, coinsFuscuiResult, coinsFusswoResult, 
                        coinsHopligResult, coinsLeacuiResult, coinsLeaturResult,
                        coinsLigbloResult, coinsPoepicResult, coinsFlosliResult}
const totalCoins = (coinsAakhelResult + coinsClibooResult + coinsCrehelResult + 
  coinsFuscroResult + coinsFuscuiResult + coinsFusswoResult + 
  coinsHopligResult + coinsLeacuiResult + coinsLeaturResult +
  coinsLigbloResult + coinsPoepicResult + coinsFlosliResult)

//fine fabric//

const [finefabric, setFinefabric] = useState(0);

const calculateFinefabric = {finefabricFuscuiResult, finefabricLeacuiResult, finefabricLeaturResult}
const totalFinefabric = (finefabricFuscuiResult + finefabricLeacuiResult + finefabricLeaturResult)

//gold//

const [gold, setGold] = useState(0);

const calculateGold = {goldAakhelResult, goldFusswoResult, goldLigbloResult}
const totalGold = (goldAakhelResult + goldFusswoResult + goldLigbloResult)

//hardwood//

const [hardwood, setHardwood] = useState(0);

const calculateHardwood = {hardwoodFuscroResult, hardwoodPoepicResult, coinsFlosliResult}
const totalHardwood = (hardwoodFuscroResult + hardwoodPoepicResult + hardwoodFlosliResult)

//leather roll/

const [leatherroll, setLeatherroll] = useState(0);

const calculateLeatherroll = {leatherrollClibooResult, leatherrollLeacuiResult, leatherrollLeaturResult, leatherrollFlosliResult}
const totalLeatherroll = (leatherrollClibooResult + leatherrollLeacuiResult + leatherrollLeaturResult + leatherrollFlosliResult)

//reinforced rope//

const [reinforcedrope, setReinforcedrope] = useState(0);

const calculateReinforcedrope = {reinforcedropeFlosliResult, reinforcedropeFuscroResult}
const totalReinforcedrope = (reinforcedropeFlosliResult + reinforcedropeFuscroResult)

//steel//

const [steel, setSteel] = useState(0);

const calculateSteel = {steelAakhelResult, steelClibooResult, steelCrehelResult,
                    	steelFuscroResult, steelFuscuiResult, steelFusswoResult,
                    	steelHopligResult, steelLeacuiResult, steelPoepicResult}
const totalSteel = (steelAakhelResult + steelClibooResult + steelCrehelResult +
  steelFuscroResult + steelFuscuiResult + steelFusswoResult +
  steelHopligResult + steelLeacuiResult + steelPoepicResult)



// END OF EQUATIONS SO FAR//

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh">
          <VStack spacing={8}>
            <Heading pt={3}>City of Light</Heading>
            <Container><p>This page calculates what monsters you need for City of Light materials and battle items, based on average loot drops.
              <br></br><br></br>
              Fusion Glass and Mushroom sources <i>must</i> be selected for the page to work, but your attack stat is optional.</p>
            <br></br>
            
            <Divider />
            <br></br>
            <p><b>Accessibility Notes:</b>
              <br></br>
             - you can open and close the lists of craft materials and battle items without losing any data</p>
              <br></br>
              - this page is fully keyboard navigable, including using Enter to select buttons or open collapsed menus
            </Container>
            <Container><Divider></Divider></Container>

<VStack>
<Heading>4theMath:</Heading>
<Spacer></Spacer>
<Container>Your Attack Stat</Container>
<NumberInput defaultValue={0} min={0} max={9999} size='md'>
<NumberInputField id='atk' onInput={(e) => handleAttackStatChange(e.target.value)} />
</NumberInput>
</VStack>
            <HStack><text>Select source for</text> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1f/FusionGlass.png '
        alt='Fusion Glass'
        mr='0px'
      /><text><b>Fusion Glass</b></text>
         Source:</HStack>
        <Container><Wrap justify='center'>
        <WrapItem>
        <Button variant='outline' onClick={handleNoanzaClick} style={{ backgroundColor: noanzaActive ? "#434ea0" : "transparent" }}>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/df/Noanza.png'
        alt='Noanza'
        mr='12px'
      />
      <span>Noanza</span></Button>
      </WrapItem>
      <WrapItem>
        <Button variant='outline' onClick= {handleAakultaClick} style={{ backgroundColor: aakultaActive ? "#434ea0" : "transparent" }}>      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/59/Aakulta.png'
        alt='Aakulta'
        mr='12px'
      />
      <span>Aakulta</span></Button></WrapItem>
      <WrapItem>
        <Button  variant='outline' onClick={handleFgCraftingClick} style={{ backgroundColor: fgCraftingActive ? "#434ea0" : "transparent" }}>Crafting</Button>
        </WrapItem>
        </Wrap></Container>
        <HStack><text>Select source for</text> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/72/Cave-mushroom.png'
        alt='Mushrooms'
        mr='0px'
      /><text><b>Mushrooms</b></text>
         Source:</HStack>
        
        {NoanzaIsShown &&  <Container><Wrap justify='center'>
        <Button  variant='outline' onClick={handleNoanzaKirerfClick}  style={{ backgroundColor: noanzaKirerfActive ? "#2C7A7B" : "transparent" }}>      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a6/Kirerf.png'
        alt='Kirerf'
        mr='12px'
      />
      <text>Kirerf</text></Button>
        <Button  variant='outline' onClick={handleNoanzaGlivaClick}  style={{ backgroundColor: noanzaGlivaActive ? "#2C7A7B" : "transparent" }}>      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/15/Gliva.png'
        alt='Gliva'
        mr='12px'
      />
      <text>Gliva</text></Button>
        </Wrap></Container>}

        {AakultaIsShown &&  <Container><Wrap justify='center'>
        <Button  variant='outline' onClick={handleAakultaKirerfClick}  style={{ backgroundColor: aakultaKirerfActive ? "#2C7A7B" : "transparent" }}>      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a6/Kirerf.png'
        alt='Kirerf'
        mr='12px'
      />
      <text>Kirerf</text></Button>
        <Button  variant='outline' onClick={handleAakultaGlivaClick}  style={{ backgroundColor: aakultaGlivaActive ? "#2C7A7B" : "transparent" }}>      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/15/Gliva.png'
        alt='Gliva'
        mr='12px'
      />
      <text>Gliva</text></Button>
        </Wrap></Container>}

        {FgCraftingIsShown &&  <Container><Wrap justify='center'>
        <Button  variant='outline' onClick={handleCraftingKirerfClick}  style={{ backgroundColor: craftingKirerfActive ? "#2C7A7B" : "transparent" }}>      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a6/Kirerf.png'
        alt='Kirerf'
        mr='12px'
      />
      <text>Kirerf</text></Button>
        <Button  variant='outline' onClick={handleCraftingGlivaClick}  style={{ backgroundColor: craftingGlivaActive ? "#2C7A7B" : "transparent" }}>      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/15/Gliva.png'
        alt='Gliva'
        mr='12px'
      />
      <text>Gliva</text></Button>
        </Wrap></Container>}

<Accordion allowMultiple>
  <AccordionItem>
  <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='center' p={3}>
        <Heading as='h3' size='lg'>Craft Materials Needed</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Box as="span" flex='1'>
        <HStack justify='center'>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e7/DustRepellentElixir.png'
        alt='Dust-Repellent Elixir'
        mr='0px'
      /><text>Dust-Repellent Elixir</text>
        </HStack>
        </Box>
      <Box>
      <HStack justify='center'>
      <VStack>
      <text>Need:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
        <NumberInputField id='dreN' onInput={(e) => handleDreNChange(e.target.value)} />
</NumberInput>
      </VStack>
      <spacer></spacer>
      <VStack>
      <text>Have:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
  <NumberInputField id='dreH' onInput={(e) => handleDreHChange(e.target.value)} />
</NumberInput>
      </VStack>
        </HStack>
      </Box>
      <br></br>
      <Divider />
      <br></br>
      <Box as="span" flex='1'>
        <HStack justify='center'>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1f/FusionGlass.png'
        alt='Fusion Glass'
        mr='0px'
      /><text>Fusion Glass</text>
        </HStack>
        </Box>
      <Box>
      <HStack justify='center'>
      <VStack>
      <text>Need:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
        <NumberInputField id='FgN' onInput={(e) => handleFgNChange(e.target.value)} />
</NumberInput>
      </VStack>
      <spacer></spacer>
      <VStack>
      <text>Have:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
<NumberInputField id='FgH' onInput={(e) => handleFgHChange(e.target.value)} />
</NumberInput>
      </VStack>
        </HStack>
      </Box>
      <br></br>
      <Divider />
      <br></br>


      <Box as="span" flex='1'>
        <HStack justify='center'>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/91/LightenedDust.png'
        alt='Lightened Dust'
        mr='0px'
      /><text>Lightened Dust</text>
        </HStack>
        </Box>
      <Box>
      <HStack justify='center'>
      <VStack>
      <text>Need:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
        <NumberInputField id='LdN' onInput={(e) => handleLdNChange(e.target.value)} />
</NumberInput>
      </VStack>
      <spacer></spacer>
      <VStack>
      <text>Have:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
        <NumberInputField id='LdH' onInput={(e) => handleLdHChange(e.target.value)} />
</NumberInput>
      </VStack>
        </HStack>
      </Box>
      <br></br>
      <Divider />
      <br></br>

      <Box as="span" flex='1'>
        <HStack justify='center'>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e2/Refined-dust.png'
        alt='Refined Dust'
        mr='0px'
      /><text>Refined Dust</text>
        </HStack>
        </Box>
      <Box>
      <HStack justify='center'>
      <VStack>
      <text>Need:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
        <NumberInputField id='RdN' onInput={(e) => handleRdNChange(e.target.value)} />
</NumberInput>
      </VStack>
      <spacer></spacer>
      <VStack>
      <text>Have:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
        <NumberInputField id='RdH' onInput={(e) => handleRdHChange(e.target.value)} />
</NumberInput>      </VStack>
        </HStack>
      </Box>
      <br></br>
      <Divider />
      <br></br>


      <Box as="span" flex='1'>
        <HStack justify='center'>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b3/Dust_md.png'
        alt='Dust'
        mr='0px'
      /><text>Dust</text>
        </HStack>
        </Box>
      <Box>
      <HStack justify='center'>
      <VStack>
      <text>Need:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
        <NumberInputField id='DustN' onInput={(e) => handleDustNChange(e.target.value)} />
</NumberInput>      </VStack>
      <spacer></spacer>
      <VStack>
      <text>Have:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
        <NumberInputField id='DustH' onInput={(e) => handleDustHChange(e.target.value)} />
</NumberInput>      </VStack>
        </HStack>
      </Box>
      <br></br>
      <Divider />
      <br></br>

      <Box as="span" flex='1'>
        <HStack justify='center'>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/19/Wignowessence_md.png'
        alt='Essence'
        mr='0px'
      /><text>Essence</text>
        </HStack>
        </Box>
      <Box>
      <HStack justify='center'>
      <VStack>
      <text>Need:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
        <NumberInputField id='EssN' onInput={(e) => handleEssNChange(e.target.value)} />
</NumberInput>
      </VStack>
      <spacer></spacer>
      <VStack>
      <text>Have:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
        <NumberInputField id='EssH' onInput={(e) => handleEssHChange(e.target.value)} />
</NumberInput>
      </VStack>
        </HStack>
      </Box>
      <br></br>
      <Divider />
      <br></br>

      <Box as="span" flex='1'>
        <HStack justify='center'>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/72/Cave-mushroom.png'
        alt='Mushroom'
        mr='0px'
      /><text>Mushroom</text>
        </HStack>
        </Box>
      <Box>
      <HStack justify='center'>
      <VStack>
      <text>Need:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
        <NumberInputField id='MushN' onInput={(e) => handleMushNChange(e.target.value)} />
</NumberInput>
      </VStack>
      <spacer></spacer>
      <VStack>
      <text>Have:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
        <NumberInputField id='MushH' onInput={(e) => handleMushHChange(e.target.value)} />
</NumberInput>      </VStack>
        </HStack>
      </Box>
      <br></br>
      <Divider />
      <br></br>

      <Box as="span" flex='1'>
        <HStack justify='center'>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/d8/Dark-forest-leaves.png'
        alt='Dark Forest Leaves'
        mr='0px'
      /><text>Dark Forest Leaves</text>
        </HStack>
        </Box>
      <Box>
      <HStack justify='center'>
      <VStack>
      <text>Need:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
        <NumberInputField id='DflN' onInput={(e) => handleDflNChange(e.target.value)} />
</NumberInput>      
</VStack>
      <spacer></spacer>
      <VStack>
      <text>Have:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
        <NumberInputField id='DflH' onInput={(e) => handleDflHChange(e.target.value)} />
</NumberInput>
      </VStack>
        </HStack>
      </Box>
      <br></br>
      <Divider />
      <br></br>

      <Box as="span" flex='1'>
        <HStack justify='center'>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5e/Bones.png/'
        alt='Bones'
        mr='0px'
      /><text>Bones</text>
        </HStack>
        </Box>
      <Box>
      <HStack justify='center'>
      <VStack>
      <text>Need:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
        <NumberInputField id='BonesN' onInput={(e) => handleBonesNChange(e.target.value)} />
</NumberInput>
      </VStack>
      <spacer></spacer>
      <VStack>
      <text>Have:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
        <NumberInputField id='BonesH' onInput={(e) => handleBonesHChange(e.target.value)} />
</NumberInput>
      </VStack>
        </HStack>
      </Box>
      <br></br>
      <Divider />
      <br></br>


      <Box as="span" flex='1'>
        <HStack justify='center'>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/ad/Purple-crystal-shards.png'
        alt='Purple Crystal Shards'
        mr='0px'
      /><text>Purple Crystal Shards</text>
        </HStack>
        </Box>
      <Box>
      <HStack justify='center'>
      <VStack>
      <text>Need:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
        <NumberInputField id='PCSN' onInput={(e) => handlePCSNChange(e.target.value)} />
</NumberInput>
      </VStack>
      <spacer></spacer>
      <VStack>
      <text>Have:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
        <NumberInputField id='PCSH' onInput={(e) => handlePCSHChange(e.target.value)} />
</NumberInput>
      </VStack>
        </HStack>
      </Box>
      <br></br>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
  <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='center'  p={3}>
        <Heading as='h3' size='lg'>Battle Items Needed</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
       <Box as="span" flex='1'>
        <HStack justify='center'>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/07/AakultaHelmet.png'
        alt='Aakulta Helmet'
        mr='0px'
      /><text>Aakulta Helmet</text>
        </HStack>
        </Box>
      <Box>
      <HStack justify='center'>
      <VStack>
      <text>Need:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
        <NumberInputField id='AakhelN' onInput={(e) => handleAakhelNChange(e.target.value)} />
</NumberInput>
      </VStack>
      <spacer></spacer>
      <VStack>
      <text>Have:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
<NumberInputField id='AakhelH' onInput={(e) => handleAakhelHChange(e.target.value)} />
</NumberInput>
      </VStack>
        </HStack>
      </Box>
      <br></br>
      <Divider />
      <br></br>


      <Box as="span" flex='1'>
        <HStack justify='center'>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/7d/ClimbingBoots.png/'
        alt='Climbing Boots'
        mr='0px'
      /><text>Climbing Boots</text>        </HStack>
        </Box>
      <Box>
      <HStack justify='center'>
      <VStack>
      <text>Need:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
        <NumberInputField id='ClibooN' onInput={(e) => handleClibooNChange(e.target.value)} />
</NumberInput>
      </VStack>
      <spacer></spacer>
      <VStack>
      <text>Have:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
<NumberInputField id='ClibooH' onInput={(e) => handleClibooHChange(e.target.value)} />
</NumberInput> 
</VStack>
        </HStack>
      </Box>
      <br></br>
      <Divider />
      <br></br>

      <Box as="span" flex='1'>
      <HStack justify='center'>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f8/CrestedHelmet.png'
        alt='Crested Helmet'
        mr='0px'
      /><text>Crested Helmet</text>        
      </HStack>
        </Box>
      <Box>
      <HStack justify='center'>
      <VStack>
      <text>Need:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
      <NumberInputField id='CrehelN' onInput={(e) => handleCrehelNChange(e.target.value)} />
</NumberInput>
      </VStack>
      <spacer></spacer>
      <VStack>
      <text>Have:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
        <NumberInputField id='CrehelH' onInput={(e) => handleCrehelHChange(e.target.value)} />
</NumberInput>
      </VStack>
        </HStack>
      </Box>
      <br></br>
      <Divider />
      <br></br>

      <Box as="span" flex='1'>
        <HStack justify='center'>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b6/FlowerSlingshot.png/'
        alt='Flower Slingshot'
        mr='0px'
      /><text>Flower Slingshot</text>
      </HStack>
        </Box>
      <Box>
      <HStack justify='center'>
      <VStack>
      <text>Need:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
      <NumberInputField id='FlosliN' onInput={(e) => handleFlosliNChange(e.target.value)} />
</NumberInput>
      </VStack>
      <spacer></spacer>
      <VStack>
      <text>Have:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
        <NumberInputField id='FlosliH' onInput={(e) => handleFlosliHChange(e.target.value)} />
</NumberInput>
      </VStack>
        </HStack>
      </Box>
      <br></br>
      <Divider />
      <br></br>


      <Box as="span" flex='1'>
        <HStack justify='center'>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Fusion_Crossbow.png'
        alt='Fusion Crossbow'
        mr='0px'
      /><text>Fusion Crossbow</text>
        </HStack>
        </Box>
      <Box>
      <HStack justify='center'>
      <VStack>
      <text>Need:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
      <NumberInputField id='FuscroN' onInput={(e) => handleFuscroNChange(e.target.value)} />
</NumberInput>
      </VStack>
      <spacer></spacer>
      <VStack>
      <text>Have:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
        <NumberInputField id='FuscroH' onInput={(e) => handleFuscroHChange(e.target.value)} />
</NumberInput>
      </VStack>
        </HStack>
      </Box>
      <br></br>
      <Divider />
      <br></br>


      <Box as="span" flex='1'>
        <HStack justify='center'>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fa/FusionCuirass.png'
        alt='Fusion Cuirass'
        mr='0px'
      /><text>Fusion Cuirass</text>
        </HStack>
        </Box>
      <Box>
      <HStack justify='center'>
      <VStack>
      <text>Need:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
      <NumberInputField id='FuscuiN' onInput={(e) => handleFuscuiNChange(e.target.value)} />
</NumberInput>
      </VStack>
      <spacer></spacer>
      <VStack>
      <text>Have:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
        <NumberInputField id='FuscuiH' onInput={(e) => handleFuscuiHChange(e.target.value)} />
</NumberInput>
      </VStack>
        </HStack>
      </Box>
      <br></br>
      <Divider />
      <br></br>


      <Box as="span" flex='1'>
        <HStack justify='center'>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/c/c6/FusionSword.png'
        alt='Fusion Sword'
        mr='0px'
      /><text>Fusion Sword</text>
        </HStack>
        </Box>
      <Box>
      <HStack justify='center'>
      <VStack>
      <text>Need:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
        <NumberInputField id='FusswoN' onInput={(e) => handleFusswoNChange(e.target.value)} />
</NumberInput>
      </VStack>
      <spacer></spacer>
      <VStack>
      <text>Have:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
<NumberInputField id='FusswoH' onInput={(e) => handleFusswoHChange(e.target.value)} />
</NumberInput>
      </VStack>
        </HStack>
      </Box>
      <br></br>
      <Divider />
      <br></br>


      <Box as="span" flex='1'>
        <HStack justify='center'>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/3/3c/HopesLight.png'
        alt='Hopes Light'
        mr='0px'
      /><text>Hope's Light</text>
        </HStack>
        </Box>
      <Box>
      <HStack justify='center'>
      <VStack>
      <text>Need:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
        <NumberInputField id='HopligN' onInput={(e) => handleHopligNChange(e.target.value)} />
        </NumberInput>
      </VStack>
      <spacer></spacer>
      <VStack>
      <text>Have:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
<NumberInputField id='HopligH' onInput={(e) => handleHopligHChange(e.target.value)} />
</NumberInput>
      </VStack>
        </HStack>
      </Box>
      <br></br>
      <Divider />
      <br></br>

      <Box as="span" flex='1'>
        <HStack justify='center'>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/db/LeatherCuriass.png'
        alt='Leather Cuirass'
        mr='0px'
      /><text>Leather Cuirass</text>
        </HStack>
        </Box>
      <Box>
      <HStack justify='center'>
      <VStack>
      <text>Need:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
        <NumberInputField id='LeacuiN' onInput={(e) => handleLeacuiNChange(e.target.value)} />
</NumberInput>
      </VStack>
      <spacer></spacer>
      <VStack>
      <text>Have:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
<NumberInputField id='LeacuiH' onInput={(e) => handleLeacuiHChange(e.target.value)} />
</NumberInput>
      </VStack>
        </HStack>
      </Box>
      <br></br>
      <Divider />
      <br></br>

      <Box as="span" flex='1'>
        <HStack justify='center'>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f6/LeatherTurnshoe.png'
        alt='Leather Turnshoe'
        mr='0px'
      /><text>Leather Turnshoe</text>
        </HStack>
        </Box>
      <Box>
      <HStack justify='center'>
      <VStack>
      <text>Need:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
        <NumberInputField id='LeaturN' onInput={(e) => handleLeaturNChange(e.target.value)} />
</NumberInput>
      </VStack>
      <spacer></spacer>
      <VStack>
      <text>Have:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
<NumberInputField id='LeaturH' onInput={(e) => handleLeaturHChange(e.target.value)} />
</NumberInput>
      </VStack>
        </HStack>
      </Box>
      <br></br>
      <Divider />
      <br></br>

      <Box as="span" flex='1'>
        <HStack justify='center'>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a7/LightsBloom.png'
        alt='Lights Bloom'
        mr='0px'
      /><text>Light's Bloom</text>
        </HStack>
        </Box>
      <Box>
      <HStack justify='center'>
      <VStack>
      <text>Need:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
        <NumberInputField id='LigbloN' onInput={(e) => handleLigbloNChange(e.target.value)} />
</NumberInput>
      </VStack>
      <spacer></spacer>
      <VStack>
      <text>Have:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
<NumberInputField id='LigbloH' onInput={(e) => handleLigbloHChange(e.target.value)} />
</NumberInput>
      </VStack>
        </HStack>
      </Box>
      <br></br>
      <Divider />
      <br></br>

      <Box as="span" flex='1'>
        <HStack justify='center'>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f0/PoePick.png/'
        alt='Poe Pick'
        mr='0px'
      /><text>Poe Pick</text>
        </HStack>
        </Box>
      <Box>
      <HStack justify='center'>
      <VStack>
      <text>Need:</text>
<NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
        <NumberInputField id='PoepicN' onInput={(e) => handlePoepicNChange(e.target.value)} />
</NumberInput>
      </VStack>
      <spacer></spacer>
      <VStack>
      <text>Have:</text>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' maxW={20}>
<NumberInputField id='PoepicH' onInput={(e) => handlePoepicHChange(e.target.value)} />
</NumberInput>
      </VStack>
        </HStack>
      </Box>
      <br></br>
      <Divider />
      <br></br>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>
<Spacer></Spacer>
<Spacer></Spacer>
          </VStack>
<Divider />
<Container>
<br></br>
<Heading>Quick View</Heading>
<br></br>
<TableContainer>
  <Table align='center' variant='simple' colorScheme='teal' maxW={20}>
  <Tbody>
    <Tr>
<Td><Stat>
  <StatLabel>Total Word Count with Attack</StatLabel>
  <StatNumber>
  {NoanzaGlivaQtyIsShown && <text align='center'>{NoanzaGlivaWC}</text>}
  {NoanzaKirerfQtyIsShown && <text align='center'>{NoanzaKirerfWC}</text>}
  {AakultaGlivaQtyIsShown && <text align='center'>{AakultaGlivaWC}</text>}
  {AakultaKirerfQtyIsShown && <text align='center'>{AakultaKirerfWC}</text>}
  {CraftingGlivaQtyIsShown && <text align='center'>{CraftingGlivaWC}</text>}
  {CraftingKirerfQtyIsShown && <text align='center'>{CraftingKirerfWC}</text>}
  </StatNumber>
</Stat></Td></Tr>
</Tbody>
<Tfoot>
  {NoanzaGlivaQtyIsShown && <Text fontSize='sm' align='center'>calculated using Noanza and Gliva</Text>}
  {NoanzaKirerfQtyIsShown && <Text fontSize='sm' align='center'>calculated using Noanza and Kirerf</Text>}
  {AakultaGlivaQtyIsShown && <Text fontSize='sm' align='center'>calculated using Aakulta and Gliva</Text>}
  {AakultaKirerfQtyIsShown && <Text fontSize='sm' align='center'>calculated using Aakulta and Kirerf</Text>}
  {CraftingGlivaQtyIsShown && <Text fontSize='sm' align='center'>calculated using Crafting and Gliva</Text>}
  {CraftingKirerfQtyIsShown && <Text fontSize='sm' align='center'>calculated using Crafting and Kirerf</Text>}  
  </Tfoot>
</Table>
</TableContainer>
<br></br>
<Box as="span" flex='1' textAlign='center' padding-top={3}>
        <Text><b>Monsters to Fight</b></Text>
        </Box></Container>
<Container>
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
        src='https://static.wikia.nocookie.net/4thewords/images/5/59/Aakulta.png'
        alt='Aakulta'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Aakulta</Text>
      {SummaryNoanzaIsShown && <text align='center'>0</text>}
      {SummaryAakultaIsShown && <text align='center'>{totalAakultaQty}</text>}
      {SummaryFgCraftingIsShown && <text align='center'><text>0</text></text>}</VStack>
  </Box>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
        align='center'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/23/Ardid.png'
        alt='Ardid'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Ardid</Text>
      {SummaryNoanzaIsShown && <text align='center'>{totalArdidQtyLoot}</text>}
      {SummaryAakultaIsShown && <text align='center'>{totalArdidQtyLoot}</text>}
      {SummaryFgCraftingIsShown && <text  align='center'>{totalArdidQtyCraft}</text>}</VStack>
  </Box>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
       align='center'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/c/c5/Arluzi.png'
        alt='Arluzi'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Arluzi</Text>
      {SummaryNoanzaIsShown && <text align='center'>{totalLdLootingNoanza}</text>}
      {SummaryAakultaIsShown && <text align='center'>{totalAdjustedLdAakultaLoot}</text>}
      {SummaryFgCraftingIsShown && <text align='center'>{totalArluziQtyCraft}</text>}
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
        src='https://static.wikia.nocookie.net/4thewords/images/0/0d/Ascre.png'
        alt='Ascre'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Ascre</Text>
{SummaryNoanzaIsShown && <text align='center'>{totalAscreQtyLoot}</text>}
  	{SummaryAakultaIsShown && <text align='center'>{totalAscreQtyLoot}</text>}
  	{SummaryFgCraftingIsShown && <text align='center'>{totalAscreQtyCraft}</text>}
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
        src='https://static.wikia.nocookie.net/4thewords/images/7/7b/Dust_Wignow.png'
        alt='Dust Wignow'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Dust Wignow</Text>
 {SummaryNoanzaIsShown && <text align='center'>{totalDustWignowQtyLoot}</text>}
  	{SummaryAakultaIsShown && <text align='center'>{totalDustWignowQtyLoot}</text>}
  	{SummaryFgCraftingIsShown && <text align='center'>{totalDustWignowQtyCraft}</text>}</VStack>
  </Box>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
       align='center'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/15/Gliva.png'
        alt='Gliva'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Gliva</Text>
{NoanzaGlivaQtyIsShown && <text align='center'>{totalGlivaQtyLoot}</text>}
{NoanzaKirerfQtyIsShown && <text align='center'>0</text>}
{AakultaGlivaQtyIsShown && <text align='center'>{totalGlivaQtyLoot}</text>}
{AakultaKirerfQtyIsShown && <text align='center'>0</text>}
{CraftingGlivaQtyIsShown && <text align='center'>{totalGlivaQtyCrafting}</text>}
{CraftingKirerfQtyIsShown && <text align='center'>0</text>}
</VStack>
  </Box>
        </Td>
      </Tr>      <Tr>
        <Td>
        <Box justify='center' w='50px' h='100px'>
       <VStack> 
       <Image
       align='center'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a6/Kirerf.png'
        alt='Kirerf'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Kirerf</Text>
 {NoanzaKirerfQtyIsShown && <text align='center'>{totalKirerfQtyLoot}</text>}
 {NoanzaGlivaQtyIsShown && <text align='center'>0</text>}
 {AakultaKirerfQtyIsShown && <text align='center'>{totalKirerfQtyLoot}</text>}
 {AakultaGlivaQtyIsShown && <text align='center'>0</text>}</VStack>
 {CraftingGlivaQtyIsShown && <text align='center'>0</text>}
{CraftingKirerfQtyIsShown && <text align='center'>{totalKirerfQtyCrafting}</text>}
  </Box>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='100px'>
       <VStack> 
       <Image
       align='center'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/df/Noanza.png'
        alt='Noanza'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Noanza</Text>
{SummaryNoanzaIsShown && <text align='center'>{totalNoanzaQty}</text>}
      {SummaryAakultaIsShown && <text align='center'>0</text>}
      {SummaryFgCraftingIsShown && <text align='center'>0</text>}</VStack>
  </Box>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='100px'>
       <VStack> 
       <Image
       align='center'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/22/Xaey.png'
        alt='Xaey'
        mr='5px'
      /> <Text fontSize='lg' align='center'>Xaey</Text>  	
 {SummaryNoanzaIsShown && <text align='center' justify='center'>{totalXaeyQtyLoot}</text>}
  	{SummaryAakultaIsShown && <text align='center' justify='center'>{totalXaeyQtyLoot}</text>}
  	{SummaryFgCraftingIsShown && <text align='center' justify='center'>{totalXaeyQtyCraft}</text>}
        </VStack>
  </Box>
        </Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
<Container><br></br></Container>
        <Box as="span" flex='1' textAlign='center'>
        <Text><b>Materials to Loot</b></Text>
        </Box></Container>

<Container>
        <TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
    <Tbody>
      <Tr>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1f/FusionGlass.png'
        alt='Fusion Glass'
        mr='0px'
      />
      {SummaryNoanzaIsShown && <text align='center'>{totalAllFg}</text>}
      {SummaryAakultaIsShown && <text align='center'>{totalAllFg}</text>}
      {SummaryFgCraftingIsShown && <text align='center'>0</text>}</VStack>
  </Box>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        align='center'
        src='https://static.wikia.nocookie.net/4thewords/images/9/91/LightenedDust.png'
        alt='Lightened Dust'
        mr='0px'
      />      {SummaryNoanzaIsShown && <text align='center'>{totalLdLootingNoanza}</text>}
      {SummaryAakultaIsShown && <text align='center'>{totalLdLooting}</text>}
      {SummaryFgCraftingIsShown && <text align='center'>{totalLdCrafting}</text>}</VStack>
  </Box>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e2/Refined-dust.png'
        alt='Refined Dust'
        mr='0px'
      />
      {SummaryNoanzaIsShown && <text align='center'>{totalRdLooting}</text>}
      {SummaryAakultaIsShown && <text align='center'>{totalRdLooting}</text>}
      {SummaryFgCraftingIsShown && <text align='center'>{totalRdCrafting}</text>}
      </VStack>
  </Box>
        </Td>
      </Tr>
      <Tr>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b3/Dust_md.png'
        alt='Dust'
        mr='0px'
      />
  	{SummaryNoanzaIsShown && <text align='center'>{totalDuLooting}</text>}
  	{SummaryAakultaIsShown && <text align='center'>{totalDuLooting}</text>}
  	{SummaryFgCraftingIsShown && <text align='center'>{totalDuCrafting}</text>}
</VStack>
  </Box>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/19/Wignowessence_md.png'
        alt='Essence'
        mr='0px'
      />  	{SummaryNoanzaIsShown && <text align='center'>{totalDustWignowQtyLoot}</text>}
      {SummaryAakultaIsShown && <text align='center'>{totalDustWignowQtyLoot}</text>}
      {SummaryFgCraftingIsShown && <text align='center'>{totalDustWignowQtyCraft}</text>}</VStack>
  </Box>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/72/Cave-mushroom.png'
        alt='Mushrooms'
        mr='0px'
      />  	{MushNoanzaIsShown && <text align='center'>{totalMushLooting}</text>}
      {MushAakultaIsShown && <text align='center'>{totalMushLooting}</text>}
      {MushFgCraftingIsShown && <text align='center'>{totalMushCrafting}</text>}</VStack>
  </Box>
        </Td>
      </Tr>      <Tr>
        <Td>
        <Box justify='center' w='50px' h='60px'>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/d8/Dark-forest-leaves.png'
        alt='Dark Forest Leaves'
        mr='0px'
      />  	{SummaryNoanzaIsShown && <text align='center'>{totalDflLooting}</text>}
      {SummaryAakultaIsShown && <text align='center'>{totalDflLooting}</text>}
      {SummaryFgCraftingIsShown && <text align='center'>{totalDflCrafting}</text>}</VStack>
  </Box>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px'>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5e/Bones.png/'
        alt='Bones'
        mr='0px'
      />  	{SummaryNoanzaIsShown && <text align='center'>{totalBonesLooting}</text>}
      {SummaryAakultaIsShown && <text align='center'>{totalBonesLooting}</text>}
      {SummaryFgCraftingIsShown && <text align='center'>{totalBonesCrafting}</text>}</VStack>
  </Box>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px'>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/ad/Purple-crystal-shards.png/'
        alt='Purple Crystal Shards'
        mr='0px'
      />  	<Container>  	
      	{SummaryNoanzaIsShown && <text align='center'>{totalPcsLooting}</text>}
        {SummaryAakultaIsShown && <text align='center'>{totalPcsLooting}</text>}
        {SummaryFgCraftingIsShown && <text align='center'>{totalPcsCrafting}</text>}
        </Container></VStack>
  </Box>
        </Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer></Container>
<Container><br></br></Container>
<Container> <Box as="span" flex='1' textAlign='center'>
        <Text pt={3}><b>Materials to Craft:</b></Text>
        </Box>
        <TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
    <Tbody>
      <Tr>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
       <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e7/DustRepellentElixir.png'
        alt='Dust-Repellent Elixir'
        mr='0px'/>
{SummaryNoanzaIsShown && <text align='center'>{totalAllDre}</text>}
      {SummaryAakultaIsShown && <text align='center'>{totalAllDre}</text>}
      {SummaryFgCraftingIsShown && <text align='center'>{totalDreFgCrafting}</text>}</VStack>
  </Box>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
       <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1f/FusionGlass.png'
        alt='Fusion Glass'
        mr='0px'
      />      
      {SummaryNoanzaIsShown && <text align='center'><text>0</text></text>}
      {SummaryAakultaIsShown && <text align='center'><text>0</text></text>}
      {SummaryFgCraftingIsShown && <text align='center'>{totalAllFg}</text>}
      </VStack>
  </Box>
        </Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
</Container>
<Container><br></br></Container>
<Container> <Box as="span" flex='1' textAlign='center'>
        <Text pt={3}><b>Miscellaneous Materials Needed:</b></Text>
        </Box>
        <TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
    <Tbody>
      <Tr>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        alt='Coins'
        mr='0px'
      />  	{SummaryNoanzaIsShown && <text align='center'>{totalCoins}</text>}
      {SummaryAakultaIsShown && <text align='center'>{totalCoins}</text>}
      {SummaryFgCraftingIsShown && <text align='center'>{totalCoins}</text>}</VStack>
  </Box>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/19/Wignowessence_md.png'
        alt='Essence'
        mr='0px'
      />  	{SummaryNoanzaIsShown && <text align='center'>{totalEssOverlapLoot}</text>}
      {SummaryAakultaIsShown && <text align='center'>{totalEssOverlapLoot}</text>}
      {SummaryFgCraftingIsShown && <text align='center'>{totalEssOverlapCraft}</text>}</VStack>
  </Box>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
       <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/0b/Finefabric_md.png'
        alt='Fine Fabric'
        mr='0px'
      />      
      {SummaryNoanzaIsShown && <text align='center'>{totalFinefabric}</text>}
      {SummaryAakultaIsShown && <text align='center'>{totalFinefabric}</text>}
      {SummaryFgCraftingIsShown && <text align='center'>{totalFinefabric}</text>}
      </VStack>
  </Box>
        </Td>
      </Tr>
      <Tr>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/87/Gold_md.png/'
        alt='Gold'
        mr='0px'
      />  	{SummaryNoanzaIsShown && <text align='center'>{totalGold}</text>}
      {SummaryAakultaIsShown && <text align='center'>{totalGold}</text>}
      {SummaryFgCraftingIsShown && <text align='center'>{totalGold}</text>}</VStack>
  </Box>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/0c/Hardwood_md.png'
        alt='Hardwood'
        mr='0px'
      />  	{SummaryNoanzaIsShown && <text align='center'>{totalHardwood}</text>}
      {SummaryAakultaIsShown && <text align='center'>{totalHardwood}</text>}
      {SummaryFgCraftingIsShown && <text align='center'>{totalHardwood}</text>}</VStack>
  </Box>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
       <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/99/Leatherroll_md.png'
        alt='Leather Roll'
        mr='0px'
      />      
      {SummaryNoanzaIsShown && <text align='center'>{totalLeatherroll}</text>}
      {SummaryAakultaIsShown && <text align='center'>{totalLeatherroll}</text>}
      {SummaryFgCraftingIsShown && <text align='center'>{totalLeatherroll}</text>}
      </VStack>
  </Box>
        </Td>
      </Tr>
      </Tbody>
      </Table></TableContainer>

      <TableContainer>
  <Table variant='unstyled' maxW={20} align='center'>
    <Tbody>
      <Tr>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
       <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/47/Reinforced-rope.png/'
        alt='Reinforced Rope'
        mr='0px'/>
{SummaryNoanzaIsShown && <text align='center'>{totalReinforcedrope}</text>}
      {SummaryAakultaIsShown && <text align='center'>{totalReinforcedrope}</text>}
      {SummaryFgCraftingIsShown && <text align='center'>{totalReinforcedrope}</text>}</VStack>
  </Box>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
       <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png'
        alt='Steel'
        mr='0px'
      />      
      {SummaryNoanzaIsShown && <text align='center'>{totalSteel}</text>}
      {SummaryAakultaIsShown && <text align='center'>{totalSteel}</text>}
      {SummaryFgCraftingIsShown && <text align='center'>{totalSteel}</text>}
      </VStack>
  </Box>
        </Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>

<br></br>
</Container>

<Divider />
<Container><br></br>
<br></br></Container>
<Heading>Detailed Results</Heading>
<Container><br></br>
<br></br></Container>
<TableContainer>
  <Table variant='striped' align='center' colorScheme='teal' maxW={10}>
    <Thead>
      <Tr>
        <Th>Monster</Th>
        <Th>Qty</Th>
        <Th>Total WC</Th>
      </Tr>
    </Thead>
    <Tbody>
    <Tr>
      <Td><VStack>
        <Image
        align='center'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/59/Aakulta.png'
        alt='Aakulta'
        mr='5px'
      /> <Text>Aakulta</Text>
        </VStack>
</Td>
<Td isNumeric>        {SummaryNoanzaIsShown && <Container>0</Container>}
      {SummaryAakultaIsShown && <Container>{totalAakultaQty}</Container>}
      {SummaryFgCraftingIsShown && <Container>0</Container>}</Td>
        <Td isNumeric>
        {SummaryNoanzaIsShown && <Container><text>0</text></Container>}
      {SummaryAakultaIsShown && <Container>{totalAakultaWC}</Container>}
      {SummaryFgCraftingIsShown && <Container><text>0</text></Container>}
          </Td>
      </Tr>
      <Tr>
      <Td><VStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/23/Ardid.png'
        alt='Ardid'
        mr='5px'
      /> <text>Ardid</text>
        </VStack>
</Td>
      <Td isNumeric>
      {SummaryNoanzaIsShown && <Container>{totalArdidQtyLoot}</Container>}
      {SummaryAakultaIsShown && <Container>{totalArdidQtyLoot}</Container>}
      {SummaryFgCraftingIsShown && <Container>{totalArdidQtyCraft}</Container>}
        </Td>
        <Td isNumeric>
        {SummaryNoanzaIsShown && <Container>{totalArdidWCLoot}</Container>}
      {SummaryAakultaIsShown && <Container>{totalArdidWCLoot}</Container>}
      {SummaryFgCraftingIsShown && <Container>{totalArdidWCCraft}</Container>}
          </Td>
      </Tr>
      <Tr>
      <Td><VStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/c/c5/Arluzi.png'
        alt='Arluzi'
        mr='5px'
      /> <text>Arluzi</text>
        </VStack>
</Td>
      <Td isNumeric>        {SummaryNoanzaIsShown && <Container>{totalLdLootingNoanza}</Container>}
      {SummaryAakultaIsShown && <Container>{totalAdjustedLdAakultaLoot}</Container>}
      {SummaryFgCraftingIsShown && <Container>{totalArluziQtyCraft}</Container>}</Td>
        <Td isNumeric>{SummaryNoanzaIsShown && <Container>{totalAdjustedLdNoanzaLootWC}</Container>}
      {SummaryAakultaIsShown && <Container>{totalAdjustedLdAakultaLootWC}</Container>}
      {SummaryFgCraftingIsShown && <Container>{totalArluziWCCraft}</Container>}</Td>
      </Tr>
      <Tr>
      <Td><VStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/0d/Ascre.png'
        alt='Ascre'
        mr='5px'
      /> <text>Ascre</text>
        </VStack>
</Td>
      <Td isNumeric>{SummaryNoanzaIsShown && <Container>{totalAscreQtyLoot}</Container>}
  	{SummaryAakultaIsShown && <Container>{totalAscreQtyLoot}</Container>}
  	{SummaryFgCraftingIsShown && <Container>{totalAscreQtyCraft}</Container>}</Td>
        <Td isNumeric>{SummaryNoanzaIsShown && <Container>{totalAscreWCLoot}</Container>}
  	{SummaryAakultaIsShown && <Container>{totalAscreWCLoot}</Container>}
  	{SummaryFgCraftingIsShown && <Container>{totalAscreWCCraft}</Container>}
</Td>
      </Tr>
      <Tr>
      <Td><VStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/7b/Dust_Wignow.png'
        alt='Dust Wignow'
        mr='5px'
      /> <Text align='center'>Dust<br></br>Wignow</Text>
        </VStack>
</Td>
      <Td isNumeric>{SummaryNoanzaIsShown && <Container>{totalDustWignowQtyLoot}</Container>}
  	{SummaryAakultaIsShown && <Container>{totalDustWignowQtyLoot}</Container>}
  	{SummaryFgCraftingIsShown && <Container>{totalDustWignowQtyCraft}</Container>}</Td>
        <Td isNumeric>{SummaryNoanzaIsShown && <Container>{totalDustWignowWCLoot}</Container>}
  	{SummaryAakultaIsShown && <Container>{totalDustWignowWCLoot}</Container>}
  	{SummaryFgCraftingIsShown && <Container>{totalDustWignowWCCraft}</Container>}</Td>
      </Tr>
      <Tr>
      <Td><VStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/15/Gliva.png'
        alt='Gliva'
        mr='5px'
      /> <text>Gliva</text>
        </VStack>
</Td>
        <Td isNumeric>
        {NoanzaKirerfQtyIsShown && <Container>0</Container>}
        {NoanzaGlivaQtyIsShown && <Container>{totalGlivaQtyLoot}</Container>}
        {AakultaGlivaQtyIsShown && <Container>{totalGlivaQtyLoot}</Container>}
        {AakultaKirerfQtyIsShown && <Container>0</Container>}
        {CraftingGlivaQtyIsShown && <Container>{totalGlivaQtyCrafting}</Container>}
        {CraftingKirerfQtyIsShown && <Container>0</Container>}
        </Td>
        <Td isNumeric>
        {NoanzaKirerfQtyIsShown && <Container>0</Container>}
        {NoanzaGlivaQtyIsShown && <Container>{totalGlivaWCLoot}</Container>}
        {AakultaGlivaQtyIsShown && <Container>{totalGlivaWCLoot}</Container>}
        {AakultaKirerfQtyIsShown && <Container>0</Container>}
        {CraftingGlivaQtyIsShown && <Container>{totalGlivaWCCrafting}</Container>}
        {CraftingKirerfQtyIsShown && <Container>0</Container>}
        </Td>
      </Tr>
      <Tr>
      <Td><VStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a6/Kirerf.png'
        alt='Kirerf'
        mr='5px'
      /> <text>Kirerf</text>
        </VStack>
</Td>
<Td isNumeric> 
        {NoanzaKirerfQtyIsShown && <Container>{totalKirerfQtyLoot}</Container>}
        {NoanzaGlivaQtyIsShown && <Container>0</Container>}
        {AakultaGlivaQtyIsShown && <Container>{totalKirerfQtyLoot}</Container>}
        {AakultaKirerfQtyIsShown && <Container>0</Container>}
        {CraftingGlivaQtyIsShown && <Container>{totalKirerfQtyCrafting}</Container>}
        {CraftingKirerfQtyIsShown && <Container>0</Container>}
      </Td>
        <Td isNumeric>
        {NoanzaKirerfQtyIsShown && <Container>{totalKirerfWCLoot}</Container>}
        {NoanzaGlivaQtyIsShown && <Container>0</Container>}
        {AakultaGlivaQtyIsShown && <Container>{totalKirerfWCLoot}</Container>}
        {AakultaKirerfQtyIsShown && <Container>0</Container>}
        {CraftingGlivaQtyIsShown && <Container>{totalKirerfWCCrafting}</Container>}
        {CraftingKirerfQtyIsShown && <Container>0</Container>}
        </Td>
      </Tr>
      <Tr>
      <Td><VStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/df/Noanza.png'
        alt='Noanza'
        mr='5px'
      /> <text>Noanza</text>
        </VStack>
</Td>
      <Td isNumeric> {SummaryNoanzaIsShown && <Container>{totalNoanzaQty}</Container>}
      {SummaryAakultaIsShown && <Container>0</Container>}
      {SummaryFgCraftingIsShown && <Container><text>0</text></Container>}
</Td>
        <Td isNumeric>{SummaryNoanzaIsShown && <Container>{totalNoanzaWC}</Container>}
  	{SummaryAakultaIsShown && <Container><text>0</text></Container>}
  	{SummaryFgCraftingIsShown && <Container><text>0</text></Container>}</Td>
      </Tr>
      <Tr>
      <Td><VStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/22/Xaey.png'
        alt='Xaey'
        mr='5px'
      /> <text>Xaey</text>
        </VStack>
</Td>
      <Td isNumeric>{SummaryNoanzaIsShown && <Container>{totalXaeyQtyLoot}</Container>}
  	{SummaryAakultaIsShown && <Container>{totalXaeyQtyLoot}</Container>}
  	{SummaryFgCraftingIsShown && <Container>{totalXaeyQtyCraft}</Container>}</Td>
        <Td isNumeric>{SummaryNoanzaIsShown && <Container>{totalXaeyWCLoot}</Container>}
  	{SummaryAakultaIsShown && <Container>{totalXaeyWCLoot}</Container>}
  	{SummaryFgCraftingIsShown && <Container>{totalXaeyWCCraft}</Container>}</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
<Container><br></br>
<br></br></Container>

<Container>
<Center>
<Accordion allowMultiple w='300px'>
  <AccordionItem>
  <h2>
      <AccordionButton>
        <Box  as="span" flex='1' textAlign='center' p={3}>
        <Heading as='h3' size='lg'>Battle Items</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
<Container>
<Center>        
  <Box>
    <Center>
        <Image
        boxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/07/AakultaHelmet.png'
        alt='Aakulta Helmet'
        mr='0px'/>
        </Center>
       <Heading size='md'>{aakhelResult} Aakulta Helmet</Heading>
      <br></br>
      
      <HStack>
      <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1f/FusionGlass.png'
        alt='Fusion Glass'
        mr='0px'
      /> 
          {fgAakhelResult !== null && (
              <div>
                <p>{fgAakhelResult}</p>
              </div>
            )}</VStack>
        <Spacer />
        <VStack>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e7/DustRepellentElixir.png'
        alt='Dust-Repellent Elixir'
        mr='0px'
      /> 
           {dreAakhelResult !== null && (
              <div>
                <p>{dreAakhelResult}</p>
              </div>
            )}</VStack>
        <Spacer />
        <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png'
        alt='Steel'
        mr='0px'
      /> 
          {steelAakhelResult !== null && (
              <div>
                <p>{steelAakhelResult}</p>
              </div>
            )}</VStack>
        <Spacer />
        <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/87/Gold_md.png/'
        alt='Gold'
        mr='0px'
      /> 
          {goldAakhelResult !== null && (
              <div>
                <p>{goldAakhelResult}</p>
              </div>
            )}</VStack>
       <Spacer />     
      <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        alt='Coins'
        mr='0px'
      /> 
          {coinsAakhelResult !== null && (
              <div>
                <p>{coinsAakhelResult}</p>
              </div>
            )}</VStack>
      </HStack>
      <br></br>
        </Box>
        </Center>

<Divider />
<br></br>
</Container>


<Container>
<Center>        
  <Box>
    <Center>
        <Image
        boxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/7d/ClimbingBoots.png/'
        alt='Climbing Boots'
        mr='0px'/>
        </Center>
       <Heading size='md'>{clibooResult} Climbing Boots</Heading>
      <br></br>
      
      <HStack>
        <VStack>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e7/DustRepellentElixir.png'
        alt='Dust-Repellent Elixir'
        mr='0px'
      /> 
           {dreClibooResult !== null && (
              <div>
                <p>{dreClibooResult}</p>
              </div>
            )}</VStack>
        <Spacer />
        <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/99/Leatherroll_md.png'
        alt='Leather Roll'
        mr='0px'
      /> 
          {leatherrollClibooResult !== null && (
              <div>
                <p>{leatherrollClibooResult}</p>
              </div>
            )}</VStack>
        <Spacer />
        <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png'
        alt='Steel'
        mr='0px'
      /> 
          {steelClibooResult !== null && (
              <div>
                <p>{steelClibooResult}</p>
              </div>
            )}</VStack>
       <Spacer />     
      <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        alt='Coins'
        mr='0px'
      /> 
          {coinsClibooResult !== null && (
              <div>
                <p>{coinsClibooResult}</p>
              </div>
            )}</VStack>
      </HStack>
      <br></br>
        </Box>
        </Center>

<Divider />
<br></br>
</Container>

<Container>
<Center>        
  <Box>
    <Center>
        <Image
        boxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f8/CrestedHelmet.png'
        alt='Crested Helmet'
        mr='0px'/>
        </Center>
       <Heading size='md'>{crehelResult} Crested Helmet</Heading>
      <br></br>
      
      <HStack>
        <VStack>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1f/FusionGlass.png'
        alt='Fusion Glass'
        mr='0px'
      /> 
           {fgCrehelResult !== null && (
              <div>
                <p>{fgCrehelResult}</p>
              </div>
            )}</VStack>
        <Spacer />
        <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e7/DustRepellentElixir.png'
        alt='Dust-Repellent Elixir'
        mr='0px'
      /> 
          {dreCrehelResult !== null && (
              <div>
                <p>{dreCrehelResult}</p>
              </div>
            )}</VStack>
        <Spacer />
        <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png'
        alt='Steel'
        mr='0px'
      /> 
          {steelCrehelResult !== null && (
              <div>
                <p>{steelCrehelResult}</p>
              </div>
            )}</VStack>
       <Spacer />     
      <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        alt='Coins'
        mr='0px'
      /> 
          {coinsCrehelResult !== null && (
              <div>
                <p>{coinsCrehelResult}</p>
              </div>
            )}</VStack>
      </HStack>
      <br></br>
        </Box>
        </Center>

<Divider />
<br></br>
</Container>

<Container>
<Center>        
  <Box>
    <Center>
        <Image
        boxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b6/FlowerSlingshot.png/'
        alt='Flower Slingshot'
        mr='0px'/>
        </Center>
       <Heading size='md'>{flosliResult} Flower Slingshot</Heading>
      <br></br>
      
      <HStack>
        <VStack>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e7/DustRepellentElixir.png'
        alt='Dust-Repellent Elixir'
        mr='0px'
      /> 
           {dreFlosliResult !== null && (
              <div>
                <p>{dreFlosliResult}</p>
              </div>
            )}</VStack>
        <Spacer />
        <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/0c/Hardwood_md.png'
        alt='Hardwood'
        mr='0px'
      /> 
          {hardwoodFlosliResult !== null && (
              <div>
                <p>{hardwoodFlosliResult}</p>
              </div>
            )}</VStack>
        <Spacer />
        <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/47/Reinforced-rope.png/'
        alt='Reinforced Rope'
        mr='0px'
      /> 
          {reinforcedropeFlosliResult !== null && (
              <div>
                <p>{reinforcedropeFlosliResult}</p>
              </div>
            )}</VStack>
       <Spacer />     
       <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/99/Leatherroll_md.png'
        alt='Leather Roll'
        mr='0px'
      /> 
          {leatherrollFlosliResult !== null && (
              <div>
                <p>{leatherrollFlosliResult}</p>
              </div>
            )}</VStack>
       <Spacer />     
      <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        alt='Coins'
        mr='0px'
      /> 
          {coinsFlosliResult !== null && (
              <div>
                <p>{coinsFlosliResult}</p>
              </div>
            )}</VStack>
      </HStack>
      <br></br>
        </Box>
        </Center>

<Divider />
<br></br>
</Container>

<Container>
<Center>        
  <Box>
    <Center>
        <Image
        boxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Fusion_Crossbow.png'
        alt='Fusion Crossbow'
        mr='0px'/>
        </Center>
       <Heading size='md'>{fuscroResult} Fusion Crossbow</Heading>
      <br></br>
      
      <HStack>
      <VStack>
        <Image
        boxSize='1.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1f/FusionGlass.png'
        alt='Fusion Glass'
        mr='0px'
      /> 
           {fgFuscroResult !== null && (
              <div>
                <p>{fgFuscroResult}</p>
              </div>
            )}</VStack>
        <Spacer />
        <VStack>
        <Image
        boxSize='1.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e7/DustRepellentElixir.png'
        alt='Dust-Repellent Elixir'
        mr='0px'
      /> 
           {dreFuscroResult !== null && (
              <div>
                <p>{dreFuscroResult}</p>
              </div>
            )}</VStack>
        <Spacer />
        <VStack> 
        <Image
        boxSize='1.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/0c/Hardwood_md.png'
        alt='Hardwood'
        mr='0px'
      /> 
          {hardwoodFuscroResult !== null && (
              <div>
                <p>{hardwoodFuscroResult}</p>
              </div>
            )}</VStack>
        <VStack> 
        <Image
        boxSize='1.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/47/Reinforced-rope.png/'
        alt='Reinforced Rope'
        mr='0px'
      /> 
          {reinforcedropeFuscroResult !== null && (
              <div>
                <p>{reinforcedropeFuscroResult}</p>
              </div>
            )}</VStack>
       <Spacer />     
       <VStack> 
        <Image
        boxSize='1.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png'
        alt='Steel'
        mr='0px'
      /> 
          {steelFuscroResult !== null && (
              <div>
                <p>{steelFuscroResult}</p>
              </div>
            )}</VStack>
       <Spacer />     
      <VStack> 
        <Image
        boxSize='1.5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        alt='Coins'
        mr='0px'
      /> 
          {coinsFuscroResult !== null && (
              <div>
                <p>{coinsFuscroResult}</p>
              </div>
            )}</VStack>
      </HStack>
      <br></br>
        </Box>
        </Center>

<Divider />
<br></br>
</Container>


<Container>
<Center>        
  <Box>
    <Center>
        <Image
        boxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fa/FusionCuirass.png'
        alt='Fusion Cuirass'
        mr='0px'/>
        </Center>
       <Heading size='md'>{fuscuiResult} Fusion Cuirass</Heading>
      <br></br>
      
      <HStack>
        <VStack>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1f/FusionGlass.png'
        alt='Fusion Glass'
        mr='0px'
      /> 
           {fgFuscuiResult !== null && (
              <div>
                <p>{fgFuscuiResult}</p>
              </div>
            )}</VStack>
        <Spacer />
        <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e7/DustRepellentElixir.png'
        alt='Dust-Repellent Elixir'
        mr='0px'
      /> 
          {dreFuscuiResult !== null && (
              <div>
                <p>{dreFuscuiResult}</p>
              </div>
            )}</VStack>
        <Spacer />
        <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png'
        alt='Steel'
        mr='0px'
      /> 
          {steelFuscuiResult !== null && (
              <div>
                <p>{steelFuscuiResult}</p>
              </div>
            )}</VStack>
       <Spacer />     
       <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/0b/Finefabric_md.png'
        alt='Fine Fabric'
        mr='0px'
      /> 
          {finefabricFuscuiResult !== null && (
              <div>
                <p>{finefabricFuscuiResult}</p>
              </div>
            )}</VStack>
       <Spacer />     
      <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        alt='Coins'
        mr='0px'
      /> 
          {coinsFuscuiResult !== null && (
              <div>
                <p>{coinsFuscuiResult}</p>
              </div>
            )}</VStack>
      </HStack>
      <br></br>
        </Box>
        </Center>

<Divider />
<br></br>
</Container>


<Container>
<Center>        
  <Box>
    <Center>
        <Image
        boxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/c/c6/FusionSword.png'
        alt='Fusion Sword'
        mr='0px'/>
        </Center>
       <Heading size='md'>{fusswoResult} Fusion Sword</Heading>
      <br></br>
      
      <HStack>
        <VStack>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1f/FusionGlass.png'
        alt='Fusion Glass'
        mr='0px'
      /> 
           {fgFusswoResult !== null && (
              <div>
                <p>{fgFusswoResult}</p>
              </div>
            )}</VStack>
        <Spacer />
        <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e7/DustRepellentElixir.png'
        alt='Dust-Repellent Elixir'
        mr='0px'
      /> 
          {dreFusswoResult !== null && (
              <div>
                <p>{dreFusswoResult}</p>
              </div>
            )}</VStack>
        <Spacer />
        <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png'
        alt='Steel'
        mr='0px'
      /> 
          {steelFusswoResult !== null && (
              <div>
                <p>{steelFusswoResult}</p>
              </div>
            )}</VStack>
       <Spacer />     
       <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/87/Gold_md.png/'
        alt='Gold'
        mr='0px'
      /> 
          {goldFusswoResult !== null && (
              <div>
                <p>{goldFusswoResult}</p>
              </div>
            )}</VStack>
       <Spacer />     
      <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        alt='Coins'
        mr='0px'
      /> 
          {coinsFusswoResult !== null && (
              <div>
                <p>{coinsFusswoResult}</p>
              </div>
            )}</VStack>
      </HStack>
      <br></br>
        </Box>
        </Center>

<Divider />
<br></br>
</Container>

<Container>
<Center>        
  <Box>
    <Center>
        <Image
        boxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/3/3c/HopesLight.png'
        alt='Hopes Light'
        mr='0px'/>
        </Center>
       <Heading size='md'>{hopligResult} Hope's Light</Heading>
      <br></br>
      
      <HStack>
        <VStack>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1f/FusionGlass.png'
        alt='Fusion Glass'
        mr='0px'
      /> 
           {fgHopligResult !== null && (
              <div>
                <p>{fgHopligResult}</p>
              </div>
            )}</VStack>
        <Spacer />
        <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e7/DustRepellentElixir.png'
        alt='Dust-Repellent Elixir'
        mr='0px'
      /> 
          {dreHopligResult !== null && (
              <div>
                <p>{dreHopligResult}</p>
              </div>
            )}</VStack>
        <Spacer />
        <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png'
        alt='Steel'
        mr='0px'
      /> 
          {steelHopligResult !== null && (
              <div>
                <p>{steelHopligResult}</p>
              </div>
            )}</VStack>
       <Spacer />     
      <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        alt='Coins'
        mr='0px'
      /> 
          {coinsHopligResult !== null && (
              <div>
                <p>{coinsHopligResult}</p>
              </div>
            )}</VStack>
      </HStack>
      <br></br>
        </Box>
        </Center>

<Divider />
<br></br>
</Container>

<Container>
<Center>        
  <Box>
    <Center>
        <Image
        boxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/db/LeatherCuriass.png'
        alt='Leather Cuirass'
        mr='0px'/>
        </Center>
       <Heading size='md'>{leacuiResult} Leather Cuirass</Heading>
      <br></br>
      
      <HStack>
        <VStack>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e7/DustRepellentElixir.png'
        alt='Dust-Repellent Elixir'
        mr='0px'
      /> 
           {dreLeacuiResult !== null && (
              <div>
                <p>{dreLeacuiResult}</p>
              </div>
            )}</VStack>
        <Spacer />
        <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/99/Leatherroll_md.png'
        alt='Leather Roll'
        mr='0px'
      /> 
          {leatherrollLeacuiResult !== null && (
              <div>
                <p>{leatherrollLeacuiResult}</p>
              </div>
            )}</VStack>
        <Spacer />
        <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png'
        alt='Steel'
        mr='0px'
      /> 
          {steelLeacuiResult !== null && (
              <div>
                <p>{steelLeacuiResult}</p>
              </div>
            )}</VStack>
         <Spacer />     
      <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/0b/Finefabric_md.png'
        alt='Fine Fabric'
        mr='0px'
      /> 
          {finefabricLeacuiResult !== null && (
              <div>
                <p>{finefabricLeacuiResult}</p>
              </div>
            )}</VStack>
       <Spacer />     
      <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        alt='Coins'
        mr='0px'
      /> 
          {coinsLeacuiResult !== null && (
              <div>
                <p>{coinsLeacuiResult}</p>
              </div>
            )}</VStack>
      </HStack>
      <br></br>
        </Box>
        </Center>

<Divider />
<br></br>
</Container>


<Container>
<Center>        
  <Box>
    <Center>
        <Image
        boxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f6/LeatherTurnshoe.png'
        alt='Leather Turnshoe'
        mr='0px'/>
        </Center>
       <Heading size='md'>{leaturResult} Leather Turnshoe</Heading>
      <br></br>
      
      <HStack>
        <VStack>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e7/DustRepellentElixir.png'
        alt='Dust-Repellent Elixir'
        mr='0px'
      /> 
           {dreLeaturResult !== null && (
              <div>
                <p>{dreLeaturResult}</p>
              </div>
            )}</VStack>
        <Spacer />
        <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/99/Leatherroll_md.png'
        alt='Leather Roll'
        mr='0px'
      /> 
          {leatherrollLeaturResult !== null && (
              <div>
                <p>{leatherrollLeaturResult}</p>
              </div>
            )}</VStack>
        <Spacer />   
      <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/0b/Finefabric_md.png'
        alt='Fine Fabric'
        mr='0px'
      /> 
          {finefabricLeaturResult !== null && (
              <div>
                <p>{finefabricLeaturResult}</p>
              </div>
            )}</VStack>
       <Spacer />     
      <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        alt='Coins'
        mr='0px'
      /> 
          {coinsLeaturResult !== null && (
              <div>
                <p>{coinsLeaturResult}</p>
              </div>
            )}</VStack>
      </HStack>
      <br></br>
        </Box>
        </Center>

<Divider />
<br></br>
</Container>


<Container>
<Center>        
  <Box>
    <Center>
        <Image
        boxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a7/LightsBloom.png'
        alt='Lights Bloom'
        mr='0px'/>
        </Center>
       <Heading size='md'>{ligbloResult} Light's Bloom</Heading>
      <br></br>
      
      <HStack>
        <VStack>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1f/FusionGlass.png'
        alt='Fusion Glass'
        mr='0px'
      /> 
           {fgLigbloResult !== null && (
              <div>
                <p>{fgLigbloResult}</p>
              </div>
            )}</VStack>
        <Spacer />
        <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e7/DustRepellentElixir.png'
        alt='Dust-Repellent Elixir'
        mr='0px'
      /> 
          {dreLigbloResult !== null && (
              <div>
                <p>{dreLigbloResult}</p>
              </div>
            )}</VStack>
        <Spacer />
        <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/87/Gold_md.png/'
        alt='Gold'
        mr='0px'
      /> 
          {goldLigbloResult !== null && (
              <div>
                <p>{goldLigbloResult}</p>
              </div>
            )}</VStack>
       <Spacer />     
      <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        alt='Coins'
        mr='0px'
      /> 
          {coinsLigbloResult !== null && (
              <div>
                <p>{coinsLigbloResult}</p>
              </div>
            )}</VStack>
      </HStack>
      <br></br>
        </Box>
        </Center>

<Divider />
<br></br>
</Container>

<Container>
<Center>        
  <Box>
    <Center>
        <Image
        boxSize='5rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f0/PoePick.png/'
        alt='Poe Pick'
        mr='0px'/>
        </Center>
       <Heading size='md'>{poepicResult} Poe Pick</Heading>
      <br></br>
      
      <HStack>
        <VStack>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e7/DustRepellentElixir.png'
        alt='Dust-Repellent Elixir'
        mr='0px'
      /> 
           {drePoepicResult !== null && (
              <div>
                <p>{drePoepicResult}</p>
              </div>
            )}</VStack>
        <Spacer />
        <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/0c/Hardwood_md.png'
        alt='Hardwood'
        mr='0px'
      /> 
          {hardwoodPoepicResult !== null && (
              <div>
                <p>{hardwoodPoepicResult}</p>
              </div>
            )}</VStack>
        <Spacer />   
      <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png'
        alt='Steel'
        mr='0px'
      /> 
          {steelPoepicResult !== null && (
              <div>
                <p>{steelPoepicResult}</p>
              </div>
            )}</VStack>
       <Spacer />     
      <VStack> 
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        alt='Coins'
        mr='0px'
      /> 
          {coinsPoepicResult !== null && (
              <div>
                <p>{coinsPoepicResult}</p>
              </div>
            )}</VStack>
      </HStack>
      <br></br>
        </Box>
        </Center>

<Divider />
<br></br>
</Container>

</AccordionPanel>
  </AccordionItem>
</Accordion></Center>
<br></br></Container>

        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;