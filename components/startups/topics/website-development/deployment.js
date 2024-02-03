import Specs from "components/startups/specs";

import repositories from "components/startups/content/repositories";

import PageIcon from "components/startups/icons/page";

import styles from "/styles/startups/index.module.css";

export default function Hosting() {
    return (<>
            <div className={styles.anchor} id="deploymentAnchor"></div>
            <h5>Depoloying and Hosting Your Website
                <span className={styles.buttons}>
                    Next &rarr; 
                    <a href="#webAppAnchor">Design & SEO</a>
                    |
                    <a href="/startups/website-development/cms-site" target="_blank">
                        <PageIcon>
                            <linearGradient id="pageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{"stopColor": "#FF2323", "stopOpacity": "1"}} />
                                <stop offset="100%" style={{"stopColor": "#FF844F", "stopOpacity": "1"}} />
                            </linearGradient>
                        </PageIcon>
                    </a>
                </span>
            </h5>
            <img src="/images/startups/undraw/undraw_proud_coder_re_exuy.svg"/>
            <p>
                Website deployment involves several key steps to get your site live on the internet. First, you need a repository, such as GitHub or GitLab, to store your website's source code and track changes. Using version control systems like Git allows for collaboration and easy management of your codebase. Once your code is ready, you need a domain name, which serves as the address for your website. Domains are registered through domain registrars like GoDaddy or Namecheap.
                <br></br><br></br>
                Next, you'll need hosting services provided by companies like AWS or Bluehost to store and serve your website's files to visitors. Hosting a website is like organizing digital files in a virtual filing cabinet. Once your files are hosted, visitors can access your site by typing in its domain name.
                <br></br><br></br>
                Keeping your website current and secure is vital. This involves regular maintenance to ensure smooth operation and promptly address any issues. By employing effective tools and processes, deploying a website becomes a manageable task, enabling you to concentrate on delivering valuable content to your audience.
            </p>
            <h6>Deployment Step 1 - Choosing a Repository Host</h6>
            <img src="/images/startups/undraw/undraw_version_control_re_mg66.svg"/>
            <p>
                A code repository serves as a central hub where developers store and manage their code during both development and deployment stages. It's like a digital warehouse for software projects, housing all the code files, resources, and documentation. Repositories are often integrated with tools like Git, a popular version control system which tracks changes made to files over time and allows developers to collaborate, revert to previous versions, and maintain a coherent development history.
                <br></br><br></br>
                Platforms like GitHub, GitLab, and Bitbucket are repository hosts that offer various tools and services to streamline the software development process. These platforms provide features such as issue tracking, project management, code review, and collaboration tools. When choosing a repository host, it is important to assess the features that they provide, subscription costs, and the scale of the project at hand. Once a repository host has been chosen, it typically acts as the codebase host for all software development projects.
            </p>
            <h6 style={{"fontWeight":"500", "textAlign": "center"}}>Choice Repository Host</h6>
            <Specs details={repositories.highlight}></Specs>
            <div className={styles.vs}>
            <h6 style={{"fontWeight":"500", "textAlign": "center"}}>Other Popular Repository Hosts</h6>
            {
                Object.entries(repositories.others).map(([i, frD], index) => {
                    return (
                        <Specs key={index} details={frD}></Specs>
                    )
                })
            }
            <h6 style={{"fontWeight":"500", "textAlign": "center"}}>Repository Host Honorable Mentions</h6>
            {
                Object.entries(repositories.mentions).map(([i, frD], index) => {
                    return (
                        <Specs key={index} details={frD}></Specs>
                    )
                })
            }
            </div>
            <h6>Deployment Step 2 - Choosing a Domain Name</h6>
            <h6>Deployment Step 3 - Choosing a Website Host</h6>
            <h6>Deployment Step 4 - Time to Deploy!</h6>
        </>
    );
}