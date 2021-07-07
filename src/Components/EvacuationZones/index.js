
const EvacuationZones = () => {
    // 830 1st St S, St. Petersburg, FL 33701
    return(
        <div>
            <iframe style={{width: '90vw', height: '70vh'}} frameborder="0" scrolling="no" allowfullscreen title="evacuationZoneFrame" src="https://arcg.is/0q8OSP0"></iframe>
            {/* sandbox attribute? very important for security. may NEED after adding user login info*/}
        </div>
    )
}

export default EvacuationZones;