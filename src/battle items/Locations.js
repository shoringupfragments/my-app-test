import React from 'react';
import { useState,useEffect } from "react";
import {
  ChakraProvider,
  Image,
  Text,
  VStack,

} from '@chakra-ui/react';

export function Aurilis() {
  return (
 <VStack> 
 <Image
  mt='12px'
  align='center' 
  boxSize='3rem'
  borderRadius='full'
  src='https://static.wikia.nocookie.net/4thewords/images/a/a9/AssemblyHallIcon.png/'
/> <Text fontSize='sm' align='center'>Aurilis Magic<br/> Academy</Text>
</VStack>
  );
}

export function ElderLibrary() {
  return (
    <VStack> 
    <Image
     mt='12px'
     align='center' 
     boxSize='3rem'
     borderRadius='full'
     src='https://static.wikia.nocookie.net/4thewords/images/e/e2/Icon_elder-library.png/'
   /> <Text fontSize='sm' align='center'>Elder Library</Text>
   </VStack>
  );
}

export function DragonLair() {
  return (
    <VStack> 
    <Image
     mt='12px'
     align='center' 
     boxSize='3rem'
     borderRadius='full'
     src='https://static.wikia.nocookie.net/4thewords/images/d/dd/Dragon_Lair_Icon.png/'
   /> <Text fontSize='sm' align='center'>Dragon Lair</Text>
   </VStack>
  );
}

export function Raina() {
  return (
    <VStack> 
    <Image
     mt='12px'
     align='center' 
     boxSize='3rem'
     borderRadius='full'
     src='https://static.wikia.nocookie.net/4thewords/images/2/22/Raina-surface-camp.png/'
   /> <Text fontSize='sm' align='center'>Raina<br/>Surface Camp</Text>
   </VStack>
  );
}

export function Clouds() {
  return (
    <VStack> 
    <Image
     mt='12px'
     align='center' 
     boxSize='3rem'
     borderRadius='full'
     src='https://static.wikia.nocookie.net/4thewords/images/4/44/Icon_bg_clouds.png/'
   /> <Text fontSize='sm' align='center'>Clouds</Text>
   </VStack>
  );
}

export function Dawn() {
  return (
    <VStack> 
    <Image
     mt='12px'
     align='center' 
     boxSize='3rem'
     borderRadius='full'
     src='https://static.wikia.nocookie.net/4thewords/images/5/5d/Icon_bg_dawn.png/'
   /> <Text fontSize='sm' align='center'>Dawn</Text>
   </VStack>
  );
}

export function Tempest() {
  return (
    <VStack> 
    <Image
     mt='12px'
     align='center' 
     boxSize='3rem'
     borderRadius='full'
     src='https://static.wikia.nocookie.net/4thewords/images/4/4c/Icon_bg_tempest.png/'
   /> <Text fontSize='sm' align='center'>Tempest</Text>
   </VStack>
  );
}

export function Garden() {
  return (
    <VStack> 
    <Image
     mt='12px'
     align='center' 
     boxSize='3rem'
     borderRadius='full'
     src='https://static.wikia.nocookie.net/4thewords/images/7/7c/HealedGardenIcon.png'
   /> <Text fontSize='sm' align='center'>Caretaker's<br/>Garden</Text>
   </VStack>
  );
}

export function WoodSword() {
  return (
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
  );
}

export function WoodSpear() {
  return (
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
  );
}

export function SteelSword() {
  return (
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
  );
}

export function SteelMace() {
  return (
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
  );
}

export function SteelDagger() {
  return (
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
  );
}

export function SpellfireSword() {
  return (
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
  );
}

export function RainaSword() {
  return (
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
  );
}

export function PGTwinSwords() {
  return (
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/8/81/Purple_Gate_Twin_Swords.png/'
/> 
<Text fontSize='md' align='center'><b>Purple Gate<br/>Twin Swords</b></Text>
<Text fontSize='sm' align='center'>+18 Atk<br/>+0 Def<br/>+2 Luck </Text>
</VStack>
  );
}

export function OozeSword() {
  return (
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
  );
}

export function NiftrasSword() {
  return (
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
  );
}

export function MercurialSword() {
  return (
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
  );
}

export function LeafsungWoodenSword() {
  return (
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
  );
}

export function KingMaisSword() {
  return (
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
  );
}

export function GlassScimitar() {
  return (
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
  );
}

export function FusionSword() {
  return (
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
  );
}

export function FlowerSlingshot() {
  return (
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
  );
}

export function DragonsTailSword() {
  return (
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
  );
}

export function DragonsClawHook() {
  return (
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
  );
}

export function DawnSword() {
  return (
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
  );
}

export function DFSword2017() {
  return (
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
  );
}

export function DFSword() {
  return (
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
  );
}

export function CaveSpear() {
  return (
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/b/b7/Cave_Spear.png/'
/> 
<Text fontSize='md' align='center'><b>Cave Spear</b></Text>
<Text fontSize='sm' align='center'>+11 Atk<br/>+11 Def<br/>+0 Luck </Text>
</VStack>
  );
}

export function BalanceHarpoon() {
  return (
<VStack justify='center'>  
<Image
mt='12px'
align='center' 
boxSize='4rem'
src='https://static.wikia.nocookie.net/4thewords/images/c/cf/Balance_Harpoon.png/'
/> 
<Text fontSize='md' align='center'><b>Balance<br/>Harpoon</b></Text>
<Text fontSize='sm' align='center'>+15 Atk<br/>+3 Def<br/>+0 Luck </Text>
</VStack>
  );
}


export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>

    </section>
  );
}
