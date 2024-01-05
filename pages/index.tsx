import MainView from "@/components/MainView";

const Home = ({ text }: { text: TextProps }) => <MainView text={text} />;

Home.layoutProps = ({ text }: { text: TextProps }) => ({
  navbarText: text.navlinks,
});

import { getAllText } from "@/helpers/getText";

export async function getStaticProps() {
  const text = getAllText("TextContentEnglish");

  return { props: { text } };
}

export default Home;
