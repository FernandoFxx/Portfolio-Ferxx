import { Col } from "react-bootstrap";
const ProjectCards = ({ title, description, imgUrl, urlPage }) => {
  return (
      <Col size={12} sm={6} md={4} className="card-project">
        <div className="proj-imgbx">
          <img className="h-100" src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <a href={urlPage}>{description}</a>
          </div>
        </div>
      </Col>
  )
}

export default ProjectCards