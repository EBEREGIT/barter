import React from 'react';
import fetch from 'node-fetch';

class Home extends Component {
  state = {};
  static async getInitialProps() {
    const whatever = await fetch('ghjshhkjd');
    const whateverJson = whatever.json();
    return whateverJson;
  }
  render() {
    return (
      <div>
        <h3>Home Page</h3>
      </div>
    );
  }
}

export default Home;
