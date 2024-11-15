"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname from next/navigation
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "@/public/logo-f.png";

export default function MyNavbar() {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname(); // Use usePathname to get the current path

  // Hide the top header when scrolling down and show it when scrolling up
  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`navbar-light bg-yellow-950/70 !text-black shadow-[0_2px_10px_rgba(0,0,0,0.15)] backdrop-blur-sm md:h-20 !px-5 transition-transform duration-[2000ms] mt-[50px] z-10 fixed-top`}
    >
      <Container fluid>
        <Navbar.Brand href="/" className="!text-[#d2f65a] font-bold tracking-wider">
          <Image src={logo} width={120} alt="arun sirpi" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto my-2 px-2 gap-4 my-lg-0 !text-black"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="/"
              className={`${
                pathname === "/" ? "!bg-yellow-950/30 !text-white" : "text-white"
              } px-4 py-2 rounded-lg transition-all duration-300`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="./services"
              className={`${
                pathname === "/services" ? "!bg-yellow-950/30 !text-white" : "text-white"
              } px-4 py-2 rounded-lg transition-all duration-300`}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="./works"
              className={`${
                pathname === "/works" ? "!bg-yellow-950/30 !text-white" : "text-white"
              } px-4 py-2 rounded-lg transition-all duration-300`}
            >
              Works
            </Nav.Link>
            <Nav.Link
              href="/about"
              className={`${
                pathname === "/about" ? "!bg-yellow-950/30 !text-white" : "text-white"
              } px-4 py-2 rounded-lg transition-all duration-300`}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
