/**
*
* Slides
*
*/

import React from 'react';
// import styled from 'styled-components';

import slide1 from '../../../images/LandingPage/slide1.jpg';
import slide2 from '../../../images/LandingPage/slide2.jpg';
import slide3 from '../../../images/LandingPage/slide3.jpg';


class Slides extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <section className="section-slide">
          <div className="wrap-slick1">
            <div className="slick1">
              <div className="item-slick1 item1-slick1" style={{backgroundImage: `url(${slide1})`}}>
                <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
                  <span className="caption1-slide1 txt1 t-center animated visible-false m-b-15" data-appear="fadeInDown">
                    Welcome to
                  </span>

                  <h2 className="caption2-slide1 tit1 t-center animated visible-false m-b-37" data-appear="fadeInUp">
                    Hotel ERP
                  </h2>

                  <div className="wrap-btn-slide1 animated visible-false" data-appear="zoomIn">
                    <a href="menu.html" className="btn1 flex-c-m size1 txt3 trans-0-4">
                      Bookings
                    </a>
                  </div>
                </div>
              </div>

              <div className="item-slick1 item2-slick1" style={{backgroundImage: `url(${slide2})`}}>
                <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
                  <span className="caption1-slide1 txt1 t-center m-b-15">
                    Welcome to
                  </span>

                  <h2 className="caption2-slide1 tit1 t-center m-b-37">
                    Hotel ERP
                  </h2>

                  <div className="wrap-btn-slide1">
                    <a href="menu.html" className="btn1 flex-c-m size1 txt3 trans-0-4">
                      Bookings
                    </a>
                  </div>
                </div>
              </div>

              <div className="item-slick1 item3-slick1" style={{backgroundImage: `url(${slide3})`}}>
                <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
                  <span className="caption1-slide1 txt1 t-center m-b-15">
                    Welcome to
                  </span>

                  <h2 className="caption2-slide1 tit1 t-center m-b-37">
                    Hotel ERP
                  </h2>

                  <div className="wrap-btn-slide1">
                    <a href="menu.html" className="btn1 flex-c-m size1 txt3 trans-0-4">
                      Bookings
                    </a>
                  </div>
                </div>
              </div>

            </div>

            <div className="wrap-slick1-dots"></div>
          </div>
        </section>
      </div>
    );
  }
}

Slides.propTypes = {

};

export default Slides;
