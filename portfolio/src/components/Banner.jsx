import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import resumeFile from '../assets/viewResume.jpeg';
import './Banner.css';
import resume from '../documents/Kajeme_resume.pdf';


export const Banner = () => {

    return (
        <div className="banner" >
            <section className="banner-section" id="home">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <span className="tagline">Kajeme's Portfolio</span>
                            <h1><span className="wrap">Software Engineer</span></h1>
                            <p>Welcome!<br></br>My name is Kajeme Cheneque, I am a passionate software engineer with 3 of years 
                            experience in developing, implementing solutions, and testing software.
                            My expertise lies in Java, Spring Framework, React, Selenium, SQL, NoSQL, etc.
                            I am looking to bring my technical knowledge to a dynamic team where I can contribute to
                            innovative projects and continue to grow as a professional.</p> 
                            <p>Checkout my projects section, I appreciate your time and feedback thank you!</p>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <a href={resume} target="_blank"><img className="header-image" src={resumeFile} alt={"Kajeme's Header"}/></a>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
};