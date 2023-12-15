import "./App.css";
import Shopblog from "./components/Contentcard/Shopblog";

import Imageplaceholder from "./components/Imageplaceholder";
import Navbar from "./components/Navbar";
import Shopbycategories from "./components/Shopbycategories";
import Trendingbrands from "./components/Trendingbrands";

function App() {
  return (
    <>
      <Navbar />
      <Imageplaceholder />
      <Trendingbrands />
      <Shopbycategories />
      <Shopblog />
    </>
  );
}

export default App;
