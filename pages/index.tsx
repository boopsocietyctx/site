import type { NextPage } from "next";
import Image from "next/future/image";
import twitterEmbed from "../lib/twitter_embed.html";

import clutchPic from "../public/board/clutch.jpg";
import polygonPic from "../public/board/polygon.jpg";
import sharpPic from "../public/board/sharp.jpg";
import boopHero from "../public/boop-hero.png";

const MarqueEvent = ({
  header,
  desc,
  className,
}: {
  header: string;
  desc: string;
  className?: string;
}) => {
  return (
    <div
      className={`bg-gray-300 p-4 text-black shadow-[20px_20px] shadow-secondary ${className}`}
    >
      <h3 className="text-2xl font-bold mb-1">{header}</h3>
      <div className="text-xl font-normal uppercase">{desc}</div>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col h-[calc(100vh-8rem)] md:h-[calc(100vh-3rem)] items-center justify-center md:justify-end gap-[5vw] px-[5vw] w-full">
        <div className="basis-auto">
          <Image
            src={boopHero}
            sizes="120ch"
            alt="Boop Society Hero Image"
            priority
          />
        </div>
        <div className="basis-[min-content]">
          <h1 className="text-6xl text-center md:text-left font-bold">
            The Boop Society of Central Texas
          </h1>
        </div>
      </div>
      <div className="container max-w-long-prose">
        <h2 id="recurring-events" className="mb-12">
          Our Recurring Events
        </h2>
        <div className="flex flex-col gap-10 mb-20 px-4 items-center">
          <MarqueEvent
            header="Off The Leash - Park Munch/Social"
            desc="MUELLER PARK - 2ND SATURDAYS"
            className="self-start"
          />
          <MarqueEvent
            header="Paws On 4th - Bar Night"
            desc="OILCAN HARRY'S - 4TH SATURDAYS"
          />
          <MarqueEvent
            header=">Educational Workshops/Moshes"
            desc="EVERY QUARTER"
            className="self-end"
          />
        </div>
        <h2 id="board" className="my-20">
          Board Hoomans
        </h2>
        <div className="flex flex-auto md:flex-row flex-col items-center space-x-6 my-20">
          {[
            ["Clutch", clutchPic],
            ["Polygon", polygonPic],
            ["Sharp", sharpPic],
          ].map(([name, pic]) => (
            <div
              key={name as string}
              className="flex flex-col flex-1 sm:max-w-[60vw] text-center text-4xl"
            >
              <Image
                src={pic}
                alt={`Board Member Pup ${name}`}
                className="border-yellow-400 rounded-full border-8"
              ></Image>
              <div className="font-serif">{name as string}</div>
            </div>
          ))}
        </div>
        <h2 id="updates">Social Updates</h2>
        <div className="text-center">
          <div dangerouslySetInnerHTML={{ __html: twitterEmbed }}></div>
        </div>
      </div>
    </>
  );
};

export default Home;
