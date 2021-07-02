
const sampleHurricane = require('../../Data/hurricane.json');

const WarningTicker = () => {
    // infinte scroll horizontally
    return(
        <div style={{backgroundColor: 'red'}}>
            <p style={{color: 'white'}}>{sampleHurricane.alerts_summary}</p>
        </div>
    );
}

export default WarningTicker;