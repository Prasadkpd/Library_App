import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import WelcomeView from "./welcome/WelcomeView";
import ReadingArea from "./ReadingArea/ReadingArea";

const LibraryApp: React.FC = () => {
    return (
        <Container fluid={true}>
            <Row>
                <Col xs={12}>
                    <WelcomeView />
                </Col>
                <Col xs={12}>
                    <ReadingArea/>
                </Col>
            </Row>
        </Container>
    );
};

export default LibraryApp;
