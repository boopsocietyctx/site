import { Container } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";
import { NavBar } from "./navbar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Container as="main" maxWidth="120ch">
        <NavBar />
        {children}
      </Container>
      <footer />
    </>
  )
}
