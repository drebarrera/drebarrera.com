import ArrowLink from "components/arrowlink";

import styles from "@/styles/components/feature.module.css";

function Feature(props) {
  const details = props.details;
  const bg = {
    "--bg": details.background,
  };

  const captureMB = {
    "--captureMB": details.captureMB,
  };

  function FeatureInfo() {
    return (
      <div className={`${styles.info}`}>
        <h6>{`${details.role}`}</h6>
        <h5>{`${details.title}`}</h5>
        <p>{`${details.description}`}</p>
        <div style={{"display": "flex", "flexDirection": "column", "rowGap": "8px"}}>
          <ArrowLink details={{link: details.link, url: `/${details.route}/${details.identifier}`}}/>
          { (details.website != "") ? <ArrowLink details={{link: "Explore the Project", url: details.website}}/> : <></> }
        </div>
      </div>
    );
  }

  if (!(details.index % 2)) {
    return (
      <section className={`${styles.feature} ${styles.featureleft}`} style={bg}>
        <img
          src={`images/featured/${details.identifier}/logo.webp`}
          className={`${styles.logo}`}
        />
        <div className={`${styles.content}`}>
        <FeatureInfo></FeatureInfo>
        <img
          src={`images/featured/${details.identifier}/capture.webp`}
          className={`${styles.capture}`}
          style={captureMB}
        />
        </div>
      </section>
    );
  } else {
    return (
      <section
        className={`${styles.feature} ${styles.featureright}`}
        style={bg}
      >
        <img
          src={`images/featured/${details.identifier}/logo.webp`}
          className={`${styles.logo}`}
        />
        <div className={`${styles.content}`}>
          <FeatureInfo></FeatureInfo>
          <img
            src={`images/featured/${details.identifier}/capture.webp`}
            className={`${styles.capture}`}
            style={captureMB}
          />
        </div>
      </section>
    );
  }
}

export default Feature;
