import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';


const containerStyle = {
    width: '90vw',
    height: '60vh',
    alignSelf: 'center',
    margin: '0 auto'
};
// adjust for whole country map orientation
const center = {
    lng: -98.5556,
    lat: 39.8097
};

const MapComponent = (props) => {
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
    }, []);

    // icons?

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={3}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >

        </GoogleMap>
    ) : <p>Loading...</p>
}

export default React.memo(MapComponent);