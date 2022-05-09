import React from "react";
import { useParams } from "react-router-dom";
import api from "../../Api";
import "./Post.css";

const Post = () => {
    let {id} = useParams;
    const [name, setName] = useState("Post");
    const [post, setPost] = useState({});

    // useEffect(()=> {
    //     api.getSinglePost(postId).then(ans => {
    //         console.log(ans);
    //         setProduct(ans);
    //     })
    // }, []);

    return (
        <>
            <h1>POST</h1>
            <h2>{product.name || "Product"}</h2>
            <p>{id}</p>
        </>
    )
};


export default Post;