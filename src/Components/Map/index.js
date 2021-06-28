import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';


const containerStyle = {
    width: '90vw',
    height: '60vh',
    alignSelf: 'center',
    margin: '0 auto'
};
// Talahassee
const center = {
    lng: -84.2807,
    lat: 30.4383
};

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
        // props.getUserLocation();
        // console.log(props.userLat, props.userLng, props.userLocationStatus)

    }, [props]);

    // icons?

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
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
        </GoogleMap>
    ) : <p>Loading...</p>
}

export default React.memo(MapComponent);