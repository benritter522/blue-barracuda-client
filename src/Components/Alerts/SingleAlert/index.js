
const SingleAlert = (props) => {
    console.log(props);
    return(
        <div style={{borderBottom: '1px solid black', backgroundColor: `${props.color}`}}>
            <p>
                {props.alert}
            </p>
        </div>
    )
}

export default SingleAlert;