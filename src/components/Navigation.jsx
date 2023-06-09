import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Form, Button, Dropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import Login from "./Login";
import { apiFood } from "../api/apiFood";

const Navigation = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userLogin, setUserLogin] = useState("");
  const navigate = useNavigate();
  const handleLoginClick = () => {
    setShowLogin(!showLogin);
  };

  const handleLogout = async () => {
    try {
      const result = await apiFood.get("/logout", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      localStorage.removeItem("token");

      setIsLogin(false);
      setUserLogin("");
      navigate("/");
      window.location.reload();
    } catch (error) {
      alert("logout gagal, ada yang error");
    }
  };

  const handleClose = () => {
    setShowLogin(false);
  };

  const getUserData = async () => {
    try {
      const result = await apiFood.get("/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setUserLogin(result.data.user.name);
    } catch (error) {
      alert("error get detail user login");
    }
  };

  const successLogin = () => {
    handleClose();
    setIsLogin(true);
    getUserData();
  };

  const checkUserLogin = async () => {
    const login = localStorage.getItem("token") ? true : false;
    setIsLogin(login);

    if (login === true) {
      getUserData();
    }
  };
  useEffect(() => {
    checkUserLogin();
  }, []);

  return (
    <>
      <Navbar expand="lg" variant="dark" sticky="top" className="bg-dark">
        <Container fluid>
          <Navbar.Brand className="navbar-brand" href="#" style={{ color: "goldenrod" }}>
            <FastfoodIcon fontSize="large" style={{ color: "goldenrod" }} />
            My Pearl
          </Navbar.Brand>
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
              {isLogin && (
                <Dropdown className="me-2">
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    {userLogin}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
              {!isLogin && (
                <Button variant="btn btn-outline-light" onClick={handleLoginClick}>
                  Login
                </Button>
              )}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showLogin && <Login customClose={handleClose} ketikaSuccessLogin={successLogin} />}
    </>
  );
};

export default Navigation;
