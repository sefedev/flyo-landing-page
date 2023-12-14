import About from "./ui/about";
import Features from "./ui/features";
import Footer from "./ui/footer";
import Header from "./ui/header";
import Hero from "./ui/hero";
import Testimony from "./ui/testimony";

const App = () => {
  return (
    <>
      <div className="px-4 text-white bg-bgMain lg:px-24">
        <Header />
        <Hero />
        <Features />
        <About />
        <Testimony />
      </div>
      <Footer />
    </>
  );
};

export default App;
