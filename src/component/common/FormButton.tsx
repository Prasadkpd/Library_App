import React from "react";
import {Button} from "react-bootstrap";

type FormButtonProps = {
    editClicked: boolean
}

const FormButton: React.FC<FormButtonProps> = (props) => {
    return (
        <Button className="form-button float-end my-4 py-1 px-4" type="submit">
            {props.editClicked ? "Update" : "Create"}
        </Button>
    );
}

export default FormButton;