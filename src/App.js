import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { Routes, Route} from 'react-router-dom';
import QuickWCCalc from './QuickWCCalc';
import CityofLight from './CityofLight'
import DustedCastle from './DustedCastle'
import Nivali from './Nivali'

function App() {

  
  return (
    <ChakraProvider theme={theme}>
      <Routes>
      <Route path="quickwccalc" element={ <QuickWCCalc/> } />
      <Route path="cityoflight" element={ <CityofLight/> } />
      <Route path="dustedcastle" element={ <DustedCastle/> } />
      <Route path="nivali" element={ <Nivali/> } />
      </Routes>
    </ChakraProvider>
  );
}

export default App;