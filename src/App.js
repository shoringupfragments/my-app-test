import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import { Routes, Route} from 'react-router-dom';
import QuickWCCalc from './QuickWCCalc';
import CityofLight from './CityofLight'
import Homepage from './Homepage';
import RemoveImages from './removeimages';
import darkTheme from './theme';


function App() {

  
  return (
    <ChakraProvider theme={darkTheme}>
      <Routes>
      <Route path="" element={ <Homepage/> } />
      <Route path="quickwccalc" element={ <QuickWCCalc/> } />
      <Route path="cityoflight" element={ <CityofLight/> } />
      <Route path="removeimages" element={ <RemoveImages/> } />
      </Routes>
    </ChakraProvider>
  );
}

export default App;