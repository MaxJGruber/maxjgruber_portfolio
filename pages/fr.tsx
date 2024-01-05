import MainView from "@/components/MainView";
import AppLayout from "@/layouts/AppLayout";

const Home = ({ text }: { text: TextProps }) => <MainView text={text} />;

Home.Layout = AppLayout;
Home.layoutProps = ({ text }: { text: TextProps }) => ({
  navbarText: text.navlinks,
});

import { getAllText } from "@/helpers/getText";

export async function getStaticProps() {
  const text = getAllText("TextContentFrench");

  return { props: { text } };
}

export default Home;
