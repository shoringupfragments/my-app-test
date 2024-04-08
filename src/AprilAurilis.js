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
  Link,
  useColorMode, useColorModeValue
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';




function App() {

  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue('light', 'dark');
  const SwitchIcon = useColorModeValue(FaSun, FaMoon);
  const tablecolor = useColorModeValue('purple', 'green');
  const AKtablecolor = useColorModeValue('purple', 'purple');
  const Astrotablecolor = useColorModeValue('purple', 'blue');
  const Spellstablecolor = useColorModeValue('purple', 'yellow');

  const [AlchemyActive, setAlchemyActive] = useState(false);
  const [AKActive, setAKActive] = useState(false);
  const [AstroActive, setAstroActive] = useState(false);
  const [SpellsActive, setSpellsActive] = useState(false);

  const [AlchemyIsShown, setAlchemyIsShown] = useState(false);
  const [AKIsShown, setAKIsShown] = useState(false);
  const [AstroIsShown, setAstroIsShown] = useState(false);
  const [SpellsIsShown, setSpellsIsShown] = useState(false);
  const [NullIsShown, setNullIsShown] = useState(false);

  const [OdeeYesActive, setOdeeYesActive] = useState(false);
  const [OdeeNoActive, setOdeeNoActive] = useState(false);

  const [OdeeYesIsShown, setOdeeYesIsShown] = useState(false);
  const [OdeeNoIsShown, setOdeeNoIsShown] = useState(false);

  const [CrystalActive, setCrystalActive] = useState(false);
  const [GalaxyActive, setGalaxyActive] = useState(false);

  const [CrystalIsShown, setCrystalIsShown] = useState(false);
  const [GalaxyIsShown, setGalaxyIsShown] = useState(false);

  const [StarfallYesActive, setStarfallYesActive] = useState(false);
  const [StarfallNoActive, setStarfallNoActive] = useState(false);

  const [StarfallYesIsShown, setStarfallYesIsShown] = useState(false);
  const [StarfallNoIsShown, setStarfallNoIsShown] = useState(false);


  const handleAlchemyClick = event => {
    // 👇️ toggle shown state
    setAlchemyIsShown(current => !AlchemyIsShown);
    setAlchemyActive(!AlchemyActive);
  };

  const handleAKClick = event => {
    // 👇️ toggle shown state
    setAKIsShown(current => !AKIsShown)
    setAKActive(!AKActive);
    setOdeeNoIsShown(current => null);
setOdeeNoActive (current => null);
setOdeeYesIsShown(current => null);
setOdeeYesActive (current => null);
    };

    const handleAstroClick = event => {
      // 👇️ toggle shown state
      setAstroIsShown(current => !AstroIsShown);
      setAstroActive(!AstroActive);
      };
  
      const handleSpellsClick = event => {
        // 👇️ toggle shown state
        setSpellsActive(!SpellsActive);
        setSpellsIsShown(current => !SpellsIsShown);
        };




const handleOdeeYesClick = event => {
// 👇️ toggle shown state
setOdeeYesIsShown(current => !OdeeYesIsShown);
setOdeeYesActive(!OdeeYesActive);
setOdeeNoIsShown(current => null);
setOdeeNoActive (current => null);
};

const handleOdeeNoClick = event => {
  // 👇️ toggle shown state
  setOdeeNoIsShown(current => !OdeeNoIsShown);
  setOdeeNoActive(!OdeeNoActive);
  setOdeeYesIsShown(current => null);
  setOdeeYesActive (current => null);
};

const handleCrystalClick = event => {
  // 👇️ toggle shown state
  setCrystalIsShown(current => !CrystalIsShown);
  setCrystalActive(!CrystalActive);
  setGalaxyIsShown(current => null);
  setGalaxyActive (current => null);
  };
  
  const handleGalaxyClick = event => {
    // 👇️ toggle shown state
    setGalaxyIsShown(current => !GalaxyIsShown);
    setGalaxyActive(!GalaxyActive);
    setCrystalIsShown(current => null);
    setCrystalActive (current => null);
  };  


  const handleStarfallYesClick = event => {
    // 👇️ toggle shown state
    setStarfallYesIsShown(current => !StarfallYesIsShown);
    setStarfallYesActive(!StarfallYesActive);
    setStarfallNoIsShown(current => null);
    setStarfallNoActive (current => null);
    };
    
    const handleStarfallNoClick = event => {
      // 👇️ toggle shown state
      setStarfallNoIsShown(current => !StarfallNoIsShown);
      setStarfallNoActive(!StarfallNoActive);
      setStarfallYesIsShown(current => null);
      setStarfallYesActive (current => null);
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


//~*~*~*ALCHEMY MONSTERS*~*~*~//
//mund//
const [Mund, setMund] = useState(0); // Or any other non-zero value

const handleMundChange = (valueString) => {
  const value = parseFloat(valueString);
    setMund(value);
  };

const totalMund = Math.max (8-Mund,0);

//galaxy mund//
const [GMund, setGMund] = useState(0); // Or any other non-zero value

const handleGMundChange = (valueString) => {
  const value = parseFloat(valueString);
    setGMund(value);
  };

const totalGMund = Math.max (8-GMund,0);

//cobaltoan mund//
const [CMund, setCMund] = useState(0); // Or any other non-zero value

const handleCMundChange = (valueString) => {
  const value = parseFloat(valueString);
    setCMund(value);
  };

const totalCMund = Math.max (10-CMund,0);

//quaruk//
const [Quaruk, setQuaruk] = useState(0); // Or any other non-zero value

const handleQuarukChange = (valueString) => {
  const value = parseFloat(valueString);
    setQuaruk(value);
  };

const totalQuaruk = Math.max (8-Quaruk,0);

//aederster//
const [Aed, setAed] = useState(0); // Or any other non-zero value

const handleAedChange = (valueString) => {
  const value = parseFloat(valueString);
    setAed(value);
  };

const totalAed = Math.max (77-Aed,0);

//jaraci//
const [Jar, setJar] = useState(0); // Or any other non-zero value

const handleJarChange = (valueString) => {
  const value = parseFloat(valueString);
    setJar(value);
  };

const totalJar = Math.max (86-Jar,0);

//sapee//
const [Sapee, setSapee] = useState(0); // Or any other non-zero value

const handleSapeeChange = (valueString) => {
  const value = parseFloat(valueString);
    setSapee(value);
  };

const totalSapee = Math.max (42-Sapee,0);

//audrick ii//
const [Aud, setAud] = useState(0); // Or any other non-zero value

const handleAudChange = (valueString) => {
  const value = parseFloat(valueString);
    setAud(value);
  };

const totalAud = Math.max (40-Aud,0);

//~*~*~*ANCIENT KNOWLEDGE MONSTERS*~*~*~//
//whodini//
const [Who, setWho] = useState(0); // Or any other non-zero value

const handleWhoChange = (valueString) => {
  const value = parseFloat(valueString);
    setWho(value);
  };

const totalWhodini = Math.max (12-Who,0);

//galaxy whodini//
const [GWho, setGWho] = useState(0); // Or any other non-zero value

const handleGWhoChange = (valueString) => {
  const value = parseFloat(valueString);
    setGWho(value);
  };

const totalGWho = Math.max (12-GWho,0);

//cobaltoan whodini//
const [CWho, setCWho] = useState(0); // Or any other non-zero value

const handleCWhoChange = (valueString) => {
  const value = parseFloat(valueString);
    setCWho(value);
  };

const totalCWho = Math.max (12-CWho,0);

//musya//
const [Musya, setMusya] = useState(0); // Or any other non-zero value

const handleMusyaChange = (valueString) => {
  const value = parseFloat(valueString);
    setMusya(value);
  };

const totalMusya = Math.max (180-Musya,0);

//bomatik//
const [Boma, setBoma] = useState(0); // Or any other non-zero value

const handleBomaChange = (valueString) => {
  const value = parseFloat(valueString);
    setBoma(value);
  };

const totalBoma = Math.max (76-Boma,0);

//tyomu//
const [Tyo, setTyo] = useState(0); // Or any other non-zero value

const handleTyoChange = (valueString) => {
  const value = parseFloat(valueString);
    setTyo(value);
  };

const totalTyo = Math.max (55-Tyo,0);

//sprenki//
const [Spre, setSpre] = useState(0); // Or any other non-zero value

const handleSpreChange = (valueString) => {
  const value = parseFloat(valueString);
    setSpre(value);
  };

const totalSpre = Math.max (21-Spre,0);

//odys/odees//
const [Odees, setOdees] = useState(0); // Or any other non-zero value

const handleOdeesChange = (valueString) => {
  const value = parseFloat(valueString);
    setOdees(value);
  };

const totalOdees = Math.max (8-Odees,0);


//~*~*~*ASTROLOGY MONSTERS*~*~*~//
//alderbam//
const [Alder, setAlder] = useState(0); // Or any other non-zero value

const handleAlderChange = (valueString) => {
  const value = parseFloat(valueString);
	setAlder(value);
  };

const totalAlderdini = Math.max (20-Alder,0);

//galaxy alderbam//
const [GAlder, setGAlder] = useState(0); // Or any other non-zero value

const handleGAlderChange = (valueString) => {
  const value = parseFloat(valueString);
	setGAlder(value);
  };

const totalGAlder = Math.max (20-GAlder,0);

//cobaltoan alderbam//
const [CAlder, setCAlder] = useState(0); // Or any other non-zero value

const handleCAlderChange = (valueString) => {
  const value = parseFloat(valueString);
	setCAlder(value);
  };

const totalCAlder = Math.max (8-CAlder,0);

//mertino//
const [Mert, setMert] = useState(0); // Or any other non-zero value

const handleMertChange = (valueString) => {
  const value = parseFloat(valueString);
	setMert(value);
  };

const totalMert = Math.max (11-Mert,0);

//greikon//
const [Greif, setGreif] = useState(0); // Or any other non-zero value

const handleGreifChange = (valueString) => {
  const value = parseFloat(valueString);
	setGreif(value);
  };

const totalGreif = Math.max (16-Greif,0);

//gullio//
const [Gull, setGull] = useState(0); // Or any other non-zero value

const handleGullChange = (valueString) => {
  const value = parseFloat(valueString);
	setGull(value);
  };

const totalGull = Math.max (55-Gull,0);

//knuff//
const [Knuff, setKnuff] = useState(0); // Or any other non-zero value

const handleKnuffChange = (valueString) => {
  const value = parseFloat(valueString);
	setKnuff(value);
  };

const totalKnuff = Math.max (222-Knuff,0);

//wizkal//
const [Wiz, setWiz] = useState(0); // Or any other non-zero value

const handleWizChange = (valueString) => {
  const value = parseFloat(valueString);
	setWiz(value);
  };

const totalWiz = Math.max (35-Wiz,0);


//~*~*~*SPELLS MONSTERS*~*~*~//
//chysis//
const [Chy, setChy] = useState(0); // Or any other non-zero value

const handleChyChange = (valueString) => {
  const value = parseFloat(valueString);
	setChy(value);
  };

const totalChydini = Math.max (8-Chy,0);

//galaxy chysis//
const [GChy, setGChy] = useState(0); // Or any other non-zero value

const handleGChyChange = (valueString) => {
  const value = parseFloat(valueString);
	setGChy(value);
  };

const totalGChy = Math.max (8-GChy,0);

//cobaltoan chysis//
const [CChy, setCChy] = useState(0); // Or any other non-zero value

const handleCChyChange = (valueString) => {
  const value = parseFloat(valueString);
	setCChy(value);
  };

const totalCChy = Math.max (8-CChy,0);

//zenme//
const [Zen, setZen] = useState(0); // Or any other non-zero value

const handleZenChange = (valueString) => {
  const value = parseFloat(valueString);
	setZen(value);
  };

const totalZen = Math.max (10-Zen,0);

//kinguz//
const [King, setKing] = useState(0); // Or any other non-zero value

const handleKingChange = (valueString) => {
  const value = parseFloat(valueString);
	setKing(value);
  };

const totalKing = Math.max (111-King,0);

//neilon//
const [Neil, setNeil] = useState(0); // Or any other non-zero value

const handleNeilChange = (valueString) => {
  const value = parseFloat(valueString);
	setNeil(value);
  };

const totalNeil = Math.max (50-Neil,0);

//oniine//
const [Oni, setOni] = useState(0); // Or any other non-zero value

const handleOniChange = (valueString) => {
  const value = parseFloat(valueString);
	setOni(value);
  };

const totalOni = Math.max (15-Oni,0);

//choros//
const [Chor, setChor] = useState(0); // Or any other non-zero value

const handleChorChange = (valueString) => {
  const value = parseFloat(valueString);
	setChor(value);
  };

const totalChor = Math.max (20-Chor,0);

//repeatable quest: 10 aederster, 6 jaraci, 6 sapee//
const [AedTen, setAedTen] = useState(0); // Or any other non-zero value
const totalAedTen = Math.floor (totalAed/10);

const [JarSix, setJarSix] = useState(0); // Or any other non-zero value
const totalJarSix = Math.floor (totalJar/6);

const [SapSix, setSapSix] = useState(0); // Or any other non-zero value
const totalSapSix = Math.floor (totalSapee/6);

const SmallestAedJarSap = Math.min (totalAedTen, totalJarSix, totalSapSix)

//repeatable quest: 12 sapee//

const [SapTwelve, setSapTwelve] = useState(0); // Or any other non-zero value
const totalSapTwelve = Math.floor (totalSapee/12);



//repeatable quest: 4 tyomu, 8 odees//

const [TyoFour, setTyoFour] = useState(0); // Or any other non-zero value
const totalTyoFour = Math.floor (totalTyo/4);

const [OdeesEight, setOdeesEight] = useState(0); // Or any other non-zero value
const totalOdeesEight = Math.floor (totalOdees/8);

const SmallestTyoOdees = Math.min (totalTyoFour, totalOdeesEight)

//repeatable quest: 4 tyomu, 8 odees - repeat odees//

const [OdeeReps, setOdeeReps] = useState(0);
const totalOdeeReps = Math.floor (totalTyoFour*8)

const [OdeeQuest, setOdeeQuest] = useState(0);
const totalOdeeQuest = Math.floor (totalOdeeReps/44)

//repeatable quest: 2 wizkal, 16 knuff//

const [WizTwo, setWizTwo] = useState(0); // Or any other non-zero value
const totalWizTwo = Math.floor (totalWiz/2);

const [KnuSixteen, setKnuSixteen] = useState(0); // Or any other non-zero value
const totalKnuSixteen = Math.floor (totalKnuff/16);

const SmallestWizKnuff = Math.min (totalWizTwo, totalKnuSixteen)

//repeatable quest: 3 mertino//

const [MertThree, setMertThree] = useState(0); // Or any other non-zero value
const totalMertThree = Math.floor (totalMert/3);

//repeatable quest: 3 greifkon, 10 gullio//

const [GreifThree, setGreifThree] = useState(0); // Or any other non-zero value
const totalGreifThree = Math.floor (totalGreif/3);

const [GullTen, setGullTen] = useState(0); // Or any other non-zero value
const totalGullTen = Math.floor (totalGull/10);

const SmallestGreifGull = Math.min (totalGreifThree, totalGullTen)

//repeatable quest: 1 choros//
const [ChorOne, setChorOne] = useState(0); // Or any other non-zero value
const totalChorOne = Math.floor (totalChor/1);

//repeatable quest: 3 oniine//
const [OniThree, setOniThree] = useState(0); // Or any other non-zero value
const totalOniThree = Math.floor (totalOni/3);

//repeatable quest: 5 neilon//
const [NeilFive, setNeilFive] = useState(0); // Or any other non-zero value
const totalNeilFive = Math.floor (totalNeil/5);

//repeatable quest: 1 each cobaltoan//

const [CChyOne, setCChyOne] = useState(0); // Or any other non-zero value
const totalCChyOne = Math.floor (totalCChy/1);

const [CAlderOne, setCAlderOne] = useState(0); // Or any other non-zero value
const totalCAlderOne = Math.floor (totalCAlder/1);

const [CWhoOne, setCWhoOne] = useState(0); // Or any other non-zero value
const totalCWhoOne = Math.floor (totalCWho/1);

const [CMundOne, setCMundOne] = useState(0); // Or any other non-zero value
const totalCMundOne = Math.floor (totalCMund/1);

const SmallestCrystal = Math.min (totalCChyOne, totalCAlderOne, totalCWhoOne, totalCMundOne)

//repeatable quest: 1 each galaxy//

const [GChyOne, setGChyOne] = useState(0); // Or any other non-zero value
const totalGChyOne = Math.floor (totalGChy/1);

const [GAlderOne, setGAlderOne] = useState(0); // Or any other non-zero value
const totalGAlderOne = Math.floor (totalGAlder/1);

const [GWhoOne, setGWhoOne] = useState(0); // Or any other non-zero value
const totalGWhoOne = Math.floor (totalGWho/1);

const [GMundOne, setGMundOne] = useState(0); // Or any other non-zero value
const totalGMundOne = Math.floor (totalGMund/1);

const SmallestGalaxy = Math.min (totalGChyOne, totalGAlderOne, totalGWhoOne, totalGMundOne)


//alchemy exam credit math//
const [AlcExam, setAlcExam] = useState(0); // Or any other non-zero value
const calculateAlcExamResult = {SmallestAedJarSap, totalSapTwelve}
const totalAlcExam = Math.round (SmallestAedJarSap + totalSapTwelve)

//ancient knowledge exam credit math - yes odees //
const [AKYesExam, setAKYesExam] = useState(0); // Or any other non-zero value
const calculateAKYesExamResult = {totalTyoFour, totalOdeeQuest}
const totalAKYesExam = Math.round (totalTyoFour + totalOdeeQuest)


//astrology exam credit math//
const [AstroExam, setAstroExam] = useState(0); // Or any other non-zero value
const calculateAstroExamResult = {SmallestWizKnuff, totalMertThree, SmallestGreifGull}
const totalAstroExam = Math.round (SmallestWizKnuff + totalMertThree + SmallestGreifGull)

//spells exam credit math - no dungeon//
const [DoubleOni, setDoubleOni] = useState(0);
const totalDoubleOni = Math.round (totalOniThree*2)

const [SDR1_1_SF, setSDR1_1_SF] = useState(0);
const totalSDR1_1_SF = Math.round (totalChorOne*5)

const [OniCombo_SF, setOniCombo_SF] = useState(0);
const totalOniCombo_SF = Math.round (totalOniThree*15)

const [SDR3_1_SF, setSDR3_1_SF] = useState(0);
const totalSDR3_1_SF = Math.round (totalNeilFive*5)

const [SpellsExam, setSpellsExam] = useState(0); // Or any other non-zero value
const calculateSpellsExamResult = {totalChorOne, totalNeilFive, totalDoubleOni}
const totalSpellsExam = Math.round (totalChorOne + totalNeilFive + totalDoubleOni)

//spellfire math - no dungeon//
const [Spellfire, setSpellfire] = useState(0); // Or any other non-zero value
const calculateSpellfireResult = {totalSDR1_1_SF, totalOniCombo_SF, totalSDR3_1_SF}
const totalSpellfire = Math.max (totalSDR1_1_SF + totalOniCombo_SF + totalSDR3_1_SF, 0)

//starfall token math//


//format the WC #s//
//NOANZA//
        const number = totalMund;
        const USformatter = new Intl.NumberFormat("en-US");
        const NoanzaGlivaWC = USformatter.format(number);


//assorted other mats -- essence up above//


// END OF EQUATIONS SO FAR//

  return (
    <Box textAlign="center" fontSize="xl">
        <Grid w='100%' minH="100vh">
          <VStack spacing={8}>
            <Heading>"Defend Your Thesis" Aurilis Academy Quests</Heading>
            <Container><p>This page calculates quest overlap for the large Aurilis Academy "Thesis" quests, based upon your progress so far. <br></br> <br></br> Make sure you complete the
              various Side Quests and Dungeon Chains you want to get done, because this page doesn't account for all Aurilis quests — only the most efficient repeatables.
            </p>
            <br></br>
            </Container>
            <Container><Divider></Divider></Container>

<VStack>
<Heading>4theMath:</Heading>
<Spacer></Spacer>
</VStack>
            <HStack><text>Select which thesis quest(s) you're currently working on:</text> </HStack>
        <Container><Wrap justify='center'>
        <WrapItem>
        <Button variant='outline' onClick={handleAlchemyClick} style={{ backgroundColor: AlchemyActive ? "#011c00" : "transparent" }}>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://i.imgur.com/dzFooLd.png'
        mr='12px'
      />
      <span>Alchemy</span></Button>
      </WrapItem>
      <WrapItem>
        <Button variant='outline' onClick= {handleAKClick} style={{ backgroundColor: AKActive ? "#130119" : "transparent" }}>      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://i.imgur.com/hEBDkSp.png'
        mr='12px'
      />
      <span>Ancient Knowledge</span></Button></WrapItem>
      <WrapItem>
      <Button variant='outline' onClick= {handleAstroClick} style={{ backgroundColor: AstroActive ? "#081a38" : "transparent" }}>      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://i.imgur.com/EDRa116.png'
        mr='12px'
      />
      <span>Astrology</span></Button>
        </WrapItem>
        <WrapItem>
      <Button variant='outline' onClick= {handleSpellsClick} style={{ backgroundColor: SpellsActive ? "#6b1901" : "transparent" }}>      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://i.imgur.com/qbOorw6.png'
        mr='12px'
      />
      <span>Spells</span></Button>
        </WrapItem>
        </Wrap></Container>

<Container>
          <VStack><HStack><text>Include Starfall repeatable quests?<br></br><br></br></text></HStack>
</VStack><Wrap justify='center'>
        <WrapItem>
        <Button variant='outline' onClick={handleStarfallYesClick} style={{ backgroundColor: StarfallYesActive ? "#1a3d06" : "transparent" }}>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/82/Green_Star_Sprite.png/'
        mr='12px'
      />
      <span>Yes</span></Button>
      </WrapItem>
      <WrapItem>
        <Button variant='outline' onClick= {handleStarfallNoClick} style={{ backgroundColor: StarfallNoActive ? "#591310" : "transparent" }}>      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/89/Red_Star_Sprite.png/'
        mr='12px'
      />
      <span>No</span></Button></WrapItem>
        </Wrap></Container>


        
        
        {AKIsShown &&  <Container>
          <VStack><HStack><text>Are you also working on the 1,000 Odees quest?<br></br><br></br></text></HStack>
</VStack><Wrap justify='center'>
        <WrapItem>
        <Button variant='outline' onClick={handleOdeeYesClick} style={{ backgroundColor: OdeeYesActive ? "#130119" : "transparent" }}>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f7/OdysOdees.png'
        mr='12px'
      />
      <span>Yes</span></Button>
      </WrapItem>
      <WrapItem>
        <Button variant='outline' onClick= {handleOdeeNoClick} style={{ backgroundColor: OdeeNoActive ? "#130119" : "transparent" }}>      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://media.4thewords.com/public/items/1576709063_no-thanks.png'
        mr='12px'
      />
      <span>No</span></Button></WrapItem>
        </Wrap></Container>}

        {AlchemyIsShown && AKIsShown && AstroIsShown && SpellsIsShown && <Container>
          <VStack><HStack><text>Include the Familiar Variants quests? <br></br><i>Note: each requires fighting 1 extra Lole</i><br></br><br></br></text></HStack>
</VStack><Wrap justify='center'>
        <WrapItem>
        <Button variant='outline' onClick={handleCrystalClick} style={{ backgroundColor: CrystalActive ? "#070726" : "transparent" }}>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/82/Galaxy_Alderbam.png/'
        mr='12px'
      />
      <span>Yes</span></Button></WrapItem>
        </Wrap></Container>}

<Accordion allowMultiple>
{AlchemyIsShown &&  <Container w={[350, 400, 450]}>
  <AccordionItem>
  <h2>
      <AccordionButton>
        <Box w='250px' as="span" flex='1' textAlign='center' p={3}>
        <Heading as='h3' size='lg'>Alchemy Monsters</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        <Box  w='250px'  as="span" flex='1'>
          <HStack p={3} bg='green.900'>
        <VStack align='right' ml='15px'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e3/Mund.png/'
        mr='5px'
      /> <Text>Mund</Text>
        </VStack>
        <Spacer />
        <VStack align='center' mr='15px'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='80px' maxW='80px'>
  <NumberInputField id='Mund' onInput={(e) => handleMundChange(e.target.value)} />
</NumberInput>
<Text align='center'>of 8</Text></VStack>
</HStack>
        <HStack p={3}>
        <VStack align='right' ml='15px'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b0/Galaxy_Mund.png'
        mr='5px'
      /> <Text
        align='left'>Galaxy Mund</Text>
        </VStack>
        <Spacer />
        <VStack align='center' mr='15px'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='80px' maxW='80px'>
  <NumberInputField id='GMund' onInput={(e) => handleGMundChange(e.target.value)} />
</NumberInput>
<Text align='center'>of 8</Text></VStack>
</HStack>
<HStack p={3} bg='green.900'>
        <VStack align='right' ml='15px'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://media.4thewords.com/public/monsters/image_1711489804.png'
        mr='5px'
      /> <Text
        align='left'>Cobaltoan Mund</Text>
        </VStack>
        <Spacer />
        <VStack align='center' mr='15px'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='CMund' onInput={(e) => handleCMundChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 10</Text></VStack>
</HStack>
        <HStack p={3}>
        <VStack align='right'  ml='15px'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/85/Quaruk.png/'
        mr='5px'
      /> <Text
        align='left'>Quaruk</Text>
        </VStack>
        <Spacer />
        <VStack align='center' mr='15px'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='Quaruk' onInput={(e) => handleQuarukChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 8</Text></VStack>
</HStack>
<HStack p={3} bg='green.900'>
        <VStack align='right' ml='15px'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/82/Aederster.png/'
        mr='5px'
      /> <Text
        align='left'>Aederster</Text>
        </VStack>
        <Spacer />
        <VStack align='center' mr='15px'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='Aed' onInput={(e) => handleAedChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 77</Text></VStack>
</HStack>
        <HStack p={3}>
        <VStack align='right' ml='15px'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/c/c3/Jaraci.png/'
        mr='5px'
      /> <Text
        align='left'>Jaraci</Text>
        </VStack>
        <Spacer />
        <VStack align='center' mr='15px'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='Jar' onInput={(e) => handleJarChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 86</Text></VStack>
</HStack>
<HStack p={3} bg='green.900'>
        <VStack align='right' ml='15px'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/27/Sapee.png/'
        mr='5px'
      /> <Text
        align='left'>Sapee</Text>
        </VStack>
        <Spacer />
        <VStack align='center' mr='15px'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='Sapee' onInput={(e) => handleSapeeChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 42</Text></VStack>
</HStack>
        <HStack p={3}>
        <VStack align='right' ml='15px'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/55/Audrick_II.png/'
        mr='5px'
      /> <Text
        align='left'>Audrick II</Text>
        </VStack>
        <Spacer />
        <VStack align='center' mr='15px'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='Aud' onInput={(e) => handleAudChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 40</Text></VStack>
</HStack>
</Box>
    </AccordionPanel>
  </AccordionItem>
  </Container>}

  {AKIsShown &&  <Container w={[350, 400, 450]}>
  <AccordionItem>
  <h2>
      <AccordionButton>
        <Box w='250px' as="span" flex='1' textAlign='center' p={3}>
        <Heading as='h3' size='lg'>Ancient Knowledge Monsters</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        <Box  w='250px'  as="span" flex='1'>
          <HStack p={3} bg='purple.900'>
        <VStack align='right' ml='15px'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/d5/Whodini.png'
        mr='5px'
      /> <Text
        align='left'>Whodini</Text>
        </VStack>
        <Spacer />
        <VStack align='center' mr='15px'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleWhoChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 12</Text>
      </VStack>
</HStack>
        <HStack p={3}>
        <VStack align='right' ml='15px'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fd/Galaxy_Whodini.png/'
        mr='5px'
      /> <Text
        align='left'>Galaxy Whodini</Text>
        </VStack>
        <Spacer />
        <VStack align='center' mr='15px'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleGWhoChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 12</Text>
      </VStack>
</HStack>
<HStack p={3} bg='purple.900'>
        <VStack align='right' ml='15px'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/21/Cobaltoan_Whodini.png/'
        mr='5px'
      /> <Text
        align='left'>Cobaltoan Whodini</Text>
        </VStack>
        <Spacer />
        <VStack align='center' mr='15px'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleCWhoChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 12</Text>
      </VStack>
</HStack>
        <HStack p={3}>
        <VStack align='right'  ml='15px'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/3/33/Musya.png/'
        mr='5px'
      /> <Text
        align='left'>Musya</Text>
        </VStack>
        <Spacer />
        <VStack align='center' mr='15px'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleMusyaChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 180</Text>
      </VStack>
</HStack>
<HStack p={3} bg='purple.900'>
        <VStack align='right' ml='15px'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/18/Bomatik.png/'
        mr='5px'
      /> <Text
        align='left'>Bomatik</Text>
        </VStack>
        <Spacer />
        <VStack align='center' mr='15px'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleBomaChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 76</Text>
      </VStack>
</HStack>
        <HStack p={3}>
        <VStack align='right' ml='15px'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5c/Tyomu.png/'
        mr='5px'
      /> <Text
        align='left'>Tyomu</Text>
        </VStack>
        <Spacer />
        <VStack align='center' mr='15px'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleTyoChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 55</Text>
      </VStack>
</HStack>
<HStack p={3} bg='purple.900'>
        <VStack align='right' ml='15px'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/16/Sprenki.png/'
        mr='5px'
      /> <Text
        align='left'>Sprenki</Text>
        </VStack>
        <Spacer />
        <VStack align='center' mr='15px'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleSpreChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 21</Text>
      </VStack>
</HStack>
        <HStack p={3}>
        <VStack align='right' ml='15px'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f7/OdysOdees.png/'
        mr='5px'
      /> <Text
        align='left'>Odys/Odees</Text>
        </VStack>
        <Spacer />
        <VStack align='center' mr='15px'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleOdeesChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 8</Text>
      </VStack>
</HStack>
</Box>
    </AccordionPanel>
  </AccordionItem>
  </Container>}

  {AstroIsShown &&  <Container w={[350, 400, 450]}>
  <AccordionItem>
  <h2>
      <AccordionButton>
        <Box w='250px' as="span" flex='1' textAlign='center' p={3}>
        <Heading as='h3' size='lg'>Astrology Monsters</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        <Box  w='250px'  as="span" flex='1'>
          <HStack p={3} bg='blue.900'>
        <VStack align='right' ml='15px'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/95/Alderbam.png/'
        mr='5px'
      /> <Text
        align='left'>Alderbam</Text>
        </VStack>
        <Spacer />
        <VStack align='center' mr='15px'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleAlderChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 20</Text>
      </VStack>
</HStack>
        <HStack p={3}>
        <VStack align='right' ml='15px'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/82/Galaxy_Alderbam.png/'
        mr='5px'
      /> <Text
        align='left'>Galaxy Alderbam</Text>
        </VStack>
        <Spacer />
        <VStack align='center' mr='15px'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleGAlderChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 20</Text>
      </VStack>
</HStack>
<HStack p={3} bg='blue.900'>
        <VStack align='right' ml='15px'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://media.4thewords.com/public/monsters/image_1711489731.png'
        mr='5px'
      /> <Text
        align='left' fontSize='lg'>Cobaltoan Alderbam</Text>
        </VStack>
        <Spacer />
        <VStack align='center' mr='15px'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleCAlderChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 8</Text>
      </VStack>
</HStack>
<HStack p={3}>
        <VStack align='right' ml='15px'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/c/c5/Mertino.png/'
        mr='5px'
      /> <Text
        align='left'>Mertino</Text>
        </VStack>
        <Spacer />
        <VStack align='center' mr='15px'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleMertChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 11</Text>
      </VStack>
</HStack>
<HStack p={3} bg='blue.900'>
        <VStack align='right' ml='15px'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/d1/Greifkon.png'
        mr='5px'
      /> <Text
        align='left'>Greifkon</Text>
        </VStack>
        <Spacer />
        <VStack align='center' mr='15px'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleGreifChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 16</Text>
      </VStack>
</HStack>
<HStack p={3}>
        <VStack align='right' ml='15px'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/ee/Gullio.png/'
        mr='5px'
      /> <Text
        align='left'>Gullio</Text>
        </VStack>
        <Spacer />
        <VStack align='center' mr='15px'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleGullChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 55</Text>
      </VStack>
</HStack>
        <HStack p={3}  bg='blue.900'>
        <VStack align='right' ml='15px'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/24/Knuff.png/'
        mr='5px'
      /> <Text
        align='left'>Knuff</Text>
        </VStack>
        <Spacer />
        <VStack align='center' mr='15px'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleKnuffChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 222</Text>
      </VStack>
</HStack>
<HStack p={3}>
        <VStack align='right' ml='15px'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://media.4thewords.com/public/monsters/image_1707777984.png'
        mr='5px'
      /> <Text
        align='left'>Wizkal</Text>
        </VStack>
        <Spacer />
        <VStack align='center' mr='15px'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleWizChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 35</Text>
      </VStack>
</HStack>
</Box>
    </AccordionPanel>
  </AccordionItem>
  </Container>}

  {SpellsIsShown &&  <Container w={[350, 400, 450]}>
  <AccordionItem>
  <h2>
      <AccordionButton>
        <Box w='250px' as="span" flex='1' textAlign='center' p={3}>
        <Heading as='h3' size='lg'>Spells Monsters</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        <Box  w='250px'  as="span" flex='1'>
          <HStack p={3} bg='red.900'>
        <VStack align='right' ml='15px'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/97/Chysis.png/'
        mr='5px'
      /> <Text
        align='left'>Chysis</Text>
        </VStack>
        <Spacer />
        <VStack align='center' mr='15px'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleChyChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 8</Text>
      </VStack>
</HStack>
        <HStack p={3}>
        <VStack align='right' ml='15px'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5b/Galaxy_Chysis.png'
        mr='5px'
      /> <Text
        align='left'>Galaxy Chysis</Text>
        </VStack>
        <Spacer />
        <VStack align='center' mr='15px'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleGChyChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 8</Text>
      </VStack>
</HStack>
<HStack p={3} bg='red.900'>
        <VStack align='right' ml='15px'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://media.4thewords.com/public/monsters/image_1711489668.png'
        mr='5px'
      /> <Text
        align='left'>Cobaltoan Chysis</Text>
        </VStack>
        <Spacer />
        <VStack align='center' mr='15px'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleCChyChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 8</Text>
      </VStack>
</HStack>
<HStack p={3}>
        <VStack align='right' ml='15px'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://media.4thewords.com/public/monsters/image_1707777793.png'
        mr='5px'
      /> <Text
        align='left'>Zenme</Text>
        </VStack>
        <Spacer />
        <VStack align='center' mr='15px'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleZenChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 10</Text>
      </VStack>
</HStack>
<HStack p={3} bg='red.900'>
        <VStack align='right' ml='15px'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/65/Kinguz.png/'
        mr='5px'
      /> <Text
        align='left'>Kinguz</Text>
        </VStack>
        <Spacer />
        <VStack align='center' mr='15px'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleKingChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 111</Text>
      </VStack>
</HStack>
<HStack p={3}>
        <VStack align='right' ml='15px'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/19/Neilon.png/'
        mr='5px'
      /> <Text
        align='left'>Neilon</Text>
        </VStack>
        <Spacer />
        <VStack align='center' mr='15px'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleNeilChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 50</Text>
      </VStack>
</HStack>
        <HStack p={3}  bg='red.900'>
        <VStack align='right' ml='15px'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fa/Oniine.png'
        mr='5px'
      /> <Text
        align='left'>Oniine</Text>
        </VStack>
        <Spacer />
        <VStack align='center' mr='15px'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleOniChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 15</Text>
      </VStack>
</HStack>
<HStack p={3}>
        <VStack align='right' ml='15px'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/23/Choros.png/'
        mr='5px'
      /> <Text
        align='left'>Choros</Text>
        </VStack>
        <Spacer />
        <VStack align='center' mr='15px'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleChorChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 20</Text>
      </VStack>
</HStack>
</Box>
    </AccordionPanel>
  </AccordionItem>
  </Container>}

  </Accordion>
<Spacer></Spacer>
<Spacer></Spacer>
          </VStack>
<Divider />
<Container>
<br></br>
<Heading>Overlapping Quests</Heading>
<br></br>

        <Box as="span" flex='1' textAlign='center' padding-top={3}>
        <Text fontSize='22px'><b>Potential Rewards:</b></Text> <br></br>
        <Text><b>Class Exam Credits</b></Text>
        </Box>
        <Wrap mt='12px' justify='center'>
{AlchemyIsShown &&
        <WrapItem>
        <Box w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/9a/Alchemy_Exam_Credit.png/'
        mr='5px'
      /> 
      <text align='center'>{totalAlcExam}</text></VStack>
  </Box>
        </WrapItem>}

        {AKIsShown && OdeeYesIsShown &&
        <WrapItem>
        <Box justify='center' w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
        align='center'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/4c/Ancient_Knowledge_Exam_Credit.png/'
        mr='5px'
      /> 
      <text align='center'>{totalAKYesExam}</text></VStack>
  </Box>
        </WrapItem>}

        {AKIsShown && OdeeNoIsShown &&
        <WrapItem>
        <Box justify='center' w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
        align='center'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/4c/Ancient_Knowledge_Exam_Credit.png/'
        mr='5px'
      /> 
      <text align='center'>{SmallestTyoOdees}</text></VStack>
  </Box>
        </WrapItem>}
        
        {AstroIsShown &&
        <WrapItem>
        <Box justify='center' w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
       align='center'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/7e/Astrology_Exam_Credit.png'
        mr='5px'
      /> 
      <text align='center'>{totalAstroExam}</text>
      </VStack>
  </Box>
        </WrapItem>}

        {SpellsIsShown &&
        <WrapItem>
        <Box justify='center' w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
       align='center'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/21/Spells_Exam_Credit.png'
        mr='5px'
      />
        <text align='center'>{totalSpellsExam}</text>
</VStack>
  </Box>
        </WrapItem>}
</Wrap>



<Box as="span" flex='1' textAlign='center' padding-top={3}>
        <Text><b>House Items & Materials</b></Text>
        </Box>

<Wrap mt='12px' justify='center'>
{AlchemyIsShown &&
        <WrapItem>
        <Box w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
        align='center' 
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b0/Magic_Sapee_Lamp.png'
        mr='5px'
      /> 
      <text align='center'>{totalSapTwelve}</text>
      </VStack>
  </Box>
        </WrapItem>}
        {AlchemyIsShown &&
        <WrapItem>
        <Box justify='center' w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
        align='center'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/c/c7/Alchemy_Class_Ecosystem_1.png/'
        mr='5px'
      /> 
      <text align='center'>{SmallestAedJarSap}</text></VStack>
  </Box>
        </WrapItem>}
        {AKIsShown && OdeeYesIsShown &&
        <WrapItem>
        <Box justify='center' w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
       align='center'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1a/Cursed_Rug_1.png/'
        mr='5px'
      /> 
      {OdeeYesIsShown && <text align='center'>{totalTyoFour}</text>}
      </VStack>
  </Box>
        </WrapItem>}

        {AKIsShown && OdeeNoIsShown &&
        <WrapItem>
        <Box justify='center' w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
       align='center'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1a/Cursed_Rug_1.png/'
        mr='5px'
      /> 
      {OdeeNoIsShown && <text align='center'>{SmallestTyoOdees}</text>}
      </VStack>
  </Box>
        </WrapItem>}


        {AKIsShown && OdeeYesIsShown &&
        <WrapItem>
        <Box justify='center' w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
       align='center'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1b/Odys_Line.png/'
        mr='5px'
      />
        <text align='center'>{totalOdeeQuest}</text>
</VStack>
  </Box>
        </WrapItem>}

        {AstroIsShown && 
        <WrapItem>
        <Box justify='center' w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
       align='center'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/ef/Star_Pillow_1.png/'
        mr='5px'
      />
<text align='center'>{SmallestWizKnuff}</text>
</VStack>
  </Box>
        </WrapItem>}
        {AstroIsShown && 
        <WrapItem>
        <Box justify='center' w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
       align='center'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/26/Mertino_Skull_1.png/'
        mr='5px'
      />
<text align='center'>{totalMertThree}</text>
</VStack>
  </Box>
        </WrapItem>}

        {AstroIsShown && 
        <WrapItem>
        <Box justify='center' w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
       align='center'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/3/39/Starry_Curtains_1.png'
        mr='5px'
      />
<text align='center'>{SmallestGreifGull}</text>
</VStack>
  </Box>
        </WrapItem>}

        {SpellsIsShown && 
        <WrapItem>
        <Box justify='center' w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
       align='center'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/50/Spellfire_(Spells).png/'
        mr='5px'
      />
<text align='center'>{totalSpellfire}</text>
</VStack>
  </Box>
        </WrapItem>}
        {CrystalIsShown && 
        <WrapItem>
        <Box justify='center' w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
       align='center'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e0/CobaltoanPath00.png/'
        mr='5px'
      />
<text align='center'>{SmallestCrystal}</text>
</VStack>
  </Box>
        </WrapItem>}
        {CrystalIsShown && 
        <WrapItem>
        <Box justify='center' w='50px' h='100px' pb={5}>
       <VStack> 
       <Image
       align='center'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b1/GalaxyPath00.png/'
        mr='5px'
      />
<text align='center'>{SmallestGalaxy}</text>
</VStack>
  </Box>
        </WrapItem>}
</Wrap>
<br></br></Container>



{StarfallYesIsShown && 
<Container>
        <Accordion allowMultiple>
        <AccordionItem>
    <h2>
      <AccordionButton bg='teal.900'  _expanded={{ bg: 'teal.900', color: 'white' }}  _hover={{ bg: 'teal.900', color: 'white' }}>
      <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='6rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f3/StarFall2024EventToken.png/'
        mr='12px'
      />
      <VStack align='center'><Text fontSize='22px'><b>Repeatable Starfall Quests</b></Text></VStack>
      </HStack>
      </Box>
      </AccordionButton>
    </h2>
</AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'teal.800', color: 'white' }}>
      <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='6rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f3/StarFall2024EventToken.png/'
        mr='12px'
      />
      <VStack align='left'><Text fontSize='22px'><b>No Quarter Given</b></Text><HStack><Text>repeat up to</Text><Text color="yellow.300"><b>2x per day</b></Text></HStack></VStack>
      </HStack>
      </Box>
      <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel h='190px' pb={4} >
      <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text  fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Monsters<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
        <HStack> 
       <Image
       mb='9px'
        boxSize='3rem'
        borderRadius='full'
        src='https://i.imgur.com/RnyfErA.png'
        mr='0px'
      />      
      <Text fontSize={{ base: "14px", lg: "18px"}} align='center'>25 monsters</Text>
      </HStack>
  </Box>
  </HStack>
<Divider mt='30px' mb='12px' />
  <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Rewards<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
       <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f3/StarFall2024EventToken.png/'
        mr='0px'
      />  	<Text  fontSize={{ base: "14px", lg: "18px"}} mb='12px' align='left'>25 Starfall Tokens</Text>
      </HStack>
  </Box>
  </HStack>
    </AccordionPanel>
  </AccordionItem>

</Accordion>

<br></br>
</Container>}


{CrystalIsShown && 
<Container>
        <Accordion allowMultiple>
        <AccordionItem>
    <h2>
      <AccordionButton bg='whiteAlpha.50'  _expanded={{ bg: 'whiteAlpha.50', color: 'white' }}  _hover={{ bg: 'whiteAlpha.50', color: 'white' }}>
      <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='6rem'
        borderRadius='full'
        src='https://i.imgur.com/5ZMuerJ.png'
        mr='12px'
      />
      <VStack align='center'><Text fontSize='22px'><b>Repeatable Familiars Quests</b></Text></VStack>
      </HStack>
      </Box>
      </AccordionButton>
    </h2>
</AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'whiteAlpha.100', color: 'white' }}>
      <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='6rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f4/CobaltoanPath05.png/'
        mr='12px'
      />
            <VStack align='left'><Text fontSize='22px'><b>Familiar Like Crystals</b></Text><Text>Location: Enchanted Forest</Text><HStack><Text>repeat up to</Text><Text color="teal.300"><b>{SmallestCrystal}x</b></Text></HStack></VStack>
  
      </HStack>
      </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel h='410px' pb={4}>
      <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text  fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Monsters<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
        <HStack> 
       <Image
       mb='9px'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5e/Cobaltoan_Chysis.png/'
        mr='0px'
      />      
      <Text  fontSize={{ base: "14px", lg: "18px"}} align='center' mb='9px'>1 Cobaltoan Chysis</Text>
      </HStack>
      <HStack> 
       <Image
       mb='9px'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/c/c6/Cobaltoan_Alderbam.png'
        mr='0px'
      />      
      <Text  fontSize={{ base: "14px", lg: "18px"}} align='center' mb='9px'>1 Cobaltoan Alderbam</Text>
      </HStack>
      <HStack> 
       <Image
       mb='9px'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/21/Cobaltoan_Whodini.png'
        mr='0px'
      />      
      <Text  fontSize={{ base: "14px", lg: "18px"}} align='center' mb='9px'>1 Cobaltoan Whodini</Text>
      </HStack>
      <HStack> 
       <Image
       mb='9px'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1a/Cobaltoan_Mund.png'
        mr='0px'
      />      
      <Text  fontSize={{ base: "14px", lg: "18px"}} align='center' mb='9px'>1 Cobaltoan Mund</Text>
      </HStack>
      
      <HStack> 
       <Image
       mb='9px'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/eb/Cobaltoan_Lole.png'
        mr='0px'
      />      
      <Text  fontSize={{ base: "14px", lg: "18px"}} align='center'>1 Cobaltoan Lole</Text>
      </HStack>
  </Box>
  </HStack>
<Divider mt='255px' mb='12px' />
  <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Rewards<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
       <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f4/CobaltoanPath05.png/'
        mr='0px'
      />  	<Text  fontSize={{ base: "14px", lg: "18px"}} mb='12px' align='left'>1 Colbatoan Path</Text>
      </HStack>
  </Box>
  </HStack>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'whiteAlpha.100', color: 'white' }}>
      <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='6rem'
        borderRadius='full'
        src='https://media.4thewords.com/public/hideouts/hideout_element_2130_96279/variant_icon_12893_603.png'
        mr='12px'
      />
            <VStack align='left'><Text fontSize='22px'><b>Familiar Like Stars</b></Text><Text>Location: Observatory</Text><HStack><Text>repeat up to</Text><Text color="teal.300"><b>{SmallestGalaxy}x</b></Text></HStack></VStack>
  
      </HStack>
      </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel h='410px' pb={4}>
      <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text  fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Monsters<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
        <HStack> 
       <Image
       mb='9px'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5b/Galaxy_Chysis.png'
        mr='0px'
      />      
      <Text  fontSize={{ base: "14px", lg: "18px"}} align='center' mb='9px'>1 Galaxy Chysis</Text>
      </HStack>
      <HStack> 
       <Image
       mb='9px'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/82/Galaxy_Alderbam.png/'
        mr='0px'
      />      
      <Text  fontSize={{ base: "14px", lg: "18px"}} align='center' mb='9px'>1 Galaxy Alderbam</Text>
      </HStack>
      <HStack> 
       <Image
       mb='9px'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fd/Galaxy_Whodini.png/'
        mr='0px'
      />      
      <Text  fontSize={{ base: "14px", lg: "18px"}} align='center' mb='9px'>1 Galaxy Whodini</Text>
      </HStack>
      <HStack> 
       <Image
       mb='9px'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b0/Galaxy_Mund.png'
        mr='0px'
      />      
      <Text  fontSize={{ base: "14px", lg: "18px"}} align='center' mb='9px'>1 Galaxy Mund</Text>
      </HStack>
      
      <HStack> 
       <Image
       mb='9px'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/53/Galaxy_Lole.png'
        mr='0px'
      />      
      <Text  fontSize={{ base: "14px", lg: "18px"}} align='center'>1 Galaxy Lole</Text>
      </HStack>
  </Box>
  </HStack>
<Divider mt='255px' mb='12px' />
  <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Rewards<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
       <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://media.4thewords.com/public/hideouts/hideout_element_2130_96279/variant_icon_12893_603.png'
        mr='0px'
      />  	<Text  fontSize={{ base: "14px", lg: "18px"}} mb='12px' align='left'>1 Galaxy Path</Text>
      </HStack>
  </Box>
  </HStack>
    </AccordionPanel>
  </AccordionItem>

</Accordion>

<br></br>
</Container>}

        {AlchemyIsShown && 
<Container>
        <Accordion allowMultiple>
        <AccordionItem>
    <h2>
      <AccordionButton bg='green.900'  _expanded={{ bg: 'green.900', color: 'white' }}  _hover={{ bg: 'green.900', color: 'white' }}>
      <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='6rem'
        borderRadius='full'
        src='https://i.imgur.com/dzFooLd.png'
        mr='12px'
      />
      <VStack align='center'><Text fontSize='22px'><b>Repeatable Alchemy Quests</b></Text></VStack>
      </HStack>
      </Box>
      </AccordionButton>
    </h2>
</AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'green.800', color: 'white' }}>
      <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='6rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b0/Magic_Sapee_Lamp.png'
        mr='12px'
      />
            <VStack align='left'><Text fontSize='22px'><b>AL 305: Different Items (3/3)</b></Text><HStack><Text>repeat up to</Text><Text color="green.300"><b>{totalSapTwelve}x</b></Text></HStack></VStack>
  
      </HStack>
      </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel h='250px' pb={4}>
      <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text  fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Monsters<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
        <HStack> 
       <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/27/Sapee.png/'
        alt='Sapee'
        mr='0px'
      />      
      <Text  fontSize={{ base: "14px", lg: "18px"}} align='center'>12 Sapee</Text>
      </HStack>
  </Box>
  </HStack>
<Divider mt='20px' mb='12px' />
  <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Rewards<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
       <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/9a/Alchemy_Exam_Credit.png/'
        mr='0px'
      />  	<Text  fontSize={{ base: "14px", lg: "18px"}} mb='12px' align='left'>1 Alchemy Exam Credit</Text>
      </HStack>
      <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b0/Magic_Sapee_Lamp.png'
        mr='0px'/>  	
        <Text  fontSize={{ base: "14px", lg: "18px"}} align='left'>1 Magic Sapee Lamp</Text></HStack>
  </Box>
  </HStack>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'green.800', color: 'white' }}>
      <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='6rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/c/c7/Alchemy_Class_Ecosystem_1.png/'
        mr='12px'
      />
            <VStack align='left'><Text fontSize='22px'><b>AL 402: Using Organic Materials (3/3)</b></Text><HStack><Text>repeat up to</Text><Text color="green.300"><b>{SmallestAedJarSap}x</b></Text></HStack></VStack>
     </HStack>
      </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel  h='350px'  pb={4}>
    <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text  fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Monsters<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
       <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/82/Aederster.png/'
        alt='Aederster'
        mr='0px'
      />  	<Text  fontSize={{ base: "14px", lg: "18px"}} align='left'>10 Aederster</Text>
      </HStack>
      <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/c/c3/Jaraci.png/'
        alt='Jaraci'
        mr='0px'/>  	
        <Text  fontSize={{ base: "14px", lg: "18px"}} align='left'>6 Jaraci</Text></HStack>
        <HStack> 
       <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/27/Sapee.png/'
        alt='Sapee'
        mr='0px'
      />      
      <Text  fontSize={{ base: "14px", lg: "18px"}} align='center'>6 Sapee</Text>
      </HStack>
  </Box>
  </HStack>
<br></br><br></br><br></br><Divider mt='12px' mb='12px' />
  <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text  fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Rewards<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
       <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/9a/Alchemy_Exam_Credit.png/'
        mr='0px'
      />  	<Text  fontSize={{ base: "14px", lg: "18px"}} mb='12px' align='left'>1 Alchemy Exam Credit</Text>
      </HStack>
      <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/c/c7/Alchemy_Class_Ecosystem_1.png/'
        mr='0px'/>  	
        <Text  fontSize={{ base: "14px", lg: "18px"}} align='left'>1 Alchemy Class Ecosystem</Text></HStack>
  </Box>
  </HStack>
    </AccordionPanel>
  </AccordionItem>
</Accordion>

<br></br>
</Container>}

{OdeeNoIsShown && 
<Container>
        <Accordion allowMultiple>
        <AccordionItem>
    <h2>
      <AccordionButton bg='purple.900'  _expanded={{ bg: 'purple.900', color: 'white' }}  _hover={{ bg: 'purple.900', color: 'white' }}>
      <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='6rem'
        borderRadius='full'
        src='https://i.imgur.com/hEBDkSp.png'
        mr='12px'
      />
      <VStack align='center'><Text fontSize='22px'><b>Repeatable Ancient Knowledge Quests</b></Text></VStack>
      </HStack>
      </Box>
      </AccordionButton>
    </h2>
</AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'purple.800', color: 'white' }}>
      <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='6rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1a/Cursed_Rug_1.png/'
        mr='12px'
      />
            <VStack align='left'><Text fontSize='22px'><b>K 302: Terrific Toxins (2/2)</b></Text><HStack><Text>repeat up to</Text><Text color="pink.300"><b>{SmallestTyoOdees}x</b></Text></HStack></VStack>
      </HStack>
      </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel h='278px' pb={4} >
      <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text  fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Monsters<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
        <HStack> 
       <Image
       mb='9px'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5c/Tyomu.png/'
        mr='0px'
      />      
      <Text fontSize={{ base: "14px", lg: "18px"}} align='center'>4 Tyomu</Text>
      </HStack>
      <HStack> 
       <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f7/OdysOdees.png/'
        mr='0px'
      />      
      <Text  fontSize={{ base: "14px", lg: "18px"}} align='center'>8 Odees</Text>
      </HStack>
  </Box>
  </HStack>
<Divider mt='55px' mb='12px' />
  <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Rewards<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
       <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/4c/Ancient_Knowledge_Exam_Credit.png/'
        mr='0px'
      />  	<Text  fontSize={{ base: "14px", lg: "18px"}} mb='12px' align='left'>1 Ancient Knowledge Exam Credit</Text>
      </HStack>
      <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1a/Cursed_Rug_1.png/'
        mr='0px'/>  	
        <Text  fontSize={{ base: "14px", lg: "18px"}} align='left'>1 Cursed Rug</Text></HStack>
  </Box>
  </HStack>
    </AccordionPanel>
  </AccordionItem>

</Accordion>

<br></br>
</Container>}

{OdeeYesIsShown && 
<Container>
        <Accordion allowMultiple>
        <AccordionItem>
    <h2>
      <AccordionButton bg='purple.900'  _expanded={{ bg: 'purple.900', color: 'white' }}  _hover={{ bg: 'purple.900', color: 'white' }}>
      <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='6rem'
        borderRadius='full'
        src='https://i.imgur.com/hEBDkSp.png'
        mr='12px'
      />
      <VStack align='center'><Text fontSize='22px'><b>Repeatable Ancient Knowledge Quests</b></Text></VStack>
      </HStack>
      </Box>
      </AccordionButton>
    </h2>
</AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'purple.800', color: 'white' }}>
      <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='6rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1a/Cursed_Rug_1.png/'
        mr='12px'
      />
            <VStack align='left'><Text fontSize='22px'><b>K 302: Terrific Toxins (2/2)</b></Text><HStack><Text>repeat up to</Text><Text color="pink.300"><b>{totalTyoFour}x</b></Text></HStack></VStack>
      </HStack>
      </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel h='278px' pb={4} >
      <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text  fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Monsters<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
        <HStack> 
       <Image
       mb='9px'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5c/Tyomu.png/'
        mr='0px'
      />      
      <Text fontSize={{ base: "14px", lg: "18px"}} align='center'>4 Tyomu</Text>
      </HStack>
      <HStack> 
       <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f7/OdysOdees.png/'
        mr='0px'
      />      
      <Text  fontSize={{ base: "14px", lg: "18px"}} align='center'>8 Odees</Text>
      </HStack>
  </Box>
  </HStack>
<Divider mt='55px' mb='12px' />
  <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Rewards<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
       <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/4c/Ancient_Knowledge_Exam_Credit.png/'
        mr='0px'
      />  	<Text  fontSize={{ base: "14px", lg: "18px"}} mb='12px' align='left'>1 Ancient Knowledge Exam Credit</Text>
      </HStack>
      <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1a/Cursed_Rug_1.png/'
        mr='0px'/>  	
        <Text  fontSize={{ base: "14px", lg: "18px"}} align='left'>1 Cursed Rug</Text></HStack>
  </Box>
  </HStack>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'purple.800', color: 'white' }}>
      <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='6rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f7/OdysOdees.png/'
        mr='12px'
      />
            <VStack align='left'><Text fontSize='22px'><b>KXC: Thinking Outside the Rules</b></Text><HStack><Text>repeat up to</Text><Text color="pink.300"><b>{totalOdeeQuest}x</b></Text></HStack></VStack>
      </HStack>
      </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel h='278px' pb={4} >
      <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text  fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Monsters<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
      <HStack> 
       <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f7/OdysOdees.png/'
        mr='0px'
      />      
      <Text  fontSize={{ base: "14px", lg: "18px"}} align='center'>44 Odees</Text>
      </HStack>
  </Box>
  </HStack>
<Divider mt='30px' mb='12px' />
  <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Rewards<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
       <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/4c/Ancient_Knowledge_Exam_Credit.png/'
        mr='0px'
      />  	<Text  fontSize={{ base: "14px", lg: "18px"}} mb='12px' align='left'>1 Ancient Knowledge Exam Credit</Text>
      </HStack>
      <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1b/Odys_Line.png/'
        mr='0px'/>  	
        <Text  fontSize={{ base: "14px", lg: "18px"}} align='left'>1 Odys Line</Text></HStack>
  </Box>
  </HStack>
    </AccordionPanel>
  </AccordionItem>
</Accordion>

<br></br>
</Container>}

{AstroIsShown && 
<Container>
        <Accordion allowMultiple>
        <AccordionItem>
    <h2>
      <AccordionButton bg='blue.900'  _expanded={{ bg: 'blue.900', color: 'white' }}  _hover={{ bg: 'blue.900', color: 'white' }}>
      <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='6rem'
        borderRadius='full'
        src='https://i.imgur.com/EDRa116.png'
        mr='12px'
      />
      <VStack align='center'><Text fontSize='22px'><b>Repeatable Astrology Quests</b></Text></VStack>
      </HStack>
      </Box>
      </AccordionButton>
    </h2>
</AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'blue.800', color: 'white' }}>
      <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='6rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/ef/Star_Pillow_1.png/'
        mr='12px'
      />
      <VStack align='left'><Text fontSize='22px'><b>Conjunctions & Constellations</b></Text><HStack><Text>repeat up to</Text><Text color="cyan.300"><b>{SmallestWizKnuff}x</b></Text></HStack></VStack>
      </HStack>
      </Box>
      <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel h='270px' pb={4} >
      <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text  fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Monsters<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
        <HStack> 
       <Image
       mb='9px'
        boxSize='3rem'
        borderRadius='full'
        src='https://media.4thewords.com/public/monsters/image_1707777984.png'
        mr='0px'
      />      
      <Text fontSize={{ base: "14px", lg: "18px"}} align='center'>2 Wizkal</Text>
      </HStack>
      <HStack> 
       <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/24/Knuff.png'
        mr='0px'
      />      
      <Text  fontSize={{ base: "14px", lg: "18px"}} align='center'>16 Knuff</Text>
      </HStack>
  </Box>
  </HStack>
<Divider mt='55px' mb='12px' />
  <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Rewards<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
       <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/7e/Astrology_Exam_Credit.png'
        mr='0px'
      />  	<Text  fontSize={{ base: "14px", lg: "18px"}} mb='12px' align='left'>1 Astrology Exam Credit</Text>
      </HStack>
      <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/ef/Star_Pillow_1.png/'
        mr='0px'/>  	
        <Text  fontSize={{ base: "14px", lg: "18px"}} align='left'>1 Star Pillow</Text></HStack>
  </Box>
  </HStack>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'blue.800', color: 'white' }}>
      <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='6rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/26/Mertino_Skull_1.png/'
        mr='12px'
      />
      <VStack align='left'><Text fontSize='20px'><b>Doomed Destiny</b></Text><HStack><Text>repeat up to</Text><Text color="cyan.300"><b>{totalMertThree}x</b></Text></HStack></VStack>
      </HStack> 
      </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel h='270px' pb={4} >
      <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text  fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Monsters<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
        <HStack> 
       <Image
       mb='9px'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/c/c5/Mertino.png/'
        mr='0px'
      />      
      <Text fontSize={{ base: "14px", lg: "18px"}} align='center'>3 Mertino</Text>
      </HStack>
  </Box>
  </HStack>
<Divider mt='55px' mb='12px' />
  <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Rewards<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
       <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/7e/Astrology_Exam_Credit.png'
        mr='0px'
      />  	<Text  fontSize={{ base: "14px", lg: "18px"}} mb='12px' align='left'>1 Astrology Exam Credit</Text>
      </HStack>
      <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/26/Mertino_Skull_1.png/'
        mr='0px'/>  	
        <Text  fontSize={{ base: "14px", lg: "18px"}} align='left'>1 Mertino Skull</Text></HStack>
  </Box>
  </HStack>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'blue.800', color: 'white' }}>
      <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='6rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/3/39/Starry_Curtains_1.png'
        mr='12px'
      />
      <VStack align='left'><Text fontSize='20px'><b>Quintiles & Quasi-Moons</b></Text><HStack><Text>repeat up to</Text><Text color="cyan.300"><b>{SmallestGreifGull}x</b></Text></HStack></VStack>
      </HStack>
      </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel h='270px' pb={4} >
      <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text  fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Monsters<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
        <HStack> 
       <Image
       mb='9px'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/d1/Greifkon.png'
        mr='0px'
      />      
      <Text fontSize={{ base: "14px", lg: "18px"}} align='center'>3 Greifkon</Text>
      </HStack>
      <HStack> 
       <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/ee/Gullio.png'
        mr='0px'
      />      
      <Text  fontSize={{ base: "14px", lg: "18px"}} align='center'>10 Gullio</Text>
      </HStack>
  </Box>
  </HStack>
<Divider mt='55px' mb='12px' />
  <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Rewards<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
       <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/7e/Astrology_Exam_Credit.png'
        mr='0px'
      />  	<Text  fontSize={{ base: "14px", lg: "18px"}} mb='12px' align='left'>1 Astrology Exam Credit</Text>
      </HStack>
      <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/3/39/Starry_Curtains_1.png'
        mr='0px'/>  	
        <Text  fontSize={{ base: "14px", lg: "18px"}} align='left'>1 Starry Curtains</Text></HStack>
  </Box>
  </HStack>
    </AccordionPanel>
  </AccordionItem>

</Accordion>

<br></br>
</Container>}

{SpellsIsShown && 
<Container>
        <Accordion allowMultiple>
        <AccordionItem>
    <h2>
      <AccordionButton bg='red.900'  _expanded={{ bg: 'red.900', color: 'white' }}  _hover={{ bg: 'red.900', color: 'white' }}>
      <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='6rem'
        borderRadius='full'
        src='https://i.imgur.com/qbOorw6.png'
        mr='12px'
      />
      <VStack align='center'><Text fontSize='22px'><b>Repeatable Spells Quests</b></Text></VStack>
      </HStack>
      </Box>
      </AccordionButton>
    </h2>
</AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'red.800', color: 'white' }}>
      <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='6rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/21/Spells_Exam_Credit.png'
        mr='12px'
      />
      <VStack align='left'><Text fontSize='22px'><b>SDR1: Red Dungeon (1/3)</b></Text><HStack><Text>repeat up to</Text><Text color="orange.300"><b>{totalChorOne}x</b></Text></HStack></VStack>
      </HStack>
      </Box>
      <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel h='250px' pb={4} >
      <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text  fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Monsters<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
        <HStack> 
       <Image
       mb='9px'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/23/Choros.png/'
        mr='0px'
      />      
      <Text fontSize={{ base: "14px", lg: "18px"}} align='center'>1 Choros</Text>
      </HStack>
  </Box>
  </HStack>
<Divider mt='30px' mb='12px' />
  <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Rewards<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
       <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/21/Spells_Exam_Credit.png'
        mr='0px'
      />  	<Text  fontSize={{ base: "14px", lg: "18px"}} mb='12px' align='left'>1 Spells Exam Credit</Text>
      </HStack>
      <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/50/Spellfire_(Spells).png/'
        mr='0px'/>  	
        <Text  fontSize={{ base: "14px", lg: "18px"}} align='left'>5 Spellfire</Text></HStack>
  </Box>
  </HStack>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'red.800', color: 'white' }}>
      <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='6rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/74/Decorated_Oniine_Skull_1.png'
        mr='12px'
      />
      <VStack align='left'><Text fontSize='20px'><b>SDR1: Red Dungeon (2/3)</b> <br></br><b>SDR2: 1 Day Sprint Chain (1/3)</b><br></br><i>grab both quests!</i></Text><HStack><Text>repeat up to</Text><Text color="orange.300"><b>{totalOniThree}x</b></Text></HStack></VStack>
      </HStack> 
      </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel h='250px' pb={4} >
      <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text  fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Monsters<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
        <HStack> 
       <Image
       mb='9px'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fa/Oniine.png/'
        mr='0px'
      />      
      <Text fontSize={{ base: "14px", lg: "18px"}} align='center'>3 Oniine</Text>
      </HStack>
  </Box>
  </HStack>
<Divider mt='30px' mb='12px' />
  <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Rewards<br></br>(both quests)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
       <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/21/Spells_Exam_Credit.png'
        mr='0px'
      />  	<Text  fontSize={{ base: "14px", lg: "18px"}} mb='12px' align='left'>2 Spells Exam Credits</Text>
      </HStack>
      <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/50/Spellfire_(Spells).png/'
        mr='0px'/>  	
        <Text  fontSize={{ base: "14px", lg: "18px"}} align='left'>15 Spellfire</Text></HStack>
  </Box>
  </HStack>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'red.800', color: 'white' }}>
      <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='6rem'
        borderRadius='full'
        src='https://media.4thewords.com/public/items/1576709063_no-thanks.png'
        mr='12px'
      />
      <VStack align='left'><Text fontSize='20px'><b>SDR1: Red Dungeon (3/3)</b><br></br> <b>SDR2: 1 Day Sprint Chain (2/3)</b>
       <br></br><i>drop these quests!</i></Text></VStack>
      </HStack> 
      </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel h='160px' pb={4} >
      <HStack justify='center'>
    <Box justify='center' pb={5}>
       <HStack> 
<Text  fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='center'>You don't need either of these quests :)<br></br><br></br> It's technically more efficient to keep repeating the loop (1 Choros quest + the doubled 3 Oniine quest) than to complete the later parts of the quest chains.</Text>
      </HStack>
  </Box>

  </HStack>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'red.800', color: 'white' }}>
      <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='6rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/21/Spells_Exam_Credit.png/'
        mr='12px'
      />
      <VStack align='left'><Text fontSize='20px'><b>SDR3: Spellfire Harvesting (1/4)</b></Text><HStack><Text>repeat up to</Text><Text color="orange.300"><b>{totalNeilFive}x</b></Text></HStack></VStack>
      </HStack>
      </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel h='230px' pb={4} >
      <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text  fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Monsters<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
        <HStack> 
       <Image
       mb='9px'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/19/Neilon.png'
        mr='0px'
      />      
      <Text fontSize={{ base: "14px", lg: "18px"}} align='center'>5 Neilon</Text>
      </HStack>
  </Box>
  </HStack>
<Divider mt='30px' mb='12px' />
  <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Rewards<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
       <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/21/Spells_Exam_Credit.png'
        mr='0px'
      />  	<Text  fontSize={{ base: "14px", lg: "18px"}} mb='12px' align='left'>1 Spells Exam Credit</Text>
      </HStack>
      <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/50/Spellfire_(Spells).png/'
        mr='0px'/>  	
        <Text  fontSize={{ base: "14px", lg: "18px"}} align='left'>5 Spellfire</Text></HStack>
  </Box>
  </HStack>
    </AccordionPanel>
  </AccordionItem>

</Accordion>

<br></br>
</Container>}

{NullIsShown && 
<Container>
        <Accordion allowMultiple>
        <AccordionItem>
    <h2>
      <AccordionButton bg='red.900'  _expanded={{ bg: 'red.900', color: 'white' }}  _hover={{ bg: 'red.900', color: 'white' }}>
      <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='6rem'
        borderRadius='full'
        src='https://i.imgur.com/qbOorw6.png'
        mr='12px'
      />
      <VStack align='center'><Text fontSize='22px'><b>Dungeon Chains to Complete (#4 only)</b></Text></VStack>
      </HStack>
      </Box>
      </AccordionButton>
    </h2>
</AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'red.800', color: 'white' }}>
      <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='6rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/ef/Single_Spell_Shield_4.png/'
        mr='12px'
      />
      <VStack align='left'><Text fontSize='22px'><b>SDR4: Improve Your Reflexes (1/3)</b></Text><HStack><Text>overlaps with </Text><Text color="orange.300"><b>SP201: Open Your Eyes (1/3)</b></Text></HStack></VStack>
      </HStack>
      </Box>
      <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel h='325px' pb={4} >
      <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text  fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Monsters<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
        <HStack> 
       <Image
       mb='9px'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/65/Kinguz.png/'
        mr='0px'
      />      
      <Text fontSize={{ base: "14px", lg: "18px"}} align='center'>10 Kinguz</Text>
      </HStack>
      <HStack> 
       <Image
       mb='9px'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f2/Zenme.png'
        mr='0px'
      />      
      <Text fontSize={{ base: "14px", lg: "18px"}} align='center'>2 Zenme</Text>
      </HStack>
  </Box>
  </HStack>
<Divider mt='55px' mb='12px' />
  <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Rewards<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
       <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/21/Spells_Exam_Credit.png'
        mr='0px'
      />  	<Text  fontSize={{ base: "14px", lg: "18px"}} mb='12px' align='left'>1 Spells Exam Credit</Text>
      </HStack>
      <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/50/Spellfire_(Spells).png/'
        mr='0px'/>  	
        <Text  fontSize={{ base: "14px", lg: "18px"}} align='left'>5 Spellfire</Text></HStack>
        <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/ef/Single_Spell_Shield_4.png'
        mr='0px'/>  	
        <Text  fontSize={{ base: "14px", lg: "18px"}} align='left'>1  Single Spell Shield 4</Text></HStack>
  </Box>
  </HStack>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'red.800', color: 'white' }}>
      <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='6rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f5/Spells_Floor.png'
        mr='12px'
      />
      <VStack align='left'><Text fontSize='22px'><b>SDR4: Improve Your Reflexes (2/3)</b></Text><HStack><Text>overlaps with </Text><Text color="orange.300"><b>SP202: Learn From Mistakes (2/3)</b></Text></HStack></VStack>
      </HStack>
      </Box>
      <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel h='325px' pb={4} >
      <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text  fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Monsters<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
        <HStack> 
       <Image
       mb='9px'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/65/Kinguz.png/'
        mr='0px'
      />      
      <Text fontSize={{ base: "14px", lg: "18px"}} align='center'>10 Kinguz</Text>
      </HStack>
      <HStack> 
       <Image
       mb='9px'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f2/Zenme.png'
        mr='0px'
      />      
      <Text fontSize={{ base: "14px", lg: "18px"}} align='center'>2 Zenme</Text>
      </HStack>
  </Box>
  </HStack>
<Divider mt='55px' mb='12px' />
  <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Rewards<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
       <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/21/Spells_Exam_Credit.png'
        mr='0px'
      />  	<Text  fontSize={{ base: "14px", lg: "18px"}} mb='12px' align='left'>1 Spells Exam Credit</Text>
      </HStack>
      <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/ac/Single_Spell_Shield_3.png/'
        mr='0px'/>  	
        <Text  fontSize={{ base: "14px", lg: "18px"}} align='left'>1 Single Spell Shield 3</Text></HStack>
        <HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f5/Spells_Floor.png'
        mr='0px'/>  	
        <Text  fontSize={{ base: "14px", lg: "18px"}} align='left'>1  Spells Floor</Text></HStack>
  </Box>
  </HStack>
    </AccordionPanel>
  </AccordionItem>
  
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'red.800', color: 'white' }}>
      <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='6rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/ab/Single_Spell_Shield_1.png/'
        mr='12px'
      />
      <VStack align='left'><Text fontSize='22px'><b>SDR4: Improve Your Stamina (3/3)</b></Text><HStack><Text>overlaps with </Text><Text color="orange.300"><b>SP203: Be Steps Ahead (3/3)</b></Text></HStack></VStack>
      </HStack>
      </Box>
      <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel h='340px' pb={4} >
      <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text  fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Monsters<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
        <HStack> 
       <Image
       mb='9px'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/23/Choros.png/'
        mr='0px'
      />      
      <Text fontSize={{ base: "14px", lg: "18px"}} align='center'>6 Choros</Text>
      </HStack>
      <HStack> 
       <Image
       mb='9px'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f2/Zenme.png'
        mr='0px'
      />      
      <Text fontSize={{ base: "14px", lg: "18px"}} align='center'>6 Zenme</Text>
      </HStack>
  </Box>
  </HStack>
<Divider mt='55px' mb='12px' />
  <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Rewards<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
       <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/21/Spells_Exam_Credit.png'
        mr='0px'
      />  	<Text  fontSize={{ base: "14px", lg: "18px"}} mb='12px' align='left'>1 Spells Exam Credit</Text>
      </HStack>
      <HStack> 
        <Image
         mb='12px'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/ab/Single_Spell_Shield_1.png/'
        mr='0px'/>  	
        <Text  fontSize={{ base: "14px", lg: "18px"}} mb='12px' align='left'>1 Single Spell Shield 1</Text></HStack>
        <HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/01/Blazing_Eye_Spell.png/'
        mr='0px'/>  	
        <Text  fontSize={{ base: "14px", lg: "18px"}} align='left'>1 Blazing Eye Spell</Text></HStack>
  </Box>
  </HStack>
    </AccordionPanel>
  </AccordionItem>

        <AccordionItem>
    <h2>
      <AccordionButton bg='red.900'  _expanded={{ bg: 'red.900', color: 'white' }}  _hover={{ bg: 'red.900', color: 'white' }}>
      <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='6rem'
        borderRadius='full'
        src='https://i.imgur.com/qbOorw6.png'
        mr='12px'
      />
      <VStack align='center'><Text fontSize='22px'><b>Repeatable Spells Quests</b></Text></VStack>
      </HStack>
      </Box>
      </AccordionButton>
    </h2>
</AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'red.800', color: 'white' }}>
      <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='6rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/21/Spells_Exam_Credit.png'
        mr='12px'
      />
      <VStack align='left'><Text fontSize='22px'><b>SDR1: Red Dungeon (1/3)</b></Text><HStack><Text>repeat up to</Text><Text color="orange.300"><b>{totalChorOne}x</b></Text></HStack></VStack>
      </HStack>
      </Box>
      <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel h='250px' pb={4} >
      <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text  fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Monsters<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
        <HStack> 
       <Image
       mb='9px'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/23/Choros.png/'
        mr='0px'
      />      
      <Text fontSize={{ base: "14px", lg: "18px"}} align='center'>1 Choros</Text>
      </HStack>
  </Box>
  </HStack>
<Divider mt='30px' mb='12px' />
  <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Rewards<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
       <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/21/Spells_Exam_Credit.png'
        mr='0px'
      />  	<Text  fontSize={{ base: "14px", lg: "18px"}} mb='12px' align='left'>1 Spells Exam Credit</Text>
      </HStack>
      <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/50/Spellfire_(Spells).png/'
        mr='0px'/>  	
        <Text  fontSize={{ base: "14px", lg: "18px"}} align='left'>5 Spellfire</Text></HStack>
  </Box>
  </HStack>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'red.800', color: 'white' }}>
      <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='6rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/74/Decorated_Oniine_Skull_1.png'
        mr='12px'
      />
      <VStack align='left'><Text fontSize='20px'><b>SDR1: Red Dungeon (2/3)</b> <br></br><b>SDR2: 1 Day Sprint Chain (1/3)</b><br></br><i>grab both quests!</i></Text><HStack><Text>repeat up to</Text><Text color="orange.300"><b>{totalOniThree}x</b></Text></HStack></VStack>
      </HStack> 
      </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel h='250px' pb={4} >
      <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text  fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Monsters<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
        <HStack> 
       <Image
       mb='9px'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fa/Oniine.png/'
        mr='0px'
      />      
      <Text fontSize={{ base: "14px", lg: "18px"}} align='center'>3 Oniine</Text>
      </HStack>
  </Box>
  </HStack>
<Divider mt='30px' mb='12px' />
  <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Rewards<br></br>(both quests)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
       <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/21/Spells_Exam_Credit.png'
        mr='0px'
      />  	<Text  fontSize={{ base: "14px", lg: "18px"}} mb='12px' align='left'>2 Spells Exam Credits</Text>
      </HStack>
      <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/50/Spellfire_(Spells).png/'
        mr='0px'/>  	
        <Text  fontSize={{ base: "14px", lg: "18px"}} align='left'>15 Spellfire</Text></HStack>
  </Box>
  </HStack>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'red.800', color: 'white' }}>
      <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='6rem'
        borderRadius='full'
        src='https://media.4thewords.com/public/items/1576709063_no-thanks.png'
        mr='12px'
      />
      <VStack align='left'><Text fontSize='20px'><b>SDR1: Red Dungeon (3/3)</b><br></br> <b>SDR2: 1 Day Sprint Chain (2/3)</b>
       <br></br><i>drop these quests!</i></Text></VStack>
      </HStack> 
      </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel h='160px' pb={4} >
      <HStack justify='center'>
    <Box justify='center' pb={5}>
       <HStack> 
<Text  fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='center'>You don't need either of these quests :)<br></br><br></br> It's technically more efficient to keep repeating the loop (1 Choros quest + the doubled 3 Oniine quest) than to complete the later parts of the quest chains.</Text>
      </HStack>
  </Box>

  </HStack>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'red.800', color: 'white' }}>
      <Box as="span" flex='1' textAlign='left'>
        <HStack>
        <Image
        boxSize='6rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/21/Spells_Exam_Credit.png/'
        mr='12px'
      />
      <VStack align='left'><Text fontSize='20px'><b>SDR3: Spellfire Harvesting (1/4)</b></Text><HStack><Text>repeat up to</Text><Text color="orange.300"><b>{totalNeilFive}x</b></Text></HStack></VStack>
      </HStack>
      </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel h='230px' pb={4} >
      <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text  fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Monsters<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
        <HStack> 
       <Image
       mb='9px'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/19/Neilon.png'
        mr='0px'
      />      
      <Text fontSize={{ base: "14px", lg: "18px"}} align='center'>5 Neilon</Text>
      </HStack>
  </Box>
  </HStack>
<Divider mt='30px' mb='12px' />
  <HStack justify='center'>
    <Box justify='center' w='110px' h='60px' pb={5}>
       <HStack> 
<Text fontSize={{ base: "14px", lg: "18px"}} mt='5px' mr='15px' align='left'><i>Rewards<br></br>(per quest)</i></Text>
      </HStack>
  </Box>

    <Box justify='center' w='165px' h='60px' pb={5}>
       <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/21/Spells_Exam_Credit.png'
        mr='0px'
      />  	<Text  fontSize={{ base: "14px", lg: "18px"}} mb='12px' align='left'>1 Spells Exam Credit</Text>
      </HStack>
      <HStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/50/Spellfire_(Spells).png/'
        mr='0px'/>  	
        <Text  fontSize={{ base: "14px", lg: "18px"}} align='left'>5 Spellfire</Text></HStack>
  </Box>
  </HStack>
    </AccordionPanel>
  </AccordionItem>

</Accordion>

<br></br>
</Container>}


<Container><br></br>
<br></br></Container>


        </Grid>
      </Box>
  );
}

export default App;