import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {Col, Form, Row, FormControl} from "react-bootstrap";
import {FiXCircle} from "react-icons/fi";
import FormButton from "../common/FormButton";
import {IAuthor} from "../Types/Types";

type AuthorFormProps = {
  task: string
  editClicked: boolean
  onCloseClick: () => void
  onCreateAuthorSubmit: (newAuthor: IAuthor) => void,
  authorToUpdate: IAuthor | null
}

const AuthorForm: React.FC<AuthorFormProps> = (props) => {

  const {task, editClicked, onCloseClick, onCreateAuthorSubmit, authorToUpdate} = props;
  const [author, setAuthor] = useState<string>("");
  const [isFormValidate, setIsFormValidate] = useState<boolean>(false);

  const handleOnInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsFormValidate(false);
    let authorInput = String(e.target.value);
    authorInput = authorInput.trimStart();
    setAuthor(authorInput);
  }

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (author === '' || author === null) {
      setIsFormValidate(true);
    } else {
      const newAuthor: IAuthor = {
        name: author,
      }
      onCreateAuthorSubmit(newAuthor);
      setAuthor("");
    }
  }

  useEffect(() => {
    if (!authorToUpdate) {
      return;
    }
    setAuthor(authorToUpdate.name);
  }, [authorToUpdate])

  return (
      <Col xs={12} md={12} lg={8} className="form mt-5 px-0 ms-lg-2">
        <Col xs={12} lg={12} md={12}>
          <Row className="form-title" xs={12} lg={10} md={12}>
            <Col lg={9} xs={8} className="p-lg-1 d-flex align-items-center">
              <h5>{task} Author</h5>
            </Col>
            <Col lg={3} xs={4} className="text-end">
              <FiXCircle size={22} className="ms-lg-3 ms-4 close-btn" onClick={() => onCloseClick()}/>
            </Col>
          </Row>
        </Col>
        <Col xs={12} lg={{span: 11, offset: 1}} className="px-0">
          <Form className="mt-3" onSubmit={handleOnSubmit} validated={isFormValidate}
                noValidate>
            <Form.Group>
              <Form.Label className="mb-1 form-label ms-1">Name of Author</Form.Label>
              <Form.Control type="text" required className='form-input py-lg-1'
                            onChange={handleOnInputChange} value={author ? author : ''}/>
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
