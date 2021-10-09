import React from 'react';
import {Col, Row} from "react-bootstrap";
import {FiEdit, FiTrash2} from "react-icons/fi";
import {IconContext} from "react-icons";
import {IAuthor} from "../Types/Types";

type AuthorProps = {
    author: IAuthor
    index: number
}

const Author: React.FC<AuthorProps> = (props) => {

    const {author,index} = props

    return (
        <Row xs={12} className="ps-0 item py-1 d-flex align-items-center">
            <Col xs="8" lg="9" className="ps-0">
                <h5 className="p-0">{index + 1}. {author.name}</h5>
            </Col>
            <Col xs="4" lg="3" className="text-end">
                <IconContext.Provider value={{ size: "1em" }}>
                    <FiEdit className="mx-lg-2 icons text-warning"/>
                    <FiTrash2 className="icons text-danger mx-1 "/>
                </IconContext.Provider>
            </Col>
        </Row>
    );
};

export default Author;
