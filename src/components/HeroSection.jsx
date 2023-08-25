import {
  Image,
  Heading,
  Flex,
  Box,
  Wrap,
  WrapItem,
  Button,
  Link,
} from "@chakra-ui/react";
import main_1_img from "../assets/designer_1.svg";
import main_2_img from "../assets/designer_2.svg";
import main_3_img from "../assets/designer_3.svg";
import main_4_img from "../assets/designer_4.svg";

function HeroSection() {
  return (
    <>

      {/* ye Main-1 Hai*/}
      <Flex className="main_1" pos="relative" justify="flex-end">
        <Box as="span" className="position" pos="absolute" top="45%" left="5%">
          <Heading size={["sm","md","lg","xl","2xl","3xl"]}>
            On-demand{" "}
            <Heading as="span" size={["sm","md","lg","xl","2xl","3xl"]} color="#6674CC">
              Hostel Services
            </Heading>
            <br />
            are just 24 hours away!
          </Heading>
          <Heading maxW={["xs","xs","md","md","2xl"]} size={["xs","sm","md"]} fontWeight="normal" mt="5">
            Get quick and reliable solutions when you need them most with our
            awesome services
          </Heading>

          <Wrap spacingX="10" mt="10">
            <WrapItem>
              <Button fontSize={["12px","14px","16px","18px"]} bgColor="#6674CC" color="white" variant="solid" w="fit-content">
                Become Premium Member
              </Button>
            </WrapItem>

            <WrapItem>
              <Button
                variant="outline"
                w="fit-content"
                px={10}
                style={{ border: "2px solid #6674CC" }}
              >
                Learn more
              </Button>
            </WrapItem>
          </Wrap>
        </Box>
        <Image src={main_1_img} w={["xs","sm","lg","3xl"]} />
      </Flex>


      {/* ye Main-2 hai */}
      <Flex
        className="main_2"
        justify="space-around"
        alignItems="center"
        mt={20}
      >
        <Box ml={["10px","10px","10px","0px"]}>
          <Box as="span" p={2} borderRadius="lg" bg="#E5D9FF">
            <b>Have patience no more</b>
          </Box>
          <Heading size={["sm","md","md","xl","2xl"]}  mt={5}>
            On-demand{" "}
            <Heading as="span" size={["sm","md","md","xl","2xl"]} fontWeight="normal">
              Services designed <br /> for you
            </Heading>
          </Heading>
          <Heading maxW="2xl" size={["xs","sm","md"]} fontWeight="normal" mt="5" mb="5">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes
          </Heading>

          <Link href="#">
            <Heading size={["xs","xs","sm"]} color="#8D04F8">
              See How it Works
            </Heading>
          </Link>
        </Box>
        <Image src={main_2_img} w={["250px","250px","xs"]} />
      </Flex>


      {/* ye Main-3 hai */}
      <Flex
        className="main_3"
        justify="space-around"
        alignItems="center"
        
        mt={40}
      >
        <Image src={main_3_img} w={["250px","250px","xs"]} />
        <Box>
          <Box as="span" p="2" borderRadius="lg" bg="#FAEFD1">
            <b>24H Turnaround Time</b>
          </Box>
          <Heading size={["sm","md","md","xl","2xl"]}  mt={5}>
            Schedule when it works{" "}
            <Heading as="span" size={["sm","md","md","xl","2xl"]} fontWeight="normal">
              for you - <br /> as early as possible
            </Heading>
          </Heading>
          <Heading maxW={["lg","md","md","xl"]} size={["xs","sm","md"]} fontWeight="normal" mt="5" mb="5">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes
          </Heading>

          <Link href="#">
            <Heading size={["xs","xs","sm"]} color="#8D04F8">
              See How it Works
            </Heading>
          </Link>
        </Box>
      </Flex>


      {/* ye Main-4 hai */}
      <Flex
        className="main_4"
        justify="space-around"
        alignItems="center"
        mt={40}
      >
        <Box ml={["10px","10px","10px","0px"]}>
          <Box as="span" p="2" borderRadius="lg" bg="#D8F3EF">
            <b>24/7 Customer Support</b>
          </Box>
          <Heading size={["sm","md","md","xl","2xl"]} mt={5}>
            Caring Beyond Limits :{" "}
            <Heading as="span" size={["sm","md","md","xl","2xl"]}  fontWeight="normal">
              Your
              <br />
              Satisfaction, Our Priority
            </Heading>
          </Heading>
          <Heading maxW="2xl"  size={["xs","sm","md"]} fontWeight="normal" mt="5" mb="5">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes
          </Heading>

          <Link href="#">
            <Heading size={["xs","xs","sm"]} color="#8D04F8">
              Contact Us Here
            </Heading>
          </Link>
        </Box>
        <Image src={main_4_img} w={["250px","250px","xs"]} />
      </Flex>
    </>
  );
}

export default HeroSection;
