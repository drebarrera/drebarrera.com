import ReactIcon from "components/startups/icons/products/react";
import NextIcon from "components/startups/icons/products/next";

import React from "react";

const frameworks = {
    "highlight": {
        "name": "Choice Framework: Next.js",
        "description": "A web app is an interactive application accessed through a web browser, offering dynamic functionalities and user interactions.",
        "pros": ["test"],
        "cons": ["test2"],
        "icon": <NextIcon></NextIcon>
    },
    "others": [
        {
            "name": "React.js",
            "description": "A web app is an interactive application accessed through a web browser, offering dynamic functionalities and user interactions.",
            "pros": ["Low-Code Options"],
            "cons": ["Less Configuration", "Relies on Plugins"],
            "icon": <ReactIcon></ReactIcon>
        },
        {
            "name": "Vue.js",
            "description": "A web app is an interactive application accessed through a web browser, offering dynamic functionalities and user interactions.",
            "pros": ["test"],
            "cons": ["test2"]
        }
    ]
};

export default frameworks;