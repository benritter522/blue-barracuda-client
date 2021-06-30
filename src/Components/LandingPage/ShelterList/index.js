import SingleShelter from './SingleShelter';

const ShelterList = (props) => {
    // console.log(props.shelters[1].attributes.city)
    return(
        <div style={{width: '90%', margin: '0 auto'}}>
            {
                props.shelters.map((item, index) => {
                    return(
                        <SingleShelter 
                            key={index}
                            name={item.attributes.SHELTER_NAME}
                            address={item.attributes.ADDRESS}
                            latitude={item.geometry.y}
                            longitude={item.geometry.x}
                        />
                    )
                })
            }
        </div>
    )
}

export default ShelterList;