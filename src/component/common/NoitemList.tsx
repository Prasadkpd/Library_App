import React from 'react';
import {Col, Row} from "react-bootstrap";

type NoitemListProps = {
    itemtype: string
}

const NoitemList: React.FC<NoitemListProps> = (props) => {
    return (
        <Row xs={12}>
            <Col className="px-0 no-item-list">
                No {props.itemtype} listed here.
            </Col>
        </Row>
    );
};

export default NoitemList;
