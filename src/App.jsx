import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Box, Button } from '@chakra-ui/react';


import Header from './pages/Header';
import Landingpage from './pages/Landingpage';

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landingpage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;

