import Head from "next/head";
import Header from "components/header";

import Breadcrumb from "components/breadcrumb";
import WebDevComponent from "components/startups/topics/website-development";

import styles from "/styles/startups/index.module.css";

export default function WebDev() {
    return (
        <>
            <Head>
                <title>Andrés Barrera | Startup Center</title>
                <meta name="description" content="Your one-stop-shop startup guide made for CEOs by CTOs." />
            </Head>
            <Header></Header>
            <article className={`${styles.frame} ${styles.phasei}`}>
                <div className={styles.breadcrumb}><Breadcrumb breadcrumbArray={{"Dre Barrera": "/", "Startup Center": "/startups", "Website Development": "/startups/website-development"}}></Breadcrumb></div>
                <WebDevComponent></WebDevComponent>
            </article>
        </>
    );
}