import React from 'react';
import { useState,useEffect } from "react";
import {
  ChakraProvider,
  Box,
  Heading,
  VStack,
  Grid,
  theme,
  NumberInput,
  NumberInputField,
  Container,
  Spacer
} from '@chakra-ui/react';


function App() {


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

const number = wcResult;
const USformatter = new Intl.NumberFormat("en-US");
const fixWcResult = USformatter.format(number);

  return (
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh">
          <VStack spacing={8}>
          <Heading pt={3}>Word Count Calculator</Heading>
            <Container><p>Type your attack stat and your target word count below to quickly calculate the attack-adjusted word count.</p></Container>

<VStack>
<label>Attack Stat:</label>
<NumberInput defaultValue={0} min={0} max={9999}>
<NumberInputField id='atk' onInput={(e) => handleAttackStatChange(e.target.value)} />
</NumberInput>
</VStack>
<VStack>
<label>Word Count:</label>
<NumberInput defaultValue={0} min={0} max={Infinity}>
<NumberInputField id='wc' onInput={(e) => handleWordCountChange(e.target.value)} />
</NumberInput>
<Spacer></Spacer>
{wcResult !== null && (
              <div>
                <Container><b>Total:</b> {fixWcResult} words</Container>
              </div>
            )}  

</VStack>

          </VStack>
          
        </Grid>
      </Box>
  );
}

export default App;