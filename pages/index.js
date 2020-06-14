import React from 'react';
import fetch from 'node-fetch';
import Layout from '../components/Layout';
import { Container } from 'react-bootstrap/';
import PostsFeed from '../components/PostsFeed';

class HomePage extends React.Component {
  static async getInitialProps(ctx) {
    const items = await fetch('https://dog.ceo/api/breeds/list/all');
    const { message } = await items.json();

    return { hounds: message.hound };
  }

  render() {
    return (
      <Layout>
        <Container>
          <PostsFeed hounds={this.props.hounds} />
        </Container>
      </Layout>
    );
  }
}

export default HomePage;
