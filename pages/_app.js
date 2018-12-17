import App, { Container } from 'next/app';
import React from 'react';
import Head from 'next/head';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const {
      Component, pageProps,
    } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>AZPay | Checkout</title>
        </Head>
        <Container>
          <Component {...pageProps} />
        </Container>
      </React.Fragment>
    );
  }
}

export default MyApp;
