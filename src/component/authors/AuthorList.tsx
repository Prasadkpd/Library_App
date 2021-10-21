import React from 'react';
import {Col, ListGroup, Row} from "react-bootstrap";
import {IAuthor} from "../Types/Types";
import Author from "./Author";

type AuthorListProps = {
    authors: IAuthor[] | null
    onEditClicked: (bool: boolean, index: number) => void,
    onAuthorDelete: (id: number) => void,
}
const AuthorList: React.FC<AuthorListProps> = (props) => {

    const {authors, onEditClicked, onAuthorDelete} = props

    return (
        <Row className="pe-0 me-0 my-0">
            <Col xs={12} className="pe-0 me-0">
                {authors && <ListGroup>
                    {authors.map((author: IAuthor, index: number) => {
                        return (
                            <ListGroup.Item key={index} className="border-0 px-0 me-0 py-0 my-0">
                                <Author author={author} index={index} onAuthorDelete={onAuthorDelete}
                                        onEditClicked={onEditClicked}/>
                            </ListGroup.Item>
                        )
                    })
                    }
                </ListGroup>
                }
            </Col>
        </Row>
    );
};

export default AuthorList;
