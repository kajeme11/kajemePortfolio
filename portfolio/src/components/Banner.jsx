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
                            <p>Paragraph about me</p>
                            <button onClick={() => console.log('connect')}>Message me <ArrowRightCircle size={25}/></button>
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