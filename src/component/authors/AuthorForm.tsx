import React from 'react';
import {Col, Form, Row, FormControl} from "react-bootstrap";
import {FiXCircle} from "react-icons/fi";
import FormButton from "../common/FormButton";

type AuthorFormProps = {
    task:string
    editClicked: boolean
    onCloseClick: () => void
}

const AuthorForm: React.FC<AuthorFormProps> = (props) => {

    const {task, editClicked, onCloseClick} = props

    return (
        <Col xs={12} lg={10} className="form mt-5 px-0 ms-lg-2">
            <Col xs={12} lg={12} md={12}>
                <Row className="form-title" xs={12} lg={10} md={12}>
                    <Col lg={9} xs={8} className="p-lg-1 d-flex align-items-center">
                        <h5><label>{task} Author</label></h5>
                    </Col>
                    <Col lg={3} xs={4} className="text-end text-lg-start">
                        <FiXCircle size={22} className="ms-lg-3 ms-4 closebtn" onClick={() => onCloseClick()}/>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} lg={{span: 11, offset: 1}} className="px-0">
                <Form className="mt-3 col-lg-10 col-md-12">
                    <Form.Group>
                        <Form.Label className="mb-1 form-label ms-1">Name of Author</Form.Label>
                        <Form.Control type="text" required className='form-input py-lg-1'
                        />
                        <FormControl.Feedback type='invalid'>
                            <p className="text-danger fw-bold">Please Enter Author Name</p>
                        </FormControl.Feedback>
                    </Form.Group>
                    <FormButton editClicked={editClicked}/>
                </Form>
            </Col>
        </Col>
    );
};

export default AuthorForm;
