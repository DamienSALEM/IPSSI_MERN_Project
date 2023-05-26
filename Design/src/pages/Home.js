import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
// import { services } from "../utils/Data";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative ">
              <img
                src={require("../images/world-of-gaming-sports-banner.jpg")}
                className="img-fluid rounded-3"
                alt="main banner"
                style={{height:418}}
              />
              <div className="main-banner-content position-absolute">
                <Link className="button">ACHETER ICI</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src={require("../images/IMG_6751.jpg")}
                  className="img-fluid rounded-3"
                  alt="main banner"
                  style={{height:200,width:206}}
                />
              </div>
              <div className="small-banner position-relative">
                <img
                  src={require("../images/5E04F8E3-1BC5-41EB-B222-5D8CB31AEF87.jpg")}
                  className="img-fluid rounded-3"
                  alt="main banner"
                  style={{height:200}}

                />
              </div>
              <div className="small-banner position-relative ">
                <img
                  src={require("../images/camera.jpg")}
                  className="img-fluid rounded-3"
                  alt="main banner"
                  style={{height:200}}
                />
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="https://thebannermen.com/wp-content/uploads/2019/08/nike-square-our-workArtboard-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                  style={{width:218}}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
                 
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h5>chasuble Foot</h5>
                 
                </div>
                <img src="https://tse1.mm.bing.net/th?id=OIP.PXiezRdWzOLb9PR6gK6cmAHaHa&pid=Api&P=0&h=180" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h5>Nike Strike </h5>
              
                </div>
                <img src="https://tse1.mm.bing.net/th?id=OIP.gtG1WE0PaZyQRz1AySKoWgAAAA&pid=Api&P=0&h=180Api&P=0&h=180" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h5>Nike Sac de sport de Training</h5>
               
                </div>
                <img src="https://tse1.mm.bing.net/th?id=OIP.IUrJsyDZusswZlR5Xsm0AQHaFj&pid=Api&P=0&h=180" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h5>Nike Strike chaussettes</h5>
                  <p></p>
                </div>
                <img src="https://tse2.mm.bing.net/th?id=OIP.ctmjFh-s9gqGTMUTywXD6wHaHa&pid=Api&P=0&h=180" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h5>Ballon de Basket JR</h5>
                </div>
                <img src="https://tse4.mm.bing.net/th?id=OIP.e-lh89tNcPmUg2lFoooPgwHaHT&pid=Api&P=0&h=180"  />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h5>Maillot Nike</h5>
                </div>
                <img src="https://tse2.mm.bing.net/th?id=OIP.Sb5VDMc8Zw4SFlyWZLNdBAHaHa&pid=Api&P=0&h=180"/>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h5>Nike Strike chaussettes</h5>
                 
                </div>
                <img src="https://tse2.mm.bing.net/th?id=OIP.cTzgbKdyKUcD5SBLkOU5kwHaHa&pid=Api&P=0&h=180" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h5>Nike Sport</h5>
              
                </div>
                <img src="https://cdn.laredoute.com/products/0/c/d/0cd118ee16045076644382b1a1aea90f.jpg?width=300&dpr=1" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Nos Best Sellers  </h3>
          </div>
          
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.H5OewSUmW1-qmZdQtPPXdwHaHa&pid=Api&P=0&h=180https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/be32519f-d393-441a-92bc-0f1f0f872b28/chaussure-de-football-a-crampons-pour-terrain-sec-zoom-mercurial-vapor-15-elite-fg-zlzSkD.png"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5>Nike</h5>
                <h6>Chaussures de Football </h6>
                <p>300 £</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8e93549d-057f-4ea4-be5e-175b78f14df3/chaussure-de-football-a-crampons-pour-terrain-synthetique-zoom-mercurial-vapor-15-elite-xxv-ag-pro-XgxnR4.png"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Football</h5>
                <h6 className="text-dark">NIKE Mercurial Zoom 2023</h6>

               
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.g6p-fQXf_ao5sle5_IhRsAHaHg&pid=Api&P=0&h=180"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h6 className="text-dark">NIKE</h6>
                <h6 className="text-dark">Ballon</h6>
                <p className="text-dark">
                  
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/745d468b-7519-4829-87a7-4718c656d237/chaussure-de-football-a-crampons-pour-terrain-sec-zoom-mercurial-vapor-15-elite-fg-zlzSkD.png"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h6 className="text-dark">Nike</h6>
                <h6 className="text-dark">Nike Zoom Mercurial Vapor 15 Elite FG</h6>
                <p className="text-dark">
                  - %20
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      
      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">

          </div>
        </div>
      </Container>

      
    </>
  );
};

export default Home;
