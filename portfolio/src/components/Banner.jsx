import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImage from '../assets/portfolio2.jpeg'
import './Banner.css'

export const Banner = () => {
    return (
        <div className="banner" >
            <section className="banner-section" id="home">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <span className="tagline">Kajeme's Portfolio</span>
                            <h1><span className="wrap">Software Engineer</span></h1>
                            <p>Welcome!<br></br>My name is Kajeme Cheneque, I am a passionate software engineer with 3 years 
                            experience in developing, implementing solutions, and testing software.
                            My expertise lies in Java, Spring Framework, React, Selenium, SQL, NoSQL, etc.
                            I am looking to bring my technical expertise to a dynamic team where I can contribute to
                            innovative projects and continue to grow as a professional. Could you please send me a 
                            message with your thoughts on my portfolio?,I appreciate your time and feedback thank you!</p>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img className="header-image" src={headerImage} alt={"Kajeme's Header"}/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
};