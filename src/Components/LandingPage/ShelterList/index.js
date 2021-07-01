import SingleShelter from './SingleShelter';
import { DistanceMatrixService } from '@react-google-maps/api';

const ShelterList = (props) => {
    // console.log(props.shelters[1].attributes.city)
    return(
        <div style={{width: '90%', margin: '0 auto'}}>
            {
                props.userLat && props.userLng ? 
                (
                    props.shelters.map((item) => {
                        return(
                            <div key={item.attributes.SHELTER_ID.toString()}>
                                <DistanceMatrixService
                                    options={{
                                        destinations: [{lat: item.geometry.y, lng: item.geometry.x}],
                                        origins: [{lat: props.userLat, lng: props.userLng}],
                                        travelMode: "DRIVING",
                                    }}
                                    callback = {(response) => {
                                        item.response = response;
                                        console.log(item.response);
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
                                    distance={item.response.rows[0].elements[0].distance.value}
                                    duration={item.response.rows[0].elements[0].duration.text}
                                />
                            </div>
                        )
                    })
                ) : <></>
            }
        </div>
    )
}

export default ShelterList;