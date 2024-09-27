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


function ProductAttack(props) {

const [W1Atk, setW1Atk] = useState(0); // Or any other non-zero value

const handleWeapon1Click = event => {
  setW1Atk (current => props.product.attack)
}

  return (
     <div>{props.product.attack} </div>
  );
}

export default ProductAttack;

