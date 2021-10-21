import React, {useState} from 'react';
import {Col, Row} from "react-bootstrap";
import Authors from "./Authors";
import {IAuthor} from "../Types/Types";
import Books from "./Books";

const ReadingArea: React.FC = () => {

    const [authors, setAuthors] = useState<IAuthor[] | null>(null);

    const handleOnAuthorChange = (authors: IAuthor[]) => {
        setAuthors(authors);
    };

    return (
        <Row className="reading-area mt-4 d-flex flex-lg-row flex-md-row flex-column-reverse">
            <Col xs={12} md={6} lg={6} className="px-lg-5 px-4 mb-5">
                <Books authors={authors}/>
            </Col>
            <Col xs={12} md={6} lg={6} className="px-lg-5 px-4 mb-5">
                <Authors authors={authors} onAuthorChange={handleOnAuthorChange}/>
            </Col>
        </Row>
    );
};

export default ReadingArea;
