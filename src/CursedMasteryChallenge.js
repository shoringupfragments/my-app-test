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

  const [LoleY_UseGrenade_Active, setLoleY_UseGrenade_Active] = useState(false);
  const [LoleN_UseGrenade_Active, setLoleN_UseGrenade_Active] = useState(false);
  const [LoleY_UseGrenade_IsShown, setLoleY_UseGrenade_IsShown] = useState(false);
  const [LoleN_UseGrenade_IsShown, setLoleN_UseGrenade_IsShown] = useState(false);

  const [LoleY_UseBlast_Active, setLoleY_UseBlast_Active] = useState(false);
  const [LoleN_UseBlast_Active, setLoleN_UseBlast_Active] = useState(false);
  const [LoleY_UseBlast_IsShown, setLoleY_UseBlast_IsShown] = useState(false);
  const [LoleN_UseBlast_IsShown, setLoleN_UseBlast_IsShown] = useState(false);



  const handleLoleYClick = event => {
    // 👇️ toggle shown state
    setLoleYIsShown(current => !LoleYIsShown);
    setLoleNIsShown(current => null);
    setLoleYActive(!LoleYActive);
    setLoleNActive(current => null);
    setLoleY_UseGrenade_IsShown(current => null);
    setLoleY_UseBlast_IsShown(current => null);
    setLoleN_UseGrenade_IsShown(current => null);
    setLoleN_UseBlast_IsShown(current => null);
    setLoleY_UseGrenade_Active(current => null);
    setLoleY_UseBlast_Active(current => null);
    setLoleN_UseGrenade_Active(current => null);
    setLoleN_UseBlast_Active(current => null);
  };

  const handleLoleNClick = event => {
    // 👇️ toggle shown state
    setLoleNIsShown(current => !LoleNIsShown);
    setLoleYIsShown(current => null);
    setLoleNActive(!LoleNActive);
    setLoleYActive(current => null);
    setLoleY_UseGrenade_IsShown(current => null);
    setLoleY_UseBlast_IsShown(current => null);
    setLoleN_UseGrenade_IsShown(current => null);
    setLoleN_UseBlast_IsShown(current => null);
    setLoleY_UseGrenade_Active(current => null);
    setLoleY_UseBlast_Active(current => null);
    setLoleN_UseGrenade_Active(current => null);
    setLoleN_UseBlast_Active(current => null);
    };

  const handleLoleY_UseGrenade_Click = event => {
    // 👇️ toggle shown state
    setLoleY_UseGrenade_IsShown(current => !LoleY_UseGrenade_IsShown);
    setLoleY_UseGrenade_Active(!LoleY_UseGrenade_Active);

    setLoleY_UseBlast_IsShown(current => null);
    setLoleN_UseGrenade_IsShown(current => null);
    setLoleN_UseBlast_IsShown(current => null);
    setLoleY_UseBlast_Active(current => null);
    setLoleN_UseGrenade_Active(current => null);
    setLoleN_UseBlast_Active(current => null);
  };

  const handleLoleN_UseGrenade_Click = event => {
    // 👇️ toggle shown state
    setLoleN_UseGrenade_IsShown(current => !LoleN_UseGrenade_IsShown);
    setLoleN_UseGrenade_Active(!LoleN_UseGrenade_Active);

    setLoleY_UseGrenade_IsShown(current => null);
    setLoleY_UseBlast_IsShown(current => null);
    setLoleY_UseGrenade_Active(current => null);
    setLoleY_UseBlast_Active(current => null);
    setLoleN_UseBlast_IsShown(current => null);
    setLoleN_UseBlast_Active(current => null);
    };

    const handleLoleY_UseBlast_Click = event => {
      // 👇️ toggle shown state
      setLoleY_UseBlast_IsShown(current => !LoleY_UseBlast_IsShown);
      setLoleY_UseBlast_Active(!LoleY_UseBlast_Active);

      setLoleY_UseGrenade_IsShown(current => null);
      setLoleY_UseGrenade_Active(current => null);

      setLoleN_UseGrenade_IsShown(current => null);
      setLoleN_UseBlast_IsShown(current => null);
      setLoleN_UseGrenade_Active(current => null);
      setLoleN_UseBlast_Active(current => null);
  
    };
  
    const handleLoleN_UseBlast_Click = event => {
      // 👇️ toggle shown state
      setLoleN_UseBlast_IsShown(current => !LoleN_UseBlast_IsShown);
      setLoleN_UseBlast_Active(!LoleN_UseBlast_Active);

      setLoleY_UseGrenade_IsShown(current => null);
      setLoleY_UseBlast_IsShown(current => null);
      setLoleN_UseGrenade_IsShown(current => null);
      setLoleY_UseGrenade_Active(current => null);
      setLoleY_UseBlast_Active(current => null);
      setLoleN_UseGrenade_Active(current => null);

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



//Total WC Noanza + Gliva//

const calculateNoanzaGlivaWCResult = {}
const totalNoanzaGlivaWCResult = (0+0)

const calculateNoanzaKirerfWCResult = {}
const totalNoanzaKirerfWCResult = (0+0)


//format the WC #s//
//NOANZA//
        const number = totalNoanzaGlivaWCResult;
        const USformatter = new Intl.NumberFormat("en-US");
        const NoanzaGlivaWC = USformatter.format(number);

        const number1 = totalNoanzaKirerfWCResult;
        const NoanzaKirerfWC = USformatter.format(number1)
      




// END OF EQUATIONS SO FAR//

  return (
    <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh">
          <VStack spacing={8}>

          <Heading>Mastery Math: Potions</Heading>
            <Container><p>This page is for calculating a new mastery strategy on 4theWords: defeat small Aurilis creatures, make potions from their loot drops, 
              and use those potions to defeat large word count monsters. <br></br><br></br>
              You can use this page to estimate how many potions you can make from your current inventory or plan future mastery goals. <br></br><br></br>
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

            <HStack><text>Do you have the companion</text> 
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/6d/Lole.png/ '
        mr='0px'
      /><text><b>Lole</b>?</text>
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

{LoleYIsShown && <VStack>
        <text>What is the word count of the monster you're mastering?<br></br><br></br></text> 
    
        <Container><Wrap justify='center'>
        <WrapItem>
        <Button variant='outline' onClick={handleLoleY_UseGrenade_Click} style={{ backgroundColor: LoleY_UseGrenade_Active ? "#3f011c" : "transparent" }}>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/c/cc/Blast_Potion.png'
        mr='12px'
      />
      <span>2000 words or fewer</span></Button>
      </WrapItem>
      <WrapItem>
        <Button variant='outline' onClick= {handleLoleY_UseBlast_Click} style={{ backgroundColor: LoleY_UseBlast_Active ? "#3f011c" : "transparent" }}>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/0b/Fire_Grenade_Potion.png/'
        mr='12px'
      />      
      <span>over 2001 words</span></Button></WrapItem>
        </Wrap></Container></VStack>}

{LoleNIsShown && <VStack>
        <text>What is the word count of the monster you're mastering?<br></br><br></br></text> 
    
        <Container><Wrap justify='center'>
        <WrapItem>
        <Button variant='outline' onClick={handleLoleN_UseGrenade_Click} style={{ backgroundColor: LoleN_UseGrenade_Active ? "#3f011c" : "transparent" }}>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/c/cc/Blast_Potion.png'
        mr='12px'
      />
      <span>2000 words or fewer</span></Button>
      </WrapItem>
      <WrapItem>
        <Button variant='outline' onClick= {handleLoleN_UseBlast_Click} style={{ backgroundColor: LoleN_UseBlast_Active ? "#3f011c" : "transparent" }}>
        <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/0/0b/Fire_Grenade_Potion.png/'
        mr='12px'
      />      
      <span>over 2001 words</span></Button></WrapItem>
        </Wrap></Container></VStack>}
        
{LoleY_UseBlast_IsShown &&
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
            <Button w='100px' h='140px' pb={5}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/8a/Tesven.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Tesven<br></br>(2100 words)</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='140px' pb={5}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/9d/Velsoun.png'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Velsoun<br></br>(2430 words)</Text>
      </VStack>
            </Button>
            </WrapItem>

            <WrapItem>
            <Button w='100px' h='140px' pb={5}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/6d/Alpha_Tambo.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Alpha Tambo<br></br>(2500 words)</Text>
      </VStack>
            </Button>
            </WrapItem>

            <WrapItem>
            <Button w='100px' h='140px' pb={5}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a8/Azadi.png'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Azadi<br></br>(2500 words)</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='140px' pb={5}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/9/9f/Tareit.png'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Tareit<br></br>(2999 words)</Text>
      </VStack>
            </Button>
            </WrapItem>

            <WrapItem>
            <Button w='100px' h='140px' pb={5}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/b/b0/Babu.png'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Babu<br></br>(3000 words)</Text>
      </VStack>
            </Button>
            </WrapItem>

            
            <WrapItem>
            <Button w='100px' h='140px' pb={5}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/dd/Dust_Suwo.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Dust Suwo<br></br>(3000 words)</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='140px' pb={5}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/64/Suwo.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Suwo<br></br>(3000 words)</Text>
      </VStack>
            </Button>
            </WrapItem>

            <WrapItem>
            <Button w='100px' h='140px' pb={5}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/2f/Rakstal.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Rakstal<br></br>(3154 words)</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='140px' pb={5}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/4/41/Shaman_Luzia.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Shaman Luzia<br></br>(3600 words)</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='140px' pb={5}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/d6/Dark_Reflection.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Dark Reflection<br></br>(4444 words)</Text>
      </VStack>
            </Button>
            </WrapItem>

            <WrapItem>
            <Button w='100px' h='140px' pb={5}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/20/Reflection.png'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Reflection<br></br>(4444 words)</Text>
      </VStack>
            </Button>
            </WrapItem>

            <WrapItem>
            <Button w='100px' h='140px' pb={5}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/2e/Caravan.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Caravan<br></br>(5000 words)</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='140px' pb={5}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/87/Kultalva.png'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Kultalva<br></br>(5000 words)</Text>
      </VStack>
            </Button>
            </WrapItem>

            <WrapItem>
            <Button w='100px' h='140px' pb={5}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/7d/Miclan.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Miclan<br></br>(5000 words)</Text>
      </VStack>
            </Button>
            </WrapItem>

            <WrapItem>
            <Button w='100px' h='140px' pb={5}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/7/73/River_Goddess.png/'
        mr='5px'
      /> <Text fontSize='sm' align='center'>River Goddess<br></br>(5000 words)</Text>
      </VStack>
            </Button>
            </WrapItem>
            <WrapItem>
            <Button w='100px' h='140px' pb={5}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/8/8b/King_Mai.png'
        mr='5px'
      /> <Text fontSize='sm' align='center'>King Mai<br></br>(5000 words)</Text>
      </VStack>
            </Button>
            </WrapItem>

            <WrapItem>
            <Button w='100px' h='140px' pb={5}>
       <VStack> 
       <Image
        mt='12px'
        align='center' 
        boxSize='rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/6/6b/Dusted_Luzia.png'
        mr='5px'
      /> <Text fontSize='sm' align='center'>Dusted Luzia<br></br>(8160 words)</Text>
      </VStack>
            </Button>
            </WrapItem>

            <WrapItem>
            <Button w='100px' h='140px' pb={5}>
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

  </Accordion>}

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
  {LoleN_UseGrenade_IsShown && <text align='center'>{0}</text>}
  </StatNumber>
</Stat></Td></Tr>
</Tbody>
<Tfoot>
  {LoleY_UseGrenade_IsShown && <Text fontSize='sm' align='center'>yes lole, grenade potions</Text>}
  {LoleY_UseBlast_IsShown && <Text fontSize='sm' align='center'>yes lole, blast potions</Text>}
  {LoleN_UseGrenade_IsShown && <Text fontSize='sm' align='center'>no lole, grnenade potions</Text>}
  {LoleN_UseBlast_IsShown && <Text fontSize='sm' align='center'>no lole, blast potions</Text>}
  </Tfoot>
</Table>
</TableContainer>
<br></br>
<Box as="span" flex='1' textAlign='center' padding-top={3}>
        <Text><b>Monsters to Fight</b></Text>
        </Box>
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
        mr='5px'
      /> <Text fontSize='lg' align='center'>Aakulta</Text>
      {LoleY_UseBlast_IsShown && <text align='center'>0</text>}</VStack>
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
        mr='5px'
      /> <Text fontSize='lg' align='center'>Ardid</Text>
      {LoleY_UseBlast_IsShown && <text align='center'>{0}</text>}</VStack>
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
        mr='5px'
      /> <Text fontSize='lg' align='center'>Arluzi</Text>
      {LoleY_UseBlast_IsShown && <text align='center'>{0}</text>}
      </VStack>
  </Box>
        </Td>
      </Tr>    
    </Tbody>
  </Table>
</TableContainer>
</Container>
        
        
        </Container>
<br></br><br></br>

        </Grid>
      </Box>
  );
}

export default App;