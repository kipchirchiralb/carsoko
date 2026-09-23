import "./App.css";
import ContactBanner from "./ContactBanner";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Nav from "./Nav";
import Slider from "./Slider";
import Search from "./Search";

function App() {
  return (
    <div className="app-shell">
      <ContactBanner />
      <Nav />
      <main>
        <Slider />
        <Search />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
