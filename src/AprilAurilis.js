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

  const [RD1Active, setRD1Active] = useState(false);
  const [RD2Active, setRD2Active] = useState(false);
  const [RD3Active, setRD3Active] = useState(false);
  const [RD4Active, setRD4Active] = useState(false);

  const [RD1IsShown, setRD1IsShown] = useState(false);
  const [RD2IsShown, setRD2IsShown] = useState(false);
  const [RD3IsShown, setRD3IsShown] = useState(false);
  const [RD4IsShown, setRD4IsShown] = useState(false);

  const handleAlchemyClick = event => {
    // 👇️ toggle shown state
    setAlchemyIsShown(current => !AlchemyIsShown);
    setAlchemyActive(!AlchemyActive);
  };

  const handleAKClick = event => {
    // 👇️ toggle shown state
    setAKIsShown(current => !AKIsShown)
    setAKActive(!AKActive);
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




const handleRD1Click = event => {
// 👇️ toggle shown state
setRD1IsShown(current => !RD1IsShown);
setRD1Active(!RD1Active);};

const handleRD2Click = event => {
  // 👇️ toggle shown state
  setRD2IsShown(current => !RD2IsShown);
  setRD2Active(!RD2Active);};

  const handleRD3Click = event => {
    // 👇️ toggle shown state
    setRD3IsShown(current => !RD3IsShown);
    setRD3Active(!RD3Active);};

    const handleRD4Click = event => {
      // 👇️ toggle shown state
      setRD4IsShown(current => !RD4IsShown);
      setRD4Active(!RD4Active);};






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


//repeatable quest: 4 tyomu, 8 odees//

const [TyoFour, setTyoFour] = useState(0); // Or any other non-zero value
const totalTyoFour = Math.floor (totalTyo/4);

const [OdeesEight, setOdeesEight] = useState(0); // Or any other non-zero value
const totalOdeesEight = Math.floor (totalOdees/8);

const SmallestTyoOdees = Math.min (totalTyoFour, totalOdeesEight)

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

//DUNGEONS: need to do dungeon 1, 2, 3, 4//


//DUNGEONS: need to do dungeon 1, 2, 3//


//DUNGEONS: need to do dungeon 1, 2, 4//


//DUNGEONS: need to do dungeon 2, 3, 4//


//DUNGEONS: need to do dungeon 1, 2//


//DUNGEONS: need to do dungeon 1, 3//


//DUNGEONS: need to do dungeon 1, 4//


//DUNGEONS: need to do dungeon 2, 3//


//DUNGEONS: need to do dungeon 2, 4//


//DUNGEONS: need to do dungeon 3, 4//


//DUNGEONS: need to do dungeon 1//
const [Dungeon1_1Chor, setDungeon1_1Chor] = useState(0);
const [Dungeon1_2Oni, setDungeon1_2Oni] = useState(0);
const [Dungeon1_3Neil, setDungeon1_3Neil] = useState(0);


const totalDungeon1_1Chor = Math.max (totalChor-1,0) 
const totalDungeon1_2Oni = Math.max (totalOni-3,0)
const totalDungeon1_3Neil = Math.max (totalNeil-8,0)


//DUNGEONS: need to do dungeon 2//
const [Dungeon2_1Oni, setDungeon2_1Oni] = useState(0);
const [Dungeon2_2Chor, setDungeon2_2Chor] = useState(0);
const [Dungeon2_3Oni, setDungeon2_3Oni] = useState(0);


const totalDungeon2_1Oni = Math.max (totalOni-3,0) 
const totalDungeon2_2Chor = Math.max (totalChor-2,0)
const totalDungeon2_3Oni = Math.max (totalDungeon2_1Oni-5,0)


//DUNGEONS: need to do dungeon 3//


//DUNGEONS: need to do dungeon 4//

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
            <Heading pt={3}>"Defend Your Thesis" Aurilis Academy Quests</Heading>
            <Container><p>This page calculates quest overlap for the large Aurilis Academy "Thesis" quests, based upon your progress so far.</p>
            <br></br>
            
            <Divider />
            <br></br>
            <p><b>Accessibility Notes:</b>
              <br></br>
             - you can open and close the monster lists without losing any data</p>
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
      <Button variant='outline' onClick= {handleSpellsClick} style={{ backgroundColor: SpellsActive ? "#2d0116" : "transparent" }}>      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://i.imgur.com/qbOorw6.png'
        mr='12px'
      />
      <span>Spells</span></Button>
        </WrapItem>
        </Wrap></Container>
        
        {SpellsIsShown &&  <Container>
          <VStack><HStack><text>Which dungeon quest chains do you still need to do?</text></HStack>
         <br></br>
         <Wrap justify='center'>
        <Button  variant='outline' onClick={handleRD1Click}  style={{ backgroundColor: RD1Active ? "#2C0517" : "transparent" }}>      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/6b/Red_Dungeon_1_Badge.png'
        mr='12px'
      />
      <text>Red Dungeon #1</text></Button>
        <Button  variant='outline' onClick={handleRD2Click}  style={{ backgroundColor: RD2Active ? "#2C0517" : "transparent" }}>      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/ea/Red_Dungeon_2_Badge.png/'
        mr='12px'
      />
      <text>Red Dungeon #2</text></Button>

      <Button  variant='outline' onClick={handleRD3Click}  style={{ backgroundColor: RD3Active ? "#2C0517" : "transparent" }}>      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/dc/Red_Dungeon_3_Badge.png/'
        mr='12px'
      />
      <text>Red Dungeon #3</text></Button>

      <Button  variant='outline' onClick={handleRD4Click}  style={{ backgroundColor: RD4Active ? "#2C0517" : "transparent" }}>      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a0/Red_Dungeon_4.png/'
        mr='12px'
      />
      <text>Red Dungeon #4</text></Button>
        </Wrap></VStack></Container>}

<Accordion minWidth='425px' maxWidth='425px' allowMultiple>
{AlchemyIsShown &&  <Container>
  <AccordionItem>
  <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='center' p={3}>
        <Heading as='h3' size='lg'>Alchemy Monsters</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        <Box as="span" flex='1'>
<TableContainer>
  <Table variant='striped' align='center' colorScheme={tablecolor} maxW='400px'>
    <Thead>
      <Tr>
        <Th>Monster</Th>
        <Th>Qty</Th>
      </Tr>
    </Thead>
    <Tbody>
    <Tr>
      <Td>
        <VStack align='left'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/e3/Mund.png/'
        mr='5px'
      /> <Text
        align='left'>Mund</Text>
        </VStack>
</Td>
        <Td>
        <VStack align='left'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='80px' maxW='80px'>
  <NumberInputField id='Mund' onInput={(e) => handleMundChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 8</Text></VStack>
          </Td>
      </Tr>

      <Tr>
      <Td>
        <VStack align='left'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b0/Galaxy_Mund.png'
        mr='5px'
      /> <Text
        align='left'>Galaxy Mund</Text>
        </VStack>
</Td>
        <Td>
        <VStack align='left'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='GMund' onInput={(e) => handleGMundChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 8</Text></VStack>
          </Td>
      </Tr>

      <Tr>
      <Td>
        <VStack align='left'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://media.4thewords.com/public/monsters/image_1711489804.png'
        mr='5px'
      /> <Text
        align='left'>Crystal Mund</Text>
        </VStack>
</Td>
        <Td>
        <VStack align='left'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='CMund' onInput={(e) => handleCMundChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 10</Text></VStack>
          </Td>
      </Tr>

      <Tr>
      <Td>
        <VStack align='left'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/85/Quaruk.png/'
        mr='5px'
      /> <Text
        align='left'>Quaruk</Text>
        </VStack>
</Td>
        <Td>
        <VStack align='left'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='Quaruk' onInput={(e) => handleQuarukChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 8</Text></VStack>
          </Td>
      </Tr>

      <Tr>
      <Td>
        <VStack align='left'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/82/Aederster.png/'
        mr='5px'
      /> <Text
        align='left'>Aederster</Text>
        </VStack>
</Td>

        <Td>
        <VStack align='left'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='Aed' onInput={(e) => handleAedChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 77</Text></VStack>
          </Td>
      </Tr>

      <Tr>
      <Td>
        <VStack align='left'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/c/c3/Jaraci.png/'
        mr='5px'
      /> <Text
        align='left'>Jaraci</Text>
        </VStack>
</Td>
        <Td>
        <VStack align='left'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='Jar' onInput={(e) => handleJarChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 86</Text></VStack>
          </Td>
      </Tr>

      <Tr>
      <Td>
        <VStack align='left'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/27/Sapee.png/'
        mr='5px'
      /> <Text
        align='left'>Sapee</Text>
        </VStack>
</Td>
        <Td>
        <VStack align='left'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='Sapee' onInput={(e) => handleSapeeChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 42</Text></VStack>
          </Td>
      </Tr>

      <Tr>
      <Td>
        <VStack align='left'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/55/Audrick_II.png/'
        mr='5px'
      /> <Text
        align='left'>Audrick II</Text>
        </VStack>
</Td>

        <Td>
        <VStack align='left'>
        <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='Aud' onInput={(e) => handleAudChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 40</Text></VStack>
          </Td>
      </Tr>

    </Tbody>
  </Table>
</TableContainer>
<Container><br></br>
<br></br></Container>
      </Box>
      <br></br>
    </AccordionPanel>
  </AccordionItem>
  </Container>}

  {AKIsShown &&  <Container>
  <AccordionItem>
  <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='center' p={3}>
        <Heading as='h3' size='lg'>Ancient Knowledge Monsters</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        <Box as="span" flex='1'>
<TableContainer>
  <Table variant='striped' align='center' colorScheme={AKtablecolor}   maxW='400px'>
    <Thead>
      <Tr>
        <Th>Monster</Th>
        <Th>Qty</Th>
      </Tr>
    </Thead>
    <Tbody>
    <Tr>
      <Td><VStack align='left'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/d5/Whodini.png'
        mr='5px'
      /> <Text
        align='left'>Whodini</Text>
        </VStack>
</Td>
        <Td isNumeric>
        <VStack  align='left'>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleWhoChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 12</Text>
      </VStack>
          </Td>
      </Tr>

      <Tr>
      <Td><VStack align='left'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fd/Galaxy_Whodini.png/'
        mr='5px'
      /> <Text
        align='left'>Galaxy Whodini</Text>
        </VStack>
</Td>
        <Td isNumeric>
        <VStack align='left'>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleGWhoChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 12</Text>
      </VStack>
          </Td>
      </Tr>

      <Tr>
      <Td><VStack align='left'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/21/Cobaltoan_Whodini.png/'
        mr='5px'
      /> <Text
        align='left'>Crystal Whodini</Text>
        </VStack>
</Td>
        <Td isNumeric>
        <VStack align='left'>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleCWhoChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 12</Text>
      </VStack>
          </Td>
      </Tr>

      <Tr>
      <Td><VStack align='left'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/3/33/Musya.png/'
        mr='5px'
      /> <Text
        align='left'>Musya</Text>
        </VStack>
</Td>
        <Td isNumeric>
        <VStack align='left'>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleMusyaChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 180</Text>
      </VStack>
          </Td>
      </Tr>

      <Tr>
      <Td><VStack align='left'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/18/Bomatik.png/'
        mr='5px'
      /> <Text
        align='left'>Bomatik</Text>
        </VStack>
</Td>
        <Td isNumeric>
        <VStack align='left'>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleBomaChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 76</Text>
      </VStack>
          </Td>
      </Tr>

      <Tr>
      <Td><VStack align='left'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5c/Tyomu.png/'
        mr='5px'
      /> <Text
        align='left'>Tyomu</Text>
        </VStack>
</Td>
        <Td isNumeric>
        <VStack align='left'>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleTyoChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 55</Text>
      </VStack>
          </Td>
      </Tr>

      <Tr>
      <Td><VStack align='left'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/16/Sprenki.png/'
        mr='5px'
      /> <Text
        align='left'>Sprenki</Text>
        </VStack>
</Td>
        <Td isNumeric>
        <VStack align='left'>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleSpreChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 21</Text>
      </VStack>
          </Td>
      </Tr>

      <Tr>
      <Td><VStack align='left'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f7/OdysOdees.png/'
        mr='5px'
      /> <Text
        align='left'>Odys/Odees</Text>
        </VStack>
</Td>
        <Td isNumeric>
        <VStack align='left'>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleOdeesChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 8</Text>
      </VStack>
          </Td>
      </Tr>


    </Tbody>
  </Table>
</TableContainer>
<Container><br></br>
<br></br></Container>
      </Box>
      <br></br>
    </AccordionPanel>
  </AccordionItem>
  </Container>}

  {AstroIsShown &&  <Container>
  <AccordionItem>
  <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='center' p={3}>
        <Heading as='h3' size='lg'>Astrology Monsters</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        <Box as="span" flex='1'>
<TableContainer>
  <Table variant='striped' align='center' colorScheme={Astrotablecolor}   maxW='400px'>
    <Thead>
      <Tr>
        <Th>Monster</Th>
        <Th>Qty</Th>
      </Tr>
    </Thead>
    <Tbody>
    <Tr>
      <Td><VStack align='left'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/95/Alderbam.png/'
        mr='5px'
      /> <Text
        align='left'>Alderbam</Text>
        </VStack>
</Td>
        <Td isNumeric>
        <VStack  align='left'>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleAlderChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 20</Text>
      </VStack>
          </Td>
      </Tr>

      <Tr>
      <Td><VStack align='left'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/82/Galaxy_Alderbam.png/'
        mr='5px'
      /> <Text
        align='left'>Galaxy Alderbam</Text>
        </VStack>
</Td>
        <Td isNumeric>
        <VStack  align='left'>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleGAlderChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 20</Text>
      </VStack>
          </Td>
      </Tr>

      <Tr>
      <Td><VStack align='left'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://media.4thewords.com/public/monsters/image_1711489731.png'
        mr='5px'
      /> <Text
        align='left' fontSize='lg'>Crystal Alderbam</Text>
        </VStack>
</Td>
        <Td isNumeric>
        <VStack  align='left'>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleCAlderChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 8</Text>
      </VStack>
          </Td>
      </Tr>

      <Tr>
      <Td><VStack align='left'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/c/c5/Mertino.png/'
        mr='5px'
      /> <Text
        align='left'>Mertino</Text>
        </VStack>
</Td>
        <Td isNumeric>
        <VStack  align='left'>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleMertChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 11</Text>
      </VStack>
          </Td>
      </Tr>

      <Tr>
      <Td><VStack align='left'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/d1/Greifkon.png'
        mr='5px'
      /> <Text
        align='left'>Greifkon</Text>
        </VStack>
</Td>
        <Td isNumeric>
        <VStack  align='left'>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleGreifChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 16</Text>
      </VStack>
          </Td>
      </Tr>

      <Tr>
      <Td><VStack align='left'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/ee/Gullio.png/'
        mr='5px'
      /> <Text
        align='left'>Gullio</Text>
        </VStack>
</Td>
        <Td isNumeric>
        <VStack  align='left'>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleGullChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 55</Text>
      </VStack>
          </Td>
      </Tr>

      <Tr>
      <Td><VStack align='left'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/24/Knuff.png/'
        mr='5px'
      /> <Text
        align='left'>Knuff</Text>
        </VStack>
</Td>
        <Td isNumeric>
        <VStack  align='left'>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleKnuffChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 222</Text>
      </VStack>
          </Td>
      </Tr>

      <Tr>
      <Td><VStack align='left'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://media.4thewords.com/public/monsters/image_1707777984.png'
        mr='5px'
      /> <Text
        align='left'>Wizkal</Text>
        </VStack>
</Td>
        <Td isNumeric>
        <VStack  align='left'>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleWizChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 35</Text>
      </VStack>
          </Td>
      </Tr>


    </Tbody>
  </Table>
</TableContainer>
<Container><br></br>
<br></br></Container>
      </Box>
    </AccordionPanel>
  </AccordionItem>
  </Container>}

  {SpellsIsShown &&  <Container>
  <AccordionItem>
  <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='center' p={3}>
        <Heading as='h3' size='lg'>Spells Monsters</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        <Box as="span" flex='1'>
<TableContainer>
  <Table variant='striped' align='center' colorScheme={Spellstablecolor}   maxW='400px'>
    <Thead>
      <Tr>
        <Th>Monster</Th>
        <Th>Qty</Th>
      </Tr>
    </Thead>
    <Tbody>
    <Tr>
      <Td><VStack align='left'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/97/Chysis.png/'
        mr='5px'
      /> <Text
        align='left'>Chysis</Text>
        </VStack>
</Td>

        <Td isNumeric>
        <VStack  align='left'>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleChyChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 8</Text>
      </VStack>
          </Td>
      </Tr>

      <Tr>
      <Td><VStack align='left'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5b/Galaxy_Chysis.png'
        mr='5px'
      /> <Text
        align='left'>Galaxy Chysis</Text>
        </VStack>
</Td>

        <Td isNumeric>
        <VStack  align='left'>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleGChyChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 8</Text>
      </VStack>
          </Td>
      </Tr>

      <Tr>
      <Td><VStack align='left'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://media.4thewords.com/public/monsters/image_1711489668.png'
        mr='5px'
      /> <Text
        align='left'>Cobaltoan Chysis</Text>
        </VStack>
</Td>

        <Td isNumeric>
        <VStack  align='left'>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleCChyChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 8</Text>
      </VStack>
          </Td>
      </Tr>

      <Tr>
      <Td><VStack align='left'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://media.4thewords.com/public/monsters/image_1707777793.png'
        mr='5px'
      /> <Text
        align='left'>Zenme</Text>
        </VStack>
</Td>
        <Td isNumeric>
        <VStack  align='left'>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleZenChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 10</Text>
      </VStack>
          </Td>
      </Tr>

      <Tr>
      <Td><VStack align='left'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/65/Kinguz.png/'
        mr='5px'
      /> <Text
        align='left'>Kinguz</Text>
        </VStack>
</Td>

        <Td isNumeric>
        <VStack  align='left'>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleKingChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 111</Text>
      </VStack>
          </Td>
      </Tr>

      <Tr>
      <Td><VStack align='left'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/19/Neilon.png/'
        mr='5px'
      /> <Text
        align='left'>Neilon</Text>
        </VStack>
</Td>

        <Td isNumeric>
        <VStack  align='left'>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleNeilChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 50</Text>
      </VStack>
          </Td>
      </Tr>

      <Tr>
      <Td><VStack align='left'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/fa/Oniine.png'
        mr='5px'
      /> <Text
        align='left'>Oniine</Text>
        </VStack>
</Td>
        <Td isNumeric>
        <VStack  align='left'>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleOniChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 15</Text>
      </VStack>
          </Td>
      </Tr>

      <Tr>
      <Td><VStack align='left'>
        <Image
        align='left'
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/23/Choros.png/'
        mr='5px'
      /> <Text
        align='left'>Choros</Text>
        </VStack>
</Td>
        <Td isNumeric>
        <VStack  align='left'>
      <NumberInput defaultValue={0} min={0} max={9999} size='md' mindW='85px' maxW='85px'>
  <NumberInputField id='dreH' onInput={(e) => handleChorChange(e.target.value)} />
</NumberInput>
<Text align='left'>of 20</Text>
      </VStack>
          </Td>
      </Tr>


    </Tbody>
  </Table>
</TableContainer>
<Container><br></br>
<br></br></Container>
      </Box>
      <br></br>
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
<Heading>Quick View</Heading>
<br></br>
<TableContainer>
  <Table align='center' variant='simple' colorScheme={tablecolor} maxW={20}>
  <Tbody>
    <Tr>
<Td><Stat>
  <StatLabel>Total Word Count with Attack</StatLabel>
  <StatNumber>
  {AlchemyIsShown && <text align='center'>{totalAedTen}, {totalJarSix}, {totalSapSix}, {SmallestAedJarSap}<br></br><br></br></text>}
  {AKIsShown && <text align='center'>{totalTyoFour}, {totalOdeesEight}, {SmallestTyoOdees}</text>}

  </StatNumber>
</Stat></Td></Tr>
</Tbody>
<Tfoot>
  {AlchemyIsShown && <Text fontSize='sm' align='center'>alchemy thesis</Text>}
  {AKIsShown && <Text fontSize='sm' align='center'>knowledge thesis</Text>}
  </Tfoot>
</Table>
</TableContainer>
<br></br></Container>

        {AlchemyIsShown && 
<Container>
<Box as="span" flex='1' textAlign='center' padding-top={3}>
              <Wrap justify='center'>
        <WrapItem>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://i.imgur.com/dzFooLd.png'
        mr='12px'
      />
      <span><b>Repeatable Alchemy Quests</b></span>
      </WrapItem>
      </Wrap>
        </Box>
        <TableContainer>
  <Table variant='striped' colorScheme={tablecolor}   maxW='444px'  align='center'>
  <Thead>
      <Tr>
        <Th>Quest Name</Th>
        <Th>Repetitions</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>
<text align='center'>Using Organic Materials (3/3)</text>
        </Td>
        <Td>
<text align='center'>{SmallestAedJarSap}</text>
        </Td>
      </Tr>

    </Tbody>
  </Table>
</TableContainer>
<TableContainer>
  <Table variant='simple' maxW={20} align='center'>
    <Tbody>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>monsters<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/82/Aederster.png/'
        alt='Aederster'
        mr='0px'
      />  	<text align='center'>10</text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/c/c3/Jaraci.png/'
        alt='Jaraci'
        mr='0px'/>  	
        <text align='center'>6</text></VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
       <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/27/Sapee.png/'
        alt='Sapee'
        mr='0px'
      />      
      <text align='center'>6</text>
      </VStack>
  </Box>
  <br></br>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>rewards<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/9a/Alchemy_Exam_Credit.png/'
        alt='Alchemy Exam Credit'
        mr='0px'
      />  	<text align='center'>1</text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/c/c7/Alchemy_Class_Ecosystem_1.png/'
        alt='Alchemy Class Ecosystem (House Reward)'
        mr='0px'/>  	
        <text align='center'>1</text></VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>word count<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://media.4thewords.com/media/ui/icons/i_words.png'
        mr='0px'
      />  	<text align='center'>#,###<br></br></text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
        </Td>
      </Tr>
      </Tbody>
      </Table></TableContainer>
      <br></br><br></br><Divider />
<br></br>
</Container>}

{AKIsShown && 
<Container>
  
<Box as="span" flex='1' textAlign='center' padding-top={3}>
              <Wrap justify='center'>
        <WrapItem>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://i.imgur.com/hEBDkSp.png'
        mr='12px'
      />
      <span><b>Repeatable Ancient Knowledge Quests</b></span>
      </WrapItem>
      </Wrap>

        </Box>
        <TableContainer>
  <Table variant='striped' colorScheme={AKtablecolor}   maxW='444px'  align='center'>
  <Thead>
      <Tr>
        <Th>Quest Name</Th>
        <Th>Repetitions</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>
<text align='center'>Terrific Toxins (2/2)</text>
        </Td>
        <Td>
<text align='center'>{SmallestTyoOdees}</text>
        </Td>
      </Tr>

    </Tbody>
  </Table>
</TableContainer>
<TableContainer>
  <Table variant='simple' maxW={20} align='center'>
    <Tbody>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>monsters<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/5c/Tyomu.png/'
        alt='Tyomu'
        mr='0px'
      />  	<text align='center'>4</text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/f/f7/OdysOdees.png/'
        alt='Odees'
        mr='0px'/>  	
        <text align='center'>8</text></VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
  <br></br>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>rewards<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/4c/Ancient_Knowledge_Exam_Credit.png/'
        alt='Ancient Knowledge Exam Credit'
        mr='0px'
      />  	<text align='center'>1</text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/1a/Cursed_Rug_1.png'
        alt='Cursed Rug (House Reward)'
        mr='0px'/>  	
        <text align='center'>1</text></VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>word count<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://media.4thewords.com/media/ui/icons/i_words.png'
        mr='0px'
      />  	<text align='center'>#,###<br></br></text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
        </Td>
      </Tr>
      </Tbody>
      </Table></TableContainer>
      <br></br><Divider />
<br></br>
</Container>}

{AstroIsShown && 
<Container>
<Box as="span" flex='1' textAlign='center' padding-top={3}>
              <Wrap justify='center'>
        <WrapItem>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://i.imgur.com/EDRa116.png'
        mr='12px'
      />
      <span><b>Repeatable Astrology Quests</b></span>
      </WrapItem>
      </Wrap>

        </Box>
        <TableContainer>
  <Table variant='striped' colorScheme={Astrotablecolor}  maxW='444px' align='center'>
  <Thead>
      <Tr>
        <Th>Quest Name</Th>
        <Th>Repetitions</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>
<text align='center'>Conjunctions & Constellations</text>
        </Td>
        <Td>
<Text align='left'>{SmallestWizKnuff}</Text>
        </Td>
      </Tr>

    </Tbody>
  </Table>
</TableContainer>
<TableContainer>
  <Table variant='simple' maxW={20} align='center'>
    <Tbody>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>monsters<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://media.4thewords.com/public/monsters/image_1707777984.png'
        alt='Wizkal'
        mr='0px'
      />  	<text align='center'>2</text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/24/Knuff.png'
        alt='Knuff'
        mr='0px'/>  	
        <text align='center'>16</text></VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
  <br></br>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>rewards<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/7e/Astrology_Exam_Credit.png'
        alt='Astrology Exam Credit'
        mr='0px'
      />  	<text align='center'>1</text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/ef/Star_Pillow_1.png/'
        alt='Star Pillow (House Reward)'
        mr='0px'/>  	
        <text align='center'>1</text></VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>word count<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://media.4thewords.com/media/ui/icons/i_words.png'
        mr='0px'
      />  	<text align='center'>#,###<br></br></text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
        </Td>
      </Tr>
      </Tbody>
      </Table></TableContainer>
      <br></br>
      <TableContainer>
  <Table variant='striped' colorScheme={Astrotablecolor}  maxW='444px' align='center'>
  <Thead>
      <Tr>
        <Th>Quest Name</Th>
        <Th>Repetitions</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>
<text align='center'>Doomed Destiny</text>
        </Td>
        <Td>
        <Box>
<Text align='left'>{totalMertThree}</Text>
          </Box>
        </Td>
      </Tr>

    </Tbody>
  </Table>
</TableContainer>
<TableContainer>
  <Table variant='simple' maxW={20} align='center'>
    <Tbody>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>monsters<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/c/c5/Mertino.png/'
        alt='Mertino'
        mr='0px'
      />  	<text align='center'>3</text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
  <br></br>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>rewards<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/7e/Astrology_Exam_Credit.png'
        alt='Astrology Exam Credit'
        mr='0px'
      />  	<text align='center'>1</text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/26/Mertino_Skull_1.png/'
        alt='Mertino Skull (House Reward)'
        mr='0px'/>  	
        <text align='center'>1</text></VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>word count<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://media.4thewords.com/media/ui/icons/i_words.png'
        mr='0px'
      />  	<text align='center'>#,###<br></br></text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
        </Td>
      </Tr>
      </Tbody>
      </Table></TableContainer>
      <br></br>
      <TableContainer>
  <Table variant='striped' colorScheme={Astrotablecolor}  maxW='444px' align='center'>
  <Thead>
      <Tr>
        <Th>Quest Name</Th>
        <Th>Repetitions</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>
<text align='center'>Quintiles & Quasi-Moons</text>
        </Td>
        <Td><Box>
<Text align='left'>{SmallestGreifGull}</Text>
</Box>
        </Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
<TableContainer>
  <Table variant='simple' maxW={20} align='center'>
    <Tbody>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>monsters<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/d1/Greifkon.png'
        alt='Greifkon'
        mr='0px'
      />  	<text align='center'>3</text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
        <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/ee/Gullio.png/'
        alt='Gullio'
        mr='0px'
      />  	<text align='center'>10</text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
  <br></br>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>rewards<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/7e/Astrology_Exam_Credit.png'
        alt='Astrology Exam Credit'
        mr='0px'
      />  	<text align='center'>1</text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/3/39/Starry_Curtains_1.png'
        alt='Starry Curtains (House Reward)'
        mr='0px'/>  	
        <text align='center'>1</text></VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>word count<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://media.4thewords.com/media/ui/icons/i_words.png'
        mr='0px'
      />  	<text align='center'>#,###<br></br></text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
        </Td>
      </Tr>
      </Tbody>
      </Table></TableContainer>
      <br></br><Divider />
<br></br>
</Container>}

{SpellsIsShown && 
<Container>
<Box as="span" flex='1' textAlign='center' padding-top={3}>
              <Wrap justify='center'>
        <WrapItem>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://i.imgur.com/qbOorw6.png'
        mr='12px'
      />
      <span><b>Spells Dungeon Chains to Complete</b></span>
      </WrapItem>
      </Wrap>

        </Box>
        <TableContainer>
  <Table variant='striped' colorScheme={Spellstablecolor}  maxW='444px' align='center'>
  <Thead>
      <Tr>
        <Th>Quest Name</Th>
        <Th>Repetitions</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>
<text align='center'>Conjunctions & Constellations</text>
        </Td>
        <Td>
<Text align='left'>{SmallestWizKnuff}</Text>
        </Td>
      </Tr>

    </Tbody>
  </Table>
</TableContainer>
<TableContainer>
  <Table variant='simple' maxW={20} align='center'>
    <Tbody>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>monsters<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://media.4thewords.com/public/monsters/image_1707777984.png'
        alt='Wizkal'
        mr='0px'
      />  	<text align='center'>2</text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/24/Knuff.png'
        alt='Knuff'
        mr='0px'/>  	
        <text align='center'>16</text></VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
  <br></br>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>rewards<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/7e/Astrology_Exam_Credit.png'
        alt='Astrology Exam Credit'
        mr='0px'
      />  	<text align='center'>1</text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/ef/Star_Pillow_1.png/'
        alt='Star Pillow (House Reward)'
        mr='0px'/>  	
        <text align='center'>1</text></VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>word count<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://media.4thewords.com/media/ui/icons/i_words.png'
        mr='0px'
      />  	<text align='center'>#,###<br></br></text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
        </Td>
      </Tr>
      </Tbody>
      </Table></TableContainer>
      <br></br>
      <TableContainer>
  <Table variant='striped' colorScheme={Spellstablecolor}  maxW='444px' align='center'>
  <Thead>
      <Tr>
        <Th>Quest Name</Th>
        <Th>Repetitions</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>
<text align='center'>Doomed Destiny</text>
        </Td>
        <Td>
        <Box>
<Text align='left'>{totalMertThree}</Text>
          </Box>
        </Td>
      </Tr>

    </Tbody>
  </Table>
</TableContainer>
<TableContainer>
  <Table variant='simple' maxW={20} align='center'>
    <Tbody>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>monsters<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/c/c5/Mertino.png/'
        alt='Mertino'
        mr='0px'
      />  	<text align='center'>3</text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
  <br></br>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>rewards<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/7e/Astrology_Exam_Credit.png'
        alt='Astrology Exam Credit'
        mr='0px'
      />  	<text align='center'>1</text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/26/Mertino_Skull_1.png/'
        alt='Mertino Skull (House Reward)'
        mr='0px'/>  	
        <text align='center'>1</text></VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>word count<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://media.4thewords.com/media/ui/icons/i_words.png'
        mr='0px'
      />  	<text align='center'>#,###<br></br></text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
        </Td>
      </Tr>
      </Tbody>
      </Table></TableContainer>
      <br></br>
      <TableContainer>
  <Table variant='striped' colorScheme={Spellstablecolor}  maxW='444px' align='center'>
  <Thead>
      <Tr>
        <Th>Quest Name</Th>
        <Th>Repetitions</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>
<text align='center'>Quintiles & Quasi-Moons</text>
        </Td>
        <Td><Box>
<Text align='left'>{SmallestGreifGull}</Text>
</Box>
        </Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
<TableContainer>
  <Table variant='simple' maxW={20} align='center'>
    <Tbody>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>monsters<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/d1/Greifkon.png'
        alt='Greifkon'
        mr='0px'
      />  	<text align='center'>3</text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
        <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/ee/Gullio.png/'
        alt='Gullio'
        mr='0px'
      />  	<text align='center'>10</text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
  <br></br>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>rewards<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/7e/Astrology_Exam_Credit.png'
        alt='Astrology Exam Credit'
        mr='0px'
      />  	<text align='center'>1</text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/3/39/Starry_Curtains_1.png'
        alt='Starry Curtains (House Reward)'
        mr='0px'/>  	
        <text align='center'>1</text></VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>word count<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://media.4thewords.com/media/ui/icons/i_words.png'
        mr='0px'
      />  	<text align='center'>#,###<br></br></text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
        </Td>
      </Tr>
      </Tbody>
      </Table></TableContainer>
      <br></br><Divider />
<br></br>
</Container>}


{SpellsIsShown && 
<Container>
<Box as="span" flex='1' textAlign='center' padding-top={3}>
              <Wrap justify='center'>
        <WrapItem>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://i.imgur.com/qbOorw6.png'
        mr='12px'
      />
      <span><b>Repeatable Spells Quests</b></span>
      </WrapItem>
      </Wrap>

        </Box>
        <TableContainer>
  <Table variant='striped' colorScheme={Spellstablecolor}  maxW='444px' align='center'>
  <Thead>
      <Tr>
        <Th>Quest Name</Th>
        <Th>Repetitions</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>
<text align='center'>Conjunctions & Constellations</text>
        </Td>
        <Td>
<Text align='left'>{SmallestWizKnuff}</Text>
        </Td>
      </Tr>

    </Tbody>
  </Table>
</TableContainer>
<TableContainer>
  <Table variant='simple' maxW={20} align='center'>
    <Tbody>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>monsters<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://media.4thewords.com/public/monsters/image_1707777984.png'
        alt='Wizkal'
        mr='0px'
      />  	<text align='center'>2</text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/24/Knuff.png'
        alt='Knuff'
        mr='0px'/>  	
        <text align='center'>16</text></VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
  <br></br>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>rewards<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/7e/Astrology_Exam_Credit.png'
        alt='Astrology Exam Credit'
        mr='0px'
      />  	<text align='center'>1</text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/ef/Star_Pillow_1.png/'
        alt='Star Pillow (House Reward)'
        mr='0px'/>  	
        <text align='center'>1</text></VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>word count<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://media.4thewords.com/media/ui/icons/i_words.png'
        mr='0px'
      />  	<text align='center'>#,###<br></br></text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
        </Td>
      </Tr>
      </Tbody>
      </Table></TableContainer>
      <br></br>
      <TableContainer>
  <Table variant='striped' colorScheme={Spellstablecolor}  maxW='444px' align='center'>
  <Thead>
      <Tr>
        <Th>Quest Name</Th>
        <Th>Repetitions</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>
<text align='center'>Doomed Destiny</text>
        </Td>
        <Td>
        <Box>
<Text align='left'>{totalMertThree}</Text>
          </Box>
        </Td>
      </Tr>

    </Tbody>
  </Table>
</TableContainer>
<TableContainer>
  <Table variant='simple' maxW={20} align='center'>
    <Tbody>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>monsters<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/c/c5/Mertino.png/'
        alt='Mertino'
        mr='0px'
      />  	<text align='center'>3</text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
  <br></br>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>rewards<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/7e/Astrology_Exam_Credit.png'
        alt='Astrology Exam Credit'
        mr='0px'
      />  	<text align='center'>1</text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/26/Mertino_Skull_1.png/'
        alt='Mertino Skull (House Reward)'
        mr='0px'/>  	
        <text align='center'>1</text></VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>word count<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://media.4thewords.com/media/ui/icons/i_words.png'
        mr='0px'
      />  	<text align='center'>#,###<br></br></text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
        </Td>
      </Tr>
      </Tbody>
      </Table></TableContainer>
      <br></br>
      <TableContainer>
  <Table variant='striped' colorScheme={Spellstablecolor}  maxW='444px' align='center'>
  <Thead>
      <Tr>
        <Th>Quest Name</Th>
        <Th>Repetitions</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>
<text align='center'>Quintiles & Quasi-Moons</text>
        </Td>
        <Td><Box>
<Text align='left'>{SmallestGreifGull}</Text>
</Box>
        </Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
<TableContainer>
  <Table variant='simple' maxW={20} align='center'>
    <Tbody>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>monsters<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/d1/Greifkon.png'
        alt='Greifkon'
        mr='0px'
      />  	<text align='center'>3</text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
        <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/e/ee/Gullio.png/'
        alt='Gullio'
        mr='0px'
      />  	<text align='center'>10</text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
  <br></br>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>rewards<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/7e/Astrology_Exam_Credit.png'
        alt='Astrology Exam Credit'
        mr='0px'
      />  	<text align='center'>1</text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/3/39/Starry_Curtains_1.png'
        alt='Starry Curtains (House Reward)'
        mr='0px'/>  	
        <text align='center'>1</text></VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <Wrap><WrapItem><span><i>word count<br></br>per quest</i></span></WrapItem></Wrap>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
       <VStack> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://media.4thewords.com/media/ui/icons/i_words.png'
        mr='0px'
      />  	<text align='center'>#,###<br></br></text>
      </VStack>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
  <br></br>
        </Td>
        <Td>
        <Box justify='center' w='50px' h='60px' pb={5}>
  </Box>
        </Td>
      </Tr>
      </Tbody>
      </Table></TableContainer>
      <br></br><Divider />
<br></br>
</Container>}




<Container><br></br>
<br></br></Container>


        </Grid>
      </Box>
  );
}

export default App;