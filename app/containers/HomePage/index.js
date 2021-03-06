/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import logo from '../../externals/images/icons/logo.png';
import { Switch, Route } from 'react-router-dom';

import mainJS from '../../externals/js/main';
import mapCustomJS from '../../externals/js/map-custom';
import slickCustomJS from '../../externals//js/slick-custom';

import RoomImage from '../../images/Footer/room.jpg';

import LandingPage from '../LandingPageContainer';

import FooterComponent from '../../components/FooterComponent';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    mainJS();
    mapCustomJS();
    slickCustomJS();
  }

  render() {
    return (
      <div className='animsition'>
        <header> 
          <div className="wrap-menu-header gradient1 trans-0-4">
            <div className="container h-full">
              <div className="wrap_header trans-0-3">
                <div className="logo">
                  <a>
                    <img src={logo} alt="IMG-LOGO" data-logofixed={logo} />
                  </a>
                </div>
                <div className="wrap_menu p-l-45 p-l-0-xl">
                  <nav className="menu">
                    <ul className="main_menu">
                      <li>
                        <a href="#">Home</a>
                      </li>

                      <li>
                        <a href="#">Menu</a>
                      </li>

                      <li>
                        <a href="#">Reservation</a>
                      </li>

                      <li>
                        <a href="#">Gallery</a>
                      </li>

                      <li>
                        <a href="#">About</a>
                      </li>

                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="social flex-w flex-l-m p-r-20">
                  <a href="#"><i className="fa fa-tripadvisor" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-facebook m-l-21" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-twitter m-l-21" aria-hidden="true"></i></a>

                  <button className="btn-show-sidebar m-l-33 trans-0-4"></button>
                </div>
              </div>
            </div>
          </div>
        </header>
        <aside className="sidebar trans-0-4" >
          <button className="btn-hide-sidebar ti-close color0-hov trans-0-4"></button>
          <ul className="menu-sidebar p-t-95 p-b-70">
            <li className="t-center m-b-13">
              <a href="#" className="txt19">Home</a>
            </li>

            <li className="t-center m-b-13">
              <a href="#" className="txt19">Menu</a>
            </li>

            <li className="t-center m-b-13">
              <a href="#" className="txt19">Gallery</a>
            </li>

            <li className="t-center m-b-13">
              <a href="#" className="txt19">About</a>
            </li>

            <li className="t-center m-b-33">
              <a href="#" className="txt19">Contact</a>
            </li>

            <li className="t-center">
              <a href="#" className="btn3 flex-c-m size13 txt11 trans-0-4 m-l-r-auto">
                Reservation
              </a>
            </li>
          </ul>
          <div className="gallery-sidebar t-center p-l-60 p-r-60 p-b-40">
            <h4 className="txt20 m-b-33">
              Gallery
            </h4>
            <div className="wrap-gallery-sidebar flex-w">
              <a className="item-gallery-sidebar wrap-pic-w" href="#" data-lightbox="gallery-footer">
                <img src={RoomImage} alt="GALLERY" />
              </a>

              <a className="item-gallery-sidebar wrap-pic-w" href="#" data-lightbox="gallery-footer">
                <img src={RoomImage} alt="GALLERY" />
              </a>

              <a className="item-gallery-sidebar wrap-pic-w" href="#" data-lightbox="gallery-footer">
                <img src={RoomImage} alt="GALLERY" />
              </a>

              <a className="item-gallery-sidebar wrap-pic-w" href="#" data-lightbox="gallery-footer">
                <img src={RoomImage} alt="GALLERY" />
              </a>

              <a className="item-gallery-sidebar wrap-pic-w" href="#" data-lightbox="gallery-footer">
                <img src={RoomImage} alt="GALLERY" />
              </a>

              <a className="item-gallery-sidebar wrap-pic-w" href="#" data-lightbox="gallery-footer">
                <img src={RoomImage} alt="GALLERY" />
              </a>

              <a className="item-gallery-sidebar wrap-pic-w" href="#" data-lightbox="gallery-footer">
                <img src={RoomImage} alt="GALLERY" />
              </a>

              <a className="item-gallery-sidebar wrap-pic-w" href="#" data-lightbox="gallery-footer">
                <img src={RoomImage} alt="GALLERY" />
              </a>

              <a className="item-gallery-sidebar wrap-pic-w" href="#" data-lightbox="gallery-footer">
                <img src={RoomImage} alt="GALLERY" />
              </a>
            </div>
          </div>
        </aside>

        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>

        <FooterComponent />

        <div className="btn-back-to-top bg0-hov" id="myBtn">
          <span className="symbol-btn-back-to-top">
            <i className="fa fa-angle-double-up" aria-hidden="true"></i>
          </span>
	      </div>

      </div>
    );
  }
}
