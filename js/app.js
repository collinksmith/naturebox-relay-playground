import 'babel-polyfill';

import App from './components/App';
import ProductRoute from './routes/ProductRoute';
import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';

var searchParams = new URLSearchParams(window.location.search.slice(1));
var productID = searchParams.get('id');
var productRoute = new ProductRoute({ productID: productID });

ReactDOM.render(
  <Relay.RootContainer
    Component={App}
    route={productRoute}
  />,
  document.getElementById('root')
);
