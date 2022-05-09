import React from "react";
import "./Card.css";



const Card = (props) => {
    let CardImg = {
        backgroundImage: `url(${props.data.image})`,
        // backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fff",
        marginBottom: "20px"
    };

    return (
        <div className="card__content">
            <div className="card__img" style={CardImg}></div>
            <div className="card__date">{props.data.created_at}</div>
            <div className="card__title">{props.data.title}</div>
            <div className="card__author">{props.data.author.name}</div>
        </div>
        
    )
};

export default Card;