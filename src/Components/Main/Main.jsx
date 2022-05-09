import React, {useState, useEffect} from "react";
import api from "../../Api";
import Card from "../Card/Card";
import "./Main.css"

const Main = ({search}) => {
    const [posts, getPosts] = useState([]);
    const [cards, updateCards] = useState(posts);
    

    useEffect(() => {          
        api.getPostList().then(ans =>{
            getPosts(ans);
            console.log(ans);
            updateCards(ans.filter(el => el.title.toLowerCase().includes(search.toLowerCase())));
        })
    }, []);

    return(
        <>
            {search && <div className='search__item'>По запросу <strong>{search}</strong> найдено {cards.length} постов</div>}
            <div className="card__container">
                {cards.map((post) =>
                    <Card key={post._id} data={{...post}}/>
                )}
            </div>
        </>
    );
};

export default Main;