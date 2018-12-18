import React from 'react';
import PropTypes from 'prop-types';
import Store from '../store';

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return Store.initializeStore(initialState);
  }

  // Store in global variable if client
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Store.initializeStore(initialState);
  }
  return window[__NEXT_REDUX_STORE__];
}

export default function withReduxStore(App) {
  return class Redux extends React.Component {
    static propTypes = {
      initialReduxState: PropTypes.object.isRequired,
    };

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    static async getInitialProps(appContext) {
      const reduxStore = getOrCreateStore();

      // Provide the store to getInitialProps of pages
      const newAppContext = appContext;
      newAppContext.ctx.reduxStore = reduxStore;

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(newAppContext);
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState(),
      };
    }

    render() {
      return (<App {...this.props} reduxStore={this.reduxStore} />);
    }
  };
}
