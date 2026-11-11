import Header from "/components/header";
import { Fragment, useEffect, useState } from "react";
import Head from "next/head";

import featuredwork from "/data/featuredwork.json";
import featuredwork_full from "/data/featuredwork_chkm8.json";

import featuredprojects from "/data/featuredprojects.json";
featuredprojects.sort((a, b) => a.index - b.index);

import Introduction from "@/components/index/Introduction";
import Tools from "@/components/index/Tools";
import Work from "@/components/index/Work";
import PersonalProjects from "@/components/index/PersonalProjects";
import Austin from "@/components/index/Austin";
import LimitlessInnovation from "@/components/index/LimitlessInnovation";
import AboutMe from "@/components/index/AboutMe";
import { useSearchParams } from "next/navigation";
import Banner from "@/components/banner";

function IndexPage({ fullWorkHistory: fullWorkHistoryProp }) {
  const searchParams = useSearchParams();
  // Prefer the cookie value, but allow query param to override for SSR hydration
  const fullWorkHistory = fullWorkHistoryProp || searchParams.get("work") === "full";
  const [work, setWork] = useState(fullWorkHistory ? featuredwork_full : featuredwork);

  useEffect(() => {
    if (fullWorkHistory) {
      setWork(featuredwork_full);
    } else {
      setWork(featuredwork);
    }
  }, [fullWorkHistory]);

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
      <Work work={work.sort((a, b) => a.index - b.index)} />
      <Austin />
      <PersonalProjects projects={featuredprojects} />
      <LimitlessInnovation />
    </Fragment>
  );
}

export async function getServerSideProps({ req }) {
  // Read the cookie from the request headers
  const cookie = req.headers.cookie || '';
  const fullWorkHistory = cookie.includes('fullWorkHistory=true');
  return {
    props: {
      fullWorkHistory,
    },
  };
}

export default IndexPage;
