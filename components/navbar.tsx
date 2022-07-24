import MenuIcon from "@heroicons/react/outline/MenuIcon";
import CloseIcon from "@heroicons/react/outline/XIcon";
import { useMediaQuery } from "@react-hook/media-query";
import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren, useRef } from "react";
import { useButton, useLink, useMenuTrigger } from "react-aria";
import { useMenuTriggerState } from "react-stately";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

function NavLink({
  href,
  tabIndex,
  children,
}: PropsWithChildren<{ href: string; tabIndex?: number }>) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const { linkProps } = useLink({}, linkRef);
  return (
    <motion.a
      {...(linkProps as any)}
      ref={linkRef}
      href={href}
      tabIndex={tabIndex}
      className="uppercase font-serif text-2xl block text-right hover:underline focus:underline"
    >
      {children}
    </motion.a>
  );
}

export function NavBar() {
  const state = useMenuTriggerState({});
  const triggerRef = useRef<HTMLButtonElement>(null);
  const { menuTriggerProps } = useMenuTrigger({}, state, triggerRef);
  const { buttonProps } = useButton(menuTriggerProps, triggerRef);
  const matches = useMediaQuery("only screen and (min-width: 768px)") ?? true;

  return (
    <nav className="flex flex-auto flex-col flex-wrap p-4 rounded-xl sticky top-10 right-0 justify-center items-end bg-background/50 gap-2 float-right mb-[-1000px]">
      {!matches ? (
        <button {...buttonProps} className="w-10 h-10" ref={triggerRef}>
          <span className="sr-only">Toggle Navigation Menu</span>
          {state.isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      ) : null}
      <motion.div className="flex flex-col items-end gap-2 md:gap-1" layout>
        {state.isOpen || matches ? (
          <>
            <NavLink key="home" href="/">
              Home
            </NavLink>
            <NavLink key="events" href="/#recurring-events">
              Events
            </NavLink>
            <NavLink key="board" href="/#board">
              Board
            </NavLink>
            <NavLink key="updates" href="/#updates">
              Updates
            </NavLink>
            <NavLink key="about-us" href="/about">
              About Us
            </NavLink>
            <NavLink key="cal" href="/calendar">
              Calendar
            </NavLink>
          </>
        ) : (
          <></>
        )}
      </motion.div>
    </nav>
  );
}
