
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Icon-Fx.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.png";
import navIcon3 from "../assets/img/nav-icon3.svg";
const Footer = () => {
  return (
    <footer className="footer">
    <Container>
      <Row className="align-items-center">
        <Col size={12} sm={6} className="img-footer">
          <img src={logo} alt="Logo" className="logo-footer" />
        </Col>
        <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/fernando-alvarez-aaa3b7177"><img src={navIcon1} alt="Icon" /></a>
            <a href="https://github.com/FernandoFxx"><img src={navIcon2} alt="Icon" /></a>
            <a href="https://www.instagram.com/fernandoferxx/"><img src={navIcon3} alt="Icon" /></a>
          </div>
          <p>Copyright 2024. All Rights Reserved</p>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}

export default Footer