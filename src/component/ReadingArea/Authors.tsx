import React, {useState} from 'react';
import Header from "../common/Header";
import {Row} from "react-bootstrap";
import NoitemList from "../common/NoitemList";
import AddItem from "../common/AddItem";
import AuthorList from "../authors/AuthorList";
import {IAuthor} from "../Types/Types";
import AuthorForm from "../authors/AuthorForm";

type AuthorsProps = {
    authors: IAuthor[] | null
}

const Authors: React.FC<AuthorsProps> = (props) => {

    const {authors} = props
    const [isShowAuthorForm, setIsShowAuthorForm] = useState<boolean>(false);

    const handleAddAuthorForm = () => {
       setIsShowAuthorForm(true);
    }

    const handleCloseAuthorForm = () => {
        setIsShowAuthorForm(false);
    }

    return (
         <Row>
             <Header header="Authors"/>
             <NoitemList itemtype="Author"/>
             <AuthorList authors={authors}/>
             <AddItem item_type="Author" onAddClick={handleAddAuthorForm} />
             {isShowAuthorForm && <AuthorForm task="Create" editClicked={false} onCloseClick={handleCloseAuthorForm}/>}
         </Row>
    );
};

export default Authors;
