import "../style/MyNavbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNavbar() {
  return (
    <Navbar className="navbar" expand="lg" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <b>Mi Portafolio</b> 💼
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">🏡 Home</Nav.Link>
            <Nav.Link href="#sobreMi">👨🏻‍💻 Sobre Mí</Nav.Link>
            <Nav.Link href="#proyectos">🌐 Proyectos</Nav.Link>
            <Nav.Link href="#educacion">👨🏻‍🎓 Educación</Nav.Link>
            <Nav.Link href="#contacto">📧 Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
