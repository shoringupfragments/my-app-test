import { ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './WignowHeader'
import QuickWCCalc from './QuickWCCalc'
import CityofLight from './CityofLight'
import DustedCastle from './DustedCastle'
import Nivali from './Nivali'
import Sidebar from './Sidebar'
import theme from './theme';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Header />


    <App />
  </BrowserRouter>
);


