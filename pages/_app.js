import { useEffect } from "react";
import Head from "next/head";
import { Router } from "next/router";
import { DefaultSeo } from "next-seo";
import { TITLE, META_DESCRIPTION, META_IMAGE, URL } from "root/config";
import * as gtag from "helpers/gtag";
import "styles/globals.css";

import AppLayout from "@/layouts/AppLayout";

const App = ({ Component: NextPage, pageProps }) => {
  // Track pages with google analytics
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
  // End of track pages with google analytics

  const {
    Layout = ({ children, language }) => (
      <AppLayout language={language}>{children}</AppLayout>
    ),
    layoutProps = ({ language }) => ({ language }),
  } = NextPage;

  return (
    <div className="App">
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <DefaultSeo
        title={TITLE}
        description={META_DESCRIPTION}
        openGraph={{ url: URL, images: [{ url: META_IMAGE }] }}
        twitter={{ cardType: "summary_large_image" }}
      />
      <Layout {...layoutProps(pageProps)}>
        <NextPage {...pageProps} />
      </Layout>
    </div>
  );
};

export default App;
