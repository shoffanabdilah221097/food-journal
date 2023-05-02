import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="tampilan">
      <Container fluid>
        <Navbar.Brand href="#">Pearl</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Link to={"/"} className="nav-link">
              Home
            </Link>
            <Link to={"/about"} className="nav-link">
              About
            </Link>
            <Link to={"/service"} className="nav-link">
              Service
            </Link>
            <Link to={"/menu"} className="nav-link">
              Menu
            </Link>
            <Link to={"/gallery"} className="nav-link">
              Gallery
            </Link>
          </Nav>
          <Form className="d-flex">
            {/* <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="primary" className="me-2">Search</Button> */}
            <Button variant="primary">Login</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
