import type { PropsWithChildren } from "react";

function NavLink({ href, children }: PropsWithChildren<{ href: string}>) {
  return (
    <a href={href} className="uppercase font-serif text-2xl block text-right">
      {children}
    </a>
  )
}

export function NavBar() {
  return (
    <nav
      className="flex flex-auto md:flex-col flex-row flex-wrap p-4 rounded-xl sticky top-10 right-0 justify-center items-end bg-background/50 gap-2 md:float-right md:mb-[-1000px] min-h-[5rem] md:h-auto"
    >
      <NavLink href="/">
        Home
      </NavLink>
      <NavLink href="/#recurring-events">
        Events
      </NavLink>
      <NavLink href="/#board">
        Board
      </NavLink>
      <NavLink href="/#updates">
        Updates
      </NavLink>
      <NavLink href="/about">
        About Us
      </NavLink>
      <NavLink href="/calendar">
        Calendar
      </NavLink>
    </nav>
  );
}
