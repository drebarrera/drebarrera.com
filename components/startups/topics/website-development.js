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
            <h5>Building a Web Application</h5>
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
            <p>
                Creating a web application offers a multitude of benefits, particularly when tackling complex data-driven challenges. With a web application, developers harness highly customizable code to tailor every aspect according to specific requirements, enabling granular management and control over backend logic. This level of customization presents optimization opportunities, ensuring scalable architecture options and configurable infrastructure to address evolving needs.
                <br></br><br></br>
                Moreover, web applications can provide data-oriented telemetry options, offering insights into user behavior and performance metrics critical for solving intricate problems. Greater control over security and vulnerabilities enhances protection, while seamless integration with third-party services augments functionality. However, building a web application from scratch entails higher development costs, a steep learning curve for developers, and increased project complexity. It's essential for developers to be well-versed in relevant technologies and prioritize process efficiency, cybersecurity, and documentation. While developing a web application is more complex than creating a CMS site, the weight this method carries in solving complex data-driven problems is undeniable. Thus, creating a web application is recommended for configurable and scalable projects where users interface with data and require custom features outside of normal brand content.
            </p>
            <h6>Choosing a Framework</h6>
            <p>The first step of web application development is to choose a web framework. A web framework serves as the backbone of web application development, providing a structured set of tools and libraries to streamline the creation process. It abstracts common tasks, simplifies coding complexities, and promotes best practices, ultimately accelerating development and ensuring code maintainability.</p>
            <FrameworkTrends cssStyles={ styles } title={"JavaScript Framework Search Popularity Rankings"}></FrameworkTrends>
            <p>Choosing the right web framework entails assessing project requirements, developer expertise, and long-term support. It's crucial to select a framework that aligns with the project's architecture, scalability needs, and desired features, while also considering the skill set of the development team. Opting for a widely-used framework with extensive community support enhances troubleshooting resources and facilitates access to low-cost development assistance, ensuring smoother project execution and longevity.</p>
            <h6 style={{"fontWeight":"500", "textAlign": "center"}}>Choice Framework</h6>
            <Specs details={frameworks.highlight}></Specs>
            <div className={styles.vs}>
            <h6 style={{"fontWeight":"500", "textAlign": "center"}}>Other Popular Frameworks</h6>
            {
                Object.entries(frameworks.others).map(([i, frD], index) => {
                    return (
                        <Specs key={index} details={frD}></Specs>
                    )
                })
            }
            <h6 style={{"fontWeight":"500", "textAlign": "center"}}>Framework Honorable Mentions</h6>
            {
                Object.entries(frameworks.mentions).map(([i, frD], index) => {
                    return (
                        <Specs key={index} details={frD}></Specs>
                    )
                })
            }
            <h6>Does Framework Language Matter?</h6>
            <p>As seen above, the popularity of JavaScript for web development stems from several factors. Firstly, JavaScript is the language of the web, supported by all modern browsers, making it a ubiquitous choice for client-side scripting. Additionally, JavaScript's versatility allows developers to build interactive and dynamic web experiences, enhancing user engagement. However, choosing a framework operating in another language like Django (using Python) or Ruby on Rails (using Ruby) might be preferred for specific projects due to the strengths and ecosystems of those languages. For example, Django offers robust built-in features for rapid development and follows the "batteries-included" philosophy, while Ruby on Rails emphasizes convention over configuration, promoting developer productivity and code maintainability. Depending on project requirements, such frameworks may offer better solutions for certain use cases or align more closely with a team's expertise and preferences.</p>
            </div>
        </div>
    </section>);
}