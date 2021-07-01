import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Map from './Map';
import ShelterList from '../LandingPage/ShelterList';

const sampleShelters = require('../../Data/shelters.json');

const LandingPage = () => {

    const [mapLoaded, setMapLoaded] = useState(false);
    const [mapLoadError, setMapLoadError] = useState(false);

    const shelters = sampleShelters;
    // uncomment below for live data to be updated by state
    // const [shelters, setShelters] = useState(sampleShelters);
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

    // Placeholder Florida User Location
    const userLat = 27.76456198936397;
    const userLng = -82.63390142275888;

    // Uncomment below and in useEffect for real user location

    // const [userLat, setUserLat] = useState(null);
    // const [userLng, setUserLng] = useState(null);
    // const [userLocationStatus, setUserLocationStatus] = useState(null);
    // const getUserLocation = () => {
    //     if (!navigator.geolocation) {
    //         setUserLocationStatus('Geolocation is not supported by your browser');
    //     } else {
    //         setUserLocationStatus('Locating...');
    //         navigator.geolocation.getCurrentPosition((position) => {
    //             setUserLocationStatus(null);
    //             setUserLat(position.coords.latitude);
    //             setUserLng(position.coords.longitude);
    //         }, () => {
    //             setUserLocationStatus('Unable to retrieve your location');
    //         });
    //     }
    // }

    // useEffect(() => {
        // getUserLocation();
        // console.log(userLat, userLng, userLocationStatus);
    // }, [userLat, userLng, userLocationStatus]);
    // }, []);

    
    return(
        <div>
            <Map 
                mapLoaded={mapLoaded}
                setMapLoaded={setMapLoaded}
                mapLoadError={mapLoadError}
                setMapLoadError={setMapLoadError}
                // getUserLocation={getUserLocation}
                // userLocationStatus={userLocationStatus}
                userLat={userLat} 
                userLng={userLng} 
                shelters={shelters}
            />
            <ShelterList 
                mapLoaded={mapLoaded}
                mapLoadError={mapLoadError}
                userLat={userLat} 
                userLng={userLng}
                shelters={shelters}
            />
            <div>
                <div>
                    <Button variant="primary">Alerts</Button>
                </div>
                <div>
                    <Button variant="primary">Ready to Evacuate</Button>
                </div>
                <div>
                    <Button variant="primary">Checklist</Button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;