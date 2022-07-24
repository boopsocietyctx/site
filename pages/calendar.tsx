import type { NextPage } from "next";
import calendarEmbed from "../lib/cal_embed.html";

const Home: NextPage = () => {
  return (
    <main className="container max-w-long-prose">
      <h2 className="mx-10 text-center">Events for This Month</h2>
      <div dangerouslySetInnerHTML={{ __html: calendarEmbed }}></div>
    </main>
  );
};

export default Home;
