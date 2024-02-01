import UIIcon from "components/startups/icons/ui";

import Specs from "components/startups/specs";

import FrameworkTrends from '/components/startups/google/frameworks';

import frameworks from "components/startups/content/frameworks";

import styles from "/styles/startups/index.module.css";

export default function WebDev() {
    return (<section className={styles.techItem} style={{"--itemcolor":"#FF2323"}}>
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
        <div className={styles.content}>
            <p className={styles.contentDescription}>Developing a website is a fundamental step for any commercial startup, serving as its digital storefront and primary point of interaction with customers. It establishes credibility, professionalism, and brand identity, enabling global visibility and accessibility around the clock. By providing valuable content, seamless user experiences, and avenues for communication, the website drives brand awareness, organic growth, and revenue generation. Additionally, the website can function as an integral part of the product, delivering content, information, or services to users. As the cornerstone of brand development, website creation sets the stage for establishing a robust online presence and fostering long-term customer relationships.</p>
            <p className={styles.contentDescription}>Ready to hire a website developer? &rarr; <a href="/startups/hire">Here's What You Need To Know</a></p>
            <h5>Your Website Foundation - Which Platform Should I Choose?</h5>
            <p>In website development, two foundational approaches stand out: Low-Code Content Management System (CMS) websites and framework-based Web Applications. Low-code CMS platforms offer streamlined development through intuitive interfaces and pre-built templates, ideal for rapid deployment without extensive coding knowledge. On the other hand, framework-based web applications provide greater control and customization but require meticulous coding for tailored functionality and scalability. The choice between these approaches depends on project complexity, scalability needs, and long-term goals, guiding businesses towards the most suitable digital path.</p>
            <h6 style={{"textAlign": "center", "fontWeight": "500"}}>CMS vs Web Applications</h6>
            <div className={styles.vs}>
                <Specs details={
                    {
                        "name": "Content Management System (CMS)",
                        "description": "A web app is an interactive application accessed through a web browser, offering dynamic functionalities and user interactions.",
                        "pros": ["Low-Code Options"],
                        "cons": ["Less Configuration", "Relies on Plugins"]
                    }
                }></Specs>
                <Specs details={
                    {
                        "name": "Web Application",
                        "description": "A web app is an interactive application accessed through a web browser, offering dynamic functionalities and user interactions.",
                        "pros": ["test"],
                        "cons": ["test2"]
                    }
                }></Specs>
            </div>
            <h5>Building a Web Application</h5>
            <p>A web app is an interactive application with complex functionalities, while a CMS website focuses on content management and publishing. Web apps perform specific tasks, while CMS websites are designed for content dissemination and management.A web app is an interactive application with complex functionalities, while a CMS website focuses on content management and publishing. Web apps perform specific tasks, while CMS websites are designed for content dissemination and management.</p>
            <h6>Choosing a Framework</h6>
            <p>A web app is an interactive application with complex functionalities, while a CMS website focuses on content management and publishing. Web apps perform specific tasks, while CMS websites are designed for content dissemination and management.</p>
            <h6 style={{"textAlign": "center", "fontWeight": "500", "marginTop": "20px"}}>JavaScript Framework Search Popularity Rankings</h6>
            <FrameworkTrends cssStyles={ styles }></FrameworkTrends>
            <Specs details={frameworks.highlight}></Specs>
            <div className={styles.vs}>
            {
                Object.entries(frameworks.others).map(([i, frD], index) => {
                    return (
                        <Specs details={frD}></Specs>
                    )
                })
            }
            </div>
        </div>
    </section>);
}