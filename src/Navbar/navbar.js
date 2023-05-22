import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './nav.css'
import { FaGamepad  } from 'react-icons/fa';



function BasicExample() {
    return (
        <Navbar bg="dark" variant="dark" expand="sm" className="fixed-top custom-navbar">
            <Container fluid>
                <Navbar.Brand><FaGamepad  size={27} />  Juego de la Oca  <FaGamepad  size={27} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Partida</Nav.Link>
                        <Nav.Link href="#link">Preguntas</Nav.Link>
                        <Nav.Link href="#link">Castigos</Nav.Link>
                    </Nav>
                        <NavDropdown title="Cuenta" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Ajustes</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Perfil</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Cerrar Sesión</NavDropdown.Item>
                        </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;
