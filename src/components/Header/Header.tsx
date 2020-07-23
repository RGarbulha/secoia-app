import React from 'react'
import { Link } from 'react-router-dom';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

export default function Header() {
    return (
        // <nav className="navbar navbar-expand-lg navbar-dark  bg-dark ">
        //     <Link className="navbar-brand" to="/">Secoia Manager</Link>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        //         <div className="navbar-nav">
        //             <Link className="nav-item nav-link" to="/students">Students</Link>
        //             <Link className="nav-item nav-link" to="/partners">Partners</Link>
        //             <Link className="nav-item nav-link" to="/schools">Schools</Link>
        //             <Link className="nav-item nav-link" to="/logout" >Log out</Link>
        //         </div>
        //     </div>
        // </nav>
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="/">Secoia</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/students">Students</Nav.Link>
      <Nav.Link href="/partners">Partners</Nav.Link>
      <Nav.Link href="/schools">Schools</Nav.Link>
      <Nav.Link href="/logout">Log Out</Nav.Link>
    </Nav>
    </Navbar.Collapse>
  </Navbar>
    )
}
