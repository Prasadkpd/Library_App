import React from 'react';
import {Col} from "react-bootstrap";

type HeaderProps = {
    header: string
}

const Header: React.FC<HeaderProps> = (props) => {

    const {header} = props;

    return (
        <Col xs={12} className='header pb-1 px-0 mb-4'>
            <h2>{header}</h2>
        </Col>
    );
};

export default Header;
