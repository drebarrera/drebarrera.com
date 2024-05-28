import { Fragment } from "react";
import Header from "components/header";
import Head from 'next/head';

import featuredwork from "data/featuredwork.json";
import tools from "data/tools.json";

import styles from "@/styles/dynamic.module.css";
import ArrowLink from "@/components/arrowlink";

export async function getStaticProps(context) {
  const { params } = context;
  const id = params.workid;

  var ind = undefined;
  for (var i = 0; i < featuredwork.length; i++) {
    if (featuredwork[i].identifier == id) {
      ind = i;
      break;
    }
  }
  return {
    props: {
      index: ind,
    },
  };
}

export async function getStaticPaths() {
  const paths = Object.values(featuredwork).map((item) => ({
    params: { workid: item.identifier },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export default function WorkPage(props) {
  const { index } = props;
  const details = featuredwork[index];

  const bg = {
    "--bg": details.background,
  };

  const captureMB = {
    "--captureMB": details.captureMB,
  };

  const images = {
    "--challenge": `url(/images/featured/${details.identifier}/challenge.webp)`,
    "--solution": `url(/images/featured/${details.identifier}/solution.webp)`,
  };

  return (
    <Fragment>
      <Head>
          <title>{details.title}</title>
          <meta name="description" content={details.description} />
      </Head>
      <Header></Header>
      <article className={`${styles.article}`}>
        <section className={styles.header} style={bg}>
          <div className={`${styles.overview}`}>
            <div className={`${styles.content}`}>
              <h2>{details.title}</h2>
              <p className={`${styles.description}`}>{details.description}</p>
              <p>
                <span className={`${styles.label}`}>Role</span>
                <br></br>
                {details.role}
              </p>
              <p>
                <span className={`${styles.label}`}>Location</span>
                <br></br>
                {details.location}
              </p>
              <p>
                <span className={`${styles.label}`}>
                  Tools<br></br>
                </span>
                {details.tools.map((tool) => {
                  var link = "";
                  var comma = undefined;
                  if (tool != details.tools[details.tools.length - 1])
                    comma = <span>, </span>;
                  Object.keys(tools).forEach((t) => {
                    if (t == tool) {
                      link = tools[t].url;
                    }
                  });
                  return (
                    <Fragment>
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        {tool}
                      </a>
                      {comma}
                    </Fragment>
                  );
                })}
              </p>
              <p>
                {details.website !== "" ? (
                  <>
                    <span className={`${styles.label}`}>Explore the Project</span>
                    <br></br>
                    {
                      typeof details.website == "string" ?
                      <>
                        <span>&rarr; </span>
                        <a
                          href={details.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {details.website.replace("https://", "")}
                        </a>
                       </>
                      : Object.entries(details.website).map(([name, url], index) => {
                        return (
                          <>
                          <span>&rarr; </span>
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {name}
                          </a>
                          <br></br>
                          </>
                        );
                      })
                    }
                  </>
                ) : (
                  <></>
                )}
              </p>
            </div>
            <img
              src={`/images/featured/${details.identifier}/capture.webp`}
              style={captureMB}
            />
          </div>
        </section>
        {details.premise ? (
          <>
            <section className={`${styles.premise}`}>
              <p className={`${styles.label}`}>Premise</p>
              <p>{details.premise}</p>
            </section>
          </>
        ) : (
          <></>
        )}
        <section className={`${styles.section} ${styles.challenge}`}>
          <a href={`/images/featured/${details.identifier}/challenge.webp`} target="_blank" className={`${styles.img}`} style={images}></a>
          <div className={`${styles.content}`}>
            <p className={`${styles.label}`}>Challenge</p>
            <p>{details.challenge}</p>
          </div>
        </section>
        <section className={`${styles.section} ${styles.solution}`}>
          <a href={`/images/featured/${details.identifier}/solution.webp`} target="_blank" className={`${styles.img}`} style={images}></a>
          <div className={`${styles.content}`}>
            <p className={`${styles.label}`}>Solution</p>
            <p>{details.solution}</p>
          </div>
        </section>
        <section className={`${styles.section} ${styles.choices}`}>
          <div className={`${styles.list}`}>
          <p className={`${styles.title}`}>Development Tools</p>
            {details.tools.map((tool) => {
              var link = "";
              var icon = "";
              Object.keys(tools).forEach((t) => {
                if (t == tool) {
                  link = tools[t].url;
                  icon = tools[t].icon;
                }
              });
              return (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <div style={bg} className={`${styles.toolname}`}>
                    <div className={`${styles.toolicon}`} dangerouslySetInnerHTML={{ __html: icon }}></div>
                    {tool}
                  </div>
                </a>
              );
            })}
          </div>
          <div className={`${styles.content}`}>
            <p className={`${styles.label}`}>Design and Development Choices</p>
            <p>{details.choices}</p>
          </div>
        </section>
        <section className={`${styles.section} ${styles.result}`}>
          <div className={`${styles.content}`}>
            <p className={`${styles.label}`}>Result</p>
            <p>{details.result}</p>
          </div>
        </section>
        <section className={`${styles.resultimg}`}>
          <a href={`/images/featured/${details.identifier}/result.webp`} target="_blank"><img src={`/images/featured/${details.identifier}/result.webp`}/></a>
        </section>
      </article>
    </Fragment>
  );
}
