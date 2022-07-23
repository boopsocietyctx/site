import type { NextPage } from "next";
import Image from "next/future/image";
import mail from "../public/icons/ico-mail.png";
import fb from "../public/icons/ico-fb.png";
import ig from "../public/icons/ico-ig.png";
import tw from "../public/icons/ico-tw.png";
import fl from "../public/icons/ico-fl.png";
import tg from "../public/icons/ico-tg.png";

const About: NextPage = () => {
  return (
    <main className="container max-w-long-prose py-[5vh] text-center">
      <h2 className="mb-10">Mission</h2>
      <p className="mb-10">
        We are a Texas nonprofit corporation empowering pet players around the
        central Texas region to come together by organizing, promoting, and
        assisting in social, educational, and community events.
      </p>

      <div className="my-5">
        <form
          id="subscribe-form"
          action="https://boopsocietyctx.us14.list-manage.com/subscribe/post?u=a97d0c7694ecdf2b0dcc5d6ae&amp;id=eca10627f8"
          method="post"
          target="_blank"
        >
          <h2 className="font-serif text-3xl mb-2">Want to Volunteer?</h2>
          <p>
            Sign up to recieve monthly volunteering opportunities for events we
            host!
          </p>
          <br />
          <div className="grid grid-cols-1 gap-4 container max-w-sm bg-slate-800 rounded px-8 pt-6 pb-8 mg-4 text-white shadow-md">
            <label className="font-bold text-slate-300" htmlFor="preferred-name">Preferred Name</label>
            <input className="rounded invalid:border-red-600 invalid:focus:border-transparent invalid:ring-red-500 bg-slate-600" type="text" id="preferred-name" name="PNAME" required />

            <label className="font-bold text-slate-300" htmlFor="phone">Phone Number</label>
            <input className="rounded invalid:border-red-600 invalid:focus:border-transparent invalid:ring-red-500 bg-slate-600" type="tel" id="phone" name="PHONE" required pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$" />

            <label className="font-bold text-slate-300" htmlFor="email">Email Address</label>
            <input className="rounded invalid:border-red-600 invalid:focus:border-transparent invalid:ring-red-500 bg-slate-600" type="email" id="email" name="EMAIL" required />
        
            <input type="hidden" name="tags" value="7411054,7411058"></input>
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_a97d0c7694ecdf2b0dcc5d6ae_eca10627f8"
                tabIndex={-1}
                value=""
              />
            </div>
            <button type="submit" 
              className="rounded bg-slate-600 hover:bg-slate-700 font-bold mt-2 py-2 px-5 focus:outline-blue-500">
              Subscribe
            </button>
          </div>
        </form>
      </div>

      <h2 className="mb-10 text-center">Contact Us</h2>
      {/* Do we want to add the phone, mailing address, and maybe some social media icons for links? */}
      <p className="mb-20">
        If you have pet play events in the central Texas area to share with us
        to promote, want to collaborate to organize, or need some assistance to
        put together, or you have some ideas for adding education and petplay
        experiences into the community, feel free to send us a message through
        e-mail or social media.
      </p>
      <div className="flex flex-row flex-wrap items-center justify-center gap-4 mx-[2vw]">
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
