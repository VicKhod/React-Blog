import React, {useState, useEffect} from "react";
import api from "../../Api";
import Card from "../Card/Card";
import {Link} from "react-router-dom";
import "./Main.css";

const Main = ({search}) => {
    const [posts, getPosts] = useState([]);
    const [cards, updateCards] = useState(posts);
    
    useEffect(() => {          
        api.getPostList().then(ans =>{
            getPosts(ans);
        })
    }, []);

    useEffect(() => {
            updateCards(posts.filter(el => el.title.toLowerCase().includes(search.toLowerCase())));
    }, [posts, search]);

    return(
        <>
            {search && <div className='search__item'>По запросу <strong>{search}</strong> найдено {cards.length} постов</div>}
            <div className="card__container">
                {cards.map((post) => 
                    <Link to={"/post/" + post._id} key={post._id}>
                        <Card key={post._id} data={{...post}}/>
                    </Link>  
                )}
            </div>
        </>
    );
};

export default Main;