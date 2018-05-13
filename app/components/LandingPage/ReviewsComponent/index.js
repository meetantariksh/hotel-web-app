/**
*
* ReviewsComponent
*
*/

import React from 'react';
// import styled from 'styled-components';

import Avatar from '../../../images/LandingPage/avatar.png';

class ReviewsComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <section className="section-review p-t-115">
          <div className="title-review t-center m-b-2">
            <span className="tit2 p-l-15 p-r-15">
              Customers Say
            </span>

            <h3 className="tit8 t-center p-l-20 p-r-15 p-t-3">
              Review
            </h3>
          </div>

          <div className="wrap-slick3">
            <div className="slick3">
              <div className="item-slick3 item1-slick3">
                <div className="wrap-content-slide3 p-b-50 p-t-50">
                  <div className="container">
                    <div className="pic-review size14 bo4 wrap-cir-pic m-l-r-auto animated visible-false" data-appear="zoomIn">
                      <img src={Avatar} alt="IGM-AVATAR" />
                    </div>

                    <div className="content-review m-t-33 animated visible-false" data-appear="fadeInUp">
                      <p className="t-center txt12 size15 m-l-r-auto">
                        “[Review One]”
                      </p>

                      <div className="star-review fs-18 color0 flex-c-m m-t-12">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star p-l-1" aria-hidden="true"></i>
                        <i className="fa fa-star p-l-1" aria-hidden="true"></i>
                        <i className="fa fa-star p-l-1" aria-hidden="true"></i>
                        <i className="fa fa-star p-l-1" aria-hidden="true"></i>
                      </div>

                      <div className="more-review txt4 t-center animated visible-false m-t-32" data-appear="fadeInUp">
                        Jon Doe
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item-slick3 item2-slick3">
                <div className="wrap-content-slide3 p-b-50 p-t-50">
                  <div className="container">
                    <div className="pic-review size14 bo4 wrap-cir-pic m-l-r-auto animated visible-false" data-appear="zoomIn">
                      <img src={Avatar} alt="IGM-AVATAR" />
                    </div>

                    <div className="content-review m-t-33 animated visible-false" data-appear="fadeInUp">
                      <p className="t-center txt12 size15 m-l-r-auto">
                      “[Review Two]”
                      </p>

                      <div className="star-review fs-18 color0 flex-c-m m-t-12">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star p-l-1" aria-hidden="true"></i>
                        <i className="fa fa-star p-l-1" aria-hidden="true"></i>
                        <i className="fa fa-star p-l-1" aria-hidden="true"></i>
                        <i className="fa fa-star p-l-1" aria-hidden="true"></i>
                      </div>

                      <div className="more-review txt4 t-center animated visible-false m-t-32" data-appear="fadeInUp">
                        Jon Doe
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item-slick3 item3-slick3">
                <div className="wrap-content-slide3 p-b-50 p-t-50">
                  <div className="container">
                    <div className="pic-review size14 bo4 wrap-cir-pic m-l-r-auto animated visible-false" data-appear="zoomIn">
                      <img src={Avatar} alt="IGM-AVATAR" />
                    </div>

                    <div className="content-review m-t-33 animated visible-false" data-appear="fadeInUp">
                      <p className="t-center txt12 size15 m-l-r-auto">
                      “[Review Three]”
                      </p>

                      <div className="star-review fs-18 color0 flex-c-m m-t-12">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star p-l-1" aria-hidden="true"></i>
                        <i className="fa fa-star p-l-1" aria-hidden="true"></i>
                        <i className="fa fa-star p-l-1" aria-hidden="true"></i>
                        <i className="fa fa-star p-l-1" aria-hidden="true"></i>
                      </div>

                      <div className="more-review txt4 t-center animated visible-false m-t-32" data-appear="fadeInUp">
                        Jon Doe
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="wrap-slick3-dots m-t-30"></div>
          </div>
        </section>
      </div>
    );
  }
}

ReviewsComponent.propTypes = {

};

export default ReviewsComponent;
