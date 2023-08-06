import { Fragment } from "react";
import Header from "components/header";

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
    "--challenge": `url(/images/featured/${details.identifier}/challenge.png)`,
  };

  return (
    <Fragment>
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
                  tools.forEach((toolset) => {
                    Object.keys(toolset.tools).map((t) => {
                      if (t == tool) {
                        link = toolset.tools[t];
                      }
                    });
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
                    <span className={`${styles.label}`}>Website</span>
                    <br></br>
                    <a
                      href={details.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {details.website.replace("https://", "")}
                    </a>
                  </>
                ) : (
                  <></>
                )}
              </p>
            </div>
            <img
              src={`/images/featured/${details.identifier}/capture.png`}
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
          <div className={`${styles.img}`} style={images}></div>
          <div className={`${styles.content}`}>
            <p className={`${styles.label}`}>Challenge</p>
            <p>{details.challenge}</p>
          </div>
        </section>
        <section className={`${styles.section} ${styles.solution}`}>
          <div className={`${styles.img}`} style={images}></div>
          <div className={`${styles.content}`}>
            <p className={`${styles.label}`}>Solution</p>
            <p>{details.solution}</p>
          </div>
        </section>
      </article>
    </Fragment>
  );
}
