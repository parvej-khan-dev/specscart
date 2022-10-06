import "./App.css";
import AfterHero from "./Component/AfterHero";
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import Review from "./Component/Review";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Hero />
      <AfterHero />
      <Review />
    </div>
  );
}

export default App;
