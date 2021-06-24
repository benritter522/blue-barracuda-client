import Button from 'react-bootstrap/Button';
import WarningTicker from '../WarningTicker';
import Map from '../Map';

const LandingPage = () => {
    return(
        <div>
            <WarningTicker />
            <Map />
            <div>
                <Button variant="primary">Alerts</Button>{' '}
                <Button variant="primary">Ready to Evacuate</Button>{' '}
                <Button variant="primary">Checklist</Button>
            </div>
        </div>
    )
}

export default LandingPage;