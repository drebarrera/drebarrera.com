import Feature from "@/components/feature";
import styles from "@/styles/index.module.css";

export default function PersonalProjects({projects}) {
  return (
    <section className={`${styles.featured} ${styles.projects}`} id="projects">
      <div className={`${styles.content}`}>
        <div className="flex flex-col gap-[10px]">
          <h4>PASSION PROJECTS</h4>
          <p className="text-lg font-regular font-[Inter] font-regular">Outside of work, I'm a big fan of building things and picking up new skills. From learning popular frameworks and tools like WordPress to building full-stack internal applications, I'm always working on somthing new. Here are a few projects that I'm proud of.</p>
        </div>
        {projects.map((details, index) => {
          details.index = index;
          details["route"] = "project";
          return <Feature key={index} details={details}></Feature>;
        })}
      </div>
    </section>
  );
}