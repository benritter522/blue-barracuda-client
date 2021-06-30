import SingleShelter from './SingleShelter';

const ShelterList = (props) => {
    // console.log(props.shelters[1].attributes.city)
    return(
        <div>
            {
                props.shelters.map((item, index) => {
                    return(
                        <SingleShelter 
                            key={index}
                        />
                    )
                })
            }
        </div>
    )
}

export default ShelterList;