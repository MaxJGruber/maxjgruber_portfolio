import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => <App {...props} />,
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charset="utf-8" />
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          {/*    
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    */}
          <script
            type="text/javascript"
            async
            src="https://tenor.com/embed.js"
          ></script>
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
