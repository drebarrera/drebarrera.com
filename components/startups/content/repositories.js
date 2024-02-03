import GitHubIcon from "components/startups/icons/repositories/github";
import GitLabIcon from "components/startups/icons/repositories/gitlab";
import BitBucketIcon from "components/startups/icons/repositories/bitbucket";

import React from "react";

const repositories = {
    "highlight": {
        "name": "GitHub",
        "info": "Known For: Extensive Community",
        "description": "GitHub, a GitLab abstraction, offers features like issue tracking, project management tools, and integrations flexible options.",
        "pros": [
            "Large Active Community",
            "Intuitive Workflows",
            "Third-Party Integration",
            "Open-Source Project Support",
            "Powerful Collaboration Features",
            "Robust Documentation",
            "Project Management Tools",
            "Project Boards & Wikis",
            "CI/CD Tools",
            "Docker Container Registry",
            "Kubernetes Cluster Integration",
            "Highly reliable and Scalable",
            "Advanced Security Features",
        ],
        "cons": [
            "Free Account Limitations",
            "Proprietary Tool Dependency",
            "Less Self-Hosting Options",
            "Occasional Service Outages",
            "Less Built-In CI/CD Emphasis",
            "Limited Customization Options"
        ],
        "icon": <GitHubIcon></GitHubIcon>,
        "href": "https://github.com"
    },
    "others": [
        {
            "name": "GitLab",
            "info": "Known For: Open-Source",
            "description": "GitLab provides an open-source alternative to GitHub with similar features, including issue tracking, continuous integration, and version control.",
            "pros": [
                "Integrated CI/CD Pipelines",
                "Built-In Project Management",
                "Docker Container Registry",
                "Kubernetes Cluster Integration",
                "Cloud Hosting Option",
                "Self-Hosted Option",
                "Flexible Workflow Automation",
                "Permission Management",
                "Powerful Collaboration Features",
                "Comprehensive Documentation",
                "Community Support"
            ],
            "cons": [
                "Steep Learning Curve",
                "Advanced Feature Complexity",
                "Resource-Intensive Self-Hosting",
                "Large Project Performance Issues",
                "Limited Thirdy-Party Integration",
                "Update Dependency"
            ],
            "icon": <GitLabIcon></GitLabIcon>,
            "href": "https://gitlab.com"
        },
        {
            "name": "Atlassian Bitbucket",
            "info": "Known For: Atlassian Integrations",
            "description": "Bitbucket integrates seamlessly with other Atlassian products, supporting both Git and Mercurial version control and offering free private repositories.",
            "pros": [
                "Atlassian Tool Integrations",
                "Free Feature Flexibility",
                "Permission Management",
                "Git Version Control",
                "Mercurial Version Control",
                "Code Review Tools",
                "CI/CD Platforms Integrations",
                "Project Management Features",
                "Third-Party Integrations",
                "Custom REST API Automations",
                "Hosting Method Flexibility",
            ],
            "cons": [
                "Less Intuitive User Interface",
                "Slower Performance",
                "Less Active Community",
                "Limited Integration Options",
                "Less Open-Source Emphasis",
                "Less Comprehensive Resources"
            ],
            "icon": <BitBucketIcon></BitBucketIcon>,
            "href": "https://bitbucket.orgc"
        }
    ],
    "mentions": [
        {
            "name": "AWS CodeCommit",
            "info": "Known For: AWS Integrations",
            "href": "https://aws.amazon.com/codecommit/",
            "mention": true,
        },
        {
            "name": "Microsoft Azure Repos",
            "info": "Known For: Azure Integrations",
            "href": "https://azure.microsoft.com/en-us/products/devops/repos",
            "mention": true,
        },
        {
            "name": "SourceForge",
            "info": "Known For: Open-Source Projects",
            "href": "https://sourceforge.net",
            "mention": true,
        },
        {
            "name": "Google Cloud Source Repositories",
            "info": "Known For: Google Cloud Integrations",
            "href": "https://source.cloud.google.com",
            "mention": true,
        }
    ]
};

export default repositories;