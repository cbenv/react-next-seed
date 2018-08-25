import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

class CustomDocument extends Document {
  static getInitialProps(context) {
    let pageContext;
    const page = context.renderPage((Component) => {
      const WrappedComponent = (props) => {
        pageContext = props.pageContext;
        return <Component {...props} />;
      };
      return WrappedComponent;
    });

    const styles = (
      <React.Fragment>
        <style
          id="server-side-style"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
        />
        { flush() || null }
      </React.Fragment>
    );

    return { ...page, pageContext, styles };
  }

  render() {
    const { pageContext } = this.props;
    return (
      <html lang="en" dir="ltr">
        <Head>
          <title>
            React Next Seed
          </title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
          <meta name="theme-color" context={pageContext.theme.palette.primary.main} />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        </Head>
        <body style={{ fontFamily: 'Roboto, sans-serif' }}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CustomDocument;
