import type { NextPage } from "next";
import Image from "next/future/image";
import mail from "../public/icons/ico-mail.png";
import fb from "../public/icons/ico-fb.png";
import ig from "../public/icons/ico-ig.png";
import tw from "../public/icons/ico-tw.png";
import fl from "../public/icons/ico-fl.png";
import tg from "../public/icons/ico-tg.png";
import mailchimpEmbed from "lib/mail_embed.html";

const About: NextPage = () => {
  return (
    <main className="container max-w-long-prose py-[5vh] text-center">
      <h2
        className="mb-10"
      >
        Mission
      </h2>
      <p
        className="mb-10">
        We are a Texas nonprofit corporation empowering pet players around the
        central Texas region to come together by organizing, promoting, and
        assisting in social, educational, and community events.
      </p>
        <div className="mb-10" dangerouslySetInnerHTML={{ __html: mailchimpEmbed }}></div>

      <h2
        className="mb-10 text-center"
      >
        Contact Us
      </h2>
      {/* Do we want to add the phone, mailing address, and maybe some social media icons for links? */}
      <p className="mb-20">
        If you have pet play events in the central Texas area to share with us
        to promote, want to collaborate to organize, or need some assistance to
        put together, or you have some ideas for adding education and petplay
        experiences into the community, feel free to send us a message through
        e-mail or social media.
      </p>
      <div
        className="flex flex-row flex-wrap items-center justify-center gap-4 mx-[2vw]"
      >
        <a href="mailto:boop@boopsocietyctx.org">
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
