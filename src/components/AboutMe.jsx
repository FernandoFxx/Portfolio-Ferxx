import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/LogoFX-about.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.png";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";

function AboutMe() {
  return (
    <section className="about-me" id="aboutme">
      <Container className="d-flex align-items-center h-100">
        <Row className="align-items-center justify-content-center text-center h-100">
          <Col xs={8} md={12} xl={6}>
            <TrackVisibility className="h-100">
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeInDown text-center"
                      : "text-center h-100"
                  }
                >
                  <img src={headerImg} alt="Header Img" className="img-logo" />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={12} xl={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : "text-about"
                  }
                >
                  <h1 className="tagline mb-5">Fernando Alvarez</h1>

                  <span>
                    Desarrollador Front End experimentado, que ha trabajado durante 5 años en el area, laborando para diferentes empresas importantes dentro del ambito. <br /> <br />
                    Apasionado por la creacion de experiencias visuales y funcionales a travez de procesadores y frameworks mas altamente demandados en el mercado laboral.
                  </span>
                  <span className="navbar-text justify-content-center mt-4">
                  <div className="social-icon">
                    <a href="https://www.linkedin.com/in/fernando-alvarez-aaa3b7177" className="mr-2">
                      <img src={navIcon1} alt="" />
                    </a>
                    <a href="https://github.com/FernandoFxx">
                      <img src={navIcon2} alt="" />
                    </a>
                    <a href="https://www.instagram.com/fernandoferxx/">
                      <img src={navIcon3} alt="" />
                    </a>
                  </div>
            </span>
                </div>
              )}
            </TrackVisibility>
          </Col>

        </Row>
      </Container>
    </section>
  )
}

export default AboutMe