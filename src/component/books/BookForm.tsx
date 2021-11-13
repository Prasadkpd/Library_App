import React, {ChangeEvent, FormEvent, useState, useEffect} from "react";
import {Col, Form, Row, Button} from "react-bootstrap";
import {FiXCircle} from "react-icons/fi";
import Select from "react-select";
import Price from "./Price";
import {IAuthor, IBook, selectorOptionType} from "../Types/Types";

type BookFormProps = {
  onCloseClick: () => void;
  onCreateBookSubmit: (newBook: IBook) => void;
  authorList: IAuthor[] | null;
};

const BookForm: React.FC<BookFormProps> = (props) => {
  const {onCloseClick, onCreateBookSubmit, authorList} = props;
  const [title, setTitle] = useState<string | null>(null);
  const [price, setPrice] = useState<string>("");
  const [author, setAuthor] = useState<IAuthor | null>(null);
  const [isFormValidate, setIsFormValidate] = useState<boolean>(false);
  const [isSelectorValidate, setIsSelectorValidate] = useState<boolean>(false);
  const [optionList, setOptionList] = useState<selectorOptionType[] | null>(
      null
  );
  const [selectorBorderColor, setSelectorBorderColor] =
      useState<string>("#959595");
  const [isPriceValidate, setIsPriceValidate] = useState<boolean>(false);

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

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    author === null
        ? setSelectorBorderColor("#f80046")
        : setSelectorBorderColor("#198754");
    if (
        title === null ||
        price === null ||
        title === "" ||
        price === "" ||
        author === null
    ) {
      setIsFormValidate(true);
      if (author === null) setIsSelectorValidate(true);
      if (price === "") setIsPriceValidate(true);
    } else {
      const newBook: IBook = {
        name: title,
        price: price,
        author: author,
      };
      onCreateBookSubmit(newBook);
      setIsSelectorValidate(false)
      setIsPriceValidate(false)
      onCloseClick();
    }
  };

  const handlePriceChange = (price: string) => {
    if (price === "") {
      setIsPriceValidate(true)
    } else {
      setPrice(price)
      setIsPriceValidate(false)
    }
  };
  const handleOnTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleOnAuthorChange = (option: any) => {
    if (option) {
      setAuthor(option.value);
      if (isSelectorValidate) {
        setSelectorBorderColor("#198754");
        setIsSelectorValidate(false)
      }
    } else {
      setAuthor(null);
      if (isSelectorValidate) {
        setSelectorBorderColor("#f80046");
        setIsSelectorValidate(true)
      }
    }
  };

  return (
      <Row className="book-form p-0 mt-5 m-0" lg={8}>
        <Col xs={12} lg={8} md={12} className="p-0 ">
          <span className="create-book">Create Book</span>
          <FiXCircle
              size={22}
              className="close-button float-end"
              onClick={() => onCloseClick()}
          />
        </Col>
        <Col xs={12} className="p-0 mt-3" lg={8}>
          <Form
              onSubmit={handleOnSubmit}
              validated={isFormValidate}
              noValidate
              className="ms-lg-5"
          >
            <Form.Group>
              <Form.Label className="mb-0 ms-1 form-label mt-2">
                Book Title
              </Form.Label>
              <Form.Control
                  size="sm"
                  required
                  type="text"
                  onChange={handleOnTitleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please Enter Book Title
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Price onPriceChange={handlePriceChange} currentPrice={price} isValid={isPriceValidate}/>
            </Form.Group>
            <Form.Group>
              <Form.Label className="mb-0 ms-1 form-label mt-3">
                Author
              </Form.Label>
              <Select
                  className="select-control"
                  classNamePrefix="select-control"
                  isSearchable
                  isClearable
                  options={!optionList ? [] : optionList}
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
                type="submit"
            >
              Create
            </Button>
          </Form>
        </Col>
      </Row>
  );
};

export default BookForm;
