import Container from 'react-bootstrap/Container'; //imports Container component
import Navbar from 'react-bootstrap/Navbar'; //imports Navbar component
import Nav from 'react-bootstrap/Nav'; //imports Nav component


//Header component 
function Header() {
    return (
        <Navbar bg="black" variant="dark" fixed="top">
            <Container fluid>
                <Nav className="me-auto">
                    <Nav.Link href="/music-videos"><small>Music Videos</small></Nav.Link>
                    <Nav.Link href="/live"><small>Live</small></Nav.Link>
                    <Nav.Link href="info"><small>Info</small></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;  //exports Header to import
