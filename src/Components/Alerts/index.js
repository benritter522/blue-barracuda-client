import React/*, { useState }*/ from 'react';
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