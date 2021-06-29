import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Map from './Map';

const LandingPage = () => {

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