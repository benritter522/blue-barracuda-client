import React, { useState, useEffect } from 'react';
import SingleAlert from './SingleAlert';
const sampleHurricane = require('../../Data/hurricane.json');

const Alerts = () => {
    // const [alerts, setAlerts] = useState([
    //     sampleHurricane.alerts_summary,
    //     sampleHurricane.warning_updates,
    //     sampleHurricane.watch_updates
    // ]);

    const [hurricane, setHurricane] = useState(sampleHurricane)

    const fetchHurricane = async () => {
        try {
            const response = await fetch('https://safespot-flask.herokuapp.com/alerts');
            const data = await response.json();
            console.log(data);
            setHurricane(data);
        }
        catch(error) {
            console.error(error);
        }
    }
    const alerts=[
        {
            content: sampleHurricane.alerts_summary,
            type: "alert",
            color: "#DA4141"
        },
        {
            content: sampleHurricane.warning_updates,
            type: "warning",
            color: "yellow"
        },
        {
            content: sampleHurricane.watch_updates,
            type: "watch",
            color: "#02C39A"
        }
    ];

    useEffect(() => {
        fetchHurricane();
    }, [])
    return(
        <div>
        {
            alerts.map((item, index) => {
                return(
                    <div key={index}>
                        <SingleAlert
                            alert={item.content}
                            type={item.type}
                            color={item.color}
                        />
                    </div>
                )
            })
        }
        </div>
    )
}

export default Alerts;