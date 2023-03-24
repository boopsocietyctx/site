import type { NextPage } from "next";
import Image from "next/future/image";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import fb from "../public/icons/ico-fb.png";
import fl from "../public/icons/ico-fl.png";
import ig from "../public/icons/ico-ig.png";
import mail from "../public/icons/ico-mail.png";
import tg from "../public/icons/ico-tg.png";
import tw from "../public/icons/ico-tw.png";

const About: NextPage = () => {
  return (
    <main className="container max-w-long-prose py-[5vh] text-center">
      <h2 className="mb-10">Mission</h2>
      <p className="mb-10">
        We are the Boop Society of Central Texas, a non-profit organization
        dedicated to aiding organizational support for local, social, and
        educational events in the Central Texas area. We host 3 monthly social
        events, quarterly educational workshops, moshes, find volunteers to aid
        setting up events, and help assess locations and organizations for
        suitable safe spaces to ensure that they have the equipment necessary to
        safely host and promote pet play. We accept all critters (pups, kittens,
        ponies, dragons, and any other species, existing or imagined) and lovers
        of regardless of gender, sexuality, and background and help them find
        the best ways for them to live their best critter life. We hope to be a
        resource for any information a pet player may be looking for, and always
        look to help facilitate anything a pet player wants to make happen when
        we can.
      </p>

      <h2 className="mb-10">Our Officers</h2>
      <p className="mb-10">
        President - Marchosias <br></br>
        marchosias@boopsocietyctx.org <br></br>
        <br></br>
        Vice President - Polygon <br></br>
        polygon@boopsocietyctx.org <br></br>
        <br></br>
        Secretary/Treasurer - Clay <br></br>
        clay@boopsocietyctx.org <br></br>
        <br></br>
        Event Coordinator - Fenrir <br></br>
        events@boopsocietyctx.org <br></br>
        <br></br>
        Volunteer Coordinator - Bun <br></br>
        volunteer@boopsocietyctx.org <br></br>
        <br></br>
        Inventory Manager - Kie <br></br>
        equipment@boopsocietyctx.org<br></br>
        <br></br>
        Webmaster - Lyell <br></br>
        webmaster@boopsocietyctx.org <br></br>
      </p>

      <h2 className="mb-10 text-center">Contact Us</h2>
      {/* Do we want to add the phone, mailing address, and maybe some social media icons for links? */}
      <p className="mb-20">
        If you have pet play events in the central Texas area to share with us
        to promote, want to collaborate to organize, or need some assistance to
        put together, or you have some ideas for adding education and petplay
        experiences into the community, feel free to send us a message through
        e-mail or social media.
      </p>
      <div className="mx-[2vw] flex flex-row flex-wrap items-center justify-center gap-4">
        <a href="mailto:info@boopsocietyctx.org">
          <Image width={40} src={mail} alt="Boop Society E-mail" />
        </a>
        <a href="https://www.facebook.com/boopsocietyctx">
          <Image width={40} src={fb} alt="Boop Society Facebook Page" />
        </a>
        <a href="https://www.instagram.com/boopsocietyctx">
          <Image width={40} src={ig} alt="Boop Society Instagram Page" />
        </a>
        <a href="https://www.twitter.com/boopsocietyctx">
          <Image width={40} src={tw} alt="Boop Society Twitter Page" />
        </a>
        <a href="https://www.fetlife.com/boopsocietyctx">
          <Image width={40} src={fl} alt="Boop Society Fetlife Page" />
        </a>
        <a href="https://t.me/boopsocietyctx">
          <Image width={40} src={tg} alt="Boop Society Telegram Channel" />
        </a>
      </div>
    </main>
  );
};

export default About;
