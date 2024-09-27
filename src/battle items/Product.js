import React from "react";
import {
  ChakraProvider,
  Button,
  Image,
  Text,
  HStack,
  VStack,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import { useState } from "react";


function Product(props) {

const [HeadAtk, setHeadAtk] = useState(0); // Or any other non-zero value
const [Head, setHead] = useState(false)

const handleHeadClick = event => {
  setHeadAtk (current => props.product.attack);
  setHead (current => !Head)
}

  return (
      <WrapItem>
      <Button w='300px' h='100px' onClick={handleHeadClick} pb={2} mb={15} style={{ backgroundColor: Head ? "#211742" : "#2D3748", borderColor: Head ? '#31294f' : 'transparent', borderWidth: '2px'}}>
      <HStack>
      <Image 
      mt='12px'
      align='center' 
      boxSize='4rem'      
      src={props.product.image}/>
<VStack>  
      <Text fontSize='md' align='center'>{props.product.name}</Text>
      <Text fontSize='sm' align='center'>+{props.product.attack} Atk / +{props.product.defense} Def / +{props.product.luck} Luck </Text>
      </VStack>
      </HStack>
      </Button>
      <Text>{HeadAtk}</Text>
      </WrapItem>
  );
}

export default Product;

