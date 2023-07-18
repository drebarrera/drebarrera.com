import Header from "components/header";
import Feature from "components/feature";
import Link from "next/link";

import styles from "@/styles/index.module.css";

function Introduction() {
  return (
    <article className={`${styles.introduction}`}>
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
          src="/images/centerpiece.png"
        />
      </div>
    </article>
  );
}

function Specialties() {
  const SPECIALTY_INFO = [
    {
      title: "UI/UX Design",
      details:
        "Next.js, React, HTML, CSS, JavaScript, jQuery, Chrome Extensions, Wix, Figma, Photoshop, Lightroom",
      icon: "/images/icons/paintbrush.png",
    },
    {
      title: "Backend & DevOps",
      details:
        "C/C++, Go, Python, PHP, Java, Node.js Selenium, API, Git, AWS, NoSQL, MongoDB, Prometheus, Grafana, Docker",
      icon: "/images/icons/code.png",
    },
    {
      title: "Engineering",
      details:
        "Software, Web Apps, Data Automation, Artificial Intelligence, Embedded Systems, Prototyping",
      icon: "/images/icons/microchip.png",
    },
  ];

  return (
    <article className={`${styles.specialties}`}>
      <div className={`${styles.content}`}>
        {SPECIALTY_INFO.map((specialty) => {
          return (
            <section className={`${styles.specialty}`}>
              <h3 className={`${styles.title}`}>{specialty.title}</h3>
              <p className={`${styles.details}`}>{specialty.details}</p>
            </section>
          );
        })}
      </div>
      <div className={`${styles.content}`}>
        {SPECIALTY_INFO.map((specialty) => {
          const url = {
            "--url": `url(${specialty.icon})`,
          };
          return (
            <div className={`${styles.specialty}`}>
              <div className={`${styles.icon}`} style={url}></div>
            </div>
          );
        })}
      </div>

      <Link href="/manifesto" class="arrowlink">
        <p>My Manifesto</p>
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
    </article>
  );
}

function Work() {
  return (
    <article className={`${styles.featured} ${styles.work}`}>
      <div className={`${styles.content}`}>
        <h4>WORK</h4>
        <Feature></Feature>
        <Feature></Feature>
      </div>
    </article>
  );
}

function IndexPage() {
  return (
    <div>
      <Introduction></Introduction>
      <Header></Header>
      <Specialties></Specialties>
      <Work></Work>
    </div>
  );
}

export default IndexPage;
