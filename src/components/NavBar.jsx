import { useEffect, useRef, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { RiMenu5Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import logo from "../assets/img/Icon-Fx.png";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);  
  
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
      <nav expand="md"   className={scrolled ? "scrolled navbar shadow" : "navbar"}>
        <div className="nav-container">
          <div className="nav-logo" href="/">
            <img src={logo} alt="Logo" />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
              <Nav.Link
                href="#home"
                className="nav-item"
                onClick={handleClick}
              >
                Inicio
              </Nav.Link>
              <Nav.Link
                href="#aboutme"
                className="nav-item"
                onClick={handleClick}
              >
                About Me
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className="nav-item"
                onClick={handleClick}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className="nav-item"
                onClick={handleClick}
              >
                Projectos
              </Nav.Link>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
          {click ? (
            <span className="icon">
              <IoCloseSharp />{" "}
            </span>
          ) : (
            <span className="icon">
              <RiMenu5Fill />
            </span>
          )}
        </div>
        </div>
      </nav>
  );
};

export default NavBar;
