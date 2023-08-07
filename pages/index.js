import Header from "components/header";
import Feature from "components/feature";
import ArrowLink from "components/arrowlink";
import { Fragment } from "react";
import { useState, useEffect } from "react";

import styles from "@/styles/index.module.css";

import specialties from "data/specialties.json";
import featuredwork from "data/featuredwork.json";
featuredwork.sort((a, b) => a.index - b.index);
import featuredprojects from "data/featuredprojects.json";
featuredprojects.sort((a, b) => a.index - b.index);

function Introduction() {
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
    height: clientHeight - 70 + "px",
  };

  return (
    <article className={`${styles.introduction}`} style={height}>
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

function Work() {
  return (
    <article className={`${styles.featured} ${styles.work}`} id="work">
      <div className={`${styles.content}`}>
        <h4>WORK</h4>
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
  };

  return (
    <article className={`${styles.austin}`} style={height}>
      <div className={`${styles.content}`}>
        <div className={`${styles.info}`}>
          <div className={`${styles.container}`}>
            <div className={`${styles.location}`}>
              <img src="/images/icons/location.png" />
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
          <h4>Let's build something together.</h4>
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
      <Introduction></Introduction>
      <Header></Header>
      <Specialties></Specialties>
      <Work></Work>
      <Austin></Austin>
      <PersonalProjects></PersonalProjects>
      <LimitlessInnovation></LimitlessInnovation>
    </Fragment>
  );
}

export default IndexPage;
