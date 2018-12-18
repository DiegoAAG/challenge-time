import React from 'react';
import { NamespacesConsumer, loadNamespaces } from 'react-i18next';
import { getInitialProps, I18n } from '../i18n';

const withI18next = (namespaces = ['common']) => (ComposedComponent) => {
  const Extended = ({ ...rest }) => (
    <NamespacesConsumer
      i18n={I18n}
      ns={namespaces}
      wait={process.browser}
    >
      {t => <ComposedComponent t={t} {...rest} /> }
    </NamespacesConsumer>
  );

  Extended.getInitialProps = async (ctx) => {
    // Setting initial props as equal ComposedComponent initial props
    const composedInitialProps = ComposedComponent.getInitialProps
      ? await ComposedComponent.getInitialProps(ctx)
      : {};

    const i18nInitialProps = ctx.req
      ? getInitialProps(ctx.req, namespaces)
      : await loadNamespaces({
        components: [{ props: { namespaces } }],
        i18n: I18n,
      });

    return {
      ...composedInitialProps,
      ...i18nInitialProps,
    };
  };

  return Extended;
};

export default withI18next;
