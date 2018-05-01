/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import 'sanitize.css/sanitize.css';

// Import root app
import App from 'containers/App';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// Load the favicon, the manifest.json file and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./manifest.json';
import 'file-loader?name=[name].[ext]!./.htaccess';

import '!file-loader?name=[name].[ext]!./externals/css/media-font.css';
import '!file-loader?name=[name].[ext]!./externals/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '!file-loader?name=[name].[ext]!./externals/fonts/themify/themify-icons.css';
import '!file-loader?name=[name].[ext]!./externals/vendor/bootstrap/css/bootstrap.min.css';
import '!file-loader?name=[name].[ext]!./externals/vendor/bootstrap/css/bootstrap.min.css.map';
import '!file-loader?name=[name].[ext]!./externals/vendor/animate/animate.css';
import '!file-loader?name=[name].[ext]!./externals/vendor/css-hamburgers/hamburgers.min.css';
import '!file-loader?name=[name].[ext]!./externals/vendor/animsition/css/animsition.min.css';
import '!file-loader?name=[name].[ext]!./externals/vendor/select2/select2.min.css';
import '!file-loader?name=[name].[ext]!./externals/vendor/daterangepicker/daterangepicker.css';
import '!file-loader?name=[name].[ext]!./externals/vendor/slick/slick.css';

import '!file-loader?name=[name].[ext]!./externals/fonts/themify/fonts/themify.eot';
import '!file-loader?name=[name].[ext]!./externals/fonts/themify/fonts/themify.woff';
import '!file-loader?name=[name].[ext]!./externals/fonts/themify/fonts/themify.ttf';
import '!file-loader?name=[name].[ext]!./externals/fonts/themify/fonts/themify.svg';

import '!file-loader?name=[name].[ext]!./externals/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.eot';
import '!file-loader?name=[name].[ext]!./externals/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.ttf';
import '!file-loader?name=[name].[ext]!./externals/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.woff';
import '!file-loader?name=[name].[ext]!./externals/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.woff2';
import '!file-loader?name=[name].[ext]!./externals/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg';

import 'file-loader?name=[name].[ext]!./externals/vendor/jquery/jquery-3.2.1.min';
import 'file-loader?name=[name].[ext]!./externals/vendor/animsition/js/animsition.min';
import 'file-loader?name=[name].[ext]!./externals/vendor/bootstrap/js/popper';
import 'file-loader?name=[name].[ext]!./externals/vendor/bootstrap/js/bootstrap.min';
import 'file-loader?name=[name].[ext]!./externals/vendor/select2/select2.min';
import 'file-loader?name=[name].[ext]!./externals/vendor/slick/slick.min';
import 'file-loader?name=[name].[ext]!./externals/vendor/countdowntime/countdowntime';
import 'file-loader?name=[name].[ext]!./externals/vendor/lightbox2/js/lightbox.min';
import 'file-loader?name=[name].[ext]!./externals/vendor/parallax100/parallax100';

/* eslint-enable import/no-unresolved, import/extensions */

import configureStore from './configureStore';

// Import i18n messages
import { translationMessages } from './i18n';

// Import CSS reset and Global Styles
import './global-styles';

// Create redux store with history
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const render = (messages) => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  (new Promise((resolve) => {
    resolve(import('intl'));
  }))
    .then(() => Promise.all([
      import('intl/locale-data/jsonp/en.js'),
    ]))
    .then(() => render(translationMessages))
    .catch((err) => {
      throw err;
    });
} else {
  render(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
