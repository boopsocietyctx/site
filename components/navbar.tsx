import { VStack, Link } from "@chakra-ui/react";

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
      <Link href="/" textStyle="navMenuLink">
        Home
      </Link>
      <Link href="/#recurring-events" textStyle="navMenuLink">
        Events
      </Link>
      <Link href="/#board" textStyle="navMenuLink">
        Board
      </Link>
      <Link href="/#updates" textStyle="navMenuLink">
        Updates
      </Link>
      <Link href="/about" textStyle="navMenuLink">
        About Us
      </Link>
      <Link href="/calendar" textStyle="navMenuLink">
        Calendar
      </Link>
    </VStack>
  );
}
