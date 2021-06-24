import Button from 'react-bootstrap/Button';
import WarningTicker from '../WarningTicker';
import Map from '../Map';

const LandingPage = () => {
    return(
        <div>
            <WarningTicker />
            <Map />
            <div>
                <Button variant="primary">Alerts List</Button>{' '}
                <Button variant="primary">Checklist</Button>{' '}
                <Button variant="primary">Evacuation</Button>
            </div>
        </div>
    )
}

export default LandingPage;