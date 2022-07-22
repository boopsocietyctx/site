import { Box, Container, Flex, Heading, VStack, Text, Link, Stack, Center } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import NextLink from 'next/link';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>About Us</title>
                <meta name="description" content="Learn more about the Boop Society of Central Texas" />
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
                <Container maxW="90ch">
                <Flex
                    flexDirection={{ md: 'row', base: 'column' }}
                    height="5vh"
                    alignItems="center"
                    justifyContent={{ md: 'flex-end', base: 'center' }}
                    gap="5vw"
                    mx="5vw">
                </Flex>
                    <Heading id="recurring-events" mb="10" textAlign="center" textStyle="shoutHeading" fontSize="7xl">
                        Mission
                    </Heading>
                        <Text textAlign="center">
                            We are a Texas nonprofit corporation empowering pet players around the central Texas region to come together by organizing, promoting, and assisting in social, educational, and community events.
                        </Text>
                    <Heading id="recurring-events" mt="20" mb="10" textAlign="center" textStyle="shoutHeading" fontSize="7xl">
                        Vision
                    </Heading>
                        {/* Gotta finish this statement */}
                        <Text textAlign="center">
                            We aim to build a community
                        </Text>
                    <Heading id="recurring-events" mt="20" mb="10" textAlign="center" textStyle="shoutHeading" fontSize="7xl">
                        Contact Us
                    </Heading>
                        {/* Do we want to add the phone, mailing address, and maybe some social media icons for links? */}
                        <Text textAlign="center">
                            boop@boopsocietyctx.org
                        </Text>
                </Container>
            </Container>

            <footer></footer>
        </div>
    );
};

export default Home;
