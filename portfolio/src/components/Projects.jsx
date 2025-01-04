import "./Projects.css"
import { Container, Col, Row } from "react-bootstrap";
import amazon from '../assets/amazon.png'

export const Projects = () => {

    return (<div className="project-section" id="projects">
        <section className="inner-project-section">
            <Container className="project-container">
                <h1>Projects</h1>
                <Row className="project-row">
                    <Col className="col-project">
                        <a href="https://javascript-amazon-project-lime.vercel.app/" target="_blank">
                            <div>
                                <h2>Amazon Ecommerce</h2>
                                <p className="project-description">
                                    Javascript, CSS, HTML
                                </p>
                                <p>
                                    Fetch products from an API, place an
                                    order by adding products to a cart
                                    and get a tracking id for the order!
                                </p>
                                <img src={amazon} alt="sdsdff" />
                            </div>
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    </div>
    )}