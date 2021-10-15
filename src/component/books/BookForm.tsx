import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {Col, Form, FormControl, Row} from "react-bootstrap";
import {FiXCircle} from "react-icons/fi";
import FormButton from "../common/FormButton";
import {IAuthor, IBook, selectorOptionType} from "../Types/Types";
import CurrencyInput from "react-currency-input-field";
import Select from "react-select";
import {CurrencyInputOnChangeValues, CurrencyInputProps}
    from "react-currency-input-field/dist/components/CurrencyInputProps";

type BookFormProps = {
    task: string,
    onCloseClick: () => void,
    editClicked: boolean,
    onCreateBookSubmit: (newBook: IBook) => void,
    authorList: IAuthor[] | null,
}

const BookForm: React.FC<BookFormProps> = (props) => {

    const {task, onCloseClick, editClicked, onCreateBookSubmit, authorList} = props;
    const [title, setTitle] = useState<string | null>(null);
    const [price, setPrice] = useState<string | null>(null);
    const [author, setAuthor] = useState<IAuthor | null>(null);
    const [isFormValidate, setIsFormValidate] = useState<boolean>(false);
    const [isSelectorValidate, setIsSelectorValidate] = useState<boolean>(false);
    const [selectorBorderColor, setSelectorBorderColor] = useState<string>("#959595");
    const [optionList, setOptionList] = useState<selectorOptionType[] | null>(null);

    const prefix = "Rs";
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [className, setClassName] = useState<string>("");
    const [value, setValue] = useState<string | number>(0);
    const [values, setValues] = useState<CurrencyInputOnChangeValues>();
    const [rawValue, setRawValue] = useState<string | undefined>("");


    const customStyles = {
      control: (provided: any) => ({
          ...provided,
          border: `2px solid ${selectorBorderColor}`,
          borderRadius: "0px"
      }),
    };

    const handleOnTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const handleOnPriceChange: CurrencyInputProps['onValueChange'] = (value, _,
                                                                      values): void => {
        setValues(values);
        setRawValue(value === undefined ? 'undefined' : value || ' ');

        if(!value) {
            setClassName('');
            setValue('');
            return;
        }

        if (Number.isNaN(Number(value))){
            setErrorMessage('Please enter a valid number');
            setClassName('is-invalid');
            return;
        }

        setClassName('is-valid');
        setPrice(value);
    }

    const handleOnAuthorChange = (option : any) => {
      if (option) {
          setAuthor(option.value);
          if (isSelectorValidate) {
              setSelectorBorderColor("#6AB867");
          }
      } else {
          setAuthor(null);
          if (isSelectorValidate) {
              setSelectorBorderColor("#f80046");
          }
      }
    };

    const handleOnBookSubmit = (e: FormEvent) => {
      e.preventDefault();
      author === null ? setSelectorBorderColor("#f80046") : setSelectorBorderColor("#6AB867");

      if (title === null || price === null || title === "" || price === "" || author === null) {
          setIsFormValidate(true);
          setIsSelectorValidate(true);
      } else {
          const newBook: IBook = {
              name: title,
              price: price,
              author: author
          };
          onCreateBookSubmit(newBook);
          onCloseClick();
      }
    }

    useEffect(() => {
        if (!authorList) {
            return ;
        }
        let options: selectorOptionType[] = [];
        for (let i = 0; i < authorList.length; i++) {
            options.push({
                label: authorList[i].name,
                value: authorList[i]
            });
        }
        setOptionList(options)
    }, [authorList]);

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
                <Form className="mt-3 col-lg-10 col-md-12" onSubmit={handleOnBookSubmit} validated={isFormValidate}
                      noValidate>
                    <Form.Group>
                        <Form.Label className="mb-1 form-label ms-1">Book Title</Form.Label>
                        <Form.Control type="text" required className='form-input py-lg-1'
                                      onChange={handleOnTitleChange}/>
                        <FormControl.Feedback type='invalid'>
                            <p className="text-danger fw-bold">Please Enter Book title</p>
                        </FormControl.Feedback>
                        </Form.Group>
                        <Form.Group>
                        <Form.Label className="mb-1 form-label ms-1">Price</Form.Label>
                        <CurrencyInput placeholder="Please enter a number"
                                        prefix={prefix}
                                        step={1}
                                        className={`form-control form-input`}
                                        onValueChange={handleOnPriceChange}/>
                        <FormControl.Feedback type='invalid'>
                            <p className="text-danger fw-bold">{errorMessage}</p>
                        </FormControl.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="mb-1 form-label ms-1">Author</Form.Label>
                        <Select isSearchable
                                isClearable
                                options={!optionList ? [] : optionList}
                                styles={customStyles}
                                onChange={handleOnAuthorChange}/>
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
