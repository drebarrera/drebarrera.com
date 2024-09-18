import ReactIcon from "/components/startups/icons/frameworks/react";
import NextIcon from "/components/startups/icons/frameworks/next";
import VueIcon from "/components/startups/icons/frameworks/vue";
import AngularIcon from "/components/startups/icons/frameworks/angular";
import ExpressIcon from "/components/startups/icons/frameworks/express";

import React from "react";

const frameworks = {
    "highlight": {
        "name": "Next.js",
        "info": "Language: JavaScript",
        "description": "Next.js is a React.js derivative, simplifying React development by integrating production-level features and optimizing developer efficiency for web apps.",
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
        "icon": <NextIcon></NextIcon>,
        "href": "https://nextjs.org"
    },
    "others": [
        {
            "name": "React.js",
            "info": "Language: JavaScript",
            "description": "React.js is the most popular framework due to its efficient component-based architecture and extensive ecosystem",
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
            "icon": <ReactIcon></ReactIcon>,
            "href": "https://react.dev"
        },
        {
            "name": "Vue.js",
            "info": "Language: JavaScript",
            "description": "Vue.js stands out as a simple JavaScript framework, prized for its ease of integration, flexibility, and intuitive syntax.",
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
            "icon": <VueIcon></VueIcon>,
            "href": "https://vuejs.org"
        },
        {
            "name": "Angular.js",
            "info": "Language: JavaScript",
            "description": "Angular.js is a mature JavaScript framework renowned for its comprehensive features, robust architecture, and extensive community.",
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
            "icon": <AngularIcon></AngularIcon>,
            "href": "https://vuejs.org"
        },
        {
            "name": "Express.js",
            "info": "Language: JavaScript",
            "description": "Express.js stands out as a lightweight framework, ideal for versatile middleware-facing applications, telemetry, and streamlined development efforts.",
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
            "icon": <ExpressIcon></ExpressIcon>,
            "href": "https://vuejs.org"
        }
    ],
    "mentions": [
        {
            "name": "Django",
            "info": "Language: Python",
            "href": "https://www.djangoproject.com",
            "mention": true,
        },
        {
            "name": "Ruby on Rails",
            "info": "Language: Ruby",
            "href": "https://rubyonrails.org",
            "mention": true,
        },
        {
            "name": "Spring Boot",
            "info": "Language: Java",
            "href": "https://spring.io",
            "mention": true,
        },
        {
            "name": "Laravel",
            "info": "Language: PHP",
            "href": "https://laravel.com",
            "mention": true,
        },
        {
            "name": "Ember.js",
            "info": "Language: JavaScript",
            "href": "https://emberjs.com",
            "mention": true,
        },
        {
            "name": "Svelte",
            "info": "Language: JavaScript",
            "href": "https://svelte.dev",
            "mention": true,
        }
    ]
};

export default frameworks;