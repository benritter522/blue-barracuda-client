
const SingleAlert = (props) => {
    return(
        <div style={{borderBottom: '1px solid black'}}>
            <p>
                {props.alert}
            </p>
        </div>
    )
}

export default SingleAlert;