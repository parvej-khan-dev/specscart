import "./App.css";
import AfterHero from "./Component/AfterHero";
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Hero />
      <AfterHero />
    </div>
  );
}

export default App;
