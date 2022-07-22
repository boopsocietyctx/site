import {
    Container,
    Heading,
    Center,
  } from "@chakra-ui/react";
  import type { NextPage } from "next";
  import calendarEmbed from "../lib/cal_embed.html";
  import { NavBar } from "../components/navbar";
  
  const Home: NextPage = () => {
    return (
        <Container as="main" maxWidth="120ch">
          <NavBar />
          <Container maxW="90ch">
            
            <Heading
              mt="10"
              mb="10"
              textAlign="center"
              textStyle="shoutHeading"
              fontSize="7xl"
            >
              Events for This Month
            </Heading>
            <Center>
              <div dangerouslySetInnerHTML={{ __html: calendarEmbed }}></div>
            </Center>
          </Container>
        </Container>
    );
  };
  
  export default Home;
  