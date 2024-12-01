import { Col } from 'react-bootstrap'
import "./ExperienceCard.css"

export const ExperienceCard = ({title, description, imgUrl}) =>{
    return (
        <Col sm={8} md={8}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="background for card" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    );
}