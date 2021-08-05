import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, Circle, InfoWindow } from '@react-google-maps/api';

import SingleShelter from '../ShelterList/SingleShelter';

// const sampleHurricane = require('../../../Data/hurricane.json');

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

const MapComponent = (props) => {

    const [hurricane, setHurricane] = useState(null)

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

    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY
    });

    const [map, setMap] = useState(null);
    const [selected, setSelected] = useState(null);

    if(map) {
        console.log("map loaded")
    }

    const onSelect = item => {
        setSelected(item);
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
        fetchHurricane();
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
                                    onClick={() => onSelect(item)}
                                />
                            </div>
                        )
                    })
                ) : <></>
            }
            {
                selected ? (
                    <InfoWindow 
                        position={{lat: selected.geometry.y, lng: selected.geometry.x}}
                        clickable={true}
                        onCloseClick={() => setSelected(null)}
                    >
                        <SingleShelter 
                            name={selected.attributes.SHELTER_NAME}
                            address={selected.attributes.ADDRESS}
                            city={selected.attributes.CITY}
                            state={selected.attributes.STATE}
                            zip={selected.attributes.ZIP}
                            latitude={selected.geometry.y}
                            longitude={selected.geometry.x} 
                            distance={selected.distance}
                            duration={selected.duration}
                            postImpactCapacity={selected.attributes.POST_IMPACT_CAPACITY}
                            evacuationCapacity={selected.attributes.EVACUATION_CAPACITY}
                        />
                    </InfoWindow>
                ) : <></>
            }
            {
                hurricane && !isNaN(hurricane.current_latitude) && !isNaN(hurricane.current_longitude) ? 
                <Circle 
                    center={{lat: hurricane.current_latitude, lng: hurricane.current_longitude}}
                    options={{
                        strokeColor: '#FF0000',
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                        fillColor: '#FF0000',
                        fillOpacity: 0.35,
                        clickable: false,
                        draggable: false,
                        editable: false,
                        visible: true,
                        radius: hurricane.radius*1609.34,
                        zIndex: 1
                    }}
                /> : <></>
            }
        </GoogleMap>
    ) : <p>Loading...</p>
}

export default React.memo(MapComponent);