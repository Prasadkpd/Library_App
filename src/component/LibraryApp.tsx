import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import WelcomeView from "./welcome/WelcomeView";
import ReadingArea from "./ReadingArea/ReadingArea";
import Footer from "./common/Footer";

const LibraryApp: React.FC = () => {
    return (
        <Container fluid={true}>
            <Row>
                <Col xs={12}>
                    <WelcomeView/>
                </Col>
                <Col xs={12}>
                    <ReadingArea/>
                </Col>
            </Row>
            <Row>
                <Footer/>
            </Row>
        </Container>
    );
};

export default LibraryApp;
