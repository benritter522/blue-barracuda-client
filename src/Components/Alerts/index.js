import React, { useState } from 'react';
import SingleAlert from './SingleAlert';
const sampleHurricane = require('../../Data/hurricane.json');
console.log(sampleHurricane)

const Alerts = () => {
    // const [alerts, setAlerts] = useState([
    //     sampleHurricane.alerts_summary,
    //     sampleHurricane.warning_updates,
    //     sampleHurricane.watch_updates
    // ]);
    const alerts=[
        sampleHurricane.alerts_summary,
        sampleHurricane.warning_updates,
        sampleHurricane.watch_updates
    ];
    return(
        <div>
        {
            alerts.map((item, index) => {
                return(
                    <div key={index}>
                        <SingleAlert
                            alert={item}
                        />
                    </div>
                )
            })
        }
        </div>
    )
}

export default Alerts;