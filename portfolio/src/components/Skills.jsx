import './Skills.css'
import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skill1 from "../assets/galaxy2.jpeg"
import skill2 from "../assets/galaxy3.jpeg"
import skill3 from "../assets/galaxy4.jpeg"
import skill4 from "../assets/galaxy5.jpeg"
import backgroundSkills from "../assets/galaxy.jpeg"

export const Skills = () => {

    const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

return(
    <div className='skill' id='skills'>
        <section>
         <Container>
             <Row>
                 <Col>
                    <div className='skill-bx'>
                        <h2>>Skills</h2>
                        <p>Here are some of the technologies I have experience with</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={skill1} alt="skills as a back-end developer "/>
                                <h5>Back End Development</h5>
                            </div>
                            <div className="item">
                                <img src={skill2} alt="skill as a QA tester"/>
                                <h5>QA Testing</h5>
                            </div>
                            <div className="item">
                                <img src={skill3} alt="skills as a front end"/>
                                <h5>Front-End Development</h5>
                            </div>
                            <div className="item">
                                <img src={skill4} alt="skills as a front end"/>
                                <h5>SQL/NoSQL</h5>
                            </div>
                        </Carousel>
                    </div>
                 </Col>
             </Row>
         </Container>
         <img src={backgroundSkills} className="background-image-left" alt="background for skills"/>
        </section>
    </div>    
)
}