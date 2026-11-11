import Header from "/components/header";
import { Fragment } from "react";
import Head from "next/head";


import featuredwork from "/data/featuredwork_chkm8.json";
featuredwork.sort((a, b) => a.index - b.index);

import featuredprojects from "/data/featuredprojects.json";
featuredprojects.sort((a, b) => a.index - b.index);
import Introduction from "@/components/index/Introduction";
import Tools from "@/components/index/Tools";
import Work from "@/components/index/Work";
import PersonalProjects from "@/components/index/PersonalProjects";
import Austin from "@/components/index/Austin";
import LimitlessInnovation from "@/components/index/LimitlessInnovation";
import AboutMe from "@/components/index/AboutMe";
import Banner from "@/components/banner";

function IndexPage() {
  return (
    <Fragment>
      <Head>
        <title>Andrés Barrera</title>
        <meta name="description" content="I help companies craft beautiful UI, orchestrate efficient automation, and prototype interconnected systems." />
      </Head>
      <Banner />
      <Introduction />
      <Header />
      <Tools />
      <AboutMe />
      <Work work={featuredwork} />
      <Austin />
      <PersonalProjects projects={featuredprojects} />
      <LimitlessInnovation />
    </Fragment>
  );
}

export default IndexPage;
