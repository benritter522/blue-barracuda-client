import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Map from './Map';
import ShelterList from '../LandingPage/ShelterList';

const sampleShelters = require('../../Data/shelters.json');


const LandingPage = () => {

    const [shelters, setShelters] = useState(sampleShelters);
    // make shelters an array of objects--each with name, lat, lng, and capacity:
        // shelters = [
            // {name: 'happy bunny shelter', lat: 5, lng: 6, cap: .75},
            // {name: 'angry kitty shelter', lat: 5, lng: 6, cap: .75},
            // etc
        // ]

    // const fetchShelters = async () => {
    //     try {
    //         const response = await fetch('URL'); //backend URL
    //         const data = await response.json();
    //         setShelters(data);
    //     }
    //     catch(error) {
    //         console.error(error);
    //     }
    // }

    const [userLat, setUserLat] = useState(null);
    const [userLng, setUserLng] = useState(null);
    const [userLocationStatus, setUserLocationStatus] = useState(null);

    const getUserLocation = () => {
        if (!navigator.geolocation) {
            setUserLocationStatus('Geolocation is not supported by your browser');
        } else {
            setUserLocationStatus('Locating...');
            navigator.geolocation.getCurrentPosition((position) => {
                setUserLocationStatus(null);
                setUserLat(position.coords.latitude);
                setUserLng(position.coords.longitude);
            }, () => {
                setUserLocationStatus('Unable to retrieve your location');
            });
        }
    }

    useEffect(() => {
        getUserLocation();
        // console.log(userLat, userLng, userLocationStatus);
    }, [userLat, userLng, userLocationStatus]);
    
    return(
        <div>
            <Map 
                getUserLocation={getUserLocation}
                userLat={userLat} 
                userLng={userLng} 
                userLocationStatus={userLocationStatus}
                shelters={shelters}
            />
            <ShelterList 
                shelters={shelters}
            />
            <div>
                <Button variant="primary">Alerts</Button>{' '}
                <Button variant="primary">Ready to Evacuate</Button>{' '}
                <Button variant="primary">Checklist</Button>
            </div>
        </div>
    )
}

export default LandingPage;