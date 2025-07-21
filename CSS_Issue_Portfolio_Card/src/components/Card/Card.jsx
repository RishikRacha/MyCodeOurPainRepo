import React from "react";
import "./Card.css";


function Card({ image, description}) {

    function handleHoverStart(e) {
        e.currentTarget.style.zIndex = 9999; //set high z-index
    }
      
    function handleHoverEnd(e) {
        e.currentTarget.style.zIndex = 2; // reset to default
    }
 



    return (
        <div className="cardContainer hoverContainer" onMouseEnter={handleHoverStart} onMouseLeave={handleHoverEnd}>
            <img src={image} />
            <div className="cardText">
                <span id="hoverDescription">{description}</span>
            </div>
        </div>
    );
}

export default Card;
