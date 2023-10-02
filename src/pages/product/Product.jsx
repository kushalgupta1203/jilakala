import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "../../assets/styles/Product.css";
import Almond from "../../assets/images/products/almond.jpg";
import { CiDeliveryTruck, CiMoneyBill } from "react-icons/ci";
import { PiCreditCardLight } from "react-icons/pi";
import { TbCircleDashedNumber1 } from "react-icons/tb";
import { useEffect } from "react";
import Bottle from "../../assets/images/products/almondBottle.jpg";
import Pop from "../../assets/images/products/po.jpg";

function Product() {
  const changeImage = (src) => {
    const img = document.getElementById("imageUsed");
    if (img) {
      img.src = src;
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Navbar />

      <div className="product-wrapper">
        <div className="imageSetter">
          <img src={Bottle} alt="bottle" onClick={() => changeImage(Bottle)} />
          <img src={Pop} alt="pop" onClick={() => changeImage(Pop)} />
          <img src={Almond} alt="almond" onClick={() => changeImage(Almond)} />
        </div>
        <div className="side-image-bar">
          <img
            id="imageUsed"
            className="product-image"
            src={Almond}
            alt="almond"
          />
        </div>

        <div className="product-main-body">
          <div className="ptitle">
            Kasmere almond | 1kg hand picked
            <hr className="ruler"></hr>
          </div>
          <div className="pprice">
            <div className="pcut">
              <span className="discount">-40%</span>
              <span className="pmoney">₹1024</span>
            </div>
            <div className="pmrp">
              M.R.P: <span className="preal">₹1800</span>
            </div>
            <div className="ptax">Inclusive of all taxes</div>
            <hr className="ruler"></hr>
          </div>
          <div className="picons">
            <div className="icons-box">
              <div className="iconIcons">
                <CiDeliveryTruck />
              </div>
              <div className="icon-title">Free Delivery</div>
            </div>
            <div className="icons-box">
              <div className="iconIcons">
                <CiMoneyBill />
              </div>
              <div className="icon-title">Pay on Delivery</div>
            </div>
            <div className="icons-box">
              <div className="iconIcons">
                <PiCreditCardLight />
              </div>
              <div className="icon-title">Refundable</div>
            </div>
            <div className="icons-box">
              <div className="iconIcons">
                <TbCircleDashedNumber1 />
              </div>
              <div className="icon-title">Number 1</div>
            </div>
          </div>
          <hr className="ruler"></hr>
          <div className="pabout">
            <div className="pabouttitle">About this item</div>
            <div className="paboutdesc">
              <ul>
                <li>
                  YOUR PORTABLE POWERHOUSE: This super mix is the ultimate blend
                  of nuts, fruit and seeds to help your entire body power up! We
                  give you a nutritional all-rounder to keep up with all your
                  health needs!
                </li>
                <li>
                  SUPER MIX SUPER TEAM: This snack is packed with almonds and
                  cashews for a healthy heart, cranberries and amla for those
                  antioxidant perks and a dose of crunchy pumpkin for protein!
                </li>
                <li>
                  BEST FOR THE BEST: Your favourite snack is made in small
                  batches and uses only the most premium quality ingredients.
                  This snack is vegan, gluten-free by its nature, and 100%
                  wholesome!
                </li>
                <li>
                  ALL DAY, EVERY DAY: There is no time to enjoy this ZERO
                  CHOLESTEROL snack! Be it on-the-go, a road trip, hikes, as a
                  breakfast/salad topping, or a lunch box surprise—grab a
                  delicious handful, anytime!
                </li>
              </ul>
            </div>
            <hr className="ruler"></hr>
          </div>
          <div className="pmap">
            <div className="pmaptitle">Location</div>
            <div className="pmapmap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984.471056426083!2d74.25341574363547!3d34.52637479453165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e19187146f1aa9%3A0x44ae4c1ff98c98c0!2sFood%20Stop%20Regipora!5e0!3m2!1sen!2sin!4v1696232033946!5m2!1sen!2sin"
                width="600"
                height="450"
                border="0"
                loading="lazy"
              ></iframe>
            </div>
            <hr className="ruler proRul"></hr>
            <span className="proLis">Product Listing</span>
          </div>
          <div className="choose">
                
            <div className="pcard">
              <div className="grade">Grade A</div>
              <div className="packsize">1kg</div>
              <div className="packprice">₹1024</div>
            </div>
            <div className="pcard">
              <div className="grade">Grade A</div>
              <div className="packsize">500g</div>
              <div className="packprice">₹500</div>
            </div>
            <div className="pcard">
              <div className="grade">Grade B</div>
              <div className="packsize">1kg</div>
              <div className="packprice">₹600</div>
            </div>
            <div className="pcard">
              <div className="grade">Grade B</div>
              <div className="packsize">500g</div>
              <div className="packprice">₹300</div>
            </div>
          </div>
        </div>
        <div className="product-payment">
          <button className="addCart">Add to Cart</button>
          <button className="buyNow">Buy Now</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;
