import React from 'react';
import Relay from 'react-relay';

class App extends React.Component {
  render() {
    return <div>Hello World!</div>;
  }
}

export default Relay.createContainer(App, {
  fragments: {
  },
});
