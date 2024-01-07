import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class navbar extends Component {
  render() {
    return (
      <Navbar bg="primary" expand="lg" className="navbar-dark">
        <Container>
          <Navbar.Brand href="#home">News Views</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/business">
                Business
              </Link>
              <Link className="nav-link" to="/entertainment">
                Entertainment
              </Link>
              <Link className="nav-link" to="/general">
                General
              </Link>
              <Link className="nav-link" to="/health">
                Health
              </Link>
              <Link className="nav-link" to="/science">
                Science
              </Link>
              <Link className="nav-link" to="/sports">
                Sports
              </Link>
              <Link className="nav-link" to="/technology">
                Technology
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
