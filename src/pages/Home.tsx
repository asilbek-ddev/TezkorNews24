import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import NewsComponent from "../components/NewsComponent";
import SEO from "../components/SEO";

interface HomeProps {
  news?: {
    title: string;
    excerpt: string;
    slug: string;
  };
}

const Home: React.FC<HomeProps> = ({ news }) => {
  return (
    <>
      {/* // * SEO */}
      <SEO
        title={`${news?.title || "Tezkor News24"}`}
        description={
          news?.excerpt?.slice(0, 160) ||
          "Tezkor News24 - Eng so'nggi yangiliklar va maqolalar."
        }
        image={`/news/${news?.slug}`}
      />

      {/* // * Navbar */}
      <Navbar />

      {/* // * Main */}
      {/* <NewsComponent /> */}

      {/* // * Footer */}
      <Footer />
    </>
  );
};

export default Home;
