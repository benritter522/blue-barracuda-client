
const SingleShelter = (props) => {
    console.log(props.distance);
    return(
        <div style={{borderBottom: '1px solid black'}}>
            <h3>{props.name}</h3>
            <p>{props.address}</p>  
            <p>{props.city}, {props.state} {props.zip}</p>
            <p>Distance: {props.distance*0.621371} Miles</p>
            <p>Driving: {props.duration}</p>
            <a href={`https://www.google.com/maps/search/?api=1&query=${props.latitude},${props.longitude}`}>View on Google Maps</a>
        </div>
    )
}

export default SingleShelter;