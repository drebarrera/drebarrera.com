import Head from "next/head";
import Header from "/components/header";

import Breadcrumb from "/components/breadcrumb";
import WebDevComponent from "/components/startups/topics/website-development/website-development";

import styles from "/styles/startups/index.module.css";

export default function WebDev() {
    return (
        <>
            <Head>
                <title>Andrés Barrera | Website Development</title>
                <meta name="description" content="How to choose a website development approach, program web applications, create CMS sites, and host a website." />
            </Head>
            <Header></Header>
            <article className={`${styles.frame} ${styles.phasei}`}>
                <div className={styles.breadcrumb}><Breadcrumb breadcrumbArray={{"Andrés Barrera": "/", "Startup Center": "/startups", "Website Development": "/startups/website-development"}}></Breadcrumb></div>
                <WebDevComponent></WebDevComponent>
            </article>
        </>
    );
}