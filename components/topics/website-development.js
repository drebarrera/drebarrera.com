import UIIcon from "components/startups/icons/ui";

import styles from "/styles/startups/index.module.css";

export default function WebDev() {
    return (<section class={styles.techItem} style={{"--itemcolor":"#FF2323"}}>
        <div class={styles.title}>
            <div class={`${styles.node}`} style={{"--gradientStart": "#FF2323", "--gradientEnd": "#FF844F"}}></div>
            <div class={styles.icon}>
                <UIIcon>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{"stop-color": "#FF2323", "stop-opacity": "1"}} />
                        <stop offset="100%" style={{"stop-color": "#FF844F", "stop-opacity": "1"}} />
                    </linearGradient>
                </UIIcon>
            </div>
            <h4>Your Website - The Cornerstone of Your Online Presence</h4>
        </div>
        <div class={styles.content}>
            <p class={styles.contentDescription}>Developing a website is a fundamental step for any commercial startup, serving as its digital storefront and primary point of interaction with customers. It establishes credibility, professionalism, and brand identity, enabling global visibility and accessibility around the clock. By providing valuable content, seamless user experiences, and avenues for communication, the website drives brand awareness, organic growth, and revenue generation. Additionally, the website can function as an integral part of the product, delivering content, information, or services to users. As the cornerstone of brand development, website creation sets the stage for establishing a robust online presence and fostering long-term customer relationships.</p>
            <p class={styles.contentDescription}>Ready to hire a website developer? &rarr; <a href="/startups/hire">Here's What You Need To Know</a></p>
            <h5>Your Website Foundation - Which Platform Should I Choose?</h5>
            <p>In website development, two foundational approaches stand out: Low-Code Content Management System (CMS) websites and framework-based Web Applications. Low-code CMS platforms offer streamlined development through intuitive interfaces and pre-built templates, ideal for rapid deployment without extensive coding knowledge. On the other hand, framework-based web applications provide greater control and customization but require meticulous coding for tailored functionality and scalability. The choice between these approaches depends on project complexity, scalability needs, and long-term goals, guiding businesses towards the most suitable digital path.</p>
            <h6>CMS vs Web Applications</h6>
        </div>
    </section>);
}