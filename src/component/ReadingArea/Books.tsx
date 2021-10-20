import React, {useState} from "react";
import {Row} from "react-bootstrap";
import {IAuthor, IBook, IPopupAlert} from "../Types/Types";
import Header from "../common/Header";
import BookForm from "../books/BookForm";
import BookList from "../books/BookList";
import NoitemList from "../common/NoitemList";
import PopupAlert from "../common/PopUpAlert";
import AddItem from "../common/AddItem";
import EditBook from "../books/EditBook";

type BooksProps = {
    authors: IAuthor[] | null;
};

const Books: React.FC<BooksProps> = (props) => {
    const [bookList, setBookList] = useState<IBook[] | null>(null);
    const [showBookForm, setShowBookForm] = useState<boolean>(false);
    const [editClicked, setEditClicked] = useState<boolean>(false);
    const [indexToEdit, setIndexToEdit] = useState<number | null>(null);
    const [bookNameToEdit, setBookNameToEdit] = useState<IBook | null>(null);
    const [popupAlert, setPopupAlert] = useState<IPopupAlert | null>(null);
    const [showPopupAlert, setShowPopupAlert] = useState<boolean>(false);

    const handleAddBookForm = () => {
        setEditClicked(false);
        setShowBookForm(true);
    };

    const handleCloseBookForm = () => {
        setEditClicked(false);
        setShowBookForm(false);
    };

    const handleOnCreateBookSubmit = (newBook: IBook) => {
        const books: IBook[] = bookList ? bookList.slice() : [];
        books.push(newBook);
        setBookList(books);
        setPopupAlert({
            alert: "New Book added Successfully",
            className: "alert-success",
        });
        setShowPopupAlert(true);
    };

    const handleOnBookDelete = (index: number) => {
        if (!bookList) {
            return;
        }
        const books: IBook[] = bookList.slice();
        books.splice(index, 1);
        setBookList(books);
        handleCloseBookForm();
        setPopupAlert({
            alert: " Book Deleted Successfully",
            className: "alert-danger",
        });
        setShowPopupAlert(true);
    };

    const handleEditButtonClick = (bool: boolean, index: number, book: IBook) => {
        setEditClicked(bool);
        setShowBookForm(bool);
        if (book) {
            setIndexToEdit(index);
            setBookNameToEdit(book);
        }
    };

    const handleOnUpdateBookSubmit = (
        index: number | null,
        updatedBook: IBook
    ) => {
        if (!bookList || index == null) {
            return;
        }
        const books: IBook[] = bookList.slice();
        books[index] = updatedBook;
        setBookList(books);
        handleCloseBookForm();
        setPopupAlert({
            alert: " Book Updated Successfully",
            className: "alert alert-warning",
        });
        setShowPopupAlert(true);
    };

    return (
        <Row className="books">
            <Header header="Books"/>
            {bookList && bookList.length !== 0 ? (
                <BookList
                    books={bookList}
                    onDeleteBook={handleOnBookDelete}
                    onEditButtonClick={handleEditButtonClick}
                />
            ) : (
                <NoitemList itemtype='books'/>
            )}

            <PopupAlert
                alert={popupAlert}
                isPopupAlertShow={showPopupAlert}
            />
            <AddItem onAddClick={handleAddBookForm} item_type="Books"/>
            {showBookForm &&
            (!editClicked ? (
                <BookForm
                    authorList={props.authors}
                    onCloseClick={handleCloseBookForm}
                    onCreateBookSubmit={handleOnCreateBookSubmit}
                />
            ) : (
                <EditBook
                    onCloseClick={handleCloseBookForm}
                    onUpdateAuthor={handleOnUpdateBookSubmit}
                    authorList={props.authors}
                    index={indexToEdit}
                    book={bookNameToEdit}
                />
            ))}
        </Row>
    );
};

export default Books;
