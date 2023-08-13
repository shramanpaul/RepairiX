import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import { Box, Button } from '@chakra-ui/react';


import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />} />
    
    </Routes>
  </BrowserRouter>
  )
}

export default App;

