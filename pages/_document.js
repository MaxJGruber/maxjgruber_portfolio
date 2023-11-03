import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { GA_TRACKING_ID } from "root/config";

const Document = () => (
  <Html lang="en">
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="static/favicon.ico" />
      <meta name="theme-color" content="#000000" />
      <script
        type="text/javascript"
        async
        src="https://tenor.com/embed.js"
      ></script>
      {/* Global Site Tag - Google Analytics */}
      <Script
        async
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
        }}
      />
      {/* End of Global Site Tag - Google Analytics */}
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
