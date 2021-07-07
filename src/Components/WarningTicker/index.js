import React, { useState, useEffect } from 'react';
const sampleHurricane = require('../../Data/hurricane.json');

const WarningTicker = () => {
    // infinte scroll horizontally

    const [hurricane, setHurricane] = useState(sampleHurricane)

    const fetchHurricane = async () => {
        try {
            const response = await fetch('https://safespot-flask.herokuapp.com/alerts');
            const data = await response.json();
            setHurricane(data);
        }
        catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchHurricane();
    }, []);

    return(
        <div style={{backgroundColor: '#DA4141'}}>
            <p style={{color: 'white'}}>
                Storm Category: {hurricane.storm_category} <br />
                Wind Speed: {hurricane.winds_mph} mph <br />
                Last Update: {hurricane.datetime} 
            </p>

            {/* <p style={{color: 'white'}}>{hurricane.alerts_summary}</p> */}
        </div>
    );
}

export default WarningTicker;