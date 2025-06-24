import styles from "@/styles/index.module.css";
import Tool from "@/components/tool";
import tools from "/data/tools.json";
import ArrowLink from "/components/arrowlink";

export default function Tools() {
  return (
      <section className={`${styles.macrosection} ${styles.macrotool}`}>
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
                details={{ link: "My Toolbox", url: "/tools" }}
              ></ArrowLink>
          </div>
      </section>
  )
}