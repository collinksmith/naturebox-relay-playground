import Relay from 'react-relay';

export default class extends Relay.Route {
  static path = '/';
  static queries = {
    product: () => Relay.QL`query { product(id: "1325") }`,
  };
  static routeName = 'AppHomeRoute';
}
