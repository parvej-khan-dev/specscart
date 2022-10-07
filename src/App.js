import "./App.css";
import AfterHero from "./Component/AfterHero";
import Award from "./Component/Award";
import Feed from "./Component/Feed";
import Footer from "./Component/Footer";
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import Products from "./Component/Products";
import Review from "./Component/Review";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Hero />
      <AfterHero />
      <Review />
      <Products />
      <Award />
      <Feed />
      <Footer />
    </div>
  );
}

export default App;
