import type { NextPage } from "next";
import Image from "next/future/image";
import twitterEmbed from "../lib/twitter_embed.html";

import clayPic from "../public/board/clay.jpg";
import marchosiasPic from "../public/board/marchosias.jpg";
import polygonPic from "../public/board/polygon.jpg";
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
      <h3 className="mb-1 text-2xl font-bold">{header}</h3>
      <div className="text-xl font-normal uppercase">{desc}</div>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <div className="flex h-[calc(100vh-8rem)] w-full flex-col items-center justify-center gap-[5vw] px-[5vw] md:h-[calc(100vh-3rem)] md:flex-row md:justify-end">
        <div className="basis-auto">
          <Image
            src={boopHero}
            sizes="120ch"
            alt="Boop Society Hero Image"
            priority
          />
        </div>
        <div className="basis-[min-content]">
          <h1 className="text-center text-6xl font-bold md:text-left">
            The Boop Society of Central Texas
          </h1>
        </div>
      </div>
      <h2 id="board" className="my-20">
        Board Members
      </h2>
      <div className="my-20 flex flex-auto flex-col items-center space-x-6 md:flex-row">
        {[
          ["\n\n Marchosias", marchosiasPic],
          ["\n\n Polygon", polygonPic],
          ["\n\n Clay", clayPic],
        ].map(([name, pic]) => (
          <div
            key={name as string}
            className="flex flex-1 flex-col text-center text-4xl sm:max-w-[60vw]"
          >
            <Image
              src={pic}
              alt={`Board Member ${name}`}
              className="rounded-full border-8 border-yellow-400"
            ></Image>
            <div className="font-serif">
              <br></br> {name as string}{" "}
            </div>
          </div>
        ))}
      </div>
      <div className="container max-w-long-prose">
        <h2 id="recurring-events" className="mb-12">
          Our Recurring Events
        </h2>
        <div className="mb-20 flex flex-col gap-10 px-4">
          <MarqueEvent
            header="Off The Leash - Park Munch/Social"
            desc="MUELLER PARK - 2ND SATURDAYS"
            className="justify-around"
          />
          <MarqueEvent
            header="Full Moon Howl"
            desc="BARTON SPRINGS POOL (Apr-Sep) - FULL MOON NIGHTS "
            className="justify-around"
          />
          <MarqueEvent
            header="Paws On 4th - Bar Night"
            desc="OILCAN HARRY'S - 4TH SATURDAYS - 9:30 PM"
            className="justify-around"
          />
          <MarqueEvent
            header="Educational Workshops/Moshes"
            desc="THROUGH LOCAL HOSTS - HELD EVERY QUARTER"
            className="justify-around"
          />
        </div>
        <h2 id="updates">Social Updates</h2>
        <div className="text-center">
          <div
            className="text-center"
            dangerouslySetInnerHTML={{ __html: twitterEmbed }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Home;
