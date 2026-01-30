import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";

const About = () => {
  return (
    <>
      <SEO
        title={"Sayt haqida | Tezkor News24"}
        description={"Tezkor News24 - Eng so'nggi yangiliklar va maqolalar."}
      />

      {/* // * Navbar */}
      <Navbar />

      {/* // * Footer */}
      <Footer />
    </>
  );
};

export default About;
