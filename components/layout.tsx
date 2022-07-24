import dynamic from "next/dynamic";
import type { PropsWithChildren } from "react";

const DynamicNav = dynamic(
  () => import("./navbar").then((m) => m.NavBar as any),
  {
    ssr: false,
  }
);

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <main className="container max-w-container">
        <DynamicNav />
        {children}
      </main>
      <footer />
    </>
  );
}
