import React, {useState} from 'react';
import {Col, Row} from "react-bootstrap";
import {IconContext} from "react-icons";
import {FiEdit, FiTrash2} from "react-icons/fi";
import {IBook} from "../Types/Types";
import DeletePopup from "../common/DeletePopup";

type BookProps = {
    book: IBook,
    index: number,
    onUpdateClick: (bool: boolean, index: number, book: IBook) => void;
    onBookDelete: (id: number) => void;
}

const Book: React.FC<BookProps> = (props) => {

    const {book,index, onBookDelete, onUpdateClick} = props;
    const [isShowDeletePopup, setShowDeletePopup] = useState<boolean>(false);
    const handleDeletePopUpShow = () => setShowDeletePopup(true);
    const handleDeletePopUpClose = () => setShowDeletePopup(false);

    return (
        <React.Fragment>
        <Row xs={12} className="ps-0 item py-1 d-flex align-items-center">
            <Col xs="8" lg="9" className="ps-0">
                <h5 className="p-0">{index + 1}. {book.name}</h5>
            </Col>
            <Col xs="4" lg="3" className="text-end">
                <IconContext.Provider value={{ size: "1em" }}>
                    <FiEdit className="mx-lg-2 icons text-warning" onClick={() => onUpdateClick(true, index,
                        book)}/>
                    <FiTrash2 className="icons text-danger mx-1" onClick={handleDeletePopUpShow}/>
                </IconContext.Provider>
            </Col>
        </Row>

        {isShowDeletePopup && (
            <DeletePopup onDeletePopupClose={handleDeletePopUpClose} showDeletePopup={isShowDeletePopup}
                         onDelete={() => onBookDelete(index)}/>
        )}
        </React.Fragment>
    );
};

export default Book;
