import MainView from "@/components/MainView";
import AppLayout from "@/layouts/AppLayout";
import returnLanguageContent from "@/navbar/index";

const Home = ({ text }: { text: TextProps }) => <MainView text={text} />;

Home.Layout = AppLayout;
Home.layoutProps = ({ language }: { language: "en" | "fr" | "de" }) => ({
  navbarText: returnLanguageContent(language),
});

import { getAllText } from "@/helpers/getText";

export async function getStaticProps() {
  const text = getAllText("TextContentFrench");

  return { props: { text, language: "fr" } };
}

export default Home;
