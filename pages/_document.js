import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link
            rel="preload"
            href="/assets/fonts/georgia/georgia.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/assets/fonts/georgia/georgiab.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/assets/fonts/georgia/georgiai.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/assets/fonts/georgia/georgiaz.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/assets/fonts/Graphik/GraphikMediumItalic.otf"
            as="font"
            crossOrigin=""
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
