import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, Circle } from '@react-google-maps/api';

const sampleHurricane = require('../../../Data/hurricane.json');

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
    radius: sampleHurricane.radius*1609.34,
    zIndex: 1
}

const MapComponent = (props) => {

    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY
    });

    const [map, setMap] = useState(null);
    if(map) {
        console.log("map loaded")
    }
    
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
        if(isLoaded) {
            props.setMapLoaded(true);
        }
    }, [isLoaded, props]);

    if(loadError) {
        props.setMapLoadError(true);
        return <div>Map cannot be loaded right now. Sorry!</div>
    } 
    
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
            {
                props.shelters && props.userLat && props.userLng ?
                (
                    props.shelters.map((item) => {
                        return(
                            <div key={item.attributes.OBJECTID.toString()}>
                                <Marker 
                                    position={{lat: item.geometry.y, lng: item.geometry.x}}
                                    icon={{url: 'https://res.cloudinary.com/bitingrent/image/upload/v1625070383/safespot/safespot-shelterMarker_awhbaz.png', scaledSize: {width: 20, height: 20}}}
                                />
                            </div>
                        )
                    })
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