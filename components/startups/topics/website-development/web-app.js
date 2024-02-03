import Specs from "components/startups/specs";

import FrameworkTrends from '/components/startups/google/frameworks';

import frameworks from "components/startups/content/frameworks";

import styles from "/styles/startups/index.module.css";

export default function WebApp() {
    return (<>
            <div className={styles.anchor} id="webAppAnchor"></div>
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
                            "Third-Party Integration Options",
                            "Free & Open-Source"
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
                            "More Documentation Required",
                            "Preparation Needed for Scaling"
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
            </div>
            <h6>Does Framework Language Matter?</h6>
            <img src="/images/startups/undraw/undraw_static_website_re_x70h.svg"/>
            <p>As seen above, the popularity of JavaScript for web development stems from several factors. Firstly, JavaScript is the language of the web, supported by all modern browsers, making it a ubiquitous choice for client-side scripting. Additionally, JavaScript's versatility allows developers to build interactive and dynamic web experiences, enhancing user engagement. However, choosing a framework operating in another language like Django (using Python) or Ruby on Rails (using Ruby) might be preferred for specific projects due to the strengths and ecosystems of those languages. For example, Django offers robust built-in features for rapid development and follows the "batteries-included" philosophy, while Ruby on Rails emphasizes convention over configuration, promoting developer productivity and code maintainability. Depending on project requirements, such frameworks may offer better solutions for certain use cases or align more closely with a team's expertise and preferences.</p>
            <h6>Next Steps - Developing the Application</h6>
            <p>Once a foundational framework has been chosen, the website application development process begins with designing the user interface (UI) using prototyping tools to visualize the layout and user interactions effectively. This is typically the job of a dedicated designer rather than programmer and is explained in the next section. Once the UI is finalized, programming the UI elements and integrating external third-party services for authentication and data exchange becomes crucial. In the backend, databases and content providers are implemented, prioritizing robust security measures to safeguard sensitive data. Finally, the completed website is deployed to a hosting service, leveraging repository services like Github or Gitlab for version control and collaboration, ensuring seamless deployment and ongoing maintenance of the application.</p>
        </>
    );
}