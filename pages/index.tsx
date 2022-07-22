import { Box, Container, Flex, Heading, VStack, Text, Link, Stack, Center } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/future/image';
import boopHero from '../public/boop-hero.png';
import twitterEmbed from '../lib/twitter_embed.html';
import NextLink from 'next/link';

import clutchPic from '../public/board/clutch.jpg';
import polygonPic from '../public/board/polygon.jpg';
import sharpPic from '../public/board/sharp.jpg';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Boop Society of Central Texas</title>
                <meta name="description" content="Boop Society of Central Texas" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container as="main" maxWidth="120ch">
                <VStack bg="rgba(23, 25, 35, 0.8)" p="4" borderRadius="xl" float="right" position="sticky" top={10} right={0} alignItems="end">
                    <NextLink href="/" passHref>
                        <Link textStyle="navMenuLink">Home</Link>
                    </NextLink>
                    <NextLink href="/#recurring-events" passHref>
                        <Link textStyle="navMenuLink">Events</Link>
                    </NextLink>
                    <NextLink href="/#board" passHref>
                        <Link textStyle="navMenuLink">Board</Link>
                    </NextLink>
                    <NextLink href="/about" passHref>
                        <Link textStyle="navMenuLink">About Us</Link>
                    </NextLink>
                </VStack>
                <Flex
                    flexDirection={{ md: 'row', base: 'column' }}
                    height="99vh"
                    alignItems="center"
                    justifyContent={{ md: 'flex-end', base: 'center' }}
                    gap="5vw"
                    mx="5vw"
                >
                    <Box flexBasis="auto">
                        <Image src={boopHero} alt="Boop Society Hero Image" />
                    </Box>
                    <Box flexBasis="min-content">
                        <Heading as="h1" size="lg" fontSize="6xl" textAlign={{ base: 'center', md: 'inherit' }}>
                            The Boop Society of Central Texas
                        </Heading>
                    </Box>
                </Flex>
                <Container maxW="90ch">
                    <Heading id="recurring-events" mb="40" textAlign="center" textStyle="shoutHeading" fontSize="7xl">
                        Our Recurring Events
                    </Heading>
                    <VStack gap="10" mb="3rem" px="1rem">
                        <Box layerStyle="marqueEvent" alignSelf="flex-start">
                            <Text textStyle="marqueHeader">Off The Leash - Park Munch/Social</Text>
                            <Text textStyle="marqueDesc">MUELLER PARK - 2ND SATURDAYS</Text>
                        </Box>
                        <Box layerStyle="marqueEvent" alignSelf="center">
                            <Text textStyle="marqueHeader">Paws On 4th - Bar Night</Text>
                            <Text textStyle="marqueDesc">OILCAN HARRY&apos;S - 4TH SATURDAYS</Text>
                        </Box>
                        <Box layerStyle="marqueEvent" alignSelf="flex-end">
                            <Text textStyle="marqueHeader">Educational Workshops/Moshes</Text>
                            <Text textStyle="marqueDesc">EVERY QUARTER</Text>
                        </Box>
                    </VStack>
                    <Heading id="board" my="40" textAlign="center" textStyle="shoutHeading" fontSize="7xl">
                        Board Hoomans
                    </Heading>
                    <Stack 
                      direction={['column', 'column', 'row']} 
                      alignItems="center" 
                      spacing="6"
                      my="20"
                      >
                        <Box layerStyle="boardPicContainer">
                            <Box
                                as={Image}
                                src={clutchPic}
                                alt="Board member pup clutch"
                                borderColor="yellow.400"
                                layerStyle="boardPic"
                            />
                            <Text>Clutch</Text>
                        </Box>
                        <Box layerStyle="boardPicContainer">
                            <Box
                                as={Image}
                                src={polygonPic}
                                alt="Board member pup polygon"
                                borderColor="red.500"
                                layerStyle="boardPic"
                            />
                            <Text>Polygon</Text>
                        </Box>
                        <Box layerStyle="boardPicContainer">
                            <Box
                                as={Image}
                                src={sharpPic}
                                alt="Board member pup sharp"
                                borderColor="white"
                                layerStyle="boardPic"
                            />
                            <Text>Sharp</Text>
                        </Box>
                    </Stack>
                    <Heading mt="40" mb="10" textAlign="center" textStyle="shoutHeading" fontSize="7xl">
                        Social Updates
                    </Heading>
                    <Center>
                      <div dangerouslySetInnerHTML={{ __html: twitterEmbed }}></div>
                    </Center>
                </Container>
            </Container>

            <footer></footer>
        </div>
    );
};

export default Home;
