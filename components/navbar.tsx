import { VStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export function NavBar() {
  return (
    <VStack
      bg="rgba(23, 25, 35, 0.8)"
      p="4"
      borderRadius="xl"
      float="right"
      position="sticky"
      top={10}
      right={0}
      alignItems="end"
    >
      <NextLink href="/" passHref>
        <Link textStyle="navMenuLink">Home</Link>
      </NextLink>
      <NextLink href="/#recurring-events" passHref>
        <Link textStyle="navMenuLink">Events</Link>
      </NextLink>
      <NextLink href="/#board" passHref>
        <Link textStyle="navMenuLink">Board</Link>
      </NextLink>
      <NextLink href="/#updates" passHref>
        <Link textStyle="navMenuLink">Updates</Link>
      </NextLink>
      <NextLink href="/about" passHref>
        <Link textStyle="navMenuLink">About Us</Link>
      </NextLink>
      <NextLink href="/calendar" passHref>
        <Link textStyle="navMenuLink">Calendar</Link>
      </NextLink>
    </VStack>
  );
}
