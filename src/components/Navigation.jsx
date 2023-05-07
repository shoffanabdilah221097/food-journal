import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import FastfoodIcon from '@mui/icons-material/Fastfood';

const Navigation = () => {
  return (
    <Navbar expand="lg" variant="dark" sticky="top" className="bg-dark">
      <Container fluid>
        <Navbar.Brand className="navbar-brand" href="#" style={{color: "goldenrod"}}>
          <FastfoodIcon fontSize="large" style={{color: "goldenrod"}} />
          My Pearl</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <NavLink exact to={"/"} className="nav-link">
              Home
            </NavLink>
            <NavLink to={"/menu"} className="nav-link">
              Menu
            </NavLink>
            <NavLink to={"/about"} className="nav-link">
              About
            </NavLink>
            <NavLink to={"/contact"} className="nav-link">
              Contact
            </NavLink>
          </Nav>
          <Form className="d-flex">
            {/* <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="primary" className="me-2">Search</Button> */}
            <Button variant="btn btn-outline-light">Login</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
