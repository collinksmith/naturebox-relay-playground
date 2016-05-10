import React from 'react';
import Relay from 'react-relay';

class App extends React.Component {
  render() {
    return (
      <div>{this.props.product.name}</div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    product: () => Relay.QL`
      fragment on Product {
        name
        calories
        reviews {
          reviewId
          title
          detail
          nickname
          rating
        }
      }
    `,
  },
});
