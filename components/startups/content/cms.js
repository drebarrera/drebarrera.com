import WordPressIcon from "components/startups/icons/cms/wordpress";
import ShopifyIcon from "components/startups/icons/cms/shopify";
import WixIcon from "components/startups/icons/cms/wix";
import SquareSpaceIcon from "components/startups/icons/cms/squarespace";
import DrupalIcon from "components/startups/icons/cms/drupal";

import React from "react";

const cms = {
    "highlight": {
        "name": "WordPress",
        "info": "Language: PHP, JavaScript, & MySQL / Low-Code Options",
        "description": "WordPress, the leading CMS, is known for its user-friendly interface, extensive plugins, and customizable features.",
        "pros": [
            "Extensive Plugin Ecosystem",
            "User-Friendly Interface",
            "Large Community Support",
            "Flexible and Customizable",
            "SEO-Friendly",
            "Open Source",
            "Regular Platform Updates",
            "High Scalability",
            "Blog Post Management",
            "Highly Customizable",
            "Free and Paid Options"
        ],
        "cons": [
            "Reliant on Platform Updates",
            "Heavy Plugins Slow Performance",
            "Template Dependency",
            "Customization Can Be Complex",
            "Maintenance Overhead",
            "Third-Party Plug-In Vulnerabilities"
        ],
        "icon": <WordPressIcon></WordPressIcon>,
        "href": "https://www.wordpress.org"
    },
    "others": [
        {
            "name": "Shopify",
            "info": "Language: HTML, JavaScript, & Liquid",
            "description": "Shopify, an e-commerce CMS, stands out for its user-friendly interface, robust features, and extensive app ecosystem.",
            "pros": [
                "Simple E-Commerce Setup",
                "Professional Storefront Templates",
                "Integrated Payment Gateways",
                "Scalable for Growing Businesses",
                "Robust App Store for Functionality",
                "24/7 Customer Support",
                "Built-in SEO Features",
                "Mobile-Responsive Design",
            ],
            "cons": [
                "Transaction Fees on Sales",
                "High Subscription Costs",
                "Customization Limitations",
                "Dependency on App Integrations",
                "Learning Curve for Customization",
                "Closed Source"
            ],
            "icon": <ShopifyIcon></ShopifyIcon>,
            "href": "https://www.shopify.com"
        },
        {
            "name": "Wix",
            "info": "No-Code",
            "description": "Wix, a popular website builder, offers intuitive drag-and-drop functionality and templating options.",
            "pros": [
                "Drag-and-Drop Website Builder",
                "No Coding Skills Required",
                "Variety of Templates and Designs",
                "App Market for Custom Function",
                "Hosting Included",
                "User-Friendly Interface",
                "24/7 Customer Support",
                "SEO Tools Built-In",
            ],
            "cons": [
                "Restricted Customization",
                "Template Restriction",
                "Ads on Free Plan",
                "Higher Subscription Costs",
                "Data Portability Issues",
                "Less SEO Optimization"
            ],
            "icon": <WixIcon></WixIcon>,
            "href": "https://www.wix.com"
        },
        {
            "name": "SquareSpace",
            "info": "No-Code",
            "description": "Squarespace provides users with elegant templates, intuitive design tools, and seamless integrations.",
            "pros": [
                "Beautiful Templates and Designs",
                "Intuitive Drag-and-Drop Interface",
                "Responsive Customer Support",
                "Built-In SEO Features",
                "Integrated Analytics",
                "E-commerce Functionality",
                "Mobile Editing App",
                "Reliable Hosting",
            ],
            "cons": [
                "Restricted Customization",
                "Higher Cost for Advanced Features",
                "Template Limitations",
                "Less Developer-Friendly",
                "Data Export Limitations",
                "Less Plug-Ins and Integration"
            ],
            "icon": <SquareSpaceIcon></SquareSpaceIcon>,
            "href": "https://www.squarespace.com"
        },
        {
            "name": "Drupal",
            "info": "Language: PHP, JavaScript, & MySQL",
            "description": "Drupal is known for its flexibility and scalability with its open-source platform and extensive module ecosystem.",
            "pros": [
                "Blog Post Management",
                "Highly Customizable",
                "Scalable for Enterprise",
                "Active Community Support",
                "Security-Focused",
                "Flexible Taxonomy System",
                "Extensive Module Library",
                "Open-Source"
            ],
            "cons": [
                "Not Suitable for Scale",
                "Lacks Authentication Support",
                "Manual Configuration Required",
                "No Structue Enforcement",
                "Increasing Routing Complexity",
                "Challenging Debugging"
            ],
            "icon": <DrupalIcon></DrupalIcon>,
            "href": "https://www.drupal.org"
        }
    ],
    "mentions": [
        {
            "name": "Joomla",
            "info": "Language: PHP, JavaScript, & MySQL",
            "href": "https://www.joomla.org",
            "mention": true,
        },
        {
            "name": "Adobe Commerce (Magento)",
            "info": "Language: PHP, JavaScript, & MySQL",
            "href": "https://business.adobe.com/products/magento/magento-commerce.htmlc",
            "mention": true,
        },
        {
            "name": "Ghost",
            "info": "Language: HTML & JavaScript",
            "href": "https://ghost.org",
            "mention": true,
        },
        {
            "name": "Contentful",
            "info": "Language: Connect to a web framework.",
            "href": "https://www.contentful.com",
            "mention": true,
        }
    ]
};

export default cms;