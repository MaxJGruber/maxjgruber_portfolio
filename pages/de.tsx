import MainView from "@/components/MainView";

const Home = ({ text }: { text: TextProps }) => <MainView text={text} />;

import { getAllText } from "@/helpers/getText";

export async function getStaticProps() {
  const text = getAllText("TextContentGerman");

  return { props: { text, language: "de" } };
}

export default Home;
