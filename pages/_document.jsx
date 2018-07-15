import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

class MeDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAfwLzaN3c24vkmQQOB3NjeXeq9LLl77ko&v=3.exp" />
        </Head>
        <body style={{ 'font-family': '"Open Sans", sans-serif', margin: 0 }}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MeDocument;
