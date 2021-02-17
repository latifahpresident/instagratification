import React from "react";
import { Input, } from "./Comment.styles";

const CommentInput = (props) => {
    const {  comment, handleSubmit } = props;
    return (
        //TODO: MAKE ID'S UNIQUE WHEN REDUX ADDED USE USERNAME
        <Input
            commentInput
            onChange={event => handleSubmit(event.target.value)}
            id=" add-comment"
            name="comment"
            value={comment}
            placeholder="Add a comment..."
        />
    )
};

export default CommentInput;