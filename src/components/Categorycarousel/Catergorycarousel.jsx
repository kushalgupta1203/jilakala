import React from "react";
import "../../assets/styles/Categorycarousel.css"

function Catergorycarousel(props) {
  return (
    <>
      <div className="category-card-wrapper">
      
        <div className="category-card-image">
          <img  className="category-img" src={props.src} alt={props.alt} />
          <p className="category-card-name">{props.name}</p>
          {/* <div className="category-card-name">
          
        </div> */}
        </div>
        
      </div>
    </>
  );
}

export default Catergorycarousel;
