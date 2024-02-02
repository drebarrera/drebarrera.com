import UIIcon from "components/startups/icons/ui";

import Specs from "components/startups/specs";

import WebApp from "components/startups/topics/website-development/web-app";

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
            <img src="/images/startups/undraw/undraw_website_builder_re_ii6e.svg"/>
            <p className={styles.contentDescription}>Developing a website is a fundamental step for any commercial startup, serving as its digital storefront and primary point of interaction with customers. It establishes credibility, professionalism, and brand identity, enabling global visibility and accessibility around the clock. By providing valuable content, seamless user experiences, and avenues for communication, the website drives brand awareness, organic growth, and revenue generation. Additionally, the website can function as an integral part of the product, delivering content, information, or services to users. As the cornerstone of brand development, website creation sets the stage for establishing a robust online presence and fostering long-term customer relationships.</p>
            <p className={styles.contentDescription}>Ready to hire a website developer? &rarr; <a href="/startups/hire">Here's What You Need To Know</a></p>
            <h5>Which Web Development Approach Should I Choose?</h5>
            <p>In website development, two foundational approaches stand out: Low-Code Content Management System (CMS) websites and framework-based Web Applications. Low-code CMS platforms offer streamlined development through intuitive interfaces and pre-built templates, ideal for rapid deployment without extensive coding knowledge. On the other hand, framework-based web applications provide greater control and customization but require meticulous coding for tailored functionality and scalability. The choice between these approaches depends on project complexity, scalability needs, and long-term goals, guiding businesses towards the most suitable digital path.</p>
            <div className={styles.vs}>
                <h6 style={{"textAlign": "center", "fontWeight": "500"}}>CMS vs Web Applications</h6>
                <Specs details={
                    {
                        "name": "Content Management System (CMS)",
                        "description": "A CMS offers a simple way to create brand and blog content, prioritizing content over data. Popular CMS platforms include WordPress, Wix, and Shopify.",
                        "pros": ["Ease of Use",
                            "Low-Code Content Creation",
                            "Quick Deployment",
                            "Lower Development Cost",
                            "Customizable Templates",
                            "Third-Party Plugins and Tools",
                            "Built-In SEO and Analytics",
                            "Non-Technical Design Features",
                            "Easily Scalable",
                            "Built-In Admin Dashboard"
                        ],
                        "cons": ["Limited Customization Options",
                            "Dependency on Platform Updates",
                            "Limited Management Features",
                            "Efficiency Loss When Scaling",
                            "Limited Control Over Backend",
                            "Third-Party Vulnerabilities",
                            "Data Security Dependencies",
                            "Requires Low Project Complexity",
                            "Focuses On Content Over Data"
                        ]
                    }
                }></Specs>
                <Specs details={
                    {
                        "name": "Web Application",
                        "description": "A web app allows for infrastructure, data, and efficiency prioritization over simplicity. Popular web app frameworks include Next.js, React.js, and Angular.js.",
                        "pros": ["Highly Customizabile",
                            "Granular Management",
                            "Control Over Backend Logic",
                            "Optimization Opportunities",
                            "Scalable Architecture Options",
                            "Configurable Infrastructure",
                            "Data-Oriented Telemetry Options",
                            "Enhanceable Security Features",
                            "Full Product Visibility",
                            "Third-Party Integration Options"
                        ],
                        "cons": [
                            "Requires High Degree of Coding",
                            "Higher Development Costs",
                            "Steeper Developer Learning Curve",
                            "Requires Specialized Talent",
                            "Higher Project Complexity",
                            "Developer-Reliant Security",
                            "Developer-Reliant Efficiency",
                            "Requires SEO and Analytics Efforts",
                            "More Documentation Required"
                        ]
                    }
                }></Specs>
            </div>
            <WebApp></WebApp>
        </div>
    </section>);
}