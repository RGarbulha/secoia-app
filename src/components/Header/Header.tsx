import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
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
      <div className="space-60" />
    </>
  )
}
