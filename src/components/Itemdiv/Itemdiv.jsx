import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import "../../assets/styles/Itemdiv.css";
import almond from "../../assets/images/almond.png";

function Itemdiv(props) {
  return (
    <>
      <div className="items-wrapper">
        
        <div id="dData-1">
          <div className="dData-body">
            <div className="dData-title">
              <p>Kupwara</p>
            </div>
            <div className="dData-desc">
              <p>
                The city is famous for its gardens, lakes and houseboats. It is
                also known for traditional Kashmiri handicrafts and dried
                fruits.
              </p>
            </div>
            <div className="dData-add">
              <div className="dData-image">
                <img src={almond} alt="almond"></img>
              </div>
              <div className="dData-product">
                <div className="dData-product-title">
                  Kashmiri Mamra Almonds
                </div>
                <div className="dData-product-price">
                  <p>Rs. 499/kg including tax</p>
                </div>
                <div className="dData-product-more">
                  <a className="more-detail" href="#">
                    More Detail
                  </a>
                </div>
              </div>
            </div>
            <div className="dData-lower">
              <div className="dData-lower-link">
                View more from same District
              </div>
              <div className="dData-lower-side">
                <div className="dData-lower-heart">
                  <AiOutlineHeart className="heart" />
                </div>
                <div className="dData-lower-cart">
                  <button className="cart-btn">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Itemdiv;
