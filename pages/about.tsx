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

function FormError({
  type,
  patternName,
}: { type?: string; patternName?: string } = {}) {
  if (type == null) {
    return null;
  }

  if (type === "required") {
    return (
      <p className="mb-2 text-red-400">
        You must provide a value for this field.
      </p>
    );
  } else if (type === "pattern") {
    return (
      <p className="mb-2 text-red-400">
        Double check that you&apos;ve provided a valid {patternName}!
      </p>
    );
  }
  return null;
}

function mailChimpPost(data: Record<string, any>) {
  const form = document.createElement("form");
  form.method = "POST";
  form.action =
    "https://boopsocietyctx.us14.list-manage.com/subscribe/post?u=a97d0c7694ecdf2b0dcc5d6ae&amp;id=eca10627f8";
  form.target = "_blank";

  for (const [key, value] of Object.entries(data)) {
    const field = document.createElement("input");
    field.type = "hidden";
    field.name = key;
    field.value = value;
    form.appendChild(field);
  }

  document.body.appendChild(form);
  form.submit();
}

const SubscribeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = useCallback(mailChimpPost, []);

  return (
    <div className="my-5">
      <form
        id="subscribe-form"
        onSubmit={handleSubmit(onSubmit)}
        action=""
        method="post"
        target="_blank"
      >
        <h2 className="mb-2 font-serif text-3xl">Want to Volunteer?</h2>
        <p>
          Sign up to recieve monthly volunteering opportunities for events we
          host!
        </p>
        <br />
        <div className="container grid max-w-sm grid-cols-1 gap-4 rounded bg-slate-800 px-8 pt-6 pb-8 text-white shadow-md">
          <label
            className={`font-bold text-slate-300 ${
              errors.PNAME ? "text-red-400" : ""
            }`}
            htmlFor="preferred-name"
          >
            Preferred Name {errors.PNAME ? "*" : ""}
          </label>
          <input
            className="rounded bg-slate-600 invalid:border-red-600 invalid:ring-red-500 invalid:focus:border-transparent"
            {...register("PNAME", { required: true })}
            type="text"
            id="preferred-name"
          />
          <FormError {...errors.PNAME} />

          <label
            className={`font-bold text-slate-300 ${
              errors.PNAME ? "text-red-400" : ""
            }`}
            htmlFor="phone"
          >
            Phone Number {errors.PNAME ? "*" : ""}
          </label>
          <input
            className="rounded bg-slate-600 invalid:border-red-600 invalid:ring-red-500 invalid:focus:border-transparent"
            {...register("PHONE", {
              required: true,
              pattern:
                /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i,
            })}
            type="tel"
            id="phone"
          />
          <FormError {...errors.PHONE} patternName="telephone number" />

          <label
            className={`font-bold text-slate-300 ${
              errors.PNAME ? "text-red-400" : ""
            }`}
            htmlFor="email"
          >
            Email Address {errors.PNAME ? "*" : ""}
          </label>
          <input
            className="rounded bg-slate-600 invalid:border-red-600 invalid:ring-red-500 invalid:focus:border-transparent"
            {...register("EMAIL", {
              required: true,
              pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
            })}
            type="email"
            id="email"
          />
          <FormError {...errors.EMAIL} patternName="email" />

          <input
            type="hidden"
            name="tags"
            value="7411054,7411058"
            readOnly
          ></input>
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_a97d0c7694ecdf2b0dcc5d6ae_eca10627f8"
              tabIndex={-1}
              readOnly
              value=""
            />
          </div>
          <button
            type="submit"
            className="mt-2 rounded bg-slate-600 py-2 px-5 font-bold hover:bg-slate-700 focus:outline-blue-500"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

const About: NextPage = () => {
  return (
    <main className="container max-w-long-prose py-[5vh] text-center">
      <h2 className="mb-10">Mission</h2>
      <p className="mb-10">
        We are a Texas nonprofit corporation empowering pet players around the
        central Texas region to come together by organizing, promoting, and
        assisting in social, educational, and community events.
      </p>

      <SubscribeForm />

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
