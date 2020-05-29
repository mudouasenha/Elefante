import App from "next/app";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <div>
        <Component {...pageProps} />
        <style jsx global>{`
          @font-face {
            font-family: "Georgia";
            src: url("/assets/fonts/georgia/georgia.ttf");
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "Georgia Bold";
            src: url("/assets/fonts/georgia/georgiab.ttf");
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "Georgia Italic";
            src: url("/assets/fonts/georgia/georgiai.ttf");
            font-weight: normal;
            font-style: italic;
            font-display: swap;
          }
          @font-face {
            font-family: "Georgia Z";
            src: url("/assets/fonts/georgia/georgiaz.ttf");
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "Graphik Black";
            src: url("/assets/fonts/Graphik/GraphikBlack.otf");
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "Graphik Black Italic";
            src: url("/assets/fonts/Graphik/GraphikBlackItalic.otf");
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "Graphik Bold";
            src: url("/assets/fonts/Graphik/GraphikBold.otf");
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "Graphik Bold Italic";
            src: url("/assets/fonts/Graphik/GraphikGRaphikBoldItalic.otf");
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "Graphik Extralight";
            src: url("/assets/fonts/Graphik/GraphikExtralight.otf");
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "Graphik Light";
            src: url("/assets/fonts/Graphik/GraphikLight.otf");
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "Graphik Light Italic";
            src: url("/assets/fonts/Graphik/GraphikLightItalic.otf");
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "Graphik Medium";
            src: url("/assets/fonts/Graphik/GraphikMedium.otf");
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "Graphik Medium Italic";
            src: url("/assets/fonts/Graphik/GraphikMediumItalic.otf");
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "Graphik Regular";
            src: url("/assets/fonts/Graphik/GraphikRegular.otf");
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "Graphik Regular Italic";
            src: url("/assets/fonts/Graphik/GraphikRegularItalic.otf");
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "Graphik Semibold";
            src: url("/assets/fonts/Graphik/GraphikSemibold.otf");
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "Graphik Semibold Italic";
            src: url("/assets/fonts/Graphik/GraphikSemiboldItalic.otf");
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "Graphik Super";
            src: url("/assets/fonts/Graphik/GraphikSuper.otf");
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "Graphik Super Italic";
            src: url("/assets/fonts/Graphik/GraphikSuperItalic.otf");
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "Graphik Thin";
            src: url("/assets/fonts/Graphik/GraphikThin.otf");
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "Graphik Thin Italic";
            src: url("/assets/fonts/Graphik/GraphikThinItalic.otf");
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
        `}</style>
      </div>
    );
  }
}

export default MyApp;
