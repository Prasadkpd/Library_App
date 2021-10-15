import React, {useState} from 'react';
import {Col, Form, FormControl, Row} from "react-bootstrap";
import {FiXCircle} from "react-icons/fi";
import FormButton from "../common/FormButton";
import {IAuthor, selectorOptionType} from "../Types/Types";
import CurrencyInput from "react-currency-input-field";
import Select from "react-select";

type BookFormProps = {
    task: string,
    onCloseClick: () => void,
    editClicked: boolean
}

const BookForm: React.FC<BookFormProps> = (props) => {

    const {task, onCloseClick, editClicked} = props;
    const prefix = "Rs";
    const [optionList, setOptionList] = useState<selectorOptionType[] | null>(null);
    const [selectorBorderColor, setSelectorBorderColor] = useState<string>("#959595");

    const customStyles = {
      control: (provided: any) => ({
          ...provided,
          border: `2px solid ${selectorBorderColor}`,
          borderRadius: "0px"
      }),
    };

    return (
        <Col xs={12} lg={10} className="form mt-5 px-0 ms-lg-2">
            <Col xs={12} lg={12} md={12}>
                <Row className="form-title" xs={12} lg={10} md={12}>
                    <Col lg={9} xs={8} className="p-lg-1 d-flex align-items-center">
                        <h5><label>{task} Book</label></h5>
                    </Col>
                    <Col lg={3} xs={4} className="text-end text-lg-start">
                        <FiXCircle size={22} className="ms-lg-3 ms-4 closebtn" onClick={() => onCloseClick()}/>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} lg={{span: 11, offset: 1}} className="px-0">
                <Form className="mt-3 col-lg-10 col-md-12">
                    <Form.Group>
                        <Form.Label className="mb-1 form-label ms-1">Book Title</Form.Label>
                        <Form.Control type="text" required className='form-input py-lg-1'/>
                        <FormControl.Feedback type='invalid'>
                            <p className="text-danger fw-bold">Please Enter Book title</p>
                        </FormControl.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="mb-1 form-label ms-1">Price</Form.Label>
                        <CurrencyInput placeholder="Please enter a number"
                                        prefix={prefix}
                                        step={1}
                                        className={`form-control form-input`}/>
                        <FormControl.Feedback type='invalid'>
                            <p className="text-danger fw-bold">Please Enter Book Price</p>
                        </FormControl.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="mb-1 form-label ms-1">Author</Form.Label>
                        <Select isSearchable
                                isClearable
                                options={!optionList ? [] : optionList}
                                styles={customStyles}/>
                        <FormControl.Feedback type='invalid'>
                            <p className="text-danger fw-bold">Please Select author</p>
                        </FormControl.Feedback>
                    </Form.Group>
                    <FormButton editClicked={editClicked}/>
                </Form>
            </Col>
        </Col>
    );
};

export default BookForm;
