import React from 'react';
import {Col, ListGroup, Row} from "react-bootstrap";
import {IBook} from "../Types/Types";
import Book from "./Book";



type BookListProps = {
    books: IBook[] | null;
};

const BookList: React.FC<BookListProps> = (props) => {

    const {books} = props;

    return (
        <Row className="pe-0 me-0 my-0">
            <Col xs={12} className="pe-0 me-0">
                {books && <ListGroup>
                    {books.map((book: IBook, index: number) =>
                    {
                        return (
                            <ListGroup.Item key={index} className="border-0 px-0 me-0 py-0 my-0">
                                <Book book={book} index={index}/>
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

export default BookList;
