import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import { Routes, Route} from 'react-router-dom';
import QuickWCCalc from './QuickWCCalc';
import CityofLight from './CityofLight';
import AprilAurilis from './AprilAurilis';
import Homepage from './Homepage';
import RemoveImages from './removeimages';
import darkTheme from './theme';
import FanEdits from './fanedits';
import CursedMasteryChallenge from './CursedMasteryChallenge';
import AurilisMain from './AurilisMain';
import AurilisPotionCalculator from './AurilisPotionCalculator';
import EnduranceCountdown from './EnduranceCountdown';


function App() {

  
  return (
    <ChakraProvider theme={darkTheme}>
      <Routes>
      <Route path="" element={ <Homepage/> } />
      <Route path="quickwccalc" element={ <QuickWCCalc/> } />
      <Route path="cityoflight" element={ <CityofLight/> } />
      <Route path="aurilis-thesis" element={ <AprilAurilis/> } />
      <Route path="removeimages" element={ <RemoveImages/> } />
      <Route path="fanedits" element={ <FanEdits/> } />
      <Route path="mastery-potions" element={ <CursedMasteryChallenge /> } />
      <Route path="aurilis" element={ <AurilisMain /> } />
      <Route path="potion-calculator" element={ <AurilisPotionCalculator /> } />
      <Route path="endurance" element={ <EnduranceCountdown /> } />
      
      </Routes>
    </ChakraProvider>
  );
}

export default App;