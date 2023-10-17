import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import { ChakraTheme } from '@chakra-ui/theme';
import { Routes, Route} from 'react-router-dom';
import QuickWCCalc from './QuickWCCalc';
import CityofLight from './CityofLight'
import Homepage from './Homepage'
import darkTheme from './theme';


function App() {

  
  return (
    <ChakraProvider theme={darkTheme}>
      <Routes>
      <Route path="" element={ <Homepage/> } />
      <Route path="quickwccalc" element={ <QuickWCCalc/> } />
      <Route path="cityoflight" element={ <CityofLight/> } />
      </Routes>
    </ChakraProvider>
  );
}

export default App;