
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavigationBar = () => {

    return(
        <div>
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand href="/"><img src="/large-logo.png" alt="logo" width="250" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/evacuation-zones">Evacuation Zones</Nav.Link>
                        <Nav.Link href="/checklist">Checklist</Nav.Link>
                        <Nav.Link href="/alerts">Alerts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationBar;