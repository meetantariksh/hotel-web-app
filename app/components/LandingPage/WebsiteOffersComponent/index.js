/**
*
* WebsiteOffersComponent
*
*/

import React from 'react';
// import styled from 'styled-components';

import OffersBanner from '../../../images/LandingPage/offersBanner.jpg';
import OfferOne from '../../../images/LandingPage/offer1.jpg';
import OfferTwo from '../../../images/LandingPage/offer2.png';


class WebsiteOffersComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <section className="section-event">
          <div className="wrap-slick2">
            <div className="slick2">
              <div className="item-slick2 item1-slick2" style={{backgroundImage: `url(${OffersBanner})`}}>
                <div className="wrap-content-slide2 p-t-115 p-b-208">
                  <div className="container">

                    <div className="title-event t-center m-b-52">
                      <span className="tit2 p-l-15 p-r-15">
                        Website
                      </span>

                      <h3 className="tit6 t-center p-l-15 p-r-15 p-t-3">
                        Offers
                      </h3>
                    </div>

                    <div className="blo2 flex-w flex-str flex-col-c-m-lg animated visible-false" data-appear="zoomIn">

                      <a href="#" className="wrap-pic-blo2 bg1-blo2" style={{backgroundImage: `url(${OfferTwo})`}}>
                        <div className="time-event size10 txt6 effect1">
                          <span className="txt-effect1 flex-c-m t-center">
                            Validity: 08:00 PM Tuesday - 21 November 2018
                          </span>
                        </div>
                      </a>

                      <div className="wrap-text-blo2 flex-col-c-m p-l-40 p-r-40 p-t-45 p-b-30">
                        <h4 className="tit7 t-center m-b-10">
                          10% Off On All Bookings.
                        </h4>

                        <p className="t-center">
                          [Offer Description]
                        </p>

                        <div className="flex-sa-m flex-w w-full m-t-40">
                          <div className="size11 flex-col-c-m">
                            <span className="dis-block t-center txt7 m-b-2 days">
                              25
                            </span>

                            <span className="dis-block t-center txt8">
                              Days
                            </span>
                          </div>

                          <div className="size11 flex-col-c-m">
                            <span className="dis-block t-center txt7 m-b-2 hours">
                              12
                            </span>

                            <span className="dis-block t-center txt8">
                              Hours
                            </span>
                          </div>

                          <div className="size11 flex-col-c-m">
                            <span className="dis-block t-center txt7 m-b-2 minutes">
                              59
                            </span>

                            <span className="dis-block t-center txt8">
                              Minutes
                            </span>
                          </div>

                          <div className="size11 flex-col-c-m">
                            <span className="dis-block t-center txt7 m-b-2 seconds">
                              00
                            </span>

                            <span className="dis-block t-center txt8">
                              Seconds
                            </span>
                          </div>
                        </div>

                        <a href="#" className="txt4 m-t-40">
                          View Details
                          <i className="fa fa-long-arrow-right m-l-10" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item-slick2 item2-slick2" style={{backgroundImage: `url(${OffersBanner})`}}>
                <div className="wrap-content-slide2 p-t-115 p-b-208">
                  <div className="container">
                    <div className="title-event t-center m-b-52">
                      <span className="tit2 p-l-15 p-r-15">
                        Website
                      </span>

                      <h3 className="tit6 t-center p-l-15 p-r-15 p-t-3">
                        Offers
                      </h3>
                    </div>

                    <div className="blo2 flex-w flex-str flex-col-c-m-lg animated visible-false" data-appear="zoomIn">
                      <a href="#" className="wrap-pic-blo2 bg2-blo2" style={{backgroundImage: `url(${OfferTwo})`}}>
                        <div className="time-event size10 txt6 effect1">
                          <span className="txt-effect1 flex-c-m">
                            Validity: 08:00 PM Tuesday - 21 November 2018
                          </span>
                        </div>
                      </a>
                      <div className="wrap-text-blo2 flex-col-c-m p-l-40 p-r-40 p-t-45 p-b-30">
                        <h4 className="tit7 t-center m-b-10">
                          30% Off On Bulk Booking
                        </h4>

                        <p className="t-center">
                          [Offer Details]
                        </p>

                        <div className="flex-sa-m flex-w w-full m-t-40">
                          <div className="size11 flex-col-c-m">
                            <span className="dis-block t-center txt7 m-b-2 days">
                              25
                            </span>

                            <span className="dis-block t-center txt8">
                              Days
                            </span>
                          </div>

                          <div className="size11 flex-col-c-m">
                            <span className="dis-block t-center txt7 m-b-2 hours">
                              12
                            </span>

                            <span className="dis-block t-center txt8">
                              Hours
                            </span>
                          </div>

                          <div className="size11 flex-col-c-m">
                            <span className="dis-block t-center txt7 m-b-2 minutes">
                              59
                            </span>

                            <span className="dis-block t-center txt8">
                              Minutes
                            </span>
                          </div>

                          <div className="size11 flex-col-c-m">
                            <span className="dis-block t-center txt7 m-b-2 seconds">
                              00
                            </span>

                            <span className="dis-block t-center txt8">
                              Seconds
                            </span>
                          </div>
                        </div>

                        <a href="#" className="txt4 m-t-40">
                          View Details
                          <i className="fa fa-long-arrow-right m-l-10" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="wrap-slick2-dots"></div>
          </div>
        </section>
      </div>
    );
  }
}

WebsiteOffersComponent.propTypes = {

};

export default WebsiteOffersComponent;
