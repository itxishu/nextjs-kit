// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { BOOTSTRAP } from '../consts';
import { Layout } from '../components';

class MallDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" type="text/css" href={BOOTSTRAP}></link>
          <link
            rel="shortcut icon"
            href="https://img..com/kkb_portal_icon.ico"
          />
        </Head>
        <body>
          <Layout>
            <Main />
          </Layout>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MallDocument;
