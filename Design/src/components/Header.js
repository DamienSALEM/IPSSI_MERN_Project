import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compare from "../images/compare.svg";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";
import menu from "../images/menu.svg";
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                LIGUE D'AUVERGNE RHONE ALPES
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
              
                <a className="text-white" >
                  Staduim Tour 
                
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-1">
              <label>
                <img src={require("../images/logo.png")} width={80}/>
              </label>
            </div>
            <div className="col-10">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Recherche..."
                  aria-label="Recherche..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-1" id="basic-addon2">
                  <BsSearch className="fs-20"/>
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  
                  
                  <Link
                    to="/login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={user} alt="user" />
                    <p className="mb-0">
                      Connecter <br /> 
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={cart} alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">£</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={menu} alt="" />
                      <span className="me-5 d-inline-block">
                        Boutique
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Football
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Handball
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Gardien
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/"></NavLink>
                    <NavLink to="/"></NavLink>
                    <NavLink to="/product">Store</NavLink>
                    <NavLink to="/"></NavLink>
                    <NavLink to="/"></NavLink>
                    <NavLink to="/blogs">Blog</NavLink>
                    <NavLink to="/"></NavLink>
                    <NavLink to="/"></NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
