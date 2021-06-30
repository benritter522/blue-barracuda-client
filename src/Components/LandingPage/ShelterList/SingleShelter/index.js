
const SingleShelter = (props) => {
    return(
        <div style={{borderBottom: '1px solid black'}}>
            <p>{props.name}</p>
            <p>{props.address}</p>  
            <p>{props.state}, {props.zip}</p>
            <a href={`https://www.google.com/maps/search/?api=1&query=${props.latitude},${props.longitude}`}>View on Google Maps</a>
        </div>
    )
}

export default SingleShelter;