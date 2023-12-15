import "./App.css";
import Shopblog from "./components/Contentcard/Shopblog";

import Imageplaceholder from "./components/Imageplaceholder";
import Navbar from "./components/Navbar";
import Trendingbrands from "./components/Trendingbrands";

function App() {
  return (
    <>
      <Navbar />
      <Imageplaceholder />
      <Trendingbrands />
      <Shopblog />
    </>
  );
}

export default App;
