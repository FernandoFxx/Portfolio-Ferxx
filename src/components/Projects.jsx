import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCards from "../components/ProjectCards";
import prochopo from "../assets/img/projects/chopo.png";
import promovistarchile from "../assets/img/projects/movistar_chile.png";
import promovistarperu from "../assets/img/projects/movistar_peru.png";
import proafosa from "../assets/img/projects/afosa.png";
import prosyd from "../assets/img/projects/SyD.png";
import ropayadiis from "../assets/img/projects/ropa_yadiis.png"
import portafolioantiguo from "../assets/img/projects/portafolio_antiguo.png"
import movie from "../assets/img/projects/movie.png"
import login from "../assets/img/projects/Login.png"
import landingpages from "../assets/img/projects/Landingpages.png"
import prowarriors from "../assets/img/projects/warriors.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {
  const projects = [
    {
      title: "Chopo",
      description: "E-commerce con Magento 2",
      imgUrl: prochopo,
      urlPage: "https://www.chopo.com.mx/"
    },
    {
      title: "Movistar Chile",
      description: "E-commerce con Magento 2",
      imgUrl: promovistarchile,
      urlPage: "https://ww2.movistar.cl/"
    },
    {
      title: "Movistar Peru",
      description: "E-commerce con Magento 2",
      imgUrl: promovistarperu,
      urlPage: "https://www.movistar.com.pe/"
    },
    {
      title: "Afosa",
      description: "E-commerce con Magento 2",
      imgUrl: proafosa,
      urlPage: "https://www.afosa.com.mx/"
    },
    {
      title: "SyD",
      description: "E-commerce con Magento 2",
      imgUrl: prosyd,
      urlPage: "https://www.syd.com.mx/"
    },
    {
      title: "Warriors Online",
      description: "Landing Page",
      imgUrl: prowarriors,
      urlPage: "https://warriorsonline.mx/"
    },
  ];

  const personalProjects = [
    {
      title: "Ropa Yadiis",
      description: "E-commerce con react",
      imgUrl: ropayadiis,
    },
    {
      title: "Portafolio Antiguo",
      description: "Landing Page",
      imgUrl: portafolioantiguo,
    },
    {
      title: "Pagina web de peliculas",
      description: "Landing Page",
      imgUrl: movie
    },
    {
      title: "Landing",
      description: "Landing Page",
      imgUrl: landingpages,
    },
    {
      title: "Login & Register",
      description: "Landing Page",
      imgUrl: login,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Estos son algunos proyectos en los que e trabajado a lo largo de mi experiencia profesional, asi como tambien proyectos personales que e realizado.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Empresas</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Personal</Nav.Link>
                      </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCards
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row className="justify-content-center">
                      {
                        personalProjects.map((project, index) =>{
                          return(
                            <ProjectCards
                              key={index}
                              {...project}
                            />
                          )
                        })
                      }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
};

export default Projects;
