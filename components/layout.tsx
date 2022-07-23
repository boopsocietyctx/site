import type { PropsWithChildren } from "react";
import { NavBar } from "./navbar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <main className="container max-w-container">
        <NavBar />
        {children}
      </main>
      <footer />
    </>
  )
}
