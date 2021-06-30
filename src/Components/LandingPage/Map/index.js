import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, Circle } from '@react-google-maps/api';

const sampleHurricane = require('../../../Data/jsonformatter.json');
const sampleShelters = require('../../../Data/shelters.json');

const mapContainerStyle = {
    width: '90vw',
    height: '60vh',
    alignSelf: 'center',
    margin: '0 auto'
};
// Talahassee
const mapCenter = {
    lng: -84.2807,
    lat: 30.4383
};
const circleOptions = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 140000,
    zIndex: 1
}

const MapComponent = (props) => {

    // const [shelters, setShelters] = useState([]);
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


    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY
    });

    const [map, setMap] = useState(null);
    console.log(map);
    
    const onLoad = React.useCallback(function callback(map) {
        // const bounds = new window.google.maps.LatLngBounds();
        // map.fitBounds(bounds);
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    useEffect(() => {
        // fetchLocations();

    }, []);

    // icons?

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={mapCenter}
            zoom={5}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {
                props.userLat && props.userLng ?
                (
                    <Marker
                        position={{lat: props.userLat, lng: props.userLng}}
                    />
                ) : <></>
            }
            <Circle 
                center={{lat: sampleHurricane.current_latitude, lng: sampleHurricane.current_longitude}}
                options={circleOptions}
            />
        </GoogleMap>
    ) : <p>Loading...</p>
}

export default React.memo(MapComponent);