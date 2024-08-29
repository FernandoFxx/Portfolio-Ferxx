import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import skmagento from "../assets/img/skills/magento.png";
import skhtml from "../assets/img/skills/html.png";
import skcss from "../assets/img/skills/css.png";
import skjavascript from "../assets/img/skills/javascript.png";
import skphp from "../assets/img/skills/php.png";
import skreact from "../assets/img/skills/react.png";
import skangular from "../assets/img/skills/angular.png";
import skfigma from "../assets/img/skills/figma.png";
import skbootstrap from "../assets/img/skills/bootstrap.png";
import skgithub from "../assets/img/skills/github.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="title-skill">Skills</h2>
            <div className="skill-bx wow zoomIn">
              <p>
                Dentro de mis habilidades a destacar, muestro mis mayores fortalezas con procesadores para estilos, frameworks  y herramientas que e utilizado a lo largo de mi experiencia laboral.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={skhtml} alt="Image" />
                  <h5>Html</h5>
                </div>
                <div className="item">
                <img src={skcss} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                <img src={skjavascript} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                <img src={skmagento} alt="Image" />
                  <h5>Magento 2</h5>
                </div>
                <div className="item">
                <img src={skreact} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                <img src={skangular} alt="Image" />
                  <h5>Angular</h5>
                </div>
                <div className="item">
                <img src={skbootstrap} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                <img src={skphp} alt="Image" />
                  <h5>Php</h5>
                </div>
                <div className="item">
                <img src={skgithub} alt="Image" />
                  <h5>GitHub</h5>
                </div>
                <div className="item">
                <img src={skfigma} alt="Image" />
                  <h5>Figma</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export default Skills;
