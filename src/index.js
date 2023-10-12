import { ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header'
import QuickWCCalc from './QuickWCCalc'
import CityofLight from './CityofLight'
import DustedCastle from './DustedCastle'
import Nivali from './Nivali'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <ColorModeScript />
    <Header />
    <Routes>
        <Route exact path="/" component={App} />
        <Route exact path="/quickwccalculator" component={QuickWCCalc} />
        <Route exact path="/cityoflight" component={CityofLight} />
        <Route exact path="/dustedcastle" component={DustedCastle} />
        <Route exact path="/nivali" component={Nivali} />

        </Routes>
    <App />
  </BrowserRouter>
);


