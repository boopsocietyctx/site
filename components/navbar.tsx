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
      className="block text-right font-serif text-2xl uppercase hover:underline focus:underline"
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
  const matches = useMediaQuery("only screen and (max-width: 767px)");

  return (
    <nav className="sticky top-0 right-0 float-right mb-[-1000px] flex flex-auto flex-col flex-wrap items-end justify-center gap-2 rounded-xl bg-background/50 p-4 md:top-10">
      {matches ? (
        <button {...buttonProps} className="h-10 w-10" ref={triggerRef}>
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
        {state.isOpen || !matches ? (
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
