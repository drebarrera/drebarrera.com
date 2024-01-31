import UIIcon from "components/startups/icons/ui";
import PaletteIcon from "components/startups/icons/palette";
import EmailIcon from "components/startups/icons/email";
import ApplicationIcon from "components/startups/icons/application";
import AppIcon from "components/startups/icons/app";
import UAuthIcon from "components/startups/icons/uauth";
import AnalyticsIcon from "components/startups/icons/analytics";
import MaintenanceIcon from "components/startups/icons/maintenance";

import React from "react"

var tech = {
    "Web": {
        "textcontent": ["An","to elevate their brand online. Building a commercial online platform with captivating visuals, engaging content, and user-friendly navigation showcases authenticity and proves professionalism."],
        "linktext": ["Engaging Website"],
        "linkhref": ["/website"],
        "svg": <UIIcon></UIIcon>,
        "color": "#FF2323"
    },
    "Media": {
        "textcontent": ["Competitive ","and","to build brand recognition. Delivering strategic media content and implementing internet search engine optimization practices can boost visibility and drive organic traffic."],
        "linktext": ["Media Design", "SEO"],
        "linkhref": ["/media", "/seo"],
        "svg": <PaletteIcon></PaletteIcon>,
        "color": "#FFAB09"
    },
    "Application": {
        "textcontent": ["A","to interface with users, engineers, or stakeholders. By leveraging an application to meet customer or internal needs, startups can streamline operations, enhance productivity, and create innovative products."],
        "linktext": ["Dedicated Application"],
        "linkhref": ["/application"],
        "svg": <ApplicationIcon></ApplicationIcon>,
        "color": "#FF8A00"
    },
    "Email": {
        "textcontent": ["","and","to keep their brand relevant. Utilizing targeted email marketing campaigns and communication channels can nurture customer relationships, drive conversions, and keep your brand top-of-mind."],
        "linktext": ["Email Hosting", "Marketing Propagation"],
        "linkhref": ["/email","marketing"],
        "svg": <EmailIcon></EmailIcon>,
        "color": "#1DCA00"
    },
    "Mobile": {
        "textcontent": ["A","to empower users anywhere. Developing a user-friendly mobile application with intuitive interface design and personalized experiences provides seamless access and supports product engagement and adoption."],
        "linktext": ["Mobile Application"],
        "linkhref": ["/app"],
        "svg": <AppIcon></AppIcon>,
        "color": "#00BAC6"
    },
    "Data": {
        "textcontent": ["Secure","and","to ensure user trust. Establishing robust infrastructure, user-friendly interfaces, and PCI-compliant payment processing safeguards user trust and prevents data security issues."],
        "linktext": ["User Authentication", "Data Storage"],
        "linkhref": ["/userauth", "/data"],
        "svg": <UAuthIcon></UAuthIcon>,
        "color": "#1C85FF"
    },
    "Analytics": {
        "textcontent": ["","and","to demonstrate growth. Utilizing comprehensive analytics and data tracking tools provides stakeholders with insightful performance reports and actionable data insights."],
        "linktext": ["Analytics", "Performance Tracking"],
        "linkhref": ["/analytics", "/performance"],
        "svg": <AnalyticsIcon></AnalyticsIcon>,
        "color": "#D21FFF"
    },
    "Maintenance": {
        "textcontent": ["","and","to sustain growth. Proactively maintaining and optimizing your product ensures ongoing functionality, reliability, and user satisfaction as your business evolves and grows."],
        "linktext": ["Maintenance", "Performance Optimization"],
        "linkhref": ["/maintenance","/optimization"],
        "svg": <MaintenanceIcon></MaintenanceIcon>,
        "color": "#FF00A8"
    }
};

Object.entries(tech).forEach(([key, value]) => {
    value.text = value.textcontent.map((text, i) => (
        <React.Fragment key={i}>
            {text}
            {value.linktext[i] && " "}
            {value.linktext[i] && value.linkhref[i] && (
                <a href={value.linkhref[i]} style={{"color": value.color}}>{value.linktext[i]}</a>
            )}
            {i < value.textcontent.length - 1 && " "}
        </React.Fragment>
    ));
});

export default {...tech};