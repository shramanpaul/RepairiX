import { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
function Header() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Box p={4}>
        <Button colorScheme="blue">Chakra Button</Button>
      </Box>
      <Box as="button" bg="tomato" w="20%" p={4} color="white">
        This is the Box
      </Box>
      
    </>
  );
}
export default Header;
