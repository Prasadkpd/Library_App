import React from 'react';
import {Col, ListGroup, Row} from "react-bootstrap";
import {IAuthor} from "../Types/Types";
import Author from "./Author";
import NoItemList from "../common/NoItemList";

type AuthorListProps = {
  authors: IAuthor[] | null
  onEditClicked: (index: number) => void,
  onAuthorDelete: (id: number) => void,
}
const AuthorList: React.FC<AuthorListProps> = (props) => {

  const {authors, onEditClicked, onAuthorDelete} = props;

  const AuthorListRendering = () => {
    if (!authors || authors.length===0){
      return <NoItemList itemType="Author"/>;
    }
    return <ListGroup>
      {authors.map((author: IAuthor, index: number) => {
        return (
            <ListGroup.Item key={index} className="border-0 px-0 me-0 py-0 my-0">
              <Author author={author} index={index} onAuthorDelete={onAuthorDelete}
                      onEditClicked={onEditClicked}/>
            </ListGroup.Item>
        )
      })
      }
    </ListGroup>;
  }


  return (
      <Row className="pe-0 me-0 my-0">
        <Col xs={12} className="pe-0 me-0">
          {AuthorListRendering()}
        </Col>
      </Row>
  );
};

export default AuthorList;
