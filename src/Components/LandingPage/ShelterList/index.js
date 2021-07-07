import React from 'react';

// import { DistanceMatrixService } from '@react-google-maps/api';
import SingleShelter from './SingleShelter';

const ShelterList = (props) => {

    return props.mapLoaded ? (
        <div style={{width: '90%', margin: '0 auto'}}>
            {
                props.shelters.map((item) => {
                    return(
                        <div key={item.attributes.SHELTER_ID.toString()}>
                            {
                                item.attributes.STATE === 'FL' ?
                                (
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
                                        postImpactCapacity={item.attributes.POST_IMPACT_CAPACITY}
                                        evacuationCapacity={item.attributes.EVACUATION_CAPACITY}
                                        // pets={item.PET_ACCOMMODATIONS_CODE}
                                    />
                                ) : <></>
                            }
                        </div>
                    )
                })
            }
        </div>
    ) : <p>Loading...</p>
}

export default ShelterList;