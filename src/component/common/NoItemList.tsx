import React from 'react';
import {Col, Row} from "react-bootstrap";

type NoItemListProps = {
    itemType: string
}

const NoItemList: React.FC<NoItemListProps> = (props) => {

    const {itemType} = props;

    return (
        <Row xs={12}>
            <Col className="px-0 no-item-list">
                No {itemType} listed here.
            </Col>
        </Row>
    );
};

export default NoItemList;
