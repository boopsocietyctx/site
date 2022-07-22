import { Box, Container, Flex, Heading, VStack, Text, Link, Stack, Center, PopoverAnchor } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from "next/future/image";
import mail from '../public/ico-mail.png';
import fb from '../public/ico-fb.png';
import ig from '../public/ico-ig.png';
import tw from '../public/ico-tw.png';
import fl from '../public/ico-fl.png';
import tg from '../public/ico-tg.png';
import { NavBar } from "../components/navbar";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>About Us</title>
                <meta name="description" content="Learn more about the Boop Society of Central Texas" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container as="main" maxWidth="120ch">
            <NavBar />
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
                        Contact Us
                    </Heading>
                        {/* Do we want to add the phone, mailing address, and maybe some social media icons for links? */}
                        <Text textAlign="center" mb="10">
                            If you have pet play events in the central Texas area to share with us to promote, want to collaborate to organize, or need some assistance to put together, or you have some ideas for adding education and petplay experiences into the community, feel free to send us a message through e-mail or social media.
                        </Text>
                        <Flex
                            flexDirection={{ md: 'row', base: 'column' }}
                            alignItems="center"
                            justifyContent={{ md: 'flex-end', base: 'center' }}
                            gap="3vw"
                            mx="2vw">
                                <a href="mailto:boop@boopsocietyctx.org"><Image src={mail} alt="Boop Society E-mail" /></a>
                                <a href="https://www.facebook.com/boopsocietyctx"><Image src={fb} alt="Boop Society Facebook Page" /></a>
                                <a href="https://www.instagram.com/boopsocietyctx"><Image src={ig} alt="Boop Society Instagram Page" /></a>
                                <a href="https://www.twitter.com/boopsocietyctx"><Image src={tw} alt="Boop Society Twitter Page" /></a>
                                <a href="https://www.fetlife.com/boopsocietyctx"><Image src={fl} alt="Boop Society Fetlife Page" /></a>
                                <a href="https://t.me/boopsocietyctx"><Image src={tg} alt="Boop Society Telegram Channel" /></a>
                        </Flex> 

                </Container>
            </Container>

            <footer></footer>
        </div>
    );
};

export default Home;
