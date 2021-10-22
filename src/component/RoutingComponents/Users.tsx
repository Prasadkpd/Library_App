import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import WelcomeImg from "../../assets/images/welcome-library.webp";

const Users: React.FC = () => {
    return (
        <Row className="welcome">
            <Col xs={12} className="text-lg-center">
                <h1 className="my-2 ps-md-3 ps-2">Users</h1>
            </Col>
            <Col xs={12} className="mx-0 px-0">
                <Image src={WelcomeImg} alt="Library Image"/>
            </Col>
            <Col xs={12} lg={6} className='m-auto text-center'>
                <p> The User can Add A author for this system and also he has the ability to edit or delete that author.
                    Next,
                    the user can add a book related to the authors in our system in that the user should enter the book
                    title,
                    book price and select the user from the drop-down list. And also user has the ability to edit and
                    delete the
                    books.</p>
            </Col>
        </Row>
    );
};

export default Users;
