import React, {useState} from 'react';
import {Row} from "react-bootstrap";
import Header from "../common/Header";
import {IAuthor, IBook, IPopupAlert} from "../Types/Types";
import NoitemList from "../common/NoitemList";
import BookList from "../books/BookList";
import AddItem from "../common/AddItem";
import BookForm from "../books/BookForm";
import PopupAlert from "../common/PopUpAlert";

type BooksProps = {
    authors: IAuthor[] | null
}

const Books: React.FC<BooksProps> = (props) => {

    const {authors} = props;
    const [books, setBooks] = useState<IBook[] | null>(null);
    const [isShowBookForm, setIsShowBookForm] = useState<boolean>(false);
    const [editClicked, setEditClicked] = useState<boolean>(false);
    const [popupAlert, setPopupAlert] = useState<IPopupAlert | null>(null);
    const [isShowPopupAlert,setIsShowPopupAlert] = useState<boolean>(false);
    const [indexToEdit, setIndexToEdit] = useState<number | null> (null);
    const [BookToEdit, setBookToEdit] = useState<IBook | null>(null);

    const handleAddBookForm = () => {
      setEditClicked(false);
      setIsShowBookForm(true);
    }
    
    const handleCloseBookForm = () => {
      setEditClicked(false);
      setIsShowBookForm(false);
    }

    const handleOnCreateBookSubmit = (newBook: IBook) => {
      const newBookList: IBook[] = books ? books.slice() : [];
      newBookList.push(newBook);
      setBooks(newBookList);
      setPopupAlert({
          alert: "New Book added Successfully",
          className:"alert-success"
      });
      setIsShowPopupAlert(true);
    };

    const handleEditButtonClick = (bool: boolean, index: number, book: IBook) => {
        setEditClicked(bool);
        setIsShowBookForm(bool);
        if (book) {
            setIndexToEdit(index);
            setBookToEdit(book);
        }
    }

    const handleOnUpdateBookSubmit = (newBook: IBook) => {
        if (indexToEdit === null) {
            return;
        }
        const newBookList: IBook[] = books ? books.slice() : [];
        newBookList.splice(indexToEdit,1,newBook)
        setBooks(newBookList);
        setPopupAlert({
            alert: "New Book Updated Successfully",
            className:"alert-warning"
        });
        setIsShowPopupAlert(true);
        handleCloseBookForm();
    }
    
    const handleOnBookDelete = (id: number) => {
      if (!books){
          return;
      }
      const newBookList: IBook[] = books ? books.slice() : [];
      newBookList.splice(id, 1);
      setBooks(newBookList);
      setPopupAlert({
          alert: "New Book Deleted Successfully",
          className:"alert-danger"
      });
      setIsShowPopupAlert(true);
    }

    
    const FormRendering = (isShowBookForm: boolean, editClicked:boolean) => {
        if(isShowBookForm){
            if(!editClicked){
                return <BookForm task="Create" onCloseClick={handleCloseBookForm} editClicked={false}
                                 onCreateBookSubmit={handleOnCreateBookSubmit} authorList={authors} />
            }
            else {
                return <BookForm task="Update" onCloseClick={handleCloseBookForm} editClicked={true}
                                 onCreateBookSubmit={handleOnUpdateBookSubmit} authorList={authors}/>
            }
        }
    }


    
    return (
        <Row>
            <Header header={"Books"}/>
            {(!books || books.length === 0) && <NoitemList itemtype="Books"/>}
            {(books) && <BookList books={books} onUpdateClick={handleEditButtonClick}
                                  onBookDelete={handleOnBookDelete}/>}
            <PopupAlert alert={popupAlert} isPopupAlertShow={isShowPopupAlert}/>
            <AddItem item_type={"Book"} onAddClick={handleAddBookForm}/>
            {FormRendering(isShowBookForm,editClicked)}
        </Row>
    );
};

export default Books;
