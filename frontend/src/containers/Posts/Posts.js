import React, { useState, useEffect } from "react";
import PostCard from "./../../components/PostCard/PostCard";
import {useSelector, useDispatch} from "react-redux";
import {updatePosts, getPosts, } from "./../../store/actions/posts";
import { checkValidity } from './../../shared/utilities';
import Input from './../../components/UI/Input/Input';

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);
    const successMsg = useSelector(state => state.posts.successMsg);
    const [newLikes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    const [error, setError] = useState(false);
    const [state, setState] = useState(
        {
            controls: {
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Add a comment'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                },
            }
        }
    );

    const updatePost = (updates) =>{
        dispatch(updatePosts(updates))
    };

    const handleLikeUnlike = (updates) => {
        if (!liked) {
            setLiked(true)
            setLikes(updates.likes + 1)
            updatePost({id: updates.id, image_url: updates.image_url, likes: updates.likes+1})

        } else if(liked) {
            const decLikes = updates.likes -1 
            setLikes(decLikes)
            setLiked(false)
            updatePost({id: updates.id, image_url: updates.image_url, likes: updates.likes-1})

        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {profile_url: "https://s3.amazonaws.com/uifaces/faces/twitter/bergmartin/128.jpg"}
        console.log("FORM DATA FROM HANDLER", formData)
        for (let formElementIdentifier in state.controls) {
            formData[formElementIdentifier] = state.controls[formElementIdentifier].value
        }
        //add comment;
       
    };

    const inputChangeHandler = (event, controlName) => {
        const updatedControls = { 
            ...state.controls
        }
        const updatedFormElement = { 
            ...updatedControls[controlName]
        }
        updatedFormElement.value = event.target.value; 
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation) 
        updatedFormElement.touched = true;
        console.log(updatedFormElement)
        updatedControls[controlName] = updatedFormElement 
        setState({controls: updatedControls})
    };

  
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch, liked, successMsg]);

    const formElementsArray = [];
    for (let key in state.controls) {
        formElementsArray.push({
            id: key,
            config: state.controls[key]
        })
    }

    let form = formElementsArray.map(formElement => (
        <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            error={error}
            changed={ (event) => inputChangeHandler(event, formElement.id)}
        />
    ));

    return (
        <React.Fragment>
            {posts.map(post => (
              <PostCard
                key={post.id}
                post={ post }
                handleLikeUnlike={handleLikeUnlike}
                likes={newLikes}
                liked={liked}
                updatePost={updatePosts}
                form={form}
                handleSubmit={handleSubmit}
              />
        ))}
       </React.Fragment> 
    )
};

export default Posts;