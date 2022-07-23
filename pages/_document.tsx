import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html className="dark">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&amp;display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
