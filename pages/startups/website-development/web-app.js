import Head from "next/head";
import Header from "/components/header";

import UIIcon from "/components/startups/icons/ui";

import Breadcrumb from "/components/breadcrumb";
import WebAppComponent from "/components/startups/topics/website-development/web-app";

import styles from "/styles/startups/index.module.css";

export default function WebApp() {
    return (
        <>
            <Head>
                <title>Andrés Barrera | Website Development</title>
                <meta name="description" content="How to program a web application and choose a framework" />
            </Head>
            <Header></Header>
            <article className={`${styles.frame} ${styles.phasei}`}>
                <div className={styles.breadcrumb}><Breadcrumb breadcrumbArray={{"Andrés Barrera": "/", "Startup Center": "/startups", "Website Development": "/startups/website-development", "Website Applications": "/startups/website-development/web-app"}}></Breadcrumb></div>
                <section className={styles.techItem} style={{"--itemcolor":"#FF2323"}}>
                    <div className={styles.title}>
                        <div className={`${styles.node}`} style={{"--gradientStart": "#FF2323", "--gradientEnd": "#FF844F"}}></div>
                        <div className={styles.icon}>
                            <UIIcon>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{"stopColor": "#FF2323", "stopOpacity": "1"}} />
                                    <stop offset="100%" style={{"stopColor": "#FF844F", "stopOpacity": "1"}} />
                                </linearGradient>
                            </UIIcon>
                        </div>
                        <h4>Your Website - The Cornerstone of Your Online Presence</h4>
                    </div>
                    <div className={styles.content} style={{"marginTop": "-90px"}}>
                        <WebAppComponent></WebAppComponent>
                        </div>
                </section>
            </article>
        </>
    );
}