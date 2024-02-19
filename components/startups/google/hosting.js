import React, { useEffect, useRef, useState } from 'react';

const GoogleTrends = ({ cssStyles, title }) => {
    const [error, setError] = useState(false);
    const trendBoxRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://ssl.gstatic.com/trends_nrtr/3620_RC01/embed_loader.js';
        script.async = true;
        document.body.appendChild(script);

        const trendBox = document.createElement('div');

        script.onload = () => {
            window.trends.embed.renderExploreWidgetTo(trendBox, "TIMESERIES", 
                {"comparisonItem":
                [{"keyword":"Bluehost","geo":"","time":"today 5-y"},
                {"keyword":"HostGator","geo":"","time":"today 5-y"},
                {"keyword":"Ionos","geo":"","time":"today 5-y"},
                {"keyword":"GoDaddy","geo":"","time":"today 5-y"},
                {"keyword":"Hostinger","geo":"","time":"today 5-y"}
                ],
                "category":0,
                "property":""
            }, {
                "exploreQuery":"date=today%205-y&q=Bluehost,HostGator,Ionos,GoDaddy,Hostinger&hl=en",
                "guestPath":"https://trends.google.com:443/trends/embed/"
            });
        };

        if (trendBoxRef.current) {
            if (!error) {
                trendBoxRef.current.insertBefore(trendBox, trendBoxRef.current.lastChild);
            } else {
                trendBoxRef.current.innerText = 'Error loading Google Trends data';
            }
        }

        return () => {
            document.body.removeChild(script);
            if (trendBoxRef.current) {
                trendBoxRef.current.removeChild(trendBox);
            }
        };
    }, [error]);

    return (
        <div className={`${cssStyles.trendBox}`} ref={trendBoxRef}>
            <h6 style={{"textAlign": "left", "fontWeight": "500", "marginTop": "0px"}}>{title}</h6>
            <p>If the above chart does not appear, it may be because you have third-party cookies or cross-site trafficking disabled. If this is the case, you can find the graph on <a href="https://trends.google.com/trends/explore?date=today%205-y&q=godaddy,hostinger,ionos,hostgator,bluehost&hl=en" target="_blank">Google Trends</a>.</p>
        </div>
        
    );
};

export default GoogleTrends;