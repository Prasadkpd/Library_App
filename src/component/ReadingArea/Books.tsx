import React, {useState} from 'react';
import {Row} from "react-bootstrap";
import Header from "../common/Header";
import {IAuthor, IBook} from "../Types/Types";
import NoitemList from "../common/NoitemList";
import BookList from "../books/BookList";
import AddItem from "../common/AddItem";
import BookForm from "../books/BookForm";

type BooksProps = {
    authors: IAuthor[] | null
}

const Books: React.FC<BooksProps> = (props) => {

    const [books, setBooks] = useState<IBook[] | null>(null);
    const [isShowBookForm, setIsShowBookForm] = useState<boolean>(true);
    const [editClicked, setEditClicked] = useState<boolean>(false);
    
    const handleAddBookForm = () => {
      setEditClicked(false);
      setIsShowBookForm(true);
    }
    
    const handleCloseBookForm = () => {
      setEditClicked(false);
      setIsShowBookForm(false);
    }
    
    const FormRendering = (isShowBookForm: boolean, editClicked:boolean) => {
        if(isShowBookForm){
            if(!editClicked){
                return <BookForm task="Create" onCloseClick={handleCloseBookForm} editClicked={false}/>
            }
            else {
                return <BookForm task="Update" onCloseClick={handleCloseBookForm} editClicked={true}/>
            }
        }
    }
    
    return (
        <Row>
            <Header header={"Books"}/>
            {(!books || books.length === 0) && <NoitemList itemtype="Books"/>}
            {(books) && <BookList books={books}/>}
            <AddItem item_type={"Book"} onAddClick={handleAddBookForm}/>
            {FormRendering(isShowBookForm,editClicked)}
        </Row>
    );
};

export default Books;
