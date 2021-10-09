import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import WelcomeView from "./welcome/WelcomeView";

const LibraryApp: React.FC = () => {
    return (
        <Container fluid={true}>
            <Row>
                <Col xs={12}>
                    <WelcomeView />
                </Col>
            </Row>
        </Container>
    );
};

export default LibraryApp;
