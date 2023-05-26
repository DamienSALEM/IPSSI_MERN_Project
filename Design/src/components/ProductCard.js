import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
const ProductCard = (props) => {
  const { grid } = props;
  console.log(grid);
  let location = useLocation();

  return (
    <>
      <div
        className={` ${
          location.pathname == "/product" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link
          to={`${
            location.pathname == "/"
              ? "/product/:id"
              : location.pathname == "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          
          <div className="product-details">
  <h5 className="Nom">Football</h5>
  <h5 className="Desciption"></h5>
  <p className="prix">£ 100</p>
  <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/93a58416-3995-45a1-9f05-89377c1c6d55/haut-dentrainement-de-football-dri-fit-strike-pour-ado-fltNRM.png" className="img-fluid" alt="product image" />
</div>

          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      

      
        
    </>
  );
};

export default ProductCard;
