import React from "react"
import { Navbar, NavDropdown, Nav, Container, Card, Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom"

import '../images/sanFranciscoTrip.jpg'

import '../style/navbar.css'

export const NavBarMain = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Link to="/home">
          <Navbar.Brand className="text-start sticky-top animate__animated animate__backInLeft"><h4>G.A.R.S</h4></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="animate__animated animate__backInRight">
          <Nav sticky="top" className="text-end sticky-top">
            <Link to="/certifications">
              <Nav.Link href="/certifications">Certifications</Nav.Link>
            </Link>
          </Nav>
          <Nav className="justify-content-end">
            <Link to="/resume">
              <Nav.Link href="/resume">Resume</Nav.Link>
            </Link>
            <Link to="/contact">
              <Nav.Link className="text-end" eventKey={2} href="/contact">Contact</Nav.Link>
            </Link>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://github.com/gars150387/Contact_list_Flux_API_BasedOnArticle">Contact_list_Flux_API_BasedOnArticle</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/WoodlyB/Gustavo-and-Woodly-project">Final Project</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/gars150387/todo-list-in-landing-page-react-flux">To Do List</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/gars150387/simple-counter-exercise-react-hook">Counter</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/gars150387/traffic-light-exercise-react">Traffic Light</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/gars150387/random-card-generated">Random Card generated</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/gars150387/random-excuse-exercise-javascript">Random Excuse Generated</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Col xs={1} className="justify-content-end">
            <Card.Img id="perfil" className="item-align-end" variant="top" src={require('../images/sanFranciscoTrip.jpg').default} alt="sanFranciscoTrip" />
          </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}