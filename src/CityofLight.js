import React from 'react';
import { useState,useEffect } from "react";
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
  VStack,
  Grid,
  theme,
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
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronRightIcon, MinusIcon, AddIcon, } from '@chakra-ui/icons';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Routes, Route, Link } from 'react-router-dom';
import QuickWCCalc from './QuickWCCalc';
import About from './About'

function App() {

  
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
    setMushNoanzaIsShown(current =>null)
  };

  const [GlivaIsShown, setGlivaIsShown] = useState(false);
  const [GlivaQtyIsShown, setGlivaQtyIsShown] = useState(false);
  const [SummaryGlivaIsShown, setSummaryGlivaIsShown] = useState(false);
  const [KirerfIsShown, setKirerfIsShown] = useState(false);
  const [KirerfQtyIsShown, setKirerfQtyIsShown] = useState(false);
  const [SummaryKirerfIsShown, setSummaryKirerfIsShown] = useState(false);


  const handleGlivaClick = event => {
    // 👇️ toggle shown state
    setGlivaIsShown(current => !GlivaIsShown);
    setGlivaQtyIsShown(current => !GlivaQtyIsShown);
    setSummaryGlivaIsShown(current => !SummaryGlivaIsShown);
    setKirerfIsShown(current => null);
    setKirerfQtyIsShown(current => 0);
    setSummaryKirerfIsShown(current => null)
  };

  const handleKirerfClick = event => {
    // 👇️ toggle shown state
    setKirerfIsShown(current => !KirerfIsShown);
    setKirerfQtyIsShown(current => !KirerfQtyIsShown);
    setSummaryKirerfIsShown(current => !SummaryKirerfIsShown);
    setGlivaIsShown(current => null);
    setGlivaQtyIsShown(current => 0);
    setSummaryGlivaIsShown(current => null);
  };

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
const calculateLdCrafting = {ldResult, totalAllDre, totalAllFg}
const totalLdCrafting = Math.max ((ldResult + (totalDreFgCrafting*10) + (totalAllFg*4)),0)

//RD FOR LOOTING//
const [rdLooting, setRdLooting] = useState(0); // Or any other non-zero value
const calculateRdLooting = {rdResult, totalAllDre}
const totalRdLooting = Math.max ((rdResult + (totalAllDre*8)),0)

//RD FOR Crafting//
const [rdCrafting, setRdCrafting] = useState(0); // Or any other non-zero value
const calculateRdCrafting = {rdResult, totalAllDre, totalAllFg}
const totalRdCrafting = Math.max ((rdResult + (totalDreFgCrafting*8)),0)

//DU FOR LOOTING//
const [duLooting, setDuLooting] = useState(0); // Or any other non-zero value
const calculateDuLooting = {dustResult, totalAllDre}
const totalDuLooting = Math.max ((dustResult + (totalAllDre*20)),0)

//DU FOR Crafting//
const [duCrafting, setDuCrafting] = useState(0); // Or any other non-zero value
const calculateDuCrafting = {dustResult, totalAllDre, totalAllFg}
const totalDuCrafting = Math.max ((dustResult + (totalDreFgCrafting*20)),0)

//ESS FOR LOOTING//
const [essLooting, setEssLooting] = useState(0); // Or any other non-zero value
const calculateEssLooting = {essResult, totalAllDre}
const totalEssLooting = Math.max ((essResult + (totalAllDre*5)),0)

//ESS FOR Crafting//
const [essCrafting, setEssCrafting] = useState(0); // Or any other non-zero value
const calculateEssCrafting = {essResult, totalAllDre, totalAllFg}
const totalEssCrafting = Math.max ((essResult + (totalDreFgCrafting*5)),0)

//DFL FOR LOOTING//
const [dflLooting, setDflLooting] = useState(0); // Or any other non-zero value
const calculateDflLooting = {dflResult, totalAllDre}
const totalDflLooting = Math.max ((dflResult + (totalAllDre*2)),0)

//DFL FOR Crafting//
const [dflCrafting, setDflCrafting] = useState(0); // Or any other non-zero value
const calculateDflCrafting = {dflResult, totalAllDre, totalAllFg}
const totalDflCrafting = Math.max ((dflResult + (totalDreFgCrafting*2)),0)

//BONES FOR LOOTING//
const [bonesLooting, setBonesLooting] = useState(0); // Or any other non-zero value
const calculateBonesLooting = {bonesResult, totalAllDre}
const totalBonesLooting = Math.max ((bonesResult + (totalAllDre*3)),0)

//BONES FOR Crafting//
const [bonesCrafting, setBonesCrafting] = useState(0); // Or any other non-zero value
const calculateBonesCrafting = {bonesResult, totalAllDre, totalAllFg}
const totalBonesCrafting = Math.max ((bonesResult + (totalDreFgCrafting*3)),0)


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
const totalAscreQtyLoot = Math.max ((totalRdLooting/.5), 0)

const [ascreWCLoot, setAscreWCLoot] = useState (0);
const calculateAscreWCLoot = {totalAscreQtyLoot, attackStat}
const totalAscreWCLoot = Math.round ((totalAscreQtyLoot*150) / ((attackStat/100) + 1));

const [ascreQtyCraft, setAscreQtyCraft] = useState(0);
const calculateAscreQtyCraft = {totalRdCrafting}
const totalAscreQtyCraft = Math.max ((totalRdCrafting/.5), 0)

const [ascreWCCraft, setAscreWCCraft] = useState (0);
const calculateAscreWCCraft = {totalAscreQtyCraft, attackStat}
const totalAscreWCCraft = Math.round ((totalAscreQtyCraft*150) / ((attackStat/100) + 1));

//DustWignow QTY + WC//
const [dustWignowQtyLoot, setDustWignowQtyLoot] = useState(0);
const calculateDustWignowQtyLoot = {totalDflLooting}
const totalDustWignowQtyLoot = Math.round (totalDflLooting/3.5)

const [dustWignowWCLoot, setDustWignowWCLoot] = useState (0);
const calculateDustWignowWCLoot = {totalDustWignowQtyLoot, attackStat}
const totalDustWignowWCLoot = Math.round ((totalDustWignowQtyLoot*150) / ((attackStat/100) + 1));

const [dustWignowQtyCraft, setDustWignowQtyCraft] = useState(0);
const calculateDustWignowQtyCraft = {totalDflCrafting}
const totalDustWignowQtyCraft = Math.round (totalDflCrafting/3.5)

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

const [xaeyQtyLootActual, setXaeyQtyLootActual] = useState(0);
const calculateXaeyQtyLootActual = {totalXaeyQtyLoot}
const totalXaeyQtyLootActual = Math.max (totalXaeyQtyLoot, 0)

const [xaeyWCLoot, setXaeyWCLoot] = useState (0);
const calculateXaeyWCLoot = {xaeyQtyLootActual, attackStat}
const totalXaeyWCLoot = Math.round (((xaeyQtyLootActual)*120) / ((attackStat/100) + 1));

const [xaeyQtyCraft, setXaeyQtyCraft] = useState(0);
const calculateXaeyQtyCraft = {totalBonesCrafting}
const totalXaeyQtyCraft = Math.max ((totalBonesCrafting/1), 0)

const [xaeyWCCraft, setXaeyWCCraft] = useState (0);
const calculateXaeyWCCraft = {totalXaeyQtyCraft, attackStat}
const totalXaeyWCCraft = Math.round ((totalXaeyQtyCraft*120) / ((attackStat/100) + 1));



//GLIVA MUSH CALC//

const [glivaQty, setGlivaQty] = useState(0);
const calculateGlivaQty = {mushResult, totalAllFg, totalAllDre}
const totalGlivaQty = Math.max ((mushResult + totalAllFg + totalAllDre), 0)

const [glivaWC, setGlivaWC] = useState (0);
const calculateGlivaWC = {totalGlivaQty, attackStat}
const totalGlivaWC = Math.round ((totalGlivaQty*300) / ((attackStat/100) + 1));


//KIRERF MUSH CALC//


const [kirerfQty, setKirerfQty] = useState(0);
const calculateKirerfQty = {mushResult, totalAllFg, totalAllDre}
const totalKirerfQty = Math.max ((mushResult + totalAllFg + totalAllDre), 0)

const [kirerfWC, setKirerfWC] = useState (0);
const calculateKirerfWC = {totalKirerfQty, attackStat}
const totalKirerfWC = Math.round ((totalKirerfQty*66) / ((attackStat/100) + 1));


//DFL AND RD OVERLAP (REDUCES DFL)//






//DO I EVEN NEED XAEY CALC LOL - DFL overlap CALC//
//must be here so I can use it in the PCS calculations//

const [bonesOverlapLoot, setBonesOverlapLoot] = useState(0);
const calculateBonesOverlapLoot = {totalDflLooting,totalBonesLooting}
const totalBonesOverlapLoot = (totalBonesLooting-totalDflLooting)


//PCS CALC//
const [grossXaey, SetGrossXaey] = useState(0);
const calculateGrossXaey={bonesResult, totalXaeyQtyCraft}
const totalGrossXaey = Math.round (bonesResult + totalXaeyQtyCraft)

const [xaeyPCS, SetXaeyPCS] = useState(0);
const calculateXaeyPCS = {totalGrossXaey}
const totalXaeyPCS = Math.round (totalGrossXaey*.5)

const [allPCS, setAllPCS] = useState(0);
const calculateAllPCS = {pCSResult, totalAllFg, totalXaeyPCS}
const totalAllPCS = Math.max (((pCSResult + totalAllFg) - totalXaeyPCS),0) //repair this //

const [grossPCS, setGrossPCS] = useState(0);
const calculateGrossPCS = {totalAllFg, pCSResult}
const totalGrossPCS = Math.max ((totalAllFg+pCSResult))

//ARDID CALC//
const [ardidQty, SetArdidQty] = useState (0);
const calculateArdidQty = {totalAllPCS}
const totalArdidQty = Math.max ((totalAllPCS*2),0)

const [ardidWC, setArdidWC] = useState (0);
const calculateArdidWC = {totalArdidQty, attackStat}
const totalArdidWC = Math.round ((totalArdidQty*90) / ((attackStat/100) + 1));

//DUST overlap CALC//
const [dustGrossTotal, setDustGrossTotal] = useState (0);
const calculateDustGrossTotal = {totalDuCrafting,totalDuLooting}
const totalDustGrossTotal = Math.max ((totalDuCrafting + totalDuLooting), 0)

const [dustArdidTotal, setDustArdidTotal] = useState (0);
const calculateDustArdidTotal = {totalArdidQty}
const totalDustArdidTotal = Math.round (totalArdidQty*1.5)

const [dustAllOtherMonsters, SetDustAllOtherMonsters] = useState (0);
const calculateDustAllOtherMonstersTotal = {totalDustArdidTotal, totalKirerfQty}
const totalDustAllOtherMonsters = Math.max ((totalDustArdidTotal + totalKirerfQty),0)

const [dustQty, setDustQty] = useState (0);
const calculateDustQty = {totalDustArdidTotal, totalDustGrossTotal}
const totalDustQty = Math.max ((totalDustGrossTotal-totalDustAllOtherMonsters),0)

const [dustCost, SetDustCost] = useState (0);
const calculateDustCost = {totalDustQty}
const totalDustCost = Math.max ((totalDustQty*8),0)

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


//Total WC Monsters Calc//

const calculateFinalWCResult = {totalXaeyWCLoot, totalXaeyWCCraft, totalDustWignowWCLoot, totalDustWignowWCCraft, totalAscreWCLoot, totalAscreWCCraft, totalArluziWCLoot,totalArluziWCCraft, totalKirerfWC, totalGlivaWC, totalAakultaWC, totalNoanzaWC}
const totalFinalWCResult = (totalXaeyWCLoot + totalXaeyWCCraft + totalDustWignowWCLoot + totalDustWignowWCCraft + totalAscreWCLoot + totalAscreWCCraft + totalArluziWCLoot,totalArluziWCCraft + totalKirerfWC + totalGlivaWC + totalAakultaWC + totalNoanzaWC
  )

//reverse the attack eq lmfao//

const calculateFinalWCNoAtk = {totalFinalWCResult, attackStat}
const totalFinalWCNoAtk = Math.round ((totalFinalWCResult + ((attackStat/100)*totalFinalWCResult)))

// END OF EQUATIONS SO FAR//

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Heading>City of Light</Heading>
            <Container><p>This page calculates what monsters you need for City of Light materials and battle items, based on average loot drops.<br></br><br></br>Never worry again about how many Fusion Glasses you need for Noanza's fifty million weapons. <br></br><br></br> Just list how many you need, and we'll do the rest.</p></Container>
            <Container><Divider></Divider></Container>

<VStack>
<Heading>Info for the Math:</Heading>
<br></br><br></br>
<Container>Your Attack Stat:</Container>
<NumberInput defaultValue={0} min={0} max={9999}>
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
        <Container><HStack>
        <Button onClick= {handleNoanzaClick}>      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/df/Noanza.png'
        alt='Noanza'
        mr='12px'
      />
      <span>Noanza (most efficient)</span></Button>
        <Button onClick= {handleAakultaClick}>      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/59/Aakulta.png'
        alt='Aakulta'
        mr='12px'
      />
      <span>Aakulta</span></Button>
        <Button onClick={handleFgCraftingClick}>Crafting (least efficient)</Button>
        </HStack></Container>
        <HStack><text>Select source for</text> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/72/Cave-mushroom.png'
        alt='Mushrooms'
        mr='0px'
      /><text><b>Mushrooms</b></text>
         Source:</HStack>
        <Center><Container><HStack>
        <Button onClick={handleKirerfClick}>      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a6/Kirerf.png'
        alt='Kirerf'
        mr='12px'
      />
      <text>Kirerf (most efficient)</text></Button>
        <Button onClick={handleGlivaClick}>      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/15/Gliva.png'
        alt='Gliva'
        mr='12px'
      />
      <text>Gliva</text></Button>
        </HStack></Container></Center>
        <Spacer></Spacer>
        <Heading>Craft Materials Needed</Heading>
            <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>Need to Get</Th>
        <Th>Already Have</Th>
        <Th>Materials</Th>
        <Th>Best Source</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
  <NumberInputField id='dreN' onInput={(e) => handleDreNChange(e.target.value)} />
</NumberInput></Td>
<Td><NumberInput defaultValue={0} min={0} max={9999}>
  <NumberInputField id='dreH' onInput={(e) => handleDreHChange(e.target.value)} />
</NumberInput></Td>
        <Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e7/DustRepellentElixir.png'
        alt='Dust-Repellent Elixir'
        mr='0px'
      /><text>Dust-Repellent Elixir</text>
        </HStack></Td>
        <Td>Crafting</Td>
      </Tr>
      <Tr>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
        <NumberInputField id='FgN' onInput={(e) => handleFgNChange(e.target.value)} />
</NumberInput></Td>
<Td><NumberInput defaultValue={0} min={0} max={9999}>
<NumberInputField id='FgH' onInput={(e) => handleFgHChange(e.target.value)} />
</NumberInput></Td>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1f/FusionGlass.png'
        alt='Fusion Glass'
        mr='0px'
      /><text>Fusion Glass</text>
        </HStack></Td>
        <Td>{NoanzaIsShown && <Container><Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/df/Noanza.png'
        alt='Noanza'
        mr='12px'
      />  
      <span>Noanza</span></Container>}
      {AakultaIsShown && <Container><Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/59/Aakulta.png'
        alt='Aakulta'
        mr='12px'
      />  
      <span>Aakulta</span></Container>}
      {FgCraftingIsShown && <text>Crafting</text>}</Td>
      </Tr>
      <Tr>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
        <NumberInputField id='LdN' onInput={(e) => handleLdNChange(e.target.value)} />
</NumberInput></Td>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
        <NumberInputField id='LdH' onInput={(e) => handleLdHChange(e.target.value)} />
</NumberInput></Td>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/91/LightenedDust.png'
        alt='Lightened Dust'
        mr='0px'
      /><text>Lightened Dust</text>
        </HStack></Td>
        <Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/c/c5/Arluzi.png'
        alt='Arluzi'
        mr='5px'
      /> <text>Arluzi</text>
        </HStack>
</Td>
      </Tr>
      <Tr>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
        <NumberInputField id='RdN' onInput={(e) => handleRdNChange(e.target.value)} />
</NumberInput></Td>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
        <NumberInputField id='RdH' onInput={(e) => handleRdHChange(e.target.value)} />
</NumberInput></Td>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e2/Refined-dust.png'
        alt='Refined Dust'
        mr='0px'
      /><text>Refined Dust</text>
        </HStack></Td>
        <Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/0d/Ascre.png'
        alt='Ascre'
        mr='5px'
      /> <text>Ascre</text>
        </HStack>
</Td>
      </Tr>
      <Tr>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
        <NumberInputField id='DustN' onInput={(e) => handleDustNChange(e.target.value)} />
</NumberInput></Td>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
        <NumberInputField id='DustH' onInput={(e) => handleDustHChange(e.target.value)} />
</NumberInput></Td>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b3/Dust_md.png'
        alt='Dust'
        mr='0px'
      /><text>Dust</text>
        </HStack></Td>
        <Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        alt='Coin'
        mr='5px'
      /> <text>Purchase</text>
        </HStack>
</Td>
      </Tr>
      <Tr>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
        <NumberInputField id='EssN' onInput={(e) => handleEssNChange(e.target.value)} />
</NumberInput></Td>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
        <NumberInputField id='EssH' onInput={(e) => handleEssHChange(e.target.value)} />
</NumberInput></Td>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/19/Wignowessence_md.png'
        alt='Essence'
        mr='0px'
      /><text>Essence</text>
        </HStack></Td>
        <Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        alt='Coin'
        mr='5px'
      /> <text>Purchase</text>
        </HStack>
</Td>
      </Tr>
      <Tr>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
        <NumberInputField id='MushN' onInput={(e) => handleMushNChange(e.target.value)} />
</NumberInput></Td>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
        <NumberInputField id='MushH' onInput={(e) => handleMushHChange(e.target.value)} />
</NumberInput></Td>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/72/Cave-mushroom.png'
        alt='Mushroom'
        mr='0px'
      /><text>Mushroom</text>
        </HStack></Td>
        <Td>{GlivaIsShown && <Container><Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/15/Gliva.png'
        alt='Gliva'
        mr='12px'
      />  
      <span>Gliva</span></Container>}
      {KirerfIsShown && <Container><Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a6/Kirerf.png'
        alt='Kirerf'
        mr='12px'
      />  
      <span>Kirerf</span></Container>}</Td>
      </Tr>
      <Tr>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
        <NumberInputField id='DflN' onInput={(e) => handleDflNChange(e.target.value)} />
</NumberInput></Td>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
        <NumberInputField id='DflH' onInput={(e) => handleDflHChange(e.target.value)} />
</NumberInput></Td>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/d8/Dark-forest-leaves.png'
        alt='Dark Forest Leaves'
        mr='0px'
      /><text>Dark Forest Leaves</text>
        </HStack></Td>
        <Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/7b/Dust_Wignow.png'
        alt='Dust Wignow'
        mr='5px'
      /> <text>Dust Wignow</text>
        </HStack>
</Td>
      </Tr>
      <Tr>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
        <NumberInputField id='BonesN' onInput={(e) => handleBonesNChange(e.target.value)} />
</NumberInput></Td>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
        <NumberInputField id='BonesH' onInput={(e) => handleBonesHChange(e.target.value)} />
</NumberInput></Td>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5e/Bones.png/'
        alt='Bones'
        mr='0px'
      /><text>Bones</text>
        </HStack></Td>
        <Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/22/Xaey.png'
        alt='Xaey'
        mr='5px'
      /> <text>Xaey</text>
        </HStack>
</Td>
      </Tr>
      <Tr>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
        <NumberInputField id='PCSN' onInput={(e) => handlePCSNChange(e.target.value)} />
</NumberInput></Td>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
        <NumberInputField id='PCSH' onInput={(e) => handlePCSHChange(e.target.value)} />
</NumberInput></Td>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/ad/Purple-crystal-shards.png'
        alt='Purple Crystal Shards'
        mr='0px'
      /><text>Purple Crystal Shards</text>
        </HStack></Td>
        <Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/23/Ardid.png'
        alt='Ardid'
        mr='5px'
      /> <text>Ardid</text>
        </HStack>
</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
<Spacer></Spacer>
<Heading>Battle Items Needed</Heading>
<TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
      <Th>Need to Get</Th>
        <Th>Already Have</Th>
        <Th>Battle Item</Th>
        <Th>Best Source</Th>
      </Tr>
    </Thead>
    <Tbody>
    <Tr>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
        <NumberInputField id='AakhelN' onInput={(e) => handleAakhelNChange(e.target.value)} />
</NumberInput></Td>
<Td><NumberInput defaultValue={0} min={0} max={9999}>
<NumberInputField id='AakhelH' onInput={(e) => handleAakhelHChange(e.target.value)} />
</NumberInput></Td>

        <Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/07/AakultaHelmet.png'
        alt='Aakulta Helmet'
        mr='0px'
      /><text>Aakulta Helmet</text>
        </HStack></Td>
        <Td>Crafting</Td>
      </Tr>
      <Tr>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
        <NumberInputField id='ClibooN' onInput={(e) => handleClibooNChange(e.target.value)} />
</NumberInput></Td>
<Td><NumberInput defaultValue={0} min={0} max={9999}>
<NumberInputField id='ClibooH' onInput={(e) => handleClibooHChange(e.target.value)} />
</NumberInput></Td>

<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/7d/ClimbingBoots.png/'
        alt='Climbing Bootss'
        mr='0px'
      /><text>Climbing Boots</text>
        </HStack></Td>
        <Td>Crafting</Td>      </Tr>
      <Tr>
      <Td><NumberInput defaultValue={0} min={0} max={9999}>
      <NumberInputField id='CrehelN' onInput={(e) => handleCrehelNChange(e.target.value)} />
</NumberInput></Td>

        <Td><NumberInput defaultValue={0} min={0} max={9999}>
        <NumberInputField id='CrehelH' onInput={(e) => handleCrehelHChange(e.target.value)} />
</NumberInput></Td>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f8/CrestedHelmet.png'
        alt='Crested Helmet'
        mr='0px'
      /><text>Crested Helmet</text>
        </HStack></Td>
        <Td>Crafting</Td>
      </Tr>
      <Tr>
      <Td><NumberInput defaultValue={0} min={0} max={9999}>
      <NumberInputField id='FlosliN' onInput={(e) => handleFlosliNChange(e.target.value)} />
</NumberInput></Td>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
        <NumberInputField id='FlosliH' onInput={(e) => handleFlosliHChange(e.target.value)} />
</NumberInput></Td>
        <Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b6/FlowerSlingshot.png/'
        alt='Flower Slingshot'
        mr='0px'
      /><text>Flower Slingshot</text>
        </HStack></Td>
        <Td>Crafting</Td>
      </Tr>
      <Tr>
      <Td><NumberInput defaultValue={0} min={0} max={9999}>
      <NumberInputField id='FuscroN' onInput={(e) => handleFuscroNChange(e.target.value)} />
</NumberInput></Td>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
        <NumberInputField id='FuscroH' onInput={(e) => handleFuscroHChange(e.target.value)} />
</NumberInput></Td>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Fusion_Crossbow.png'
        alt='Fusion Crossbow'
        mr='0px'
      /><text>Fusion Crossbow</text>
        </HStack></Td>
        <Td>Crafting</Td>      </Tr>
      <Tr>        <Td><NumberInput defaultValue={0} min={0} max={9999}>
      <NumberInputField id='FuscuiN' onInput={(e) => handleFuscuiNChange(e.target.value)} />
</NumberInput></Td>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
        <NumberInputField id='FuscuiH' onInput={(e) => handleFuscuiHChange(e.target.value)} />
</NumberInput></Td>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fa/FusionCuirass.png'
        alt='Fusion Cuirass'
        mr='0px'
      /><text>Fusion Cuirass</text>
        </HStack></Td>
        <Td>Crafting</Td>
      </Tr>
      <Tr>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
        <NumberInputField id='FusswoN' onInput={(e) => handleFusswoNChange(e.target.value)} />
</NumberInput></Td>
<Td><NumberInput defaultValue={0} min={0} max={9999}>
<NumberInputField id='FusswoH' onInput={(e) => handleFusswoHChange(e.target.value)} />
</NumberInput></Td>
        <Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/c/c6/FusionSword.png'
        alt='Fusion Sword'
        mr='0px'
      /><text>Fusion Sword</text>
        </HStack></Td>
        <Td>Crafting</Td>
      </Tr>
      <Tr>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
        <NumberInputField id='HopligN' onInput={(e) => handleHopligNChange(e.target.value)} />
        </NumberInput></Td>
<Td><NumberInput defaultValue={0} min={0} max={9999}>
<NumberInputField id='HopligH' onInput={(e) => handleHopligHChange(e.target.value)} />
</NumberInput></Td>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/3/3c/HopesLight.png'
        alt='Hopes Light'
        mr='0px'
      /><text>Hope's Light</text>
        </HStack></Td>
        <Td>Crafting</Td>      </Tr>
      <Tr>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
        <NumberInputField id='LeacuiN' onInput={(e) => handleLeacuiNChange(e.target.value)} />
</NumberInput></Td>
<Td><NumberInput defaultValue={0} min={0} max={9999}>
<NumberInputField id='LeacuiH' onInput={(e) => handleLeacuiHChange(e.target.value)} />
</NumberInput></Td>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/db/LeatherCuriass.png'
        alt='Leather Cuirass'
        mr='0px'
      /><text>Leather Cuirass</text>
        </HStack></Td>
        <Td>Crafting</Td>
      </Tr>
      <Tr>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
        <NumberInputField id='LeaturN' onInput={(e) => handleLeaturNChange(e.target.value)} />
</NumberInput></Td>
<Td><NumberInput defaultValue={0} min={0} max={9999}>
<NumberInputField id='LeaturH' onInput={(e) => handleLeaturHChange(e.target.value)} />
</NumberInput></Td>
        <Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f6/LeatherTurnshoe.png'
        alt='Leather Turnshoe'
        mr='0px'
      /><text>Leather Turnshoe</text>
        </HStack></Td>
        <Td>Crafting</Td>
      </Tr>
      <Tr>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
        <NumberInputField id='LigbloN' onInput={(e) => handleLigbloNChange(e.target.value)} />
</NumberInput></Td>
<Td><NumberInput defaultValue={0} min={0} max={9999}>
<NumberInputField id='LigbloH' onInput={(e) => handleLigbloHChange(e.target.value)} />
</NumberInput></Td>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a7/LightsBloom.png'
        alt='Lights Bloom'
        mr='0px'
      /><text>Light's Bloom</text>
        </HStack></Td>
        <Td>Crafting</Td>      </Tr>
      <Tr>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
        <NumberInputField id='PoepicN' onInput={(e) => handlePoepicNChange(e.target.value)} />
</NumberInput></Td>
<Td><NumberInput defaultValue={0} min={0} max={9999}>
<NumberInputField id='PoepicH' onInput={(e) => handlePoepicHChange(e.target.value)} />
</NumberInput></Td>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f0/PoePick.png/'
        alt='Poe Pick'
        mr='0px'
      /><text>Poe Pick</text>
        </HStack></Td>
        <Td>Crafting</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
<Spacer></Spacer>
<Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='center'>
         <Heading>Wardrobe Items</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <Container>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
      </Container>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='center'>
          <Heading>Housing Items</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Container>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.</Container>
    </AccordionPanel>
  </AccordionItem>
</Accordion>

<Divider></Divider>

<Heading>Quick View</Heading>
<TableContainer>
  <Table variant='simple' colorScheme='teal'>
  <Tbody>
    <Tr>
  <Td><Stat>
  <StatLabel>Total Word Count</StatLabel>
  <StatNumber>{totalFinalWCNoAtk}</StatNumber>
</Stat></Td>
<Td><Stat>
  <StatLabel>Total Word Count with Attack</StatLabel>
  <StatNumber>{totalFinalWCResult}</StatNumber>
</Stat></Td></Tr>
<Tr>
  <Td><Stat>
  <StatLabel>Approx. Cost (Coins)</StatLabel>
  <StatNumber>000,000</StatNumber>
</Stat></Td>
<Td><Stat>
  <StatLabel>Total Monsters</StatLabel>
  <StatNumber>000,000</StatNumber>
</Stat></Td></Tr>
</Tbody>
</Table>
</TableContainer>

<Container><b>Total Materials to Loot:</b></Container>
<Wrap spacing='30px' justify='center'>
<WrapItem>
    <Center w='50px' h='50px'>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1f/FusionGlass.png'
        alt='Fusion Glass'
        mr='0px'
      />
      {SummaryNoanzaIsShown && <Container>{totalAllFg}</Container>}
      {SummaryAakultaIsShown && <Container>{totalAllFg}</Container>}
      {SummaryFgCraftingIsShown && <Container><text>0</text></Container>}</VStack>
  </Center>
  </WrapItem>
  <WrapItem>
    <Center w='50px' h='50px'>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/91/LightenedDust.png'
        alt='Lightened Dust'
        mr='0px'
      />      {SummaryNoanzaIsShown && <Container>{totalLdLootingNoanza}</Container>}
      {SummaryAakultaIsShown && <Container>{totalLdLooting}</Container>}
      {SummaryFgCraftingIsShown && <Container>{totalLdCrafting}</Container>}</VStack>
  </Center>
  </WrapItem>
  <WrapItem>
    <Center w='50px' h='50px'>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e2/Refined-dust.png'
        alt='Refined Dust'
        mr='0px'
      />
      {SummaryNoanzaIsShown && <Container>{totalRdLooting}</Container>}
      {SummaryAakultaIsShown && <Container>{totalRdLooting}</Container>}
      {SummaryFgCraftingIsShown && <Container>{totalRdCrafting}</Container>}
      </VStack>
  </Center>
  </WrapItem>
  <WrapItem>
    <Center w='50px' h='50px'>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b3/Dust_md.png'
        alt='Dust'
        mr='0px'
      />
  	{SummaryNoanzaIsShown && <Container>{totalDustAllOtherMonsters}</Container>}
  	{SummaryAakultaIsShown && <Container>{totalDustAllOtherMonsters}</Container>}
  	{SummaryFgCraftingIsShown && <Container>{totalDustAllOtherMonsters}</Container>}
</VStack>
  </Center>
  </WrapItem>
  <WrapItem>
    <Center w='50px' h='50px'>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/19/Wignowessence_md.png'
        alt='Essence'
        mr='0px'
      />  	{SummaryNoanzaIsShown && <Container>{totalEssLooting}</Container>}
      {SummaryAakultaIsShown && <Container>{totalEssLooting}</Container>}
      {SummaryFgCraftingIsShown && <Container>{totalEssCrafting}</Container>}</VStack>
  </Center>
  </WrapItem>
  <WrapItem>
    <Center w='50px' h='50px'>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/72/Cave-mushroom.png'
        alt='Mushrooms'
        mr='0px'
      />  	{MushNoanzaIsShown && <Container>{totalMushLooting}</Container>}
      {MushAakultaIsShown && <Container>{totalMushLooting}</Container>}
      {MushFgCraftingIsShown && <Container>{totalMushCrafting}</Container>}</VStack>
  </Center>
  </WrapItem>
  <WrapItem>
    <Center w='50px' h='50px'>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/d8/Dark-forest-leaves.png'
        alt='Dark Forest Leaves'
        mr='0px'
      />  	{SummaryNoanzaIsShown && <Container>{totalDflLooting}</Container>}
      {SummaryAakultaIsShown && <Container>{totalDflLooting}</Container>}
      {SummaryFgCraftingIsShown && <Container>{totalDflCrafting}</Container>}</VStack>
  </Center>
  </WrapItem>
  <WrapItem>
    <Center w='50px' h='50px'>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5e/Bones.png/'
        alt='Bones'
        mr='0px'
      />  	{SummaryNoanzaIsShown && <Container>{totalBonesLooting}</Container>}
      {SummaryAakultaIsShown && <Container>{totalBonesLooting}</Container>}
      {SummaryFgCraftingIsShown && <Container>{totalBonesCrafting}</Container>}</VStack>
  </Center>
  </WrapItem>
  <WrapItem>
    <Center w='50px' h='50px'>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/ad/Purple-crystal-shards.png/'
        alt='Purple Crystal Shards'
        mr='0px'
      />  	<Container>  	
      	{SummaryNoanzaIsShown && <Container>{totalGrossPCS}</Container>}
        {SummaryAakultaIsShown && <Container>{totalGrossPCS}</Container>}
        {SummaryFgCraftingIsShown && <Container>{totalGrossPCS}</Container>}
        </Container></VStack>
  </Center>
  </WrapItem>
</Wrap>
<Container><b>Total Materials to Craft:</b></Container>
<Wrap spacing='30px' justify='center'>
<WrapItem>
    <Center w='50px' h='50px'>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e7/DustRepellentElixir.png'
        alt='Dust-Repellent Elixir'
        mr='0px'
      />        {SummaryNoanzaIsShown && <Container>{totalAllDre}</Container>}
      {SummaryAakultaIsShown && <Container>{totalAllDre}</Container>}
      {SummaryFgCraftingIsShown && <Container>{totalDreFgCrafting}</Container>}</VStack>
  </Center>
  </WrapItem>
<WrapItem>
    <Center w='50px' h='50px'>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1f/FusionGlass.png'
        alt='Fusion Glass'
        mr='0px'
      />{SummaryNoanzaIsShown && <Container><text>0</text></Container>}
      {SummaryAakultaIsShown && <Container><text>0</text></Container>}
      {SummaryFgCraftingIsShown && <Container>{totalAllFg}</Container>}</VStack>
  </Center>
  </WrapItem>
</Wrap>
<Spacer />

<Heading>Monsters to Fight</Heading>
<TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>Monster</Th>
        <Th>Quantity</Th>
        <Th>Base Word Count</Th>
        <Th>Target Word Count</Th>
      </Tr>
    </Thead>
    <Tbody>
    <Tr>
      <Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/59/Aakulta.png'
        alt='Aakulta'
        mr='5px'
      /> <text>Aakulta</text>
        </HStack>
</Td>
<Td isNumeric>        {SummaryNoanzaIsShown && <Container><text>0</text></Container>}
      {SummaryAakultaIsShown && <Container>{totalAakultaQty}</Container>}
      {SummaryFgCraftingIsShown && <Container><text>0</text></Container>}</Td>
        <Td isNumeric>1500</Td>
        <Td isNumeric>
        {SummaryNoanzaIsShown && <Container><text>0</text></Container>}
      {SummaryAakultaIsShown && <Container>{totalAakultaWC}</Container>}
      {SummaryFgCraftingIsShown && <Container><text>0</text></Container>}
          </Td>
      </Tr>
      <Tr>
      <Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/23/Ardid.png'
        alt='Ardid'
        mr='5px'
      /> <text>Ardid</text>
        </HStack>
</Td>
      <Td isNumeric><Container>
      {SummaryNoanzaIsShown && <Container><text>0</text></Container>}
      {SummaryAakultaIsShown && <Container><text>0</text></Container>}
      {SummaryFgCraftingIsShown && <Container>{totalArdidQty}</Container>}
        </Container></Td>
        <Td isNumeric>90</Td>
        <Td isNumeric><Container>
        {SummaryNoanzaIsShown && <Container><text>0</text></Container>}
      {SummaryAakultaIsShown && <Container><text>0</text></Container>}
      {SummaryFgCraftingIsShown && <Container>{totalArdidWC}</Container>}
          </Container></Td>
      </Tr>
      <Tr>
      <Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/c/c5/Arluzi.png'
        alt='Arluzi'
        mr='5px'
      /> <text>Arluzi</text>
        </HStack>
</Td>
      <Td isNumeric>        {SummaryNoanzaIsShown && <Container>{totalLdLootingNoanza}</Container>}
      {SummaryAakultaIsShown && <Container>{totalAdjustedLdAakultaLoot}</Container>}
      {SummaryFgCraftingIsShown && <Container>{totalArluziQtyCraft}</Container>}</Td>
        <Td isNumeric>50</Td>
        <Td isNumeric>{SummaryNoanzaIsShown && <Container>{totalAdjustedLdNoanzaLootWC}</Container>}
      {SummaryAakultaIsShown && <Container>{totalAdjustedLdAakultaLootWC}</Container>}
      {SummaryFgCraftingIsShown && <Container>{totalArluziWCCraft}</Container>}</Td>
      </Tr>
      <Tr>
      <Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/0d/Ascre.png'
        alt='Ascre'
        mr='5px'
      /> <text>Ascre</text>
        </HStack>
</Td>
      <Td isNumeric>{SummaryNoanzaIsShown && <Container>{totalAscreQtyLoot}</Container>}
  	{SummaryAakultaIsShown && <Container>{totalAscreQtyLoot}</Container>}
  	{SummaryFgCraftingIsShown && <Container>{totalAscreQtyCraft}</Container>}</Td>
        <Td isNumeric>150</Td>
        <Td isNumeric>{SummaryNoanzaIsShown && <Container>{totalAscreWCLoot}</Container>}
  	{SummaryAakultaIsShown && <Container>{totalAscreWCLoot}</Container>}
  	{SummaryFgCraftingIsShown && <Container>{totalAscreWCCraft}</Container>}
</Td>
      </Tr>
      <Tr>
      <Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/7b/Dust_Wignow.png'
        alt='Dust Wignow'
        mr='5px'
      /> <text>Dust Wignow</text>
        </HStack>
</Td>
      <Td isNumeric>{SummaryNoanzaIsShown && <Container>{totalDustWignowQtyLoot}</Container>}
  	{SummaryAakultaIsShown && <Container>{totalDustWignowQtyLoot}</Container>}
  	{SummaryFgCraftingIsShown && <Container>{totalDustWignowQtyCraft}</Container>}</Td>
        <Td isNumeric>444</Td>
        <Td isNumeric>{SummaryNoanzaIsShown && <Container>{totalDustWignowWCLoot}</Container>}
  	{SummaryAakultaIsShown && <Container>{totalDustWignowWCLoot}</Container>}
  	{SummaryFgCraftingIsShown && <Container>{totalDustWignowWCCraft}</Container>}</Td>
      </Tr>
      <Tr>
      <Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/15/Gliva.png'
        alt='Gliva'
        mr='5px'
      /> <text>Gliva</text>
        </HStack>
</Td>
<Td isNumeric>{GlivaQtyIsShown && <Container>{totalGlivaQty}</Container>}</Td>
        <Td isNumeric>300</Td>
        <Td isNumeric>{GlivaQtyIsShown && <Container>{totalGlivaWC}</Container>}</Td>
      </Tr>
      <Tr>
      <Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a6/Kirerf.png'
        alt='Kirerf'
        mr='5px'
      /> <text>Kirerf</text>
        </HStack>
</Td>
<Td isNumeric>{KirerfQtyIsShown && <Container>{totalKirerfQty}</Container>}</Td>
        <Td isNumeric>66</Td>
        <Td isNumeric>{KirerfQtyIsShown && <Container>{totalKirerfWC}</Container>}</Td>
      </Tr>
      <Tr>
      <Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/df/Noanza.png'
        alt='Noanza'
        mr='5px'
      /> <text>Noanza</text>
        </HStack>
</Td>
      <Td isNumeric> {SummaryNoanzaIsShown && <Container>{totalNoanzaQty}</Container>}
      {SummaryAakultaIsShown && <Container>0</Container>}
      {SummaryFgCraftingIsShown && <Container><text>0</text></Container>}
</Td>
        <Td isNumeric>1500</Td>
        <Td isNumeric>{SummaryNoanzaIsShown && <Container>{totalNoanzaWC}</Container>}
  	{SummaryAakultaIsShown && <Container><text>0</text></Container>}
  	{SummaryFgCraftingIsShown && <Container><text>0</text></Container>}</Td>
      </Tr>
      <Tr>
      <Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/22/Xaey.png'
        alt='Xaey'
        mr='5px'
      /> <text>Xaey</text>
        </HStack>
</Td>
      <Td isNumeric>{SummaryNoanzaIsShown && <Container>{totalXaeyQtyLoot}</Container>}
  	{SummaryAakultaIsShown && <Container>{totalXaeyQtyLoot}</Container>}
  	{SummaryFgCraftingIsShown && <Container>{totalXaeyQtyCraft}</Container>}</Td>
        <Td isNumeric>120</Td>
        <Td isNumeric>{SummaryNoanzaIsShown && <Container>{totalXaeyWCLoot}</Container>}
  	{SummaryAakultaIsShown && <Container>{totalXaeyWCLoot}</Container>}
  	{SummaryFgCraftingIsShown && <Container>{totalXaeyWCCraft}</Container>}</Td>
      </Tr>
      <Tr>
      <Td></Td>
      <Td></Td>
        <Td>Total Word Count:</Td>
        <Td isNumeric><Container>{totalFinalWCResult}</Container></Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
<Spacer></Spacer>
<Heading>Materials to Purchase</Heading>
<TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>Material</Th>
        <Th>Quantity</Th>
        <Th>Cost</Th>
      </Tr>
    </Thead>
    <Tbody>
    <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b3/Dust_md.png'
        alt='Dust'
        mr='0px'
      /><text>Dust</text>
        </HStack></Td>
        <Td><Container>{totalDustQty}</Container></Td>
        <Td><Container>{totalDustCost}</Container></Td>
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/19/Wignowessence_md.png'
        alt='Essence'
        mr='0px'
      /><text>Essence</text>
        </HStack></Td>
        <Td><Container>{totalDustGrossTotal}</Container></Td>
        <Td><Container>{totalDustQty}</Container></Td>
      </Tr>
      </Tbody>
  </Table>
</TableContainer>
<Heading>Materials to Craft</Heading>
<Accordion allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e7/DustRepellentElixir.png'
        alt='Dust-Repellent Elixir'
        mr='0px'
      /><text id='drecraft'>Dust-Repellent Elixir: {dreResult}</text>
        </HStack>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <TableContainer>
<Table variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>Crafting Materials</Th>
        <Th>Quantity</Th>
      </Tr>
    </Thead>
    <Tbody>
    <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e7/DustRepellentElixir.png'
        alt='Dust-Repellent Elixir'
        mr='0px'
      /><text>Dust-Repellent Elixir</text>
        </HStack></Td>
        <Td>            
          {dreResult !== null && (
              <div>
                <p>{dreResult}</p>
              </div>
            )}</Td>
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/91/LightenedDust.png'
        alt='Lightened Dust'
        mr='0px'
      /><text>Lightened Dust</text>
        </HStack></Td>
        <Td>            
          {ldDreResult !== null && (
              <div>
                <p>{ldDreResult}</p>
              </div>
            )}</Td>
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e2/Refined-dust.png'
        alt='Refined Dust'
        mr='0px'
      /><text>Refined Dust</text>
        </HStack></Td>
        <Td>            
          {rdDreResult !== null && (
              <div>
                <p>{rdDreResult}</p>
              </div>
            )}</Td>
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b3/Dust_md.png'
        alt='Dust'
        mr='0px'
      /><text>Dust</text>
        </HStack></Td>
        <Td>            
          {dustDreResult !== null && (
              <div>
                <p>{dustDreResult}</p>
              </div>
            )}</Td>
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/19/Wignowessence_md.png'
        alt='Essence'
        mr='0px'
      /><text>Essence</text>
        </HStack></Td>
        <Td>            
          {essDreResult !== null && (
              <div>
                <p>{essDreResult}</p>
              </div>
            )}</Td>      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/72/Cave-mushroom.png'
        alt='Mushrooms'
        mr='0px'
      /><text>Mushrooms</text>
        </HStack></Td>
        <Td>            
          {mushDreResult !== null && (
              <div>
                <p>{mushDreResult}</p>
              </div>
            )}</Td>
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/d8/Dark-forest-leaves.png'
        alt='Dark Forest Leaves'
        mr='0px'
      /><text>Dark Forest Leaves</text>
        </HStack></Td>
        <Td>            
          {dflDreResult !== null && (
              <div>
                <p>{dflDreResult}</p>
              </div>
            )}</Td>
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5e/Bones.png/'
        alt='Bones'
        mr='0px'
      /><text>Bones</text>
        </HStack></Td>
        <Td>            
          {bonesDreResult !== null && (
              <div>
                <p>{bonesDreResult}</p>
              </div>
            )}</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1f/FusionGlass.png'
        alt='Fusion Glass'
        mr='0px'
      /><text>Fusion Glass: {FgCraftingQtyIsShown && <span>1</span>}</text>
        </HStack>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <TableContainer>
<Table id='FG crafting' variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>Crafting Materials</Th>
        <Th>Quantity</Th>
      </Tr>
    </Thead>
    <Tbody>
    <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1f/FusionGlass.png'
        alt='Fusion Glass'
        mr='0px'
      /><text>Fusion Glass</text>
        </HStack></Td>
        <Td>###</Td>
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/91/LightenedDust.png'
        alt='Lightened Dust'
        mr='0px'
      /><text>Lightened Dust</text>
        </HStack></Td>
        <Td>#</Td>
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/ad/Purple-crystal-shards.png'
        alt='Purple Crystal Shards'
        mr='0px'
      /><text>Purple Crystal Shards</text>
        </HStack></Td>
        <Td>#</Td>
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/d5/Glass_md.png/'
        alt='Glass'
        mr='0px'
      /><text>Glass</text>
        </HStack></Td>
        <Td>#</Td>
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5b/Reddye_md.png'
        alt='Red Dye'
        mr='0px'
      /><text>Red Dye</text>
        </HStack></Td>
        <Td>#</Td>      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png'
        alt='Coins'
        mr='0px'
      /><text>Coins</text>
        </HStack></Td>
        <Td>#</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
    </AccordionPanel>
  </AccordionItem>
</Accordion>

<Heading>Battle Items to Craft</Heading>
<Accordion allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/07/AakultaHelmet.png'
        alt='Aakulta Helmet'
        mr='0px'
      /><text>Aakulta Helmet: {aakhelResult}</text>
        </HStack>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <TableContainer>
<Table id='aakulta helmet' variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>Crafting Materials</Th>
        <Th>Quantity</Th>
      </Tr>
    </Thead>
    <Tbody>
    <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1f/FusionGlass.png'
        alt='Fusion Glass'
        mr='0px'
      /><text>Fusion Glass</text>
        </HStack></Td>
        <Td>            
          {fgAakhelResult !== null && (
              <div>
                <p>{fgAakhelResult}</p>
              </div>
            )}</Td>
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e7/DustRepellentElixir.png'
        alt='Dust-Repellent Elixir'
        mr='0px'
      /><text>Dust-Repellent Elixir</text>
        </HStack></Td>
        <Td id='dreaakhel'>
          {dreAakhelResult !== null && (
              <div>
                <p>{dreAakhelResult}</p>
              </div>
            )}</Td>
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png'
        alt='Steel'
        mr='0px'
      /><text>Steel</text>
        </HStack></Td>
        <Td>            
          {steelAakhelResult !== null && (
              <div>
                <p>{steelAakhelResult}</p>
              </div>
            )}</Td>
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/87/Gold_md.png/'
        alt='Gold'
        mr='0px'
      /><text>Gold</text>
        </HStack></Td>
        <Td>            
          {goldAakhelResult !== null && (
              <div>
                <p>{goldAakhelResult}</p>
              </div>
            )}</Td>
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        alt='Coins'
        mr='0px'
      /><text>Coins</text>
        </HStack></Td>
        <Td>            
          {coinsAakhelResult !== null && (
              <div>
                <p>{coinsAakhelResult}</p>
              </div>
            )}</Td>      
        </Tr>
    </Tbody>
  </Table>
</TableContainer>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/7d/ClimbingBoots.png/'
        alt='Climbing Boots'
        mr='0px'
      /><text>Climbing Boots: {clibooResult}</text>
        </HStack>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <TableContainer>
<Table id='climbing boots' variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>Crafting Materials</Th>
        <Th>Quantity</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e7/DustRepellentElixir.png'
        alt='Dust-Repellent Elixir'
        mr='0px'
      /><text>Dust-Repellent Elixir</text>
        </HStack></Td>
        <Td>            
          {dreClibooResult !== null && (
              <div>
                <p>{dreClibooResult}</p>
              </div>
            )}</Td>
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/99/Leatherroll_md.png'
        alt='Leather Roll'
        mr='0px'
      /><text>Leather Roll</text>
        </HStack></Td>
        <Td>            
          {leatherrollClibooResult !== null && (
              <div>
                <p>{leatherrollClibooResult}</p>
              </div>
            )}</Td>
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png'
        alt='Steel'
        mr='0px'
      /><text>Steel</text>
        </HStack></Td>
        <Td>            
          {steelClibooResult !== null && (
              <div>
                <p>{steelClibooResult}</p>
              </div>
            )}</Td>
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        alt='Coins'
        mr='0px'
      /><text>Coins</text>
        </HStack></Td>
        <Td>            
          {coinsClibooResult !== null && (
              <div>
                <p>{coinsClibooResult}</p>
              </div>
            )}</Td>
              </Tr>
    </Tbody>
  </Table>
</TableContainer>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f8/CrestedHelmet.png'
        alt='Crested Helmet'
        mr='0px'
      /><text>Crested Helmet: {crehelResult}</text>
        </HStack>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <TableContainer>
<Table id='Crested Helmet' variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>Crafting Materials</Th>
        <Th>Quantity</Th>
      </Tr>
    </Thead>
    <Tbody>
    <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1f/FusionGlass.png'
        alt='Fusion Glass'
        mr='0px'
      /><text>Fusion Glass</text>
        </HStack></Td>
        <Td>            
          {fgCrehelResult !== null && (
              <div>
                <p>{fgCrehelResult}</p>
              </div>
            )}</Td>
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e7/DustRepellentElixir.png'
        alt='Dust-Repellent Elixir'
        mr='0px'
      /><text>Dust-Repellent Elixir</text>
        </HStack></Td>
        <Td>            
          {dreCrehelResult !== null && (
              <div>
                <p>{dreCrehelResult}</p>
              </div>
            )}</Td>
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png'
        alt='Steel'
        mr='0px'
      /><text>Steel</text>
        </HStack></Td>
        <Td>            
          {steelCrehelResult !== null && (
              <div>
                <p>{steelCrehelResult}</p>
              </div>
            )}</Td>
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        alt='Coins'
        mr='0px'
      /><text>Coins</text>
        </HStack></Td>
        <Td>            
          {coinsCrehelResult !== null && (
              <div>
                <p>{coinsCrehelResult}</p>
              </div>
            )}</Td>      
        </Tr>
    </Tbody>
  </Table>
</TableContainer>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b6/FlowerSlingshot.png/'
        alt='Flower Slingshot'
        mr='0px'
      /><text>Flower Slingshot: {flosliResult}</text>
        </HStack>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <TableContainer>
<Table id='Flower Slingshot' variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>Crafting Materials</Th>
        <Th>Quantity</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e7/DustRepellentElixir.png'
        alt='Dust-Repellent Elixir'
        mr='0px'
      /><text>Dust-Repellent Elixir</text>
        </HStack></Td>
        <Td>            
          {dreFlosliResult !== null && (
              <div>
                <p>{dreFlosliResult}</p>
              </div>
            )}</Td>  
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/0c/Hardwood_md.png'
        alt='Hardwood'
        mr='0px'
      /><text>Hardwood</text>
        </HStack></Td>
        <Td>            
          {hardwoodFlosliResult !== null && (
              <div>
                <p>{hardwoodFlosliResult}</p>
              </div>
            )}</Td>  
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/47/Reinforced-rope.png/'
        alt='Reinforced Rope'
        mr='0px'
      /><text>Reinforced Rope</text>
        </HStack></Td>
        <Td>            
          {reinforcedropeFlosliResult !== null && (
              <div>
                <p>{reinforcedropeFlosliResult}</p>
              </div>
            )}</Td>  
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/99/Leatherroll_md.png'
        alt='Leather Roll'
        mr='0px'
      /><text>Leather Roll</text>
        </HStack></Td>
        <Td>            
          {leatherrollFlosliResult !== null && (
              <div>
                <p>{leatherrollFlosliResult}</p>
              </div>
            )}</Td>  
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        alt='Coins'
        mr='0px'
      /><text>Coins</text>
        </HStack></Td>
        <Td>            
          {coinsFlosliResult !== null && (
              <div>
                <p>{coinsFlosliResult}</p>
              </div>
            )}</Td>  
        </Tr>
    </Tbody>
  </Table>
</TableContainer>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Fusion_Crossbow.png'
        alt='Fusion Crossbow'
        mr='0px'
      /><text>Fusion Crossbow: {fuscroResult}</text>
        </HStack>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <TableContainer>
<Table id='Fusion Crossbow' variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>Crafting Materials</Th>
        <Th>Quantity</Th>
      </Tr>
    </Thead>
    <Tbody>
    <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1f/FusionGlass.png'
        alt='Fusion Glass'
        mr='0px'
      /><text>Fusion Glass</text>
        </HStack></Td>
        <Td>            
          {fgFuscroResult !== null && (
              <div>
                <p>{fgFuscroResult}</p>
              </div>
            )}</Td> 
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e7/DustRepellentElixir.png'
        alt='Dust-Repellent Elixir'
        mr='0px'
      /><text>Dust-Repellent Elixir</text>
        </HStack></Td>
        <Td>            
          {dreFuscroResult !== null && (
              <div>
                <p>{dreFuscroResult}</p>
              </div>
            )}</Td> 
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/0c/Hardwood_md.png'
        alt='Hardwood'
        mr='0px'
      /><text>Hardwood</text>
        </HStack></Td>
        <Td>            
          {hardwoodFuscroResult !== null && (
              <div>
                <p>{hardwoodFuscroResult}</p>
              </div>
            )}</Td> 
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/47/Reinforced-rope.png'
        alt='Reinforced Rope'
        mr='0px'
      /><text>Reinforced Rope</text>
        </HStack></Td>
        <Td>            
          {reinforcedropeFuscroResult !== null && (
              <div>
                <p>{reinforcedropeFuscroResult}</p>
              </div>
            )}</Td> 
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png'
        alt='Steel'
        mr='0px'
      /><text>Steel</text>
        </HStack></Td>
        <Td>            
          {steelFuscroResult !== null && (
              <div>
                <p>{steelFuscroResult}</p>
              </div>
            )}</Td> 
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        alt='Coins'
        mr='0px'
      /><text>Coins</text>
        </HStack></Td>
        <Td>            
          {coinsFuscroResult !== null && (
              <div>
                <p>{coinsFuscroResult}</p>
              </div>
            )}</Td>  
        </Tr>
    </Tbody>
  </Table>
</TableContainer>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fa/FusionCuirass.png'
        alt='Fusion Cuirass'
        mr='0px'
      /><text>Fusion Cuirass: {fuscuiResult}</text>
        </HStack>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <TableContainer>
<Table id='Fusion Cuirass' variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>Crafting Materials</Th>
        <Th>Quantity</Th>
      </Tr>
    </Thead>
    <Tbody>
    <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1f/FusionGlass.png'
        alt='Fusion Glass'
        mr='0px'
      /><text>Fusion Glass</text>
        </HStack></Td>
        <Td>            
          {fgFuscuiResult !== null && (
              <div>
                <p>{fgFuscuiResult}</p>
              </div>
            )}</Td>  
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e7/DustRepellentElixir.png'
        alt='Dust-Repellent Elixir'
        mr='0px'
      /><text>Dust-Repellent Elixir</text>
        </HStack></Td>
        <Td>            
          {dreFuscuiResult !== null && (
              <div>
                <p>{dreFuscuiResult}</p>
              </div>
            )}</Td>  
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png'
        alt='Steel'
        mr='0px'
      /><text>Steel</text>
        </HStack></Td>
        <Td>            
          {steelFuscuiResult !== null && (
              <div>
                <p>{steelFuscuiResult}</p>
              </div>
            )}</Td>  
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/0b/Finefabric_md.png'
        alt='Fine Fabric'
        mr='0px'
      /><text>Fine Fabric</text>
        </HStack></Td>
        <Td>            
          {finefabricFuscuiResult !== null && (
              <div>
                <p>{finefabricFuscuiResult}</p>
              </div>
            )}</Td>  
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        alt='Coins'
        mr='0px'
      /><text>Coins</text>
        </HStack></Td>
        <Td>            
          {coinsFuscuiResult !== null && (
              <div>
                <p>{coinsFuscuiResult}</p>
              </div>
            )}</Td>  
        </Tr>
    </Tbody>
  </Table>
</TableContainer>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/c/c6/FusionSword.png'
        alt='Fusion Sword'
        mr='0px'
      /><text>Fusion Sword: {fusswoResult}</text>
        </HStack>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <TableContainer>
<Table id='Fusion Sword' variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>Crafting Materials</Th>
        <Th>Quantity</Th>
      </Tr>
    </Thead>
    <Tbody>
    <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1f/FusionGlass.png'
        alt='Fusion Glass'
        mr='0px'
      /><text>Fusion Glass</text>
        </HStack></Td>
        <Td>            
          {fgFusswoResult !== null && (
              <div>
                <p>{fgFusswoResult}</p>
              </div>
            )}</Td>  
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e7/DustRepellentElixir.png'
        alt='Dust-Repellent Elixir'
        mr='0px'
      /><text>Dust-Repellent Elixir</text>
        </HStack></Td>
        <Td>            
          {dreFusswoResult !== null && (
              <div>
                <p>{dreFusswoResult}</p>
              </div>
            )}</Td>  
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png'
        alt='Steel'
        mr='0px'
      /><text>Steel</text>
        </HStack></Td>
        <Td>            
          {steelFusswoResult !== null && (
              <div>
                <p>{steelFusswoResult}</p>
              </div>
            )}</Td>  
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/87/Gold_md.png/'
        alt='Gold'
        mr='0px'
      /><text>Gold</text>
        </HStack></Td>
        <Td>            
          {goldFusswoResult !== null && (
              <div>
                <p>{goldFusswoResult}</p>
              </div>
            )}</Td>  
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        alt='Coins'
        mr='0px'
      /><text>Coins</text>
        </HStack></Td>
        <Td>            
          {coinsFusswoResult !== null && (
              <div>
                <p>{coinsFusswoResult}</p>
              </div>
            )}</Td>  
        </Tr>
    </Tbody>
  </Table>
</TableContainer>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/3/3c/HopesLight.png'
        alt='Hopes Light'
        mr='0px'
      /><text>Hope's Light: {hopligResult}</text>
        </HStack>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <TableContainer>
<Table id='Hopes Light' variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>Crafting Materials</Th>
        <Th>Quantity</Th>
      </Tr>
    </Thead>
    <Tbody>
    <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1f/FusionGlass.png'
        alt='Fusion Glass'
        mr='0px'
      /><text>Fusion Glass</text>
        </HStack></Td>
        <Td>            
          {fgHopligResult !== null && (
              <div>
                <p>{fgHopligResult}</p>
              </div>
            )}</Td>       
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e7/DustRepellentElixir.png'
        alt='Dust-Repellent Elixir'
        mr='0px'
      /><text>Dust-Repellent Elixir</text>
        </HStack></Td>
        <Td>            
          {dreHopligResult !== null && (
              <div>
                <p>{dreHopligResult}</p>
              </div>
            )}</Td>       
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png'
        alt='Steel'
        mr='0px'
      /><text>Steel</text>
        </HStack></Td>
        <Td>            
          {steelHopligResult !== null && (
              <div>
                <p>{steelHopligResult}</p>
              </div>
            )}</Td>       
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        alt='Coins'
        mr='0px'
      /><text>Coins</text>
        </HStack></Td>
        <Td>            
          {coinsHopligResult !== null && (
              <div>
                <p>{coinsHopligResult}</p>
              </div>
            )}</Td>       
        </Tr>
    </Tbody>
  </Table>
</TableContainer>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/db/LeatherCuriass.png'
        alt='Leather Cuirass'
        mr='0px'
      /><text>Leather Cuirass: {leacuiResult}</text>
        </HStack>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <TableContainer>
<Table id='Leather Cuirass' variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>Crafting Materials</Th>
        <Th>Quantity</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e7/DustRepellentElixir.png'
        alt='Dust-Repellent Elixir'
        mr='0px'
      /><text>Dust-Repellent Elixir</text>
        </HStack></Td>
        <Td>            
          {dreLeacuiResult !== null && (
              <div>
                <p>{dreLeacuiResult}</p>
              </div>
            )}</Td>     
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/99/Leatherroll_md.png'
        alt='Leather Roll'
        mr='0px'
      /><text>Leather Roll</text>
        </HStack></Td>
        <Td>            
          {leatherrollLeacuiResult !== null && (
              <div>
                <p>{leatherrollLeacuiResult}</p>
              </div>
            )}</Td>     
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png'
        alt='Steel'
        mr='0px'
      /><text>Steel</text>
        </HStack></Td>
        <Td>            
          {steelLeacuiResult !== null && (
              <div>
                <p>{steelLeacuiResult}</p>
              </div>
            )}</Td>     
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/0b/Finefabric_md.png'
        alt='Fine Fabric'
        mr='0px'
      /><text>Fine Fabric</text>
        </HStack></Td>
        <Td>            
          {finefabricLeacuiResult !== null && (
              <div>
                <p>{finefabricLeacuiResult}</p>
              </div>
            )}</Td>     
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        alt='Coins'
        mr='0px'
      /><text>Coins</text>
        </HStack></Td>
        <Td>            
          {coinsLeacuiResult !== null && (
              <div>
                <p>{coinsLeacuiResult}</p>
              </div>
            )}</Td>     
        </Tr>
    </Tbody>
  </Table>
</TableContainer>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f6/LeatherTurnshoe.png'
        alt='Leather Turnshoe'
        mr='0px'
      /><text>Leather Turnshoe: {leaturResult}</text>
        </HStack>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <TableContainer>
<Table id='Leather Turnshoe' variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>Crafting Materials</Th>
        <Th>Quantity</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e7/DustRepellentElixir.png'
        alt='Dust-Repellent Elixir'
        mr='0px'
      /><text>Dust-Repellent Elixir</text>
        </HStack></Td>
        <Td>            
          {dreLeaturResult !== null && (
              <div>
                <p>{dreLeaturResult}</p>
              </div>
            )}</Td>           
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/99/Leatherroll_md.png'
        alt='Leather Roll'
        mr='0px'
      /><text>Leather Roll</text>
        </HStack></Td>
        <Td>            
          {leatherrollLeaturResult !== null && (
              <div>
                <p>{leatherrollLeaturResult}</p>
              </div>
            )}</Td>           
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/0b/Finefabric_md.png'
        alt='Fine Fabric'
        mr='0px'
      /><text>Fine Fabric</text>
        </HStack></Td>
        <Td>            
          {finefabricLeaturResult !== null && (
              <div>
                <p>{finefabricLeaturResult}</p>
              </div>
            )}</Td>           
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        alt='Coins'
        mr='0px'
      /><text>Coins</text>
        </HStack></Td>
        <Td>            
          {coinsLeaturResult !== null && (
              <div>
                <p>{coinsLeaturResult}</p>
              </div>
            )}</Td>           
        </Tr>
    </Tbody>
  </Table>
</TableContainer>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a7/LightsBloom.png'
        alt='Lights Bloom'
        mr='0px'
      /><text>Light's Bloom: {ligbloResult}</text>
        </HStack>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <TableContainer>
<Table id='Lights Bloom' variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>Crafting Materials</Th>
        <Th>Quantity</Th>
      </Tr>
    </Thead>
    <Tbody>
    <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1f/FusionGlass.png'
        alt='Fusion Glass'
        mr='0px'
      /><text>Fusion Glass</text>
        </HStack></Td>
        <Td>            
          {fgLigbloResult !== null && (
              <div>
                <p>{fgLigbloResult}</p>
              </div>
            )}</Td>        
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e7/DustRepellentElixir.png'
        alt='Dust-Repellent Elixir'
        mr='0px'
      /><text>Dust-Repellent Elixir</text>
        </HStack></Td>
        <Td>            
          {dreLigbloResult !== null && (
              <div>
                <p>{dreLigbloResult}</p>
              </div>
            )}</Td>        
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/87/Gold_md.png/'
        alt='Gold'
        mr='0px'
      /><text>Gold</text>
        </HStack></Td>
        <Td>            
          {goldLigbloResult !== null && (
              <div>
                <p>{goldLigbloResult}</p>
              </div>
            )}</Td>        
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        alt='Coins'
        mr='0px'
      /><text>Coins</text>
        </HStack></Td>
        <Td>            
          {coinsLigbloResult !== null && (
              <div>
                <p>{coinsLigbloResult}</p>
              </div>
            )}</Td>        
        </Tr>
    </Tbody>
  </Table>
</TableContainer>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f0/PoePick.png/'
        alt='Poe Pick'
        mr='0px'
      /><text>Poe Pick: {poepicResult}</text>
        </HStack>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <TableContainer>
<Table id='Poe Pick' variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>Crafting Materials</Th>
        <Th>Quantity</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e7/DustRepellentElixir.png'
        alt='Dust-Repellent Elixir'
        mr='0px'
      /><text>Dust-Repellent Elixir</text>
        </HStack></Td>
        <Td>            
          {drePoepicResult !== null && (
              <div>
                <p>{drePoepicResult}</p>
              </div>
            )}</Td> 
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/0c/Hardwood_md.png'
        alt='Hardwood'
        mr='0px'
      /><text>Hardwood</text>
        </HStack></Td>
        <Td>            
          {hardwoodPoepicResult !== null && (
              <div>
                <p>{hardwoodPoepicResult}</p>
              </div>
            )}</Td> 
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b4/Steel_md.png'
        alt='Steel'
        mr='0px'
      /><text>Steel</text>
        </HStack></Td>
        <Td>            
          {steelPoepicResult !== null && (
              <div>
                <p>{steelPoepicResult}</p>
              </div>
            )}</Td> 
      </Tr>
      <Tr>
<Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5a/Coin_md.png/'
        alt='Coins'
        mr='0px'
      /><text>Coins</text>
        </HStack></Td>
        <Td>            
          {coinsPoepicResult !== null && (
              <div>
                <p>{coinsPoepicResult}</p>
              </div>
            )}</Td> 
              </Tr>
    </Tbody>
  </Table>
</TableContainer>
    </AccordionPanel>
  </AccordionItem>
</Accordion>

          </VStack>
          
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;