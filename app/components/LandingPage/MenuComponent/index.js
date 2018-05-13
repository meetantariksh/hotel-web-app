/**
*
* MenuComponent
*
*/

import React from 'react';
// import styled from 'styled-components';

import DinnerImage from '../../../images/LandingPage/dinner.jpg';
import LunchImage from '../../../images/LandingPage/lunch.jpg';
import StartersImage from '../../../images/LandingPage/starters.jpg';
import DessertsImage from '../../../images/LandingPage/desserts.jpg';


class MenuComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <section className="section-ourmenu bg2-pattern p-t-115 p-b-120">
          <div className="container">
            <div className="title-section-ourmenu t-center m-b-22">
              <span className="tit2 t-center">
                Discover
              </span>

              <h3 className="tit5 t-center m-t-2">
                Our Menu
              </h3>
            </div>

            <div className="row">
            
              <div className="col-md-12">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="item-ourmenu bo-rad-10 hov-img-zoom pos-relative m-t-30">
                      <img src={LunchImage} alt="IMG-MENU" />
                      <a href="#" className="btn2 flex-c-m txt5 ab-c-m size4">
                        Lunch
                      </a>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="item-ourmenu bo-rad-10 hov-img-zoom pos-relative m-t-30">
                      <img src={DinnerImage} alt="IMG-MENU" />
                      <a href="#" className="btn2 flex-c-m txt5 ab-c-m size5">
                        Dinner
                      </a>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="item-ourmenu bo-rad-10 hov-img-zoom pos-relative m-t-30">
                      <img src={StartersImage} alt="IMG-MENU" />
                      <a href="#" className="btn2 flex-c-m txt5 ab-c-m size7">
                        Starters
                      </a>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="item-ourmenu bo-rad-10 hov-img-zoom pos-relative m-t-30">
                      <img src={DessertsImage} alt="IMG-MENU" />
                      <a href="#" className="btn2 flex-c-m txt5 ab-c-m size8">
                        Desert
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

MenuComponent.propTypes = {

};

export default MenuComponent;
