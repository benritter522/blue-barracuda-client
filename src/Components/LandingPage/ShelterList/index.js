import React from 'react';

import { DistanceMatrixService } from '@react-google-maps/api';
import SingleShelter from './SingleShelter';

const ShelterList = (props) => {

    return props.mapLoaded ? (
        <div style={{width: '90%', margin: '0 auto'}}>
            {
                props.userLat && props.userLng ? 
                (
                    props.shelters.map((item, index) => {
                        return(
                            <div key={item.attributes.SHELTER_ID.toString()}>
                                <DistanceMatrixService
                                    options={{
                                        destinations: [{lat: item.geometry.y, lng: item.geometry.x}],
                                        origins: [{lat: props.userLat, lng: props.userLng}],
                                        travelMode: "DRIVING",
                                    }}
                                    callback = { async (response) => {
                                        // item.distance = response.rows[0].elements[0].distance;
                                        // item.duration = response.rows[0].elements[0].duration;
                                        item.response = await response;
                                        console.log(`item: ${index}`, item);
                                    }}
                                />

                                <SingleShelter 
                                    name={item.attributes.SHELTER_NAME}
                                    address={item.attributes.ADDRESS}
                                    city={item.attributes.CITY}
                                    state={item.attributes.STATE}
                                    zip={item.attributes.ZIP}
                                    latitude={item.geometry.y}
                                    longitude={item.geometry.x} 
                                    response={item.response}
                                    // distance={item.distance.value}
                                    // duration={item.duration.text}
                                />
                            </div>
                        )
                    })
                ) : <></>
            }
        </div>
    ) : <p>Loading...</p>
}

export default ShelterList;