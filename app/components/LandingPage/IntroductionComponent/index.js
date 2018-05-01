/**
*
* DiscoverBannerComponent
*
*/

import React from 'react';
// import styled from 'styled-components';

import DiscoverImage from '../../../images/LandingPage/discover.jpg';
import FoodImage from '../../../images/LandingPage/food.jpg';
import ResturantImage from '../../../images/LandingPage/rest.jpg';
import BeachViewImage from '../../../images/LandingPage/beachView.jpg';


class IntroductionComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <section className="section-intro">
          <div className="header-intro parallax100 t-center p-t-135 p-b-158" style={{backgroundImage: `url(${DiscoverImage})`}}>
            <span className="tit2 p-l-15 p-r-15">
              Discover
            </span>

            <h3 className="tit4 t-center p-l-15 p-r-15 p-t-3">
              Pato Place
            </h3>
          </div>

          <div className="content-intro bg-white p-t-77 p-b-133">
            <div className="container">
              <div className="row">
                <div className="col-md-4 p-t-30">
                  <div className="blo1">
                    <div className="wrap-pic-blo1 bo-rad-10 hov-img-zoom">
                      <a href="#"><img src={ResturantImage} alt="IMG-INTRO" /></a>
                    </div>

                    <div className="wrap-text-blo1 p-t-35">
                      <a href="#"><h4 className="txt5 color0-hov trans-0-4 m-b-13">
                        Restaurant
                      </h4></a>

                      <p className="m-b-20">
                        [About Restaurant]
                      </p>

                      <a href="#" className="txt4">
                        Learn More
                        <i className="fa fa-long-arrow-right m-l-10" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 p-t-30">
                  <div className="blo1">
                    <div className="wrap-pic-blo1 bo-rad-10 hov-img-zoom">
                      <a href="#"><img src={FoodImage} alt="IMG-INTRO" /></a>
                    </div>

                    <div className="wrap-text-blo1 p-t-35">
                      <a href="#"><h4 className="txt5 color0-hov trans-0-4 m-b-13">
                        Delicious Food
                      </h4></a>

                      <p className="m-b-20">
                        [About Food]
                      </p>

                      <a href="#" className="txt4">
                        Learn More
                        <i className="fa fa-long-arrow-right m-l-10" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 p-t-30">
                  <div className="blo1">
                    <div className="wrap-pic-blo1 bo-rad-10 hov-img-zoom">
                      <a href="#"><img src={BeachViewImage} alt="IMG-INTRO" /></a>
                    </div>

                    <div className="wrap-text-blo1 p-t-35">
                      <a href="#"><h4 className="txt5 color0-hov trans-0-4 m-b-13">
                        Beach View Rooms
                      </h4></a>

                      <p className="m-b-20">
                        [About Rooms]
                      </p>

                      <a href="#" className="txt4">
                        Learn More
                        <i className="fa fa-long-arrow-right m-l-10" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

IntroductionComponent.propTypes = {

};

export default IntroductionComponent;
