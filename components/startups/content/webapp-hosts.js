import VercelIcon from "components/startups/icons/webapp-hosts/vercel";
import NetlifyIcon from "components/startups/icons/webapp-hosts/netlify";
import HerokuIcon from "components/startups/icons/webapp-hosts/heroku";
import DigitalOceanIcon from "components/startups/icons/webapp-hosts/digital-ocean";
import AWSAmplifyIcon from "components/startups/icons/webapp-hosts/aws-amplify";

import React from "react";

const webappHosts = {
    "highlight": {
        "name": "Vercel",
        "description": "Vercel is known for its hosting platform's seamless integration and deployment workflows, ideal for modern web applications and static sites.",
        "pros": [
            "Out-Of-The-Box Production Features",
            "Server-Side Rendering",
            "Faster Initial Loads",
            "Static Site Generation Support",
            "React Ecosystem Integration",
            "Automatic Code Splitting",
            "SEO-Friendly Features",
            "Simplified Routing and Navigation",
            "Hot Reloading",
            "Production-Level Optimizations"
        ],
        "cons": [
            "React.js Learning Curve",
            "Limited Flexibility",
            "React Ecosystem Dependence",
            "Small Project Overhead Potential",
            "Large Project Complexity Potential",
            "Limited Community Support"
        ],
        "icon": <VercelIcon></VercelIcon>,
        "href": "https://www.vercel.com"
    },
    "others": [
        {
            "name": "Netlify",
            "description": "Netlify is recognized for its robust static site hosting and continuous deployment capabilities, making it a top choice for developers building JAMstack apps.",
            "pros": [
                "Component-Based Development",
                "Virtual DOM for Efficient Rendering",
                "Active Community Support",
                "Abundant Libraries and Tools",
                "Quick Development Features",
                "Efficient State Management",
                "Reactive Data Binding",
                "Strong Support from Facebook"
            ],
            "cons": [
                "Steep Learning Curve",
                "Complex State Management",
                "JSX Syntax Unfamiliarity",
                "Production Tooling Required",
                "Scaling Vulnerabilities",
                "Third-Party Configuration Required"
            ],
            "icon": <NetlifyIcon></NetlifyIcon>,
            "href": "https://www.netlify.com"
        },
        {
            "name": "Heroku",
            "description": "Renowned for its user-friendly interface and scalability, Heroku offers a reliable solution for deploying and managing web applications and APIs.",
            "pros": [
                "Simple to Learn",
                "High Scalability",
                "Active Community Support",
                "Ease of Integration",
                "Component-Based Development",
                "Two-Way Reactive Data Binding",
                "Routing and State Management",
                "Debugging Devtools"
            ],
            "cons": [
                "Smaller Library Ecosystem",
                "Production Tooling Required",
                "Not Optimized for Complexity",
                "Less Server Rendering Support",
                "Less Tooling Available",
                "Niched Vue.js Developer Market"
            ],
            "icon": <HerokuIcon></HerokuIcon>,
            "href": "https://www.heroku.com"
        },
        {
            "name": "DigitalOcean",
            "description": "DigitalOcean App Hosting is notable for its developer-friendly approach to deploying, managing, and scaling modern web applications and APIs.",
            "pros": [
                "Robust Structure and Conventions",
                "Comprehensive Documentation",
                "Dependency Injection",
                "Two-Way Reactive Data Binding",
                "Powerful CLI Tooling",
                "Built-In TypeScript Support",
                "Large Library Ecosystem",
                "Mature & Community-Backed"
            ],
            "cons": [
                "Google Support Ended in 2022",
                "Steep Learning Curve",
                "Verbose Syntax",
                "Scaling Complexity",
                "High Performance Overhead",
                "Less Flexibility",
            ],
            "icon": <DigitalOceanIcon></DigitalOceanIcon>,
            "href": "https://www.digitalocean.com"
        },
        {
            "name": "AWS Amplify",
            "description": "AWS Amplify is known for its suite of tools and services for building full-stack serverless applications, seamlessly integrating with other AWS services.",
            "pros": [
                "Minimalist Framework for Node.js",
                "Highly Customizable",
                "Middleware Support",
                "Lightweight and Fast",
                "Extensive Library Ecosystem",
                "Active Community Support",
                "Sync and Async Programming",
                "Lower Learning Curve",
            ],
            "cons": [
                "Not Suitable for Scale",
                "Lacks Authentication Support",
                "Manual Configuration Required",
                "No Structue Enforcement",
                "Increasing Routing Complexity",
                "Challenging Debugging"
            ],
            "icon": <AWSAmplifyIcon></AWSAmplifyIcon>,
            "href": "https://aws.amazon.com/amplify/"
        }
    ],
    "mentions": [
        {
            "name": "Firebase Hosting",
            "info": "Known For: Firebase Integrations",
            "href": "https://www.djangoproject.com",
            "mention": true,
        },
        {
            "name": "GitHub Pages",
            "info": "Known For: Static-Site Hosting",
            "href": "https://rubyonrails.org",
            "mention": true,
        },
        {
            "name": "Cloudflare Pages",
            "info": "Known For: Static-Site Hosting",
            "href": "https://spring.io",
            "mention": true,
        },
        {
            "name": "GitLab Pages",
            "info": "Known For: Static-Site Hosting",
            "href": "https://laravel.com",
            "mention": true,
        }
    ]
};

export default webappHosts;