import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { setConfiguration } from 'react-grid-system';
import moment from 'moment';
import Head from 'next/head';
import withReduxStore from '../lib/with-redux-store';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    // Setting moment locale
    moment.locale('pt');
    // Setting initial react-grid-system config
    setConfiguration({ gutterWidth: 17 });
  }

  render() {
    const {
      Component, pageProps,
      reduxStore,
    } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title> CHALLENGE TIME!!!!</title>
        </Head>
        <Provider store={reduxStore}>
          <Container>
            <Component {...pageProps} />
          </Container>
        </Provider>
      </React.Fragment>
    );
  }
}

export default withReduxStore(MyApp);
