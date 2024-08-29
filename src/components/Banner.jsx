import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/LogoFX-white.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container className="d-flex align-items-center h-100 justify-content-center">
        <Row className="aligh-items-center justify-content-center text-center">
          <Col xs={12} md={12} xl={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeIn text-center"
                      : "text-center"
                  }
                >
                  <img src={headerImg} alt="Header Img" className="w-100" />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={7} className="mt-5">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Bienvenidos a mi Portafolio</span>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
