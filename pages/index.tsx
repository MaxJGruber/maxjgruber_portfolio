import MainView from "@/components/MainView";

const Home = ({ text }: { text: TextProps }) => <MainView text={text} />;

Home.layoutProps = ({ language }: { language: string }) => ({ language });

import { getAllText } from "@/helpers/getText";

export async function getStaticProps() {
  const text = getAllText("TextContentEnglish");

  return { props: { text, language: "en" } };
}

export default Home;
