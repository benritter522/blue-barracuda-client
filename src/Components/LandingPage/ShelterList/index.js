import React from 'react';

// import { DistanceMatrixService } from '@react-google-maps/api';
import SingleShelter from './SingleShelter';

const ShelterList = (props) => {

    // const newShelters = props.shelters;

    // props.shelters.map((item, index) => {
    //     props.setShelters([...props.shelters.slice(0, index), ...props.shelters.slice(index + 1)]);
    //     return(
    //         <DistanceMatrixService
    //             options={{
    //                 destinations: [{lat: item.geometry.y, lng: item.geometry.x}],
    //                 origins: [{lat: props.userLat, lng: props.userLng}],
    //                 travelMode: "DRIVING",
    //             }}
    //             callback = { (response) => {
    //                 item.distance = response.rows[0].elements[0].distance;
    //                 item.duration = response.rows[0].elements[0].duration;
    //                 props.setShelters([...props.shelters.slice(0, index), item, ...props.shelters.slice(index + 1)]);
    //                 console.log(`item: ${index}`, item);
    //             }}
    //         />
    //     )
    // })

    return props.mapLoaded ? (
        <div style={{width: '90%', margin: '0 auto'}}>
            {
                props.shelters.map((item, index) => {
                    return(
                        <div key={item.attributes.SHELTER_ID.toString()}>
                            <SingleShelter 
                                name={item.attributes.SHELTER_NAME}
                                address={item.attributes.ADDRESS}
                                city={item.attributes.CITY}
                                state={item.attributes.STATE}
                                zip={item.attributes.ZIP}
                                latitude={item.geometry.y}
                                longitude={item.geometry.x} 
                                distance={item.distance}
                                duration={item.duration}
                            />
                        </div>
                    )
                })
            }
        </div>
    ) : <p>Loading...</p>
}

export default ShelterList;