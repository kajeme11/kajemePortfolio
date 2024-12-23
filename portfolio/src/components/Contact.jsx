import { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import "./Contact.css";
import sayHi from '../assets/sayHi.png';

export const Contact = () => {

    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({...formDetails, [category] : value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch(process.env.REACT_APP_MAILER_URL + "/contact", {
            // let response = await fetch("http://localhost:3003/contact", {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        // console.log(response.status);
        console.log("Continueing post method!");   
        setFormDetails(formInitialDetails);
        if(response.status === 200){
            console.log("Successful call");
            console.log(formDetails);
            setStatus({success: true, message: 'Message sent successfully'});
        }else{
            console.log("Error, post not successful");
            setStatus({success: false, message: 'Something went wrong please try again later.'});
        }
    }

    return (
        <div className="contact" id="contact">
            <section className="contact-section" >
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <img className="hi" src={sayHi} alt="Contact me" />
                        </Col>
                        <Col md={6}>
                            <h2></h2>
                            <form onSubmit={handleSubmit}>
                                <Row>
                                    <Col sm={6} className="px-1">
                                        <input type="text" value={formDetails.firstName} placeholder="First Name" 
                                        onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                    </Col>
                                    <Col sm={6} className="px-1">
                                        <input type="text" value={formDetails.lastName} placeholder="Last Name" 
                                        onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                    </Col>
                                    <Col sm={6} className="px-1">
                                        <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                    </Col>
                                    <Col sm={6} className="px-1">
                                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                    </Col>
                                    <Col>
                                        <textarea row="6" value={formDetails.message} placeholder="Message me!" 
                                        onChange={(e) => onFormUpdate('message', e.target.value)} />
                                        <button type="submit"><span>{buttonText}</span></button>
                                    </Col>
                                    {
                                        status.message &&
                                        <Col>
                                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                        </Col>
                                    }
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}