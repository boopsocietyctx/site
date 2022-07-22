import { Box, Container, Flex, Heading, VStack, Text, Link } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/future/image';
import boopHero from '../public/boop-hero.png';
import instagramEmbed from './ig_embed.html';
import twitterEmbed from './twitter_embed.html';
import NextLink from 'next/link';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Boop Society of Central Texas</title>
                <meta name="description" content="Boop Society of Central Texas" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container as="main" maxWidth="120ch">
                <Box position="sticky" top={10} right={0}>
                    <VStack alignItems="end">
                        <NextLink href="/" passHref>
                            <Link textStyle="navMenuLink">Home</Link>
                        </NextLink>
                        <NextLink href="/" passHref>
                            <Link textStyle="navMenuLink">Events</Link>
                        </NextLink>
                        <NextLink href="/" passHref>
                            <Link textStyle="navMenuLink">Board</Link>
                        </NextLink>
                    </VStack>
                </Box>
                <Flex
                    flexDirection={{ md: 'row', base: 'column' }}
                    height="90vh"
                    alignItems="center"
                    justifyContent={{ md: 'flex-end', base: 'center' }}
                    gap="5vw"
                    mr="5vw"
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
                <Heading textAlign="center" textStyle="shoutHeading" fontSize="7xl">
                  Our Recurring Events
                </Heading>
                <VStack>
                  <Box layerStyle="marqueEvent">

                  </Box>
                </VStack>
                <div dangerouslySetInnerHTML={{ __html: twitterEmbed }}></div>
            </Container>

            <footer></footer>
        </div>
    );
};

export default Home;
