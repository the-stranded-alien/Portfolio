import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
function NavBar() {
    return (
        <Navbar fixed="top" bg="light" expand="md">
            <Container>
                <NavBar.Brand></NavBar.Brand>
                <NavBar.Toggle></NavBar.Toggle>
                <NavBar.Collapse id="responsive-navbar-nav">

                </NavBar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;