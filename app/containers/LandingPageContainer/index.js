/**
 *
 * LandingPageContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';

import SlidesComponent from '../../components/LandingPage/Slides';


export class LandingPageContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Hotel ERP</title>
          <meta name="description" content="Home page for Hotel ERP website" />
        </Helmet>

        <SlidesComponent />
      </div>
    );
  }
}

LandingPageContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(LandingPageContainer);
