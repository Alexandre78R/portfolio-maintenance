import { useLang } from "@/context/Lang/LangContext";
import Title from "@/components/Title/Title";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Seo from "@/components/Seo/Seo";

const Home: React.FC = (): React.ReactElement => {
  const { translations } = useLang();

  return (
    <>
      <Seo />
      <Header />
    </>
  );
};

export default Home;
