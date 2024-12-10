import React from "react";
import SupportWelcome from "./welcome";
import SupportForm from "./form";
import Faq from "../faq";
import type { MoviesType } from "@/types";
import CallToAction from "../common/callToAction";
import CTAImages from "../common/callToAction/images";
import WelcomeImages from "./welcomeImages";

export default function Support({ movies }: { movies: MoviesType[] }) {
  return (
    <section className="w-full space-y-36">
      <main className="w-full flex flex-col lg:flex-row justify-between items-center gap-20">
        <SupportWelcome>
          <WelcomeImages movies={movies} />
        </SupportWelcome>
        <SupportForm />
      </main>
      <Faq />
      <CallToAction>
        <CTAImages movies={movies} />
      </CallToAction>
    </section>
  );
}
