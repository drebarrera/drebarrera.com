import Head from "next/head";
import Header from "components/header";

import tech from "components/startups/content/tech";

import RocketIcon from "components/startups/icons/rocket";

import styles from "/styles/startups/index.module.css";



export default function Startups() {
    return (
    <article>
        <Head>
            <title>Andrés Barrera | Startup Center</title>
            <meta name="description" content="I help companies craft beautiful UI, orchestrate efficient automation, and prototype interconnected systems." />
        </Head>
        <Header></Header>
        <section className={styles.hero}>
            <RocketIcon>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{"stop-color": "rgb(0,221,225)", "stop-opacity": "1"}} />
                    <stop offset="100%" style={{"stop-color": "rgb(225,0,245)", "stop-opacity": "1"}} />
                </linearGradient>
            </RocketIcon>
            <h2>Startup Center</h2>
            <p>Your One-Stop-Shop Startup Guide</p>
            <div className={styles.buttons}>
                <a href="#tech" className={styles.button} style={{"--gradientStart": "rgba(0,221,225,1)", "--gradientEnd": "rgba(0,141,162,0.5)"}}>Let's Get Started</a>
                <a href="../contact" className={styles.button} style={{"--gradientStart": "rgba(255,0,245, 1)", "--gradientEnd": "rgba(157,0,151,0.5)"}}>Help Me With My Project</a>
            </div>
        </section>
        <section id="#tech" className={styles.tech}>
            <p className={styles.title}>What Are You Looking to Build?</p>
            <h3>Most Startups Need:</h3>
            <ul>
            {
                Object.entries(tech).map(([key, value]) => {
                    return (
                        <li key={key}>
                            <div className={styles.icon}>{value.svg}</div>
                            <p>{ value.text }</p>
                        </li>
                    )
                })
            }
            </ul>
        </section>
        <section id="#timeline" className={styles.timeline}>
            <h3>The Startup Timeline</h3>
            <p>Embarking on a startup journey is thrilling, filled with endless possibilities and life-changing moments. It's about turning ideas into reality and embracing challenges with passion and determination. Every step is a chance to learn, grow, and shape the future of your venture. But along with excitement, comes uncertainty and formidable obstacles. It's a journey of risks, setbacks, and fierce competition. Yet, with resilience and a readiness to adapt, you can overcome obstacles and reach new heights. As you navigate this path, it is important to stay prepared. This guide equips you with the tools to tackle the digital development challenges and seize the opportunities of the startup world.</p>
            <h4>Where Are You On Your Startup Journey</h4>
        </section>
    </article>
    );
}