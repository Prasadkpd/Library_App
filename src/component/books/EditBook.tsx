import React, {ChangeEvent, useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {FiXCircle} from "react-icons/fi";
import Select from "react-select";
import {Price} from "./Price";
import {IAuthor, IBook, selectorOptionType} from "../Types/Types";

type EditBookProps = {
    onCloseClick: () => void;
    onUpdateAuthor: (index: number | null, updatedBook: IBook) => void;
    book: IBook | null;
    index: number | null;
    authorList: IAuthor[] | null;
};

const EditBook: React.FC<EditBookProps> = (props) => {

    const {book, index, onCloseClick, onUpdateAuthor, authorList} = props;
    const [bookTitle, setBookTitle] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [bookAuthor, setBookAuthor] = useState<IAuthor | null>(null);
    const [isFormValidate, setIsFormValidate] = useState<boolean>(false);
    const [optionList, setOptionList] = useState<selectorOptionType[] | null>(null);
    const [selectorBorderColor, setSelectorBorderColor] = useState<string>("#959595");
    const [isSelectorValidate, setIsSelectorValidate] = useState<boolean>(false);

    useEffect(() => {
        if (!book) {
            return;
        }
        setBookAuthor(book?.author);
        setBookTitle(book.name);
        setPrice(book.price);
    }, [book]);

    useEffect(() => {
        if (!authorList) {
            return;
        }
        let options: selectorOptionType[] = [];
        for (let i = 0; i < authorList.length; i++) {
            options.push({
                label: authorList[i].name,
                value: authorList[i],
            });
        }
        setOptionList(options);
    }, [authorList]);

    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            border: `2px solid ${selectorBorderColor}`,
            borderRadius: "0px",
        }),
    };

    const handleOnTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBookTitle(e.target.value);
    };

    const handlePriceChange = (price: string) => {
        setPrice(price);
    };

    const handleOnAuthorChange = (option: any) => {
        if (option) {
            setBookAuthor(option.value);
            setIsSelectorValidate(false)
            setSelectorBorderColor("#198754");
        } else {
            setBookAuthor(null);
            setSelectorBorderColor("#f80046");
        }
    };

    const handleOnUpdateAuthor = () => {
        if (bookTitle === '' || bookTitle === null || bookAuthor === null || price === null || price === "") {

            if (bookAuthor === null) setIsSelectorValidate(true);
            setIsFormValidate(true);
        } else {
            let updatedBook: IBook;
            updatedBook = {
                name: bookTitle,
                price: price,
                author: bookAuthor
            };
            setIsSelectorValidate(false)
            onUpdateAuthor(index, updatedBook);
        }
    };

    return (
        <Row className="book-form p-0 mt-5 m-0" lg={8}>
            <Col xs={12} lg={8} md={12} className="p-0 ">
                <span className="create-book">Update Book</span>
                <FiXCircle className="close-button float-end" size={22} onClick={() => onCloseClick()}/>
            </Col>
            <Col xs={12} className="p-0 mt-3" lg={8}>

                <Form
                    className="ms-lg-5"
                    onSubmit={onCloseClick}
                    validated={isFormValidate}
                    noValidate
                >
                    <Form.Group>
                        <Form.Label className="mb-0 ms-1 form-label mt-2">Book Title</Form.Label>
                        <Form.Control
                            size="sm"
                            type="text"
                            onChange={handleOnTitleChange}
                            value={bookTitle ? bookTitle : ''}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please Enter Book Title
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Price onPriceChange={handlePriceChange} currentPrice={price} isValid={isSelectorValidate}/>

                    <Form.Group>
                        <Form.Label className="mb-0 ms-1 form-label mt-3">Author</Form.Label>
                        <Select
                            className="select-control"
                            classNamePrefix="select-control"
                            isSearchable
                            isClearable
                            placeholder={null}
                            options={!optionList ? [] : optionList}
                            value={optionList?.filter(option => option.label === bookAuthor?.name)}
                            styles={customStyles}
                            onChange={handleOnAuthorChange}
                        />
                        {isSelectorValidate &&
                        <small className="text-danger fw-bold">
                            Please Select An Author
                        </small>
                        }
                    </Form.Group>

                    <Button
                        className="form-button mt-4 px-4 py-1 float-end"
                        onClick={handleOnUpdateAuthor}
                    >
                        Update
                    </Button>
                </Form>
            </Col>
        </Row>
    );
};

export default EditBook;



