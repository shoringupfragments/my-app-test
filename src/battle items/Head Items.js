import React from 'react';
import { useState,useEffect } from "react";
import {
  ChakraProvider,
  HStack,
  Image,
  Text,
  VStack,

} from '@chakra-ui/react';

export function LeafHelmet() {
  return (
    <HStack>
    <Image 
    mt='12px'
    align='center' 
    boxSize='4rem'      
    src='https://static.wikia.nocookie.net/4thewords/images/f/f3/Leafhelmet_md.png/'
    />
<VStack>  
    <Text fontSize='md' align='center'>Leaf Helmet</Text>
    <Text fontSize='sm' align='center'>+0 Atk / +3 Def / +2 Luck </Text>
    </VStack>
    </HStack>
  );
}


export function ProtectedLeafHelmet() {
  return (
    <HStack>
    <Image 
    mt='12px'
    align='center' 
    boxSize='4rem'      
    src='https://static.wikia.nocookie.net/4thewords/images/7/78/Protectedleafhelmet_md.png'
    />
<VStack>  
    <Text fontSize='md' align='center'>Protected Leaf Helmet</Text>
    <Text fontSize='sm' align='center'>+0 Atk / +5 Def / +2 Luck </Text>
    </VStack>
    </HStack>
  );
}
