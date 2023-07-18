import Link from "next/link";

import styles from "@/styles/components/feature.module.css";

function Feature() {
  const details = {
    id: 0,
    index: 0,
    identifier: "hispanichackers",
    title: "Hispanic Hackers",
    description:
      "Leading and designing website & brand content for a non-profit elevating the Latino tech community.",
    link: "View Case Study",
    background: "#287E7F",
    captureMB: "0px",
  };

  const bg = {
    "--bg": details.background,
  };

  const captureMB = {
    "--captureMB": details.captureMB,
  };

  function FeatureInfo() {
    return (
      <div className={`${styles.info}`}>
        <img
          src={`images/featured/${details.identifier}/logo.png`}
          className={`${styles.logo}`}
        />
        <h5>{`${details.title}`}</h5>
        <p>{`${details.description}`}</p>
        <Link href={`/project/${details.identifier}`} class="arrowlink">
          <span>{`${details.link}`}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 40 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M34 7.75L38.25 12m0 0l-4.25 4.25M36 12H3"
            />
          </svg>
        </Link>
      </div>
    );
  }

  if (!(details.index % 2)) {
    return (
      <section className={`${styles.feature} ${styles.featureleft}`} style={bg}>
        <FeatureInfo></FeatureInfo>
        <img
          src={`images/featured/${details.identifier}/capture.png`}
          className={`${styles.capture}`}
          style={captureMB}
        />
      </section>
    );
  } else {
    return (
      <section
        className={`${styles.feature} ${styles.featureright}`}
        style={bg}
      >
        <img
          src={`images/featured/${details.identifier}/capture.png`}
          className={`${styles.capture}`}
          style={captureMB}
        />
        <FeatureInfo></FeatureInfo>
      </section>
    );
  }
}

export default Feature;
