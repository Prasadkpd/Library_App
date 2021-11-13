import React, {useState} from 'react';
import {Col, Row} from "react-bootstrap";
import {FiEdit, FiTrash2} from "react-icons/fi";
import {IAuthor} from "../Types/Types";
import DeletePopup from "../common/DeletePopup";

type AuthorProps = {
  author: IAuthor,
  index: number,
  onEditClicked: (index: number) => void,
  onAuthorDelete: (id: number) => void
}

const Author: React.FC<AuthorProps> = (props) => {

  const {author, index, onEditClicked, onAuthorDelete} = props;
  const [isShowDeletePopup, setShowDeletePopup] = useState<boolean>(false);
  const handleDeletePopUpShow = () => setShowDeletePopup(true);
  const handleDeletePopUpClose = () => setShowDeletePopup(false);

  return (
      <React.Fragment>
        <Row xs={12} className="ps-0 item py-1 d-flex align-items-center">
          <Col xs="8" lg="9" className="ps-0">
            <h5 className="p-0">{index + 1}. {author.name}</h5>
          </Col>
          <Col xs="4" lg="3" className="text-end">
            <FiEdit className="mx-lg-2 icons text-warning mx-md-3 mx-3"
                    onClick={() => onEditClicked(index)}/>
            <FiTrash2 className="icons text-danger mx-1" onClick={handleDeletePopUpShow}/>
          </Col>
        </Row>
        {isShowDeletePopup && <DeletePopup onDeletePopupClose={handleDeletePopUpClose}
                                           onDelete={() => onAuthorDelete(index)}
        />}
      </React.Fragment>
  );
};

export default Author;
