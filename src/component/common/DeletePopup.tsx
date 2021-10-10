import React from 'react';
import {Button, Modal} from "react-bootstrap";

type DeletePopupProps = {
    onDeletePopupClose:() => void
    showDeletePopup: boolean
    onDelete:() => void
}

const DeletePopup: React.FC<DeletePopupProps> = (props) => {

    return (

        <Modal show={props.showDeletePopup} onHide={props.onDeletePopupClose} >
            <Modal.Header closeButton>
                <Modal.Title>Deletion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Do you really want to delete this?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onDeletePopupClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={() =>{
                    props.onDeletePopupClose();
                    props.onDelete();
                }
                }>Delete This</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeletePopup;
