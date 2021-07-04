import React, { useState } from 'react';

import { DistanceMatrixService } from '@react-google-maps/api';
import SingleShelter from './SingleShelter';

const ShelterList = (props) => {

    const [newShelters, setNewShelters] = useState([]);

    // useEffect(() => {
    //     console.log(newShelters);
    // }, [])
    return props.mapLoaded ? (
        <div style={{width: '90%', margin: '0 auto'}}>
            {
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
                                    callback = { (response) => {
                                        // item.distance = response.rows[0].elements[0].distance;
                                        // item.duration = response.rows[0].elements[0].duration;
                                        // try {
                                        //     item.response = await response;
                                        // }
                                        // catch(error) {
                                        //     console.log(error);
                                        // }
                                        item.response = response;
                                        setNewShelters([...newShelters, item]);
                                        // console.log(`item: ${index}`, item);
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
                ) 
            }

            {/* {   
                newShelters.map((item) => {
                    return(
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
                    )
                })
            } */}
        </div>
    ) : <p>Loading...</p>
}

export default ShelterList;