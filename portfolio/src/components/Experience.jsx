import './Experience.css'
import { Container, Col, Row, Tab } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { ExperienceCard } from './ExperienceCard';
import experienceBackground from '../assets/startosphere.jpeg'
import infoImg from '../assets/infosys.png'
import wfImg from '../assets/wf.png'
import kjImg from '../assets/kj.png'

export const Experience = () => {

    const workExperience = [
        {
            company: "Wells Fargo",
            title: "Software Engineer",
            description: "Develop new features and solutions for Wells Fargo mobile App as requested by stakeholders.",
            technologies: "Java, Spring, GraphQL, Mockito, SQL/MongoDB, Selenium, Cucumber",
            imgUrl: wfImg
        },
        {
            company: "Infosys",
            title: "Senior Associate",
            description: "Working with clients and understanding their technical requirements.\nCollaborating with external development teams and vendors.\nStaying up to date with current best practices in Software Development",
            technologies: "Java, Spring, React, SQL/MongoDB, JUnit",
            imgUrl: infoImg
        },
        {
            company: "Freelancer",
            title: "Web Developer",
            description: "Create websites for recreation or personal business. Create websites for recreation or personal business",
            technologies: "Java, Spring, React, SQL",
            imgUrl: kjImg
        }
    ];
    const experienceWf = workExperience[0];
    const experienceInfo = workExperience[1];
    const experienceFL = workExperience[2];
    return (
        <div className="experience" id="experiences">
            <section>
                <Container>
                    <Row>
                        <Col>
                            <h2>Experience</h2>
                            <p>I have gained a lot of experience working as part of the following companies:</p>
                            <Tab.Container id="experiences-tabs" defaultActiveKey="first">
                                <Nav variant="pills" id="pills-tab" className="nav-pills mb-5 justify-content-center align-items-center">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Wells Fargo</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Infosys</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Freelancer</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className="content">
                                    <Tab.Pane eventKey="first">
                                        <Row className="content-row">
                                            <ExperienceCard key={experienceWf.company + experienceWf.title} {...experienceWf}/>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Row className="content-row">
                                            <ExperienceCard key={experienceInfo.company + experienceInfo.title} {...experienceInfo}/>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <Row className="content-row">
                                            <ExperienceCard key={experienceFL.company + experienceFL.title} {...experienceFL}/>
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </section>
            <img className="background-image-right" src={experienceBackground} alt="stratosphere background" />
        </div>
    );
}