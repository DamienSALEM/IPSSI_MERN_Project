import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../images/nike-23-alt.png";
const Footer = () => {
  return (
    <>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact</h4>
              <div>
                <address className="text-white fs-6">
               <br />  <br />
              Ligue d'AUVERGNE
                </address>
                <a
                  href="tel:+335678899"
                  className="mt-3 d-block mb-1 text-white"
                >
                 tel:+335678899
                </a>
                <a
                  href="mailto:navdeepdahiya753@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  Ligueauvergne@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="#">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
               
                <Link to="/term-conditions" className="text-white py-2 mb-1">Aide
                </Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Compte</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">A propos</Link>
                
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Ligue Auvergne de football</Link>
                <Link className="text-white py-2 mb-1">Ligue Auvergne de Basketball</Link>
                <Link className="text-white py-2 mb-1"></Link>
                <Link className="text-white py-2 mb-1">Entraînement</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
    </>
  );
};

export default Footer;
