import React, {useState, useEffect} from "react";
import api from "../../Api";
import Card from "../Card/Card";
import "./Main.css"

const Main = ({searchText}) => {
    const [posts, getPosts] = useState([]);
    const [cards, updateCards] = useState(cards);
    
    useEffect(() => {          
        api.getPostList().then(ans =>{
            getPosts(ans);
            console.log(ans);
            updateCards(ans.posts.filter(el => el.title.toLowwerCase().includes(searchText.toLowwerCase())));
        })
    }, []);

    return(
        <div className="card__container">
            {posts.map((post) =>
                <Card key={post._id} data={{...post}}/>
            )}
        </div>
    );
};

export default Main;