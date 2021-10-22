import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import WelcomeImg from "../../assets/images/welcome-library.webp";

const AboutUs: React.FC = () => {
    return (
        <Row className="welcome">
            <Col xs={12} className="text-lg-center">
                <h1 className="my-2 ps-md-3 ps-2">About</h1>
            </Col>
            <Col xs={12} className="mx-0 px-0">
                <Image src={WelcomeImg} alt="Library Image"/>
            </Col>
            <Col xs={12} lg={6} className='m-auto text-center'>
                <p>This is a library app developed by Sparks in React Base Industrial Training. We used React
                    typescript, Functional components, React hooks, React Bootstrap & React- Select dependencies.In
                    this, we followed the agile approach when working as a team. This is also mobile responsive and all
                    User experience is there and A pixel-perfect design.</p>
            </Col>
        </Row>
    );
};

export default AboutUs;
