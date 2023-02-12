import React from "react";
import { Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../assets/quran.png";

const Header = () => {
  return (
    <Navbar bg="transport" expand="md">
      <Navbar.Brand>
        <Link to="/">
          <Image style={{ width: "50px" }} src={logo} alt="LOGO" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto gap-3">
          <Link className="text-white text-decoration-none" to="/">
            الصفحة الرئيسية
          </Link>
          <Link className="text-white text-decoration-none" to="/readers">
            القراء
          </Link>
          <Link className="text-white text-decoration-none" to="/hadith">
            أحاديث
          </Link>
          <Link className="text-white text-decoration-none" to="/athan-time">
            مواعيد الأذان
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;