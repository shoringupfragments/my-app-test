import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  ChakraProvider,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Button,
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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Container,
  Spacer,
  Divider,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Image src='https://i.imgur.com/QUBFKJf.png' />
            <Heading>4theWords Planner</Heading>
            <Container>Fill out the tables below with the items you need and the items you already have.
            This page will auto-calculate the most efficient monsters and an approximate word count.</Container>
            <Breadcrumb>
            <BreadcrumbItem>
    <BreadcrumbLink href='#'
        color='teal.500'   
        _hover={{  color: "white",  }}>Halloween 2023 Event</BreadcrumbLink>
  </BreadcrumbItem>

  
  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>City of Light</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'
        color='teal.500'   
        _hover={{  color: "white",  }}>Dusted Castle</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#' 
        color='teal.500'   
        _hover={{  color: "white",  }}>
            Nivali</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
            <Heading>Quick Convert Word Count</Heading>
            <Container><p>Type your attack stat and your target word count below to quickly calculate the attack-adjusted word count.</p></Container>
            <VStack><text>Attack Stat:</text>
            <NumberInput defaultValue={0} min={0} max={9999}>
  <NumberInputField id='atk'/></NumberInput></VStack>
  <VStack><text>Word Count:</text>
            <NumberInput defaultValue={0} min={0} max={Infinity}>
  <NumberInputField id='wc'/></NumberInput></VStack>


<Container><Divider></Divider></Container>

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
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput></Td>
<Td><NumberInput defaultValue={0} min={0} max={9999}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
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
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput></Td>
<Td><NumberInput id='fghave' defaultValue={0} min={0} max={9999}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
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
        <Td><Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    select source
  </MenuButton>
  <MenuList>
  <MenuItem minH='40px'>
      <span>Crafting (Least Efficient)</span>
    </MenuItem>
  <MenuItem minH='40px'>
      <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/5/59/Aakulta.png'
        alt='Aakulta'
        mr='12px'
      />
      <span>Aakulta</span>
    </MenuItem>
    <MenuItem minH='48px'>
      <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/d/df/Noanza.png'
        alt='Noanza'
        mr='12px'
      />
      <span>Noanza (unlocks from Part 9 of the Corridor Side Quests)</span>
    </MenuItem>
  </MenuList>
</Menu> </Td>
      </Tr>
      <Tr>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput></Td>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
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
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput></Td>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
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
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput></Td>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
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
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput></Td>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
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
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput></Td>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
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
        <Td><Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    select source
  </MenuButton>
  <MenuList>
  <MenuItem minH='40px'>
      <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/1/15/Gliva.png'
        alt='Gliva'
        mr='12px'
      />
      <span>Gliva</span>
    </MenuItem>
    <MenuItem minH='48px'>
      <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/a/a6/Kirerf.png'
        alt='Kirerf'
        mr='12px'
      />
      <span>Kirerf (most efficient, unlocks from the Dusted Castle)</span>
    </MenuItem>
  </MenuList>
</Menu> </Td>
      </Tr>
      <Tr>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput></Td>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
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
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput></Td>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
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
        alt='Coin'
        mr='5px'
      /> <text>Xaey</text>
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
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput></Td>
<Td><NumberInput defaultValue={0} min={0} max={9999}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
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
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput></Td>
<Td><NumberInput defaultValue={0} min={0} max={9999}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
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
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput></Td>

        <Td><NumberInput defaultValue={0} min={0} max={9999}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
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
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput></Td>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
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
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput></Td>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
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
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput></Td>
        <Td><NumberInput defaultValue={0} min={0} max={9999}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
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
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput></Td>
<Td><NumberInput defaultValue={0} min={0} max={9999}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
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
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput></Td>
<Td><NumberInput defaultValue={0} min={0} max={9999}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
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
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput></Td>
<Td><NumberInput defaultValue={0} min={0} max={9999}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
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
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput></Td>
<Td><NumberInput defaultValue={0} min={0} max={9999}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
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
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput></Td>
<Td><NumberInput defaultValue={0} min={0} max={9999}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
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
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput></Td>
<Td><NumberInput defaultValue={0} min={0} max={9999}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
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
<Heading>Monsters to Fight</Heading>
<HStack><text>Calculate with your attack stat:</text>
<NumberInput defaultValue={0} min={0} max={999}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput></HStack>
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
      <Td>###</Td>
        <Td>1500</Td>
        <Td id='1'>1</Td>
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
      <Td>###</Td>
        <Td>50</Td>
        <Td id='2'>2</Td>
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
      <Td>###</Td>
        <Td>150</Td>
        <Td id='3'>3</Td>
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
      <Td>###</Td>
        <Td>444</Td>
        <Td id='4'>4</Td>
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
      <Td>###</Td>
        <Td>300</Td>
        <Td id='5'>5</Td>
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
      <Td>###</Td>
        <Td>66</Td>
        <Td id='6'>6</Td>
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
      <Td>###</Td>
        <Td>1500</Td>
        <Td id='7'>7</Td>
      </Tr>
      <Tr>
      <Td><HStack>
        <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://static.wikia.nocookie.net/4thewords/images/2/22/Xaey.png'
        alt='Ascre'
        mr='5px'
      /> <text>Xaey</text>
        </HStack>
</Td>
      <Td>###</Td>
        <Td>120</Td>
        <Td id='8'>8</Td>
      </Tr>
      <Tr>
      <Td></Td>
      <Td></Td>
        <Td>Total Word Count:</Td>
        <Td>#</Td>
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
        <Th>Item</Th>
        <Th>Quantity</Th>
        <Th>Cost in Coins</Th>
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
        <Td>#</Td>
        <Td>#</Td>
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
        <Td>#</Td>
        <Td>#</Td>
      </Tr>
      <Tr>
      <Td></Td>
        <Td>Total Cost:</Td>
        <Td>#</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
<Spacer></Spacer>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;