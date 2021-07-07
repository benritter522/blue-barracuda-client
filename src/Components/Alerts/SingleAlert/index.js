
const SingleAlert = (props) => {
    console.log(props);
    return(
        <div style={{borderBottom: '1px solid black', backgroundColor: `${props.color}`}}>
            <p>{props.alert}</p>
            {/* <p>{props.type}</p> */}
        </div>
    )
}

export default SingleAlert;