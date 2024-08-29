import { Container, Row, Col } from "react-bootstrap";
import logontt from "../assets/img/empresas/NTT-DATA-logo.png"
import logowolf from "../assets/img/empresas/logo-wolf.png"
import logowarriors from "../assets/img/empresas/logo-warriors.png"
import logoies from "../assets/img/empresas/logo-ies.png"

function Education() {
  return (
    <section className="section-clients">
        <Container>
            <Row>
                <Col>
                        <div className="container">
                            <div className="text-center section-diff-title">     
                                <h2>Empresas con las que e trabajado:</h2>
                                <p></p>
                            </div> 

                            <div className="clients-carousel">
                                <a href="https://mexico.nttdata.com/" className="client">
                                <img src={logontt} alt="Header Img" className="img-responsive" />
                                </a>               
                                <a href="https://wolfsellers.com/" className="client">
                                    <img src={logowolf} className="img-responsive" alt=""/>
                                </a>               
                                <a href="https://warriorslabs.com/" className="client">
                                    <img src={logowarriors} className="img-responsive" alt=""/>
                                </a>                   

                                <a href="https://www.linkedin.com/company/ies-systemss/?originalSubdomain=mx" className="client">
                                    <img src={logoies} className="img-responsive" alt=""/>
                                </a>                                   

                            </div>
                        </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
}

export default Education;
