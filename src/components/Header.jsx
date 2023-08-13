import { useState } from 'react'
import { Box, Button } from '@chakra-ui/react';
function Header() {
    const [count, setCount] = useState(0)
  
    return (
      <>
        
        <Box p={4}>
        <Button colorScheme="blue">Chakra Button</Button>
      </Box>
      </>
    )
  }
  export default Header;