import Relay from 'react-relay';

export default class extends Relay.Route {
  static path = '/';
  static queries = {
    product: () => Relay.QL`query { product(id: $productID) }`,
  };
  static paramDefinitions = {
    productID: { required: true },
  };
  static routeName = 'ProductRoute';
}
