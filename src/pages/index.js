import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
// import Subscribe from '../components/Subscribe';
import Header from '../components/Header';

// import ipad from '../assets/images/ipad.png';
import garni from '../assets/images/garni-blk.png';
import three from '../assets/images/ThreeJS-portfolio-blk.png';
import bgMaster from '../assets/images/ja.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1> 
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="ab">
            <a href="#ab" className="btn btn-primary">
              About Me
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    {/* <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">Built with Bootstrap 4</h2>
            <p className="text-white-50">
              Grayscale is a free Bootstrap theme created by Start Bootstrap. It
              can be yours right now, simply download the starter on
              <a href="https://github.com/anubhavsrivastava/gatsby-starter-grayscale">
                the github repo
              </a>
              .
            </p>
          </div>
        </div>
        <img src={ipad} className="img-fluid" alt="" />
      </div>
    </section> */}

    <section className="projects-section bg-light">
      <div className="container">
        <div id='ab' className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7 ab-photo">
            <img className="img-fluid mb-3 mb-lg-0" src={bgMaster} alt=""/>
          </div>
          <div className="col-xl-4 col-lg-5 ab-text">
            <div className="featured-text text-center text-lg-left">
              <h4>About me</h4>
              <p className="text-black-50 mb-0">
              I am 21 years old student of IT technologies (specialization: Front-end) at Wyższa Szkoła Bankowa in Gdańsk with passion for creating "unusual internet". Currently working as junior front-end developer for small company Gr8Soft.
              </p>
            </div>
          </div>
        </div>

        <section id="projects">

        

        <div  className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={garni} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Garni</h4>
                  <p className="mb-0 text-white-50">
                    Commercial website made for a sewing factory in Gdynia <br />
                    <a href="https://garni.com.pl" target="_blank" rel="noopener noreferrer">Learn more</a>
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={three} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">ThreeJs project</h4>
                  <p className="mb-0 text-white-50">
                    Basic project to understand the concept of ThreeJs. <br />
                    <a href="https://jhajduk-threejs.netlify.app" target="_blank" rel="noopener noreferrer">Learn more</a>
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
      </div>
    </section>

    {/* <Subscribe /> */}

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
