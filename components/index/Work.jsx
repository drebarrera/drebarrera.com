import styles from "@/styles/index.module.css";
import Feature from "/components/feature";

export default function Work({work}) {
  return (
    <section className={`${styles.featured} ${styles.work}`} id="work">
      <div className={`${styles.content}`}>
        <div className="flex flex-col gap-[10px]">
          <h4>WORK HISTORY</h4>
          <p className="text-lg font-regular font-[Inter] font-regular">My career experience spans across Embedded Systems, Full-Stack Development, and Product Design. I have had the pleasure of working with startups, mid-sized companies, and non-profit organizations. Below are some of the projects I have worked on.</p>
        </div>
        {work.map((details, index) => {
          details.index = index;
          details["route"] = "work";
          return <Feature key={index} details={details}></Feature>;
        })}
      </div>
    </section>
  );
}
