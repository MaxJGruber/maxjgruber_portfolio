import Head from "next/head";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { enableStaticRendering } from "mobx-react-lite";
import { DefaultSeo } from "next-seo";
import { TITLE, META_DESCRIPTION, META_IMAGE, URL } from "root/config";
import store from "stores/store";
import changeLanguage from "stores/languageContent";
import "styles/globals.css";

const App = ({ Component, pageProps }) => {
  if (typeof window === undefined) {
    enableStaticRendering(true);
  }
  // Remove the server-side injected CSS.
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  // eslint-disable-next-line
  const [content, setContent] = useState(null);
  useEffect(() => {
    store.subscribe(() => {
      store.getState();
      setContent(changeLanguage());
    }, []);
  });

  return (
    <div className="App">
      <Provider store={store}>
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
        <Component {...pageProps} />
      </Provider>
    </div>
  );
};

export default App;
