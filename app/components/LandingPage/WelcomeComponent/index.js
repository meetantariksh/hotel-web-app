/**
*
* WelcomeComponent
*
*/

import React from 'react';
// import styled from 'styled-components';

import WelcomeImage from '../../../images/LandingPage/welcomeSec.jpg';


class WelcomeComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <section className="section-welcome bg1-pattern p-t-120 p-b-105">
          <div className="container">
            <div className="row">
              <div className="col-md-6 p-t-45 p-b-30">
                <div className="wrap-text-welcome t-center">
                  <span className="tit2 t-center">
                    Hotel ERP
                  </span>

                  <h3 className="tit3 t-center m-b-35 m-t-5">
                    Welcome
                  </h3>

                  <p className="t-center m-b-22 size3 m-l-r-auto">
                    Super-luxury hotels are being built in outer space. The new type of heaven is being offered to humans.
                  </p>

                  <a href="" className="txt4">
                    Our Story
                    <i className="fa fa-long-arrow-right m-l-10" aria-hidden="true"></i>
                  </a>
                </div>
              </div>

              <div className="col-md-6 p-b-30">
                <div className="wrap-pic-welcome size2 bo-rad-10 hov-img-zoom m-l-r-auto">
                  <img src={WelcomeImage} alt="IMG-OUR" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

WelcomeComponent.propTypes = {

};

export default WelcomeComponent;
