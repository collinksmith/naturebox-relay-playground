import React from 'react';
import Relay from 'react-relay';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.product.name}</h1>
        <h2>Reviews:</h2>
        <ul>
          {this.props.product.reviews.map((review, idx) => {
            return (
              <li key={idx}>
                <h3>{review.title}</h3>
                <p><em>by {review.nickname}</em></p>
                <p>{review.detail}</p>
              </li>
            );
          })}
        </ul>
      </div>
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
