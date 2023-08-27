import { Box,Button } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Flex,
  Text,
  Heading,
  Image,
} from "@chakra-ui/react";
import electrician from "../assets/electrician.svg";
import mechanic from "../assets/mechanic.svg";
import plumber from "../assets/plumber.svg"

function Cards() {
  const services = [
    {
      title: "Electrician",
      description: "Professional electrician services for all your needs.",
      imgUrl: electrician
    },
    {
      title: "Plumber",
      description: "Get top-notch plumbing services at your doorstep.",
      imgUrl: plumber
    },
    {
      title: "Mechanic",
      description:"Expert mechanical services to keep your machines running smoothly.",
      imgUrl: mechanic
    }
  ];

  return (
    <Flex direction="column" alignItems="center" mt={20}> 
      <Box textAlign="center">
        <Heading color="#6674CC" size="2xl" mb={2}>Our Services</Heading>
        <Box width="140px" height="4px" bgColor="#6674CC" margin="0 auto" marginBottom={6}></Box>  
      </Box>

      <Flex justify="flex-end" width="full"></Flex>
      <Box maxW={["full", "3xl", "5xl", "6xl"]} width="full">
        <SimpleGrid 
          spacing={10} 
          templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} 
          m={4}
        >
          {services.map((service) => (
            <Card 
              transition="background-color 0.3s"
              _hover={{ bgColor: "#8c9bfa", color: "#fff" }}
              key={service.title}
              border="1px solid" 
              borderColor="gray.300" 
              borderRadius="md"
              overflow="hidden"
              boxShadow="sm"
              p={4}
            >
              <CardHeader>
                <Heading size='md'>{service.title}</Heading>
              </CardHeader>
              <Image 
                objectFit="contain"
                height="150px"
                width="100%"
                src={service.imgUrl} 
                alt={service.title} 
              />
              <CardBody>
                <Text fontSize="xl"> 
                  {service.description}
                </Text>
              </CardBody>
              <CardFooter>
                <Button>View here</Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  );
}

export default Cards;