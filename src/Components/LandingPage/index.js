import React, { useState, useEffect } from 'react';
import { DistanceMatrixService } from '@react-google-maps/api';

// import Button from 'react-bootstrap/Button';
import Map from './Map';
import ShelterList from '../LandingPage/ShelterList';

// const sampleShelters = require('../../Data/shelters.json');

const LandingPage = () => {

    const [mapLoaded, setMapLoaded] = useState(false);
    const [mapLoadError, setMapLoadError] = useState(false);

    const [shelters, setShelters] = useState([]);
    
    const fetchShelters = async () => {
        try {
            const response = await fetch('https://safespot-flask.herokuapp.com/shelters');
            const data = await response.json();
            setShelters(data.features);
        }
        catch(error) {
            console.error(error);
        }
    }

    // add sortSheltersByDistance
                // const arr = [];
            // console.log(arr);
            // data.features.forEach((item, index) => {
            //     // if(item.)
            // })

    // Placeholder Florida User Location
    // const userLat = 27.76456198936397;
    // const userLng = -82.63390142275888;

    // Uncomment below and in useEffect for real user location
    const [userLat, setUserLat] = useState(null);
    const [userLng, setUserLng] = useState(null);
    const [userLocationStatus, setUserLocationStatus] = useState(null);
    const getUserLocation = () => {
        console.log('location status', userLocationStatus)

        if (!navigator.geolocation) {
            setUserLocationStatus('Geolocation is not supported by your browser');
        } else {
            setUserLocationStatus('Locating...');
            navigator.geolocation.getCurrentPosition((position) => {
                setUserLocationStatus(null);
                setUserLat(position.coords.latitude);
                setUserLng(position.coords.longitude);
                // added parseFloat to fix lat probles
                // setUserLat(parseFloat(position.coords.latitude));
                // setUserLng(parseFloat(position.coords.longitude));
            }, () => {
                setUserLocationStatus('Unable to retrieve your location');
            });
        }
    }

    useEffect(() => {
        fetchShelters();
        getUserLocation();
    }, [userLat, userLng, userLocationStatus]);
    // }, []);

    return(
        <div>
            { mapLoaded ? 
                (
                    shelters.map((item, index) => {
                        console.log(index, 'item geometry', item.geometry)
                        return(
                            <div key={item.attributes.SHELTER_ID.toString()}>
                                <DistanceMatrixService
                                    options={{
                                        destinations: [{lat: item.geometry.y, lng: item.geometry.x}],
                                        origins: [{lat: userLat, lng: userLng}],
                                        travelMode: "DRIVING",
                                    }}
                                    callback = { (response) => {
                                        item.distance = response.rows[0].elements[0].distance;
                                        item.duration = response.rows[0].elements[0].duration;
                                        setShelters([...shelters.slice(0, index), item, ...shelters.slice(index + 1)]);
                                        // console.log(`item: ${index}`, item);
                                    }}
                                />
                            </div>
                        )}
                    )
                ) : <></>
            }
            <Map 
                mapLoaded={mapLoaded}
                setMapLoaded={setMapLoaded}
                mapLoadError={mapLoadError}
                setMapLoadError={setMapLoadError}
                getUserLocation={getUserLocation}
                userLocationStatus={userLocationStatus}
                userLat={userLat} 
                userLng={userLng} 
                shelters={shelters}
                // hurricane={hurricane}
            />
                
            <ShelterList 
                mapLoaded={mapLoaded}
                mapLoadError={mapLoadError}
                userLat={userLat} 
                userLng={userLng}
                shelters={shelters}
                setShelters={setShelters}
            />
        </div>
    )
}

export default LandingPage;