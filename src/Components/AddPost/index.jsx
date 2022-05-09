import React, {useState} from "react";
import MyButton from "../UI/MyButton";
import MyInput from "../UI/MyInput";
import "./index.css";

const AddPost = ({create}) => {
    const [post, setPost] = useState({title: "", body: ""})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: "", body: ""})
    }

    return (
        <form>
            <MyInput 
                value={post.title} 
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Название" 
            />

            <MyInput
                value={post.body} 
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Описание"
            />
            <MyButton onClick={addNewPost}>Опубликовать</MyButton>
        </form>
    );
};

export default AddPost;