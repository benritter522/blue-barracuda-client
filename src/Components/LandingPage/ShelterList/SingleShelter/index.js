
const SingleShelter = (props) => {
    // console.log('SingleShelter Props:', props);
    // useEffect for rendering placeholder for distancematrix data
    return (
        <div style={{margin: '0 auto', display: 'flex', flexDirection: 'row', borderBottom: '1px solid black'}}>
            <div>
                <p>{props.name}</p>
                <p>{props.address}</p>  
                <p>{props.city}, {props.state} {props.zip}</p>
            </div>
            {/* {
            props.response ?
            (
            <div>
                {/* <p>{Math.round(props.distance*0.000621371)} Miles</p>
                <p>Driving: {props.duration}</p> */}
                {/* <p>{Math.round(props.response.rows[0].elements[0].distance.value*0.000621371)} Miles</p>
                <p>Driving: {props.response.rows[0].elements[0].duration.text}</p> */}
                
                
                {/* <p># Miles</p>
                <p># Days, Hours, Minutes</p> */}

                {/* <a href={`https://www.google.com/maps/search/?api=1&query=${props.latitude},${props.longitude}`}>View on Google Maps</a>
            </div>
            ) : <></>

            } */}
        </div>
    )
}

export default SingleShelter;