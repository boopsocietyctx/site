import { Container, Heading, Center } from "@chakra-ui/react";
import type { NextPage } from "next";
import calendarEmbed from "../lib/cal_embed.html";

const Home: NextPage = () => {
  return (
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
  );
};

export default Home;
