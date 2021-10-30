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
          <p>This is a library app developed by me. I am a Student At the University of Colombo School of Computing We
            used React typescript, Functional components, React hooks, React Bootstrap, React- Select dependencies &
            React Number Format. In this, I have followed the agile approach & branching workflow when working on this
            Project. As well as This is also mobile responsive and all User experience is there and has a pixel-perfect
            design. Source Code:<a href='https://github.com/Prasadkpd/React-Library-app'>https://github.com/Prasadkpd/React-Library-app</a></p>
        </Col>
      </Row>
  );
};

export default AboutUs;
