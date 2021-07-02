
const sampleHurricane = require('../../Data/hurricane.json');

const WarningTicker = () => {
    // infinte scroll horizontally
    return(
        <div style={{backgroundColor: '#DA4141'}}>
            <p style={{color: 'white'}}>{sampleHurricane.alerts_summary}</p>
        </div>
    );
}

export default WarningTicker;