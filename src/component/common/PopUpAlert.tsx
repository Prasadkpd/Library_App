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
    const [popupAlert, setPopupAlert] = useState<IPopupAlert | null>(null);
    const [isShowPopupAlert, setShowPopupAlert] = useState<Boolean>(false);

    const handleClosePopupAlert = () => {
        setShowPopupAlert(false);
    }

    useEffect(() => {
        if (alert) {
            setPopupAlert(alert);
            setShowPopupAlert(isShowPopupAlert);
        }
        setTimeout(() => {
            setShowPopupAlert(false)
        }, 10000);
    }, [alert, isShowPopupAlert])


    return (
        <React.Fragment>
            {isShowPopupAlert &&
            <Row xs={12} className={popupAlert?.className + " mt-2 p-1 d-flex align-items-center pop_up m-auto"}>
                <Col lg={11} xs={10} className='d-flex align-items-center'>
                    <FiMessageCircle className="me-1" size={22}/>
                    {popupAlert?.alert}
                </Col>
                <Col lg={1} xs={2} className="pe-0 text-center">
                    <FiX onClick={handleClosePopupAlert} className='popup-close' size={22}/>
                </Col>
            </Row>
            }
        </React.Fragment>

    );
};

export default PopupAlert;
