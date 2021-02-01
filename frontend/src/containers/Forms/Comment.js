import React, {useState, } from 'react';
import Input from "./../../components/UI/Forms/Comment";

const CommentForm = () => {
    const [comment, setComment] = useState("")

    const handleSubmit = (event) => {
        setComment(event)
    }
    console.log("COMMENT FROM COMMENT FORM", comment)

    //TODO: MAKE THIS A SWITCH CASE FORM
    return (
        <form onSubmit={e => e.preventDefault()}>
            <Input
                
                comment={comment}
                setComment={setComment}
                handleSubmit={handleSubmit}
            />
        </form>
    )
};

export default CommentForm;