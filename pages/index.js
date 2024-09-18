import Header from "/components/header";
import Feature from "/components/feature";
import ArrowLink from "/components/arrowlink";
import { Fragment } from "react";
import { useState, useEffect } from "react";
import Head from "next/head";

import styles from "@/styles/index.module.css";

import specialties from "/data/specialties.json";
import tools from "/data/tools.json"
import skills from "/data/skills.json"
import featuredwork from "/data/featuredwork.json";
featuredwork.sort((a, b) => a.index - b.index);
import featuredprojects from "/data/featuredprojects.json";
import Tool from "@/components/tool";
featuredprojects.sort((a, b) => a.index - b.index);

function Introduction() {
  return (
    <article className={`${styles.introduction}`} /*style={height}*/>
      <div className={`${styles.content}`}>
        <section className={`${styles.textbox}`}>
          <h2>Hi, I'm Andr&#233;s</h2>
          <p>
            I help companies craft beautiful UI, orchestrate efficient
            automation, and prototype interconnected systems.
          </p>
        </section>
        <img
          className={`${styles.centerpiece}`}
          src="/images/centerpiece.gif"
        />
      </div>
    </article>
  );
}

function Skills() {
  return (
      <article className={`${styles.macrosection}`}>
          <div className={`${styles.content}`}>
              <h4>ENGINEERING SKILLS</h4>
              <div className={`${styles.skills}`}>
                  {
                  Object.keys(skills).map((skill) => {
                      const barwidth = {
                          "--barwidth": skills[skill],
                      };
                      return (
                          <div className={`${styles.skill}`}>
                              <div className={`${styles.row}`}>
                                  <div className={`${styles.bar}`} style={barwidth}>
                                      <div className={`${styles.skillbar}`}></div>
                                  </div>
                                  <p>{skills[skill]}</p>
                              </div>
                              <h6>{skill}</h6>
                          </div>
                      );
                  })}
              </div>
              <ArrowLink
                details={{ link: "My Manifesto", url: "/manifesto" }}
              ></ArrowLink>
          </div>
      </article>
  )
}

function Specialties() {
  return (
    <article className={`${styles.specialties}`}>
      <div className={`${styles.content}`}>
        {specialties.map((specialty) => {
          const url = {
            "--url": `url(${specialty.icon})`,
          };
          return (
            <section className={`${styles.specialty}`}>
              <h3 className={`${styles.title}`}>{specialty.title}</h3>
              <p className={`${styles.details}`}>{specialty.details}</p>
              <div className={`${styles.specialty}`}>
                <div className={`${styles.icon}`} style={url}></div>
              </div>
            </section>
          );
        })}
      </div>

      <ArrowLink
        details={{ link: "My Manifesto", url: "/manifesto" }}
      ></ArrowLink>
    </article>
  );
}

function Tools() {

  return (
      <article className={`${styles.macrosection} ${styles.macrotool}`}>
          <div className={`${styles.content}`}>
              <h4>OVER 10 YEARS EXPERIENCE</h4>
              <p className={`${styles.subtitle}`}>FULL STACK ENGINEER</p>
              <div className={`${styles.toolbar}`}>
                <div className={`${styles.overlay}`}></div>
                <div className={`${styles.tools}`}>
                    {
                        Object.entries(tools).map(([key, value], index) => {
                          return <Tool key={index} details={ { "name": key, "type": value.type, "url": value.url, "year": value.year, "icon": value.icon} }></Tool>
                        })
                    }
                </div>
              </div>
              <p className={`${styles.caption}`}>Get To Know My Strengths</p>
              <ArrowLink
                details={{ link: "My Manifesto", url: "/manifesto" }}
              ></ArrowLink>
          </div>
      </article>
  )
}

function Work() {
  return (
    <article className={`${styles.featured} ${styles.work}`} id="work">
      <div className={`${styles.content}`}>
        <h4>WORK HISTORY</h4>
        {featuredwork.map((details, index) => {
          details.index = index;
          details["route"] = "work";
          return <Feature details={details}></Feature>;
        })}
      </div>
    </article>
  );
}

function Austin() {
  const [clientHeight, setClientHeight] = useState(0);

  useEffect(() => {
    function handleResize() {
      setClientHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);
    setClientHeight(window.innerHeight);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const height = {
    height: clientHeight - 60 + "px",
    "min-height": "fit-content"
  };

  return (
    <article className={`${styles.austin}`} style={height}>
      <div className={`${styles.content}`}>
        <div className={`${styles.info}`}>
          <div className={`${styles.container}`}>
            <div className={`${styles.location}`}>
              <img src="/images/icons/location.webp" />
              <h5>AUSTIN, TX</h5>
            </div>
            <p>
              I work with innovators across the globe to direct and support
              software and design projects.
            </p>
            <ArrowLink
              details={{ link: "Send me a note", url: "/contact" }}
            ></ArrowLink>
          </div>
        </div>
      </div>
    </article>
  );
}

function PersonalProjects() {
  return (
    <article className={`${styles.featured} ${styles.projects}`} id="projects">
      <div className={`${styles.content}`}>
        <h4>PERSONAL PROJECTS</h4>
        {featuredprojects.map((details, index) => {
          details.index = index;
          details["route"] = "project";
          return <Feature details={details}></Feature>;
        })}
      </div>
    </article>
  );
}

function LimitlessInnovation() {
  const [clientHeight, setClientHeight] = useState(0);

  useEffect(() => {
    function handleResize() {
      setClientHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);
    setClientHeight(window.innerHeight);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const height = {
    height: clientHeight - 60 + "px",
  };

  return (
    <article className={`${styles.limitless}`} style={height}>
      <div className={`${styles.content}`}>
        <h3>Limitless innovation and community bring progress.</h3>
        <div className={`${styles.centered}`}>
          <div className={`${styles.me}`}></div>
          <h4>Let's build something beautiful together.</h4>
          <ArrowLink
            details={{ link: "Send me a note", url: "/contact" }}
          ></ArrowLink>
        </div>
      </div>
    </article>
  );
}

function IndexPage() {
  return (
    <Fragment>
      <Head>
        <title>Andrés Barrera</title>
        <meta name="description" content="I help companies craft beautiful UI, orchestrate efficient automation, and prototype interconnected systems." />
      </Head>
      <Introduction></Introduction>
      <Header></Header>
      <Tools></Tools>
      <Work></Work>
      <Austin></Austin>
      <PersonalProjects></PersonalProjects>
      <LimitlessInnovation></LimitlessInnovation>
    </Fragment>
  );
}

export default IndexPage;
