import "./App.css";
import AfterHero from "./Component/AfterHero";
import Award from "./Component/Award";
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
    </div>
  );
}

export default App;
