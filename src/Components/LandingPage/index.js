import Button from 'react-bootstrap/Button';
import WarningTicker from '../WarningTicker';
import Map from '../Map';

const LandingPage = () => {
    return(
        <div>
            <WarningTicker />
            <div>
                <Button variant="primary">Alerts List</Button>
                <div>
                    <Button variant="primary">Checklist</Button>{' '}
                    <Button variant="primary">Evacuation</Button>
                </div>
            </div>
            <Map />
        </div>
    )
}

export default LandingPage;