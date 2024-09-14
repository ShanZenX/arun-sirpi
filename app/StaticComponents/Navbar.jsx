"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
export default function MyNavbar() {
  return (
    <Navbar expand="lg" className="navbar-dark fixed-top  bg-[#000] z-10 !px-5">
      <Container fluid>
        <Navbar.Brand href="/" className="!text-[#d2f65a] font-bold tracking-wider">ArunSirpi</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto my-2 px-2 gap-4 my-lg-0 !text-white"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/" className="text-white"> Home</Nav.Link>
            <Nav.Link href="servicesPage" className="text-white">Services</Nav.Link>
            <Nav.Link href="works"  className="text-white">Works</Nav.Link>
            <Nav.Link href="/" className="text-white">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
