import React from 'react';
import {Button, Modal} from "react-bootstrap";

type DeletePopupProps = {
    onDeletePopupClose: () => void
    showDeletePopup: boolean
    onDelete: () => void
}

const DeletePopup: React.FC<DeletePopupProps> = (props) => {

    const { onDeletePopupClose, showDeletePopup, onDelete} = props;

    return (
        <Modal show={showDeletePopup} onHide={onDeletePopupClose}>
            <Modal.Header closeButton>
                <Modal.Title>Deletion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Do you really want to delete this?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onDeletePopupClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={() => {
                    onDeletePopupClose();
                    onDelete();
                }
                }>Delete This</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeletePopup;
