import React from 'react';
import {Col, Row} from "react-bootstrap";
import { FiPlus} from "react-icons/fi";
import {IconContext} from "react-icons";

type AddItemProps = {
    item_type: string
    onAddClick: (clicked: boolean) => void
}

const AddItem: React.FC<AddItemProps> = (props) => {

    const {item_type,onAddClick} = props

    return (
        <Row xs={3} className="mt-3 ps-2">
            <Col xs={5} lg={3} md={5} className="px-0 add-item d-flex align-items-end" onClick={() =>
                onAddClick(true)}>
                <IconContext.Provider
                    value={{
                        color:"#0f4aa6",
                        className:"global-class-name",
                        size:"1.5em",
                    }}
                >
                <FiPlus className="px-0 me-2"/>
                <span>Add {item_type}</span>
                </IconContext.Provider>
            </Col>
        </Row>
    );
};

export default AddItem;
