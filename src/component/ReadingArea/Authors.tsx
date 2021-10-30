import React, {useEffect, useState} from 'react';
import Header from "../common/Header";
import {Row} from "react-bootstrap";
import AddItem from "../common/AddItem";
import AuthorList from "../authors/AuthorList";
import {IAuthor, IPopupAlert} from "../Types/Types";
import AuthorForm from "../authors/AuthorForm";
import PopupAlert from "../common/PopUpAlert";

type AuthorsProps = {
  authors: IAuthor[] | null,
  onAuthorChange: (author: IAuthor[]) => void,
}

const Authors: React.FC<AuthorsProps> = (props) => {

  const {authors, onAuthorChange} = props
  const [isShowAuthorForm, setIsShowAuthorForm] = useState<boolean>(false);
  const [popupAlert, setPopupAlert] = useState<IPopupAlert | null>(null);
  const [isShowPopupAlert, setIsShowPopupAlert] = useState<boolean>(false);
  const [editClicked, setEditClicked] = useState<boolean>(false);
  const [indexToEdit, setIndexToEdit] = useState<number | null>(null);
  const [authorToEdit, setAuthorToEdit] = useState<IAuthor | null>(null);

  const handleAddAuthorForm = () => {
    setEditClicked(false);
    setIndexToEdit(null);
    setIsShowAuthorForm(true);
  }

  const handleCloseAuthorForm = () => {
    setEditClicked(false);
    setIsShowAuthorForm(false);
    setAuthorToEdit(null)
  }

  const handleOnCreateAuthorSubmit = (newAuthor: IAuthor) => {
    const newAuthorList: IAuthor[] = authors ? authors.slice() : [];
    newAuthorList.push(newAuthor);
    onAuthorChange(newAuthorList);
    setPopupAlert({alert: "Author added Successfully", className: "alert-success"});
    setIsShowPopupAlert(true);
  }

  const handleEditButtonClick = (index: number) => {
    setEditClicked(true);
    setIsShowAuthorForm(true);
    setIndexToEdit(index);
  }

  const handleOnUpdateAuthorSubmit = (newAuthor: IAuthor) => {
    const newAuthorList: IAuthor[] = authors ? authors.slice() : [];
    if (indexToEdit === null) {
      return;
    }
    newAuthorList.splice(indexToEdit, 1, newAuthor);
    onAuthorChange(newAuthorList);
    setPopupAlert({alert: "Author Edited Successfully", className: "alert-warning"});
    setIsShowPopupAlert(true);
    setIsShowAuthorForm(false);
  }

  const handleOnAuthorDelete = (id: number) => {
    if (!authors) {
      return;
    }
    const newAuthorList: IAuthor[] = authors ? authors.slice() : [];
    newAuthorList.splice(id, 1);
    onAuthorChange(newAuthorList);
    setPopupAlert({alert: " Author Deleted Successfully", className: "alert-danger"});
    setIsShowPopupAlert(true);
  }

  const FormRendering = (isShowAuthorForm: boolean, editClicked: boolean) => {
    if (isShowAuthorForm) {
      if (!editClicked) {
        return <AuthorForm task="Create" editClicked={false} onCloseClick={handleCloseAuthorForm}
                           onCreateAuthorSubmit={handleOnCreateAuthorSubmit} authorToUpdate={null}/>
      }
      return <AuthorForm task="Update" editClicked={true} onCloseClick={handleCloseAuthorForm}
                         onCreateAuthorSubmit={handleOnUpdateAuthorSubmit}
                         authorToUpdate={authorToEdit}/>

    }
  }

  useEffect(() => {
    if (indexToEdit === null || !authors || !authors[indexToEdit]) {
      return;
    }
    setAuthorToEdit(authors[indexToEdit]);
  }, [indexToEdit, authors]);

  return (
      <Row>
        <Header header="Authors"/>
        <AuthorList authors={authors} onAuthorDelete={handleOnAuthorDelete}
                    onEditClicked={handleEditButtonClick}/>
        <PopupAlert alert={popupAlert} isPopupAlertShow={isShowPopupAlert}/>
        <AddItem itemType="Author" onAddClick={handleAddAuthorForm}/>
        {FormRendering(isShowAuthorForm, editClicked)}
      </Row>
  );
};

export default Authors;
