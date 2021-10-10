import React, {useEffect, useState} from 'react';
import {FiMessageCircle, FiX} from "react-icons/fi";
import {IPopupAlert} from "../Types/Types";
import {Col, Row} from "react-bootstrap";

type PopupAlertProps = {
    alert: IPopupAlert | null,
    isPopupAlertShow: boolean
}

const PopupAlert: React.FC<PopupAlertProps> = (props) => {

    const {alert} = props;
    const [popupAlert, setPopupAlert] = useState<IPopupAlert | null >(null);
    const [isPopupAlertShow, setPopupAlertShow] = useState<Boolean>(false);

    const handleClosePopupAlert = () => {
        setPopupAlertShow(false);
    }

    useEffect(() =>{
        if(alert) {
            setPopupAlert(alert);
            setPopupAlertShow(props.isPopupAlertShow);
        }
        setTimeout(() => {
            setPopupAlertShow(false)
        },2000);
    },[alert, props.isPopupAlertShow])


    return (
        <React.Fragment>
            {isPopupAlertShow &&
            <Row xs={12} className={popupAlert?.className + " p-1 d-flex align-items-center pop_up"}>
                <Col lg={11} xs={10} className='d-flex align-items-center'>
                    <FiMessageCircle className="me-1" size={22}/>
                    {popupAlert?.alert}
                </Col>
                <Col lg={1} xs={2} className="pe-0">
                    <FiX onClick={handleClosePopupAlert} size={22}/>
                </Col>
            </Row>
            }
        </React.Fragment>

    );
};

export default PopupAlert;
