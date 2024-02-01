import { PropsWithChildren, useRef } from "react";
import { useButton, useIsSSR, useLink, useMenuTrigger } from "react-aria";
import { useMediaQuery } from "react-responsive";
import { useMenuTriggerState } from "react-stately";

function NavLink({
  href,
  tabIndex,
  children,
  target,
}: PropsWithChildren<{ href: string; tabIndex?: number; target?: string }>) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const { linkProps } = useLink({}, linkRef);
  return (
    <a
      {...linkProps}
      ref={linkRef}
      href={href}
      tabIndex={tabIndex}
      target={target}
      className="block text-right font-serif text-2xl uppercase hover:underline focus:underline"
    >
      {children}
    </a>
  );
}

export function NavBar() {
  const state = useMenuTriggerState({});
  const triggerRef = useRef<HTMLButtonElement>(null);
  const { menuTriggerProps } = useMenuTrigger({}, state, triggerRef);
  const { buttonProps } = useButton(menuTriggerProps, triggerRef);
  const isMobile = useMediaQuery({
    maxWidth: 748,
  });
  const isSsr = useIsSSR();
  const showMobile = isSsr || isMobile;

  return (
    <nav className="sticky right-0 top-0 float-right mb-[-1000px] flex flex-auto flex-col flex-wrap items-end justify-center gap-2 rounded-xl bg-background/50 p-4 md:top-10">
      {showMobile ? (
        <button {...buttonProps} className="size-10 md:hidden" ref={triggerRef}>
          <span className="sr-only">Toggle Navigation Menu</span>
          {state.isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="size-10"
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
              className="size-10"
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
      <div className="flex flex-col items-end gap-2 md:gap-1">
        {state.isOpen || !isMobile ? (
          <>
            <NavLink key="home" href="/#main">
              Home
            </NavLink>
            <NavLink key="about-us" href="/#about">
              About Us
            </NavLink>
            <NavLink key="board" href="/#board">
              Board
            </NavLink>
            <NavLink key="events" href="/#events">
              Events
            </NavLink>
            <NavLink key="contact-us" href="/#contact">
              Contact Us
            </NavLink>
            <NavLink key="mem" target="_blank" href="https://eepurl.com/h7kkMf">
              Membership
            </NavLink>
            <NavLink
              key="don"
              target="_blank"
              href="
              https://www.paypal.com/donate/?hosted_button_id=CDKCWWZCGR5NE"
            >
              Donations
            </NavLink>
            <NavLink
              key="resou"
              target="_blank"
              href="
              https://drive.google.com/drive/folders/1Ap4VY_FqEy0ybCUKZi8L-jZC0WuLnQl9"
            >
              Resources
            </NavLink>
            <NavLink
              key="cal"
              target="_blank"
              href="https://buytickets.at/boopsocietyctx"
            >
              Calendar
            </NavLink>
          </>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
}
