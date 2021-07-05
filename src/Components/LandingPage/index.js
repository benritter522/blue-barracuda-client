import React, { useState } from 'react';
// import { DistanceMatrixService } from '@react-google-maps/api';

import Button from 'react-bootstrap/Button';
import Map from './Map';
import ShelterList from '../LandingPage/ShelterList';

const sampleShelters = require('../../Data/shelters.json');

const LandingPage = () => {

    const [mapLoaded, setMapLoaded] = useState(false);
    const [mapLoadError, setMapLoadError] = useState(false);

    const [shelters, setShelters] = useState(sampleShelters);
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

    // shelters.map((item, index) => {
    //     return(
    //         <DistanceMatrixService
    //             options={{
    //                 destinations: [{lat: item.geometry.y, lng: item.geometry.x}],
    //                 origins: [{lat: userLat, lng: userLng}],
    //                 travelMode: "DRIVING",
    //             }}
    //             callback = { (response) => {
    //                 item.distance = response.rows[0].elements[0].distance;
    //                 item.duration = response.rows[0].elements[0].duration;
    //                 setShelters([...shelters.slice(0, index), item, ...shelters.slice(index + 1)]);
    //                 console.log(`item: ${index}`, item);
    //             }}
    //         />
    //     )
    // })
    
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
                setShelters={setShelters}
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