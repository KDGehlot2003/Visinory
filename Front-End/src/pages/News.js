import React from "react";
// import { Helmet } from "react-helmet";
import {
  Button,
  Link,
  Heading,
  Text,
  Image,
  Flex,
  AbsoluteCenter,
  Box,
} from "@chakra-ui/react";

export default function NewsgridPage() {
  return (
    <>
      {/* <Helmet>
        <title>news section</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet> */}
          <div className="newshero" >
            <img className="imge-new" src='/images/New.png' alt="farmer"/>
            <div className="news-text">
                <p>Home / News Grid</p>
                <h1>News Grid</h1>
            </div>
          </div>
        
            <Box h="514px" bg="white.A700" boxShadow="xs" w="100%" position="relative" borderRadius="10px">
              <AbsoluteCenter
                w="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                h="100%"
                m="auto"
              >
                <Image src="images/img_link_bringing.png" w={{ md: "100%", base: "100%" }} h="auto" />
                <Flex
                  gap="7px"
                  borderColor="black.900_0c"
                  borderWidth="1px"
                  borderStyle="solid"
                  bg="white.A700"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                  p={{ md: "35px", base: "20px" }}
                >
                  <Flex gap="14px" w={{ md: "80%", base: "100%" }}>
                    <Flex w="50%" justifyContent="center">
                      <Image src="images/img_icon_orange_300.svg" h="20px" />
                      <Text ml="6px" textAlign="center">
                        by
                      </Text>
                      <Link href="#">
                        <Text textAlign="center" ml="2px">
                          Kevin Martin
                        </Text>
                      </Link>
                    </Flex>
                    <Flex gap="4px" w="39%">
                      <Image src="images/img_icon_orange_300_20x14.svg" h="20px" mt="1px" />
                      <Link href="#">
                        <Text textAlign="center">1 Comment</Text>
                      </Link>
                    </Flex>
                  </Flex>
                  <Link href="#" w="82%">
                    <Heading size="xl" textAlign="center" mb="5px">
                      <>
                        Bringing Food
                        <br />
                        Production Back To
                        <br />
                        Cities
                      </>
                    </Heading>
                  </Link>
                </Flex>
              </AbsoluteCenter>
              <Button
                color="white.A700"
                fontSize="14px"
                fontWeight={700}
                bg="green.500"
                h="40px"
                minW="134px"
                position="absolute"
                bottom="38%"
                right="0px"
                left="0px"
                px={{ base: "20px", sm: "24px" }}
                m="auto"
                borderRadius="10px"
              >
                05 July 2022
              </Button>
            </Box>
            <Box h="514px" bg="white.A700" boxShadow="xs" w="100%" position="relative" borderRadius="10px">
              <AbsoluteCenter
                w="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                h="100%"
                m="auto"
              >
                <Image src="images/img_link_the_future.png" w={{ md: "100%", base: "100%" }} h="auto" />
                <Flex
                  gap="7px"
                  borderColor="black.900_0c"
                  borderWidth="1px"
                  borderStyle="solid"
                  bg="white.A700"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                  p={{ md: "35px", base: "20px" }}
                >
                  <Flex gap="14px" w={{ md: "84%", base: "100%" }}>
                    <Flex w="48%" justifyContent="center">
                      <Image src="images/img_icon_orange_300.svg" h="20px" />
                      <Text ml="6px" textAlign="center">
                        by
                      </Text>
                      <Link href="#">
                        <Text textAlign="center" ml="2px">
                          Kevin Martin
                        </Text>
                      </Link>
                    </Flex>
                    <Flex gap="4px" w="42%">
                      <Image src="images/img_icon_orange_300_20x14.svg" h="20px" mt="1px" />
                      <Link href="#">
                        <Text textAlign="center">0 Comments</Text>
                      </Link>
                    </Flex>
                  </Flex>
                  <Link href="#" w="83%">
                    <Heading size="xl" as="h3" textAlign="center" mb="5px">
                      <>
                        The Future of
                        <br />
                        Farming, Smart
                        <br />
                        Irrigation Solutions
                      </>
                    </Heading>
                  </Link>
                </Flex>
              </AbsoluteCenter>
              <Button
                color="white.A700"
                fontSize="14px"
                fontWeight={700}
                bg="green.500"
                h="40px"
                minW="134px"
                position="absolute"
                bottom="38%"
                right="0px"
                left="0px"
                px={{ base: "20px", sm: "24px" }}
                m="auto"
                borderRadius="10px"
              >
                05 July 2022
              </Button>
            </Box>
            <Box h="514px" bg="white.A700" boxShadow="xs" w="100%" position="relative" borderRadius="10px">
              <AbsoluteCenter
                w="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                h="100%"
                m="auto"
              >
                <Image src="images/img_link_agronomy.png" w={{ md: "100%", base: "100%" }} h="auto" />
                <Flex
                  gap="7px"
                  borderColor="black.900_0c"
                  borderWidth="1px"
                  borderStyle="solid"
                  bg="white.A700"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                  p={{ md: "35px", base: "20px" }}
                >
                  <Flex gap="14px" w={{ md: "84%", base: "100%" }}>
                    <Flex w="48%" justifyContent="center">
                      <Image src="images/img_icon_orange_300.svg" h="20px" />
                      <Text ml="6px" textAlign="center">
                        by
                      </Text>
                      <Link href="#">
                        <Text textAlign="center" ml="2px">
                          Kevin Martin
                        </Text>
                      </Link>
                    </Flex>
                    <Flex gap="4px" w="42%">
                      <Image src="images/img_icon_orange_300_20x14.svg" h="20px" mt="1px" />
                      <Link href="#">
                        <Text textAlign="center">0 Comments</Text>
                      </Link>
                    </Flex>
                  </Flex>
                  <Link href="#" w="71%">
                    <Heading size="xl" as="h4" textAlign="center" mb="5px">
                      <>
                        Agronomy and
                        <br />
                        relation to Other
                        <br />
                        Sciences
                      </>
                    </Heading>
                  </Link>
                </Flex>
              </AbsoluteCenter>
              <Button
                color="white.A700"
                fontSize="14px"
                fontWeight={700}
                bg="green.500"
                h="40px"
                minW="134px"
                position="absolute"
                bottom="38%"
                right="0px"
                left="0px"
                px={{ base: "20px", sm: "24px" }}
                m="auto"
                borderRadius="10px"
              >
                05 July 2022
              </Button>
            </Box>
            <Box h="514px" bg="white.A700" boxShadow="xs" w="100%" position="relative" borderRadius="10px">
              <AbsoluteCenter
                w="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                h="100%"
                m="auto"
              >
                <Image src="images/img_link_we_grow_products.png" w={{ md: "100%", base: "100%" }} h="auto" />
                <Flex
                  gap="7px"
                  borderColor="black.900_0c"
                  borderWidth="1px"
                  borderStyle="solid"
                  bg="white.A700"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                  p={{ md: "35px", base: "20px" }}
                >
                  <Flex gap="14px" w={{ md: "84%", base: "100%" }}>
                    <Flex w="48%" justifyContent="center">
                      <Image src="images/img_icon_orange_300.svg" h="20px" />
                      <Text ml="6px" textAlign="center">
                        by
                      </Text>
                      <Link href="#">
                        <Text textAlign="center" ml="2px">
                          Kevin Martin
                        </Text>
                      </Link>
                    </Flex>
                    <Flex gap="4px" w="42%">
                      <Image src="images/img_icon_orange_300_20x14.svg" h="20px" mt="1px" />
                      <Link href="#">
                        <Text textAlign="center">0 Comments</Text>
                      </Link>
                    </Flex>
                  </Flex>
                  <Link href="#" w="77%">
                    <Heading size="xl" as="h5" textAlign="center" mb="5px">
                      <>
                        We grow products
                        <br />
                        with the organic
                        <br />
                        farming
                      </>
                    </Heading>
                  </Link>
                </Flex>
              </AbsoluteCenter>
              <Button
                color="white.A700"
                fontSize="14px"
                fontWeight={700}
                bg="green.500"
                h="40px"
                minW="134px"
                position="absolute"
                bottom="38%"
                right="0px"
                left="0px"
                px={{ base: "20px", sm: "24px" }}
                m="auto"
                borderRadius="10px"
              >
                05 July 2022
              </Button>
            </Box>
            <Box h="514px" bg="white.A700" boxShadow="xs" w="100%" position="relative" borderRadius="10px">
              <AbsoluteCenter
                w="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                h="100%"
                m="auto"
              >
                <Image src="images/img_link_a_quick_solution.png" w={{ md: "100%", base: "100%" }} h="auto" />
                <Flex
                  gap="7px"
                  borderColor="black.900_0c"
                  borderWidth="1px"
                  borderStyle="solid"
                  bg="white.A700"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                  p={{ md: "35px", base: "20px" }}
                >
                  <Flex gap="14px" w={{ md: "84%", base: "100%" }}>
                    <Flex w="48%" justifyContent="center">
                      <Image src="images/img_icon_orange_300.svg" h="20px" />
                      <Text ml="6px" textAlign="center">
                        by
                      </Text>
                      <Link href="#">
                        <Text textAlign="center" ml="2px">
                          Kevin Martin
                        </Text>
                      </Link>
                    </Flex>
                    <Flex gap="4px" w="42%">
                      <Image src="images/img_icon_orange_300_20x14.svg" h="20px" mt="1px" />
                      <Link href="#">
                        <Text textAlign="center">0 Comments</Text>
                      </Link>
                    </Flex>
                  </Flex>
                  <Link href="#" w="86%">
                    <Heading size="xl" as="h6" textAlign="center" mb="5px">
                      <>
                        A Quick Solution to
                        <br />
                        Low Milk Production
                        <br />
                        in Zimbabwe
                      </>
                    </Heading>
                  </Link>
                </Flex>
              </AbsoluteCenter>
              <Button
                color="white.A700"
                fontSize="14px"
                fontWeight={700}
                bg="green.500"
                h="40px"
                minW="134px"
                position="absolute"
                bottom="38%"
                right="0px"
                left="0px"
                px={{ base: "20px", sm: "24px" }}
                m="auto"
                borderRadius="10px"
              >
                05 July 2022
              </Button>
            </Box>
            <Box h="514px" bg="white.A700" boxShadow="xs" w="100%" position="relative" borderRadius="10px">
              <AbsoluteCenter
                w="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                h="100%"
                m="auto"
              >
                <Image src="images/img_link_winter_wheat.png" w={{ md: "100%", base: "100%" }} h="auto" />
                <Flex
                  gap="7px"
                  borderColor="black.900_0c"
                  borderWidth="1px"
                  borderStyle="solid"
                  bg="white.A700"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                  p={{ md: "35px", base: "20px" }}
                >
                  <Flex gap="14px" w={{ md: "84%", base: "100%" }}>
                    <Flex w="48%" justifyContent="center">
                      <Image src="images/img_icon_orange_300.svg" h="20px" />
                      <Text ml="6px" textAlign="center">
                        by
                      </Text>
                      <Link href="#">
                        <Text textAlign="center" ml="2px">
                          Kevin Martin
                        </Text>
                      </Link>
                    </Flex>
                    <Flex gap="4px" w="42%">
                      <Image src="images/img_icon_orange_300_20x14.svg" h="20px" mt="1px" />
                      <Link href="#">
                        <Text textAlign="center">0 Comments</Text>
                      </Link>
                    </Flex>
                  </Flex>
                  <Link href="#" w="92%">
                    <Heading size="xl" as="h4" textAlign="center" mb="5px">
                      <>
                        Winter wheat harvest
                        <br />
                        organic gather nice
                        <br />
                        moment
                      </>
                    </Heading>
                  </Link>
                </Flex>
              </AbsoluteCenter>
              <Button
                color="white.A700"
                fontSize="14px"
                fontWeight={700}
                bg="green.500"
                h="40px"
                minW="134px"
                position="absolute"
                bottom="38%"
                right="0px"
                left="0px"
                px={{ base: "20px", sm: "24px" }}
                m="auto"
                borderRadius="10px"
              >
                05 July 2022
              </Button>
            </Box>
    
    </>
  );
}
